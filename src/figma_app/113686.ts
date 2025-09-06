import { useMemo } from "react";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { Rs, oS } from "../figma_app/288654";
import { oA } from "../905/723791";
import { MF, A5 } from "../figma_app/391338";
import { $kt } from "../figma_app/43951";
function c(e) {
  let {
    oldValue,
    newValue
  } = useMemo(() => ({
    oldValue: e.transform(e => (e.org?.workspaces?.length || 0) > 0),
    newValue: e.transform(e => oA(e.org?.hasWorkspaces, null))
  }), [e]);
  MF({
    oldValue,
    newValue,
    label: A5.FileBrowserSidebarData.hasWorkspaces
  });
}
export function $$u0(e, t) {
  let r = Rs($kt, e, t);
  c(r);
  return r;
}
export function $$p1(e, t) {
  let r = useMemo(() => ({
    stuckMs: 1e4,
    onEvent: (t, r, n) => {
      var s;
      var o;
      s = e.currentOrgId;
      o = e.currentTeamId;
      return void (getFeatureFlags().file_browser_sidebar_lg_logging && trackEventAnalytics("File Browser Sidebar LG", {
        lgEvent: t,
        traceId: n.traceId,
        hasBeenOffline: n.wasOffline,
        hasBeenBackgrounded: n.wasBackgrounded,
        hasBeenDisconnected: n.wasDisconnected,
        timeElapsedMs: n.timeElapsedMs,
        orgId: s,
        teamId: o,
        errors: JSON.stringify(r.errors)
      }));
    }
  }), [e.currentOrgId, e.currentTeamId]);
  let o = oS($kt, e, {
    ...t,
    subscriptionLogger: r
  });
  c(o);
  return o;
}
export const Q = $$u0;
export const v = $$p1;