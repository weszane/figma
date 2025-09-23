/**
 * Default value constant, originally $$n2.
 */
export const EightSeven = 87;

/**
 * Validates and returns a positive number or the default value.
 * Originally $$i1.
 * @param value - The input value to check.
 * @returns The value if it's a positive number, otherwise DEFAULT_VALUE.
 */
export function getValidNumber(value: unknown): number {
  return typeof value === 'number' && value > 0 ? value : EightSeven;
}

/**
 * Checks a condition based on two parameters.
 * Originally $$a0.
 * @param firstParam - The first parameter, checked if >= 90.
 * @param secondParam - The second parameter, checked for truthiness.
 * @returns True if firstParam is >= 90 or secondParam is truthy.
 */
export function checkCondition(firstParam: unknown, secondParam: unknown): boolean {
  return !!(firstParam && typeof firstParam === 'number' && firstParam >= 90 || secondParam);
}

// Aliases updated to reference the refactored exports
export const F$ = checkCondition;
export const NK = getValidNumber;
export const Ob = EightSeven;
