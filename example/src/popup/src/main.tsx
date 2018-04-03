import * as React from "react";
import { render } from "react-dom";
import { Router, Route, Switch, Redirect, HashRouter } from "react-router-dom";
import { Stage } from "react-laya";
import { Load } from "./load";
import { PopManager } from "./pop/manager";

class App extends React.Component<any, any> {
  handleClick = () => {};
  render() {
    let state = this.state;
    return (
      <Stage onRightClick={this.handleClick}>
        <PopManager />
      </Stage>
    );
  }
}

Laya.init(600, 400, Laya.WebGL);
var renderelement = document.querySelector("#layaContainer div");
render(<App />, renderelement);
