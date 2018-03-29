import * as React from "react";
import { render } from "react-dom";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
import { Page } from "./page";
const { Stage } = require("../../../dist/bundle");

class App extends React.Component<any, any> {
  handleClick = () => {};
  render() {
    let state = this.state;
    return (
      <Stage onRightClick={this.handleClick}>
        <Page />
      </Stage>
    );
  }
}

Laya.init(500, 300, Laya.WebGL);
var renderelement = document.querySelector("#layaContainer div");
let app = <App />;
render(
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App} />
  </Router>,
  renderelement
);
