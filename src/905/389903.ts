import { jsx, jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { setupThemeContext } from "../905/614223";
export let $$s0 = memo(function (e) {
  return jsx(setupThemeContext, {
    brand: "piper",
    children: jsxs("svg", {
      width: "24",
      height: "24",
      fill: "none",
      viewBox: "0 0 24 24",
      ...e,
      children: [jsx("path", {
        fill: "var(--color-bg-brand)",
        d: "M0 5a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5z"
      }), jsx("path", {
        fill: "var(--color-icon-onbrand)",
        d: "M17 6a2 2 0 0 1 2 2v6a2 2 0 0 1-1.796 1.99L17 16h-1.68l.661 2.365.018.1a.5.5 0 0 1-.943.265l-.037-.095L14.28 16H9.72l-.738 2.635a.5.5 0 0 1-.962-.27L8.68 16H7l-.204-.01a2 2 0 0 1-1.785-1.786L5 14V8a2 2 0 0 1 2-2zM7 7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm1.5 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
      })]
    })
  });
});
export const K = $$s0;