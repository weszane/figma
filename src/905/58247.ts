import { debugState } from "../905/407919";
import { En, pM } from "../905/116101";
import { BY, Jc, Sn } from "../905/946805";
import { RM, $I } from "../figma_app/322845";
import { s as _$$s } from "../figma_app/504088";
export function $$l1(e) {
  if (RM()) {
    let t = function (e, t) {
      if (t) switch (t) {
        case "development":
          return BY.DEVELOPMENT;
        case "org":
          return BY.FROM_ORG;
      }
      switch (e) {
        case _$$s.PLUGIN:
          return BY.PLUGINS;
        case _$$s.WIDGET:
          return BY.WIDGETS;
        default:
          return BY.ALL;
      }
    }(e.initialFdResourceTab, e.initialFdView);
    $I({
      moduleToOpen: {
        type: "tab",
        module: Jc.EXTENSIONS,
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
      name: Sn.EXTENSION_DETAILS
    },
    trackingData: {
      source: e.source
    }
  }) : debugState.dispatch(pM(e));
}
export const e = $$d0;
export const s = $$l1;