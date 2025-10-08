import { createActionCreator } from "../905/73481"
import { showModalHandler } from "../905/156213"
import { VisualBellActions } from "../905/302958"
import { getI18nString } from "../905/303541"
import { createOptimistThunk } from "../905/350402"
import { debugState } from "../905/407919"
import { getFeatureFlags } from "../905/601108"
import { G } from "../905/674940"
import { getInitialOptions } from "../figma_app/169182"
import { trackFileEvent } from "../figma_app/314264"
import { sendUnsavedChangesBell } from "../figma_app/553184"
import { wZ } from "../figma_app/701982"
import { Multiplayer, SchemaJoinStatus } from "../figma_app/763686"
import { desktopAPIInstance } from "../figma_app/876459"
// Action creator for setting save status
export const setSaveStatus = createActionCreator("SET_SAVE_STATUS")

// Thunk for handling save status updates
const handleSaveStatusUpdate = createOptimistThunk(({dispatch}, saveStatus) => {
  // Update desktop API save status if available and not in file browser tab
  if (desktopAPIInstance && !desktopAPIInstance.isFileBrowserTab()) {
    const isSaved = !saveStatus.hasUnsavedChanges
    desktopAPIInstance.setSaved(isSaved)
  }

  // Dispatch related actions
  dispatch(updateUnsavedChangesBell(saveStatus))
  dispatch(setSaveStatus(saveStatus))
})

// Function to send unsaved changes bell notification
function sendUnsavedChangesNotification(fileKey: string) {
  sendUnsavedChangesBell()

  if (Multiplayer) {
    const multiplayerData = {
      fileKey,
      multiplayer_session_state: Multiplayer.getSessionState(),
      is_joined: Multiplayer.getSessionState() === SchemaJoinStatus.JOINED,
      is_incremental: Multiplayer.isIncrementalSession(),
      isStagingChanges: Multiplayer.isStagingChanges(),
      stagedRegisters: getFeatureFlags().use_registers_with_staged_value,
    }

    trackFileEvent("unsaved_changes_bell", fileKey, debugState.getState(), multiplayerData)
  }
}

// Thunk for handling unsaved changes bell notifications
export const updateUnsavedChangesBell = createOptimistThunk(({dispatch, getState}, saveStatus) => {
  const state = getState()
  const openFile = state.openFile

  if (!openFile)
    return

  const hasUnsavedChanges = saveStatus.hasUnsavedChanges
  const hadUnsavedChanges = state.saveStatus?.hasUnsavedChanges

  // If transitioning from saved to unsaved
  if ((!hadUnsavedChanges && hasUnsavedChanges)) {
    G.start(() => {
      // Clear all visual bells in e2e traffic mode
      if (getInitialOptions().e2e_traffic) {
        dispatch(VisualBellActions.clearAll())
      }

      // Show unsaved changes bell if feature flag allows
      if (!getFeatureFlags().remove_unsaved_changes_bell) {
        dispatch(VisualBellActions.enqueue({
          type: "unsaved_changes",
          message: getI18nString("save_status.unsaved_changes"),
          button: {
            text: getI18nString("save_status.learn_more"),
            action: () => {
              dispatch(showModalHandler({
                type: wZ,
                data: {},
              }))
            },
          },
          onDismiss: () => {
            dispatch(VisualBellActions.dequeue({
              matchType: "unsaved_changes",
            }))
          },
          timeoutOverride: Infinity,
        }))
      }

      // Send notification
      sendUnsavedChangesNotification(openFile.key)
    }, getInitialOptions().e2e_traffic ? 10 : undefined)
  }
  // If transitioning from unsaved to saved
  else if (hadUnsavedChanges && !hasUnsavedChanges) {
    // Remove unsaved changes bell
    dispatch(VisualBellActions.dequeue({
      matchType: "unsaved_changes",
    }))

    // Clear any pending notifications and show saved confirmation if online
    if (G.clear() && navigator.onLine) {
      dispatch(VisualBellActions.enqueue({
        message: getI18nString("save_status.changes_saved"),
      }))
    }
  }
})

export const E = handleSaveStatusUpdate
export const v = setSaveStatus
