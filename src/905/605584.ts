function n(e, t) {
  return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
}
export function $$r0(e, t) {
  if (n(e, t)) return !0;
  if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
  let i = Object.keys(e);
  let r = Object.keys(t);
  if (i.length !== r.length) return !1;
  for (let r = 0; r < i.length; r++) if (!Object.prototype.hasOwnProperty.call(t, i[r]) || !n(e[i[r]], t[i[r]])) return !1;
  return !0;
}
export const A = $$r0;