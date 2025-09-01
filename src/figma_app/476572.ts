export function $$n1(e, t) {
  let r = new Set();
  let [n, i] = e.size < t.size ? [e, t] : [t, e];
  for (let e of n) i.has(e) && r.add(e);
  return r;
}
export function $$i0(e, t) {
  let r = new Set();
  for (let n of e) t.has(n) || r.add(n);
  return r;
}
export function $$a3(e, t) {
  if (e.size !== t.size) return !1;
  for (let r of e) if (!t.has(r)) return !1;
  return !0;
}
export function $$s2(e, t, r) {
  let n = new Map();
  let [i, a] = e.size < t.size ? [e, t] : [t, e];
  for (let [e, t] of i.entries()) {
    let i = a.get(e);
    null != i && n.set(e, r(e, t, i));
  }
  return n;
}
export const _i = $$i0;
export const iR = $$n1;
export const wD = $$s2;
export const yZ = $$a3;