import { useSelector } from "react-redux";
import { useDevModeFocusId } from "../figma_app/88239";
import { useSceneGraphSelector } from "../figma_app/722362";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { getSingleSelectedKey } from "../figma_app/889655";
import { jY } from "../figma_app/151869";
import { wS, x9 } from "../figma_app/221240";
import { Zl, uQ } from "../figma_app/311375";
export function $$u2() {
  let e = wS();
  let t = useSelector(e => e.mirror.selectionProperties.symbolGUIDsBackingSelectionContainer);
  let r = useSelector(e => e.mirror.selectionProperties.numSelected);
  return "loaded" === e.status && e.result.dataComponentId ? {
    nodeId: e.result.dataComponentId,
    isDetachedScene: "temp-scene" === e.result.dataLocation && !!e.result.componentKey
  } : 1 === r && t ? {
    nodeId: Object.keys(t)[0]
  } : null;
}
export function $$p3() {
  let e = jY();
  let t = $$u2();
  return t && t?.nodeId ? t.isDetachedScene ? x9(t.nodeId) : Zl(e, t.nodeId) : null;
}
export function $$_0() {
  return function e(t, r) {
    let n = Zl(t, r);
    return n ? "SYMBOL" === n.type || "INSTANCE" === n.type || n.isStateGroup || n.detachedInfo ? n : n.parentGuid ? e(t, n.parentGuid) : null : null;
  }(jY(), useSelector(getSingleSelectedKey));
}
export function $$h4() {
  let e = uQ();
  let t = useDevModeFocusId();
  return e ?? t;
}
export function $$m1() {
  let e = function () {
    let e = $$h4();
    return useSceneGraphSelector().get(e ?? "");
  }();
  let t = useSelector(e => e.mirror.appModel.currentPage);
  let r = useSceneGraphSelector();
  return e?.guid ? r.developerFriendlyIdFromGuid(e?.guid) : t;
}
export function $$g5({
  includeStateGroups: e = !0
} = {}) {
  let t = uQ();
  let r = useDeepEqualSceneValue((t, r) => {
    let n = t?.get(r ?? "");
    return n?.type === "SYMBOL" || n?.type === "INSTANCE" || e && n?.isStateGroup;
  }, t, e);
  let n = wS();
  let i = n && ("loaded" === n.status || "loading" === n.status || "downloading" === n.status);
  return r || i;
}
export const M4 = $$_0;
export const Nf = $$m1;
export const RI = $$u2;
export const lA = $$p3;
export const lU = $$h4;
export const ro = $$g5;