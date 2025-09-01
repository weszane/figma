import _require2 from "../vendor/250242";
import _require from "../vendor/724191";
import { useContext, useMemo } from "react";
import { DynamicConfig, EvaluationReason, Layer } from "../vendor/625526";
var i = this && this.__importDefault || function (e) {
  return e && e.__esModule ? e : {
    default: e
  };
};
exports.useLayerImpl = exports.useExperimentImpl = exports.useConfigImpl = exports.useGateImpl = void 0;
var a = i(_require);
var h = i(_require2);
function d(e, r, n) {
  void 0 === n && (n = !1);
  var i = useContext(a.$$default);
  var o = i.initialized;
  var d = i.userVersion;
  var p = i.initStarted;
  var g = useMemo(function () {
    return !!p && (n ? h.$$default.checkGateWithExposureLoggingDisabled(e, r) : h.$$default.checkGate(e, r?.ignoreOverrides));
  }, [o, p, e, d, r, n]);
  return {
    isLoading: !o,
    value: g
  };
}
function p(e, r, n) {
  void 0 === n && (n = !1);
  var i = useContext(a.$$default);
  var d = i.initialized;
  var p = i.initStarted;
  var g = i.userVersion;
  var m = useMemo(function () {
    return p ? n ? h.$$default.getConfigWithExposureLoggingDisabled(e, r) : h.$$default.getConfig(e, r?.ignoreOverrides) : new DynamicConfig(e, {}, "", {
      time: Date.now(),
      reason: EvaluationReason.Uninitialized
    });
  }, [d, p, e, g, r, n]);
  return {
    isLoading: !d,
    config: m
  };
}
function g(e, r, n) {
  void 0 === n && (n = !1);
  var i = useContext(a.$$default);
  var d = i.initialized;
  var p = i.initStarted;
  var g = i.userVersion;
  var m = useMemo(function () {
    return p ? n ? h.$$default.getExperimentWithExposureLoggingDisabled(e, r) : h.$$default.getExperiment(e, r?.keepDeviceValue, r?.ignoreOverrides) : new DynamicConfig(e, {}, "", {
      time: Date.now(),
      reason: EvaluationReason.Uninitialized
    });
  }, [d, p, e, g, r, n]);
  return {
    isLoading: !d,
    config: m
  };
}
function m(e, r, n) {
  void 0 === n && (n = !1);
  var i = useContext(a.$$default);
  var d = i.initialized;
  var p = i.initStarted;
  var g = i.userVersion;
  var m = useMemo(function () {
    return p ? n ? h.$$default.getLayerWithExposureLoggingDisabled(e, r) : h.$$default.getLayer(e, r?.keepDeviceValue) : Layer._create(e, {}, "", {
      time: Date.now(),
      reason: EvaluationReason.Uninitialized
    });
  }, [d, p, e, g, r, n]);
  return {
    isLoading: !d,
    layer: m
  };
}
exports.useGateImpl = d;
exports.useConfigImpl = p;
exports.useExperimentImpl = g;
exports.useLayerImpl = m;