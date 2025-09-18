import { BrowserInfo } from "../figma_app/778880";
import { useIsProgressBarHiddenOrLocked } from "../figma_app/722362";
import { selectCurrentUser } from "../905/372672";
export function $$s0() {
  let e = useIsProgressBarHiddenOrLocked();
  let t = selectCurrentUser();
  return !e && !BrowserInfo.isIpadNative && !!t;
}
export const C = $$s0;