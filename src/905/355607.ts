import { BrowserInfo } from "../figma_app/778880";
import { F4 } from "../figma_app/546509";
export function $$a0() {
  let e = F4();
  return e?.shouldOptimizeForIpadApp || BrowserInfo.isIpad;
}
export const $ = $$a0;
