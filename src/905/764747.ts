let n = new Map();
export function $$r2(e) {
  return n.has(e);
}
export function $$a1(e, t) {
  return (n.get(e) ?? [])[+t] ?? "";
}
export function $$s0(e) {
  return String((n.get(e) ?? []).length - 1);
}
export const Qx = $$s0;
export const WL = $$a1;
export const ZY = $$r2;