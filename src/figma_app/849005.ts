import { useIsProgressBarHiddenOrLocked } from "../figma_app/722362";
import { useIsCanvasEditDisabled } from "../905/595131";
import { vt } from "../figma_app/231614";
import { C } from "../figma_app/444863";
export function $$o0() {
  let e = useIsProgressBarHiddenOrLocked();
  let t = C();
  let r = vt();
  let o = useIsCanvasEditDisabled();
  return !e && t && o && !r;
}
export const z = $$o0;