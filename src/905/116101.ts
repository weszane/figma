import { createActionCreator } from "../905/73481"
import { setSideHandler } from "../905/80656"
import { PinningState } from "../905/192333"
import { createOptimistThunk } from "../905/350402"
import { getFullscreenViewEditorType } from "../figma_app/300692"
import { fullscreenValue } from "../figma_app/455680"
import { SimpleComponentType } from "../figma_app/504088"
import { searchEndSession } from "../figma_app/925970"
import { Rt } from "../figma_app/979658"
// Action creator for updating source rectangle in universal insert
export const updateSourceRect = createActionCreator("UNIVERSAL_INSERT_UPDATE_SOURCE_RECT")

// Thunk for handling universal insert modal resource details
export const handleResourceDetails = createOptimistThunk((
  {dispatch, getState},
  { id, isWidget }: { id: string, isWidget: boolean },
) => {
  const state = getState()
  const editorType = getFullscreenViewEditorType()

  // Create resource objects based on widget type
  const previewResource = {
    id,
    type: isWidget ? Rt.WIDGETS : Rt.PLUGINS,
  }

  const fdPreviewResource = {
    id,
    type: isWidget ? SimpleComponentType.WIDGET : SimpleComponentType.PLUGIN,
  }

  // Handle modal showing state
  if (state.universalInsertModal.showing) {
    dispatch(setUniversalInsertViewResourceDetails({
      fdPreviewResource: editorType === "figma" || editorType === "dev" ? fdPreviewResource : undefined,
      previewResource: editorType === "figjam" ? previewResource : undefined,
    }))
  }
  else {
    // Clear tool and open modal
    fullscreenValue.triggerAction("clear-tool", { source: "menu" })
    dispatch(setUniversalInsertModalOpen({
      initialX: 0,
      initialY: 0,
      fdPreviewResource: editorType === "figma" ? fdPreviewResource : undefined,
      previewResource: editorType === "figjam" ? previewResource : undefined,
    }))
  }
})

// Thunk for handling pinning state of universal insert modal
export const handlePinningState = createOptimistThunk((
  {dispatch, getState},
  { pinned }: { pinned: PinningState },
) => {
  // Handle left side docking
  if (pinned === PinningState.PINNED_AND_DOCKED_LEFT) {
    setSideHandler("left", () => {
      const state = getState()
      if (state.universalInsertModal.pinned === PinningState.PINNED_AND_DOCKED_LEFT) {
        dispatch(closeUniversalInsertModal())
      }
    })
  }

  dispatch(setUniversalInsertModalPin({ pinned }))
})

// Action creators for universal insert modal
export const setUniversalInsertModalPin = createActionCreator("SET_UNIVERSAL_INSERT_MODAL_PIN")
export const closeUniversalInsertModal = createOptimistThunk(({dispatch, getState}) => {
  const state = getState()
  if (state.search.sessionId) {
    dispatch(searchEndSession())
  }
  dispatch(setUniversalInsertModalClose())
})
export const setUniversalInsertModalClose = createActionCreator("SET_UNIVERSAL_INSERT_MODAL_CLOSE")
export const setUniversalInsertViewResourceDetails = createActionCreator("SET_UNIVERSAL_INSERT_VIEW_RESOURCE_DETAILS")
export const setUniversalInsertScrolledDevelopmentSection = createActionCreator("SET_UNIVERSAL_INSERT_SCROLLED_DEVELOPMENT_SECTION_INTO_VIEW")
export const setUniversalInsertModalOpen = createActionCreator("SET_UNIVERSAL_INSERT_MODAL_OPEN")

// Exported action creators with meaningful names
export const En = setUniversalInsertModalOpen
export const IN = setUniversalInsertViewResourceDetails
export const KE = closeUniversalInsertModal
export const Kl = setUniversalInsertModalPin
export const SI = setUniversalInsertScrolledDevelopmentSection
export const eo = setUniversalInsertModalClose
export const jx = updateSourceRect
export const jy = handlePinningState
export const pM = handleResourceDetails
