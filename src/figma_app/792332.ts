import { CorePerfInfo } from "../figma_app/763686";
import { logDebug } from "../905/714362";
import { ProgressiveNotificationHandler } from "../905/63322";
import { defaultHeapMemorySize, getUsedJSHeapSize } from "../figma_app/527873";
let o = 64 * defaultHeapMemorySize;
function l() {
  let e = getUsedJSHeapSize();
  if (!e) return null;
  let t = CorePerfInfo?.getTotalUsedHeapMemory() || 0;
  let r = CorePerfInfo?.getJsBufferMemory() || 0;
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
  c || (getUsedJSHeapSize() && (u = new ProgressiveNotificationHandler(o, 2, 1.2, 2e3, d), setInterval(() => {
    let e = l();
    u && e && (p = Math.max(p, e.jsSpecificMemory), u.setCurrent(e.jsSpecificMemory));
  }, 5e3)), c = !0);
}
export const T = $$_0;