import { trackEventAnalytics } from "../905/449184";
import { getFullscreenViewEditorType } from "../figma_app/300692";
// Original: $$a0
interface InteractionData {
  eventType: string;
  pluginID: string;
  totalDurationMs: number;
  durationBeforeVmStart: number;
  activeWorkDurationMs: number;
  numRenders: number;
  totalRenderMs: number;
  totalUnwrappingRenderResultMs: number;
  numReconciliations: number;
  totalReconciliationMs: number;
  editorType: string;
}

/**
 * Class for tracking widget interaction performance metrics.
 * Original: $$a0
 */
class WidgetInteractionTracker {
  private _interactionStartedAtMs: number = -1;
  private _pluginID: string | null = null;
  private _interactionType: string | null = null;
  private _numRenders: number = 0;
  private _totalRenderMs: number = 0;
  private _totalUnwrappingRenderResultMs: number = 0;
  private _numReconciliations: number = 0;
  private _totalReconciliationMs: number = 0;
  private _durationBeforeVmStart: number = 0;
  private _reconciliationIsScheduled: boolean = false;

  /**
   * Starts tracking an interaction.
   * Original: startInteraction
   */
  startInteraction(pluginID: string, interactionType: string): void {
    this.clearState();
    this._interactionStartedAtMs = window.performance.now();
    this._interactionType = interactionType;
    this._pluginID = pluginID;
  }

  /**
   * Handles JS VM evaluation completion.
   * Original: didEvalJSVM
   */
  didEvalJSVM(): void {
    if (this._interactionStartedAtMs && !this._reconciliationIsScheduled) {
      this.logInteractionAndClearState();
    }
  }

  /**
   * Marks that a render was scheduled.
   * Original: renderWasScheduled
   */
  renderWasScheduled(): void {
    this._reconciliationIsScheduled = true;
  }

  /**
   * Records render performance metrics.
   * Original: didRender
   */
  didRender(renderMs: number, unwrappingMs: number): void {
    this._numRenders++;
    this._totalRenderMs += renderMs;
    this._totalUnwrappingRenderResultMs += unwrappingMs;
  }

  /**
   * Records VM start time.
   * Original: didVmStart
   */
  didVmStart(vmStartTime: number): void {
    this._durationBeforeVmStart = vmStartTime - this._interactionStartedAtMs;
  }

  /**
   * Records reconciliation performance metrics.
   * Original: didReconciliation
   */
  didReconciliation(reconciliationMs: number): void {
    this._numReconciliations++;
    this._totalReconciliationMs += reconciliationMs;
    if (this._reconciliationIsScheduled) {
      this.logInteractionAndClearState();
    }
  }

  /**
   * Logs the interaction data and clears state.
   * Original: logInteractionAndClearState
   */
  logInteractionAndClearState(): void {
    if (this._interactionStartedAtMs < 0 || this._pluginID === null || this._interactionType === null) {
      this.clearState();
      return;
    }
    const totalDurationMs = window.performance.now() - this._interactionStartedAtMs;
    const data: InteractionData = {
      eventType: this._interactionType,
      pluginID: this._pluginID,
      totalDurationMs,
      durationBeforeVmStart: this._durationBeforeVmStart,
      activeWorkDurationMs: this._totalRenderMs + this._totalReconciliationMs,
      numRenders: this._numRenders,
      totalRenderMs: this._totalRenderMs,
      totalUnwrappingRenderResultMs: this._totalUnwrappingRenderResultMs,
      numReconciliations: this._numReconciliations,
      totalReconciliationMs: this._totalReconciliationMs,
      editorType: getFullscreenViewEditorType()
    };
    trackEventAnalytics("Widget Interaction Performance", data, {
      forwardToDatadog: true
    });
    this.clearState();
  }

  /**
   * Clears all tracking state.
   * Original: clearState
   */
  clearState(): void {
    this._interactionStartedAtMs = -1;
    this._interactionType = null;
    this._pluginID = null;
    this._reconciliationIsScheduled = false;
    this._numRenders = 0;
    this._totalRenderMs = 0;
    this._totalUnwrappingRenderResultMs = 0;
    this._numReconciliations = 0;
    this._totalReconciliationMs = 0;
  }
}

export const widgetInteractionTracker = new WidgetInteractionTracker();
export const z = widgetInteractionTracker;
