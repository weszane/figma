import { jsx } from "react/jsx-runtime";
import { C2, Gx } from "../figma_app/699310";
let a = "profile_badge--profileBadge--5ljY4";
export function $$s0(e) {
  let t = C2(e.profile, e.showBorder || !1);
  return t ? e.tooltip ? jsx("span", {
    className: a,
    children: jsx(Gx, {
      children: t
    })
  }) : jsx("span", {
    className: a,
    children: t
  }) : null;
}
export const l = $$s0;