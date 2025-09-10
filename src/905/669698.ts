import { debug } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { EvaluationReason } from "../vendor/625526";
import { trackEventAnalytics } from "../905/449184";
import { getFeatureFlagRulesExport } from "../figma_app/169182";
import { F } from "../905/422355";
import { atomStoreManager } from "../figma_app/27355";
import { Statsig } from "../vendor/735621";
import { Tq, sb } from "../3973/663243";
import { ZJ } from "../3973/697935";
import { Uv } from "../3973/473379";
import { isInteractionOrEvalMode } from "../figma_app/897289";
import { L, K } from "../905/958077";
function h(e = atomStoreManager.get(ZJ)) {
  return !!Statsig.initializeCalled() && e.status === Uv.COMPLETED;
}
let _ = class e {
  static notInTestingEnvForLogging() {
    return ("undefined" == typeof process || void 0 === process?.env?.JEST_WORKER_ID) && !isInteractionOrEvalMode();
  }
  static populateDynamicConfig(e, t) {
    if (!this.FrozenDyanmicConfigs.get(e)) {
      let i = h() ? Statsig.getConfigWithExposureLoggingDisabled(e) : null;
      if (null !== i && i.getEvaluationDetails().reason !== EvaluationReason.Unrecognized) {
        this.ToBeExposedDynamicConfigSet.add(e);
        null == this.LogExposureTimeoutHandle && (this.LogExposureTimeoutHandle = window.setTimeout(this.LogExposureCallback, this.getInitialLogExposureDelayMs()));
      } else {
        if (this.notInTestingEnvForLogging()) {
          let i = {
            resource_type: "config",
            source: t,
            resource_name: e,
            statsig_ready: h()
          };
          trackEventAnalytics(this.DataDogInvalidStatsigFetchKey, i, {
            forwardToDatadog: !0
          });
        }
        this.AlreadyExposedDynamicConfigSet.add(e);
      }
      this.FrozenDyanmicConfigs.set(e, i);
    }
  }
  static populateExperimentConfig(e, t) {
    if (!this.FrozenDyanmicConfigs.get(e)) {
      let i = function (e, t) {
        let i = atomStoreManager.get(ZJ);
        let n = Tq(i, e, "getFrozenExperiment", !1, t);
        return n && n !== sb && n.getEvaluationDetails().reason !== EvaluationReason.Unrecognized ? n : null;
      }(e, !0);
      if (null != i) {
        this.ToBeExposedExperimentConfigSet.add(e);
        null == this.LogExposureTimeoutHandle && (this.LogExposureTimeoutHandle = window.setTimeout(this.LogExposureCallback, this.getInitialLogExposureDelayMs()));
      } else {
        if (this.notInTestingEnvForLogging()) {
          let i = {
            resource_type: "experiment",
            source: t,
            resource_name: e,
            statsig_ready: h()
          };
          trackEventAnalytics(this.DataDogInvalidStatsigFetchKey, i, {
            forwardToDatadog: !0
          });
        }
        this.AlreadyExposedExperimentConfigSet.add(e);
      }
      this.FrozenDyanmicConfigs.set(e, i);
    }
  }
  static typeGuardBoolean(e) {
    let t = "boolean" == typeof e;
    t || debug(!1, "Expected boolean, got " + typeof e);
    return t;
  }
  static getDynamicConfigBoolean(e, t, i, n = this.DefaultSourceLoggingString) {
    this.populateDynamicConfig(e, n);
    let r = this.FrozenDyanmicConfigs.get(e);
    return null != r ? r.get(t, i, void 0) : i;
  }
  static getExperimentBoolean(e, t, i, n = this.DefaultSourceLoggingString) {
    this.populateExperimentConfig(e, n);
    let r = this.FrozenDyanmicConfigs.get(e);
    return null != r ? r.get(t, i, void 0) : i;
  }
  static typeGuardNumber(e) {
    let t = "number" == typeof e;
    t || debug(!1, "Expected number, got " + typeof e);
    return t;
  }
  static getDynamicConfigNumber(e, t, i, n = this.DefaultSourceLoggingString) {
    this.populateDynamicConfig(e, n);
    let r = this.FrozenDyanmicConfigs.get(e);
    return null != r ? r.get(t, i, void 0) : i;
  }
  static getExperimentNumber(e, t, i, n = this.DefaultSourceLoggingString) {
    this.populateExperimentConfig(e, n);
    let r = this.FrozenDyanmicConfigs.get(e);
    return null != r ? r.get(t, i, void 0) : i;
  }
  static typeGuardString(e) {
    let t = "string" == typeof e;
    t || debug(!1, "Expected string, got " + typeof e);
    return t;
  }
  static getDynamicConfigString(e, t, i, n = this.DefaultSourceLoggingString) {
    this.populateDynamicConfig(e, n);
    let r = this.FrozenDyanmicConfigs.get(e);
    return null != r ? r.get(t, i, void 0) : i;
  }
  static getExperimentString(e, t, i, n = this.DefaultSourceLoggingString) {
    this.populateExperimentConfig(e, n);
    let r = this.FrozenDyanmicConfigs.get(e);
    return null != r ? r.get(t, i, void 0) : i;
  }
  static getFeatureGateFromInitialOptionsInternal(e) {
    return {
      value: getFeatureFlags()[e] ?? !1,
      rule_id: getFeatureFlagRulesExport()[F(e)] ?? null
    };
  }
  static getFeatureGateFromInitialOptions(t) {
    if (!this.FrozenFeatureGates.has(t)) {
      let i = e.getFeatureGateFromInitialOptionsInternal(t);
      this.FrozenFeatureGates.set(t, i);
    }
    let i = this.FrozenFeatureGates.get(t)?.value ?? !1;
    this.logExposureForFeatureGate(t, i);
    return i;
  }
  static logExposureForFeatureGate(t, i) {
    let n = e.getFeatureGateFromInitialOptionsInternal(t);
    this.AlreadyExposedFeatureGateSet.has(t) || (this.ToBeExposedFeatureGateExposureMap.set(t, n), null == this.LogExposureTimeoutHandle && (this.LogExposureTimeoutHandle = window.setTimeout(this.LogExposureCallback, this.getInitialLogExposureDelayMs())));
  }
  static getInitialLogExposureDelayMs() {
    return getFeatureFlags().use_short_exposure_logging_delay ? 0 : 3e4;
  }
  static getRetryLogExposureDelayMs() {
    return getFeatureFlags().use_short_exposure_logging_delay ? 1e3 : 3e4;
  }
  static updateExperimentForTesting(e, t, i) {
    let n = this.FrozenDyanmicConfigs.get(e)?.value;
    n && (n[t] = i);
  }
  static updateFeatureGateForTesting(e, t, i = null) {
    this.FrozenFeatureGates.set(e, {
      value: t,
      rule_id: i
    });
  }
  static setInRenderServerForViewerTests() {
    this.InRenderServerForViewerTests = !0;
  }
  static clear() {
    this.FrozenFeatureGates.clear();
    this.FrozenDyanmicConfigs.clear();
    this.AlreadyExposedFeatureGateSet.clear();
    this.ToBeExposedFeatureGateExposureMap.clear();
    this.AlreadyExposedDynamicConfigSet.clear();
    this.ToBeExposedDynamicConfigSet.clear();
    this.AlreadyExposedExperimentConfigSet.clear();
    this.ToBeExposedExperimentConfigSet.clear();
    null != this.LogExposureTimeoutHandle && (clearTimeout(this.LogExposureTimeoutHandle), this.LogExposureTimeoutHandle = null);
    this.InRenderServerForViewerTests = !1;
  }
};
_.DataDogInvalidStatsigFetchKey = "statsig.frozen_config_invalid_fetch";
_.DefaultSourceLoggingString = "web";
_.AlreadyExposedExperimentConfigSet = new Set();
_.ToBeExposedExperimentConfigSet = new Set();
_.AlreadyExposedDynamicConfigSet = new Set();
_.ToBeExposedDynamicConfigSet = new Set();
_.FrozenDyanmicConfigs = new Map();
_.FrozenFeatureGates = new Map();
_.AlreadyExposedFeatureGateSet = new Set();
_.ToBeExposedFeatureGateExposureMap = new Map();
_.InRenderServerForViewerTests = !1;
_.LogExposureCallback = () => {
  if (!_.InRenderServerForViewerTests) {
    if (!h()) {
      if (console.error("Statsig is not ready to log exposures"), _.notInTestingEnvForLogging()) {
        let e = {
          resource_type: "exposure_log",
          source: "web",
          statsig_ready: h()
        };
        trackEventAnalytics(_.DataDogInvalidStatsigFetchKey, e, {
          forwardToDatadog: !0
        });
      }
      _.LogExposureTimeoutHandle = window.setTimeout(_.LogExposureCallback, _.getRetryLogExposureDelayMs());
      return;
    }
    L("LogExposureCallback", K.DEFAULT, () => {
      for (let [e, t] of _.ToBeExposedFeatureGateExposureMap) (function (e, t) {
        var i;
        var n;
        return !!h() && (i = t.value, n = t.rule_id ?? "unknown", Statsig.instance.getLogger().logGateExposure(Statsig.getCurrentUser(), e, i, n, [], {}, !0), !0);
      })(e, t) && (_.ToBeExposedFeatureGateExposureMap.$$delete(e), _.AlreadyExposedFeatureGateSet.add(e));
      for (let e of _.ToBeExposedDynamicConfigSet) h() && (Statsig.manuallyLogConfigExposure(e), 1) && (_.AlreadyExposedDynamicConfigSet.add(e), _.ToBeExposedDynamicConfigSet.$$delete(e));
      for (let e of _.ToBeExposedExperimentConfigSet) h() && (Statsig.manuallyLogExperimentExposure(e, !1), 1) && (_.AlreadyExposedExperimentConfigSet.add(e), _.ToBeExposedExperimentConfigSet.$$delete(e));
      _.LogExposureTimeoutHandle = null;
    });
  }
};
_.LogExposureTimeoutHandle = null;
export let $$A0 = _;
export const w = $$A0;
