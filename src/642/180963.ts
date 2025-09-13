import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { ButtonPrimitive } from "../905/632989";
import { O } from "../905/969533";
import a from "classnames";
import { s as _$$s } from "../cssbuilder/589278";
import { t as _$$t } from "../905/100946";
var o = a;
export let $$u0 = forwardRef(function ({
  isOpen: e,
  onClick: t,
  children: s,
  recordingKey: n,
  ...a
}, u) {
  return jsxs(ButtonPrimitive, {
    actionOnPointerDown: !0,
    ref: u,
    className: o()("slides_flyout_input--input--cM6kp ellipsis--ellipsis--Tjyfa", _$$t, {
      "slides_flyout_input--selected--CgFEs": e
    }),
    onClick: t,
    recordingKey: n,
    "aria-label": a["aria-label"],
    "aria-expanded": e,
    "aria-describedby": "slides-flyout-input-label",
    children: [jsx("span", {
      className: "slides_flyout_input--content--hygOt",
      id: "slides-flyout-input-label",
      children: s
    }), jsx("div", {
      className: _$$s.flexShrink0.$,
      "aria-hidden": !0,
      children: jsx(O, {})
    })]
  });
});
export const C = $$u0;