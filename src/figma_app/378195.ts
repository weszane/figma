import { createActionCreator } from "../905/73481";
import { widgetManagerHandler } from "../905/239551";
import { createOptimistThunk } from "../905/350402";
import { FlashActions } from "../905/573154";
import { handlePluginError } from "../905/753206";
import { runLastPlugin, hasStoredValue } from "../905/851937";
import { debounce } from "../905/915765";
import { PluginPublishModal } from "../905/938553";
import { incrementCounter } from "../905/949750";
import { hasLocalFileId } from "../figma_app/155287";
import { getPluginManager } from "../figma_app/170366";
import { getLocalPluginManifest, getPublishingData, isDefaultPublishingData, loadLocalPluginManifest } from "../figma_app/300692";
import { updateMetadata, clearMetadataAndStatus } from "../figma_app/559491";
import { getPermissionsState } from "../figma_app/642025";
import { SH } from "../figma_app/790714";

// Origin: /Users/allen/sigma-main/src/figma_app/378195.ts
// Refactored: Renamed variables, added TypeScript types/interfaces, simplified logic, added comments for clarity and potential issues.

// --- Type Definitions ---

// Represents the structure of plugin manifest metadata cached by PluginManager
interface CachedManifestMetadata {
  cachedContainsWidget?: boolean;
  lastKnownPluginId?: string;
}

// Represents the structure of a plugin manifest loaded from disk
interface LocalPluginManifest {
  localFileId: number;
  cachedContainsWidget?: boolean;
  lastKnownPluginId?: string;
  plugin_id?: string;
  error?: any;
  // ...other properties as needed
}

// Represents the manifest change event
interface ManifestChangeEvent {
  type: "added" | "changed" | "removed";
  id: number;
  localLoadResult?: any;
  manifestFileId?: number;
}

// Represents the Redux store context for thunks
interface StoreContext {
  dispatch: (action: any) => void;
  getState: () => any;
}

// --- Action Creators ---

export const pluginInitializeLocal = createActionCreator("PLUGIN_INITIALIZE_LOCAL");
export const pluginUpdateLocal = createActionCreator("PLUGIN_UPDATE_LOCAL");
export const pluginDeleteLocal = createActionCreator("PLUGIN_DELETE_LOCAL");

// --- Internal State ---

let manifestObserversRegistered = false;

// --- Plugin Manager Instance ---

const pluginManager = getPluginManager();

// --- Thunk: Initialize Local Plugins ---

export const initializeLocalPluginsThunk = createOptimistThunk(async (context: StoreContext) => {
  if (!pluginManager) return;

  // Handle different desktop versions for compatibility
  if (pluginManager.isCompatibleWith({
    desktopVersion: 59
  })) {
    // Version 59: Get cached metadata for each local manifest file
    const cachedMetadataMap: Record<string, CachedManifestMetadata> = (await pluginManager.getLocalManifestFileExtensionIdsToCachedMetadataMap()) ?? {};
    const fileIds = Object.keys(cachedMetadataMap).map(Number) as any[];

    // Load manifests for each file ID
    const manifests = (await Promise.all(fileIds.map(fileId => loadLocalPluginManifest(fileId, {
      resourceType: "unknown"
    })))) as any[];

    // Attach cached metadata to each manifest
    const localPlugins: Record<number, LocalPluginManifest> = {};
    manifests.forEach(manifest => {
      const metadata = cachedMetadataMap[manifest.localFileId];
      manifest.cachedContainsWidget = !!metadata?.cachedContainsWidget;
      manifest.lastKnownPluginId = metadata?.lastKnownPluginId || "";
      localPlugins[manifest.localFileId] = manifest;
    });
    context.dispatch(pluginInitializeLocal(localPlugins));
  } else if (pluginManager.isCompatibleWith({
    desktopVersion: 58
  })) {
    // Version 58: Only cachedContainsWidget info available
    const containsWidgetMap: Record<string, boolean> = await pluginManager.getLocalManifestFileExtensionIdsToCachedContainsWidgetMap();
    const fileIds = Object.keys(containsWidgetMap).map(Number) as any[];
    const manifests = (await Promise.all(fileIds.map(fileId => loadLocalPluginManifest(fileId, {
      resourceType: "unknown"
    })))) as any[];
    const localPlugins: Record<number, LocalPluginManifest> = {};
    manifests.forEach(manifest => {
      manifest.cachedContainsWidget = !!containsWidgetMap[manifest.localFileId];
      localPlugins[manifest.localFileId] = manifest;
    });
    context.dispatch(pluginInitializeLocal(localPlugins));
  } else {
    // Older versions: Just get all local file IDs
    const fileIds: any[] = await pluginManager.getAllLocalFileExtensionIds();
    const manifests = await Promise.all(fileIds.map(fileId => loadLocalPluginManifest(fileId, {
      resourceType: "unknown"
    })));
    const localPlugins: Record<number, LocalPluginManifest> = {};
    manifests.forEach(manifest => {
      localPlugins[manifest.localFileId] = manifest;
    });
    context.dispatch(pluginInitializeLocal(localPlugins));
  }

  // Register observers only once
  if (!manifestObserversRegistered) {
    manifestObserversRegistered = true;

    // Manifest change observer
    pluginManager.registerManifestChangeObserver((event: ManifestChangeEvent) => {
      if (event.type === "added" || event.type === "changed") {
        // Load updated manifest and update local state
        const manifest = getLocalPluginManifest(event.id, event.localLoadResult, {
          resourceType: "unknown"
        });
        const previousPluginId = context.getState().localPlugins[event.id]?.plugin_id;
        context.dispatch(pluginUpdateLocal(manifest));

        // Gather state for publishing logic
        const state = context.getState();
        const {
          publishingPlugins,
          localPlugins,
          publishedPlugins,
          publishedWidgets,
          currentUserOrgId,
          authedProfilesById,
          modalShown
        } = state;
        const publishingPlugin = publishingPlugins[event.id];

        // If plugin_id changed and publish modal not shown, show publish modal
        if (manifest.plugin_id !== previousPluginId && modalShown?.type !== PluginPublishModal.type) {
          context.dispatch(clearMetadataAndStatus({
            id: event.id
          }));
        }

        // Try to get publishing data and update if needed
        try {
          const publishingData = getPublishingData({
            ...getPermissionsState(state),
            currentUserOrgId,
            localPlugins,
            publishedPlugins,
            publishedWidgets,
            authedProfilesById
          }, event.id);

          // If publishing plugin metadata is default and manifest has no error, update publishing metadata
          if (publishingPlugin && publishingPlugin.metadata && isDefaultPublishingData(publishingPlugin.metadata) && !manifest.error) {
            context.dispatch(updateMetadata({
              id: event.id,
              metadata: publishingData
            }));
          }
        } catch (error: any) {
          context.dispatch(FlashActions.error(error.message));
        }
      } else if (event.type === "removed") {
        // Remove plugin from local state
        context.dispatch(pluginDeleteLocal(event.id));
      }
    });

    // Debounced code change observer for hot-reloading widgets
    const debouncedCodeChangeObserver = debounce((event: ManifestChangeEvent) => {
      if (event.type === "added" || event.type === "changed") {
        const selectedWidgetInfo = context.getState().mirror?.selectionProperties?.selectedWidgetInfo;
        if (selectedWidgetInfo && selectedWidgetInfo.pluginID && selectedWidgetInfo.widgetID) {
          widgetManagerHandler.mountWidget(selectedWidgetInfo.pluginID, selectedWidgetInfo.widgetID, "hot-reloading re-render");
        }

        // Hot reload plugin dev logic
        const plugin = SH()?.plugin;
        const triggeredFrom = SH()?.triggeredFrom;
        const state = context.getState();
        if ("manifestFileId" in event && plugin && hasLocalFileId(plugin) && state.mirror.appModel.hotReloadPluginDev && event.manifestFileId === plugin.localFileId && hasStoredValue()) {
          // Handle plugin error and increment counter
          (async () => {
            await handlePluginError();
            if (triggeredFrom !== "codegen") {
              runLastPlugin({
                newTriggeredFrom: null
              });
            }
            incrementCounter();
          })();
        }
      }
    });

    // Register observers for code, manifest, and UI changes
    pluginManager.registerCodeChangeObserver(debouncedCodeChangeObserver);
    pluginManager.registerManifestChangeObserver(debouncedCodeChangeObserver);
    pluginManager.registerUiChangeObserver(debouncedCodeChangeObserver);
  }
});

// --- Exported Action Creators and Thunk ---

export const Ob = pluginInitializeLocal;
export const Po = pluginUpdateLocal;
export const Zy = pluginDeleteLocal;
export const _J = initializeLocalPluginsThunk;