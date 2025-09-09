import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { reportError } from '../905/11'
import { selectWithShallowEqual } from '../905/103090'
import { getPlanFeaturesAtomFamily, getPlanFeaturesTeamAtomFamily, getPlanPublicInfoAtomFamily, getPlanPublicInfoTeamAtomFamily, getPlanUserAtomFamily, getPlanUserTeamAtomFamily } from '../905/276025'
import { resolveTeamId } from '../905/515860'
import { getFeatureFlags } from '../905/601108'
import { useAtomWithSubscription } from '../figma_app/27355'
import { FMemberRoleType, FOrganizationLevelType, FPlanNameType, FUserTypeClassification } from '../figma_app/191312'
import { adminPermissionConfig, useShadowReadLoaded } from '../figma_app/391338'
import { throwTypeError } from '../figma_app/465776'
import { handleSuspenseRetainRelease } from '../figma_app/566371'

/**
 * Plan Feature Hooks and Utilities
 * Refactored from original exports: $$m7, $$g6, $$f19, $$E8, $$y13, $$b2, $$T12, S, I, $$v3, $$A22, $$x14, $$N15, $$C17, $$w20, $$O1, $$R23, $$L4, $$P10, $$D16, $$k18, $$M5, $$F21, j, U, $$B9, $$G0, $$V11
 * All original export names are preserved as comments for traceability.
 */

/**
 * Hook for team plan features.
 * @returns Atom subscription for team plan features.
 * @see $$m7
 */
export const useTeamPlanFeatures = () => useAtomWithSubscription(getPlanFeaturesTeamAtomFamily(true))

/**
 * Hook for team plan public info.
 * @returns Atom subscription for team plan public info.
 * @see $$g6
 */
export const useTeamPlanPublicInfo = () => useAtomWithSubscription(getPlanPublicInfoTeamAtomFamily(true))

/**
 * Hook for team plan user.
 * @returns Atom subscription for team plan user.
 * @see $$f19
 */
export const useTeamPlanUser = () => useAtomWithSubscription(getPlanUserTeamAtomFamily(true))

/**
 * Selects the current privileged plan atom based on migration flags and context.
 * @param callsite - Callsite label for tracking.
 * @param options - Optional tracking options.
 * @returns Atom subscription for current privileged plan.
 * @see $$E8
 */
export function useCurrentPrivilegedPlan(callsite: string, options?: { sampleRate?: number, useSidebarOrOpenFile?: boolean }) {
  const planFeatures = useAtomWithSubscription(getPlanFeaturesAtomFamily(true))
  const teamPlanFeatures = useAtomWithSubscription(getPlanFeaturesTeamAtomFamily(true))
  trackShadowRead(planFeatures.transform(e => e?.key), teamPlanFeatures.transform(e => e?.key), adminPermissionConfig.PlanHooks.useCurrentPrivilegedPlan, callsite, options?.sampleRate)
  return getFeatureFlags().plan_hook_migration && options?.useSidebarOrOpenFile ? teamPlanFeatures : planFeatures
}

/**
 * Suspense hook for current privileged plan, with error reporting.
 * @param options - Error reporting options.
 * @returns Loaded plan or error.
 * @see $$y13
 */
export function useSuspendCurrentPrivilegedPlan({
  reportErrorsToTeam,
}: { reportErrorsToTeam: string }) {
  const atom = useCurrentPrivilegedPlan('useSuspendCurrentPrivilegedPlan')
  const [result] = handleSuspenseRetainRelease(atom)
  if (result.status !== 'loaded') {
    const error = new Error(result.status === 'disabled' ? 'Plan fetching disabled' : 'Error fetching plan')
    reportError(reportErrorsToTeam, error)
    return error
  }
  if (!result.data) {
    const error = new Error('No Plan found')
    reportError(reportErrorsToTeam, error)
    return error
  }
  return result.data
}

/**
 * Selects the current plan user atom based on migration flags and context.
 * @param callsite - Callsite label for tracking.
 * @param options - Optional tracking options.
 * @returns Atom subscription for current plan user.
 * @see $$b2
 */
export function useCurrentPlanUser(callsite: string, options?: { sampleRate?: number, useSidebarOrOpenFile?: boolean }) {
  const planUser = useAtomWithSubscription(getPlanUserAtomFamily(true))
  const teamPlanUser = useAtomWithSubscription(getPlanUserTeamAtomFamily(true))
  trackShadowRead(planUser.transform(e => e.planKey), teamPlanUser.transform(e => e.planKey), adminPermissionConfig.PlanHooks.useCurrentPlanUser, callsite, options?.sampleRate)
  return getFeatureFlags().plan_hook_migration && options?.useSidebarOrOpenFile ? teamPlanUser : planUser
}

/**
 * Selects the current public plan atom based on migration flags and context.
 * @param callsite - Callsite label for tracking.
 * @param options - Optional tracking options.
 * @returns Atom subscription for current public plan.
 * @see $$T12
 */
export function useCurrentPublicPlan(callsite: string, options?: { sampleRate?: number, useSidebarOrOpenFile?: boolean }) {
  const publicInfo = useAtomWithSubscription(getPlanPublicInfoAtomFamily(true))
  const teamPublicInfo = useAtomWithSubscription(getPlanPublicInfoTeamAtomFamily(true))
  trackShadowRead(publicInfo.transform(e => e?.key), teamPublicInfo.transform(e => e?.key), adminPermissionConfig.PlanHooks.useCurrentPublicPlan, callsite, options?.sampleRate)
  return getFeatureFlags().plan_hook_migration && options?.useSidebarOrOpenFile ? teamPublicInfo : publicInfo
}

/**
 * Helper to build a unique key for shadow read tracking.
 * @param obj - Object with type and parentId.
 * @returns Unique key string.
 * @see I
 */
const buildShadowReadKey = (obj: { type: string, parentId: string }) => `${obj.type}::${obj.parentId}`

/**
 * Tracks shadow reads for plan atoms.
 * @param oldAtom - Old atom selector.
 * @param newAtom - New atom selector.
 * @param label - Tracking label.
 * @param callsite - Callsite label.
 * @param sampleRate - Optional sample rate.
 * @see S
 */
function trackShadowRead(oldAtom: any, newAtom: any, label: string, callsite: string, sampleRate = 0.1) {
  const isFolderView = useSelector<any>(e => e.selectedView?.view === 'folder')
  const context = selectWithShallowEqual(e => ({
    currentUserOrgId: e.currentUserOrgId,
    currentTeamId: e.currentTeamId,
    getTeamIdResult: resolveTeamId(e),
    selectedView: e.selectedView?.view,
    openFileKey: e.openFile?.key,
    openFileParentOrgId: e.openFile?.parentOrgId,
    openFileTeamId: e.openFile?.teamId,
  }))
  const [shadowEnabled, setShadowEnabled] = useState(false)
  useEffect(() => {
    setTimeout(() => setShadowEnabled(true), 2000)
  }, [])
  useShadowReadLoaded({
    oldValue: oldAtom.transform((e: any) => buildShadowReadKey(e)),
    newValue: newAtom.transform((e: any) => buildShadowReadKey(e)),
    label,
    contextArgs: {
      callsite,
      ...context,
    },
    sampleRate__UNSTABLE: sampleRate,
    trackLatency: false,
    enableShadowRead: !isFolderView || shadowEnabled,
  })
}

/**
 * Memoized hook for checking if plan is PRO or STUDENT.
 * @param atom - Plan atom.
 * @returns Boolean atom.
 * @see $$v3
 */
export function useIsProOrStudentPlan(atom: any) {
  return useMemo(() => atom.transform((e: any) => isProOrStudentPlan(e)), [atom])
}

/**
 * Checks if plan is PRO or STUDENT.
 * @param plan - Plan object.
 * @returns True if PRO or STUDENT.
 * @see $$A22
 */
export function isProOrStudentPlan(plan: any) {
  return !!plan && [FPlanNameType.PRO, FPlanNameType.STUDENT].includes(plan.tier)
}

/**
 * Memoized hook for checking if plan is STUDENT.
 * @param atom - Plan atom.
 * @returns Boolean atom.
 * @see $$x14
 */
export function useIsStudentPlan(atom: any) {
  return useMemo(() => atom.transform((e: any) => e.tier === FPlanNameType.STUDENT), [atom])
}

/**
 * Memoized hook for checking if plan is STARTER.
 * @param atom - Plan atom.
 * @returns Boolean atom.
 * @see $$N15
 */
export function useIsStarterPlan(atom: any) {
  return useMemo(() => atom.transform((e: any) => e.tier === FPlanNameType.STARTER), [atom])
}

/**
 * Memoized hook for checking if plan is STARTER or PRO.
 * @param atom - Plan atom.
 * @returns Boolean atom.
 * @see $$C17
 */
export function useIsStarterOrProPlan(atom: any) {
  return useMemo(() => atom.transform((e: any) => [FPlanNameType.STARTER, FPlanNameType.PRO].includes(e.tier)), [atom])
}

/**
 * Memoized hook for checking if plan is STARTER or STUDENT.
 * @param atom - Plan atom.
 * @returns Boolean atom.
 * @see $$w20
 */
export function useIsStarterOrStudentPlan(atom: any) {
  return useMemo(() => atom.transform((e: any) => [FPlanNameType.STARTER, FPlanNameType.STUDENT].includes(e.tier)), [atom])
}

/**
 * Memoized hook for checking if plan is ORG or ENTERPRISE.
 * @param atom - Plan atom.
 * @returns Boolean atom.
 * @see $$O1
 */
export function useIsOrgOrEnterprisePlan(atom: any) {
  return useMemo(() => atom.transform((e: any) => isOrgOrEnterprisePlan(e)), [atom])
}

/**
 * Checks if plan is ORG or ENTERPRISE.
 * @param plan - Plan object.
 * @returns True if ORG or ENTERPRISE.
 * @see $$R23
 */
export function isOrgOrEnterprisePlan(plan: any) {
  return !!plan && [FPlanNameType.ORG, FPlanNameType.ENTERPRISE].includes(plan.tier)
}

/**
 * Gets parent org id if organization level.
 * @param obj - Object with key.
 * @returns Parent org id or undefined.
 * @see $$L4
 */
export function getParentOrgIdIfOrgLevel(obj: any) {
  return obj?.key.type === FOrganizationLevelType.ORG ? obj?.key.parentId ?? undefined : undefined
}

/**
 * Memoized hook for checking if user is ADMIN.
 * @param atom - User atom.
 * @returns Boolean atom.
 * @see $$P10
 */
export function useIsAdminUser(atom: any) {
  return useMemo(() => atom.transform((e: any) => e?.permission === FMemberRoleType.ADMIN), [atom])
}

/**
 * Memoized hook for checking if user is ORG_USER.
 * @param atom - User atom.
 * @returns Boolean atom.
 * @see $$D16
 */
export function useIsOrgUser(atom: any) {
  return useMemo(() => atom.transform((e: any) => e?.key.type === FUserTypeClassification.ORG_USER), [atom])
}

/**
 * Memoized hook for checking if user is ORG ADMIN.
 * @param atom - User atom.
 * @returns Boolean atom.
 * @see $$k18
 */
export function useIsOrgAdminUser(atom: any) {
  return useMemo(() => atom.transform((e: any) => isOrgAdminUser(e)), [atom])
}

/**
 * Memoized hook for checking if user is ORG MEMBER or ADMIN.
 * @param atom - User atom.
 * @returns Boolean atom.
 * @see $$M5
 */
export function useIsOrgMemberOrAdminUser(atom: any) {
  return useMemo(() => atom.transform((e: any) => isOrgMemberUser(e) || isOrgAdminUser(e)), [atom])
}

/**
 * Memoized hook for checking if user is ORG GUEST.
 * @param atom - User atom.
 * @returns Boolean atom.
 * @see $$F21
 */
export function useIsOrgGuestUser(atom: any) {
  return useMemo(() => atom.transform((e: any) => isOrgGuestUser(e)), [atom])
}

/**
 * Checks if user is ORG ADMIN.
 * @param user - User object.
 * @returns True if ORG ADMIN.
 * @see j
 */
export function isOrgAdminUser(user: any) {
  return user?.key.type === FUserTypeClassification.ORG_USER && user?.permission === FMemberRoleType.ADMIN
}

/**
 * Checks if user is ORG MEMBER.
 * @param user - User object.
 * @returns True if ORG MEMBER.
 * @see U
 */
export function isOrgMemberUser(user: any) {
  return user?.key.type === FUserTypeClassification.ORG_USER && user?.permission === FMemberRoleType.MEMBER
}

/**
 * Checks if user is ORG GUEST.
 * @param user - User object.
 * @returns True if ORG GUEST.
 * @see $$B9
 */
export function isOrgGuestUser(user: any) {
  return user?.key.type === FUserTypeClassification.ORG_USER && user?.permission === FMemberRoleType.GUEST
}

/**
 * Checks user permission type.
 * @param user - User object.
 * @param role - Role type.
 * @returns True if user matches role.
 * @see $$G0
 */
export function checkOrgUserPermission(user: any, role: FMemberRoleType) {
  switch (role) {
    case FMemberRoleType.ADMIN:
      return isOrgAdminUser(user)
    case FMemberRoleType.MEMBER:
      return isOrgMemberUser(user) || isOrgAdminUser(user)
    case FMemberRoleType.GUEST:
      return isOrgGuestUser(user) || isOrgMemberUser(user) || isOrgAdminUser(user)
    default:
      throwTypeError(role)
  }
}

/**
 * Memoized hook for checking if team user is ADMIN.
 * @param atom - User atom.
 * @returns Boolean atom.
 * @see $$V11
 */
export function useIsTeamAdminUser(atom: any) {
  return useMemo(() => atom.transform((e: any) => {
    const user = e
    return user?.key.type === FUserTypeClassification.TEAM_USER && user?.permission === FMemberRoleType.ADMIN
  }), [atom])
}

// Export aliases for backward compatibility with original names
export const $$m7 = useTeamPlanFeatures
export const $$g6 = useTeamPlanPublicInfo
export const $$f19 = useTeamPlanUser
export const $$E8 = useCurrentPrivilegedPlan
export const $$y13 = useSuspendCurrentPrivilegedPlan
export const $$b2 = useCurrentPlanUser
export const $$T12 = useCurrentPublicPlan
export const $$v3 = useIsProOrStudentPlan
export const $$A22 = isProOrStudentPlan
export const $$x14 = useIsStudentPlan
export const $$N15 = useIsStarterPlan
export const $$C17 = useIsStarterOrProPlan
export const $$w20 = useIsStarterOrStudentPlan
export const $$O1 = useIsOrgOrEnterprisePlan
export const $$R23 = isOrgOrEnterprisePlan
export const $$L4 = getParentOrgIdIfOrgLevel
export const $$P10 = useIsAdminUser
export const $$D16 = useIsOrgUser
export const $$k18 = useIsOrgAdminUser
export const $$M5 = useIsOrgMemberOrAdminUser
export const $$F21 = useIsOrgGuestUser
export const $$B9 = isOrgGuestUser
export const $$G0 = checkOrgUserPermission
export const $$V11 = useIsTeamAdminUser

// Export refactored names for improved clarity
export const A8 = checkOrgUserPermission
export const Az = useIsOrgOrEnterprisePlan
export const D6 = useCurrentPlanUser
export const EV = useIsProOrStudentPlan
export const H3 = getParentOrgIdIfOrgLevel
export const Kd = useIsOrgMemberOrAdminUser
export const No = useTeamPlanPublicInfo
export const S2 = useTeamPlanFeatures
export const T5 = useCurrentPrivilegedPlan
export const Ty = isOrgGuestUser
export const Um = useIsAdminUser
export const W8 = useIsTeamAdminUser
export const X$ = useCurrentPublicPlan
export const XP = useSuspendCurrentPrivilegedPlan
export const YQ = useIsStudentPlan
export const YY = useIsStarterPlan
export const fh = useIsOrgUser
export const iW = useIsStarterOrProPlan
export const j_ = useIsOrgAdminUser
export const px = useTeamPlanUser
export const q8 = useIsStarterOrStudentPlan
export const sI = useIsOrgGuestUser
export const vj = isProOrStudentPlan
export const zQ = isOrgOrEnterprisePlan
