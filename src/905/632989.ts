import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { A } from "../vendor/723372";
import { I } from "../905/494625";
import { r as _$$r } from "../905/577641";
export let $$l0 = forwardRef(({
  children: e,
  className: t,
  type: i = "button",
  htmlAttributes: r,
  ...l
}, d) => {
  let c = I({
    ...r,
    ...l
  });
  return jsx("button", {
    ..._$$r,
    ...c,
    ref: d,
    type: i,
    className: A("button-reset__buttonReset__zO1D7", t),
    "aria-disabled": l["aria-disabled"] || l.disabled || void 0,
    children: e
  });
});
$$l0.displayName = "ButtonPrimitive";
export const E = $$l0;