import { F } from "../905/302958";
import { zX } from "../905/576487";
import { A } from "../905/482208";
import { fullscreenValue } from "../figma_app/455680";
export function $$o1(e) {
  if (e.isBackground) return;
  let t = function (e) {
    let t = $$d0(e.name, e.vmType);
    return e.isBackground ? A("plugins-background", {
      plugin: t
    }) : e.isInsert ? A("plugins-inserting", {
      plugin: t
    }) : A("plugins-running", {
      plugin: t
    });
  }(e);
  fullscreenValue.dispatch(F.enqueue({
    type: "plugins-status",
    message: t,
    icon: e.isBackground ? zX.NONE : e.shouldShowCheck ? zX.CHECK : zX.SPINNER,
    timeoutType: "exact",
    timeoutOverride: e.isBackground ? 1 / 0 : e.shouldShowCheck ? 1e3 : void 0,
    delay: e.delayOverride ?? 300,
    button: e.isInsert ? void 0 : {
      text: e.isBackground ? A("plugins-stop") : A("plugins-cancel"),
      action: t => {
        e.cancelCallback();
      }
    }
  }));
}
export function $$l2(e) {
  fullscreenValue && fullscreenValue.isReady() && e.shouldShowVisualBell && fullscreenValue.dispatch(F.dequeue({
    matchType: "plugins-status"
  }));
}
export function $$d0(e, t) {
  return "realms" === t ? `${e} (${A("plugins-realms-vm")})` : e;
}
export const WW = $$d0;
export const Ym = $$o1;
export const pN = $$l2;