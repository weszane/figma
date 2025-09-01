import { wg, DJ } from "../vendor/73976";
import { dm } from "../vendor/186187";
import { x3 } from "../vendor/929565";
export function $$a0(e, r) {
  if (window.requestIdleCallback && window.cancelIdleCallback) {
    let n = window.requestIdleCallback(dm(e), r);
    return () => window.cancelIdleCallback(n);
  }
  return d(e);
}
let h = 50;
function d(e) {
  let r = x3();
  let n = wg(() => {
    e({
      didTimeout: !1,
      timeRemaining: () => Math.max(0, h - (x3() - r))
    });
  }, 0);
  return () => DJ(n);
}
export const BB = $$a0;