/**
 * Splits an array into two groups based on a predicate function.
 * @param items - The array to partition.
 * @param predicate - The function to test each item.
 * @returns An object with 'pass' and 'fail' arrays.
 * @see $$n0
 */
export function partitionByPredicate<T>(items: T[], predicate: (item: T) => boolean): { pass: T[], fail: T[] } {
  return items.reduce<{ pass: T[], fail: T[] }>(
    (result, item) => {
      if (predicate(item)) {
        result.pass.push(item)
      }
      else {
        result.fail.push(item)
      }
      return result
    },
    { pass: [], fail: [] },
  )
}

// Export with original variable name for traceability
export const j = partitionByPredicate
