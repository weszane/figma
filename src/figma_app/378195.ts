import { debounce } from "../905/915765";
import { createActionCreator } from "../905/73481";
import { FlashActions } from "../905/573154";
import { createOptimistThunk } from "../905/350402";
import { x } from "../905/239551";
import { M } from "../figma_app/170366";
import { getPermissionsState } from "../figma_app/642025";
import { loadLocalPluginManifest, getLocalPluginManifest, getPublishingData, isDefaultPublishingData } from "../figma_app/300692";
import { SH } from "../figma_app/790714";
import { hM, A9 } from "../905/851937";
import { handlePluginError } from "../905/753206";
import { hasLocalFileId } from "../figma_app/155287";
import { c as _$$c } from "../905/949750";
import { o as _$$o } from "../905/938553";
import { Ij, fy } from "../figma_app/559491";
let $$E0 = createActionCreator("PLUGIN_INITIALIZE_LOCAL");
let $$y1 = createActionCreator("PLUGIN_UPDATE_LOCAL");
let $$b2 = createActionCreator("PLUGIN_DELETE_LOCAL");
let T = !1;
let I = M();
let $$S3 = createOptimistThunk(async e => {
  if (I) {
    if (I.isCompatibleWith({
      desktopVersion: 59
    })) {
      let t = (await I.getLocalManifestFileExtensionIdsToCachedMetadataMap()) ?? {};
      let r = Object.keys(t).map(e => parseInt(e));
      let n = await Promise.all(r.map(e => loadLocalPluginManifest(e, {
        resourceType: "unknown"
      })));
      let i = {};
      n.forEach(e => {
        e.cachedContainsWidget = !!t[e.localFileId].cachedContainsWidget;
        e.lastKnownPluginId = t[e.localFileId].lastKnownPluginId || "";
        i[e.localFileId] = e;
      });
      e.dispatch($$E0(i));
    } else if (I.isCompatibleWith({
      desktopVersion: 58
    })) {
      let t = await I.getLocalManifestFileExtensionIdsToCachedContainsWidgetMap();
      let r = Object.keys(t).map(e => parseInt(e));
      let n = await Promise.all(r.map(e => loadLocalPluginManifest(e, {
        resourceType: "unknown"
      })));
      let i = {};
      n.forEach(e => {
        e.cachedContainsWidget = !!t[e.localFileId];
        i[e.localFileId] = e;
      });
      e.dispatch($$E0(i));
    } else {
      let t = await I.getAllLocalFileExtensionIds();
      let r = await Promise.all(t.map(e => loadLocalPluginManifest(e, {
        resourceType: "unknown"
      })));
      let n = {};
      r.forEach(e => {
        n[e.localFileId] = e;
      });
      e.dispatch($$E0(n));
    }
    if (!T) {
      T = !0;
      I.registerManifestChangeObserver(t => {
        if ("added" === t.type || "changed" === t.type) {
          let r;
          let n = t.id;
          let i = getLocalPluginManifest(n, t.localLoadResult, {
            resourceType: "unknown"
          });
          let s = e.getState().localPlugins[n]?.plugin_id;
          e.dispatch($$y1(i));
          let o = e.getState();
          let {
            publishingPlugins,
            localPlugins,
            publishedPlugins,
            publishedWidgets,
            currentUserOrgId,
            authedProfilesById,
            modalShown
          } = o;
          let b = publishingPlugins[n];
          i.plugin_id !== s && modalShown?.type !== _$$o.type && e.dispatch(Ij({
            id: n
          }));
          try {
            r = getPublishingData({
              ...getPermissionsState(o),
              currentUserOrgId,
              localPlugins,
              publishedPlugins,
              publishedWidgets,
              authedProfilesById
            }, n);
          } catch (t) {
            e.dispatch(FlashActions.error(t.message));
            return;
          }
          b && b.metadata && isDefaultPublishingData(b.metadata) && !i.error && e.dispatch(fy({
            id: n,
            metadata: r
          }));
        } else "removed" === t.type && e.dispatch($$b2(t.id));
      });
      let t = debounce(t => {
        if ("added" === t.type || "changed" === t.type) {
          let r = e.getState().mirror?.selectionProperties?.selectedWidgetInfo;
          r && r.pluginID && x.mountWidget(r.pluginID, r.widgetID, "hot-reloading re-render");
          let n = SH()?.plugin;
          let i = SH()?.triggeredFrom;
          let a = e.getState();
          "manifestFileId" in t && n && hasLocalFileId(n) && a.mirror.appModel.hotReloadPluginDev && t.manifestFileId === n.localFileId && hM() && (async () => {
            await handlePluginError();
            "codegen" !== i && A9({
              newTriggeredFrom: null
            });
            _$$c();
          })();
        }
      });
      I.registerCodeChangeObserver(t);
      I.registerManifestChangeObserver(t);
      I.registerUiChangeObserver(t);
    }
  }
});
export const Ob = $$E0;
export const Po = $$y1;
export const Zy = $$b2;
export const _J = $$S3;