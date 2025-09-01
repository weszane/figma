import { c2 } from "../905/382883";
import { getFeatureFlags } from "../905/601108";
import { Mo, Yn, UE, Ws } from "../figma_app/152690";
var $$s1 = (e => (e[e.Standard = 0] = "Standard", e[e.Default = 1] = "Default", e[e.Mixed = 2] = "Mixed", e[e.Inherited = 3] = "Inherited", e[e.Deleted = 4] = "Deleted", e))($$s1 || {});
export function $$o0(e, t, r, s, o) {
  let l = function (e, t, r) {
    let i = [];
    let s = t && t !== Mo && e.every(e => !c2(e.modeId, t)) ? Yn : t || (r ? UE : Ws);
    if (s === Mo && i.push({
      type: 2,
      isCurrentlyActive: !0
    }), r) {
      let t = r === Mo ? Mo : e.find(e => c2(e.modeId, r))?.name;
      i.push({
        type: 3,
        isCurrentlyActive: s === UE,
        modeId: "string" != typeof r ? r : void 0,
        name: t
      });
    } else if (e[0]) {
      let t = e[0];
      i.push({
        type: 1,
        isCurrentlyActive: s === Ws,
        name: t.name,
        isCompatible: t.isCompatible
      });
    }
    s === Yn && i.push({
      type: 4,
      isCurrentlyActive: !0
    });
    return i;
  }(t, r, s);
  let d = function e(a) {
    let s = [];
    for (let e of t.filter(e => e.modeId.collectionKey === a)) s.push({
      type: 0,
      isCurrentlyActive: c2(e.modeId, r),
      name: e.name,
      modeId: e.modeId,
      isCompatible: e.isCompatible,
      collectionName: e.collectionName
    });
    if (!getFeatureFlags().ds_extended_collections) return s;
    let l = o[a];
    return l ? [...s, ...[...l].map(t => e(t)).flat().sort((e, t) => e.collectionName.localeCompare(t.collectionName))] : s;
  }(e);
  let c = t.some(e => !e.isCompatible);
  let u = new Map(t.map(e => [e.modeId.collectionKey, e.collectionName]));
  let p = (() => {
    let t = d.find(e => 0 === e.type && e.isCurrentlyActive);
    if (t) return t.modeId.collectionKey;
    let r = l.find(e => 3 === e.type);
    return r && r.isCurrentlyActive && r.modeId ? r.modeId.collectionKey : e;
  })();
  return {
    formattedModeOptions: [...l, ...d],
    hasIncompatibleMode: c,
    collectionsInFamily: u,
    activeCollectionKeyInFamily: p
  };
}
export const T = $$o0;
export const Z = $$s1;