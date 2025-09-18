import { getProductName, getProductNameBeta } from '../905/389382'
import { compareProductAccessOrder } from '../figma_app/765689'
import { formatList } from '../figma_app/930338'
/**
 * Returns the product name, using beta name if not hidden.
 * @param productId - The product identifier.
 * @param options - Options to control beta visibility.
 * @returns The product name.
 * (Original: $$s1)
 */
export function getDisplayProductName(productId: any, options?: { hideBeta?: boolean }): string {
  return options?.hideBeta ? getProductName(productId) : getProductNameBeta(productId)
}

/**
 * Formats a sorted list of product names.
 * @param productIds - Array of product identifiers.
 * @param conjunctionType - Type of conjunction for formatting.
 * @returns Formatted product name list.
 * (Original: $$o0)
 */
export function formatSortedProductNames(productIds: string[], conjunctionType: 'conjunction' = 'conjunction'): string {
  const sortedIds = [...productIds].sort(compareProductAccessOrder)
  const names = sortedIds.map(id => getDisplayProductName(id))
  return formatList(names, conjunctionType)
}

// Export aliases for backward compatibility
export const a = formatSortedProductNames
export const o = getDisplayProductName
