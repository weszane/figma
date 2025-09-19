/**
 * Enum representing style types.
 * Original variable: $$n7
 */
export enum StyleType {
  NONE = 'NONE',
  FILL = 'FILL',
  STROKE = 'STROKE',
  TEXT = 'TEXT',
  EFFECT = 'EFFECT',
  GRID = 'GRID',
}

/**
 * Maps style key to style type.
 * Original function: $$a8
 * @param key - The style key to map.
 * @returns The corresponding style type.
 */
export function mapStyleKeyToType(key: string): string | undefined {
  switch (key) {
    case 'inheritTextStyleKey':
      return StyleType.TEXT
    case 'inheritFillStyleKey':
    case 'inheritFillStyleKeyForStroke':
      return StyleType.FILL
    case 'inheritEffectStyleKey':
      return StyleType.EFFECT
    case 'inheritGridStyleKey':
      return StyleType.GRID
    case 'inheritExportStyleKey':
      return 'EXPORT'
    default:
      return undefined
  }
}

/**
 * Maps style type to style key.
 * Original function: $$s4
 * @param type - The style type to map.
 * @returns The corresponding style key or null.
 */
export function mapTypeToStyleKey(type: string): string | null {
  switch (type) {
    case StyleType.FILL:
      return 'inheritFillStyleKey'
    case StyleType.TEXT:
      return 'inheritTextStyleKey'
    case StyleType.EFFECT:
      return 'inheritEffectStyleKey'
    case StyleType.GRID:
      return 'inheritGridStyleKey'
    case StyleType.NONE:
    default:
      return null
  }
}

/**
 * Maps style keys to their corresponding style names.
 * Original variable: $$o2
 */
export const styleKeyToNameMap: Record<string, string> = {
  inheritEffectStyleKey: 'inheritEffectStyleName',
  inheritExportStyleKey: 'inheritExportStyleName',
  inheritFillStyleKey: 'inheritFillStyleName',
  inheritFillStyleKeyForStroke: 'inheritFillStyleNameForStroke',
  inheritGridStyleKey: 'inheritGridStyleName',
  inheritTextStyleKey: 'inheritTextStyleName',
}

/**
 * Maps style keys to their corresponding soft deleted style IDs.
 * Original variable: $$l3
 */
export const styleKeyToSoftDeletedIdMap: Record<string, string> = {
  inheritEffectStyleKey: 'softDeletedEffectStyleId',
  inheritExportStyleKey: 'softDeletedExportStyleId',
  inheritFillStyleKey: 'softDeletedFillStyleId',
  inheritFillStyleKeyForStroke: 'softDeletedFillStyleForStrokeId',
  inheritGridStyleKey: 'softDeletedGridStyleId',
  inheritTextStyleKey: 'softDeletedTextStyleId',
}

/**
 * Checks if the style object has a valid key.
 * Original function: $$d0
 * @param style - The style object to check.
 * @returns True if the style has a key, false otherwise.
 */
export function hasStyleKey(style?: { key?: string }): boolean {
  return !!style?.key
}

/**
 * Checks if the style string starts with 'S:'.
 * Original function: $$c1
 * @param styleStr - The style string to check.
 * @returns True if the string starts with 'S:', false otherwise.
 */
export function isStyleString(styleStr: string): boolean {
  return styleStr.startsWith('S:')
}

/**
 * Serializes a style object to a string.
 * Original function: $$u6
 * @param style - The style object to serialize.
 * @returns The serialized style string.
 */
export function serializeStyle(style?: { key?: string, version?: string }): string {
  return style && hasStyleKey(style) ? `S:${style.key},${style.version || ''}` : ''
}

/**
 * Parses a serialized style string into a style object.
 * Original function: $$p5
 * @param styleStr - The serialized style string.
 * @returns The parsed style object or null.
 */
export function parseStyleString(styleStr?: string): { key: string, version: string } | null {
  if (!styleStr || !isStyleString(styleStr))
    return null
  const parts = styleStr.substring(2).split(',')
  if (!parts || parts.length !== 2)
    return null
  const [key, version] = parts
  return key === 'INVALID'
    ? null
    : { key, version }
}

// Exported names refactored to match new function/variable names
export const YJ = hasStyleKey // $$d0
export const M7 = isStyleString // $$c1
export const Ms = styleKeyToNameMap // $$o2
export const UC = styleKeyToSoftDeletedIdMap // $$l3
export const Zk = mapTypeToStyleKey // $$s4
export const eX = parseStyleString // $$p5
export const nM = serializeStyle // $$u6
export const s4 = StyleType // $$n7
export const sg = mapStyleKeyToType // $$a8
