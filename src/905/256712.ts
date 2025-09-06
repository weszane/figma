import { getFeatureFlags } from '../905/601108'
import { atomStoreManager } from '../figma_app/27355'
import { getInitialOptions } from '../figma_app/169182'
import { h } from '../figma_app/276445'

/**
 * Error configuration options for Sentry integration.
 */
export interface SentryConfigOptions {
  useSentryErrors: boolean
  slogToConsole: boolean
  haveDSN: boolean
  shouldIgnoreErrors: () => boolean
}

/**
 * Sentry configuration class.
 * (Original: $$s)
 */
export class SentryConfig {
  useSentryErrors: boolean
  slogToConsole: boolean
  haveDSN: boolean
  enabled: boolean
  shouldIgnoreErrors: () => boolean

  constructor(options: SentryConfigOptions) {
    this.useSentryErrors = options.useSentryErrors
    this.slogToConsole = options.slogToConsole
    this.haveDSN = options.haveDSN
    this.enabled = options.useSentryErrors
    this.shouldIgnoreErrors = options.shouldIgnoreErrors
  }

  /**
   * Returns whether errors should be ignored.
   */
  get ignoreErrors(): boolean {
    return this.shouldIgnoreErrors()
  }
}

/**
 * Wrapper for SentryConfig.
 * (Original: d)
 */
export class SentryConfigWrapper {
  config: SentryConfig

  constructor(config: SentryConfig) {
    this.config = config
  }
}

let sentryConfigInstance: SentryConfigWrapper | undefined

/**
 * Returns the current Sentry configuration.
 * (Original: $$c0)
 */
export function getSentryConfig(): SentryConfig {
  if (sentryConfigInstance) {
    return sentryConfigInstance.config
  }

  const featureFlags = getFeatureFlags()
  const initialOptions = getInitialOptions()

  sentryConfigInstance = new SentryConfigWrapper(
    new SentryConfig({
      slogToConsole: featureFlags.slog_to_console || false,
      haveDSN: !!initialOptions.frontend_sentry_dsn,
      useSentryErrors:
        !!initialOptions.frontend_sentry_dsn && !initialOptions.local_dev_on_cluster,
      shouldIgnoreErrors: () => atomStoreManager.get(h) !== 'ok',
    }),
  )

  return sentryConfigInstance.config
}

/**
 * Alias for getSentryConfig.
 * (Original: s)
 */
export const s = getSentryConfig
