import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { md } from "../figma_app/27355";
import { cb, WE } from "../figma_app/745458";
export function $$r0({
  children: e,
  position: t,
  disabled: s
}) {
  let r = md(cb);
  let o = md(WE);
  if (!(!s && r > 0 && !o)) return jsx(Fragment, {
    children: e
  });
  let l = {
    top: t?.top ?? "2px",
    right: t?.right ?? "2px"
  };
  return jsxs("div", {
    className: "x1n2onr6",
    children: [e, jsx("div", {
      className: "x10l6tqk x1wc42o8 xegnrdp x4gyxi7 x16rqkct x1j7q7xk x9f619",
      style: l
    })]
  });
}
export const Q = $$r0;