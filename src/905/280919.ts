import { getFeatureFlags } from "../905/601108";
import { localStorageRef } from "../905/657224";
import a from "../vendor/805353";
import o from "../vendor/232260";
import { k as _$$k } from "../905/651849";
import { p as _$$p } from "../905/709735";
import { L as _$$L, y as _$$y } from "../905/270963";
import { Ng, jm } from "../figma_app/416935";
import { debugState } from "../905/407919";
import { Ay } from "../905/612521";
import { getStaticDomain, getInitialOptions } from "../figma_app/169182";
import { Br } from "../3973/348894";
import { T as _$$T } from "../905/912096";
import { Cp, XM } from "../905/11";
import { gP } from "../figma_app/594947";
import { fF } from "../905/471229";
import { z as _$$z, u as _$$u } from "../905/667887";
var s = a;
var l = o;
let I = ["api/web_logger", "data:", "/api/figment-proxy/monitor"];
let E = ["s3-alpha.figma.com", "s3-alpha-sig.figma.com", "s3-alpha-sig-oac.figma.com", "s3-staging-sig.staging.figma.com", "s3-figma-videos-production-sig.com", "figma-fonts-private-production", getStaticDomain()];
let x = /(googlebot\/|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)/i;
let S = /(qawolf\.email|qawolf[0-9][0-9]?\.com|qawolfworkflows\.com|uibuilder\.awsapps\.com)/;
let w = {
  rolloutPercent: 0,
  sessionSampleRate: 0,
  replaySampleRate: 0,
  traceSampleRate: 0,
  maxGlobalSendEventsPerSecond: -1,
  enableEventWeighting: !1
};
let C = ["fallback", "starter", "pro", "org", "enterprise", "employee"];
function T(e) {
  return "user" === e || "user-employee" === e;
}
export function $$k1({
  collectErrors: e,
  service: t,
  sessionSampleRate: i,
  trackUserInteractions: r,
  alwaysInit: a
}) {
  if (!_$$L) return;
  let {
    datadog_rum_init,
    datadog_logs_init,
    datadog_rum_compress,
    datadog_rum_trace_header,
    datadog_rum_track_long_task,
    datadog_rum_track_interactions,
    datadog_rum_fullscreen
  } = getFeatureFlags();
  if (!datadog_rum_init) return;
  let {
    cluster_name,
    release_manifest_git_commit,
    datadog_rum_application_id,
    datadog_rum_client_token,
    user_data,
    org_id
  } = getInitialOptions();
  let F = getInitialOptions().datadog_rum_site;
  if (!datadog_rum_application_id || !datadog_rum_client_token || !F) {
    _$$k.debug("Missing Datadog RUM application ID, client token, or site. RUM client disabled");
    return;
  }
  let M = R(user_data?.email);
  let j = function (e) {
    let t = gP("datadog_rum_plan_rollout_config");
    let i = function () {
      let e = _$$T();
      return e && C.includes(e) ? e : "fallback";
    }();
    let n = t.get("fallback", w);
    return "user-employee" === e ? t.get("employee", n) : t.get(i, n);
  }(M);
  let U = _$$z();
  if (!(a = a || U) && (!user_data || T(R(user_data.email)) && 100 !== j.rolloutPercent && _$$u(user_data.id, 7) % 100 >= j.rolloutPercent)) return;
  let B = U || !(Ay.location.pathname.startsWith("/design") || Ay.location.pathname.startsWith("/file/") || Ay.location.pathname.startsWith("/proto") || Ay.location.pathname.startsWith("/deck") || Ay.location.pathname.startsWith("/mirror") || Ay.location.pathname.startsWith("/desktop_new_tab") || Ay.location.pathname.startsWith("/board") || Ay.location.pathname.startsWith("/slides") || Ay.location.pathname.startsWith("/site")) || datadog_rum_fullscreen;
  let V = U ? 100 : function (e, t, i) {
    let {
      datadog_rum_record_all
    } = getFeatureFlags();
    let {
      datadog_rum_session_sample_rate
    } = getInitialOptions();
    let s = e.sessionSampleRate;
    return x.test(navigator.userAgent) ? 0 : T(i) ? void 0 !== t ? t : datadog_rum_record_all ? 100 : void 0 !== s ? s : void 0 !== datadog_rum_session_sample_rate ? datadog_rum_session_sample_rate : 0.01 : 100;
  }(j, i, M);
  let G = T(M) ? j.replaySampleRate ?? 0 : 100;
  let z = U ? 100 : j.traceSampleRate ?? 50;
  let H = getFeatureFlags()["js-profiling"] ? 100 : 0;
  r = !!(r || datadog_rum_track_interactions);
  let W = !getInitialOptions().editing_file || !!getFeatureFlags().datadog_rum_fs_resources;
  let K = [];
  datadog_rum_trace_header && gP("datadog_rum_trace_config").get("allowed_urls", []).forEach(e => {
    try {
      K.push(new RegExp(e));
    } catch (t) {
      _$$k.warn(`Invalid regex pattern for Datadog RUM trace URL: ${e}`);
    }
  });
  $$D0.configure({
    onEnableDatadog: ({
      allowResourceTracking: e
    } = {}) => {
      _$$L.setTrackingConsent("granted");
      let t = _$$L.getInternalContext()?.session_id;
      t && L(t);
      let i = _$$L.getInitConfiguration();
      e !== i?.trackResources && _$$L.init({
        ...i,
        trackResources: e
      });
    },
    onDisableDatadog: () => {
      _$$L.setTrackingConsent("not-granted");
    },
    onCircuitBreakerError: () => {
      _$$L.addError(Error(`${P}: Rate limit exceeded, disabling send events`), {
        rumCircuitBreaker: !0,
        rumCiruitBreakerData: {
          maxGlobalSendEventsPerSecond: j.maxGlobalSendEventsPerSecond,
          weightedEventTypesInBucket: $$D0.weightedEventTypesInBucket
        }
      });
    },
    collectErrors: e ?? !1,
    overallCircuitBreakerRatePerSecond: j.maxGlobalSendEventsPerSecond,
    enableEventWeighting: j.enableEventWeighting ?? !1
  });
  _$$L.init({
    allowedTracingUrls: K,
    applicationId: datadog_rum_application_id,
    clientToken: datadog_rum_client_token,
    site: F,
    service: t,
    env: function (e) {
      switch (e) {
        case "staging":
          return "staging";
        case "prod":
          return "production";
        case "gov":
          return "gov";
        case "devenv01":
          return "devenv01";
        default:
          return "development";
      }
    }(cluster_name),
    version: release_manifest_git_commit,
    trackingConsent: B ? "granted" : "not-granted",
    sessionSampleRate: V,
    sessionReplaySampleRate: G,
    traceSampleRate: z,
    profilingSampleRate: H,
    compressIntakeRequests: !!datadog_rum_compress,
    actionNameAttribute: "data-tooltip",
    traceContextInjection: "sampled",
    trackUserInteractions: r,
    trackResources: W,
    trackLongTasks: !!(U || datadog_rum_track_long_task),
    silentMultipleInit: !0,
    defaultPrivacyLevel: "mask",
    enableExperimentalFeatures: [],
    allowUntrustedEvents: !T(M),
    beforeSend: (e, t) => $$D0.beforeSend(e, t)
  });
  _$$L.setGlobalContextProperty("bundler", "webpack");
  _$$L.setGlobalContextProperty("entrypoint", window.ENTRY_POINT ?? "unknown");
  _$$L.setGlobalContextProperty("entrypoint_variant", _$$p ?? "unknown");
  _$$L.setGlobalContextProperty("tracking_session_id", fF());
  $$D0.configure({
    applicationId: datadog_rum_application_id
  });
  let Y = _$$L.getInternalContext()?.session_id;
  if (Y && L(Y), user_data) {
    let {
      id,
      locale
    } = user_data;
    _$$L.setUser({
      id,
      org_id,
      locale,
      user_kind: M,
      user_highest_plan: _$$T(),
      tracking_session_id: fF()
    });
  }
  datadog_logs_init && _$$y?.init({
    clientToken: datadog_rum_client_token,
    site: F,
    service: t,
    version: release_manifest_git_commit,
    env: cluster_name,
    forwardConsoleLogs: ["log", "warn", "error"],
    forwardErrorsToLogs: !1,
    sessionSampleRate: 100
  });
}
function R(e) {
  let t = e?.lastIndexOf("@") ?? -1;
  if (t > 0) {
    let i = e.slice(t + 1);
    if (S.test(i)) return "qa";
    if (Ng(e)) return "automation";
    if (jm(e)) return "user-employee";
  }
  return "user";
}
function N(e) {
  return e?.replace(/\.min\.js\.br/g, ".min.js");
}
let P = "RUM_CIRCUIT_BREAKER";
let O = class e {
  constructor() {
    this._isSendEventsEnabled = !0;
    this._collectErrors = !1;
    this._initializedAt = performance.now();
    this._overallCircuitBreakerSendsDisabled = !1;
    this._overallCircuitBreakerRatePerSecond = -1;
    this._numWeightedEventsInBucket = 0;
    this._weightedEventTypesInBucket = {};
    this._onEnableDatadog = () => {};
    this._onDisableDatadog = () => {};
    this._onCircuitBreakerError = () => {};
    this._enableEventWeighting = !1;
    this.debouncedCountIncrement = s()(t => {
      let i = 1;
      let n = this.getEventTypeForCircuitBreaker(t.type);
      this._enableEventWeighting && "resource" === t.type && (e.staticResourceEventTypes.has(t.resource?.type) || t.resource?.type === "other" && t.resource?.url.endsWith(".min.js.br")) && (i = 0.1);
      this._numWeightedEventsInBucket += i;
      this._weightedEventTypesInBucket[n] = (this._weightedEventTypesInBucket[n] || 0) + i;
      setTimeout(() => {
        this._numWeightedEventsInBucket -= i;
        void 0 !== this._weightedEventTypesInBucket[n] && (this._weightedEventTypesInBucket[n] -= i);
      }, 1e3);
    }, 0, {
      leading: !0
    });
    this.trackSendEventForCircuitBreaker = e => !this._overallCircuitBreakerSendsDisabled && (this._numWeightedEventsInBucket > this._overallCircuitBreakerRatePerSecond ? (this._overallCircuitBreakerSendsDisabled = !0, this._onCircuitBreakerError(), l()(() => this._onDisableDatadog()), !1) : (this.debouncedCountIncrement(e), !0));
  }
  static getInstance() {
    e.instance || (e.instance = new e());
    return e.instance;
  }
  configure({
    onEnableDatadog: e,
    onDisableDatadog: t,
    onCircuitBreakerError: i,
    overallCircuitBreakerRatePerSecond: n,
    enableEventWeighting: r,
    collectErrors: a,
    applicationId: s,
    sessionId: o
  }) {
    void 0 !== n && (this._overallCircuitBreakerRatePerSecond = n);
    void 0 !== e && (this._onEnableDatadog = e);
    void 0 !== t && (this._onDisableDatadog = t);
    void 0 !== i && (this._onCircuitBreakerError = i);
    void 0 !== a && (this._collectErrors = a);
    void 0 !== o && (this._sessionId = o);
    void 0 !== s && (this._applicationId = s);
    this._enableEventWeighting = r ?? !1;
  }
  disableEventSendingUnlessDebugEnabled() {
    this._isSendEventsEnabled && !_$$z() && (this._onDisableDatadog(), this._isSendEventsEnabled = !1);
  }
  enableEventSending({
    allowResourceTracking: e
  }) {
    e ??= !0;
    this._overallCircuitBreakerSendsDisabled || this._isSendEventsEnabled || (!e && _$$z() && (e = !0), this._onEnableDatadog({
      allowResourceTracking: e
    }), this._isSendEventsEnabled = !0);
  }
  optUserIntoDebugFlow() {
    (function () {
      let e = new Date(Date.now() + 2592e5);
      localStorageRef?.setItem("ddr_user_debug_flow", e.toISOString());
      $$k1({
        service: "figma-web",
        collectErrors: !0
      });
    })();
    this.enableEventSending({
      allowResourceTracking: !0
    });
  }
  isSendEventsEnabled() {
    return this._isSendEventsEnabled;
  }
  get numWeightedEventsInBucket() {
    return this._numWeightedEventsInBucket;
  }
  get weightedEventTypesInBucket() {
    return this._weightedEventTypesInBucket;
  }
  get sessionId() {
    return this._sessionId;
  }
  get applicationId() {
    return this._applicationId;
  }
  resetCircuitBreakerForTesting() {
    this._overallCircuitBreakerSendsDisabled = !1;
    this._numWeightedEventsInBucket = 0;
    this._weightedEventTypesInBucket = {};
  }
  getEventTypeForCircuitBreaker(t) {
    return e.validCircuitBreakerEventTypes.has(t) ? t : "other";
  }
  beforeSend(e, t) {
    if ("error" === e.type && e.error?.message?.startsWith(P)) return !0;
    if (!this.shouldSendEvent(e, t) || !this.trackSendEventForCircuitBreaker(e) && "view" !== e.type) return !1;
    try {
      this.modifyContextWithCustomEventProcessing(e, t);
    } catch (e) {
      Cp(e);
    }
    return !0;
  }
  isDebugLoggingEnabled() {
    return _$$z();
  }
  shouldSendEvent(e, t) {
    if (!getFeatureFlags().datadog_rum_allow_send || !this.isSendEventsEnabled()) return !1;
    if (this._collectErrors && "error" === e.type) {
      if (e.error.message.startsWith("[Figment]")) return !1;
    } else if ("resource" === e.type) {
      for (let t of I) if (e.resource.url.includes(t)) return !1;
      if (!_$$z()) {
        for (let t of E) if (e.resource.url.includes(t)) return !1;
      }
    } else if ("action" === e.type && "click" === e.action.type && (e.action.target?.name ?? "").startsWith("Screenreader support")) return !1;
    return !!this._collectErrors || "error" !== e.type;
  }
  modifyContextWithCustomEventProcessing(e, t) {
    if (e.context || (e.context = {}), this.sanitizeResourceUrl(e), getFeatureFlags().additional_rum_context_logging && "long_task" === e.type) {
      if (e.long_task.scripts) for (let t of e.long_task.scripts) t.source_url?.endsWith(".br") && (t.source_url = t.source_url.substring(0, t.source_url.length - 3));
      let t = e.context;
      if (debugState) {
        let e = debugState.getState();
        t.selectedView = e.selectedView;
        t.modalShown = e.modalShown;
        t.dropdownShown = e.dropdownShown;
        t.sanitizedURL = Br(window.location.href);
        t.timeSinceInitialization = performance.now() - this._initializedAt;
      }
    }
    if (this._collectErrors && "error" === e.type && (e.error.stack ? e.error.stack = N(e.error.stack) : e.error.stack = N(e.error.handling_stack), e.error.causes?.forEach(e => {
      e.stack = N(e.stack);
    })), "resource" === e.type && "performanceEntry" in t && t.performanceEntry && t.performanceEntry.serverTiming) {
      let i = {
        request: {
          upstream: {
            duration: {}
          },
          downstream: {
            duration: {}
          }
        }
      };
      for (let {
        name,
        description,
        duration
      } of t.performanceEntry.serverTiming) switch (name) {
        case "cdn-cache-hit":
          i.cache = "hit";
          break;
        case "cdn-cache-miss":
          i.cache = "miss";
          break;
        case "cdn-pop":
          i.pop = description;
          break;
        case "cdn-upstream-layer":
          i.layer = description;
          break;
        case "cdn-rid":
          i.request.id = description;
          break;
        case "cdn-upstream-dns":
          i.request.upstream.duration.dns = duration;
          break;
        case "cdn-upstream-connect":
          i.request.upstream.duration.connect = duration;
          break;
        case "cdn-upstream-fbl":
          i.request.upstream.duration.fbl = duration;
          break;
        case "cdn-downstream-fbl":
          i.request.downstream.duration.fbl = duration;
      }
      Object.assign(e.context, {
        cdn: i
      });
    }
  }
  sanitizeResourceUrl(t) {
    if ("resource" !== t.type) return;
    let i = new URL(t.resource.url);
    let n = i.searchParams;
    for (let t of Array.from(n.keys())) e.allowedQueryParams.has(t) || n.$$delete(t);
    t.resource.url = i.toString();
  }
};
O.allowedQueryParams = new Set(["fuid", "teamId", "orgId", "teamIds", "login_locale", "file", "Expires"]);
O.validCircuitBreakerEventTypes = new Set(["action", "error", "long_task", "resource", "vital", "view"]);
O.staticResourceEventTypes = new Set(["css", "js", "font"]);
export let $$D0 = O.getInstance();
function L(e) {
  let {
    cluster_name
  } = getInitialOptions();
  $$D0.configure({
    sessionId: e
  });
  XM("datadog_rum_link", {
    session_link: `https://go/${"gov" === cluster_name ? "dd-gov" : "dd"}/rum/sid/${e}`
  });
}
export const Tf = $$D0;
export const bj = $$k1;