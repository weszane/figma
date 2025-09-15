import { PluginMenu } from "../905/791556";
import { throwTypeError } from "../figma_app/465776";
import { ServiceCategories as _$$e } from "../905/165054";
import { IAssertResource } from "../figma_app/763686";
import { getSceneGraphInstance } from "../905/830071";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { debugState } from "../905/407919";
import { customHistory } from "../905/612521";
import { handleUrlAction } from "../905/280005";
import { reportError } from "../905/11";
import { VisualBellActions } from "../905/302958";
import { zM } from "../figma_app/580736";
import { Lk, x as _$$x } from "../figma_app/639711";
import { HT } from "../figma_app/69680";
import { JZ } from "../figma_app/696043";
import { r as _$$r } from "../figma_app/896657";
import { EG } from "../figma_app/972736";
import { s as _$$s } from "../905/58247";
import { showModalHandler } from "../905/156213";
import { Q7 } from "../905/15667";
import { s0 } from "../figma_app/350203";
import { formatI18nMessage } from "../905/482208";
import { nV } from "../905/625959";
import { fullscreenValue } from "../figma_app/455680";
import { updateActiveTextReviewPlugin, setSelectedDevModePropertiesPanelTab, updateFullscreenAppModel } from "../figma_app/741237";
import { $4 } from "../figma_app/506364";
import { noop } from "../905/813868";
import { xG } from "../905/277373";
import { M as _$$M } from "../figma_app/170366";
import { getFullscreenViewEditorType, getCurrentPluginVersion, canRunPlugin } from "../figma_app/300692";
import { R as _$$R } from "../figma_app/612938";
import { handlePluginError } from "../905/753206";
import { HubTypeEnum } from "../figma_app/45218";
import { PageTypeEnum } from "../figma_app/10554";
import { hasLocalFileId } from "../figma_app/155287";
import { mN, Wh } from "../figma_app/985200";
import { h as _$$h } from "../figma_app/752483";
import { nO } from "../905/12045";
import { p as _$$p } from "../905/42189";
import { s as _$$s2 } from "../figma_app/504088";
let W = _$$M();
export function $$K3(e) {
  return [...e].sort((e, t) => new Intl.Collator().compare(PluginMenu.nameOfMenuItem(e), PluginMenu.nameOfMenuItem(t)));
}
export function $$Y2({
  nameStringKey: e,
  menuAction: t,
  disabled: i,
  property: n,
  propertyValue: r,
  iconType: a
}) {
  return {
    type: "run-menu-action",
    name: {
      type: "string-key",
      key: e,
      string: formatI18nMessage(e)
    },
    menuAction: t,
    disabled: i,
    property: n,
    propertyValue: r,
    iconType: a,
    path: []
  };
}
function q() {
  fullscreenValue.dispatch(VisualBellActions.enqueue({
    message: "File must be fully loaded to run plugin.",
    type: "missing-file-key-to-run-plugin",
    error: !0
  }));
}
function $(e) {
  return "publishedPlugins" in e && "allSavedPlugins" in e && "activeTextReviewPlugin" in e && "userCanViewPlugins" in e;
}
function Z(e) {
  return "publishedWidgets" in e;
}
var X = (e => (e.EXPECTED_WIDGETS_MENU_ARGS = "runExtensionMenuAction: Expected WidgetsMenuArgs", e.EXPECTED_PLUGINS_MENU_ARGS = "runExtensionMenuAction: Expected PluginsMenuArgs", e.WIDGET_NOT_FOUND = "runExtensionMenuAction: Widget not found", e.PLUGIN_NOT_FOUND = "runExtensionMenuAction: Plugin not found", e.CANNOT_RUN_PLUGIN = "runExtensionMenuAction: Cannot run plugin", e))(X || {});
export function $$Q4(e) {
  return "insert-local-widget" === e.menuAction.type || "insert-installed-widget" === e.menuAction.type;
}
export function $$J0(e, t, i) {
  let {
    openFile,
    localExtensions
  } = e;
  let w = getFullscreenViewEditorType();
  let O = getFeatureFlags().ext_require_appropriate_seat && !e.userCanRunExtensions;
  let K = `extension-action-${t}`;
  switch (i.type) {
    case "insert-local-widget":
      {
        if (O) return _$$R.instance.handleUpgrade(Q7.RUN_WIDGET);
        if (!Z(e)) {
          reportError(_$$e.EXTENSIBILITY, Error("runExtensionMenuAction: Expected WidgetsMenuArgs"), {
            tags: {
              menuActionType: "insert-local-widget"
            }
          });
          return;
        }
        if (!openFile) {
          q();
          return;
        }
        let t = localExtensions[i.localFileId];
        t ? noop({
          pluginID: t.plugin_id,
          widgetName: t.name,
          pluginVersionID: ""
        }) : reportError(_$$e.EXTENSIBILITY, Error("runExtensionMenuAction: Widget not found"), {
          tags: {
            menuActionType: "insert-local-widget",
            localFileId: i.localFileId
          }
        });
        return;
      }
    case "insert-installed-widget":
      {
        if (O) return _$$R.instance.handleUpgrade(Q7.RUN_WIDGET);
        if (!Z(e)) {
          reportError(_$$e.EXTENSIBILITY, Error("runExtensionMenuAction: Expected WidgetsMenuArgs"), {
            tags: {
              menuActionType: "insert-installed-widget"
            }
          });
          return;
        }
        let t = e.publishedWidgets[i.pluginId];
        let n = getCurrentPluginVersion(t);
        t && n ? noop({
          pluginID: t.id,
          widgetName: n.name,
          pluginVersionID: n.id
        }) : reportError(_$$e.EXTENSIBILITY, Error("runExtensionMenuAction: Widget not found"), {
          tags: {
            menuActionType: "insert-installed-widget",
            widgetId: i.pluginId
          }
        });
        return;
      }
    case "run-local-plugin":
      {
        if (O) return _$$R.instance.handleUpgrade(Q7.RUN_PLUGIN);
        if (!$(e)) {
          reportError(_$$e.EXTENSIBILITY, Error("runExtensionMenuAction: Expected PluginsMenuArgs"), {
            tags: {
              menuActionType: "run-local-plugin"
            }
          });
          return;
        }
        if (i.parameterOnly && i.parameterEntry) {
          nO(i, t, fullscreenValue.dispatch);
          return;
        }
        let r = localExtensions[i.localFileId];
        if (!r) {
          reportError(_$$e.EXTENSIBILITY, Error("runExtensionMenuAction: Plugin not found"), {
            tags: {
              menuActionType: "run-local-plugin"
            },
            extra: {
              localFileId: i.localFileId,
              localExtensions
            }
          });
          return;
        }
        let s = canRunPlugin({
          plugin: r
        });
        s.canRun ? _$$R.instance.enqueue({
          mode: "run-forever",
          runPluginArgs: {
            plugin: r,
            command: i.command || "",
            queryMode: !1,
            runMode: "default",
            triggeredFrom: t,
            openFileKey: openFile?.key || "",
            isWidget: !1
          }
        }) : reportError(_$$e.EXTENSIBILITY, Error("runExtensionMenuAction: Cannot run plugin"), {
          tags: {
            menuActionType: "run-local-plugin",
            canRunMessage: s.message
          }
        });
        return;
      }
    case "run-installed-plugin":
      {
        if (O) return _$$R.instance.handleUpgrade(Q7.RUN_PLUGIN);
        if (!$(e)) {
          reportError(_$$e.EXTENSIBILITY, Error("runExtensionMenuAction: Expected PluginsMenuArgs"), {
            tags: {
              menuActionType: "run-installed-plugin"
            }
          });
          return;
        }
        if (i.parameterOnly && i.parameterEntry) {
          nO(i, t, fullscreenValue.dispatch);
          return;
        }
        let r = function (e, t) {
          let {
            allSavedPlugins,
            orgSavedPlugins,
            recentlyUsedPlugins,
            publishedPlugins
          } = t;
          if (allSavedPlugins[e]) return allSavedPlugins[e];
          if (orgSavedPlugins && orgSavedPlugins[e]) return orgSavedPlugins[e];
          let s = recentlyUsedPlugins?.find(t => t.plugin_id === e && !hasLocalFileId(t));
          if (s) return s;
          let o = publishedPlugins[e];
          return getCurrentPluginVersion(o);
        }(i.pluginId, {
          allSavedPlugins: e.allSavedPlugins,
          orgSavedPlugins: e.orgSavedPlugins,
          recentlyUsedPlugins: e.recentlyUsedPlugins,
          publishedPlugins: e.publishedPlugins
        });
        if (!r) {
          reportError(_$$e.EXTENSIBILITY, Error("runExtensionMenuAction: Plugin not found"), {
            tags: {
              menuActionType: "run-installed-plugin",
              pluginId: i.pluginId
            }
          });
          return;
        }
        let s = canRunPlugin({
          plugin: r
        });
        s.canRun ? _$$R.instance.enqueue({
          mode: "run-forever",
          runPluginArgs: {
            plugin: r,
            command: i.command || "",
            queryMode: !1,
            runMode: "default",
            triggeredFrom: t,
            openFileKey: openFile?.key || "",
            isWidget: !1
          }
        }) : reportError(_$$e.EXTENSIBILITY, Error("runExtensionMenuAction: Cannot run plugin"), {
          tags: {
            menuActionType: "run-installed-plugin",
            pluginId: i.pluginId,
            canRunMessage: s.message
          }
        });
        return;
      }
    case "set-text-review-plugin":
      if (O) return _$$R.instance.handleUpgrade(Q7.RUN_PLUGIN);
      updateActiveTextReviewPlugin(i.textReviewPluginInfo);
      $4.reset();
      return;
    case "run-last":
      if (O) return _$$R.instance.handleUpgrade(Q7.RUN_PLUGIN);
      fullscreenValue.triggerAction("plugins-run-last", {
        source: "menu"
      });
      return;
    case "manage-widgets":
      fullscreenValue.dispatch(EG({
        toolType: "widget"
      }));
      fullscreenValue.triggerAction("clear-tool", {
        source: "menu"
      });
      _$$s({
        initialX: 0,
        initialY: 0,
        initialTab: "figjam" === w ? _$$p.WIDGETS : void 0,
        initialFdResourceTab: "figma" === w ? _$$s2.WIDGET : void 0,
        initialFdView: "figma" === w ? "development" : void 0,
        scrollDevelopmentSectionIntoView: "figjam" === w,
        source: K
      });
      return;
    case "manage-plugins":
      {
        if ("dev" === w || "inspect" === w) {
          setSelectedDevModePropertiesPanelTab(IAssertResource.PLUGIN);
          atomStoreManager.set(HT, "development");
          mN.getInstance()?.getIframeId() === Wh.INSPECT && handlePluginError();
          return;
        }
        if ("buzz" === w) {
          atomStoreManager.set(Lk, _$$x.PLUGINS);
          atomStoreManager.set(zM, "development");
          mN.getInstance()?.getIframeId() === Wh.BUZZ_LEFT_PANEL && handlePluginError();
          return;
        }
        fullscreenValue.dispatch(EG({
          toolType: "plugin"
        }));
        fullscreenValue.triggerAction("clear-tool", {
          source: "menu"
        });
        let e = "figma" === w || "slides" === w;
        _$$s({
          initialX: 0,
          initialY: 0,
          initialTab: "figjam" === w ? _$$p.PLUGINS : void 0,
          initialFdResourceTab: e ? _$$s2.PLUGIN : void 0,
          scrollDevelopmentSectionIntoView: "figjam" === w,
          initialFdView: e ? "development" : void 0,
          source: K
        });
        return;
      }
    case "browse":
      customHistory.redirect("/community/plugins", "_blank");
      return;
    case "browse-plugins":
      if (nV(), fullscreenValue.dispatch(EG({
        toolType: "plugin"
      })), fullscreenValue.triggerAction("clear-tool", {
        source: "menu"
      }), trackEventAnalytics(s0.FIND_MORE_PLUGINS, {
        isWidget: !1,
        triggeredFrom: t
      }), "dev" === w || "inspect" === w) {
        setSelectedDevModePropertiesPanelTab(IAssertResource.PLUGIN);
        atomStoreManager.set(HT, "recents_and_saved");
        mN.getInstance()?.getIframeId() === Wh.INSPECT && handlePluginError();
        return;
      }
      if ("buzz" === w) {
        atomStoreManager.set(Lk, _$$x.PLUGINS);
        atomStoreManager.set(zM, "recents_and_saved");
        mN.getInstance()?.getIframeId() === Wh.BUZZ_LEFT_PANEL && handlePluginError();
        return;
      }
      _$$s({
        initialX: 0,
        initialY: 0,
        initialTab: "figjam" === w ? _$$p.PLUGINS : void 0,
        initialFdResourceTab: "figma" === w ? _$$s2.PLUGIN : void 0,
        initialFdView: "figma" === w ? "recents_and_saved" : void 0,
        source: K
      });
      return;
    case "select-all-widgets":
      fullscreenValue.triggerAction("select-all-widgets");
      return;
    case "browse-widgets":
      nV();
      fullscreenValue.dispatch(EG({
        toolType: "widget"
      }));
      fullscreenValue.triggerAction("clear-tool", {
        source: "menu"
      });
      trackEventAnalytics(s0.FIND_MORE_PLUGINS, {
        isWidget: !0,
        triggeredFrom: t
      });
      _$$s({
        initialX: 0,
        initialY: 0,
        initialTab: "figjam" === w ? _$$p.WIDGETS : void 0,
        initialFdResourceTab: "figma" === w ? _$$s2.WIDGET : void 0,
        source: K
      });
      return;
    case "set-widget-thumbnail":
      {
        if (!openFile) {
          q();
          return;
        }
        let e = getSceneGraphInstance().get(i.widgetId);
        if (!e) return;
        let t = xG(e);
        let r = URL.createObjectURL(t);
        debugState.dispatch(_$$r({
          localFileId: i.localFileId,
          publishedPluginId: i.widgetId,
          entryPoint: PageTypeEnum.EDITOR,
          localSnapshotUrl: r,
          localSnapshotBlob: t,
          widgetNodeId: i.widgetId
        }));
        return;
      }
    case "publish-widget":
      if (O) return _$$R.instance.handleUpgrade(Q7.MANAGE_EXTENSIONS);
      if (!openFile) {
        q();
        return;
      }
      debugState.dispatch(_$$r({
        localFileId: i.localFileId,
        publishedPluginId: i.widgetId,
        entryPoint: PageTypeEnum.EDITOR
      }));
      return;
    case "view-api-docs":
      {
        let e = "https://www.figma.com/plugin-docs/api/api-reference/";
        handleUrlAction(e) || open(e, "_blank");
        return;
      }
    case "create-new-plugin":
      if (O) return _$$R.instance.handleUpgrade(Q7.MANAGE_EXTENSIONS);
      fullscreenValue.dispatch(showModalHandler({
        type: _$$h,
        data: {
          resourceType: HubTypeEnum.PLUGIN
        }
      }));
      return;
    case "create-new-widget":
      if (O) return _$$R.instance.handleUpgrade(Q7.MANAGE_EXTENSIONS);
      fullscreenValue.dispatch(showModalHandler({
        type: _$$h,
        data: {
          resourceType: HubTypeEnum.WIDGET
        }
      }));
      return;
    case "import-widget-from-manifest":
      if (O) return _$$R.instance.handleUpgrade(Q7.MANAGE_EXTENSIONS);
      fullscreenValue.dispatch(JZ({
        resourceType: "widget"
      }));
      return;
    case "import-plugin-from-manifest":
      if (O) return _$$R.instance.handleUpgrade(Q7.MANAGE_EXTENSIONS);
      fullscreenValue.dispatch(JZ({
        resourceType: "plugin"
      }));
      return;
    case "open-console":
    case "toggle-console":
      if (!W) return;
      if ("toggle-realms" === i.actualTypeForBackwardsCompatibility) {
        fullscreenValue.triggerAction("toggle-use-realms-for-plugin-dev");
        return;
      }
      W.toggleDevTools("bottom");
      i.showError ? console.error(i.showError) : trackEventAnalytics("Plugin Open Dev Tools");
      return;
    case "toggle-use-local-related-link-plugin":
      {
        if (!W) return;
        let e = debugState.getState().mirror.appModel.useLocalRelatedLinkPlugin;
        updateFullscreenAppModel({
          useLocalRelatedLinkPlugin: !e
        });
        return;
      }
    case "open-dir":
      if (!W) return;
      W.openExtensionDirectory(i.localFileId);
      return;
    case "unpurchased-plugin":
      return;
    case "toggle-hot-reload-plugin-dev":
      {
        let e = debugState.getState().mirror.appModel.hotReloadPluginDev;
        updateFullscreenAppModel({
          hotReloadPluginDev: !e
        });
        return;
      }
    default:
      throwTypeError(i);
  }
}
export const Im = $$J0;
export const aS = function e(t, i) {
  switch (t.type) {
    case "run-menu-action":
      return {
        displayText: PluginMenu.nameOfMenuItem(t),
        callback: i(t)
      };
    case "separator":
      return {
        displayText: "",
        separator: !0
      };
    case "header":
      return {
        header: !0,
        displayText: t.name
      };
    case "submenu":
      {
        let n = [];
        t.submenu.forEach(t => {
          n.push(e(t, i));
        });
        return {
          displayText: t.name,
          children: n
        };
      }
    default:
      throwTypeError(t);
  }
};
export const ft = $$Y2;
export const gy = $$K3;
export const qs = $$Q4;
