import { useEffect } from "react";
import { getFeatureFlags } from "../905/601108";
import { resourceUtils } from "../905/989992";
import { analyticsEventManager } from "../905/449184";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { useWebLoggerTimer } from "../905/485103";
import { BU, LK } from "../figma_app/199513";
export let $$c0 = getFeatureFlags().folder_preview_file_pagination ? function ({
  folderId: e,
  shouldShowOnlyTrashedFiles: t
}) {
  let [i, r] = setupResourceAtomHandler(BU({
    folderId: e,
    sort_column: "touched_at",
    sort_order: "desc",
    page_size: 8,
    shouldShowOnlyTrashedFiles: t,
    skipFetchingRepoBranches: !0
  }));
  let s = resourceUtils.useTransform(i, e => e.files);
  let l = "loaded" === s.status && s.data.length < 8 && i.hasNextPage && !i.isFetchingNextPage;
  let c = r.fetchNextPage;
  useEffect(() => {
    l && c();
  }, [l, c]);
  u({
    folderId: e,
    isReady: "loaded" === s.status,
    isPaginated: !0
  });
  return s;
} : function ({
  folderId: e,
  shouldShowOnlyTrashedFiles: t
}) {
  let i = resourceUtils.useTransform(LK(e, !0, t), e => e.previewFiles);
  u({
    folderId: e,
    isReady: "loaded" === i.status,
    isPaginated: !1
  });
  return i;
};
function u({
  folderId: e,
  isReady: t,
  isPaginated: i
}) {
  useWebLoggerTimer(t, (t, n, r) => {
    n || r || 0 === t || analyticsEventManager.trackDefinedMetric("file_browser.folder_preview_files_load_time", {
      durationMs: t,
      isPaginated: i,
      folderId: e
    });
  });
}
export const R = $$c0;