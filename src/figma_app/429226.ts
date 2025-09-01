import { Xc } from "../905/927405";
import { _H } from "../figma_app/243058";
import { Hr, dI, sH, fn } from "../905/871411";
export function $$s0(e) {
  var t;
  return e.interactionID === Hr && e.behaviorId ? `${dI(e.nodeID)}~${(t = e.behaviorId).behaviorType !== Xc.Code ? t.behaviorType.toString() : t.codeComponentId ? t.codeComponentId.toString() : (console.error("BehaviorId inconsistent: behaviorType == Code but no codeComponentId found"), "")}` : `${dI(e.nodeID)}~${dI(e.interactionID)}`;
}
export function $$o1(e) {
  let [t, r] = e.split("~");
  let s = sH(t);
  if (!s || !r) return null;
  let o = sH(r);
  if (o && fn(o)) return {
    nodeID: s,
    interactionID: o
  };
  let l = Object.values(Xc).find(e => e === r);
  if (l) return {
    nodeID: s,
    interactionID: Hr,
    behaviorId: {
      behaviorType: l
    }
  };
  {
    let e = _H.fromString(r);
    if (e) return {
      nodeID: s,
      interactionID: Hr,
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