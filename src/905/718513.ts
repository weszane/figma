import { jsx } from "react/jsx-runtime";
import { q } from "../905/600041";
import { cssBuilderInstance } from "../cssbuilder/589278";
export function $$s0({
  FileThumbnailComponent: e
}) {
  return jsx("div", {
    className: cssBuilderInstance.grid.gridTemplateColumns2.gap12.wFull.hFull.$,
    children: Array.from({
      length: 4
    }).map((t, i) => jsx(q, {
      noBorder: !0,
      borderRadius: 8,
      children: jsx(e, {})
    }, i))
  });
}
export const X = $$s0;