import { jsx } from "react/jsx-runtime";
import { s as _$$s } from "../cssbuilder/589278";
import { sx } from "../905/941192";
let s = "media--overlayImageContainer--EjKlj";
export function $$o0(e) {
  return jsx("div", {
    className: s,
    style: sx.colorIconOnbrand.colorBorder.bSolid.bb1.flex.add({
      aspectRatio: e.aspectRatio.toString()
    }).add({
      margin: "0"
    }).$,
    children: jsx("img", {
      src: e.src,
      alt: e.alt,
      className: _$$s.flex.justifyCenter.alignCenter.overflowHidden.$
    })
  });
}
export function $$l1(e) {
  return jsx("div", {
    className: s,
    style: sx.colorIconOnbrand.flex.$$if(!e.hideBorder, sx.colorBorder.bSolid.bt1.bb1).add({
      aspectRatio: e.aspectRatio.toString()
    }).add({
      margin: "0"
    }).$,
    children: jsx("video", {
      autoPlay: !0,
      muted: !0,
      loop: !0,
      "object-fit": "initial",
      "aria-hidden": "true",
      style: sx.flex.justifyCenter.alignCenter.overflowHidden.$,
      children: jsx("source", {
        src: e.src,
        type: "video/mp4"
      })
    })
  });
}
export const y = $$o0;
export const w = $$l1;