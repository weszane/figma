import { _ as _$$_ } from "../figma_app/71334";
import { i, w as _$$w } from "../figma_app/946103";
import { version } from "react";
import { pe } from "../905/954389";
import { Ts } from "../vendor/109104";
import { z9 } from "../vendor/544603";
import { _ as _$$_2 } from "../vendor/577508";
import { getFeatureFlags } from "../905/601108";
import { sx } from "../905/449184";
import { getInitialOptions, isLocalCluster, getLocaleFallbacks, emptyObject } from "../figma_app/169182";
import { Rh } from "../905/485103";
import { Lo } from "../905/714362";
import { kk } from "../905/670985";
import { XHRError } from "../905/910117";
import { Rf } from "../figma_app/546509";
import { h as _$$h } from "../905/551280";
import { v as _$$v } from "../905/883621";
import { O as _$$O } from "../905/561581";
import { p as _$$p } from "../905/709735";
import { bj } from "../905/280919";
import { fF, hi } from "../905/194389";
import { Ay } from "../905/612521";
import { s as _$$s } from "../905/256712";
import { Ay as _$$Ay } from "../figma_app/778880";
import { T as _$$T, C as _$$C } from "../905/912096";
import { yO, xg, it, xn, DZ, Tm, mR, uy, kF, wp, $D } from "../905/11";
void 0 === self.scheduler && (self.scheduler = new _$$_(), self.TaskController = i, self.TaskPriorityChangeEvent = _$$w);
let k = new Map();
let R = !1;
if (_$$s().enabled) {
  Ts({
    dsn: getInitialOptions().frontend_sentry_dsn,
    release: getInitialOptions().release_manifest_git_commit,
    environment: getInitialOptions().cluster_name,
    integrations: [...kk()],
    profilesSampleRate: 1,
    transport: z9(_$$_2),
    transportOptions: {
      maxQueueSize: 3,
      flushAtStartup: !0
    },
    ignoreErrors: yO,
    denyUrls: xg,
    autoSessionTracking: !1,
    debug: isLocalCluster(),
    beforeBreadcrumb: e => it(e),
    beforeSend: (e, t) => {
      if (xn(e), e.tags || (e.tags = {}), e.tags.offline = !navigator.onLine, e.tags.seconds_since_session_start = (Math.round(performance.now()) / 1e3).toString(), window.isUnsupportedBrowser || "figmaExVm" in window) return null;
      let i = t.originalException;
      if (null == i) return e;
      if (i instanceof XHRError || "has_crashed" === e.tags.fullscreen_status) return null;
      i instanceof Error && fF(i) && (e.tags.severity = DZ.Critical);
      let n = getFeatureFlags().frontend_sentry_wasm_integration;
      if (e.exception?.values) {
        let t = RegExp("zaloJSV2|firefoxSample");
        for (let r of (e.exception.values = e.exception.values.filter(e => !e.value || !t.test(e.value)), e.exception.values)) {
          r.mechanism && function(e) {
            let t = e.stacktrace?.frames;
            if (t && t.length > 0) {
              let e = t[t.length - 1];
              if (e.filename?.includes("compiled_wasm")) return !0;
            }
            return !1;
          }(r) && (r.mechanism.synthetic = !0);
          e.tags.severity === DZ.Critical && r.type && (r.type = "\u{1F6A8}\u{1F6A8}hard crash\u{1F6A8}\u{1F6A8} " + r.type);
          let t = function(e) {
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
          (function(e) {
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
          sx("Sentry Client Max Errors", {
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
      Rh("sentry_error").catch(() => Lo("sentry", "Failed to report sentry error to datadog"));
      let s = getFeatureFlags().sentry_proxy_leave_extension;
      (s || n) && (e.figma_meta = {
        skip_extension_stripping: s,
        skip_wasm: n
      });
      return e;
    }
  });
  let e = getInitialOptions();
  Tm(e.user_data?.id);
  mR(e.org_id);
  uy(e.release_server_git_commit);
  kF("tracking_session_id", e.tracking_session_id);
  kF("offline", !1);
  kF("wasm_oom", "no");
  kF("editorType", "unknown-init");
  kF("locale", getLocaleFallbacks()[0]);
  kF("reactVersion", `${version}-actual`);
  kF("client_protocol_version", `${window.mpGlobal?.version}`);
  kF("codesplit", "true");
  kF("fullscreen_status", "ok");
  kF("webpack", "true");
  kF("bundler", "webpack");
  kF("is_app_shell", _$$O() ? "true" : "false");
  kF("entrypoint_variant", _$$p ?? "unknown");
  kF("entrypoint", window.ENTRY_POINT ?? "unknown");
  (function() {
    let e = _$$T();
    e && (_$$C(e), _$$v({
      user_plan_max: e
    }));
    _$$v({
      webpack: "true"
    });
  })();
  let t = Rf();
  t?.buildNumber && kF("nativeAppBuildNumber", t.buildNumber);
  t?.marketingNumber && kF("nativeAppMarketingNumber", t.marketingNumber);
  t?.appContext && kF("nativeAppContext", t.appContext);
  t?.appName && kF("nativeAppName", t.appName);
  kF("reconnect_sequence_number", null);
  kF("disable_track_user_interactions", !getFeatureFlags().datadog_rum_track_interactions);
  let i = "other";
  _$$Ay.firefox ? i = "gecko" : _$$Ay.webkit ? i = "webkit" : _$$Ay.blink ? i = "blink" : _$$Ay.msie && (i = "msie");
  kF("browser_engine", i);
  wp();
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
_$$h(getInitialOptions(), {
  verb: "INITIAL_OPTIONS",
  pathname: Ay.location.pathname
});
pe($D); 
