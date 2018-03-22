// import * as React from "react";
import * as React from "react";
import * as ReactDom from "react-dom";
import { ListModel, ItemModel } from "./model";

import { BaseComponent, BaseProps } from "./component/base";
import { Item } from "./item";
import { ListForm } from "./form";
const rootElement = document.getElementById("root");

interface Props extends BaseProps {
  model: ListModel;
}

type ListState = {
  num: number;
};

export class List extends BaseComponent<Props, ListState> {
  state = {
    num: this.props.model.list.length
  } as ListState;
  childs: Item[] = [];
  updateState = () => {
    this.setState({
      num: this.props.model.list.length
    });
  };
  setNode = node => {
    this.childs.push(node);
  };
  componentDidMount() {
    window.element = this;
    const model = this.props.model;
    this.listen(["addItem", "removeItem"], () => {
      this.updateState();
    });
  }

  render() {
    const model = this.props.model;
    return (
      <div>
        num: {this.state.num}
        <ListForm model={model} />
        <div className="list">
          {model.list.map(item => {
            return <Item key={item.id} model={item} parent={this} />;
          })}
        </div>
      </div>
    );
  }
}

let listModel = new ListModel();

const element = <List model={listModel} />;
ReactDom.render(element, rootElement);
