import { atomStoreManager } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { S3 } from "../905/485103";
import { o as _$$o } from "../figma_app/915774";
import { X } from "../905/853613";
import { TG } from "../905/72677";
export function $$d0(e, t, i, d, c) {
  let u = X(t.library_key);
  let p = atomStoreManager.get(TG);
  trackEventAnalytics("ComponentLike Add instance", {
    editingFileKey: e,
    componentLikeLibraryKey: t.library_key,
    componentLikeGUID: t.node_id,
    success: i,
    partnerType: u,
    isExample: _$$o(t, p),
    appleEulaAccepted: d
  }, {
    forwardToDatadog: !0
  });
  c && S3(c.metricName, c.duration);
}
export const V = $$d0;