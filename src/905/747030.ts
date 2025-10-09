import { ke } from "../905/58274"
import { handleLibraryPublishError, handleLibraryPublishInProgress, handleLibraryPublishSuccess } from "../905/573265"
import { getLibraryPublishCallbacks } from "../905/686934"
import { FFileType } from "../figma_app/191312"

export function $$o0(e) {
  return e === FFileType.SLIDES && ke
    ? ke()
    : e === FFileType.COOPER && getLibraryPublishCallbacks
      ? getLibraryPublishCallbacks()
      : {
          onPublishSuccess: handleLibraryPublishSuccess,
          onPublishProgress: handleLibraryPublishInProgress,
          onPublishError: handleLibraryPublishError,
        }
}
export const u = $$o0
