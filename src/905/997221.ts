import { reportError } from "../905/11"
import { ServiceCategories } from "../905/165054"

// Origin: /src/905/997221.ts
// Refactored: Renamed variables, added types, improved readability, added comments, simplified logic

// Type definition for the expected file object
export interface FileInfo {
  library_key?: string
  key?: string
  fileKey?: string
  // Add other properties as needed
}

/**
 * Retrieves the library key from a file object.
 * If the library key is missing, reports an error and returns undefined.
 * @param file - The file information object
 * @returns The library key string if present, otherwise undefined
 */
export function getLibraryKeyWithReport(file: FileInfo): string | undefined {
  if (!file.library_key) {
    // Potential bug: If both key and fileKey are undefined, tags.fileKey will be undefined.
    // This is intentional to preserve original logic.
    const error = new Error("No library key found for file")
    reportError(ServiceCategories.DESIGN_SYSTEMS_ECOSYSTEM, error, {
      tags: {
        fileKey: file.key ?? file.fileKey,
      },
    })
    return undefined
  }
  return file.library_key
}

// Alias for getLibraryKey to preserve original export structure
export const l = getLibraryKeyWithReport
