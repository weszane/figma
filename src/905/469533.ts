import { Qf } from "../905/266289";
import { glU } from "../figma_app/763686";
import { x4 } from "../905/657224";
import { NC } from "../905/17179";
import { sx } from "../905/449184";
import { eD } from "../figma_app/876459";
import { P } from "../905/724705";
import { Y5 } from "../figma_app/455680";
import { n4, i_, ON, yt } from "../905/187165";
import { D6, Nx } from "../905/345933";
import { nF } from "../905/350402";
let h = null;
function g(e, t) {
  let i = "system" === e;
  i && !h ? (h = () => n4.matches ? t("dark") : t("light"), n4.addListener(h)) : !i && h && (n4.removeListener(h), h = null);
}
let $$f6 = NC("THEME_UPDATE_THEME_PREFERENCE_FROM_IPC");
let $$_5 = nF((e, t) => {
  let i = e.getState().selectedView;
  g(t.theme, t => e.dispatch(I({
    theme: t
  })));
  "fullscreen" === i.view && E(t.theme);
  e.dispatch($$f6(t));
});
let $$A7 = NC("THEME_SET_USER_THEME_PREFERENCE");
let $$y2 = nF((e, t) => {
  let i = e.getState().theme;
  if (t.theme !== i.themePreference) {
    let n = e.getState().selectedView;
    g(t.theme, t => e.dispatch(I({
      theme: i_(t)
    })));
    t.userInitiated && sx("theme_preference_updated", {
      from: i.themePreference,
      theme: t.theme
    });
    x4.setItem(ON, t.theme || "");
    new P().sendToOtherTabs(D6, t.theme);
    eD?.setThemePreference(t.theme);
    "fullscreen" === n.view && Y5.isReady() && glU.setEditorTheme(i_(t.theme) || "");
  }
  e.dispatch($$A7(t));
});
let $$b3 = nF(e => {
  g(e.getState().theme.themePreference, t => e.dispatch(I({
    theme: i_(t)
  })));
});
let $$v8 = NC("THEME_SET_USER_THEME_DIRECTLY");
let I = nF((e, t) => {
  e.getState().theme.visibleTheme !== t.theme && "fullscreen" === e.getState().selectedView.view && E(t.theme);
  e.dispatch($$v8(t));
});
function E(e) {
  Y5.isReady() ? glU.setEditorTheme(i_(e) || "") : Y5.onReady().then(() => {
    setTimeout(() => {
      glU.setEditorTheme(i_(e) || "");
    }, 1e3);
  });
}
let x = NC("THEME_UPDATE_ENHANCED_CONTRAST_PREFERENCE_FROM_IPC");
let $$S0 = nF((e, t) => {
  Qf(t.enhancedContrast);
  e.dispatch(x(t));
});
let $$w1 = NC("THEME_SET_ENHANCED_CONTRAST");
let $$C4 = nF((e, t) => {
  let i = e.getState().theme;
  t.enhancedContrast !== i.enhancedContrast && (t.userInitiated && sx("enhanced_contrast_preference_updated", {
    from: i.enhancedContrast,
    enhancedContrast: t.enhancedContrast
  }), Qf(t.enhancedContrast), x4.setItem(yt, t.enhancedContrast ? "true" : "false"), new P().sendToOtherTabs(Nx, t.enhancedContrast), eD?.setEnhancedContrast(t.enhancedContrast));
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