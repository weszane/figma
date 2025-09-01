import { useState, useEffect } from "react";
import { t_, md } from "../figma_app/27355";
import { Y5 } from "../figma_app/455680";
let s = t_(() => Y5.isReady() || Y5.onReady());
export function $$o0() {
  md(s);
}
export function $$l1() {
  let [e, t] = useState(!1);
  useEffect(() => {
    if (Y5.isReady()) {
      t(!0);
      return;
    }
    let e = !1;
    Y5.onReady().then(() => {
      e || t(!0);
    });
    return () => {
      e = !0;
    };
  }, [t]);
  return e;
}
export const N = $$o0;
export const g = $$l1;