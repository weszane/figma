import { useState, useEffect, useCallback } from "react";
import { deepEqual } from "../905/382883";
import { useLatestRef } from "../figma_app/922077";
export function $$s0(e, t = {
  resetOnInitialStateChange: !1
}) {
  let [i, o] = useState(e);
  let l = useLatestRef(e);
  useEffect(() => {
    t.resetOnInitialStateChange && !deepEqual(e, l) && o(e);
  }, [t.resetOnInitialStateChange, e, l]);
  return [i, useCallback(e => t => {
    o(i => ({
      ...i,
      [e]: t instanceof Function ? t(i[e]) : t
    }));
  }, [o])];
}
export const a = $$s0;