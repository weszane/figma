import { withParsedMeta } from "../905/405710";
import { liveStoreInstance } from "../905/713695";
import { COMMUNITY_LIBRARY_FILE } from "../figma_app/633080";
import { communityLibrariesService } from "../905/292380";
import { Tf } from "../905/297574";
let $$l3 = liveStoreInstance.Query({
  fetch: async e => {
    try {
      let {
        components,
        state_groups
      } = (await communityLibrariesService.getPublishedComponents({
        hubFileId: e
      })).data.meta;
      return {
        components,
        state_groups
      };
    } catch {
      return {
        components: [],
        state_groups: []
      };
    }
  },
  output: ({
    data: e
  }) => Tf(e.components, e.state_groups)
});
let $$d2 = liveStoreInstance.Query({
  fetch: async ({
    hubFileId: e
  }) => (await communityLibrariesService.getLibraryStyles({
    hubFileId: e
  })).data.meta.styles ?? [],
  output: ({
    data: e
  }) => e.map(withParsedMeta)
});
let $$c1 = liveStoreInstance.Query({
  fetch: async () => (await communityLibrariesService.getCommunityLibraries()).data.meta,
  output: ({
    data: e
  }) => e.map(p)
});
let $$u0 = liveStoreInstance.Query({
  fetch: async () => (await communityLibrariesService.getCommunityLibrariesVisualAssets()).data.meta,
  output: ({
    data: e
  }) => e.map(p)
});
function p(e) {
  return {
    ...e,
    type: COMMUNITY_LIBRARY_FILE,
    num_state_groups: 0
  };
}
export const In = $$u0;
export const fI = $$c1;
export const lH = $$d2;
export const r4 = $$l3;