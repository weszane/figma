import { useCallback } from "react";
export function $$r0(e, t, i, r) {
  return useCallback(n => {
    let a = [];
    return (r ? a.push(r) : n && a.push(e), t && a.push(t), i && (i !== e || n) && a.push(i), a.length > 0) ? a.join("\n\n") : "";
  }, [e, t, i, r]);
}
export const Y = $$r0;