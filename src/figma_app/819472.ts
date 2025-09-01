import { useCallback } from "react";
import { $v } from "../figma_app/370763";
import { I } from "../figma_app/827540";
export function $$s0() {
  let e = I();
  return useCallback(() => {
    e && $v("toggle-menu");
  }, [e]);
}
export const L = $$s0;