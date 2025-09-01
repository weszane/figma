import { jsx } from "react/jsx-runtime";
import { createElement } from "react";
import { Z } from "../905/279476";
import { b } from "../figma_app/556971";
import { s as _$$s } from "../cssbuilder/589278";
import { Ib } from "../905/129884";
export function $$d1() {
  return !1;
}
export function $$c2() {
  return {
    shouldShow: !1,
    label: "This is a local C++ build so it may be out of date.\n\nRun this inside fullscreen/ to use the latest build from CI:\n\n./fs unlink",
    icon: Z
  };
}
export function $$u0() {
  let e = b();
  let {
    shouldShow,
    label,
    icon
  } = $$c2();
  return shouldShow ? jsx("span", {
    className: _$$s.h32.w32.inlineFlex.itemsCenter.justifyCenter.$,
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": label,
    "data-tooltip-show-right": e,
    children: createElement(icon)
  }) : null;
}
export const En = $$u0;
export const J = $$d1;
export const Ty = $$c2;