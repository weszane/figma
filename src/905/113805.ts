import { useState, useEffect } from "react";
export function $$r0(e, t = !1) {
  let [i, a] = useState("error" !== e.status || t ? [] : e.errors);
  useEffect(() => {
    "error" !== e.status || t ? "validated" === e.status && a(e => e.length > 0 ? [] : e) : a(e.errors);
  }, [e, t]);
  return i;
}
export const w = $$r0;