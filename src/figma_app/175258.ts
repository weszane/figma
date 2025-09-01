export function $$n2(e, t) {
  return null !== e[t] && !!e[t];
}
export function $$i0(e, t) {
  for (let r of t) if ($$n2(e, r)) return !0;
  return !1;
}
export function $$a1(e, t) {
  for (let r in e) if (!t.includes(r)) return !1;
  return !0;
}
export const Kl = $$i0;
export const OU = $$a1;
export const vx = $$n2;