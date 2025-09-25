import { useDispatch } from "react-redux";
import { getResourceDataOrFallback } from "../905/663269";
import { customHistory } from "../905/612521";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { accountTypeRequestHandler } from "../905/281010";
export function $$d1(e) {
  let t = getResourceDataOrFallback(e.createdAt) || new Date();
  let r = Date.now() - t.getTime() < 2592e5;
  let n = null != getResourceDataOrFallback(e.lastNudgedAt);
  let a = "pending" === e.status && !r && !n;
  let s = !!getResourceDataOrFallback(e.requesterDismissedNudgeBadgeAt);
  return {
    requestCanBeNudged: a,
    requestHasBeenNudged: n,
    upgradeRequestId: e.id,
    showNudgeEligibility: a && !s
  };
}
export function $$c0() {
  let e = useDispatch();
  let t = () => {
    e(VisualBellActions.enqueue({
      message: getI18nString("admin_dashboard.requests.error_generic"),
      error: !0,
      button: {
        text: getI18nString("admin_dashboard.requests.error_reload"),
        action: () => {
          customHistory.reload("Seat request reminder error");
        }
      }
    }));
  };
  return {
    nudgeUpgradeRequest: r => {
      accountTypeRequestHandler.nudgeRequest({
        request_id: r
      }).then(r => {
        if (200 !== r.status) {
          t();
          return;
        }
        e(VisualBellActions.enqueue({
          message: getI18nString("fullscreen.toolbar.reminder_sent"),
          type: "request-reminder-sent"
        }));
      }).catch(() => {
        t();
      });
    }
  };
}
export const q0 = $$c0;
export const qm = $$d1;