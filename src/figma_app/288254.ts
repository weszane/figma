import { useCallback } from "react";
import { ShareAction } from "../figma_app/707808";
import { setupShareModalTabHandler } from "../905/382697";
export function $$s0() {
  let e = setupShareModalTabHandler();
  return useCallback(() => {
    e(ShareAction.INVITE);
  }, [e]);
}
export const L = $$s0;