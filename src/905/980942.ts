import { c2 } from "../905/382883";
import { SceneGraphHelpers } from "../figma_app/763686";
var $$a0 = (e => (e.NORMAL = "normal", e.INHERITED_INTERNAL = "inherited_internal", e))($$a0 || {});
export const J = $$a0;
export const j = function e(t, i, a) {
  if (t && i && "value" in t && "value" in i && "object" == typeof t.value && "object" == typeof i.value && "indexOrKey" in t.value && "stablePathToNode" in t.value && "indexOrKey" in i.value && "stablePathToNode" in i.value && "COMPONENT_PROP_ASSIGNMENTS" === t.value.nodeField && "COMPONENT_PROP_ASSIGNMENTS" === i.value.nodeField) {
    let e = t.value.stablePathToNode;
    let n = i.value.stablePathToNode;
    let s = e && 1 === e.length ? a.get(e[0]) : null;
    let o = n && 1 === n.length ? a.get(n[0]) : null;
    if (s && o && s.isState && o.isState && s.containingStateGroupId === o.containingStateGroupId) return SceneGraphHelpers.getExplicitPropDefIDBinding(s.guid, t.value.indexOrKey) === SceneGraphHelpers.getExplicitPropDefIDBinding(o.guid, i.value.indexOrKey);
  }
  if (t && i && "value" in t && "value" in i && "object" == typeof t.value && "object" == typeof i.value && "expressionFunction" in t.value && "expressionArguments" in t.value && "expressionFunction" in i.value && "expressionArguments" in i.value) {
    let n = t.value;
    let r = i.value;
    if (n.expressionFunction !== r.expressionFunction || n.expressionArguments.length !== r.expressionArguments.length) return !1;
    for (let t = 0; t < n.expressionArguments.length; t++) if (!e(n.expressionArguments[t], r.expressionArguments[t], a)) return !1;
    return !0;
  }
  return c2(t, i);
};