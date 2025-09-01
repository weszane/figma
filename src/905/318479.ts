import { memo } from "react";
import { jsxs, jsx } from "react/jsx-runtime";
export let $$r0 = memo(function (e) {
  return jsxs("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon)",
      d: "M9 12.25c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-.5a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75z"
    }), jsx("path", {
      fill: "var(--color-icon-tertiary)",
      fillRule: "evenodd",
      d: "M19 6.5a.5.5 0 0 0-.5-.5h-12a.5.5 0 0 0 0 1h12a.5.5 0 0 0 .5-.5m0 11a.5.5 0 0 0-.5-.5h-12a.5.5 0 0 0 0 1h12a.5.5 0 0 0 .5-.5",
      clipRule: "evenodd"
    })]
  });
});
export const e = $$r0;