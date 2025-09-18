import { l as _$$l } from "../905/716947";
import { hasContent, isCooperTemplateAsset } from "../figma_app/427318";
import { bj } from "../905/420347";
import { liveStoreInstance } from "../905/713695";
import { isPublishedLibraryWithAssets } from "../figma_app/633080";
import { searchAPIHandler } from "../905/144933";
if (443 == require.j) {}
export let $$d0 = liveStoreInstance.Query({
  fetch: async e => (await searchAPIHandler.getResources(e)).data.meta.results
});
export function $$c1(e) {
  let t = new Set();
  let n = e.filter(e => hasContent(e) && isCooperTemplateAsset(e)).map(e => e.content.component_v2._component_v2_record);
  n.forEach(e => {
    t.add(_$$l(e.library_key));
  });
  let o = bj(Array.from(t));
  let l = o.data;
  let d = new Map();
  l.forEach(e => {
    isPublishedLibraryWithAssets(e) && d.set(_$$l(e.library_key), e);
  });
  return {
    isLoading: "loading" === o.status,
    libraryKeyToPublishedLibrary: d,
    components: n
  };
}
export const V = $$d0;
export const z = $$c1;