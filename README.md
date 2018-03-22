# install

`npm install react-laya -save`

# example

[completecode](https://github.com/zsytssk/react-laya/tree/master/example/example1)

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
      <Stage ref={node => console.log(node)} onRightClick={this.handleClick}>
        <Text text={this.state.text} color="#ffffff" />
        <Test
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
        ref={node => console.log(node)}
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

Laya.init(500, 300);
var renderelement = document.querySelector("#layaContainer div");
let app = <App />;
render(app, renderelement);
```

# inspiration

* [react-konva](https://github.com/lavrton/react-konva)
