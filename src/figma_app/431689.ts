import { useDispatch } from "../vendor/514228";
import { oA } from "../905/663269";
import { Ay } from "../905/612521";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { w } from "../905/281010";
export function $$d1(e) {
  let t = oA(e.createdAt) || new Date();
  let r = Date.now() - t.getTime() < 2592e5;
  let n = null != oA(e.lastNudgedAt);
  let a = "pending" === e.status && !r && !n;
  let s = !!oA(e.requesterDismissedNudgeBadgeAt);
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
    e(F.enqueue({
      message: _$$t("admin_dashboard.requests.error_generic"),
      error: !0,
      button: {
        text: _$$t("admin_dashboard.requests.error_reload"),
        action: () => {
          Ay.reload("Seat request reminder error");
        }
      }
    }));
  };
  return {
    nudgeUpgradeRequest: r => {
      w.nudgeRequest({
        request_id: r
      }).then(r => {
        if (200 !== r.status) {
          t();
          return;
        }
        e(F.enqueue({
          message: _$$t("fullscreen.toolbar.reminder_sent"),
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