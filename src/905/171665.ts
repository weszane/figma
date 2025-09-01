import { memo } from "react";
import { jsx } from "react/jsx-runtime";
export let $$r0 = memo(function (e) {
  return jsx("svg", {
    width: "16",
    height: "16",
    fill: "none",
    viewBox: "0 0 16 16",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12",
      clipRule: "evenodd"
    })
  });
});
export const H = $$r0;