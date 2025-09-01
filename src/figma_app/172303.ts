import { debugState } from "../905/407919";
import { F } from "../905/302958";
export function $$a0(e, t, r, a, s, o, l) {
  let d = {
    type: e,
    error: t,
    onDismiss: l || (() => {}),
    timeoutOverride: a ?? 5e3,
    icon: s ?? void 0,
    button: o ?? void 0,
    ...r,
  };
  debugState.dispatch(F.enqueue(d));
}
export const j = $$a0;
