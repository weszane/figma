import { isValidValue } from '../905/216495'
import { useSelectionProperty } from '../905/275640'
import { useDeepEqualSceneValue } from '../figma_app/167249'
/**
 * Hook to get the slide theme ID from the current scene root
 * Original name: $$s0
 */
export function useSceneSlideThemeId(): string | undefined {
  return useDeepEqualSceneValue(scene => scene.getRoot().slideThemeId)
}

/**
 * Hook to get the selected elements' theme ID
 * Original name: $$o2
 */
export function useSelectedThemeId(): string | undefined {
  const [themeId] = useSelectionProperty('themeId')
  return themeId
}

/**
 * Hook to get the effective theme ID, prioritizing selection over scene default
 * Original name: $$l1
 */
export function useEffectiveThemeId(): string | undefined {
  const selectedThemeId = useSelectedThemeId()
  const sceneThemeId = useSceneSlideThemeId()

  return selectedThemeId && isValidValue(selectedThemeId)
    ? selectedThemeId
    : sceneThemeId
}

// Export aliases for backward compatibility
export const el = useSceneSlideThemeId
export const s1 = useEffectiveThemeId
export const sW = useSelectedThemeId
