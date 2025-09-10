import { useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { useStableMemo } from '../905/19536'
import { SubscriptionManager } from '../905/417830'
import { LivegraphContext } from '../905/436043'
import { trackEventAnalytics } from '../905/449184'
import { RetainedPromiseManager } from '../905/491061'
import { TimerHandler } from '../905/609813'
import { hasInternalSymbol } from '../905/663269'
import { DEFAULT_DISABLED_STATE } from '../905/795642'
import { generateUUIDv4 } from '../905/871474'
import { deepEqual, DEFAULT_LOADING_STATE } from '../905/957591'
import { resourceUtils } from '../905/989992'
import { ConnectionState } from '../figma_app/28817'
import { useLatestRef } from '../figma_app/922077'

/**
 * LivegraphContext hook (f)
 * Throws if used outside LiveGraph context provider.
 */
function useLivegraphContext() {
  const context = useContext(LivegraphContext)
  if (!context) {
    throw new Error('Tried to use useSubscription outside a LiveGraph context provider')
  }
  return context
}

/**
 * Returns the Livegraph client from context.
 * @returns {any}
 */
export function getLivegraphClient() {
  return useLivegraphContext().client
}

/**
 * Checks if subscription is enabled.
 * @param {object} options
 * @returns {boolean}
 */
function isSubscriptionEnabled(options: any): boolean {
  return !Object.prototype.hasOwnProperty.call(options, 'enabled') || !!options.enabled
}

/**
 * Determines if argument is a view subscription tuple.
 * @param {any[]} args
 * @returns {boolean}
 */
function isViewSubscriptionTuple(args: any[]): boolean {
  return Array.isArray(args) && (args.length === 1 || args.length === 2) && hasInternalSymbol(args[0])
}

/**
 * useSubscription (formerly $$b2)
 * Handles subscription logic for a view and args.
 */
export function useSubscription(...args: any[]) {
  const view = isViewSubscriptionTuple(args) ? args[0].view : args[0]
  const viewArgs = isViewSubscriptionTuple(args) ? args[0].args : args[1]
  const options = (isViewSubscriptionTuple(args) ? args[1] : args[2]) ?? {}
  const enabled = isSubscriptionEnabled(options)

  const [result, setResult] = useState(enabled && viewArgs ? DEFAULT_LOADING_STATE : DEFAULT_DISABLED_STATE)
  const context = useLivegraphContext()
  const [lastArgs, setLastArgs] = useState(viewArgs)
  const traceId = options.traceId
  let currentResult = result

  if (context.mock && viewArgs) {
    currentResult = context.mock.useSubscription(view, viewArgs)
  }

  if (viewArgs && !deepEqual(viewArgs, lastArgs)) {
    setLastArgs(viewArgs)
    setResult(currentResult = enabled ? DEFAULT_LOADING_STATE : DEFAULT_DISABLED_STATE)
  }

  useEffect(() => {
    if (context.mock)
      return
    if (!enabled) {
      setResult(DEFAULT_DISABLED_STATE)
      return
    }
    if (!lastArgs)
      return
    const unsubscribe = context.client?.subscribe(view, lastArgs, setResult, traceId)
    return () => {
      unsubscribe?.()
    }
  }, [enabled, lastArgs, context.client, context.mock, view, traceId])

  return useMemo(() => resourceUtils.from(currentResult), [currentResult])
}

/**
 * useSuspendableSubscription (formerly $$I0)
 * Returns a suspendable resource for a subscription.
 */
export function useSuspendableSubscription(...args: any[]) {
  const view = isViewSubscriptionTuple(args) ? args[0].view : args[0]
  const viewArgs = isViewSubscriptionTuple(args) ? args[0].args : args[1]
  const options = (isViewSubscriptionTuple(args) ? args[1] : args[2]) ?? {}
  const memoizedArgs = useStableMemo(viewArgs, deepEqual)
  const enabled = isSubscriptionEnabled(options)

  // Helper for triggering updates
  const [_, setUpdateCount] = useState(0)
  const forceUpdate = useCallback(() => setUpdateCount(count => count + 1), [])

  const context = useLivegraphContext()
  const traceId = options.traceId

  // Generate a unique request ID for each args change
  const requestId = useMemo(() => {
    const ref = useRef(generateUUIDv4())
    const latestView = useLatestRef(view)
    const latestArgs = useLatestRef(memoizedArgs)
    if (latestView !== view || !deepEqual(memoizedArgs, latestArgs)) {
      ref.current = generateUUIDv4()
    }
    return ref.current
  }, [view, memoizedArgs])

  // Compose subscription args with requestId if static queries
  const subscriptionArgs = useMemo(() => {
    return context.client?.viewHasStaticQueries(view)
      ? { ...memoizedArgs, __requestId: requestId }
      : memoizedArgs
  }, [memoizedArgs, requestId, view, context.client])

  const subscriptionResult = enabled && subscriptionArgs
    ? context.mock
      ? context.mock.useSubscription(view, subscriptionArgs)
      : context.client?.getViewResult(view, subscriptionArgs) ?? DEFAULT_LOADING_STATE
    : DEFAULT_DISABLED_STATE

  useEffect(() => {
    if (!context.mock && enabled && subscriptionArgs) {
      return context.client?.subscribe(view, subscriptionArgs, forceUpdate, traceId)
    }
  }, [enabled, context.client, context.mock, view, traceId, subscriptionArgs, forceUpdate])

  const retainedPromiseManager = useMemo(() => new RetainedPromiseManager(() => () => { }), [])

  return useMemo(() => {
    const client = context.client
    if (!client)
      return resourceUtils.disabled()
    return resourceUtils.suspendableFrom(
      subscriptionResult,
      () =>
        new Promise((resolve, reject) => {
          const unsubscribe = client.subscribe(view, memoizedArgs, (res: any) => {
            if (res.status === 'loaded') {
              resolve(undefined)
              setTimeout(() => unsubscribe?.())
            }
            else if (res.errors) {
              reject(res.errors)
              setTimeout(() => unsubscribe?.())
            }
          })
        }),
      retainedPromiseManager,
    )
  }, [memoizedArgs, context.client, subscriptionResult, retainedPromiseManager, view])
}

/**
 * useMultiSubscription (formerly $$S7)
 * Handles multiple subscriptions for a set of args.
 */
export function useMultiSubscription(view: any, argsList: any[], options: any = {}) {
  const context = useLivegraphContext()
  const enabled = isSubscriptionEnabled(options)

  const [updateToken, setUpdateToken] = useState({})
  const [manager] = useState(() => new SubscriptionManager(context.client, () => setUpdateToken({})))

  useLayoutEffect(() => {
    manager.update(view, enabled ? argsList : [])
  }, [manager, view, argsList, enabled])

  useLayoutEffect(() => () => manager.clear(), [manager])

  return useMemo(
    () =>
      argsList.map(args => ({
        args,
        result: enabled ? resourceUtils.from(manager.currentResult(args)) : resourceUtils.disabled(),
      })),
    [manager, argsList, enabled, updateToken],
  )
}

/**
 * useConnectionState (formerly $$v3)
 * Tracks the connection state of the Livegraph client.
 */
export function useConnectionState() {
  const context = useLivegraphContext()
  const [state, setState] = useState(
    context.client ? context.client.getHealthStatus() : ConnectionState.DISCONNECTED,
  )

  useEffect(() => {
    if (context.client !== null) {
      return context.client.addHealthListener(setState)
    }
  }, [context])

  return state
}

/**
 * SubscriptionTimer (formerly class A)
 * Tracks timing and status for a subscription.
 */
class SubscriptionTimer {
  viewArgs: any
  traceId: string
  errors: any
  _isLoading: boolean
  timer: TimerHandler

  constructor(viewArgs: any, onTimeout: (timer: SubscriptionTimer) => void, timeoutMs: number) {
    this.viewArgs = viewArgs
    this.traceId = generateUUIDv4()
    this.errors = null
    this._isLoading = true
    this.timer = new TimerHandler({
      onTimeout: () => onTimeout(this),
      timeoutMs,
    })
  }

  finish() {
    this._isLoading = false
    this.timer.finish()
  }

  get timeElapsedMs() {
    return this.timer.getTime()
  }

  get wasBackgrounded() {
    return this.timer.backgrounded
  }

  get wasOffline() {
    return this.timer.wasOffline
  }

  get wasDisconnected() {
    return this.timer.wasDisconnected
  }

  get isLoading() {
    return this._isLoading
  }
}

/**
 * useLoggedSubscription (formerly $$x6)
 * Tracks subscription lifecycle events for analytics/logging.
 */
export function useLoggedSubscription(
  view: any,
  args: any,
  options: {
    enabled?: boolean
    subscriptionLogger: any
    stuckMs: number
  },
) {
  const timerRef = useRef<SubscriptionTimer | null>(null)
  const enabled = options.enabled !== false
  const logger = options.subscriptionLogger
  const lastArgsRef = useRef(args)
  const prevTimer = timerRef.current

  const traceId = enabled ? timerRef.current?.traceId : undefined
  const subscriptionResult = useSubscription(view, args, {
    enabled,
    traceId,
  })

  if (!timerRef.current && enabled) {
    timerRef.current = new SubscriptionTimer(args, t => logger.onEvent('stuck', subscriptionResult, t), logger.stuckMs)
  }

  if (prevTimer === null && enabled) {
    logger.onEvent('initiated', subscriptionResult, timerRef.current)
  }
  if (!deepEqual(args, lastArgsRef.current)) {
    const newTimer = new SubscriptionTimer(args, t => logger.onEvent('stuck', subscriptionResult, t), logger.stuckMs)
    if (timerRef.current?.isLoading) {
      timerRef.current.finish()
      logger.onEvent('canceled', subscriptionResult, timerRef.current, {
        nextTraceId: newTimer.traceId,
      })
    }
    timerRef.current = newTimer
    logger.onEvent('initiated', subscriptionResult, timerRef.current)
    lastArgsRef.current = args
  }

  useEffect(() => {
    if (subscriptionResult.status === 'loaded' && timerRef.current?.isLoading) {
      timerRef.current.finish()
      logger.onEvent('loaded', subscriptionResult, timerRef.current)
    }
    else if (
      subscriptionResult.status === 'errors'
      && timerRef.current?.isLoading
    ) {
      timerRef.current.finish()
      timerRef.current.errors = subscriptionResult.errors
      logger.onEvent('error', subscriptionResult, timerRef.current)
    }
  }, [subscriptionResult, subscriptionResult.errors, subscriptionResult.status, logger])

  useEffect(() => {
    return () => {
      if (timerRef.current?.isLoading) {
        timerRef.current.finish()
        logger.onEvent('canceled', subscriptionResult, timerRef.current)
      }
    }
  }, [])

  return subscriptionResult
}

/**
 * useSubscriptionAnalytics (formerly $$N5)
 * Tracks analytics for subscription duration and status.
 */
export function useSubscriptionAnalytics(
  result: any,
  eventName: string,
  analyticsOptions: any = {},
) {
  const startTimeRef = useRef(window.performance.now())
  const sentRef = useRef(false)

  useEffect(() => {
    if (
      !sentRef.current
      && result.status !== 'loading'
      && result.status !== 'disabled'
    ) {
      const durationMs = window.performance.now() - startTimeRef.current
      trackEventAnalytics(eventName, {
        ...analyticsOptions,
        durationMs,
        status: result.status,
      })
      sentRef.current = true
    }
  }, [analyticsOptions, eventName, result.status])
}

// Export refactored names for imports
export const Bh = useSuspendableSubscription
export const Rs = useSubscription
export const Ym = useConnectionState
export const ZA = getLivegraphClient
export const ap = useSubscriptionAnalytics
export const oS = useLoggedSubscription
export const p = useMultiSubscription
export const Dj = ConnectionState
