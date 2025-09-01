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
      d: "M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4",
      clipRule: "evenodd"
    })
  });
});
export const c = $$r0;