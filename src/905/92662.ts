import { jsx, jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { setupThemeContext } from "../905/614223";
export let $$s0 = memo(function (e) {
  return jsx(setupThemeContext, {
    brand: "design",
    children: jsxs("svg", {
      width: "32",
      height: "32",
      fill: "none",
      viewBox: "0 0 32 32",
      ...e,
      children: [jsx("path", {
        fill: "var(--color-bg-brand)",
        d: "M0 5a5 5 0 0 1 5-5h22a5 5 0 0 1 5 5v22a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5z"
      }), jsx("path", {
        fill: "var(--color-icon-onbrand)",
        d: "M9.697 7.02a1 1 0 0 0-.811.19l-.094.083-1.5 1.5a1 1 0 0 0-.273.905l1.56 7.698a7.67 7.67 0 0 0 7.689 6.144l.328-.007 1.196 1.197a1 1 0 0 0 1.414 0l5.523-5.523a1 1 0 0 0 0-1.414l-1.197-1.196.007-.328a7.67 7.67 0 0 0-6.144-7.69zm7.5 2.54.294.066a6.67 6.67 0 0 1 5.048 6.62l-.018.754 1.5 1.5-5.522 5.523-1.5-1.5-.755.018h-.302a6.67 6.67 0 0 1-6.383-5.342l-1.56-7.698.397-.397 5.16 5.16A3 3 0 0 0 13 16a3.001 3.001 0 1 0 3-3.001c-.648 0-1.247.207-1.737.557l-5.16-5.16L9.5 8zM16 14a2 2 0 1 1 0 4.001A2.001 2.001 0 0 1 16 14"
      })]
    })
  });
});
export const v = $$s0;