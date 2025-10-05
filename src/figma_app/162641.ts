import { jsx } from "react/jsx-runtime"
import { _J, GE, KQ, ky, lx, QH, qh, Sw } from "../figma_app/333571"

var $$a0 = (e => (e.SHIMMER = "shimmer", e.SHIMMER_ON_MENU = "shimmer_on_menu", e.LIGHT_SHIMMER = "light_shimmer", e.NO_SHIMMER = "no_shimmer", e))($$a0 || {})
let s = (e) => {
  switch (e) {
    case "shimmer":
    default:
      return _J
    case "light_shimmer":
      return QH
    case "shimmer_on_menu":
      return Sw
    case "no_shimmer":
  }
}
export function $$o2(e) {
  return jsx("div", {
    "style": {
      ...(e.style ?? {}),
      opacity: e.opacity ? `${e.opacity}%` : "100%",
    },
    "className": `${e.animationType === "shimmer_on_menu" ? ky : KQ} ${e.primary ? lx : ""} ${e.className || ""}`,
    "data-testid": e.dataTestId,
    "children": jsx("div", {
      className: s(e.animationType),
    }),
  })
}
export function $$l1(e) {
  return jsx("div", {
    "style": {
      ...(e.style ?? {}),
      opacity: e.opacity ? `${e.opacity}%` : "100%",
    },
    "className": `${GE} ${e.primary ? lx : ""} ${e.className || ""}`,
    "data-testid": e.dataTestId,
    "children": jsx("div", {
      className: s(e.animationType),
    }),
  })
}
export function $$d3() {
  return jsx("div", {
    className: qh,
  })
}
export const JR = $$a0
export const Qp = $$l1
export const Wi = $$o2
export const _b = $$d3
