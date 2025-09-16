import { NoneColor } from "../figma_app/763686";
import { BrowserInfo } from "../figma_app/778880";
import { getI18nString } from "../905/303541";
import { initAction } from "../905/929976";
import { p5 } from "../figma_app/91703";
import { defaultAppState } from "../figma_app/198712";
export function $$d7(e = {
  ...defaultAppState
}, t) {
  return initAction.matches(t) ? defaultAppState : (p5.matches(t) && t.payload.appModelChanges && -1 === (e = {
    ...e,
    ...t.payload.appModelChanges,
    isInitialized: !0
  }).currentSelectedGradientStop.index && (e.currentSelectedGradientStop = {
    index: 0,
    type: NoneColor.COLOR
  }), e);
}
export let $$c9 = "fullscreen-menu-dropdown";
export function $$u4(e) {
  return e?.type === $$c9;
}
export let $$p0 = "page-picker-dropdown";
export function $$_1(e) {
  return e?.type === $$p0;
}
let $$h8 = "quick-actions-dropdown";
let m = Object.create(null);
export function $$g3(e) {
  let t = m[e];
  t || (t = m[e] = `actionEnabled__${e}`);
  return t;
}
export function $$f5(e, t) {
  return !!e[$$g3(t)];
}
export function $$E10(e) {
  return e.startsWith("actionEnabled__");
}
export function $$y6(e, t) {
  let r = "\u{1F310}";
  switch (t) {
    case "set-tool-bend":
      return BrowserInfo.mac ? "\u2318" : "Ctrl";
    case "set-tool-vector-lasso":
      return "Q";
    case "stack-reorder-left":
    case "stack-counter-align-left":
      return "\u2190";
    case "stack-reorder-left-end":
      return "\u2325\u2190";
    case "stack-reorder-right":
    case "stack-counter-align-right":
      return "\u2192";
    case "stack-reorder-right-end":
      return "\u2325\u2192";
    case "stack-reorder-up":
    case "stack-counter-align-top":
      return "\u2191";
    case "stack-reorder-up-end":
    case "stack-reorder-down-end":
      return "\u2325\u2191";
    case "stack-reorder-down":
    case "stack-counter-align-bottom":
      return "\u2193";
    case "set-tool-default-desc-figjam":
    case "set-tool-default-desc-figma":
      return "V";
    case "set-tool-marker":
      return "M";
    case "set-tool-stamp":
    case "set-tool-code-component":
      return "E";
    case "set-tool-type":
      return "T";
    case "set-tool-connector-elbowed":
      return "X";
    case "toggle-publish":
      return BrowserInfo.mac ? "\u23252" : "Alt+2";
    case "toggle-inline-preview":
    case "toggle-inline-html-preview":
      return "\u21E7" + getI18nString("whiteboard.keyboard_shortcuts.key_label.space");
    case "set-tool-sites-responsive-set":
      return "W";
    case "deselect-all":
      return "\u238B";
    case "multi-edit-text":
      return "Enter";
    case "page-next":
      if (BrowserInfo.mac) return r + "\u2193";
      break;
    case "page-previous":
      if (BrowserInfo.mac) return r + "\u2191";
  }
  if (e[t]) {
    let r = e[t];
    if (r && r.length >= 1) return r[0].text;
  }
  return "";
}
export function $$b2(e) {
  return e && e.currentPage ? e.currentPage : "0:1";
}
export const G = $$p0;
export const IS = $$_1;
export const Nf = $$b2;
export const Rn = $$g3;
export const TY = $$u4;
export const Yh = $$f5;
export const c1 = $$y6;
export const fj = $$d7;
export const jv = $$h8;
export const pi = $$c9;
export const vg = $$E10;