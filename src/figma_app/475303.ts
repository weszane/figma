import { KeyboardLayout, Fullscreen } from "../figma_app/763686";
import { localStorageRef } from "../905/657224";
import { getI18nString } from "../905/303541";
import { FU } from "../905/26824";
import { trackUserEvent } from "../figma_app/314264";
import { fullscreenValue } from "../figma_app/455680";
import { debugState } from "../905/407919";
import { IpcStorageHandler } from "../905/724705";
import { XHR } from "../905/910117";
let p = "keyboardLayoutPreference";
let $$_4 = "keyboardLayoutPreference";
export function $$h0(e) {
  switch (e) {
    case KeyboardLayout.US_QWERTY:
      return getI18nString("keyboard_settings.us_qwerty");
    case KeyboardLayout.DVORAK:
      return getI18nString("keyboard_settings.us_dvorak");
    case KeyboardLayout.GERMAN:
      return getI18nString("keyboard_settings.german_qwertz");
    case KeyboardLayout.FRENCH_AZERTY:
      return getI18nString("keyboard_settings.french_azerty");
    case KeyboardLayout.HIRAGANA_KANA:
      return getI18nString("keyboard_settings.japanese_kana");
    case KeyboardLayout.UK_MAC:
      return getI18nString("keyboard_settings.uk_mac");
    case KeyboardLayout.UK_PC:
      return getI18nString("keyboard_settings.uk_pc");
    case KeyboardLayout.SWEDISH:
      return getI18nString("keyboard_settings.swedish");
    case KeyboardLayout.DANISH:
      return getI18nString("keyboard_settings.danish");
    case KeyboardLayout.NORWEGIAN:
      return getI18nString("keyboard_settings.norwegian");
    case KeyboardLayout.ITALIAN:
      return getI18nString("keyboard_settings.italian");
    case KeyboardLayout.SPANISH:
      return getI18nString("keyboard_settings.spanish");
    case KeyboardLayout.FINNISH:
      return getI18nString("keyboard_settings.finnish");
    case KeyboardLayout.SPANISH_LATAM:
      return getI18nString("keyboard_settings.spanish_latin_america");
    case KeyboardLayout.CHINESE:
      return getI18nString("keyboard_settings.chinese");
    case KeyboardLayout.PORTUGUESE:
      return getI18nString("keyboard_settings.portuguese");
    case KeyboardLayout.KOREAN:
      return getI18nString("keyboard_settings.korean");
    case KeyboardLayout.UNKNOWN:
      return getI18nString("keyboard_settings.default_unknown");
  }
}
let m = new Map(Object.entries(KeyboardLayout).map(([e, t]) => [e, t]));
let $$g5 = new Map(Object.entries(KeyboardLayout).map(([e, t]) => [t, e]));
function f(e) {
  let [t] = e.split(":");
  let r = m.get(t);
  return t && r ? {
    layout: r
  } : {
    layout: KeyboardLayout.UNKNOWN
  };
}
export function $$E1(e) {
  try {
    let t = debugState.getState();
    trackUserEvent("keyboard_layout_preference", t, {
      layout: KeyboardLayout[e.layout],
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
  let t = KeyboardLayout[e];
  localStorageRef.setItem(p, t);
  new IpcStorageHandler().sendToOtherTabs($$_4, t);
  $$E1({
    layout: e,
    eventName: "user_manual_change"
  });
  Fullscreen.reloadShortcuts(e);
  XHR.put("/api/user", {
    keyboard_preference: KeyboardLayout[e],
    keyboard_preference_method: "manual"
  });
}
export function $$b2(e) {
  if (!localStorageRef) return;
  localStorageRef.setItem(p, e);
  let {
    layout
  } = f(e);
  fullscreenValue && fullscreenValue.isReady() && Fullscreen.reloadShortcuts(layout);
}
export function $$T7() {
  return function () {
    if (localStorageRef) {
      let e = localStorageRef.getItem(p);
      if (null != e) return f(e);
    }
    if (!debugState) return {
      layout: KeyboardLayout.UNKNOWN
    };
    let e = debugState.getState().user?.keyboard_layout;
    let t = m.get(e);
    if (!e || !t) return {
      layout: KeyboardLayout.UNKNOWN
    };
    let r = e ? t : KeyboardLayout.UNKNOWN;
    $$b2(KeyboardLayout[r]);
    return {
      layout: r
    };
  }().layout;
}
export function $$I3() {
  return Object.keys(KeyboardLayout);
}
export function $$S8() {
  return 0 === $$I3().length ? [] : [{
    name: "keyboard-layout-menu-option",
    callback: (e, t, r) => {
      r(FU({
        tab: "layout"
      }));
      fullscreenValue.triggerAction("toggle-keyboard-shortcuts");
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