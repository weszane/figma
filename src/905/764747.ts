// Store for key-array mappings
const store = new Map<any, any[]>();

/**
 * Checks if a key exists in the store
 */
export function hasKey(key: any): boolean {
  return store.has(key);
}

/**
 * Gets value at index from array associated with key
 */
export function getValueAtIndex(key: unknown, index: number | string): string {
  const arr = store.get(key) ?? [];
  return arr[+index] ?? "";
}

/**
 * Gets length of array associated with key minus 1
 */
export function getArrayLength(key: unknown): string {
  return String((store.get(key) ?? []).length - 1);
}

// Export aliases for backward compatibility
export const Qx = getArrayLength;
export const WL = getValueAtIndex;
export const ZY = hasKey;
