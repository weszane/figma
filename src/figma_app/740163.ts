import { getI18nString } from '../905/303541'
import { subscribeSettingsChange } from '../905/414069'
import { getFeatureFlags } from '../905/601108'
import { DEFAULT_COARSE_NUDGE, DEFAULT_FINE_NUDGE } from '../905/668764'
import { getCanvasViewState } from '../905/758967'
import { Gk, jH } from '../905/950959'
import { getObservableOrFallback, getObservableValue } from '../figma_app/84367'
import { isFullscreenAndInFocusedNodeView } from '../figma_app/327588'
import { AppStateTsApi, ColorFormatEnum } from '../figma_app/763686'
import { EditorUIState } from '../figma_app/941983'
import { isDevHandoffEditorType } from '../figma_app/976749'
/**
 * EditorPreferencesApi - Provides access to editor preferences.
 * (Original: $$h5)
 */
export const EditorPreferencesApi = () => AppStateTsApi.editorPreferences()

/**
 * Returns whether the help widget is hidden.
 * (Original: $$m1)
 */
export function isHelpWidgetHidden() {
  return getObservableValue(EditorPreferencesApi().hideHelpWidget, false)
}

/**
 * Determines the color format based on editor type and preferences.
 * (Original: $$g3)
 */
export function getColorFormat() {
  const isDevHandoff = isDevHandoffEditorType()
  const colorFormat = getObservableOrFallback(EditorPreferencesApi().colorFormat)
  if ((colorFormat === ColorFormatEnum.CSS && isDevHandoff)
    || (colorFormat === ColorFormatEnum.UIColor && !isDevHandoff)) {
    return ColorFormatEnum.RGB
  }
  return colorFormat
}

/**
 * Gets the sidebar split position from preferences or default UI state.
 * (Original: $$f8)
 */
export function getSidebarSplitPosition() {
  return getObservableValue(EditorPreferencesApi().sidebarSplitPosition, EditorUIState.sidebarSplitPosition)
}

/**
 * Returns the offset for fullscreen and focused node view.
 * (Original: $$E0)
 */
export function getFullscreenOffset() {
  return isFullscreenAndInFocusedNodeView() ? 48 : 0
}

/**
 * Gets the dev handoff inspect split position.
 * (Original: $$y6)
 */
export function getDevHandoffInspectSplitPosition() {
  return getObservableValue(EditorPreferencesApi().devHandoffInspectSplitPosition, 320)
}

/**
 * Gets the properties panel split position.
 * (Original: $$b10)
 */
export function getPropertiesPanelSplitPosition() {
  return getObservableValue(EditorPreferencesApi().propertiesPanelSplitPosition, EditorUIState.propertiesPanelSplitPosition)
}

/**
 * Gets the big nudge amount from preferences or default.
 * (Original: $$T4)
 */
export function getBigNudgeAmount() {
  return getObservableValue(EditorPreferencesApi().bigNudgeAmount, DEFAULT_COARSE_NUDGE)
}

/**
 * Gets the small nudge amount from preferences or default.
 * (Original: $$I2)
 */
export function getSmallNudgeAmount() {
  return getObservableValue(EditorPreferencesApi().smallNudgeAmount, DEFAULT_FINE_NUDGE)
}

/**
 * Returns nudge amounts, allowing overrides.
 * (Original: $$S11)
 */
export function getNudgeAmounts(small?: number, big?: number) {
  const smallNudge = getSmallNudgeAmount()
  const bigNudge = getBigNudgeAmount()
  return {
    smallNudgeAmount: small ?? smallNudge,
    bigNudgeAmount: big ?? bigNudge,
  }
}

/**
 * Returns whether rulers should be rendered.
 * (Original: $$v9)
 */
export function shouldRenderRulers() {
  return getObservableValue(EditorPreferencesApi().renderRulers, false)
}

/**
 * Visual bell settings configuration.
 * (Original: A)
 */
const visualBellSettings = [
  {
    getObservable: () => EditorPreferencesApi().activeCanvasPixelPreview,
    getMessage: enabled => ({
      message: enabled
        ? getI18nString('visual_bell.pixel_preview_enabled', {
            scaling: getCanvasViewState().activeCanvasRetinaMode.getCopy() ? '2x' : '1x',
          })
        : getI18nString('visual_bell.pixel_preview_disabled'),
    }),
  },
  {
    getObservable: () => EditorPreferencesApi().renderGrid,
    getMessage: visible => ({
      message: visible
        ? getI18nString('visual_bell.render_grid_visible')
        : getI18nString('visual_bell.render_grid_hidden'),
    }),
  },
  {
    getObservable: () => EditorPreferencesApi().snapToPixelGrid,
    getMessage: enabled => ({
      message: enabled
        ? getI18nString('visual_bell.snap_to_pixel_grid_enabled')
        : getI18nString('visual_bell.snap_to_pixel_grid_disabled'),
    }),
  },
  {
    getObservable: () => EditorPreferencesApi().showMasks,
    getMessage: visible => ({
      message: visible
        ? getI18nString('visual_bell.show_masks_visible')
        : getI18nString('visual_bell.show_masks_hidden'),
    }),
  },
  {
    getObservable: () =>
      getFeatureFlags().figjam_snap_to_dot_grid_reset
        ? EditorPreferencesApi().snapToDotGridStagingReset
        : EditorPreferencesApi().snapToDotGrid,
    getMessage: enabled => ({
      message: enabled
        ? getI18nString('visual_bell.snap_to_dot_grid_enabled')
        : getI18nString('visual_bell.snap_to_dot_grid_disabled'),
    }),
  },
  {
    getObservable: () => EditorPreferencesApi().snapToGeometry,
    getMessage: enabled => ({
      message: enabled
        ? getI18nString('visual_bell.snap_to_geometry_enabled')
        : getI18nString('visual_bell.snap_to_geometry_disabled'),
    }),
  },
  {
    getObservable: () => EditorPreferencesApi().snapToObjects,
    getMessage: enabled => ({
      message: enabled
        ? getI18nString('visual_bell.snap_to_objects_enabled')
        : getI18nString('visual_bell.snap_to_objects_disabled'),
    }),
  },
  {
    getObservable: () => EditorPreferencesApi().showFrameGrids,
    getMessage: visible =>
      jH()
        ? (Gk(), {
            message: getI18nString('visual_bell.show_frame_guides_visible'),
            button: {
              text: getI18nString('visual_bell.show_frame_grids_hide_button'),
              action: (event) => {
                event.stopPropagation()
                EditorPreferencesApi().showFrameGrids.set(false)
              },
            },
          })
        : {
            message: visible
              ? getI18nString('visual_bell.show_frame_guides_visible')
              : getI18nString('visual_bell.show_frame_guides_hidden'),
          },
  },
]

/**
 * Subscribes to settings changes for visual bell.
 * (Original: $$x7)
 */
export function registerVisualBellSettingsListener() {
  subscribeSettingsChange(visualBellSettings)
}

// Exported aliases for backward compatibility
export const Bv = getFullscreenOffset
export const D = isHelpWidgetHidden
export const EU = getSmallNudgeAmount
export const Ku = getColorFormat
export const RU = getBigNudgeAmount
export const UK = EditorPreferencesApi
export const UX = getDevHandoffInspectSplitPosition
export const W_ = registerVisualBellSettingsListener
export const dP = getSidebarSplitPosition
export const lK = shouldRenderRulers
export const qw = getPropertiesPanelSplitPosition
export const sT = getNudgeAmounts
