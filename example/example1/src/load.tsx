import * as React from "react";
import { render } from "react-dom";

const { Box, Text } = require("../../../dist/bundle");

export class Load extends React.Component<any, any> {
  componentDidMount() {}
  render() {
    return (
      <Box>
        <Text
          x="100"
          y="100"
          text={"loading " + this.props.percent}
          color="#ffffff"
        />
      </Box>
    );
  }
}
