import { a5 } from "../vendor/858260";
import { DF } from "../vendor/463802";
import { Nx } from "../vendor/850527";
import { gC, vJ, I2, hV, wH, lJ, Jj } from "../vendor/408361";
export function $$o0() {
  let [e] = DF();
  e.registerCommand(gC, e => {
    let t = vJ();
    if (I2(t)) {
      let o = t.anchor.getNode();
      let l = o.getParent();
      if (l && hV(l) && a5(o) && Nx(t.anchor)) {
        var i = o.getChildren();
        if (i.length > 0) {
          var r = i[i.length - 1];
          wH(r) && r.remove();
        }
        let t = lJ();
        i.length > 0 ? o.insertAfter(t) : o.replace(t);
        t.select();
        e.preventDefault();
        return !0;
      }
    }
    return !1;
  }, Jj);
  return null;
}
export const A = $$o0;