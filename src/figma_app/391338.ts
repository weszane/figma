/* eslint-disable no-console */
import { get } from 'lodash-es'
import { useEffect, useRef, useState } from 'react'
import { shallowEqual } from 'react-redux'
import { useMemoCustom, useMemoStable } from '../905/19536'
import { selectWithShallowEqual } from '../905/103090'
import { Tf } from '../905/280919'
import { analyticsEventManager } from '../905/449184'
import { useWebLoggerTimer, WebLoggerTimer } from '../905/485103'
import { resolveTeamId } from '../905/515860'
import { getFeatureFlags } from '../905/601108'
import { adminPermissionConfig } from '../905/654645'
import { noop } from '../figma_app/465776'
import { PerfPriority } from '../figma_app/763686'
/**
 * Types for discrepancy reporting and comparison
 */
export type DiscrepancySeverity = 'high' | 'low'

export interface Discrepancy {
  path: (string | number)[]
  oldValue: any
  newValue: any
  severity: DiscrepancySeverity
}

export interface ShadowReadOptions {
  oldValue?: any
  oldLatencyMs?: number
  newValue?: any
  newLatencyMs?: number
  contextArgs?: Record<string, any>
  label?: string
  debug?: boolean
  enableFullRead?: boolean
  enableShadowRead?: boolean
  comparator?: (a: any, b: any) => Discrepancy[]
  maxReports?: number
}

export interface ShadowReadComparisonConfig {
  comparisonConfig?: Record<string, any>
  [key: string]: any
}

/**
 * Compare two values and report discrepancies if enabled.
 * Original: $$f2
 */
export function setupShadowRead({
  oldValue,
  oldLatencyMs,
  newValue,
  newLatencyMs,
  contextArgs,
  label,
  debug = false,
  enableFullRead = false,
  enableShadowRead = true,
  comparator = defaultComparator(),
  maxReports,
}: ShadowReadOptions) {
  if (enableShadowRead && isShadowReadReportingEnabled() && !hasReachedMaxReports(label, maxReports)) {
    reportDiscrepancies({
      label,
      discrepancies: comparator(oldValue, newValue),
      oldLatencyMs,
      newLatencyMs,
      contextArgs,
      debug,
    })
  }
  return enableFullRead ? newValue : oldValue
}

const defaultComparatorConfig = {
  ignore: false,
  strictRecords: true,
  strictLists: true,
}

/**
 * Compare using custom config and report discrepancies.
 * Original: $$E5
 */
export function setupShadowReadWithConfig({
  comparisonConfig,
  ...rest
}: ShadowReadComparisonConfig) {
  const comparator = createComparator({
    ...defaultComparatorConfig,
    ...comparisonConfig,
  })
  return setupShadowRead({
    ...rest,
    comparator,
  })
}

/**
 * Serialize value for logging.
 * Original: y
 */
function serializeValue(value: any): string {
  return JSON.stringify(value, (_key, val) => val === undefined ? 'undefined' : val)
}

const reportCountMap = new Map<string, number>()

/**
 * Check if max reports reached for a label.
 * Original: T
 */
function hasReachedMaxReports(label: string, maxReports?: number): boolean {
  if (maxReports === undefined)
    return false
  const count = reportCountMap.get(label) ?? 0
  if (count >= maxReports)
    return true
  reportCountMap.set(label, count + 1)
  return false
}

/**
 * Report discrepancies to analytics.
 * Original: I
 */
function reportDiscrepancies({
  label,
  discrepancies,
  oldLatencyMs,
  newLatencyMs,
  contextArgs,
  debug,
}: {
  label: string
  discrepancies: Discrepancy[]
  oldLatencyMs?: number
  newLatencyMs?: number
  contextArgs?: Record<string, any>
  debug?: boolean
}) {
  if (debug) {
    if (discrepancies.length > 0) {
      console.log(`[Shadow read] '${label}' has discrepancies ⚠️`, discrepancies)
    }
    else {
      console.log(`[Shadow read] '${label}' has no discrepancies ✅`)
    }
  }
  const baseEvent = {
    label,
    contextArgs: serializeValue(contextArgs ?? {}),
    datadogRUMSessionId: Tf.sessionId ? `https://go/dd/rum/sid/${Tf.sessionId}` : '',
  }
  if (discrepancies.length > 0) {
    const maxSeverity = discrepancies.reduce((sev, d) => d.severity === 'high' ? 'high' : sev, 'low')
    analyticsEventManager.trackDefinedEvent('data_migrations.shadow_read_discrepancy', {
      ...baseEvent,
      discrepancy_maxSeverity: maxSeverity,
    })
  }
  else {
    analyticsEventManager.trackDefinedEvent('data_migrations.shadow_read_match', baseEvent)
  }
  if (discrepancies.length > 0) {
    discrepancies
      .sort((a, b) => a.severity === b.severity ? 0 : a.severity === 'high' ? -1 : 1)
      .slice(0, 10)
      .forEach((d) => {
        analyticsEventManager.trackDefinedEvent('data_migrations.shadow_read_discrepancy_details', {
          ...baseEvent,
          discrepancy_path: d.path.join('.'),
          discrepancy_oldValue: serializeValue(d.oldValue),
          discrepancy_newValue: serializeValue(d.newValue),
          discrepancy_severity: d.severity,
        })
      })
  }
  if (oldLatencyMs !== undefined) {
    analyticsEventManager.trackDefinedEvent('data_migrations.shadow_read_latency_old_value', {
      ...baseEvent,
      latency_ms: oldLatencyMs,
    })
  }
  if (newLatencyMs !== undefined) {
    analyticsEventManager.trackDefinedEvent('data_migrations.shadow_read_latency_new_value', {
      ...baseEvent,
      latency_ms: newLatencyMs,
    })
  }
}

/**
 * Shadow read hook for React components.
 * Original: $$S9
 */
export function useShadowRead({
  oldValue,
  oldValueReady = true,
  newValue,
  newValueReady = true,
  label,
  contextArgs,
  withDefaultContextArgs = true,
  enableFullRead = false,
  enableShadowRead = true,
  debug = false,
  trackLatency = true,
  timeoutMs,
  sampleRate__UNSTABLE = 1,
  comparator = defaultComparator(),
  maxReports,
}: {
  oldValue: any
  oldValueReady?: boolean
  newValue: any
  newValueReady?: boolean
  label?: string
  contextArgs?: Record<string, any>
  withDefaultContextArgs?: boolean
  enableFullRead?: boolean
  enableShadowRead?: boolean
  debug?: boolean
  trackLatency?: boolean
  timeoutMs?: number
  sampleRate__UNSTABLE?: number
  comparator?: (a: any, b: any) => Discrepancy[]
  maxReports?: number
}) {
  const mergedContextArgs = getContextArgs(withDefaultContextArgs, contextArgs)
  const [comp] = useState(() => comparator)
  const hasReported = useRef(false)
  const [shouldSample] = useState(() => Math.random() < sampleRate__UNSTABLE)
  const shouldReport = enableShadowRead && shouldSample
  const shouldTrackLatency = trackLatency && shouldReport

  useWebLoggerTimer(oldValueReady, (duration, backgrounded, offlined) => {
    logLatency({
      label,
      variant: 'old',
      contextArgs,
      debug,
      duration,
    }, { backgrounded, offlined })
  }, {
    enabled: shouldTrackLatency,
    onTimeout: (backgrounded, offlined) => {
      logTimeout({
        label,
        variant: 'old',
        contextArgs,
        debug,
        duration: timeoutMs,
      }, { backgrounded, offlined })
    },
    timeoutMs,
  })

  useWebLoggerTimer(newValueReady, (duration, backgrounded, offlined) => {
    logLatency({
      label,
      variant: 'new',
      contextArgs,
      debug,
      duration,
    }, { backgrounded, offlined })
  }, {
    enabled: shouldTrackLatency,
    onTimeout: (backgrounded, offlined) => {
      logTimeout({
        label,
        variant: 'new',
        contextArgs,
        debug,
        duration: timeoutMs,
      }, { backgrounded, offlined })
    },
    timeoutMs,
  })

  useEffect(() => {
    if (!hasReported.current && shouldReport && newValueReady && oldValueReady) {
      setupShadowRead({
        oldValue,
        newValue,
        label,
        contextArgs: mergedContextArgs,
        comparator: comp,
        debug,
        maxReports,
      })
      hasReported.current = true
    }
  }, [shouldReport, oldValue, newValue, label, mergedContextArgs, comp, debug, maxReports, newValueReady, oldValueReady])

  return enableFullRead ? newValue : oldValue
}

/**
 * Custom shallow comparison for memoization.
 * Original: v
 */
function shallowCompareWithErrors(a: any, b: any): boolean {
  const { errors, ...restA } = a
  const { errors: errorsB, ...restB } = b
  return shallowEqual(errors, errorsB) && shallowEqual(restA, restB)
}

/**
 * Shadow read hook for loaded status objects.
 * Original: $$A3
 */
export function useShadowReadLoaded({
  oldValue,
  newValue,
  comparisonConfig,
  ...rest
}: {
  oldValue: any
  newValue: any
  comparisonConfig?: Record<string, any>
  [key: string]: any
}) {
  const memoOld = useMemoCustom(() => oldValue, [oldValue], shallowCompareWithErrors)
  const memoNew = useMemoCustom(() => newValue, [newValue], shallowCompareWithErrors)
  const oldReady = memoOld.status === 'loaded'
  const newReady = memoNew.status === 'loaded'
  const comparator = createComparator(comparisonConfig)

  useShadowRead({
    oldValue: memoOld.data,
    oldValueReady: oldReady,
    newValue: memoNew.data,
    newValueReady: newReady,
    comparator,
    ...rest,
  })

  return rest.enableFullRead ? memoNew : memoOld
}

/**
 * Log latency event.
 * Original: x
 */
function logLatency({ label, variant, contextArgs, debug, duration }: { label: string, variant: string, contextArgs?: any, debug?: boolean, duration?: number }, { backgrounded, offlined }: { backgrounded: boolean, offlined: boolean }) {
  if (!isShadowReadReportingEnabled())
    return
  const wasIdle = backgrounded || offlined
  if (debug) {
    console.log(`[Shadow read] [variant: ${variant.toUpperCase()}] '${label}' took ${duration}ms to be ready ⏱ (was idle? ${wasIdle})`)
  }
  analyticsEventManager.trackDefinedEvent(
    variant === 'old' ? 'data_migrations.shadow_read_latency_old_value' : 'data_migrations.shadow_read_latency_new_value',
    {
      label,
      latency_ms: duration,
      idled: wasIdle,
      contextArgs: serializeValue(contextArgs ?? {}),
      datadogRUMSessionId: Tf.sessionId || '',
    },
  )
}

/**
 * Log timeout event.
 * Original: N
 */
function logTimeout({ label, variant, contextArgs, debug, duration }: { label: string, variant: string, contextArgs?: any, debug?: boolean, duration?: number }, { backgrounded, offlined }: { backgrounded: boolean, offlined: boolean }) {
  if (!isShadowReadReportingEnabled())
    return
  const wasIdle = backgrounded || offlined
  if (debug) {
    console.log(`[Shadow read] '${label}' has timed out after ${duration}ms ⏱ (was idle? ${wasIdle})`)
  }
  analyticsEventManager.trackDefinedEvent(
    variant === 'old' ? 'data_migrations.shadow_read_latency_old_value_timeout' : 'data_migrations.shadow_read_latency_new_value_timeout',
    {
      label,
      idled: wasIdle,
      contextArgs: serializeValue(contextArgs ?? {}),
      datadogRUMSessionId: Tf.sessionId || '',
    },
  )
}

/**
 * Timer for latency reporting.
 * Original: $$C7
 */
export function createLatencyTimer({
  label,
  variant,
  contextArgs,
  timeoutMs = 10000,
  debug = false,
}: {
  label: string
  variant: string
  contextArgs?: any
  timeoutMs?: number
  debug?: boolean
}) {
  const timer = new WebLoggerTimer({
    onTimeout: (backgrounded, offlined) => {
      logTimeout(
        { label, variant, contextArgs, debug, duration: timeoutMs },
        { backgrounded, offlined },
      )
    },
    timeoutMs,
  })
  return () => {
    timer.stop((duration, backgrounded, offlined) => {
      logLatency(
        { label, variant, contextArgs, debug, duration },
        { backgrounded, offlined },
      )
    }, { skipIfIdle: false })
  }
}

/**
 * Hook for latency reporting.
 * Original: $$w4
 */
export function useLatencyLogger({
  isReady,
  enabled = true,
  label,
  variant,
  contextArgs,
  withDefaultContextArgs = true,
  timeoutMs = 10000,
  debug = false,
}: {
  isReady: boolean
  enabled?: boolean
  label: string
  variant: string
  contextArgs?: any
  withDefaultContextArgs?: boolean
  timeoutMs?: number
  debug?: boolean
}) {
  const mergedContextArgs = getContextArgs(withDefaultContextArgs, contextArgs)
  useWebLoggerTimer(isReady, (duration, backgrounded, offlined) => {
    logLatency(
      { label, variant, contextArgs: mergedContextArgs, debug, duration },
      { backgrounded, offlined },
    )
  }, {
    enabled,
    onTimeout: (backgrounded, offlined) => {
      logTimeout(
        { label, variant, contextArgs: mergedContextArgs, debug, duration: timeoutMs },
        { backgrounded, offlined },
      )
    },
    timeoutMs,
  })
}

/**
 * Get context args for reporting.
 * Original: O
 */
function getContextArgs(withDefault: boolean, contextArgs?: Record<string, any>) {
  if (useRef(withDefault).current !== withDefault) {
    throw new Error('useMemoizedContextArgs: withDefaultContextArgs cannot change during the lifetime of the hook!')
  }
  const defaultArgs = withDefault
    ? selectWithShallowEqual(state => ({
        currentTeamId: state.currentTeamId,
        getTeamIdReturnValue: resolveTeamId(state),
        currentOrgId: state.currentUserOrgId,
        currentUserId: state.user?.id ?? null,
        openFileKey: state.openFile?.key ?? null,
        selectedView: state.selectedView?.view ?? null,
      }))
    : null
  return useMemoStable(() => ({
    ...defaultArgs,
    ...contextArgs,
  }), [defaultArgs, contextArgs])
}

/**
 * Utility to resolve value if function.
 * Original: R
 */
function resolveIfFunction(value: any, arg: any) {
  return typeof value === 'function' ? value(arg) : value
}

/**
 * Default comparator for discrepancies.
 * Original: $$P8
 */
export function defaultComparator(config?: Record<string, any>) {
  const baseConfig = { ignore: false }
  return (a: any, b: any) => compareValues(a, b, [], { ...baseConfig, ...config })
}

/**
 * Compare two values for discrepancies.
 * Original: D
 */
function compareValues(a: any, b: any, path: (string | number)[], config: Record<string, any>): Discrepancy[] {
  if (resolveIfFunction(config.ignore, path))
    return []
  if (Array.isArray(a) !== Array.isArray(b) || isObject(a) !== isObject(b)) {
    return [{
      path,
      oldValue: a,
      newValue: b,
      severity: 'high',
    }]
  }
  let discrepancies: Discrepancy[] = []
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      discrepancies.push({
        path,
        severity: 'high',
        oldValue: a,
        newValue: b,
      })
      return discrepancies
    }
    for (let i = 0; i < a.length; i++) {
      discrepancies.push(...compareValues(a[i], b[i], [...path, String(i)], config))
    }
  }
  else if (isObject(a) && isObject(b)) {
    for (const key of getAllKeys(a, b)) {
      const nextPath = path.concat(key)
      discrepancies.push(...compareValues(a[key], b[key], nextPath, config))
    }
  }
  else {
    discrepancies.push(...comparePrimitives(a, b, path))
  }
  return discrepancies
}

/**
 * Create a comparator with config.
 * Original: $$k1
 */
export function createComparator(config?: Record<string, any>) {
  return (a: any, b: any) => compareWithConfig(a, b, [], { ...defaultComparatorConfig, ...config })
}

/**
 * Compare two values with config for discrepancies.
 * Original: e (inside $$k1)
 */
function compareWithConfig(a: any, b: any, path: (string | number)[], config: Record<string, any>): Discrepancy[] {
  if (resolveIfFunction(config.ignore, path))
    return []
  const strictLists = resolveIfFunction(config.strictLists, path)
  if (Array.isArray(a) !== Array.isArray(b) || isObject(a) !== isObject(b)) {
    return [{
      path,
      oldValue: a,
      newValue: b,
      severity: 'high',
    }]
  }
  let discrepancies: Discrepancy[] = []
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.every(isPrimitive) && b.every(isPrimitive)) {
      discrepancies.push(...compareValues(a, b, path, config))
    }
    else {
      // Keyed comparison for arrays of objects
      const getKeyPath = (obj: any, depth = 0): string[] | null => {
        if (!isObject(obj))
          return null
        if ('id' in obj)
          return ['id']
        if ('key' in obj)
          return ['key']
        if (depth === 0) {
          for (const k in obj) {
            const subKey = getKeyPath(obj[k], depth + 1)
            if (subKey)
              return [k, ...subKey]
          }
        }
        return null
      }
      const mapByKey = (arr: any[]) => {
        const map = new Map()
        for (const item of arr) {
          const keyPath = getKeyPath(item)
          if (keyPath)
            map.set(get(item, keyPath), item)
        }
        return map
      }
      const mapA = mapByKey(a)
      const mapB = mapByKey(b)
      let listMismatch = false
      if (strictLists && mapA.size !== mapB.size)
        listMismatch = true
      if (mapA.size !== 0 || mapB.size !== 0 || a.length === 0 && b.length === 0) {
        for (const [key, itemA] of mapA) {
          if (!mapB.has(key)) {
            if (strictLists)
              listMismatch = true
            continue
          }
          discrepancies.push(...compareWithConfig(itemA, mapB.get(key), [...path, key], config))
        }
      }
      else {
        discrepancies.push({
          path,
          oldValue: a,
          newValue: b,
          severity: 'high',
        })
      }
      if (listMismatch) {
        discrepancies.push({
          path,
          severity: 'high',
          oldValue: Array.from(mapA.keys()),
          newValue: Array.from(mapB.keys()),
        })
      }
    }
  }
  else if (isObject(a) && isObject(b)) {
    for (const key in a) {
      const nextPath = [...path, key]
      const strictRecords = resolveIfFunction(config.strictRecords, nextPath)
      if (key in b || strictRecords) {
        discrepancies.push(...compareWithConfig(a[key], b[key], nextPath, config))
      }
    }
  }
  else {
    discrepancies.push(...comparePrimitives(a, b, path))
  }
  return discrepancies
}

/**
 * Compare primitive values for discrepancies.
 * Original: M
 */
function comparePrimitives(a: any, b: any, path: (string | number)[]): Discrepancy[] {
  if (a === b || typeof a === 'function' || typeof b === 'function')
    return []
  const nullish = [null, undefined, false]
  if (nullish.includes(a) && nullish.includes(b) && a !== b) {
    return [{
      path,
      oldValue: a,
      newValue: b,
      severity: 'low',
    }]
  }
  if (typeof a !== typeof b) {
    return [{
      path,
      oldValue: a,
      newValue: b,
      severity: 'high',
    }]
  }
  if (a instanceof Date && b instanceof Date) {
    if (Math.abs(a.getTime() - b.getTime()) >= 1000) {
      return [{
        path,
        oldValue: a.toISOString(),
        newValue: b.toISOString(),
        severity: 'high',
      }]
    }
    return []
  }
  if (a !== b) {
    return [{
      path,
      oldValue: a,
      newValue: b,
      severity: 'high',
    }]
  }
  return []
}

/**
 * Get all keys from two objects.
 * Original: function inside D
 */
function getAllKeys(a: Record<string, any>, b: Record<string, any>): string[] {
  const keys: Record<string, boolean> = {}
  for (const k in a) keys[k] = true
  for (const k in b) keys[k] = true
  return Object.keys(keys)
}

/**
 * Check if value is a plain object.
 * Original: F
 */
function isObject(val: any): boolean {
  return typeof val === 'object' && !Array.isArray(val) && val !== null && !(val instanceof Date)
}

/**
 * Check if value is primitive.
 * Original: j
 */
function isPrimitive(val: any): boolean {
  return typeof val !== 'object' && typeof val !== 'function'
}

/**
 * Check if shadow read reporting is enabled.
 * Original: U
 */
function isShadowReadReportingEnabled(): boolean {
  return getFeatureFlags().use_shadow_read_reporting
}

/**
 * Class for shadow read reporting.
 * Original: B
 */
class ShadowReadReporter {
  /**
   * Report discrepancies.
   * Original: reportDiscrepancies
   */
  reportDiscrepancies(label: string, discrepancies: Discrepancy[], options: { maxReports?: number, oldLatencyMs?: number, newLatencyMs?: number, contextArgs?: any, debug?: boolean }) {
    if (isShadowReadReportingEnabled() && (!hasReachedMaxReports(label, options.maxReports) || reportDiscrepancies)) {
      reportDiscrepancies({
        label,
        discrepancies: discrepancies.map(({ severity, ...rest }) => ({
          ...rest,
          severity: mapPerfPriorityToSeverity(severity),
        })),
        oldLatencyMs: options.oldLatencyMs,
        newLatencyMs: options.newLatencyMs,
        contextArgs: options.contextArgs,
        debug: options.debug,
      })
    }
  }

  /**
   * Compare and report discrepancies.
   * Original: compareAndReportDiscrepancies
   */
  compareAndReportDiscrepancies(label: string, oldValue: any, newValue: any, options: { maxReports?: number, oldLatencyMs?: number, newLatencyMs?: number, contextArgs?: any, debug?: boolean }) {
    if (!isShadowReadReportingEnabled() || hasReachedMaxReports(label, options.maxReports))
      return
    const discrepancies = defaultComparator()(oldValue, newValue)
    reportDiscrepancies({
      label,
      discrepancies,
      oldLatencyMs: options.oldLatencyMs,
      newLatencyMs: options.newLatencyMs,
      contextArgs: options.contextArgs,
      debug: options.debug,
    })
  }
}

/**
 * Map PerfPriority to severity string.
 * Original: function inside B
 */
function mapPerfPriorityToSeverity(priority: any): DiscrepancySeverity {
  switch (priority) {
    case PerfPriority.HIGH:
      return 'high'
    case PerfPriority.LOW:
      return 'low'
    default:
      noop(priority)
      return 'low'
  }
}

/**
 * Initialize shadow read reporter.
 * Original: $$G6
 */
export function initializeShadowReadReporter() {
  return new ShadowReadReporter()
}

// Exported variables with refactored names
export const A5 = adminPermissionConfig
export const BG = createComparator
export const HZ = setupShadowRead
export const MF = useShadowReadLoaded
export const Vy = useLatencyLogger
export const X7 = setupShadowReadWithConfig
export const jV = initializeShadowReadReporter
export const kW = createLatencyTimer
export const st = defaultComparator
export const u8 = useShadowRead
export { adminPermissionConfig }
