import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useId } from "react";
import { A as _$$A } from "../vendor/723372";
import { F } from "../905/549791";
import { J } from "../905/270045";
import { r as _$$r } from "../905/577641";
import { s as _$$s } from "../905/536340";
var n = {};
require.d(n, {
  highlighted: () => h,
  icon: () => $$f,
  input: () => u,
  label: () => p,
  primary: () => m,
  sizeLg: () => _,
  toggleButton: () => g
});
var u = "toggle-button__input__NF3YA";
var p = "toggle-button__label__NRP2k";
var m = "toggle-button__primary__M0VC3";
var h = "toggle-button__highlighted__E7ou-";
var g = "toggle-button__toggleButton__opcx3 base-icon-button__baseIconButton__TXKzr";
var $$f = "toggle-button__icon__CTqXa base-icon-button__icon__FIIFq";
var _ = "toggle-button__sizeLg__-UK3Y";
let A = {
  md: void 0,
  lg: _
};
let $$y0 = forwardRef(({
  onIcon: e,
  offIcon: t,
  "aria-label": i,
  variant: m = "primary",
  htmlAttributes: h,
  size: _ = "md",
  ...y
}, b) => {
  let v = useId();
  let I = y.checked && !y.mixed ? e : t;
  return jsxs("span", {
    ..._$$r,
    "data-disabled": !!y.disabled || void 0,
    className: _$$A(g, A[_]),
    children: [jsx(F, {
      className: _$$A(u, n[m]),
      id: v,
      htmlAttributes: h,
      ...y,
      "data-tooltip": i,
      "data-tooltip-type": "text",
      "data-tooltip-shortcut-key": y?.["data-tooltip-shortcut-key"] ?? h?.["data-tooltip-shortcut-key"],
      ref: b
    }), jsxs(J, {
      htmlFor: v,
      className: p,
      children: [jsx("span", {
        className: _$$s,
        children: i
      }), jsx("span", {
        "aria-hidden": !0,
        className: $$f,
        children: I
      })]
    })]
  });
});
$$y0.displayName = "ToggleButton";
export const f = $$y0;