import { NodeTsApi, SceneGraphTsApi } from "../figma_app/763686";
import { SceneGraphUnavailableError, NodeTsApiUnavailableError } from "../figma_app/518682";
export function $$a0(e) {
  let t = e;
  for (; t.parentNode && "CANVAS" !== t.type && "CANVAS" !== t.parentNode.type;) t = t.parentNode;
  return t;
}
export function $$s1(e, t, r) {
  if (!e) return null;
  if (!NodeTsApi) throw new SceneGraphUnavailableError();
  if (!SceneGraphTsApi) throw new NodeTsApiUnavailableError();
  let a = t.symbolId;
  if (a) {
    let t = r.get(a);
    if (t) {
      let n = r.get(t.containingStateGroupId);
      if (n) {
        let t = n.childrenNodes.find(t => t.componentKey === e);
        if (t) return t;
      }
    }
  }
  return null;
}
export const B = $$a0;
export const t = $$s1;