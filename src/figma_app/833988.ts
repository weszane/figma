import { useCallback } from "react";
import { useAtomWithSubscription } from "../figma_app/27355";
import { analyticsEventManager } from "../905/449184";
import { isGovCluster } from "../figma_app/169182";
import { zN } from "../figma_app/579169";
import { useCurrentFileKey } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
let c = ["dev", "done", "eng", "experiment", "not final", "final", "finalized", "hand off", "handoff", "implementation", "launch", "m1", "m2", "m3", "m4", "milestone", "mvp", "proposal", "qa", "ready", "ship", "spec", "\u2611\uFE0F", "\u2705", "\u2714\uFE0F", "\u2747\uFE0F", "\u2B50\uFE0F", "\u{1F3C1}", "\u{1F49A}", "\u{1F4CC}", "\u{1F680}", "\u{1F6A2} ", "\u{1F7E2}", "\u{1F7E9}", "\u{1F9EA}"];
export function $$u1(e) {
  let t = (e || "").toLowerCase();
  let r = new Set(c.filter(e => t.includes(e)));
  r.has("final") && r.has("not final") && (r.$$delete("final"), r.$$delete("not final"));
  return [...r];
}
export function $$p0() {
  let e = selectCurrentUser();
  let t = useCurrentFileKey();
  let r = useAtomWithSubscription(zN);
  let c = "loaded" !== r.status || !0 === r.data || isGovCluster();
  return useCallback(({
    newTitle: r,
    nodeType: n
  }) => function ({
    fileKey: e,
    nodeType: t,
    newTitle: r,
    userId: n,
    notEligible: i
  }) {
    if (i) return;
    let s = $$u1(r);
    analyticsEventManager.trackDefinedEvent("node_name.changed", {
      fileKey: e,
      nodeType: t,
      userId: n,
      didUseDevModeIndicator: s.length > 0,
      indicator: s[0] || "",
      allIndicators: s.join(",")
    });
  }({
    nodeType: n,
    newTitle: r,
    fileKey: t || "",
    userId: e?.id || "",
    notEligible: c
  }), [e, t, c]);
}
export const W = $$p0;
export const d = $$u1;