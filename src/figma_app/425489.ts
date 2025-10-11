import { atomWithReducer } from "jotai/utils"

import { getValidPrototypeNodeId } from "../905/291518"
import { debugState } from "../905/407919"
import { atomStoreManager } from "../905/490038"
import { isValidSessionLocalID, parseSessionLocalID } from "../905/871411"
import { inlinePreviewController } from "../905/991888"
import { trackDefinedFileEventWrapper } from "../figma_app/2590"
import { areDevicesEquivalent } from "../figma_app/170018"
import { BreakpointType, calculateInitialViewerSize, getBreakpoint } from "../figma_app/354027"
import { fullscreenValue } from "../figma_app/455680"
import { assert, assertNotNullish, throwTypeError } from "../figma_app/465776"
import { interactionTestAtom } from "../figma_app/617727"
import { replaceSelection } from "../figma_app/741237"
import { PrototypingTsApi } from "../figma_app/763686"
// Refactored for readability, type safety, and modularity. Renamed variables, added types, simplified logic, and added explanatory comments.

// Counter for tracking selection replacements
let selectionReplacementCounter = 0

// Dispatches an event when the selection has been replaced multiple times
function dispatchSelectionReplacedEvent() {
  if (selectionReplacementCounter !== 0) {
    debugState.dispatch(
      trackDefinedFileEventWrapper({
        name: "prototype.frame_following_selection_replaced",
        params: {
          jumps: selectionReplacementCounter,
        },
      }),
    )
    selectionReplacementCounter = 0
  }
}

// Increments the counter and dispatches event if threshold is met
function incrementAndCheckReplacementThreshold() {
  selectionReplacementCounter += 1
  if (selectionReplacementCounter >= 5) {
    dispatchSelectionReplacedEvent()
  }
}

// Enum for inline preview visibility status
export enum InlinePreviewVisibilityStatus {
  SHOWN = 0,
  HIDDEN = 1,
  LOAD_PENDING = 2,
  LOAD_FORBIDDEN = 3,
}

// Enum for modal status
export enum InlineModalStatus {
  OPEN = 0,
  CLOSED = 1,
  NOT_LOADED = 2,
}

// Interface for inline preview state
interface InlinePreviewState {
  navigateForwardEnabled: boolean
  navigateBackwardEnabled: boolean
  currentPresentedNode: string | null
  requestedNodeId: string | null
  modalStatus: InlineModalStatus
  wasModalOpenedSinceViewerLoaded: boolean
  sizeInfo: {
    breakpoint: {
      type: BreakpointType
      x?: number
      y?: number
    } | null
    initialViewerSize: { x: number, y: number } | null
  } | null
  scalingInfo: {
    viewportScalingMode: string
    contentScalingMode: string
  }
  forceScalingInfo?: {
    viewportScalingMode: string
    contentScalingMode: string
  }
  targetFrameFollowingEnabled: boolean
  targetFrameFollowingScrollToNode?: (nodeId: string) => void
  showDeviceFrameEnabled: boolean
  getCurrentViewerSize: (() => { x: number, y: number }) | null
  previewKeyForErrorBoundary: number
  isCrashed: boolean
  exporting: boolean
  buzzInlinePreviewStatus: InlinePreviewVisibilityStatus
  buzzInlinePreviewPosition: {
    left: number
    top: number
  }
  timelinePlayerState: {
    status: "stopped" | "playing" | "paused"
    currentTimeMs: number
    totalTimeMs: number
  }
}

// Initial state for the inline preview reducer
const initialInlinePreviewState: InlinePreviewState = {
  navigateForwardEnabled: false,
  navigateBackwardEnabled: false,
  currentPresentedNode: null,
  requestedNodeId: null,
  modalStatus: InlineModalStatus.NOT_LOADED,
  wasModalOpenedSinceViewerLoaded: false,
  sizeInfo: null,
  scalingInfo: {
    viewportScalingMode: "scale-down-width",
    contentScalingMode: "fixed",
  },
  targetFrameFollowingEnabled: false,
  targetFrameFollowingScrollToNode: undefined,
  showDeviceFrameEnabled: true,
  getCurrentViewerSize: null,
  previewKeyForErrorBoundary: 0,
  isCrashed: false,
  exporting: false,
  buzzInlinePreviewStatus: InlinePreviewVisibilityStatus.LOAD_FORBIDDEN,
  buzzInlinePreviewPosition: {
    left: 0,
    top: 0,
  },
  timelinePlayerState: {
    status: "stopped",
    currentTimeMs: 0,
    totalTimeMs: 0,
  },
}

// Resets the inline preview state and ensures the preview controller is closed
function resetInlinePreviewState(state: InlinePreviewState): InlinePreviewState {
  inlinePreviewController.ensureClosed()
  dispatchSelectionReplacedEvent()
  return {
    ...state,
    requestedNodeId: null,
    currentPresentedNode: null,
    modalStatus: InlineModalStatus.CLOSED,
  }
}
interface Action {
  type: string
  payload: any
}
// Reducer for managing inline preview state
export const inlinePreviewReducer = atomWithReducer<InlinePreviewState, Action>(initialInlinePreviewState, (state, action) => {
  const { type } = action
  let newState = state

  switch (type) {
    case "OPEN_INLINE_PREVIEW": {
      const { sceneGraph, requestedNodeId, onOpen } = action.payload
      inlinePreviewController.navigateTo(requestedNodeId)
      inlinePreviewController.notifyWasModalOpenedSinceViewerLoaded(true)
      atomStoreManager.set(interactionTestAtom, true)

      const selectedNode = sceneGraph.get(requestedNodeId)
      assert(!!selectedNode, "expected selectedNode to exist")

      const sizeInfo = calculateInitialViewerSize(
        state.sizeInfo,
        false,
        state.showDeviceFrameEnabled,
        requestedNodeId,
        sceneGraph,
      )
      onOpen(sizeInfo.initialViewerSize)

      const previewKeyForErrorBoundary = state.isCrashed
        ? state.previewKeyForErrorBoundary + 1
        : state.previewKeyForErrorBoundary

      newState = {
        ...state,
        requestedNodeId,
        currentPresentedNode: requestedNodeId,
        sizeInfo,
        modalStatus: InlineModalStatus.OPEN,
        wasModalOpenedSinceViewerLoaded: true,
        isCrashed: false,
        previewKeyForErrorBoundary,
      }
      break
    }

    case "OPEN_SLIDES_INLINE_PREVIEW":
      newState = {
        ...state,
        scalingInfo: {
          viewportScalingMode: "contain",
          contentScalingMode: "fixed",
        },
        forceScalingInfo: {
          viewportScalingMode: "contain",
          contentScalingMode: "fixed",
        },
        modalStatus: InlineModalStatus.CLOSED,
        targetFrameFollowingEnabled: true,
      }
      break

    case "OPEN_BUZZ_INLINE_PREVIEW": {
      const { sceneGraph, requestedNodeId, onOpen } = action.payload
      const scalingInfo = {
        viewportScalingMode: "contain",
        contentScalingMode: "fixed",
      }

      inlinePreviewController.navigateTo(requestedNodeId)
      inlinePreviewController.notifyWasModalOpenedSinceViewerLoaded(true)
      atomStoreManager.set(interactionTestAtom, true)

      const selectedNode = sceneGraph.get(requestedNodeId)
      assert(!!selectedNode, "expected selectedNode to exist")

      const sizeInfo = calculateInitialViewerSize(
        state.sizeInfo,
        false,
        state.showDeviceFrameEnabled,
        requestedNodeId,
        sceneGraph,
      )
      onOpen(sizeInfo.initialViewerSize)

      const previewKeyForErrorBoundary = state.isCrashed
        ? state.previewKeyForErrorBoundary + 1
        : state.previewKeyForErrorBoundary

      newState = {
        ...state,
        requestedNodeId,
        sizeInfo,
        isCrashed: false,
        previewKeyForErrorBoundary,
        forceScalingInfo: scalingInfo,
        scalingInfo,
        buzzInlinePreviewStatus: InlinePreviewVisibilityStatus.SHOWN,
      }
      break
    }

    case "UPDATE_BUZZ_INLINE_PREVIEW": {
      const { status, position, size, requestedNodeId } = action.payload
      let shouldUpdateStatus = false

      if (status !== undefined) {
        const isTransitioningToLoadPending
          = state.buzzInlinePreviewStatus === InlinePreviewVisibilityStatus.LOAD_FORBIDDEN
            && status === InlinePreviewVisibilityStatus.LOAD_PENDING
        const isNotInLoadState
          = state.buzzInlinePreviewStatus !== InlinePreviewVisibilityStatus.LOAD_FORBIDDEN
            && state.buzzInlinePreviewStatus !== InlinePreviewVisibilityStatus.LOAD_PENDING
        shouldUpdateStatus = isTransitioningToLoadPending || isNotInLoadState
      }

      newState = {
        ...(requestedNodeId ? updateRequestedNode(state, requestedNodeId, false) : state),
        ...(shouldUpdateStatus && {
          buzzInlinePreviewStatus: status,
        }),
        ...(position && {
          buzzInlinePreviewPosition: position,
        }),
        ...(size && {
          sizeInfo: {
            breakpoint:
              state.sizeInfo?.breakpoint || {
                type: BreakpointType.SMALL,
              },
            initialViewerSize: size,
          },
        }),
      }
      break
    }

    case "CLOSE_INLINE_PREVIEW":
      newState = resetInlinePreviewState(state)
      break

    case "RESET_INLINE_PREVIEW":
      inlinePreviewController.ensureClosed()
      newState = {
        ...initialInlinePreviewState,
        targetFrameFollowingScrollToNode: state.targetFrameFollowingScrollToNode,
        modalStatus: InlineModalStatus.CLOSED,
      }
      break

    case "HANDLE_EDITOR_SELECTION_CHANGED": {
      if (state.modalStatus !== InlineModalStatus.OPEN)
        break
      const nodeId = PrototypingTsApi.getInlinePreviewNodeIdOnSelectionChange()
      const { sceneGraph } = action.payload
      newState = isValidSessionLocalID(parseSessionLocalID(nodeId))
        ? updateRequestedNode(state, nodeId)
        : handleInvalidPresentedNode(state, sceneGraph)
      break
    }

    case "UPDATE_PRESENTED_NODE":
      if (
        state.targetFrameFollowingEnabled
        && action.payload.nodeId !== state.currentPresentedNode
      ) {
        incrementAndCheckReplacementThreshold()
        replaceSelection([action.payload.nodeId], false)
        assert(
          !!state.targetFrameFollowingScrollToNode,
          "Scroll callback should have been set already through SET_SCROLL_CALLBACK.",
        )
        state.targetFrameFollowingScrollToNode(action.payload.nodeId)
      }
      newState = {
        ...state,
        currentPresentedNode: action.payload.nodeId,
      }
      break

    case "UPDATE_FRAME_CONTROLS":
      newState = {
        ...state,
        navigateForwardEnabled: action.payload.navigateForwardEnabled,
        navigateBackwardEnabled: action.payload.navigateBackwardEnabled,
      }
      break

    case "CHANGE_DEVICE_FRAME": {
      if (state.modalStatus !== InlineModalStatus.OPEN)
        break
      assertNotNullish(state.sizeInfo, "sizeInfo must be set")

      const {
        sceneGraph,
        oldPresetIdentifier,
        oldRotation,
        newPresetIdentifier,
        newRotation,
      } = action.payload

      enum ChangeType {
        DEVICE = 0,
        ROTATION = 1,
        STYLE = 2,
      }

      let changeType: ChangeType

      const hasBothIdentifiers = !!oldPresetIdentifier && !!newPresetIdentifier
      const isEquivalentDevice
        = oldRotation === newRotation
          && hasBothIdentifiers
          && areDevicesEquivalent(newPresetIdentifier, oldPresetIdentifier)

      if (oldPresetIdentifier !== newPresetIdentifier && isEquivalentDevice) {
        changeType = ChangeType.STYLE
      }
      else if (
        oldPresetIdentifier === newPresetIdentifier
        && hasBothIdentifiers
        && oldRotation !== newRotation
      ) {
        changeType = ChangeType.ROTATION
      }
      else {
        changeType = ChangeType.DEVICE
      }

      assert(changeType !== undefined, "changeType must be set")

      if (changeType === ChangeType.ROTATION) {
        assert(!!state.getCurrentViewerSize, "getCurrentViewerSize must be set")
        const viewerSize = state.getCurrentViewerSize()
        assert(
          state.sizeInfo.breakpoint.type === BreakpointType.DEVICE,
          "breakpoint must be device",
        )
        newState = {
          ...state,
          sizeInfo: {
            breakpoint: {
              type: BreakpointType.DEVICE,
              x: state.sizeInfo.breakpoint.y,
              y: state.sizeInfo.breakpoint.x,
            },
            initialViewerSize: {
              x: viewerSize.y,
              y: viewerSize.x,
            },
          },
        }
      }
      else if (changeType === ChangeType.DEVICE) {
        assert(!!state.currentPresentedNode, "currentPresentedNode must be set")
        const sizeInfo = calculateInitialViewerSize(
          state.sizeInfo,
          true,
          state.showDeviceFrameEnabled,
          state.currentPresentedNode,
          sceneGraph,
        )
        newState = {
          ...state,
          sizeInfo,
        }
      }
      else {
        // changeType === ChangeType.STYLE
        // No state change needed for style changes
        changeType === ChangeType.STYLE || throwTypeError(changeType)
      }
      break
    }

    case "RESIZE_MODAL": {
      const { sceneGraph } = action.payload
      assert(!!state.currentPresentedNode, "currentPresentedNode must be set")
      assert(!!state.sizeInfo, "sizeInfo must be set")

      const selectedNode = sceneGraph.get(state.currentPresentedNode)
      assert(!!selectedNode, "expected selectedNode to exist")

      const breakpoint = getBreakpoint(sceneGraph, selectedNode)
      newState = {
        ...state,
        sizeInfo: {
          ...state.sizeInfo,
          breakpoint,
        },
      }
      break
    }

    case "HANDLE_VIEWER_LOADED":
      inlinePreviewController.setScalingMode(state.scalingInfo, false)
      inlinePreviewController.navigateTo(state.requestedNodeId)
      fullscreenValue.triggerAction("inline-preview-loaded")
      // No state change
      break

    case "HANDLE_READY_TO_RECEIVE_MESSAGES":
      inlinePreviewController.notifyWasModalOpenedSinceViewerLoaded(
        state.wasModalOpenedSinceViewerLoaded,
      )
      // No state change
      break

    case "TOGGLE_TARGET_FRAME_FOLLOWING":
      dispatchSelectionReplacedEvent()
      newState = {
        ...state,
        targetFrameFollowingEnabled: !state.targetFrameFollowingEnabled,
      }
      break

    case "ENABLE_TARGET_FRAME_FOLLOWING":
      newState = {
        ...state,
        targetFrameFollowingEnabled: true,
      }
      break

    case "TOGGLE_SHOW_DEVICE_FRAME":
      newState = {
        ...state,
        showDeviceFrameEnabled: !state.showDeviceFrameEnabled,
      }
      break

    case "SET_SCROLL_CALLBACK":
      newState = {
        ...state,
        targetFrameFollowingScrollToNode: action.payload,
      }
      break

    case "SET_CURRENT_VIEWER_SIZE_CALLBACK":
      newState = {
        ...state,
        getCurrentViewerSize: action.payload,
      }
      break

    case "HANDLE_PREVIEW_CRASHED":
      newState = {
        ...resetInlinePreviewState(state),
        isCrashed: true,
      }
      break

    case "SET_PREVIEW_IS_RESPONSIVE":
      if (action.payload) {
        const responsiveScalingInfo = {
          viewportScalingMode: "contain",
          contentScalingMode: "responsive",
        }
        newState = {
          ...state,
          scalingInfo: responsiveScalingInfo,
          forceScalingInfo: responsiveScalingInfo,
        }
      }
      else {
        const defaultScalingInfo = getDefaultScalingInfo(newState)
        newState = {
          ...state,
          scalingInfo: defaultScalingInfo,
          forceScalingInfo: undefined,
        }
      }
      inlinePreviewController.setScalingMode(newState.scalingInfo, true)
      break

    case "REQUEST_EXPORT": {
      const { nodeIds, videoVolumeByNodeId } = action.payload
      inlinePreviewController.export(nodeIds, videoVolumeByNodeId)
      newState = {
        ...state,
        exporting: true,
      }
      break
    }

    case "CANCEL_EXPORT":
      inlinePreviewController.cancelExport()
      // No state change
      break

    case "HANDLE_EXPORT_COMPLETED":
      newState = {
        ...state,
        exporting: false,
      }
      break

    case "TIMELINE_PLAYER_PLAY": {
      const { videoVolumeByNodeId } = action.payload
      inlinePreviewController.play(videoVolumeByNodeId)
      // No state change
      break
    }

    case "TIMELINE_PLAYER_PAUSE":
      inlinePreviewController.pause()
      // No state change
      break

    case "TIMELINE_PLAYER_RESET":
      if (inlinePreviewController.isIframeInitialized()) {
        inlinePreviewController.resetPlayer()
      }
      // No state change
      break

    case "UPDATE_TIMELINE_PLAYER_STATE": {
      const { status, currentTimeMs, totalTimeMs } = action.payload
      newState = {
        ...state,
        timelinePlayerState: {
          status,
          currentTimeMs,
          totalTimeMs,
        },
      }
      break
    }

    default:
      throwTypeError(type)
  }

  // Handle scaling info changes based on breakpoint type
  if (
    !newState.forceScalingInfo
    && newState.sizeInfo?.breakpoint?.type !== state.sizeInfo?.breakpoint?.type
  ) {
    const updatedScalingInfo = getDefaultScalingInfo(newState)
    newState = {
      ...newState,
      scalingInfo: updatedScalingInfo,
    }
    inlinePreviewController.setScalingMode(updatedScalingInfo, false)
  }

  // Handle side effects after state update
  handleStateChangeSideEffects(state, newState, action)

  return newState
})

// Determines default scaling info based on breakpoint type
function getDefaultScalingInfo(state: InlinePreviewState) {
  return state.sizeInfo?.breakpoint?.type === BreakpointType.DEVICE
    ? {
        viewportScalingMode: "fit-width",
        contentScalingMode: "fixed",
      }
    : {
        viewportScalingMode: "scale-down-width",
        contentScalingMode: "fixed",
      }
}

// Handles logic when the presented node is invalid
function handleInvalidPresentedNode(state: InlinePreviewState, sceneGraph: any): InlinePreviewState {
  const { currentPresentedNode } = state
  if (currentPresentedNode && sceneGraph.get(currentPresentedNode) == null) {
    const validNodeId = getValidPrototypeNodeId()
    if (validNodeId) {
      inlinePreviewController.navigateTo(validNodeId)
      return {
        ...state,
        requestedNodeId: validNodeId,
        currentPresentedNode: validNodeId,
      }
    }
    else {
      inlinePreviewController.ensureClosed()
      return {
        ...state,
        requestedNodeId: null,
        currentPresentedNode: null,
        modalStatus: InlineModalStatus.CLOSED,
      }
    }
  }
  return state
}

// Updates the requested node in state
function updateRequestedNode(state: InlinePreviewState, nodeId: string, updateCurrentPresentedNode: boolean = true): InlinePreviewState {
  const { requestedNodeId, currentPresentedNode } = state
  if (nodeId === requestedNodeId && nodeId === currentPresentedNode) {
    return state
  }
  inlinePreviewController.navigateTo(nodeId)
  return {
    ...state,
    requestedNodeId: nodeId,
    ...(updateCurrentPresentedNode && {
      currentPresentedNode: nodeId,
    }),
  }
}

// Handles side effects triggered by state changes
function handleStateChangeSideEffects(oldState: InlinePreviewState, newState: InlinePreviewState, action: any) {
  const { type } = action

  const triggerPresentedNodeChanged = (nodeId: string | null) => {
    fullscreenValue.triggerAction("inline-preview-presented-node-changed", {
      currentHighlightedNode: nodeId,
    })
  }

  const hasPresentedNodeChanged = newState.currentPresentedNode !== oldState.currentPresentedNode
  const isModalOpen = newState.modalStatus === InlineModalStatus.OPEN

  switch (type) {
    case "UPDATE_PRESENTED_NODE":
      if (isModalOpen && hasPresentedNodeChanged) {
        triggerPresentedNodeChanged(newState.currentPresentedNode)
      }
      break
    case "OPEN_INLINE_PREVIEW":
      triggerPresentedNodeChanged(newState.currentPresentedNode)
      break
    case "CLOSE_INLINE_PREVIEW":
      triggerPresentedNodeChanged(null)
      break
    case "HANDLE_EDITOR_SELECTION_CHANGED":
      if (hasPresentedNodeChanged) {
        triggerPresentedNodeChanged(newState.currentPresentedNode)
      }
      break
    // All other cases intentionally left blank as no side effects are needed
    case "OPEN_SLIDES_INLINE_PREVIEW":
    case "OPEN_BUZZ_INLINE_PREVIEW":
    case "UPDATE_BUZZ_INLINE_PREVIEW":
    case "TOGGLE_TARGET_FRAME_FOLLOWING":
    case "TOGGLE_SHOW_DEVICE_FRAME":
    case "CHANGE_DEVICE_FRAME":
    case "RESIZE_MODAL":
    case "HANDLE_VIEWER_LOADED":
    case "HANDLE_READY_TO_RECEIVE_MESSAGES":
    case "UPDATE_FRAME_CONTROLS":
    case "RESET_INLINE_PREVIEW":
    case "SET_SCROLL_CALLBACK":
    case "SET_CURRENT_VIEWER_SIZE_CALLBACK":
    case "HANDLE_PREVIEW_CRASHED":
    case "SET_PREVIEW_IS_RESPONSIVE":
    case "ENABLE_TARGET_FRAME_FOLLOWING":
    case "REQUEST_EXPORT":
    case "CANCEL_EXPORT":
    case "HANDLE_EXPORT_COMPLETED":
    case "TIMELINE_PLAYER_PLAY":
    case "TIMELINE_PLAYER_PAUSE":
    case "TIMELINE_PLAYER_RESET":
    case "UPDATE_TIMELINE_PLAYER_STATE":
      break
    default:
      throwTypeError(type)
  }
}

// Exporting refactored constants and reducer
export const bi = InlineModalStatus
export const hg = inlinePreviewReducer
export const u7 = InlinePreviewVisibilityStatus
