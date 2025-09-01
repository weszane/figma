export let $$i5 = "undefined" == typeof window || "Deno" in window;
export function $$s12() {}
export function $$o6(e, r) {
  return "function" == typeof e ? e(r) : e;
}
export function $$a9(e) {
  return "number" == typeof e && e >= 0 && e !== 1 / 0;
}
export function $$h10(e, r) {
  return Math.max(e + (r || 0) - Date.now(), 0);
}
export function $$d15(e, r, n) {
  return E(e) ? "function" == typeof r ? {
    ...n,
    queryKey: e,
    queryFn: r
  } : {
    ...r,
    queryKey: e
  } : e;
}
export function $$p7(e, r, n) {
  return E(e) ? [{
    ...r,
    queryKey: e
  }, n] : [e || {}, r];
}
export function $$g3(e, r) {
  let {
    type = "all",
    exact,
    fetchStatus,
    predicate,
    queryKey,
    stale
  } = e;
  if (E(queryKey)) {
    if (exact) {
      if (r.queryHash !== $$v1(queryKey, r.options)) return !1;
    } else if (!$$b0(r.queryKey, queryKey)) return !1;
  }
  if ("all" !== type) {
    let e = r.isActive();
    if ("active" === type && !e || "inactive" === type && e) return !1;
  }
  return ("boolean" != typeof stale || r.isStale() === stale) && (void 0 === fetchStatus || fetchStatus === r.state.fetchStatus) && (!predicate || !!predicate(r));
}
export function $$m13(e, r) {
  let {
    exact,
    fetching,
    predicate,
    mutationKey
  } = e;
  if (E(mutationKey)) {
    if (!r.options.mutationKey) return !1;
    if (exact) {
      if ($$y4(r.options.mutationKey) !== $$y4(mutationKey)) return !1;
    } else if (!$$b0(r.options.mutationKey, mutationKey)) return !1;
  }
  return ("boolean" != typeof fetching || "loading" === r.state.status === fetching) && (!predicate || !!predicate(r));
}
export function $$v1(e, r) {
  return (r?.queryKeyHashFn || $$y4)(e);
}
export function $$y4(e) {
  return JSON.stringify(e, (e, r) => _(r) ? Object.keys(r).sort().reduce((e, n) => (e[n] = r[n], e), {}) : r);
}
export function $$b0(e, r) {
  return O(e, r);
}
function O(e, r) {
  return e === r || typeof e == typeof r && !!e && !!r && "object" == typeof e && "object" == typeof r && !Object.keys(r).some(n => !O(e[n], r[n]));
}
function x(e, r) {
  if (e === r) return e;
  let n = k(e) && k(r);
  if (n || _(e) && _(r)) {
    let i = n ? e.length : Object.keys(e).length;
    let s = n ? r : Object.keys(r);
    let o = s.length;
    let a = n ? [] : {};
    let h = 0;
    for (let i = 0; i < o; i++) {
      let o = n ? i : s[i];
      a[o] = x(e[o], r[o]);
      a[o] === e[o] && h++;
    }
    return i === o && h === i ? e : a;
  }
  return r;
}
export function $$w8(e, r) {
  if (e && !r || r && !e) return !1;
  for (let n in e) if (e[n] !== r[n]) return !1;
  return !0;
}
function k(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function _(e) {
  if (!S(e)) return !1;
  let r = e.constructor;
  if (void 0 === r) return !0;
  let n = r.prototype;
  return !!(S(n) && n.hasOwnProperty("isPrototypeOf"));
}
function S(e) {
  return "[object Object]" === Object.prototype.toString.call(e);
}
function E(e) {
  return Array.isArray(e);
}
export function $$A16(e) {
  return new Promise(r => {
    setTimeout(r, e);
  });
}
export function $$C2(e) {
  $$A16(0).then(e);
}
export function $$T11() {
  if ("function" == typeof AbortController) return new AbortController();
}
export function $$I14(e, r, n) {
  return null != n.isDataEqual && n.isDataEqual(e, r) ? e : "function" == typeof n.structuralSharing ? n.structuralSharing(e, r) : !1 !== n.structuralSharing ? x(e, r) : r;
}
export const Cp = $$b0;
export const F$ = $$v1;
export const G6 = $$C2;
export const MK = $$g3;
export const Od = $$y4;
export const S$ = $$i5;
export const Zw = $$o6;
export const b_ = $$p7;
export const f8 = $$w8;
export const gn = $$a9;
export const j3 = $$h10;
export const jY = $$T11;
export const lQ = $$s12;
export const nJ = $$m13;
export const pl = $$I14;
export const vh = $$d15;
export const yy = $$A16;