import { _ as _$$_ } from "../figma_app/71334";
import { i, w as _$$w } from "../figma_app/946103";
import { version } from "react";
import { setLogHandler } from "../905/954389";
import { Ts } from "../vendor/109104";
import { z9 } from "../vendor/544603";
import { _ as _$$_2 } from "../vendor/577508";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { getInitialOptions, isLocalCluster, getLocaleFallbacks, emptyObject } from "../figma_app/169182";
import { Rh } from "../905/485103";
import { logInfo } from "../905/714362";
import { setupSentryIntegrations } from "../905/670985";
import { XHRError } from "../905/910117";
import { Rf } from "../figma_app/546509";
import { alertOnNumericIds } from "../905/551280";
import { updateEnvironmentInfo } from "../905/883621";
import { isAppShellEnabled } from "../905/561581";
import { entrypointVariant } from "../905/709735";
import { bj } from "../905/280919";
import { fF, hi } from "../905/194389";
import { customHistory } from "../905/612521";
import { getSentryConfig } from "../905/256712";
import { BrowserInfo } from "../figma_app/778880";
import { getUserPlan, setUserPlanTag } from "../905/912096";
import { errorIgnorePatterns, urlIgnorePatterns, processBreadcrumb, normalizeSentryEventUrls, SeverityLevel, setUserId, setOrgIdTag, setServerReleaseTag, setSentryTag, startSentrySession, reportError } from "../905/11";
void 0 === self.scheduler && (self.scheduler = new _$$_(), self.TaskController = i, self.TaskPriorityChangeEvent = _$$w);
let k = new Map();
let R = !1;
if (getSentryConfig().enabled) {
  Ts({
    dsn: getInitialOptions().frontend_sentry_dsn,
    release: getInitialOptions().release_manifest_git_commit,
    environment: getInitialOptions().cluster_name,
    integrations: [...setupSentryIntegrations()],
    profilesSampleRate: 1,
    transport: z9(_$$_2),
    transportOptions: {
      maxQueueSize: 3,
      flushAtStartup: !0
    },
    ignoreErrors: errorIgnorePatterns,
    denyUrls: urlIgnorePatterns,
    autoSessionTracking: !1,
    debug: isLocalCluster(),
    beforeBreadcrumb: e => processBreadcrumb(e),
    beforeSend: (e, t) => {
      if (normalizeSentryEventUrls(e), e.tags || (e.tags = {}), e.tags.offline = !navigator.onLine, e.tags.seconds_since_session_start = (Math.round(performance.now()) / 1e3).toString(), window.isUnsupportedBrowser || "figmaExVm" in window) return null;
      let i = t.originalException;
      if (null == i) return e;
      if (i instanceof XHRError || "has_crashed" === e.tags.fullscreen_status) return null;
      i instanceof Error && fF(i) && (e.tags.severity = SeverityLevel.Critical);
      let n = getFeatureFlags().frontend_sentry_wasm_integration;
      if (e.exception?.values) {
        let t = RegExp("zaloJSV2|firefoxSample");
        for (let r of (e.exception.values = e.exception.values.filter(e => !e.value || !t.test(e.value)), e.exception.values)) {
          r.mechanism && function (e) {
            let t = e.stacktrace?.frames;
            if (t && t.length > 0) {
              let e = t[t.length - 1];
              if (e.filename?.includes("compiled_wasm")) return !0;
            }
            return !1;
          }(r) && (r.mechanism.synthetic = !0);
          e.tags.severity === SeverityLevel.Critical && r.type && (r.type = "\u{1F6A8}\u{1F6A8}hard crash\u{1F6A8}\u{1F6A8} " + r.type);
          let t = function (e) {
            let t = e.stacktrace?.frames;
            if (t && t.length > 0) {
              let e = t.find(e => e.filename?.includes("compiled_wasm"));
              if (e) {
                let t = e.filename?.split("/") ?? [];
                if (t.length > 1) return t[t.length - 2];
              }
            }
          }(r);
          t && (e.tags.fullscreen_build_name = t);
          (function (e) {
            let t = e.stacktrace?.frames;
            return t?.some(e => e.filename?.includes("dwarf"));
          })(r) && (n = !0);
          getFeatureFlags().frontend_sentry_cpp_location && i instanceof Error && hi(i) && r.value === i.message && r.stacktrace && r.stacktrace.frames && r.stacktrace.frames.push({
            in_app: !0,
            filename: window.location.origin + "/" + i.filePath,
            lineno: i.lineNumber
          });
        }
      }
      if (!("string" == typeof i || i instanceof Error)) return null;
      if (i instanceof Error && "sentryContext" in i && "object" == typeof i.sentryContext && (e.extra = {
        ...e.extra,
        ...i.sentryContext
      }), k.size >= 20) {
        if (!R) {
          R = !0;
          let e = "string" == typeof i ? i : i.message;
          trackEventAnalytics("Sentry Client Max Errors", {
            message: e
          }, {
            forwardToDatadog: !0
          });
        }
        return null;
      }
      let r = "string" == typeof i ? i : i.message;
      let a = k.get(r) || 0;
      if (a > 5) return null;
      k.set(r, a + 1);
      console.log(`Sentry event id: ${e.event_id}`);
      Rh("sentry_error").catch(() => logInfo("sentry", "Failed to report sentry error to datadog"));
      let s = getFeatureFlags().sentry_proxy_leave_extension;
      (s || n) && (e.figma_meta = {
        skip_extension_stripping: s,
        skip_wasm: n
      });
      return e;
    }
  });
  let e = getInitialOptions();
  setUserId(e.user_data?.id);
  setOrgIdTag(e.org_id);
  setServerReleaseTag(e.release_server_git_commit);
  setSentryTag("tracking_session_id", e.tracking_session_id);
  setSentryTag("offline", !1);
  setSentryTag("wasm_oom", "no");
  setSentryTag("editorType", "unknown-init");
  setSentryTag("locale", getLocaleFallbacks()[0]);
  setSentryTag("reactVersion", `${version}-actual`);
  setSentryTag("client_protocol_version", `${window.mpGlobal?.version}`);
  setSentryTag("codesplit", "true");
  setSentryTag("fullscreen_status", "ok");
  setSentryTag("webpack", "true");
  setSentryTag("bundler", "webpack");
  setSentryTag("is_app_shell", isAppShellEnabled() ? "true" : "false");
  setSentryTag("entrypoint_variant", entrypointVariant ?? "unknown");
  setSentryTag("entrypoint", window.ENTRY_POINT ?? "unknown");
  (function () {
    let e = getUserPlan();
    e && (setUserPlanTag(e), updateEnvironmentInfo({
      user_plan_max: e
    }));
    updateEnvironmentInfo({
      webpack: "true"
    });
  })();
  let t = Rf();
  t?.buildNumber && setSentryTag("nativeAppBuildNumber", t.buildNumber);
  t?.marketingNumber && setSentryTag("nativeAppMarketingNumber", t.marketingNumber);
  t?.appContext && setSentryTag("nativeAppContext", t.appContext);
  t?.appName && setSentryTag("nativeAppName", t.appName);
  setSentryTag("reconnect_sequence_number", null);
  setSentryTag("disable_track_user_interactions", !getFeatureFlags().datadog_rum_track_interactions);
  let i = "other";
  BrowserInfo.firefox ? i = "gecko" : BrowserInfo.webkit ? i = "webkit" : BrowserInfo.blink ? i = "blink" : BrowserInfo.msie && (i = "msie");
  setSentryTag("browser_engine", i);
  startSentrySession();
}
let N = Rf();
let P = getInitialOptions().release_manifest_git_commit;
let O = getInitialOptions().release_server_git_commit;
N && (N?.updateWebReleaseInfo && P && O && N.updateWebReleaseInfo(P, O), N?.updateActiveWebConfiguration && P && O && N.updateActiveWebConfiguration({
  ...getFeatureFlags()
}, emptyObject));
bj({
  service: "figma-web",
  collectErrors: !0
});
alertOnNumericIds(getInitialOptions(), {
  verb: "INITIAL_OPTIONS",
  pathname: customHistory.location.pathname
});
setLogHandler(reportError);