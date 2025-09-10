import { n as _$$n, D } from "src/905/347702";
import { trackEventAnalytics, analyticsEventManager, getAnonymousId } from "src/905/449184";
import { customHistory } from "src/905/612521";
import { getInitialOptions } from "src/figma_app/169182";
import { PerfTimer } from "src/905/609396";
import { isFigmaMirrorAndroidApp, isFigmaMobileIOSApp } from "src/figma_app/778880";
import { normalizePathname } from "src/3973/348894";
import { reportError } from "src/905/11";
import { ServiceCategories as _$$e } from "src/905/165054";
import { isInteractionPathCheck } from "src/figma_app/897289";
import { bT, ss, PG, MU } from "src/3973/473379";
export let $$p13 = "exp_aa_test_fullscreen_view";
export function $$m11(e, t) {
  (getInitialOptions().is_second_page_for_perf_tests || C()) && (void 0 === window.STATSIG_PERF && (window.STATSIG_PERF = {}), window.STATSIG_PERF[e] = t);
}
export function $$f15(e, t, r, a, i, n) {
  trackEventAnalytics("statsig_client_exp_eval", {
    eval_reason: a,
    eval_method: r,
    experiment: e,
    client_exp_eval_time_ms: t,
    entry_point: window.ENTRY_POINT,
    rule_id: i,
    statsig_user: null == n ? null : JSON.stringify(n)
  }, {
    forwardToDatadog: !0,
    batchRequest: !0
  });
}
export let $$h9 = _$$n(() => .1 > Math.random());
export function $$b12(e, t) {
  return null == e || "" === e || void 0 === e ? null == t || "" === t || void 0 === t : e === t;
}
export function $$v0(e, t, r) {
  trackEventAnalytics("user_values_bootstrap_mismatch", {
    mismatch_reason: e,
    bootstrap_value: t,
    user_key_value: r
  }, {
    forwardToDatadog: !0,
    batchRequest: !0
  });
}
export function $$y2(e, t, r, a, i) {
  analyticsEventManager.trackDefinedEvent("application_platform.invalid_bootstrap_info", {
    experiment_name: e,
    bootstrap_user_id: t,
    bootstrap_custom_ids: r,
    statsig_user_user_id: a,
    statsig_user_custom_ids: i
  });
}
export function $$T3(e, t, r, a, i, n, o, _, l, u) {
  analyticsEventManager.trackDefinedEvent("application_platform.statsig_plan_key_bootstrap", {
    statsig_feature_flag_value: e,
    initial_options_plan_key: t,
    initial_options_org_id: r,
    sidebar_or_open_file_org_id: a,
    sidebar_or_open_file_team_id: i,
    use_team_id_hook: n,
    selected_view: o,
    used_plan_key: _,
    used_org_id: l,
    used_user_id: u
  });
}
export function $$E10(e, t, r, a, o, u, c = null, p = null, f = null, h = "") {
  (isInteractionPathCheck() || C()) && $$m11("INIT_TIME", a);
  let v = isFigmaMirrorAndroidApp() || isFigmaMobileIOSApp();
  let y = p ? [p.userId, p.teamId, p.orgId, getAnonymousId(), p.planKey].map(e => e || "") : [];
  let T = getInitialOptions().statsig_bootstrap_values;
  let k = Array.isArray(T) ? T[0] : T;
  let R = function (e) {
    if (e && null !== e.evaluated_keys && "object" == typeof e.evaluated_keys) {
      let t = e.evaluated_keys;
      let r = t.customIDs ?? {};
      return [$$w1(t, "userID", ""), $$w1(r, "teamID", ""), $$w1(r, "orgID", ""), $$w1(r, "stableID", ""), $$w1(r, "planKey", "")];
    }
    return [];
  }(f ?? k);
  trackEventAnalytics("Statsig Client Init Time", {
    client_init_time: a,
    userId: getInitialOptions().user_data?.id,
    source: "figma_app",
    source_type: e ? "provider" : "singleton",
    errored: !o,
    error_cause: null === c ? null : bT[c],
    entry_route: function () {
      let e = customHistory.location.pathname;
      return normalizePathname(e);
    }(),
    entry_point: window.ENTRY_POINT,
    bootstrapped: t === ss.BOOTSTRAP,
    client_bootstrap_enabled: !v,
    received_bootstrap: !!getInitialOptions().statsig_bootstrap_values,
    message: u,
    has_user_id: !!getInitialOptions().user_data?.id,
    client_user_team_org_stable_ids: y,
    bootstrap_user_team_org_stable_ids: R,
    user_key_comparison: function (e, t) {
      let r = ["user_id", "team_id", "org_id", "stable_id", "plan_key"];
      return e.length !== r.length || t.length !== r.length ? "n/a" : r.map((r, a) => $$b12(e[a], t[a]) ? null : `mismatch ${r}`).find(e => !!e) || "valid";
    }(y, R),
    statsig_api_enabled: !0,
    calling_hook_location: h
  }, {
    forwardToDatadog: !0
  });
}
export function $$w1(e, t, r) {
  if (null == e || "object" != typeof e) return r;
  let a = e[t];
  return "string" != typeof a ? r : a;
}
export function $$k7(e, t, r) {
  trackEventAnalytics("Statsig Client Values Network Call", {
    client_values_network_call_latency_ms: e.getElapsedTimeMs(),
    entry_point: window.ENTRY_POINT,
    reason: PG[r],
    success: !e.getCaughtError(),
    end_point: t,
    timed_out: e.getTimedOut(),
    statsig_api_enabled: !1,
    error_message: e.getError()?.message
  }, {
    forwardToDatadog: !0
  });
}
export function $$R6(e, t, r) {
  trackEventAnalytics("Statsig Client Context Switch Cache Miss", {
    keys: JSON.stringify(e),
    cached_keys: t,
    cached_key_count: r,
    entry_point: window.ENTRY_POINT
  }, {
    forwardToDatadog: !0
  });
}
export class $$S14 {
  constructor(e) {
    this.caughtError = !1;
    this.elapsedTimeMs = 0;
    this.error = null;
    this.timer = new PerfTimer(e, {});
  }
  startTimer() {
    this.timer.start();
  }
  isTimerRunning() {
    return this.timer.isRunning;
  }
  stopTimer() {
    this.elapsedTimeMs = this.timer.stop();
  }
  setCaughtError(e) {
    this.caughtError = !0;
    e instanceof Error && (this.error = e);
  }
  getCaughtError() {
    return this.caughtError;
  }
  getTimedOut() {
    return this.error instanceof MU;
  }
  getError() {
    return this.error;
  }
  getElapsedTimeMs() {
    return this.elapsedTimeMs;
  }
}
export function $$I4(e, t, r) {
  trackEventAnalytics("Statsig prefetch calls", {
    nb_users: e,
    cache_hits: t,
    error_message: r,
    success: null === r,
    statsig_api_enabled: !0
  }, {
    forwardToDatadog: !0
  });
}
export function $$D8(e, t, r, a) {
  trackEventAnalytics("Statsig Client Update User Time", {
    client_update_user_time_ms: e,
    userId: getInitialOptions().user_data?.id,
    entry_point: window.ENTRY_POINT,
    source: "figma_app",
    cache_hit: r,
    errored: !t,
    message: a,
    statsig_api_enabled: !0
  }, {
    forwardToDatadog: !0
  });
  t && C() && $$m11("CONTEXT_SWITCH_TIME", e);
}
let O = D(() => .05 >= Math.random());
export function $$x5(e) {
  if (e && O()) {
    let t = Error(e);
    reportError(_$$e.GROWTH_PLATFORM, t, {
      tags: {
        statsig_sdk: !0
      }
    });
  }
}
function C() {
  let e = getInitialOptions().e2e_test_name;
  return null != e && ["statsig_init", "statsig_context_switch"].includes(e);
}
export const AQ = $$v0;
export const B7 = $$w1;
export const Dr = $$y2;
export const N6 = $$T3;
export const Tr = $$I4;
export const Us = $$x5;
export const Vj = $$R6;
export const _q = $$k7;
export const bz = $$D8;
export const cP = $$h9;
export const kX = $$E10;
export const pk = $$m11;
export const q3 = $$b12;
export const su = $$p13;
export const yY = $$S14;
export const zz = $$f15;
