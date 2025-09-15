/**
 * Enum-like object for sorting options in Browse, Search, and Shared contexts.
 * Original variable: $$n1
 */
export const SortOptions = {
  Shared: {
    POPULAR: 'popular',
    ALL_TIME: 'all_time',
    PUBLISHED_AT: 'published_at',
    RANDOM: 'random',
  },
  Browse: {
    POPULAR: 'popular',
    ALL_TIME: 'all_time',
    PUBLISHED_AT: 'published_at',
    RANDOM: 'random',
  },
  Search: {
    POPULAR: 'popular',
    ALL_TIME: 'all_time',
    PUBLISHED_AT: 'published_at',
    RANDOM: 'random',
    RELEVANCY: 'relevancy',
    PRICE_DESC: 'price_desc',
    PRICE_ASC: 'price_asc',
    NAME: 'name',
    AUTHOR_NAME: 'author_name',
    INSTALL_COUNT: 'install_count',
    RUN_COUNT: 'run_count',
    UPDATED_AT: 'updated_at',
  },
}

/**
 * Returns the 'ALL_TIME' sort option from Browse.
 * Original function: $$i0
 */
export function getAllTimeSortOption(): string {
  return SortOptions.Browse.ALL_TIME
}

// Exported names refactored for clarity and traceability
export const H = getAllTimeSortOption // Original: H
export const e = SortOptions // Original: e
