import { FrozenConfigManager } from "../figma_app/594947";
export let $$n1;
let a = class e {
  logFeatureGateExposure(e, t) {
    FrozenConfigManager.logExposureForFeatureGate(e, t);
  }
  getDynamicConfigNumberAsRoundedInt(t, r, n) {
    return Math.round(FrozenConfigManager.getDynamicConfigNumber(t, r, n, e.SourceLoggingString));
  }
  getExperimentNumberAsRoundedInt(t, r, n) {
    return Math.round(FrozenConfigManager.getExperimentNumber(t, r, n, e.SourceLoggingString));
  }
  getDynamicConfigNumberAsFloat(t, r, n) {
    return FrozenConfigManager.getDynamicConfigNumber(t, r, n, e.SourceLoggingString);
  }
  getExperimentNumberAsFloat(t, r, n) {
    return FrozenConfigManager.getExperimentNumber(t, r, n, e.SourceLoggingString);
  }
  getDynamicConfigString(t, r, n) {
    return FrozenConfigManager.getDynamicConfigString(t, r, n, e.SourceLoggingString);
  }
  getExperimentString(t, r, n) {
    return FrozenConfigManager.getExperimentString(t, r, n, e.SourceLoggingString);
  }
  getDynamicConfigBoolean(t, r, n) {
    return FrozenConfigManager.getDynamicConfigBoolean(t, r, n, e.SourceLoggingString);
  }
  getExperimentBoolean(t, r, n) {
    return FrozenConfigManager.getExperimentBoolean(t, r, n, e.SourceLoggingString);
  }
};
a.SourceLoggingString = "fullscreen";
export let $$s0 = a;
export function $$o2() {
  $$n1 = new $$s0();
}
export const _v = $$s0;
export const gR = $$n1;
export const kJ = $$o2;