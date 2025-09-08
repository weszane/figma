import { perfTimerFrameManagerBindings } from "../figma_app/763686";
var $$r0 = (e => (e[e.LEGACY = 0] = "LEGACY", e[e.LOW = 100] = "LOW", e[e.MEDIUM = 200] = "MEDIUM", e[e.HIGH = 300] = "HIGH", e[e.MAX = 400] = "MAX", e[e.DEFAULT = 100] = "DEFAULT", e))($$r0 || {});
export function $$a1(e, t = 0, i) {
  let r = !1;
  perfTimerFrameManagerBindings && (r = perfTimerFrameManagerBindings?.startProfile(e, t));
  try {
    i();
  } finally {
    r && perfTimerFrameManagerBindings && perfTimerFrameManagerBindings?.stopProfile(e, t);
  }
}
export const K = $$r0;
export const L = $$a1;