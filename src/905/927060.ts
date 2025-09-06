import { BrowserInfo } from "../figma_app/778880";
export function $$r0(e) {
  return BrowserInfo.mac && "ar-SY" === e ? "ars" : BrowserInfo.mac && "en-US" === e ? "en" : BrowserInfo.mac ? e.replace("-", "_") : e;
}
let a = ["your", "you're", "lose", "were", "we're"];
export function $$s1(e, t) {
  return BrowserInfo.mac ? t.filter(t => !a.includes(e.substring(t.start, t.end).toLowerCase())) : t;
}
export const l = $$r0;
export const r = $$s1;