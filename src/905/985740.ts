import { APIParameterUtils, createNoOpValidator } from '../figma_app/181241'
// Original class: $$r0
// Refactored into a named class for better readability and maintainability.
// Added JSDoc-style comments for documentation.
// Converted methods to arrow functions for consistency.
// Ensured same functionality: validators and API calls remain intact.
// Exported as W to match original export.

/**
 * Class for handling version-related API operations with validation.
 */
class VersionHandler {
  /**
   * Validator for versions schema.
   */
  public VersionsSchemaValidator: any

  /**
   * Validator for page size schema.
   */
  public PageSizeSchemaValidator: any

  /**
   * Validator for version schema.
   */
  public VersionSchemaValidator: any

  constructor() {
    this.VersionsSchemaValidator = createNoOpValidator()
    this.PageSizeSchemaValidator = createNoOpValidator()
    this.VersionSchemaValidator = createNoOpValidator()
  }

  /**
   * Retrieves versions for a file.
   * @param e - Parameters including fileKey and others.
   * @returns Validated API response.
   */
  getVersions = (e: any) => {
    const { fileKey, ...i } = e
    return this.VersionsSchemaValidator.validate(async ({ xr: t }: any) =>
      await t.get(`/api/versions/${e.fileKey}`, APIParameterUtils.toAPIParameters(i)),
    )
  }

  /**
   * Retrieves paginated versions for a file.
   * @param e - Parameters including fileKey and others.
   * @returns Validated API response.
   */
  getPaginatedVersions = (e: any) => {
    const { fileKey, ...i } = e
    return this.PageSizeSchemaValidator.validate(async ({ xr: e }: any) =>
      await e.get(`/api/versions/${fileKey}`, APIParameterUtils.toAPIParameters(i)),
    )
  }

  /**
   * Retrieves a specific version for a file.
   * @param e - Parameters including fileKey and versionId.
   * @returns Validated API response.
   */
  getVersion = (e: any) => {
    return this.VersionSchemaValidator.validate(({ xr: t }: any) =>
      t.get(`/api/versions/${e.fileKey}/${e.versionId}`),
    )
  }
}

// Original export: $$r0 and W
export const versionHandlerInstance = new VersionHandler()
export const W = versionHandlerInstance
