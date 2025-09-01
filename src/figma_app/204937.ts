import { w$ } from "../figma_app/594947";
export let $$n1;
let a = class e {
  logFeatureGateExposure(e, t) {
    w$.logExposureForFeatureGate(e, t);
  }
  getDynamicConfigNumberAsRoundedInt(t, r, n) {
    return Math.round(w$.getDynamicConfigNumber(t, r, n, e.SourceLoggingString));
  }
  getExperimentNumberAsRoundedInt(t, r, n) {
    return Math.round(w$.getExperimentNumber(t, r, n, e.SourceLoggingString));
  }
  getDynamicConfigNumberAsFloat(t, r, n) {
    return w$.getDynamicConfigNumber(t, r, n, e.SourceLoggingString);
  }
  getExperimentNumberAsFloat(t, r, n) {
    return w$.getExperimentNumber(t, r, n, e.SourceLoggingString);
  }
  getDynamicConfigString(t, r, n) {
    return w$.getDynamicConfigString(t, r, n, e.SourceLoggingString);
  }
  getExperimentString(t, r, n) {
    return w$.getExperimentString(t, r, n, e.SourceLoggingString);
  }
  getDynamicConfigBoolean(t, r, n) {
    return w$.getDynamicConfigBoolean(t, r, n, e.SourceLoggingString);
  }
  getExperimentBoolean(t, r, n) {
    return w$.getExperimentBoolean(t, r, n, e.SourceLoggingString);
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