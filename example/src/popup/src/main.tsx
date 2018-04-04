import * as React from "react";
import { render } from "react-dom";
import { Router, Route, Switch, Redirect, HashRouter } from "react-router-dom";
import { Stage, Button, Box } from "react-laya";
import { Load } from "./load";
import { Loadable } from "./loadable";
import { PopManager } from "./pop/manager";

type AppState = {
  show_pops: string[];
};
class App extends React.Component<any, any> {
  state = {
    show_pops: []
  };
  handleClick = () => {
    console.log(this);
  };
  showPop = name => {
    if (this.state.show_pops.indexOf(name) != -1) {
      return;
    }
    this.setState({
      show_pops: [name, ...this.state.show_pops]
    });
  };
  hidePop = name => {
    this.setState({
      show_pops: this.state.show_pops.filter(item => item != name)
    });
  };
  render() {
    let state = this.state;
    return (
      <Stage onRightClick={this.handleClick}>
        <PopManager
          show_pops={this.state.show_pops}
          showPop={this.showPop}
          hidePop={this.hidePop}
        />
        <Buttons showPop={this.showPop} />
      </Stage>
    );
  }
}

export const Buttons = Loadable<any>({
  loader: setState => {
    Laya.loader.load(
      "res/atlas/comp.atlas",
      Laya.Handler.create(null, () => {
        setState({ loaded: true });
      }),
      Laya.Handler.create(null, (percent: number) => {
        setState({ percent });
      })
    );
  },
  render(props) {
    return (
      <Box>
        <Button
          skin="comp/button.png"
          label="alert1"
          x={39}
          y={248}
          name="alert1"
          onClick={() => {
            props.showPop("alert1");
          }}
        />
        <Button
          skin="comp/button.png"
          label="alert2"
          x={145}
          y={248}
          name="alert2"
          onClick={() => {
            props.showPop("alert2");
          }}
        />
      </Box>
    );
  },
  delay: 300
});

Laya.init(600, 400, Laya.WebGL);
var renderelement = document.querySelector("#layaContainer div");
render(<App />, renderelement);
