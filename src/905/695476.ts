import { z } from 'zod'
import { APIParameterUtils, createNoOpValidator } from '../figma_app/181241'

/**
 * Zod schema for validating link metadata objects.
 * Original schema definition from the file.
 */
const LinkMetadataSchema = z.object({
  id: z.string(),
  node_id: z.string(),
  file_key: z.string(),
  link_name: z.string(),
  link_url: z.string(),
})

/**
 * Class for handling link metadata operations.
 * Original class: $$a0
 */
class LinkMetadataHandler {
  LinkMetadataSchemaValidator: any

  constructor() {
    this.LinkMetadataSchemaValidator = createNoOpValidator() // Consider replacing with LinkMetadataSchema if validation is needed
  }

  /**
   * Retrieves link metadata from the API.
   * Original method: getLinkMetadata
   * @param params - Parameters for the API call, including text, useEmbedsAllowList, and useLinkPreviewsV2.
   * @returns The validated API response.
   */
  async getLinkMetadata(params: { text: string, useEmbedsAllowList?: boolean, useLinkPreviewsV2?: boolean }) {
    return this.LinkMetadataSchemaValidator.validate(async ({ xr: apiClient }: { xr: any }) =>
      await apiClient.get('/api/upnode/link_metadata', APIParameterUtils.toAPIParameters({
        text: params.text,
        useEmbedsAllowList: params.useEmbedsAllowList,
        useLinkPreviewsV2: params.useLinkPreviewsV2,
      }, ['useEmbedsAllowList', 'useLinkPreviewsV2'])),
    )
  }
}

// Create an instance of the handler
export const linkMetadataHandlerInstance = new LinkMetadataHandler()

// Export the instance
export const E = linkMetadataHandlerInstance

// Also export the class and schema for potential reuse
export { LinkMetadataHandler, LinkMetadataSchema }
