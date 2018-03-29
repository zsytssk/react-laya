import * as React from "react";
import { render } from "react-dom";
import * as Loadable from "react-loadable";

const { Box, Text, Image } = require("../../../dist/bundle");

// Laya.loader.load(
//   "res/atlas/comp.atlas",
//   Laya.Handler.create(null, () => {
//     this.setState({
//       img: "comp/image.png",
//       img2: "comp/bg.png",
//       button: "comp/button.png"
//     });
//   })
// );

type PageProps = {
  skin?: string;
  vskin?: string;
  rotate?: number;
  clickImage?: (any) => void;
};

export class Page extends React.Component<PageProps, any> {
  componentDidMount() {}
  render() {
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
