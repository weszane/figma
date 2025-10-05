import { communityLibrariesService } from "../905/292380"
import { mergeComponentsWithOrphanStateGroups } from "../905/297574"
import { withParsedMeta } from "../905/405710"
import { liveStoreInstance } from "../905/713695"
import { COMMUNITY_LIBRARY_FILE } from "../figma_app/633080"

// Refactored queries for community library data fetching and processing.
// Grouped related functionality: components, styles, libraries, and visual assets queries.
// Added TS documentation and meaningful names for clarity and maintainability.

// Query for fetching and merging published components with orphan state groups
export const componentsQuery = liveStoreInstance.Query({
  fetch: async (hubFileId: string) => {
    try {
      const { components, state_groups } = (await communityLibrariesService.getPublishedComponents({
        hubFileId,
      })).data.meta as { components: any[]; state_groups: any[] };
      return { components, state_groups };
    } catch {
      return { components: [], state_groups: [] };
    }
  },
  output: ({ data }: any) => mergeComponentsWithOrphanStateGroups(data.components, data.state_groups),
});

// Query for fetching and parsing library styles
export const stylesQuery = liveStoreInstance.Query({
  fetch: async ({ hubFileId }: { hubFileId: string }) =>
    (await communityLibrariesService.getLibraryStyles({ hubFileId })).data.meta.styles ?? [],
  output: ({ data }: any) => data.map(withParsedMeta),
});

// Query for fetching community libraries
export const librariesQuery = liveStoreInstance.Query({
  fetch: async () => (await communityLibrariesService.getCommunityLibraries()).data.meta,
  output: ({ data }: any) => data.map(transformLibraryItem),
});

// Query for fetching community libraries visual assets
export const visualAssetsQuery = liveStoreInstance.Query({
  fetch: async () => (await communityLibrariesService.getCommunityLibrariesVisualAssets()).data.meta,
  output: ({ data }: any) => data.map(transformLibraryItem),
});

/**
 * Transforms a library item by adding type and num_state_groups.
 * @param item - The original library item.
 * @returns The transformed item with added properties.
 */
function transformLibraryItem(item: any) {
  return {
    ...item,
    type: COMMUNITY_LIBRARY_FILE,
    num_state_groups: 0,
  };
}
export const In = visualAssetsQuery;
export const fI = librariesQuery;
export const lH = stylesQuery;
export const r4 = componentsQuery;
