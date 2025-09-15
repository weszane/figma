import { parseQuerySimple } from "../905/634134";
import { PricingOptions } from "../905/237873";
import { getValueOrFallback } from "../905/872825";
import { RouteState, captureRouteEvent, withCommunityRoute, concatStrings } from "../figma_app/321395";
import { SortOptions } from "../figma_app/324237";
import { BrowseUtils } from "../905/942203";
import { editorUtilities } from "../905/22009";
import { ResourceTypes, ResourceTypeSubset } from "../905/178090";
import { RESOURCE_ROUTE, toResourceParams, toRouteParams } from "../figma_app/979714";
class p extends RouteState {}
let _ = class extends p {
  constructor(e, t) {
    super(e, {
      ...t,
      resource_type: t.resource_type ?? ResourceTypes.SearchResourceTypes.MIXED,
      editor_type: t.editor_type ?? editorUtilities.Editors.ALL,
      price: t.price ?? PricingOptions.ALL,
      sort_by: t.sort_by ?? SortOptions.Search.RELEVANCY,
      creators: t.creators ?? BrowseUtils.Search.ALL
    });
  }
};
captureRouteEvent(_);
_.displayName = "SearchRoute";
_.path = "/community/search";
_.parseQueryString = e => {
  let t = parseQuerySimple(e);
  return {
    query: t.query ?? "",
    resource_type: getValueOrFallback(t.resource_type, ResourceTypes.SearchResourceTypes),
    editor_type: getValueOrFallback(t.editor_type, editorUtilities.Editors),
    price: getValueOrFallback(t.price, PricingOptions.Price),
    sort_by: getValueOrFallback(t.sort_by, SortOptions.Search),
    creators: getValueOrFallback(t.creators, BrowseUtils.Search)
  };
};
let $$h2 = withCommunityRoute(_);
let m = class extends p {
  constructor(e, t) {
    super(e, {
      ...t,
      resource_type: t.resource_type ?? ResourceTypeSubset.FILES,
      editor_type: t.editor_type ?? editorUtilities.Editors.ALL,
      price: t.price ?? PricingOptions.ALL
    });
  }
};
captureRouteEvent(m);
m.displayName = "ResourceHubSearchRoute";
m.path = concatStrings(RESOURCE_ROUTE, _.path);
m.serializeParams = toResourceParams;
m.deserializeParams = toRouteParams;
m.parseQueryString = e => {
  let t = parseQuerySimple(e);
  return {
    query: t.query ?? "",
    resource_type: getValueOrFallback(t.resource_type, ResourceTypeSubset),
    editor_type: getValueOrFallback(t.editor_type, editorUtilities.Editors),
    price: getValueOrFallback(t.price, PricingOptions.Price)
  };
};
let $$g1 = m;
let f = class extends p {
  constructor(e, t) {
    super(e, {
      ...t,
      resource_type: t.resource_type ?? ResourceTypeSubset.FILES,
      editor_type: t.editor_type ?? editorUtilities.Editors.ALL
    });
  }
};
captureRouteEvent(f);
f.displayName = "ResourceHubInternalSearchRoute";
f.path = concatStrings(RESOURCE_ROUTE, "/internal/search");
f.serializeParams = toResourceParams;
f.deserializeParams = toRouteParams;
f.parseQueryString = e => {
  let t = parseQuerySimple(e);
  return {
    query: t.query ?? "",
    resource_type: getValueOrFallback(t.resource_type, ResourceTypeSubset),
    editor_type: getValueOrFallback(t.editor_type, editorUtilities.Editors)
  };
};
export let $$E0 = f;
export const IQ = $$E0;
export const bP = $$g1;
export const n6 = $$h2;