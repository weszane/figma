import { MentionsCppBindings } from "../figma_app/763686";
import { atomStoreManager } from "../figma_app/27355";
import { getI18nString } from "../905/303541";
import { MZ } from "../figma_app/925970";
import { F } from "../905/302958";
import { W } from "../figma_app/669294";
import { h1, LQ, wm, MX } from "../905/77316";
import { fullscreenValue } from "../figma_app/455680";
export let $$n0;
class p {
  setMentionsTypeaheadQuery(e) {
    atomStoreManager.set(h1, e);
  }
  clearMentionsTypeaheadQuery(e, t) {
    if (e) {
      let e = atomStoreManager.get(h1);
      let r = atomStoreManager.get(LQ)?.index || null;
      let n = atomStoreManager.get(wm);
      W(e, t, r, n);
    }
    atomStoreManager.set(h1, null);
    this.endSearchSession();
  }
  isShowingMentionsTypeaheadResults() {
    let e = atomStoreManager.get(LQ);
    return !!e?.mentions?.length;
  }
  setMentionsTypeaheadTargetRect(e, t, r) {
    atomStoreManager.set(MX, {
      x: e,
      y: t,
      height: r,
      width: 0
    });
  }
  startSearchSession() {
    let e = MZ();
    atomStoreManager.set(wm, e);
    return e;
  }
  endSearchSession() {
    let e = atomStoreManager.get(wm);
    atomStoreManager.set(wm, "");
    return e;
  }
  showVisualBellForPastedMentions(e, t) {
    fullscreenValue.dispatch(F.enqueue({
      message: getI18nString("whiteboard.visual_bell.canvas_at_mentions_send_notifications_from_pasted_mentions", {
        numUsers: t
      }),
      button: {
        text: getI18nString("whiteboard.visual_bell.canvas_at_mentions_send_notifications_from_pasted_mentions_action"),
        action: () => {
          MentionsCppBindings?.allowSendNotificationsForPastedMentions(e);
        }
      }
    }));
  }
}
export function $$_1() {
  $$n0 = new p();
}
export const YN = $$n0;
export const qZ = $$_1;