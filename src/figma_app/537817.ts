import { jsx } from "react/jsx-runtime";
import { w7 } from "../figma_app/805373";
import { P, U } from "../905/566881";
export function $$s0({
  team: e,
  size: t = P.MEDIUM,
  shape: r = "SQUARE",
  fallbackDisplay: s = U.FIRST_CHARACTER,
  avatarSvg: o,
  fallbackSvg: l,
  svgSizeRatio: d,
  opacity: c
}) {
  return jsx(w7, {
    entity: e,
    size: t,
    hideFallbackInitial: s === U.HIDDEN,
    shape: r,
    avatarSvg: o,
    fallbackSvg: l,
    svgSizeRatio: d,
    opacity: c
  });
}
export const n = $$s0;