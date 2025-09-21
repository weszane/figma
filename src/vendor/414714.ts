import _require11 from "../vendor/114345";
import _require10 from "../vendor/914052";
import _require1 from "../vendor/12983";
import _require0 from "../vendor/253566";
import _require9 from "../vendor/379944";
import _require8 from "../vendor/597779";
import _require7 from "../vendor/657887";
import _require6 from "../vendor/337761";
import _require5 from "../vendor/184991";
import _require4 from "../vendor/823518";
import _require3 from "../vendor/459111";
import _require2 from "../vendor/800738";
import _require from "../vendor/20533";
import { StatsigInvalidArgumentError, StatsigUninitializedError } from "../vendor/45259";
import { getUserCacheKey } from "../vendor/611140";
import { now } from "../vendor/404228";
var i = this && this.__assign || function() {
  return (i = Object.assign || function(e) {
    for (n = 1, i = $$arguments.length, void 0; n < i; n++) {
      var r;
      var n;
      var i;
      for (var s in r = $$arguments[n]) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }).apply(this, arguments);
};
var s = this && this.__createBinding || (Object.create ? function(e, r, n, i) {
  void 0 === i && (i = n);
  Object.defineProperty(e, i, {
    enumerable: !0,
    get: function() {
      return r[n];
    }
  });
} : function(e, r, n, i) {
  void 0 === i && (i = n);
  e[i] = r[n];
});
var o = this && this.__setModuleDefault || (Object.create ? function(e, r) {
  Object.defineProperty(e, "default", {
    enumerable: !0,
    value: r
  });
} : function(e, r) {
  e.$$default = r;
});
var a = this && this.__importStar || function(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (null != e) for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && s(r, e, n);
  o(r, e);
  return r;
};
var h = this && this.__awaiter || function(e, r, n, i) {
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
var d = this && this.__generator || function(e, r) {
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
var p = this && this.__importDefault || function(e) {
  return e && e.__esModule ? e : {
    default: e
  };
};
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var g = p(_require);
var m = p(_require2);
var y = p(_require3);
var b = p(_require4);
var O = p(_require5);
var x = p(_require6);
var w = p(_require7);
var k = p(_require8);
var _ = a(_require9);
var E = p(_require0);
var A = p(_require1);
var C = a(_require10);
var T = p(_require11);
var P = 64;
var R = 2048;
var M = function() {
  function e(r, n, i) {
    var s = this;
    if (this.appState = null, this.currentAppState = null, this.onCacheLoadedForReact = null, this.initCalled = !1, this.pendingInitPromise = null, this.optionalLoggingSetup = !1, this.prefetchedUsersByCacheKey = {}, this.logLayerParameterExposureForLayer = function(e, r, n) {
      void 0 === n && (n = !1);
      var i = "";
      var o = e._getUndelegatedSecondaryExposures();
      var a = e._getExplicitParameters().includes(r);
      a && (i = e._getAllocatedExperimentName(), o = e._getSecondaryExposures());
      s.logger.logLayerExposure(s.getCurrentUser(), e.getName(), e.getRuleID(), o, i, r, a, e._getEvaluationDetails(), n);
    }, i?.localMode !== !0 && ("string" != typeof r || !r.startsWith("client-"))) throw new StatsigInvalidArgumentError("Invalid key provided.  You must use a Client SDK Key from the Statsig console to initialize the sdk");
    if (this.startTime = now(), this.errorBoundary = new m.$$default(r, i?.disableDiagnosticsLogging), this.ready = !1, this.sdkKey = r, this.options = new k.$$default(i), this.consoleLogger = new T.$$default(this.options.getLogLevel()), A.$$default.disabled = this.options.getDisableLocalStorage(), this.initializeDiagnostics = new C.$$default("initialize"), this.identity = new O.$$default(this.normalizeUser(null != n ? n : null), this.options.getOverrideStableID(), e.reactNativeUUID), this.network = new w.$$default(this), this.store = new _.$$default(this, this.options.getInitializeValues()), this.logger = new x.$$default(this), this.errorBoundary.setStatsigMetadata(this.getStatsigMetadata()), null != this.options.getInitializeValues()) {
      var o = this.options.getInitCompletionCallback();
      this.ready = !0;
      this.initCalled = !0;
      setTimeout(function() {
        return s.delayedSetup();
      }, 20);
      this.handleOptionalLogging();
      o && o(now() - this.startTime, !0, null);
    }
  }
  e.prototype.getErrorBoundary = function() {
    return this.errorBoundary;
  };
  e.prototype.getNetwork = function() {
    return this.network;
  };
  e.prototype.getStore = function() {
    return this.store;
  };
  e.prototype.getLogger = function() {
    return this.logger;
  };
  e.prototype.getOptions = function() {
    return this.options;
  };
  e.prototype.getSDKKey = function() {
    var e = this;
    return this.errorBoundary.capture("getSDKKey", function() {
      var r;
      return null !== (r = e.sdkKey) && void 0 !== r ? r : "";
    }, function() {
      return "";
    });
  };
  e.prototype.getCurrentUser = function() {
    var e = this;
    return this.errorBoundary.capture("getCurrentUser", function() {
      return e.identity.getUser();
    }, function() {
      return null;
    });
  };
  e.prototype.getCurrentUserCacheKey = function() {
    var e = this;
    return this.errorBoundary.capture("getCurrentUserCacheKey", function() {
      return getUserCacheKey(e.getCurrentUser());
    }, function() {
      return "userID:''";
    });
  };
  e.prototype.getStatsigMetadata = function() {
    var e = this;
    return this.errorBoundary.capture("getStatsigMetadata", function() {
      return e.identity.getStatsigMetadata();
    }, function() {
      return {};
    });
  };
  e.prototype.getSDKType = function() {
    var e = this;
    return this.errorBoundary.capture("getSDKType", function() {
      return e.identity.getSDKType();
    }, function() {
      return "";
    });
  };
  e.prototype.getSDKVersion = function() {
    var e = this;
    return this.errorBoundary.capture("getSDKVersion", function() {
      return e.identity.getSDKVersion();
    }, function() {
      return "";
    });
  };
  e.prototype.getConsoleLogger = function() {
    return this.consoleLogger;
  };
  e.prototype.delayedSetup = function() {
    var e = this;
    this.errorBoundary.swallow("delayedSetup", function() {
      null != e.options.getInitializeValues() && e.fireAndForgetPrefechUsers();
      e.identity.saveStableID();
      e.logger.sendSavedRequests().catch(function(r) {
        return e.errorBoundary.logError("sendSavedRequests:delayedSetup", r);
      });
    });
  };
  e.prototype.setInitializeValues = function(e) {
    var r = this;
    this.errorBoundary.capture("setInitializeValues", function() {
      r.store.bootstrap(e);
      var n = null;
      r.ready || (r.ready = !0, r.initCalled = !0, n = r.options.getInitCompletionCallback());
      r.handleOptionalLogging();
      r.logger.sendSavedRequests().catch(function(e) {
        return r.errorBoundary.logError("sendSavedRequests:setInitializeValues", e);
      });
      n && n(now() - r.startTime, !0, null);
    }, function() {
      r.ready = !0;
      r.initCalled = !0;
      var e = r.options.getInitCompletionCallback();
      e && e(now() - r.startTime, !1, "Caught an exception during setInitializeValues");
    });
  };
  e.prototype.initializeAsync = function() {
    return h(this, void 0, void 0, function() {
      var e = this;
      return d(this, function(r) {
        return [2, this.errorBoundary.capture("initializeAsync", function() {
          return h(e, void 0, void 0, function() {
            var e;
            var r;
            var n = this;
            return d(this, function(i) {
              switch (i.label) {
                case 0:
                  if (null != this.pendingInitPromise) return [2, this.pendingInitPromise];
                  if (this.ready) return [2, Promise.resolve()];
                  if (this.initializeDiagnostics.mark(C.DiagnosticsKey.OVERALL, C.DiagnosticsEvent.START), this.initCalled = !0, !E.$$default.asyncStorage) return [3, 3];
                  return [4, this.identity.initAsync()];
                case 1:
                  i.sent();
                  return [4, this.store.loadFromAsyncStorage()];
                case 2:
                  i.sent();
                  i.label = 3;
                case 3:
                  if (null === (r = this.onCacheLoadedForReact) || void 0 === r || r.call(this), this.appState && this.appState.addEventListener && "function" == typeof this.appState.addEventListener && (this.currentAppState = this.appState.currentState, this.appState.addEventListener("change", this.handleAppStateChange.bind(this))), this.options.getLocalModeEnabled()) return [2, Promise.resolve()];
                  e = this.identity.getUser();
                  this.pendingInitPromise = this.fetchAndSaveValues(e, this.options.getPrefetchUsers(), this.options.getInitTimeoutMs(), this.initializeDiagnostics).then(function() {
                    return {
                      success: !0,
                      message: null
                    };
                  }).catch(function(e) {
                    n.errorBoundary.logError("initializeAsync:fetchAndSaveValues", e);
                    return {
                      success: !1,
                      message: e.message
                    };
                  }).then(function(e) {
                    var r = e.success;
                    var i = e.message;
                    var s = n.options.getInitCompletionCallback();
                    s && s(now() - n.startTime, r, i);
                  }).finally(function() {
                    return h(n, void 0, void 0, function() {
                      return d(this, function(r) {
                        this.pendingInitPromise = null;
                        this.ready = !0;
                        this.delayedSetup();
                        this.initializeDiagnostics.mark(C.DiagnosticsKey.OVERALL, C.DiagnosticsEvent.END);
                        this.options.getDisableDiagnosticsLogging() || this.logger.logDiagnostics(e, this.initializeDiagnostics);
                        return [2];
                      });
                    });
                  });
                  this.handleOptionalLogging();
                  return [2, this.pendingInitPromise];
              }
            });
          });
        }, function() {
          e.ready = !0;
          e.initCalled = !0;
          return Promise.resolve();
        })];
      });
    });
  };
  e.prototype.prefetchUsers = function(e) {
    return h(this, void 0, void 0, function() {
      var r = this;
      return d(this, function(n) {
        return [2, this.errorBoundary.capture("prefetchUsers", function() {
          if (e && 0 != e.length) return r.fetchAndSaveValues(null, e, 0);
        }, function() {
          return Promise.resolve();
        })];
      });
    });
  };
  e.prototype.getEvaluationDetails = function() {
    var e = this;
    return this.errorBoundary.capture("getEvaluationDetails", function() {
      return e.store.getGlobalEvaluationDetails();
    }, function() {
      return {
        time: Date.now(),
        reason: _.EvaluationReason.Error
      };
    });
  };
  e.prototype.checkGate = function(e, r) {
    var n = this;
    void 0 === r && (r = !1);
    return this.errorBoundary.capture("checkGate", function() {
      var i = n.checkGateImpl(e, r);
      n.logGateExposureImpl(e, i);
      var s = n.options.getGateEvaluationCallback();
      s && s(e, i.gate.value, {
        withExposureLoggingDisabled: !1
      });
      return !0 === i.gate.value;
    }, function() {
      return !1;
    }, {
      diagnosticsKey: C.DiagnosticsKey.CHECK_GATE
    });
  };
  e.prototype.checkGateWithExposureLoggingDisabled = function(e, r) {
    var n = this;
    void 0 === r && (r = !1);
    return this.errorBoundary.capture("checkGateWithExposureLoggingDisabled", function() {
      var i = n.checkGateImpl(e, r);
      var s = n.options.getGateEvaluationCallback();
      s && s(e, i.gate.value, {
        withExposureLoggingDisabled: !0
      });
      return !0 === i.gate.value;
    }, function() {
      return !1;
    });
  };
  e.prototype.logGateExposure = function(e) {
    var r = this;
    this.errorBoundary.swallow("logGateExposure", function() {
      r.logGateExposureImpl(e);
    });
  };
  e.prototype.getConfig = function(e, r) {
    var n = this;
    void 0 === r && (r = !1);
    return this.errorBoundary.capture("getConfig", function() {
      var i = n.getConfigImpl(e, r);
      n.logConfigExposureImpl(e, i);
      return i;
    }, function() {
      return n.getEmptyConfig(e);
    }, {
      diagnosticsKey: C.DiagnosticsKey.GET_CONFIG
    });
  };
  e.prototype.getConfigWithExposureLoggingDisabled = function(e, r) {
    var n = this;
    void 0 === r && (r = !1);
    return this.errorBoundary.capture("getConfig", function() {
      return n.getConfigImpl(e, r);
    }, function() {
      return n.getEmptyConfig(e);
    });
  };
  e.prototype.logConfigExposure = function(e) {
    var r = this;
    this.errorBoundary.swallow("logConfigExposure", function() {
      r.logConfigExposureImpl(e);
    });
  };
  e.prototype.getExperiment = function(e, r, n) {
    var i = this;
    void 0 === r && (r = !1);
    void 0 === n && (n = !1);
    return this.errorBoundary.capture("getExperiment", function() {
      var s = i.getExperimentImpl(e, r, n);
      i.logExperimentExposureImpl(e, r, s);
      return s;
    }, function() {
      return i.getEmptyConfig(e);
    }, {
      diagnosticsKey: C.DiagnosticsKey.GET_EXPERIMENT
    });
  };
  e.prototype.getExperimentWithExposureLoggingDisabled = function(e, r, n) {
    var i = this;
    void 0 === r && (r = !1);
    void 0 === n && (n = !1);
    return this.errorBoundary.capture("getExperimentWithExposureLoggingDisabled", function() {
      return i.getExperimentImpl(e, r, n);
    }, function() {
      return i.getEmptyConfig(e);
    });
  };
  e.prototype.logExperimentExposure = function(e, r) {
    var n = this;
    this.errorBoundary.swallow("logExperimentExposure", function() {
      n.logExperimentExposureImpl(e, r);
    });
  };
  e.prototype.getLayer = function(e, r) {
    var n = this;
    void 0 === r && (r = !1);
    return this.errorBoundary.capture("getLayer", function() {
      return n.getLayerImpl(n.logLayerParameterExposureForLayer, e, r);
    }, function() {
      return y.$$default._create(e, {}, "", n.getEvalutionDetailsForError());
    }, {
      diagnosticsKey: C.DiagnosticsKey.GET_LAYER
    });
  };
  e.prototype.getLayerWithExposureLoggingDisabled = function(e, r) {
    var n = this;
    void 0 === r && (r = !1);
    return this.errorBoundary.capture("getLayerWithExposureLoggingDisabled", function() {
      return n.getLayerImpl(null, e, r);
    }, function() {
      return y.$$default._create(e, {}, "", n.getEvalutionDetailsForError());
    });
  };
  e.prototype.logLayerParameterExposure = function(e, r, n) {
    var i = this;
    void 0 === n && (n = !1);
    this.errorBoundary.swallow("logLayerParameterExposure", function() {
      var s = i.getLayerImpl(null, e, n);
      i.logLayerParameterExposureForLayer(s, r, !0);
    });
  };
  e.prototype.logEvent = function(e, r, n) {
    var i = this;
    void 0 === r && (r = null);
    void 0 === n && (n = null);
    this.errorBoundary.swallow("logEvent", function() {
      if (!i.logger || !i.sdkKey) throw new StatsigUninitializedError("Must initialize() before logging events.");
      if ("string" != typeof e || 0 === e.length) {
        i.consoleLogger.error("Event not logged. No valid eventName passed.");
        return;
      }
      i.shouldTrimParam(e, P) && (i.consoleLogger.info("eventName is too long, trimming to " + P + " characters."), e = e.substring(0, P));
      "string" == typeof r && i.shouldTrimParam(r, P) && (i.consoleLogger.info("value is too long, trimming to " + P + "."), r = r.substring(0, P));
      i.shouldTrimParam(n, R) && (i.consoleLogger.info("metadata is too big. Dropping the metadata."), n = {
        error: "not logged due to size too large"
      });
      var s = new b.$$default(e);
      s.setValue(r);
      s.setMetadata(n);
      s.setUser(i.getCurrentUser());
      i.logger.log(s);
    });
  };
  e.prototype.updateUserWithValues = function(e, r) {
    var n;
    var i = this;
    return this.errorBoundary.capture("updateUserWithValues", function() {
      var s = Date.now();
      if (!i.initializeCalled()) throw new StatsigUninitializedError("Call initialize() first.");
      n = function(e, r) {
        var n = i.options.getUpdateUserCompletionCallback();
        n?.(Date.now() - s, e, r);
      };
      i.identity.updateUser(i.normalizeUser(e));
      i.store.bootstrap(r);
      n(!0, null);
      return !0;
    }, function() {
      n?.(!1, "Failed to update user. An unexpected error occured.");
      return !1;
    });
  };
  e.prototype.updateUser = function(e) {
    return h(this, void 0, void 0, function() {
      var r;
      var n = this;
      return d(this, function(i) {
        return [2, this.errorBoundary.capture("updateUser", function() {
          return h(n, void 0, void 0, function() {
            var n;
            var i;
            var s;
            var o;
            var a;
            var h;
            var p = this;
            return d(this, function(d) {
              switch (d.label) {
                case 0:
                  if (n = Date.now(), !this.initializeCalled()) throw new StatsigUninitializedError("Call initialize() first.");
                  if (r = function(e, r) {
                    var i = p.options.getUpdateUserCompletionCallback();
                    i?.(Date.now() - n, e, r);
                  }, this.identity.updateUser(this.normalizeUser(e)), i = this.getCurrentUserCacheKey(), s = !!this.prefetchedUsersByCacheKey[i], o = this.store.updateUser(s), null === (h = this.errorBoundary.getDiagnostics()) || void 0 === h || h.reset(), this.logger.resetDedupeKeys(), null != o && (s || this.isCacheValidForFetchMode(o))) {
                    r(!0, null);
                    return [2, Promise.resolve(!0)];
                  }
                  if (!(null != this.pendingInitPromise)) return [3, 2];
                  return [4, this.pendingInitPromise];
                case 1:
                  d.sent();
                  d.label = 2;
                case 2:
                  if (this.options.getLocalModeEnabled()) {
                    r(!0, null);
                    return [2, Promise.resolve(!0)];
                  }
                  a = this.identity.getUser();
                  this.pendingInitPromise = this.fetchAndSaveValues(a).finally(function() {
                    p.pendingInitPromise = null;
                  });
                  return [2, this.pendingInitPromise.then(function() {
                    r(!0, null);
                    return Promise.resolve(!0);
                  }).catch(function(e) {
                    r(!1, "Failed to update user: " + e);
                    return Promise.resolve(!1);
                  })];
              }
            });
          });
        }, function() {
          r?.(!1, "Failed to update user. An unexpected error occured.");
          return Promise.resolve(!1);
        })];
      });
    });
  };
  e.prototype.shutdown = function() {
    var e = this;
    this.errorBoundary.swallow("shutdown", function() {
      e.logger.shutdown();
      e.appState && e.appState.removeEventListener && "function" == typeof e.appState.removeEventListener && e.appState.removeEventListener("change", e.handleAppStateChange.bind(e));
      A.$$default.cleanup();
    });
  };
  e.prototype.overrideGate = function(e, r) {
    var n = this;
    this.errorBoundary.swallow("overrideGate", function() {
      n.ensureStoreLoaded();
      n.store.overrideGate(e, r);
    });
  };
  e.prototype.overrideConfig = function(e, r) {
    var n = this;
    this.errorBoundary.swallow("overrideConfig", function() {
      n.ensureStoreLoaded();
      n.store.overrideConfig(e, r);
    });
  };
  e.prototype.overrideLayer = function(e, r) {
    var n = this;
    this.errorBoundary.swallow("overrideLayer", function() {
      n.ensureStoreLoaded();
      n.store.overrideLayer(e, r);
    });
  };
  e.prototype.removeGateOverride = function(e) {
    var r = this;
    this.errorBoundary.swallow("removeGateOverride", function() {
      r.ensureStoreLoaded();
      r.store.removeGateOverride(e);
    });
  };
  e.prototype.removeConfigOverride = function(e) {
    var r = this;
    this.errorBoundary.swallow("removeConfigOverride", function() {
      r.ensureStoreLoaded();
      r.store.removeConfigOverride(e);
    });
  };
  e.prototype.removeLayerOverride = function(e) {
    var r = this;
    this.errorBoundary.swallow("removeLayerOverride", function() {
      r.ensureStoreLoaded();
      r.store.removeLayerOverride(e);
    });
  };
  e.prototype.removeOverride = function(e) {
    var r = this;
    this.errorBoundary.swallow("removeOverride", function() {
      r.ensureStoreLoaded();
      r.store.removeGateOverride(e);
    });
  };
  e.prototype.getOverrides = function() {
    var e = this;
    return this.errorBoundary.capture("getOverrides", function() {
      e.ensureStoreLoaded();
      return e.store.getAllOverrides().gates;
    }, function() {
      return {};
    });
  };
  e.prototype.getAllOverrides = function() {
    var e = this;
    return this.errorBoundary.capture("getAllOverrides", function() {
      e.ensureStoreLoaded();
      return e.store.getAllOverrides();
    }, function() {
      return {
        gates: {},
        configs: {},
        layers: {}
      };
    });
  };
  e.prototype.getStableID = function() {
    var e = this;
    return this.errorBoundary.capture("getStableID", function() {
      return e.identity.getStatsigMetadata().stableID;
    }, function() {
      return "";
    });
  };
  e.prototype.initializeCalled = function() {
    return this.initCalled;
  };
  e.prototype.setSDKPackageInfo = function(e) {
    null != e && (this.identity.setSDKPackageInfo(e), this.errorBoundary.setStatsigMetadata(this.getStatsigMetadata()));
  };
  e.setAsyncStorage = function(e) {
    null != e && (E.$$default.asyncStorage = e);
  };
  e.prototype.setOnCacheLoadedReactCallback = function(e) {
    this.onCacheLoadedForReact = null != e ? e : null;
  };
  e.setReactNativeUUID = function(r) {
    null != r && (e.reactNativeUUID = r);
  };
  e.prototype.setAppState = function(e) {
    null != e && (this.appState = e);
  };
  e.prototype.setNativeModules = function(e) {
    null != e && this.identity.setNativeModules(e);
  };
  e.prototype.setPlatform = function(e) {
    null != e && this.identity.setPlatform(e);
  };
  e.prototype.setRNDeviceInfo = function(e) {
    null != e && this.identity.setRNDeviceInfo(e);
  };
  e.prototype.setExpoConstants = function(e) {
    null != e && this.identity.setExpoConstants(e);
  };
  e.prototype.setExpoDevice = function(e) {
    null != e && this.identity.setExpoDevice(e);
  };
  e.prototype.isCacheValidForFetchMode = function(e) {
    return "cache-or-network" === this.options.getFetchMode() && e > this.startTime;
  };
  e.prototype.handleOptionalLogging = function() {
    var e = this;
    var r = this.options.getDisableErrorLogging();
    var n = this.options.getDisableAutoMetricsLogging();
    if ((!r || !n) && !this.optionalLoggingSetup && "undefined" != typeof window && window && window.addEventListener) {
      var i = this.identity.getUser();
      if (r || window.addEventListener("error", function(r) {
        var n;
        var s = r.error;
        if (null != s && "object" == typeof s) try {
          s = JSON.stringify(s);
        } catch (e) {
          s = "Failed to stringify Error";
        }
        e.logger.logAppError(i, null !== (n = r.message) && void 0 !== n ? n : "", {
          filename: r.filename,
          lineno: r.lineno,
          colno: r.colno,
          error_obj: s
        });
      }), !n) {
        if ("undefined" == typeof document || !document || "undefined" == typeof setTimeout || !setTimeout) return;
        var s = function() {
          setTimeout(function() {
            e.logger.logAppMetrics(i);
          }, 1e3);
        };
        "complete" === document.readyState ? s() : window.addEventListener("load", function() {
          return s();
        });
      }
      this.optionalLoggingSetup = !0;
    }
  };
  e.prototype.handleAppStateChange = function(e) {
    var r;
    var n = this;
    "active" === this.currentAppState && e.match(/inactive|background/) ? this.logger.flush(!0) : this.currentAppState?.match(/inactive|background/) && "active" === e && this.logger.sendSavedRequests().catch(function(e) {
      return n.errorBoundary.logError("sendSavedRequests:handleAppStateChange", e);
    });
    this.currentAppState = e;
  };
  e.prototype.shouldTrimParam = function(e, r) {
    return null != e && ("string" == typeof e ? e.length > r : "object" == typeof e ? JSON.stringify(e).length > r : "number" == typeof e && e.toString().length > r);
  };
  e.prototype.normalizePrefetchUsers = function(e) {
    var r = this;
    return e?.map(function(e) {
      return r.normalizeUser(e);
    });
  };
  e.prototype.normalizeUser = function(e) {
    var r = {};
    try {
      r = JSON.parse(JSON.stringify(e));
    } catch (e) {
      throw new StatsigInvalidArgumentError("User object must be convertable to JSON string.");
    }
    r = this.trimUserObjIfNeeded(r);
    null != this.options.getEnvironment() && (r.statsigEnvironment = this.options.getEnvironment());
    return r;
  };
  e.prototype.trimUserObjIfNeeded = function(e) {
    var r;
    var n;
    return null == e ? {} : (this.shouldTrimParam(null !== (r = e.userID) && void 0 !== r ? r : null, P) && (this.consoleLogger.info("User ID is too large, trimming to " + P + "characters"), e.userID = e.userID?.toString().substring(0, P)), this.shouldTrimParam(e, R) && (e.custom = {}, this.shouldTrimParam(e, R) ? (this.consoleLogger.info("User object is too large, only keeping the user ID."), e = {
      userID: e.userID
    }) : this.consoleLogger.info("User object is too large, dropping the custom property.")), e);
  };
  e.prototype.ensureStoreLoaded = function() {
    if (!this.store.isLoaded()) throw new StatsigUninitializedError("Call and wait for initialize() to finish first.");
  };
  e.prototype.getEvalutionDetailsForError = function() {
    return {
      time: Date.now(),
      reason: _.EvaluationReason.Error
    };
  };
  e.prototype.fetchAndSaveValues = function(e, r, n, s) {
    void 0 === r && (r = []);
    void 0 === n && (n = this.options.getInitTimeoutMs());
    return h(this, void 0, void 0, function() {
      var o;
      var a;
      var p = this;
      return d(this, function(g) {
        r.length > 5 && this.consoleLogger.info("Cannot prefetch more than 5 users.");
        o = this.normalizePrefetchUsers(r).slice(0, 5).reduce(function(e, r) {
          e[getUserCacheKey(r)] = r;
          return e;
        }, {});
        a = null;
        0 === r.length && (a = this.store.getLastUpdateTime(e));
        return [2, this.network.fetchValues(e, a, n, 0 === r.length ? s : void 0, r.length > 0 ? o : void 0).eventually(function(r) {
          r?.has_updates && p.store.saveWithoutUpdatingClientState(e, r).catch(function(e) {
            return p.errorBoundary.logError("fetchAndSaveValues:eventually", e);
          });
        }).then(function(r) {
          return h(p, void 0, void 0, function() {
            var n = this;
            return d(this, function(a) {
              return [2, this.errorBoundary.swallow("fetchAndSaveValues", function() {
                return h(n, void 0, void 0, function() {
                  return d(this, function(n) {
                    switch (n.label) {
                      case 0:
                        if (s?.mark(C.DiagnosticsKey.INITIALIZE, C.DiagnosticsEvent.START, "process"), !r?.has_updates) return [3, 2];
                        return [4, this.store.save(e, r)];
                      case 1:
                        n.sent();
                        return [3, 3];
                      case 2:
                        r?.is_no_content && this.store.setEvaluationReason(_.EvaluationReason.NetworkNotModified);
                        n.label = 3;
                      case 3:
                        this.prefetchedUsersByCacheKey = i(i({}, this.prefetchedUsersByCacheKey), o);
                        s?.mark(C.DiagnosticsKey.INITIALIZE, C.DiagnosticsEvent.END, "process");
                        return [2];
                    }
                  });
                });
              })];
            });
          });
        })];
      });
    });
  };
  e.prototype.checkGateImpl = function(e, r) {
    if (this.ensureStoreLoaded(), "string" != typeof e || 0 === e.length) throw new StatsigInvalidArgumentError("Must pass a valid string as the gateName.");
    return this.store.checkGate(e, r);
  };
  e.prototype.logGateExposureImpl = function(e, r) {
    var n = !r;
    var i = null != r ? r : this.checkGateImpl(e, !1);
    var s = i.gate;
    this.logger.logGateExposure(this.getCurrentUser(), e, s.value, s.rule_id, s.secondary_exposures, i.evaluationDetails, n);
  };
  e.prototype.getConfigImpl = function(e, r) {
    if (this.ensureStoreLoaded(), "string" != typeof e || 0 === e.length) throw new StatsigInvalidArgumentError("Must pass a valid string as the configName.");
    return this.store.getConfig(e, r);
  };
  e.prototype.logConfigExposureImpl = function(e, r) {
    var n = !r;
    var i = null != r ? r : this.getConfigImpl(e, !1);
    this.logger.logConfigExposure(this.getCurrentUser(), e, i.getRuleID(), i._getSecondaryExposures(), i.getEvaluationDetails(), n);
  };
  e.prototype.getExperimentImpl = function(e, r, n) {
    if (this.ensureStoreLoaded(), "string" != typeof e || 0 === e.length) throw new StatsigInvalidArgumentError("Must pass a valid string as the experimentName.");
    return this.store.getExperiment(e, r, n);
  };
  e.prototype.logExperimentExposureImpl = function(e, r, n) {
    var i = !n;
    var s = null != n ? n : this.getExperimentImpl(e, r, !1);
    this.logger.logConfigExposure(this.getCurrentUser(), e, s.getRuleID(), s._getSecondaryExposures(), s.getEvaluationDetails(), i);
  };
  e.prototype.getLayerImpl = function(e, r, n) {
    if (this.ensureStoreLoaded(), "string" != typeof r || 0 === r.length) throw new StatsigInvalidArgumentError("Must pass a valid string as the layerName.");
    return this.store.getLayer(e, r, n);
  };
  e.prototype.getEmptyConfig = function(e) {
    return new g.$$default(e, {}, "", this.getEvalutionDetailsForError());
  };
  e.prototype.fireAndForgetPrefechUsers = function() {
    this.prefetchUsers(this.options.getPrefetchUsers()).catch(function() { });
  };
  return e;
}();
exports.$$default = M; 
