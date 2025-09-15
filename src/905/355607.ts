import { F4 as getFigmaMobile } from '../figma_app/546509'
import { BrowserInfo } from '../figma_app/778880'

/**
 * Determines if the app should optimize for iPad.
 * Combines figma mobile optimization flag and browser info.
 * (Original: $$a0)
 */
export function shouldOptimizeForIpad(): boolean {
  const figmaMobile = getFigmaMobile()
  return figmaMobile?.shouldOptimizeForIpadApp || BrowserInfo.isIpad
}

/** Alias for shouldOptimizeForIpad (Original: $) */
export const $ = shouldOptimizeForIpad
