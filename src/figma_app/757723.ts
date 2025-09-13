import { getTrackingSessionId } from '../905/471229'
import { getFeatureFlags } from '../905/601108'
import { useCurrentUserOrg } from '../905/845253'
import { PROD_PLUGIN_IDS } from '../figma_app/455620'
import { isAIFeaturesEnabledForCurrentUser } from '../figma_app/459490'
import { isFigmaMobileApp } from '../figma_app/778880'

/**
 * Set of Cortex Analytics plugin IDs.
 * (original: $$d1)
 */
export const cortexAnalyticsPluginIds = new Set([
  PROD_PLUGIN_IDS.cortexAnalytics,
  PROD_PLUGIN_IDS.cortexAnalytics2,
])

/**
 * Generates tracking context for analytics.
 * @param params - Object containing openFile, currentUserOrgId, user.
 * @returns Tracking context object.
 * (original: $$c0)
 */
export function createTrackingContext(params: {
  openFile?: { teamId?: string, key?: string }
  currentUserOrgId?: string
  user?: { id?: string }
}) {
  const { openFile, currentUserOrgId, user } = params
  const teamId = openFile?.teamId ?? null
  const fileKey = openFile?.key ?? null
  const userId = user?.id ?? null

  return {
    teamId,
    orgId: currentUserOrgId,
    fileKey,
    userId,
    trackingSessionId: getTrackingSessionId(),
    fileSeq: null,
  }
}

/**
 * Determines if handbrake feature should be disabled for current user.
 * @returns True if handbrake should be disabled, false otherwise.
 * (original: $$u2)
 */
export function isHandbrakeDisabledForCurrentUser(): boolean {
  const currentUserOrg = useCurrentUserOrg()
  const aiFeaturesEnabled = isAIFeaturesEnabledForCurrentUser()
  const featureFlags = getFeatureFlags()

  if (
    featureFlags.figjam_generate_handbrake
    || isFigmaMobileApp()
    || aiFeaturesEnabled
    || currentUserOrg?.k12_google_org
  ) {
    return false
  }
  return true
}

// Refactored exports to match new names
export const OU = createTrackingContext
export const RA = cortexAnalyticsPluginIds
export const tG = isHandbrakeDisabledForCurrentUser
