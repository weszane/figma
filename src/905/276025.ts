import { shallowEqual } from 'react-redux'
import { createReduxSubscriptionAtomWithState } from '../905/270322'
import { analyticsEventManager } from '../905/449184'
import { resolveTeamId } from '../905/515860'
import { resourceUtils } from '../905/989992'
import { atom, createRemovableAtomFamily } from '../figma_app/27355'
import { OrgByIdForPlanUserView, OrgByIdForPlanView, TeamByIdForPlanUserView, TeamByIdForPlanView } from '../figma_app/43951'
import { FOrganizationLevelType } from '../figma_app/191312'
import { getPlanFeatures } from '../figma_app/428858'
import { isIncludedView, isOrgView } from '../figma_app/707808'
import { getResourceDataOrFallback } from '../905/419236'
/**
 * Atoms and resource utilities for plan, plan public info, and plan user data.
 * Original variable names: h, g, f, _, A, y, b, v, I, E, x, S, $$w7, $$C3, $$T1, $$k5, $$R0, $$N2, $$P6, $$O4
 */

/** Atom for current team id (original: h) */
const teamIdAtom = createReduxSubscriptionAtomWithState(e => resolveTeamId(e))

/** Atom for current user org id (original: g) */
const userOrgIdAtom = createReduxSubscriptionAtomWithState(e => e.currentUserOrgId)

/** Atom for parent org id or fallback logic (original: f) */
const parentOrgIdAtom = createReduxSubscriptionAtomWithState(e =>
  e.openFile
    ? e.openFile.parentOrgId
    : e.selectedView?.view && (isIncludedView(e.selectedView) || isOrgView(e.selectedView))
      ? e.currentUserOrgId
      : null,
)

/** Atom for team id or fallback logic (original: _) */
const teamOrOrgIdAtom = createReduxSubscriptionAtomWithState(e =>
  e.openFile
    ? e.openFile.parentOrgId
      ? null
      : e.openFile.teamId
    : e.selectedView?.view && (isIncludedView(e.selectedView) || isOrgView(e.selectedView))
      ? e.currentUserOrgId
        ? null
        : e.currentTeamId
      : null,
)

/**
 * Generates a resource error result.
 * Original: A
 * @param errorMsg Error message
 */
function createResourceError(errorMsg: string) {
  return [{
    code: 'nonNullableResult',
    path: [],
    error: new Error(errorMsg),
    retriable: false,
  }]
}

/**
 * Wraps error result in a suspendable resource.
 * Original: y
 * @param errorMsg Error message
 */
function errorSuspendableResource(errorMsg: string) {
  return resourceUtils.errorSuspendable(createResourceError(errorMsg), {
    release: () => { },
  })
}

/**
 * Gets plan features for org or team.
 * Original: b
 */
function getPlanFeaturesResource(getResource: any, orgId: string | null, teamId: string | null) {
  if (orgId) {
    const orgResource = getResource(OrgByIdForPlanView.Query({ orgId }))
    if (orgResource.status === 'errors') {
      analyticsEventManager.trackDefinedEvent('plans.current_plan_view_error', {
        viewStatus: orgResource.status,
        viewType: 'orgInfo',
        publicInfo: false,
        resolvedEmpty: false,
      })
    }
    try {
      return orgResource.transform((data: any) => {
        const plan = data.orgInfo?.plan
        const features = plan ? getPlanFeatures(plan) : null
        if (features === null) {
          analyticsEventManager.trackDefinedEvent('plans.current_plan_view_error', {
            viewStatus: orgResource.status,
            viewType: 'orgInfo',
            publicInfo: false,
            resolvedEmpty: true,
          })
          return new Error('No org plan found')
        }
        return features
      })
    }
    catch (err: any) {
      return errorSuspendableResource(err.message)
    }
  }
  else {
    if (!teamId)
      return errorSuspendableResource('No plan found, no org or team id')
    const teamResource = getResource(TeamByIdForPlanView.Query({ teamId }))
    if (teamResource.status === 'errors') {
      analyticsEventManager.trackDefinedEvent('plans.current_plan_view_error', {
        viewStatus: teamResource.status,
        viewType: 'teamLimitedInfo',
        publicInfo: false,
        resolvedEmpty: false,
      })
    }
    try {
      return teamResource.transform((data: any) => {
        const plan = data.teamLimitedInfo?.plan
        const features = plan ? getPlanFeatures(plan) : null
        if (features === null) {
          analyticsEventManager.trackDefinedEvent('plans.current_plan_view_error', {
            viewStatus: teamResource.status,
            viewType: 'teamLimitedInfo',
            publicInfo: false,
            resolvedEmpty: true,
          })
          return new Error('No team plan found')
        }
        return features
      })
    }
    catch (err: any) {
      return errorSuspendableResource(err.message)
    }
  }
}

/**
 * Gets plan public info for org or team.
 * Original: v
 */
function getPlanPublicInfoResource(getResource: any, orgId: string | null, teamId: string | null) {
  if (orgId) {
    const orgResource = getResource(OrgByIdForPlanView.Query({ orgId }))
    if (orgResource.status === 'errors') {
      analyticsEventManager.trackDefinedEvent('plans.current_plan_view_error', {
        viewStatus: orgResource.status,
        viewType: 'org',
        publicInfo: true,
        resolvedEmpty: false,
      })
    }
    try {
      return orgResource.transform((data: any) => {
        const publicInfo = getResourceDataOrFallback(data?.orgPublicInfo, null)?.planPublicInfo ?? null
        if (publicInfo === null) {
          analyticsEventManager.trackDefinedEvent('plans.current_plan_view_error', {
            viewStatus: orgResource.status,
            viewType: 'org',
            publicInfo: true,
            resolvedEmpty: true,
          })
          return new Error('No org plan public info found')
        }
        return publicInfo
      })
    }
    catch (err: any) {
      return errorSuspendableResource(err.message)
    }
  }
  else {
    if (!teamId)
      return errorSuspendableResource('No plan public info found, no org or team id')
    const teamResource = getResource(TeamByIdForPlanView.Query({ teamId }))
    if (teamResource.status === 'errors') {
      analyticsEventManager.trackDefinedEvent('plans.current_plan_view_error', {
        viewStatus: teamResource.status,
        viewType: 'team',
        publicInfo: true,
        resolvedEmpty: false,
      })
    }
    try {
      return teamResource.transform((data: any) => {
        const publicInfo = getResourceDataOrFallback(data?.teamPublicInfo, null)?.planPublicInfo ?? null
        if (publicInfo === null) {
          analyticsEventManager.trackDefinedEvent('plans.current_plan_view_error', {
            viewStatus: teamResource.status,
            viewType: 'team',
            publicInfo: true,
            resolvedEmpty: true,
          })
          return new Error('No team plan public info found')
        }
        return publicInfo
      })
    }
    catch (err: any) {
      return errorSuspendableResource(err.message)
    }
  }
}

/**
 * Gets current plan user info for org or team.
 * Original: I
 */
function getPlanUserResource(getResource: any, orgId: string | null, teamId: string | null) {
  if (orgId) {
    const orgResource = getResource(OrgByIdForPlanUserView.Query({ orgId }))
    if (orgResource.status === 'errors') {
      analyticsEventManager.trackDefinedEvent('plans.current_plan_user_view_error', {
        viewStatus: orgResource.status,
        viewType: 'org',
        publicInfo: false,
        resolvedEmpty: false,
      })
    }
    try {
      return orgResource.transform((data: any) => {
        const user = data.orgPublicInfo?.currentPlanUser ?? null
        if (user === null) {
          analyticsEventManager.trackDefinedEvent('plans.current_plan_user_view_error', {
            viewStatus: orgResource.status,
            viewType: 'org',
            publicInfo: false,
            resolvedEmpty: true,
          })
          return new Error('No org current plan user found')
        }
        return user
      })
    }
    catch (err: any) {
      return errorSuspendableResource(err.message)
    }
  }
  else {
    if (!teamId)
      return errorSuspendableResource('No plan user found, no org or team id')
    const teamResource = getResource(TeamByIdForPlanUserView.Query({ teamId }))
    if (teamResource.status === 'errors') {
      analyticsEventManager.trackDefinedEvent('plans.current_plan_user_view_error', {
        viewStatus: teamResource.status,
        viewType: 'team',
        publicInfo: false,
        resolvedEmpty: false,
      })
    }
    try {
      return teamResource.transform((data: any) => {
        const user = data.teamPublicInfo?.currentPlanUser ?? null
        if (user === null) {
          analyticsEventManager.trackDefinedEvent('plans.current_plan_user_view_error', {
            viewStatus: teamResource.status,
            viewType: 'team',
            publicInfo: false,
            resolvedEmpty: true,
          })
          return new Error('No team current plan user found')
        }
        return user
      })
    }
    catch (err: any) {
      return errorSuspendableResource(err.message)
    }
  }
}

/**
 * Atom family for plan public info resource.
 * Original: E
 */
function planPublicInfoAtomFamily(useTeam: boolean) {
  return createRemovableAtomFamily(key => atom((get) => {
    let teamId: string | null
    let orgId: string | null
    if (key) {
      if (useTeam) {
        teamId = get(teamOrOrgIdAtom)
        orgId = get(parentOrgIdAtom)
      }
      else {
        teamId = get(teamIdAtom)
        orgId = get(userOrgIdAtom)
      }
      return getPlanPublicInfoResource(get, orgId, teamId)
    }
    return resourceUtils.disabledSuspendable({ release: () => { } })
  }))
}

/**
 * Atom family for plan features resource.
 * Original: x
 */
function planFeaturesAtomFamily(useTeam: boolean) {
  return createRemovableAtomFamily(key => atom((get) => {
    let teamId: string | null
    let orgId: string | null
    if (key) {
      if (useTeam) {
        teamId = get(teamOrOrgIdAtom)
        orgId = get(parentOrgIdAtom)
      }
      else {
        teamId = get(teamIdAtom)
        orgId = get(userOrgIdAtom)
      }
      return getPlanFeaturesResource(get, orgId, teamId)
    }
    return resourceUtils.disabledSuspendable({ release: () => { } })
  }))
}

/**
 * Atom family for plan user resource.
 * Original: S
 */
function planUserAtomFamily(useTeam: boolean) {
  return createRemovableAtomFamily(key => atom((get) => {
    let teamId: string | null
    let orgId: string | null
    if (key) {
      if (useTeam) {
        teamId = get(teamOrOrgIdAtom)
        orgId = get(parentOrgIdAtom)
      }
      else {
        teamId = get(teamIdAtom)
        orgId = get(userOrgIdAtom)
      }
      return getPlanUserResource(get, orgId, teamId)
    }
    return resourceUtils.disabledSuspendable({ release: () => { } })
  }))
}

// Exported atoms (original: $$w7, $$C3, $$T1, $$k5, $$R0, $$N2, $$P6, $$O4)
export const getPlanFeaturesAtomFamily = planFeaturesAtomFamily(false)
export const getPlanUserAtomFamily = planUserAtomFamily(false)
export const getPlanPublicInfoAtomFamily = planPublicInfoAtomFamily(false)
export const getPlanFeaturesTeamAtomFamily = planFeaturesAtomFamily(true)
export const getPlanUserTeamAtomFamily = planUserAtomFamily(true)
export const getPlanPublicInfoTeamAtomFamily = planPublicInfoAtomFamily(true)
export const zl = getPlanFeaturesAtomFamily
export const gq = getPlanUserAtomFamily
export const KK = getPlanPublicInfoAtomFamily
export const mZ = getPlanFeaturesTeamAtomFamily
export const Ji = getPlanUserTeamAtomFamily
export const T_ = getPlanPublicInfoTeamAtomFamily
export const oy = parentOrgIdAtom
export const hS = teamOrOrgIdAtom

/**
 * Atom families for org/team level plan features, public info, and user.
 * These are not exported, but can be grouped for clarity.
 */

// Plan features by org/team level
// const planFeaturesByLevelAtomFamily = createRemovableAtomFamily(e => atom((get) => {
//   if (!e) {
//     return resourceUtils.disabledSuspendable({ release: () => {} })
//   }
//   let orgId: string | null = null
//   let teamId: string | null = null
//   if (e.type === FOrganizationLevelType.ORG)
//     orgId = e.parentId
//   else if (e.type === FOrganizationLevelType.TEAM)
//     teamId = e.parentId
//   return getPlanFeaturesResource(get, orgId, teamId)
// }), shallowEqual)

// // Plan public info by org/team level
// const planPublicInfoByLevelAtomFamily = createRemovableAtomFamily(e => atom((get) => {
//   if (!e) {
//     return resourceUtils.disabledSuspendable({ release: () => {} })
//   }
//   let orgId: string | null = null
//   let teamId: string | null = null
//   if (e.type === FOrganizationLevelType.ORG)
//     orgId = e.parentId
//   else if (e.type === FOrganizationLevelType.TEAM)
//     teamId = e.parentId
//   return getPlanPublicInfoResource(get, orgId, teamId)
// }), shallowEqual)

// // Plan user by org/team level
// const planUserByLevelAtomFamily = createRemovableAtomFamily(e => atom((get) => {
//   if (!e) {
//     return resourceUtils.disabledSuspendable({ release: () => {} })
//   }
//   let orgId: string | null = null
//   let teamId: string | null = null
//   if (e.type === FOrganizationLevelType.ORG)
//     orgId = e.parentId
//   else if (e.type === FOrganizationLevelType.TEAM)
//     teamId = e.parentId
//   return getPlanUserResource(get, orgId, teamId)
// }), shallowEqual)
