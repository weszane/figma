import { DF } from "../vendor/463802";
import { ns, vJ, RT, rU, n1 } from "../vendor/408361";
import { useState, useEffect, useCallback } from "react";
function a(e, r) {
  return e.getEditorState().read(() => {
    let e = ns(r);
    return null !== e && e.isSelected();
  });
}
export function $$h0(e) {
  let [r] = DF();
  let [n, h] = useState(() => a(r, e));
  useEffect(() => {
    let n = !0;
    let i = r.registerUpdateListener(() => {
      n && h(a(r, e));
    });
    return () => {
      n = !1;
      i();
    };
  }, [r, e]);
  return [n, useCallback(n => {
    r.update(() => {
      let r = vJ();
      RT(r) || (r = rU(), n1(r));
      RT(r) && (n ? r.add(e) : r.$$delete(e));
    });
  }, [r, e]), useCallback(() => {
    r.update(() => {
      let e = vJ();
      RT(e) && e.clear();
    });
  }, [r])];
}
export const Y = $$h0;