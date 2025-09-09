import { useSelector } from 'react-redux'
import { getFeatureFlags } from '../905/601108'
import { FEditorType } from '../figma_app/53721'
import { getObservableValue } from '../figma_app/84367'
import { AppStateTsApi, SelfDesignType } from '../figma_app/763686'

/**
 * Checks if the given editor state is in fullscreen Cooper mode.
 * @param state - The editor state object.
 * @returns True if fullscreen and Cooper editor type.
 * (Original: $$l2)
 */
export function isFullscreenCooper(state: { view?: string, editorType?: FEditorType }): boolean {
  return state?.view === 'fullscreen' && state?.editorType === FEditorType.Cooper
}

/**
 * Checks if the selected view is in fullscreen Cooper mode.
 * @param appState - The application state object.
 * @returns True if selectedView is fullscreen Cooper.
 * (Original: $$d3)
 */
export function isSelectedViewFullscreenCooper(appState: { selectedView?: { view?: string, editorType?: FEditorType } }): boolean {
  return isFullscreenCooper(appState.selectedView)
}

/**
 * React hook to get whether the selected view is fullscreen Cooper.
 * @returns True if selected view is fullscreen Cooper.
 * (Original: $$c4)
 */
export function useIsSelectedViewFullscreenCooper(): boolean {
  return useSelector(isSelectedViewFullscreenCooper)
}

/**
 * Checks if the Cooper feature flag is enabled.
 * @returns True if Cooper feature is enabled.
 * (Original: $$u0)
 */
export function isCooperFeatureEnabled(): boolean {
  return !!getFeatureFlags().cooper
}

/**
 * Determines if the app is in DESIGN mode and selected view is fullscreen Cooper.
 * @returns True if DESIGN mode and fullscreen Cooper.
 * (Original: $$p1)
 */
export function isDesignModeAndFullscreenCooper(): boolean {
  const isFullscreen = useIsSelectedViewFullscreenCooper()
  const mode = getObservableValue(AppStateTsApi?.interopToolMode(), SelfDesignType.SELF)
  return mode === SelfDesignType.DESIGN && isFullscreen
}

// Exported variables with refactored names
export const HH = isCooperFeatureEnabled
export const Oe = isDesignModeAndFullscreenCooper
export const eM = isFullscreenCooper
export const im = isSelectedViewFullscreenCooper
export const to = useIsSelectedViewFullscreenCooper
