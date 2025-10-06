import { jsx, Fragment } from "react/jsx-runtime";
import { forwardRef, useRef } from "react";
import { createMultiRefCallback } from "../figma_app/272902";
import s from "classnames";
import { conditionalWrapper } from "../905/579635";
import { i as _$$i, m as _$$m } from "../905/186077";
import { bb, zr, Pf } from "../figma_app/755571";
var o = s;
export let $$u0 = forwardRef(function ({
  text: e,
  className: t,
  showTooltip: i = _$$i.WHEN_TRUNCATED,
  truncate: s = "end",
  getTooltipText: u = t => e
}, p) {
  let m = useRef(null);
  let h = _$$m(u, i, m);
  return jsx("div", {
    ref: createMultiRefCallback(p, m),
    className: o()({
      [bb]: "start" === s
    }, zr, t),
    "aria-label": e,
    ...h,
    children: jsx(conditionalWrapper, {
      condition: "start" === s,
      wrapper: e => jsx("span", {
        className: Pf,
        children: e
      }),
      children: jsx(Fragment, {
        children: e
      })
    })
  });
});
export const G = $$u0;