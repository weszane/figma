import { XHR } from "../905/910117";
import { FEditorType } from "../figma_app/53721";
export let $$n0;
class s {
  constructor(e) {
    this.store = e;
    this.commentNotificationLogTimePerFile = {};
    this.COMMENT_NOTIFICATION_LOG_INTERVAL_MS = 36e5;
  }
  showErrorBellInLocalDev(e) {}
  onMissingEditScope() {
    this.showErrorBellInLocalDev("No edit scope is active");
  }
  onIntentionalEdit(e) {
    this.maybeSubscribeToCommentNotifications(e);
  }
  resetCommentNotificationLogTimes() {
    this.commentNotificationLogTimePerFile = {};
  }
  maybeSubscribeToCommentNotifications(e) {
    let t = this.store.getState();
    let r = t.openFile?.key;
    if (!r || "fullscreen" === t.selectedView.view && t.selectedView.editorType === FEditorType.DevHandoff) return;
    let n = this.commentNotificationLogTimePerFile[r];
    let s = Date.now();
    if (null != n && s - n < this.COMMENT_NOTIFICATION_LOG_INTERVAL_MS) return;
    let o = Array.from(e).find(e => {
      if (e.includes("StampBehavior")) return !1;
      switch (e) {
        case "set-visible":
        case "set-locked":
        case "cut":
        case "select-frame-preset":
        case "update-selection-export-settings-data":
        case "reorder-pages":
          return !1;
        default:
          return !0;
      }
    });
    o && (XHR.post(`/api/user_notifications/catfile_signup/${r}`, {
      action_type: o
    }), this.commentNotificationLogTimePerFile[r] = s);
  }
}
export function $$o1(e) {
  $$n0 = new s(e);
}
export const xo = $$n0;
export const zs = $$o1;