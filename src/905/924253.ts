import { useState, useEffect } from "react";
import { t_, eU } from "../figma_app/27355";
import { Y5 } from "../figma_app/455680";
export function $$s0() {
  let [e, t] = useState(void 0 !== Y5 && Y5.isReady());
  useEffect(() => {
    void 0 === Y5 || Y5.isReady() || Y5.onReady().then(() => {
      t(Y5.isReady());
    });
  }, []);
  return e;
}
export let $$o1 = (() => {
  let e = t_(() => void 0 !== Y5 && Y5.isReady());
  e.onMount = e => {
    void 0 === Y5 || Y5.isReady() || Y5.onReady().then(() => {
      e(Y5.isReady());
    });
  };
  return eU(t => t(e));
})();
export const q = $$s0;
export const w = $$o1;