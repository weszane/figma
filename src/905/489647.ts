import { createElement } from "react";
import { throwTypeError } from "../figma_app/465776";
import { Fullscreen, IAssertResource } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { handleAtomEvent } from "../905/502364";
import { assetCategoryAtom, AssetCategoryEnum } from "../figma_app/639711";
import { dX } from "../905/294543";
import { getCodegenLanguagePreference } from "../905/515076";
import { createOptimistThunk } from "../905/350402";
import { W9 } from "../figma_app/559491";
import { s as _$$s } from "../905/58247";
import { fetchAndSyncVersions } from "../figma_app/147952";
import { setUniversalInsertViewResourceDetails } from "../905/116101";
import { fullscreenValue } from "../figma_app/455680";
import { setSelectedDevModePropertiesPanelTab } from "../figma_app/741237";
import { noop } from "../905/813868";
import { canRunExtensions } from "../figma_app/12796";
import { isSingleDevWithCodegen } from "../figma_app/300692";
import { PluginManager } from "../figma_app/612938";
import { isValidPluginId } from "../905/327571";
import { Rt } from "../figma_app/979658";
import { HubTypeEnum } from "../figma_app/45218";
import { FEditorType } from "../figma_app/53721";
import { ManifestEditorType } from "../figma_app/155287";
import { getOpenFileKey } from "../905/622391";
import { zM } from "../figma_app/89917";
import { ExtensionFeatureKey } from "../905/946805";
import { RM, $I } from "../figma_app/322845";
import { Ag } from "../905/235578";
import { C as _$$C } from "../figma_app/959385";
import { p as _$$p } from "../905/42189";
import { SimpleComponentType } from "../figma_app/504088";
import { fK } from "../figma_app/300024";
export let $$j0 = createOptimistThunk(async (e, t) => {
  await fullscreenValue.onReady();
  let i = e.getState();
  let m = i.currentUserOrgId;
  let {
    tryPluginId,
    tryPluginName,
    tryPluginVersionId,
    isWidget,
    fullscreenEditorType,
    isPlaygroundFile,
    fileKey,
    tryPluginParams
  } = t;
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
  let K = canRunExtensions(i);
  let Y = {
    initialX: 0,
    initialY: 0
  };
  let q = "extension-try-from-community";
  if (isWidget && !isPlaygroundFile && K) {
    await W9({
      [tryPluginId]: [tryPluginVersionId]
    }, m);
    noop({
      pluginID: tryPluginId,
      widgetName: tryPluginName,
      pluginVersionID: tryPluginVersionId
    });
    return;
  }
  let $ = (await fetchAndSyncVersions(e, {
    resourceType: HubTypeEnum.PLUGIN,
    resourceIds: [tryPluginId]
  }))[tryPluginId];
  if ($ && tryPluginParams && isValidPluginId(tryPluginId) && K) {
    PluginManager.instance.enqueue({
      runPluginArgs: {
        plugin: $,
        command: "",
        queryMode: !1,
        triggeredFrom: "try-plugin-params",
        openFileKey: fileKey ?? getOpenFileKey() ?? "",
        isWidget: !1,
        runMode: "default"
      },
      mode: "run-forever"
    });
    return;
  }
  switch (isPlaygroundFile && fullscreenEditorType !== FEditorType.DevHandoff && handleAtomEvent({
    id: zM
  }), fullscreenEditorType === FEditorType.DevHandoff && $ && $.manifest.editorType?.includes(ManifestEditorType.FIGMA) && handleAtomEvent({
    id: zM
  }), fullscreenEditorType) {
    case FEditorType.Whiteboard:
      Fullscreen?.triggerAction("clear-tool", {
        source: fK
      });
      _$$s({
        ...Y,
        initialTab: isWidget ? _$$p.WIDGETS : _$$p.PLUGINS,
        previewResource: {
          id: tryPluginId,
          type: isWidget ? Rt.WIDGETS : Rt.PLUGINS
        },
        source: q
      });
      return;
    case FEditorType.Design:
      Fullscreen?.triggerAction("clear-tool", {
        source: fK
      });
      RM() ? $I({
        moduleToOpen: {
          type: "custom",
          module: createElement(_$$C, {
            extensionId: tryPluginId,
            extensionType: Ag.COMMUNITY
          }),
          name: ExtensionFeatureKey.EXTENSION_DETAILS
        },
        trackingData: {
          source: q
        }
      }) : e.dispatch(setUniversalInsertViewResourceDetails({
        initialFdResourceTab: isWidget ? SimpleComponentType.WIDGET : SimpleComponentType.PLUGIN,
        fdPreviewResource: {
          id: tryPluginId,
          type: isWidget ? SimpleComponentType.WIDGET : SimpleComponentType.PLUGIN
        }
      }));
      return;
    case FEditorType.DevHandoff:
      if ($ && isSingleDevWithCodegen($)) {
        let t = getCodegenLanguagePreference($);
        e.dispatch(dX({
          plugin: $,
          codeLanguage: t
        }));
      } else {
        setSelectedDevModePropertiesPanelTab(IAssertResource.PLUGIN);
        _$$s({
          ...Y,
          initialFdResourceTab: SimpleComponentType.PLUGIN,
          fdPreviewResource: {
            id: tryPluginId,
            type: SimpleComponentType.PLUGIN
          },
          source: q
        });
      }
      return;
    case FEditorType.Slides:
      $I({
        moduleToOpen: {
          type: "custom",
          module: createElement(_$$C, {
            extensionId: tryPluginId,
            extensionType: Ag.COMMUNITY
          }),
          name: ExtensionFeatureKey.EXTENSION_DETAILS
        },
        trackingData: {
          source: q
        }
      });
      return;
    case FEditorType.Cooper:
      getFeatureFlags().buzz_plugins && (atomStoreManager.set(assetCategoryAtom, AssetCategoryEnum.PLUGINS), _$$s({
        ...Y,
        initialFdResourceTab: SimpleComponentType.PLUGIN,
        fdPreviewResource: {
          id: tryPluginId,
          type: SimpleComponentType.PLUGIN
        },
        source: q
      }));
      return;
    case FEditorType.Illustration:
    case FEditorType.Sites:
    case FEditorType.Figmake:
      break;
    default:
      throwTypeError(fullscreenEditorType);
  }
});
export const $ = $$j0;