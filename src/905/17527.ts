import { APIParameterUtils, createNoOpValidator } from '../figma_app/181241'
/**
 * Validator and API handler for Hub File Metadata.
 */
export class HubFileMetadataHandler {
  hubFileMetadataSchemaValidator

  constructor() {
    // Original: HubFileMetadataSchemaValidator
    this.hubFileMetadataSchemaValidator = createNoOpValidator()
  }

  /**
   * Validates and fetches Hub File Metadata from the API.
   * @param params - Object containing fileKey property.
   * @returns Promise resolving to the API response.
   */
  async getHubFileMetadata(params: { fileKey: string }) {
    // Original: getHubFileMetadata
    return this.hubFileMetadataSchemaValidator.validate(async ({ xr: t }) =>
      await t.get(
        '/api/hub_file_metadata',
        APIParameterUtils.toAPIParameters({ file_key: params.fileKey }),
      ),
    )
  }
}

// Export with refactored name for clarity and traceability.
// Original: $$r0
export const HubFileMetadata = new HubFileMetadataHandler()
// Original: D
export const D = HubFileMetadata
