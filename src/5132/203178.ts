import { isResourceHubLightboxRdp } from "../5132/515990"
import { useIsResourceHub } from "../figma_app/999312"
/**
 * Checks if the current context is within a Resource Hub lightbox or general Resource Hub.
 *
 * @returns {boolean} True if either condition is met, false otherwise.
 */
export function isResourceHubContext(): boolean {
  const isLightboxRdp = isResourceHubLightboxRdp()
  const isResourceHub = useIsResourceHub()
  return isLightboxRdp || isResourceHub
}

export const T = isResourceHubContext
