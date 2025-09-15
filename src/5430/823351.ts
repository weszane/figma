import { b } from "../7222/898730";
import { editorUtilities } from "../905/22009";
import { ResourceTypes } from "../905/178090";
import { mapEditorToType } from "../figma_app/277543";
import { getDefaultEditorResource, selectEditorResource } from "../figma_app/773663";
import { z } from "../figma_app/601188";
import { PricingOptions } from "../905/237873";
import { getResourceTypesForBrowse } from "../figma_app/777551";
import { getAllTimeSortOption } from "../figma_app/324237";
if (443 == require.j) {}
export function $$m1() {
  return {
    sortBy: getAllTimeSortOption(),
    price: PricingOptions.ALL,
    ...getDefaultEditorResource()
  };
}
export function $$_2(e) {
  return {
    ...selectEditorResource(e.editor_type, e.resource_type),
    price: e.price ?? PricingOptions.ALL,
    sortBy: e.sort_by ?? getAllTimeSortOption()
  };
}
export function $$p4(e) {
  let {
    sortBy,
    editorType,
    price,
    resourceType
  } = e;
  let c = resourceType === ResourceTypes.BrowseResourceTypes.PLUGINS;
  return {
    sortBy,
    editorType: mapEditorToType(editorType),
    price,
    resourceType: getResourceTypesForBrowse(resourceType, editorType),
    caller: z.HOMEPAGE,
    pageSize: b,
    includeContent: c
  };
}
export var $$h3 = (e => (e.CATEGORY = "category", e.PLUGINS = "plugins", e.PROFILE = "profile", e.HOMEPAGE = "homepage", e.RESOURCE_LANDING_PAGE = "resource-landing-page", e.SEARCH = "search", e))($$h3 || {});
export function $$x0(e, t, r, s = !1) {
  let o = "loading" === t;
  return (!o || !!s) && (!!o || e?.length !== 0 || !(r.editorType === editorUtilities.Editors.ALL && r.resourceType === ResourceTypes.BrowseResourceTypes.MIXED));
}
export const _W = $$x0;
export const c5 = $$m1;
export const fk = $$_2;
export const gM = $$h3;
export const vb = $$p4;