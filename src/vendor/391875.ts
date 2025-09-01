export function $$i0(e, r, n, i) {
  let s = n ? n.call(i, e, r) : void 0;
  if (void 0 !== s) return !!s;
  if (e === r) return !0;
  if ("object" != typeof e || !e || "object" != typeof r || !r) return !1;
  let o = Object.keys(e);
  let a = Object.keys(r);
  if (o.length !== a.length) return !1;
  let h = Object.prototype.hasOwnProperty.bind(r);
  for (let a = 0; a < o.length; a++) {
    let d = o[a];
    if (!h(d)) return !1;
    let p = e[d];
    let g = r[d];
    if (!1 === (s = n ? n.call(i, p, g, d) : void 0) || void 0 === s && p !== g) return !1;
  }
  return !0;
}
export const b = $$i0;