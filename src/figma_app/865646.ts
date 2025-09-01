import { createElement } from "react";
import { Z } from "../905/606826";
import { a as _$$a } from "../905/192547";
import { t } from "../905/303541";
import { Qh } from "../905/469533";
import { C_ } from "../905/345933";
export function $$d0(e) {
  return {
    light: t("fullscreen_actions.theme.light"),
    dark: t("fullscreen_actions.theme.dark"),
    system: t("fullscreen_actions.theme.system_theme")
  }[e];
}
export function $$c1(e, t) {
  e(Qh({
    theme: t,
    userInitiated: !0
  }));
}
export function $$u3() {
  return C_.map(e => ({
    value: e,
    displayText: $$d0(e)
  }));
}
export function $$p2(e) {
  return [{
    name: "theme-light-mode",
    checked: "light" === e,
    displayForQuickCommand: "theme-light-mode-quick-command",
    hideCheckForQuickCommand: !0,
    callback: (e, t, r) => {
      r(Qh({
        theme: "light",
        userInitiated: !0
      }));
    },
    searchSynonyms: ["theme", "dark mode"],
    iconType: createElement(Z),
    hideForQuickCommand: "light" === e
  }, {
    name: "theme-dark-mode",
    checked: "dark" === e,
    displayForQuickCommand: "theme-dark-mode-quick-command",
    hideCheckForQuickCommand: !0,
    callback: (e, t, r) => {
      r(Qh({
        theme: "dark",
        userInitiated: !0
      }));
    },
    searchSynonyms: ["theme", "light mode"],
    iconType: createElement(_$$a),
    hideForQuickCommand: "dark" === e
  }, {
    name: "theme-system",
    checked: "system" === e,
    displayForQuickCommand: "theme-system-quick-command",
    hideCheckForQuickCommand: !0,
    callback: (e, t, r) => {
      r(Qh({
        theme: "system",
        userInitiated: !0
      }));
    }
  }];
}
export const $I = $$d0;
export const T$ = $$c1;
export const YA = $$p2;
export const w3 = $$u3;