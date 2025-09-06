import { wasmIntegration } from '@sentry/wasm'
import { LogLevelStr } from '../905/361972'
import { getFeatureFlags } from '../905/601108'
import { observabilityClient } from '../905/602906'
import { getInitialOptions } from '../figma_app/169182'

/**
 * Checks if Sentry WASM integration should be enabled.
 * @returns {boolean}
 */
function isSentryWasmEnabled(): boolean {
  // l (original variable)
  return Boolean(
    getInitialOptions().frontend_sentry_dsn
    && getFeatureFlags().frontend_sentry_wasm_integration,
  )
}

/**
 * Returns an array of Sentry integrations based on feature flags.
 * @returns {Array}
 */
export function setupSentryIntegrations(): unknown[] {
  // $$d3 (original function)
  const integrations: unknown[] = []
  if (isSentryWasmEnabled()) {
    integrations.push(wasmIntegration())
  }
  return integrations
}

/**
 * Marks the start of a performance span and starts a vital in observability.
 * @param {string} spanName
 * @param {string} team
 * @param {number} startTime
 */
export function startPerformanceSpan(spanName: string, team: string, startTime?: number): void {
  // $$c1 (original function)
  if (window.performance.mark && window.performance.measure) {
    window.performance.mark(`${spanName}.startSpan`, {
      startTime,
    })
    observabilityClient.startVital(spanName, {
      level: LogLevelStr.INFO,
      context: { team },
    })
  }
}

/**
 * Marks the end of a performance span, measures it, and stops the vital.
 * @param {string} spanName
 * @param {number} endTime
 */
export function endPerformanceSpan(spanName: string, endTime?: number): void {
  // $$u0 (original function)
  if (window.performance.mark && window.performance.measure) {
    window.performance.mark(`${spanName}.endSpan`, {
      startTime: endTime,
    })
    try {
      window.performance.measure(spanName, `${spanName}.startSpan`, `${spanName}.endSpan`)
      window.performance.clearMarks(`${spanName}.startSpan`)
      window.performance.clearMarks(`${spanName}.endSpan`)
    }
    catch {
      // Ignore errors
    }
    observabilityClient.stopVital(spanName, {
      level: LogLevelStr.INFO,
    })
  }
}

/**
 * Measures the duration of a synchronous function, optionally tracking performance.
 * @param {string} spanName
 * @param {string} team
 * @param {() => void} fn
 * @param {boolean} trackPerformance
 * @returns {number} Duration in milliseconds
 */
export function measureSyncDuration(spanName: string, team: string, fn: () => void, trackPerformance: boolean = true): number {
  // $$p4 (original function)
  if (trackPerformance)
    startPerformanceSpan(spanName, team)
  const start = window.performance.now()
  fn()
  if (trackPerformance)
    endPerformanceSpan(spanName)
  return window.performance.now() - start
}

/**
 * Measures the duration of an async function, tracking performance.
 * @param {string} spanName
 * @param {string} team
 * @param {() => Promise<any>} fn
 * @returns {Promise<{result: any, duration: number}>}
 */
export async function measureAsyncDuration<T>(spanName: string, team: string, fn: () => Promise<T>): Promise<{ result: Promise<T>, duration: number }> {
  // $$m2 (original function)
  startPerformanceSpan(spanName, team)
  const start = window.performance.now()
  const resultPromise = fn()
  try {
    await resultPromise
  }
  finally {
    endPerformanceSpan(spanName)
  }
  return {
    result: resultPromise,
    duration: window.performance.now() - start,
  }
}

// Export aliases for backward compatibility
export const Dz = endPerformanceSpan // $$u0
export const Lk = startPerformanceSpan // $$c1
export const ZO = measureAsyncDuration // $$m2
export const kk = setupSentryIntegrations // $$d3
export const vo = measureSyncDuration // $$p4
