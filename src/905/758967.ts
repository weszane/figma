import { getI18nString } from '../905/303541'
import { subscribeSettingsChange } from '../905/414069'
import { localStorageRef } from '../905/657224'
import { fullscreenValue } from '../figma_app/455680'
import { AppStateTsApi } from '../figma_app/763686'

/**
 * Key used for localStorage to track outline mode triggers (original: s)
 */
const OUTLINE_MODE_TRIGGERED_KEY = 'outlineModeTriggered'

/**
 * Retrieves the outline mode trigger data from localStorage (original: o)
 * @returns {string | null} The stored value or null if not available
 */
function getOutlineModeTriggered(): string | null {
  return localStorageRef?.getItem(OUTLINE_MODE_TRIGGERED_KEY) ?? null
}

/**
 * Returns the current canvas view state from AppStateTsApi (original: $$c0)
 * @returns {ReturnType<typeof AppStateTsApi.canvasViewState>}
 */
export function getCanvasViewState(): ReturnType<typeof AppStateTsApi.canvasViewState> {
  return AppStateTsApi.canvasViewState()
}

/**
 * Updates the outline mode trigger count and timestamp in localStorage
 * (original: inline function inside getMessage)
 */
function updateOutlineModeTriggered(): void {
  if (!localStorageRef)
    return
  const existing = getOutlineModeTriggered()
  localStorageRef.setItem(
    OUTLINE_MODE_TRIGGERED_KEY,
    JSON.stringify({
      count: existing ? JSON.parse(existing).count + 1 : 1,
      lastTriggeredTimestamp: Date.now(),
    }),
  )
}

/**
 * Checks if the outline mode visual bell should be shown (original: inline function inside getMessage)
 * @returns {boolean}
 */
function shouldShowOutlineModeBell(): boolean {
  if (!localStorageRef)
    return true
  const stored = getOutlineModeTriggered()
  updateOutlineModeTriggered()
  if (!stored)
    return true
  const data = JSON.parse(stored)
  const lastTriggeredDate = new Date(data.lastTriggeredTimestamp)
  // If more than 30 days have passed, reset
  if ((Date.now() - lastTriggeredDate.getTime()) / 864e5 > 30) {
    localStorageRef.removeItem(OUTLINE_MODE_TRIGGERED_KEY)
    return true
  }
  // Show bell if count is less than 5
  return !(data.count >= 5)
}

/**
 * Visual bell configuration array (original: u)
 */
const visualBellConfigs = [
  {
    getObservable: () => getCanvasViewState().showOutlines,
    getMessage: (isVisible: boolean) =>
      isVisible
        ? !shouldShowOutlineModeBell()
            ? {
                message: getI18nString('visual_bell.show_outlines_visible'),
              }
            : {
                message: getI18nString('visual_bell.show_outlines_visible'),
                button: {
                  text: getI18nString('visual_bell.cancel'),
                  action: (event: any) => {
                    event.stopPropagation()
                    fullscreenValue.triggerAction('toggle-outlines')
                  },
                },
              }
        : {
            message: getI18nString('visual_bell.show_outlines_hidden'),
          },
  },
  {
    getObservable: () => getCanvasViewState().showOutlineHiddenLayers,
    getMessage: (isVisible: boolean) => ({
      message: isVisible
        ? getI18nString('visual_bell.outlines_show_hidden_layers')
        : getI18nString('visual_bell.outlines_hide_hidden_layers'),
    }),
  },
  {
    getObservable: () => getCanvasViewState().showOutlineObjectBounds,
    getMessage: (isVisible: boolean) => ({
      message: isVisible
        ? getI18nString('visual_bell.outlines_show_object_bounds')
        : getI18nString('visual_bell.outlines_hide_object_bounds'),
    }),
  },
  {
    getObservable: () => getCanvasViewState().showFrameGridsViewOnly,
    getMessage: (isVisible: boolean) => ({
      message: isVisible
        ? getI18nString('visual_bell.show_frame_guides_visible')
        : getI18nString('visual_bell.show_frame_guides_hidden'),
    }),
  },
]

/**
 * Subscribes to settings changes for visual bell configs (original: $$p1)
 */
export function subscribeVisualBellSettings(): void {
  subscribeSettingsChange(visualBellConfigs)
}

// Exported aliases for refactored functions (original: d, X)
export const d = getCanvasViewState
export const X = subscribeVisualBellSettings
