import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { s as _$$s } from "../905/536340";
export let $$s0 = forwardRef(({
  as: e,
  className: t,
  children: i,
  ...r
}, s) => jsx(e || "div", {
  ref: s,
  className: _$$s,
  "data-fpl-sr-only": !0,
  ...r,
  children: i
}));
$$s0.displayName = "ScreenReaderOnly";
export const E = $$s0;