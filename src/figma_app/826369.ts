import { useEffect } from "react";
export function $$i0(e, t, r) {
  useEffect(() => {
    let n = n => {
      e && t.current && !t.current.contains(n.target) && r();
    };
    document.addEventListener("mousedown", n);
    return () => document.removeEventListener("mousedown", n);
  }, [e, t, r]);
}
export const l = $$i0;