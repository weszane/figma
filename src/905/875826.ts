export function $$n5(e, t, i) {
  i < t && ([t, i] = [i, t]);
  return Math.min(Math.max(e, t), i);
}
export function $$r1(e, t, i) {
  e = null == t ? e : Math.max(e, t);
  return null == i ? e : Math.min(e, i);
}
export function $$a4(e, t) {
  return Math.round(e / t) * t;
}
export function $$s0(e, t, i, n) {
  if (e < t) for (e += n; e <= t;) e += i;else if (e > i) for (e -= n; e >= i;) e -= i;
  return e;
}
export function $$o3(e, t, i) {
  let n = e + t;
  let r = Math.sign(t);
  let a = (-1 === r ? Math.ceil : 1 === r ? Math.floor : Math.round)(n / i) * i;
  return Math.abs(e - a) < Number.EPSILON ? n : a;
}
export function $$l2(e, t) {
  let i = e[0];
  let n = t(i);
  for (let r = 1; r < e.length; ++r) {
    let a = e[r];
    let s = t(a);
    s < n && (n = s, i = a);
  }
  return [i, n];
}
export function $$d6(e, t) {
  return (e % t + t) % t;
}
export const CP = $$s0;
export const KY = $$r1;
export const RZ = $$l2;
export const jN = $$o3;
export const n$ = $$a4;
export const qE = $$n5;
export const sj = $$d6;