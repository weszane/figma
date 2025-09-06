import { hMR } from "../figma_app/763686";
import { logDebug } from "../905/714362";
import { K } from "../905/63322";
import { o_, aW } from "../figma_app/527873";
let o = 64 * o_;
function l() {
  let e = aW();
  if (!e) return null;
  let t = hMR?.getTotalUsedHeapMemory() || 0;
  let r = hMR?.getJsBufferMemory() || 0;
  return e < t ? null : {
    totalJSHeapMemory: e,
    wasmMemory: t,
    indirectMemory: r,
    jsSpecificMemory: e - t
  };
}
function d() {
  let e = l();
  e && logDebug("JS memory", "JS memory usage growth", e);
}
let c = !1;
let u = null;
let p = 0;
export function $$_0() {
  c || (aW() && (u = new K(o, 2, 1.2, 2e3, d), setInterval(() => {
    let e = l();
    u && e && (p = Math.max(p, e.jsSpecificMemory), u.setCurrent(e.jsSpecificMemory));
  }, 5e3)), c = !0);
}
export const T = $$_0;