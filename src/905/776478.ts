import { buildUploadUrl } from "../figma_app/169182";
export let $$n0 = buildUploadUrl("ea5973fed84d89957eddd325cdb8549719adbc15");
export function $$r1(e) {
  let {
    x,
    y,
    w,
    h
  } = e.absoluteBoundingBox;
  let [a, s, o, l] = [e.rectangleTopLeftCornerRadius, e.rectangleTopRightCornerRadius, e.rectangleBottomLeftCornerRadius, e.rectangleBottomRightCornerRadius];
  for (; e.parentNode;) {
    let d = e.parentNode;
    let {
      x,
      y,
      w,
      h: _h
    } = d.absoluteBoundingBox;
    let h = !1;
    if (x === x && y === y && (a = Math.max(a, d.rectangleTopLeftCornerRadius), h = !0), x + w === x + w && y === y && (s = Math.max(s, d.rectangleTopRightCornerRadius), h = !0), x === x && y + h === y + _h && (o = Math.max(o, d.rectangleBottomLeftCornerRadius), h = !0), x + w === x + w && y + h === y + _h && (l = Math.max(l, d.rectangleBottomRightCornerRadius), h = !0), !h) break;
    e = d;
  }
  let d = e => `${e / w * 100}% ${e / h * 100}%`;
  return {
    borderTopLeftRadius: d(a),
    borderTopRightRadius: d(s),
    borderBottomLeftRadius: d(o),
    borderBottomRightRadius: d(l)
  };
}
export const $ = $$n0;
export const b = $$r1;