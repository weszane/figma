import { trackEventAnalytics } from "../905/449184";
import { debugState } from "../905/407919";
import { Rh } from "../905/485103";
let s = !0;
function o(e) {
  return e < 0x8000000 ? "0mb-to-128mb" : e < 0x10000000 ? "128mb-to-256mb" : e < 0x20000000 ? "256mb-to-512mb" : e < 0x40000000 ? "512mb-to-1gb" : e < 0x80000000 ? "1gb-to-2gb" : e < 0x100000000 ? "2gb-to-4gb" : ">4gb";
}
export function $$l0(e, t, i) {
  if (!s) return;
  s = !1;
  let l = o(e.totalMemoryInBytes);
  t && Rh("oom_error", {
    memory: l,
    productType: i
  });
  let d = o(e.failedSize);
  if (trackEventAnalytics("Out Of Memory", {
    ...e,
    memoryUsageBin: l,
    failedSizeBin: d,
    productType: i
  }, {
    forwardToDatadog: t
  }), "enter-branching-mode" === e.lastAction) {
    let a = debugState.getState();
    trackEventAnalytics("Branching out of memory", {
      ...e,
      memoryUsageBin: l,
      failedSizeBin: d,
      branchingSceneState: a.mirror?.appModel?.branchingSceneState,
      lastBranchingStagingAction: a.mirror?.appModel?.lastBranchingStagingAction,
      productType: i
    }, {
      forwardToDatadog: t
    });
  }
}
export const x = $$l0;