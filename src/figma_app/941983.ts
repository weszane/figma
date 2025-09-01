import { lyf } from "../figma_app/763686";
import { x4 } from "../905/657224";
import { nT } from "../figma_app/53721";
function s(e) {
  return 1 === parseInt(e);
}
export let $$o0 = new class {
  constructor() {
    this.defaultShowSidebar = {
      [nT.Design]: !0,
      [nT.DevHandoff]: !0,
      [nT.Whiteboard]: !1,
      [nT.Slides]: !1,
      [nT.Sites]: !0,
      [nT.Cooper]: !0,
      [nT.Illustration]: !0,
      [nT.Figmake]: !0
    };
    this.defaultPropertiesPanelSplitPosition = {
      [nT.Design]: 241,
      [nT.DevHandoff]: 321,
      [nT.Whiteboard]: 241,
      [nT.Slides]: 241,
      [nT.Sites]: 241,
      [nT.Cooper]: 241,
      [nT.Illustration]: 241,
      [nT.Figmake]: 241
    };
    this.prefix = "";
    this.editorType = nT.Design;
    this.loggedIn = !0;
    this.showUi = !0;
  }
  defaultSidebarSplitPosition(e) {
    return {
      [nT.Design]: 240,
      [nT.Whiteboard]: 240,
      [nT.DevHandoff]: 320,
      [nT.Slides]: 200,
      [nT.Sites]: 240,
      [nT.Cooper]: 240,
      [nT.Illustration]: 240,
      [nT.Figmake]: 240
    }[e];
  }
  setEditorType(e) {
    this.editorType = e;
    this.prefix = function (e) {
      switch (e) {
        case nT.Design:
          return "";
        case nT.Whiteboard:
          return "whiteboard-";
        case nT.Slides:
          return "piper-";
        default:
          return "";
      }
    }(e);
  }
  setLoggedIn(e) {
    this.loggedIn = e;
  }
  getLocalStorageValue(e, t) {
    let r = `${this.prefix}${e}`;
    if (x4) {
      let e = x4.getItem(r);
      if (e) return t(e);
    }
    return null;
  }
  get showSidebar() {
    return this.getLocalStorageValue("show-sidebar", s) ?? this.defaultShowSidebar[this.editorType];
  }
  get sidebarSplitPosition() {
    let e = this.editorType === nT.DevHandoff ? "dev-handoff-sidebar-split-position" : "sidebar-split-position";
    return this.getLocalStorageValue(e, parseFloat) || this.defaultSidebarSplitPosition(this.editorType);
  }
  get propertiesPanelSplitPosition() {
    return this.getLocalStorageValue("properties-panel-split-position", parseFloat) || this.defaultPropertiesPanelSplitPosition[this.editorType];
  }
  get topLevelMode() {
    return this.loggedIn ? lyf.LAYOUT : lyf.PREVIEW;
  }
}();
export const R = $$o0;