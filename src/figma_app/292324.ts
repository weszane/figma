import { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getI18nString } from "../905/303541"
import { createOptimistThunk } from "../905/350402"
import { selectViewAction } from "../905/929976"
import { trackPrototypeScaleChangeEvent } from "../figma_app/2590"
import { atom } from "../figma_app/27355"
import { mt } from "../figma_app/102712"
import { useEventListener } from "../figma_app/632319"

// Prototype View Mode Enumeration
export enum PrototypeViewMode {
  PRESENTATION = 0,
  CUSTOM = 1,
  LARGE = 2,
  SMALL = 3,
  DEFAULT = 4,
}

/**
 * Ends prototype observation session and tracks the event
 * @param editor - The editor instance
 * @param multiplayerState - The multiplayer state object
 * @param trackEvent - Function to track the prototype scale change event
 */
function endPrototypeObservation(
  editor: any,
  multiplayerState: any,
  trackEvent: (event: any) => void,
): void {
  if (multiplayerState.observingSessionID !== -1) {
    editor?.setObservingSessionID(-1)
    trackEvent(
      trackPrototypeScaleChangeEvent({
        name: "Prototype Observation Ended",
        params: {
          multiplayerObservingSessionID: multiplayerState.observingSessionID,
          multiplayerSessionID: multiplayerState.sessionID,
        },
      }),
    )
  }
}

/**
 * Empty placeholder function
 */
export function emptyFunction(): void { }

/**
 * Custom hook for managing prototype navigation state
 * @param editor - The editor instance
 * @param shouldUpdate - Flag to control when updates should occur
 * @returns Object containing navigation state
 */
export function usePrototypeNavigationState(editor: any, shouldUpdate: boolean = false) {
  const [currentFrameIndex, setCurrentFrameIndex] = useState<number>(0)
  const [frameCount, setFrameCount] = useState<number>(0)
  const [nodesToShow, setNodesToShow] = useState<any[]>([])
  const [showFrameCounter, setShowFrameCounter] = useState<boolean>(false)
  const [canNavigateForward, setCanNavigateForward] = useState<boolean>(false)
  const [canNavigateBackward, setCanNavigateBackward] = useState<boolean>(false)

  const updateNavigationState = useCallback(() => {
    if (editor?.hasActiveScene()) {
      setCurrentFrameIndex(editor.getPrototypeStateCurrentIndex())
      setFrameCount(editor.getNodesToShowInPrototype().length)
      setNodesToShow(editor.getNodesToShowInPrototype())
      setShowFrameCounter(editor.supportsLinearNavigationOrder())
      setCanNavigateForward(editor.getNavigateForwardEnabled())
      setCanNavigateBackward(editor.getNavigateBackwardEnabled())
    }
  }, [editor])

  const conditionalUpdate = useCallback(() => {
    if (shouldUpdate) {
      updateNavigationState()
    }
  }, [updateNavigationState, shouldUpdate])

  useEventListener(editor, "navigationInfoInvalidated", updateNavigationState)
  useEventListener(editor, "topLevelFramesListInvalidated", updateNavigationState)
  useEventListener(editor, "topLevelFrameChange", updateNavigationState)
  useEventListener(editor, "baseScreenChanged", conditionalUpdate)

  useEffect(() => {
    updateNavigationState()
  }, [updateNavigationState])

  return {
    currFrameIndex: currentFrameIndex,
    numFrames: frameCount,
    nodesToShowInPrototype: nodesToShow,
    shouldShowFrameCounter: showFrameCounter,
    navigateForwardEnabled: canNavigateForward,
    navigateBackwardEnabled: canNavigateBackward,
  }
}

/**
 * Hook for prototype navigation controls
 * @param editor - The editor instance
 * @param multiplayerState - The multiplayer state object
 * @returns Navigation control functions
 */
export function usePrototypeNavigationControls(editor: any, multiplayerState: any) {
  const dispatch = useDispatch()

  return {
    navigateForward: useCallback(
      (options?: any) => {
        if (multiplayerState) {
          endPrototypeObservation(editor, multiplayerState, dispatch)
        }
        if (editor?.getNavigateForwardEnabled()) {
          mt()?.animateNext()
          editor?.navigateForward(options)
        }
      },
      [multiplayerState, dispatch, editor],
    ),
    navigateBackward: useCallback(() => {
      if (multiplayerState) {
        endPrototypeObservation(editor, multiplayerState, dispatch)
      }
      if (editor?.getNavigateBackwardEnabled()) {
        mt()?.animateBack()
        editor?.navigateBackward()
      }
    }, [multiplayerState, dispatch, editor]),
    restartPrototype: useCallback(() => {
      editor?.restartPrototype()
    }, [editor]),
  }
}

/**
 * Checks if scaling mode is preset
 * @param scalingMode - The scaling mode to check
 * @returns Boolean indicating if it's a preset mode
 */
function isPresetScalingMode(scalingMode: string): boolean {
  return !!scalingMode && scalingMode === "PRESET"
}

// Create optimist thunk for view selection
createOptimistThunk((
  dispatch: any,
  payload: {
    nodeId: string
    startingPointNodeId: string
    forceReplaceState: boolean
  },
) => {
  const currentState = dispatch.getState().selectedView
  dispatch(
    selectViewAction({
      ...currentState,
      nodeId: payload.nodeId,
      startingPointNodeId: payload.startingPointNodeId,
      forceReplaceState: payload.forceReplaceState,
    }),
  )
})

// Viewport Scaling Mode Enumeration
export enum ViewportScalingMode {
  UNKNOWN = "UNKNOWN",
  ACTUAL_SIZE = "ACTUAL_SIZE",
  FIT_TO_SCREEN = "FIT_TO_SCREEN",
  FIT_WIDTH = "FIT_WIDTH",
  FILL_SCREEN = "FILL_SCREEN",
  RESPONSIVE = "RESPONSIVE",
}

// Scaling option order by view mode
const SCALING_OPTIONS_BY_VIEW_MODE: Record<number, ViewportScalingMode[]> = {
  [PrototypeViewMode.DEFAULT]: [
    ViewportScalingMode.ACTUAL_SIZE,
    ViewportScalingMode.FIT_TO_SCREEN,
    ViewportScalingMode.FIT_WIDTH,
    ViewportScalingMode.FILL_SCREEN,
    ViewportScalingMode.RESPONSIVE,
  ],
  [PrototypeViewMode.PRESENTATION]: [
    ViewportScalingMode.FILL_SCREEN,
    ViewportScalingMode.ACTUAL_SIZE,
    ViewportScalingMode.FIT_TO_SCREEN,
    ViewportScalingMode.FIT_WIDTH,
    ViewportScalingMode.RESPONSIVE,
  ],
  [PrototypeViewMode.LARGE]: [
    ViewportScalingMode.ACTUAL_SIZE,
    ViewportScalingMode.RESPONSIVE,
    ViewportScalingMode.FIT_WIDTH,
    ViewportScalingMode.FIT_TO_SCREEN,
    ViewportScalingMode.FILL_SCREEN,
  ],
  [PrototypeViewMode.SMALL]: [
    ViewportScalingMode.ACTUAL_SIZE,
    ViewportScalingMode.FIT_TO_SCREEN,
    ViewportScalingMode.FIT_WIDTH,
    ViewportScalingMode.RESPONSIVE,
    ViewportScalingMode.FILL_SCREEN,
  ],
  [PrototypeViewMode.CUSTOM]: [
    ViewportScalingMode.FIT_TO_SCREEN,
    ViewportScalingMode.FILL_SCREEN,
    ViewportScalingMode.ACTUAL_SIZE,
    ViewportScalingMode.RESPONSIVE,
    ViewportScalingMode.FIT_WIDTH,
  ],
}

// Scaling mode configurations
const SCALING_MODE_CONFIGS: Record<
  ViewportScalingMode,
  { viewportScalingMode: string, contentScalingMode: string }
> = {
  [ViewportScalingMode.ACTUAL_SIZE]: {
    viewportScalingMode: "min-zoom",
    contentScalingMode: "fixed",
  },
  [ViewportScalingMode.FIT_TO_SCREEN]: {
    viewportScalingMode: "scale-down",
    contentScalingMode: "fixed",
  },
  [ViewportScalingMode.FIT_WIDTH]: {
    viewportScalingMode: "scale-down-width",
    contentScalingMode: "fixed",
  },
  [ViewportScalingMode.FILL_SCREEN]: {
    viewportScalingMode: "contain",
    contentScalingMode: "fixed",
  },
  [ViewportScalingMode.RESPONSIVE]: {
    viewportScalingMode: "contain",
    contentScalingMode: "responsive",
  },
  [ViewportScalingMode.UNKNOWN]: {
    viewportScalingMode: "min-zoom",
    contentScalingMode: "fixed",
  },
}

/**
 * Gets the viewport scaling mode string for a given scaling mode
 * @param scalingMode - The viewport scaling mode
 * @returns The corresponding viewport scaling mode string
 */
export function getViewportScalingMode(scalingMode: ViewportScalingMode): string {
  if (scalingMode === ViewportScalingMode.RESPONSIVE) {
    return "responsive"
  }
  return SCALING_MODE_CONFIGS[scalingMode]?.viewportScalingMode || "unknown"
}

/**
 * Determines the viewport scaling mode from configuration object
 * @param config - The scaling configuration object
 * @returns The corresponding ViewportScalingMode
 */
export function getViewPortScalingModeFromConfig(config: {
  viewportScalingMode: string
  contentScalingMode: string
}): ViewportScalingMode {
  switch (config.viewportScalingMode) {
    case "scale-down":
      return ViewportScalingMode.FIT_TO_SCREEN
    case "scale-down-width":
      return ViewportScalingMode.FIT_WIDTH
    case "min-zoom":
      return ViewportScalingMode.ACTUAL_SIZE
    case "contain":
      if (config.contentScalingMode === "fixed") {
        return ViewportScalingMode.FILL_SCREEN
      }
      return ViewportScalingMode.RESPONSIVE
    default:
      return ViewportScalingMode.UNKNOWN
  }
}

/**
 * Gets the scaling configuration for a given mode
 * @param scalingMode - The viewport scaling mode
 * @returns The scaling configuration object
 */
function getScalingConfig(scalingMode: ViewportScalingMode): {
  viewportScalingMode: string
  contentScalingMode: string
} {
  if (scalingMode === ViewportScalingMode.UNKNOWN) {
    return SCALING_MODE_CONFIGS[ViewportScalingMode.ACTUAL_SIZE]
  }
  return SCALING_MODE_CONFIGS[scalingMode]
}

/**
 * Finds matching scaling option ID from available options
 * @param targetConfig - The target scaling configuration
 * @param availableOptions - Array of available scaling options
 * @returns The matching scaling option ID or UNKNOWN
 */
export function findMatchingScalingOptionId(
  targetConfig: { viewportScalingMode: string, contentScalingMode: string },
  availableOptions: Array<{ scalingOptionId: string, scalingInfo: any }>,
): string {
  for (const option of availableOptions) {
    const viewportMatches
      = !option.scalingInfo.viewportScalingMode
      || option.scalingInfo.viewportScalingMode === targetConfig.viewportScalingMode
    const contentMatches
      = !option.scalingInfo.contentScalingMode
      || option.scalingInfo.contentScalingMode === targetConfig.contentScalingMode

    if (viewportMatches && contentMatches) {
      return option.scalingOptionId
    }
  }
  return ViewportScalingMode.UNKNOWN
}

/**
 * Generates scaling options for a given view mode
 * @param scalingMode - The current scaling mode
 * @param viewMode - The prototype view mode
 * @returns Array of scaling options
 */
export function generateScalingOptions(
  scalingMode: string,
  viewMode: PrototypeViewMode | undefined,
): Array<{ scalingOptionId: ViewportScalingMode, scalingInfo: any }> {
  let optionsOrder = SCALING_OPTIONS_BY_VIEW_MODE[viewMode ?? PrototypeViewMode.DEFAULT]

  if (isPresetScalingMode(scalingMode)) {
    optionsOrder = [
      ViewportScalingMode.FIT_TO_SCREEN,
      ViewportScalingMode.FILL_SCREEN,
      ViewportScalingMode.ACTUAL_SIZE,
    ]
  }

  return optionsOrder.map((option) => {
    const scalingOption = {
      scalingOptionId: option,
      scalingInfo: {},
    }

    if (isPresetScalingMode(scalingMode)) {
      scalingOption.scalingInfo.viewportScalingMode
        = getScalingConfig(option).viewportScalingMode
    }
    else {
      scalingOption.scalingInfo = getScalingConfig(option)
    }

    return scalingOption
  })
}

/**
 * Gets localized string for scaling option
 * @param scalingOption - The scaling option
 * @param hasDevice - Whether device context is present
 * @returns Localized string for the scaling option
 */
export function getScalingOptionLabel(
  scalingOption: ViewportScalingMode,
  hasDevice: boolean,
): string {
  switch (scalingOption) {
    case ViewportScalingMode.ACTUAL_SIZE:
      return hasDevice
        ? getI18nString("viewer.options_menu.actual_size_100_with_device", {
          zoomAmount: 100,
        })
        : getI18nString("viewer.options_menu.actual_size_100", {
          zoomAmount: 100,
        })
    case ViewportScalingMode.FIT_TO_SCREEN:
      return hasDevice
        ? getI18nString("viewer.options_menu.fit_to_screen_with_device")
        : getI18nString("viewer.options_menu.fit_width_and_height")
    case ViewportScalingMode.FIT_WIDTH:
      return getI18nString("viewer.options_menu.fit_width")
    case ViewportScalingMode.FILL_SCREEN:
      return hasDevice
        ? getI18nString("viewer.options_menu.fill_screen_with_device")
        : getI18nString("viewer.options_menu.fill_screen")
    case ViewportScalingMode.RESPONSIVE:
      return getI18nString("viewer.options_menu.responsive")
    default:
      return ""
  }
}

// Export aliases for backward compatibility
export const Ac = findMatchingScalingOptionId
export const GP = getScalingOptionLabel
export const IK = ViewportScalingMode
export const Pz = generateScalingOptions
export const Qd = usePrototypeNavigationControls
export const Ti = getViewportScalingMode
export const Xl = usePrototypeNavigationState
export const Yu = PrototypeViewMode
export const on = emptyFunction
export const w6 = getViewPortScalingModeFromConfig
