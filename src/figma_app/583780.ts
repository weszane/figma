import { useState, useEffect } from "react";
import { useLatestRef } from "../figma_app/922077";
export function $$a0(e) {
  let [t, r] = useState(e ? 1 : 0);
  let a = useLatestRef(e);
  useEffect(() => {
    !1 === a && e && r(e => e + 1);
  }, [a, e]);
  return t;
}
export const I = $$a0;