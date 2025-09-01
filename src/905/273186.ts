import { debugState } from "../905/407919";
import { g } from "../905/880308";
import { ds } from "../figma_app/314264";
let s = class e {
  constructor(e, t) {
    this.sessionId = g();
    this.hasErrors = !1;
    this.hasUserEdited = !1;
    this.hasSystemEdited = !1;
    this.fileKey = e;
    this.codeFileId = t;
  }
  static start(t, i) {
    let n = new e(t, i);
    this.activeSessions.set(i, n);
    n.trackOpened();
    return n;
  }
  end() {
    this.trackClosed();
    e.activeSessions.$$delete(this.codeFileId);
  }
  static get(e) {
    return this.activeSessions.get(e);
  }
  trackOpened() {
    ds("code_editor_opened", this.fileKey, debugState.getState(), {
      codeEditorSessionId: this.sessionId,
      codeFileId: this.codeFileId
    });
  }
  trackClosed() {
    ds("code_editor_closed", this.fileKey, debugState.getState(), {
      codeEditorSessionId: this.sessionId,
      codeFileId: this.codeFileId,
      hasErrors: this.hasErrors,
      systemEdited: this.hasSystemEdited,
      userEdited: this.hasUserEdited
    });
  }
};
s.activeSessions = new Map();
export let $$o0 = s;
export const O = $$o0;