import _require5 from "../vendor/47992";
import _require4 from "../vendor/524491";
import _require3 from "../vendor/794715";
import _require2 from "../vendor/581997";
import _require from "../vendor/414714";
import { StatsigUninitializedError } from "../vendor/45259";
import { EvaluationReason } from "../vendor/379944";
import y from "../vendor/20533";
import b from "../vendor/459111";
import O from "../vendor/414714";
import { EvaluationReason as _$$EvaluationReason } from "../vendor/379944";
import w from "../vendor/253566";
var i = this && this.__awaiter || function (e, r, n, i) {
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
var s = this && this.__generator || function (e, r) {
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
var o = this && this.__importDefault || function (e) {
  return e && e.__esModule ? e : {
    default: e
  };
};
exports.StatsigAsyncStorage = exports.EvaluationReason = exports.StatsigClient = exports.Layer = exports.DynamicConfig = void 0;
var h = o(_require);
var d = o(_require2);
var g = o(_require3);
var m = o(_require4);
var v = o(_require5);
Object.defineProperty(exports, "DynamicConfig", {
  enumerable: !0,
  get: function () {
    return o(y).$$default;
  }
});
Object.defineProperty(exports, "Layer", {
  enumerable: !0,
  get: function () {
    return o(b).$$default;
  }
});
Object.defineProperty(exports, "StatsigClient", {
  enumerable: !0,
  get: function () {
    return o(O).$$default;
  }
});
Object.defineProperty(exports, "EvaluationReason", {
  enumerable: !0,
  get: function () {
    return _$$EvaluationReason;
  }
});
g.$$default();
m.$$default();
v.$$default();
var k = function () {
  function e() {}
  Object.defineProperty(e, "encodeIntializeCall", {
    get: function () {
      return d.$$default.encodeInitializeCall;
    },
    set: function (e) {
      d.$$default.encodeInitializeCall = e;
    },
    enumerable: !1,
    configurable: !0
  });
  e.initialize = function (r, n, o) {
    var a;
    return i(this, void 0, void 0, function () {
      var i;
      return s(this, function (s) {
        i = null !== (a = e.instance) && void 0 !== a ? a : new h.$$default(r, n, o);
        e.instance || (e.instance = i);
        return [2, i.initializeAsync()];
      });
    });
  };
  e.prefetchUsers = function (r) {
    return i(this, void 0, void 0, function () {
      return s(this, function (n) {
        switch (n.label) {
          case 0:
            return [4, e.getClientX().prefetchUsers(r)];
          case 1:
            return [2, n.sent()];
        }
      });
    });
  };
  e.setInitializeValues = function (r) {
    e.getClientX().setInitializeValues(r);
  };
  e.checkGate = function (r, n) {
    void 0 === n && (n = !1);
    return e.getClientX().checkGate(r, n);
  };
  e.checkGateWithExposureLoggingDisabled = function (r, n) {
    void 0 === n && (n = !1);
    return e.getClientX().checkGateWithExposureLoggingDisabled(r, n);
  };
  e.manuallyLogGateExposure = function (r) {
    e.getClientX().logGateExposure(r);
  };
  e.getConfig = function (r, n) {
    void 0 === n && (n = !1);
    return e.getClientX().getConfig(r, n);
  };
  e.getConfigWithExposureLoggingDisabled = function (r, n) {
    void 0 === n && (n = !1);
    return e.getClientX().getConfigWithExposureLoggingDisabled(r, n);
  };
  e.manuallyLogConfigExposure = function (r) {
    e.getClientX().logConfigExposure(r);
  };
  e.getExperiment = function (r, n, i) {
    void 0 === n && (n = !1);
    void 0 === i && (i = !1);
    return e.getClientX().getExperiment(r, n, i);
  };
  e.getExperimentWithExposureLoggingDisabled = function (r, n, i) {
    void 0 === n && (n = !1);
    void 0 === i && (i = !1);
    return e.getClientX().getExperimentWithExposureLoggingDisabled(r, n, i);
  };
  e.manuallyLogExperimentExposure = function (r, n) {
    void 0 === n && (n = !1);
    e.getClientX().logExperimentExposure(r, n);
  };
  e.getLayer = function (r, n) {
    void 0 === n && (n = !1);
    return e.getClientX().getLayer(r, n);
  };
  e.getLayerWithExposureLoggingDisabled = function (r, n) {
    void 0 === n && (n = !1);
    return e.getClientX().getLayerWithExposureLoggingDisabled(r, n);
  };
  e.manuallyLogLayerParameterExposure = function (r, n, i) {
    void 0 === i && (i = !1);
    e.getClientX().logLayerParameterExposure(r, n, i);
  };
  e.logEvent = function (r, n, i) {
    void 0 === n && (n = null);
    void 0 === i && (i = null);
    return e.getClientX().logEvent(r, n, i);
  };
  e.updateUser = function (r) {
    return e.getClientX().updateUser(r);
  };
  e.updateUserWithValues = function (r, n) {
    return e.getClientX().updateUserWithValues(r, n);
  };
  e.shutdown = function () {
    e.getClientX().shutdown();
    e.instance = null;
  };
  e.overrideGate = function (r, n) {
    e.getClientX().overrideGate(r, n);
  };
  e.overrideConfig = function (r, n) {
    e.getClientX().overrideConfig(r, n);
  };
  e.overrideLayer = function (r, n) {
    e.getClientX().overrideLayer(r, n);
  };
  e.removeGateOverride = function (r) {
    e.getClientX().removeGateOverride(r);
  };
  e.removeConfigOverride = function (r) {
    e.getClientX().removeConfigOverride(r);
  };
  e.removeLayerOverride = function (r) {
    e.getClientX().removeLayerOverride(r);
  };
  e.getAllOverrides = function () {
    return e.getClientX().getAllOverrides();
  };
  e.getStableID = function () {
    return e.getClientX().getStableID();
  };
  e.getEvaluationDetails = function () {
    var r;
    var n;
    return null !== (n = e.instance?.getEvaluationDetails()) && void 0 !== n ? n : {
      reason: EvaluationReason.Uninitialized,
      time: 0
    };
  };
  e.removeOverride = function (r) {
    e.getClientX().removeOverride(r);
  };
  e.getOverrides = function () {
    return e.getClientX().getOverrides();
  };
  e.initializeCalled = function () {
    return null != e.instance && e.instance.initializeCalled();
  };
  e.getClientX = function () {
    if (!e.instance) throw new StatsigUninitializedError();
    return e.instance;
  };
  e.instance = null;
  return e;
}();
exports.$$default = k;