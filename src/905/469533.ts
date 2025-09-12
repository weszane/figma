import { Qf } from "../905/266289";
import { Fullscreen } from "../figma_app/763686";
import { localStorageRef } from "../905/657224";
import { createActionCreator } from "../905/73481";
import { trackEventAnalytics } from "../905/449184";
import { desktopAPIInstance } from "../figma_app/876459";
import { P } from "../905/724705";
import { fullscreenValue } from "../figma_app/455680";
import { n4, i_, ON, yt } from "../905/187165";
import { D6, Nx } from "../905/345933";
import { createOptimistThunk } from "../905/350402";
let h = null;
function g(e, t) {
  let i = "system" === e;
  i && !h ? (h = () => n4.matches ? t("dark") : t("light"), n4.addListener(h)) : !i && h && (n4.removeListener(h), h = null);
}
let $$f6 = createActionCreator("THEME_UPDATE_THEME_PREFERENCE_FROM_IPC");
let $$_5 = createOptimistThunk((e, t) => {
  let i = e.getState().selectedView;
  g(t.theme, t => e.dispatch(I({
    theme: t
  })));
  "fullscreen" === i.view && E(t.theme);
  e.dispatch($$f6(t));
});
let $$A7 = createActionCreator("THEME_SET_USER_THEME_PREFERENCE");
let $$y2 = createOptimistThunk((e, t) => {
  let i = e.getState().theme;
  if (t.theme !== i.themePreference) {
    let n = e.getState().selectedView;
    g(t.theme, t => e.dispatch(I({
      theme: i_(t)
    })));
    t.userInitiated && trackEventAnalytics("theme_preference_updated", {
      from: i.themePreference,
      theme: t.theme
    });
    localStorageRef.setItem(ON, t.theme || "");
    new P().sendToOtherTabs(D6, t.theme);
    desktopAPIInstance?.setThemePreference(t.theme);
    "fullscreen" === n.view && fullscreenValue.isReady() && Fullscreen.setEditorTheme(i_(t.theme) || "");
  }
  e.dispatch($$A7(t));
});
let $$b3 = createOptimistThunk(e => {
  g(e.getState().theme.themePreference, t => e.dispatch(I({
    theme: i_(t)
  })));
});
let $$v8 = createActionCreator("THEME_SET_USER_THEME_DIRECTLY");
let I = createOptimistThunk((e, t) => {
  e.getState().theme.visibleTheme !== t.theme && "fullscreen" === e.getState().selectedView.view && E(t.theme);
  e.dispatch($$v8(t));
});
function E(e) {
  fullscreenValue.isReady() ? Fullscreen.setEditorTheme(i_(e) || "") : fullscreenValue.onReady().then(() => {
    setTimeout(() => {
      Fullscreen.setEditorTheme(i_(e) || "");
    }, 1e3);
  });
}
let x = createActionCreator("THEME_UPDATE_ENHANCED_CONTRAST_PREFERENCE_FROM_IPC");
let $$S0 = createOptimistThunk((e, t) => {
  Qf(t.enhancedContrast);
  e.dispatch(x(t));
});
let $$w1 = createActionCreator("THEME_SET_ENHANCED_CONTRAST");
let $$C4 = createOptimistThunk((e, t) => {
  let i = e.getState().theme;
  t.enhancedContrast !== i.enhancedContrast && (t.userInitiated && trackEventAnalytics("enhanced_contrast_preference_updated", {
    from: i.enhancedContrast,
    enhancedContrast: t.enhancedContrast
  }), Qf(t.enhancedContrast), localStorageRef.setItem(yt, t.enhancedContrast ? "true" : "false"), new P().sendToOtherTabs(Nx, t.enhancedContrast), desktopAPIInstance?.setEnhancedContrast(t.enhancedContrast));
  e.dispatch($$w1(t));
});
export const FY = $$S0;
export const Kb = $$w1;
export const Qh = $$y2;
export const Xc = $$b3;
export const fK = $$C4;
export const id = $$_5;
export const lk = $$f6;
export const nq = $$A7;
export const wG = $$v8;