import { atomWithDefault } from 'jotai/utils'
import { getFeatureFlags } from '../905/601108'
import { MultiValueMap } from '../905/810750'
import { atomStoreManager } from '../figma_app/27355'

/**
 * Atom for storing MultiValueMap instances.
 * Original: $$s0
 */
export const multiValueMapAtom = atomWithDefault(() => new MultiValueMap())

/**
 * Adds a value to the MultiValueMap atom if the debug feature flag is enabled.
 * Original: $$o1
 * @param key - The key to add.
 * @param value - The value to associate with the key.
 */
export function addToMultiValueMapAtom(key: any, value: any): void {
  if (getFeatureFlags().internal_only_debug_tools) {
    atomStoreManager.set(multiValueMapAtom, (map) => {
      map.add(key, value)
      return map
    })
  }
}

// Export aliases for backward compatibility
export const L = multiValueMapAtom // Original: L
export const l = addToMultiValueMapAtom // Original: l
