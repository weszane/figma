import type { AnyAction } from "redux"; // Assumed dependency for type safety
import { createElement } from "react";
import { ThunkAction } from "redux-thunk"; // Assumed dependency for type safety
import { TabCategory } from "../905/42189";
import { s as _$$s } from "../905/58247";
import { setUniversalInsertViewResourceDetails } from "../905/116101";
import { ExtensionSource } from "../905/235578";
import { dX } from "../905/294543";
import { isValidPluginId } from "../905/327571";
import { createOptimistThunk } from "../905/350402";
import { trackEventAnalytics } from "../905/449184";
import { handleAtomEvent } from "../905/502364";
import { getCodegenLanguagePreference } from "../905/515076";
import { getFeatureFlags } from "../905/601108";
import { getOpenFileKey } from "../905/622391";
import { createWidget } from "../905/813868";
import { ExtensionFeatureKey } from "../905/946805";
import { canRunExtensions } from "../figma_app/12796";
import { atomStoreManager } from "../figma_app/27355";
import { HubTypeEnum } from "../figma_app/45218";
import { FEditorType } from "../figma_app/53721";
import { zM } from "../figma_app/89917";
import { fetchAndSyncVersions } from "../figma_app/147952";
import { ManifestEditorType } from "../figma_app/155287";
import { fK } from "../figma_app/300024";
import { isSingleDevWithCodegen } from "../figma_app/300692";
import { $I, RM } from "../figma_app/322845";
import { fullscreenValue } from "../figma_app/455680";
import { throwTypeError } from "../figma_app/465776";
import { SimpleComponentType } from "../figma_app/504088";
import { fetchCanvasWidgetVersions } from "../figma_app/559491";
import { PluginManager } from "../figma_app/612938";
import { assetCategoryAtom, AssetCategoryEnum } from "../figma_app/639711";
import { setSelectedDevModePropertiesPanelTab } from "../figma_app/741237";
import { Fullscreen, IAssertResource } from "../figma_app/763686";
import { C as _$$C } from "../figma_app/959385";
import { Rt } from "../figma_app/979658";

/**
 * Refactored from: /Users/allen/github/fig/src/905/489647.ts
 * Origin: $$j0 thunk for handling "Try Plugin" in fullscreen mode.
 *
 * Changes:
 * - Renamed variables for clarity.
 * - Added TypeScript types and interfaces.
 * - Simplified logic and added comments for key steps.
 * - Noted assumed dependencies from imports.
 * - Improved readability and formatting.
 */

// --- Type Definitions ---

interface TryPluginParams {
  [key: string]: any; // Replace with specific params if known
}
interface TryPluginThunkArgs {
  tryPluginId: string;
  tryPluginName: string;
  tryPluginVersionId: string;
  isWidget: boolean;
  fullscreenEditorType: FEditorType;
  isPlaygroundFile: boolean;
  fileKey?: string;
  tryPluginParams?: TryPluginParams;
}

// --- Main Thunk ---

export const tryPluginInFullscreen = createOptimistThunk(async (dispatchOrStore, args: TryPluginThunkArgs): Promise<void> => {
  // Wait for fullscreen value to be ready
  await fullscreenValue.onReady();
  const state = dispatchOrStore.getState();
  const orgId = state.currentUserOrgId;
  const {
    tryPluginId,
    tryPluginName,
    tryPluginVersionId,
    isWidget,
    fullscreenEditorType,
    isPlaygroundFile,
    fileKey,
    tryPluginParams
  } = args;

  // Track analytics event for trying plugin in fullscreen
  trackEventAnalytics("extension_tried_in_fullscreen", {
    tryPluginId,
    tryPluginName,
    tryPluginVersionId,
    isWidget,
    fullscreenEditorType,
    isPlaygroundFile,
    fileKey,
    tryPluginParams: JSON.stringify(tryPluginParams)
  });
  const canRun = canRunExtensions(state);
  const initialPosition = {
    initialX: 0,
    initialY: 0
  };
  const source = "extension-try-from-community";

  // Special case: Widget, not playground, and can run extensions
  if (isWidget && !isPlaygroundFile && canRun) {
    await fetchCanvasWidgetVersions({
      [tryPluginId]: [tryPluginVersionId]
    }, orgId);
    createWidget({
      pluginID: tryPluginId,
      widgetName: tryPluginName,
      pluginVersionID: tryPluginVersionId
    });
    return;
  }

  // Fetch plugin version info
  const pluginVersionMap = await fetchAndSyncVersions(dispatchOrStore, {
    resourceType: HubTypeEnum.PLUGIN,
    resourceIds: [tryPluginId]
  });
  const pluginVersion = pluginVersionMap[tryPluginId];

  // If plugin version and params are valid, enqueue plugin run
  if (pluginVersion && tryPluginParams && isValidPluginId(tryPluginId) && canRun) {
    PluginManager.instance.enqueue({
      runPluginArgs: {
        plugin: pluginVersion,
        command: "",
        queryMode: false,
        triggeredFrom: "try-plugin-params",
        openFileKey: fileKey ?? getOpenFileKey() ?? "",
        isWidget: false,
        runMode: "default"
      },
      mode: "run-forever"
    });
    return;
  }

  // Handle editor type specific logic
  switch (fullscreenEditorType) {
    case FEditorType.Whiteboard:
      Fullscreen?.triggerAction("clear-tool", {
        source: fK
      });
      _$$s({
        ...initialPosition,
        initialTab: isWidget ? TabCategory.WIDGETS : TabCategory.PLUGINS,
        previewResource: {
          id: tryPluginId,
          type: isWidget ? Rt.WIDGETS : Rt.PLUGINS
        },
        source
      });
      return;
    case FEditorType.Design:
      Fullscreen?.triggerAction("clear-tool", {
        source: fK
      });
      if (RM()) {
        $I({
          moduleToOpen: {
            type: "custom",
            module: createElement(_$$C, {
              extensionId: tryPluginId,
              extensionType: ExtensionSource.COMMUNITY
            }),
            name: ExtensionFeatureKey.EXTENSION_DETAILS
          },
          trackingData: {
            source
          }
        });
      } else {
        dispatchOrStore.dispatch(setUniversalInsertViewResourceDetails({
          initialFdResourceTab: isWidget ? SimpleComponentType.WIDGET : SimpleComponentType.PLUGIN,
          fdPreviewResource: {
            id: tryPluginId,
            type: isWidget ? SimpleComponentType.WIDGET : SimpleComponentType.PLUGIN
          }
        }));
      }
      return;
    case FEditorType.DevHandoff:
      if (pluginVersion && isSingleDevWithCodegen(pluginVersion)) {
        const codeLanguage = getCodegenLanguagePreference(pluginVersion);
        dispatchOrStore.dispatch(dX({
          plugin: pluginVersion,
          codeLanguage
        }));
      } else {
        setSelectedDevModePropertiesPanelTab(IAssertResource.PLUGIN);
        _$$s({
          ...initialPosition,
          initialFdResourceTab: SimpleComponentType.PLUGIN,
          fdPreviewResource: {
            id: tryPluginId,
            type: SimpleComponentType.PLUGIN
          },
          source
        });
      }
      return;
    case FEditorType.Slides:
      $I({
        moduleToOpen: {
          type: "custom",
          module: createElement(_$$C, {
            extensionId: tryPluginId,
            extensionType: ExtensionSource.COMMUNITY
          }),
          name: ExtensionFeatureKey.EXTENSION_DETAILS
        },
        trackingData: {
          source
        }
      });
      return;
    case FEditorType.Cooper:
      if (getFeatureFlags().buzz_plugins) {
        atomStoreManager.set(assetCategoryAtom, AssetCategoryEnum.PLUGINS);
        _$$s({
          ...initialPosition,
          initialFdResourceTab: SimpleComponentType.PLUGIN,
          fdPreviewResource: {
            id: tryPluginId,
            type: SimpleComponentType.PLUGIN
          },
          source
        });
      }
    // fallthrough intended for Cooper, Illustration, Sites, Figmake

    case FEditorType.Illustration:
    case FEditorType.Sites:
    case FEditorType.Figmake:
      // No specific action for these editor types
      break;
    default:
      // Defensive: throw error for unknown editor type
      throwTypeError(fullscreenEditorType);
  }
});

// Export for compatibility with original code

export const $ = tryPluginInFullscreen;