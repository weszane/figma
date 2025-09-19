/**
 * Finds the single element in the array that satisfies the predicate.
 * If no element or more than one element satisfies, returns null.
 * Original function name: $$n0
 * @param array - The array to search.
 * @param predicate - The predicate function to test each element.
 * @returns The single matching element or null.
 */
export function findUnique<T>(array: T[], predicate: (element: T) => boolean): T | null {
  const mapped = array.map(predicate)
  let foundIndex = -1
  for (let i = 0; i < mapped.length; i++) {
    if (mapped[i]) {
      if (foundIndex !== -1) {
        return null // More than one match
      }
      foundIndex = i
    }
  }
  return foundIndex === -1 ? null : array[foundIndex]
}

// Original export alias: p
export const p = findUnique
