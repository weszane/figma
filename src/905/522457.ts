import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { zl } from "../figma_app/27355";
import { az } from "../905/449184";
import { u8 } from "../figma_app/976749";
import { Y5 } from "../figma_app/455680";
import { ze } from "../figma_app/516028";
import { CO } from "../figma_app/53721";
import { W } from "../905/632622";
import { x_, ay, op } from "../figma_app/407767";
import { fX, Z9, JL } from "../figma_app/663669";
export function $$h0(e, t) {
  getFeatureFlags().anticipation_trigger_shadow && (az.trackDefinedEvent("auto_suggest.trigger_shadowing", g({
    insertedLocation: e,
    insertedNodeGuid: t,
    isDelayed: !1
  })), setTimeout(() => {
    az.trackDefinedEvent("auto_suggest.trigger_shadowing", g({
      insertedLocation: e,
      insertedNodeGuid: t,
      isDelayed: !0
    }));
  }, 5e3));
}
function g({
  insertedLocation: e,
  insertedNodeGuid: t,
  isDelayed: i
}) {
  let r = zl.get(W);
  let s = getSingletonSceneGraph();
  let h = s.get(t);
  let g = h?.parentNode;
  let f = r ? s.get(r) : void 0;
  let _ = Y5.getViewportInfo();
  let A = zl.get(ze) ?? void 0;
  let y = zl.get(u8);
  let b = y ? CO(y) : void 0;
  let v = performance.now();
  let I = fX(_, Z9());
  let E = performance.now();
  let x = I ? s.get(I) : void 0;
  return {
    fileKey: A,
    insertedLocation: x_(e),
    insertedNodeGuid: t,
    insertedNodeType: h?.type,
    insertedNodeBounds: ay(h?.absoluteBoundingBox),
    parentNodeGuid: g?.guid,
    parentNodeType: g?.type,
    parentNodeBounds: ay(g?.absoluteBoundingBox),
    lastSelectedNodeGuid: f?.guid,
    lastSelectedNodeType: f?.type,
    lastSelectedNodeBounds: ay(f?.absoluteBoundingBox),
    viewportInfo: op(_),
    dominantFrameGuid: I,
    dominantFrameNodeType: x?.type,
    dominantFrameBounds: ay(x?.absoluteBoundingBox),
    version: JL,
    isDelayedLog: i,
    durationMs: E - v,
    productType: b
  };
}
export const L = $$h0;