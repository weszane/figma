import { debugState } from "../905/407919";
import { En, pM } from "../905/116101";
import { PluginSourceType, AssetTabType, ExtensionFeatureKey } from "../905/946805";
import { RM, $I } from "../figma_app/322845";
import { s as _$$s } from "../figma_app/504088";
export function $$l1(e) {
  if (RM()) {
    let t = function (e, t) {
      if (t) switch (t) {
        case "development":
          return PluginSourceType.DEVELOPMENT;
        case "org":
          return PluginSourceType.FROM_ORG;
      }
      switch (e) {
        case _$$s.PLUGIN:
          return PluginSourceType.PLUGINS;
        case _$$s.WIDGET:
          return PluginSourceType.WIDGETS;
        default:
          return PluginSourceType.ALL;
      }
    }(e.initialFdResourceTab, e.initialFdView);
    $I({
      moduleToOpen: {
        type: "tab",
        module: AssetTabType.EXTENSIONS,
        filter: t
      },
      trackingData: {
        source: e.source
      }
    });
  } else debugState.dispatch(En(e));
}
export function $$d0(e, t) {
  RM() ? $I({
    moduleToOpen: {
      type: "custom",
      module: t,
      name: ExtensionFeatureKey.EXTENSION_DETAILS
    },
    trackingData: {
      source: e.source
    }
  }) : debugState.dispatch(pM(e));
}
export const e = $$d0;
export const s = $$l1;