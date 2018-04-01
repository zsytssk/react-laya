import * as React from "react";
import { render } from "react-dom";
import { Router, Route, Switch, Redirect, HashRouter } from "react-router-dom";
import { Stage } from "react-laya";
import { Page } from "./page";
import { Load } from "./load";
import { Test } from "./test";

class App extends React.Component<any, any> {
  handleClick = () => {};
  render() {
    let state = this.state;
    return (
      <Stage onRightClick={this.handleClick}>
        <HashRouter>
          <Switch>
            <Route path="/load" component={Load} />
            <Route path="/page" component={Page} />
            <Route path="/test" component={Test} />
            <Redirect path="*" to="/load" />
          </Switch>
        </HashRouter>
      </Stage>
    );
  }
}

Laya.init(600, 400, Laya.WebGL);
var renderelement = document.querySelector("#layaContainer div");
render(<App />, renderelement);
