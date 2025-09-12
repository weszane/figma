import { getAnonymousId } from "../905/449184";
import { getInitialOptions, getLaunchDarklyFlagsExport, getEnvironmentName, isGovCluster } from "../figma_app/169182";
import { getStringValueOrDefault, areValuesEqualOrEmpty, trackUserValuesBootstrapMismatch, reportStatsigError } from "../3973/890507";
import { TimeoutError } from "../3973/473379";
import { zN, jm } from "../figma_app/416935";
import { desktopAPIInstance } from "../figma_app/876459";
import { Rf } from "../figma_app/546509";
import { getI18nState } from "../figma_app/363242";
import { booleanFlagAtom } from "../3973/697935";
import { cn } from "../figma_app/141320";
import { isInteractionPathCheck } from "../figma_app/897289";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { delay } from "../905/236856";
import { HB } from "../3973/538504";
let $$A8 = 8;
let $$y7 = 4e3;
let b = "unknown";
let v = new Set(["AT", "AU", "BE", "CA", "CH", "CY", "CZ", "DE", "DK", "FI", "GB", "GR", "GT", "HU", "IE", "IS", "LU", "NL", "NO", "NZ", "PA", "PT", "SE", "US"]);
let I = () => !!getInitialOptions().statsig_bootstrap_values;
let $$E9 = () => !!getInitialOptions().statsig_figma_app_client_api_key;
let $$x5 = () => getInitialOptions().is_second_page_for_perf_tests || !isInteractionPathCheck();
let S = () => getLaunchDarklyFlagsExport().statsig_enable_production_mirror ?? !1;
export function $$w0(e) {
  if (!I()) return null;
  let t = getInitialOptions().statsig_bootstrap_values;
  if (null == t) return null;
  if (!(t instanceof Array)) return T(t, e) ? t : null;
  for (let i of t) if (T(i, e)) return i;
  return null;
}
export function $$C10() {
  return getFeatureFlags().enable_plan_key_targeting_in_web_and_sinatra ?? !1;
}
function T(e, t) {
  if (null == e || null == e.evaluated_keys || "object" != typeof e.evaluated_keys) return !1;
  let i = e.evaluated_keys;
  let r = i.customIDs ?? {};
  if (getStringValueOrDefault(i, "userID", "") !== t.userId) return !1;
  let s = getStringValueOrDefault(r, "teamID", null);
  let o = areValuesEqualOrEmpty(s, t.teamId);
  let l = getStringValueOrDefault(r, "orgID", null);
  let d = areValuesEqualOrEmpty(l, t.orgId);
  let c = !0;
  if ($$C10()) {
    let e = getStringValueOrDefault(r, "planKey", null);
    (c = areValuesEqualOrEmpty(e, t.planKey)) || trackUserValuesBootstrapMismatch("plan_key", e, t.planKey);
  }
  let u = getStringValueOrDefault(r, "stableID", null);
  let p = getAnonymousId() ?? null;
  let m = areValuesEqualOrEmpty(u, p);
  o || trackUserValuesBootstrapMismatch("team_id", s, t.teamId);
  d || trackUserValuesBootstrapMismatch("org_id", l, t.orgId);
  m || trackUserValuesBootstrapMismatch("stable_id", u, p);
  return o && d && m && c;
}
export function $$k6(e, t) {
  let i = $$N4(getInitialOptions().iso_code);
  return {
    environment: {
      tier: getEnvironmentName()
    },
    disableCurrentPageLogging: !0,
    disableAutoMetricsLogging: !0,
    disableErrorLogging: !0,
    initTimeoutMs: i,
    overrideStableID: getAnonymousId(),
    initCompletionCallback: e,
    updateUserCompletionCallback: t,
    fetchMode: "cache-or-network",
    localMode: isGovCluster() || S(),
    disableDiagnosticsLogging: isGovCluster()
  };
}
export function $$R11(e, t, i, s) {
  let u = getInitialOptions();
  let m = getAnonymousId();
  e || t || i || m || s || reportStatsigError("No userId, nor teamId, nor orgId, not planKey, nor analytics anonymous ID supplied to getStatsigUser.");
  let h = $$w0({
    userId: e,
    teamId: t,
    orgId: i,
    planKey: s
  });
  let g = h?.evaluated_keys;
  let {
    userFigmateEmail
  } = g?.customIDs || {};
  return {
    custom: {
      cluster_name: u.cluster_name || b,
      developer_id: u.employee_email || b,
      figma_service: "figma_app",
      integration_host: getInitialOptions().integration_host || b,
      page_app_type: function () {
        if (desktopAPIInstance) return desktopAPIInstance.beta ? "desktop_beta" : "desktop";
        let e = Rf();
        return e ? e.appName || "mobile_unknown" : "web";
      }(),
      page_app_version: function () {
        if (desktopAPIInstance) return desktopAPIInstance.getInformationalVersion();
        let e = Rf();
        return e?.marketingNumber ? e.marketingNumber : b;
      }(),
      page_locale: getI18nState()?.getPrimaryLocale(!1) || b,
      release_git_tag: u.release_git_tag || b,
      release_manifest_git_commit: u.release_manifest_git_commit || b,
      release_server_git_commit: u.release_server_git_commit || b,
      user_created_at: u.user_data?.created_at || b,
      user_email_domain: u.user_data?.email && zN(u.user_data.email) || b,
      user_is_figma_employee: jm(u.user_data?.email),
      user_is_student: u.user_data?.student_validated_at ? cn(u.user_data) : b,
      user_job_title: HB(u.user_data?.profile?.job_title) || b,
      user_locale: getInitialOptions().user_data?.locale || b
    },
    customIDs: {
      ...(t && {
        teamID: t
      }),
      ...(i && {
        orgID: i
      }),
      ...(m && {
        stableID: m
      }),
      ...(u.employee_email && {
        developerID: u.employee_email
      }),
      ...(s && {
        planKey: s
      }),
      ...(userFigmateEmail && {
        userFigmateEmail
      })
    },
    ip: u.user_ip,
    userAgent: navigator.userAgent,
    ...(e && {
      userID: e
    })
  };
}
export function $$N4(e) {
  return null == e ? 2e3 : v.has(e) ? 1e3 : 2e3;
}
export function $$P12(e, t) {
  let i = "number" == typeof t ? {
    timeout: t
  } : t;
  return Promise.race([delay(i.timeout).then(() => Promise.reject(new TimeoutError(i.label))), e]);
}
export function $$O3(e) {
  return JSON.stringify([e.userId, e.teamId, e.orgId, e.planKey]);
}
export function $$D2(e) {
  ("local" === e || "staging" === e) && atomStoreManager.set(booleanFlagAtom, !0);
}
export function $$L1(e) {
  return atomStoreManager.get(booleanFlagAtom) ? Promise.all([e, delay(3e3)]).then(e => e[0]) : e;
}
export const Cj = $$w0;
export const Xu = $$L1;
export const cZ = $$D2;
export const et = $$O3;
export const fU = $$N4;
export const l2 = $$x5;
export const me = $$k6;
export const nK = $$y7;
export const oM = $$A8;
export const pF = $$E9;
export const tU = $$C10;
export const vl = $$R11;
export const wj = $$P12;