import { debugState } from "../905/407919";
import { isInteractionOrEvalMode } from "../figma_app/897289";
import { F } from "../905/302958";
import { lu } from "../figma_app/84367";
import { Y5 } from "../figma_app/455680";
import { N } from "../905/293182";
let d = !1;
export function $$c2(e) {
  d = !0;
  try {
    e();
  } finally {
    d = !1;
  }
}
export function $$u1() {
  if (isInteractionOrEvalMode()) return !0;
  if (d) return !1;
  let e = Y5.fileLoadTime();
  if (null == e) return !1;
  let t = window.performance.now() - e;
  return !(t > 0 && t < 1e3 || 1e3 > N());
}
export function $$p0(e) {
  for (let t of e) lu(t.getObservable(), {
    onChangeImmediate() {
      if (!$$u1()) return;
      let e = t.getMessage(t.getObservable().getCopy());
      e && debugState.dispatch(F.enqueue({
        type: "settings_changed",
        ...e
      }));
    }
  });
}
export const Mo = $$p0;
export const Ok = $$u1;
export const WK = $$c2;