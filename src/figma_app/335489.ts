import { oV } from "../905/216495";
export function $$i0(e, t) {
  let r = {};
  for (let n of e) {
    let e;
    let i = t.get(n);
    (e = i?.type === "INSTANCE" ? i.symbolId : i?.containingSymbolId ?? i?.topmostBackingStateId) && t.get(e)?.isState && (r[e] || (r[e] = []), r[e].push(n));
  }
  return r;
}
export function $$a1(e, t, r) {
  if (!e) return {};
  let i = {};
  for (let a of t) {
    let t = e[a]?.stateVariantProps?.propertyValues;
    if (t) for (let e of r) e in i && i[e] !== t[e] ? i[e] = i[e] && t[e] ? oV : "" : i[e] = t[e] || "";
  }
  return i;
}
export const D = $$i0;
export const s = $$a1;