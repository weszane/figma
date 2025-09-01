import { jsx, Fragment } from "react/jsx-runtime";
import { useMemo } from "react";
import { G, A } from "../905/289770";
import { Pd } from "../905/266289";
export function $$o0(e) {
  return e.mode || e.brand || null != e.enhancedContrast ? jsx(l, {
    ...e
  }) : jsx(Fragment, {
    children: e.children
  });
}
function l(e) {
  let t = G();
  let i = e.brand ?? t.brand;
  let o = e.mode ?? t.color;
  let l = e.enhancedContrast ?? t.enhancedContrast;
  let d = useMemo(() => ({
    ...t,
    color: o,
    brand: i,
    enhancedContrast: l
  }), [t, o, i, l]);
  return jsx(A, {
    value: d,
    children: jsx("div", {
      ...Pd(d),
      style: {
        display: "contents"
      },
      children: e.children
    })
  });
}
export const J = $$o0;