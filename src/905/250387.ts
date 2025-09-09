import { isValidSessionLocalID, parseSessionLocalID } from "../905/871411";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { Dk } from "../figma_app/623293";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { vU } from "../figma_app/193867";
export function $$c1(e, t) {
  let i = "";
  let a = "";
  let s = "";
  let o = "";
  let l = null;
  if (e) {
    let c = null;
    try {
      c = new URL(e, location.href);
    } catch {}
    if (c && c.origin === location.origin) {
      let e = t.selectedView;
      if ("fullscreen" === e.view && e.fileKey) {
        try {
          l = vU(t, c.pathname, c.search, c.hash);
        } catch (e) {}
        l && "fullscreen" === l.view && e.fileKey === l.fileKey && (isValidSessionLocalID(parseSessionLocalID(l.nodeId)) && (i = l.nodeId), l.commentThreadId && (a = l.commentThreadId), l.versionId && (s = l.versionId), getFeatureFlags().dakota && l.cmsItemId && (o = l.cmsItemId));
      }
    }
  }
  return {
    url: e,
    nodeIdInThisFile: i,
    commentThreadId: a,
    nextView: l,
    versionId: s,
    cmsItemId: o
  };
}
export function $$u0(e, t, i, n) {
  var r;
  (r = t).startsWith("mailto:") ? r = r.slice(7) : r.startsWith("tel:") && (r = r.slice(4));
  Dk(r);
  trackEventAnalytics("Copy Hyperlink", {
    source: i
  });
  e(VisualBellActions.enqueue({
    message: n ?? getI18nString("visual_bell.url_copied_to_your_clipboard", {
      url: t
    }),
    type: "hyperlink-copied"
  }));
}
export const UA = $$u0;
export const ih = $$c1;