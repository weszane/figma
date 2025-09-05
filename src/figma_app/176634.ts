import { CeL } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { localStorageRef } from "../905/657224";
import { sx } from "../905/449184";
import { eD } from "../figma_app/876459";
import { Ay } from "../905/612521";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
let u = "hardware_acceleration_disabled_warning_shown";
var p = (e => (e[e.UNKNOWN = 0] = "UNKNOWN", e[e.DISABLED = 1] = "DISABLED", e[e.ENABLED = 2] = "ENABLED", e))(p || {});
export function $$_0() {
  if (eD) return 0;
  let e = CeL.getGpuDeviceInfo();
  return e ? e.vendor.includes("Google Inc.") && e.graphicsCardName.includes("SwiftShader") ? 1 : 2 : 0;
}
export function $$h1(e, t) {
  if (0 !== e && !getFeatureFlags().suppress_hardware_acceleration_notification) {
    if (2 === e) {
      localStorageRef && localStorageRef.getItem(u) && (sx("Hardware Acceleration Turned On"), delete localStorageRef[u]);
      return;
    }
    if (!localStorageRef || !localStorageRef.getItem(u)) {
      let e = () => {
        localStorageRef.setItem(u, "1");
      };
      sx("Hardware Acceleration Warning Bell");
      t(F.enqueue({
        type: "hardware_acceleration_disabled_warning",
        message: _$$t("hardware_acceleration_detector.message"),
        button: {
          text: _$$t("hardware_acceleration_detector.learn_more"),
          action: () => {
            Ay.unsafeRedirect("https://help.figma.com/hc/articles/360039828614-Configure-your-browser-for-Figma#Advanced", "_blank");
            t(F.dequeue({}));
            e();
            sx("Hardware Acceleration Warning Clicked", {
              dismissed: !1
            });
          }
        },
        timeoutOverride: 1 / 0,
        onDismiss: () => {
          sx("Hardware Acceleration Warning Clicked", {
            dismissed: !0
          });
          e();
        }
      }));
    }
  }
}
export const XT = $$_0;
export const _I = $$h1;