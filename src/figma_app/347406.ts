import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { a4, eE } from "../905/149196";
let s = "showFigmentDebugger";
export function $$o0(e, t) {
  try {
    if (!getFeatureFlags().internal_only_debug_tools || !getFeatureFlags().figment_debugger || null == e) return;
    atomStoreManager.set(a4, {
      requestJsons: e,
      networkState: t
    });
  } catch (e) {
    console.error("[Figment Debugger] Error tracking request");
  }
}
export function $$l1() {
  var e;
  let t = $$d2();
  e = !t;
  localStorage.setItem(s, e ? "true" : "false");
  atomStoreManager.set(eE, !t);
}
export function $$d2() {
  try {
    if (null == localStorage) return !1;
    let e = localStorage.getItem(s);
    return "true" === e;
  } catch (e) {
    return !1;
  }
}
export const N = $$o0;
export const Y = $$l1;
export const wh = $$d2;