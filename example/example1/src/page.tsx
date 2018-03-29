import * as React from "react";
import { render } from "react-dom";
import * as Loadable from "react-loadable";
import { Load } from "./load";

const { Box, Text, Image } = require("../../../dist/bundle");

type PageProps = {
  skin?: string;
  vskin?: string;
  rotate?: number;
  clickImage?: (any) => void;
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
        <Image x={200} y={200} anchorX={0.5} anchorY={0.5} skin="comp/bg.png" />
      </Box>
    );
  }
}

// export const LoadableComponent = Loadable({
//   loader: () => Page,
//   loading: Load
// });
