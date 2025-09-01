import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
export let $$r0 = forwardRef(function ({
  margin: e,
  children: t
}, n) {
  let r = `${e ?? 4}px`;
  return jsx("div", {
    ref: n,
    className: "menu_control_wrapper--container--cxxo8",
    style: {
      marginLeft: r,
      marginRight: r
    },
    children: t
  });
});
export const R = $$r0;