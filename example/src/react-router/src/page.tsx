import * as React from "react";
import { render } from "react-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import { Box, Text, Image } from "react-laya";
import { Load } from "./load";

type PageProps = {
  skin?: string;
  vskin?: string;
  rotate?: number;
  clickImage?: (any) => void;
  match: any;
};

export class Page extends React.Component<PageProps, any> {
  state = {
    loaded: false,
    percent: 0
  };
  componentDidMount() {
    Laya.loader.load(
      "res/atlas/comp.atlas",
      Laya.Handler.create(null, () => {
        this.setState({ loaded: true });
      }),
      Laya.Handler.create(null, percent => {
        this.setState({ percent });
      })
    );
  }
  render() {
    let loaded = this.state.loaded;
    console.log(this.props.match);
    if (!loaded) {
      return <Load percent={this.state.percent} />;
    }
    return (
      <Box>
        <Image
          sizeGrid="31,9,9,9"
          skin="comp/image.png"
          x={169}
          y={101}
          anchorX={0.5}
          anchorY={0.5}
          width={258}
          height={184}
        />
        <Switch>
          <Route path={`${this.props.match.path}/one`} component={ComOne} />
          <Route path={`${this.props.match.path}/two`} component={ComTwo} />
          <Route exact path={`${this.props.match.path}`} />
          <Redirect path="*" to="/load" />
        </Switch>
      </Box>
    );
  }
}

function ComOne() {
  return (
    <Image x={200} y={200} anchorX={0.5} anchorY={0.5} skin="comp/bg.png">
      <Text text="1" fontSize={50} x={35} y={20} />
    </Image>
  );
}
function ComTwo() {
  return (
    <Image x={200} y={200} anchorX={0.5} anchorY={0.5} skin="comp/bg.png">
      <Text text="2" fontSize={50} x={35} y={20} />
    </Image>
  );
}
