# install

`npm install react-laya -save`

# example

```tsx
import * as React from "react";
import { render } from "react-dom";
import { Stage, Text, Image } from "react-laya";

class App extends React.Component<any, any> {
  state = {
    text: "default",
    img: "",
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
          button: "comp/button.png"
        });
      })
    );
  }
  render() {
    let state = this.state;
    return (
      <Stage width="500" height="500" onClick={this.handleClick}>
        <Test
          ref={node => console.log(node)}
          skin={this.state.img}
          clickImage={this.clickImage}
          rotate={this.state.rotate}
        />
      </Stage>
    );
  }
}

type TestProps = {
  skin: string;
  rotate?: number;
  clickImage?: (any) => void;
};
class Test extends React.Component<TestProps, any> {
  componentDidMount() {}
  render() {
    return (
      <Image
        ref={node => console.log(node as Image)}
        x={200}
        y={200}
        anchorX={0.5}
        anchorY={0.5}
        skin={this.props.skin}
        rotation={this.props.rotate}
        onClick={this.props.clickImage}
      />
    );
  }
}

var renderelement = document.getElementById("Laya");
let app = <App />;
render(app, renderelement);
```

# inspiration

copy most code copy from [react-konva](https://github.com/lavrton/react-konva)
