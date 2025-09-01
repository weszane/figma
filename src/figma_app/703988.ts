import { parsePxInt } from "../figma_app/783094";
import { PW } from "../figma_app/633080";
import { ZV, FX } from "../figma_app/475869";
let s = parsePxInt(ZV);
let o = parsePxInt(FX);
export var $$l3 = ((e) => (e.WIDE = "WIDE", e.SMALL = "SMALL", e.NORMAL = "NORMAL", e.THIN_2_COL = "THIN_2_COL", e.THIN_3_COL = "THIN_3_COL", e))($$l3 || {});
export function $$d1(e, t) {
  let r = !0;
  let n = !0;
  for (let t of e) {
    let e;
    let a;
    if (t.type !== PW.STYLE) {
      if ("min_node_width" in t) {
        e = t.min_node_width;
        a = t.min_node_height;
      } else {
        if (!("width" in t)) continue;
        e = t.width;
        a = t.height;
      }
      if (!e || !a) return "NORMAL";
      if (e < 3 * a && (r = !1), (e > 64 || a > 64) && (n = !1), !r && !n) break;
    }
  }
  return r ? "WIDE" : n && !t ? "SMALL" : "NORMAL";
}
export function $$c0(e) {
  let {
    containerWidth,
    isList,
    layout,
    maxSmallThumbSize,
    maxWideColWidth
  } = e;
  if (isList) return 1;
  switch (layout) {
    case "WIDE":
      if (containerWidth <= maxWideColWidth) return 1;
      if (containerWidth <= 450) return 2;
      return 3;
    case "SMALL":
      return Math.ceil((containerWidth - 32 + o) / (maxSmallThumbSize + o));
    case "NORMAL":
      return Math.floor(containerWidth / 100);
    case "THIN_2_COL":
      return 2;
    case "THIN_3_COL":
      return 3;
  }
}
export function $$u2(e, t) {
  let {
    containerWidth,
    isList,
    layout
  } = e;
  if (isList) return {
    width: s,
    height: s
  };
  let a = (containerWidth + 2 - (t - 1) * o - 32) / t;
  let l = "WIDE" === layout ? Math.ceil(a / 4) : a;
  return {
    width: a,
    height: l
  };
}
export const A5 = $$c0;
export const PI = $$d1;
export const rj = $$u2;
export const rp = $$l3;