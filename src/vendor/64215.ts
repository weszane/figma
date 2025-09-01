import { c } from "../vendor/902536";
import { KQ } from "../vendor/82111";
import { l, q } from "../vendor/476421";
export let $$a2 = {
  HIDDEN: "visibility_hidden",
  UNLOADING: "before_unload",
  PAGEHIDE: "page_hide",
  FROZEN: "page_frozen"
};
export function $$h1(e) {
  return new c(r => {
    let {
      stop
    } = l(e, window, ["visibilitychange", "freeze"], e => {
      "visibilitychange" === e.type && "hidden" === document.visibilityState ? r.notify({
        reason: $$a2.HIDDEN
      }) : "freeze" === e.type && r.notify({
        reason: $$a2.FROZEN
      });
    }, {
      capture: !0
    });
    let i = q(e, window, "beforeunload", () => {
      r.notify({
        reason: $$a2.UNLOADING
      });
    }).stop;
    return () => {
      stop();
      i();
    };
  });
}
export function $$d0(e) {
  return KQ($$a2).includes(e);
}
export const Kp = $$d0;
export const _T = $$h1;
export const y5 = $$a2;