import { Et as isNumber } from '../figma_app/397267'

/**
 * Finds and returns the value in the object that strictly equals the target value.
 * @param obj - The object to search.
 * @param target - The value to match.
 * @returns The matched value, or undefined if not found.
 * @see $$r0
 */
export function findMatchingValue(obj: Record<string, any>, target: any): any | undefined {
  for (const key of Object.keys(obj)) {
    if (obj[key] === target) {
      return obj[key];
    }
  }
  return undefined;
}

/**
 * Filters the values of the object, returning only those that are numbers.
 * @param obj - The object whose values to filter.
 * @returns An array of number values.
 * @see $$a1
 */
export function filterNumberValues(obj: Record<string, any>): number[] {
  return Object.values(obj).filter(isNumber);
}

// Export refactored names for external usage
export const K = findMatchingValue;
export const U = filterNumberValues;
