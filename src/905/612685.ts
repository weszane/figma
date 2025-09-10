import { isEmptyObject } from "src/figma_app/493477";
import { getFeatureFlags } from "src/905/601108";
import { serializeQuery } from "src/905/634134";
import { encodeUri } from "src/figma_app/930338";
import { FFileType } from "src/figma_app/191312";
import { EO, Ml } from "src/905/691205";
export function $$d1(e) {
  return `/community/file/${e}`;
}
export function $$c4(e) {
  return $$m2({
    file: e,
    allowDefaulting: !0
  });
}
export function $$u5(e, t = {}) {
  return $$m2({
    file: e,
    allowDefaulting: !0,
    ...t
  });
}
export function $$p3(e, t) {
  return $$m2({
    file: e,
    allowDefaulting: !t
  });
}
export function $$m2(e) {
  return $$h0({
    file: e.file,
    nodeId: e.nodeId,
    base: e.base || "file",
    attributionContext: e.attributionContext,
    isDevHandoff: e.isDevHandoff,
    isDrawMode: e.isDrawMode,
    isReadOnly: e.isReadOnly,
    isFigJam: e.isFigJam,
    isDevModeVarsTable: e.isDevModeVarsTable,
    devModeVarsTableSelection: e.devModeVarsTableSelection,
    isDevModeOverview: e.isDevModeOverview,
    devModeFocusId: e.devModeFocusId,
    allowDefaulting: e.allowDefaulting,
    commentId: e.commentId,
    compareLatest: e.compareLatest,
    mainComponent: e.mainComponent,
    stateGroupId: e.stateGroupId,
    isFigmakeFullscreenPreview: e.isFigmakeFullscreenPreview,
    isDevModeComponentBrowser: e.isDevModeComponentBrowser,
    componentKey: e.componentKey,
    cmsItemId: e.cmsItemId
  });
}
export function $$h0(e) {
  var t;
  let i = {};
  let d = e.file.editorType || e.file.editor_type || (e.isFigJam ? FFileType.WHITEBOARD : FFileType.DESIGN);
  let c = "file" === (t = e.base) ? function (e) {
    switch (e) {
      case FFileType.WHITEBOARD:
        return "board";
      case FFileType.DESIGN:
        return "design";
      case FFileType.SLIDES:
        return "slides";
      case FFileType.SITES:
        return "site";
      case FFileType.COOPER:
        return "buzz";
      case FFileType.FIGMAKE:
        return "make";
    }
  }(d) : "proto" === t ? function (e) {
    switch (e) {
      case FFileType.SLIDES:
        return "deck";
      case FFileType.DESIGN:
    }
    return "proto";
  }(d) : t;
  let u = "";
  if (e.nodeId && (i["node-id"] = EO(e.nodeId)), e.mainComponent && (i["main-component"] = 1), e.stateGroupId && (i["state-group-id"] = EO(e.stateGroupId)), e.allowDefaulting) "design" === c && (i.m = "auto");else {
    let t;
    e.isDevHandoff ? t = "dev" : e.isDrawMode ? t = "draw" : e.isFigJam || (t = "design");
    "design" === c && ("dev" === t || "draw" === t) && (i.m = t);
  }
  ("file" === e.base || "proto" === e.base) && e.attributionContext && (i.t = e.attributionContext);
  ("file" === e.base || "proto" === e.base) && e.commentId && (u = `#${e.commentId}`);
  e.compareLatest && (i["compare-latest"] = 1);
  e.isDevModeVarsTable ? (i.vars = 1, e.devModeVarsTableSelection && (i["var-id"] = Ml(e.devModeVarsTableSelection))) : e.isDevModeOverview ? i["ready-for-dev"] = 1 : e.devModeFocusId ? i["focus-id"] = EO(e.devModeFocusId) : e.isDevModeComponentBrowser && (i["component-browser"] = 1, e.componentKey && (i["component-key"] = e.componentKey));
  getFeatureFlags().dakota && e.cmsItemId && (i["cms-item-id"] = e.cmsItemId);
  e.isFigmakeFullscreenPreview && (i.fullscreen = 1);
  let p = isEmptyObject(i) ? "" : `?${serializeQuery(i)}`;
  let m = encodeUri(e.file.name || "");
  return `${location.origin}/${c}/${e.file.key}${m.length > 0 ? `/${m}` : ""}${p}${u}`;
}
export const Kw = $$h0;
export const X$ = $$d1;
export const jN = $$m2;
export const r1 = $$p3;
export const rl = $$c4;
export const to = $$u5;
