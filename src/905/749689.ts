import { fullscreenValue } from "../figma_app/455680"
// Renamed variables, added types, simplified logic, and improved readability
// Origin: $$r1 and $$a0 functions

interface OpacitySettings {
  use_numbers_for_opacity?: boolean
}

// interface FullscreenValue {
//   onReady: () => Promise<void>
//   triggerAction: (action: string, options: { value: boolean, skipSave: boolean }) => void
// }

// Assuming fullscreenValue is globally available or imported
// declare const fullscreenValue: FullscreenValue

/**
 * Toggles the use of numbers for opacity based on the provided settings.
 * @param settings - The settings object containing the use_numbers_for_opacity flag.
 */
export function toggleUseNumbersForOpacity(settings: OpacitySettings): void {
  fullscreenValue.onReady().then(() => {
    fullscreenValue.triggerAction("toggle-use-numbers-for-opacity", {
      value: !!settings.use_numbers_for_opacity,
      skipSave: true,
    })
  }).catch(() => {
    // Silently handle any errors during initialization
  })
}

/**
 * Compares two settings objects and toggles the use of numbers for opacity
 * if the use_numbers_for_opacity value has changed.
 * @param oldSettings - The previous settings.
 * @param newSettings - The updated settings.
 */
export function handleOpacitySettingsChange(
  oldSettings: OpacitySettings,
  newSettings: OpacitySettings,
): void {
  const oldValue = !!oldSettings.use_numbers_for_opacity
  const newValue = !!newSettings.use_numbers_for_opacity

  if (oldValue !== newValue) {
    fullscreenValue?.onReady().then(() => {
      fullscreenValue.triggerAction("toggle-use-numbers-for-opacity", {
        value: newValue,
        skipSave: true,
      })
    }).catch(() => {
      // Silently handle any errors during initialization
    })
  }
}

// Maintain original export names for compatibility
export const f = handleOpacitySettingsChange
export const y = toggleUseNumbersForOpacity
