/**
 * Enum representing different plugin iframe modes
 * @enum {string}
 */
export enum PluginIframeMode {
  /** Plugin iframe used for fetch operations */
  FETCH = 'plugin-iframe-for-fetch',
  /** Plugin iframe used for inspection */
  INSPECT = 'plugin-iframe-in-inspect',
  /** Plugin iframe used in modal context */
  MODAL = 'plugin-iframe-in-modal',
  /** Plugin iframe used in buzz left panel */
  BUZZ_LEFT_PANEL = 'plugin-iframe-in-buzz-left-panel',
}

/** Internal constant for plugin rerun identifier */
export const INTERNAL_RERUN_PLUGIN_IDENTIFIER = '$INTERNAL_DO_NOT_USE$RERUN_PLUGIN$'

/** Default allowed origins for iframe communication */
export const DEFAULT_ALLOWED_ORIGINS = ['*']

/** Timeout duration in milliseconds for plugin operations */
export const PLUGIN_TIMEOUT_MS = 300

/** Retry delay in milliseconds for plugin operations */
export const PLUGIN_RETRY_DELAY_MS = 200

/** Window reference path for parent context */
export const PARENT_WINDOW_REFERENCE = 'window.parent.parent.parent'

/** Plugin iframe modes enumeration ($$n2) */
export const Wh = PluginIframeMode

/** Retry delay constant ($$a3) */
export const Yw = PLUGIN_RETRY_DELAY_MS

/** Timeout duration constant ($$r4) */
export const bA = PLUGIN_TIMEOUT_MS

/** Internal rerun identifier constant ($$s0) */
export const IN = INTERNAL_RERUN_PLUGIN_IDENTIFIER

/** Parent window reference constant ($$l1) */
export const NO = PARENT_WINDOW_REFERENCE

/** Allowed origins constant ($$o5) */
export const gH = DEFAULT_ALLOWED_ORIGINS
