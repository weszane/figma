/**
 * Container class name for the inspect panel scroll area.
 * Original variable: $$n1
 */
export const INSPECT_PANEL = 'inspect-panel-scroll-container'

/**
 * Checks if the given object has a mirror with exactly one scene graph selection.
 * Original function: $$i0
 * @param obj - The object to inspect.
 * @returns True if mirror exists and has one selection, false otherwise.
 */
export function hasSingleSceneGraphSelection(obj: { mirror?: { sceneGraphSelection: Record<string, unknown> } }): boolean {
  return !!obj?.mirror && Object.keys(obj.mirror.sceneGraphSelection).length === 1
}

// Refactored exports for clarity and maintainability
export const M = hasSingleSceneGraphSelection
export const Y = INSPECT_PANEL
