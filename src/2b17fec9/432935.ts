import { useMemo } from "react";
import { useSelector } from "react-redux";
import { F7 } from "../905/859698";
import { SceneGraphHelpers } from "../figma_app/763686";
import { At } from "../905/973142";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
function d() {
  let e = useSelector(e => e.mirror.selectionProperties.stateGroupSelectionInfo);
  return useMemo(() => e?.allStates ? e.allStates.sort((t, i) => p(t, e.stateGroupModel.propertySortOrder, e.stateGroupModel.propertyValues) - p(i, e.stateGroupModel.propertySortOrder, e.stateGroupModel.propertyValues)).map(e => e.symbol.nodeId) : [], [e]);
}
export function $$c1() {
  let e = useSelector(e => e.mirror.sceneGraph);
  let t = d();
  return useMemo(() => {
    let i = t => {
      let i = e.get(t);
      if (!i?.publishID) return null;
      let n = At(i.description);
      let r = i.description;
      let d = {
        type: PrimaryWorkflowEnum.COMPONENT,
        name: i.name,
        description: n,
        description_rt: r,
        isLocal: !1,
        userFacingVersion: F7(i.userFacingVersion),
        node_id: i.publishID,
        library_key: i.sourceLibraryKey
      };
      i.sharedSymbolVersion && (d.content_hash = i.sharedSymbolVersion);
      i.componentKey && (d.component_key = i.componentKey, d.thumbnail_url = `/component/${i.componentKey}/thumbnail?ver=${d.content_hash}`, d.canvas_url = `/component/${i.componentKey}/canvas?ver=${d.content_hash}`);
      let c = SceneGraphHelpers.getNodeSize(t);
      c && (d.min_node_height = c.height, d.min_node_width = c.width);
      return d;
    };
    return new Map(t.map(e => [e, i(e)]));
  }, [e, t]);
}
export function $$u0() {
  let e = d();
  let t = $$c1();
  return e.filter(e => !!t.get(e));
}
function p(e, t, i) {
  let n = new Map();
  for (let [t, i] of e.symbol.name.split(",").map(e => e.trim().split("="))) t && i && n.set(t, i);
  let r = 0;
  for (let e of t) r = r / 10 + i[e].indexOf(n.get(e) || "");
  return r;
}
export const _H = $$u0;
export const mJ = $$c1;
