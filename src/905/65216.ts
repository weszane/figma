import { VisualBellActions } from "../905/302958"
import { getI18nString } from "../905/303541"
import { createOptimistThunk } from "../905/350402"
import { debugState } from "../905/407919"
import { VisualBellIcon } from "../905/576487"
import { trackFileEvent } from "../figma_app/314264"
import { getAncestors } from "../figma_app/387100"
import { Fullscreen } from "../figma_app/763686"

/**
 * Type for the return to instance data structure.
 */
interface ReturnToInstanceData {
  mainComponentGUID: string
  instanceGUIDs: string[]
}

/**
 * Constant for the visual bell type.
 */
const RETURN_TO_INSTANCE_TYPE = "return_to_instance"

/**
 * State variable to hold return to instance data.
 */
let returnToInstanceData: ReturnToInstanceData | null = null

/**
 * Flag to track if the visual bell is currently shown.
 */
let isVisualBellShown = false

/**
 * Timeout for dismissing the return to instance data.
 */
let dismissTimeout: NodeJS.Timeout | number | null = null

/**
 * Thunk to set up the return to instance handler.
 * Analyzes the selected component and prepares data for potential return to instance action.
 */
export const setupReturnToInstanceHandler = createOptimistThunk(({ getState }, componentGUID) => {
  const state = getState()
  const libraryKey = state.openFile?.libraryKey
  if (!componentGUID)
    return

  const component = state.mirror.sceneGraph.get(componentGUID)
  const isFromCurrentLibrary = !!(libraryKey && component?.sourceLibraryKey === libraryKey)

  if (!component || !isFromCurrentLibrary) {
    const publishID = component?.publishID ?? ""
    returnToInstanceData = {
      mainComponentGUID: publishID,
      instanceGUIDs: Object.keys(state.mirror.sceneGraphSelection),
    }
    isVisualBellShown = false
  }
  else {
    returnToInstanceData = {
      mainComponentGUID: componentGUID,
      instanceGUIDs: Object.keys(state.mirror.sceneGraphSelection),
    }
    isVisualBellShown = false
  }
})

/**
 * Thunk to check and show the return to instance visual bell if conditions are met.
 */
export const checkAndShowReturnToInstanceBell = createOptimistThunk(({ dispatch, getState }) => {
  const state = getState()
  const selectedGUIDs = Object.keys(state.mirror.sceneGraphSelection)
  const shouldShowBell = returnToInstanceData
    && selectedGUIDs.length === 1
    && (selectedGUIDs[0] === returnToInstanceData.mainComponentGUID
      || getAncestors(state.mirror.sceneGraph, selectedGUIDs[0]).some(ancestor => ancestor.guid === returnToInstanceData?.mainComponentGUID))

  if (shouldShowBell && !isVisualBellShown) {
    document.addEventListener("keydown", handleKeyboardShortcut)
    dispatch(VisualBellActions.enqueue({
      type: RETURN_TO_INSTANCE_TYPE,
      message: "",
      icon: VisualBellIcon.RETURN_TO_INSTANCE,
      button: {
        text: getI18nString("design_systems.actions.return_to_instance"),
        action: () => {
          executeReturnToInstance({
            additionalTrackingProperties: {
              source: "visual_bell",
            },
          })
        },
      },
      onDismiss: () => {
        returnToInstanceData = null
        isVisualBellShown = false
        document.removeEventListener("keydown", handleKeyboardShortcut)
      },
    }))
    isVisualBellShown = true
    if (dismissTimeout)
      clearTimeout(dismissTimeout)
  }
  else if (!shouldShowBell && isVisualBellShown) {
    document.removeEventListener("keydown", handleKeyboardShortcut)
    dispatch(VisualBellActions.dequeue({
      matchType: RETURN_TO_INSTANCE_TYPE,
    }))
    isVisualBellShown = false
    dismissTimeout = setTimeout(() => {
      returnToInstanceData = null
    }, 120000) // 2 minutes
  }
})

/**
 * Handles keyboard shortcuts for return to instance.
 */
function handleKeyboardShortcut(event: KeyboardEvent) {
  const isMetaCtrlAlt = event.ctrlKey && event.altKey && event.metaKey
  const isCtrlAltShift = event.ctrlKey && event.altKey && event.shiftKey

  if ((isMetaCtrlAlt || isCtrlAltShift) && event.code === "KeyK") {
    executeReturnToInstance({
      additionalTrackingProperties: {
        source: "keyboard",
        keyboardShortcut: "K",
        keyboardShortcutFull: isMetaCtrlAlt ? "meta+control+alt+k" : "control+alt+shift+k",
      },
    })
    debugState.dispatch(VisualBellActions.dequeue({
      matchType: RETURN_TO_INSTANCE_TYPE,
    }))
  }
}

/**
 * Executes the return to instance action.
 */
function executeReturnToInstance({ additionalTrackingProperties = {} } = {}) {
  if (returnToInstanceData) {
    Fullscreen.selectInstances(returnToInstanceData.instanceGUIDs.join(","), true)
    returnToInstanceData = null
    isVisualBellShown = false
    trackReturnToInstanceEvent({ additionalTrackingProperties })
  }
  document.removeEventListener("keydown", handleKeyboardShortcut)
}

/**
 * Tracks the return to instance event.
 */
function trackReturnToInstanceEvent({ additionalTrackingProperties = {} } = {}) {
  const state = debugState.getState()
  trackFileEvent("Return to instance", state.openFile?.key, state, {
    ...additionalTrackingProperties,
  })
}

export const l = setupReturnToInstanceHandler
export const m = checkAndShowReturnToInstanceBell
