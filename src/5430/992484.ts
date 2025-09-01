import { useState } from "react";
import { C } from "../905/237873";
import { gM, c5 } from "../5430/823351";
import { H, e } from "../figma_app/324237";
import { k } from "../905/22009";
import { L } from "../905/178090";
let c = {
  resourceType: L.BrowseResourceTypes.MIXED,
  editorType: k.Editors.ALL,
  price: C.ALL,
  sortBy: H()
};
let d = {
  ...c,
  resourceType: L.SearchResourceTypes.MIXED
};
let u = {
  [gM.PROFILE]: c,
  [gM.CATEGORY]: c,
  [gM.SEARCH]: d,
  [gM.HOMEPAGE]: c5(),
  [gM.PLUGINS]: {
    ...c,
    resourceType: L.BrowseResourceTypes.PLUGINS
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
    sortBy: e.Browse.PUBLISHED_AT
  });
}
export const m = $$_0;
export const v = $$$$m1;