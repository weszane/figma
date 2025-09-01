import { useEffect } from "react";
export function $$i0(e) {
  useEffect(() => {
    let t = t => {
      "Escape" === t.key && e();
    };
    window.addEventListener("keydown", t);
    return () => window.removeEventListener("keydown", t);
  }, [e]);
}
export const j = $$i0;