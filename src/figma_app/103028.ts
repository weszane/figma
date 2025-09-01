import { useRef, useCallback } from "react";
import { eU, Xr } from "../figma_app/27355";
export let $$a0 = eU(null);
export function $$s1() {
  let e = Xr($$a0);
  let t = useRef(null);
  return useCallback(r => {
    r && e(t);
    t.current = r;
  }, [e]);
}
export const _ = $$a0;
export const g = $$s1;