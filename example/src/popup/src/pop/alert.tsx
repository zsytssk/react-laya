import * as React from "react";
import { render } from "react-dom";
import { Box, Text, Image, Button, Dialog } from "react-laya";
import { Loadable } from "../loadable";
import { Load } from "../load";
import { Pop, PopUIProps } from "./common";

type AlertProps = {
  x?: number;
  y?: number;
  is_show?: boolean;
  name: string;
  showPop: () => void;
  hidePop: () => void;
};

export class Alert extends Pop<AlertProps> {
  componentDidMount() {
    if (this.props.is_show) {
      this.show();
    }
  }
  popUi = (props: PopUIProps) => {
    return (
      <Dialog
        x={this.props.x}
        y={this.props.y}
        ref={node => (this.node = node as any)}
        visible={this.props.is_show}
      >
        <Image
          width={258}
          skin="comp/bg.png"
          height={184}
          x={0}
          y={0}
          sizeGrid="30,10,6,8"
        />
        <Button
          skin="comp/btn_close.png"
          x={224}
          y={3}
          onClick={this.props.hidePop}
        />
        <Text
          text={`hello world ${this.props.name}`}
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

export const AlertLoadable = Loadable<AlertProps>({
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
