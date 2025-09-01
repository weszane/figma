import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
export let $$i0 = forwardRef(function ({
  margin: e,
  children: t
}, n) {
  let i = `${e ?? 4}px`;
  return jsx("div", {
    ref: n,
    className: "menu_control_wrapper--container--cxxo8",
    style: {
      marginLeft: i,
      marginRight: i
    },
    children: t
  });
});
export const R = $$i0;