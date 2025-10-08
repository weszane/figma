import { VisualBellActions } from "../905/302958"
import { createOptimistThunk } from "../905/350402"
import { BellId } from "../905/576487"

// Origin: /Users/allen/github/fig/src/905/509236.ts
// Refactored: Renamed variables, added types, simplified logic, added comments, ensured type safety

// --- Type Definitions ---

// Assumed shape of the thunk's second argument (action payload)
interface MoveFilePayload {
  fromFileModal: boolean
  onFinishCallback?: (folderName: string) => void
  folderName: string
  folderId: string
  name: string
}

// Assumed shape of Redux state
interface ModalState {
  data: {
    afterFileMove?: {
      handlesVisualBell?: boolean
      callback?: (folderName: string) => void
    }
  }
}

interface AppState {
  modalShown?: ModalState
}

// --- Refactored Thunk ---

/**
 * Handles moving a file to a folder, showing a visual bell if needed.
 * - Renamed variables for clarity.
 * - Added TypeScript types.
 * - Simplified conditional logic.
 * - Added comments to explain unclear logic.
 */
export const moveFileThunk = createOptimistThunk(
  (dispatchApi, payload: MoveFilePayload) => {
    // Only proceed if triggered from the file modal
    if (!payload.fromFileModal)
      return

    // If a finish callback is provided, call it and exit
    if (payload.onFinishCallback) {
      payload.onFinishCallback(payload.folderName)
      return
    }

    // Get current application state
    const state: AppState = dispatchApi.getState()
    // Use "Drafts" as default folder name if empty
    const folderName = payload.folderName === "" ? "Drafts" : payload.folderName
    const modalState = state.modalShown

    // If modal is not shown or not from file modal, show visual bell and exit
    if (!modalState || !payload.fromFileModal) {
      dispatchApi.dispatch(
        VisualBellActions.enqueue({
          type: "file-moved",
          i18n: {
            id: BellId.FILE_MOVE_FOLDER_BELL_ID,
            params: { text: folderName },
          },
        }),
      )
      return
    }

    // Handle afterFileMove logic if present
    const afterFileMove = modalState.data.afterFileMove
    // If afterFileMove does NOT handle visual bell, show it
    if (!afterFileMove?.handlesVisualBell) {
      dispatchApi.dispatch(
        VisualBellActions.enqueue({
          type: "file-moved",
          i18n: {
            id: BellId.FILE_MOVE_FOLDER_BELL_ID,
            params: { text: folderName },
          },
        }),
      )
    }
    // Call afterFileMove callback if present
    afterFileMove?.callback?.(folderName)
  },
)

// Export for compatibility with original code
export const f = moveFileThunk

/*
  Assumed dependencies:
    - VisualBellActions.enqueue: Action creator for visual bell notifications.
    - createOptimistThunk: Utility for creating thunks.
    - BellId.FILE_MOVE_FOLDER_BELL_ID: Constant for bell notification ID.
  Potential issues:
    - If modalShown or afterFileMove shape changes, type definitions may need updates.
    - If folderName can be null/undefined, further type checks may be needed.
*/
