import { useSelector } from 'react-redux'
import { getFeatureFlags } from '../905/601108'
import { FEditorType } from '../figma_app/53721'

/**
 * Checks if the 'sites' feature flag is enabled.
 * (Original: $$s2)
 */
export function isSitesFeatureEnabled(): boolean {
  return !!getFeatureFlags().sites
}

/**
 * Determines if the current view is 'fullscreen' and the editor type is 'Sites', with 'sites' feature enabled.
 * (Original: $$o0)
 * @param selectedView - The current selected view object.
 */
export function isFullscreenSitesView(selectedView: { view: string, editorType: FEditorType }): boolean {
  return (
    isSitesFeatureEnabled()
    && selectedView.view === 'fullscreen'
    && selectedView.editorType === FEditorType.Sites
  )
}

/**
 * Redux selector to check if the selected view is a fullscreen sites view.
 * (Original: $$l1)
 */
export function useIsFullscreenSitesView(): boolean {
  return useSelector((state: { selectedView: { view: string, editorType: FEditorType } }) =>
    isFullscreenSitesView(state.selectedView),
  )
}

// Export aliases for backward compatibility with original names
export const Vj = isFullscreenSitesView // $$o0
export const cJ = useIsFullscreenSitesView // $$l1
export const oz = isSitesFeatureEnabled // $$s2
