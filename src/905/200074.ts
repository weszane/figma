import { sentryEventEmitter } from '../905/11'
import { ACTIVITY_LOG_STORE, executeDatabaseTransaction } from '../905/25189'
import { AsyncJobQueue } from '../905/291063'
import { getStorageEstimate, logAutosaveError, logAutosaveErrorWithOriginalMessage } from '../905/327522'
import { trackEventAnalytics } from '../905/449184'
import { getFeatureFlags } from '../905/601108'
import { logInfo, logWarning } from '../905/714362'
import { mapFilter } from '../figma_app/656233'
import { ConnectionState, EditChangeMode } from '../figma_app/763686'

// Constants for flush intervals based on debug flag
const FLUSH_INTERVAL_MS = getFeatureFlags().autosave_activity_log_debug ? 10000 : 300000
const MIN_OFFLINE_DURATION_MS = getFeatureFlags().autosave_activity_log_debug ? 5000 : 60000

/**
 * Garbage collects old activity log entries from the database.
 * Original: $$h0
 */
export async function garbageCollectActivityLog(): Promise<void> {
  const { usageBytes } = await getStorageEstimate()
  const deleteAll = usageBytes && usageBytes > 0xA00000

  try {
    await executeDatabaseTransaction([ACTIVITY_LOG_STORE], async (transaction) => {
      const store = transaction.objectStore(ACTIVITY_LOG_STORE)
      const deletedEntries: Array<{ fileKey: string, userID: string, startTime: number, endTime: number }> = []
      let cursor = await store.openCursor()

      while (cursor) {
        const { fileKey, userID, startTime, endTime } = cursor.value
        if (deleteAll || endTime < Date.now() - 2592000000) { // 30 days in ms
          deletedEntries.push({ fileKey, userID, startTime, endTime })
          cursor.delete()
        }
        cursor = await cursor.continue()
      }

      if (deletedEntries.length > 0) {
        const numFiles = new Set(deletedEntries.map(e => e.fileKey)).size
        const numUsers = new Set(deletedEntries.map(e => e.userID)).size
        const earliestStartTime = deletedEntries.reduce((min, entry) => Math.min(min, entry.startTime), Infinity)
        const lastEndTime = deletedEntries.reduce((max, entry) => Math.max(max, entry.endTime), 0)

        trackEventAnalytics('activity log garbage collect', {
          numRows: deletedEntries.length,
          numFiles,
          numUsers,
          earliestStartTime,
          lastEndTime,
          usageBytes,
          deleteAll,
        })
      }
    }, 'readwrite')
  }
  catch (error) {
    logAutosaveErrorWithOriginalMessage('Failed to garbage collect activity log', error)
  }
}

/**
 * Adds an activity log entry to the database.
 * Original: g
 */
async function addActivityLogEntry(entry: any): Promise<void> {
  await executeDatabaseTransaction([ACTIVITY_LOG_STORE], async (transaction) => {
    transaction.objectStore(ACTIVITY_LOG_STORE).add(entry)
    await transaction.done
  }, 'readwrite')
}

/**
 * Represents an activity tracker for logging autosave changes.
 * Original: f
 */
class ActivityTracker {
  queue: AsyncJobQueue
  nextPromiseResolve: () => void
  nextFlushPromise: Promise<void>
  hasLoggedFlushError: boolean
  currentLog: any

  constructor(fileKey: string, userID: string, startingSessionID: string) {
    this.queue = new AsyncJobQueue()
    this.nextPromiseResolve = () => { }
    this.nextFlushPromise = new Promise(resolve => this.nextPromiseResolve = resolve)
    this.hasLoggedFlushError = false
    this.currentLog = {
      fileKey,
      userID,
      startingSessionID,
      startTime: Date.now(),
      endTime: Date.now(),
      logs: [],
    }
  }

  /**
   * Adds a commit to the current log.
   */
  addCommit(commitData: any): void {
    this.currentLog.endTime = Date.now()

    if (this.currentLog.autosaveChanges
      && commitData.commitPolicy === EditChangeMode.ADD_CHANGES
      && commitData.reason === this.currentLog.autosaveChanges.commitReason) {
      this.currentLog.autosaveChanges.commit = this.mergeCommits(this.currentLog.autosaveChanges.commit, commitData.changes)
    }
    else {
      if (this.currentLog.autosaveChanges) {
        this.flushToDisk()
      }
      this.currentLog.autosaveChanges = {
        commit: commitData.changes,
        commitPolicy: commitData.commitPolicy,
        commitReason: commitData.reason,
        fileVersion: commitData.fileVersion,
      }
    }

    if (commitData.newSessionID) {
      this.currentLog.newSessionID = commitData.newSessionID
    }
  }

  /**
   * Merges two commit objects.
   */
  mergeCommits(existingCommit: any, newCommit: any): any {
    const nodeMap: Record<string, any> = {}
    existingCommit.changedNodes.forEach((node: any) => nodeMap[node.nodeID] = node)
    existingCommit.clearedNodes.forEach((nodeID: string) => nodeMap[nodeID] = null)
    newCommit.changedNodes.forEach((node: any) => nodeMap[node.nodeID] = node)
    newCommit.clearedNodes.forEach((nodeID: string) => nodeMap[nodeID] = null)

    const changedNodes = Object.values(nodeMap).filter(node => node !== null)
    const clearedNodes = mapFilter(Object.entries(nodeMap), ([key, value]) => value === null ? key : null)

    const referencedNodeMap: Record<string, any> = {}
    existingCommit.referencedNodes.forEach(({ nodeID, changes }: any) => referencedNodeMap[nodeID] = changes)
    newCommit.referencedNodes.forEach(({ nodeID, changes }: any) => referencedNodeMap[nodeID] = changes)

    const referencedNodes = Object.entries(referencedNodeMap).map(([nodeID, changes]) => ({ nodeID, changes }))

    const imageHashes = new Set([...existingCommit.imageHashes, ...newCommit.imageHashes])

    return {
      changedNodes,
      clearedNodes,
      referencedNodes,
      imageHashes: Array.from(imageHashes),
    }
  }

  /**
   * Adds a log entry to the current log.
   */
  addLog(logEntry: any): void {
    this.currentLog.endTime = Date.now()
    this.currentLog.logs.push(logEntry)
  }

  /**
   * Waits for the next flush (for testing).
   */
  waitForNextFlushForTest(): Promise<void> {
    return this.nextFlushPromise
  }

  /**
   * Logs a flush error if not already logged.
   */
  logFlushError(message: string, shouldLog: boolean, extraData?: any): void {
    if (this.hasLoggedFlushError)
      return
    this.hasLoggedFlushError = true
    if (shouldLog) {
      logAutosaveError(`Activity log flush error: ${message}`, extraData)
    }
    trackEventAnalytics('activity log flush error', { message, ...extraData })
  }

  /**
   * Flushes the current log to disk.
   */
  async flushToDisk(): Promise<void> {
    if (!this.currentLog.autosaveChanges && this.currentLog.logs.length === 0) {
      logInfo('Autosave activity log', 'Nothing to write')
      return
    }

    const logToFlush = this.currentLog
    this.currentLog = {
      fileKey: logToFlush.fileKey,
      userID: logToFlush.userID,
      startingSessionID: logToFlush.newSessionID ?? logToFlush.startingSessionID,
      startTime: Date.now(),
      endTime: Date.now(),
      logs: [],
    }

    const { usageBytes } = await getStorageEstimate()
    if (usageBytes === undefined) {
      this.logFlushError('Unable to get storage estimate', true)
      return
    }
    if (usageBytes > 0xA00000) {
      this.logFlushError('Exceeded storage quota', false, { usageBytes })
      return
    }

    try {
      await this.queue.enqueue(() => addActivityLogEntry(logToFlush))
    }
    catch (error: any) {
      this.logFlushError('Failed to write to disk', true, { wrappedErrorMessage: error.message })
    }

    this.nextPromiseResolve()
    this.nextFlushPromise = new Promise(resolve => this.nextPromiseResolve = resolve)
  }
}

/**
 * Sends telemetry data about activity log usage.
 * Original: A
 */
let hasSentTelemetry = false
async function sendActivityLogTelemetry(): Promise<void> {
  if (hasSentTelemetry)
    return
  hasSentTelemetry = true

  const { usageBytes, quotaBytes } = await getStorageEstimate()
  const entries: Array<{ fileKey: string, userID: string, startTime: number, endTime: number }> = []

  try {
    await executeDatabaseTransaction([ACTIVITY_LOG_STORE], async (transaction) => {
      const store = transaction.objectStore(ACTIVITY_LOG_STORE)
      let cursor = await store.openCursor()
      while (cursor) {
        const { fileKey, userID, startTime, endTime } = cursor.value
        entries.push({ fileKey, userID, startTime, endTime })
        cursor = await cursor.continue()
      }
    }, 'readonly')
  }
  catch (error: any) {
    logWarning('Autosave', 'Failed to get activity log data for telemetry', { error: error.message })
  }

  if (entries.length > 0) {
    const numFiles = new Set(entries.map(e => e.fileKey)).size
    const numUsers = new Set(entries.map(e => e.userID)).size
    const earliestStartTime = entries.reduce((min, entry) => Math.min(min, entry.startTime), Infinity)
    const earliestStartTimeDelta = Date.now() - earliestStartTime
    const lastEndTime = entries.reduce((max, entry) => Math.max(max, entry.endTime), 0)
    const lastEndTimeDelta = Date.now() - lastEndTime

    trackEventAnalytics('activity log usage', {
      numRows: entries.length,
      numFiles,
      numUsers,
      earliestStartTime,
      earliestStartTimeDelta,
      lastEndTime,
      lastEndTimeDelta,
      usageBytes,
      quotaBytes,
    })
  }
}

/**
 * Manages autosave activity logging, handling online/offline states.
 * Original: $$y1
 */
export class AutosaveActivityLogManager {
  state: any

  constructor() {
    this.state = { type: 'online' }
    sendActivityLogTelemetry()
    sentryEventEmitter.on('breadcrumb', breadcrumb => this.recordSentryBreadcrumb(breadcrumb))
  }

  /**
   * Starts the flush interval timer.
   */
  startFlushInterval(): () => void {
    const intervalId = setInterval(() => {
      if (this.state.type !== 'offline') {
        logAutosaveError('We should only call flush if there is something to flush')
        clearInterval(intervalId)
      }
      else {
        this.state.activityTracker.flushToDisk()
      }
    }, FLUSH_INTERVAL_MS)
    return () => clearInterval(intervalId)
  }

  /**
   * Flushes to disk if offline.
   */
  flushToDisk(): Promise<void> {
    return this.state.type === 'offline' ? this.state.activityTracker.flushToDisk() : Promise.resolve()
  }

  /**
   * Waits for next flush for testing.
   */
  waitForNextFlushForTest(): Promise<void> {
    return this.state.type === 'offline' ? this.state.activityTracker.waitForNextFlushForTest() : Promise.resolve()
  }

  /**
   * Records an autosave commit, managing state transitions.
   */
  recordAutosaveCommit(fileKey: string, userID: string, sessionID: string, commitData: any): { newState: string, flushPromise?: Promise<void> } {
    let newState: any
    let flushPromise: Promise<void> | undefined

    if (this.state.type === 'online') {
      if (commitData.reason === ConnectionState.OFFLINE || commitData.reason === ConnectionState.LIMBOED_CHANGES) {
        newState = {
          type: 'offline',
          activityTracker: new ActivityTracker(fileKey, userID, sessionID),
          cancelFlushTimer: this.startFlushInterval(),
          startTime: Date.now(),
        }
      }
      else {
        newState = { type: 'online' }
      }
    }
    else if (commitData.reason === ConnectionState.SYNCED) {
      const { activityTracker, cancelFlushTimer, startTime } = this.state
      if (Date.now() - startTime > MIN_OFFLINE_DURATION_MS) {
        activityTracker.addCommit(commitData)
        flushPromise = activityTracker.flushToDisk()
      }
      cancelFlushTimer()
      newState = { type: 'online' }
    }
    else {
      newState = this.state
    }

    this.state = newState
    if (this.state.type === 'offline') {
      this.state.activityTracker.addCommit(commitData)
    }

    return { newState: this.state.type, flushPromise }
  }

  /**
   * Records a Sentry breadcrumb if offline.
   */
  recordSentryBreadcrumb(breadcrumb: any): void {
    if (this.state.type === 'online')
      return
    this.state.activityTracker.addLog({
      level: breadcrumb.level || 'log',
      type: 'sentry',
      time: breadcrumb.timestamp ?? Date.now(),
      log: JSON.stringify(breadcrumb),
    })
  }
}

// Updated exports to match refactored names
export const L_ = garbageCollectActivityLog
export const hS = AutosaveActivityLogManager
