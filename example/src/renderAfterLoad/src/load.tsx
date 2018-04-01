import * as React from "react";
import { render } from "react-dom";
import { Box, Text } from "react-laya";

export class Load extends React.Component<any, any> {
  componentDidMount() {}
  render() {
    return (
      <Box>
        <Text
          x={100}
          y={100}
          text={"loading " + this.props.percent}
          color="#ffffff"
          fontSize={50}
        />
      </Box>
    );
  }
}
