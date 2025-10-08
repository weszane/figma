import { createNoOpValidator } from "../figma_app/181241"
// Refactored class for managing follows API interactions
class FollowsManager {
  private followsSchemaValidator: ReturnType<typeof createNoOpValidator>

  constructor() {
    // Initialize the schema validator
    this.followsSchemaValidator = createNoOpValidator()
  }

  /**
   * Fetches follows data for a given author
   * @param params - Object containing authorId
   * @returns Promise resolving to the validation result
   */
  public async getFollows(params: { authorId: string }): Promise<any> {
    return this.followsSchemaValidator.validate(async ({ xr }) =>
      await xr.get(`/api/follows/${params.authorId}`),
    )
  }
}

// Create singleton instance
export const followsManagerInstance = new FollowsManager()

// Export the instance as default and as L for backward compatibility
export default followsManagerInstance
export const L = followsManagerInstance
