import { getFeatureFlags } from "../905/601108";
import { isE2ETraffic } from "../figma_app/169182";
import { isInteractionPathCheck } from "../figma_app/897289";
import { canPerformActionCheck } from "../905/622391";
let n;
let r;
let a;
let s;
let u = !1;
export function $$p1() {
  !u && (u = !0, !getFeatureFlags().ext_init_wdf || isInteractionPathCheck() || isE2ETraffic() || Object.defineProperty(window, g(), {
    get: () => {
      if (!function () {
        let e = Error().stack;
        return !!e && (null == a && (a = h("dispnf.fyufotjpo;00")), null == s && (s = h("np{.fyufotjpo;00")), e.includes(a) || e.includes(s));
      }() && canPerformActionCheck()) return n;
    },
    set: e => {
      n = null != e ? e : void 0;
    }
  }));
}
export function $$m0() {
  window[g()] = void 0;
}
function h(e) {
  return Array.from(e).map(e => String.fromCharCode(e.charCodeAt(0) - 1)).join("");
}
function g() {
  return r || h("gjhnb");
}
export const JX = $$m0;
export const e5 = $$p1;