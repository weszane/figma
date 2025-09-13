import { parseQuery } from '../905/634134'
import { A as dayjs } from '../905/920142'
import { throwTypeError } from '../figma_app/465776'
import { CC } from '../figma_app/609194'
import { DefaultFilters, FilterKeys, FilterToGroupMap, GroupKeys, GroupToFilterMap, LastEditPeriod, UserRoleMap } from '../figma_app/967319'
/**
 * Maps group keys to their corresponding filter values.
 * Original function: d
 */
function mapGroupKeyToFilterValue(groupKey: string, value: string, groupMap: Record<string, any>): any {
  switch (groupKey) {
    case 'seatType':
    case 'seatChanges':
      return value
    case 'accountType':
      return UserRoleMap[value]
    case 'lastEdit':
      return LastEditPeriod[value]
    case 'billingGroup': {
      const decodedValue = decodeURIComponent(value)
      const matchedKey = Object.keys(groupMap).find(
        key => groupMap[key]?.name === decodedValue,
      )
      if (value === 'unassigned' || value === 'Unassigned')
        return 'Unassigned'
      if (matchedKey)
        return matchedKey
      return null
    }
    case 'newEditor':
      return value === 'true'
    default:
      return null
  }
}

/**
 * Maps filter keys to their corresponding group values.
 * Original function: c
 */
function mapFilterKeyToGroupValue(filterKey: string, value: string, groupMap: Record<string, any>): any {
  switch (filterKey) {
    case 'permissionFilter':
    case 'lastEditFilter':
    case 'newEditorFilter':
    case 'workspaceFilter':
    case 'idpGroupFilter':
    case 'seatTypeFilter':
    case 'seatChangesFilter':
      return value
    case 'licenseGroupFilter':
      return encodeURIComponent(CC(value, groupMap))
    default:
      return null
  }
}

/**
 * Converts a query string to filter object.
 * Original function: $$u2
 * @param queryString
 * @param groupMap
 */
export function setupFiltersFromQuery(
  queryString: string,
  groupMap: Record<string, any>,
): typeof DefaultFilters | null {
  if (!queryString)
    return null
  const query = parseQuery(queryString)
  return Object.keys(query).reduce((filters, groupKey) => {
    if (!(groupKey in GroupKeys))
      return filters
    const filterKey = GroupToFilterMap[groupKey]
    const value = query[groupKey]
    const mappedValue = mapGroupKeyToFilterValue(groupKey, value, groupMap)
    return {
      ...filters,
      ...(mappedValue && { [filterKey]: mappedValue }),
    }
  }, DefaultFilters)
}

/**
 * Converts filter object to group object.
 * Original function: $$p0
 * @param filters
 * @param groupMap
 */
export function setupGroupsFromFilters(
  filters: Record<string, any>,
  groupMap: Record<string, any>,
): Record<string, any> {
  return Object.keys(filters).reduce((groups, filterKey) => {
    const groupKey = FilterToGroupMap[filterKey]
    const value = filters[filterKey]
    return {
      ...groups,
      ...(value && { [groupKey]: mapFilterKeyToGroupValue(filterKey, value, groupMap) }),
    }
  }, {})
}

/**
 * Serializes filters for API usage.
 * Original function: $$_1
 * @param filters
 */
export function serializeFiltersForApi(
  filters: Record<string, any>,
): { filters: string } {
  const result: { filters: Record<string, any> } = { filters: {} }
  // Handle newEditorFilter
  if (filters[FilterKeys.newEditorFilter]) {
    result.filters.new_editor = true
  }
  Object.entries(filters).forEach(([filterKey, value]) => {
    if (value !== null && filterKey !== FilterKeys.newEditorFilter) {
      switch (filterKey) {
        case FilterKeys.licenseGroupFilter:
          result.filters.license_group = value
          break
        case FilterKeys.workspaceFilter:
          result.filters.workspace = value
          break
        case FilterKeys.idpGroupFilter:
          result.filters.idp_group = value
          break
        case FilterKeys.permissionFilter:
          result.filters.permission = value
          break
        case FilterKeys.seatTypeFilter:
          result.filters.seat_type = value
          break
        case FilterKeys.seatChangesFilter:
          result.filters.upgrade_reason = value
          break
        case FilterKeys.lastEditFilter:
          result.filters.last_edit = (() => {
            switch (value) {
              case LastEditPeriod['3mo']:
                return dayjs.subtract(3, 'month')
              case LastEditPeriod['6mo']:
                return dayjs.subtract(6, 'month')
              case LastEditPeriod['1yr']:
                return dayjs.subtract(1, 'year')
              default:
                throwTypeError(value)
            }
          })().utc().format()
          break
      }
    }
  })
  return {
    filters: JSON.stringify(result.filters),
  }
}

// Exported names refactored for clarity and traceability
export const OA = setupGroupsFromFilters // $$p0
export const nG = serializeFiltersForApi // $$_1
export const rT = setupFiltersFromQuery // $$u2
