import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { defaultComponentAttribute } from "../905/577641";
import { s as _$$s } from "../905/536340";
export let $$o0 = forwardRef(({
  htmlAttributes: e,
  ...t
}, i) => jsx("label", {
  ...t,
  ...e,
  ...defaultComponentAttribute,
  ref: i
}));
$$o0.displayName = "LabelPrimitive";
export let $$l3 = forwardRef((e, t) => jsx($$o0, {
  ...e,
  className: _$$s,
  ref: t
}));
$$l3.displayName = "HiddenLabelPrimitive";
export let $$d1 = forwardRef(({
  htmlAttributes: e,
  ...t
}, i) => jsx("legend", {
  ...defaultComponentAttribute,
  ...e,
  ...t,
  ref: i
}));
$$d1.displayName = "LegendPrimitive";
export let $$c2 = forwardRef((e, t) => jsx($$d1, {
  ...e,
  className: _$$s,
  ref: t
}));
$$c2.displayName = "HiddenLegendPrimitive";
export const Ay = $$o0;
export const BQ = $$d1;
export const TD = $$c2;
export const q9 = $$l3;
