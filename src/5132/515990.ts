import { TrackingKeyEnum } from "../905/696396"
import { useTracking } from "../figma_app/831799"
/**
 * Checks if the current tracking context matches the Resource Hub Lightbox RDP tracking key.
 *
 * @returns boolean indicating whether the current tracking name matches RESOURCE_HUB_LIGHTBOX_RDP
 */
export function isResourceHubLightboxRdp(): boolean {
  return useTracking().name === TrackingKeyEnum.RESOURCE_HUB_LIGHTBOX_RDP
}

export const I = isResourceHubLightboxRdp
