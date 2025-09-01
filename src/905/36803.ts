export function $$n1(e, t) {
  if (!t) return e;
  let i = {
    ...e
  };
  for (let e in t) null != t[e] && (i[e] = t[e]);
  return i;
}
export function $$r3(e) {
  return Object.keys(e);
}
export function $$a2(e) {
  return Object.entries(e);
}
export function $$s0(e) {
  for (let t in e) return !1;
  return !0;
}
export const RI = $$s0;
export const Tv = $$n1;
export const WP = $$a2;
export const uv = $$r3;