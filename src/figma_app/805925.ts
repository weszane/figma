import { useMemo } from "react";
import { getFeatureFlags } from "../905/601108";
import { Fc } from "../figma_app/484865";
import { $k } from "../figma_app/802241";
import { selectWithShallowEqual } from "../905/103090";
import { getFilteredFeatureFlags } from "../905/717445";
import { _I } from "../figma_app/473493";
import { BE, Be, qr, QZ } from "../figma_app/844435";
import { gS } from "../figma_app/740025";
import { UK } from "../figma_app/740163";
import { e as _$$e, n as _$$n } from "../figma_app/48514";
import { td } from "../905/845253";
import { J2 } from "../figma_app/84367";
import { Eh, cb } from "../figma_app/12796";
import { mapEditorTypeToFileType, mapFileTypeToEditorType, FEditorType } from "../figma_app/53721";
let E = {};
export function $$y1(e) {
  let t = mapEditorTypeToFileType(e.selectedView.editorType);
  return {
    openFile: e.openFile,
    publishedPlugins: e.publishedPlugins,
    allSavedPlugins: E,
    recentlyUsedPlugins: gS(mapFileTypeToEditorType(t), e.recentlyUsed, e.localPlugins),
    localExtensions: e.localPlugins,
    org: td(e.currentUserOrgId, e.orgById) ?? null,
    isReadOnly: e.mirror.appModel.isReadOnly,
    userCanViewPlugins: Eh(e),
    userCanRunExtensions: cb(e),
    editorType: mapFileTypeToEditorType(t),
    widgetSelectionInfo: e.mirror.selectionProperties?.selectedWidgetInfo,
    activeTextReviewPlugin: e.mirror.appModel.activeTextReviewPlugin,
    publishedWidgets: e.publishedWidgets,
    userCanViewWidgets: BE(e)
  };
}
export function $$b2() {
  let e = Be();
  let t = qr();
  let r = selectWithShallowEqual(e => $$y1(e));
  let a = r.editorType === FEditorType.Sites;
  let s = r.editorType === FEditorType.Figmake;
  let l = r.editorType === FEditorType.Cooper;
  let d = QZ();
  return useMemo(() => {
    if (a && !getFeatureFlags().sites_plugin_api || s || l && !getFeatureFlags().buzz_plugins) return {
      ...r,
      userCanViewPlugins: !1,
      userCanRunExtensions: !1,
      allSavedPlugins: E,
      isReadOnly: !0
    };
    let n = e.plugins;
    let o = e.widgets;
    return {
      ...r,
      recentlyUsedWidgets: t,
      savedWidgetVersions: o,
      userCanViewWidgets: d,
      allSavedPlugins: n
    };
  }, [r, a, s, l, t, e.plugins, e.widgets, d]);
}
export function $$T3() {
  let e = _$$e();
  return {
    hasDrawModeAccess: !!(getFilteredFeatureFlags().ce_il_root && e === _$$n.HAS_ACCESS)
  };
}
export function $$I0() {
  let e = J2(UK().enableCodegenMcpServer);
  let t = _I();
  let r = Fc();
  let i = $k();
  let o = e || t && !i;
  return useMemo(() => ({
    canStartCodegenMcpServer: o,
    canAccessCodeConnect: r
  }), [o, r]);
}
export const TJ = $$I0;
export const b$ = $$y1;
export const c4 = $$b2;
export const fS = $$T3;