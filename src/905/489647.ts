import { createElement } from "react";
import { throwTypeError } from "../figma_app/465776";
import { glU, _gJ } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { zl } from "../figma_app/27355";
import { sx } from "../905/449184";
import { YQ } from "../905/502364";
import { Lk, x as _$$x } from "../figma_app/639711";
import { dX } from "../905/294543";
import { $n } from "../905/515076";
import { nF } from "../905/350402";
import { W9 } from "../figma_app/559491";
import { s as _$$s } from "../905/58247";
import { TN } from "../figma_app/147952";
import { IN } from "../905/116101";
import { Y5 } from "../figma_app/455680";
import { ax } from "../figma_app/741237";
import { noop } from "../905/813868";
import { cb } from "../figma_app/12796";
import { _V } from "../figma_app/300692";
import { R as _$$R } from "../figma_app/612938";
import { qW } from "../905/327571";
import { Rt } from "../figma_app/979658";
import { bD } from "../figma_app/45218";
import { nT } from "../figma_app/53721";
import { FW } from "../figma_app/155287";
import { YR } from "../905/622391";
import { zM } from "../figma_app/89917";
import { Sn } from "../905/946805";
import { RM, $I } from "../figma_app/322845";
import { Ag } from "../905/235578";
import { C as _$$C } from "../figma_app/959385";
import { p as _$$p } from "../905/42189";
import { s as _$$s2 } from "../figma_app/504088";
import { fK } from "../figma_app/300024";
export let $$j0 = nF(async (e, t) => {
  await Y5.onReady();
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
  sx("extension_tried_in_fullscreen", {
    tryPluginId,
    tryPluginName,
    tryPluginVersionId,
    isWidget,
    fullscreenEditorType,
    isPlaygroundFile,
    fileKey,
    tryPluginParams: JSON.stringify(tryPluginParams)
  });
  let K = cb(i);
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
  let $ = (await TN(e, {
    resourceType: bD.PLUGIN,
    resourceIds: [tryPluginId]
  }))[tryPluginId];
  if ($ && tryPluginParams && qW(tryPluginId) && K) {
    _$$R.instance.enqueue({
      runPluginArgs: {
        plugin: $,
        command: "",
        queryMode: !1,
        triggeredFrom: "try-plugin-params",
        openFileKey: fileKey ?? YR() ?? "",
        isWidget: !1,
        runMode: "default"
      },
      mode: "run-forever"
    });
    return;
  }
  switch (isPlaygroundFile && fullscreenEditorType !== nT.DevHandoff && YQ({
    id: zM
  }), fullscreenEditorType === nT.DevHandoff && $ && $.manifest.editorType?.includes(FW.FIGMA) && YQ({
    id: zM
  }), fullscreenEditorType) {
    case nT.Whiteboard:
      glU?.triggerAction("clear-tool", {
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
    case nT.Design:
      glU?.triggerAction("clear-tool", {
        source: fK
      });
      RM() ? $I({
        moduleToOpen: {
          type: "custom",
          module: createElement(_$$C, {
            extensionId: tryPluginId,
            extensionType: Ag.COMMUNITY
          }),
          name: Sn.EXTENSION_DETAILS
        },
        trackingData: {
          source: q
        }
      }) : e.dispatch(IN({
        initialFdResourceTab: isWidget ? _$$s2.WIDGET : _$$s2.PLUGIN,
        fdPreviewResource: {
          id: tryPluginId,
          type: isWidget ? _$$s2.WIDGET : _$$s2.PLUGIN
        }
      }));
      return;
    case nT.DevHandoff:
      if ($ && _V($)) {
        let t = $n($);
        e.dispatch(dX({
          plugin: $,
          codeLanguage: t
        }));
      } else {
        ax(_gJ.PLUGIN);
        _$$s({
          ...Y,
          initialFdResourceTab: _$$s2.PLUGIN,
          fdPreviewResource: {
            id: tryPluginId,
            type: _$$s2.PLUGIN
          },
          source: q
        });
      }
      return;
    case nT.Slides:
      $I({
        moduleToOpen: {
          type: "custom",
          module: createElement(_$$C, {
            extensionId: tryPluginId,
            extensionType: Ag.COMMUNITY
          }),
          name: Sn.EXTENSION_DETAILS
        },
        trackingData: {
          source: q
        }
      });
      return;
    case nT.Cooper:
      getFeatureFlags().buzz_plugins && (zl.set(Lk, _$$x.PLUGINS), _$$s({
        ...Y,
        initialFdResourceTab: _$$s2.PLUGIN,
        fdPreviewResource: {
          id: tryPluginId,
          type: _$$s2.PLUGIN
        },
        source: q
      }));
      return;
    case nT.Illustration:
    case nT.Sites:
    case nT.Figmake:
      break;
    default:
      throwTypeError(fullscreenEditorType);
  }
});
export const $ = $$j0;