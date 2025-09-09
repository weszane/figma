import { getFeatureFlags } from '../905/601108'
import { getObservableValue } from '../figma_app/84367'
import { AppStateTsApi, HandoffBindingsCpp, UserExperienceMode } from '../figma_app/763686'

/**
 * Checks if both dt_interactive_inspection and changes_stager_rollback_to_syncable_value feature flags are enabled.
 * (Original: $$s3)
 */
export function isInteractiveInspectionAndRollbackEnabled(): boolean {
  const flags = getFeatureFlags()
  return !!flags.dt_interactive_inspection && !!flags.changes_stager_rollback_to_syncable_value
}

/**
 * Determines if the current active stager type is DEV_MODE_FOCUS_VIEW using observable value.
 * (Original: $$o1)
 */
export function isDevModeFocusViewActive(): boolean {
  const stagerState = AppStateTsApi?.changesStagerState()
  return getObservableValue(stagerState?.activeStagerType, null) === UserExperienceMode.DEV_MODE_FOCUS_VIEW
}

/**
 * Checks if the copy of the active stager type is DEV_MODE_FOCUS_VIEW.
 * (Original: $$l2)
 */
export function isDevModeFocusViewCopyActive(): boolean {
  const activeStagerTypeCopy = AppStateTsApi?.changesStagerState()?.activeStagerType.getCopy() || null
  return activeStagerTypeCopy === UserExperienceMode.DEV_MODE_FOCUS_VIEW
}

/**
 * Returns whether the interactive inspection state is resizing.
 * (Original: $$d0)
 */
export function isInteractiveInspectionResizing(): boolean {
  const inspectionState = HandoffBindingsCpp?.focusViewInteractiveInspectionState()
  return getObservableValue(inspectionState?.isResizing, false)
}

// Export aliases for backward compatibility
export const EG = isInteractiveInspectionResizing
export const Kv = isDevModeFocusViewActive
export const np = isDevModeFocusViewCopyActive
export const s4 = isInteractiveInspectionAndRollbackEnabled
