import * as React from "react";
import { render } from "react-dom";
import { Stage } from "react-laya";
import { Test } from "./test";

class App extends React.Component<any, any> {
  handleClick = () => {};
  render() {
    let state = this.state;
    return (
      <Stage onRightClick={this.handleClick}>
        <Test />
      </Stage>
    );
  }
}

Laya.init(600, 400, Laya.WebGL);
var renderelement = document.querySelector("#layaContainer div");
render(<App />, renderelement);
