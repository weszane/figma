import { useState } from "react";
import { PricingOptions } from "../905/237873";
import { gM, c5 } from "../5430/823351";
import { getAllTimeSortOption, SortOptions } from "../figma_app/324237";
import { editorUtilities } from "../905/22009";
import { ResourceTypes } from "../905/178090";
let c = {
  resourceType: ResourceTypes.BrowseResourceTypes.MIXED,
  editorType: editorUtilities.Editors.ALL,
  price: PricingOptions.ALL,
  sortBy: getAllTimeSortOption()
};
let d = {
  ...c,
  resourceType: ResourceTypes.SearchResourceTypes.MIXED
};
let u = {
  [gM.PROFILE]: c,
  [gM.CATEGORY]: c,
  [gM.SEARCH]: d,
  [gM.HOMEPAGE]: c5(),
  [gM.PLUGINS]: {
    ...c,
    resourceType: ResourceTypes.BrowseResourceTypes.PLUGINS
  },
  [gM.RESOURCE_LANDING_PAGE]: c
};
export function $$$$m1(e, t) {
  let r = {
    ...u[e],
    ...t
  };
  let [i, n] = useState(r);
  return {
    filterState: i,
    handleFilterUpdate: e => {
      let t = {
        ...i
      };
      e.forEach(({
        key: e,
        value: r
      }) => {
        t[e] = r;
      });
      n(t);
      return t;
    },
    resetToInitialState: () => {
      n(r);
    }
  };
}
export function $$_0() {
  return $$$$m1(gM.PROFILE, {
    sortBy: SortOptions.Browse.PUBLISHED_AT
  });
}
export const m = $$_0;
export const v = $$$$m1;