import { eU, zl } from "../figma_app/27355";
let r = eU(new Map());
function a() {
  return Math.round(Date.now() / 1e3);
}
export function $$s1(e) {
  let t = zl.get(r).get(e);
  if (!t) return [];
  let i = a();
  let s = i - 3600;
  return t.filter(e => e >= s).map(e => i - e);
}
export function $$o0(e) {
  let t = zl.get(r);
  let i = [...(t.get(e) ?? []), a()];
  let s = new Map(t);
  s.set(e, i);
  zl.set(r, s);
  return i;
}
export const v = $$o0;
export const y = $$s1;