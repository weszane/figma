import { createContext } from "react";
import { nQ7 } from "../figma_app/763686";
import { x4 } from "../905/657224";
import { UE, ql } from "../figma_app/191804";
import { Lg } from "../figma_app/257275";
import { Wl } from "../figma_app/88239";
import { nT } from "../figma_app/53721";
import { Jh } from "../figma_app/552876";
import { Vj } from "../905/561485";
"undefined" != typeof mpGlobal || Lg() || console.warn("mpGlobal not defined!");
let $$p1 = "undefined" != typeof mpGlobal ? mpGlobal.DEBUG_THEME_PREFERENCE_KEY : "test-theme-preference";
let $$m5 = "undefined" != typeof mpGlobal ? mpGlobal.DARK_THEME_MEDIA_QUERY : window.matchMedia("(prefers-color-scheme: dark)");
export function $$h0() {
  return "undefined" != typeof mpGlobal ? mpGlobal.themePreferenceFromLocalStorage(x4) : null;
}
export let $$g11 = "global-debug-enhanced-contrast-preference";
export function $$f2() {
  if (x4) {
    let e = x4?.getItem($$g11);
    return e?.toLowerCase() === "true";
  }
  return !1;
}
export function $$_4(e, t) {
  return e ? "fullscreen" === e.view && e.editorType === nT.Whiteboard ? "whiteboard" : "fullscreen" === e.view && (e.editorType === nT.DevHandoff || Wl(e)) ? "dev-handoff" : "prototype" === e.view && e.file?.editor_type === "slides" || "fullscreen" === e.view && e.editorType === nT.Slides && t !== nQ7.DESIGN ? "piper" : "fullscreen" === e.view && e.editorType === nT.Cooper && t !== nQ7.DESIGN ? "cooper" : "fullscreen" === e.view && e.editorType === nT.Illustration ? "sulli" : Vj(e) || Jh(e) ? "seascape" : "design" : "design";
}
export function $$A3(e) {
  return "undefined" != typeof mpGlobal ? mpGlobal.getVisibleTheme(e) : "light";
}
export function $$y10(e) {
  return "undefined" != typeof mpGlobal ? mpGlobal.getBackgroundColorForTheme(e) : "1E1E1E";
}
export function $$b8(e) {
  return e?.view === "fullscreen" && e.editorType === nT.Whiteboard;
}
let $$v7 = new Proxy({}, {
  get: () => null
});
let $$I9 = createContext($$v7);
export function $$E6(e, t, i, n = "colorBg") {
  let r = (e && e[n]) ?? UE;
  return ql(r, t, i);
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