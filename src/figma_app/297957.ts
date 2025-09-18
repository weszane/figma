import { useCallback, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../905/372672'
import { analyticsEventManager } from '../905/449184'
import { useDraftsFolderProject } from '../905/461685'
import { AccessLevelEnum } from '../905/557142'
import { getFeatureFlags } from '../905/601108'
import { getFirstActiveProjectResourceConnection } from '../905/606579'
import { ResourceStatus } from '../905/663269'
import { useCurrentUserOrgId } from '../905/845253'
import { getExperimentExposureCallback } from '../905/917761'
import { selectUserFlag } from '../905/940356'
import { ExpOneClickAskToEditOrgView, ExpOneClickAskToEditTeamView, ExpSocialProofExpansionOrgView, ExpSocialProofExpansionTeamView, OrgSharedSettingView } from '../figma_app/43951'
import { useDeepEqualSceneValue } from '../figma_app/167249'
import { FFileType, FOrganizationLevelType, FPlanNameType, FProductAccessType, FVisibilityType } from '../figma_app/191312'
import { isSeatTypeRestrictedForUser } from '../figma_app/217457'
import { useSubscription } from '../figma_app/288654'
import { hasTeamStatePaidAccess } from '../figma_app/345997'
import { getParentOrgIdIfOrgLevel, useCurrentPrivilegedPlan, useCurrentPublicPlan, useIsStarterOrStudentPlan, useIsTeamAdminUser, useTeamPlanFeatures, useTeamPlanPublicInfo, useTeamPlanUser } from '../figma_app/465071'
import { throwTypeError } from '../figma_app/465776'
import { useCanAccessFullDevMode } from '../figma_app/473493'
import { hasFilteredPlans } from '../figma_app/496854'
import { selectCurrentFile } from '../figma_app/516028'
import { isTeamFolderV2 } from '../figma_app/528509'
import { selectExperimentConfigHook } from '../figma_app/594947'
import { getCurrentTeamId } from '../figma_app/598018'
import { isProrationBillingEnabled } from '../figma_app/618031'
import { getSingleSelectedKey } from '../figma_app/889655'
import { isDesignFileType } from '../figma_app/976749'

// Original file: /Users/allen/github/fig/src/figma_app/297957.ts
// Refactored to improve readability, maintainability, and organization.
// Grouped related functions logically (e.g., experiment checks, user/org checks, feature flags).
// Renamed functions to descriptive names based on their purpose.
// Added JSDoc comments and inline comments referencing original names.
// Simplified conditionals with early returns where applicable.
// Converted to named arrow functions for consistency.
// Ensured all exports match the new function names.

// User and Organization Checks
/**
 * Checks if the user is in an organization.
 * Original: CheckUserOrganization
 */
const checkUserOrganization = () => !!useCurrentUserOrgId()

/**
 * Determines if the experiment for at-mention invited users is enabled.
 * Original: $$P11
 */
export function useAtMentionInviteExperiment() {
  const { getConfig } = selectExperimentConfigHook('exp_at_mention_invited_users')
  return useCallback((params: { showExpAtMentionInvite: boolean, isDraftFile: boolean, isFigmaDesign: boolean, inOrg: boolean, isMobile: boolean }) => {
    if (params.isDraftFile || params.isMobile || !params.showExpAtMentionInvite || !params.isFigmaDesign || params.inOrg)
      return false
    return getConfig().get('treatment', '') === 'variant'
  }, [getConfig])
}

/**
 * Checks if the plan user creation context experiment is enabled for org level.
 * Original: $$D21
 */
export function usePlanUserCreationContextExperiment() {
  const { getConfig } = selectExperimentConfigHook('exp_plan_user_creation_context_org_member_flyout')
  return useCallback((level: FOrganizationLevelType) => level === FOrganizationLevelType.ORG && getConfig().get('enabled', false), [getConfig])
}

/**
 * Checks if the cart optimizations experiment is enabled.
 * Original: $$k10
 */
export function useCartOptimizationsExperiment() {
  const { getConfig } = selectExperimentConfigHook('exp_cart_optimizations_sticker_shock')
  return !!getConfig().getValue('enabled', false)
}

/**
 * Checks if the user has starter team loophole access.
 * Original: $$M2
 */
export function hasStarterTeamLoopholeAccess({ userId, teams, rolesByTeamId }: { userId: string, teams: any[], rolesByTeamId: Record<string, any> }) {
  return !!getFeatureFlags().close_starter_team_loophole_v2 && countStarterTeams(userId, teams, rolesByTeamId) > 0
}

/**
 * Counts the number of starter teams for the user.
 * Original: F (helper function)
 */
function countStarterTeams(userId: string, teams: any[], rolesByTeamId: Record<string, any>) {
  let count = 0
  const teamMap: Record<string, any> = {}
  teams.forEach(team => teamMap[team.id] = team)
  for (const teamId of Object.keys(rolesByTeamId)) {
    const team = teamMap[teamId]
    const role = rolesByTeamId[teamId][userId]
    if (team && role && role.level === AccessLevelEnum.OWNER && team.starter_team && !team.org_team && !team.student_team && team.subscription === null && team.deleted_at === null) {
      count++
    }
  }
  return count
}

/**
 * Checks if the user is eligible for starter loophole team one.
 * Original: $$j3
 */
export function isEligibleForStarterLoopholeTeamOne(userId: string, teams: any[], rolesByTeamId: Record<string, any>) {
  return !!getFeatureFlags().close_starter_team_loophole_v2 && countStarterTeams(userId, teams, rolesByTeamId) === 0 && getFeatureFlags().close_starter_loophole_team_one
}

/**
 * Checks if the user has access based on flags.
 * Original: $$U1
 */
export const hasUserAccess = (flag1: boolean, flag2: boolean) => !!flag1 && !flag2

// Experiment and Feature Checks
/**
 * Checks if the advanced prototyping upsell experiment is enabled.
 * Original: $$B15
 */
export function useAdvancedPrototypingUpsellExperiment() {
  const configHook = selectExperimentConfigHook('exp_adv_prototyping_upsell')
  return useCallback(() => !!configHook.getConfig().getValue('showUpsell', false), [configHook])
}

/**
 * Enum for FBG navigation updates experiment.
 * Original: $$G0
 */
export const FBGNavigationUpdatesVariants = (() => {
  const variants = {
    CONTROL: 'control',
    VARIANT_A: 'variantA',
    VARIANT_B: 'variantB',
  } as const
  return variants
})()

/**
 * Gets the treatment for FBG navigation updates experiment.
 * Original: $$V8
 */
export function useFBGNavigationUpdatesTreatment() {
  const { getConfig } = selectExperimentConfigHook('exp_fbg_navigation_updates')
  const plan = useCurrentPrivilegedPlan('useFBGNavigationUpdatesTreatment').unwrapOr(null)
  const isTeam = plan?.key.type === FOrganizationLevelType.TEAM
  const isStarter = plan?.tier === FPlanNameType.STARTER
  return isTeam && isStarter ? getConfig().getValue('treatment', 'control') : 'control'
}

/**
 * Checks if separate billing and shipping addresses experiment is enabled.
 * Original: $$H6
 */
export function useSeparateBillingShippingExperiment() {
  const { getConfig } = selectExperimentConfigHook('exp_separate_billing_and_shipping_addresses')
  return !!getConfig().getValue('is_enabled', false)
}

/**
 * Checks if seat billing terms experiment is enabled.
 * Original: $$z32
 */
export function useSeatBillingTermsExperiment() {
  const { getConfig } = selectExperimentConfigHook('seat_billing_terms')
  return !!getConfig().getValue('enabled', false)
}

/**
 * Checks if drafts page limit experiment is enabled.
 * Original: $$W14
 */
export function useDraftsPageLimitExperiment() {
  const { getConfig } = selectExperimentConfigHook('exp_drafts_page_limit_v1')
  return useCallback((file: any) => {
    if (!getFeatureFlags().exp_drafts_page_limit_v1_new_user || file.parentOrgId || file.editorType !== FFileType.DESIGN || !isTeamFolderV2(file.project))
      return false
    return !!file.team && !hasTeamStatePaidAccess(file.team) && !!file.canEdit && getConfig().get('apply_drafts_page_limit', false)
  }, [getConfig])
}

/**
 * Checks if starter global file limits experiment is enabled.
 * Original: $$K27
 */
export function useStarterGlobalFileLimitsExperiment() {
  const configHook = selectExperimentConfigHook('starter_global_file_limits')
  return !!configHook?.getConfig().getValue('enabled', false)
}

/**
 * Checks if SCIM group experiment is enabled.
 * Original: $$Y22
 */
export function useScimGroupExperiment() {
  const { getConfig } = selectExperimentConfigHook('exp_scim_group')
  return useCallback(() => !!getConfig().getValue('enabled', false), [getConfig])
}

/**
 * Checks if drafts copy link experiment is enabled.
 * Original: $$$18
 */
export function useDraftsCopyLinkExperiment(isOrg: boolean) {
  const { getConfig } = selectExperimentConfigHook(isOrg ? 'exp_drafts_copy_link_v2_org' : 'exp_drafts_copy_link_v2_team')
  // getFeatureFlags().statsig_aa_flag_plan_key_web
  return !!getConfig().getValue('has_drafts_copy_link_experience', false)
}

/**
 * Checks if dismissible UUB experiment is enabled.
 * Original: $$X17
 */
export function useDismissibleUUBExperiment() {
  const { getConfig } = selectExperimentConfigHook('exp_dismissible_uub')
  return useCallback(() => getConfig().get('enabled', false), [getConfig])
}

/**
 * Checks if seat choice in NUX experiment is enabled.
 * Original: $$q36
 */
export function useSeatChoiceInNuxExperiment() {
  const file = selectCurrentFile()
  const teamPlan = useTeamPlanPublicInfo()
  const isStarterOrStudent = useIsStarterOrStudentPlan(teamPlan)
  const teamUser = useTeamPlanUser().unwrapOr(null)
  const orgId = useCurrentUserOrgId()
  const inOrg = !!orgId
  const teamId = getCurrentTeamId()
  const isTeam = !inOrg
  const orgSettings = useSubscription(OrgSharedSettingView({ orgId }), { enabled: !!orgId }).unwrapOr(null)
  const upgradeRequestSetting = orgSettings?.org?.orgSharedSetting?.configuredUpgradeRequestSetting?.status === ResourceStatus.Loaded
    ? orgSettings?.org?.orgSharedSetting?.configuredUpgradeRequestSetting?.data
    : null
  const isUpgradeVisible = upgradeRequestSetting === FVisibilityType.ALL_USERS || upgradeRequestSetting === FVisibilityType.MEMBERS
  const { getConfig: teamConfig } = selectExperimentConfigHook('exp_seat_choice_in_nux_team_id')
  const { getConfig: orgConfig } = selectExperimentConfigHook('exp_seat_choice_in_nux_org_id')
  const config = isTeam ? teamConfig : orgConfig
  return useCallback(() => {
    const hasLicense = !!teamUser?.licenseTypes?.length
    if (!file || file?.project?.activeProjectResourceConnections?.length || isUpgradeVisible || hasLicense || isStarterOrStudent.status !== 'loaded' || (!teamUser && !file.canEdit) || isStarterOrStudent.data || (isTeam && !teamId))
      return false
    return config().get('enabled', false)
  }, [config, isTeam, teamId, isStarterOrStudent, file, teamUser, isUpgradeVisible])
}

/**
 * Checks if RFD signals upsell experiment is enabled.
 * Original: $$J35
 */
export function useRfdSignalsUpsellExperiment() {
  const inOrg = checkUserOrganization()
  const teamId = useSelector((state: any) => state.currentTeamId)
  const isTeam = !inOrg
  const hasMarkedReady = !!selectUserFlag('has_marked_ready_for_dev')
  const { getConfig: teamConfig } = selectExperimentConfigHook('exp_rfd_signals_upsell_team_id')
  const { getConfig: orgConfig } = selectExperimentConfigHook('exp_rfd_signals_upsell_org_id')
  const config = isTeam ? teamConfig : orgConfig
  return useCallback(() => !hasMarkedReady && (!isTeam || !!teamId) && config().get('enabled', false), [config, isTeam, teamId, hasMarkedReady])
}

/**
 * Checks if approve in file experiment is enabled.
 * Original: $$Z4
 */
export function useApproveInFileExperiment() {
  const file = selectCurrentFile()
  const planKey = file?.planPublicInfo?.key
  const type = planKey?.type
  const { getConfig } = selectExperimentConfigHook(type === FOrganizationLevelType.TEAM ? 'exp_approve_in_file_pro_team' : 'exp_approve_in_file_org')
  return type !== undefined && !!getConfig().getValue('show_request_in_file', false)
}

/**
 * Checks if developer contextual upsells experiment is enabled.
 * Original: $$Q7
 */
export function useDeveloperContextualUpsellsExperiment() {
  const exposureCallback = getExperimentExposureCallback({
    teamXP: 'exp_developer_contextual_upsells_team_id_with_user',
    orgXP: 'exp_developer_contextual_upsells_org_id_with_user',
  }, {
    allowStarterPlans: false,
    allowCurfPlans: true,
    allowFigmaConnectPlans: true,
  })
  return useCallback(() => {
    const config = exposureCallback?.()
    return config?.get('enabled', false) ?? false
  }, [exposureCallback])
}

/**
 * Checks if team account credit banner should be shown.
 * Original: $$ee37
 */
export const useTeamAccountCreditBanner = () => useCallback(() => !!getFeatureFlags().show_team_account_credit_banner, [])

/**
 * Checks if pro annual improvements experiment is enabled.
 * Original: $$et29
 */
export function useProAnnualImprovementsExperiment() {
  const plan = useCurrentPrivilegedPlan('useIsExpProAnnualImprovementsEnabled').unwrapOr(null)
  const prorationEnabled = isProrationBillingEnabled(plan)
  const { getConfig } = selectExperimentConfigHook('exp_pro_annual_improvements_may_2025')
  const isEnabled = useCallback(() => plan?.tier === FPlanNameType.PRO && !!prorationEnabled && !!getConfig().getValue('enabled', false), [plan, prorationEnabled, getConfig])
  return useCallback(() => isEnabled() || !!getFeatureFlags().new_annual_seats_ctas, [isEnabled])
}

/**
 * Checks if cart seat selection clarity experiment is enabled.
 * Original: $$er16
 */
export function useCartSeatSelectionClarityExperiment() {
  const { getConfig } = selectExperimentConfigHook('exp_cart_seat_selection_clarity')
  return useCallback(() => !!getConfig().getValue('enabled', false), [getConfig])
}

/**
 * Checks if plan invite with seat experiment is enabled.
 * Original: $$en26
 */
export function usePlanInviteWithSeatExperiment({ disableExposureLogging = false } = {}) {
  const teamPlan = useTeamPlanPublicInfo()
  const isStarterOrStudent = useIsStarterOrStudentPlan(teamPlan)
  const { getConfig: proConfig } = selectExperimentConfigHook('exp_pro_admin_plan_invite_with_seat', undefined, disableExposureLogging)
  const { getConfig: orgConfig } = selectExperimentConfigHook('exp_org_admin_plan_invite_with_seat', undefined, disableExposureLogging)
  return useCallback(({ isPlanAdmin }: { isPlanAdmin: boolean }) => {
    if (getFeatureFlags().plan_invite_modal_revamp)
      return true
    if (teamPlan.status !== 'loaded' || isStarterOrStudent.data || !isPlanAdmin)
      return false
    const type = teamPlan.data.key.type
    switch (type) {
      case FOrganizationLevelType.ORG:
        return orgConfig().get('enabled', false)
      case FOrganizationLevelType.TEAM:
        return proConfig().get('enabled', false)
      default:
        throwTypeError(type)
    }
  }, [teamPlan, orgConfig, proConfig, isStarterOrStudent])
}

/**
 * Checks if file invite with seat experiment is enabled.
 * Original: $$ei25
 */
export function useFileInviteWithSeatExperiment() {
  const { getConfig: proConfig } = selectExperimentConfigHook('exp_pro_admin_file_invite_with_seat')
  const { getConfig: orgConfig } = selectExperimentConfigHook('exp_org_admin_file_invite_with_seat')
  const plan = useCurrentPublicPlan('useIsInviteToFileWithSeatExpEnabled').unwrapOr(null)
  return useCallback(({ rolePending, inviteBillableProductKey, editorType, filePlanKey, userNeedsUpgrade, hasEditRole }: any) => {
    if (!editorType || !hasEditRole || !filePlanKey || !userNeedsUpgrade || (rolePending && inviteBillableProductKey && isSeatTypeRestrictedForUser(inviteBillableProductKey, editorType)) || filePlanKey.type !== plan?.key.type || filePlanKey.parentId !== plan?.key.parentId)
      return false
    const isPro = plan?.tier === FPlanNameType.PRO
    const isOrgOrEnterprise = plan?.tier === FPlanNameType.ORG || plan?.tier === FPlanNameType.ENTERPRISE
    return isPro ? proConfig().get('enabled', false) : !!isOrgOrEnterprise && orgConfig().get('enabled', false)
  }, [plan, proConfig, orgConfig])
}

/**
 * Checks if one-click ask to edit experiment is enabled.
 * Original: $$ea19
 */
export function useOneClickAskToEditExperiment(enabled: boolean) {
  const teamPlan = useTeamPlanPublicInfo().unwrapOr(null)
  const user = selectCurrentUser()
  const file = selectCurrentFile()
  const orgId = getParentOrgIdIfOrgLevel(teamPlan) ?? null
  const orgSettings = useSubscription(OrgSharedSettingView({ orgId }), { enabled: !!orgId }).unwrapOr(null)
  const upgradeSetting = orgSettings?.org?.orgSharedSetting?.configuredUpgradeRequestSetting?.status === ResourceStatus.Loaded
    ? orgSettings?.org?.orgSharedSetting?.configuredUpgradeRequestSetting?.data
    : null
  const isUpgradeVisible = upgradeSetting === FVisibilityType.ALL_USERS || upgradeSetting === FVisibilityType.MEMBERS
  const resourceConnection = getFirstActiveProjectResourceConnection()
  const isPro = teamPlan?.tier === FPlanNameType.PRO
  const isOrgOrEnterprise = teamPlan?.tier === FPlanNameType.ORG || teamPlan?.tier === FPlanNameType.ENTERPRISE
  const teamExp = useSubscription(ExpOneClickAskToEditTeamView({ teamId: teamPlan?.key.parentId || '' }), { enabled: isPro && !isUpgradeVisible && !resourceConnection && enabled }).unwrapOr(null)
  const orgExp = useSubscription(ExpOneClickAskToEditOrgView({ orgId: teamPlan?.key.parentId || '' }), { enabled: isOrgOrEnterprise && !isUpgradeVisible && !resourceConnection && enabled }).unwrapOr(null)
  const exposedRef = useRef(false)
  const orgData = orgExp?.orgPublicInfo?.expOneClickAskToEditOrgId.status === ResourceStatus.Loaded ? orgExp.orgPublicInfo.expOneClickAskToEditOrgId.data : null
  const teamData = teamExp?.teamPublicInfo?.expOneClickAskToEditTeamIdPublic.status === ResourceStatus.Loaded ? teamExp.teamPublicInfo.expOneClickAskToEditTeamIdPublic.data : null
  return useCallback(() => {
    if (!exposedRef.current && (orgData || teamData)) {
      analyticsEventManager.trackDefinedEvent('activation.experiment_exposure_for_user', {
        userId: user?.id,
        fileKey: file?.key,
        orgId: orgId || undefined,
        teamId: isOrgOrEnterprise ? undefined : teamPlan?.key.parentId,
        ruleId: orgData?.treatment ?? teamData?.treatment,
        experimentName: orgData?.id ?? teamData?.id,
      })
      exposedRef.current = true
    }
    return isOrgOrEnterprise ? orgData?.treatment === 'variant' : !!isPro && teamData?.treatment === 'variant'
  }, [teamData, orgData, isOrgOrEnterprise, isPro, teamPlan, user, file, orgId])
}

/**
 * Checks if social proof expansion experiment is enabled.
 * Original: $$es23
 */
export function useSocialProofExpansionExperiment({ planType, planParentId, isOrgGuest, licenseType, entryPoint }: any) {
  const isDevModeBlocking = licenseType === FProductAccessType.DEV_MODE && entryPoint === 'dev-mode-blocking-modal'
  const user = selectCurrentUser()
  const userId = user?.id
  const resourceConnection = getFirstActiveProjectResourceConnection()
  const enableTeamExp = !isDevModeBlocking && !resourceConnection && planType === FOrganizationLevelType.TEAM && !!planParentId
  const teamExp = useSubscription(ExpSocialProofExpansionTeamView({ teamId: planParentId }), { enabled: enableTeamExp }).unwrapOr(null)
  const enableOrgExp = !isDevModeBlocking && !resourceConnection && !isOrgGuest && planType === FOrganizationLevelType.ORG && !!planParentId
  const orgExp = useSubscription(ExpSocialProofExpansionOrgView({ orgId: planParentId }), { enabled: enableOrgExp }).unwrapOr(null)
  const exposedRef = useRef(false)
  useEffect(() => () => { exposedRef.current = false }, [userId, planType, planParentId])
  const logExposure = useCallback((enabled: boolean) => {
    if (userId && !exposedRef.current) {
      analyticsEventManager.trackDefinedEvent('activation.experiment_exposure_for_user', {
        userId,
        orgId: planType === FOrganizationLevelType.ORG ? planParentId : undefined,
        teamId: planType === FOrganizationLevelType.TEAM ? planParentId : undefined,
        ruleId: enabled ? 'test' : 'control',
        experimentName: planType === FOrganizationLevelType.ORG ? 'exp_social_proof_expansion_org_id' : 'exp_social_proof_expansion_team_id',
      })
      exposedRef.current = true
    }
  }, [userId, planType, planParentId])
  if (isDevModeBlocking)
    return true
  if (isOrgGuest || resourceConnection)
    return false
  const teamEnabled = teamExp?.team?.expSocialProofExpansionTeamId.status === ResourceStatus.Loaded ? teamExp.team.expSocialProofExpansionTeamId.data.enabled : null
  const orgEnabled = orgExp?.org?.expSocialProofExpansionOrgId.status === ResourceStatus.Loaded ? orgExp.org.expSocialProofExpansionOrgId.data.enabled : null
  if (orgEnabled !== null && planType === FOrganizationLevelType.ORG) {
    logExposure(orgEnabled)
    return orgEnabled
  }
  if (teamEnabled !== null && planType === FOrganizationLevelType.TEAM) {
    logExposure(teamEnabled)
    return teamEnabled
  }
  return false
}

/**
 * Checks if pro user context in downgrade flow experiment is enabled.
 * Original: $$eo24
 */
export function useProUserContextInDowngradeExperiment() {
  const exposureCallback = getExperimentExposureCallback({
    teamXP: 'exp_pro_user_context_in_downgrade_flow',
    orgXP: 'exp_org_user_context_in_downgrade_flow',
  }, {
    allowStarterPlans: false,
    allowCurfPlans: true,
    allowFigmaConnectPlans: true,
  })
  return useCallback(() => !!exposureCallback && (exposureCallback().get('enabled', false) ?? false), [exposureCallback])
}

/**
 * Checks if DT MCP callout experiment is enabled.
 * Original: $$el33
 */
export function useDtMcpCalloutExperiment() {
  const canAccessDevMode = useCanAccessFullDevMode()
  const { getConfig } = selectExperimentConfigHook('exp_dt_mcp_callout')
  const hasEnabledMcp = !!selectUserFlag('dev_mode_has_enabled_mcp_server')
  return useCallback(() => !!canAccessDevMode && !hasEnabledMcp && getConfig().getValue('enabled', false), [getConfig, canAccessDevMode, hasEnabledMcp])
}

/**
 * Checks if seat management widget experiment is enabled for pro.
 * Original: $$ed20
 */
export function useSeatManagementWidgetProExperiment() {
  const planFeatures = useTeamPlanFeatures().unwrapOr(null)
  const teamUser = useTeamPlanUser()
  const isAdmin = useIsTeamAdminUser(teamUser).unwrapOr(false)
  const isPro = planFeatures?.tier === FPlanNameType.PRO
  const prorationEnabled = isProrationBillingEnabled(planFeatures)
  const checkEligibility = useCallback((enabled: boolean) => isPro && prorationEnabled && isAdmin && enabled, [isPro, prorationEnabled, isAdmin])
  const { getConfig } = selectExperimentConfigHook('seat_management_widget_pro')
  return useCallback((enabled: boolean) => checkEligibility(enabled) && !!getFeatureFlags().seat_billing_interval_people_tab && getConfig().get('enabled', false), [checkEligibility, getConfig])
}

/**
 * Checks if seat management widget experiment is enabled.
 * Original: $$ec5
 */
export function useSeatManagementWidgetExperiment() {
  const { getConfig: proConfig } = selectExperimentConfigHook('seat_management_widget_pro')
  const { getConfig: orgConfig } = selectExperimentConfigHook('seat_management_widget_org')
  const planType = useTeamPlanFeatures().unwrapOr(null)?.type
  return useCallback(() => {
    if (!getFeatureFlags().billing_page_updates_jul_2025)
      return false
    switch (planType) {
      case FOrganizationLevelType.TEAM:
        return proConfig().get('enabled', false)
      case FOrganizationLevelType.ORG:
        return orgConfig().get('enabled', false)
      default:
        return false
    }
  }, [proConfig, orgConfig, planType])
}

/**
 * Checks if send to make experiment is enabled.
 * Original: $$eu34
 */
export function useSendToMakeExperiment() {
  const { getConfig } = selectExperimentConfigHook('exp_send_to_make')
  const isDesign = isDesignFileType()
  const canCreate = useDraftsFolderProject().transform(project => project?.canCreateFigmakeFileWithReasons.result ?? false).unwrapOr(false)
  const selectedKey = useSelector(getSingleSelectedKey)
  const isTopLevelFrame = useDeepEqualSceneValue((scene, key) => scene.get(key)?.isTopLevelFrame() ?? false, selectedKey)
  const teamPlan = useTeamPlanPublicInfo().unwrapOr(null)
  const isEligible = !!isDesign && !!isTopLevelFrame && !!teamPlan && (teamPlan.tier !== FPlanNameType.STARTER || !!getFeatureFlags().bake_starter_limit) && canCreate
  return useCallback(() => !!isEligible && (getConfig().get('enabled', false) ?? false), [getConfig, isEligible])
}

/**
 * Checks if make empty state refresh experiment is enabled.
 * Original: $$ep9
 */
export function useMakeEmptyStateRefreshExperiment({ logExposure = false } = {}) {
  const { getConfig } = selectExperimentConfigHook('exp_make_empty_state_refresh', undefined, logExposure)
  return useCallback(() => getConfig().get('enabled', false) ?? false, [getConfig])
}

/**
 * Checks if Figma make prototype tab upsell experiment is enabled.
 * Original: $$e_12
 */
export function useFigmaMakePrototypeTabUpsellExperiment() {
  const { getConfig } = selectExperimentConfigHook('exp_figma_make_prototype_tab_upsell')
  return useCallback(() => getConfig().get('enabled', false), [getConfig])
}

/**
 * Checks if make file creation tooltip experiment is enabled.
 * Original: $$eh28
 */
export function useMakeFileCreationTooltipExperiment() {
  const { getConfig } = selectExperimentConfigHook('exp_make_file_creation_tooltip')
  return useCallback(() => getConfig().get('enabled', false), [getConfig])
}

/**
 * Checks if Figma make design editor popout upsell experiment is enabled.
 * Original: $$$$em13
 */
export function useFigmaMakeDesignEditorPopoutUpsellExperiment() {
  const { getConfig } = selectExperimentConfigHook('exp_figma_make_design_editor_popout_upsell')
  return useCallback(() => getConfig().get('enabled', false), [getConfig])
}

/**
 * Checks if high priority notifications experiment is enabled.
 * Original: $$eg30
 */
export function useHighPriorityNotificationsExperiment(hasFiltered: boolean) {
  const { getConfig } = selectExperimentConfigHook('exp_high_pri_notifs_v2')
  return !!hasFilteredPlans() && !!hasFiltered && getConfig().getValue('has_high_priority_filter', false)
}

/**
 * Checks if one-click resubscribe experiment is enabled.
 * Original: $$ef31
 */
export function useOneClickResubscribeExperiment() {
  const { getConfig } = selectExperimentConfigHook('exp_one_click_resubscribe', false, true)
  const { can_one_click_resubscribe } = getFeatureFlags()
  return !!can_one_click_resubscribe && getConfig().get('can_one_click_resubscribe', false)
}

// Updated exports to match new function names
export const ih = FBGNavigationUpdatesVariants
export const mw = hasUserAccess
export const e5 = hasStarterTeamLoopholeAccess
export const Mk = isEligibleForStarterLoopholeTeamOne
export const dI = useApproveInFileExperiment
export const vt = useSeatManagementWidgetExperiment
export const Mh = useSeparateBillingShippingExperiment
export const lS = useDeveloperContextualUpsellsExperiment
export const fn = useFBGNavigationUpdatesTreatment
export const em = useMakeEmptyStateRefreshExperiment
export const Ik = useCartOptimizationsExperiment
export const y = useAtMentionInviteExperiment
export const oW = useFigmaMakePrototypeTabUpsellExperiment
export const RI = useFigmaMakeDesignEditorPopoutUpsellExperiment
export const Fr = useDraftsPageLimitExperiment
export const hn = useAdvancedPrototypingUpsellExperiment
export const Dj = useCartSeatSelectionClarityExperiment
export const Mi = useDismissibleUUBExperiment
export const Xt = useDraftsCopyLinkExperiment
export const YJ = useOneClickAskToEditExperiment
export const C3 = useSeatManagementWidgetProExperiment
export const UV = usePlanUserCreationContextExperiment
export const t4 = useScimGroupExperiment
export const wu = useSocialProofExpansionExperiment
export const U2 = useProUserContextInDowngradeExperiment
export const lx = useFileInviteWithSeatExperiment
export const Z5 = usePlanInviteWithSeatExperiment
export const E9 = useStarterGlobalFileLimitsExperiment
export const Np = useMakeFileCreationTooltipExperiment
export const P8 = useProAnnualImprovementsExperiment
export const Ow = useHighPriorityNotificationsExperiment
export const Lm = useOneClickResubscribeExperiment
export const CT = useSeatBillingTermsExperiment
export const pT = useDtMcpCalloutExperiment
export const _p = useSendToMakeExperiment
export const cR = useRfdSignalsUpsellExperiment
export const fr = useSeatChoiceInNuxExperiment
export const a8 = useTeamAccountCreditBanner
