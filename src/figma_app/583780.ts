import { useState, useEffect } from "react";
import { ZC } from "../figma_app/39751";
export function $$a0(e) {
  let [t, r] = useState(e ? 1 : 0);
  let a = ZC(e);
  useEffect(() => {
    !1 === a && e && r(e => e + 1);
  }, [a, e]);
  return t;
}
export const I = $$a0;