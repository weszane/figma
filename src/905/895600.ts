import { Statsig } from 'statsig-react'
import { StatsigAPI } from '../905/325034'
import { StatsigAtom } from '../905/425366'
import { PerfTimer } from '../905/609396'
import { getBootstrapValue, getStatsigConfig, getStatsigUser, getTimeoutForCountry, getUserKey, hasStatsigClientApiKey, shouldSkipPerfCheck, TIMEOUT_MS, withDelay, withTimeout } from '../905/683495'
import { liveStoreInstance } from '../905/713695'
import { createDeferredPromise } from '../905/874553'
import { ActionType, BootstrapType, ErrorType, OperationStatus, ProcessState, ProviderType, TimeoutError } from '../3973/473379'
import { isErroredTimeout, processAtom, processSelector } from '../3973/697935'
import { StatsigTimer, trackClientUpdateUserTime, trackClientValuesNetworkCall, trackContextSwitchCacheMiss, trackPrefetchCalls, trackStatsigClientInitTime } from '../3973/890507'
import { atom, atomStoreManager } from '../figma_app/27355'
import { getInitialOptions } from '../figma_app/169182'

export interface IUser {
  teamId: string
  orgId: string
  userId: string

  planKey: string
}
async function getRelayProxyBootstrap(sdkKey: string, action: ActionType, user: any, timeout?: number) {
  if (sdkKey == null)
    return null
  const timeoutMs = timeout ?? getTimeoutForCountry(getInitialOptions().iso_code)
  const timer = new StatsigTimer('relay_proxy_request')
  const bootstrapPromise = StatsigAPI.getStatsigRelayProxyBootstrap({
    orgId: user.customIDs?.orgID,
    teamId: user.customIDs?.teamID,
  }, {
    prefetch: action === ActionType.PREFETCH,
  }).then(response => response.data.meta ?? {})
  const timedPromise = withTimeout(bootstrapPromise, timeoutMs).catch((error) => {
    timer.setCaughtError(error)
    return null
  }).finally(() => {
    timer.stopTimer()
    trackClientValuesNetworkCall(timer, 'relay_proxy', action)
  })
  timer.startTimer()
  const result = await timedPromise
  if (timer.getTimedOut()) {
    throw new TimeoutError()
  }
  return result
}
async function getBatchedRelayProxyBootstrap({
  orgId,
  teamIds,
  timeout,
}: {
  orgId: string
  teamIds: string[]
  timeout?: number
}) {
  const timeoutMs = timeout ?? getTimeoutForCountry(getInitialOptions().iso_code)
  const timer = new StatsigTimer('relay_proxy_batched_request')
  const bootstrapPromise = StatsigAPI.getStatsigRelayProxyBootstrapV2({
    orgId,
    teamIds,
  }).then(response => response.data.meta)
  const timedPromise = withTimeout(bootstrapPromise, timeoutMs).catch((error) => {
    timer.setCaughtError(error)
    return null
  }).finally(() => {
    timer.stopTimer()
    trackClientValuesNetworkCall(timer, 'relay_proxy_v2_batched', ActionType.PREFETCH)
  })
  timer.startTimer()
  const result = await timedPromise
  if (timer.getTimedOut()) {
    throw new TimeoutError()
  }
  return result
}
const userKeySetAtom = atom(() => new Set())
const userValuesQuery = liveStoreInstance.Query({
  fetch: async (params) => {
    const overrideValues = params.__IGNORE__overrideValues
    const {
      userId,
      teamId,
      orgId,
      planKey,
    } = params
    const userKeySet = atomStoreManager.get(userKeySetAtom)
    const addUserKey = () => {
      const key = getUserKey({
        userId,
        teamId,
        orgId,
        planKey,
      })
      userKeySet.add(key)
    }
    if (overrideValues != null) {
      addUserKey()
      return overrideValues
    }
    const reason = params.__IGNORE__reason
    const sdkKey = params.__IGNORE__sdkKey
    const timeout = params.__IGNORE__timeout
    const statsigUser = getStatsigUser(userId, teamId, orgId, planKey)
    const values = await getRelayProxyBootstrap(sdkKey, reason, statsigUser, timeout)
    if (values == null) {
      throw new Error('Call to retrieve Statsig user values failed')
    }
    addUserKey()
    return values
  },
  key: 'statsig_user_values',
  stalenessPolicy: 'never',
})
const batchedUserValuesQuery = liveStoreInstance.Query({
  fetch: async (params) => {
    const {
      userId,
      teamIds,
      orgId,
    } = params
    const sdkKey = params.__IGNORE__sdkKey
    const timeout = params.__IGNORE__timeout
    const results = await getBatchedRelayProxyBootstrap({
      orgId,
      teamIds,
      timeout,
    })
    if (results == null) {
      throw new Error('Call to retrieve Statsig batched user values failed')
    }
    const fetchPromises = results.map((result) => {
      if (result.bootstrap_values) {
        return (function fetchUserValues(userParams, bootstrapValues, key) {
          const query = userValuesQuery({
            __IGNORE__overrideValues: bootstrapValues,
            __IGNORE__reason: ActionType.PREFETCH,
            __IGNORE__sdkKey: key,
            __IGNORE__timeout: TIMEOUT_MS,
            ...userParams,
          })
          return liveStoreInstance.fetch(query, {
            policy: 'networkOnly',
          })
        }({
          userId,
          teamId: result.team_id ?? '',
          orgId: orgId ?? null,
          planKey: result.bootstrap_values?.evaluated_keys?.customIDs?.planKey ?? null,
        }, result.bootstrap_values, sdkKey))
      }
      return null
    })
    await Promise.all(fetchPromises)
    return results
  },
  key: 'statsig_batched_user_values',
  stalenessPolicy: 'never',
})
const initializeAtom = atom(null, async (get, set, user, isProvider: any, options) => {
  if (!hasStatsigClientApiKey())
    return
  const sdkKey = getInitialOptions().statsig_figma_app_client_api_key
  if (sdkKey == null)
    return
  const processState = get(processAtom)
  if (processState.status === OperationStatus.IN_PROGRESS) {
    await processState.initCompletedPromise
    return
  }
  if (isErroredTimeout(processState))
    return
  if (processState.status !== OperationStatus.NOT_STARTED)
    return
  const deferred = createDeferredPromise()
  const initPromise = withDelay(initializeStatsig(sdkKey, user, options, isProvider, () => get(processSelector))).then(async (result) => {
    await deferred.promise
    set(processAtom, result)
  })
  set(processAtom, {
    type: ProcessState.START,
    payload: {
      initCompletedPromise: initPromise,
      sdkKey,
    },
  })
  deferred.resolve()
  await initPromise
})
const contextSwitchAtom = atom<any, IUser[], any>(null, async (get, set, user) => {
  if (!hasStatsigClientApiKey() || !shouldSkipPerfCheck())
    return
  const processState = get(processAtom)
  if (processState.status === OperationStatus.NOT_STARTED)
    return
  if (processState.status === OperationStatus.IN_PROGRESS) {
    await processState.initCompletedPromise
    return
  }
  const sdkKey = processState.sdkKey
  const {
    userId,
    teamId,
    orgId,
    planKey,
  } = user
  const statsigUser = getStatsigUser(userId, teamId, orgId, planKey)
  const timeout = getTimeoutForCountry(getInitialOptions().iso_code)
  const timer = new PerfTimer('statsigContextSwitch', {})
  let errorMessage = null
  let isCached = false
  let isComplete = false
  async function switchContext() {
    let values = null
    const userKeySet = atomStoreManager.get(userKeySetAtom)
    const setSize = userKeySet.size
    const userKeys = setSize > 20 ? null : [...userKeySet.values()]
    const bootstrapValues = getBootstrapValue(user)
    try {
      if (bootstrapValues != null) {
        isCached = true
        values = bootstrapValues
      }
      else {
        const query = userValuesQuery({
          __IGNORE__reason: ActionType.CONTEXT_SWITCH,
          __IGNORE__sdkKey: sdkKey,
          __IGNORE__timeout: timeout,
          userId,
          teamId,
          orgId,
          planKey,
        })
        const queryResult: ObjectOf = get(query)
        isCached = queryResult.status === 'loaded'
        values = isCached
          ? queryResult.data
          : await liveStoreInstance.fetch(query, {
              policy: 'networkOnly',
            })
      }
    }
    catch (error) {
      errorMessage = `Failed to retrieve user values from relay proxy when context switching: ${error}`
      const errorType = error instanceof TimeoutError ? ErrorType.TIMEOUT : ErrorType.REQUEST_FAILED
      return {
        type: ProcessState.ERROR,
        payload: {
          cause: errorType,
        },
      }
    }
    finally {
      if (!isCached) {
        trackContextSwitchCacheMiss([userId, teamId, orgId], userKeys, setSize)
      }
    }
    let updateSuccess = false
    try {
      if (values != null) {
        atomStoreManager.set(StatsigAtom, values)
        updateSuccess = Statsig.updateUserWithValues(statsigUser, values)
      }
    }
    catch (error) {
      errorMessage = `Failed to update user with new values when context switching: ${error}`
      updateSuccess = false
    }
    return updateSuccess
      ? {
          type: ProcessState.COMPLETE,
        }
      : {
          type: ProcessState.ERROR,
          payload: {
            cause: ErrorType.SDK_METHOD_FAILED,
          },
        }
  }
  timer.start()
  set(processAtom, {
    type: ProcessState.RESET,
  })
  const deferred = createDeferredPromise()
  const switchPromise = withDelay(switchContext()).catch((error) => {
    errorMessage = error instanceof Error ? error.message : null
    return {
      type: ProcessState.ERROR,
      payload: {
        cause: ErrorType.UNKNOWN,
      },
    }
  }).then(result => deferred.promise.then(() => result)).then((result) => {
    isComplete = result.type === ProcessState.COMPLETE
    set(processAtom, result)
  })
  set(processAtom, {
    type: ProcessState.START,
    payload: {
      initCompletedPromise: switchPromise,
      sdkKey,
    },
  })
  deferred.resolve()
  await switchPromise
  timer.stop()
  trackClientUpdateUserTime(timer.getElapsedTime(), isComplete, isCached, errorMessage)
})
export const prefetchAtom = atom(null, async (get, set, users: IUser[]) => {
  if (!hasStatsigClientApiKey() || users.length === 0)
    return
  const sdkKey = getInitialOptions().statsig_figma_app_client_api_key
  if (sdkKey == null)
    return
  let errorMessage = null
  const userKeySet = atomStoreManager.get(userKeySetAtom)
  const usersToFetch = users.filter((user) => {
    if (getBootstrapValue(user))
      return false
    const userKey = getUserKey(user)
    return !userKeySet.has(userKey)
  })
  try {
    if (usersToFetch.length > 0) {
      const query = batchedUserValuesQuery({
        __IGNORE__sdkKey: sdkKey,
        __IGNORE__timeout: TIMEOUT_MS,
        userId: users[0].userId,
        teamIds: usersToFetch.map(user => user.teamId),
        orgId: users[0].orgId ?? undefined,
      })
      await liveStoreInstance.fetch(query, {
        policy: 'networkOnly',
      })
    }
  }
  catch (error) {
    errorMessage = `Failed to prefetch users with relay proxy: ${error}`
  }
  finally {
    const cachedCount = users.length - usersToFetch.length
    trackPrefetchCalls(users.length, cachedCount, errorMessage)
  }
})

async function initializeStatsig(sdkKey: string, user: any, options: any, isProvider: any, getProcessState: () => any) {
  let bootstrapData
  const {
    userId,
    teamId,
    orgId,
    planKey,
  } = user
  const bootstrapValues = getBootstrapValue(user)
  const timer = new StatsigTimer('statsigInitialize')
  let error = null
  let isTracked = false
  function trackInitTime(result: any, success: boolean, errorMessage: string | null) {
    if (timer.isTimerRunning()) {
      timer.stopTimer()
    }
    if (!isTracked) {
      trackStatsigClientInitTime(isProvider === ProviderType.PROVIDER, bootstrapValues != null ? BootstrapType.BOOTSTRAP : BootstrapType.NETWORK, getProcessState().status, timer.getElapsedTimeMs(),
        // success && error === null,
        errorMessage, error, user, bootstrapValues, options)
      isTracked = true
    }
  }
  function bootstrapStatsig(key: string, values: any, statsigUser: any, config: any) {
    try {
      if (values != null) {
        Statsig.bootstrap(key, values, statsigUser, config)
        atomStoreManager.set(StatsigAtom, values)
      }
      else {
        Statsig.bootstrap(key, {}, statsigUser, config)
      }
      return {
        type: ProcessState.COMPLETE,
      }
    }
    catch {
      if (error === null) {
        error = ErrorType.SDK_METHOD_FAILED
      }
      trackInitTime(null, false, null)
      return {
        type: ProcessState.ERROR,
        payload: {
          cause: error,
        },
      }
    }
  }
  const statsigUser = getStatsigUser(userId, teamId, orgId, planKey)
  const config = getStatsigConfig(trackInitTime)
  const timeout = getTimeoutForCountry(getInitialOptions().iso_code)
  timer.startTimer()
  if (bootstrapValues != null) {
    bootstrapData = bootstrapValues
  }
  else {
    try {
      const query = userValuesQuery({
        __IGNORE__reason: ActionType.INITIALIZE,
        __IGNORE__sdkKey: sdkKey,
        __IGNORE__timeout: timeout,
        userId,
        teamId,
        orgId,
        planKey,
      })
      bootstrapData = await liveStoreInstance.fetch(query, {
        policy: 'networkOnly',
      })
    }
    catch (e) {
      error = e instanceof TimeoutError ? ErrorType.TIMEOUT : ErrorType.REQUEST_FAILED
      return bootstrapStatsig(sdkKey, {}, statsigUser, config)
    }
  }
  return bootstrapStatsig(sdkKey, bootstrapData, statsigUser, config)
}
export const iz = contextSwitchAtom
export const r_ = initializeAtom
export const oo = prefetchAtom
