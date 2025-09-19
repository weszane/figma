/**
 * Checks if two sets are equal in size and contain the same elements.
 * @param setA - The first set to compare.
 * @param setB - The second set to compare.
 * @returns True if sets are equal, false otherwise.
 * (Original function: $$n2)
 */
export function areSetsEqual<T>(setA: Set<T>, setB: Set<T>): boolean {
  return setA.size === setB.size && areSetsSubset(setA, setB)
}

/**
 * Checks if all elements of setA are present in setB.
 * @param setA - The set whose elements are checked.
 * @param setB - The set to check against.
 * @returns True if all elements of setA are in setB.
 * (Original function: $$r0)
 */
export function areSetsSubset<T>(setA: Set<T>, setB: Set<T>): boolean {
  return [...setA].every(item => setB.has(item))
}

/**
 * Computes the difference between two sets.
 * @param setA - The base set.
 * @param setB - The set to compare.
 * @returns An object with 'added' and 'removed' sets.
 * (Original function: $$a1)
 */
export function diffSets<T>(setA: Set<T>, setB?: Set<T>): { added: Set<T>, removed: Set<T> } {
  const added = new Set<T>()
  const removed = new Set<T>()

  setB?.forEach((item) => {
    if (!setA.has(item)) {
      removed.add(item)
    }
  })

  setA.forEach((item) => {
    if (!setB?.has(item)) {
      added.add(item)
    }
  })

  return { added, removed }
}

// Refactored exports for clarity and traceability
export const Bq = areSetsSubset // Original: $$r0
export const Zv = diffSets // Original: $$a1
export const _f = areSetsEqual // Original: $$n2
