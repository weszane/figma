import { UIVisibilitySetting } from '../figma_app/763686'
/**
 * Checks if the UI should be hidden or locked.
 * @param setting - The UI visibility setting to check.
 * @returns True if the UI should be hidden or locked, false otherwise.
 * (Original function: $$r0)
 */
export function isUIHiddenOrLocked(setting: UIVisibilitySetting): boolean {
  return (
    setting === UIVisibilitySetting.HIDE_UI
    || setting === UIVisibilitySetting.ON_AND_LOCKED
  )
}

// Export with original alias for backward compatibility (Original: T)
export const T = isUIHiddenOrLocked
