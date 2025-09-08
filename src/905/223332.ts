import { trackEventAnalytics } from "../905/449184";
import { getFullscreenViewEditorType } from "../figma_app/300692";
export let $$a0 = new class {
  constructor() {
    this._interactionStartedAtMs = -1;
    this._pluginID = null;
    this._interactionType = null;
    this._numRenders = 0;
    this._totalRenderMs = 0;
    this._totalUnwrappingRenderResultMs = 0;
    this._numReconciliations = 0;
    this._totalReconciliationMs = 0;
    this._durationBeforeVmStart = 0;
    this._reconciliationIsScheduled = !1;
  }
  startInteraction(e, t) {
    this.clearState();
    this._interactionStartedAtMs = window.performance.now();
    this._interactionType = t;
    this._pluginID = e;
  }
  didEvalJSVM() {
    this._interactionStartedAtMs && (this._reconciliationIsScheduled || this.logInteractionAndClearState());
  }
  renderWasScheduled() {
    this._reconciliationIsScheduled = !0;
  }
  didRender(e, t) {
    this._numRenders++;
    this._totalRenderMs += e;
    this._totalUnwrappingRenderResultMs += t;
  }
  didVmStart(e) {
    this._durationBeforeVmStart = e - this._interactionStartedAtMs;
  }
  didReconciliation(e) {
    this._numReconciliations++;
    this._totalReconciliationMs += e;
    this._reconciliationIsScheduled && this.logInteractionAndClearState();
  }
  logInteractionAndClearState() {
    if (this._interactionStartedAtMs < 0 || null == this._pluginID || null == this._interactionType) {
      this.clearState();
      return;
    }
    let e = window.performance.now() - this._interactionStartedAtMs;
    let t = {
      eventType: this._interactionType,
      pluginID: this._pluginID,
      totalDurationMs: e,
      durationBeforeVmStart: this._durationBeforeVmStart,
      activeWorkDurationMs: this._totalRenderMs + this._totalReconciliationMs,
      numRenders: this._numRenders,
      totalRenderMs: this._totalRenderMs,
      totalUnwrappingRenderResultMs: this._totalUnwrappingRenderResultMs,
      numReconciliations: this._numReconciliations,
      totalReconciliationMs: this._totalReconciliationMs,
      editorType: getFullscreenViewEditorType()
    };
    trackEventAnalytics("Widget Interaction Performance", t, {
      forwardToDatadog: !0
    });
    this.clearState();
  }
  clearState() {
    this._interactionStartedAtMs = -1;
    this._interactionType = null;
    this._pluginID = null;
    this._reconciliationIsScheduled = !1;
    this._numRenders = 0;
    this._totalRenderMs = 0;
    this._totalUnwrappingRenderResultMs = 0;
    this._numReconciliations = 0;
    this._totalReconciliationMs = 0;
  }
}();
export const z = $$a0;