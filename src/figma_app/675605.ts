import { M } from "../905/637515";
import { Uc, iZ } from "../figma_app/968444";
import { getInitialOptions } from "../figma_app/169182";
import { pP, xC, IL, No, eb, NF, cy, QI } from "../905/392533";
import { Dz } from "../figma_app/847915";
import { of } from "../figma_app/291792";
import { b$ } from "../figma_app/805925";
import { Wy } from "../figma_app/952446";
import { nt } from "../905/226610";
import { xm } from "../figma_app/826288";
import { browserCapabilities } from "../905/409121";
export let $$n0;
export function $$h2(e) {
  let t = [];
  e.modifierMask & pP && t.push("Control");
  e.modifierMask & xC && t.push("Alt");
  e.modifierMask & IL && t.push("Shift");
  e.modifierMask & No && t.push("Meta");
  e.modifierMask & eb && t.push("RightAlt");
  e.key !== NF && t.push(e.key);
  return t.join("+");
}
class m {
  constructor(e) {
    this.getFullscreenMenuItem = e => {
      let t = this.store?.getState();
      if (!t) {
        console.warn("[CustomKeyboardShortcuts] no state found");
        return;
      }
      if ("fullscreen" !== t.selectedView.view) {
        console.warn("[CustomKeyboardShortcuts] attempted to dispatch an action outside of fullscreen");
        return;
      }
      let n = b$(t);
      let i = !!getInitialOptions().campfire_model_enabled;
      let s = of(t, {
        isRecovery: !1,
        isUserInLimitedSpace: !1,
        fullscreenMemoryWarningLevel: Wy.SAFE,
        unreadCommentCount: void 0,
        pluginAndWidgetMenuArgs: n,
        isPublishingModalDisabled: !1,
        isBillingRemodelEnabled: i
      });
      let o = M({
        isReadOnly: t.mirror.appModel.isReadOnly,
        extensionMenuProps: n,
        includeDisabled: !1
      });
      return new xm(t.mirror.appModel, t.selectedView, [...s, ...o]).getItem(t.mirror.appModel, e);
    };
    this.getCallback = e => {
      let t = this.getFullscreenMenuItem(e);
      return t && t.callback && this.store?.dispatch ? (console.log("[CustomKeyboardShortcut] found action and running callback", {
        menuItem: t,
        itemDisplayText: e
      }), () => t.callback(Dz(t), t.args, this.store.dispatch)) : (console.warn("[CustomKeyboardShortcut] could not find item for given action", {
        menuItem: t,
        itemDisplayText: e
      }), null);
    };
    this.store = e.store;
  }
  getCustomKeyboardShortcuts() {
    if (!this.store || !nt.customKeyboardShortcuts.getValue()) return [];
    let e = Uc();
    let t = [];
    Object.entries(e).forEach(([e, {
      type: r,
      action: n
    }]) => {
      let a;
      try {
        a = this.getKeyboardShortcutFromText(e, null);
      } catch (e) {
        a = null;
      }
      let s = iZ.get(r);
      if (null === a || void 0 === s) {
        console.warn("[CustomKeyboardShortcuts] unable to parse shortcut or shortcutActionType", {
          actionType: s,
          text: e
        });
        return;
      }
      t.push({
        keyboardShortcut: a,
        type: s,
        action: n
      });
    });
    console.log("[CustomKeyboardShortcuts] received request to fetch custom keyboard shortcuts", {
      shortcutsStorage: e,
      shortcuts: t
    });
    return t;
  }
  dispatchAction(e) {
    console.log("[CustomKeyboardShortcuts] received request to dispatch", {
      action: e
    });
    let t = this.getCallback(e);
    return !!t && (t(), !0);
  }
  getDisplayStringFromKey(e) {
    let t = browserCapabilities.isApple();
    switch (e.toUpperCase()) {
      case "'":
        return "\u2032";
      case "-":
        return "\u2013";
      case "ESCAPE":
        return "\u238B";
      case "ENTER":
        return "\u21A9";
      case "RETURN":
        return "\u23CE";
      case "TAB":
        return "\u21E5";
      case "LEFT":
        return "\u2190";
      case "RIGHT":
        return "\u2192";
      case "UP":
        return "\u2191";
      case "DOWN":
        return "\u2193";
      case "DELETE":
        return "\u2326";
      case "BACKSPACE":
        return "\u232B";
      case "CAPS LOCK":
        return "\u21EA";
      case "CONTROL":
        return t ? "\u2303" : "Ctrl";
      case "ALT":
      case "RIGHTALT":
        return t ? "\u2325" : "Alt";
      case "SHIFT":
        return t ? "\u21E7" : "Shift";
      case "META":
        return t ? "\u2318" : browserCapabilities.isWindows() ? "Win" : "Meta";
      default:
        return e;
    }
  }
  getKeyboardShortcutFromText(e, t) {
    let r = NF;
    let n = 0;
    let i = e.split("+");
    for (let e of (i.length > 0 && "" === i[i.length - 1] && (i.pop(), i.length > 0 && (i[i.length - 1] = i[i.length - 1] + "+")), i)) {
      if ("" === e) continue;
      let t = cy[e.toUpperCase()];
      if (e === NF || t && (n & t) > 0) return null;
      if (t && (t & QI) != 0) n |= t;else {
        if (r !== NF) return null;
        r = e;
      }
    }
    return r === NF && 0 === n ? null : {
      key: r,
      modifierMask: n,
      originalText: e,
      displayName: t
    };
  }
  getTextFromKeyboardShortcut(e) {
    let t = browserCapabilities.isApple();
    let r = (e.displayName ? this.getKeyboardShortcutFromText(e.displayName, null) : null) ?? e;
    let n = [];
    r.modifierMask & pP && n.push(this.getDisplayStringFromKey("Control"));
    r.modifierMask & xC && n.push(this.getDisplayStringFromKey("Alt"));
    r.modifierMask & IL && n.push(this.getDisplayStringFromKey("Shift"));
    r.modifierMask & No && n.push(this.getDisplayStringFromKey("Meta"));
    r.modifierMask & eb && n.push(this.getDisplayStringFromKey("RightAlt"));
    r.key !== NF && n.push(this.getDisplayStringFromKey(r.key));
    return t ? n.join("") : n.join("+");
  }
}
export function $$g1(e) {
  $$n0 = new m({
    store: e
  });
}
export const Gm = $$n0;
export const _p = $$g1;
export const t4 = $$h2;