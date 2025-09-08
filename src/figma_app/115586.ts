import { useState, useEffect } from "react";
import { t_, useAtomWithSubscription } from "../figma_app/27355";
import { fullscreenValue } from "../figma_app/455680";
let s = t_(() => fullscreenValue.isReady() || fullscreenValue.onReady());
export function $$o0() {
  useAtomWithSubscription(s);
}
export function $$l1() {
  let [e, t] = useState(!1);
  useEffect(() => {
    if (fullscreenValue.isReady()) {
      t(!0);
      return;
    }
    let e = !1;
    fullscreenValue.onReady().then(() => {
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