import { getFeatureFlags } from "../905/601108";
import { BrowserInfo, isMobileUA } from "../figma_app/778880";
export function $$a0(e) {
  return e?.nodeType === 1 && function (e) {
    for (; e;) {
      if (e.classList && (e.classList.contains("js-fullscreen-prevent-event-capture") || e.getAttribute("data-fullscreen-prevent-event-capture"))) return !0;
      e = e.parentElement;
    }
    return !1;
  }(e);
}
export function $$s2(e = !1) {
  return (!!BrowserInfo.isIpadNative || !!BrowserInfo.ios && !!BrowserInfo.isInNativeApp) && !!window.FigmaMobile.shouldHandleMultiTouchInFullscreen || !!BrowserInfo.isMeetDevice || !!BrowserInfo.isIpad || !!e && !!getFeatureFlags().ce_il_pressure_sensitivity && !isMobileUA;
}
export function $$o1(e) {
  e.stopPropagation();
}
export function $$l4(e) {
  e.preventDefault();
}
export function $$d3(e) {
  $$l4(e);
  $$o1(e);
}
export const UE = $$a0;
export const dG = $$o1;
export const ft = $$s2;
export const jo = $$d3;
export const wo = $$l4;