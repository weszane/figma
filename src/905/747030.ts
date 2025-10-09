import { getPublishHandlers } from "../905/58274";
import { handleLibraryPublishError, handleLibraryPublishInProgress, handleLibraryPublishSuccess } from "../905/573265";
import { getLibraryPublishCallbacks } from "../905/686934";
import { FFileType } from "../figma_app/191312";
// Origin: $$o0 (from /src/905/747030.ts)
// Refactored: Renamed variables, added types, simplified conditional logic, added comments and type safety

// Assumed dependencies:
// - FFileType: enum with at least SLIDES and COOPER members
// - getPublishHandlers(): () => LibraryPublishHandlers
// - getLibraryPublishCallbacks(): () => LibraryPublishHandlers
// - handleLibraryPublishSuccess, handleLibraryPublishInProgress, handleLibraryPublishError: callback functions

// Type definitions for publish handler callbacks
export interface LibraryPublishHandlers {
  onPublishSuccess: (...args: any[]) => void;
  onPublishProgress: (...args: any[]) => void;
  onPublishError: (...args: any[]) => void;
}

/**
 * Returns the appropriate publish handlers based on the file type.
 * - For SLIDES: uses getPublishHandlers if available.
 * - For COOPER: uses getLibraryPublishCallbacks if available.
 * - Otherwise: returns default handlers.
 */
export function getPublishHandlersForFileType(
  fileType: FFileType
): LibraryPublishHandlers {
  if (fileType === FFileType.SLIDES && typeof getPublishHandlers === "function") {
    return getPublishHandlers();
  }
  if (fileType === FFileType.COOPER && typeof getLibraryPublishCallbacks === "function") {
    return getLibraryPublishCallbacks();
  }
  // Default handlers
  return {
    onPublishSuccess: handleLibraryPublishSuccess,
    onPublishProgress: handleLibraryPublishInProgress,
    onPublishError: handleLibraryPublishError,
  };
}

// Export with original name for compatibility
export const u = getPublishHandlersForFileType;
