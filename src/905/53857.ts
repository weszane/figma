import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { A as _$$A } from "../vendor/723372";
import { F } from "../905/911981";
var n = {};
require.d(n, {
  badge: () => l,
  badgeText: () => d,
  brandFilled: () => f,
  brandOutline: () => x,
  componentFilled: () => _,
  componentOutline: () => S,
  dangerFilled: () => b,
  dangerOutline: () => T,
  defaultFilled: () => h,
  defaultOutline: () => $$E,
  hasIconPrefix: () => u,
  icon: () => m,
  inactiveFilled: () => v,
  inactiveOutline: () => k,
  inverseFilled: () => g,
  largeSize: () => p,
  mediumSize: () => c,
  onFill: () => I,
  successFilled: () => A,
  successOutline: () => w,
  warningFilled: () => y,
  warningOutline: () => C
});
var l = "badge__badge__O61UB";
var d = "badge__badgeText__Iz2WE";
var c = "badge__mediumSize__loLd-";
var u = "badge__hasIconPrefix__lq3F3";
var p = "badge__largeSize__AZT4z";
var m = "badge__icon__YWyTU";
var h = "badge__defaultFilled__3SDQV";
var g = "badge__inverseFilled__7J9TB";
var f = "badge__brandFilled__VJIp8";
var _ = "badge__componentFilled__IFL-M";
var A = "badge__successFilled__we4n-";
var y = "badge__warningFilled__esIha";
var b = "badge__dangerFilled__pCK7W";
var v = "badge__inactiveFilled__7Upur";
var I = "badge__onFill__H-EKJ";
var $$E = "badge__defaultOutline__VXf2n";
var x = "badge__brandOutline__NV09G";
var S = "badge__componentOutline__-TkI1";
var w = "badge__successOutline__rjO5n";
var C = "badge__warningOutline__wKdgI";
var T = "badge__dangerOutline__IOJ3q";
var k = "badge__inactiveOutline__q2Jiw";
export let $$R0 = forwardRef(({
  children: e,
  variant: t = "defaultFilled",
  size: i = "md",
  iconPrefix: a,
  ...h
}, g) => jsxs(F, {
  ...h,
  className: _$$A(l, n[t], {
    [c]: "md" === i,
    [p]: "lg" === i,
    [u]: !!a
  }),
  ref: g,
  children: [a && jsx("span", {
    className: m,
    "aria-hidden": "true",
    children: a
  }), jsx("span", {
    className: d,
    children: e
  })]
}));
$$R0.displayName = "Badge";
export const E = $$R0;