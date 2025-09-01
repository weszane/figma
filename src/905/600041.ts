import { jsx } from "react/jsx-runtime";
import r from "classnames";
import { s as _$$s } from "../cssbuilder/589278";
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
    className: a()(_$$s.hFull.wFull.borderBox.$$if(!r, _$$s.b1.bSolid.colorBorder).overflowHidden.$, {
      [_$$s.bRadius2.$]: 2 === i,
      [_$$s.bRadius4.$]: 4 === i,
      [_$$s.bRadius6.$]: 6 === i,
      [_$$s.bRadius8.$]: 8 === i
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