import { jsx, jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { setupThemeContext } from "../905/614223";
export let $$s0 = memo(function (e) {
  return jsx(setupThemeContext, {
    brand: "piper",
    children: jsxs("svg", {
      width: "16",
      height: "16",
      fill: "none",
      viewBox: "0 0 16 16",
      ...e,
      children: [jsx("path", {
        fill: "var(--color-bg-brand)",
        d: "M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z"
      }), jsx("path", {
        fill: "var(--color-icon-onbrand)",
        d: "M12.204 3.01A2 2 0 0 1 14 5v5a2 2 0 0 1-1.796 1.99L12 12h-.434l.412 1.354.02.1a.5.5 0 0 1-.976.191L10.52 12H5.48l-.501 1.646a.5.5 0 0 1-.958-.292L4.434 12H4a2 2 0 0 1-1.99-1.796L2 10V5a2 2 0 0 1 2-2h8zM4 4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-.898-.995L12 4zm1 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
      })]
    })
  });
});
export const p = $$s0;