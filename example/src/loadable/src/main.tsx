import * as React from "react";
import { render } from "react-dom";
import { Stage } from "react-laya";
import { Load } from "./load";
import { Loadable } from "./loadable";
import { Test, TestProps } from "./test";

const TestLoadable = Loadable<TestProps>({
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
  loadingRender: state => {
    return <Load percent={state.percent} />;
  },
  render(props) {
    return <Test {...props} />;
  }
  // delay: 300
});

class App extends React.Component<any, any> {
  handleClick = () => {};
  render() {
    let state = this.state;
    return (
      <Stage onRightClick={this.handleClick}>
        <TestLoadable test={100} />
      </Stage>
    );
  }
}

Laya.init(600, 400, Laya.WebGL);
var renderelement = document.querySelector("#layaContainer div");
render(<App />, renderelement);
