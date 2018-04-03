import * as React from "react";
import { render } from "react-dom";
import { Box, Text, Image, Button, Dialog } from "react-laya";
import { Loadable } from "../loadable";
import { Load } from "../load";
import { Pop, PopUIProps } from "./common";

export class Alert extends Pop {
  componentDidMount() {}
  popUi = (props: PopUIProps) => {
    return (
      <Dialog x={143} y={86} ref={node => (this.node = node as any)}>
        <Image
          width={258}
          skin="comp/bg.png"
          height={184}
          x={0}
          y={0}
          sizeGrid="30,10,6,8"
        />
        <Button skin="comp/btn_close.png" x={224} y={3} onClick={props.hide} />
        <Text
          text="hello world!"
          x={44}
          y={69}
          width={156}
          height={44}
          align="center"
          valign="middle"
          color="#000000"
          fontSize={24}
        />
      </Dialog>
    );
  };
}

export const AlertLoadable = Loadable({
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
    return <Alert {...props} />;
  },
  delay: 300
});
