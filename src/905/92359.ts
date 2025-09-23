import { MIXED_MARKER } from '../905/216495'

// Define types for better clarity
interface Component {
  library_key: string
  node_id: string
}

interface StateInfo {
  isState: boolean
  parentGuid: string
}

/**
 * Generates a key for retrieving subscribed components and state groups.
 * Original function: $$r2
 * @param identifier - The identifier to append to the key
 * @returns The generated key string
 */
export function generateRetrievingSubscribedComponentsKey(identifier: string): string {
  return `RETRIEVING_SUBSCRIBED_COMPONENTS_AND_STATE_GROUPS_${identifier}`
}

/**
 * Generates a key for swapping an instance.
 * Original function: $$a0
 * @param component - The component object with library_key and node_id
 * @param states - Array of state strings
 * @returns The generated key string
 */
export function generateSwappingInstanceKey(component: Component, states: string[]): string {
  return `SWAPPING_INSTANCE_${component.library_key}_${component.node_id}_${states.join(',')}`
}

/**
 * Computes the backing symbol GUID and backing state group GUID from components and state map.
 * Original function: $$s1
 * @param components - Set of component identifiers
 * @param stateMap - Map of component identifiers to their state info
 * @returns Object with backingSymbolGUID and backingStateGroupGUID
 */
export function computeBackingGUIDs(
  components: Set<string>,
  stateMap: Map<string, StateInfo>,
): { backingSymbolGUID: string | null, backingStateGroupGUID: string | null } {
  // Determine backingSymbolGUID based on number of components
  let backingSymbolGUID: any | null = null
  const componentArray = Array.from(components)
  switch (componentArray.length) {
    case 0:
      backingSymbolGUID = null
      break
    case 1:
      backingSymbolGUID = componentArray[0]
      break
    default:
      backingSymbolGUID = MIXED_MARKER
  }

  // Determine backingStateGroupGUID based on state groups
  let allStates = true
  const stateGuids = new Set(
    componentArray
      .map((comp) => {
        const info = stateMap.get(comp)
        if (info?.isState) {
          return info.parentGuid
        }
        else {
          allStates = false
          return null
        }
      })
      .filter(Boolean) as string[],
  )

  let backingStateGroupGUID: any | null = null
  switch (stateGuids.size) {
    case 0:
      backingStateGroupGUID = null
      break
    case 1:
      backingStateGroupGUID = allStates ? Array.from(stateGuids)[0] : MIXED_MARKER
      break
    default:
      backingStateGroupGUID = MIXED_MARKER
  }

  return {
    backingSymbolGUID,
    backingStateGroupGUID,
  }
}

// Maintain original export aliases for backward compatibility, but refactored to use new function names
export const Ml = generateSwappingInstanceKey
export const nD = computeBackingGUIDs
export const yD = generateRetrievingSubscribedComponentsKey
