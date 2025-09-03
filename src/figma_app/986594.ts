import { useCallback } from "react";
import { ServiceCategories as _$$e } from "../905/165054";
import { htN, ZEs } from "../figma_app/763686";
import { fn as _$$fn, sH } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { $D } from "../905/11";
import { c$ } from "../figma_app/618433";
import { w1 } from "../figma_app/649254";
import { e as _$$e2 } from "../905/810361";
import { tS } from "../figma_app/516028";
import { Fk } from "../figma_app/167249";
export function $$h1() {
  return Fk(e => function (e) {
    if (0 === e.length) return !0;
    let t = e[0]?.getNearestDakotaCollectionId();
    return !!t && e.every(e => e.getNearestDakotaCollectionId() === t);
  }(e.getDirectlySelectedNodes()));
}
export function $$m6(e) {
  return getSingletonSceneGraph().getDirectlySelectedNodes().every(t => (!e || !!e.includes(t.type)) && null !== t.getNearestDakotaCollectionId());
}
export function $$g9() {
  return getSingletonSceneGraph().getDirectlySelectedNodes().some(e => e.isPrimaryInstance || e.isInstanceSublayer);
}
export function $$f0(e = getSingletonSceneGraph().getDirectlySelectedNodes(), t) {
  return e.every(e => t.includes(e.type) && null !== e.getNearestDakotaCollectionId());
}
export function $$E2(e, t) {
  return e.every(e => e.isInDakotaRepeater && e.getNearestDakotaCollectionId() === t);
}
export function $$y11(e, t) {
  return e.every(e => e.getNearestDakotaCollectionId() === t);
}
export function $$b4() {
  return getSingletonSceneGraph().getDirectlySelectedNodes().some(e => e.isInDakotaRepeater);
}
export function $$T7(e) {
  return e.some(e => null !== e.getNearestDakotaCollectionId());
}
export function $$I3(e) {
  let t = tS();
  let r = c$(t).data;
  return useCallback(async (t, n) => {
    let i = await w1(t);
    if (!i) return;
    let s = (r ?? []).find(e => e.id === t);
    let o = s?.name ?? "CMS";
    let l = htN?.getSelectedNodesToConvertIntoRepeatersGUIDs(ZEs.HAS_IDENTICAL_CHILDREN) ?? [];
    let d = l.length > 0 ? l : htN?.getSelectedNodesToConvertIntoRepeatersGUIDs(ZEs.HAS_CHILDREN) ?? [];
    d.length > 0 && (htN?.createRepeatersFromValidatedNodesList(d, t, i.length, o, e), n?.());
  }, [r, e]);
}
export function $$S10(e) {
  if (!_$$e2) return e;
  let t = e.filter(e => e.isInPrimaryBreakpointFrame);
  let r = new Set(t.map(e => e.multiEditGlueId ?? ""));
  return [...t, ...e.filter(e => !e.isInPrimaryBreakpointFrame && (e.multiEditGlueId && !r.has(e.multiEditGlueId) ? (r.add(e.multiEditGlueId), !0) : !_$$fn(sH(e.multiEditGlueId))))];
}
export function $$v8(e) {
  if (1 === e.length) return e[0];
  let t = $$S10(e);
  return 1 === t.length ? t[0] : void 0;
}
export function $$A5(e) {
  let t = getSingletonSceneGraph();
  return t.get(e)?.getDakotaSelectorCollectionId() || ($D(_$$e.CMS, Error("CMS selector doesn't have a collection ID"), {
    extra: {
      nodeId: e
    }
  }), null);
}
export const HA = $$f0;
export const Hb = $$h1;
export const J6 = $$E2;
export const OU = $$I3;
export const Rj = $$b4;
export const WI = $$A5;
export const ZS = $$m6;
export const fn = $$T7;
export const kk = $$v8;
export const o6 = $$g9;
export const oj = $$S10;
export const qs = $$y11;