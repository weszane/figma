import { hMR, glU, Hcu, v4N } from "../figma_app/763686";
import { eU, yu, um, zl, Hj } from "../figma_app/27355";
import { Yc } from "../figma_app/527873";
import { bt } from "../905/270322";
import { Lu } from "../figma_app/453508";
let $$l8 = 75;
let $$d11 = 60;
let $$c7 = 90;
export var $$u4 = (e => (e[e.SAFE = 0] = "SAFE", e[e.WARNING = 1] = "WARNING", e[e.ERROR = 2] = "ERROR", e[e.OOM = 3] = "OOM", e))($$u4 || {});
let p = eU(null);
let $$_3 = eU(e => !!e(p));
export function $$h10(e) {}
let m = yu(um({
  mallocLevelBytes: 0,
  heapMemoryLimit: 1 / 0
}, () => ({
  mallocLevelBytes: Yc(),
  heapMemoryLimit: hMR.getHeapMemoryLimit()
})), ({
  setSelf: e
}) => {
  e();
  let t = setInterval(e, 5e3);
  return () => clearInterval(t);
});
let $$g2 = eU(e => {
  let {
    mallocLevelBytes,
    heapMemoryLimit
  } = e(m);
  let n = e(p);
  let i = mallocLevelBytes / heapMemoryLimit * 100;
  n && (i = n);
  return i = Math.round(100 * (i = Math.max(0, i = Math.min(100, i))) + Number.EPSILON) / 100;
}, (e, t) => {
  t(m);
});
export function $$f1() {
  zl.set($$g2);
  return zl.get($$g2);
}
let E = bt(e => e.modalShown?.type === Lu);
let y = eU(e => {
  let t = e($$g2);
  return e(E) ? 3 : t >= $$l8 ? 2 : t >= $$d11 ? 1 : 0;
}, (e, t) => {
  t($$g2);
});
let $$b6 = Hj(y, e => glU.setMemoryWarningLevel(e));
export function $$T0(e, t) {
  return Yc() / t * e / hMR.getHeapMemoryLimit();
}
export function $$I9(e, t, r) {
  let n = 100 * $$T0(e, t);
  return r ? n >= .1 ? `${n.toFixed(1)}%` : "--" : n >= 10 ? `${n.toFixed(1)}%` : `${n.toFixed(2)}%`;
}
export function $$S5() {
  let e = Hcu?.getSubtreeMemoryUsage(["0:2"], v4N.PRIMARY) ?? 0;
  return Yc() / Hcu.getSubtreeMemoryUsage(["0:0"], v4N.PRIMARY) * e * 100 / hMR.getHeapMemoryLimit();
}
export const KV = $$T0;
export const P3 = $$f1;
export const Tm = $$g2;
export const Vu = $$_3;
export const Wy = $$u4;
export const Zz = $$S5;
export const eE = $$b6;
export const im = $$c7;
export const pl = $$l8;
export const pr = $$I9;
export const rq = $$h10;
export const xk = $$d11;