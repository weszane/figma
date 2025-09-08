import { useCallback, useEffect, useState } from 'react'
import { getRequest } from '../905/910117'

/**
 * Default page size for pagination.
 * (Original: $$a5)
 */
export const DEFAULT_PAGE_SIZE = 25

/**
 * Checks if there are more pages to fetch.
 * (Original: $$c4)
 * @param state - The pagination state object.
 * @returns True if there are more pages, false otherwise.
 */
export function hasMorePages(state: { pagination?: { next_page?: string } }) {
  return !!(!state?.pagination || state.pagination.next_page)
}

/**
 * Pagination direction constants.
 * (Original: $$o0, $$l3)
 */
export const PAGINATION_NEXT = 'next'
export const PAGINATION_PREV = 'prev'
interface Pagination {
  next_page?: string
  prev_page?: string
  pagination?: Pagination
}
interface PaginationData<T> {
  pagination?: Pagination
  meta?: Pagination
  data: T
}
/**
 * Fetches paginated data from the API.
 * (Original: $$d1)
 * @param endpoint - API endpoint.
 * @param pageSize - Number of items per page.
 * @param state - Current pagination state.
 * @param direction - Pagination direction ('next' or 'prev').
 * @returns Promise resolving to paginated meta data.
 */
export function fetchPaginatedData<T extends PaginationData<T>>(endpoint: string, pageSize: number, state?: { pagination?: { next_page?: string, prev_page?: string } }, direction: string = PAGINATION_NEXT): Promise<any> {
  return new Promise((resolve, reject) => {
    let pagination = state && state.pagination
    let pageUrl
      = pagination && (direction === PAGINATION_PREV ? pagination.prev_page : pagination.next_page)

    if (pagination == null || pageUrl) {
      pageUrl
        = pageUrl
          || `${endpoint}${!endpoint.includes('?') ? '?' : '&'}page_size=${pageSize}`

      getRequest<T>(pageUrl).then(
        ({ data }) => {
          // Type assertion to ensure 'data' has 'pagination' and 'meta'
          const typedData = data
          const apiPagination = typedData.pagination
          if (pagination == null) {
            pagination = apiPagination
          }
          else if (direction === PAGINATION_PREV) {
            if (apiPagination.prev_page)
              pagination.prev_page = apiPagination.prev_page
          }
          else {
            pagination.next_page = apiPagination.next_page
          }
          typedData.meta.pagination = pagination
          resolve(typedData.meta)
        },
        reject,
      )
    }
  })
}

/**
 * React hook for paginated API fetching.
 * (Original: $$s2)
 * @param endpoint - API endpoint.
 * @param onError - Optional error callback.
 * @param pageSize - Optional page size.
 * @returns Object with fetchNext and hasMore properties.
 */
export function usePaginatedApi(endpoint: string, onError?: (error: any) => void, pageSize?: number) {
  const [state, setState] = useState<{ pagination?: { next_page?: string, prev_page?: string } }>({})

  useEffect(() => {
    setState({})
  }, [endpoint])

  const fetchNext = useCallback(
    (forceRefresh = false) =>
      hasMorePages(state) || forceRefresh
        ? fetchPaginatedData(
            endpoint,
            pageSize || DEFAULT_PAGE_SIZE,
            forceRefresh ? {} : state,
            PAGINATION_NEXT,
          )
            .then((result) => {
              setState({
                pagination: {
                  next_page: result.pagination?.next_page,
                  prev_page: result.pagination?.prev_page,
                },
              })
              delete result.pagination
              return result
            })
            .catch((error) => {
              onError?.(error)
              return Promise.resolve({})
            })
        : Promise.resolve({}),
    [endpoint, onError, state, pageSize],
  )

  return {
    fetchNext,
    hasMore: hasMorePages(state),
  }
}

// Export aliases for backward compatibility
export const AS = PAGINATION_NEXT
export const En = fetchPaginatedData
export const WQ = usePaginatedApi
export const mL = PAGINATION_PREV
export const u9 = hasMorePages
export const vs = DEFAULT_PAGE_SIZE
