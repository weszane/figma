import { ii } from "../905/859698";
import { Fullscreen } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { Av } from "../figma_app/646357";
import { PW } from "../figma_app/633080";
export function $$l4(e, t) {
  let r = t.get(e)?.symbolId;
  if (r) {
    let n;
    let i;
    let a = t.get(r);
    let s = a?.containingStateGroupId;
    if (a?.isState && s) {
      let e = t.get(s);
      e?.isStateGroup && (n = e?.stateGroupKey, i = e?.sharedStateGroupVersion);
    }
    let {
      componentKey,
      sharedSymbolVersion
    } = a ?? {};
    return {
      instanceGUID: e,
      backingGUID: r,
      componentKey: componentKey ?? void 0,
      stateGroupKey: n ?? void 0,
      symbolVersion: sharedSymbolVersion ?? void 0,
      stateGroupVersion: i ?? void 0
    };
  }
  return null;
}
function d(e, t, r) {
  let n = Av(t);
  if (!n) return;
  let i = getSingletonSceneGraph().developerFriendlyIdFromGuid(e.instanceGUID);
  r[n] ? r[n].instanceIdsToUpdate.push(i) : r[n] = {
    updateAsset: t,
    instanceIdsToUpdate: [i]
  };
}
export function $$c5(e, t, r) {
  let i = {};
  let a = {};
  for (let t of r) for (let r of e) r.component_key && (t.componentKey && t.componentKey === r.component_key ? t.symbolVersion && t.symbolVersion !== r.content_hash && d(t, r, i) : t.componentKey && r.oldSubscribedKeysToUpdate.includes(t.componentKey) ? d(t, r, i) : r.localIdsToUpdate.includes(t.backingGUID) && d(t, r, i));
  for (let e of r) for (let r of t) if (r.key) {
    if (e.componentKey && e.stateGroupKey && e.stateGroupKey === r.key) e.stateGroupVersion && e.stateGroupVersion !== r.version && Object.keys(r.newStateKeyToOutdatedItems).includes(e.componentKey) && d(e, r, a);else for (let t of Object.keys(r.newStateKeyToOutdatedItems)) e.componentKey && r.newStateKeyToOutdatedItems[ii(t)].oldSubscribedKeysToUpdate.includes(e.componentKey) ? d(e, r, a) : r.newStateKeyToOutdatedItems[ii(t)].localIdsToUpdate.includes(e.backingGUID) ? d(e, r, a) : e.componentKey && e.componentKey === t && d(e, r, a);
  }
  return {
    componentInstanceUpdateInfo: i,
    stateInstanceUpdateInfo: a
  };
}
export function $$u3(e, t, r) {
  return t && r ? {
    updateAsset: t,
    styleGUIDs: [...new Set([r, ...e])]
  } : t ? {
    updateAsset: t,
    styleGUIDs: e
  } : null;
}
export function $$p8(e, t) {
  return e.find(e => t?.isLocalStyle ? -1 !== e.localIdsToUpdate.indexOf(t.GUID) : !!t?.key && -1 !== e.oldSubscribedKeysToUpdate.indexOf(t.key) || e.key === t?.key && t.version && e.content_hash !== t.version) ?? null;
}
export function $$_1(e, t) {
  return e ? t.filter(({
    key: t,
    version: r
  }) => e.oldSubscribedKeysToUpdate.includes(t) || t === e.key && r !== e.content_hash).map(e => e.nodeId).concat(e.localIdsToUpdate) : [];
}
export function $$h7(e, t) {
  return [...Object.values(e), ...Object.values(t)].reduce((e, t) => e += t.instanceIdsToUpdate.length, 0);
}
export function $$m0(e, t) {
  return e.component_key && e.content_hash ? Fullscreen.getOutdatedComponentInstanceDevIds(e.component_key, e.content_hash, e.oldSubscribedKeysToUpdate, e.localIdsToUpdate, t || "") : [];
}
export function $$g6(e, t) {
  return Fullscreen.getOutdatedStateInstanceDevIds(e.version, e.newStateKeyToOutdatedItems, t || "");
}
export function $$f2(e) {
  return e.type === PW.COMPONENT ? $$m0(e, void 0).length : $$g6(e, void 0).length;
}
export const LB = $$m0;
export const T7 = $$_1;
export const TF = $$f2;
export const V9 = $$u3;
export const aK = $$l4;
export const cB = $$c5;
export const jO = $$g6;
export const jR = $$h7;
export const v2 = $$p8;