import { useSelector } from 'react-redux'
import { orgSubscriptionAtom } from '../905/296690'
import { debugState } from '../905/407919'
import { canvasEditDisabledAtom, useIsCanvasEditDisabled } from '../905/595131'
import { getFeatureFlags } from '../905/601108'
import { useCurrentUserOrg } from '../905/845253'
import { getInitialDynamicConfig } from '../3973/389215'
import { atomStoreManager } from '../figma_app/27355'
import { zg } from '../figma_app/193867'
import { Me, ol } from '../figma_app/598018'

/**
 * Checks if AI features are disabled for the current org or team.
 * Original: $$_2
 * @param params - Object containing currentOrg, currentTeam, isViewer, isDisabledForViewers
 * @returns boolean
 */
export function isAIFeaturesDisabled({
  currentOrg,
  currentTeam,
  isViewer,
  isDisabledForViewers = true,
}: {
  currentOrg: any
  currentTeam: any
  isViewer: boolean
  isDisabledForViewers?: boolean
}): boolean {
  const orgOrTeamExists = !!currentOrg || !!currentTeam
  const viewerDisabled = !!isDisabledForViewers && !!isViewer
  const orgDisabled = !(currentOrg && isLlamaEnabledForOrg(currentOrg))
  const aiFeaturesDisabled
    = !!(currentOrg ? currentOrg?.ai_features_disabled : currentTeam?.ai_features_disabled)

  return orgOrTeamExists && (viewerDisabled || orgDisabled) && !!aiFeaturesDisabled
}

/**
 * Determines if editing is disabled based on debug state and org/team/user.
 * Original: $$h4
 * @param params - Object containing isDisabledForViewers
 * @returns boolean
 */
export function isEditDisabled({
  isDisabledForViewers,
}: {
  isDisabledForViewers: boolean
}): boolean {
  const state = debugState.getState()
  return (
    !!zg(state.selectedView)
    || !state.user
    || isAIFeaturesDisabled({
      currentOrg: atomStoreManager.get(orgSubscriptionAtom),
      currentTeam: atomStoreManager.get(Me),
      isViewer: atomStoreManager.get(canvasEditDisabledAtom),
      isDisabledForViewers,
    })
  )
}

/**
 * Checks if AI features are enabled for the current user/org/team.
 * Original: $$m3
 * @returns boolean
 */
export function isAIFeaturesEnabledForCurrentUser(): boolean {
  const enabled = !isAIFeaturesDisabled({
    currentOrg: useCurrentUserOrg() || null,
    currentTeam: ol(),
    isViewer: useIsCanvasEditDisabled(),
  })

  return (
    !!useSelector((state: any) => zg(state.selectedView) || !state.user) || !enabled
  )
}

/**
 * Gets the dynamic config value for AI org llama usage.
 * Original: $$g0
 * @param orgId - Organization ID
 * @returns string | undefined
 */
export function getOrgLlamaConfig(orgId: string): string | undefined {
  return getInitialDynamicConfig('ai_org_use_llama').get(orgId, undefined)
}

/**
 * Checks if Llama is enabled for the given org.
 * Original: $$f1
 * @param org - Organization object
 * @returns boolean
 */
export function isLlamaEnabledForOrg(org: any): boolean {
  if (!org || org.k12_google_org)
    return false
  const config = getOrgLlamaConfig(org.id)
  const gatedEnabled
    = config === 'enabled_for_gated_users' && !!getFeatureFlags().ai_user_use_llama
  return config === 'enabled_for_all_users' || gatedEnabled
}

// Export refactored names for external usage
export const BF = getOrgLlamaConfig
export const dZ = isLlamaEnabledForOrg
export const lt = isAIFeaturesDisabled
export const q8 = isAIFeaturesEnabledForCurrentUser
export const y8 = isEditDisabled
