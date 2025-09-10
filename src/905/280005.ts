import { I } from "src/905/850671";
import { BrowserInfo } from "src/figma_app/778880";
import { sendUrlToParent } from "src/figma_app/564528";
export function $$s0(e, t) {
  return !!(sendUrlToParent(e) || I(e)) || !!t && !!BrowserInfo.isMeetDevice && (t.preventDefault(), !0);
}
export const e = $$s0;
