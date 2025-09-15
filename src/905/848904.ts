import { assign } from 'lodash-es'
import { deepEqual } from '../905/382883'

/**
 * Merges two objects, returning the first if they are identical or if the merge doesn't change it.
 * Original function name: $$s0, exported as: j
 * @param source - The source object to merge into.
 * @param target - The target object to merge from.
 * @returns The merged object or the original if unchanged.
 */
export function mergeWithObject(
  source: Record<string, any> | null | undefined,
  target: Record<string, any> | null | undefined,
): Record<string, any> | null | undefined {
  // Early return if source is not an object or is null
  if (typeof source !== 'object' || source == null) {
    return target
  }

  // Early return if source and target are the same reference
  if (source === target) {
    return source
  }

  // Perform shallow merge using lodash assign
  const merged = assign({}, source, target)

  // Return original source if merge didn't change it (deep equality check)
  return deepEqual(merged, source) ? source : merged
}

// Export the function with a consistent name
export const j = mergeWithObject
