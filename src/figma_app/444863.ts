import { BrowserInfo } from "../figma_app/778880";
import { aV } from "../figma_app/722362";
import { selectCurrentUser } from "../905/372672";
export function $$s0() {
  let e = aV();
  let t = selectCurrentUser();
  return !e && !BrowserInfo.isIpadNative && !!t;
}
export const C = $$s0;