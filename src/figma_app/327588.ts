import { getFeatureFlags } from '../905/601108'
import { canvasGridAtom } from '../905/618447'
import { getSingletonSceneGraph } from '../905/700578'
import { defaultSessionLocalIDString } from '../905/871411'
import { atomStoreManager } from '../figma_app/27355'
import { getObservableValue, useSyncedObservableValue } from '../figma_app/84367'
import { canEnterDesignMode } from '../figma_app/357367'
import { AppStateTsApi } from '../figma_app/763686'
import { isDesignModeAndFullscreenCooper, useIsSelectedViewFullscreenCooper } from '../figma_app/828186'

// Original functions refactored for clarity, readability, and maintainability.
// Grouped related functionality (e.g., focused node view checks, fullscreen/design mode checks).
// Converted to arrow functions where appropriate.
// Simplified conditionals with early returns and guard clauses.
// Added JSDoc-style comments with original function names for traceability.
// Renamed functions to descriptive names based on functionality.
// Updated exports to match new names.
// Ensured same functionality and behavior.

/**
 * Checks if not in focused node view. (Original: $$p5)
 * @returns {boolean} True if not in focused node view.
 */
export function isNotInFocusedNodeView(): boolean {
  return !getObservableValue(AppStateTsApi?.cooperFocusView().isInFocusedNodeView, false)
}

/**
 * Checks if in fullscreen and focused node view. (Original: $$_6)
 * @returns {boolean} True if fullscreen and in focused node view.
 */
export function isFullscreenAndInFocusedNodeView(): boolean {
  const isFullscreen = useIsSelectedViewFullscreenCooper()
  const isInFocusedNodeView = getObservableValue(AppStateTsApi?.cooperFocusView().isInFocusedNodeView, true)
  return isFullscreen && isInFocusedNodeView
}

/**
 * Checks if buzz template sets feature can be shown based on various conditions. (Original: $$h4)
 * @returns {boolean} True if conditions for showing buzz template sets are met.
 */
export function canShowBuzzTemplateSets(): boolean {
  if (isNotInFocusedNodeView() || isDesignModeAndFullscreenCooper() || !canEnterDesignMode()) {
    return false
  }
  const canvasGrid = atomStoreManager.get(canvasGridAtom)
  if (!canvasGrid.length || canvasGrid.length === 1) {
    return false
  }
  for (let i = 0; i < canvasGrid.length; i++) {
    const isSelected = AppStateTsApi?.canvasGrid().isRowSelected(i)
    const rowGUID = AppStateTsApi?.canvasGrid().getRowGUID(i) ?? defaultSessionLocalIDString
    if (isSelected && getSingletonSceneGraph().get(rowGUID)?.isCanvasGridStateGroupRow && getFeatureFlags().buzz_template_sets) {
      return true
    }
  }
  return false
}

/**
 * Gets the focus node function or a no-op. (Original: $$m2)
 * @returns {Function} The focus node function.
 */
export function getFocusNodeFunction(): (nodeId: string, options?: any) => void {
  return AppStateTsApi ? AppStateTsApi.cooperFocusView().focusNodeInFocusedNodeView : () => {}
}

/**
 * Gets the current focused node ID. (Original: $$g3)
 * @returns {string} The focused node ID.
 */
export function getFocusedNodeId(): string {
  return getObservableValue(AppStateTsApi?.cooperFocusView().focusedNodeId, '')
}

/**
 * Hook to get synced focused node ID. (Original: $$f1)
 * @returns {string} The synced focused node ID.
 */
export function useFocusedNodeId(): string {
  return useSyncedObservableValue(AppStateTsApi?.cooperFocusView().focusedNodeId, '')
}

/**
 * Checks if in fullscreen design mode and not in focused node view. (Original: $$E0)
 * @returns {boolean} True if in fullscreen design mode and not focused.
 */
export function isFullscreenDesignModeNotFocused(): boolean {
  const isFullscreen = useIsSelectedViewFullscreenCooper()
  const isNotFocused = isNotInFocusedNodeView()
  const isDesignModeFullscreen = isDesignModeAndFullscreenCooper()
  return isFullscreen && isDesignModeFullscreen && isNotFocused
}

// Updated exports to match new descriptive names
export const CA = isFullscreenDesignModeNotFocused
export const Ci = useFocusedNodeId
export const Hf = getFocusNodeFunction
export const LU = getFocusedNodeId
export const W5 = canShowBuzzTemplateSets
export const jw = isNotInFocusedNodeView
export const kG = isFullscreenAndInFocusedNodeView
