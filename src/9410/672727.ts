import { useCallback } from "react";
import { d4 } from "../vendor/514228";
import { Xr } from "../figma_app/27355";
import { tS } from "../figma_app/516028";
import { ME } from "../figma_app/880974";
export function $$l0() {
  let e = tS();
  let t = d4(e => e.fileVersion);
  let i = Xr(ME);
  return useCallback((r, n) => i({
    fileKey: e,
    fileVersion: t,
    template: r
  }, n), [e, t, i]);
}
export const g = $$l0;