import { getValueOrFallback } from "../905/872825";
import { RouteState, captureRouteEvent, concatStrings } from "../figma_app/321395";
import { ResourceTypeSubset } from "../905/178090";
import { RESOURCE_ROUTE, toResourceParams, toRouteParams, parseFuidQuery } from "../figma_app/979714";
let a = class extends RouteState {};
captureRouteEvent(a);
a.displayName = "SavesRoute";
a.path = concatStrings(RESOURCE_ROUTE, "/community/saves/:resourceType?");
a.serializeParams = e => ({
  ...toResourceParams(e),
  ...(e.resourceType && {
    resourceType: e.resourceType
  })
});
a.deserializeParams = e => ({
  ...toRouteParams(e),
  ...(e.resourceType && {
    resourceType: getValueOrFallback(e.resourceType, ResourceTypeSubset)
  })
});
a.parseQueryString = e => ({
  ...parseFuidQuery(e)
});
export let $$l0 = 443 == require.j ? a : null;
export const e = $$l0;