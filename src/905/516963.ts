export let $$n0 = new class {
  _statsigDelegate;
  setDelegate(e) {
    this._statsigDelegate = e;
  }
  clearDelegate() {
    this._statsigDelegate = void 0;
  }
  getDynamicConfigBoolean(e, t, i) {
    return this._statsigDelegate ? this._statsigDelegate.getDynamicConfigBoolean(e, t, i) : i;
  }
  getDynamicConfigNumber(e, t, i) {
    return this._statsigDelegate ? this._statsigDelegate.getDynamicConfigNumber(e, t, i) : i;
  }
  getDynamicConfigString(e, t, i) {
    return this._statsigDelegate ? this._statsigDelegate.getDynamicConfigString(e, t, i) : i;
  }
  getExperimentBoolean(e, t, i) {
    return this._statsigDelegate ? this._statsigDelegate.getExperimentBoolean(e, t, i) : i;
  }
  getExperimentNumber(e, t, i) {
    return this._statsigDelegate ? this._statsigDelegate.getExperimentNumber(e, t, i) : i;
  }
  getExperimentString(e, t, i) {
    return this._statsigDelegate ? this._statsigDelegate.getExperimentString(e, t, i) : i;
  }
  getFeatureGate(e) {
    return !!this._statsigDelegate && this._statsigDelegate.getFeatureGate(e);
  }
  updateFeatureGateForTesting(e, t) {
    this._statsigDelegate && this._statsigDelegate.updateFeatureGateForTesting(e, t);
  }
  clearFeatureGatesForTesting() {
    this._statsigDelegate && this._statsigDelegate.clearFeatureGatesForTesting();
  }
  setInRenderServerForViewerTests() {
    this._statsigDelegate && this._statsigDelegate.setInRenderServerForViewerTests();
  }
  updateExperimentForTesting(e, t, i) {
    this._statsigDelegate && this._statsigDelegate.updateExperimentForTesting(e, t, i);
  }
  clearExperimentsForTesting() {
    this._statsigDelegate && this._statsigDelegate.clearExperimentsForTesting();
  }
}();
export const v = $$n0;