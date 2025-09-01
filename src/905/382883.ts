export function $$n1(e, t) {
  return $$o2(e, t, !0);
}
export function $$r3(e, t) {
  return $$o2(e, t, !1, !0);
}
export function $$a4(e, t) {
  return $$o2(e, t, !1, !1, !0);
}
let s = new Set(["vectorNetworkBlob", "version"]);
export function $$o2(e, t, i = !1, n = !1, r = !1) {
  if (n && (e instanceof Array && 0 === e.length && void 0 === t || t instanceof Array && 0 === t.length && void 0 === e || !e && !t)) return !0;
  let a = typeof e;
  if (typeof t !== a) return !1;
  if ("number" === a) return Number.isNaN(e) || Number.isNaN(t) ? n : !!i || (n ? e - t < .01 && e - t > -.01 : e === t);
  if ("object" !== a) return e === t;
  if (null === e != (null === t)) return !1;
  if (null === e) return !0;
  if (e instanceof Array != t instanceof Array) return !1;
  if (e instanceof Array) return e.length === t.length && e.every((e, a) => $$o2(e, t[a], i, n, r));
  let l = Object.keys(e);
  let d = Object.keys(t);
  r && (l = l.filter(t => void 0 !== e[t]), d = d.filter(e => void 0 !== t[e]));
  return l.length === d.length && (n && (l = l.filter(e => !s.has(e)), d = d.filter(e => !s.has(e))), l.sort(), d.sort(), !!l.every((e, t) => e === d[t]) && l.every(a => $$o2(e[a], t[a], i, n, r)));
}
export function $$l0(e, t) {
  for (let i of e) if ($$o2(i, t)) return !0;
  return !1;
}
export const Jj = $$l0;
export const Mm = $$n1;
export const c2 = $$o2;
export const cF = $$r3;
export const he = $$a4;