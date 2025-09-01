import { useEffect } from "react";
export function $$r0(e, t, n) {
  useEffect(() => {
    let a = a => {
      let r = a.target;
      n && !r.isConnected || e.current?.contains(r) || t();
    };
    document.addEventListener("click", a);
    return () => {
      document.removeEventListener("click", a);
    };
  });
}
export const L = $$r0;