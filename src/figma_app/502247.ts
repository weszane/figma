import { clone, isEqual } from 'lodash-es'
import { UserAPIHandlers } from '../905/93362'
import { sessionApiInstance } from '../905/202181'
import { setupAdvanceTimers } from '../905/346780'
import { getCookieOrStorage } from '../905/414007'
import { sendBatchedMetrics } from '../905/485103'
import { OrganizationType } from '../905/833838'
import { createDeferredPromise } from '../905/874553'
import { getInitialOptions } from '../figma_app/169182'
import { bellFeedAPIInstance } from '../figma_app/876459'

/**
 * Deferred promises for async control flow.
 * Original: $$g7, $$f10
 */
export const kb = createDeferredPromise()
export const tb = createDeferredPromise()

/**
 * Tracks if minimal user state is loaded.
 * Original: $$E5
 */
export let YH = !window.EARLY_ARGS?.file_minimal_user_state

/**
 * Metric event names.
 * Original: y
 */
const METRIC_EVENTS = {
  REQUESTED: 'web.api_user_state.requested',
}

/**
 * Batched metrics reporter for user state calls.
 * Original: b
 */
class BatchedMetricsReporter {
  batchedCustomEvents: any[] = []
  private _currentlySendingBatchedEvents = false
  private sendBatchedEventsInterval: ReturnType<typeof setInterval>
  constructor() {
    document.addEventListener('visibilitychange', this.onVisibilityChange)
    window.addEventListener('pagehide', this.sendBatchedEvents)
    this.sendBatchedEventsInterval = setInterval(this.sendBatchedEvents, 5000)
  }

  /**
   * Handles visibility change to send metrics when hidden.
   * Original: onVisibilityChange
   */
  onVisibilityChange = async () => {
    if (document.visibilityState === 'hidden') {
      await this.sendBatchedEvents()
    }
  }

  /**
   * Sends batched custom events.
   * Original: sendBatchedEvents
   */
  sendBatchedEvents = async () => {
    if (this._currentlySendingBatchedEvents)
      return
    this._currentlySendingBatchedEvents = true
    const events = this.batchedCustomEvents
    this.batchedCustomEvents = []
    try {
      await sendBatchedMetrics(events)
    }
    catch {}
    this._currentlySendingBatchedEvents = false
  }

  /**
   * Cleans up event listeners and timers.
   * Original: cleanup
   */
  async cleanup() {
    document.removeEventListener('visibilitychange', this.onVisibilityChange)
    window.removeEventListener('pagehide', this.sendBatchedEvents)
    clearInterval(this.sendBatchedEventsInterval)
    await setupAdvanceTimers()
  }

  /**
   * Reports a user state API call.
   * Original: reportUserStateCall
   */
  reportUserStateCall(source: string) {
    this.batchedCustomEvents.push({
      metric: METRIC_EVENTS.REQUESTED,
      tags: {
        source,
        client_visibility: document.visibilityState,
      },
    })
  }
}

const metricsReporter = new BatchedMetricsReporter()
interface RecentUserData {
  communityUserId: string | null
  communityProfileId: string | null
  fileBrowserUserId: string | null
  userIdToOrgId: ObjectOf<string>
  userIdToPlan?: ObjectOf<[OrganizationType, string]>
}
/**
 * Tracks last org/team IDs and pending promise.
 * Original: T, I, S
 */
let pendingUserStatePromise: Promise<any> | null = null
let lastOrgId: string | null = null
let lastTeamId: string | null = null

/**
 * Requests user state, batching metrics and avoiding duplicate requests.
 * Original: $$v6
 */
export function getUserState(e: string, t?: any) {
  YH = true
  const orgId = getOrgId()
  const teamId = getTeamId()
  if (
    pendingUserStatePromise
    && orgId === lastOrgId
    && teamId === lastTeamId
  ) {
    return pendingUserStatePromise
  }
  metricsReporter.reportUserStateCall(e)
  pendingUserStatePromise = UserAPIHandlers.getState(
    {
      orgId: orgId || undefined,
      teamId: teamId || undefined,
    },
    t,
  )
  lastOrgId = orgId
  lastTeamId = teamId
  pendingUserStatePromise
    .then(() => {
      pendingUserStatePromise = null
      lastOrgId = null
      lastTeamId = null
    })
    .catch(() => {
      pendingUserStatePromise = null
      lastOrgId = null
      lastTeamId = null
    })
  return pendingUserStatePromise
}

/**
 * Gets session user state.
 * Original: $$A11
 */
export function getSessionUserState(e: any) {
  return sessionApiInstance.getState(e)
}

/**
 * Gets org ID from initial options or cache.
 * Original: $$N8
 */
let cachedOrgId: string | null = null
export function getOrgId(): string | null {
  if (cachedOrgId) {
    return cachedOrgId === 'personal' ? null : cachedOrgId
  }
  cachedOrgId = getInitialOptions().org_id || null
  return cachedOrgId
}

/**
 * Gets team ID from initial options or cache.
 * Original: $$w3
 */
let cachedTeamId: string | null = null
export function getTeamId(): string | null {
  if (!cachedTeamId) {
    cachedTeamId = getInitialOptions().team_id || null
  }
  return cachedTeamId
}

/**
 * Storage key for recent user data.
 * Original: O
 */
const RECENT_USER_DATA_KEY = 'recent_user_data'

/**
 * Encodes/decodes user data for storage.
 * Original: R, L
 */
const encodeUserData = (e: any) => btoa(JSON.stringify(e))
const decodeUserData = (e: string) => JSON.parse(atob(e))

/**
 * Sets community profile ID.
 * Original: $$P0
 */
export function setCommunityProfileId(e: string) {
  setRecentUserData(e, true)
}

/**
 * Sets community profile ID and persists.
 * Original: $$D1
 */
export function persistCommunityProfileId(e: string) {
  const data = getRecentUserData()
  const updated = clone(data)
  const storage = getCookieOrStorage()
  updated.communityProfileId = e
  if (!isEqual(data, updated)) {
    try {
      storage.set(RECENT_USER_DATA_KEY, encodeUserData(updated))
    }
    catch (err) {
      console.error('Failed to set community profile', err)
    }
  }
}

/**
 * Sets file browser user ID.
 * Original: $$k9
 */
export function setFileBrowserUserId(e: string) {
  setRecentUserData(e, false)
}

/**
 * Updates recent user data in storage.
 * Original: $$M4
 */
export function setRecentUserData(
  userId: string,
  isCommunity: boolean,
  orgId?: string,
  profileId?: string,
  teamId?: string,
) {
  if (bellFeedAPIInstance)
    return
  const data = getRecentUserData()
  const updated = clone(data)
  const storage = getCookieOrStorage()
  if (isCommunity) {
    updated.communityUserId = userId
  }
  else {
    updated.fileBrowserUserId = userId
  }
  if (orgId !== undefined) {
    updated.userIdToOrgId ||= {}
    updated.userIdToOrgId[userId] = orgId
  }
  if (orgId !== undefined || teamId !== undefined) {
    updated.userIdToPlan ||= {}
    if (orgId) {
      updated.userIdToPlan[userId] = [OrganizationType.ORG, orgId]
    }
    else if (teamId) {
      updated.userIdToPlan[userId] = [OrganizationType.TEAM, teamId]
    }
  }
  if (profileId) {
    updated.communityProfileId = profileId
  }
  if (!isEqual(data, updated)) {
    try {
      storage.set(RECENT_USER_DATA_KEY, encodeUserData(updated))
    }
    catch (err) {
      console.error('Failed to set recent workspace', err)
    }
  }
}

/**
 * Gets recent user data from storage.
 * Original: $$F12
 */
export function getRecentUserData(): RecentUserData {
  let data: RecentUserData = {
    communityUserId: null,
    communityProfileId: null,
    fileBrowserUserId: null,
    userIdToOrgId: {} as ObjectOf<string>,
  }
  const storage = getCookieOrStorage()
  try {
    const stored = storage.get(RECENT_USER_DATA_KEY)
    if (stored) {
      data = decodeUserData(stored)
    }
  }
  catch (err) {
    console.error('Failed to get recent workspace', err)
  }
  return data
}

/**
 * Gets user plan info by user ID.
 * Original: $$j2
 */
export function getUserPlan(userId: string) {
  const data = getRecentUserData()
  return data.userIdToPlan?.[userId] ?? null
}

// Exported aliases for backward compatibility
export const I2 = setCommunityProfileId
export const Il = persistCommunityProfileId
export const QF = getUserPlan
export const Um = getTeamId
export const Y9 = setRecentUserData
export const _X = getUserState
export const pk = getOrgId
export const tO = setFileBrowserUserId
export const tp = getSessionUserState
export const yk = getRecentUserData
