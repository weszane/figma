import { useState } from "react"
import { jsx } from "react/jsx-runtime"
import { getColorForMultiplayer, multiplayerColors } from "../figma_app/136698"
import { e as _$$e } from "../figma_app/661119"
import { yellowSunflowerColor } from "../figma_app/728075"

export function $$l0({
  entity: e,
  adtlClassName: t,
  size: i = 32,
  style: l,
}) {
  let d
  let [c, u] = useState(!1)
  let p = new Image()
  return (p.onerror = () => {
    u(!0)
  }, e?.img_url && (p.src = e.img_url, !c))
    ? jsx(_$$e, {
        type: "Image",
        size: "Large",
        attributes: {
          className: t,
          style: {
            ...(l || {}),
            backgroundImage: `url(${e.img_url})`,
            backgroundColor: "transparent",
            width: `${i}px`,
            height: `${i}px`,
          },
        },
      })
    : (e ? (e.name || e.handle) && (d = e.name || e.handle) : d = void 0, typeof d == "string" && (d = d[0].toUpperCase()), jsx(_$$e, {
        type: "Letter",
        size: "Large",
        letter: d,
        attributes: {
          className: t,
          style: {
            ...(l || {}),
            width: `${i}px`,
            height: `${i}px`,
            background: e ? getColorForMultiplayer(e.id, multiplayerColors) : yellowSunflowerColor,
          },
        },
      }))
}
export const e = $$l0
