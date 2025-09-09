import { useMemo } from 'react'

/**
 * Generates a memoized object containing fileKey and libraryKey if both are provided.
 * Returns null otherwise.
 * @param fileKey - The file key string
 * @param libraryKey - The library key string
 * @returns An object with fileKey and libraryKey, or null
 * @originalName $$r0
 */
export function createFileLibraryKeys(fileKey: string | undefined, libraryKey: string | undefined) {
  return useMemo(() => {
    if (!fileKey || !libraryKey)
      return null
    return { fileKey, libraryKey }
  }, [fileKey, libraryKey])
}

// Refactored export for original 'i'
export const i = createFileLibraryKeys
