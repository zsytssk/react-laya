import * as React from "react";
import { render } from "react-dom";
import { Stage } from "react-laya";
import * as Loadable from "react-loadable";
import { Load } from "./load";
import { Test } from "./test";

const TestLoadable = Loadable({
  loader: () => import("./test"),
  loading: props => {
    console.log(props);
    if (props.pastDelay) {
      return <Load />;
    }
    return null;
  },
  render(loaded, props) {
    console.log(loaded, props);
    let Component = loaded.Test;
    return <Component {...props} />;
  }
});

class App extends React.Component<any, any> {
  handleClick = () => {};
  render() {
    let state = this.state;
    return (
      <Stage onRightClick={this.handleClick}>
        <TestLoadable test={1} />
      </Stage>
    );
  }
}

Laya.init(600, 400, Laya.WebGL);
var renderelement = document.querySelector("#layaContainer div");
render(<App />, renderelement);
