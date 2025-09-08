import { trackEventAnalytics } from "../905/449184";
import { getI18nString } from "../905/303541";
import { F } from "../905/302958";
import { createOptimistThunk } from "../905/350402";
import { s as _$$s } from "../905/58247";
import { gU, RH } from "../figma_app/147952";
import { T } from "../905/858738";
import { M } from "../figma_app/170366";
import { loadPluginManifest, getFullscreenViewEditorType, mapToFileType, resolveFrameworkType, loadLocalPluginManifest } from "../figma_app/300692";
import { bD } from "../figma_app/45218";
import { manifestErrorMessage, ManifestErrorType } from "../figma_app/155287";
import { o8 } from "../905/622391";
import { p as _$$p } from "../905/42189";
import { s as _$$s2 } from "../figma_app/504088";
import { Po, Zy } from "../figma_app/378195";
let E = M();
let $$y0 = createOptimistThunk(async (e, {
  resourceType: t,
  localFileIdToRemove: r
}) => {
  if (!E) return;
  let {
    added,
    existed
  } = await E.createMultipleNewLocalFileExtensions({
    title: getI18nString("community.actions.pick_extension_manifest_file"),
    filters: [{
      name: "Manifests",
      extensions: ["json"]
    }],
    properties: ["openFile"]
  }, 0);
  let f = added[0] ?? existed[0];
  if (null != f) try {
    let s = await loadPluginManifest(f, {
      resourceType: t,
      isPublishing: !1
    });
    "unknown" === t && (t = s.containsWidget ? "widget" : "plugin");
    let c = getFullscreenViewEditorType();
    if (c && !s.editorType?.includes(c)) throw Error(manifestErrorMessage({
      type: ManifestErrorType.VALIDATE,
      text: `The manifest editorType does not include "${c}".`
    }));
    if (trackEventAnalytics("Added new plugin", {
      how: "loaded",
      pluginId: s.id,
      version: s.api,
      isWidget: "widget" === t,
      productType: c ? mapToFileType(c) : null,
      isVsCode: T()
    }), e.dispatch($$b1({
      localFileId: f,
      resourceType: t
    })), _$$s({
      initialX: 0,
      initialY: 0,
      initialTab: "figjam" === c ? "widget" === t ? _$$p.WIDGETS : _$$p.PLUGINS : void 0,
      initialFdResourceTab: "figjam" !== c ? "widget" === t ? _$$s2.WIDGET : _$$s2.PLUGIN : void 0,
      initialFdView: "figjam" !== c ? "development" : void 0,
      scrollDevelopmentSectionIntoView: "figjam" === c,
      source: "extension-import"
    }), e.dispatch(F.enqueue({
      message: s.name ? getI18nString("community.actions.manifest_name_has_been_imported", {
        manifestName: s.name
      }) : "widget" === t ? getI18nString("community.actions.widget_has_been_imported") : getI18nString("community.actions.plugin_has_been_imported")
    })), r) {
      let t = e.getState().localPlugins[r];
      let n = t?.lastKnownPluginId ?? t?.plugin_id ?? t?.manifest.id;
      (n === s.id || null == n) && e.dispatch($$T2(r));
    }
    let E = s.editorType;
    E?.forEach(r => {
      let n = resolveFrameworkType(r);
      t === bD.PLUGIN ? e.dispatch(gU({
        storeInRecentsKey: n,
        id: s.id || "",
        version: "",
        isDevelopment: !0,
        currentUserId: o8()
      })) : t === bD.WIDGET && e.dispatch(RH({
        storeInRecentsKey: n,
        id: s.id || "",
        version: "",
        isDevelopment: !0,
        currentUserId: o8()
      }));
    });
  } catch (t) {
    e.dispatch(F.enqueue({
      message: t.message,
      error: !0
    }));
  }
});
let $$b1 = createOptimistThunk(async (e, {
  localFileId: t,
  resourceType: r
}) => {
  let n = await loadLocalPluginManifest(t, {
    resourceType: r
  });
  e.dispatch(Po(n));
});
let $$T2 = createOptimistThunk((e, t) => {
  void 0 != t && (E && E.removeLocalFileExtension(t), e.dispatch(Zy(t)));
});
export const JZ = $$y0;
export const QF = $$b1;
export const qR = $$T2;