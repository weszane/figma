import { reportError } from '../905/11';
import { NetworkState } from '../905/149196';
import { ServiceCategories } from '../905/165054';
import { W as _$$W } from '../905/187396';
import { h as _$$h } from '../905/310723';
import { n as _$$n } from '../905/347702';
import { LogLevelStr } from '../905/361972';
import { ANONYMOUS_ID_COOKIE, getCookieOrStorage } from '../905/414007';
import { getTrackingSessionId, incrementSessionCounter, initISOString } from '../905/471229';
import { handleAtomEvent } from '../905/502364';
import { getFeatureFlags } from '../905/601108';
import { observabilityClient } from '../905/602906';
import { logger } from '../905/651849';
import { getLocalStorage, sessionStorageRef } from '../905/657224';
import { getCurrentReferrer, getInitialReferrer } from '../905/747968';
import { generateUUIDv4 } from '../905/871474';
import { getEnvironmentInfo } from '../905/883621';
import { getInitialOptions, isDevEnvironment, isLocalCluster } from '../figma_app/169182';
import { trackFigmentRequest } from '../figma_app/347406';
import { desktopAPIInstance } from '../figma_app/876459';
import { getFalseValue } from '../figma_app/897289';
import { desktopVisibilityEmitter } from '../figma_app/925651';
let m = () => [{
  event: 'Sign Up (GTM)',
  paramNames: ['isWorkEmail', 'sha256_email']
}, {
  event: 'CTA Clicked',
  paramNames: ['trackingContext', 'text']
}, {
  event: 'Context Viewed',
  paramNames: ['name']
}];
class h {
  constructor(e) {
    this.delegateLogger = e;
    this.gtmIframe = null;
    this.sendEventToGtm = e => {
      this.gtmIframe || (this.gtmIframe = document.getElementsByTagName('iframe').namedItem('gtm-iframe'));
      this.gtmIframe?.contentWindow?.postMessage({
        dataLayer: e
      }, getInitialOptions().google_tag_manager_iframe_url);
    };
    this.eventForGtm = (e, t) => {
      let i = m().find(t => t.event === e);
      if (!i) return;
      let n = {};
      t && Object.keys(t).forEach(e => {
        i.paramNames.includes(e) && (n[e] = t[e]);
      });
      let r = this.userAgeInDays();
      return void 0 !== r ? {
        event: e,
        userAgeInDays: r,
        ...n
      } : {
        event: e,
        ...n
      };
    };
  }
  get anonymousId() {
    return this.delegateLogger.anonymousId;
  }
  get userId() {
    return this.delegateLogger.userId;
  }
  userAgeInDays() {
    let e = getInitialOptions()?.user_data?.created_at;
    if (e) return ~~((new Date().getTime() - new Date(e).getTime()) / 864e5);
  }
  track(e, t, i) {
    let n = this.eventForGtm(e, t);
    getInitialOptions().google_tag_manager_iframe_url && n && this.sendEventToGtm(n);
    this.delegateLogger.track(e, t, i);
  }
  clearAnalyticsStorage() {
    this.delegateLogger.clearAnalyticsStorage?.();
  }
  resetFlushTask() {
    this.delegateLogger.resetFlushTask?.();
  }
}
class g {
  constructor(e) {
    this.delegateLogger = e;
  }
  get anonymousId() {
    return this.delegateLogger.anonymousId;
  }
  get userId() {
    return this.delegateLogger.userId;
  }
  track(e, t = {}, i = {}) {
    t == null && (t = {});
    let r = {
      ...t,
      ...getEnvironmentInfo(),
      tracking_session_id: getTrackingSessionId(),
      tracking_session_sequence_id: incrementSessionCounter()
    };
    getFeatureFlags().record_session_start_time && (r.tracking_session_started_at = initISOString);
    this.delegateLogger.track(e, r, i);
  }
  clearAnalyticsStorage() {
    this.delegateLogger.clearAnalyticsStorage?.();
  }
  resetFlushTask() {
    this.delegateLogger.resetFlushTask?.();
  }
}
let f = () => ({
  path: self.window?.location?.pathname,
  referrer: getCurrentReferrer(),
  document_referrer: getInitialReferrer(),
  search: self.window?.location?.search,
  title: self.document?.title,
  url: self.window?.location?.href
});
function _(e) {
  let t = new Date().toISOString();
  let i = {
    anonymousId: e.anonymousId,
    userId: e.userId,
    sentAt: t,
    timestamp: t,
    context: function (e = {}) {
      let t = {
        country: getInitialOptions().iso_code || null,
        city: getInitialOptions().viewer_city || null
      };
      let i = !0 === getInitialOptions().is_cloudfront;
      let n = getInitialOptions().user_ip || null;
      let r = {
        page: e.page ?? f(),
        ip: n,
        userAgent: navigator.userAgent,
        isCloudfront: i,
        forwardToDatadog: !!e.forwardToDatadog,
        logFromProber: !!e.logFromProber,
        location: t
      };
      e.mlEvent && (r.mlEvent = !0);
      return r;
    }(e.options || {})
  };
  getFeatureFlags().figment_debugger && (i.figment_debugger_uuid = generateUUIDv4());
  return i;
}
let y = '__figma_iframe_anonymous_id';
function b() {
  return w.anonymousId;
}
function v() {
  return w.userId;
}
let I = () => {
  let e = !1;
  try {
    e = window.self.origin === window.parent.origin;
  } catch (t) {
    e = !1;
  }
  return e;
};
class E {
  constructor(e) {
    this._userId = e;
    this._storage = getCookieOrStorage();
    this._anonymousId = generateUUIDv4();
    let t = this._storage.get(ANONYMOUS_ID_COOKIE);
    t == null ? this._storage.set(ANONYMOUS_ID_COOKIE, this._anonymousId, {
      sameSite: 'none'
    }) : this._anonymousId = t;
  }
  user() {
    return {
      id: () => this._userId,
      anonymousId: () => this._anonymousId,
      reset: () => {
        this._anonymousId = generateUUIDv4();
        this._storage.set(ANONYMOUS_ID_COOKIE, this._anonymousId);
        this._userId = null;
      }
    };
  }
  ready(e) {
    e();
  }
}
class x {
  identifyUser = e => {
    if (!this._storage) return;
    if (!e || !e.id) {
      this.logoutUser();
      return;
    }
    let t = JSON.stringify({
      email: e.email,
      name: e.name,
      username: e.handle || e.name,
      handle: e.handle,
      utcOffset: new Date().getTimezoneOffset(),
      trackTags: e.track_tags,
      createdAt: e.created_at,
      locale: e.locale
    });
    let i = `${this._PREFIX}traits:${e.id}`;
    this._storage[i] !== t && (this._storage[this._USER_ID_KEY] = e.id, this._storage[i] = t);
  };
  logoutUser = () => {
    if (!this._storage) return;
    let e = this._storage[this._USER_ID_KEY];
    e && (delete this._storage[this._USER_ID_KEY], delete this._storage[`${this._PREFIX}traits:${e}`], this._analytics.ready(() => {
      this._analytics.user().reset();
    }));
  };
  constructor(e) {
    this._analytics = e;
    this._PREFIX = 'segment:';
    this._USER_ID_KEY = `${this._PREFIX}userId`;
    this._storage = sessionStorageRef;
    if (!this._analytics) throw new Error('Unable to use Segment, "analytics" is undefined.');
    this.identifyUser(getInitialOptions().user_data);
    this._analytics.user && (window[y] = this._analytics.user().anonymousId());
  }
  get userId() {
    if (this._analytics.user) return this._analytics.user().id() || void 0;
  }
  get anonymousId() {
    if (this._analytics.user) return this._analytics.user().anonymousId();
  }
  track(e, t = {}, i = {}) {}
}
class S {
  constructor(e) {
    if (!I()) return;
    !function () {
      let e = !1;
      try {
        e = y in window.parent;
      } catch (t) {
        e = !1;
      }
      return e;
    }() ? this._anonymousId = e.user().anonymousId() : this._anonymousId = window.parent[y];
  }
  get anonymousId() {
    return this._anonymousId;
  }
  get userId() {}
  track(e, t = {}, i = {}) {}
}
let w = (() => {
  let e = getInitialOptions().user_data;
  let t = e ? e.id : null;
  return self.window?.self !== self.window?.top && self.window?.location.pathname === '/login_iframe' && I() ? new g(new S(new E(t))) : new h(new g(new x(new E(t))));
})();
let F = ['test even for unit testing really should never be used in prod', 'ds_variable_reference_set', 'Fallback to default variable thumbnail', 'Style Deleted'];
class M {
  constructor(e, t) {
    this._limit = e;
    this._currentTimeWindowStart = 0;
    this._requestCount = 0;
    this._windowDuration = t;
  }
  canMakeRequest() {
    let e = Date.now();
    e - this._currentTimeWindowStart > this._windowDuration && (this._requestCount = 0, this._currentTimeWindowStart = e);
    return this._requestCount < this._limit && (this._requestCount++, !0);
  }
  getWindowStartTime() {
    return this._currentTimeWindowStart;
  }
}
class j {
  constructor(e, t) {
    this.MAX_EVENTS_TRACKED = 200;
    this.MAX_EVENT_REQUESTS_PER_SECOND = 120;
    this._eventRateLimiters = new Map();
    this._eventsBlocked = {};
    e && (this.MAX_EVENTS_TRACKED = e);
    t && (this.MAX_EVENT_REQUESTS_PER_SECOND = t);
  }
  getAndFlushEventsBlocked() {
    let e = this._eventsBlocked;
    this._eventsBlocked = {};
    return e;
  }
  setEventBlocked(e) {
    e in this._eventsBlocked || (this._eventsBlocked[e] = 0);
    this._eventsBlocked[e] += 1;
  }
  setEventAllowlisted(e) {
    this.setEventBlocked(`ALLOWLISTED_${e}`);
  }
  eventTracked(e) {
    try {
      if (!getFeatureFlags().figment_rate_limit_events) return !0;
      if (!this._eventRateLimiters.has(e) && this._eventRateLimiters.size >= this.MAX_EVENTS_TRACKED) {
        let [e, t] = Array.from(this._eventRateLimiters).reduce((e, t) => e[1].smallLimiter.getWindowStartTime() < t[1].smallLimiter.getWindowStartTime() ? e : t);
        this._eventRateLimiters.$$delete(e);
      }
      this._eventRateLimiters.has(e) || this._eventRateLimiters.set(e, {
        smallLimiter: new M(this.MAX_EVENT_REQUESTS_PER_SECOND, 1e3)
      });
      let t = this._eventRateLimiters.get(e).smallLimiter.canMakeRequest();
      if (isDevEnvironment() && !t) {
        let t = new Error(`Received more than ${this.MAX_EVENT_REQUESTS_PER_SECOND} logs per second for event ${e}`);
        reportError(ServiceCategories.DATA_INFRA, t);
      }
      if (!t) {
        if (F.includes(e)) {
          this.setEventAllowlisted(e);
          return !0;
        }
        this.setEventBlocked(e);
      }
      return t;
    } catch (e) {
      return !0;
    }
  }
  getEventRateLimiterForTesting(e) {
    return this._eventRateLimiters.get(e);
  }
}
class U {
  constructor(e) {
    this.MAX_PENDING_REQUEST = 500;
    this._numPending = 0;
    this._eventsBlocked = {};
    e && (this.MAX_PENDING_REQUEST = e);
  }
  getAndFlushEventsBlocked() {
    let e = this._eventsBlocked;
    this._eventsBlocked = {};
    return e;
  }
  setEventBlocked(e) {
    for (let t of e) {
      t in this._eventsBlocked || (this._eventsBlocked[t] = 0);
      this._eventsBlocked[t] += 1;
    }
  }
  requestStarted(e) {
    return !getFeatureFlags().figment_rate_limiting || (this._numPending += 1, !(this._numPending > this.MAX_PENDING_REQUEST) || (this.setEventBlocked(e), !1));
  }
  requestComplete() {
    getFeatureFlags().figment_rate_limiting && (this._numPending -= 1);
  }
}
let B = 'figment_web_client_diagnostics';
class V {
  constructor(e) {
    this._FLUSH_INTERVAL_MS = _$$h;
    this._disableTracking = null;
    this._desktopVisibilityUnsubscribe = null;
    this._storage = getLocalStorage();
    this._onVisibilityChange = () => {
      document.visibilityState === 'hidden' && this._flushBufferWithBeacon();
    };
    this._onDesktopVisibilityChange = () => {
      this._flushBufferWithBeacon();
    };
    this._onPageHide = () => {
      this._flushBufferWithBeacon();
    };
    let t = q();
    this._figmentApiUrl = `${t}/api/figment-proxy`;
    document.addEventListener('visibilitychange', this._onVisibilityChange);
    window.addEventListener('pagehide', this._onPageHide);
    window.addEventListener('beforeunload', this._onPageHide);
    desktopAPIInstance && (this._desktopVisibilityUnsubscribe = desktopVisibilityEmitter.subscribe(this._onDesktopVisibilityChange));
    this._namespace = e;
    this._flushTask = new _$$W();
    this._identifyBuffer = [];
    this._monitorBuffer = [];
    this._monitorBufferKib = 0;
    this._retryTrackBuffer = [];
    this._retryTrackBufferKib = 0;
    this._rateLimiter = new j();
    this._requestRateLimiter = new U();
    getFalseValue() && (this._disableTracking = !0);
  }
  maybeScheduleFlushTask() {
    this._flushTask.isScheduled() || this._flushTask.scheduleRepeating(() => {
      if (this._identifyBuffer.length > 0 && (this._makeRetryableRequest(() => this._makeRequest({
        path: 'identify',
        payload: this._identifyBuffer.slice()
      }), 'identity', []), this._identifyBuffer = []), this._monitorBuffer.length > 0) {
        let e = this._monitorBuffer.slice();
        let t = this._prepareEventVisualizerPayload(e);
        this._makeRetryableRequest(() => this._makeRequest({
          path: 'monitor',
          payload: e
        }), 'monitor', e, t);
        this._clearMonitorBuffer();
      }
      this.maybeTrackDiagnostics(!1);
      return !0;
    }, this._FLUSH_INTERVAL_MS);
  }
  cleanup() {
    document.removeEventListener('visibilitychange', this._onVisibilityChange);
    window.removeEventListener('pagehide', this._onPageHide);
    this._desktopVisibilityUnsubscribe?.();
    this._flushTask.reset();
  }
  _flushBufferWithBeacon() {
    this._identifyBuffer.length > 0 && (this._makeRequest({
      path: 'identify',
      payload: this._identifyBuffer.slice(),
      options: {
        sendAsBeacon: !0
      }
    }).catch(e => {
      this.getOnRequestError(this._identifyBuffer, null)(e);
    }), this._identifyBuffer = []);
    this._monitorBuffer.length > 0 && (this._makeRequest({
      path: 'monitor',
      payload: this._monitorBuffer.slice(),
      options: {
        sendAsBeacon: !0
      }
    }).catch(e => {
      this.getOnRequestError(this._monitorBuffer, null)(e);
    }), this._clearMonitorBuffer());
    this.maybeTrackDiagnostics(!0);
    return !0;
  }
  maybeTrackDiagnostics(e) {
    (this._retryTrackBuffer.length >= 15 || this._retryTrackBufferKib >= 64) && (this._makeRequest({
      path: 'monitor',
      payload: this._retryTrackBuffer,
      options: {
        batchRequest: !0,
        sendAsBeacon: e
      }
    }).catch(e => {
      this.getOnRequestError(this._retryTrackBuffer, null)(e);
    }), this._retryTrackBuffer = [], this._retryTrackBufferKib = 0);
    let t = this._rateLimiter.getAndFlushEventsBlocked();
    let i = this._requestRateLimiter.getAndFlushEventsBlocked();
    if (Object.keys(t).length > 0 || Object.keys(i).length > 0) {
      let r = {
        batchRequest: !1,
        sendAsBeacon: e
      };
      let a = {
        data: {
          event: B,
          properties: {
            fixed_window_events: JSON.stringify(t),
            request_limited_events: JSON.stringify(i),
            action: 'rate_limited',
            shadowed_event_limiting: getFeatureFlags().figment_rate_limit_events ? '0' : '1',
            shadowed_requests_limiting: '0',
            ...getEnvironmentInfo(),
            tracking_session_id: getTrackingSessionId(),
            events_namespace: this._namespace
          },
          ..._({
            anonymousId: b() || null,
            userId: v() || null,
            options: r
          })
        },
        figment_metadata: {
          namespace: 'figweb',
          batched: '0'
        }
      };
      this._makeRequest({
        path: 'monitor',
        payload: [a],
        options: r
      }).catch(e => {
        this.getOnRequestError([a], null)(e);
      });
    }
  }
  static getBufferKib(e) {
    return new TextEncoder().encode(JSON.stringify(e)).length / 1024;
  }
  _addToMonitorBufferOrFlush(e, t) {
    let i = V.getBufferKib([e]);
    if (i > 64) {
      let i = this._prepareEventVisualizerPayload([e]);
      this._makeRetryableRequest(() => this._makeRequest({
        path: 'monitor',
        payload: [e],
        options: t
      }), 'monitor', [e], i);
      return;
    }
    let r = e;
    let a = desktopAPIInstance && getFeatureFlags().figment_desktop_batch_holdout && t?.batchRequest == null && ['Statsig prefetch calls', 'keyboard_shortcuts', 'rcs_client_init_time'].includes(e.data.event);
    a && (e.data.properties._1is_shadow = 'true', r = {
      ...e,
      figment_metadata: {
        namespace: `${this._namespace}_shadow`
      }
    });
    let s = a ? i + 0.02734375 : i;
    let o = this._monitorBufferKib + s;
    if (this._monitorBuffer.length >= 15 || o > 64) {
      let e = this._monitorBuffer.slice();
      let t = this._prepareEventVisualizerPayload(e);
      this._makeRetryableRequest(() => this._makeRequest({
        path: 'monitor',
        payload: e,
        options: {
          sendAsBeacon: !1
        }
      }), 'monitor', e, t);
      this._clearMonitorBuffer();
    }
    if (this._monitorBuffer.push(r), this._monitorBufferKib += s, a) {
      let i = this._prepareEventVisualizerPayload([e]);
      this._makeRetryableRequest(() => this._makeRequest({
        path: 'monitor',
        payload: [e],
        options: t
      }), 'monitor', [e], i);
    }
  }
  _clearMonitorBuffer() {
    this._monitorBuffer = [];
    this._monitorBufferKib = 0;
  }
  page() {
    let e = {
      figment_metadata: {
        namespace: this._namespace
      },
      data: {
        type: 'page',
        properties: f(),
        ..._({
          anonymousId: b() || null,
          userId: v() || null
        })
      }
    };
    this._makeRetryableRequest(() => this._makeRequest({
      path: 'page',
      payload: [e]
    }), 'page', []);
  }
  identify(e, t) {
    this.maybeScheduleFlushTask();
    let i = {
      figment_metadata: {
        namespace: this._namespace
      },
      data: {
        type: 'identify',
        traits: t,
        ..._({
          anonymousId: b() || null,
          userId: e
        })
      }
    };
    this._makeRetryableRequest(() => this._makeRequest({
      path: 'identify',
      payload: [i]
    }), 'identity', []);
  }
  track(e, t, i) {
    this.maybeScheduleFlushTask();
    let n = this._rateLimiter.eventTracked(e);
    if (!n) return;
    let r = !(i && (!1 === i.batchRequest || !0 === i.sendAsBeacon));
    let a = {
      data: {
        event: e,
        properties: t,
        ..._({
          anonymousId: b() || null,
          userId: v() || null,
          options: i
        })
      },
      figment_metadata: {
        namespace: this._namespace,
        batched: r ? '1' : '0',
        rate_limited: n ? void 0 : '1'
      }
    };
    if (r) {
      this._addToMonitorBufferOrFlush(a, i);
    } else {
      let e = this._prepareEventVisualizerPayload([a]);
      this._makeRetryableRequest(() => this._makeRequest({
        path: 'monitor',
        payload: [a],
        options: i
      }), 'monitor', [a], e);
    }
  }
  setTrackingEnabledForTest() {
    this._disableTracking = null;
  }
  isUsingDevAssets() {
    return !(['prod', 'staging', 'gov', 'gov-staging', 'devenv01'].includes(getInitialOptions().cluster_name || '') && !getInitialOptions().local_dev_on_cluster);
  }
  resetFlushTask() {
    this._flushTask.reset();
    this._flushTask = new _$$W();
  }
  _makeRetryableRequest(e, t, i, n = null) {
    let r = (a, s) => {
      e().catch(e => {
        if (a > 0) {
          let e = 0.5 * s * Math.random();
          setTimeout(() => r(a - 1, 2 * s), s + e);
        } else {
          this.getOnRequestError(i, n)(e);
        }
        this._trackRetryEvents(3 - a + 1, t, i);
      });
    };
    r(3, 1e3);
  }
  _trackRetryEvents(e, t, i) {
    let n = i.map(e => t === 'identify' ? 'identity' : t === 'page' ? 'page' : e.data.event).join(',');
    let r = {
      data: {
        event: B,
        properties: {
          retry_count: e.toString(),
          action: 'retry_attempt',
          ...getEnvironmentInfo(),
          tracking_session_id: getTrackingSessionId(),
          path: t,
          retried_events: n,
          events_namespace: this._namespace
        },
        ..._({
          anonymousId: b() || null,
          userId: v() || null,
          options: {
            sendAsBeacon: !1
          }
        })
      },
      figment_metadata: {
        namespace: 'figweb'
      }
    };
    let a = V.getBufferKib([r]);
    this._retryTrackBuffer.push(r);
    this._retryTrackBufferKib += a;
  }
  _prepareEventVisualizerPayload(e) {
    return e.filter(e => e.figment_metadata.namespace !== 'figweb_shadow' && e.figment_metadata.namespace !== 'figfs_shadow').map(e => e.data);
  }
  _makeRequest({
    path: e,
    payload: t,
    options: i
  }) {
    (getFeatureFlags().analytics_log_request_to_console || String(this._storage?.analytics_log_request_to_console).toLowerCase() === 'true') && t.forEach(e => {
      logger.log('%cevent json: ', 'font-weight: bold', {
        text: JSON.stringify(e)
      });
    });
    let r = null;
    if (e === 'monitor' && getFeatureFlags().figment_debugger && (r = this._prepareEventVisualizerPayload(t), trackFigmentRequest(r, NetworkState.PENDING)), this._disableTracking) return Promise.resolve();
    if (e === 'monitor' && getFeatureFlags().figment_rate_limiting && !this._requestRateLimiter.requestStarted(t.map(e => e.data.event))) {
      isDevEnvironment() && logger.error('More than 500 figment requests pending');
      this._requestRateLimiter.requestComplete();
      return Promise.resolve();
    }
    let a = {};
    getFeatureFlags().internal_only_debug_tools ? a = {
      'X-Figma-Debug-Log-To-Datadog': '1',
      'X-Figma-Dev-Passthrough': this.isUsingDevAssets() ? '1' : '0',
      'X-Figma-Debug-User-ID': String(getInitialOptions().user_data?.id),
      'X-Figma-Debug-User-Email': String(getInitialOptions().user_data?.email)
    } : this.isUsingDevAssets() && (a = {
      'X-Figma-Dev-Passthrough': '1'
    });
    return fetch(`${this._figmentApiUrl}/${e}`, {
      method: 'POST',
      body: JSON.stringify(t),
      priority: 'low',
      keepalive: i?.sendAsBeacon,
      headers: {
        'Content-Type': 'application/json',
        ...a
      },
      credentials: 'omit'
    }).then(this.getOnRequestResponse(r)).catch(() => {
      throw new Error('Request failed');
    }).finally(() => {
      this._requestRateLimiter.requestComplete();
    });
  }
  getOnRequestResponse(e) {
    return t => {
      t.status === 0 ? this._disableTracking === null && (this._disableTracking = !0, logger.warn('[Figment] Request failed with status 0, disabling further tracking')) : trackFigmentRequest(e, NetworkState.SUCCESS);
      this._disableTracking === null && (this._disableTracking = !1);
    };
  }
  getOnRequestError(e, t) {
    return i => {
      logger.error(`[Figment] Http Error: ${i}`);
      trackFigmentRequest(t, NetworkState.FAILURE);
      getFeatureFlags().figment_sentry_errors && !this.isUsingDevAssets() && reportError(ServiceCategories.DATA_INFRA, i, {
        extra: {
          payload: e
        }
      });
    };
  }
}
class G {
  constructor(e) {
    this._PREFIX = 'figment:';
    this._USER_ID_KEY = `${this._PREFIX}userId`;
    this._storage = getLocalStorage();
    this.identifyUser = e => {
      if (!this._storage) return;
      if (!e || !e.id) {
        this.clearAnalyticsStorage();
        return;
      }
      let t = {
        email: e.email,
        name: e.name,
        username: e.handle || e.name,
        handle: e.handle,
        utcOffset: new Date().getTimezoneOffset(),
        trackTags: e.track_tags,
        createdAt: e.created_at,
        locale: e.locale
      };
      let i = JSON.stringify(t);
      let n = `${this._PREFIX}traits:${e.id}`;
      this._storage[n] !== i && (this._figmentApi.identify(e.id, t), this._storage[this._USER_ID_KEY] = e.id, this._storage[n] = i);
    };
    this.resetFlushTask = () => {
      this._figmentApi.resetFlushTask();
    };
    this.clearAnalyticsStorage = () => {
      if (this._storage) {
        for (let e in this._storage[this._USER_ID_KEY] && delete this._storage[this._USER_ID_KEY], this._storage) e.startsWith(`${this._PREFIX}traits:`) && delete this._storage[e];
      }
    };
    this._figmentApi = e;
    this.identifyUser(getInitialOptions().user_data);
    this._figmentApi.page();
  }
  get userId() {
    return v();
  }
  get anonymousId() {
    return b();
  }
  page() {
    this._figmentApi.page();
  }
  track(e, t = {}, i) {
    this._figmentApi.track(e, t, i);
  }
}
class z {
  get anonymousId() {
    return b();
  }
  get userId() {
    return v();
  }
  track(e, t = {}, i = {}) {
    window.parent.postMessage({
      type: 'trackEvent',
      event: e,
      properties: t,
      options: {
        ...i,
        figment: !0,
        segment: !1
      }
    }, window.self.origin);
  }
}
let H = e => {
  let t = new G(e);
  if (self.window?.self !== self.window?.top && self.window?.location.pathname === '/login_iframe') {
    let e = !1;
    try {
      e = window.self.origin === window.parent.origin;
    } catch (t) {
      e = !1;
    }
    if (e) return new g(t = new z());
  }
  return new h(new g(t));
};
let W = e => H(new V(e));
let K = W('figweb');
let Y = W('figfs');
function q() {
  return isLocalCluster() ? 'https://staging.figma.com' : getInitialOptions().figma_url;
}
let AnalyticsEventDefinitions = {
  'sites.finish_copy_to_sites': {
    throttle: {
      type: 'DOCUMENT'
    }
  },
  'sites.generate_static_bundle': {
    throttle: {
      type: 'DOCUMENT'
    },
    forwardToDatadog: !0
  },
  'sites.gradient_export': {
    forwardToDatadog: !0
  },
  'sites.left_rail_tab_selected': {
    throttle: {
      type: 'RATE',
      sampleRate: 0.05
    }
  },
  'sites.code_snapshot_time': {
    forwardToDatadog: !0
  },
  'sites.individual_code_snapshot_time': {
    forwardToDatadog: !0
  },
  'sites.preview_message_timeout': {
    forwardToDatadog: !0
  },
  'ui3_platform.keyboard_shortcut_text_entry': {
    throttle: {
      type: 'MS',
      throttleMS: 1e3
    }
  },
  'prototype.dom_content_loaded': {
    throttle: {
      type: 'DOCUMENT'
    }
  },
  'prototype.draw_blank': {
    forwardToDatadog: !0
  },
  'prototype.editor_play_button_clicked': {
    legacyName: 'Prototype Editor Play Button Clicked'
  },
  'prototype.enforce_prototype_security_boundaries': {
    forwardToDatadog: !0
  },
  'prototype.livegraph_subscription_started': {
    throttle: {
      type: 'DOCUMENT'
    }
  },
  'prototype.livegraph_subscription_loaded': {
    throttle: {
      type: 'DOCUMENT'
    },
    forwardToDatadog: !0
  },
  'prototype.multiplayer_connection_start': {
    throttle: {
      type: 'DOCUMENT'
    }
  },
  'prototype.multiplayer_first_response': {
    throttle: {
      type: 'DOCUMENT'
    },
    forwardToDatadog: !0
  },
  'prototype.multiplayer_first_finish': {
    throttle: {
      type: 'DOCUMENT'
    },
    forwardToDatadog: !0
  },
  'prototype.replay_clicked': {
    legacyName: 'Prototype Replay Clicked'
  },
  'prototype.ifl_completed': {
    throttle: {
      type: 'DOCUMENT'
    },
    forwardToDatadog: !0
  },
  'prototype.ifl_nodes_loaded_count': {
    forwardToDatadog: !0
  },
  'prototype.viewer_connect_to': {
    forwardToDatadog: !0,
    legacyName: 'Viewer Connect To'
  },
  'prototype.viewer_loaded': {
    forwardToDatadog: !0,
    legacyName: 'Viewer Loaded'
  },
  'prototype.video_load': {
    forwardToDatadog: !0
  },
  'prototype.video_play': {
    throttle: {
      type: 'RATE',
      sampleRate: 0.1
    },
    forwardToDatadog: !0
  },
  'prototype.video_upload': {
    forwardToDatadog: !0,
    legacyName: 'video_upload'
  },
  'prototype.viewer_overlay_state': {
    forwardToDatadog: !0,
    legacyName: 'Viewer Overlay State'
  },
  'prototype.viewer_reached_unloaded_frame': {
    forwardToDatadog: !0,
    legacyName: 'viewer_reached_unloaded_frame'
  },
  'prototype.ifl_section_infinite_query': {
    throttle: {
      type: 'DOCUMENT'
    }
  },
  'prototype.viewer_navigation_invalid_destination': {
    forwardToDatadog: !0
  },
  'prototype.image_url_request_failed': {
    throttle: {
      type: 'DOCUMENT'
    }
  },
  'prototype.ai_magic_link_action_instruction': {
    mlEvent: !0
  },
  'prototype.ai_magic_link_custom_error': {
    forwardToDatadog: !0,
    mlEvent: !0
  },
  'prototype.ai_magic_link_entry_clicked': {
    forwardToDatadog: !0,
    mlEvent: !0
  },
  'prototype.ai_magic_link_feature_computed': {
    mlEvent: !0
  },
  'prototype.ai_magic_link_gpt_post_processing': {
    mlEvent: !0
  },
  'prototype.ai_magic_link_input_existing_interactions': {
    mlEvent: !0
  },
  'prototype.ai_magic_link_started': {
    forwardToDatadog: !0,
    mlEvent: !0
  },
  'prototype.ai_magic_link_completed': {
    forwardToDatadog: !0,
    mlEvent: !0
  },
  'prototype.ai_magic_link_narrow_selection': {
    mlEvent: !0
  },
  'prototype.ai_magic_link_edit_mode_exit': {
    mlEvent: !0
  },
  'prototype.ai_magic_link_review_reject_connector': {
    mlEvent: !0
  },
  'prototype.ai_magic_link_accept_all': {
    forwardToDatadog: !0,
    mlEvent: !0
  },
  'prototype.ai_magic_link_review': {
    mlEvent: !0
  },
  'prototype.ai_magic_link_input': {
    mlEvent: !0
  },
  'prototype.navigate_to_section': {
    throttle: {
      type: 'DOCUMENT'
    }
  },
  'prototype.navigate_to_null_frame': {
    forwardToDatadog: !0
  },
  'prototype.update_symbol_instances': {
    throttle: {
      type: 'RATE',
      sampleRate: 0.01
    }
  },
  'prototype.prototype_viewed': {
    throttle: {
      type: 'DOCUMENT'
    },
    legacyName: 'Prototype Viewed'
  },
  'prototype.viewer_font_load': {
    forwardToDatadog: !0
  },
  'variables.variable_picker_load_time': {
    forwardToDatadog: !0
  },
  'variables.variable_load.error': {
    forwardToDatadog: !0
  },
  'workflow.connected_project_invite_starter_team_paywall_hit': {
    featureFlag: 'fc_general'
  },
  'workflow.connected_projects_maximum_connections_paywall_hit': {
    featureFlag: 'fc_general'
  },
  'asset_search.query_result': {
    forwardToDatadog: !0
  },
  'asset_search.result_inserted': {
    forwardToDatadog: !0
  },
  'asset_search.see_more': {
    forwardToDatadog: !0
  },
  'asset_search.actions_search_panel_open': {
    forwardToDatadog: !0
  },
  'asset_search.misc_feature_usage': {
    forwardToDatadog: !0
  },
  'assets_panel.flyout_opened': {
    forwardToDatadog: !0
  },
  'assets_panel.flyout_insert': {
    forwardToDatadog: !0
  },
  'assets_panel.keyboard_insert': {
    forwardToDatadog: !0
  },
  'assets_panel.server_search_for_all_components_failure': {
    forwardToDatadog: !0
  },
  'assets_panel.server_search_for_file_failure': {
    forwardToDatadog: !0
  },
  'assets_panel.search_for_components_from_community_libraries_error': {
    forwardToDatadog: !0
  },
  'assets_panel.site_kit_inserted': {
    forwardToDatadog: !0
  },
  'assets_panel.view_site_kit': {
    forwardToDatadog: !0
  },
  'auto_suggest.funnel': {
    forwardToDatadog: !0
  },
  'auto_suggest.timer': {
    forwardToDatadog: !0
  },
  'auto_suggest.component_inserted': {
    forwardToDatadog: !0
  },
  'library_preferences_modal.library_subscription_toggle': {
    forwardToDatadog: !0
  },
  'library_preferences_modal.library_subscription_toggle.outcome': {
    forwardToDatadog: !0
  },
  'fragment_search.assets_details_panel_reached_bottom_of_scroll': {
    forwardToDatadog: !0
  },
  'fragment_search.assets_panel_visual_search_button_clicked': {
    forwardToDatadog: !0
  },
  'design_to_react.code_generation_time': {
    forwardToDatadog: !0
  },
  'design_to_react.design_to_react_code_generated': {
    forwardToDatadog: !0
  },
  'design_to_react.design_to_react_code_validity': {
    forwardToDatadog: !0
  },
  'mobile_platform.first_prototype_interaction_mirror': {
    throttle: {
      type: 'DOCUMENT'
    }
  },
  'mobile_platform.tilestack_tile_reclamation': {
    throttle: {
      type: 'MS',
      throttleMS: 6e4
    }
  },
  'slides.presentation_mode.speaker_notes_inserted': {
    throttle: {
      type: 'DOCUMENT'
    }
  },
  'slides.editor.theme_swap': {
    throttle: {
      type: 'DOCUMENT'
    }
  },
  'slides.import.pptx': {
    throttle: {
      type: 'DOCUMENT'
    },
    forwardToDatadog: !0
  },
  'slides.export.pptx.latency': {
    forwardToDatadog: !0
  },
  'slides.export.pptx': {
    throttle: {
      type: 'DOCUMENT'
    },
    forwardToDatadog: !0
  },
  'slides.add_object_animation': {
    throttle: {
      type: 'DOCUMENT'
    }
  },
  'slides.modify_object_animation.type': {
    throttle: {
      type: 'DOCUMENT'
    }
  },
  'slides.modify_object_animation.duration': {
    throttle: {
      type: 'DOCUMENT'
    }
  },
  'slides.modify_object_animation.start_condition': {
    throttle: {
      type: 'DOCUMENT'
    }
  },
  'slides.modify_object_animation.phase': {
    throttle: {
      type: 'DOCUMENT'
    }
  },
  'slides.reorder_object_animation': {
    throttle: {
      type: 'DOCUMENT'
    }
  },
  'slides.delete_object_animation': {
    throttle: {
      type: 'DOCUMENT'
    }
  },
  'slides.preview_object_animation': {
    throttle: {
      type: 'DOCUMENT'
    }
  },
  'slides.mobile_web.gesture_navigation': {
    throttle: {
      type: 'DOCUMENT',
      throttlePerDocument: 5
    }
  },
  'slides.mobile_web.fullscreen_state': {
    throttle: {
      type: 'DOCUMENT',
      throttlePerDocument: 5
    }
  },
  'slides.mobile_web.pinch_to_zoom': {
    throttle: {
      type: 'DOCUMENT',
      throttlePerDocument: 5
    }
  },
  'rendering_and_animation.webgl_initialization': {
    throttle: {
      type: 'DOCUMENT'
    },
    forwardToDatadog: !0
  },
  'rendering_and_animation.webgpu_initialization': {
    throttle: {
      type: 'DOCUMENT'
    },
    forwardToDatadog: !0
  },
  'rendering_and_animation.webgpu_to_webgl_fallback': {
    throttle: {
      type: 'DOCUMENT'
    },
    forwardToDatadog: !0
  },
  'rendering_and_animation.webgl_astc_compressed_textures_support': {
    throttle: {
      type: 'DOCUMENT'
    },
    forwardToDatadog: !0
  },
  'rendering_and_animation.compressed_texture_gl_upload': {
    throttle: {
      type: 'DOCUMENT'
    },
    forwardToDatadog: !0
  },
  'rendering_and_animation.exported_export_setting_bicubic': {
    featureFlag: 'bicubic_image_sampler'
  },
  'rendering_and_animation.webgpu_compatibility': {
    throttle: {
      type: 'DOCUMENT'
    },
    forwardToDatadog: !0
  },
  'rendering_and_animation.device_or_context_loss_restore': {
    forwardToDatadog: !0
  },
  'client_platform.clear_style_consumption_cache': {
    forwardToDatadog: !0
  },
  'client_platform.types_convergence_field_mismatch': {
    forwardToDatadog: !0
  },
  'client_platform.types_convergence_shadow_read_result': {
    forwardToDatadog: !0
  },
  'preset_libraries.apple_font_eula_clicked': {
    forwardToDatadog: !0
  },
  'preset_libraries.apple_font_eula_displayed': {
    forwardToDatadog: !0
  },
  'preset_libraries.apple_eula_clicked': {
    forwardToDatadog: !0
  },
  'preset_libraries.apple_eula_displayed': {
    forwardToDatadog: !0
  },
  'preset_libraries.apple_eula_check_performed': {
    forwardToDatadog: !0
  },
  'preset_libraries.team_status_changed': {
    forwardToDatadog: !0
  },
  'preset_libraries.org_status_changed': {
    forwardToDatadog: !0
  },
  'preset_libraries.static_update_fetch': {
    forwardToDatadog: !0
  },
  'preset_libraries.preset_options_modal_displayed': {
    forwardToDatadog: !0
  },
  'preset_libraries.preset_options_modal_option_clicked': {
    forwardToDatadog: !0
  },
  'code_connect.code_connect_rendered': {
    forwardToDatadog: !0
  },
  'code_connect.code_connect_error': {
    forwardToDatadog: !0
  },
  'file_import.pdf_files_dropped_on_canvas': {
    forwardToDatadog: !0
  },
  'file_import.pdf_import_completed': {
    forwardToDatadog: !0
  },
  'file_import.move_to_project.button_clicked': {
    forwardToDatadog: !0
  },
  'plans.current_plan_user_lg_load_timing': {
    forwardToDatadog: !0
  },
  'plans.current_plan_user_view_shadow_error': {
    forwardToDatadog: !0
  },
  'plans.current_plan_lg_load_timing': {
    forwardToDatadog: !0
  },
  'plans.current_plan_view_shadow_error': {
    forwardToDatadog: !0
  },
  'plans.current_plan_view_error': {
    forwardToDatadog: !0
  },
  'plans.current_plan_user_view_error': {
    forwardToDatadog: !0
  },
  'figjam_summary_preview.refresh_timeout_increment_metric': {
    forwardToDatadog: !0
  },
  'figjam_summary_preview.page_thumbnails_request_failed_increment_metric': {
    forwardToDatadog: !0
  },
  'mfa.modal_shown': {
    forwardToDatadog: !0
  },
  'mfa.file_access_without_restriction': {
    forwardToDatadog: !0
  },
  'scenegraph_and_sync.client_disconnected': {
    forwardToDatadog: !0
  },
  'scenegraph_and_sync.force_client_reload_aborted': {
    forwardToDatadog: !0
  },
  'scenegraph_and_sync.force_client_reload_fetch_error': {
    forwardToDatadog: !0
  },
  'scenegraph_and_sync.force_client_reload_poisoned': {
    forwardToDatadog: !0,
    sendAsBeacon: !0
  },
  'scenegraph_and_sync.force_client_reload_triggered': {
    forwardToDatadog: !0,
    sendAsBeacon: !0
  },
  'scenegraph_and_sync.force_client_reload_banner.clicked': {
    forwardToDatadog: !0,
    sendAsBeacon: !0
  },
  'scenegraph_and_sync.force_client_reload_banner.shown': {
    forwardToDatadog: !0
  },
  'scenegraph_and_sync.property_registers_flushed': {
    featureFlag: 'geometry_cache_metrics'
  },
  'scenegraph_and_sync.changes_stager.enter_staging_mode': {
    forwardToDatadog: !0,
    sendAsBeacon: !0
  },
  'scenegraph_and_sync.changes_stager.commit_staged_changes': {
    forwardToDatadog: !0,
    sendAsBeacon: !0
  },
  'scenegraph_and_sync.changes_stager.rollback_staged_changes': {
    forwardToDatadog: !0,
    sendAsBeacon: !0
  },
  'scenegraph_and_sync.changes_stager.long_running_stager': {
    forwardToDatadog: !0
  },
  'scenegraph_and_sync.changes_stager.restore_stager_during_reconnect': {
    forwardToDatadog: !0
  },
  'scenegraph_and_sync.backgrounded_load': {
    forwardToDatadog: !0
  },
  'scenegraph_and_sync.load_went_offline': {
    forwardToDatadog: !0
  },
  'scenegraph_and_sync.fullscreen_open_error': {
    forwardToDatadog: !0,
    sendAsBeacon: !0
  },
  'scenegraph_and_sync.too_many_connections_fallback': {
    forwardToDatadog: !0,
    sendAsBeacon: !0
  },
  'scenegraph_and_sync.image_import_status': {
    forwardToDatadog: !0,
    sendAsBeacon: !0
  },
  'scenegraph_and_sync.multiplayer_message_encode_error': {
    throttle: {
      type: 'MS',
      throttleMS: 1e3
    },
    forwardToDatadog: !0
  },
  'dev_mode.set_node_locked': {
    featureFlag: 'dt_locking'
  },
  'library_modal.starter_cta_clicked': {
    forwardToDatadog: !0
  },
  'library_modal.publish_upsell_banner_shown': {
    forwardToDatadog: !0
  },
  'library_modal.load_time': {
    forwardToDatadog: !0
  },
  'library_modal.page_opened': {
    forwardToDatadog: !0
  },
  'library_modal.workspace_clicked': {
    forwardToDatadog: !0
  },
  'library_modal.team_see_more_clicked': {
    forwardToDatadog: !0
  },
  'library_modal.library_clicked': {
    forwardToDatadog: !0
  },
  'library_modal.search_result': {
    forwardToDatadog: !0
  },
  'library_modal.filtered': {
    forwardToDatadog: !0
  },
  'library_modal.toggle_only_design_subscription': {
    forwardToDatadog: !0
  },
  'asset_mirror.sync_queued_assets_of_type': {
    forwardToDatadog: !0
  },
  'asset_mirror.sync_queued_assets_overall': {
    forwardToDatadog: !0
  },
  'file_browser.total_context_menu_load_time': {
    forwardToDatadog: !0
  },
  'file_browser.context_menu_load_queries_time': {
    forwardToDatadog: !0
  },
  'file_browser.sidebar_data_lg_migration': {
    forwardToDatadog: !0
  },
  'file_browser.contentful_paint': {
    forwardToDatadog: !0,
    sendAsBeacon: !0
  },
  'file_browser.folder_preview_files_load_time': {
    forwardToDatadog: !0
  },
  'fpl.missing_toast_message': {
    forwardToDatadog: !0
  },
  'figjam_advanced_diagramming.shapes_sidebar_open': {
    forwardToDatadog: !0
  },
  'figjam_advanced_diagramming.shapes_sidebar_search': {
    forwardToDatadog: !0
  },
  'figjam_advanced_diagramming.shapes_sidebar_search_completion': {
    forwardToDatadog: !0
  },
  'figjam_advanced_diagramming.shapes_sidebar_library_open': {
    forwardToDatadog: !0
  },
  'figjam_advanced_diagramming.diagramming_shape_created': {
    forwardToDatadog: !0
  },
  'figjam.lock_options.clicked': {
    forwardToDatadog: !0
  },
  'figjam.lock_options.lock_all.selected': {
    forwardToDatadog: !0
  },
  'figjam.lock_options.lock_background_only.selected': {
    forwardToDatadog: !0
  },
  'notification.browser_notification_firebase_error': {
    forwardToDatadog: !0
  },
  'notification.browser_notification_permission_request': {
    forwardToDatadog: !0
  },
  'notification.firebase_token_registered': {
    forwardToDatadog: !0
  },
  'notification.firebase_token_registration_blocked': {
    forwardToDatadog: !0
  },
  'notification.firebase_token_registration_failed': {
    forwardToDatadog: !0
  },
  'notification.catfile_confirmation_toast_shown': {
    forwardToDatadog: !0
  },
  'illustration.canvas_arc_data': {
    throttle: {
      type: 'DOCUMENT'
    }
  },
  'illustration.canvas_star_count': {
    throttle: {
      type: 'DOCUMENT'
    }
  },
  'illustration.canvas_polygon_count': {
    throttle: {
      type: 'DOCUMENT'
    }
  },
  'illustration.canvas_star_ratio': {
    throttle: {
      type: 'DOCUMENT'
    }
  },
  'illustration.web_noise_paint_change': {
    throttle: {
      type: 'MS'
    }
  },
  'illustration.web_pattern_paint_change': {
    throttle: {
      type: 'MS'
    }
  },
  'illustration.web_progressive_blur_toggle': {
    throttle: {
      type: 'MS'
    }
  },
  'illustration.web_noise_effect_toggle': {
    throttle: {
      type: 'MS'
    }
  },
  'illustration.web_texture_effect_toggle': {
    throttle: {
      type: 'MS'
    }
  },
  'illustration.web_glass_effect_toggle': {
    throttle: {
      type: 'MS'
    }
  },
  'illustration.web_repeater_toggle': {
    throttle: {
      type: 'MS'
    }
  },
  'illustration.web_effects_direct_repeater_toggle': {
    throttle: {
      type: 'MS'
    }
  },
  'illustration.web_arc_data': {
    throttle: {
      type: 'DOCUMENT'
    }
  },
  'illustration.web_star_count': {
    throttle: {
      type: 'DOCUMENT'
    }
  },
  'illustration.web_polygon_count': {
    throttle: {
      type: 'DOCUMENT'
    }
  },
  'illustration.web_star_ratio': {
    throttle: {
      type: 'DOCUMENT'
    }
  },
  'illustration.upgrade_vector_operation_version': {
    throttle: {
      type: 'MS'
    }
  },
  'illustration.web_transform_add_to_layer': {
    throttle: {
      type: 'MS'
    }
  },
  'illustration.web_transform_delete_from_layer': {
    throttle: {
      type: 'MS'
    }
  },
  'illustration.web_transform_toggle_visibility': {
    throttle: {
      type: 'MS'
    }
  },
  'illustration.web_transform_toggle_visible_implicit': {
    throttle: {
      type: 'MS'
    }
  },
  'illustration.web_transform_toggle_flyout_open': {
    throttle: {
      type: 'MS'
    }
  },
  'illustration.web_transform_type_change': {
    throttle: {
      type: 'MS'
    }
  },
  'illustration.web_variable_width_mode_toggle': {
    throttle: {
      type: 'MS'
    }
  },
  'illustration.web_variable_width_mode_untoggle': {
    throttle: {
      type: 'MS'
    }
  },
  'illustration.pressure_sensitive_variable_width_points_added': {
    throttle: {
      type: 'MS'
    }
  },
  'illustration.added_new_variable_width_points': {
    throttle: {
      type: 'MS'
    }
  },
  'illustration.web_variable_width_stroke_profile_changed': {
    throttle: {
      type: 'MS'
    }
  },
  'illustration.updated_variable_width_points': {
    throttle: {
      type: 'MS'
    }
  },
  'illustration.deleted_variable_width_points': {
    throttle: {
      type: 'MS'
    }
  },
  'illustration.shape_builder_used': {
    throttle: {
      type: 'MS'
    }
  },
  'illustration.simplify': {
    throttle: {
      type: 'MS'
    }
  },
  'illustration.offset_path': {
    throttle: {
      type: 'MS'
    }
  },
  'ai_productivity.variable_suggestion_context_collection_time': {
    featureFlag: 'aip_flower_garden_shadow_reranker',
    forwardToDatadog: !0
  },
  'ai_for_production.chat_message_sent': {
    mlEvent: !0
  },
  'ai_for_production.chat_response_received': {
    mlEvent: !0
  },
  'ai_for_production.chat_feedback': {
    mlEvent: !0
  },
  'ai_for_production.chat_attachment_added': {
    mlEvent: !0
  },
  'ai_for_production.llm_generation_error': {
    forwardToDatadog: !0
  },
  'ai_for_production.llm_generation_built': {
    forwardToDatadog: !0
  },
  'ai_for_production.version_restore_clicked': {
    forwardToDatadog: !0
  },
  'ai_for_production.unsaved_changes_warning_shown': {
    forwardToDatadog: !0
  },
  'ai_for_production.code_chat_client_side_context_limit_exceeded': {
    forwardToDatadog: !0
  },
  'ds_import.extraction_funnel': {
    forwardToDatadog: !0
  },
  'ds_import.library_selected': {
    forwardToDatadog: !0
  },
  'ds_import.library_used_in_generation': {
    forwardToDatadog: !0
  },
  'activation.users_defaulted_to_dev_mode': {
    forwardToDatadog: !0
  },
  'activation.time_to_load_social_proof': {
    forwardToDatadog: !0
  },
  'activation.send_to_make_from_design.file_bootstrapped_from_design': {
    forwardToDatadog: !0
  },
  'activation.send_to_make_from_design.frame_pasted_as_attachment': {
    forwardToDatadog: !0
  },
  'activation.send_to_make_from_design.prompt_with_attachments': {
    forwardToDatadog: !0
  },
  'mp_latency.same_client_ack': {
    featureFlag: 'log_mp_latency',
    throttle: {
      type: 'RATE',
      sampleRate: 0.001
    }
  },
  'mp_latency.different_client_receive': {
    featureFlag: 'log_mp_latency',
    throttle: {
      type: 'RATE',
      sampleRate: 0.001
    }
  },
  'admin.discouraged_seat_swap_viewed': {
    forwardToDatadog: !0
  },
  'i18n.dictionary_loaded': {
    forwardToDatadog: !0
  },
  'i18n.nux_language_changed': {
    forwardToDatadog: !0
  },
  'i18n.nux_language_dropdown_opened': {
    forwardToDatadog: !0
  },
  'i18n.help_widget_report_translations': {
    forwardToDatadog: !0
  },
  'i18n.help_widget_report_translations_korean': {
    forwardToDatadog: !0
  },
  'native.load_time_metadata': {
    throttle: {
      type: 'DOCUMENT'
    }
  },
  'color_contrast.background_calculation_timeout': {
    forwardToDatadog: !0
  },
  'color_contrast.background_calculation_performance': {
    forwardToDatadog: !0
  },
  'color_contrast.background_blend_performance': {
    forwardToDatadog: !0
  },
  'string_management.generate_ai_context': {
    forwardToDatadog: !0
  },
  'string_management.generate_context_latency': {
    forwardToDatadog: !0
  },
  'string_management.convert_to_string_with_key': {
    forwardToDatadog: !0
  },
  'string_management.convert_to_plain_string': {
    forwardToDatadog: !0
  },
  'string_management.submit_for_translation.result': {
    forwardToDatadog: !0
  },
  'autosuggest_text.serialization_latency': {
    forwardToDatadog: !0
  },
  'autosuggest_text.suggestion_requested': {
    forwardToDatadog: !0
  },
  'autosuggest_text.suggestion_shown': {
    forwardToDatadog: !0
  },
  'autosuggest_text.suggestion_accepted': {
    forwardToDatadog: !0
  },
  'autosuggest_text.suggestion_dismissed': {
    forwardToDatadog: !0
  },
  'autosuggest_text.suggestion_same_as_existing': {
    forwardToDatadog: !0
  },
  'autosuggest_text.warning': {
    forwardToDatadog: !0
  },
  'suggested_actions.completed': {
    forwardToDatadog: !0
  },
  'suggested_actions.initial_dependencies_loaded': {
    forwardToDatadog: !0
  },
  'suggested_actions.violation_detection.completed': {
    forwardToDatadog: !0
  },
  'suggested_actions.visual_grouping.completed': {
    forwardToDatadog: !0
  },
  'suggested_actions.initial_detection_and_grouping_completed': {
    forwardToDatadog: !0
  },
  'suggested_actions.group_suggestions_completed': {
    forwardToDatadog: !0
  },
  'suggested_actions.group_suggestions_loaded': {
    forwardToDatadog: !0
  },
  'mcp.client_tool_call': {
    featureFlag: 'dt_my_cool_plugin',
    forwardToDatadog: !0
  },
  'mcp.client_tool_call_completed': {
    featureFlag: 'dt_my_cool_plugin',
    forwardToDatadog: !0
  },
  'mcp.client_tool_call_duration': {
    featureFlag: 'dt_my_cool_plugin',
    forwardToDatadog: !0
  },
  'mcp.get_tools_call': {
    featureFlag: 'dt_my_cool_plugin',
    forwardToDatadog: !0
  },
  'mcp.get_code_connect_mapping.no_label': {
    featureFlag: 'dt_my_cool_plugin',
    forwardToDatadog: !0
  },
  'mcp.get_code_connect_mapping.missing_data': {
    featureFlag: 'dt_my_cool_plugin',
    forwardToDatadog: !0
  },
  'mcp.client_tool_call_duration_split': {
    featureFlag: 'dt_my_cool_plugin',
    forwardToDatadog: !0
  },
  'mcp.get_image.constraint_hit': {
    forwardToDatadog: !0
  },
  'mcp.d2r_output_size': {
    featureFlag: 'dt_my_cool_plugin',
    forwardToDatadog: !0
  },
  'mcp.deprecated_sse_query': {
    featureFlag: 'dt_my_cool_plugin',
    forwardToDatadog: !0
  },
  'mcp.get_code_returns_metadata': {
    featureFlag: 'dt_mcp_get_code_returns_metadata',
    forwardToDatadog: !0
  },
  'extensibility.plugins_check_viewer_export_restricted': {
    featureFlag: 'plugins_check_viewer_export_restricted',
    throttle: {
      type: 'MS',
      throttleMS: 6e4
    }
  },
  'extensibility.plugins_get_css_async_dev_seat': {
    featureFlag: 'plugins_get_css_async_dev_seat',
    throttle: {
      type: 'MS',
      throttleMS: 6e4
    }
  },
  'user_action_timing.action': {
    forwardToDatadog: !0
  },
  'ai_assistant.message_sent': {
    featureFlag: 'ai_assistant',
    forwardToDatadog: !0,
    mlEvent: !0
  },
  'ai_assistant.response_received': {
    featureFlag: 'ai_assistant',
    forwardToDatadog: !0,
    mlEvent: !0
  },
  'ai_assistant.tool_execution_started': {
    featureFlag: 'ai_assistant',
    forwardToDatadog: !0,
    mlEvent: !0
  },
  'ai_assistant.tool_execution_result': {
    featureFlag: 'ai_assistant',
    forwardToDatadog: !0,
    mlEvent: !0
  }
};
function getAnalyticsByName(e) {
  return e in AnalyticsEventDefinitions ? AnalyticsEventDefinitions[e] : {};
}
export function clearAnalyticsStorage() {
  K.clearAnalyticsStorage?.();
}
export let trackEventAnalytics = (e, t = {}, i = {}) => {
  trackEvent(e, t, i);
};
export let trackFullScreenAnalytics = (e, t = {}, i = {}) => {
  trackFullscreenEvent(e, t, i);
};
let isDevLogAnalyticsEnabled = !!navigator.cookieEnabled && localStorage.getItem('DEV_LOG_ANALYTICS') === 'yes';
window.setDevLogAnalytics = function (e = !0) {
  localStorage.setItem('DEV_LOG_ANALYTICS', e ? 'yes' : 'no');
  isDevLogAnalyticsEnabled = e;
  isDevLogAnalyticsEnabled ? logger.log('dev logging of analytics is enabled') : logger.log('dev logging of analytics is disabled');
};
/**
 * trackEvent - Tracks an analytics event using the main analytics instance.
 * Original variable: en
 * @param eventName The event name.
 * @param properties Event properties.
 * @param options Additional tracking options.
 */
export function trackEvent(eventName, properties, options) {
  handleAtomEvent({
    id: eventName,
    properties
  });

  // Log to console if enabled
  if (getFeatureFlags().analytics_log_to_console || isDevLogAnalyticsEnabled) {
    const summarizedProps = Object.keys(properties).reduce((acc, key) => {
      let value = properties[key];
      if (typeof value === 'object') value = JSON.stringify(value);
      if (typeof value === 'string' && value.length > 50) value = `${value.slice(0, 50)}...`;
      acc[key] = value;
      return acc;
    }, {});
    logger.log(`%ctrack: ${eventName}`, 'font-weight: bold', {
      ...summarizedProps,
      raw: properties
    }, {
      options: {
        ...options,
        // eslint-disable-next-line unicorn/error-message
        stack: new Error().stack
      }
    });
  }

  // Track event and add action
  K.track(eventName, properties, options);
  observabilityClient.addAction(eventName, ServiceCategories.UNOWNED, options.addToRUM ? LogLevelStr.INFO : LogLevelStr.DEBUG, properties, {
    forceEnable: !!options.forceEnableActionLogging
  });
}

/**
 * trackFullscreenEvent - Tracks an analytics event using the fullscreen analytics instance.
 * Original function: er
 * @param eventName The event name.
 * @param properties Event properties.
 * @param options Additional tracking options.
 */
function trackFullscreenEvent(eventName, properties, options) {
  handleAtomEvent({
    id: eventName,
    properties
  });

  // Log to console if enabled
  if (getFeatureFlags().analytics_log_to_console) {
    logger.log(`%ctrack: ${eventName}`, 'font-weight: bold', {
      properties
    }, {
      options: {
        ...options,
        // eslint-disable-next-line unicorn/error-message
        stack: new Error().stack
      }
    });
  }
  Y.track(eventName, properties, options);
  observabilityClient.addAction(eventName, ServiceCategories.UNOWNED, options.addToRUM ? LogLevelStr.INFO : LogLevelStr.DEBUG, properties, {
    forceEnable: !!options.forceEnableActionLogging
  });
}

/**
 * getAnonymousId - Returns the current anonymous analytics ID.
 * Original variable: $$ea2
 */
export const getAnonymousId = () => b();
/**
 * AnalyticsEventManager - manages defined analytics events, throttling, and options.
 * Original variable: $$es1
 */

/**
 * Manages sending, throttling, and tracking analytics events.
 */
class AnalyticsEventManager {
  sentEventDetails: Record<string, any> = {};
  sentDocumentEvents = new Set();

  /**
   * Tracks a defined event if allowed by throttling and feature flags.
   * @param eventName The event name.
   * @param properties Event properties.
   */
  trackDefinedEvent = (eventName, properties) => {
    const def = getAnalyticsByName(eventName);
    if (this.shouldSendDefinedEvent(eventName, def)) {
      trackEvent(this.getCorrectEventName(eventName, def), properties, this.getEventOptions(def));
      this.recordEventSent(eventName, def);
    }
  };

  /**
   * Tracks a defined metric event.
   * @param eventName The event name.
   * @param properties Event properties.
   */
  trackDefinedMetric = _$$n((eventName, properties) => {
    const def = getAnalyticsByName(eventName);
    if (this.shouldSendDefinedEvent(eventName, def)) {
      trackEvent(this.getCorrectEventName(eventName, def), properties, this.getEventOptions(def));
      this.recordEventSent(eventName, def);
    }
  });

  /**
   * Tracks a defined fullscreen event.
   * @param eventName The event name.
   * @param properties Event properties.
   */
  trackDefinedFullscreenEvent = (eventName, properties) => {
    const def = getAnalyticsByName(eventName);
    if (this.shouldSendDefinedEvent(eventName, def)) {
      trackFullscreenEvent(this.getCorrectEventName(eventName, def), properties, this.getEventOptions(def));
      this.recordEventSent(eventName, def);
    }
  };

  /**
   * Resets all sent event details.
   */
  resetEventDetails = () => {
    this.sentEventDetails = {};
  };

  /**
   * Determines if a defined event should be sent based on throttling and feature flags.
   * @param eventName The event name.
   * @param def The event definition.
   */
  shouldSendDefinedEvent = (eventName, def) => {
    if (def.featureFlag && !getFeatureFlags()[def.featureFlag]) return false;
    if (!def.throttle) return true;
    const throttle = def.throttle;
    const sent = this.sentEventDetails[eventName];
    switch (throttle.type) {
      case 'RATE':
        return Math.random() < (throttle.sampleRate ?? 1);
      case 'DOCUMENT':
        if (!sent) return true;
        const perDoc = throttle.throttlePerDocument ?? 1;
        return sent.timesSentThisDocument < perDoc;
      case 'MS':
        if (!sent) return true;
        const ms = throttle.throttleMS ?? 1000;
        return Date.now() - sent.lastSent > ms;
      default:
        throw new Error('Invalid throttle type provided!');
    }
  };

  /**
   * Records that an event was sent, updating throttling state.
   * @param eventName The event name.
   * @param def The event definition.
   */
  recordEventSent = (eventName, def) => {
    const prev = this.sentEventDetails[eventName];
    this.sentEventDetails[eventName] = {
      lastSent: Date.now(),
      timesSentThisDocument: prev ? prev.timesSentThisDocument + 1 : 1
    };
    if (def.throttle?.type === 'DOCUMENT') {
      this.sentDocumentEvents.add(eventName);
    }
  };

  /**
   * Gets the correct event name, using legacyName if present.
   * @param eventName The event name.
   * @param def The event definition.
   */
  getCorrectEventName = (eventName, def) => {
    return def.legacyName ? def.legacyName : eventName;
  };

  /**
   * Gets event options for tracking.
   * @param def The event definition.
   */
  getEventOptions(def) {
    return {
      forwardToDatadog: !!def.forwardToDatadog,
      sendAsBeacon: !!def.sendAsBeacon,
      mlEvent: !!def.mlEvent
    };
  }

  /**
   * Resets throttling for document-level events.
   */
  resetDefinedAnalyticsForDocument() {
    for (const eventName of this.sentDocumentEvents) {
      delete this.sentEventDetails[eventName];
    }
    this.sentDocumentEvents.clear();
  }
}

// Exported as az (original: $$es1)
export const analyticsEventManager = new AnalyticsEventManager();
export function getFigmaCluster() {
  return q();
}
export const Pg = clearAnalyticsStorage;
export const az = analyticsEventManager;
export const pp = getAnonymousId;
export const Rz = getFigmaCluster;
export const sx = trackEventAnalytics;
export const NP = trackFullScreenAnalytics;
