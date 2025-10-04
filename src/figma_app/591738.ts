import { useCallback } from "react"
import { getFeatureFlags } from "../905/601108"
import { useCurrentUserOrgId } from "../905/845253"
import { atom, useAtomWithSubscription } from "../figma_app/27355"
import { isDevEnvironment } from "../figma_app/169182"
import { FFileType } from "../figma_app/191312"
import { isFigmaEmail } from "../figma_app/416935"
import { selectExperimentConfigHook } from "../figma_app/594947"
import { isAndroidOrIphoneNotFigmaMobile } from "../figma_app/778880"
import { desktopAPIInstance } from "../figma_app/876459"

const useHasCurrentOrg = () => !!useCurrentUserOrgId()

/**
 * Check if a value is truthy
 * @param value - The value to check
 * @returns Boolean indicating if the value is truthy
 */
export function isTruthy(value: any): boolean {
  return !!value
}

/**
 * Always returns false
 * @returns false
 */
export function alwaysFalse(): boolean {
  return false
}

/**
 * Check if pinned comments feature flag is enabled
 * @returns Boolean indicating if pinned comments are enabled
 */
export function isPinnedCommentsEnabled(): boolean {
  return !!getFeatureFlags().rollout_pinned_comments_ff
}

/**
 * Check if pinned comments should be shown for a file
 * @param options - Options containing user, file and number of pinned comment threads
 * @returns Boolean indicating if pinned comments should be shown
 */
export function shouldShowPinnedComments({
  user,
  file,
  numPinnedCommentThreads,
}: {
  user?: { email: string }
  file?: {
    editorType: FFileType
    team?: any
    parentOrgId?: string
  }
  numPinnedCommentThreads?: number
} = {}): boolean {
  return (
    !!isPinnedCommentsEnabled()
    && !!user
    && !!file
    && file.editorType === FFileType.DESIGN
    && (
      (!!numPinnedCommentThreads && numPinnedCommentThreads > 0)
      || !!(isDevEnvironment() && isFigmaEmail(user.email))
      || (!!file.team && !file.parentOrgId)
    )
  )
}

/**
 * Check if user can pin comments based on experiment config
 * @returns Boolean indicating if user can pin comments
 */
export function canPinComments(): boolean {
  const { getConfig } = selectExperimentConfigHook("rollout_pinned_comments_ff")
  return getConfig().getValue("can_pin_comments", false)
}

/**
 * Check if editor bell should be shown based on experiment config
 * @returns Function that returns boolean indicating if editor bell should be shown
 */
export function shouldShowEditorBell(): () => boolean {
  const { getConfig } = selectExperimentConfigHook("exp_in_file_notif_bell")
  return () =>
    !desktopAPIInstance
    && !isAndroidOrIphoneNotFigmaMobile
    && getConfig().get("has_editor_bell", false)
}

/**
 * Check if Google federated CM is enabled
 * @returns Boolean indicating if Google federated CM is enabled
 */
export function isGoogleFederatedCMEnabled(): boolean {
  return getFeatureFlags().google_federated_cm ?? false
}

/**
 * Enum for community home shelf display modes
 */
export enum CommunityHomeShelfMode {
  DEFAULT = "default",
  PZ_THEN_PRODUCT = "pz_then_product",
  PRODUCT_THEN_PZ = "product_then_pz",
}

/**
 * Atom for community home shelf mode
 */
export const communityHomeShelfModeAtom = atom<CommunityHomeShelfMode | null>(null)

/**
 * Check if community home shelf is enabled
 * @returns Boolean indicating if community home shelf is enabled
 */
export function isCommunityHomeShelfEnabled(): boolean {
  const mode = useAtomWithSubscription(communityHomeShelfModeAtom)
  return mode === CommunityHomeShelfMode.PRODUCT_THEN_PZ || mode === CommunityHomeShelfMode.PZ_THEN_PRODUCT
}

/**
 * Hook to check if community home shelf experiment is enabled
 * @returns Callback function that returns boolean indicating if experiment is enabled
 */
export function useIsCommunityHomeShelfExperimentEnabled() {
  const hasCurrentOrg = useHasCurrentOrg()
  const { getConfig } = selectExperimentConfigHook("cmty_home_shelf_exp_v2__non_org")
  const { getConfig: getOrgConfig } = selectExperimentConfigHook("cmty_home_shelf_exp_v2__org")

  const configGetter = hasCurrentOrg ? getOrgConfig : getConfig

  return useCallback(() => configGetter().get("enabled", false), [configGetter])
}

// Export aliases for backward compatibility
export const Am = communityHomeShelfModeAtom
export const Hz = isTruthy
export const S$ = isGoogleFederatedCMEnabled
export const U6 = isPinnedCommentsEnabled
export const Un = isCommunityHomeShelfEnabled
export const aH = useIsCommunityHomeShelfExperimentEnabled
export const jg = CommunityHomeShelfMode
export const k3 = canPinComments
export const rW = shouldShowEditorBell
export const wN = alwaysFalse
export const yo = shouldShowPinnedComments
