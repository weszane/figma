import { useCallback } from "react"
import { trackEventAnalytics } from "../905/449184"

// Refactored from $$a1 - Renamed variables, added types, improved readability
export function useLibraryFileExpanded({
  disabled,
  libraryIdentifier,
  fileName,
  viewFile,
}: {
  disabled: boolean
  libraryIdentifier: string
  fileName: string
  viewFile: (identifier: string) => void
}) {
  return useCallback(() => {
    if (!disabled && libraryIdentifier) {
      viewFile(libraryIdentifier)
      trackEventAnalytics("Library File Expanded", {
        fileName,
      })
    }
  }, [disabled, viewFile, libraryIdentifier, fileName])
}

// Refactored from $$s0 - Renamed variables, added types, improved readability
export function useLibraryKeyExpanded({
  disabled,
  libraryKey,
  fileName,
  viewFile,
}: {
  disabled: boolean
  libraryKey: string
  fileName: string
  viewFile: (key: string) => void
}) {
  return useCallback(() => {
    if (!disabled && libraryKey) {
      viewFile(libraryKey)
      trackEventAnalytics("Library File Expanded", {
        fileName,
      })
    }
  }, [disabled, viewFile, libraryKey, fileName])
}

export const Q = useLibraryKeyExpanded
export const S = useLibraryFileExpanded
