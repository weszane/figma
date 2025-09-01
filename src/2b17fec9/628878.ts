import { DF } from "../vendor/463802";
import { zD, mB } from "../vendor/425002";
import { OX, vJ, I2, y6, uT, C, YW, si, Pi, jZ } from "../vendor/408361";
import { useEffect } from "react";
export function $$o0() {
  let [e] = DF();
  useEffect(() => e.registerCommand(OX, t => {
    let i = vJ();
    if (!I2(i)) return !1;
    t.preventDefault();
    let n = !function (e) {
      let t = e.getNodes();
      if (zD(t, e => y6(e) && e.canIndent() ? e : null).length > 0) return !0;
      let i = e.anchor;
      let n = e.focus;
      let s = n.isBefore(i) ? n : i;
      let o = s.getNode();
      let l = mB(o);
      if (l.canIndent()) {
        let e = l.getKey();
        let t = uT();
        if (t.anchor.set(e, 0, "element"), t.focus.set(e, 0, "element"), (t = C(t)).anchor.is(s)) return !0;
      }
      return !1;
    }(i) ? YW : t.shiftKey ? si : Pi;
    return e.dispatchCommand(n, void 0);
  }, jZ));
  return null;
}
export const m = $$o0;