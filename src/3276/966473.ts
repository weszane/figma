import { lg } from "../figma_app/976749";
import { t as _$$t } from "../905/851577";
import { N } from "../905/645480";
import { Rt } from "../figma_app/979658";
import { F5, oM } from "../905/192343";
export function $$l0(e) {
  let t = "whiteboard" === lg();
  let n = F5();
  let l = async o => (e.insertAction(o), t && oM({
    type: Rt.ORG_FACE_STAMPS,
    source: e.triggeredFrom,
    options: {
      ...n,
      query: e.searchQuery
    }
  }), await Promise.resolve());
  return _$$t(e, {
    insertAction: l,
    dragPreviewPointerPosition: N.RELATIVE,
    getDragPreviewSrc: () => e.iconSrc,
    recordingKey: `insertable-facestamp-${e.resource.id}-${e.mini ? "mini" : "full"}`
  });
}
export const Z = $$l0;