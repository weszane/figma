import { liveStoreInstance } from "../905/713695";
import { librariesAPI } from "../905/939602";
liveStoreInstance.Query({
  fetch: async e => (await librariesAPI.getLibraryPublishedComponents({
    key: e
  })).data.meta,
  key: "libraryPublishedComponents"
});
export let $$a0 = liveStoreInstance.Query({
  fetch: async e => (await librariesAPI.getLibraryPublishedComponentsV2({
    libraryKey: e
  })).data.meta,
  key: "libraryPublishedComponentsV2"
});
export const u = $$a0;