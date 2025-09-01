import { DF } from "../vendor/463802";
import { SK, Ni, vJ, lJ, I2, jZ } from "../vendor/408361";
import { useLayoutEffect, useEffect } from "react";
let a = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? useLayoutEffect : useEffect;
export function $$o0({
  onClear: e
}) {
  let [t] = DF();
  a(() => t.registerCommand(SK, i => (t.update(() => {
    if (null == e) {
      let e = Ni();
      let t = vJ();
      let i = lJ();
      e.clear();
      e.append(i);
      null !== t && i.select();
      I2(t) && (t.format = 0);
    } else e();
  }), !0), jZ), [t, e]);
  return null;
}
export const Q = $$o0;