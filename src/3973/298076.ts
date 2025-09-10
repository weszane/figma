import { w } from "src/905/669698";
export class $$s0 {
  getDynamicConfigBoolean(e, t, r) {
    return w.getDynamicConfigBoolean(e, t, r);
  }
  getDynamicConfigNumber(e, t, r) {
    return w.getDynamicConfigNumber(e, t, r);
  }
  getDynamicConfigString(e, t, r) {
    return w.getDynamicConfigString(e, t, r);
  }
  getExperimentBoolean(e, t, r) {
    return w.getExperimentBoolean(e, t, r);
  }
  getExperimentNumber(e, t, r) {
    return w.getExperimentNumber(e, t, r);
  }
  getExperimentString(e, t, r) {
    return w.getExperimentString(e, t, r);
  }
  getFeatureGate(e) {
    return w.getFeatureGateFromInitialOptions(e);
  }
  updateFeatureGateForTesting(e, t) {
    return w.updateFeatureGateForTesting(e, t);
  }
  clearFeatureGatesForTesting() {
    return w.clear();
  }
  setInRenderServerForViewerTests() {
    return w.setInRenderServerForViewerTests();
  }
  updateExperimentForTesting(e, t, r) {
    return w.updateExperimentForTesting(e, t, r);
  }
  clearExperimentsForTesting() {
    return w.clear();
  }
}
export const B = $$s0;
