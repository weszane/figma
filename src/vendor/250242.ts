import { StatsigClient, DynamicConfig, EvaluationReason, Layer, StatsigAsyncStorage } from "statsig-js";
import { staticImplements } from "../vendor/265356";
import { version } from "../vendor/494629";
var i = this && this.__decorate || function (e, r, n, i) {
  var s;
  var o = $$arguments.length;
  var a = o < 3 ? r : i;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, r, n, i);else for (var h = e.length - 1; h >= 0; h--) (s = e[h]) && (a = (o < 3 ? s(a) : o > 3 ? s(r, n, a) : s(r, n)) || a);
  o > 3 && a && Object.defineProperty(r, n, a);
  return a;
};
var s = this && this.__awaiter || function (e, r, n, i) {
  function s(e) {
    return e instanceof n ? e : new n(function (r) {
      r(e);
    });
  }
  return new (n || (n = Promise))(function (n, o) {
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
var o = this && this.__generator || function (e, r) {
  var n;
  var i;
  var s;
  var o;
  var a = {
    label: 0,
    sent: function () {
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
  "function" == typeof Symbol && (o[Symbol.iterator] = function () {
    return this;
  });
  return o;
  function h(e) {
    return function (r) {
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
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var p = function () {
  var e;
  function r(r, n, i) {
    if (null != e.instance && e.canThrow()) throw Error("Cannot create another instance of the static Statsig class");
    e.instance = new StatsigClient(r, n, i);
  }
  e = r;
  r.initialize = function (r, n, i) {
    return s(this, void 0, void 0, function () {
      return o(this, function (s) {
        try {
          e.instance || (e.instance = new StatsigClient(r, n, i), e.instance.setSDKPackageInfo(this.sdkPackageInfo), e.instance.setAppState(this.appState), e.instance.setNativeModules(this.nativeModules), e.instance.setPlatform(this.platform), e.instance.setRNDeviceInfo(this.deviceInfo), e.instance.setExpoConstants(this.expoConstants), e.instance.setExpoDevice(this.expoDevice), e.instance.setOnCacheLoadedReactCallback(this.onCacheLoadedCallback));
          return [2, e.instance.initializeAsync()];
        } catch (r) {
          if (e.canThrow()) throw r;
        }
        return [2, Promise.resolve()];
      });
    });
  };
  r.bootstrap = function (r, n, i, s) {
    if (null != e.instance) {
      e.setInitializeValues(n);
      return;
    }
    null == s && (s = {});
    s.initializeValues = n;
    e.instance = new StatsigClient(r, i, s);
    e.instance.setSDKPackageInfo({
      sdkType: "react-client",
      sdkVersion: version
    });
  };
  r.prefetchUsers = function (r) {
    return s(this, void 0, void 0, function () {
      return o(this, function (n) {
        return this.isInitialized() ? [2, e.instance.prefetchUsers(r)] : [2];
      });
    });
  };
  r.setInitializeValues = function (r) {
    this.isInitialized() && e.instance.setInitializeValues(r);
  };
  r.getCurrentUser = function () {
    return this.isInitialized() ? e.instance.getCurrentUser() : null;
  };
  r.checkGate = function (r, n) {
    void 0 === n && (n = !1);
    return !!this.isInitialized() && e.instance.checkGate(r, n);
  };
  r.checkGateWithExposureLoggingDisabled = function (r, n) {
    return !!this.isInitialized() && e.instance.checkGateWithExposureLoggingDisabled(r, n?.ignoreOverrides);
  };
  r.manuallyLogGateExposure = function (r) {
    this.isInitialized() && e.instance.logGateExposure(r);
  };
  r.getConfig = function (r, n) {
    return (void 0 === n && (n = !1), this.isInitialized()) ? e.instance.getConfig(r, n) : new DynamicConfig(r, {}, "", {
      time: Date.now(),
      reason: EvaluationReason.Uninitialized
    });
  };
  r.getConfigWithExposureLoggingDisabled = function (r, n) {
    return this.isInitialized() ? e.instance.getConfigWithExposureLoggingDisabled(r, n?.ignoreOverrides) : new DynamicConfig(r, {}, "", {
      time: Date.now(),
      reason: EvaluationReason.Uninitialized
    });
  };
  r.manuallyLogConfigExposure = function (r) {
    this.isInitialized() && e.instance.logConfigExposure(r);
  };
  r.getExperiment = function (r, n, i) {
    return (void 0 === n && (n = !1), void 0 === i && (i = !1), this.isInitialized()) ? e.instance.getExperiment(r, n, i) : new DynamicConfig(r, {}, "", {
      time: Date.now(),
      reason: EvaluationReason.Uninitialized
    });
  };
  r.getExperimentWithExposureLoggingDisabled = function (r, n) {
    return this.isInitialized() ? e.instance.getExperimentWithExposureLoggingDisabled(r, n?.keepDeviceValue, n?.ignoreOverrides) : new DynamicConfig(r, {}, "", {
      time: Date.now(),
      reason: EvaluationReason.Uninitialized
    });
  };
  r.manuallyLogExperimentExposure = function (r, n) {
    this.isInitialized() && e.instance.logExperimentExposure(r, n);
  };
  r.getLayer = function (r, n) {
    return (void 0 === n && (n = !1), this.isInitialized()) ? e.instance.getLayer(r, n) : Layer._create(r, {}, "", {
      time: Date.now(),
      reason: EvaluationReason.Uninitialized
    });
  };
  r.getLayerWithExposureLoggingDisabled = function (r, n) {
    return this.isInitialized() ? e.instance.getLayerWithExposureLoggingDisabled(r, n?.keepDeviceValue) : Layer._create(r, {}, "", {
      time: Date.now(),
      reason: EvaluationReason.Uninitialized
    });
  };
  r.manuallyLogLayerParameterExposure = function (r, n, i) {
    void 0 === i && (i = !1);
    this.isInitialized() && e.instance.logLayerParameterExposure(r, n, i);
  };
  r.logEvent = function (r, n, i) {
    void 0 === n && (n = null);
    void 0 === i && (i = null);
    this.isInitialized() && e.instance.logEvent(r, n, i);
  };
  r.updateUser = function (r) {
    return this.isInitialized() ? e.instance.updateUser(r) : Promise.resolve(!1);
  };
  r.updateUserWithValues = function (r, n) {
    return !!this.isInitialized() && e.instance.updateUserWithValues(r, n);
  };
  r.shutdown = function () {
    this.isInitialized() && e.instance.shutdown();
  };
  r.overrideGate = function (r, n) {
    var i;
    this.isInitialized() && e.getAllOverrides().gates?.[r] !== n && (e.instance.overrideGate(r, n), e.updateContext());
  };
  r.overrideConfig = function (r, n) {
    var i;
    this.isInitialized() && e.getAllOverrides().configs?.[r] !== n && (e.instance.overrideConfig(r, n), e.updateContext());
  };
  r.overrideLayer = function (r, n) {
    var i;
    this.isInitialized() && e.getAllOverrides().layers?.[r] !== n && (e.instance.overrideLayer(r, n), e.updateContext());
  };
  r.removeGateOverride = function (r) {
    this.isInitialized() && (e.instance.removeGateOverride(r), e.updateContext());
  };
  r.removeConfigOverride = function (r) {
    this.isInitialized() && (e.instance.removeConfigOverride(r), e.updateContext());
  };
  r.removeLayerOverride = function (r) {
    this.isInitialized() && (e.instance.removeLayerOverride(r), e.updateContext());
  };
  r.getAllOverrides = function () {
    return this.isInitialized() ? e.instance.getAllOverrides() : {
      gates: {},
      configs: {},
      layers: {}
    };
  };
  r.getEvaluationDetails = function () {
    var r;
    var n;
    return null !== (n = e.instance?.getEvaluationDetails()) && void 0 !== n ? n : {
      reason: EvaluationReason.Uninitialized,
      time: 0
    };
  };
  r.getStableID = function () {
    return this.isInitialized() ? e.instance.getStableID() : "";
  };
  r.initializeCalled = function () {
    return null != e.instance && e.instance.initializeCalled();
  };
  r.setSDKPackageInfo = function (r) {
    e.sdkPackageInfo = r;
  };
  r.setReactNativeUUID = function (e) {
    null != e && StatsigClient.setReactNativeUUID(e);
  };
  r.setAsyncStorage = function (e) {
    null != e && (StatsigAsyncStorage.asyncStorage = e);
  };
  r.setAppState = function (r) {
    null != r && (e.appState = r);
  };
  r.setNativeModules = function (r) {
    null != r && (e.nativeModules = r);
  };
  r.setPlatform = function (r) {
    null != r && (e.platform = r);
  };
  r.setRNDeviceInfo = function (r) {
    null != r && (e.deviceInfo = r);
  };
  r.setExpoConstants = function (r) {
    null != r && (e.expoConstants = r);
  };
  r.setExpoDevice = function (r) {
    null != r && (e.expoDevice = r);
  };
  r.setReactContextUpdater = function (r) {
    e.reactContextUpdater = r;
  };
  r.setOnCacheLoadedCallback = function (r) {
    e.onCacheLoadedCallback = r;
  };
  r.isInitialized = function () {
    if (e.instance) return !0;
    if (e.canThrow()) throw Error("Call and wait for initialize() to finish first.");
    return !1;
  };
  r.updateContext = function () {
    null != e.reactContextUpdater && e.reactContextUpdater();
  };
  r.canThrow = function () {
    var e;
    return "undefined" == typeof process || void 0 === process.env || process?.env?.REACT_APP_STATSIG_SDK_MODE !== "silent";
  };
  r.reactContextUpdater = null;
  return r = e = i([staticImplements()], r);
}();
exports.$$default = p;
