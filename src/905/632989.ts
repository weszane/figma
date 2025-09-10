import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { A } from "src/vendor/723372";
import { I } from "src/905/494625";
import { defaultComponentAttribute } from "src/905/577641";
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
    ...defaultComponentAttribute,
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
