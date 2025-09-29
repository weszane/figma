import { isEqual } from 'lodash-es'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { idpUserBatchPostAction } from '../905/240853'
import { getI18nString } from '../905/303541'
import { trackEventAnalytics } from '../905/449184'
import { APILoadingStatus } from '../905/520829'
import { subscribeAndAwaitData } from '../905/553831'
import { FlashActions } from '../905/573154'
import { serializeQuery } from '../905/634134'
import { logger } from '../905/651849'
import { createErrorState, createLoadedState, createLoadingState, ResourceStatus } from '../905/723791'
import { generateUUIDv4 } from '../905/871474'
import { setUserInOrgs } from '../905/890368'
import { sortConfigToQuery } from '../905/902560'
import { useAsyncWithReset } from '../905/931050'
import { resourceUtils } from '../905/989992'
import { OrgAdminUserMinimalFieldsView, OrgAdminUserView } from '../figma_app/43951'
import { getOrgUsersList } from '../figma_app/157238'
import { useSubscription } from '../figma_app/288654'
import { useCurrentPrivilegedPlan } from '../figma_app/465071'
import { serializeFiltersForApi } from '../figma_app/585126'
import { organizationAPIService, Wd } from '../figma_app/617654'
import { isFailure, isSuccess } from '../figma_app/851625'
import { useLatestRef } from '../figma_app/922077'
import { getCurrentUserOrgUser } from '../figma_app/951233'
import { DefaultFilters } from '../figma_app/967319'
import { setOrgInvites } from '../figma_app/996356'
// Refactored constants and utilities
const DEBOUNCE_DELAY = 10000

/**
 * Custom error class for aborted operations.
 * Original: class M extends Error {}
 */
class AbortError extends Error {}

/**
 * Utility function to check if both values are truthy.
 * Original: export function $$V4(e, t)
 * @param value1 - First value to check.
 * @param value2 - Second value to check.
 * @returns True if both values are truthy.
 */
export function hasTwoValue(value1: any, value2: any): boolean {
  return !!(value1 && value2)
}

/**
 * Utility function to check if custom templates are allowed.
 * Original: export function $$H1(e)
 * @param state - Redux state.
 * @returns True if custom templates are allowed.
 */
export function canUseCustomTemplates(state: any): boolean {
  const currentOrg = state.currentUserOrgId ? state.orgById[state.currentUserOrgId] : null
  const currentUserOrgUser = getCurrentUserOrgUser(state)
  return !!(currentOrg && currentOrg.are_custom_templates_allowed && currentUserOrgUser)
}

/**
 * Creates query parameters for org users.
 * Original: function z(e, { searchQuery: t, sort: r, filter: n, firstPageSize: i }, a)
 * @param orgId - Organization ID.
 * @param options - Query options.
 * @param refetchToken - Optional refetch token.
 * @returns Query object.
 */
function createOrgUsersQuery(
  orgId: string,
  { searchQuery, sort, filter, firstPageSize }: { searchQuery?: string, sort?: any, filter?: any, firstPageSize?: number },
  refetchToken?: string | null,
) {
  return {
    orgId,
    firstPageSize: firstPageSize || 25,
    refetchToken: refetchToken || null,
    queryParams: `${serializeQuery({
      ...(searchQuery && { search_query: searchQuery }),
      ...(sort && sortConfigToQuery(sort)),
      ...(filter && serializeFiltersForApi(filter)),
    })}`,
  }
}

/**
 * Dispatches org users data to Redux.
 * Original: let U = (e, t, r) => { ... }
 * @param orgId - Organization ID.
 * @param dispatch - Redux dispatch function.
 * @param users - Array of users.
 */
function dispatchOrgUsersData(orgId: string, dispatch: any, users: any[]) {
  const orgUsers: any[] = []
  const idpUsers: any[] = []
  const orgInvites: any[] = []

  users.forEach((user) => {
    switch (user.type) {
      case Wd.ORG_USER:
        if ('org_id' in user) {
          orgUsers.push(user)
        }
        break
      case Wd.IDP_USER:
        idpUsers.push(user)
        break
      case Wd.ORG_INVITE:
        orgInvites.push(user)
        break
    }
  })

  dispatch(setUserInOrgs({ orgUsers, orgId }))
  if (idpUsers.length) {
    dispatch(idpUserBatchPostAction({ idpUsers }))
  }
  if (orgInvites.length) {
    dispatch(setOrgInvites(orgInvites))
  }
}

/**
 * Fetches paginated org users from API.
 * Original: let F = async (e, t, r) => { ... }
 * @param dispatch - Redux dispatch function.
 * @param orgId - Organization ID.
 * @param options - Fetch options.
 * @returns Promise resolving to users data or error.
 */
async function fetchOrgUsersPaginated(
  dispatch: any,
  orgId: string,
  {
    cursor,
    searchQuery,
    sort,
    filter,
    firstPageSize,
    signal,
    minimalFields,
    extraLoggingData = {},
  }: {
    cursor: string | null
    searchQuery?: string
    sort?: any
    filter?: any
    firstPageSize?: number
    signal?: AbortSignal
    minimalFields?: boolean
    extraLoggingData?: any
  },
) {
  const pageSize = cursor === null ? (firstPageSize || 25) : null

  try {
    const startTime = Date.now()
    trackEventAnalytics('Org Admin Members V2 Fetch Initiated', {
      orgId,
      ...extraLoggingData,
      isInitialLoad: cursor === null,
      minimalFields,
    })

    const response = await organizationAPIService.getOrgUsersPaginatedV2({
      orgId,
      pageSize,
      after: cursor,
      searchQuery,
      sort: sort ? sortConfigToQuery(sort) : undefined,
      filter: filter ? serializeFiltersForApi(filter) : undefined,
      minimalFields,
    }) as any

    trackEventAnalytics('Org Admin Members V2 Fetch Succeeded', {
      orgId,
      durationMs: Date.now() - startTime,
      ...extraLoggingData,
      isInitialLoad: cursor === null,
      minimalFields,
    })

    const users = [...(response.data.meta.users || [])]
    const newCursor = response.data.meta.cursor
    const totalUserCount = response.data.meta.totalUserCount

    if (signal?.aborted) {
      throw new AbortError()
    }

    return { users, newCursor, totalUserCount }
  }
  catch (error: any) {
    if (!(error instanceof AbortError)) {
      const errorMessage = error.data?.status === 422 ? error.data?.message : error.message
      dispatch(FlashActions.error(errorMessage || getI18nString('org_user_actions.an_error_occurred_fetching_org_users')))
    }
    throw error
  }
}

/**
 * Fetches and dispatches org users.
 * Original: export async function $$j5(e, t, r)
 * @param dispatch - Redux dispatch function.
 * @param orgId - Organization ID.
 * @param options - Fetch options.
 * @returns Promise resolving to users data.
 */
export async function fetchAndDispatchOrgUsers(
  dispatch: any,
  orgId: string,
  options: Parameters<typeof fetchOrgUsersPaginated>[2],
) {
  const { users, newCursor, totalUserCount } = await fetchOrgUsersPaginated(dispatch, orgId, options)
  dispatchOrgUsersData(orgId, dispatch, users)
  return { users, newCursor, totalUserCount }
}

// Hooks section

/**
 * Hook to get current user org user.
 * Original: export function $$P3()
 * @returns Current user org user.
 */
export function useCurrentUserOrgUser() {
  return useSelector((state: any) => getCurrentUserOrgUser(state))
}

/**
 * Hook for org users filter counts.
 * Original: export function $$D7(e, t, r)
 * @param orgId - Organization ID.
 * @param searchQuery - Search query.
 * @param filters - Filter options.
 * @returns Filter counts and refetch function.
 */
export function useOrgUsersFilterCounts(
  orgId: string,
  searchQuery: string,
  filters: { licenseGroupFilter?: string, workspaceFilter?: string, permissionFilter?: string, seatTypeFilter?: string },
) {
  const [filterCountsViewResult, setFilterCountsViewResult] = useState(createLoadingState())
  const timeoutRef = useRef<NodeJS.Timeout | number | null>(null)

  const clearTimeoutRef = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  const fetchFilterCounts = useCallback(async () =>
    organizationAPIService.getOrgUsersFilterCounts({
      searchQuery,
      licenseGroupId: filters.licenseGroupFilter || undefined,
      workspaceId: filters.workspaceFilter || undefined,
      permission: filters.permissionFilter || undefined,
      orgId,
      seatType: filters.seatTypeFilter || undefined,
    }), [filters.licenseGroupFilter, filters.workspaceFilter, filters.permissionFilter, filters.seatTypeFilter, orgId, searchQuery])

  const asyncResult = useAsyncWithReset(() => {
    clearTimeoutRef()
    return fetchFilterCounts()
  }, [fetchFilterCounts])

  useEffect(() => {
    if (isSuccess(asyncResult)) {
      setFilterCountsViewResult(createLoadedState(asyncResult.value.data.meta))
    }
    else if (isFailure(asyncResult)) {
      setFilterCountsViewResult(createErrorState([]))
    }
    else {
      setFilterCountsViewResult(createLoadingState())
    }
  }, [asyncResult])

  const queueFilterCountsRefetch = useCallback(() => {
    clearTimeoutRef()
    timeoutRef.current = setTimeout(async () => {
      setFilterCountsViewResult(createLoadingState())
      try {
        const result = await fetchFilterCounts()
        setFilterCountsViewResult(createLoadedState(result.data.meta))
      }
      catch {
        setFilterCountsViewResult(createErrorState([]))
      }
    }, DEBOUNCE_DELAY)
  }, [fetchFilterCounts])

  return { filterCountsViewResult, queueFilterCountsRefetch }
}

/**
 * Hook for fetching org admins.
 * Original: export function $$k2({ orgId: e, includeLicenseAdmins: t = !0 })
 * @param options - Options for fetching admins.
 * @returns Fetch status and org admins.
 */
export function useOrgAdmins({ orgId, includeLicenseAdmins = true }: { orgId: string, includeLicenseAdmins?: boolean }) {
  const [isLoading, setIsLoading] = useState(false)
  const [isFetched, setIsFetched] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [orgAdmins, setOrgAdmins] = useState<any[]>([])
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (isFetched || isLoading || hasError)
      return

    const fetchAdmins = async () => {
      setIsLoading(true)
      try {
        const response = await organizationAPIService.getAdmins({
          includeLicenseAdmins: !!includeLicenseAdmins,
          orgId,
        })
        setOrgAdmins(response.data.meta as any)
        setIsFetched(true)
      }
      catch {
        dispatch(FlashActions.error(getI18nString('org_user_actions.an_error_occurred_fetching_org_admins')))
        setHasError(true)
      }
      finally {
        setIsLoading(false)
      }
    }

    fetchAdmins()
  }, [orgId, includeLicenseAdmins, isFetched, isLoading, hasError, dispatch])

  return { isFetched, orgAdmins }
}

/**
 * Hook for getting org users.
 * Original: export function $$B6(e)
 * @param options - Options for fetching users.
 * @returns Status, users, and fetch functions.
 */
export function useOrgUsers(options: { searchQuery?: string, sort?: any, filter?: any, firstPageSize?: number }) {
  const dispatch = useDispatch<AppDispatch>()
  const currentOrgId = useSelector((state: any) => state.currentUserOrgId)
  const privilegedPlan = useCurrentPrivilegedPlan('useGetOrgUsers').unwrapOr(null)
  const campfireModelEnabledAt = privilegedPlan ? privilegedPlan.campfireModelEnabledAt : null

  const query = useMemo(() => createOrgUsersQuery(currentOrgId, options), [currentOrgId, options])
  const subscription = useSubscription(OrgAdminUserView, query)
  const [manualRefetchResult, setManualRefetchResult] = useState<any>(null)

  const refetch = useCallback(() => {
    subscribeAndAwaitData(OrgAdminUserView, {
      ...query,
      refetchToken: generateUUIDv4(),
    }).then((data) => {
      setManualRefetchResult(resourceUtils.loaded(data))
    }).catch((error) => {
      throw error
    })
  }, [query])

  const data = manualRefetchResult ?? subscription
  const usersList = useMemo(() => (data.data ? getOrgUsersList(data.data, campfireModelEnabledAt) : []), [data.data, campfireModelEnabledAt])

  useEffect(() => {
    if (data.status === 'errors') {
      dispatch(FlashActions.error(getI18nString('org_user_actions.an_error_occurred_fetching_org_users')))
    }
  }, [dispatch, data.status])

  useEffect(() => {
    if (data.status === 'loaded') {
      dispatchOrgUsersData(currentOrgId, dispatch, usersList)
    }
  }, [dispatch, usersList, data.status, currentOrgId])

  const orgUsersByOrgId = useSelector((state: any) => state.orgUsersByOrgId[currentOrgId])
  const idpUserById = useSelector((state: any) => state.idpUserById)

  const sortedUsers = useMemo(() => {
    const result: any[] = []
    const seenIds = new Set()
    const duplicateIds: string[] = []

    usersList.forEach((user: any) => {
      if (user.type === Wd.ORG_USER) {
        const orgUser = orgUsersByOrgId?.[user.user_id]
        if (orgUser) {
          if (seenIds.has(user.user_id)) {
            duplicateIds.push(user.user_id)
          }
          else {
            result.push(orgUser)
            seenIds.add(user.user_id)
          }
        }
        else {
          logger.warn(`sortedUsers returned a user (${user.type}-${user.id}) that is not in redux`)
        }
      }
      else {
        const idpUser = idpUserById?.[user.id]
        if (idpUser && ((user.type === Wd.ORG_INVITE && idpUser.isOrgInvite) || (user.type === Wd.IDP_USER && !idpUser.isOrgInvite))) {
          if (seenIds.has(user.id)) {
            duplicateIds.push(user.id)
          }
          else {
            result.push(idpUser)
            seenIds.add(user.id)
          }
        }
        else {
          logger.warn(`sortedUsers returned a user (${user.type}-${user.id}) that is not in redux`)
        }
      }
    })

    if (duplicateIds.length) {
      logger.error(`ERROR: Duplicate user result in sortedUsers: ${duplicateIds}.`)
    }

    return result
  }, [idpUserById, orgUsersByOrgId, usersList])

  const fetchMore = useCallback(() => {
    data.data?.orgAdminUsers?.loadNext(100)
  }, [data.data?.orgAdminUsers])

  const hasNextPage = data.data?.orgAdminUsers?.hasNextPage() && !data.data.orgAdminUsers.isLoadingNextPage
  const fetchMoreFn = hasNextPage ? fetchMore : undefined

  const queueRefetch = useCallback((delay = DEBOUNCE_DELAY) => setTimeout(refetch, delay), [refetch])

  return {
    status: data.status,
    sortedUsers,
    fetchMore: fetchMoreFn,
    queueRefetch,
  }
}

/**
 * Hook for selectable users.
 * Original: export function $$G0({ searchQuery: e, filter: t, selectedAll: r })
 * @param options - Options for selectable users.
 * @returns Status, users, and total selectable.
 */
export function useSelectableUsers({
  searchQuery,
  filter,
  selectedAll,
}: {
  searchQuery: string
  filter: any
  selectedAll: boolean
}) {
  const currentOrgId = useSelector((state: any) => state.currentUserOrgId)
  const [usersMap, setUsersMap] = useState<Record<string, any>>({})
  const searchQueryRef = useLatestRef(searchQuery)
  const filterRef = useLatestRef(filter)
  const selectedAllRef = useLatestRef(selectedAll)

  // Note: isEqual is assumed to be imported or available; if not, implement or import a deep equal function.
  const hasChanged = searchQueryRef !== searchQuery || !isEqual(filterRef, filter) || (!selectedAllRef && selectedAll)

  const combinedFilters = { ...DefaultFilters, ...filter }
  const isProvisional = !selectedAll || combinedFilters.permissionFilter === 'provisional'

  useEffect(() => {
    if (hasChanged) {
      setUsersMap({})
    }
  }, [hasChanged])

  const query = useMemo(() => createOrgUsersQuery(currentOrgId, { searchQuery, filter }), [filter, currentOrgId, searchQuery])
  const subscription = useSubscription(OrgAdminUserMinimalFieldsView, query)

  let status = APILoadingStatus.LOADING
  if (subscription.status === 'loaded' && subscription.data?.orgAdminUsersMinimalFields?.status === ResourceStatus.Loaded) {
    status = APILoadingStatus.SUCCESS
  }
  else if (subscription.status === 'errors' || subscription.data?.orgAdminUsersMinimalFields?.status === ResourceStatus.Error) {
    status = APILoadingStatus.FAILURE
  }

  useEffect(() => {
    if (status !== APILoadingStatus.SUCCESS)
      return

    const users = subscription.data?.orgAdminUsersMinimalFields?.status === ResourceStatus.Loaded
      ? subscription.data.orgAdminUsersMinimalFields.data.map((item: any) => {
          const orgUser = item.orgUser
          return orgUser
            ? {
                id: orgUser.id,
                type: Wd.ORG_USER,
                user: {
                  id: orgUser.user.id,
                  handle: orgUser.user.handle,
                  img_url: orgUser.user.imgUrl,
                  email: orgUser.user.email,
                },
              }
            : null
        }).filter(Boolean)
      : []

    setUsersMap((prev) => {
      const newMap = hasChanged ? {} : { ...prev }
      users.forEach((user: any) => {
        newMap[user.id] = user
      })
      return newMap
    })

    if (subscription.data?.orgAdminUsersMinimalFields?.status === ResourceStatus.Loaded
      && subscription.data.orgAdminUsersMinimalFields.data.hasNextPage()) {
      subscription.data.orgAdminUsersMinimalFields.data.loadNext(400)
    }
  }, [status, subscription.data, hasChanged])

  if (isProvisional) {
    return {
      status: APILoadingStatus.INIT,
      users: [],
      totalSelectable: null,
    }
  }

  const isFullyLoaded = status === APILoadingStatus.SUCCESS
    && subscription.data
    && subscription.data.orgAdminUsersMinimalFields
    && subscription.data.orgAdminUsersMinimalFields.status === ResourceStatus.Loaded
    && subscription.data.orgAdminUsersMinimalFields.data
    && !subscription.data.orgAdminUsersMinimalFields.data.hasNextPage()

  const totalSelectable = isFullyLoaded ? Object.keys(usersMap).length : null

  return {
    status: isFullyLoaded ? APILoadingStatus.SUCCESS : status === APILoadingStatus.SUCCESS ? APILoadingStatus.LOADING : status,
    users: Object.values(usersMap),
    totalSelectable,
  }
}

// Updated exports with refactored names
export const Ew = useSelectableUsers
export const LQ = canUseCustomTemplates
export const YM = useOrgAdmins
export const a9 = useCurrentUserOrgUser
export const ar = hasTwoValue
export const n = fetchAndDispatchOrgUsers
export const oo = useOrgUsers
export const vu = useOrgUsersFilterCounts
