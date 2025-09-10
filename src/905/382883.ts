// Original file: /Users/allen/sigma-main/src/905/382883.ts
// Refactored to improve readability, maintainability, and type safety.
// Grouped related equality functions together.
// Added TypeScript types for better clarity.
// Split the main comparison function into smaller, focused helpers.
// Converted to named functions and arrow functions where appropriate.
// Simplified conditionals with early returns.
// Added JSDoc-style comments referencing original names.
// Ensured functionality remains identical.
// Suggested: Update imports to use new exported names, e.g., import { approximateEqual } from './382883'; instead of import { Mm } from './382883';

type EqualityOptions = {
  approximateNumbers?: boolean;
  ignoreEmptyArrays?: boolean;
  ignoreUndefined?: boolean;
};

const ignoredKeys = new Set(["vectorNetworkBlob", "version"]);

/**
 * Checks if any item in the array matches the target using deep equality.
 * Original: $$l0
 * @param array - The array to search.
 * @param target - The target value to match.
 * @param options - Optional equality options.
 * @returns True if a match is found, false otherwise.
 */
export function includesEqual(array: any[], target: any, options: EqualityOptions = {}): boolean {
  for (const item of array) {
    if (deepEqual(item, target, options)) {
      return true;
    }
  }
  return false;
}

/**
 * Performs approximate equality check (with tolerance for numbers).
 * Original: $$n1
 * @param a - First value.
 * @param b - Second value.
 * @returns True if approximately equal.
 */
export function approximateEqual(a: any, b: any): boolean {
  return deepEqual(a, b, { approximateNumbers: true });
}

/**
 * Performs relaxed equality check (handles empty arrays and NaN).
 * Original: $$r3
 * @param a - First value.
 * @param b - Second value.
 * @returns True if relaxed equal.
 */
export function relaxedEqual(a: any, b: any): boolean {
  return deepEqual(a, b, { ignoreEmptyArrays: true });
}

/**
 * Performs equality check ignoring undefined values.
 * Original: $$a4
 * @param a - First value.
 * @param b - Second value.
 * @returns True if equal ignoring undefined.
 */
export function ignoreUndefinedEqual(a: any, b: any): boolean {
  return deepEqual(a, b, { ignoreUndefined: true });
}

/**
 * Main deep equality function with configurable options.
 * Original: $$o2
 * @param a - First value.
 * @param b - Second value.
 * @param options - Equality options.
 * @returns True if deeply equal based on options.
 */
export function deepEqual(a: any, b: any, options: EqualityOptions = {}): boolean {
  const { approximateNumbers = false, ignoreEmptyArrays = false, ignoreUndefined = false } = options;

  // Handle empty arrays or null/undefined cases if ignoring empties
  if (ignoreEmptyArrays && (
    (Array.isArray(a) && a.length === 0 && b === undefined) ||
    (Array.isArray(b) && b.length === 0 && a === undefined) ||
    (!a && !b)
  )) {
    return true;
  }

  // Type mismatch
  if (typeof a !== typeof b) {
    return false;
  }

  // Primitive types
  if (typeof a !== 'object' || a === null || b === null) {
    if (typeof a === 'number') {
      if (Number.isNaN(a) || Number.isNaN(b)) {
        return ignoreEmptyArrays; // Treat NaN as equal if ignoring empties
      }
      if (approximateNumbers) {
        return Math.abs(a - b) < 0.01;
      }
      return a === b;
    }
    return a === b;
  }

  // Null checks
  if (a === null || b === null) {
    return a === b;
  }

  // Array vs Object mismatch
  if (Array.isArray(a) !== Array.isArray(b)) {
    return false;
  }

  // Array comparison
  if (Array.isArray(a)) {
    if (a.length !== b.length) {
      return false;
    }
    return a.every((item, index) => deepEqual(item, b[index], options));
  }

  // Object comparison
  let keysA = Object.keys(a);
  let keysB = Object.keys(b);

  if (ignoreUndefined) {
    keysA = keysA.filter(key => a[key] !== undefined);
    keysB = keysB.filter(key => b[key] !== undefined);
  }

  if (keysA.length !== keysB.length) {
    return false;
  }

  if (ignoreEmptyArrays) {
    keysA = keysA.filter(key => !ignoredKeys.has(key));
    keysB = keysB.filter(key => !ignoredKeys.has(key));
  }

  keysA.sort();
  keysB.sort();

  // Check key order and values
  return keysA.every((key, index) => key === keysB[index] && deepEqual(a[key], b[key], options));
}

// Exported aliases for backward compatibility or external use
// Original exports: Jj, Mm, c2, cF, he
export const Jj = includesEqual;
export const Mm = approximateEqual;
export const c2 = deepEqual;
export const cF = relaxedEqual;
export const he = ignoreUndefinedEqual;
