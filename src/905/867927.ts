import { jsx } from "react/jsx-runtime";
import { forwardRef, useId, useRef } from "react";
import { A } from "../vendor/723372";
import { Label } from "../905/270045";
import { R } from "../905/57445";
import { bL as _$$bL, c$ as _$$c$, Y4 } from "../905/575478";
var d = "segmented-control__optionRoot__tnGcv";
export let $$c1 = forwardRef(({
  children: e,
  legend: t,
  size: i = "md",
  ...r
}, s) => jsx(_$$bL, {
  ...r,
  className: A("segmented-control__fieldset__TFf7m", {
    "segmented-control__largeSize__E2xmR": "lg" === i,
    "segmented-control__mediumSize__uZT47": "md" === i
  }),
  ref: s,
  legend: t,
  children: e
}));
$$c1.displayName = "SegmentedControl.Root";
export let $$u0 = forwardRef(({
  icon: e,
  ...t
}, i) => jsx(_$$c$, {
  ...t,
  ref: i,
  className: d,
  children: jsx("span", {
    className: "segmented-control__icon__Vs5-f",
    "aria-hidden": !0,
    children: e
  })
}));
$$u0.displayName = "SegmentedControl.Option";
export let $$p2 = forwardRef(({
  label: e,
  truncate: t,
  ...i
}, c) => {
  let u = useId();
  let p = useRef(null);
  let m = R(p);
  let h = t && m ? {
    "data-tooltip": e,
    "data-tooltip-type": "text"
  } : null;
  return jsx(Y4, {
    ...i,
    ref: c,
    id: u,
    className: A(d, {
      "segmented-control__optionRootTruncated__KsES5": t
    }),
    children: jsx(Label, {
      ref: p,
      htmlFor: u,
      className: "segmented-control__text__KfpLV",
      ...(t && h),
      children: jsx("span", {
        className: "segmented-control__textContent__YZQa-",
        children: e
      })
    })
  });
});
$$p2.displayName = "SegmentedControl.TextOption";
export const c$ = $$u0;
export const bL = $$c1;
export const RT = $$p2;