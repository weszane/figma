import { produce } from "immer"
import { reportError } from "../905/11"
import { KeyCodes } from "../905/63728"
import { ServiceCategories } from "../905/165054"
import { valueOrFallback } from "../905/216495"
import { createOptimistThunk } from "../905/350402"
import { selectViewAction } from "../905/929976"
import { getFileKeyFromSelectedView } from "../figma_app/193867"
import { trackDefinedFileEvent, trackFileEvent } from "../figma_app/314264"
import { DEVICE_PRESETS_BY_ID, getDeviceCategory } from "../figma_app/349969"
import { fullscreenValue } from "../figma_app/455680"
import { assert, assertNotNullish, throwTypeError } from "../figma_app/465776"
import { PresetType } from "../figma_app/763686"
// Map string device types to PresetType enum values
export function mapToDevicePresetType(deviceType: string): PresetType {
  switch (deviceType) {
    case "NONE":
      return PresetType.NONE
    case "PRESET":
      return PresetType.PRESET
    case "CUSTOM":
      return PresetType.CUSTOM

    case "PRESENTATION":
      return PresetType.PRESENTATION
    default:
      throwTypeError(deviceType)
  }
}

// Determine content scaling mode based on preset type
export function getContentScalingMode(presetType: PresetType): string {
  return presetType === PresetType.PRESET || presetType === PresetType.CUSTOM
    ? "scale-down"
    : presetType === PresetType.PRESENTATION
      ? "contain"
      : "min-zoom"
}

// Get CSS position value for device frames
export function getDeviceFramePosition(): string {
  return "fixed"
}

// Check if keyboard event should navigate to previous item
export function shouldNavigateToPreviousItem(event: KeyboardEvent, options?: { disableDefaultKeyboardNav?: boolean }): boolean {
  return !options?.disableDefaultKeyboardNav && (
    [KeyCodes.LEFT_ARROW, KeyCodes.PAGE_UP].includes(event.keyCode)
    || (event.shiftKey && event.keyCode === KeyCodes.N)
  )
}

// Check if keyboard event should navigate to next item
export function shouldNavigateToNextItem(event: KeyboardEvent, options?: {
  disableDefaultKeyboardNav?: boolean
  inlinePreview?: boolean
}): boolean {
  return !(options?.disableDefaultKeyboardNav
    || (options?.inlinePreview && event.keyCode === KeyCodes.SPACE && event.shiftKey))
  && [KeyCodes.RIGHT_ARROW, KeyCodes.SPACE, KeyCodes.ENTER, KeyCodes.N, KeyCodes.PAGE_DOWN].includes(event.keyCode)
}

// Check if keyboard event should trigger refresh/reload
export function shouldTriggerRefresh(event: KeyboardEvent, options?: { disableDefaultKeyboardNav?: boolean }): boolean {
  return !options?.disableDefaultKeyboardNav
    && event.keyCode === KeyCodes.R
    && !event.metaKey
    && !event.shiftKey
    && !event.ctrlKey
}

// Normalize prototype device configuration with fallback values
export function normalizePrototypeDeviceConfig(deviceConfig: any): {
  type: string
  size: { x: number, y: number }
  presetIdentifier: string
  rotation: string
} {
  const config = valueOrFallback(deviceConfig, {
    type: "NONE",
    size: { x: 0, y: 0 },
  })

  return {
    type: config.type || "NONE",
    size: config.size || { x: 0, y: 0 },
    presetIdentifier: config.presetIdentifier || "",
    rotation: config.rotation || "NONE",
  }
}

// Helper to extract preset identifier from device config
export function getPresetIdentifier(deviceConfig: { type: string, presetIdentifier?: string }): string {
  return deviceConfig.type === "PRESET" ? deviceConfig.presetIdentifier || "" : ""
}

// Update prototype device settings based on selected device
export function updatePrototypeDevice(selectedDevice: any, currentDeviceConfig: any): void {
  if (selectedDevice === "NONE") {
    fullscreenValue.updateSelectionProperties({
      prototypeDevice: {
        type: "NONE",
        size: { x: 0, y: 0 },
        rotation: "NONE",
      },
    })
  }
  else if (selectedDevice === "PRESENTATION") {
    fullscreenValue.updateSelectionProperties({
      prototypeDevice: {
        type: "PRESENTATION",
        size: { x: 0, y: 0 },
        rotation: "NONE",
      },
    })
  }
  else if (selectedDevice === "CUSTOM") {
    let size = currentDeviceConfig.size
    if (size.x === 0 && size.y === 0) {
      size = { x: 500, y: 500 }
    }

    const rotation = currentDeviceConfig.type === "CUSTOM" ? currentDeviceConfig.rotation : "NONE"

    fullscreenValue.updateSelectionProperties({
      prototypeDevice: {
        type: "CUSTOM",
        size,
        rotation,
      },
    })
  }
  else {
    // Handle PRESET type
    const currentPreset = DEVICE_PRESETS_BY_ID[getPresetIdentifier(currentDeviceConfig)]
    if (currentPreset != null && currentPreset.deviceName === selectedDevice.deviceName) {
      return // No change needed
    }

    const shouldPreserveRotation = currentDeviceConfig.type === "PRESET"
      && getDeviceCategory(getPresetIdentifier(currentDeviceConfig))
      === getDeviceCategory(selectedDevice.presetIdentifier)

    const rotation = shouldPreserveRotation ? currentDeviceConfig.rotation : "NONE"

    fullscreenValue.updateSelectionProperties({
      prototypeDevice: {
        type: "PRESET",
        size: {
          x: selectedDevice.framePresetSize.x,
          y: selectedDevice.framePresetSize.y,
        },
        presetIdentifier: selectedDevice.presetIdentifier,
        rotation,
      },
    })
  }
}

// Default animation duration for prototype transitions
export const DEFAULT_ANIMATION_DURATION = 0.2

// Thunk for handling prototype scaling changes
export const handlePrototypeScaleChange = createOptimistThunk(({dispatch, getState}, actionParams) => {
  if (actionParams.userInitiated) {
    const trackingParams = {
      scalingMode: actionParams.viewportScalingMode,
      contentScalingMode: actionParams.contentScalingMode,
      source: actionParams.source,
    }

    dispatch(trackPrototypeScaleChangeEvent({
      name: "Prototype Scale Changed",
      params: trackingParams,
    }))
  }

  const state = getState()
  const selectedView = state.selectedView

  if (selectedView.view === "prototype") {
    const updatedView = produce(selectedView, (draft) => {
      if (draft.scalingInfo === undefined) {
        draft.scalingInfo = {}
      }

      if (Object.prototype.hasOwnProperty.call(actionParams, "viewportScalingMode")) {
        draft.scalingInfo.viewportScalingMode = actionParams.viewportScalingMode
      }

      if (Object.prototype.hasOwnProperty.call(actionParams, "contentScalingMode")) {
        draft.scalingInfo.contentScalingMode = actionParams.contentScalingMode
      }
    })

    dispatch(selectViewAction(updatedView))
  }
})

// Thunk for toggling hotspot visibility
// createOptimistThunk((dispatch, { showHotspots }) => {
//   const state = dispatch.getState()
//   const selectedView = state.selectedView

//   if (selectedView && selectedView.view === "prototype") {
//     const updatedView = {
//       ...selectedView,
//       showHotspots,
//     }

//     dispatch(selectViewAction(updatedView))
//   }
// })

// // Thunk for toggling device frame visibility
// createOptimistThunk((dispatch, { showDeviceFrame }) => {
//   const state = dispatch.getState()
//   const selectedView = state.selectedView

//   assertNotNullish(selectedView, "selectedView must be defined to show device frame")
//   assert(selectedView.view === "prototype", "must be in the view to show device frame")

//   const updatedView = {
//     ...selectedView,
//     showDeviceFrame,
//   }

//   dispatch(selectViewAction(updatedView))
// })

// // Thunk for setting initial device
// createOptimistThunk((dispatch, { newDevice }) => {
//   const state = dispatch.getState()
//   const selectedView = state.selectedView

//   assertNotNullish(selectedView, "selectedView must be defined to set initial device frame")
//   assert(selectedView.view === "prototype", "must be in the view to set initial device frame")

//   const updatedView = {
//     ...selectedView,
//     initialDevice: newDevice,
//     overrideDevice: undefined,
//   }

//   dispatch(selectViewAction(updatedView))
// })

// // Thunk for setting override device
// createOptimistThunk((dispatch, { newDevice }) => {
//   const state = dispatch.getState()
//   const selectedView = state.selectedView

//   assertNotNullish(selectedView, "selectedView must be defined to set override device frame")
//   assert(selectedView.view === "prototype", "must be in the view to set override device frame")

//   const updatedView = {
//     ...selectedView,
//     overrideDevice: newDevice,
//   }

//   dispatch(selectViewAction(updatedView))
// })

// Thunk for tracking file events
export const trackPrototypeScaleChangeEvent = createOptimistThunk((dispatch, eventParams) => {
  const state = dispatch.getState()
  const params = eventParams.params || {}
  const fileKey = getFileKeyFromSelectedView(state.selectedView)

  trackFileEvent(eventParams.name, fileKey, state, params)
})

// Thunk for tracking defined file events
export const trackDefinedFileEventWrapper = (() => {
  const trackEvent = createOptimistThunk((dispatch, eventParams) => {
    const state = dispatch.getState()
    const params = eventParams.params || {}
    const fileKey = getFileKeyFromSelectedView(state.selectedView)

    if (!fileKey) {
      reportError(ServiceCategories.PROTOTYPING, new Error("No file key for prototype event"))
      return
    }

    trackDefinedFileEvent(eventParams.name, fileKey, state, params)
  })

  return ({ name, params }: { name: string, params?: any }) =>
    trackEvent({ name, params })
})()

// Export aliases for backward compatibility
export const $J = updatePrototypeDevice
export const Hs = shouldNavigateToNextItem
export const Jr = handlePrototypeScaleChange
export const Qx = normalizePrototypeDeviceConfig
export const RL = shouldNavigateToPreviousItem
export const Rv = getDeviceFramePosition
export const UG = DEFAULT_ANIMATION_DURATION
export const Zh = trackDefinedFileEventWrapper
export const _P = trackPrototypeScaleChangeEvent
export const _Q = mapToDevicePresetType
export const fz = shouldTriggerRefresh
export const qb = getContentScalingMode
