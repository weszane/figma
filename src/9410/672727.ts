import { useCallback } from "react";
import { useSelector } from "react-redux";
import { Xr } from "../figma_app/27355";
import { useCurrentFileKey } from "../figma_app/516028";
import { ME } from "../figma_app/880974";
export function $$l0() {
  let e = useCurrentFileKey();
  let t = useSelector(e => e.fileVersion);
  let i = Xr(ME);
  return useCallback((r, n) => i({
    fileKey: e,
    fileVersion: t,
    template: r
  }, n), [e, t, i]);
}
export const g = $$l0;