import * as React from "react";
import { render } from "react-dom";
import { Box, Text, Image, Button, Dialog } from "react-laya";
import { Loadable } from "../loadable";
import { Load } from "../load";

export type PopUIProps = {
  is_show: boolean;
};

export class Pop<P> extends React.Component<P & PopUIProps, any> {
  componentDidUpdate() {
    if (this.props.is_show) {
      this.show();
    } else {
      this.hide();
    }
  }
  node: Laya.Dialog;
  hide = () => {
    if (!this.node) {
      return;
    }
    this.node.close();
  };
  show = () => {
    if (!this.node) {
      return;
    }
    this.node.popup();
  };
  popUi: (props: PopUIProps) => any;
  render() {
    let Ui = this.popUi;

    return <Ui />;
  }
}
