export function $$n3(e) {
  for (let t in e) return !1;
  return !0;
}
export function $$i6(e) {
  for (let t in e) return t;
  return null;
}
export function $$a2(e) {
  let t = null;
  for (let r in e) {
    if (null !== t) return null;
    t = r;
  }
  return t;
}
export function $$s4(e, t) {
  let r = {
    ...e
  };
  for (let [e, n] of Object.entries(t)) null != n && (r[e] = n);
  return r;
}
export function $$o5(e, t) {
  let r = {};
  for (let [n, i] of Object.entries(e).sort(t)) r[n] = i;
  return r;
}
export const Bq = function e(t, r = "") {
  return Object.fromEntries(Object.entries(t).flatMap(([t, n]) => {
    let i = "" === r ? t : `${r}.${t}`;
    return n && "object" == typeof n ? Object.entries(e(n, i)) : [[i, n]];
  }));
};
export const Dy = function e(t, r, n) {
  for (let i in t) {
    let a = "" === n ? i : n + "." + i;
    Array.isArray(t[i]) ? r[a] = JSON.stringify(t[i]) : "object" == typeof t[i] && null !== t[i] ? e(t[i], r, a) : r[a] = t[i];
  }
};
export const IL = $$a2;
export const Im = $$n3;
export const b$ = $$s4;
export const mf = $$o5;
export const o = $$i6;