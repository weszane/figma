/**
 * Maps internal Figma node types to their public equivalents.
 * Throws an error for unknown node types.
 * @param node - The node object containing type and optional properties.
 * @returns The public node type as a string.
 * @original function $$n0
 */
export function getPublicNodeType(node: {
  type: string
  isStateGroup?: boolean
  resizeToFit?: boolean
  isLinkPreview?: boolean
  isEmbed?: boolean
}): string {
  switch (node.type) {
    case 'NONE':
      throw new Error('Internal Figma error: Unknown node type for node in getPublicNodeType')
    case 'ROUNDED_RECTANGLE':
      return 'RECTANGLE'
    case 'REGULAR_POLYGON':
      return 'POLYGON'
    case 'SYMBOL':
      return 'COMPONENT'
    case 'FRAME':
      if (node.isStateGroup)
        return 'COMPONENT_SET'
      if (node.resizeToFit)
        return 'GROUP'
      break
    case 'WIDGET':
      if (node.isLinkPreview)
        return 'LINK_UNFURL'
      if (node.isEmbed)
        return 'EMBED'
      break
    case 'CANVAS':
      return 'PAGE'
    case 'TRANSFORM':
      return 'TRANSFORM_GROUP'
    case 'RESPONSIVE_SET':
      return 'WEBPAGE'
    default:
      return node.type
  }
}

/** Exported alias for getPublicNodeType (original: w) */
export const w = getPublicNodeType
