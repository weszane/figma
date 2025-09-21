import _require3 from "../vendor/12983";
import _require2 from "../vendor/253566";
import _require from "../vendor/823518";
import { StatsigEndpoint } from "../vendor/657887";
import { STATSIG_LOCAL_STORAGE_LOGGING_REQUEST_KEY } from "../vendor/339781";
var i = this && this.__awaiter || function(e, r, n, i) {
  function s(e) {
    return e instanceof n ? e : new n(function(r) {
      r(e);
    });
  }
  return new (n || (n = Promise))(function(n, o) {
    function a(e) {
      try {
        d(i.next(e));
      } catch (e) {
        o(e);
      }
    }
    function h(e) {
      try {
        d(i.$$throw(e));
      } catch (e) {
        o(e);
      }
    }
    function d(e) {
      e.done ? n(e.value) : s(e.value).then(a, h);
    }
    d((i = i.apply(e, r || [])).next());
  });
};
var s = this && this.__generator || function(e, r) {
  var n;
  var i;
  var s;
  var o;
  var a = {
    label: 0,
    sent: function() {
      if (1 & s[0]) throw s[1];
      return s[1];
    },
    trys: [],
    ops: []
  };
  o = {
    next: h(0),
    throw: h(1),
    return: h(2)
  };
  "function" == typeof Symbol && (o[Symbol.iterator] = function() {
    return this;
  });
  return o;
  function h(e) {
    return function(r) {
      return d([e, r]);
    };
  }
  function d(o) {
    if (n) throw TypeError("Generator is already executing.");
    for (; a;) try {
      if (n = 1, i && (s = 2 & o[0] ? i.$$return : o[0] ? i.$$throw || ((s = i.$$return) && s.call(i), 0) : i.next) && !(s = s.call(i, o[1])).done) return s;
      switch (i = 0, s && (o = [2 & o[0], s.value]), o[0]) {
        case 0:
        case 1:
          s = o;
          break;
        case 4:
          a.label++;
          return {
            value: o[1],
            done: !1
          };
        case 5:
          a.label++;
          i = o[1];
          o = [0];
          continue;
        case 7:
          o = a.ops.pop();
          a.trys.pop();
          continue;
        default:
          if (!(s = (s = a.trys).length > 0 && s[s.length - 1]) && (6 === o[0] || 2 === o[0])) {
            a = 0;
            continue;
          }
          if (3 === o[0] && (!s || o[1] > s[0] && o[1] < s[3])) {
            a.label = o[1];
            break;
          }
          if (6 === o[0] && a.label < s[1]) {
            a.label = s[1];
            s = o;
            break;
          }
          if (s && a.label < s[2]) {
            a.label = s[2];
            a.ops.push(o);
            break;
          }
          s[2] && a.ops.pop();
          a.trys.pop();
          continue;
      }
      o = r.call(e, a);
    } catch (e) {
      o = [6, e];
      i = 0;
    } finally {
      n = s = 0;
    }
    if (5 & o[0]) throw o[1];
    return {
      value: o[0] ? o[1] : void 0,
      done: !0
    };
  }
};
var o = this && this.__importDefault || function(e) {
  return e && e.__esModule ? e : {
    default: e
  };
};
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var a = o(_require);
var p = o(_require2);
var g = o(_require3);
var m = "statsig::";
var v = m + "config_exposure";
var y = m + "layer_exposure";
var b = m + "gate_exposure";
var O = m + "log_event_failed";
var x = m + "app_error";
var w = m + "app_metrics::page_load_time";
var k = m + "app_metrics::dom_interactive_time";
var _ = m + "diagnostics";
var S = m + "default_value_type_mismatch";
var E = 432e6;
var A = 100;
var C = 1e3;
var T = 1024e3;
var I = 10;
var P = function() {
  function e(e) {
    this.failedLogEventCount = 0;
    this.sdkInternal = e;
    this.queue = [];
    this.flushInterval = null;
    this.loggedErrors = new Set();
    this.failedLogEvents = [];
    this.exposureDedupeKeys = {};
    this.failedLogEventCount = 0;
    this.init();
  }
  e.prototype.init = function() {
    var e = this;
    "undefined" != typeof window && "function" == typeof window.addEventListener && (window.addEventListener("blur", function() {
      return e.flush(!0);
    }), window.addEventListener("beforeunload", function() {
      return e.flush(!0);
    }), window.addEventListener("load", function() {
      setTimeout(function() {
        return e.flush();
      }, 100);
      setTimeout(function() {
        return e.flush();
      }, 1e3);
    }));
    "undefined" != typeof document && "function" == typeof document.addEventListener && document.addEventListener("visibilitychange", function() {
      e.flush("visible" !== document.visibilityState);
    });
    !this.sdkInternal.getOptions().getIgnoreWindowUndefined() && ("undefined" == typeof window || null == window) || this.sdkInternal.getOptions().getLocalModeEnabled() || (this.flushInterval = setInterval(function() {
      e.flush();
    }, this.sdkInternal.getOptions().getLoggingIntervalMillis()), setTimeout(function() {
      return e.flush();
    }, 100), setTimeout(function() {
      return e.flush();
    }, 1e3));
  };
  e.prototype.log = function(e) {
    try {
      if (!this.sdkInternal.getOptions().getDisableCurrentPageLogging() && "undefined" != typeof window && null != window && "object" == typeof window.location && "string" == typeof window.location.href) {
        var r = window.location.href.split(/[?#]/);
        r?.length > 0 && e.addStatsigMetadata("currentPage", r[0]);
      }
    } catch (e) { }
    this.queue.push(e.toJsonObject());
    this.queue.length >= this.sdkInternal.getOptions().getLoggingBufferMaxSize() && this.flush();
  };
  e.prototype.resetDedupeKeys = function() {
    this.exposureDedupeKeys = {};
  };
  e.prototype.shouldLogExposure = function(e) {
    var r = this.exposureDedupeKeys[e];
    var n = Date.now();
    return null == r ? (this.exposureDedupeKeys[e] = n, !0) : !(r >= n - 6e5) && (this.exposureDedupeKeys[e] = n, !0);
  };
  e.prototype.logGateExposure = function(e, r, n, i, s, o, h) {
    var d = r + String(n) + i + o.reason;
    if (this.shouldLogExposure(d)) {
      var p = {
        gate: r,
        gateValue: String(n),
        ruleID: i,
        reason: o.reason,
        time: o.time
      };
      h && (p.isManualExposure = "true");
      var g = new a.$$default(b);
      g.setUser(e);
      g.setMetadata(p);
      g.setSecondaryExposures(s);
      this.log(g);
    }
  };
  e.prototype.logConfigExposure = function(e, r, n, i, s, o) {
    var h = r + n + s.reason;
    if (this.shouldLogExposure(h)) {
      var d = {
        config: r,
        ruleID: n,
        reason: s.reason,
        time: s.time
      };
      o && (d.isManualExposure = "true");
      var p = new a.$$default(v);
      p.setUser(e);
      p.setMetadata(d);
      p.setSecondaryExposures(i);
      this.log(p);
    }
  };
  e.prototype.logLayerExposure = function(e, r, n, i, s, o, h, d, p) {
    var g = [r, n, s, o, String(h), d.reason].join("|");
    if (this.shouldLogExposure(g)) {
      var m = {
        config: r,
        ruleID: n,
        allocatedExperiment: s,
        parameterName: o,
        isExplicitParameter: String(h),
        reason: d.reason,
        time: d.time
      };
      p && (m.isManualExposure = "true");
      var v = new a.$$default(y);
      v.setUser(e);
      v.setMetadata(m);
      v.setSecondaryExposures(i);
      this.log(v);
    }
  };
  e.prototype.logConfigDefaultValueFallback = function(e, r, n) {
    var i = new a.$$default(S);
    i.setUser(e);
    i.setValue(r);
    i.setMetadata(n);
    this.log(i);
    this.loggedErrors.add(r);
    this.sdkInternal.getConsoleLogger().error(r);
  };
  e.prototype.logAppError = function(e, r, n) {
    var i = r.substring(0, 128);
    if (!this.loggedErrors.has(i) && !(this.loggedErrors.size > I)) {
      var s = new a.$$default(x);
      s.setUser(e);
      s.setValue(i);
      s.setMetadata(n);
      this.log(s);
      this.loggedErrors.add(i);
    }
  };
  e.prototype.logDiagnostics = function(e, r) {
    var n = this.makeDiagnosticsEvent(e, r);
    this.log(n);
  };
  e.prototype.logAppMetrics = function(e) {
    if ("function" == typeof window?.performance?.getEntriesByType) {
      var r;
      var n = window.performance.getEntriesByType("navigation");
      if (n && !(n.length < 1)) {
        var i = n[0];
        var s = {
          statsig_dimensions: {
            url: i.name
          }
        };
        var o = new a.$$default(w);
        if (o.setUser(e), o.setValue(i.duration), o.setMetadata(s), this.log(o), i instanceof PerformanceNavigationTiming) {
          var h = new a.$$default(k);
          h.setUser(e);
          h.setValue(i.domInteractive - i.startTime);
          h.setMetadata(s);
          this.log(h);
        }
      }
    }
  };
  e.prototype.shutdown = function() {
    this.flushInterval && (clearInterval(this.flushInterval), this.flushInterval = null);
    this.flush(!0);
  };
  e.prototype.flush = function(e) {
    var r = this;
    if (void 0 === e && (e = !1), this.addErrorBoundaryDiagnostics(), 0 !== this.queue.length) {
      var n = this.queue;
      if (this.queue = [], e && !this.sdkInternal.getNetwork().supportsKeepalive() && "undefined" != typeof navigator && navigator?.sendBeacon != null) {
        this.sdkInternal.getNetwork().sendLogBeacon({
          events: n,
          statsigMetadata: this.sdkInternal.getStatsigMetadata()
        }) || (this.queue = n.concat(this.queue), this.queue.length > 0 && (this.addFailedRequest({
          events: this.queue,
          statsigMetadata: this.sdkInternal.getStatsigMetadata(),
          time: Date.now()
        }), this.queue = []), this.saveFailedRequests());
        return;
      }
      this.sdkInternal.getNetwork().postToEndpoint(StatsigEndpoint.Rgstr, {
        events: n,
        statsigMetadata: this.sdkInternal.getStatsigMetadata()
      }, 3, 1e3, e).then(function(e) {
        if (!e.ok) throw e;
      }).catch(function(e) {
        "function" == typeof e.text ? e.text().then(function(o) {
          r.sdkInternal.getErrorBoundary().logError(O, e, function() {
            return i(r, void 0, void 0, function() {
              return s(this, function(e) {
                return [2, {
                  eventCount: n.length,
                  error: o
                }];
              });
            });
          });
        }) : r.sdkInternal.getErrorBoundary().logError(O, e, function() {
          return i(r, void 0, void 0, function() {
            return s(this, function(r) {
              return [2, {
                eventCount: n.length,
                error: e.message
              }];
            });
          });
        });
        r.newFailedRequest(O, n);
      }).finally(function() {
        return i(r, void 0, void 0, function() {
          return s(this, function(r) {
            e && (this.queue.length > 0 && (this.addFailedRequest({
              events: this.queue,
              statsigMetadata: this.sdkInternal.getStatsigMetadata(),
              time: Date.now()
            }), this.queue = []), this.saveFailedRequests());
            return [2];
          });
        });
      });
    }
  };
  e.prototype.saveFailedRequests = function() {
    var e = this;
    if (this.failedLogEvents.length > 0) {
      var r = JSON.stringify(this.failedLogEvents);
      if (r.length > T) {
        this.clearLocalStorageRequests();
        return;
      }
      if (p.$$default.asyncStorage) {
        p.$$default.setItemAsync(STATSIG_LOCAL_STORAGE_LOGGING_REQUEST_KEY, r).catch(function(r) {
          return e.sdkInternal.getErrorBoundary().logError("saveFailedRequests", r);
        });
        return;
      }
      g.$$default.setItem(STATSIG_LOCAL_STORAGE_LOGGING_REQUEST_KEY, r);
    }
  };
  e.prototype.sendSavedRequests = function() {
    return i(this, void 0, void 0, function() {
      var e;
      var r;
      var n;
      var i;
      var o;
      var a;
      var m;
      var v;
      var y = this;
      return s(this, function(s) {
        switch (s.label) {
          case 0:
            if (r = !1, !p.$$default.asyncStorage) return [3, 2];
            return [4, p.$$default.getItemAsync(STATSIG_LOCAL_STORAGE_LOGGING_REQUEST_KEY)];
          case 1:
            e = s.sent();
            return [3, 3];
          case 2:
            e = g.$$default.getItem(STATSIG_LOCAL_STORAGE_LOGGING_REQUEST_KEY);
            s.label = 3;
          case 3:
            if (null == e) {
              this.clearLocalStorageRequests();
              return [2];
            }
            e.length > T && (r = !0);
            n = [];
            try {
              for (a = 0, n = JSON.parse(e), i = function(e) {
                null != e && e.events && Array.isArray(e.events) && o.sdkInternal.getNetwork().postToEndpoint(StatsigEndpoint.Rgstr, e).then(function(e) {
                  if (!e.ok) throw Error(e.status + "");
                }).catch(function() {
                  r || y.addFailedRequest(e);
                });
              }, o = this, m = n; a < m.length; a++) {
                v = m[a];
                i(v);
              }
            } catch (e) {
              this.sdkInternal.getErrorBoundary().logError("sendSavedRequests", e);
            } finally {
              this.clearLocalStorageRequests();
            }
            return [2];
        }
      });
    });
  };
  e.prototype.addFailedRequest = function(e) {
    if (!(e.time < Date.now() - E) && !(this.failedLogEvents.length > A)) {
      var r = e.events.length;
      this.failedLogEventCount + r > C || (this.failedLogEvents.push(e), this.failedLogEventCount += r);
    }
  };
  e.prototype.clearLocalStorageRequests = function() {
    var e = this;
    p.$$default.asyncStorage ? p.$$default.removeItemAsync(STATSIG_LOCAL_STORAGE_LOGGING_REQUEST_KEY).catch(function(r) {
      return e.sdkInternal.getErrorBoundary().logError("clearLocalStorageRequests", r);
    }) : g.$$default.removeItem(STATSIG_LOCAL_STORAGE_LOGGING_REQUEST_KEY);
  };
  e.prototype.newFailedRequest = function(e, r) {
    this.loggedErrors.has(e) || (this.loggedErrors.add(e), this.failedLogEvents.push({
      events: r,
      statsigMetadata: this.sdkInternal.getStatsigMetadata(),
      time: Date.now()
    }), this.saveFailedRequests());
  };
  e.prototype.makeDiagnosticsEvent = function(e, r) {
    var n = new a.$$default(_);
    n.setUser(e);
    n.setMetadata(r.getMarkers());
    return n;
  };
  e.prototype.addErrorBoundaryDiagnostics = function() {
    var e = this.sdkInternal.getErrorBoundary().getDiagnostics();
    if (e && 0 !== e.getCount()) {
      var r = this.makeDiagnosticsEvent(this.sdkInternal.getCurrentUser(), e);
      this.queue.push(r);
      e.reset();
    }
  };
  return e;
}();
exports.$$default = P; 
