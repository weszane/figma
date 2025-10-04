import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { analyticsEventManager } from "../905/449184";
import { debugState } from "../905/407919";
import { getInitialOptions } from "../figma_app/169182";
import { useSubscription } from "../figma_app/288654";
import { ResourceStatus } from "../905/723791";
import { setupDynamicConfigHandler } from "../figma_app/594947";
import { useCurrentFileKey } from "../figma_app/516028";
import { AiMeterUsageView } from "../figma_app/43951";
import { n as _$$n } from "../905/347702";
import { grantlistCheckStatus, jubileeTentativePlanEligibilityAtom, jubileeTentativeUserEligibilityAtom } from "../905/509613";
import { JT } from "../figma_app/632248";
var $$g1 = (e => (e.DAILY = "daily", e.MONTHLY = "monthly", e))($$g1 || {});
function f() {
  let e = useCurrentFileKey() ?? "";
  let t = useSubscription(AiMeterUsageView, {
    fileKey: e
  }, {
    enabled: !!e
  });
  if ("errors" === t.status || "loading" === t.status || "disabled" === t.status || !t.data || !t.data.aiMeterUsage) return null;
  let {
    aiMeterUsage
  } = t.data;
  return aiMeterUsage.status === ResourceStatus.Error ? null : aiMeterUsage.data;
}
_$$n((e, t) => {
  let {
    getDynamicConfig
  } = setupDynamicConfigHandler("ai_metering_credits_per_feature");
  if (!e) return 0;
  if (!getFeatureFlags().ai_credits_metering) return 1;
  let i = new Map(Object.entries(getDynamicConfig().get(e.toString(), {})));
  let a = i.get("default") ?? 0;
  return t ? i.get(t.toString()) ?? a : a;
});
export let $$E0 = _$$n(e => {
  let t = f();
  if (!e || !getFeatureFlags().qa_ai_metering || e === JT.ASSISTANT_CHAT || e === JT.FIND_INSPIRATION) return {
    withinMeter: !0
  };
  let r = atomStoreManager.get(grantlistCheckStatus);
  let l = atomStoreManager.get(jubileeTentativePlanEligibilityAtom);
  let d = atomStoreManager.get(jubileeTentativeUserEligibilityAtom);
  let c = l || d;
  if ("unchecked" === r || "null_grantlist" === r && c) {
    let t = debugState && debugState.getState().selectedView;
    let r = t?.view === "fullscreen" && t.fileKey;
    analyticsEventManager.trackDefinedEvent("search_experience.ai_eligibility.meter_checked", {
      newGrantlistPlanValue: null !== l ? l.toString() : "null",
      newGrantlistUserValue: null !== d ? d.toString() : "null",
      userId: getInitialOptions().user_data?.id,
      fileKey: r || "missing",
      action: e
    });
    atomStoreManager.set(grantlistCheckStatus, c ? "with_grantlist" : "null_grantlist");
  }
  if (!t) return {
    withinMeter: !0,
    noDataLoaded: !0
  };
  let u = t.filter(t => t.userActions.includes(e));
  if (0 === u.length) return {
    withinMeter: !0
  };
  let p = u.find(e => "daily" === e.meteringWindow);
  let _ = u.find(e => "monthly" === e.meteringWindow);
  if (!p || !_) return {
    withinMeter: !0
  };
  let g = parseInt(p.remaining) > 0;
  let E = parseInt(_.remaining) > 0;
  return !g && E ? {
    withinMeter: g,
    meterResetDate: p.resetsAt,
    meteringWindow: "daily"
  } : {
    withinMeter: E,
    meterResetDate: _.resetsAt,
    meteringWindow: "monthly"
  };
});
export function $$y2(e) {
  let t = f();
  if (!t) return {
    meterUsed: 0
  };
  let r = t.filter(t => t.userActions.includes(e));
  if (0 === r.length) return {
    meterUsed: 0
  };
  let n = r.find(e => "monthly" === e.meteringWindow);
  if (!n) return {
    meterUsed: 0
  };
  let i = parseInt(n.remaining);
  return {
    meterUsed: parseInt(n.total) - i || 0
  };
}
export const Ig = $$E0;
export const co = $$g1;
export const xD = $$y2;