import { reportError } from '../905/11';
import { runPluginParameterEntry } from '../905/12045';
import { PluginAction } from '../905/15667';
import { TabCategory } from '../905/42189';
import { s as _$$s } from '../905/58247';
import { showModalHandler } from '../905/156213';
import { ServiceCategories } from '../905/165054';
import { xG } from '../905/277373';
import { handleUrlAction } from '../905/280005';
import { VisualBellActions } from '../905/302958';
import { debugState } from '../905/407919';
import { trackEventAnalytics } from '../905/449184';
import { formatI18nMessage } from '../905/482208';
import { getFeatureFlags } from '../905/601108';
import { customHistory } from '../905/612521';
import { nV } from '../905/625959';
import { handlePluginError } from '../905/753206';
import { PluginMenu } from '../905/791556';
import { createWidget } from '../905/813868';
import { getSceneGraphInstance } from '../905/830071';
import { PageTypeEnum } from '../figma_app/10554';
import { atomStoreManager } from '../figma_app/27355';
import { HubTypeEnum } from '../figma_app/45218';
import { defaultViewAtom } from '../figma_app/69680';
import { hasLocalFileId } from '../figma_app/155287';
import { getPluginManager } from '../figma_app/170366';
import { canRunPlugin, getCurrentPluginVersion, getFullscreenViewEditorType } from '../figma_app/300692';
import { HubAction } from '../figma_app/350203';
import { fullscreenValue } from '../figma_app/455680';
import { throwTypeError } from '../figma_app/465776';
import { SimpleComponentType } from '../figma_app/504088';
import { spellCheckManager } from '../figma_app/506364';
import { zM } from '../figma_app/580736';
import { PluginManager } from '../figma_app/612938';
import { assetCategoryAtom, AssetCategoryEnum } from '../figma_app/639711';
import { JZ } from '../figma_app/696043';
import { setSelectedDevModePropertiesPanelTab, updateActiveTextReviewPlugin, updateFullscreenAppModel } from '../figma_app/741237';
import { h as _$$h } from '../figma_app/752483';
import { IAssertResource } from '../figma_app/763686';
import { r as _$$r } from '../figma_app/896657';
import { setQuickAccessToolActionCreator } from '../figma_app/972736';
import { PluginIframeMode, PluginUIManager } from '../figma_app/985200';
let W = getPluginManager();
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
    type: 'run-menu-action',
    name: {
      type: 'string-key',
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
    message: 'File must be fully loaded to run plugin.',
    type: 'missing-file-key-to-run-plugin',
    error: !0
  }));
}
function $(e) {
  return 'publishedPlugins' in e && 'allSavedPlugins' in e && 'activeTextReviewPlugin' in e && 'userCanViewPlugins' in e;
}
function Z(e) {
  return 'publishedWidgets' in e;
}
export function $$Q4(e) {
  return e.menuAction.type === 'insert-local-widget' || e.menuAction.type === 'insert-installed-widget';
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
    case 'insert-local-widget':
      {
        if (O) return PluginManager.instance.handleUpgrade(PluginAction.RUN_WIDGET);
        if (!Z(e)) {
          reportError(ServiceCategories.EXTENSIBILITY, new Error('runExtensionMenuAction: Expected WidgetsMenuArgs'), {
            tags: {
              menuActionType: 'insert-local-widget'
            }
          });
          return;
        }
        if (!openFile) {
          q();
          return;
        }
        let t = localExtensions[i.localFileId];
        t ? createWidget({
          pluginID: t.plugin_id,
          widgetName: t.name,
          pluginVersionID: ''
        }) : reportError(ServiceCategories.EXTENSIBILITY, new Error('runExtensionMenuAction: Widget not found'), {
          tags: {
            menuActionType: 'insert-local-widget',
            localFileId: i.localFileId
          }
        });
        return;
      }
    case 'insert-installed-widget':
      {
        if (O) return PluginManager.instance.handleUpgrade(PluginAction.RUN_WIDGET);
        if (!Z(e)) {
          reportError(ServiceCategories.EXTENSIBILITY, new Error('runExtensionMenuAction: Expected WidgetsMenuArgs'), {
            tags: {
              menuActionType: 'insert-installed-widget'
            }
          });
          return;
        }
        let t = e.publishedWidgets[i.pluginId];
        let n = getCurrentPluginVersion(t);
        t && n ? createWidget({
          pluginID: t.id,
          widgetName: n.name,
          pluginVersionID: n.id
        }) : reportError(ServiceCategories.EXTENSIBILITY, new Error('runExtensionMenuAction: Widget not found'), {
          tags: {
            menuActionType: 'insert-installed-widget',
            widgetId: i.pluginId
          }
        });
        return;
      }
    case 'run-local-plugin':
      {
        if (O) return PluginManager.instance.handleUpgrade(PluginAction.RUN_PLUGIN);
        if (!$(e)) {
          reportError(ServiceCategories.EXTENSIBILITY, new Error('runExtensionMenuAction: Expected PluginsMenuArgs'), {
            tags: {
              menuActionType: 'run-local-plugin'
            }
          });
          return;
        }
        if (i.parameterOnly && i.parameterEntry) {
          runPluginParameterEntry(i, t, fullscreenValue.dispatch);
          return;
        }
        let r = localExtensions[i.localFileId];
        if (!r) {
          reportError(ServiceCategories.EXTENSIBILITY, new Error('runExtensionMenuAction: Plugin not found'), {
            tags: {
              menuActionType: 'run-local-plugin'
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
        s.canRun ? PluginManager.instance.enqueue({
          mode: 'run-forever',
          runPluginArgs: {
            plugin: r,
            command: i.command || '',
            queryMode: !1,
            runMode: 'default',
            triggeredFrom: t,
            openFileKey: openFile?.key || '',
            isWidget: !1
          }
        }) : reportError(ServiceCategories.EXTENSIBILITY, new Error('runExtensionMenuAction: Cannot run plugin'), {
          tags: {
            menuActionType: 'run-local-plugin',
            canRunMessage: s.message
          }
        });
        return;
      }
    case 'run-installed-plugin':
      {
        if (O) return PluginManager.instance.handleUpgrade(PluginAction.RUN_PLUGIN);
        if (!$(e)) {
          reportError(ServiceCategories.EXTENSIBILITY, new Error('runExtensionMenuAction: Expected PluginsMenuArgs'), {
            tags: {
              menuActionType: 'run-installed-plugin'
            }
          });
          return;
        }
        if (i.parameterOnly && i.parameterEntry) {
          runPluginParameterEntry(i, t, fullscreenValue.dispatch);
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
          reportError(ServiceCategories.EXTENSIBILITY, new Error('runExtensionMenuAction: Plugin not found'), {
            tags: {
              menuActionType: 'run-installed-plugin',
              pluginId: i.pluginId
            }
          });
          return;
        }
        let s = canRunPlugin({
          plugin: r
        });
        s.canRun ? PluginManager.instance.enqueue({
          mode: 'run-forever',
          runPluginArgs: {
            plugin: r,
            command: i.command || '',
            queryMode: !1,
            runMode: 'default',
            triggeredFrom: t,
            openFileKey: openFile?.key || '',
            isWidget: !1
          }
        }) : reportError(ServiceCategories.EXTENSIBILITY, new Error('runExtensionMenuAction: Cannot run plugin'), {
          tags: {
            menuActionType: 'run-installed-plugin',
            pluginId: i.pluginId,
            canRunMessage: s.message
          }
        });
        return;
      }
    case 'set-text-review-plugin':
      if (O) return PluginManager.instance.handleUpgrade(PluginAction.RUN_PLUGIN);
      updateActiveTextReviewPlugin(i.textReviewPluginInfo);
      spellCheckManager.reset();
      return;
    case 'run-last':
      if (O) return PluginManager.instance.handleUpgrade(PluginAction.RUN_PLUGIN);
      fullscreenValue.triggerAction('plugins-run-last', {
        source: 'menu'
      });
      return;
    case 'manage-widgets':
      fullscreenValue.dispatch(setQuickAccessToolActionCreator({
        toolType: 'widget'
      }));
      fullscreenValue.triggerAction('clear-tool', {
        source: 'menu'
      });
      _$$s({
        initialX: 0,
        initialY: 0,
        initialTab: w === 'figjam' ? TabCategory.WIDGETS : void 0,
        initialFdResourceTab: w === 'figma' ? SimpleComponentType.WIDGET : void 0,
        initialFdView: w === 'figma' ? 'development' : void 0,
        scrollDevelopmentSectionIntoView: w === 'figjam',
        source: K
      });
      return;
    case 'manage-plugins':
      {
        if (w === 'dev' || w === 'inspect') {
          setSelectedDevModePropertiesPanelTab(IAssertResource.PLUGIN);
          atomStoreManager.set(defaultViewAtom, 'development');
          PluginUIManager.getInstance()?.getIframeId() === PluginIframeMode.INSPECT && handlePluginError();
          return;
        }
        if (w === 'buzz') {
          atomStoreManager.set(assetCategoryAtom, AssetCategoryEnum.PLUGINS);
          atomStoreManager.set(zM, 'development');
          PluginUIManager.getInstance()?.getIframeId() === PluginIframeMode.BUZZ_LEFT_PANEL && handlePluginError();
          return;
        }
        fullscreenValue.dispatch(setQuickAccessToolActionCreator({
          toolType: 'plugin'
        }));
        fullscreenValue.triggerAction('clear-tool', {
          source: 'menu'
        });
        let e = w === 'figma' || w === 'slides';
        _$$s({
          initialX: 0,
          initialY: 0,
          initialTab: w === 'figjam' ? TabCategory.PLUGINS : void 0,
          initialFdResourceTab: e ? SimpleComponentType.PLUGIN : void 0,
          scrollDevelopmentSectionIntoView: w === 'figjam',
          initialFdView: e ? 'development' : void 0,
          source: K
        });
        return;
      }
    case 'browse':
      customHistory.redirect('/community/plugins', '_blank');
      return;
    case 'browse-plugins':
      if (nV(), fullscreenValue.dispatch(setQuickAccessToolActionCreator({
        toolType: 'plugin'
      })), fullscreenValue.triggerAction('clear-tool', {
        source: 'menu'
      }), trackEventAnalytics(HubAction.FIND_MORE_PLUGINS, {
        isWidget: !1,
        triggeredFrom: t
      }), w === 'dev' || w === 'inspect') {
        setSelectedDevModePropertiesPanelTab(IAssertResource.PLUGIN);
        atomStoreManager.set(defaultViewAtom, 'recents_and_saved');
        PluginUIManager.getInstance()?.getIframeId() === PluginIframeMode.INSPECT && handlePluginError();
        return;
      }
      if (w === 'buzz') {
        atomStoreManager.set(assetCategoryAtom, AssetCategoryEnum.PLUGINS);
        atomStoreManager.set(zM, 'recents_and_saved');
        PluginUIManager.getInstance()?.getIframeId() === PluginIframeMode.BUZZ_LEFT_PANEL && handlePluginError();
        return;
      }
      _$$s({
        initialX: 0,
        initialY: 0,
        initialTab: w === 'figjam' ? TabCategory.PLUGINS : void 0,
        initialFdResourceTab: w === 'figma' ? SimpleComponentType.PLUGIN : void 0,
        initialFdView: w === 'figma' ? 'recents_and_saved' : void 0,
        source: K
      });
      return;
    case 'select-all-widgets':
      fullscreenValue.triggerAction('select-all-widgets');
      return;
    case 'browse-widgets':
      nV();
      fullscreenValue.dispatch(setQuickAccessToolActionCreator({
        toolType: 'widget'
      }));
      fullscreenValue.triggerAction('clear-tool', {
        source: 'menu'
      });
      trackEventAnalytics(HubAction.FIND_MORE_PLUGINS, {
        isWidget: !0,
        triggeredFrom: t
      });
      _$$s({
        initialX: 0,
        initialY: 0,
        initialTab: w === 'figjam' ? TabCategory.WIDGETS : void 0,
        initialFdResourceTab: w === 'figma' ? SimpleComponentType.WIDGET : void 0,
        source: K
      });
      return;
    case 'set-widget-thumbnail':
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
    case 'publish-widget':
      if (O) return PluginManager.instance.handleUpgrade(PluginAction.MANAGE_EXTENSIONS);
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
    case 'view-api-docs':
      {
        let e = 'https://www.figma.com/plugin-docs/api/api-reference/';
        handleUrlAction(e) || open(e, '_blank');
        return;
      }
    case 'create-new-plugin':
      if (O) return PluginManager.instance.handleUpgrade(PluginAction.MANAGE_EXTENSIONS);
      fullscreenValue.dispatch(showModalHandler({
        type: _$$h,
        data: {
          resourceType: HubTypeEnum.PLUGIN
        }
      }));
      return;
    case 'create-new-widget':
      if (O) return PluginManager.instance.handleUpgrade(PluginAction.MANAGE_EXTENSIONS);
      fullscreenValue.dispatch(showModalHandler({
        type: _$$h,
        data: {
          resourceType: HubTypeEnum.WIDGET
        }
      }));
      return;
    case 'import-widget-from-manifest':
      if (O) return PluginManager.instance.handleUpgrade(PluginAction.MANAGE_EXTENSIONS);
      fullscreenValue.dispatch(JZ({
        resourceType: 'widget'
      }));
      return;
    case 'import-plugin-from-manifest':
      if (O) return PluginManager.instance.handleUpgrade(PluginAction.MANAGE_EXTENSIONS);
      fullscreenValue.dispatch(JZ({
        resourceType: 'plugin'
      }));
      return;
    case 'open-console':
    case 'toggle-console':
      if (!W) return;
      if (i.actualTypeForBackwardsCompatibility === 'toggle-realms') {
        fullscreenValue.triggerAction('toggle-use-realms-for-plugin-dev');
        return;
      }
      W.toggleDevTools('bottom');
      i.showError ? console.error(i.showError) : trackEventAnalytics('Plugin Open Dev Tools');
      return;
    case 'toggle-use-local-related-link-plugin':
      {
        if (!W) return;
        let e = debugState.getState().mirror.appModel.useLocalRelatedLinkPlugin;
        updateFullscreenAppModel({
          useLocalRelatedLinkPlugin: !e
        });
        return;
      }
    case 'open-dir':
      if (!W) return;
      W.openExtensionDirectory(i.localFileId);
      return;
    case 'unpurchased-plugin':
      return;
    case 'toggle-hot-reload-plugin-dev':
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
export function aS(t, i) {
  switch (t.type) {
    case 'run-menu-action':
      return {
        displayText: PluginMenu.nameOfMenuItem(t),
        callback: i(t)
      };
    case 'separator':
      return {
        displayText: '',
        separator: !0
      };
    case 'header':
      return {
        header: !0,
        displayText: t.name
      };
    case 'submenu':
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
}
export const ft = $$Y2;
export const gy = $$K3;
export const qs = $$Q4;