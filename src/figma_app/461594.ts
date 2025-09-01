import n from "../vendor/73823";
import { Mz } from "../vendor/925040";
import { P8 } from "../905/270781";
import { dK, AF } from "../figma_app/889655";
import { C1, S8, TJ, QW } from "../figma_app/505098";
var i = n;
let $$d1 = P8([C1, S8, TJ], (e, t, r) => {
  if (!r && e && t && e[t]) return e[t].primaryInstances;
});
let c = P8([dK, C1, S8, TJ, QW], (e, t, r, n, a) => {
  if (n) return;
  let s = [];
  let o = new Set();
  if (t && r && t[r]) {
    let n = e.get(r);
    if (!n) return;
    if (!n.isStateGroup || 0 === a.length) return i()(t[r].primaryInstances?.filter(e => e.isBubbled) || [], e => [e.connectedGUIDs, ...e.bubbledNestedInstances.map(e => e.connectedGUIDs)]);
    for (let e of a) for (let r of t[e]?.primaryInstances?.filter(e => e.isBubbled) || []) {
      if (r.connectedGUIDs && !o.has(r.connectedGUIDs[0])) {
        for (let e of r.connectedGUIDs) o.add(e);
        s.push(r.connectedGUIDs);
      }
      for (let e of r.bubbledNestedInstances) if (e.connectedGUIDs && !o.has(e.connectedGUIDs[0])) {
        for (let t of e.connectedGUIDs) o.add(t);
        s.push(e.connectedGUIDs);
      }
    }
    return s;
  }
});
let $$u0 = P8([C1, AF], (e, t) => {
  if (!t || !t.isAlive || "INSTANCE" !== t.type) return [];
  let r = t.guid;
  return e && r && e[r] ? e[r].bubbledNestedInstanceGUIDs?.map(e => [e]) ?? [] : [];
});
let $$p2 = Mz([c, $$u0], (e, t) => e || t || []);
export const Ae = $$u0;
export const K4 = $$d1;
export const Z3 = $$p2;