import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { noop } from 'lodash-es';
import { customHistory } from "../905/612521";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
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
      e(VisualBellActions.enqueue({
        message: n,
        icon: t ? VisualBellIcon.CHECK_WITH_CIRCLE : void 0,
        type: t ? "requests-approved" : "requests-denied",
        onDismiss: noop
      }));
    },
    dispatchSuccessWithRequesterName: ({
      requesterName: t
    }) => {
      e(VisualBellActions.enqueue({
        message: getI18nString("admin_dashboard.requests.success_approve_with_name", {
          requesterName: t
        }),
        icon: VisualBellIcon.CHECK_WITH_CIRCLE,
        type: "requests-approved",
        onDismiss: noop
      }));
    },
    dispatchRequestAlreadyHandled: () => {
      e(VisualBellActions.enqueue({
        message: getI18nString("admin_dashboard.requests.this_request_has_already_been_handled"),
        type: "requests-approved"
      }));
    },
    dispatchProcessingError: ({
      multiple: t
    }) => {
      e(VisualBellActions.enqueue({
        message: t ? getI18nString("admin_dashboard.requests.error_multiple") : getI18nString("admin_dashboard.requests.error_single"),
        error: !0,
        button: {
          text: getI18nString("admin_dashboard.requests.error_reload"),
          action: () => {
            customHistory.reload("Admin requests dashboard error");
          }
        }
      }));
    },
    dispatchGenericError: () => {
      e(VisualBellActions.enqueue({
        message: getI18nString("admin_dashboard.requests.error_generic"),
        error: !0,
        button: {
          text: getI18nString("admin_dashboard.requests.error_reload"),
          action: () => {
            customHistory.reload("Admin requests dashboard error");
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
