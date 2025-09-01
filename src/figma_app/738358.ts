import { fp8 } from "../figma_app/763686";
import { zl } from "../figma_app/27355";
import { t as _$$t } from "../905/303541";
import { MZ } from "../figma_app/925970";
import { F } from "../905/302958";
import { W } from "../figma_app/669294";
import { h1, LQ, wm, MX } from "../905/77316";
import { Y5 } from "../figma_app/455680";
export let $$n0;
class p {
  setMentionsTypeaheadQuery(e) {
    zl.set(h1, e);
  }
  clearMentionsTypeaheadQuery(e, t) {
    if (e) {
      let e = zl.get(h1);
      let r = zl.get(LQ)?.index || null;
      let n = zl.get(wm);
      W(e, t, r, n);
    }
    zl.set(h1, null);
    this.endSearchSession();
  }
  isShowingMentionsTypeaheadResults() {
    let e = zl.get(LQ);
    return !!e?.mentions?.length;
  }
  setMentionsTypeaheadTargetRect(e, t, r) {
    zl.set(MX, {
      x: e,
      y: t,
      height: r,
      width: 0
    });
  }
  startSearchSession() {
    let e = MZ();
    zl.set(wm, e);
    return e;
  }
  endSearchSession() {
    let e = zl.get(wm);
    zl.set(wm, "");
    return e;
  }
  showVisualBellForPastedMentions(e, t) {
    Y5.dispatch(F.enqueue({
      message: _$$t("whiteboard.visual_bell.canvas_at_mentions_send_notifications_from_pasted_mentions", {
        numUsers: t
      }),
      button: {
        text: _$$t("whiteboard.visual_bell.canvas_at_mentions_send_notifications_from_pasted_mentions_action"),
        action: () => {
          fp8?.allowSendNotificationsForPastedMentions(e);
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