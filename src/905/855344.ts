import { memo } from "react";
import { jsx } from "react/jsx-runtime";
export let $$r0 = memo(function (e) {
  return jsx("svg", {
    width: "16",
    height: "16",
    fill: "none",
    viewBox: "0 0 16 16",
    ...e,
    children: jsx("rect", {
      width: "6",
      height: "6",
      x: "5",
      y: "5",
      fill: "var(--color-icon-brand)",
      rx: "3"
    })
  });
});
export const H = $$r0;