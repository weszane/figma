import { isPartOfGroup } from "../figma_app/664063";
import { FirstDraftHelpers } from "../figma_app/763686";
import { getSingletonSceneGraph, ReduxSceneGraph } from "../905/700578";
import { atomStoreManager } from "../figma_app/27355";
import { logWarning } from "../905/714362";
import { getTrackingSessionId } from "../905/471229";
import { _s } from "../figma_app/33126";
import { J } from "../905/915227";
import { kS } from "../figma_app/864723";
import { As, ze } from "../figma_app/516028";
export function $$_0(e, t, r, n) {
  if (!e) return [];
  let i = n ?? getSingletonSceneGraph();
  let s = i.get(e);
  if (!s) return [];
  let o = s.findAllWithCriteriaGUIDs({
    types: t,
    ...r
  });
  let l = [];
  for (let e of o) {
    let t = i.get(e);
    t && l.push(t);
  }
  return l;
}
export function $$h9(e) {
  let t = getSingletonSceneGraph().get(e);
  return t ? (t.update(), $$_0(t.guid, ["INSTANCE"])) : [];
}
export function $$m11(e, t) {
  return (e = e.replace(/[^0-9a-z]/gi, "").toLowerCase()) === (t = t.replace(/[^0-9a-z]/gi, "").toLowerCase());
}
export let $$g1 = "Icons";
export function $$f3(e, t) {
  return {
    description: t.name || ""
  };
}
export function $$E5(e) {
  var t;
  e = e.endsWith("s") ? e.slice(0, e.length - 1) : e;
  return `Custom${t = (t = (t = e).replace(/[^0-9a-z]/gi, "")).charAt(0).toUpperCase() + t.substr(1)}`;
}
let y = [$$g1];
export function $$b10(e) {
  for (let t of y) if (isPartOfGroup(e, t)) return t;
  return null;
}
export function $$T14(e) {
  return $$b10(e.componentGroupPath);
}
export function $$I2(e) {
  let t = new ReduxSceneGraph(e);
  return FirstDraftHelpers.getSubscribedVariableCollectionsInScene(t.scene);
}
export function $$S12({
  clientLifecycleId: e
}) {
  return {
    orgId: atomStoreManager.get(_s) || null,
    teamId: atomStoreManager.get(As) || null,
    fileKey: atomStoreManager.get(ze) || null,
    userId: atomStoreManager.get(kS) || null,
    fileSeq: atomStoreManager.get(J)?.toString() || null,
    clientLifecycleId: e,
    trackingSessionId: getTrackingSessionId()
  };
}
export function $$v7(e) {
  return (e.isStateGroup ? e.sharedStateGroupVersion : e.sharedSymbolVersion) ?? "";
}
export function $$A6(e, t) {
  let r = getSingletonSceneGraph().get(e);
  if (!r || r.type !== t) throw Error(`Unexpected node type for id=${e}. Expected ${t} got: ${r?.type}`);
  return r;
}
export function $$x8(e, t, r, n) {
  let i = [];
  if (t.includes(e.type)) {
    if (r) {
      if (r.sharedPluginData) {
        let t = e.getSharedPluginDataKeys(r.sharedPluginData.namespace);
        let n = r.sharedPluginData.keys || [];
        (0 === n.length && t.length > 0 || t.some(e => n.includes(e))) && i.push(e);
      }
    } else i.push(e);
  }
  i.push(...$$_0(e.guid, t, r, n));
  return i;
}
export function $$N13(e, t) {
  let r = getSingletonSceneGraph().get(t);
  return r ? r.getSublayerIdForInstanceOfSymbol(e) : (logWarning("first-draft", "No component sublayer found for", {
    symbolSublayer: r
  }), null);
}
export function $$$$C4(e) {
  if ("LOCAL" !== e.dsKitKey.type) return null;
  let t = FirstDraftHelpers.getKitKey(e.dsKitKey.pageId);
  return t ? {
    ...e,
    dsKitKey: {
      key: t,
      type: "1P_LIBRARY"
    }
  } : null;
}
export const Au = $$_0;
export const C = $$g1;
export const Gy = $$I2;
export const Kp = $$f3;
export const Ol = $$$$C4;
export const PJ = $$E5;
export const So = $$A6;
export const Uk = $$v7;
export const _F = $$x8;
export const g5 = $$h9;
export const iR = $$b10;
export const n6 = $$m11;
export const sF = $$S12;
export const uN = $$N13;
export const vR = $$T14;