import { UN } from "../905/700578";
import { filterNotNullish } from "../figma_app/656233";
export function $$a1(e) {
  let t = UN().get(e);
  return t?.type === "SYMBOL" || t?.isStateGroup ? t : null;
}
function s(e, t) {
  let i = e.sceneGraph;
  return filterNotNullish(e.findAllWithCriteriaGUIDs({
    types: t
  }).map(e => i.get(e)));
}
export function $$o0(e, t) {
  let i = [];
  let n = new Set();
  let r = [...e];
  for (; 0 !== r.length;) {
    let e = r.pop();
    if (!(!e || n.has(e.guid))) {
      if (n.add(e.guid), e.parentNode?.isStateGroup) {
        if (r.push(e.parentNode), !t.followInstances) continue;
      } else if ("SYMBOL" === e.type && (i.push(e), !t.followInstances)) continue;
      if (!e.isStateGroup || (i.push(e), t.followInstances)) {
        if (t.followInstances) {
          if ("INSTANCE" === e.type && e.symbolId) {
            let t = e.sceneGraph.get(e.symbolId);
            t && r.push(t);
          }
          r.push(...s(e, ["INSTANCE", "COMPONENT", "COMPONENT_SET"]));
        } else r.push(...s(e, ["COMPONENT", "COMPONENT_SET"]));
      }
    }
  }
  return i;
}
export const B = $$o0;
export const c = $$a1;