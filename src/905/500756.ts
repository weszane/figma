import { jsx } from "react/jsx-runtime";
import { throwTypeError } from "../figma_app/465776";
import { isNotNullish, isNullish } from "../figma_app/95419";
import { aD } from "../905/125019";
import { $ } from "../905/953280";
import { I as _$$I } from "../905/763478";
import { rXF } from "../figma_app/763686";
import c from "classnames";
import { D } from "../905/225412";
import { J } from "../905/420117";
import { i as _$$i } from "../905/415810";
var u = c;
let g = "variable_thumbnail--thumbnailIcon--3Cz6a";
let f = "variable_thumbnail--thumbnailIconComponent--26nFT";
let _ = "variable_thumbnail--thumbnailIconOverridden--BGqoG";
let A = "variable_thumbnail--disabled--E2aKM";
let y = "variable_thumbnail--chitContainer--mRIp5";
export var $$b2 = (e => (e[e.NONE = 0] = "NONE", e[e.DEFAULT = 1] = "DEFAULT", e[e.COMPONENT = 2] = "COMPONENT", e))($$b2 || {});
function v({
  resolvedType: e,
  disabled: t,
  variableThumbnailIconType: i = 1,
  colorTheme: r
}) {
  return jsx("div", {
    className: u()({
      [g]: 1 === i,
      [f]: 2 === i,
      [_]: r === J.OVERRIDDEN,
      [A]: t
    }),
    children: jsx(_$$i, {
      showTooltip: !t,
      type: e
    })
  });
}
function I({
  disabled: e
}) {
  return jsx("div", {
    className: u()({
      "variable_thumbnail--questionMark--ge9gJ": !0,
      [A]: e
    }),
    children: "?"
  });
}
export function $$E0({
  icon: e,
  disabled: t
}) {
  let i = u()(g, {
    [A]: t
  });
  return jsx("div", {
    className: i,
    children: e
  });
}
export function $$x1({
  value: e,
  resolvedTypeFallback: t,
  disabled: i,
  onColorChitMouseDown: c,
  variableThumbnailIconType: h = 1,
  colorTheme: b
}) {
  if (!("MIXED" !== e && isNotNullish(e) && e.hasOwnProperty("resolvedType"))) return isNullish(t) ? jsx(I, {
    disabled: !!i
  }) : jsx(v, {
    resolvedType: t,
    disabled: !!i,
    variableThumbnailIconType: h,
    colorTheme: b
  });
  let E = u()({
    [g]: 1 === h,
    [f]: 2 === h,
    [_]: b === J.OVERRIDDEN,
    [A]: i
  });
  switch (e.resolvedType) {
    case rXF.COLOR:
      return jsx("div", {
        className: y,
        children: jsx(D, {
          color: e.value,
          onMouseDown: c
        })
      });
    case rXF.BOOLEAN:
      return jsx("div", {
        className: E,
        children: jsx($, {})
      });
    case rXF.FLOAT:
    case rXF.STRING:
      return jsx(v, {
        resolvedType: e.resolvedType,
        disabled: !!i,
        variableThumbnailIconType: h,
        colorTheme: b
      });
    case rXF.IMAGE:
      let x = e.value.imageThumbnail;
      let S = {
        type: "IMAGE",
        opacity: 1,
        visible: !0,
        blendMode: "NORMAL",
        imageThumbnail: {
          hash: x ? aD(x) : void 0
        }
      };
      return jsx("div", {
        className: y,
        children: jsx(D, {
          paint: S,
          onMouseDown: c
        })
      });
    case rXF.JS_RUNTIME_ALIAS:
      return jsx("div", {
        className: E,
        children: jsx(_$$I, {})
      });
    default:
      throwTypeError(e);
  }
}
export const gF = $$E0;
export const LO = $$x1;
export const sW = $$b2;