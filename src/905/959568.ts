import { parsePxInt } from "../figma_app/783094";
import { Point } from "../905/736624";
import { Dr, Ql, bS, Uv, Mt as _$$Mt, ho } from "../figma_app/91703";
import { a as _$$a } from "../905/541060";
import { qX, vq } from "../905/8732";
import { D, w } from "../905/295712";
import { C, B } from "../905/330741";
import { uj0 } from "../figma_app/27776";
export let $$u8 = parsePxInt(uj0);
export function $$p6(e, t = $$u8) {
  let {
    top,
    left
  } = e.getBoundingClientRect();
  return new Point(left - t, top);
}
export function $$m3({
  el: e,
  initialHeight: t,
  verticalAlign: i
}) {
  let {
    right,
    top
  } = e.getBoundingClientRect();
  return i && t ? new Point(right, top - t / 2) : new Point(right, top);
}
export function $$h4(e, t = $$u8, i = !0) {
  let {
    top,
    left,
    width,
    height
  } = e.getBoundingClientRect();
  let l = top + height;
  return i ? new Point(left + (width - t) / 2, l) : new Point(left + width - t, l);
}
export function $$g1(e = null, t) {
  return Dr.matches(t) ? t.payload : Ql.matches(t) ? null : e;
}
export function $$f5(e = {
  isShown: !1
}, t) {
  return bS.matches(t) ? {
    ...t.payload,
    isShown: !0
  } : Uv.matches(t) ? {
    isShown: !1
  } : e;
}
export function $$_7(e = {
  isShown: !1
}, t) {
  return qX.matches(t) ? {
    ...t.payload,
    isShown: !0
  } : vq.matches(t) ? {
    isShown: !1
  } : e;
}
export function $$A2(e = !1, t) {
  return _$$Mt.matches(t) ? t.payload : e;
}
export function $$y0(e = {
  isShown: !1
}, t) {
  return C.matches(t) ? {
    ...t.payload
  } : B.matches(t) || ho.matches(t) || _$$a.matches(t) ? {
    isShown: !1
  } : e;
}
export function $$b9(e = null, t) {
  return D.matches(t) ? t.payload : w.matches(t) ? null : e;
}
export const AJ = $$y0;
export const CG = $$g1;
export const Mt = $$A2;
export const TS = $$m3;
export const VZ = $$h4;
export const XJ = $$f5;
export const cn = $$p6;
export const qI = $$_7;
export const qo = $$u8;
export const vB = $$b9;