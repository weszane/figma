// Original: $$n0
export const LIVESTORE_TOMBSTONED = Symbol('LIVESTORE_TOMBSTONED')

// Original: $$r1
export const LIVESTORE_LOADING = Symbol('LIVESTORE_LOADING')

/**
 * Filters special symbols, returning null if the value is tombstoned or loading.
 * Original: $$a3
 * @param {*} value - The value to check.
 * @returns {*} The original value or null.
 */
export function filterSpecialValue(value) {
  return value === LIVESTORE_TOMBSTONED || value === LIVESTORE_LOADING ? null : value
}

/**
 * Creates a map from object keys to their objectDef properties.
 * Original: $$s2
 * @param {object} obj - The object to extract from.
 * @returns {Map} A map of key to objectDef.
 */
export function createObjectDefMap(obj) {
  const map = new Map()
  Object.keys(obj).forEach((key) => {
    map.set(key, obj[key]?.objectDef)
  })
  return map
}

export const ET = LIVESTORE_TOMBSTONED
export const F5 = LIVESTORE_LOADING
export const j5 = createObjectDefMap
export const ub = filterSpecialValue
