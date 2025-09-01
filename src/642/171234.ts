import { useCallback } from "react";
import { JA } from "../figma_app/608944";
export let $$i0 = "asset-description-preview";
export function $$l1() {
  let {
    closeFlyout
  } = JA();
  return useCallback(() => {
    closeFlyout();
  }, [closeFlyout]);
}
export const iV = $$i0;
export const se = $$l1;