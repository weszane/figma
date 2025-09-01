export var $$n4 = (e => (e[e.PIXEL = 0] = "PIXEL", e[e.SCALED = 1] = "SCALED", e))($$n4 || {});
export function $$r5({
  customSettings: e = {}
}) {
  return e?.hideLayout === "true";
}
export function $$a1({
  customSettings: e = {}
}) {
  return e?.hideColor === "true";
}
export function $$s0(e) {
  return $$r5(e) || $$a1(e);
}
export function $$o2(e, {
  unit: t,
  scaleFactor: i
}, n = 5) {
  return 0 === t || 1 === i || 0 === i ? $$l3(e, n) : $$l3(e / i, n);
}
export function $$l3(e, t = 5) {
  return Number(e.toLocaleString("en", {
    maximumFractionDigits: t,
    useGrouping: !1
  }));
}
export const Hw = $$s0;
export const KY = $$a1;
export const hX = $$o2;
export const nk = $$l3;
export const tK = $$n4;
export const vy = $$r5;