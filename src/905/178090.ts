/**
 * Enum-like object for resource types used in browsing and searching.
 * Original variable: $$n0
 */
export namespace ResourceTypes {
  /**
   * Resource types available for browsing.
   */
  export const BrowseResourceTypes = {
    FILES: 'files',
    PLUGINS: 'plugins',
    WIDGETS: 'widgets',
    MIXED: 'mixed',
  }

  /**
   * Unique resource types for browsing (excluding 'MIXED').
   */
  export const Unique = Object.keys(BrowseResourceTypes)
    .filter(type => type !== 'MIXED')
    .map(type => BrowseResourceTypes[type])

  /**
   * Resource types available for searching (includes 'PROFILES').
   */
  export const SearchResourceTypes = {
    ...BrowseResourceTypes,
    PROFILES: 'profiles',
  }
}

/**
 * Subset of resource types for specific usage.
 * Original variable: $$r1
 */
export const ResourceTypeSubset = {
  FILES: ResourceTypes.BrowseResourceTypes.FILES,
  PLUGINS: ResourceTypes.BrowseResourceTypes.PLUGINS,
  WIDGETS: ResourceTypes.BrowseResourceTypes.WIDGETS,
}

// Refactored exports for clarity and maintainability
export const L = ResourceTypes // Original export: L
export const t = ResourceTypeSubset // Original export: t
