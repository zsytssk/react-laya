import * as React from "react";
import { render } from "react-dom";
import { Box, Text } from "react-laya";
import { AlertLoadable } from "./alert";

export class PopManager extends React.Component<any, any> {
  componentDidMount() {}
  render() {
    return (
      <Box>
        <AlertLoadable />
      </Box>
    );
  }
}
