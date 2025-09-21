import { jsx } from "react/jsx-runtime";
import r from "classnames";
import { cssBuilderInstance } from "../cssbuilder/589278";
var a = r;
export function $$o0({
  backgroundColor: e,
  backgroundClassName: t,
  borderRadius: i,
  noBorder: r,
  children: o
}) {
  return jsx("div", {
    "data-testid": "thumbnail-container",
    className: a()(cssBuilderInstance.hFull.wFull.borderBox.$$if(!r, cssBuilderInstance.b1.bSolid.colorBorder).overflowHidden.$, {
      [cssBuilderInstance.bRadius2.$]: 2 === i,
      [cssBuilderInstance.bRadius4.$]: 4 === i,
      [cssBuilderInstance.bRadius6.$]: 6 === i,
      [cssBuilderInstance.bRadius8.$]: 8 === i
    }, t),
    style: e ? {
      backgroundColor: e
    } : void 0,
    children: jsx("div", {
      className: "thumbnail_container--aspectRatio--Q7gu8",
      children: o
    })
  });
}
export const q = $$o0;