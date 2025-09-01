import { useState, useEffect, useCallback } from "react";
import { c2 } from "../905/382883";
import { ZC } from "../figma_app/39751";
export function $$s0(e, t = {
  resetOnInitialStateChange: !1
}) {
  let [i, o] = useState(e);
  let l = ZC(e);
  useEffect(() => {
    t.resetOnInitialStateChange && !c2(e, l) && o(e);
  }, [t.resetOnInitialStateChange, e, l]);
  return [i, useCallback(e => t => {
    o(i => ({
      ...i,
      [e]: t instanceof Function ? t(i[e]) : t
    }));
  }, [o])];
}
export const a = $$s0;