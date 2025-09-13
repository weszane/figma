import { getInitialOptions } from "../figma_app/169182";
import { canAccessFullDevMode } from "../figma_app/473493";
import { trackFileEvent } from "../figma_app/314264";
import { FFileActivityType } from "../figma_app/191312";
import { FEditorType } from "../figma_app/53721";
import { L } from "../905/657783";
export let $$d0 = "Enter Design Mode";
export function $$c1(e, t, r, u, p = {}) {
  let _ = t === FEditorType.DevHandoff;
  let h = t === FEditorType.Illustration;
  let m = {
    source: r,
    hasSeatForDevMode: canAccessFullDevMode(e),
    ...p
  };
  let g = e.openFile?.key;
  if (trackFileEvent(_ ? "Enter Inspect Mode" : h ? "Enter Illustration Mode" : $$d0, g, e, m, {
    forwardToDatadog: u
  }), getInitialOptions().org_id && g && "init" !== r) {
    if (h) return;
    let e = _ ? FFileActivityType.DEV_MODE_FILE_SEEN : FFileActivityType.DESIGN_FILE_SEEN;
    L.postRecentActivity({
      fileKey: g,
      activityType: e
    });
  }
}
export const L3 = $$d0;
export const Ym = $$c1;