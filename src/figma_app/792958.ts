import { parsePxInt } from "../figma_app/783094";
import { Point } from "../905/736624";
import { Flg, tui } from "../figma_app/27776";
import { YL, wX, cb, NZ } from "../905/178043";
let $$o9 = parsePxInt(Flg) + 1;
let l = parsePxInt(tui);
let $$d2 = 16;
let $$c6 = l;
let $$u1 = 0;
let $$p7 = 0;
let $$_8 = 0;
export var $$h4 = (e => (e.TOP = "top", e.BOTTOM = "bottom", e.LEFT = "left", e.RIGHT = "right", e))($$h4 || {});
export function $$m5(e) {
  let t = e.includes("top");
  let r = e.includes("bottom");
  let n = e.includes("left");
  let i = e.includes("right");
  return t && n || r && i ? YL : t && i || r && n ? wX : t || r ? cb : n || i ? NZ : null;
}
export function $$g0(e, t) {
  let {
    left,
    top,
    right,
    bottom,
    lockAspectRatio
  } = t;
  let d = t.maxWidth || 1 / 0;
  let c = t.maxHeight || 1 / 0;
  let u = t.minWidth || 0;
  let p = t.minHeight || 0;
  let _ = right - left;
  let h = bottom - top;
  let m = _ <= 0 || h <= 0;
  if (lockAspectRatio && m) return null;
  if (lockAspectRatio) {
    let e = h - $$o9;
    let t = Math.min(d / _, (c - $$o9) / e);
    t < 1 && (_ *= t, e *= t);
    let r = Math.max(u / _, p / e);
    r > 1 && (_ *= r, e *= r);
    h = e + $$o9;
  } else {
    _ = Math.max(_ = Math.min(_, d), u);
    h = Math.max(h = Math.min(h, c), p);
  }
  let g = left;
  e.left && (g = right - _);
  let f = top;
  e.top && (f = bottom - h);
  return {
    position: new Point(g, f),
    width: _,
    height: h
  };
}
export function $$f3(e, t) {
  let r = new Point(e.pageX, e.pageY).subtract(t.mousePosition);
  return t.elementPosition.add(r).clampY({
    y: 0,
    height: window.innerHeight - $$o9
  });
}
export const E0 = $$g0;
export const G5 = $$u1;
export const I_ = $$d2;
export const Ij = $$f3;
export const OP = $$h4;
export const as = $$m5;
export const eN = $$c6;
export const em = $$p7;
export const lq = $$_8;
export const uF = $$o9;