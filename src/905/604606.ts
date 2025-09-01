import { memo } from "react";
import { xb } from "../figma_app/465776";
import { jsx } from "react/jsx-runtime";
import { p as _$$p } from "../905/730229";
import { X } from "../905/737763";
import { $ } from "../905/953280";
import { c as _$$c } from "../905/535130";
import { O } from "../905/599243";
import { E } from "../905/500201";
import { G } from "../905/865520";
import { rXF } from "../figma_app/763686";
import { t as _$$t } from "../905/303541";
import { A as _$$A } from "../svg/82167";
import { A as _$$A2 } from "../svg/575532";
import { A as _$$A3 } from "../svg/884504";
import { A as _$$A4 } from "../svg/980021";
import { A as _$$A5 } from "../svg/911168";
import { A as _$$A6 } from "../svg/613757";
import { A as _$$A7 } from "../svg/844984";
import { A as _$$A8 } from "../svg/619541";
let a = memo(function (e) {
  return jsx("svg", {
    width: "16",
    height: "16",
    fill: "none",
    viewBox: "0 0 16 16",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M11.5 13a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13zm-7-1a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5zm4-2a.5.5 0 0 0 0-1V7H9a.5.5 0 0 0 1 0v-.5a.5.5 0 0 0-.4-.49L9.5 6h-3a.5.5 0 0 0-.49.4L6 6.5V7a.5.5 0 0 0 1 0h.5v2a.5.5 0 0 0 0 1z"
    })
  });
});
export function $$E1(e, t) {
  switch (e) {
    case rXF.STRING:
    case "STRING":
      return {
        name: _$$t("variables.type.string"),
        iconUI2: _$$A7,
        IconUI3: t ? a : _$$p
      };
    case rXF.BOOLEAN:
    case "BOOLEAN":
      return {
        name: _$$t("variables.type.boolean"),
        iconUI2: _$$A,
        IconUI3: t ? X : $
      };
    case rXF.FLOAT:
    case "FLOAT":
      return {
        name: _$$t("variables.type.number"),
        iconUI2: _$$A5,
        IconUI3: t ? _$$c : O
      };
    case rXF.COLOR:
    case "COLOR":
      return {
        name: _$$t("variables.type.color"),
        iconUI2: _$$A3,
        IconUI3: t ? E : G
      };
    case rXF.MAP:
    case "MAP":
      console.error("Unexpected variable type shown: MAP");
      return {
        name: _$$t("variables.type.map"),
        iconUI2: _$$A,
        IconUI3: X
      };
    case rXF.SYMBOL_ID:
    case "SYMBOL_ID":
      console.error("Unexpected variable type shown: SYMBOL_ID");
      return {
        name: _$$t("variables.type.symbolid"),
        iconUI2: _$$A,
        IconUI3: X
      };
    case rXF.FONT_STYLE:
    case "FONT_STYLE":
      console.error("Unexpected variable type shown: FONT_STYLE");
      return {
        name: _$$t("variables.type.font_style"),
        iconUI2: _$$A,
        IconUI3: X
      };
    case rXF.TEXT_DATA:
    case "TEXT_DATA":
      console.error("Unexpected variable type shown: TEXT_DATA");
      return {
        name: _$$t("variables.type.text_data"),
        iconUI2: _$$A7,
        IconUI3: a
      };
    case rXF.IMAGE:
    case "IMAGE":
      console.error("Unexpected variable type shown: IMAGE");
      return {
        name: _$$t("variables.type.map"),
        iconUI2: _$$A,
        IconUI3: X
      };
    case rXF.LINK:
    case "LINK":
      console.error("Unexpected variable type shown: LINK");
      return {
        name: _$$t("variables.type.map"),
        iconUI2: _$$A,
        IconUI3: X
      };
    case rXF.JS_RUNTIME_ALIAS:
    case "JS_RUNTIME_ALIAS":
      console.error("Unexpected variable type shown: JS_RUNTIME_ALIAS");
      return {
        name: _$$t("variables.type.map"),
        iconUI2: _$$A,
        IconUI3: X
      };
    case "SLOT_CONTENT_ID":
    case rXF.SLOT_CONTENT_ID:
      console.error("Unexpected variable type shown: SLOT_CONTENT_ID");
      return {
        name: _$$t("variables.type.map"),
        iconUI2: _$$A,
        IconUI3: X
      };
    default:
      xb(e, "Unknown VariableResolvedDataType");
  }
}
export function $$x0(e) {
  switch (e) {
    case rXF.BOOLEAN:
      return _$$A2;
    case rXF.COLOR:
      return _$$A4;
    case rXF.FLOAT:
      return _$$A6;
    case rXF.STRING:
      return _$$A8;
    case rXF.MAP:
    case rXF.SYMBOL_ID:
    case rXF.FONT_STYLE:
    case rXF.TEXT_DATA:
    case rXF.IMAGE:
    case rXF.LINK:
    case rXF.JS_RUNTIME_ALIAS:
    case rXF.SLOT_CONTENT_ID:
      return _$$A2;
    default:
      xb(e, "Unknown VariableResolvedDataType");
  }
}
export const U = $$x0;
export const F = $$E1;