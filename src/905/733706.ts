import { ServiceCategories as _$$e } from "../905/165054";
import { ri } from "../figma_app/15927";
import { reportError } from "../905/11";
export function $$s1(e, t, i, r, s, l, d) {
  var c = [];
  for (let t of e) {
    let e = $$o0(t);
    e ? d?.[t] ? c.push({
      ...e,
      isOnlyDirectlySelected: !0
    }) : c.push(e) : (console.error(`Failed to decode: ${t}`), reportError(_$$e.TEXT_AND_VECTOR, Error("Failed to decode selection paints")));
  }
  return c.map((e, n) => (e.count = t ? t[n] : 0, e.uniqueNodesCount = i ? i[n] : 0, e.uniqueNodeIds = r ? r[n] : [], e.conflictNodesCount = s ? s[n] : 0, e.variableScopes = new Set(l ? l[n] : []), e));
}
export function $$o0(e) {
  let t = ri(e);
  if (1 === t.length) return {
    encodedPaint: e,
    paint: t[0]
  };
  console.error(`Failed to decode: ${e}`);
  reportError(_$$e.TEXT_AND_VECTOR, Error("Failed to decode selection paint"));
}
export const K = $$o0;
export const S = $$s1;