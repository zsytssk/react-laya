import * as React from "react";
import { render } from "react-dom";
import * as Loadable from "react-loadable";
import { Router, Route, Switch } from "react-router";
import { createHashHistory } from "history";
import { Page } from "./page";
import { Load } from "./load";
import { Test } from "./test";
const { Stage } = require("../../../dist/bundle");

class App extends React.Component<any, any> {
  handleClick = () => {};
  render() {
    let state = this.state;
    return (
      <Stage onRightClick={this.handleClick}>
        <Router history={createHashHistory()}>
          <Switch>
            <Route path="/load" component={Load} />
            <Route exact path="/page" component={Page} />
            <Route exact path="/test" component={Test} />
          </Switch>
        </Router>
      </Stage>
    );
  }
}

Laya.init(600, 400, Laya.WebGL);
var renderelement = document.querySelector("#layaContainer div");
render(<App />, renderelement);
