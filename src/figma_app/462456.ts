import { b } from "../905/690073";
import { debugState } from "../905/407919";
import { o as _$$o } from "../905/528513";
export let $$n2;
class o {
  onUndo(e) {
    l && l.trigger("undo", {
      undoneCommitId: e
    });
  }
  onRedo(e) {
    l && l.trigger("redo", {
      redoneCommitId: e
    });
  }
}
let l = null;
export function $$d0() {
  $$n2 = new o();
  let e = !1;
  debugState.subscribe(() => {
    let t = _$$o(debugState.getState());
    t !== e && (t ? (l && l.removeAllListeners(), l = new b("fullscreen-undo-redo-events")) : l && (l.removeAllListeners(), l = null), e = t);
  });
}
export function $$c1(e, t) {
  if (!l) return () => {};
  let r = (r) => {
    r.undoneCommitId === e && t();
  };
  l.on("undo", r);
  return () => {
    l?.removeListener("undo", r);
  };
}
export const EA = $$d0;
export const Zr = $$c1;
export const wV = $$n2;