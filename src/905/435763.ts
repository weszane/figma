import { jsx, jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { setupThemeContext } from "../905/614223";
export let $$s0 = memo(function (e) {
  return jsx(setupThemeContext, {
    brand: "design",
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
        d: "M6.385 5.212c.228-.177.524-.249.81-.192l5.981 1.197A6 6 0 0 1 18 12.1v.487l.706.707a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.413 0L12.585 18h-.487a6 6 0 0 1-5.883-4.823L5.02 7.198a1 1 0 0 1 .273-.904l1-1zm.468.935 3.768 3.768a2.5 2.5 0 1 1-.707.707L6.146 6.854 6 7.001l1.196 5.98a5 5 0 0 0 4.902 4.02H13l1 1 4-4-1-1V12.1a5 5 0 0 0-3.802-4.855l-.217-.048L7 6.001zM12 10.501a1.5 1.5 0 1 0 0 3.002 1.5 1.5 0 0 0 0-3.003"
      })]
    })
  });
});
export const e = $$s0;