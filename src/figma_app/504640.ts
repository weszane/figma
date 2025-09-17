import { DARK_THEME_MEDIA_QUERY } from "../905/658026";
import { getFeatureFlags } from "../905/601108";
import { isIframe } from "../905/508367";
import { getInitialOptions } from "../figma_app/169182";
export function $$o2() {
  return isIframe() && getInitialOptions().frame_context?.type === "embed";
}
export function $$l1() {
  return isIframe() && getInitialOptions().frame_context?.type === "integration";
}
export function $$d0() {
  if ($$o2() && getFeatureFlags().embedkit_v2) {
    var e;
    return "system" === (e = getInitialOptions().embed_theme) ? DARK_THEME_MEDIA_QUERY.matches ? "dark" : "light" : e;
  }
}
export const f3 = $$d0;
export const ih = $$l1;
export const l7 = $$o2;