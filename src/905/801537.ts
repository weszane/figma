import { useState, useEffect } from "react";
import { Xr } from "../figma_app/27355";
import { useDebouncedCallback } from "use-debounce";
import { MZ } from "../figma_app/925970";
import { wf } from "../905/124270";
import { IT, liveStoreInstance } from "../905/713695";
import { CreatorResourceType } from "../figma_app/162807";
import { $W } from "../905/144933";
import { A as _$$A } from "../905/421315";
export function $$p0(e, t) {
  let [i, d] = useState(e);
  let c = Xr(wf);
  let {
    restrictOrgId,
    restrictTeamId
  } = _$$A();
  let g = m({
    query: i,
    facetType: t,
    restrictOrgId,
    restrictTeamId
  });
  let [f] = IT(g);
  let _ = useDebouncedCallback(t => {
    d(t);
    e && e.length > 0 && c(MZ());
  }, 500, {
    leading: !0
  });
  useEffect(() => {
    _(e);
  }, [_, e, c]);
  return f;
}
let m = liveStoreInstance.Query({
  fetch: async e => (await $W.getFacetSearchResults({
    query: e.query,
    facetType: e.facetType,
    restrictOrgId: e.restrictOrgId,
    restrictTeamId: e.restrictTeamId
  })).data.meta,
  enabled: e => !!e.facetType && e.facetType !== CreatorResourceType.RESOURCE && null != e.query
});
export const F = $$p0;