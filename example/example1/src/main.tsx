import * as React from "react";
import { render } from "react-dom";
const { Stage, Box, Text, Image } = require("../../../dist/bundle");

console.log(process.env.NODE_ENV);
class App extends React.Component<any, any> {
  state = {
    text: "default",
    img: "",
    img2: "",
    rotate: 0,
    button: ""
  };
  interval: any;
  handleClick = () => {
    this.setState({
      text: "hello world"
    });
  };
  clickImage = event => {
    event.stopPropagation();
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.setState({
        rotate: this.state.rotate + 10
      });
    }, 16);
  };
  text: any;
  componentDidMount() {
    Laya.loader.load(
      "res/atlas/comp.atlas",
      Laya.Handler.create(null, () => {
        this.setState({
          img: "comp/image.png",
          img2: "comp/bg.png",
          button: "comp/button.png"
        });
      })
    );
  }
  render() {
    let state = this.state;
    return (
      <Stage onRightClick={this.handleClick}>
        <Text text={this.state.text} color="#ffffff" />
        <Test
          skin={this.state.img}
          vskin={this.state.img2}
          clickImage={this.clickImage}
          rotate={this.state.rotate}
        />
      </Stage>
    );
  }
}

type TestProps = {
  skin?: string;
  vskin?: string;
  rotate?: number;
  clickImage?: (any) => void;
};

class Test extends React.Component<TestProps, any> {
  componentDidMount() {}
  render() {
    return (
      <Box>
        <Image
          sizeGrid="31,9,9,9"
          skin={this.props.vskin}
          x={169}
          y={101}
          anchorX={0.5}
          anchorY={0.5}
          width={258}
          height={184}
        />
        <Image
          x={200}
          y={200}
          anchorX={0.5}
          anchorY={0.5}
          skin={this.props.skin}
          rotation={this.props.rotate}
          onClick={this.props.clickImage}
        />
      </Box>
    );
  }
}

Laya.init(500, 300, Laya.WebGL);
var renderelement = document.querySelector("#layaContainer div");
let app = <App />;
render(app, renderelement);
