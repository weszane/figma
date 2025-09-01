import { useEffect } from "react";
import { wA } from "../vendor/514228";
import { lQ } from "../905/934246";
import { getFeatureFlags } from "../905/601108";
import { A } from "../vendor/850789";
import { Ay } from "../905/612521";
import { F } from "../905/302958";
import { zX } from "../905/576487";
let u = "cms-connection-error-visual-bell";
export function $$p0(e) {
  let t = wA();
  let [i] = A(e.status, 3e3);
  useEffect(() => {
    if (getFeatureFlags().dakota_connection_error_toast) {
      "errors" === i && t(F.enqueue({
        type: u,
        timeoutOverride: 1 / 0,
        icon: zX.OFFLINE,
        message: `Network hiccup\u2014refresh to fix it.`,
        button: {
          text: "Refresh",
          action: () => {
            Ay.reload("[CMS] Livegraph connection error");
          }
        },
        onDismiss: lQ
      }));
      return () => {
        t(F.dequeue({
          matchType: u
        }));
      };
    }
  }, [i, t]);
}
export const g = $$p0;