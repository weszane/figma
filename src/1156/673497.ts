import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useId } from "react";
import { F } from "../905/549791";
import { J } from "../905/270045";
import o from "classnames";
var r = {};
require.d(r, {
  baseIconButton: () => g,
  highlighted: () => h,
  icon: () => f,
  input: () => u,
  label: () => x,
  primary: () => m,
  srOnly: () => d,
  toggleButton: () => p
});
var c = o;
let d = "toggle_button_32--srOnly--MJcgX";
let u = "toggle_button_32--input--pQ88f";
let x = "toggle_button_32--label--DiRj4";
let m = "toggle_button_32--primary---O-Ty";
let h = "toggle_button_32--highlighted--1lPJo";
let g = "toggle_button_32--baseIconButton--eTRcM";
let p = "toggle_button_32--toggleButton--xs7XD toggle_button_32--baseIconButton--eTRcM";
let f = "toggle_button_32--icon--r-dy0";
let $$$$y0 = forwardRef(({
  onIcon: e,
  offIcon: t,
  "aria-label": n,
  variant: o = "primary",
  htmlAttributes: m,
  ...h
}, g) => {
  let y = useId();
  let _ = h.checked && !h.mixed ? e : t;
  return jsxs("span", {
    "data-disabled": !!h.disabled || void 0,
    className: p,
    children: [jsx(F, {
      className: c()(u, r[o]),
      id: y,
      htmlAttributes: m,
      ...h,
      "data-tooltip": n,
      "data-tooltip-type": "text",
      "data-tooltip-shortcut-key": h?.["data-tooltip-shortcut-key"] ?? m?.["data-tooltip-shortcut-key"],
      ref: g
    }), jsxs(J, {
      htmlFor: y,
      className: x,
      children: [jsx("span", {
        className: d,
        children: n
      }), jsx("span", {
        "aria-hidden": !0,
        className: f,
        children: _
      })]
    })]
  });
});
$$$$y0.displayName = "ToggleButton32";
export const y = $$$$y0;