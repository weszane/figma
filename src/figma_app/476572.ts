// Original file: /Users/allen/github/fig/src/figma_app/476572.ts

/**
 * Computes the intersection of two sets.
 * Original: $$n1
 * @param setA - The first set.
 * @param setB - The second set.
 * @returns A new set containing elements present in both sets.
 */
export function intersection<T>(setA: Set<T>, setB: Set<T>): Set<T> {
  const result = new Set<T>()
  const [smaller, larger] = setA.size < setB.size ? [setA, setB] : [setB, setA]
  for (const element of smaller) {
    if (larger.has(element)) {
      result.add(element)
    }
  }
  return result
}

/**
 * Computes the difference of two sets (elements in setA but not in setB).
 * Original: $$i0
 * @param setA - The first set.
 * @param setB - The second set.
 * @returns A new set containing elements in setA but not in setB.
 */
export function difference<T>(setA: Set<T>, setB: Set<T>): Set<T> {
  const result = new Set<T>()
  for (const element of setA) {
    if (!setB.has(element)) {
      result.add(element)
    }
  }
  return result
}

/**
 * Checks if two sets are equal (same size and contain the same elements).
 * Original: $$a3
 * @param setA - The first set.
 * @param setB - The second set.
 * @returns True if the sets are equal, false otherwise.
 */
export function equals<T>(setA: Set<T>, setB: Set<T>): boolean {
  if (setA.size !== setB.size) {
    return false
  }
  for (const element of setA) {
    if (!setB.has(element)) {
      return false
    }
  }
  return true
}

/**
 * Merges two maps where keys intersect, applying a reducer function to the values.
 * Original: $$s2
 * @param mapA - The first map.
 * @param mapB - The second map.
 * @param reducer - A function to combine values from both maps for intersecting keys.
 * @returns A new map with merged values for intersecting keys.
 */
export function mergeIntersectingMaps<K, V1, V2, R>(
  mapA: Map<K, V1>,
  mapB: Map<K, V2>,
  reducer: (key: K, valueA: V1, valueB: V2) => R,
): Map<K, R> {
  const result = new Map<K, R>()
  const [smaller, larger] = mapA.size < mapB.size ? [mapA, mapB] : [mapB, mapA]
  for (const [key, valueSmaller] of smaller.entries()) {
    const valueLarger = larger.get(key)
    if (valueLarger !== undefined) {
      result.set(key, reducer(key, valueSmaller as V1, valueLarger as V2))
    }
  }
  return result
}

// Exported aliases with refactored function names
export const _i = difference
export const iR = intersection
export const wD = mergeIntersectingMaps
export const yZ = equals
