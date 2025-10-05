import { z } from 'zod'
import { FileKeySourceEnum } from '../905/412913'
import { createMetaValidator, createNoOpValidator } from '../figma_app/181241'
import { createFileKeySchema, StyleSchema } from '../figma_app/633080'

// Define interface for API parameters to improve type safety
interface ApiParams {
  hubFileId: string
}

/**
 * Service class for handling community libraries API operations.
 * Original class: $$o0
 */
class CommunityLibrariesService {
  publishedComponentsValidator = createNoOpValidator()
  libraryStylesValidator = createMetaValidator('LibraryStylesSchemaValidator', z.object({
    styles: z.array(createFileKeySchema(FileKeySourceEnum.REST_API).extend(StyleSchema.shape)),
  }), 'ds_zod_styles', false)

  communityLibrariesValidator = createNoOpValidator()
  constructor() {
  }

  /**
   * Retrieves published components for a given hub file.
   * Original method: getPublishedComponents
   * @param params - API parameters including hubFileId and xr (API client).
   * @returns Validated API response.
   */
  getPublishedComponents(params: ApiParams) {
    return this.publishedComponentsValidator.validate(async ({ xr }) => await xr.get(`/api/community_libraries/${params.hubFileId}/published_components`))
  }

  /**
   * Retrieves library styles for a given hub file.
   * Original method: getLibraryStyles
   * @param params - API parameters including hubFileId and xr (API client).
   * @returns Validated API response.
   */
  getLibraryStyles(params: ApiParams) {
    return this.libraryStylesValidator.validate(async ({ xr }) => await xr.get(`/api/community_libraries/${params.hubFileId}/styles`))
  }

  /**
   * Retrieves community libraries.
   * Original method: getCommunityLibraries
   * @param params - API parameters including xr (API client).
   * @returns Validated API response.
   */
  getCommunityLibraries() {
    return this.communityLibrariesValidator.validate(async ({ xr }) => await xr.get('/api/community_libraries'))
  }

  /**
   * Retrieves community libraries visual assets.
   * Original method: getCommunityLibrariesVisualAssets
   * @param params - API parameters including xr (API client).
   * @returns Validated API response.
   */
  getCommunityLibrariesVisualAssets() {
    return this.communityLibrariesValidator.validate(async ({ xr }) => await xr.get('/api/community_libraries/visual_assets'))
  }
}

// Instantiate the service
export const communityLibrariesService = new CommunityLibrariesService()
// Original export: f
export const f = communityLibrariesService
