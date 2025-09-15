/**
 * Opaque symbol for identifying a regular query.
 */
export const OPAQUE_RQ_QUERY = Symbol('__OPAQUE_RQ_QUERY__')

/**
 * Opaque symbol for identifying a paginated query.
 */
export const OPAQUE_RQ_PAGINATED_QUERY = Symbol('__OPAQUE_RQ_PAGINATED_QUERY__')

/**
 * Checks if the given object is a paginated query.
 * @param obj - The object to check.
 * @returns True if the object is a paginated query.
 * @originalName $$a3
 */
export function isPaginatedQuery(obj: any): boolean {
  return obj.__OPAQUE_RQ_PAGINATED_QUERY__ === OPAQUE_RQ_PAGINATED_QUERY
}

/**
 * Checks if the given object is a regular query.
 * @param obj - The object to check.
 * @returns True if the object is a regular query.
 * @originalName $$s1
 */
export function isRegularQuery(obj: any): boolean {
  return obj.__OPAQUE_RQ_QUERY__ === OPAQUE_RQ_QUERY
}

// Export aliases for backward compatibility and refactored usage
export const H = OPAQUE_RQ_QUERY
export const Kh = isRegularQuery
export const aX = OPAQUE_RQ_PAGINATED_QUERY
export const uf = isPaginatedQuery
