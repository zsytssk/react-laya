/**
 * Based on ReactLaya.js
 * Copyright (c) 2017-present Lavrenov Anton.
 * All rights reserved.
 *
 * MIT
 */
"use strict";

const invariant = require("fbjs/lib/invariant");
const emptyObject = require("fbjs/lib/emptyObject");
const React = require("react");
const ReactFiberReconciler = require("react-reconciler");
const ReactDOMFrameScheduling = require("./ReactDOMFrameScheduling");
const ReactDOMComponentTree = require("./ReactDOMComponentTree");
const TYPES = require("./types");

const { Component } = React;

var propsToSkip = { children: true, ref: true, key: true, style: true };

function applyNodeProps(instance, props, oldProps = {}) {
  var updatedProps = {};
  var hasUpdates = false;
  for (var key in oldProps) {
    if (propsToSkip[key]) {
      continue;
    }
    var isEvent = key.slice(0, 2) === "on";
    var propChanged = oldProps[key] !== props[key];
    if (isEvent && propChanged) {
      var eventName = key.substr(2).toLowerCase();
      if (eventName.substr(0, 7) === "content") {
        eventName =
          "content" +
          eventName.substr(7, 1).toUpperCase() +
          eventName.substr(8);
      }
      instance.off(eventName, instance, oldProps[key]);
    }
    var toRemove = !props.hasOwnProperty(key);
    if (toRemove) {
      instance[key] = undefined;
    }
  }
  for (var key in props) {
    if (propsToSkip[key]) {
      continue;
    }
    var isEvent = key.slice(0, 2) === "on";
    var toAdd = oldProps[key] !== props[key];
    if (isEvent && toAdd) {
      var eventName = key.substr(2).toLowerCase();
      if (eventName.substr(0, 7) === "content") {
        eventName =
          "content" +
          eventName.substr(7, 1).toUpperCase() +
          eventName.substr(8);
      }
      if (props[key]) {
        instance.on(eventName, instance, props[key]);
      }
    }
    if (
      !isEvent &&
      (props[key] !== oldProps[key] || props[key] !== instance[key])
    ) {
      hasUpdates = true;
      updatedProps[key] = props[key];
    }
  }

  if (hasUpdates) {
    setAttrs(instance, updatedProps);
  }
}

function setAttrs(instance, props) {
  for (let key in props) {
    instance[key] = props[key];
  }
}

class Stage extends Component {
  componentDidMount() {
    this._stage = Laya.stage;
    applyNodeProps(this._stage, this.props);

    this._mountNode = LayaRenderer.createContainer(this._stage);
    LayaRenderer.updateContainer(this.props.children, this._mountNode, this);
  }

  componentDidUpdate(prevProps, prevState) {
    const props = this.props;

    applyNodeProps(this._stage, this.props, prevProps);
    LayaRenderer.updateContainer(this.props.children, this._mountNode, this);
  }

  componentWillUnmount() {
    LayaRenderer.updateContainer(null, this._mountNode, this);
    this._stage.destroy();
  }

  getStage() {
    return this._stage;
  }

  render() {
    const props = this.props;

    return "";
  }
}

const UPDATE_SIGNAL = {};

const LayaRenderer = ReactFiberReconciler({
  appendInitialChild(parentInstance, child) {
    if (typeof child === "string") {
      // Noop for string children of Text (eg <Text>{'foo'}{'bar'}</Text>)
      invariant(
        false,
        'Don not use plain text as child of Laya.Node. You are using text: "%s"',
        child
      );
      return;
    }

    parentInstance.addChild(child);
  },

  createInstance(type, props, internalInstanceHandle) {
    const NodeClass = Laya[type];
    if (!NodeClass) {
      invariant(instance, 'ReactLaya does not support the type "%s"', type);
      return;
    }

    const instance = new NodeClass();
    applyNodeProps(instance, props);

    return instance;
  },

  createTextInstance(text, rootContainerInstance, internalInstanceHandle) {
    invariant(false, "Text components are not supported for now in ReactLaya.");
  },

  finalizeInitialChildren(domElement, type, props) {
    return false;
  },

  getPublicInstance(instance) {
    return instance;
  },

  prepareForCommit() {
    // Noop
  },

  prepareUpdate(domElement, type, oldProps, newProps) {
    return UPDATE_SIGNAL;
  },

  resetAfterCommit() {
    // Noop
  },

  resetTextContent(domElement) {
    // Noop
  },

  shouldDeprioritizeSubtree(type, props) {
    return false;
  },

  getRootHostContext() {
    return emptyObject;
  },

  getChildHostContext() {
    return emptyObject;
  },

  scheduleDeferredCallback: ReactDOMFrameScheduling.rIC,

  shouldSetTextContent(type, props) {
    return false;
  },

  now: ReactDOMFrameScheduling.now,

  useSyncScheduling: true,

  mutation: {
    appendChild(parentInstance, child) {
      if (child.parent === parentInstance) {
        return;
      }
      parentInstance.addChild(child);
    },

    appendChildToContainer(parentInstance, child) {
      if (child.parent === parentInstance) {
        return;
      }
      parentInstance.addChild(child);
    },

    insertBefore(parentInstance, child, beforeChild) {
      invariant(
        child !== beforeChild,
        "ReactLaya: Can not insert node before itself"
      );

      for (let i = 0; i < parentInstance.numChildren; i++) {
        if (parentInstance.getChildAt(i) == beforeChild) {
          parentInstance.addChildAt(child, i + 1);
          return;
        }
      }
    },

    insertInContainerBefore(parentInstance, child, beforeChild) {
      invariant(
        child !== beforeChild,
        "ReactLaya: Can not insert node before itself"
      );
      for (let i = 0; i < parentInstance.numChildren; i++) {
        if (parentInstance.getChildAt(i) == beforeChild) {
          parentInstance.addChildAt(child, i + 1);
          return;
        }
      }
    },

    removeChild(parentInstance, child) {
      child.destroy();
    },

    removeChildFromContainer(parentInstance, child) {
      child.destroy();
    },

    commitTextUpdate(textInstance, oldText, newText) {
      invariant(false, "Text components are not yet supported in ReactLaya.");
    },

    commitMount(instance, type, newProps) {
      // Noop
    },

    commitUpdate(
      instance,
      updatePayload,
      type,
      oldProps,
      newProps,
      fiberInstance
    ) {
      applyNodeProps(instance, newProps, oldProps);
    }
  }
});

const foundDevTools = LayaRenderer.injectIntoDevTools({
  findFiberByHostInstance: ReactDOMComponentTree.getClosestInstanceFromNode,
  bundleType: process.env.NODE_ENV !== "production" ? 1 : 0,
  version: React.version || 16,
  rendererPackageName: "react-Laya",
  getInspectorDataForViewTag: (...args) => {
    console.log(args);
  }
});

/** API */
module.exports = Object.assign({}, TYPES, { Stage });
