import * as React from "react";
import { render } from "react-dom";
import { Box, Text } from "react-laya";
import { AlertLoadable } from "./alert";

export class PopManager extends React.Component<any, any> {
  componentDidMount() {}
  showPop() {}
  render() {
    let show_pops = this.props.show_pops;
    let is_show_alert1 = show_pops.indexOf("alert1") != -1;
    let is_show_alert2 = show_pops.indexOf("alert2") != -1;
    return (
      <Box>
        <AlertLoadable
          x={143}
          y={86}
          name="alert1"
          is_show={is_show_alert1}
          showPop={this.props.showPop}
          hidePop={() => {
            this.props.hidePop("alert1");
          }}
        />
        <AlertLoadable
          x={200}
          y={86}
          name="alert2"
          is_show={is_show_alert2}
          showPop={this.props.showPop}
          hidePop={() => {
            this.props.hidePop("alert2");
          }}
        />
      </Box>
    );
  }
}
