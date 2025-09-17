import { useCallback, useRef } from 'react'
import { getCustomIDsFromStatsig } from '../905/86266'
import { selectCurrentUser } from '../905/372672'
import { analyticsEventManager } from '../905/449184'
import { getFirstActiveProjectResourceConnection } from '../905/606579'
import { ResourceStatus } from '../905/663269'
import { OrgSharedSettingView } from '../figma_app/43951'
import { FPlanNameType } from '../figma_app/191312'
import { useSubscription } from '../figma_app/288654'
import { getParentOrgIdIfOrgLevel, useTeamPlanPublicInfo } from '../figma_app/465071'
import { UpgradeRequestSetting } from '../figma_app/482728'
import { selectCurrentFile } from '../figma_app/516028'
import { selectExperimentConfigHook } from '../figma_app/594947'

/**
 * Checks if the upgrade request setting is enabled for the given org.
 * Original function name: f
 * @param orgId - Organization ID
 * @returns boolean indicating if upgrade request is enabled for all users or members
 */
export function isUpgradeRequestEnabled(orgId: string | null | undefined): boolean {
  const subscription = useSubscription(
    OrgSharedSettingView({ orgId: orgId ?? null }),
    { enabled: !!orgId },
  ).unwrapOr(null)

  if (!subscription)
    return false

  const upgradeSetting
    = subscription?.org?.orgSharedSetting?.configuredUpgradeRequestSetting?.status === ResourceStatus.Loaded
      ? subscription?.org?.orgSharedSetting?.configuredUpgradeRequestSetting?.data
      : null

  return (
    upgradeSetting === UpgradeRequestSetting.ALL_USERS
    || upgradeSetting === UpgradeRequestSetting.MEMBERS
  )
}

/**
 * Determines if the experiment exposure callback should be returned based on plan and settings.
 * Original function name: $$_0
 * @param params - Experiment and plan parameters
 * @param settings - Settings controlling plan access
 * @returns Callback for experiment exposure or null
 */
export function getExperimentExposureCallback(
  params: { teamXP: any, orgXP: any },
  settings: { allowStarterPlans: boolean, allowCurfPlans: boolean, allowFigmaConnectPlans: boolean },
) {
  const starterPlanTypes = [FPlanNameType.STARTER, FPlanNameType.STUDENT]
  const teamPlanInfo = useTeamPlanPublicInfo()
  const parentOrgId = getParentOrgIdIfOrgLevel(teamPlanInfo.data)
  const upgradeRequestEnabled = isUpgradeRequestEnabled(parentOrgId)

  const { getConfig: getTeamConfig } = selectExperimentConfigHook(params.teamXP)
  const { getConfig: getOrgConfig } = selectExperimentConfigHook(params.orgXP)

  const activeProjectConnection = getFirstActiveProjectResourceConnection()
  const customIDs = getCustomIDsFromStatsig()
  const currentFile = selectCurrentFile()
  const currentUser = selectCurrentUser()
  const exposureTracked = useRef(false)

  // Choose config getter based on orgID presence
  const getConfig = customIDs?.orgID ? getOrgConfig : getTeamConfig

  /**
   * Tracks experiment exposure for the user and returns the config.
   * Original function name: x (useCallback)
   */
  const trackExperimentExposure = useCallback(() => {
    const config = getConfig()
    if (!exposureTracked.current) {
      analyticsEventManager.trackDefinedEvent('activation.experiment_exposure_for_user', {
        userId: currentUser?.id,
        fileKey: currentFile?.key,
        orgId: customIDs?.orgID,
        teamId: customIDs?.teamID,
        ruleId: config.getRuleID(),
        experimentName: config.getName(),
        orgIdFromPlan: parentOrgId,
        teamIdFromPlan: parentOrgId ? undefined : teamPlanInfo?.data?.key.parentId,
      })
      exposureTracked.current = true
    }
    return config
  }, [
    currentUser?.id,
    currentFile?.key,
    customIDs?.orgID,
    customIDs?.teamID,
    parentOrgId,
    teamPlanInfo.data?.key.parentId,
    getConfig,
  ])

  // Guard clauses for plan and settings
  if (
    !customIDs
    || !customIDs?.planKey
    || teamPlanInfo.status === 'loading'
    || (!settings.allowStarterPlans
      && teamPlanInfo?.data?.tier
      && starterPlanTypes.includes(teamPlanInfo?.data?.tier))
    || (!settings.allowCurfPlans && upgradeRequestEnabled)
    || (!settings.allowFigmaConnectPlans && activeProjectConnection)
  ) {
    return null
  }

  return trackExperimentExposure
}

// Export with refactored name
export const w = getExperimentExposureCallback
