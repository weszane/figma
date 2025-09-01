import { useCallback } from "react";
import { Xr } from "../vendor/525001";
import { RESET } from "../vendor/812047";
export function $$a0(e, n) {
  let i = Xr(e, n);
  return useCallback(() => i(RESET), [i]);
}
export const AY = $$a0;