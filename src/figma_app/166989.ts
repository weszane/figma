import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { bL, c$ } from "../905/575478";
export let $$s1 = forwardRef(function ({
  children: e,
  legend: t,
  ...r
}, i) {
  return jsx(bL, {
    ...r,
    ref: i,
    legend: t,
    className: "segmented_control_with_text--fieldset--Uj50h",
    children: e
  });
});
$$s1.displayName = "SegmentedControl.Root";
export let $$o0 = forwardRef(function ({
  icon: e,
  children: t,
  ...r
}, i) {
  return jsx(c$, {
    ...r,
    ref: i,
    children: jsxs("div", {
      className: "segmented_control_with_text--option--zdT46",
      children: [jsx("span", {
        className: "segmented_control_with_text--icon--vrD61",
        "aria-hidden": !0,
        children: e
      }), jsx("span", {
        className: "segmented_control_with_text--text--Soi8f",
        children: t
      })]
    })
  });
});
$$o0.displayName = "SegmentedControl.Option";
export const c = $$o0;
export const b = $$s1;