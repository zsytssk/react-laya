import * as React from "react";

export interface LayaEventProps {
  onMouseOver?(evt: any): void;
  onMouseMove?(evt: any): void;
  onMouseOut?(evt: any): void;
  onMouseEnter?(evt: any): void;
  onMouseLeave?(evt: any): void;
  onMouseDown?(evt: any): void;
  onMouseUp?(evt: any): void;
  onWheel?(evt: any): void;
  onClick?(evt: any): void;
  onRightClick?(evt: any): void;
  onDoubleClick?(evt: any): void;
  onTouchStart?(evt: any): void;
  onTouchMove?(evt: any): void;
  onTouchEnd?(evt: any): void;
  onDragStart?(evt: any): void;
  onDragMove?(evt: any): void;
  onDragEnd?(evt: any): void;
  onDragEnd?(evt: any): void;
  onResize?(evt: any): void;
}

type PropsOfClass<T> = { [P in keyof T]?: T[P] };
type PropsExcept<T, U> = { [P in keyof T]?: T[P] } & { [P in keyof U]?: never };

/** Stage */
export class Stage extends React.Component<Konva.Stage, LayaEventProps> {
  getStage(): Laya.Stage;
}

declare class LayaNodeComponent<
  Node extends Laya.Node,
  Props = PropsOfClass<Laya.Node>
> extends React.Component<Props & LayaEventProps> {
  getPublicInstance(): Node;
}

// ui
export class View extends LayaNodeComponent<
  Laya.View,
  PropsOfClass<Laya.View>
> {}
export class ViewStact extends LayaNodeComponent<
  Laya.ViewStact,
  PropsOfClass<Laya.ViewStact>
> {}
export class Box extends LayaNodeComponent<Laya.Box, PropsOfClass<Laya.Box>> {}
export class HBox extends LayaNodeComponent<
  Laya.HBox,
  PropsOfClass<Laya.HBox>
> {}
export class VBox extends LayaNodeComponent<
  Laya.VBox,
  PropsOfClass<Laya.VBox>
> {}
export class Image extends LayaNodeComponent<
  Laya.Image,
  PropsOfClass<Laya.Image>
> {}
export class Button extends LayaNodeComponent<
  Laya.Button,
  PropsOfClass<Laya.Button>
> {}
export class Clip extends LayaNodeComponent<
  Laya.Clip,
  PropsOfClass<Laya.Clip>
> {}
export class ComboBox extends LayaNodeComponent<
  Laya.ComboBox,
  PropsOfClass<Laya.ComboBox>
> {}
export class Tab extends LayaNodeComponent<Laya.Tab, PropsOfClass<Laya.Tab>> {}
export class VScrollBar extends LayaNodeComponent<
  Laya.VScrollBar,
  PropsOfClass<Laya.VScrollBar>
> {}
export class HScrollBar extends LayaNodeComponent<
  Laya.HScrollBar,
  PropsOfClass<Laya.HScrollBar>
> {}
export class VSlider extends LayaNodeComponent<
  Laya.VSlider,
  PropsOfClass<Laya.VSlider>
> {}
export class HSlider extends LayaNodeComponent<
  Laya.HSlider,
  PropsOfClass<Laya.HSlider>
> {}
export class List extends LayaNodeComponent<
  Laya.List,
  PropsOfClass<Laya.List>
> {}
export class Label extends LayaNodeComponent<
  Laya.Label,
  PropsOfClass<Laya.Label>
> {}
export class CheckBox extends LayaNodeComponent<
  Laya.CheckBox,
  PropsOfClass<Laya.CheckBox>
> {}
export class Radio extends LayaNodeComponent<
  Laya.Radio,
  PropsOfClass<Laya.Radio>
> {}
export class RadioGroup extends LayaNodeComponent<
  Laya.RadioGroup,
  PropsOfClass<Laya.RadioGroup>
> {}
export class Panel extends LayaNodeComponent<
  Laya.Panel,
  PropsOfClass<Laya.Panel>
> {}
export class ProgressBar extends LayaNodeComponent<
  Laya.ProgressBar,
  PropsOfClass<Laya.ProgressBar>
> {}
export class TextInput extends LayaNodeComponent<
  Laya.TextInput,
  PropsOfClass<Laya.TextInput>
> {}
export class Text extends LayaNodeComponent<
  Laya.Text,
  PropsOfClass<Laya.Text>
> {}
export class Dialog extends LayaNodeComponent<
  Laya.Dialog,
  PropsOfClass<Laya.Dialog>
> {}
export class FontClip extends LayaNodeComponent<
  Laya.Dialog,
  PropsOfClass<Laya.FontClip>
> {}

// 2d
export class Sprite extends LayaNodeComponent<
  Laya.Sprite,
  PropsOfClass<Laya.Sprite>
> {}
export class TextArea extends LayaNodeComponent<
  Laya.TextArea,
  PropsOfClass<Laya.TextArea>
> {}
export class HTMLDivElement extends LayaNodeComponent<
  Laya.HTMLDivElement,
  PropsOfClass<Laya.HTMLDivElement>
> {}
export class Animation extends LayaNodeComponent<
  Laya.Animation,
  PropsOfClass<Laya.Animation>
> {}
export class Templet extends React.Component<PropsOfClass<Laya.Templet>> {}
export class Skeleton extends LayaNodeComponent<
  Laya.Skeleton,
  PropsOfClass<Laya.Skeleton>
> {}
