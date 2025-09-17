import { useMemo, useCallback } from "react";
import { useStore } from "react-redux";
import { ServiceCategories as _$$e } from "../905/165054";
import { IAssertResource } from "../figma_app/763686";
import { selectWithShallowEqual } from "../905/103090";
import { reportError } from "../905/11";
import { gB } from "../905/294543";
import { getCodegenLanguagePreference } from "../905/515076";
import { Ym } from "../figma_app/806075";
import { selectViewAction } from "../905/929976";
import { c as _$$c } from "../905/882587";
import { Im } from "../905/608145";
import { getSelectedEditorType } from "../figma_app/976749";
import { getCurrentOrgAdminInfo } from "../figma_app/740025";
import { setSelectedDevModePropertiesPanelTab } from "../figma_app/741237";
import { canPerformAction, canRunExtensions } from "../figma_app/12796";
import { getCurrentPluginVersion, isSingleDevEditorType, isValidForCooperDevCodegen } from "../figma_app/300692";
import { FEditorType } from "../figma_app/53721";
import { hasLocalFileId, manifestContainsWidget } from "../figma_app/155287";
import { b as _$$b } from "../905/635568";
import { $1, Be, cW } from "../figma_app/844435";
function v() {
  let e = getSelectedEditorType();
  let {
    orgEntity,
    org,
    openFile,
    isReadOnly,
    userCanViewPlugins,
    userCanRunExtensions,
    activeTextReviewPlugin,
    publishedPlugins,
    publishedWidgets
  } = selectWithShallowEqual(e => ({
    orgEntity: getCurrentOrgAdminInfo(e),
    org: e.currentUserOrgId ? e.orgById[e.currentUserOrgId] : null,
    openFile: e.openFile,
    isReadOnly: e.mirror.appModel.isReadOnly,
    userCanViewPlugins: canPerformAction(e),
    userCanRunExtensions: canRunExtensions(e),
    activeTextReviewPlugin: e.mirror.appModel.activeTextReviewPlugin,
    publishedPlugins: e.publishedPlugins,
    publishedWidgets: e.publishedWidgets
  }));
  let p = $1();
  return useMemo(() => ({
    openFile,
    localExtensions: p,
    orgEntity,
    org,
    isReadOnly,
    userCanViewPlugins,
    userCanRunExtensions,
    editorType: e,
    allSavedPlugins: {},
    activeTextReviewPlugin,
    publishedPlugins,
    publishedWidgets
  }), [openFile, p, orgEntity, org, isReadOnly, userCanViewPlugins, userCanRunExtensions, e, activeTextReviewPlugin, publishedPlugins, publishedWidgets]);
}
export function $$A3(e) {
  let t = Be();
  let r = t.plugins[e] || t.orgPlugins[e];
  let n = cW()[e];
  return r || (n ? getCurrentPluginVersion(n) : null);
}
export function $$x4(e) {
  return {
    type: "run-installed-plugin",
    pluginId: e.plugin_id,
    command: void 0,
    parameterOnly: e.manifest.parameters && !1 !== e.manifest.parameterOnly,
    parameterEntry: _$$c(e.manifest.parameters, e.name)
  };
}
export function $$N1(e, t) {
  let r = $$A3(e);
  let o = v();
  let u = _$$b();
  let p = gB();
  let _ = useStore();
  return useCallback(e => {
    if (!r) {
      console.error("Plugin version not found");
      reportError(_$$e.EXTENSIBILITY, Error("Plugin version not found"));
      return;
    }
    let n = $$x4(r);
    if (isSingleDevEditorType(r) && P(_), isValidForCooperDevCodegen(r)) {
      p(getCodegenLanguagePreference(r));
      P(_);
      setSelectedDevModePropertiesPanelTab(IAssertResource.PRIMARY);
      return;
    }
    Im({
      ...o,
      allSavedPlugins: {
        [r.plugin_id]: r
      }
    }, t, e || n);
    u();
  }, [r, o, t, u, _, p]);
}
export function $$C6(e) {
  return {
    type: "insert-local-widget",
    localFileId: e.localFileId,
    command: void 0
  };
}
export function $$w0(e) {
  return {
    type: "insert-installed-widget",
    pluginId: e.plugin_id,
    command: void 0
  };
}
export function $$O2(e) {
  return hasLocalFileId(e) ? manifestContainsWidget(e) ? $$C6(e) : $$R7(e) : manifestContainsWidget(e) ? $$w0(e) : $$x4(e);
}
export function $$R7(e) {
  return {
    type: "run-local-plugin",
    localFileId: e.localFileId,
    command: void 0,
    parameterOnly: e.manifest.parameters && !1 !== e.manifest.parameterOnly,
    parameterEntry: _$$c(e.manifest.parameters, e.name)
  };
}
export function $$L5(e, t) {
  let r = v();
  let a = Object.values($1()).find(t => t.plugin_id === e);
  let o = _$$b();
  let l = gB();
  let u = useStore();
  return useCallback(e => {
    if (!a) {
      console.error("Plugin not found");
      return;
    }
    let n = $$R7(a);
    if (isSingleDevEditorType(a) && P(u), isValidForCooperDevCodegen(a)) {
      l(getCodegenLanguagePreference(a));
      P(u);
      setSelectedDevModePropertiesPanelTab(IAssertResource.PRIMARY);
      return;
    }
    Im(r, t, e || n);
    o();
  }, [a, r, t, o, u, l]);
}
function P(e) {
  let {
    selectedView
  } = e.getState();
  "fullscreen" === selectedView.view && selectedView.editorType === FEditorType.Design && (e.dispatch(selectViewAction({
    ...selectedView,
    view: "fullscreen",
    editorType: FEditorType.DevHandoff
  })), Ym(e.getState(), FEditorType.DevHandoff, "plugin_run"));
}
export const Bi = $$w0;
export const Gt = $$N1;
export const IK = $$O2;
export const RK = $$A3;
export const cK = $$x4;
export const dR = $$L5;
export const ee = $$C6;
export const hN = $$R7;