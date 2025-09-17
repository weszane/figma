import { jsx, jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { setupThemeContext } from "../905/614223";
export let $$s0 = memo(function (e) {
  return jsx(setupThemeContext, {
    brand: "dev-handoff",
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
        d: "M13.632 6.017a.5.5 0 0 1 .35.615l-3 10.999-.036.095a.501.501 0 0 1-.928-.358l3-11a.5.5 0 0 1 .614-.35m-5.486 2.63a.5.5 0 0 1 .708.706L6.207 12l2.647 2.646a.5.5 0 0 1-.708.707l-3-3a.5.5 0 0 1 0-.707zm7 0a.5.5 0 0 1 .707 0l3 3a.5.5 0 0 1 0 .706l-3 3a.5.5 0 0 1-.707-.707L17.793 12l-2.646-2.647a.5.5 0 0 1 0-.707"
      })]
    })
  });
});
export const o = $$s0;