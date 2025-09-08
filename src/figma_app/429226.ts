import { Xc } from "../905/927405";
import { _H } from "../figma_app/243058";
import { defaultSessionLocalID, sessionLocalIDToString, parseSessionLocalID, isValidSessionLocalID } from "../905/871411";
export function $$s0(e) {
  var t;
  return e.interactionID === defaultSessionLocalID && e.behaviorId ? `${sessionLocalIDToString(e.nodeID)}~${(t = e.behaviorId).behaviorType !== Xc.Code ? t.behaviorType.toString() : t.codeComponentId ? t.codeComponentId.toString() : (console.error("BehaviorId inconsistent: behaviorType == Code but no codeComponentId found"), "")}` : `${sessionLocalIDToString(e.nodeID)}~${sessionLocalIDToString(e.interactionID)}`;
}
export function $$o1(e) {
  let [t, r] = e.split("~");
  let s = parseSessionLocalID(t);
  if (!s || !r) return null;
  let o = parseSessionLocalID(r);
  if (o && isValidSessionLocalID(o)) return {
    nodeID: s,
    interactionID: o
  };
  let l = Object.values(Xc).find(e => e === r);
  if (l) return {
    nodeID: s,
    interactionID: defaultSessionLocalID,
    behaviorId: {
      behaviorType: l
    }
  };
  {
    let e = _H.fromString(r);
    if (e) return {
      nodeID: s,
      interactionID: defaultSessionLocalID,
      behaviorId: {
        behaviorType: Xc.Code,
        codeComponentId: e
      }
    };
  }
  return null;
}
export const d = $$s0;
export const s = $$o1;