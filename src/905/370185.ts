import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { lQ } from "../905/934246";
import { getFeatureFlags } from "../905/601108";
import { A } from "../vendor/850789";
import { customHistory } from "../905/612521";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
let u = "cms-connection-error-visual-bell";
export function $$p0(e) {
  let t = useDispatch();
  let [i] = A(e.status, 3e3);
  useEffect(() => {
    if (getFeatureFlags().dakota_connection_error_toast) {
      "errors" === i && t(VisualBellActions.enqueue({
        type: u,
        timeoutOverride: 1 / 0,
        icon: VisualBellIcon.OFFLINE,
        message: `Network hiccup\u2014refresh to fix it.`,
        button: {
          text: "Refresh",
          action: () => {
            customHistory.reload("[CMS] Livegraph connection error");
          }
        },
        onDismiss: lQ
      }));
      return () => {
        t(VisualBellActions.dequeue({
          matchType: u
        }));
      };
    }
  }, [i, t]);
}
export const g = $$p0;
