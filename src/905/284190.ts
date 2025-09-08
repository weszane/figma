/**
 * Deeply clones a value, handling Dates, Uint8Arrays, Arrays, and plain objects.
 * Original function name: e
 * @param value - The value to clone.
 * @returns A deep clone of the input value.
 */
export function deepClone(value: any): any {
  if (value === null)
    return value

  if (value instanceof Date)
    return new Date(value.getTime())

  if (value instanceof Uint8Array)
    return new Uint8Array(value)

  if (Array.isArray(value)) {
    // Recursively clone each element in the array
    return value.map(deepClone)
  }

  if (typeof value === 'object') {
    // Recursively clone each property in the object
    const clonedObj: Record<string, any> = { ...value }
    Object.keys(clonedObj).forEach((key) => {
      clonedObj[key] = deepClone(clonedObj[key])
    })
    return clonedObj
  }

  return value
}

// Refactored export for compatibility with import statements
export const A = deepClone
