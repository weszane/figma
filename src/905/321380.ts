/**
 * Checks if the given type is a supported node type.
 * Original function name: $$n0
 * @param type - The node type to check.
 * @returns True if the type is supported, false otherwise.
 */
export function isSupportedNodeType(type: string): boolean {
  return [
    'STICKY',
    'SHAPE_WITH_TEXT',
    'CONNECTOR',
    'CODE_BLOCK',
    'MEDIA',
    'TABLE',
  ].includes(type)
}

/**
 * List of supported style properties.
 * Original variable name: $$r1
 */
export const supportedStyleProperties = [
  'width',
  'height',
  'maxWidth',
  'minWidth',
  'maxHeight',
  'minHeight',
  'fills',
  'strokes',
  'effects',
  'strokeWeight',
  'cornerRadius',
  'textStyleId',
  'textAlignHorizontal',
  'fontFamily',
  'fontStyle',
  'fontSize',
  'fontWeight',
  'lineHeight',
  'letterSpacing',
  'itemSpacing',
  'padding',
  'layoutMode',
  'alignItems',
  'opacity',
  'mainComponent',
  'gridRowGap',
  'gridColumnGap',
  'gridRowCount',
  'gridColumnCount',
  'gridRowAnchorIndex',
  'gridColumnAnchorIndex',
  'gridRowSpan',
  'gridColumnSpan',
] as const

/**
 * Supported directions.
 * Original variable name: $$a2
 */
export const supportedDirections = [
  'TOP',
  'RIGHT',
  'BOTTOM',
  'LEFT',
] as const

// Refactored exports for compatibility with original names
export const MT = isSupportedNodeType
export const N2 = supportedStyleProperties
export const SI = supportedDirections
