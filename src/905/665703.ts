import { z } from 'zod'
import { reportError } from '../905/11'
import { ServiceCategories as _$$e } from '../905/165054'
import { liveStoreInstance } from '../905/713695'
import { ShelfSchema } from '../figma_app/45218'
import { APIParameterUtils, createNoOpValidator, createPaginatedValidator } from '../figma_app/181241'

/**
 * CommunityShelfService - Handles community shelf API interactions.
 */
export class CommunityShelfService {
  CommunityShelvesSchemaValidator: ReturnType<typeof createNoOpValidator>
  CommunityShelfV2SchemaValidator: ReturnType<typeof createPaginatedValidator>
  ShelfContentPaginatedQuery: ReturnType<typeof liveStoreInstance.PaginatedQuery>
  constructor() {
    // CommunityShelvesSchemaValidator (original: CommunityShelvesSchemaValidator)
    this.CommunityShelvesSchemaValidator = createNoOpValidator()

    // CommunityShelfV2SchemaValidator (original: CommunityShelfV2SchemaValidator)
    this.CommunityShelfV2SchemaValidator = createPaginatedValidator('CommunityShelfV2SchemaValidator', z.array(ShelfSchema), null, true)

    // ShelfContentPaginatedQuery (original: ShelfContentPaginatedQuery)
    this.ShelfContentPaginatedQuery = liveStoreInstance.PaginatedQuery({
      /**
       * Fetches paginated shelf content.
       * @param e - Query parameters including shelfId, includeContent, pageSize.
       * @param param1 - Pagination parameters.
       * @returns Shelf content and pagination info.
       */
      fetch: async (e, {
        pageParam: t,
      }) => {
        try {
          const result = await this.CommunityShelfV2SchemaValidator.validate(async ({
            xr: i,
          }) => {
            const {
              shelfId,
              includeContent,
              pageSize,
            } = e
            const params = APIParameterUtils.toAPIParameters({
              include_content: includeContent,
              page_size: pageSize,
              cursor: t,
            })
            return await i.getPaginated(`/api/v2/community_shelves/${shelfId}`, params)
          })
          const meta = result.data.meta[0]
          if (!meta)
            throw new Error('Shelf not found')
          return {
            data: meta.shelf_content,
            nextPage: result.data.pagination.nextPage,
            prevPage: result.data.pagination.prevPage,
          }
        }
        catch (error) {
          reportError(_$$e.COMMUNITY, error)
          return error
        }
      },
    })
  }

  /**
   * Fetches community shelves by urlSlug.
   * @param e - Parameters including urlSlug.
   * @returns Community shelves data.
   */
  getCommunityShelves(e: {
    urlSlug?: any
    categorySlug?: string
    shelfType?: string
    locale?: string
  }) {
    const slug = e?.urlSlug ? `/${e.urlSlug}` : ''
    return this.CommunityShelvesSchemaValidator.validate(async ({
      xr: i,
    }) => await i.get<{ meta: any[] }>(`/api/community_shelves${slug}`, APIParameterUtils.toAPIParameters(e || {})))
  }

  /**
   * Fetches a community shelf by categoryId.
   * @param e - Parameters including categoryId.
   * @returns Community shelf data.
   */
  getCommunityShelfById(e: {
    categoryId: string
  }) {
    return this.CommunityShelvesSchemaValidator.validate(async ({
      xr: t,
    }) => await t.get(`/api/community_shelves/id/${e.categoryId}`))
  }
}

// Export refactored instance and alias
export const communityShelfService = new CommunityShelfService()
export const A = communityShelfService
