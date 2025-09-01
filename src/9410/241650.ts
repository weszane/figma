import { useCallback } from "react";
import { U } from "../figma_app/901889";
export function $$a0() {
  let e = U();
  return useCallback(t => {
    e("figjam_onboarding_event", t, {
      batchRequest: !1
    });
  }, [e]);
}
export const O = $$a0;