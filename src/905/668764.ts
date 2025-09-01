import { YE } from "../figma_app/492908";
let $$r2 = 1;
let $$a1 = 10;
export function $$s0(e, t) {
  if (!e.getIncrementTargets) return null;
  let i = t.selectionStart || 0;
  let n = t.selectionEnd || 0;
  return e.getIncrementTargets(t.value, {
    start: i,
    end: n
  });
}
export function $$o3(e, t, i) {
  return e.getNudgeAmount?.(t, i) ?? (t ? $$a1 : $$r2);
}
export function $$l4(e, t, i, r = {}) {
  if (!e.incrementBy) return t;
  let a = e.incrementBy(t, i, r.incrementTargets ?? null);
  if (r.snap) {
    let i = r.snapResolution || $$o3(e, r.coarse ?? !1, t);
    e.snap ? a = e.snap(a, i) : "number" == typeof a && (a = YE(a, i));
  }
  return e.clamp?.(a) ?? a;
}
export const _L = $$s0;
export const _q = $$a1;
export const bA = $$r2;
export const mb = $$o3;
export const ql = $$l4;