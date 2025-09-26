import type { PrimitiveAtom } from 'jotai'
import { getFeatureFlags } from '../905/601108'
import { getSingletonSceneGraph } from '../905/700578'
import { atom, atomStoreManager } from '../figma_app/27355'

/**
 * Atom to store the selected node GUID.
 * Original name: $$s0
 */
export const selectedNodeGuidAtom = atom<void | string>(void 0) as PrimitiveAtom<any>

/**
 * Updates the selectedNodeGuidAtom with the GUID of the directly selected node,
 * if the anticipation_trigger_shadow feature flag is enabled.
 * Original name: $$o1
 */
export function updateSelectedNodeGuid(): void {
  if (!getFeatureFlags().anticipation_trigger_shadow)
    return

  const selectedNodes = getSingletonSceneGraph().getDirectlySelectedNodes()
  const guid = selectedNodes.length > 1 ? void 0 : selectedNodes[0]?.guid
  atomStoreManager.set(selectedNodeGuidAtom, guid)
}

// Exported aliases for backward compatibility
export const W = selectedNodeGuidAtom
export const r = updateSelectedNodeGuid
