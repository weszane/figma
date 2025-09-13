import { parseQuery } from '../905/634134'
import { ColumnName, DateColumns, DefaultSortConfig, SortDirection } from '../figma_app/967319'

/**
 * Parses the sort configuration from a query string.
 * Original function name: $$a0
 * @param query - The query string to parse.
 * @returns The sort configuration object.
 */
export function parseSortConfig(query?: string) {
  if (!query)
    return DefaultSortConfig

  const parsed = parseQuery(query)
  const sortBy = parsed.sort_by
  let columnName: string = ColumnName.NAME

  if (
    sortBy
    && Object.values(ColumnName).includes(sortBy)
    && sortBy !== ColumnName.SEARCH_SCORE
  ) {
    columnName = sortBy
  }

  const isDesc = parsed.order_by?.toLowerCase() === SortDirection.DESC
  const isDateColumn = DateColumns.includes(columnName)

  return {
    columnName,
    isReversed: isDateColumn ? !isDesc : isDesc,
  }
}

/**
 * Converts a sort configuration object to a query object.
 * Original function name: $$s1
 * @param config - The sort configuration object.
 * @returns The query object for sorting.
 */
export function sortConfigToQuery(config: { columnName: string, isReversed: boolean }) {
  const isDesc
    = config.columnName === 'score' || DateColumns.includes(config.columnName)
      ? !config.isReversed
      : config.isReversed

  return {
    ...(config.columnName !== ColumnName.NAME && {
      sort_by: config.columnName,
    }),
    ...(isDesc && {
      order_by: SortDirection.DESC,
    }),
  }
}

// Refactored exports for clarity and consistency
export const E = parseSortConfig
export const n = sortConfigToQuery
