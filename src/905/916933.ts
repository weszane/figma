import { VisualBellActions } from '../905/302958';
import { getI18nString } from '../905/303541';
import { debugState } from '../905/407919';
import { trackEventAnalytics } from '../905/449184';
import { VisualBellIcon } from '../905/576487';
import { getFeatureFlags } from '../905/601108';
import { getCurrentGRAtom, getCurrentPluginRunID, pluginState } from '../905/753206';
import { isFullscreenDevHandoffView } from '../905/782918';
import { handleLoadAllPagesWithVersionCheck } from '../905/807667';
import { getPluginConnectionState } from '../905/816197';
import { atomStoreManager } from '../figma_app/27355';
import { hasLocalFileId, manifestContainsWidget } from '../figma_app/155287';
import { buildUploadUrl, getInitialOptions } from '../figma_app/169182';
import { hasTextReviewCapability } from '../figma_app/300692';
import { fullscreenValue } from '../figma_app/455680';
import { nc, s6 } from '../figma_app/474636';
import { DataLoadStatus, IPagePlugin, Multiplayer, PluginModalType } from '../figma_app/763686';
import { AppModelElement } from '../../types/app';

// Cache for incremental loading list
let n: Set<string> | undefined;
/**
 * Creates an empty set for incremental loading list.
 * Original: I()
 * @returns {Set} An empty Set.
 */
function createEmptyIncrementalSet(): Set<string> {
  return new Set();
}

/**
 * Fetches the incremental loading list from the server.
 * Original: $$E()
 * @returns {Promise<Set>} A promise that resolves to a Set of plugin IDs.
 */
async function fetchIncrementalLoadingList(): Promise<Set<string>> {
  if (n) return n;
  try {
    const clusterName = getInitialOptions().cluster_name;
    let url: URL | undefined;
    if (clusterName === 'staging') {
      url = new URL(buildUploadUrl('d22f7cdebb6824859628228028af4125310c5497'));
    } else if (clusterName === 'prod') {
      url = new URL(buildUploadUrl('59b96eebae268ef59559b1850b43a3bf625b9bfa'));
    }
    if (!url) return createEmptyIncrementalSet();
    const response = await fetch(url);
    if (!response.ok) {
      console.error('Error fetching incremental loading list');
      return createEmptyIncrementalSet();
    }
    const data = await response.json();
    return n = new Set(data);
  } catch {
    console.error('Error fetching incremental loading list');
    return createEmptyIncrementalSet();
  }
}

/**
 * Determines if all pages should be loaded for the plugin.
 * Original: x(e, t)
 * @param plugin - The plugin object.
 * @param queryMode - Whether in query mode.
 * @returns {Promise<boolean>} True if should load all pages.
 */
async function shouldLoadAllPages(plugin: any, queryMode: boolean): Promise<boolean> {
  if (!Multiplayer.isIncrementalSession()) {
    if (Multiplayer.isValidatingIncremental()) {
      await handleLoadAllPagesWithVersionCheck(PluginModalType.PLUGIN_VALIDATION);
    }
    return false;
  }
  const pluginId = plugin?.plugin_id || null;
  const documentAccess = plugin?.manifest.documentAccess || null;
  if (!pluginId || plugin && hasTextReviewCapability(plugin) || isFullscreenDevHandoffView(debugState.getState().selectedView)) {
    return false;
  }
  if (queryMode) return false;
  const forceLoad = getFeatureFlags().plugins_force_load_all_pages;
  if (forceLoad) return true;
  if (documentAccess) {
    return documentAccess !== 'dynamic-page';
  }
  const incrementalSet = await fetchIncrementalLoadingList();
  return !incrementalSet.has(pluginId);
}

/**
 * Loads all pages with UI feedback and cancellation support.
 * Original: $$S0(e, t, i)
 * @param plugin - The plugin object.
 * @param event - The event triggering the load.
 * @param modalType - The type of modal.
 * @returns {Promise<{isCancelled: boolean}>} Result indicating if cancelled.
 */
export async function loadAllPagesWithUI(plugin: any, event: any, modalType: PluginModalType): Promise<{
  isCancelled: boolean;
}> {
  const pageList = debugState.getState().mirror.appModel.pagesList as AppModelElement[]
  const unloadedPagesCount = pageList.filter(page => page.status === DataLoadStatus.NOT_LOADED).length;
  if (unloadedPagesCount === 0) {
    return {
      isCancelled: false
    };
  }
  atomStoreManager.set(s6, true);
  const message = plugin && manifestContainsWidget(plugin) ? getI18nString('plugins.loading_pages_for_widget', {
    numUnloadedPages: unloadedPagesCount
  }) : getI18nString('plugins.loading_pages_for_plugin', {
    numUnloadedPages: unloadedPagesCount
  });
  const dequeueLoadingBell = () => {
    fullscreenValue.dispatch(VisualBellActions.dequeue({
      matchType: 'loading-pages-for-plugin'
    }));
  };
  let isCancelled = false;
  let cancelCallback: () => void = () => {};
  const cancelPromise = new Promise<void>(resolve => {
    atomStoreManager.set(nc, true);
    cancelCallback = resolve;
  });
  if (plugin && manifestContainsWidget(plugin) && event?.widgetAction === 'insert') {
    fullscreenValue.dispatch(VisualBellActions.dequeue({
      matchType: 'plugins-status'
    }));
  }
  fullscreenValue.dispatch(VisualBellActions.enqueue({
    message,
    icon: VisualBellIcon.IMAGE_BACKED_SPINNER,
    type: 'loading-pages-for-plugin',
    delay: 1000,
    timeoutOverride: Infinity,
    button: {
      text: getI18nString('plugins.cancel_loading_pages'),
      action: () => {
        cancelCallback();
        dequeueLoadingBell();
        if (!isCancelled) {
          trackPluginStartCancelled(event);
        }
        isCancelled = true;
      }
    }
  }));
  const loadPromise = handleLoadAllPagesWithVersionCheck(modalType);
  if (getPluginConnectionState()) {
    Multiplayer.resolveSceneGraphQueryForTest('0:0', IPagePlugin.DEFAULT);
  } else {
    await Promise.race([loadPromise, cancelPromise]);
    dequeueLoadingBell();
    atomStoreManager.set(s6, false);
  }
  return {
    isCancelled
  };
}

/**
 * Tracks analytics for cancelled plugin start.
 * Extracted from original $$S0 for clarity.
 * @param event - The event.
 */
function trackPluginStartCancelled(event: any): void {
  const plugin = event?.plugin ?? getCurrentGRAtom() ?? null;
  const stats = pluginState.stats;
  trackEventAnalytics('Plugin Start Cancelled', {
    pluginRunID: getCurrentPluginRunID(),
    trigger: event?.triggeredFrom,
    runMode: event?.runMode,
    isWidget: event?.isWidget,
    command: event?.command,
    fileKey: event?.openFileKey,
    pluginID: plugin?.plugin_id,
    ...(stats ? stats.getTimingMarks() : {}),
    ...(plugin ? hasLocalFileId(plugin) ? {
      pluginVersionID: '',
      source: 'development',
      name: '<local plugin>'
    } : {
      pluginVersionID: plugin.id,
      source: 'imported',
      name: plugin.name
    } : {})
  });
}

/**
 * Waits for all pages to be loaded for the plugin if necessary.
 * Original: $$w1(e)
 * @param event - The event.
 * @returns {Promise<{isCancelled: boolean}>} Result indicating if cancelled.
 */
export async function waitForAllPagesForPlugin(event: any): Promise<{
  isCancelled: boolean;
}> {
  const plugin = event?.plugin ?? getCurrentGRAtom();
  const queryMode = event?.queryMode ?? false;
  const shouldLoad = await shouldLoadAllPages(plugin, queryMode);
  if (shouldLoad) {
    if (pluginState.stats) {
      return await pluginState.stats.markDuration('waitForAllPagesForPluginMs', async () => await loadAllPagesWithUI(plugin, event, PluginModalType.LEGACY_PLUGIN));
    } else {
      return await loadAllPagesWithUI(plugin, event, PluginModalType.LEGACY_PLUGIN);
    }
  }
  return {
    isCancelled: false
  };
}

// Exported aliases for backward compatibility
export const E = loadAllPagesWithUI;
export const y = waitForAllPagesForPlugin;
