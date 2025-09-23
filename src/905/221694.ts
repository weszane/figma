import { atom } from 'jotai'
import { createReduxSubscriptionAtomWithState } from '../905/270322'

// Original: let a = createReduxSubscriptionAtomWithState(e => e.hubFiles)
// Refactored: Create an atom that subscribes to the hubFiles state from Redux.
const hubFilesAtom = createReduxSubscriptionAtomWithState(state => state.hubFiles)

// Original: let $$s0 = atom((e) => { ... })
// Refactored: Create a derived atom that computes a map of items keyed by their library_key.
// This atom depends on hubFilesAtom and transforms the data into a dictionary for efficient lookup.
export const libraryKeyMapAtom = atom((get) => {
  // Original: let t = e(a)
  // Refactored: Get the current value of hubFilesAtom.
  const hubFiles = get(hubFilesAtom) as AppState['hubFiles']

  // Original: let i = {}
  // Refactored: Initialize an empty object to hold the mapped items. Assuming items have a library_key property of type string.
  const map: Record<string, any> = {}

  // Original: for (let e of Object.values(t)) e.library_key && (i[e.library_key] = e)
  // Refactored: Iterate over the values of hubFiles. If an item has a library_key, add it to the map.
  for (const item of Object.values(hubFiles)) {
    if (item.library_key) {
      map[item.library_key] = item
    }
  }

  // Original: return i
  // Refactored: Return the computed map.
  return map
})

// Original: export const O = $$s0
// Refactored: Export the derived atom. (Note: If this export is imported elsewhere, update the import to use a meaningful name like 'libraryKeyMapAtom' instead of 'O'.)
export const O = libraryKeyMapAtom
