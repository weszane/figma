import { useEffect } from "react";
import { useDispatch } from "../vendor/514228";
import { lQ } from "../905/934246";
import { Ay } from "../905/612521";
import { getI18nString } from "../905/303541";
import { F } from "../905/302958";
import { zX } from "../905/576487";
import { Jt } from "../figma_app/28323";
if (443 == require.j) {}
export function $$u0() {
  let e = useDispatch();
  return {
    dispatchSuccess: ({
      approve: t,
      numRequests: a,
      asyncUpdate: s
    }) => {
      let n = t ? getI18nString("admin_dashboard.requests.success_approve_seat_changed", {
        numRequests: a
      }) : getI18nString("admin_dashboard.requests.success_deny_multiple", {
        numRequests: a
      });
      t && s && (n = getI18nString("admin_dashboard.requests.success_approve_seat_changed_async", {
        numRequests: a
      }));
      e(F.enqueue({
        message: n,
        icon: t ? zX.CHECK_WITH_CIRCLE : void 0,
        type: t ? "requests-approved" : "requests-denied",
        onDismiss: lQ
      }));
    },
    dispatchSuccessWithRequesterName: ({
      requesterName: t
    }) => {
      e(F.enqueue({
        message: getI18nString("admin_dashboard.requests.success_approve_with_name", {
          requesterName: t
        }),
        icon: zX.CHECK_WITH_CIRCLE,
        type: "requests-approved",
        onDismiss: lQ
      }));
    },
    dispatchRequestAlreadyHandled: () => {
      e(F.enqueue({
        message: getI18nString("admin_dashboard.requests.this_request_has_already_been_handled"),
        type: "requests-approved"
      }));
    },
    dispatchProcessingError: ({
      multiple: t
    }) => {
      e(F.enqueue({
        message: t ? getI18nString("admin_dashboard.requests.error_multiple") : getI18nString("admin_dashboard.requests.error_single"),
        error: !0,
        button: {
          text: getI18nString("admin_dashboard.requests.error_reload"),
          action: () => {
            Ay.reload("Admin requests dashboard error");
          }
        }
      }));
    },
    dispatchGenericError: () => {
      e(F.enqueue({
        message: getI18nString("admin_dashboard.requests.error_generic"),
        error: !0,
        button: {
          text: getI18nString("admin_dashboard.requests.error_reload"),
          action: () => {
            Ay.reload("Admin requests dashboard error");
          }
        }
      }));
    }
  };
}
export function $$m1(e, t) {
  let a = useDispatch();
  useEffect(() => {
    e && !t && a(Jt({
      forceRefetch: !0
    }));
  }, [a, e, t]);
}
export const s = $$u0;
export const u = $$m1;