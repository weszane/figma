import { useSelector } from 'react-redux'
import { isFullscreenSlidesView } from '../905/35881'
import { useFullscreenReady } from '../905/924253'
import { useDeepEqualSceneValue } from '../figma_app/167249'
import { useSceneSlideThemeId } from '../figma_app/226737'
import { isInteractionPathCheck } from '../figma_app/897289'
/**
 * Hook to check if the current view is fullscreen slides view
 * Original name: $$d2
 */
export function useIsFullscreenSlidesView(): boolean {
  return useSelector<AppState, boolean>(state => isFullscreenSlidesView(state.selectedView))
}

/**
 * Hook to determine if the current scene slide has a valid theme
 * Original name: $$c1
 */
export function useHasValidSceneSlideTheme(): boolean {
  const isFullscreenSlides = useIsFullscreenSlidesView()
  const sceneSlideThemeId = useSceneSlideThemeId()
  const hasValidTheme = sceneSlideThemeId && !sceneSlideThemeId.endsWith('-1:-1')

  return !isInteractionPathCheck() && (!isFullscreenSlides || !!hasValidTheme)
}

/**
 * Hook to check if the fullscreen document is fully loaded and ready
 * Original name: $$u0
 */
export function useIsFullscreenReady(): boolean {
  const isDocumentLoaded = useSelector<AppState, boolean>(state => state.isFullscreenDocumentLoaded)
  const isFullscreenReady = useFullscreenReady()
  const hasSceneValue = useDeepEqualSceneValue(state => state.get('0:0') !== null)

  return isDocumentLoaded && isFullscreenReady && hasSceneValue as boolean
}

// Exported constants with meaningful names
export const EI = useIsFullscreenReady
export const jY = useHasValidSceneSlideTheme
export const sO = useIsFullscreenSlidesView
