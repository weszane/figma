import { useRef, useCallback, useState, useEffect } from "react";
export function $$i0() {
  let e = useRef(null);
  let t = $$a1(e);
  return [useCallback(t => {
    e.current = t;
  }, []), t, e];
}
export function $$a1(e) {
  let [t, r] = useState(!1);
  useEffect(() => {
    let t = () => r(!0);
    let n = () => r(!1);
    let i = e.current;
    if (i) {
      i.addEventListener("mouseover", t);
      i.addEventListener("mouseleave", n);
      return () => {
        i.removeEventListener("mouseover", t);
        i.removeEventListener("mouseleave", n);
      };
    }
  }, [e.current, r]);
  return t;
}
export const M = $$i0;
export const s = $$a1;