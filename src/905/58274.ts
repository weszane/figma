import type { UploadTemplateParams } from "../905/618307"
import { hideModal } from "../905/156213"
import { ServiceCategories } from "../905/165054"
import { VisualBellActions } from "../905/302958"
import { getI18nString } from "../905/303541"
import { enqueueNetworkErrorBell } from "../905/470594"
import { LibraryPublishErrorType } from "../905/573265"
import { VisualBellIcon } from "../905/576487"
import { uploadTemplate } from "../905/618307"
import { logError } from "../905/714362"
import { atomStoreManager } from "../figma_app/27355"
import { currentRequestAtom, currentStateAtom, getPublishLabel, PublishState, updatePublishStateAtom } from "../figma_app/60023"
import { LibrarySourceEnum, PublishStatusEnum } from "../figma_app/633080"
import { AppStateTsApi } from "../figma_app/763686"
import { libraryPublishingModeAtom } from "../figma_app/825489"
// Origin: /Users/allen/sigma-main/src/905/58274.ts
// Refactored: Renamed variables, added TypeScript types/interfaces, simplified logic, added comments, improved readability, and ensured type safety.

// Assumed dependencies: All imported modules exist and provide the expected APIs/types.

const SLIDES_TEMPLATE_PUBLISH_ERROR = "Slides Template Publish Error"
const SLIDES_TEMPLATE_PUBLISH_TYPE = "slides-template-publish"

// --- Type Definitions ---

// Dispatch function type (Redux-like)
type Dispatch = (action: any) => void



// Error handling parameters
interface PublishErrorParams {
  error: LibraryPublishErrorType | any
  errorCode?: number
  dispatch: Dispatch
}

// Publish progress parameters
interface PublishProgressParams {
  publishType: PublishStatusEnum
  dispatch: Dispatch
  icon?: VisualBellIcon
  progressKey?: string
}

// Publish success parameters
interface PublishSuccessParams {
  dispatch: Dispatch
}

// --- Refactored Functions ---

/**
 * Handles publishing a slides template.
 * - Updates state and shows success/error toasts.
 */
export function publishSlidesTemplate(dispatch: Dispatch, params: UploadTemplateParams) {
  uploadTemplate({
    ...params,
    dispatch,
    onSuccess: () => {
      // Update source library key in canvas grid
      AppStateTsApi?.canvasGrid().updateSourceLibraryKey(params.libraryKey)

      // Set publish state to completed
      atomStoreManager.set(updatePublishStateAtom, {
        state: PublishState.PUBLISH_TEMPLATE_COMPLETED,
      })

      // Show success toast
      dispatch(
        VisualBellActions.enqueue({
          type: SLIDES_TEMPLATE_PUBLISH_TYPE,
          message: params.isPublishedTemplate
            ? getI18nString("slides.templates.publish_actions.toast.update_success")
            : getI18nString("slides.templates.publish_actions.toast.publish_success"),
          icon: VisualBellIcon.CHECK,
        }),
      )

      // Hide modal
      dispatch(hideModal())
    },
    onFailure: (error: any) => {
      const currentState = atomStoreManager.get(currentStateAtom)
      const publishStep = getPublishLabel(currentState)

      // Log error with Sentry reporting
      logError(
        ServiceCategories.SLIDES,
        SLIDES_TEMPLATE_PUBLISH_ERROR,
        {
          publishState: currentState,
          publishStep,
          error,
        },
        { reportAsSentryError: true },
      )

      // Set publish state to errored
      atomStoreManager.set(updatePublishStateAtom, {
        state: PublishState.PUBLISH_TEMPLATE_ERRORED,
      })

      // Show error toast
      dispatch(
        VisualBellActions.enqueue({
          type: SLIDES_TEMPLATE_PUBLISH_TYPE,
          message: getI18nString("slides.templates.publish_actions.toast.publish_error"),
          error: true,
        }),
      )
    },
  })
}

/**
 * Handles publish success logic based on current state.
 */
function handlePublishSuccess(params: PublishSuccessParams): void {
  const { dispatch } = params
  const currentState = atomStoreManager.get(currentStateAtom)
  const currentRequest = atomStoreManager.get(currentRequestAtom)

  // Always set publishing mode to LIBRARY
  atomStoreManager.set(libraryPublishingModeAtom, LibrarySourceEnum.LIBRARY)

  switch (currentState) {
    case PublishState.PUBLISH_HUB_FILE_INITIATED:
      atomStoreManager.set(updatePublishStateAtom, {
        state: PublishState.PUBLISH_HUB_FILE_COMPLETED,
      })
      dispatch(
        VisualBellActions.dequeue({
          matchType: SLIDES_TEMPLATE_PUBLISH_TYPE,
        }),
      )
      break
    case PublishState.PUBLISH_TEMPLATE_INITIATED:
      if (!currentRequest) {
        throw new Error("Publish request params do not exist.")
      }
      publishSlidesTemplate(dispatch, currentRequest)
      break
    case PublishState.UNPUBLISH_HUB_FILE_INITIATED:
    case PublishState.UNPUBLISH_TEMPLATE_INITIATED:
      atomStoreManager.set(updatePublishStateAtom, {
        state: PublishState.UNPUBLISH_COMPLETED,
      })
      break
    // No default needed; all states handled.
  }
}

/**
 * Handles publish progress notifications.
 */
function handlePublishProgress(params: PublishProgressParams): void {
  const { publishType, dispatch, icon, progressKey } = params
  const currentState = atomStoreManager.get(currentStateAtom)

  // Show progress toast only for publish-initiated states
  if (
    [PublishState.PUBLISH_TEMPLATE_INITIATED, PublishState.PUBLISH_HUB_FILE_INITIATED].includes(
      currentState,
    )
  ) {
    dispatch(
      VisualBellActions.enqueue({
        type: SLIDES_TEMPLATE_PUBLISH_TYPE,
        message:
          publishType === PublishStatusEnum.UNPUBLISH
            ? getI18nString("slides.templates.publish_actions.unpublishing")
            : getI18nString("slides.templates.publish_actions.publishing"),
        icon,
        progressKey,
      }),
    )
  }
}

/**
 * Handles publish error logic and notifications.
 */
function handlePublishError(params: PublishErrorParams): void {
  const { error, errorCode, dispatch } = params
  const currentState = atomStoreManager.get(currentStateAtom)
  const publishStep = getPublishLabel(currentState)

  // Always set publishing mode to LIBRARY and log error
  atomStoreManager.set(libraryPublishingModeAtom, LibrarySourceEnum.LIBRARY)
  logError(
    ServiceCategories.SLIDES,
    SLIDES_TEMPLATE_PUBLISH_ERROR,
    {
      publishState: currentState,
      publishStep,
      error,
    },
    { reportAsSentryError: true },
  )

  // Update publish state based on current state
  switch (currentState) {
    case PublishState.PUBLISH_HUB_FILE_INITIATED:
      atomStoreManager.set(updatePublishStateAtom, {
        state: PublishState.PUBLISH_HUB_FILE_ERRORED,
      })
      break
    case PublishState.PUBLISH_TEMPLATE_INITIATED:
      atomStoreManager.set(updatePublishStateAtom, {
        state: PublishState.PUBLISH_TEMPLATE_ERRORED,
      })
      break
    case PublishState.UNPUBLISH_TEMPLATE_INITIATED:
    case PublishState.UNPUBLISH_HUB_FILE_INITIATED:
      atomStoreManager.set(updatePublishStateAtom, {
        state: PublishState.UNPUBLISH_TEMPLATE_ERRORED,
      })
      return // No further error handling needed
  }

  // Show error notification based on error type
  switch (error) {
    case LibraryPublishErrorType.Offline:
      dispatch(
        VisualBellActions.enqueue({
          type: SLIDES_TEMPLATE_PUBLISH_TYPE,
          icon: VisualBellIcon.EXCLAMATION,
          error: true,
          message: getI18nString("slides.templates.publish_actions.toast.offline_error"),
        }),
      )
      break
    case LibraryPublishErrorType.NonS3PresignedPost:
      enqueueNetworkErrorBell(
        dispatch,
        getI18nString("check_network_compatibility.error_bell.library_publish.message"),
      )
      break
    case LibraryPublishErrorType.NoItemsToPublish:
      dispatch(
        VisualBellActions.enqueue({
          type: SLIDES_TEMPLATE_PUBLISH_TYPE,
          icon: VisualBellIcon.EXCLAMATION,
          error: true,
          message: getI18nString("slides.templates.publish_actions.toast.no_items_error"),
        }),
      )
      break
    case LibraryPublishErrorType.ErrorCode:
      dispatch(
        errorCode === 413
          ? VisualBellActions.enqueue({
              type: SLIDES_TEMPLATE_PUBLISH_TYPE,
              error: true,
              message: getI18nString("slides.templates.publish_actions.toast.long_name_error"),
            })
          : VisualBellActions.enqueue({
              type: SLIDES_TEMPLATE_PUBLISH_TYPE,
              error: true,
              message: getI18nString("slides.templates.publish_actions.toasts.publish_error.generic"),
            }),
      )
      break
    default:
      dispatch(
        VisualBellActions.enqueue({
          type: SLIDES_TEMPLATE_PUBLISH_TYPE,
          error: true,
          message: getI18nString("slides.templates.publish_actions.toasts.publish_error.generic"),
        }),
      )
  }
}

/**
 * Shows a "no items to publish" error toast.
 */
export function showNoItemsToPublishError(dispatch: Dispatch): void {
  dispatch(
    VisualBellActions.enqueue({
      type: SLIDES_TEMPLATE_PUBLISH_TYPE,
      icon: VisualBellIcon.EXCLAMATION,
      error: true,
      message: getI18nString("slides.templates.publish_actions.toast.no_items_error"),
    }),
  )
}

/**
 * Returns handlers for publish success, progress, and error.
 */
export function getPublishHandlers() {
  return {
    onPublishSuccess: handlePublishSuccess,
    onPublishProgress: handlePublishProgress,
    onPublishError: handlePublishError,
  }
}

// --- Exported Constants (keep original names for compatibility) ---

export const CR = SLIDES_TEMPLATE_PUBLISH_TYPE
export const Dl = showNoItemsToPublishError
export const ke = getPublishHandlers
export const oX = publishSlidesTemplate
