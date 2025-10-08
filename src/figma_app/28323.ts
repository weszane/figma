import { isLoading, isNullOrFailure } from "../905/18797"
import { createActionCreator } from "../905/73481"
import { getPlanUserAtomFamily } from "../905/276025"
import { VisualBellActions } from "../905/302958"
import { getI18nString } from "../905/303541"
import { createOptimistThunk } from "../905/350402"
import { waitForAtomStore } from "../905/618914"
import { FMemberRoleType } from "../figma_app/191312"
import { checkOrgUserPermission } from "../figma_app/465071"
import { organizationAPIService } from "../figma_app/617654"
import { EO } from "../figma_app/684446"
import { loadingStatePutFailure, loadingStatePutLoading, loadingStatePutSuccess } from "../figma_app/714946"

// Origin: LICENSE_GROUP actions and thunk from figma_app/28323.ts
// Changes: Renamed variables, added TypeScript types/interfaces, simplified logic, added comments, improved readability, noted assumed dependencies.

// Assumed dependencies (from imports):
// - createActionCreator, createOptimistThunk, waitForAtomStore, getPlanUserAtomFamily, VisualBellActions, getI18nString, isLoading, isNullOrFailure
// - FMemberRoleType, checkOrgUserPermission, organizationAPIService, EO, loadingStatePutFailure, loadingStatePutLoading, loadingStatePutSuccess

// --- Action Creators ---

export const licenseGroupDelete = createActionCreator("LICENSE_GROUP_DELETE")
export const licenseGroupUpdate = createActionCreator("LICENSE_GROUP_UPDATE")
export const licenseGroupSet = createActionCreator("LICENSE_GROUP_SET")

// --- Thunk for fetching license groups ---

/**
 * Optimist thunk to fetch license groups for the current user's organization.
 * Dispatches loading, success, or failure actions as appropriate.
 */
export const fetchLicenseGroupsThunk = createOptimistThunk(
  async (context, extra) => {
    const { currentUserOrgId } = context.getState()
    if (currentUserOrgId) {
      await fetchLicenseGroupsForOrg(context, extra, currentUserOrgId)
    }
  },
)

/**
 * Fetches license groups for a specific organization.
 * Handles permission checks, loading state, and error reporting.
 */
async function fetchLicenseGroupsForOrg(context: any, extra: any, orgId: any) {
  const { orgById, loadingState } = context.getState()

  // Wait for plan user atom store to be ready
  const planUser = await waitForAtomStore(getPlanUserAtomFamily(true))
  const hasPermission = checkOrgUserPermission(planUser, FMemberRoleType.MEMBER)

  if (!orgId)
    return

  const org = orgById[orgId]
  const orgKey = EO(org.id)

  // Only proceed if org exists, bigma is enabled, user has permission,
  // and either forceRefetch is set or loading state is not success/failure and not currently loading.
  if (
    org
    && org.bigma_enabled
    && hasPermission
    && (extra.forceRefetch || isNullOrFailure(loadingState, orgKey))
    && !isLoading(loadingState, orgKey)
  ) {
    context.dispatch(
      loadingStatePutLoading({
        key: EO(orgId),
      }),
    )

    try {
      // Fetch license groups from API
      const response = await organizationAPIService.getLicenseGroups({
        currentOrgId: orgId,
      })
      const licenseGroupsMeta = response.data.meta

      context.dispatch(licenseGroupSet(licenseGroupsMeta))
      context.dispatch(
        loadingStatePutSuccess({
          key: EO(orgId),
        }),
      )
    }
    catch (error: any) {
      // Handle API error, show visual bell notification
      context.dispatch(
        VisualBellActions.enqueue({
          type: "get-license-groups",
          message:
            error.data?.message
            || getI18nString(
              "license_group.an_error_occurred_while_fetching_workspaces",
            ),
          error: true,
        }),
      )
      context.dispatch(
        loadingStatePutFailure({
          key: EO(orgId),
        }),
      )
    }
  }
}

// --- Exports ---

export const Jt = fetchLicenseGroupsThunk
export const hZ = licenseGroupSet
export const w4 = licenseGroupDelete
export const yo = licenseGroupUpdate
