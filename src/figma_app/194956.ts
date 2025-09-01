import { useEffect } from "react";
export function $$i0(e, t, r) {
  var i;
  i = [e.current];
  useEffect(() => {
    function e(e) {
      i.some(t => t && t.contains(e.target)) || r(e);
    }
    document.addEventListener(t, e);
    return () => {
      document.removeEventListener(t, e);
    };
  }, [t, r, i]);
  return e;
}
export function $$a1(e, t) {
  return $$i0(e, "mousedown", t);
}
export const Xq = $$i0;
export const ww = $$a1;