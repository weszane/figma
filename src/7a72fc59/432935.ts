import { useMemo } from "react";
import { useSelector } from "react-redux";
import { F7 } from "../905/859698";
import { SceneGraphHelpers } from "../figma_app/763686";
import { At } from "../905/973142";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
function d() {
  let e = useSelector(e => e.mirror.selectionProperties.stateGroupSelectionInfo);
  return useMemo(() => e?.allStates ? e.allStates.sort((t, n) => x(t, e.stateGroupModel.propertySortOrder, e.stateGroupModel.propertyValues) - x(n, e.stateGroupModel.propertySortOrder, e.stateGroupModel.propertyValues)).map(e => e.symbol.nodeId) : [], [e]);
}
export function $$c1() {
  let e = useSelector(e => e.mirror.sceneGraph);
  let t = d();
  return useMemo(() => {
    let n = t => {
      let n = e.get(t);
      if (!n?.publishID) return null;
      let l = At(n.description);
      let r = n.description;
      let d = {
        type: PrimaryWorkflowEnum.COMPONENT,
        name: n.name,
        description: l,
        description_rt: r,
        isLocal: !1,
        userFacingVersion: F7(n.userFacingVersion),
        node_id: n.publishID,
        library_key: n.sourceLibraryKey
      };
      n.sharedSymbolVersion && (d.content_hash = n.sharedSymbolVersion);
      n.componentKey && (d.component_key = n.componentKey, d.thumbnail_url = `/component/${n.componentKey}/thumbnail?ver=${d.content_hash}`, d.canvas_url = `/component/${n.componentKey}/canvas?ver=${d.content_hash}`);
      let c = SceneGraphHelpers.getNodeSize(t);
      c && (d.min_node_height = c.height, d.min_node_width = c.width);
      return d;
    };
    return new Map(t.map(e => [e, n(e)]));
  }, [e, t]);
}
export function $$u0() {
  let e = d();
  let t = $$c1();
  return e.filter(e => !!t.get(e));
}
function x(e, t, n) {
  let l = new Map();
  for (let [t, n] of e.symbol.name.split(",").map(e => e.trim().split("="))) t && n && l.set(t, n);
  let r = 0;
  for (let e of t) r = r / 10 + n[e].indexOf(l.get(e) || "");
  return r;
}
export const _H = $$u0;
export const mJ = $$c1;
