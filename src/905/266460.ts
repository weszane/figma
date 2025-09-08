/**
 * Checks if the given node type is considered a special node type.
 * Original function name: $$n1
 * @param nodeType - The type of the node to check.
 * @returns True if the node type is special, false otherwise.
 */
export function isSpecialNodeType(nodeType: string): boolean {
  const specialNodeTypes = [
    'FRAME',
    'SYMBOL',
    'INSTANCE',
    'STICKY',
    'SHAPE_WITH_TEXT',
    'CODE_BLOCK',
    'WIDGET',
    'SECTION',
    'TABLE',
    'TABLE_CELL',
    'SLIDE',
    'MODULE',
    'SLIDE_GRID',
    'SLIDE_ROW',
    'RESPONSIVE_SET',
    'WEBPAGE',
    'REPEATER',
    'JSX',
    'EMBEDDED_PROTOTYPE',
  ]
  return specialNodeTypes.includes(nodeType)
}

/**
 * List of all supported node types.
 * Original variable name: $$r0
 */
export const supportedNodeTypes = [
  'DOCUMENT',
  'PAGE',
  'SLICE',
  'FRAME',
  'GROUP',
  'COMPONENT',
  'COMPONENT_SET',
  'INSTANCE',
  'BOOLEAN_OPERATION',
  'VECTOR',
  'RECTANGLE',
  'LINE',
  'ELLIPSE',
  'POLYGON',
  'STAR',
  'TEXT',
  'STICKY',
  'SHAPE_WITH_TEXT',
  'CONNECTOR',
  'CODE_BLOCK',
  'WIDGET',
  'STAMP',
  'LINK_UNFURL',
  'EMBED',
  'HIGHLIGHT',
  'SECTION',
  'MEDIA',
  'SECTION_OVERLAY',
  'WASHI_TAPE',
  'TABLE',
  'TABLE_CELL',
  'VARIABLE',
  'VARIABLE_SET',
  'SLIDE',
] as const

// Refactored exports for compatibility with original names
export const $ = supportedNodeTypes // Original export: $
export const F = isSpecialNodeType // Original export: F
