/**
 * Enum and utility functions for browse and search types.
 * Original variable: $$n0
 */
export enum BrowseType {
  ALL = 'all',
  FIGMA_PARTNER = 'partners',
  FOLLOWING = 'following',
}

/**
 * Groupings for browse and search types.
 * Original object: $$n0.Browse, $$n0.Search
 */
export const Browse = {
  ALL: BrowseType.ALL,
  FIGMA_PARTNER: BrowseType.FIGMA_PARTNER,
  FOLLOWING: BrowseType.FOLLOWING,
}

export const Search = {
  ALL: BrowseType.ALL,
  FIGMA_PARTNER: BrowseType.FIGMA_PARTNER,
}

/**
 * Checks if a type is a valid search type.
 * Original function: $$n0.isSearchType
 * @param type - The type to check.
 * @returns True if type is ALL or FIGMA_PARTNER.
 */
export function isSearchType(type: string): boolean {
  return type === BrowseType.ALL || type === BrowseType.FIGMA_PARTNER
}

export const BrowseUtils = {
  ALL: 'all',
  FIGMA_PARTNER: 'partners',
  FOLLOWING: 'following',
  Browse,
  Search,
  isSearchType,
}
/**
 * Exported grouping for compatibility.
 * Original export: export const Z = $$n0;
 */
export const Z = BrowseUtils
