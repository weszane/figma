export function $$i1(e, r, n) {
  let i = n.getRegistry();
  let s = i.addTarget(e, r);
  return [s, () => i.removeTarget(s)];
}
export function $$s0(e, r, n) {
  let i = n.getRegistry();
  let s = i.addSource(e, r);
  return [s, () => i.removeSource(s)];
}
export const V = $$s0;
export const l = $$i1;