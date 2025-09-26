import { atom, atomStoreManager } from '../figma_app/27355'
// Original: let r = atom(new Map());
const timestampMapAtom = atom(new Map<string, number[]>())

// Original: function a() { return Math.round(Date.now() / 1e3); }
function getCurrentTimestamp(): number {
  return Math.round(Date.now() / 1000)
}

/**
 * Original: export function $$s1(e)
 * Retrieves recent timestamps for a given key, filters those within the last hour,
 * and returns the time differences in seconds from now.
 * @param key - The key to retrieve timestamps for.
 * @returns Array of time differences in seconds.
 */
export function getRecentTimeDifferences(key: string): number[] {
  const map = atomStoreManager.get(timestampMapAtom)
  const timestamps = map.get(key)
  if (!timestamps)
    return []
  const now = getCurrentTimestamp()
  const oneHourAgo = now - 3600
  return timestamps.filter(ts => ts >= oneHourAgo).map(ts => now - ts)
}

/**
 * Original: export function $$o0(e)
 * Adds the current timestamp to the list for a given key and updates the atom.
 * @param key - The key to add the timestamp to.
 * @returns The updated list of timestamps for the key.
 */
export function addCurrentTimestamp(key: string): number[] {
  const map = atomStoreManager.get(timestampMapAtom)
  const timestamps = [...(map.get(key) ?? []), getCurrentTimestamp()]
  const newMap = new Map(map)
  newMap.set(key, timestamps)
  atomStoreManager.set(timestampMapAtom, newMap)
  return timestamps
}

// Original: export const v = $$o0;
export const v = addCurrentTimestamp

// Original: export const y = $$s1;
export const y = getRecentTimeDifferences
