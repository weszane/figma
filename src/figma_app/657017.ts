import { getPlanFeaturesAtomFamily } from '../905/276025'

import { atom, useAtomWithSubscription } from '../figma_app/27355'
import { FEditorType } from '../figma_app/53721'
import { isGovCluster } from '../figma_app/169182'
import { throwTypeError } from '../figma_app/465776'
import { editorTypeAtom } from '../figma_app/976749'

/**
 * Determines if Figma provided libraries should be enabled based on plan features and editor type.
 * Original: $$u1
 */
export function isFigmaLibrariesEnabled(planFeatures?: { figma_provided_libraries_disabled?: boolean }, editor?: { figma_provided_libraries_disabled?: boolean }, editorType?: FEditorType): boolean {
  const isSupportedEditor = isSupportedEditorType(editorType)
  const librariesDisabled
    = planFeatures?.figma_provided_libraries_disabled
      || editor?.figma_provided_libraries_disabled
  return !!(!isGovCluster() && isSupportedEditor && !librariesDisabled)
}

/**
 * Determines if Figma provided libraries are enabled for the current plan and editor.
 * Original: $$p2
 */
export function isFigmaLibrariesActive(planFeatures?: { figmaProvidedLibrariesEnabled?: boolean }, editorType?: FEditorType): boolean {
  const isSupportedEditor = isSupportedEditorType(editorType)
  const librariesEnabled = planFeatures?.figmaProvidedLibrariesEnabled
  return !!(!isGovCluster() && isSupportedEditor && librariesEnabled)
}

/**
 * Atom for Figma libraries enabled state.
 * Original: $$h0
 */
export const figmaLibrariesEnabledAtom = atom((get) => {
  const planFeatures = get<ObjectOf>(getPlanFeaturesAtomFamily(true)).data
  const editorType = get(editorTypeAtom)
  return isFigmaLibrariesActive(planFeatures, editorType)
})

/**
 * Hook to subscribe to Figma libraries enabled atom.
 * Original: $$_3
 */
export function useFigmaLibrariesEnabled() {
  return useAtomWithSubscription(figmaLibrariesEnabledAtom)
}

/**
 * Checks if the editor type supports Figma libraries.
 * Original: m
 * @param editorType - The editor type to check.
 * @returns True if supported, false otherwise.
 */
function isSupportedEditorType(editorType?: FEditorType): boolean {
  if (!editorType)
    return true
  switch (editorType) {
    case FEditorType.Design:
    case FEditorType.Illustration:
    case FEditorType.DevHandoff:
      return true
    case FEditorType.Cooper:
    case FEditorType.Slides:
    case FEditorType.Sites:
    case FEditorType.Figmake:
    case FEditorType.Whiteboard:
      return false
    default:
      throwTypeError(editorType)
  }
}

// Export aliases for backward compatibility
export const JB = figmaLibrariesEnabledAtom
export const MJ = isFigmaLibrariesEnabled
export const ek = isFigmaLibrariesActive
export const n1 = useFigmaLibrariesEnabled
