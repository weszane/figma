import { createElement } from "react";
import { filterNotNullish } from "../figma_app/656233";
import { debug } from "../figma_app/465776";
import { GI, Si } from "../figma_app/387100";
import { getFeatureFlags } from "../905/601108";
import { hasDesktopAPI } from "../figma_app/876459";
import { getIsMac, getIsLinux, getIsWindows, isIpadDevice } from "../figma_app/778880";
import { isInteractionPathCheck } from "../figma_app/897289";
import { _o, k$, gN, id, Dz, TV, WJ, f4 } from "../figma_app/847915";
import { formatI18nMessage } from "../905/482208";
import { VU } from "../905/625959";
import { fullscreenValue } from "../figma_app/455680";
import { ck } from "../905/87821";
import { FEditorType } from "../figma_app/53721";
import { Yh, c1 } from "../figma_app/357047";
import { K3 } from "../figma_app/678300";
import { isFullscreenDevHandoffView } from "../905/782918";
import { Bf } from "../figma_app/249941";
export function $$v0(e, t) {
  if (!e || !t.isSearching && _o(e) && e.searchOnly) return !1;
  if (e.flags) {
    if (e.flags.indexOf("!ship") > -1) return !1;
    if (e.flags.indexOf("!desktop") > -1) {
      if (hasDesktopAPI()) return !1;
    } else if (e.flags.indexOf("desktop") > -1 && !hasDesktopAPI()) return !1;
    if (e.flags.indexOf("recovery") > -1) {
      if (!t.selectedView.isRecoveryMode) return !1;
    } else if (e.flags.indexOf("!recovery") > -1 && t.selectedView.isRecoveryMode) return !1;
    let i = !t.isReadOnly && !isFullscreenDevHandoffView(t.selectedView) || isInteractionPathCheck();
    if (e.flags.indexOf("!edit") > -1) {
      if (i) return !1;
    } else if (e.flags.indexOf("edit") > -1 && !i) return !1;
    if (e.flags.indexOf("!dev_handoff") > -1 && t.selectedView.editorType === FEditorType.DevHandoff || e.flags.indexOf("!limited_dev_mode") > -1 && t.isLimitedDevMode || e.flags.indexOf("!slides") > -1 && t.selectedView.editorType === FEditorType.Slides || e.flags.indexOf("!sites") > -1 && t.selectedView.editorType === FEditorType.Sites || e.flags.indexOf("!figmake") > -1 && t.selectedView.editorType === FEditorType.Figmake || e.flags.indexOf("!cooper") > -1 && t.selectedView.editorType === FEditorType.Cooper || e.flags.indexOf("!illustration") > -1 && t.selectedView.editorType === FEditorType.Illustration || e.flags.indexOf("view_restricted") > -1 && fullscreenValue.isCopyExportRestricted()) return !1;
    let n = e.flags.includes("design");
    let r = e.flags.includes("whiteboard");
    let a = e.flags.includes("dev_handoff");
    let s = e.flags.includes("slides");
    let o = e.flags.includes("sites");
    let d = e.flags.includes("cooper");
    let u = e.flags.includes("figmake");
    let p = e.flags.includes("illustration");
    if (n || r || a || p || s || o || d || u) switch (t.selectedView.editorType) {
      case FEditorType.Figmake:
        if (!u) return !1;
        break;
      case FEditorType.Sites:
        if (!o) return !1;
        break;
      case FEditorType.Illustration:
        if (!n && !p) return !1;
        break;
      case FEditorType.Design:
        if (!n) return !1;
        break;
      case FEditorType.Whiteboard:
        if (!r) return !1;
        break;
      case FEditorType.DevHandoff:
        if (!a) return !1;
        break;
      case FEditorType.Cooper:
        if (!d) return !1;
        break;
      case FEditorType.Slides:
        if (!s) return !1;
    }
    if (e.flags.indexOf("!desktop_os_menu") > -1 && t.isDesktopMenu || e.flags.indexOf("desktop_os_menu") > -1 && !t.isDesktopMenu) return !1;
    let m = ck();
    if (e.flags.indexOf("!integration") > -1 && m || e.flags.indexOf("integration") > -1 && !m || e.flags.indexOf("!variables_table") > -1 && "fullscreen" === t.selectedView.view && t.selectedView.showDevModeVariablesTable) return !1;
  }
  return !!(k$(e) || gN(e)) || !(null != e.platforms && !function (e) {
    for (let t of e) {
      if ("mac" === t && getIsMac() || "linux" === t && getIsLinux()) return !0;
      if ("windows" === t && getIsWindows()) return !0;
      if ("!ipad" === t && !isIpadDevice()) return !0;
    }
    return !1;
  }(e.platforms) || e.featureFlags && !e.featureFlags.every(e => getFeatureFlags()[e]) || e.notFeatureFlags && e.notFeatureFlags.some(e => getFeatureFlags()[e]));
}
export const UN = $$v0;
export const jv = function e(t, i) {
  return filterNotNullish(t.filter(e => $$v0(e, {
    isDesktopMenu: !1,
    isReadOnly: i.appModel.isReadOnly,
    isSearching: !!i.isSearching,
    selectedView: i.selectedView,
    isLimitedDevMode: i.isLimitedDevMode
  })).map(t => function (t, i) {
    let r;
    if (!t) return null;
    if (k$(t)) {
      let e = {
        ...t
      };
      e.disabled = !1;
      e.separator = !0;
      return e;
    }
    if (gN(t)) return {
      displayText: t.name,
      displayTextClassName: t.displayTextClassName,
      disabled: !0
    };
    if (id(t)) return {
      ...t
    };
    let o = _o(t) && t.disabled || !t.name && !(_o(t) && Yh(i.appModel, t.action));
    if (!(_o(t) && t.disabledAndForceVisible) && o && i.removeDisabledItems) return null;
    if (_o(t) && t.nodeId) return function (e, t, i) {
      if (!e) return null;
      debug(null != i.sceneGraph && null != i.sceneGraphSelection, "You should be providing a scene graph and a selection if you are rendering a menu item for a particular layer");
      let r = i.sceneGraph.get(t);
      if (!r) return null;
      let o = K3(i.sceneGraphSelection, t);
      let l = e => "INSTANCE" === e.type || "SYMBOL" === e.type || GI(e);
      let d = l(r);
      Si(i.sceneGraph, t, e => {
        if (d = d || l(e)) return "stop";
      });
      let c = {
        displayText: r.name,
        shortcut: "",
        disabled: !1,
        isChecked: o,
        isPurple: d,
        isLocked: r.locked && !o,
        alwaysShowCheckMarkOffset: i.alwaysShowCheckMarkOffset,
        recordingKey: e.action,
        action: e.action,
        name: e.name,
        args: e.args,
        source: e.source,
        callback: e.callback,
        onMouseEnter: e.onMouseEnter,
        onMouseExit: e.onMouseExit
      };
      c.icon = createElement(Bf, {
        guid: r.guid,
        isMenuIcon: !0,
        isMenuIconPurple: c.isPurple
      }, null);
      return c;
    }(t, t.nodeId, i);
    let l = {
      ...t
    };
    let d = Dz(t);
    l.displayText = (TV(t) || _o(t)) && t.displayText || r || formatI18nMessage(d, t.args);
    _o(t) && t.shortcutText ? l.shortcut = t.shortcutText : l.shortcut = c1(i.appModel.keyboardShortcuts, d);
    l.disabled = o;
    l.visuallyDisabledWithSelection = _o(t) ? t.visuallyDisabledWithSelection : void 0;
    l.rightText = _o(t) ? t.rightText : void 0;
    l.rightIcon = _o(t) && t.rightIcon ? t.rightIcon : void 0;
    l.isChecked = _o(t) && WJ(i.appModel, t);
    l.alwaysShowCheckMarkOffset = i.alwaysShowCheckMarkOffset ?? ("alwaysShowCheckMarkOffset" in t ? t.alwaysShowCheckMarkOffset : void 0);
    l["data-onboarding-key"] = _o(t) ? t["data-onboarding-key"] : void 0;
    l.source = _o(t) ? t.source : void 0;
    TV(t) ? (t.children ? l.children = e(t.children, i) : t.childDropdown && (l.children = t.childDropdown.items), l.showDotDotDotButton = t.showDotDotDotButton, l.displayTextClassName = t.displayTextClassName, l.recordingKey = t.childDropdown && t.childDropdown.recordingKey || t.name) : l.recordingKey = t.recordingKey || t.action || t.name;
    _o(t) && t.inputProperty && t.action && (l.input = {
      value: f4(i.appModel, t.inputProperty),
      width: t.inputWidth,
      onChange: e => {
        void 0 !== e && VU.get(t.action, t.source ?? "menu", {
          inputValue: e
        })();
      }
    });
    return l;
  }(t, i)));
};