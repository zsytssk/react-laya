import * as React from "react";
import { render } from "react-dom";
import { Clip, Sprite } from "../react-laya";

let tt: Laya.Clip;
let a = <Clip ref={node => (tt = node.getPublicInstance())} />;

function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n]);
}

class Model {
  public id: string;
  public createdAt: Date;
  public lastModified: Date;
  version: number;
  private transient: Object;
}
enum Type {
  string,
  number,
  date
  // ...
}

type Schema<T extends Model> = { [P in keyof T]: Type };

let schema: Schema<Model> = {
  id: Type.string,
  createdAt: Type.date,
  lastModified: Type.date,
  version: Type.number
};
