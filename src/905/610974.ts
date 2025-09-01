import { zl } from "../figma_app/27355";
import { u2 } from "../figma_app/761118";
import { td } from "../figma_app/827216";
export class $$s0 {
  constructor() {
    this.updatedNodeGuids = new Set();
    this.deletedNodeGuids = new Set();
    this.debounceTimeoutId = null;
    this.responsivenessTriggerCallback = null;
    this.abortSignal = null;
  }
  initialize(e) {
    this.responsivenessTriggerCallback = e;
  }
  setAbortSignal(e) {
    this.abortSignal = e;
  }
  onNodeChanged(e) {
    if (this.abortSignal?.aborted) return;
    let {
      guid,
      isDeleted
    } = e;
    isDeleted ? (this.deletedNodeGuids.add(guid), this.updatedNodeGuids.$$delete(guid)) : (this.updatedNodeGuids.add(guid), this.deletedNodeGuids.$$delete(guid));
    null != this.debounceTimeoutId && clearTimeout(this.debounceTimeoutId);
    this.debounceTimeoutId = setTimeout(() => {
      this.processAccumulatedChanges();
    }, 100);
  }
  processAccumulatedChanges() {
    if (this.abortSignal?.aborted) {
      this.clearState();
      return;
    }
    if (zl.get(u2) !== td.GROUPING_COMPLETE) {
      this.debounceTimeoutId = setTimeout(() => {
        this.processAccumulatedChanges();
      }, 100);
      return;
    }
    this.triggerResponsivenessUpdate();
  }
  triggerResponsivenessUpdate() {
    if (0 === this.updatedNodeGuids.size && 0 === this.deletedNodeGuids.size || !this.responsivenessTriggerCallback) {
      this.clearState();
      return;
    }
    let e = Array.from(this.updatedNodeGuids);
    let t = Array.from(this.deletedNodeGuids);
    this.clearState();
    this.responsivenessTriggerCallback(e, t);
  }
  clearState() {
    this.updatedNodeGuids.clear();
    this.deletedNodeGuids.clear();
    null !== this.debounceTimeoutId && (clearTimeout(this.debounceTimeoutId), this.debounceTimeoutId = null);
  }
  getDebugInfo() {
    return {
      updatedNodeGuids: Array.from(this.updatedNodeGuids),
      deletedNodeGuids: Array.from(this.deletedNodeGuids),
      debounceTimeoutId: this.debounceTimeoutId,
      hasCallback: !!this.responsivenessTriggerCallback,
      isAborted: this.abortSignal?.aborted ?? !1
    };
  }
}
export const B = $$s0;