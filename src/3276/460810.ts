import { r as _$$r } from "../905/249071";
import { parsePxNumber } from "../figma_app/783094";
import { QZ } from "../figma_app/62612";
import { B5 } from "../figma_app/80462";
import { V3, w, HG } from "../9410/180472";
import { rY4 } from "../figma_app/27776";
let d = V3 * w;
let c = parsePxNumber(rY4) + 16;
export function $$m0(e, t, n) {
  let o = e.guid;
  let a = e.absoluteBoundingBox;
  let r = t.getViewportInfo();
  return Math.max(a.w, a.h) * r.zoomScale <= 170 ? QZ({
    nodeId: o,
    minSizePx: 170,
    alwaysPan: !1
  }) : QZ({
    ...B5,
    nodeId: o,
    nodeAbsoluteBounds: "vote" === n ? p(a, r) : u(a),
    viewportRect: h(r, c)
  });
}
let u = (e) => _$$r.fromOriginAndSize(e.x, e.y, e.w, e.h);
let p = (e, t) => {
  let n = d / t.zoomScale;
  let a = HG / t.zoomScale;
  return _$$r.fromOriginAndSize(e.x, e.y - n, e.w + a, e.h + n);
};
let h = (e, t) => ({
  origin: {
    x: 0,
    y: 0
  },
  size: {
    x: e.width - t,
    y: e.height
  }
});
export const e = $$m0;