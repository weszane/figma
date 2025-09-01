import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { Fragment as _$$Fragment } from "react";
import { mV } from "../905/792802";
export function $$s0({
  text: e,
  query: t,
  highlightFontWeight: i
}) {
  if ("" === t.trim()) return jsx(Fragment, {
    children: e
  });
  let s = mV(e, t);
  return jsx(Fragment, {
    children: s.map(([e, t], a) => t > 0 ? jsxs(_$$Fragment, {
      children: [jsx("span", {
        className: "highlight--matchingText--HIp6r",
        style: {
          fontWeight: i ?? 600
        },
        children: e.substring(0, t)
      }), t < e.length && jsx(Fragment, {
        children: e.substring(t, e.length)
      })]
    }, a) : jsx(_$$Fragment, {
      children: e
    }, a))
  });
}
export const f = $$s0;