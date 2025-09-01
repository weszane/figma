import { memo } from "react";
import { jsxs, jsx } from "react/jsx-runtime";
export let $$r0 = memo(function (e) {
  return jsxs("svg", {
    width: "16",
    height: "16",
    fill: "none",
    viewBox: "0 0 16 16",
    ...e,
    children: [jsx("rect", {
      width: "6",
      height: "4",
      x: "5",
      y: "8",
      fill: "var(--color-icon-tertiary)",
      rx: ".25"
    }), jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M10.776 8H5.224l-.025.005A.25.25 0 0 0 5 8.25v3.5c0 .138.112.25.25.25h5.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.199-.245zM7 7H6V6a2 2 0 1 1 4 0v1zM5 6a3 3 0 0 1 6 0v1.025c.57.116 1 .62 1 1.225v3.5c0 .69-.56 1.25-1.25 1.25h-5.5C4.56 13 4 12.44 4 11.75v-3.5c0-.605.43-1.11 1-1.225z",
      clipRule: "evenodd"
    })]
  });
});
export const s = $$r0;