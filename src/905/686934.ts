import type { PrimitiveAtom } from "jotai"
import { hideModal } from "../905/156213"
import { ServiceCategories } from "../905/165054"
import { VisualBellActions } from "../905/302958"
import { getI18nString } from "../905/303541"
import { enqueueNetworkErrorBell } from "../905/470594"
import { LibraryPublishErrorType } from "../905/573265"
import { VisualBellIcon } from "../905/576487"
import { uploadTemplate } from "../905/618307"
import { logError } from "../905/714362"
import { atom, atomStoreManager } from "../figma_app/27355"
import { LibrarySourceEnum, PublishStatusEnum } from "../figma_app/633080"
import { currentPublishStateAtom, getCooperString, publishRequestAtom, PublishState, updatePublishStateAtom } from "../figma_app/755939"
import { libraryPublishingModeAtom } from "../figma_app/825489"

// Refactored from minified names to meaningful names, added types, simplified logic, and improved readability.
// Original code name preserved in comments.

export const TEMPLATE_PUBLISH_ERROR_TITLE = "Cooper Template Publish Error"
export const TEMPLATE_PUBLISH_VISUAL_BELL_TYPE = "cooper-template-publish"

/**
 * Handles the upload of a template with success and failure callbacks.
 * @param dispatch - Redux dispatch function.
 * @param publishRequest - Publish request parameters.
 */
export function handleTemplateUpload(dispatch: Fn, publishRequest: any) {
  uploadTemplate({
    ...publishRequest,
    dispatch,
    onSuccess: () => {
      atomStoreManager.set(updatePublishStateAtom, {
        state: PublishState.PUBLISH_TEMPLATE_COMPLETED,
      })
      dispatch(
        VisualBellActions.enqueue({
          type: TEMPLATE_PUBLISH_VISUAL_BELL_TYPE,
          message: publishRequest.isPublishedTemplate
            ? getI18nString("cooper.templates.template_updates_published")
            : getI18nString("cooper.templates.template_published"),
          icon: VisualBellIcon.CHECK,
        }),
      )
      dispatch(hideModal())
    },
    onFailure: (error: any) => {
      const currentPublishState = atomStoreManager.get(currentPublishStateAtom)
      const publishStep = getCooperString(currentPublishState)

      logError(
        ServiceCategories.PROJECT_BUZZ,
        TEMPLATE_PUBLISH_ERROR_TITLE,
        {
          publishState: currentPublishState,
          publishStep,
          error,
        },
        {
          reportAsSentryError: true,
        },
      )

      atomStoreManager.set(updatePublishStateAtom, {
        state: PublishState.PUBLISH_TEMPLATE_ERRORED,
      })

      dispatch(
        VisualBellActions.enqueue({
          type: TEMPLATE_PUBLISH_VISUAL_BELL_TYPE,
          message: getI18nString("cooper.templates.template_failed_published"),
          error: true,
        }),
      )
    },
  })
}

/**
 * Enqueues a visual bell error for templates that have no items marked as ready.
 * @param dispatch - Redux dispatch function.
 */
export function enqueueNoItemsToPublishError(dispatch: Fn) {
  dispatch(
    VisualBellActions.enqueue({
      type: TEMPLATE_PUBLISH_VISUAL_BELL_TYPE,
      icon: VisualBellIcon.EXCLAMATION,
      error: true,
      message: getI18nString("cooper.templates.template_publish_error_mark_at_least_one_ready"),
    }),
  )
}

// Callbacks for different publish events
export const libraryPublishCallbacks = {
  /**
   * Handles successful publish events.
   * @param params - Contains dispatch function and other context.
   */
  onPublishSuccess(params: { dispatch: Fn }) {
    const { dispatch } = params
    const currentPublishState = atomStoreManager.get(currentPublishStateAtom)
    const publishRequest = atomStoreManager.get(publishRequestAtom)

    // Set library publishing mode to LIBRARY
    atomStoreManager.set(libraryPublishingModeAtom, LibrarySourceEnum.LIBRARY)

    switch (currentPublishState) {
      case PublishState.PUBLISH_HUB_FILE_INITIATED:
        atomStoreManager.set(updatePublishStateAtom, {
          state: PublishState.PUBLISH_HUB_FILE_COMPLETED,
        })
        dispatch(
          VisualBellActions.dequeue({
            matchType: TEMPLATE_PUBLISH_VISUAL_BELL_TYPE,
          }),
        )
        break

      case PublishState.PUBLISH_TEMPLATE_INITIATED:
        if (!publishRequest) {
          throw new Error("Publish request params do not exist.")
        }
        handleTemplateUpload(dispatch, publishRequest)
        break

      case PublishState.UNPUBLISH_HUB_FILE_INITIATED:
      case PublishState.UNPUBLISH_TEMPLATE_INITIATED:
        atomStoreManager.set(updatePublishStateAtom, {
          state: PublishState.UNPUBLISH_COMPLETED,
        })
        break
    }
  },

  /**
   * Handles publish progress updates.
   * @param params - Contains publish type, dispatch function, icon, and progress key.
   */
  onPublishProgress(params: {
    publishType: PublishStatusEnum
    dispatch: Fn
    icon: VisualBellIcon
    progressKey: string
  }) {
    const { publishType, dispatch, icon, progressKey } = params
    const currentPublishState = atomStoreManager.get(currentPublishStateAtom)

    if (
      [
        PublishState.PUBLISH_TEMPLATE_INITIATED,
        PublishState.PUBLISH_HUB_FILE_INITIATED,
      ].includes(currentPublishState)
    ) {
      dispatch(
        VisualBellActions.enqueue({
          type: TEMPLATE_PUBLISH_VISUAL_BELL_TYPE,
          message:
            publishType === PublishStatusEnum.UNPUBLISH
              ? getI18nString("cooper.templates.template_unpublishing")
              : getI18nString("cooper.templates.template_publishing"),
          icon,
          progressKey,
        }),
      )
    }
  },

  /**
   * Handles publish errors.
   * @param params - Contains error details and dispatch function.
   */
  onPublishError(params: {
    error: LibraryPublishErrorType | string
    dispatch: Fn
    errorCode?: number
  }) {
    const { error, dispatch, errorCode } = params
    const currentPublishState = atomStoreManager.get(currentPublishStateAtom)
    const publishStep = getCooperString(currentPublishState)

    // Set library publishing mode to LIBRARY
    atomStoreManager.set(libraryPublishingModeAtom, LibrarySourceEnum.LIBRARY)

    // Log the error
    logError(
      ServiceCategories.PROJECT_BUZZ,
      TEMPLATE_PUBLISH_ERROR_TITLE,
      {
        publishState: currentPublishState,
        publishStep,
        error,
      },
      {
        reportAsSentryError: true,
      },
    )

    // Update publish state based on current state
    switch (currentPublishState) {
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
        return
    }

    // Handle specific error types
    switch (error) {
      case LibraryPublishErrorType.Offline:
        dispatch(
          VisualBellActions.enqueue({
            type: TEMPLATE_PUBLISH_VISUAL_BELL_TYPE,
            icon: VisualBellIcon.EXCLAMATION,
            error: true,
            message: getI18nString("cooper.templates.template_publish_error_offline"),
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
            type: TEMPLATE_PUBLISH_VISUAL_BELL_TYPE,
            icon: VisualBellIcon.EXCLAMATION,
            error: true,
            message: getI18nString("cooper.templates.template_publish_error_empty"),
          }),
        )
        break

      case LibraryPublishErrorType.ErrorCode:
        dispatch(
          errorCode === 413
            ? VisualBellActions.enqueue({
                type: TEMPLATE_PUBLISH_VISUAL_BELL_TYPE,
                error: true,
                message: getI18nString("cooper.templates.template_publish_error_page_name_too_long"),
              })
            : VisualBellActions.enqueue({
                type: TEMPLATE_PUBLISH_VISUAL_BELL_TYPE,
                error: true,
                message: getI18nString("cooper.templates.template_publish_error_something_went_wrong"),
              }),
        )
        break

      default:
        dispatch(
          VisualBellActions.enqueue({
            type: TEMPLATE_PUBLISH_VISUAL_BELL_TYPE,
            error: true,
            message: getI18nString("cooper.templates.template_publish_error_something_went_wrong"),
          }),
        )
    }
  },
}

// Atom for managing library publish callbacks
export const libraryPublishCallbacksAtom = atom<typeof libraryPublishCallbacks | undefined>(undefined) as PrimitiveAtom<any>

export const libraryPublishCallbacksSelectorAtom = atom(
  get => get(libraryPublishCallbacksAtom) ?? libraryPublishCallbacks,
  (get, set, newValue) => {
    if (newValue && get(libraryPublishCallbacksAtom)) {
      throw new Error("Cooper library publish callbacks already overridden")
    }
    set(libraryPublishCallbacksAtom, newValue)
    return newValue ?? libraryPublishCallbacks
  },
)

/**
 * Returns the current library publish callbacks.
 */
export function getLibraryPublishCallbacks() {
  return atomStoreManager.get(libraryPublishCallbacksSelectorAtom)
}

// Exported constants and functions with original names mapped to refactored ones
export const Ao = TEMPLATE_PUBLISH_VISUAL_BELL_TYPE // Original: $$_0
export const BT = libraryPublishCallbacksSelectorAtom // Original: $$I1
export const Bj = enqueueNoItemsToPublishError // Original: $$y2
export const _I = handleTemplateUpload // Original: $$A3
export const sG = getLibraryPublishCallbacks // Original: $$E4
