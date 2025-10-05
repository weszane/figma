import { jsx } from "react/jsx-runtime"
import { zi } from "../905/824449"

export function $$a0({
  styleList: e,
}) {
  return jsx("div", {
    className: "style_thumbnail_list--stylesSection--M61Bx",
    children: e.map(e => jsx("div", {
      className: "style_thumbnail_list--styleThumb--xQTSF",
      children: jsx(zi, {
        dsStyle: e,
      }),
    }, e.key)),
  })
}
export const c = $$a0
