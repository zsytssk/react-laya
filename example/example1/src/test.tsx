import * as React from "react";
import { render } from "react-dom";
import * as Loadable from "react-loadable";
import { Load } from "./load";

const {
  View,
  Button,
  Clip,
  ComboBox,
  Box,
  Text,
  Image,
  Tab,
  VScrollBar,
  VSlider,
  List,
  Label,
  CheckBox,
  RadioGroup,
  Panel,
  ProgressBar,
  TextInput,
  HSlider,
  HScrollBar
} = require("../../../dist/bundle");

export class Test extends React.Component<any, any> {
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
      <View width="600" height="400" sceneColor="#ffffff" editorInfo="compId=1">
        <Image
          x="0"
          y="0"
          skin="comp/bg.png"
          sizeGrid="30,4,4,4"
          width="600"
          height="400"
          editorInfo="compId=3"
        />
        <Button
          x="41"
          y="56"
          skin="comp/button.png"
          label="点我赋值"
          width="150"
          height="37"
          sizeGrid="4,4,4,4"
          var="btn"
          editorInfo="compId=2"
        />
        <Clip
          x="401"
          y="56"
          skin="comp/clip_num.png"
          clipX="10"
          var="clip"
          editorInfo="compId=4"
        />
        <ComboBox
          x="220"
          y="143"
          skin="comp/combobox.png"
          labels="select1,select2,selecte3"
          selectedIndex="1"
          sizeGrid="4,20,4,4"
          width="200"
          height="23"
          var="combobox"
          editorInfo="compId=5"
        />
        <Tab
          x="220"
          y="96"
          skin="comp/tab.png"
          labels="tab1,tab2,tab3"
          var="tab"
          editorInfo="compId=8"
        />
        <VScrollBar
          x="259"
          y="223"
          skin="comp/vscroll.png"
          height="150"
          editorInfo="compId=10"
        />
        <VSlider
          x="224"
          y="223"
          skin="comp/vslider.png"
          height="150"
          editorInfo="compId=11"
        />
        <List
          x="452"
          y="68"
          width="128"
          height="299"
          vScrollBarSkin="comp/vscroll.png"
          repeatX="1"
          var="list"
          editorInfo="compId=19"
        >
          <Box
            name="render"
            x="0"
            y="0"
            width="112"
            height="30"
            editorInfo="compId=30"
          >
            <Label
              skin="comp/label.png"
              text="this is a list"
              x="26"
              y="5"
              width="78"
              height="20"
              fontSize="14"
              name="label"
              editorInfo="compId=31"
            />
            <Clip
              x="0"
              y="2"
              skin="comp/clip_num.png"
              clipX="10"
              name="clip"
              editorInfo="compId=32"
            />
          </Box>
        </List>
        <Button
          x="563"
          y="4"
          skin="comp/btn_close.png"
          name="close"
          editorInfo="compId=20"
        />
        <Button
          x="41"
          y="112"
          skin="comp/button.png"
          label="点我赋值"
          width="150"
          height="66"
          sizeGrid="4,4,4,4"
          labelSize="30"
          labelBold="true"
          var="btn2"
          editorInfo="compId=21"
        />
        <CheckBox
          x="220"
          y="188"
          skin="comp/checkbox.png"
          label="checkBox1"
          var="check"
          editorInfo="compId=22"
        />
        <RadioGroup
          x="220"
          y="61"
          skin="comp/radiogroup.png"
          labels="radio1,radio2,radio3"
          var="radio"
          editorInfo="compId=27"
        />
        <Panel
          x="299"
          y="223"
          width="127"
          height="150"
          vScrollBarSkin="comp/vscroll.png"
          editorInfo="compId=33"
        >
          <Image skin="comp/image.png" editorInfo="compId=34" />
        </Panel>
        <CheckBox
          x="326"
          y="188"
          skin="comp/checkbox.png"
          label="checkBox2"
          labelColors="#ff0000"
          editorInfo="compId=35"
        />
        <Box
          x="41"
          y="197"
          var="box"
          width="150"
          height="174"
          editorInfo="compId=36"
        >
          <ProgressBar
            y="70"
            skin="comp/progress.png"
            width="150"
            height="14"
            sizeGrid="4,4,4,4"
            name="progress"
            editorInfo="compId=37"
          />
          <Label
            y={103}
            x={0}
            skin="comp/label.png"
            text="This is a Label"
            width="137"
            height="26"
            fontSize="20"
            name="label"
            editorInfo="compId=38"
          />
          <TextInput
            x={0}
            y={148}
            skin="comp/textinput.png"
            text="textinput"
            width="150"
            name="input"
            editorInfo="compId=39"
          />
          <HSlider
            skin="comp/hslider.png"
            width="150"
            name="slider"
            editorInfo="compId=40"
          />
          <HScrollBar
            y="34"
            skin="comp/hscroll.png"
            width="150"
            name="scroll"
            editorInfo="compId=41"
          />
        </Box>
      </View>
    );
  }
}
