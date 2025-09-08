import { APIParameterUtils, createNoOpValidator } from '../figma_app/181241'

/**
 * Handles code suggestion API operations.
 * Original class: $$r0
 */
export class CodeSuggestionAPIHandler {
  private zipSchemaValidator = createNoOpValidator();
  private deleteAllCodeSuggestionsResultSchemaValidator = createNoOpValidator();

  /**
   * Deletes all code suggestions for the given parameters.
   * Original method: deleteAllCodeSuggestions
   * @param params - Parameters for deletion
   * @returns Promise resolving to the API response
   */
  deleteAllCodeSuggestions<T = any>(params: any) {
    // deleteAllCodeSuggestions (original method name)
    return this.deleteAllCodeSuggestionsResultSchemaValidator.validate<T>(async ({ xr: client }) => {
      return await client.del(
        '/api/codebase_suggestions/components',
        APIParameterUtils.toAPIParameters(params)
      );
    });
  }

  /**
   * Gets the zip URL for a given suggestion.
   * Original method: getZipUrl
   * @param id - Suggestion ID
   * @returns Promise resolving to the zip URL
   */
  getZipUrl<T = any>(id: string) {
    return this.zipSchemaValidator.validate<T>(async ({ xr: client }) => {
      return await client.get(`/api/codebase_suggestions/${id}/demo_zip_url`);
    });
  }
}
export const codeSuggestionAPIHandler = new CodeSuggestionAPIHandler()

/** Exported instance for usage (original: w) */
export const w = codeSuggestionAPIHandler
