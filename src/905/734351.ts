import { Hg, oF } from '../905/604501'
import { APIParameterUtils, createMetaValidator } from '../figma_app/181241'

// Original class: $$a0
// Original export: c
// Refactored to a named class for better readability and maintainability.
// Added JSDoc comments for documentation.
// Ensured types are added where possible.
// Maintained original functionality: validators and API calls.
type Validates = ReturnType<typeof createMetaValidator>
/**
 * Class for handling community category API operations.
 * Original: $$a0
 */
class CommunityCategoryHandler {
  CommunityAllCategoriesSchemaValidator: Validates
  CommunityCategorySchemaValidator: Validates

  constructor() {
    this.CommunityAllCategoriesSchemaValidator = createMetaValidator('CommunityAllCategoriesSchemaValidator', Hg, 'xrv_api_community_categories', true)
    this.CommunityCategorySchemaValidator = createMetaValidator('CommunityCategorySchemaValidator', oF, 'xrv_api_community_categories', true)
  }

  /**
   * Fetches all community categories.
   * Original method: getAll
   * @param params - Optional parameters for the API call.
   * @returns Promise of validated API response.
   */
  async getAll(params: Record<string, any> = {}): Promise<any> {
    return this.CommunityAllCategoriesSchemaValidator.validate(async ({ xr }: { xr: any }) => {
      return await xr.get('/api/community_categories_v2/all', APIParameterUtils.toAPIParameters(params))
    })
  }

  /**
   * Fetches a community category by slug.
   * Original method: getCategoryBySlug
   * @param slug - The category slug.
   * @param params - Optional parameters for the API call.
   * @returns Promise of validated API response.
   */
  async getCategoryBySlug(slug: string, params: Record<string, any>): Promise<any> {
    return this.CommunityCategorySchemaValidator.validate(async ({ xr }: { xr: any }) => {
      return await xr.get(`/api/community/categories/metadata/${slug}`, APIParameterUtils.toAPIParameters(params))
    })
  }
}

// Create an instance of the refactored class.
// Original: export let $$a0 = new class { ... }()
export const communityCategoryHandler = new CommunityCategoryHandler()

// Original export: export const c = $$a0
export const c = communityCategoryHandler
