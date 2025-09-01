import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useContext } from "react";
import { A } from "../vendor/723372";
import { r as _$$r } from "../905/5729";
import { b } from "../905/22449";
import { c as _$$c } from "../905/34525";
import { s as _$$s } from "../905/536340";
var c = "radio-like-primitive__hiddenInput__-rswg";
var u = "radio-like-primitive__optionRoot__9WImp";
export let $$p2 = forwardRef(({
  legend: e,
  ...t
}, i) => jsxs(b, {
  ref: i,
  ...t,
  children: [e, jsx("div", {
    "data-radio-options-root": !0,
    children: t.children
  })]
}));
$$p2.displayName = "RadioLikePrimitive.Root";
export let $$m1 = forwardRef(({
  "aria-label": e,
  value: t,
  readonly: i,
  children: o,
  className: p,
  htmlAttributes: m,
  ...h
}, g) => {
  let {
    name
  } = useContext(_$$r);
  let _ = `${name}-${t}`;
  return jsxs("div", {
    className: A(u, p),
    children: [jsx(_$$c, {
      className: c,
      ref: g,
      id: _,
      value: t,
      readonly: i,
      htmlAttributes: {
        ...m,
        "data-tooltip": m?.["data-tooltip"] ?? e,
        "data-tooltip-type": m?.["data-tooltip-type"] ?? "text"
      },
      ...h
    }), o, jsx("label", {
      className: _$$s,
      htmlFor: _,
      children: e
    })]
  });
});
$$m1.displayName = "RadioLikePrimitive.Option";
export let $$h0 = forwardRef(({
  id: e,
  value: t,
  readonly: i,
  children: r,
  className: s,
  ...o
}, d) => jsxs("div", {
  className: A(u, s),
  children: [jsx(_$$c, {
    className: c,
    ref: d,
    id: e,
    value: t,
    readonly: i,
    ...o
  }), r]
}));
$$h0.displayName = "RadioLikePrimitive.ManuallyLabeledOption";
export const Y4 = $$h0;
export const c$ = $$m1;
export const bL = $$p2;