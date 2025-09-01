import { debugState } from "../905/407919";
import { W4, FB, TZ } from "../figma_app/300692";
import { $A } from "../905/782918";
import { Wh } from "../905/968269";
export function $$o0(e) {
  if ("triggeredFrom" in e) {
    let t = e.triggeredFrom;
    if (W4(t)) return Wh.INSPECT;
    if (FB(t)) return Wh.BUZZ_LEFT_PANEL;
    switch (t) {
      case "handoff-relaunch":
      case "handoff-panel":
        return Wh.INSPECT;
      default:
        return Wh.MODAL;
    }
  }
  if ("runMode" in e) switch (e.runMode) {
    case "codegen":
    case "linkpreview":
      break;
    default:
      let t = debugState.getState().selectedView;
      if (TZ(t)) return Wh.BUZZ_LEFT_PANEL;
      return $A(t) ? Wh.INSPECT : Wh.MODAL;
  }
  return Wh.MODAL;
}
export const E = $$o0;