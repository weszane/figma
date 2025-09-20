import mapValues from 'lodash-es/mapValues'
import { useMemo } from 'react'
import { useLibraryMetadata, useMultipleLibraryMetadata } from '../905/726668'

// Original: $$l1 - renamed to getLibraryNames for multiple libraries
/**
 * Hook to retrieve names of multiple libraries.
 * @param libraryIds - Array of library IDs.
 * @param options - Options object with enabled flag.
 * @returns Object mapping library IDs to their names.
 */
export function getLibraryNames(libraryIds: string[], { enabled = true } = {}) {
  const metadata = useMultipleLibraryMetadata(libraryIds, { enabled })
  return useMemo(() => metadata.transform(data => mapValues(data, item => item.name)), [metadata])
}

// Original: $$d0 - renamed to getLibraryName for single library
/**
 * Hook to retrieve the name of a single library.
 * @param libraryId - The library ID.
 * @param options - Options object with enabled flag.
 * @returns The library name or null if not found.
 */
export function getLibraryName(libraryId: string, { enabled = true } = {}) {
  const metadata = useLibraryMetadata(libraryId, { enabled })
  return useMemo(() => metadata.transform(data => data?.name ?? null), [metadata])
}

// Aliases updated to match refactored names
export const B = getLibraryName
export const U = getLibraryNames
