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
    let r = !function (e) {
      let t = e.getNodes();
      if (zD(t, e => y6(e) && e.canIndent() ? e : null).length > 0) return !0;
      let i = e.anchor;
      let r = e.focus;
      let a = r.isBefore(i) ? r : i;
      let o = a.getNode();
      let u = mB(o);
      if (u.canIndent()) {
        let e = u.getKey();
        let t = uT();
        if (t.anchor.set(e, 0, "element"), t.focus.set(e, 0, "element"), (t = C(t)).anchor.is(a)) return !0;
      }
      return !1;
    }(i) ? YW : t.shiftKey ? si : Pi;
    return e.dispatchCommand(r, void 0);
  }, jZ));
  return null;
}
export const m = $$o0;