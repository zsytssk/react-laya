import * as React from "react";
import { render } from "react-dom";

import {
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
} from "react-laya";

export type TestProps = {
  test: number;
};

export class Test extends React.Component<TestProps, any> {
  render() {
    return (
      <View width={600} height={400}>
        <Image
          x={0}
          y={0}
          skin="comp/bg.png"
          sizeGrid="30,4,4,4"
          width={600}
          height={400}
        />
        <Button
          x={41}
          y={56}
          skin="comp/button.png"
          label="点我赋值"
          width={150}
          height={37}
          sizeGrid="4,4,4,4"
        />
        <Clip x={401} y={56} skin="comp/clip_num.png" clipX={10} />
        <ComboBox
          x={220}
          y={143}
          skin="comp/combobox.png"
          labels="select1,select2,selecte3"
          selectedIndex={1}
          sizeGrid="4,20,4,4"
          width={200}
          height={23}
        />
        <Tab x={220} y={96} skin="comp/tab.png" labels="tab1,tab2,tab3" />
        <VScrollBar x={259} y={223} skin="comp/vscroll.png" height={150} />
        <VSlider x={224} y={223} skin="comp/vslider.png" height={150} />
        <List
          x={452}
          y={68}
          width={128}
          height={299}
          vScrollBarSkin="comp/vscroll.png"
          repeatX={1}
        >
          <Box name="render" x={0} y={0} width={112} height={30}>
            <Label
              text="this is a list"
              x={26}
              y={5}
              width={78}
              height={20}
              fontSize={14}
              name="label"
            />
            <Clip x={0} y={2} skin="comp/clip_num.png" clipX={10} name="clip" />
          </Box>
        </List>
        <Button x={563} y={4} skin="comp/btn_close.png" name="close" />
        <Button
          x={41}
          y={112}
          skin="comp/button.png"
          label="点我赋值"
          width={150}
          height={66}
          sizeGrid="4,4,4,4"
          labelSize={30}
          labelBold={true}
        />
        <CheckBox x={220} y={188} skin="comp/checkbox.png" label="checkBox1" />
        <RadioGroup
          x={220}
          y={61}
          skin="comp/radiogroup.png"
          labels="radio1,radio2,radio3"
        />
        <Panel
          x={299}
          y={223}
          width={127}
          height={150}
          vScrollBarSkin="comp/vscroll.png"
        >
          <Image skin="comp/image.png" />
        </Panel>
        <CheckBox
          x={326}
          y={188}
          skin="comp/checkbox.png"
          label="checkBox2"
          labelColors="#ff0000"
        />
        <Box x={41} y={197} width={150} height={174}>
          <ProgressBar
            y={70}
            skin="comp/progress.png"
            width={150}
            height={14}
            sizeGrid="4,4,4,4"
            name="progress"
          />
          <Label
            y={103}
            x={0}
            text={"This is a Label" + this.props.test}
            width={137}
            height={26}
            fontSize={20}
            name="label"
          />
          <TextInput
            x={0}
            y={148}
            skin="comp/textinput.png"
            text="textinput"
            width={150}
            name="input"
          />
          <HSlider skin="comp/hslider.png" width={150} name="slider" />
          <HScrollBar
            y={34}
            skin="comp/hscroll.png"
            width={150}
            name="scroll"
          />
        </Box>
      </View>
    );
  }
}
