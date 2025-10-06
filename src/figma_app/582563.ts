import { customHistory } from '../905/612521'
import { getInitialOptions } from '../figma_app/169182'

/**
 * SafeModeOptions class (originally 'e')
 * Handles forced render time configuration for safe mode.
 */
class SafeModeOptions {
  /** Stores the forced render time value (ms) */
  static forcedRenderTimeMsValue: number | null = null

  /**
   * Initializes SafeModeOptions by checking user email and URL params.
   */
  static initialize(): void {
    const email = getInitialOptions().user_data?.email
    // Only apply for Figma or test Figma users
    if (email && (email.includes('@figma') || email.includes('@test.figma'))) {
      const param = new URLSearchParams(customHistory.location.search).get('safeModeRenderLimitMs')
      if (param) {
        SafeModeOptions.forcedRenderTimeMsValue = parseInt(param)
      }
    }
  }

  /**
   * Returns the forced render time value (ms), or null if not set.
   */
  getForcedRenderTimeMs(): number | null {
    return SafeModeOptions.forcedRenderTimeMsValue
  }
}

// Initialize SafeModeOptions on module load
SafeModeOptions.initialize()

/**
 * SafeModeRenderController (originally unnamed class)
 * Provides forced render time value, defaulting to -1 if unset.
 */
class SafeModeRenderController {
  constructor(safeModeOptions: SafeModeOptions) { }

  /**
   * Returns the forced render time value (ms), or -1 if not set.
   */
  getForcedRenderTimeMs(): number {
    const value = this.safeModeOptions.getForcedRenderTimeMs()
    return value != null ? value : -1
  }
}

// Exported instances (originally ld and iw)
export const safeModeInstance = new SafeModeOptions()
export const safeModeRenderController = new SafeModeRenderController(safeModeInstance)
export const ld = safeModeInstance
export const iw = safeModeRenderController
