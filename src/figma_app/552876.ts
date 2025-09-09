import { useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { debugState } from '../905/407919'
import { isSitesFeatureEnabled } from '../905/561485'
import { getFeatureFlags } from '../905/601108'
import { FEditorType } from '../figma_app/53721'
import { AppView } from '../figma_app/707808'
import { Fullscreen } from '../figma_app/763686'

/**
 * Checks if the Sites feature and bake flag are enabled.
 * Original: $$u4
 */
export function isFigmakeSitesEnabled(): boolean {
  return isSitesFeatureEnabled() && !!getFeatureFlags().bake
}

/**
 * Determines if the current view is fullscreen and editor type is Figmake.
 * Original: $$p1
 * @param params - Object containing view and editorType
 */
export function isFigmakeFullscreenView(params: { view: string, editorType: FEditorType }): boolean {
  return !!isFigmakeSitesEnabled()
    && params.view === 'fullscreen'
    && params.editorType === FEditorType.Figmake
}

/**
 * Checks if the selected view in debugState is Figmake fullscreen.
 * Original: $$_3
 */
export function isDebugSelectedFigmakeFullscreen(): boolean {
  const selectedView = debugState.getState().selectedView
  return !!selectedView && isFigmakeFullscreenView(selectedView)
}

/**
 * Redux selector for checking if selectedView is Figmake fullscreen.
 * Original: $$h2
 */
export function useIsSelectedFigmakeFullscreen(): boolean {
  return useSelector((state: any) =>
    isFigmakeFullscreenView(state.selectedView),
  )
}

/**
 * Memoized check for fullscreen preview in Figmake.
 * Original: $$m0
 * @param params - Object containing view and figmakeView
 */
export function useIsFigmakeFullscreenPreview(params: { view: string, figmakeView: AppView }): boolean {
  const isSelectedFullscreen = useIsSelectedFigmakeFullscreen()
  return useMemo(
    () =>
      isSelectedFullscreen
      && params.view === 'fullscreen'
      && params.figmakeView === AppView.FULLSCREEN_PREVIEW,
    [isSelectedFullscreen, params],
  )
}

/**
 * Callback to trigger debug-toggle-figmake-mode action.
 * Original: $$g5
 */
export function useToggleFigmakeMode(): () => void {
  return useCallback(() => {
    Fullscreen?.triggerAction('debug-toggle-figmake-mode', {})
  }, [])
}

// Export refactored names for external usage
export const B5 = useIsFigmakeFullscreenPreview
export const Jh = isFigmakeFullscreenView
export const Oc = useIsSelectedFigmakeFullscreen
export const YE = isDebugSelectedFigmakeFullscreen
export const aI = isFigmakeSitesEnabled
export const iG = useToggleFigmakeMode
