import { useCallback } from "react";
import { U } from "../figma_app/901889";
export function $$i0(e) {
  let t = U();
  return useCallback(n => {
    t(e, {
      ...n
    });
  }, [e, t]);
}
export const Z = $$i0;