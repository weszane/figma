/**
 * Resolves a variable value based on an item ID and returns an object with raw value and optional resolved variable.
 * Original function name: $$n0
 * @param resolver - Object with resolveVariable method (original param: i)
 * @param items - Array of items with optional id (original param: e)
 * @param unused - Unused parameter (original param: t)
 * @param index - Index in items array (original param: r)
 * @param rawValue - Raw value to include (original param: n)
 * @returns Object with rawValue and optional variable
 */
export function resolveVariableValue(resolver: any, items: any, unused: any, index: number, rawValue: any) {
  const id = resolver[rawValue]?.id
  const result: ObjectOf = { rawValue: index }
  if (id) {
    const value = unused?.resolveVariable(id)
    result.variable = { value }
  }
  return result
}


export const X = resolveVariableValue
