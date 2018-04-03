import * as React from "react";
import { render } from "react-dom";
import { Box, Text, Image, Button, Dialog } from "react-laya";
import { Loadable } from "../loadable";
import { Load } from "../load";

export type PopUIProps = {
  /** 隐藏 */
  hide?: () => void;
  /** 显示 */
  show?: () => void;
};
export class Pop extends React.Component<any, any> {
  componentDidMount() {}
  node: Laya.Dialog;
  hide = () => {
    this.node.close();
  };
  popUi: (props: PopUIProps) => any;
  render() {
    let Ui = this.popUi;
    return <Ui hide={this.hide} />;
  }
}
