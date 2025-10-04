import { mapTemplateAndModuleProperties } from "../figma_app/349248"
/**
 * Maps community library modules to template and module properties when data is loaded.
 *
 * @param response - The response object containing community library data
 * @returns Array of mapped template and module properties, or empty array if not loaded
 */
export function mapCommunityLibraryModules(response: any) {
  // Check if response is loaded and contains community library data
  if (response?.status === "loaded") {
    const communityLibrary = response.data.communityLibraryByHubFileId

    // Ensure community library exists and modules are loaded
    if (communityLibrary && communityLibrary.modules?.status === "loaded") {
      const modules = communityLibrary.modules.data
      const hubFileId = communityLibrary.hubFileId
      const libraryKey = communityLibrary.libraryKey

      // Map each module with template and module properties
      return modules.map((module: any) =>
        mapTemplateAndModuleProperties(module, {
          type: "hubFile",
          file: {
            id: hubFileId,
            libraryKey,
          },
        }),
      )
    }
  }

  // Return empty array if data is not loaded or unavailable
  return []
}

// Export alias for backward compatibility
export const i = mapCommunityLibraryModules
