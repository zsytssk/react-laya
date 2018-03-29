import * as React from "react";
import { render } from "react-dom";
import * as Loadable from "react-loadable";
import { Router, Route, Switch } from "react-router";
import { createHashHistory } from "history";
import { Page } from "./page";
import { Load } from "./load";
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
          </Switch>
        </Router>
      </Stage>
    );
  }
}

Laya.init(500, 300, Laya.WebGL);
var renderelement = document.querySelector("#layaContainer div");
render(<App />, renderelement);
