import { openInVsCode } from '../905/850671'
import { sendUrlToParent } from '../figma_app/564528'
import { BrowserInfo } from '../figma_app/778880'
/**
 * Checks if the URL can be sent to parent or opened in VSCode, or handles meet device event.
 * Original function: $$s0
 * @param url - The URL to process.
 * @param event - Optional event object for meet device handling.
 * @returns True if any action was performed, false otherwise.
 */
export function handleUrlAction(url: string, event?: React.SyntheticEvent): boolean {
  // Try sending URL to parent or opening in VSCode
  if (sendUrlToParent(url) || openInVsCode(url)) {
    return true
  }
  // Handle meet device specific logic
  if (
    event
    && BrowserInfo.isMeetDevice
  ) {
    event.preventDefault()
    return true
  }
  return false
}

// Export with original variable name for traceability
export const e = handleUrlAction
