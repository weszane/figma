import { useState, useEffect } from "react";
export function $$i0(e) {
  let [t, r] = useState(() => matchMedia(e).matches);
  useEffect(() => {
    let t = matchMedia(e);
    let n = e => {
      r(e.matches);
    };
    t.addEventListener("change", n);
    return () => {
      t.removeEventListener("change", n);
    };
  }, [e]);
  return t;
}
export function $$a1() {
  return $$i0("(prefers-reduced-motion: reduce)");
}
export const N = $$i0;
export const j = $$a1;