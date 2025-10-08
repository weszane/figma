import { handleResourceDetails, setUniversalInsertModalOpen } from "../905/116101"
import { debugState } from "../905/407919"
import { AssetTabType, ExtensionFeatureKey, PluginSourceType } from "../905/946805"
import { $I, RM } from "../figma_app/322845"
import { SimpleComponentType } from "../figma_app/504088"

export function $$l1(e) {
  if (RM()) {
    let t = (function (e, t) {
      if (t) {
        switch (t) {
          case "development":
            return PluginSourceType.DEVELOPMENT
          case "org":
            return PluginSourceType.FROM_ORG
        }
      }
      switch (e) {
        case SimpleComponentType.PLUGIN:
          return PluginSourceType.PLUGINS
        case SimpleComponentType.WIDGET:
          return PluginSourceType.WIDGETS
        default:
          return PluginSourceType.ALL
      }
    }(e.initialFdResourceTab, e.initialFdView))
    $I({
      moduleToOpen: {
        type: "tab",
        module: AssetTabType.EXTENSIONS,
        filter: t,
      },
      trackingData: {
        source: e.source,
      },
    })
  }
  else {
    debugState.dispatch(setUniversalInsertModalOpen(e))
  }
}
export function $$d0(e, t) {
  RM()
    ? $I({
        moduleToOpen: {
          type: "custom",
          module: t,
          name: ExtensionFeatureKey.EXTENSION_DETAILS,
        },
        trackingData: {
          source: e.source,
        },
      })
    : debugState.dispatch(handleResourceDetails(e))
}
export const e = $$d0
export const s = $$l1
