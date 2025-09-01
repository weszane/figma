import { jsxs, jsx } from "react/jsx-runtime";
import { memo, useId } from "react";
export let $$a0 = memo(function (e) {
  let t = useId();
  return jsxs("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon-tertiary)",
      fillRule: "evenodd",
      d: "M14 7H7v7h3v3h7v-7h-3z",
      clipRule: "evenodd"
    }), jsx("mask", {
      id: t,
      fill: "#fff",
      children: jsx("path", {
        fillRule: "evenodd",
        d: "M7 6a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2v2a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-2V7a1 1 0 0 0-1-1z",
        clipRule: "evenodd"
      })
    }), jsx("path", {
      fill: "var(--color-icon)",
      d: "M9 15h1v-1H9zm6-6h-1v1h1zM7 7V5a2 2 0 0 0-2 2zm0 7V7H5v7zm0 0H5a2 2 0 0 0 2 2zm2 0H7v2h2zm1 3v-2H8v2zm0 0H8a2 2 0 0 0 2 2zm7 0h-7v2h7zm0 0v2a2 2 0 0 0 2-2zm0-7v7h2v-7zm0 0h2a2 2 0 0 0-2-2zm-2 0h2V8h-2zm-1-3v2h2V7zm0 0h2a2 2 0 0 0-2-2zM7 7h7V5H7z",
      mask: `url(#${t})`
    })]
  });
});
export const A = $$a0;