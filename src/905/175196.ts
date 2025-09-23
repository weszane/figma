import { version } from 'react'
import { errorIgnorePatterns, normalizeSentryEventUrls, processBreadcrumb, reportError, setOrgIdTag, setServerReleaseTag, setTagGlobal, setUserId, SeverityLevel, startSentrySession, urlIgnorePatterns } from '../905/11'
import { hasFilePath, isStackOverflowError } from '../905/194389'
import { getSentryConfig } from '../905/256712'
import { bj } from '../905/280919'
import { trackEventAnalytics } from '../905/449184'
import { sendMetric } from '../905/485103'
import { alertOnNumericIds } from '../905/551280'
import { isAppShellEnabled } from '../905/561581'
import { getFeatureFlags } from '../905/601108'
import { customHistory } from '../905/612521'
import { setupSentryIntegrations } from '../905/670985'
import { entrypointVariant } from '../905/709735'
import { logInfo } from '../905/714362'
import { updateEnvironmentInfo } from '../905/883621'
import { XHRError } from '../905/910117'
import { getUserPlan, setUserPlanTag } from '../905/912096'
import { setLogHandler } from '../905/954389'
import { _ as _$$_ } from '../figma_app/71334'
import { emptyObject, getInitialOptions, getLocaleFallbacks, isLocalCluster } from '../figma_app/169182'
import { Rf } from '../figma_app/546509'
import { BrowserInfo } from '../figma_app/778880'
import { TaskController, TaskPriorityChangeEvent } from '../figma_app/946103'
import { Ts } from '../vendor/109104'
import { z9 } from '../vendor/544603'
import { _ as _$$_2 } from '../vendor/577508'

void 0 === self.scheduler && (self.scheduler = new _$$_(), self.TaskController = TaskController, self.TaskPriorityChangeEvent = TaskPriorityChangeEvent)
let k = new Map()
let R = !1
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
      flushAtStartup: !0,
    },
    ignoreErrors: errorIgnorePatterns,
    denyUrls: urlIgnorePatterns,
    autoSessionTracking: !1,
    debug: isLocalCluster(),
    beforeBreadcrumb: e => processBreadcrumb(e),
    beforeSend: (e, t) => {
      if (normalizeSentryEventUrls(e), e.tags || (e.tags = {}), e.tags.offline = !navigator.onLine, e.tags.seconds_since_session_start = (Math.round(performance.now()) / 1e3).toString(), window.isUnsupportedBrowser || 'figmaExVm' in window)
        return null
      let i = t.originalException
      if (i == null)
        return e
      if (i instanceof XHRError || e.tags.fullscreen_status === 'has_crashed')
        return null
      i instanceof Error && isStackOverflowError(i) && (e.tags.severity = SeverityLevel.Critical)
      let n = getFeatureFlags().frontend_sentry_wasm_integration
      if (e.exception?.values) {
        let t = new RegExp('zaloJSV2|firefoxSample')
        for (let r of (e.exception.values = e.exception.values.filter(e => !e.value || !t.test(e.value)), e.exception.values)) {
          r.mechanism && (function (e) {
            let t = e.stacktrace?.frames
            if (t && t.length > 0) {
              let e = t[t.length - 1]
              if (e.filename?.includes('compiled_wasm'))
                return !0
            }
            return !1
          }(r)) && (r.mechanism.synthetic = !0)
          e.tags.severity === SeverityLevel.Critical && r.type && (r.type = `\u{1F6A8}\u{1F6A8}hard crash\u{1F6A8}\u{1F6A8} ${r.type}`)
          let t = (function (e) {
            let t = e.stacktrace?.frames
            if (t && t.length > 0) {
              let e = t.find(e => e.filename?.includes('compiled_wasm'))
              if (e) {
                let t = e.filename?.split('/') ?? []
                if (t.length > 1)
                  return t[t.length - 2]
              }
            }
          }(r))
          t && (e.tags.fullscreen_build_name = t);
          (function (e) {
            let t = e.stacktrace?.frames
            return t?.some(e => e.filename?.includes('dwarf'))
          })(r) && (n = !0)
          getFeatureFlags().frontend_sentry_cpp_location && i instanceof Error && hasFilePath(i) && r.value === i.message && r.stacktrace && r.stacktrace.frames && r.stacktrace.frames.push({
            in_app: !0,
            filename: `${window.location.origin}/${i.filePath}`,
            lineno: i.lineNumber,
          })
        }
      }
      if (!(typeof i == 'string' || i instanceof Error))
        return null
      if (i instanceof Error && 'sentryContext' in i && typeof i.sentryContext == 'object' && (e.extra = {
        ...e.extra,
        ...i.sentryContext,
      }), k.size >= 20) {
        if (!R) {
          R = !0
          let e = typeof i == 'string' ? i : i.message
          trackEventAnalytics('Sentry Client Max Errors', {
            message: e,
          }, {
            forwardToDatadog: !0,
          })
        }
        return null
      }
      let r = typeof i == 'string' ? i : i.message
      let a = k.get(r) || 0
      if (a > 5)
        return null
      k.set(r, a + 1)
      console.log(`Sentry event id: ${e.event_id}`)
      sendMetric('sentry_error').catch(() => logInfo('sentry', 'Failed to report sentry error to datadog'))
      let s = getFeatureFlags().sentry_proxy_leave_extension;
      (s || n) && (e.figma_meta = {
        skip_extension_stripping: s,
        skip_wasm: n,
      })
      return e
    },
  })
  let e = getInitialOptions()
  setUserId(e.user_data?.id)
  setOrgIdTag(e.org_id)
  setServerReleaseTag(e.release_server_git_commit)
  setTagGlobal('tracking_session_id', e.tracking_session_id)
  setTagGlobal('offline', !1)
  setTagGlobal('wasm_oom', 'no')
  setTagGlobal('editorType', 'unknown-init')
  setTagGlobal('locale', getLocaleFallbacks()[0])
  setTagGlobal('reactVersion', `${version}-actual`)
  setTagGlobal('client_protocol_version', `${window.mpGlobal?.version}`)
  setTagGlobal('codesplit', 'true')
  setTagGlobal('fullscreen_status', 'ok')
  setTagGlobal('webpack', 'true')
  setTagGlobal('bundler', 'webpack')
  setTagGlobal('is_app_shell', isAppShellEnabled() ? 'true' : 'false')
  setTagGlobal('entrypoint_variant', entrypointVariant ?? 'unknown')
  setTagGlobal('entrypoint', window.ENTRY_POINT ?? 'unknown');
  (function () {
    let e = getUserPlan()
    e && (setUserPlanTag(e), updateEnvironmentInfo({
      user_plan_max: e,
    }))
    updateEnvironmentInfo({
      webpack: 'true',
    })
  })()
  let t = Rf()
  t?.buildNumber && setTagGlobal('nativeAppBuildNumber', t.buildNumber)
  t?.marketingNumber && setTagGlobal('nativeAppMarketingNumber', t.marketingNumber)
  t?.appContext && setTagGlobal('nativeAppContext', t.appContext)
  t?.appName && setTagGlobal('nativeAppName', t.appName)
  setTagGlobal('reconnect_sequence_number', null)
  setTagGlobal('disable_track_user_interactions', !getFeatureFlags().datadog_rum_track_interactions)
  let i = 'other'
  BrowserInfo.firefox ? i = 'gecko' : BrowserInfo.webkit ? i = 'webkit' : BrowserInfo.blink ? i = 'blink' : BrowserInfo.msie && (i = 'msie')
  setTagGlobal('browser_engine', i)
  startSentrySession()
}
let N = Rf()
let P = getInitialOptions().release_manifest_git_commit
let O = getInitialOptions().release_server_git_commit
N && (N?.updateWebReleaseInfo && P && O && N.updateWebReleaseInfo(P, O), N?.updateActiveWebConfiguration && P && O && N.updateActiveWebConfiguration({
  ...getFeatureFlags(),
}, emptyObject))
bj({
  service: 'figma-web',
  collectErrors: !0,
})
alertOnNumericIds(getInitialOptions(), {
  verb: 'INITIAL_OPTIONS',
  pathname: customHistory.location.pathname,
})
setLogHandler(reportError)
