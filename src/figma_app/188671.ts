import { communityShelfService } from '../905/665703'
import { liveStoreInstance } from '../905/713695'
import { communityCategoryHandler } from '../905/734351'
import { CommunityPageType } from '../figma_app/45218'
// Original: $$o2 - Query for all community categories meta
/**
 * Query for retrieving all community categories metadata.
 * @param e - Editor type
 * @returns Promise resolving to categories meta
 */
export const allCategoriesQuery = liveStoreInstance.Query({
  fetch: async (e: any) => (await communityCategoryHandler.getAll({
    editorType: e,
  })).data.meta,
})

// Original: $$l1 - Query for category by slug with tag and locale
/**
 * Query for retrieving a specific community category by slug, including tag and locale.
 * @param params - Object containing categorySlug, tagSlug, and locale
 * @returns Promise resolving to category meta
 */
export const categoryBySlugQuery = liveStoreInstance.Query({
  fetch: async ({
    categorySlug: e,
    tagSlug: t,
    locale: r,
  }: { categorySlug: string, tagSlug?: string, locale?: string }) => (await communityCategoryHandler.getCategoryBySlug(e, {
    tagSlug: t,
    locale: r,
  })).data.meta,
})

// Original: $$d0 - Query for community shelves on category page
/**
 * Query for retrieving community shelves for a category page.
 * @param e - Category slug
 * @returns Promise resolving to the first shelf meta
 */
const communityShelvesQuery = liveStoreInstance.Query({
  fetch: async (e: string) => (await communityShelfService.getCommunityShelves({
    categorySlug: e,
    shelfType: CommunityPageType.CATEGORY_PAGE,
  })).data.meta[0],
})

// Exports with meaningful names, maintaining original export names as per refactoring guidelines
export const R5 = communityShelvesQuery
export const Zp = categoryBySlugQuery
export const iB = allCategoriesQuery
