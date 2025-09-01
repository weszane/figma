import { jsx } from "react/jsx-runtime";
import { useRef, forwardRef } from "react";
import { R } from "../905/57445";
import { cS } from "../figma_app/334459";
export function $$s1({
  children: e,
  tooltip: t
}) {
  let n = useRef(null);
  let o = R(n);
  return jsx("span", {
    ref: n,
    className: "x1rg5ohu xuxw1ft xb3r6kr xlyipyv xh8yej3 x3ajldb",
    "data-tooltip": o ? t : void 0,
    "data-tooltip-type": o ? "text" : void 0,
    children: e
  });
}
export let $$l0 = forwardRef(function ({
  label: e,
  ...t
}, n) {
  return jsx(cS, {
    ref: n,
    label: jsx($$s1, {
      tooltip: e,
      children: e
    }),
    ...t
  });
});
export const A = $$l0;
export const F = $$s1;