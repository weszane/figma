import { createContext } from "react";
import { SelfDesignType } from "../figma_app/763686";
import { localStorageRef } from "../905/657224";
import { whiteColor, getBorderStyle } from "../figma_app/191804";
import { getFalseValue } from "../figma_app/897289";
import { Wl } from "../figma_app/88239";
import { FEditorType } from "../figma_app/53721";
import { isFigmakeFullscreenView } from "../figma_app/552876";
import { isFullscreenSitesView } from "../905/561485";
"undefined" != typeof mpGlobal || getFalseValue() || console.warn("mpGlobal not defined!");
let $$p1 = "undefined" != typeof mpGlobal ? mpGlobal.DEBUG_THEME_PREFERENCE_KEY : "test-theme-preference";
let $$m5 = "undefined" != typeof mpGlobal ? mpGlobal.DARK_THEME_MEDIA_QUERY : window.matchMedia("(prefers-color-scheme: dark)");
export function $$h0() {
  return "undefined" != typeof mpGlobal ? mpGlobal.themePreferenceFromLocalStorage(localStorageRef) : null;
}
export let $$g11 = "global-debug-enhanced-contrast-preference";
export function $$f2() {
  if (localStorageRef) {
    let e = localStorageRef?.getItem($$g11);
    return e?.toLowerCase() === "true";
  }
  return !1;
}
export function $$_4(e, t) {
  return e ? "fullscreen" === e.view && e.editorType === FEditorType.Whiteboard ? "whiteboard" : "fullscreen" === e.view && (e.editorType === FEditorType.DevHandoff || Wl(e)) ? "dev-handoff" : "prototype" === e.view && e.file?.editor_type === "slides" || "fullscreen" === e.view && e.editorType === FEditorType.Slides && t !== SelfDesignType.DESIGN ? "piper" : "fullscreen" === e.view && e.editorType === FEditorType.Cooper && t !== SelfDesignType.DESIGN ? "cooper" : "fullscreen" === e.view && e.editorType === FEditorType.Illustration ? "sulli" : isFullscreenSitesView(e) || isFigmakeFullscreenView(e) ? "seascape" : "design" : "design";
}
export function $$A3(e) {
  return "undefined" != typeof mpGlobal ? mpGlobal.getVisibleTheme(e) : "light";
}
export function $$y10(e) {
  return "undefined" != typeof mpGlobal ? mpGlobal.getBackgroundColorForTheme(e) : "1E1E1E";
}
export function $$b8(e) {
  return e?.view === "fullscreen" && e.editorType === FEditorType.Whiteboard;
}
let $$v7 = new Proxy({}, {
  get: () => null
});
let $$I9 = createContext($$v7);
export function $$E6(e, t, i, n = "colorBg") {
  let r = (e && e[n]) ?? whiteColor;
  return getBorderStyle(r, t, i);
}
export const FB = $$h0;
export const ON = $$p1;
export const Q5 = $$f2;
export const i_ = $$A3;
export const ju = $$_4;
export const n4 = $$m5;
export const pw = $$E6;
export const rf = $$v7;
export const sT = $$b8;
export const uW = $$I9;
export const w2 = $$y10;
export const yt = $$g11;