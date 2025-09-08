import { UIVisibilitySetting, SchemaJoinStatus } from "../figma_app/763686";
import { atomStoreManager } from "../figma_app/27355";
import { Y7 } from "../figma_app/553184";
import { BrowserInfo } from "../figma_app/778880";
import { setSentryTag } from "../905/11";
import { v5 } from "../figma_app/314264";
import { qm } from "../905/617744";
import { y as _$$y } from "../905/913008";
import { le } from "../figma_app/527873";
export class $$p0 {
  constructor() {
    this._fullscreenCrashed = !1;
    this._receivedFailedAllocation = !1;
    this._lastAction = null;
    this._lastWebContextMessage = null;
    this._fileLoadTime = null;
  }
  oomState(e) {
    let t = le();
    let i = this._fileLoadTime;
    let n = i ? window.performance.now() - i : 0;
    return {
      ...e,
      totalMemoryInBytes: t,
      fileLoaded: !!i,
      timeSinceFileLoad: n,
      is64BitBrowser: BrowserInfo.is64BitBrowser,
      lastAction: this._lastAction,
      lastWebContextMessage: this._lastWebContextMessage
    };
  }
  documentIsLoaded() {
    this._fileLoadTime = window.performance.now();
  }
  resetOOMState() {
    this._fileLoadTime = null;
    this._lastAction = null;
  }
  recordActionForReportingOOM(e) {
    this._lastAction = e;
  }
}
export class $$m1 extends $$p0 {
  get _state() {
    if (!this._store) throw Error("Calling _state without a valid store");
    return this._store.getState();
  }
  constructor(e) {
    super();
    this._store = e;
  }
  openFileKey() {
    return this._state.openFile?.key || null;
  }
  allocationFailed(e, t, i, s, p, m, h, g, f, _) {
    if (this._receivedFailedAllocation) return;
    setSentryTag("wasm_oom", "yes");
    this._receivedFailedAllocation = !0;
    let A = le();
    let y = (m / 1024).toFixed(1);
    let b = (i / 1024 / 1024).toFixed(1);
    let v = (A / 1024 / 1024).toFixed(1);
    console.log(`malloc of size ${y}KB failed
        (high water mark was ${b}MB,
        total reserved memory was ${v}MB)`);
    let I = this.oomState({
      heapMemoryMode: e,
      heapMemoryLimit: t,
      mallocHighWatermark: i,
      currentAllocatedBytes: s,
      maxAllocatedBytes: p,
      failedSize: m,
      fontBytes: h,
      migration: g,
      migrationFrom: f,
      migrationTo: _
    });
    Y7({
      ...I,
      progressBarMode: UIVisibilitySetting[this._state.progressBarState.mode],
      multiplayerSessionState: SchemaJoinStatus[this._state.mirror.appModel.multiplayerSessionState],
      editingFileKey: this.openFileKey(),
      isReadOnly: this._state.mirror.appModel.isReadOnly,
      appType: "editor",
      productType: v5(this._state.selectedView, null)
    });
    let E = atomStoreManager.get(qm);
    _$$y.showMemoryCrashModal({
      isBranching: E
    }, this.openFileKey(), this._store);
  }
}
export const Q = $$p0;
export const a = $$m1;