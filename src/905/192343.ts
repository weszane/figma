import { sx } from "../905/449184";
import { R } from "../905/103090";
import { nT } from "../figma_app/53721";
export function $$s0() {
  return R(e => function (e) {
    try {
      if (!("selectedView" in e) || "object" != typeof e.selectedView) return;
      let t = e.selectedView;
      if (!("editorType" in t) || t.editorType !== nT.Whiteboard) return;
      if ("search" in e && e.search.sessionId) return {
        session_id: e.search.sessionId
      };
    } catch {
      return;
    }
  }(e));
}
export function $$o1(e) {
  sx("universal_insert_resource_added", {
    resource_id: e.id,
    resource_type: e.type,
    source: e.source,
    ...e.options
  });
}
export const F5 = $$s0;
export const oM = $$o1;