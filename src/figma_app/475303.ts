import { aTn, glU } from "../figma_app/763686";
import { localStorageRef } from "../905/657224";
import { t } from "../905/303541";
import { FU } from "../905/26824";
import { uE } from "../figma_app/314264";
import { Y5 } from "../figma_app/455680";
import { debugState } from "../905/407919";
import { P } from "../905/724705";
import { XHR } from "../905/910117";
let p = "keyboardLayoutPreference";
let $$_4 = "keyboardLayoutPreference";
export function $$h0(e) {
  switch (e) {
    case aTn.US_QWERTY:
      return t("keyboard_settings.us_qwerty");
    case aTn.DVORAK:
      return t("keyboard_settings.us_dvorak");
    case aTn.GERMAN:
      return t("keyboard_settings.german_qwertz");
    case aTn.FRENCH_AZERTY:
      return t("keyboard_settings.french_azerty");
    case aTn.HIRAGANA_KANA:
      return t("keyboard_settings.japanese_kana");
    case aTn.UK_MAC:
      return t("keyboard_settings.uk_mac");
    case aTn.UK_PC:
      return t("keyboard_settings.uk_pc");
    case aTn.SWEDISH:
      return t("keyboard_settings.swedish");
    case aTn.DANISH:
      return t("keyboard_settings.danish");
    case aTn.NORWEGIAN:
      return t("keyboard_settings.norwegian");
    case aTn.ITALIAN:
      return t("keyboard_settings.italian");
    case aTn.SPANISH:
      return t("keyboard_settings.spanish");
    case aTn.FINNISH:
      return t("keyboard_settings.finnish");
    case aTn.SPANISH_LATAM:
      return t("keyboard_settings.spanish_latin_america");
    case aTn.CHINESE:
      return t("keyboard_settings.chinese");
    case aTn.PORTUGUESE:
      return t("keyboard_settings.portuguese");
    case aTn.KOREAN:
      return t("keyboard_settings.korean");
    case aTn.UNKNOWN:
      return t("keyboard_settings.default_unknown");
  }
}
let m = new Map(Object.entries(aTn).map(([e, t]) => [e, t]));
let $$g5 = new Map(Object.entries(aTn).map(([e, t]) => [t, e]));
function f(e) {
  let [t] = e.split(":");
  let r = m.get(t);
  return t && r ? {
    layout: r
  } : {
    layout: aTn.UNKNOWN
  };
}
export function $$E1(e) {
  try {
    let t = debugState.getState();
    uE("keyboard_layout_preference", t, {
      layout: aTn[e.layout],
      eventName: e.eventName,
      detectedLayout: e.detectedLayout,
      detectedLayoutStr: e.detectedLayoutStr
    });
  } catch (e) {}
}
export function $$y6({
  layout: e
}) {
  if (!localStorageRef) return;
  let t = aTn[e];
  localStorageRef.setItem(p, t);
  new P().sendToOtherTabs($$_4, t);
  $$E1({
    layout: e,
    eventName: "user_manual_change"
  });
  glU.reloadShortcuts(e);
  XHR.put("/api/user", {
    keyboard_preference: aTn[e],
    keyboard_preference_method: "manual"
  });
}
export function $$b2(e) {
  if (!localStorageRef) return;
  localStorageRef.setItem(p, e);
  let {
    layout
  } = f(e);
  Y5 && Y5.isReady() && glU.reloadShortcuts(layout);
}
export function $$T7() {
  return function () {
    if (localStorageRef) {
      let e = localStorageRef.getItem(p);
      if (null != e) return f(e);
    }
    if (!debugState) return {
      layout: aTn.UNKNOWN
    };
    let e = debugState.getState().user?.keyboard_layout;
    let t = m.get(e);
    if (!e || !t) return {
      layout: aTn.UNKNOWN
    };
    let r = e ? t : aTn.UNKNOWN;
    $$b2(aTn[r]);
    return {
      layout: r
    };
  }().layout;
}
export function $$I3() {
  return Object.keys(aTn);
}
export function $$S8() {
  return 0 === $$I3().length ? [] : [{
    name: "keyboard-layout-menu-option",
    callback: (e, t, r) => {
      r(FU({
        tab: "layout"
      }));
      Y5.triggerAction("toggle-keyboard-shortcuts");
    }
  }];
}
export const As = $$h0;
export const CZ = $$E1;
export const Cg = $$b2;
export const GP = $$I3;
export const Ug = $$_4;
export const dZ = $$g5;
export const rd = $$y6;
export const v7 = $$T7;
export const xt = $$S8;