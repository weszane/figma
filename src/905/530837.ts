import { xb } from "../figma_app/465776";
var $$r2 = (e => (e.NODE = "node", e.IMAGE = "image", e.VIDEO = "video", e.PROTOTYPE = "prototype", e))($$r2 || {});
export function $$a0(e) {
  switch (e.type) {
    case "node":
    case "image":
      return !0;
    case "video":
    case "prototype":
      return !1;
    default:
      xb(e);
  }
}
export function $$s1(e) {
  switch (e.type) {
    case "node":
      return !0;
    case "image":
      return "image/gif" !== e.mediaType;
    case "video":
    case "prototype":
      return !1;
    default:
      xb(e);
  }
}
export const Dr = $$a0;
export const aT = $$s1;
export const cM = $$r2;