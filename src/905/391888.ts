import { useCallback } from "react";
import { wA, Pj } from "../vendor/514228";
import { aw } from "../figma_app/876459";
import { Ay } from "../905/612521";
import { Fo } from "../905/63728";
import { gN } from "../figma_app/976345";
import { oB } from "../905/929976";
import { xS } from "../figma_app/193867";
export function $$u0() {
  let e = wA();
  let t = Pj();
  return useCallback(async (i, n) => {
    e(oB());
    let r = Fo(n);
    let u = null;
    if (r && n.shiftKey ? u = aw.FOCAL_TAB : r ? u = aw.BACKGROUND_TAB : n.shiftKey && (u = aw.NEW_WINDOW), null != u) {
      n.preventDefault();
      let e = gN(i);
      let r = t.getState();
      let a = xS(r, e.payload);
      Ay.redirect(a, "_blank");
      return;
    }
    n.preventDefault();
    await e(gN(i));
  }, [e, t]);
}
export const E = $$u0;