import { lyf } from "../figma_app/763686";
import { localStorageRef } from "../905/657224";
import { FEditorType } from "../figma_app/53721";
function s(e) {
  return 1 === parseInt(e);
}
export let $$o0 = new class {
  constructor() {
    this.defaultShowSidebar = {
      [FEditorType.Design]: !0,
      [FEditorType.DevHandoff]: !0,
      [FEditorType.Whiteboard]: !1,
      [FEditorType.Slides]: !1,
      [FEditorType.Sites]: !0,
      [FEditorType.Cooper]: !0,
      [FEditorType.Illustration]: !0,
      [FEditorType.Figmake]: !0
    };
    this.defaultPropertiesPanelSplitPosition = {
      [FEditorType.Design]: 241,
      [FEditorType.DevHandoff]: 321,
      [FEditorType.Whiteboard]: 241,
      [FEditorType.Slides]: 241,
      [FEditorType.Sites]: 241,
      [FEditorType.Cooper]: 241,
      [FEditorType.Illustration]: 241,
      [FEditorType.Figmake]: 241
    };
    this.prefix = "";
    this.editorType = FEditorType.Design;
    this.loggedIn = !0;
    this.showUi = !0;
  }
  defaultSidebarSplitPosition(e) {
    return {
      [FEditorType.Design]: 240,
      [FEditorType.Whiteboard]: 240,
      [FEditorType.DevHandoff]: 320,
      [FEditorType.Slides]: 200,
      [FEditorType.Sites]: 240,
      [FEditorType.Cooper]: 240,
      [FEditorType.Illustration]: 240,
      [FEditorType.Figmake]: 240
    }[e];
  }
  setEditorType(e) {
    this.editorType = e;
    this.prefix = function (e) {
      switch (e) {
        case FEditorType.Design:
          return "";
        case FEditorType.Whiteboard:
          return "whiteboard-";
        case FEditorType.Slides:
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
    if (localStorageRef) {
      let e = localStorageRef.getItem(r);
      if (e) return t(e);
    }
    return null;
  }
  get showSidebar() {
    return this.getLocalStorageValue("show-sidebar", s) ?? this.defaultShowSidebar[this.editorType];
  }
  get sidebarSplitPosition() {
    let e = this.editorType === FEditorType.DevHandoff ? "dev-handoff-sidebar-split-position" : "sidebar-split-position";
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