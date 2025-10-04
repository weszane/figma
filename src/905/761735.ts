import { datadogRum } from "@datadog/browser-rum"
import { z } from "zod"
import { ServiceCategories } from "../905/165054"
import { setupAdvanceTimers } from "../905/346780"
import { convertSinatraModel } from "../905/412108"
import { observableState } from "../905/441145"
import { analyticsEventManager, trackEventAnalytics } from "../905/449184"
import { sendBatchedHistograms, sendBatchedMetrics, sendHistogram, sendMetric } from "../905/485103"
import { getFeatureFlags } from "../905/601108"
import { TimerHandler } from "../905/609813"
import { OptimisticMutationHandler, SchemaHandler, ViewRegistry } from "../905/663269"
import { measureAsyncDuration } from "../905/670985"
import { serializeArgs } from "../905/679168"
import { logError } from "../905/714362"
import { CircularBuffer } from "../905/807275"
import { generateUUIDv4 } from "../905/871474"
import { getEnvironmentInfo } from "../905/883621"
import { sendWithRetry } from "../905/910117"
import { getInitialDynamicConfig } from "../3973/389215"
import { FileBrowserRecentFilesView, FileBrowserSearchBarData, FileBrowserSidebarData, getAllResourceViews, GraftingUpdateSloData, OpenEditorFileData, OrgAdminUserView, SubscriptionUpdateSloData } from "../figma_app/43951"
import { getLaunchDarklyFlagsExport } from "../figma_app/169182"
import { APIParameterUtils, createMetaValidator } from "../figma_app/181241"
import { LogToConsoleMode } from "../figma_app/763686"
import { bellFeedAPIInstance, desktopAPIInstance, getBellFeedAPI } from "../figma_app/876459"
import { getFalseValue, isInteractionOrEvalMode, isInteractionPathCheck } from "../figma_app/897289"
import { RY } from "./RY"
// Refactored LiveGraph Client
// This is the complete refactored version of the original code
// All functionality preserved, with improved structure, readability, and modularity

// External dependencies - assuming these are available in the environment
// e.g., getFeatureFlags, analyticsEventManager, etc.
// For brevity, not redefining them here

class AnalyticsTracker {
  analyticsHandler: any
  constructor(analyticsHandler: any) {
    this.analyticsHandler = analyticsHandler
  }

  logError(errorData: any) {
    this.analyticsHandler.trackDefinedEvent("livegraph.error_log", errorData)
  }
}
class Deduplicator {
  static create() {
    const seen = new Set()
    return (value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value))
          return
        seen.add(value)
      }
      return value
    }
  }
}
const Metrics = {
  SYNC_BLOCKED_MUTATIONS: "livegraph.web.sync.blocked_mutations",
  LATENCY: {
    CONNECTION: "livegraph.web.connection.latency",
    SUBSCRIPTION_DATA: "livegraph.web.subscription.server_latency",
    SUBSCRIPTION_DATA_VERSION: "livegraph.web.subscription.server_latency.by_version",
    SUBSCRIPTION_E2E_DATA: "livegraph.web.subscription.e2e_latency",
    SUBSCRIPTION_E2E_DATA_VERSION: "livegraph.web.subscription.e2e_latency.by_version",
    SYNC: "livegraph.web.sync.latency",
    OPTIMISTIC_MUTATION: "livegraph.web.optimistic_mutation.latency",
    SUBSCRIPTION_UPDATE_LATENCY: "livegraph.web.subscription.subscription_update_latency",
    SUBSCRIPTION_UPDATE_LATENCY_V2: "livegraph.web.subscription.update_latency",
    ERROR_RECOVERY_LATENCY: "livegraph.web.subscription.error_recovery.latency",
    SUBSCRIPTION_SERVER_LATENCY_V2: "livegraph.web.subscription.server_latency_v2",
    SUBSCRIPTION_E2E_LATENCY_V2: "livegraph.web.subscription.e2e_latency_v2",
    SESSION_SUCCESS: "livegraph.web.session_success_percentage",
    PAGINATION_LATENCY: "livegraph.web.pagination.latency",
  },
  EVENTS: {
    CONNECTION_STUCK: "livegraph.web.connection.stuck",
    SUBSCRIPTION_STUCK: "livegraph.web.subscription.stuck",
    SUBSCRIPTION_STUCK_V2: "livegraph.web.subscription.stuck_v2",
    SYNC_STUCK: "livegraph.web.sync.stuck",
    OPTIMISTIC_MUTATION: "livegraph.web.mutation",
    OPTIMISTIC_MUTATION_FAIL_OBJ_NAME: "livegraph.web.mutation.failed_optimistic_slo_object_name",
    OPEN_FILE_NULL: "livegraph.web.open_file_null",
    PENDING_MUTATION_EXISTENCE: "livegraph.web.pending_mutation_existence",
    EMPTY_SYNC: "livegraph.web.sync.empty",
    UNEXPECTED_OBJECT_NAME: "livegraph.web.unexpected_object_name",
    CONNECTION_CLOSE: "livegraph.web.connection.close",
    CONNECTION_ATTEMPT: "livegraph.web.connection.attempt",
    INITIAL_VIEW_SUCCESS: "livegraph.web.subscription.initial_view_success",
    INITIAL_VIEW_SUCCESS_VERSION: "livegraph.web.subscription.initial_view_success.by_version",
    INITIAL_VIEW_FAILURE: "livegraph.web.subscription.initial_view_fail",
    INITIAL_VIEW_FAILURE_VERSION: "livegraph.web.subscription.initial_view_fail.by_version",
    INITIAL_VIEW_STUCK_LOADING: "livegraph.web.subscription.initial_view_stuck_loading",
    SUBSCRIPTION_UPDATE_SUCCESS: "livegraph.web.subscription.subscription_update_success",
    SUBSCRIPTION_UPDATE_FAILURE: "livegraph.web.subscription.subscription_update_fail",
    OPTIMISTIC_MUTATION_SUCCESS: "livegraph.web.subscription.optimistic_mutation_success",
    OPTIMISTIC_MUTATION_FAIL: "livegraph.web.subscription.optimistic_mutation_fail",
    SUBSCRIPTION_ERRORS: "livegraph.web.subscription.errors",
    ERRORED_VIEW: "livegraph.web.subscription.view_errors",
    HARD_REFRESH: "livegraph.web.subscription.hard_refresh",
    SERVER_CLIENT_DISCREPANCY: "livegraph.web.subscription.server_client_discrepancy",
    SYNC_TIMEOUT: "livegraph.web.sync.timeout",
  },
}
const Nc = getFeatureFlags().datadog_rum_livegraph_events ? datadogRum : undefined
function addDurationVital(name, view, startTime, duration, context) {
  Nc?.addDurationVital(name, {
    description: view.view._name,
    startTime,
    duration,
    context,
  })
}
class StuckTimerHandler {
  reportStuck: (label: string, backgrounded: boolean, wasOffline: boolean) => void
  tags: any
  timer: TimerHandler
  stuckBucketTimers: TimerHandler[]
  constructor(reportStuck: (label: string, backgrounded: boolean, wasOffline: boolean) => void, tags: any) {
    this.reportStuck = reportStuck
    this.tags = tags
    this.timer = new TimerHandler({})
    this.stuckBucketTimers = [{
      duration: 15000,
      label: "15sec",
    }, {
      duration: 30000,
      label: "30sec",
    }, {
      duration: 60000,
      label: "1min",
    }, {
      duration: 300000,
      label: "5min",
    }, {
      duration: 600000,
      label: "10min",
    }].map(({
      duration,
      label,
    }) => new TimerHandler({
      timeoutMs: duration,
      onTimeout: (backgrounded, wasOffline) => {
        if (navigator.onLine) {
          this.reportStuck(label, backgrounded, wasOffline)
        }
      },
    }))
  }

  timerFinished() {
    return this.timer.finished
  }

  getStartTime() {
    return this.timer.startTime
  }

  finishTimers(callback) {
    const wasActive = !this.timer.finished
    const duration = wasActive ? this.timer.finish() : 0
    this.stuckBucketTimers.forEach(t => !t.finished && t.finish())
    if (wasActive && callback) {
      callback(duration, this.timer.backgrounded, this.timer.wasOffline, this.tags)
    }
  }
}
class LiveGraphMetrics {
  client: any
  defaultTags: any
  batchedCustomEvents: any[]
  batchedNumericEvents: any[]
  subscriptionTimings: Map<any, any>
  pendingFileMutations: any[]
  podName: string
  containerName: string
  serverVersion: string
  authFailed: boolean
  connectionCount: number
  erroredViewsCount: number
  successfulLoadedViewsCount: number
  sessionReportingIntervalMs: number
  sessionReportingThreshold: number
  stuckLoadingThresholdMs: number
  figmentDebuggingSamplingRate: number
  slowUpdateLatencyThreshold: number
  authTimer: TimerHandler | null
  nextConnectionType: string
  sessionSuccessTimer: any
  lastConnectTime: number | null
  serverSubscriptionTimers: Map<any, any>
  clientE2ESubscriptionTimers: Map<any, any>
  serverSubscriptionTimersV2: Map<any, any>
  clientE2ESubscriptionTimersV2: Map<any, any>
  initialSubscriptionTimers: Map<any, any>
  erroredViews: Map<any, any>
  syncTimers: Map<any, any>
  optimisticMutationTimers: Map<any, any>
  optimisticMutationSloTimer: Map<any, any>
  realtimeUpdateTimers: Map<any, any>
  openedFileKeys: Set<any>
  _currentlySendingBatchedEvents: boolean
  updatePendingMutationVerboseLogging: (mutations: any) => void
  onVisibilityChange: () => Promise<void>
  sendBatchedEventsInterval: any
  constructor(client: any, defaultTags: any = {}) {
    this.client = client
    this.defaultTags = defaultTags
    this.batchedCustomEvents = []
    this.batchedNumericEvents = []
    this.subscriptionTimings = new Map()
    this.pendingFileMutations = []
    this.podName = "unknown"
    this.containerName = "unknown"
    this.serverVersion = "unknown"
    this.authFailed = false
    this.connectionCount = 0
    this.erroredViewsCount = 0
    this.successfulLoadedViewsCount = 0
    this.sessionReportingIntervalMs = 30000
    this.sessionReportingThreshold = 20
    this.stuckLoadingThresholdMs = 15000
    this.figmentDebuggingSamplingRate = 0
    this.slowUpdateLatencyThreshold = 1000000
    this.authTimer = null
    this.nextConnectionType = "initial_connection"
    this.sessionSuccessTimer = null
    this.lastConnectTime = null
    this.serverSubscriptionTimers = new Map()
    this.clientE2ESubscriptionTimers = new Map()
    this.serverSubscriptionTimersV2 = new Map()
    this.clientE2ESubscriptionTimersV2 = new Map()
    this.initialSubscriptionTimers = new Map()
    this.erroredViews = new Map()
    this.syncTimers = new Map()
    this.optimisticMutationTimers = new Map()
    this.optimisticMutationSloTimer = new Map()
    this.realtimeUpdateTimers = new Map()
    this.openedFileKeys = new Set()
    this._currentlySendingBatchedEvents = false
    this.updatePendingMutationVerboseLogging = (mutations) => {
      if ("File" in mutations) {
        this.pendingFileMutations.push({
          mutation: mutations.File,
          timestamp: performance.now(),
        })
        if (this.pendingFileMutations.length > 20) {
          this.pendingFileMutations.shift()
        }
      }
    }
    this.onVisibilityChange = async () => {
      if (document.visibilityState === "hidden") {
        await this.sendBatchedEvents()
      }
    }
    document.addEventListener("visibilitychange", this.onVisibilityChange)
    window.addEventListener("pagehide", this.sendBatchedEvents)
    this.sendBatchedEventsInterval = setInterval(this.sendBatchedEvents, 5000)
    const sessionConfig = getInitialDynamicConfig("livegraph_client_config").get("session_reporting_config", {
      reporting_interval_ms: 30000,
      reporting_threshold: 20,
      stuck_loading_threshold_ms: 15000,
    })
    this.sessionReportingIntervalMs = sessionConfig.reporting_interval_ms
    this.sessionReportingThreshold = sessionConfig.reporting_threshold
    this.stuckLoadingThresholdMs = sessionConfig.stuck_loading_threshold_ms
    this.figmentDebuggingSamplingRate = getInitialDynamicConfig("livegraph_client_config").get("figment_debugging_sampling_rate", 0)
    this.slowUpdateLatencyThreshold = getInitialDynamicConfig("livegraph_client_config").get("slow_update_latency_threshold", 1000000)
  }

  async cleanup() {
    document.removeEventListener("visibilitychange", this.onVisibilityChange)
    window.removeEventListener("pagehide", this.sendBatchedEvents)
    clearInterval(this.sendBatchedEventsInterval)
    if (this.sessionSuccessTimer) {
      clearTimeout(this.sessionSuccessTimer)
      this.sessionSuccessTimer = undefined
    }
    await setupAdvanceTimers()
  }

  async sendBatchedEvents() {
    if (this._currentlySendingBatchedEvents)
      return
    this._currentlySendingBatchedEvents = true
    const custom = this.batchedCustomEvents
    const numeric = this.batchedNumericEvents
    this.batchedCustomEvents = []
    this.batchedNumericEvents = []
    try {
      await Promise.all([sendBatchedMetrics(custom), sendBatchedHistograms(numeric)])
    }
    catch {}
    this._currentlySendingBatchedEvents = false
  }

  reportCustomEvent(metric, tags = {}) {
    this.batchedCustomEvents.push({
      metric,
      tags: {
        ...this.defaultTags,
        ...tags,
      },
    })
  }

  reportNumericEvent(metric, value, tags = {}) {
    this.batchedNumericEvents.push({
      metric,
      value,
      tags: {
        ...this.defaultTags,
        ...tags,
      },
    })
  }

  getBucket(value) {
    if (value <= 1)
      return value.toString()
    if (value <= 5)
      return "2-5"
    if (value <= 10)
      return "6-10"
    if (value <= 20)
      return "11-20"
    return "21+"
  }

  getLastConnectBucket(duration) {
    if (duration < 1000)
      return "1s"
    if (duration < 10000)
      return "10s"
    if (duration < 60000)
      return "1m"
    if (duration < 3600000)
      return "1h"
    if (duration < 86400000)
      return "1d"
    return "over_a_day"
  }

  reportViewLoadSuccessPercentage() {
    const now = performance.now()
    let stuckCount = 0
    for (const timer of this.clientE2ESubscriptionTimersV2.values()) {
      if (!timer.timerFinished() && now - timer.getStartTime() > this.stuckLoadingThresholdMs)
        stuckCount++
    }
    const totalViews = this.erroredViewsCount + this.successfulLoadedViewsCount + stuckCount
    if (totalViews >= this.sessionReportingThreshold) {
      const percentage = this.successfulLoadedViewsCount / totalViews * 100
      this.reportNumericEvent(Metrics.LATENCY.SESSION_SUCCESS, percentage, {
        server_version: this.serverVersion,
      })
      if (percentage <= 0 && Math.random() < this.figmentDebuggingSamplingRate) {
        analyticsEventManager.trackDefinedEvent("livegraph.session_success_report", {
          successPercentage: percentage,
          totalViews,
          successfulLoadedViewsCount: this.successfulLoadedViewsCount,
          erroredViewsCount: this.erroredViewsCount,
          stuckLoadingViewsCount: stuckCount,
        })
      }
    }
    this.erroredViewsCount = 0
    this.successfulLoadedViewsCount = 0
    this.sessionSuccessTimer = setTimeout(() => this.reportViewLoadSuccessPercentage(), this.sessionReportingIntervalMs)
  }

  reportInitialViewMetric(viewName, tags, success) {
    const event = success ? Metrics.EVENTS.INITIAL_VIEW_SUCCESS : Metrics.EVENTS.INITIAL_VIEW_FAILURE
    const versionEvent = success ? Metrics.EVENTS.INITIAL_VIEW_SUCCESS_VERSION : Metrics.EVENTS.INITIAL_VIEW_FAILURE_VERSION
    this.reportCustomEvent(event, {
      ...tags,
      view_name: viewName,
    })
    this.reportCustomEvent(versionEvent, {
      ...tags,
      server_version: this.serverVersion,
    })
  }

  reportServerLatency(viewName, duration, priority, backgrounded, wasOffline, loadType) {
    const tags = {
      view_name: viewName,
      priority,
      was_backgrounded: String(backgrounded),
      was_offline: String(wasOffline),
      load_type: loadType,
    }
    this.reportNumericEvent(Metrics.LATENCY.SUBSCRIPTION_DATA, duration, tags)
    this.reportNumericEvent(Metrics.LATENCY.SUBSCRIPTION_DATA_VERSION, duration, {
      ...tags,
      server_version: this.serverVersion,
    })
    if (getFeatureFlags().livegraph_figment_metrics) {
      trackEventAnalytics("Livegraph Client Metrics Server Latency", {
        view_name: viewName,
        was_backgrounded: backgrounded,
        was_offline: wasOffline,
        server_latency_ms: duration,
        load_type: loadType,
      }, {
        forwardToDatadog: true,
      })
    }
  }

  reportServerLatencyV2(viewName, duration, priority, backgrounded, wasOffline, loadType, status) {
    this.reportNumericEvent(Metrics.LATENCY.SUBSCRIPTION_SERVER_LATENCY_V2, duration, {
      view_name: viewName,
      priority,
      was_backgrounded: String(backgrounded),
      was_offline: String(wasOffline),
      load_type: loadType,
      status,
    })
  }

  reportE2ELatency(viewName, duration, priority, backgrounded, wasOffline, loadType) {
    const tags = {
      view_name: viewName,
      priority,
      was_backgrounded: String(backgrounded),
      was_offline: String(wasOffline),
      load_type: loadType,
    }
    this.reportNumericEvent(Metrics.LATENCY.SUBSCRIPTION_E2E_DATA, duration, tags)
    this.reportNumericEvent(Metrics.LATENCY.SUBSCRIPTION_E2E_DATA_VERSION, duration, {
      ...tags,
      server_version: this.serverVersion,
    })
    if (getFeatureFlags().livegraph_figment_metrics) {
      trackEventAnalytics("Livegraph Client Metrics E2E Latency", {
        view_name: viewName,
        server_version: this.serverVersion,
        was_backgrounded: backgrounded,
        was_offline: wasOffline,
        e2e_latency_ms: duration,
        load_type: loadType,
      }, {
        forwardToDatadog: true,
      })
    }
  }

  reportE2ELatencyV2(viewName, duration, priority, backgrounded, wasOffline, loadType, status) {
    this.reportNumericEvent(Metrics.LATENCY.SUBSCRIPTION_E2E_LATENCY_V2, duration, {
      view_name: viewName,
      priority,
      was_backgrounded: String(backgrounded),
      was_offline: String(wasOffline),
      load_type: loadType,
      status,
    })
  }

  logSyncEvent(transactionId, name, data) {
    if (getFeatureFlags().livegraph_verbose_sync_logging) {
      analyticsEventManager.trackDefinedEvent("livegraph.sync_verbose_events", {
        transactionId: transactionId.toString(),
        name,
        data: JSON.stringify(data),
      })
    }
  }

  pageNumberToRange(pageNumber) {
    return pageNumber > 5 ? ">5" : String(pageNumber)
  }

  clearTimers(key) {
    const clientTimer = this.clientE2ESubscriptionTimers.get(key)
    if (clientTimer && !clientTimer.timer.finished)
      clientTimer.timer.finish()
    this.clientE2ESubscriptionTimers.delete(key);
    [this.serverSubscriptionTimers, this.initialSubscriptionTimers].forEach((map) => {
      const t = map.get(key)
      if (t && !t.timer.finished)
        t.timer.finish()
      map.delete(key)
    })
    this.erroredViews.delete(key)
  }

  clearTimersV2(key) {
    const serverTimer = this.serverSubscriptionTimersV2.get(key)
    if (serverTimer && !serverTimer.timer.finished)
      serverTimer.timer.finish()
    this.serverSubscriptionTimersV2.delete(key)
    const clientTimer = this.clientE2ESubscriptionTimersV2.get(key)
    if (clientTimer && !clientTimer.timerFinished())
      clientTimer.finishTimers()
    this.clientE2ESubscriptionTimersV2.delete(key)
  }

  onEvent(event) {
    this.initialConnectionHandler(event)
    this.subscriptionsHandler(event)
    this.subscriptionsHandlerV2(event)
    this.checkNullOpenFileHandler(event)
    this.syncHandler(event)
    this.mutationHandler(event)
    this.pendingMutationExistenceHandler(event)
    this.unexpectedObjectNameHandler(event)
    this.realtimeUpdateHandler(event)
    this.connectionClosedHandler(event)
    this.blockedMutationHandler(event)
    this.optimisticUpdateInsufficientDataHandler(event)
    this.emptySyncHandler(event)
    this.errorHandler(event)
    this.viewStatsHandler(event)
    this.viewTransitionHandler(event)
    this.refreshHandler(event)
    this.subscriptionUpdateLatencyHandler(event)
    this.paginationHandler(event)
    this.syncTimeoutHandler(event)
  }

  initialConnectionHandler(event) {
    if (event.type !== "CONNECTION_STATE")
      return
    const state = event.state
    let vital
    if (state.type === "connecting" && !this.authTimer) {
      const visibility = document.visibilityState
      vital = Nc?.startDurationVital("livegraph.web.connection")
      this.authTimer = new TimerHandler({
        onTimeout: (backgrounded, wasOffline) => {
          if (navigator.onLine) {
            const tags = {
              connection_type: this.nextConnectionType,
              client_visibility: document.visibilityState,
              client_visibility_on_initiate: visibility,
              backgrounded: String(backgrounded),
              wasOffline: String(wasOffline),
              server_version: this.serverVersion,
              duration: 10000, // Assuming timeoutMs is 10s
            }
            this.reportCustomEvent(Metrics.EVENTS.CONNECTION_STUCK, tags)
            Nc?.stopDurationVital(vital, {
              context: tags,
            })
          }
        },
        timeoutMs: 10000,
      }, {
        client_visibility_on_initiate: visibility,
      })
    }
    else if (state.type === "connected" && state.authenticated && this.authTimer && !this.authTimer.finished) {
      this.authFailed = false
      const lastConnect = this.lastConnectTime ? performance.now() - this.lastConnectTime : 0
      const lastConnectBucket = this.getLastConnectBucket(lastConnect)
      this.lastConnectTime = performance.now()
      this.connectionCount++
      let lastServer = "initial"
      if (this.podName !== "unknown") {
        lastServer = this.podName === state.podName ? "same" : "different"
      }
      else if (state.podName) {
        lastServer = "missing"
      }
      this.podName = state.podName || "unknown"
      this.containerName = state.containerName || "unknown"
      this.serverVersion = state.serverVersion || "unknown"
      this.authTimer.finish()
      const duration = this.authTimer.getTime()
      const tags: any = {
        connection_type: this.nextConnectionType,
        was_backgrounded: String(this.authTimer.backgrounded),
        was_offline: String(this.authTimer.wasOffline),
        slow_connect: String(duration >= 30000),
        server_version: this.serverVersion,
      }
      if (this.nextConnectionType === "reconnect")
        tags.last_connect = lastConnectBucket
      this.reportNumericEvent(Metrics.LATENCY.CONNECTION, duration, tags)
      Nc?.stopDurationVital(vital, {
        context: {
          status: "success",
          ...tags,
        },
      })
      this.reportCustomEvent(Metrics.EVENTS.CONNECTION_ATTEMPT, {
        count: this.getBucket(state.count),
        backgrounded: String(this.authTimer.backgrounded),
        last_server: lastServer,
        server_version: this.serverVersion,
      })
      this.nextConnectionType = "reconnect"
      if (!this.sessionSuccessTimer) {
        this.sessionSuccessTimer = setTimeout(() => this.reportViewLoadSuccessPercentage(), this.sessionReportingIntervalMs)
      }
    }
    else if (state.type === "disconnected") {
      if (this.authTimer) {
        this.authTimer.finish()
        this.authTimer = null
      }
    }
  }

  subscriptionsHandler(event) {
    switch (event.type) {
      case "SUBSCRIBE_VIEW_CLIENT":
      {
        const key = serializeArgs(event.view._name, event.args)
        if (!this.clientE2ESubscriptionTimers.has(key)) {
          const timer = new TimerHandler({}, {
            load_type: event.loadType,
            priority: event.priority,
          })
          this.clientE2ESubscriptionTimers.set(key, {
            viewName: event.view._name,
            priority: event.priority,
            loadType: event.loadType,
            timer,
          })
        }
        if (!this.initialSubscriptionTimers.has(key)) {
          const _visibility = document.visibilityState
          const timer = new TimerHandler({
            onTimeout: (backgrounded, wasOffline) => {
              const tags = {
                currently_backgrounded: String(document.visibilityState === "hidden"),
                connected_to_livegraph: String(this.client.connection.isConnected()),
                priority: event.priority,
                backgrounded: String(backgrounded),
                was_offline: String(wasOffline),
                reason: this.authFailed ? "auth_fail2" : "timeout",
                load_type: event.loadType,
              }
              this.reportInitialViewMetric(event.view._name, tags, 0)
              addDurationVital("livegraph.web.subscription.initial_view", event, timer.startEpochTime, timer.finish(), {
                ...tags,
                status: "failure",
                view_name: event.view._name,
              })
              this.initialSubscriptionTimers.delete(key)
            },
            timeoutMs: 10000,
          })
          this.initialSubscriptionTimers.set(key, {
            viewName: event.view._name,
            priority: event.priority,
            loadType: event.loadType,
            timer,
          })
        }
        break
      }
      case "SUBSCRIBE_VIEW_SERVER":
      {
        const key = serializeArgs(event.view._name, event.args)
        if (!this.serverSubscriptionTimers.has(key)) {
          const visibility = document.visibilityState
          const timer = new TimerHandler({
            onTimeout: (backgrounded, wasOffline) => {
              if (navigator.onLine) {
                this.reportCustomEvent(Metrics.EVENTS.SUBSCRIPTION_STUCK, {
                  view_name: event.view._name,
                  client_visibility: document.visibilityState,
                  client_visibility_on_initiate: visibility,
                  priority: event.priority,
                  backgrounded: String(backgrounded),
                  wasOffline: String(wasOffline),
                  has_pending_optimistic_mutations: String(this.client.hasUnresolvedGlobalOptimisticUpdates()),
                })
              }
            },
            timeoutMs: 10000,
          }, {
            client_visibility_on_initiate: visibility,
          })
          this.serverSubscriptionTimers.set(key, {
            viewName: event.view._name,
            priority: event.priority,
            loadType: event.loadType,
            timer,
          })
        }
        break
      }
      case "UNSUBSCRIBE_VIEW_SERVER":
      {
        const key = serializeArgs(event.view._name, event.args)
        this.clearTimers(key)
        break
      }
      case "SESSION.NOTIFY_OBSERVERS":
      {
        if (event.result.status === "loading")
          break
        const key = serializeArgs(event.view._name, event.args)
        const serverTimer = this.serverSubscriptionTimers.get(key)
        const clientTimer = this.clientE2ESubscriptionTimers.get(key)
        const initialTimer = this.initialSubscriptionTimers.get(key)
        if (initialTimer && !initialTimer.timer.finished && event.result.status !== "disabled") {
          const tags: any = {
            currently_backgrounded: String(document.visibilityState === "hidden"),
            connected_to_livegraph: String(this.client.connection.isConnected()),
            backgrounded: String(initialTimer.timer.backgrounded),
            was_offline: String(initialTimer.timer.wasOffline),
            priority: initialTimer.priority,
            load_type: initialTimer.loadType,
          }
          if (event.result.status === "loaded") {
            this.reportInitialViewMetric(event.view._name, tags, 1)
          }
          else {
            tags.reason = event.result.status
            this.reportInitialViewMetric(event.view._name, tags, 0)
          }
          const duration = initialTimer.timer.finish()
          this.initialSubscriptionTimers.delete(key)
          if (!isInteractionOrEvalMode() && getFeatureFlags().instrument_lg_view_loadspans && window.performance?.measure) {
            window.performance.measure(`LG: ${event.view._name}`, {
              detail: {
                args: event.args,
                backgrounded: String(initialTimer.timer.backgrounded),
                loadType: initialTimer.loadType,
                priority: initialTimer.priority,
                status: event.result.status,
                wasOffline: initialTimer.timer.wasOffline,
              },
              duration,
              start: initialTimer.timer.startTime,
            })
          }
          addDurationVital("livegraph.web.subscription.initial_view", event, initialTimer.timer.startEpochTime, duration, {
            status: event.result.status,
            ...tags,
          })
        }
        if (event.result.status === "loaded") {
          if (serverTimer && !serverTimer.timer.finished) {
            const duration = serverTimer.timer.finish()
            this.reportServerLatency(event.view._name, duration, serverTimer.priority, serverTimer.timer.backgrounded, serverTimer.timer.wasOffline, serverTimer.loadType)
          }
          if (clientTimer && !clientTimer.timer.finished) {
            const duration = clientTimer.timer.finish()
            this.reportE2ELatency(event.view._name, duration, clientTimer.priority, clientTimer.timer.backgrounded, clientTimer.timer.wasOffline, clientTimer.loadType)
          }
        }
        else if (event.result.status === "errors") {
          clientTimer?.timer.finish()
          serverTimer?.timer.finish()
        }
        break
      }
      case "CONNECTION_STATE":
      {
        if (event.state.type === "disconnected") {
          for (const t of this.serverSubscriptionTimers.values()) {
            if (!t.timer.finished)
              t.timer.finish()
          }
          for (const t of this.clientE2ESubscriptionTimers.values()) {
            if (!t.timer.finished)
              t.timer.finish()
          }
        }
        break
      }
      case "SUBSCRIPTION_ERROR":
      {
        this.reportCustomEvent(Metrics.EVENTS.SUBSCRIPTION_ERRORS, {
          code: event.errorCode,
          server_version: this.serverVersion,
        })
        this.clearTimers(event.liveViewKey)
        break
      }
    }
  }

  subscriptionsHandlerV2(event) {
    switch (event.type) {
      case "SUBSCRIBE_VIEW_CLIENT":
      {
        const key = serializeArgs(event.view._name, event.args)
        if (!this.clientE2ESubscriptionTimersV2.has(key)) {
          this.clientE2ESubscriptionTimersV2.set(key, new StuckTimerHandler((duration, backgrounded, wasOffline) => {
            this.reportCustomEvent(Metrics.EVENTS.INITIAL_VIEW_STUCK_LOADING, {
              view_name: event.view._name,
              priority: event.priority,
              duration,
              was_backgrounded: String(backgrounded),
              was_offline: String(wasOffline),
              server_version: this.serverVersion,
            })
            if (duration === "5min") {
              analyticsEventManager.trackDefinedEvent("livegraph.gigastuck_view_client", {
                view_name: event.view._name,
                user_id: this.client.userId || "unknown",
                was_backgrounded: backgrounded,
                was_offline: wasOffline,
                browser_name: getEnvironmentInfo().browser_name?.toString(),
                os_name: getEnvironmentInfo().os_name?.toString(),
                server_version: this.serverVersion,
                outstanding_syncs: this.syncTimers.size > 0,
              })
            }
          }, {
            client_visibility_on_initiate: document.visibilityState,
            load_type: event.loadType,
            priority: event.priority,
          }))
        }
        break
      }
      case "SUBSCRIBE_VIEW_SERVER":
      {
        const key = serializeArgs(event.view._name, event.args)
        if (!this.serverSubscriptionTimersV2.has(key)) {
          const visibility = document.visibilityState
          const timer = new TimerHandler({
            onTimeout: (backgrounded, wasOffline) => {
              if (navigator.onLine) {
                this.reportCustomEvent(Metrics.EVENTS.SUBSCRIPTION_STUCK_V2, {
                  view_name: event.view._name,
                  client_visibility: document.visibilityState,
                  client_visibility_on_initiate: visibility,
                  priority: event.priority,
                  backgrounded: String(backgrounded),
                  wasOffline: String(wasOffline),
                  has_pending_optimistic_mutations: String(this.client.hasUnresolvedGlobalOptimisticUpdates()),
                })
              }
            },
            timeoutMs: 10000,
          }, {
            client_visibility_on_initiate: visibility,
          })
          this.serverSubscriptionTimersV2.set(key, {
            viewName: event.view._name,
            priority: event.priority,
            loadType: event.loadType,
            timer,
          })
        }
        break
      }
      case "UNSUBSCRIBE_VIEW_SERVER":
      {
        const key = serializeArgs(event.view._name, event.args)
        this.clearTimersV2(key)
        break
      }
      case "DONE":
      {
        const key = serializeArgs(event.viewName, event.args)
        const serverTimer = this.serverSubscriptionTimersV2.get(key)
        const clientTimer = this.clientE2ESubscriptionTimersV2.get(key)
        const status = event.clientStatus === "loaded" ? "ok" : event.clientStatus === "errors" ? "error" : "loading"
        if (serverTimer && !serverTimer.timer.finished) {
          const duration = serverTimer.timer.finish()
          this.reportServerLatencyV2(event.viewName, duration, serverTimer.priority, serverTimer.timer.backgrounded, serverTimer.timer.wasOffline, serverTimer.loadType, status)
          this.serverSubscriptionTimersV2.delete(key)
        }
        if (clientTimer && !clientTimer.timerFinished()) {
          clientTimer.finishTimers((duration, backgrounded, wasOffline, tags) => {
            this.reportE2ELatencyV2(event.viewName, duration, tags.priority || "unknown", backgrounded, wasOffline, tags.load_type || "Initial", status)
          })
          this.clientE2ESubscriptionTimersV2.delete(key)
          if (event.clientStatus === "loaded") {
            this.successfulLoadedViewsCount++
          }
          else if (event.clientStatus === "errors") {
            this.erroredViewsCount++
          }
          else if (event.clientStatus === "loading") {
            this.reportCustomEvent(Metrics.EVENTS.SERVER_CLIENT_DISCREPANCY, {
              view_name: event.viewName,
            })
          }
        }
        break
      }
      case "CONNECTION_CLOSED":
      {
        for (const t of this.serverSubscriptionTimersV2.values()) {
          if (!t.timer.finished)
            t.timer.finish()
        }
        this.serverSubscriptionTimersV2.clear()
        break
      }
      case "SUBSCRIPTION_ERROR":
      {
        this.clearTimersV2(event.liveViewKey)
        break
      }
    }
  }

  errorHandler(event) {
    if (event.type === "SESSION.NOTIFY_OBSERVERS") {
      const key = serializeArgs(event.view._name, event.args)
      if (event.result.errors && event.result.errors.length > 0 && !this.erroredViews.has(key)) {
        const retriable = event.result.errors.every(e => e.retriable)
        this.reportCustomEvent(Metrics.EVENTS.ERRORED_VIEW, {
          view_name: event.view._name,
          status: event.result.status,
          retriable: retriable.toString(),
        })
        if (retriable) {
          this.erroredViews.set(key, new TimerHandler())
        }
      }
      else if (event.result.status === "loaded" && event.result.errors && event.result.errors.length === 0) {
        const timer = this.erroredViews.get(key)
        if (timer) {
          this.erroredViews.delete(key)
          this.reportNumericEvent(Metrics.LATENCY.ERROR_RECOVERY_LATENCY, timer.getTime(), {
            view_name: event.view._name,
            was_backgrounded: String(timer.backgrounded),
            was_offline: String(timer.wasOffline),
            ...(event.retryCount
              ? {
                  count: this.getBucket(event.retryCount),
                }
              : {}),
          })
        }
      }
    }
  }

  checkNullOpenFileHandler(event) {
    if (event.type === "SESSION.NOTIFY_OBSERVERS" && event.view._name === "OpenEditorFileData" && event.result.status === "loaded") {
      const fileKey = event.args.fileKey
      if (!this.openedFileKeys.has(fileKey)) {
        this.openedFileKeys.add(fileKey)
        if (event.result.data.file === null) {
          this.reportCustomEvent(Metrics.EVENTS.OPEN_FILE_NULL)
        }
      }
    }
  }

  syncHandler(event) {
    switch (event.type) {
      case "SYNC_STARTED":
      {
        this.logSyncEvent(event.transactionId, "SYNC_STARTED", {
          mutatedObjects: event.mutatedObjects,
          alreadyExists: this.syncTimers.has(event.transactionId),
        })
        if (this.syncTimers.has(event.transactionId))
          break
        const syncTimer = new TimerHandler({
          onTimeout: (backgrounded, wasOffline) => {
            this.reportCustomEvent(Metrics.EVENTS.SYNC_STUCK, {
              backgrounded: String(backgrounded),
              wasOffline: String(wasOffline),
              server_version: this.serverVersion,
            })
          },
          timeoutMs: 10000,
        })
        this.syncTimers.set(event.transactionId, syncTimer)
        if (this.optimisticMutationSloTimer.has(event.transactionId.toString()))
          break
        const sloTimer = new TimerHandler({
          onTimeout: (backgrounded, wasOffline, wasDisconnected) => {
            sloTimer.finish()
            this.reportCustomEvent(Metrics.EVENTS.OPTIMISTIC_MUTATION_FAIL, {
              currently_backgrounded: String(document.visibilityState === "hidden"),
              connected_to_livegraph: String(this.client.connection.isConnected()),
              backgrounded: String(backgrounded),
              was_offline: String(wasOffline),
              was_disconnected: String(wasDisconnected),
              server_version: this.serverVersion,
              type: "sync",
            })
            if (getLaunchDarklyFlagsExport().livegraph_web_report_mutation_fail_objs) {
              const objs = event.mutatedObjects.length === 0 ? ["none"] : event.mutatedObjects
              objs.forEach((obj) => {
                this.reportCustomEvent(Metrics.EVENTS.OPTIMISTIC_MUTATION_FAIL_OBJ_NAME, {
                  currently_backgrounded: String(document.visibilityState === "hidden"),
                  connected_to_livegraph: String(this.client.connection.isConnected()),
                  backgrounded: String(backgrounded),
                  was_offline: String(wasOffline),
                  was_disconnected: String(wasDisconnected),
                  object_name: obj,
                })
              })
            }
            this.logSyncEvent(event.transactionId, "SYNC_FAILURE_REPORTED", {
              wasOffline: String(wasOffline),
              wasBackgrounded: String(backgrounded),
              wasDisconnected: String(wasDisconnected),
            })
            this.optimisticMutationSloTimer.delete(event.transactionId.toString())
          },
          timeoutMs: 10000,
          isConnectedToLG: this.client.connection.isConnected(),
        })
        this.optimisticMutationSloTimer.set(event.transactionId.toString(), sloTimer)
        break
      }
      case "SYNC_COMPLETED":
      {
        const syncTimer = this.syncTimers.get(event.transactionId)
        const sloTimer = this.optimisticMutationSloTimer.get(event.transactionId.toString())
        this.logSyncEvent(event.transactionId, "SYNC_COMPLETED", {
          hasSyncTimer: this.syncTimers.has(event.transactionId),
          duration: syncTimer?.getTime(),
          wasOffline: String(syncTimer?.wasOffline),
          wasBackgrounded: String(syncTimer?.backgrounded),
          wasDisconnected: String(syncTimer?.wasDisconnected),
          hasSloTimer: !!sloTimer,
          sloTimerAlreadyFinished: String(sloTimer?.finished),
          sloTimerDuration: sloTimer?.getTime(),
        })
        if (!syncTimer)
          break
        const duration = syncTimer.finish()
        this.reportNumericEvent(Metrics.LATENCY.SYNC, duration, {
          was_backgrounded: String(syncTimer.backgrounded),
          was_offline: String(syncTimer.wasOffline),
          server_version: this.serverVersion,
        })
        this.syncTimers.delete(event.transactionId)
        if (sloTimer && !sloTimer.finished) {
          sloTimer.finish()
          this.reportCustomEvent(Metrics.EVENTS.OPTIMISTIC_MUTATION_SUCCESS, {
            currently_backgrounded: String(document.visibilityState === "hidden"),
            connected_to_livegraph: String(this.client.connection.isConnected()),
            backgrounded: String(sloTimer.backgrounded),
            was_offline: String(sloTimer.wasOffline),
            server_version: this.serverVersion,
          })
          this.logSyncEvent(event.transactionId, "SYNC_SUCCESS_REPORTED", {})
          this.optimisticMutationSloTimer.delete(event.transactionId.toString())
        }
        break
      }
      case "CONNECTION_STATE":
      {
        if (event.state.type === "disconnected") {
          for (const [id, t] of this.syncTimers.entries()) {
            this.logSyncEvent(id, "SYNC_TIMER_DISCONNECTED", {
              wasFinished: String(t.finished),
            })
            if (!t.finished)
              t.finish()
          }
          this.syncTimers.clear()
          for (const [id, t] of this.optimisticMutationSloTimer.entries()) {
            this.logSyncEvent(id, "SLO_TIMER_DISCONNECTED", {
              wasFinished: String(t.finished),
            })
            if (!t.finished)
              t.markDisconnected()
          }
          for (const t of this.optimisticMutationTimers.values()) {
            if (!t.finished)
              t.markDisconnected()
          }
          for (const t of this.realtimeUpdateTimers.values()) {
            if (!t.finished)
              t.markDisconnected()
          }
        }
        break
      }
    }
  }

  mutationHandler(event) {
    switch (event.type) {
      case "SESSION.APPLY_SHADOW_MUTATIONS":
      {
        for (const objName in event.mutations) {
          for (const _ in event.mutations[objName]) {
            this.reportCustomEvent(Metrics.EVENTS.OPTIMISTIC_MUTATION, {
              operation: event.operationType,
              object_name: objName,
            })
          }
        }
        break
      }
      case "OPTIMISTIC_MUTATION_CREATED":
      {
        if (this.optimisticMutationTimers.has(event.transactionId))
          break
        const timer = new TimerHandler({
          isConnectedToLG: this.client.connection.isConnected(),
        })
        this.optimisticMutationTimers.set(event.transactionId, timer)
        break
      }
      case "OPTIMISTIC_MUTATION_COMPLETED":
      {
        const timer = this.optimisticMutationTimers.get(event.transactionId)
        if (timer) {
          const duration = timer.finish()
          this.reportNumericEvent(Metrics.LATENCY.OPTIMISTIC_MUTATION, duration, {
            mutation_type: event.mutationType,
            was_backgrounded: String(timer.backgrounded),
            was_offline: String(timer.wasOffline),
            was_disconnected: String(timer.wasDisconnected),
            server_version: this.serverVersion,
          })
          this.optimisticMutationTimers.delete(event.transactionId)
        }
        break
      }
    }
  }

  pendingMutationExistenceHandler(event) {
    if (event.type === "PENDING_MUTATION_EXISTENCE") {
      this.reportCustomEvent(Metrics.EVENTS.PENDING_MUTATION_EXISTENCE, {
        exist: `${event.exist}`,
        object_name: event.objectName,
        operation: event.operationType,
      })
      if (!event.exist) {
        analyticsEventManager.trackDefinedEvent("livegraph.optimistic_mutation_resolution_failure", {
          objectName: event.objectName,
          operation: event.operationType,
          optimisticMutations: JSON.stringify(event.optimisticMutations),
          pendingServerMutations: JSON.stringify(event.pendingServerMutations),
        })
      }
    }
  }

  unexpectedObjectNameHandler(event) {
    if (event.type === "SESSION.UNEXPECTED_OBJECT_NAME") {
      this.reportCustomEvent(Metrics.EVENTS.UNEXPECTED_OBJECT_NAME, {
        object_name: event.objectName,
      })
    }
  }

  realtimeUpdateHandler(event) {
    if (event.type === "WAIT_SERVER_OBJECTS_STARTED") {
      for (const obj in event.mutations) {
        for (const id in event.mutations[obj]) {
          const key = `${obj}+${id}`
          this.realtimeUpdateTimers.set(key, new TimerHandler({
            isConnectedToLG: this.client.connection.isConnected(),
          }))
          const sloTimer = new TimerHandler({
            onTimeout: (backgrounded, wasOffline, wasDisconnected) => {
              sloTimer.finish()
              this.reportCustomEvent(Metrics.EVENTS.OPTIMISTIC_MUTATION_FAIL, {
                currently_backgrounded: String(document.visibilityState === "hidden"),
                connected_to_livegraph: String(this.client.connection.isConnected()),
                backgrounded: String(backgrounded),
                was_offline: String(wasOffline),
                was_disconnected: String(wasDisconnected),
                server_version: this.serverVersion,
                type: "uuid",
              })
              this.optimisticMutationSloTimer.delete(key)
            },
            timeoutMs: 10000,
            isConnectedToLG: this.client.connection.isConnected(),
          })
          this.optimisticMutationSloTimer.set(key, sloTimer)
        }
      }
    }
    else if (event.type === "WAIT_SERVER_OBJECTS_ENDED") {
      for (const obj in event.mutations) {
        for (const id in event.mutations[obj]) {
          const key = `${obj}+${id}`
          const timer = this.realtimeUpdateTimers.get(key)
          if (timer) {
            const duration = timer.finish()
            this.reportNumericEvent(Metrics.LATENCY.OPTIMISTIC_MUTATION, duration, {
              mutation_type: "uuid_create",
              was_backgrounded: String(timer.backgrounded),
              was_offline: String(timer.wasOffline),
              was_disconnected: String(timer.wasDisconnected),
              server_version: this.serverVersion,
            })
          }
          this.realtimeUpdateTimers.delete(key)
          const sloTimer = this.optimisticMutationSloTimer.get(key)
          if (sloTimer && !sloTimer.finished) {
            sloTimer.finish()
            this.reportCustomEvent(Metrics.EVENTS.OPTIMISTIC_MUTATION_SUCCESS, {
              currently_backgrounded: String(document.visibilityState === "hidden"),
              connected_to_livegraph: String(this.client.connection.isConnected()),
              backgrounded: String(sloTimer.backgrounded),
              was_offline: String(sloTimer.wasOffline),
              server_version: this.serverVersion,
            })
            this.optimisticMutationSloTimer.delete(key)
          }
        }
      }
    }
  }

  connectionClosedHandler(event) {
    if (event.type === "CONNECTION_CLOSED") {
      const tags = {
        code: event.closeEvent.code.toString(),
        reason: event.closeEvent.reason,
        server_version: this.serverVersion,
      }
      this.reportCustomEvent(Metrics.EVENTS.CONNECTION_CLOSE, tags)
      Nc?.addDurationVital("livegraph.web.connection.close", {
        startTime: Date.now(),
        duration: 0,
        context: tags,
      })
      if (event.closeEvent.code === 4011)
        this.authFailed = true
    }
  }

  blockedMutationHandler(event) {
    if (event.type === "MUTATIONS_BLOCKED_ON_OPTIMISTIC_UPDATE") {
      this.reportNumericEvent(Metrics.SYNC_BLOCKED_MUTATIONS, event.count)
    }
  }

  optimisticUpdateInsufficientDataHandler(event) {
    if (event.type === "SESSION.OPTIMISTIC_UPDATE_INSUFFICIENT_DATA") {
      const loadingPathsSet = new Set()
      event.loadingPaths.forEach(path => path.forEach(item => loadingPathsSet.add(item)))
      logError("livegraph", `An optimistic mutation did not provide sufficient data to generate a complete view result. These views will appear to be dropped: ${event.loadedToLoadingViews.join(", ")}`, {
        loadedToLoadingViews: event.loadedToLoadingViews,
        loadingPaths: [...loadingPathsSet],
      }, {
        reportAsSentryError: true,
        logToConsole: LogToConsoleMode.ALWAYS,
      })
    }
  }

  emptySyncHandler(event) {
    if (event.type === "EMPTY_SYNC" && getLaunchDarklyFlagsExport().livegraph_web_report_empty_sync) {
      this.reportCustomEvent(Metrics.EVENTS.EMPTY_SYNC, {
        source: event.source,
      })
    }
  }

  viewStatsHandler(event) {
    if (event.type === "VIEW.QUERY_STATS" && getFeatureFlags().livegraph_log_view_stats) {
      trackEventAnalytics("Livegraph Client View Stats", {
        type: event.type,
        nodeType: event.nodeType,
        viewName: event.viewName,
        objectName: event.objectName,
        parentName: event.parentName,
        fieldName: event.fieldName,
        instanceLength: event.instanceLength,
        hasCanReadPermissionCheck: event.hasCanReadPermissionCheck,
      }, {
        forwardToDatadog: false,
      })
    }
  }

  viewTransitionHandler(event) {
    if (event.type === "VIEW.STATE_TRANSITION" && getFeatureFlags().livegraph_log_view_transition) {
      trackEventAnalytics("Livegraph Client View Transition", {
        type: event.type,
        viewName: event.viewName,
        userId: event.userId,
        transitionType: event.transitionType,
        isInitialConnection: event.isInitialConnection,
      }, {
        forwardToDatadog: false,
      })
    }
  }

  refreshHandler(event) {
    if (event.type === "HARD_REFRESH") {
      this.reportCustomEvent(Metrics.EVENTS.HARD_REFRESH)
    }
  }

  subscriptionUpdateLatencyHandler(event) {
    if (event.type === "SUBSCRIPTION_UPDATE_LATENCY") {
      const now = performance.now()
      const sessionDuration = this.lastConnectTime ? now - this.lastConnectTime : 0
      if (this.connectionCount === 1 || sessionDuration >= 65000) {
        this.reportNumericEvent(Metrics.LATENCY.SUBSCRIPTION_UPDATE_LATENCY_V2, event.latencyMs, {
          object_name: event.objectName,
          server_version: this.serverVersion,
        })
        if ((event.latencyMs > this.slowUpdateLatencyThreshold || event.latencyMs < 0) && Math.random() < this.figmentDebuggingSamplingRate) {
          analyticsEventManager.trackDefinedEvent("livegraph.slow_update_latency", {
            objectName: event.objectName,
            latency: event.latencyMs,
            updateAt: event.updatedAt.toISOString(),
            currentTime: event.currentTime.toISOString(),
            isInitialConnection: String(event.isInitialConnection),
          })
        }
      }
    }
  }

  paginationHandler(event) {
    if (event.type === "PAGINATION_LATENCY") {
      this.reportNumericEvent(Metrics.LATENCY.PAGINATION_LATENCY, event.latency, {
        view_name: event.viewName,
        resolver: event.resolver,
        page_number: this.pageNumberToRange(event.pageNumber),
        status: event.status,
      })
    }
  }

  syncTimeoutHandler(event) {
    if (event.type === "SYNC_TIMEOUT") {
      this.reportCustomEvent(Metrics.EVENTS.SYNC_TIMEOUT, {
        backgrounded: String(event.backgrounded),
        was_offline: String(event.wasOffline),
      })
    }
  }
}
class ResponseSampler {
  static FILE_KEY_ONLY_REGEX = /^[0-9a-z]{22}$|^[0-9a-z]{24}$/i
  static EXCLUDE_KEYS = ["playground_fig_file_key"]
  userId: string
  samplingRate: number
  constructor(userId, samplingRate) {
    this.userId = userId
    this.samplingRate = samplingRate
  }

  onEvent(event) {
    if (event.type === "SESSION.NOTIFY_OBSERVERS") {
      const {
        view,
        args,
        result,
      } = event
      if (result.status === "loaded" && Math.random() < this.samplingRate) {
        const received = this.extractFileKeys(result, ["result"])
        if (Object.keys(received).length === 0)
          return
        const provided = this.extractFileKeys(args, ["args"])
        for (const key in provided) delete received[key]
        if (Object.keys(received).length === 0)
          return
        responseSamplerApi.submitResponseSample(this.userId, view._name, args, provided, received)
      }
    }
  }

  static isFileKey(value) {
    return /^[0-9a-z]{22}$|^[0-9a-z]{24}$/i.test(value)
  }

  static isKeyToInspect(key) {
    return key.toLowerCase().includes("key") && !this.EXCLUDE_KEYS.includes(key)
  }

  extractFileKeys(obj: any, path: string[] = [], result: any = {}) {
    for (const key in obj) {
      const currentPath = [...path, key]
      const value = obj[key]
      if (typeof value === "object" && value !== null) {
        if (Array.isArray(value)) {
          value.forEach((item, _index) => {
            if (typeof item === "object" && item !== null) {
              this.extractFileKeys(item, [...currentPath, "*"], result)
            }
            else if (ResponseSampler.isKeyToInspect(key) && ResponseSampler.isFileKey(item)) {
              if (!result[item])
                result[item] = []
              result[item].push(`${currentPath.join(".")}.*`)
            }
          })
        }
        else {
          this.extractFileKeys(value, currentPath, result)
        }
      }
      else if (ResponseSampler.isKeyToInspect(key) && ResponseSampler.isFileKey(value)) {
        if (!result[value])
          result[value] = []
        result[value].push(currentPath.join("."))
      }
    }
    return result
  }
}
const UpdateSloSchema = (z as any).object({
  id: (z as any).string().uuid(),
  key: (z as any).string().uuid(),
  createdAt: (z as any).coerce.date(),
  updatedAt: (z as any).coerce.date(),
})
class UpdateSloApi {
  validator: any
  constructor() {
    this.validator = createMetaValidator("LGUpdateSloSchemaValidator", convertSinatraModel(UpdateSloSchema), null)
  }

  async createLGUpdateSloData(key: string) {
    return this.validator.validate(async ({
      xr,
    }: any) => await xr.post("/api/lg_update_slo_data", APIParameterUtils.toAPIParameters({
      key,
    })))
  }

  async updateLGUpdateSloData(id: string, key: string) {
    return this.validator.validate(async ({
      xr,
    }: any) => await xr.put(`/api/lg_update_slo_data/${id}`, APIParameterUtils.toAPIParameters({
      key,
    })))
  }

  async deleteLGUpdateSloData(id: string) {
    return this.validator.validate(async ({
      xr,
    }: any) => await xr.del(`/api/lg_update_slo_data/${id}`))
  }
}
const NI = new UpdateSloApi()
class SloMonitor {
  client: any
  loopInterval: number
  failureThresholdMs: number
  use100x: boolean
  isSloLoopEnabled: boolean
  measurementInProgress: Promise<any> | null
  nextMeasurementTimeoutId: any
  sloEntryId: string | null
  unsubscribeCallback: (() => void) | null
  subscriptionObserver: (result: any) => void
  serverVersion: string
  constructor(client: any, loopInterval: number, failureThresholdMs: number, use100x: boolean) {
    this.client = client
    this.loopInterval = loopInterval
    this.failureThresholdMs = failureThresholdMs
    this.use100x = use100x
    this.isSloLoopEnabled = false
    this.measurementInProgress = null
    this.nextMeasurementTimeoutId = null
    this.sloEntryId = null
    this.unsubscribeCallback = null
    this.subscriptionObserver = () => {}
    this.serverVersion = "unknown"
  }

  onEvent(event) {
    if (event.type === "CONNECTION_STATE" && event.state.type === "connected" && event.state.authenticated) {
      this.serverVersion = event.state.serverVersion || "unknown"
    }
  }

  startMeasureLoop() {
    if (!this.isSloLoopEnabled) {
      this.isSloLoopEnabled = true
      this.measureLoop()
    }
  }

  async stopMeasureLoop() {
    if (this.measurementInProgress)
      await this.measurementInProgress
    this.measurementInProgress = null
    if (this.nextMeasurementTimeoutId)
      clearTimeout(this.nextMeasurementTimeoutId)
    this.nextMeasurementTimeoutId = null
    if (this.unsubscribeCallback)
      this.unsubscribeCallback?.()
    this.unsubscribeCallback = null
    this.isSloLoopEnabled = false
    try {
      if (this.sloEntryId)
        await NI.deleteLGUpdateSloData(this.sloEntryId)
    }
    catch {}
    this.sloEntryId = null
  }

  async measureLoop() {
    this.measurementInProgress = this.measure()
    await this.measurementInProgress
    this.measurementInProgress = null
    this.nextMeasurementTimeoutId = setTimeout(() => this.measureLoop(), this.getTimeoutWithJitter())
  }

  getTimeoutWithJitter() {
    return this.loopInterval + (Math.random() - 0.5) * this.loopInterval
  }

  reportSuccessOrFail(start, end, backgrounded, wasOffline) {
    const duration = end - start
    const event = duration <= this.failureThresholdMs ? Metrics.EVENTS.SUBSCRIPTION_UPDATE_SUCCESS : Metrics.EVENTS.SUBSCRIPTION_UPDATE_FAILURE
    sendMetric(event, {
      currently_backgrounded: String(document.visibilityState === "hidden"),
      connected_to_livegraph: String(this.client.connection.isConnected()),
      backgrounded: String(backgrounded),
      was_offline: String(wasOffline),
      used_100x: String(this.use100x),
      server_version: this.serverVersion,
    })
  }

  async measure() {
    if (!this.unsubscribeCallback) {
      try {
        const response = await NI.createLGUpdateSloData(generateUUIDv4())
        this.sloEntryId = response.data.meta.id
        await new Promise<void>((resolve) => {
          this.subscriptionObserver = (result: any) => {
            if (result.status === "loaded" || result.status === "errors")
              resolve()
          }
          this.unsubscribeCallback = this.client.subscribe(this.use100x ? GraftingUpdateSloData : SubscriptionUpdateSloData, {
            id: this.sloEntryId,
          }, this.subscriptionObserver)
        })
      }
      catch {
        return
      }
    }
    const newKey = generateUUIDv4()
    const promise = new Promise<void>((resolve) => {
      this.subscriptionObserver = (result: any) => {
        if (result.status === "loaded") {
          const keyValue = "subscriptionUpdateSloData" in result.data ? result.data.subscriptionUpdateSloData?.key : result.data.graftingUpdateSloData.status === "loaded" ? result.data.graftingUpdateSloData.data?.key : undefined
          if (keyValue === newKey)
            resolve()
        }
      }
    })
    try {
      const start = Date.now()
      await NI.updateLGUpdateSloData(this.sloEntryId, newKey)
      let failed = false
      const timer = new TimerHandler({
        onTimeout: (backgrounded, wasOffline) => {
          failed = true
          sendMetric(Metrics.EVENTS.SUBSCRIPTION_UPDATE_FAILURE, {
            currently_backgrounded: String(document.visibilityState === "hidden"),
            connected_to_livegraph: String(this.client.connection.isConnected()),
            backgrounded: String(backgrounded),
            was_offline: String(wasOffline),
            used_100x: String(this.use100x),
            server_version: this.serverVersion,
          })
        },
        timeoutMs: this.failureThresholdMs,
      })
      await promise
      const end = Date.now()
      timer.finish()
      if (!failed)
        this.reportSuccessOrFail(start, end, timer.backgrounded, timer.wasOffline)
      sendHistogram(Metrics.LATENCY.SUBSCRIPTION_UPDATE_LATENCY, end - start, {
        currently_backgrounded: String(document.visibilityState === "hidden"),
        connected_to_livegraph: String(this.client.connection.isConnected()),
        backgrounded: String(timer.backgrounded),
        was_offline: String(timer.wasOffline),
        used_100x: String(this.use100x),
        server_version: this.serverVersion,
      })
    }
    catch {}
  }
}
class EventRecorder {
  recordings: Map<any, any>
  debugLogs: any
  constructor() {
    this.recordings = new Map()
    this.debugLogs = new CircularBuffer(5120, null)
  }

  logEvent(event) {
    const tsEvent = {
      ...event,
      ts: new Date(),
    }
    this.recordings.forEach(rec => rec.push(tsEvent))
    this.debugLogs.push(tsEvent)
  }

  startRecording() {
    const id = generateUUIDv4()
    this.recordings.set(id, new CircularBuffer(5120, null))
    return id
  }

  stopRecording(id) {
    const rec = this.recordings.get(id)
    if (rec) {
      this.recordings.delete(id)
      return rec.toArray()
    }
    return []
  }

  getDebugLogs() {
    return this.debugLogs.toArray()
  }

  getDebugLogsAsStr() {
    return JSON.stringify(this.getDebugLogs(), Deduplicator.create())
  }

  resetDebugLogs() {
    this.debugLogs.clear()
  }
}
const liveGraphEventRecorder = new EventRecorder()
class ConsoleLogger {
  logEvent(event: any) {
    switch (event.type) {
      case "RESPONSE_MESSAGE":
      {
        const msg = event.message
        switch (msg.messageType) {
          case "requestError":
          case "serverError":
            console.log("[Livegraph] Request ran into error:", msg.error)
            break
          case "authFail":
            console.log("[Livegraph] Authentication failed")
            break
          case "viewSubscriptionFailed":
            console.log("[Livegraph] Subscribe to view failed due to error:", msg.error)
            break
        }
        break
      }
      case "CONNECTION_STATE":
      {
        if (event.state.type === "connected" && event.state.authenticated) {
          console.debug(`[Livegraph] Connected ${new Date().toISOString()}.`)
        }
        else if (event.state.type === "disconnected") {
          console.debug(`[Livegraph] Disconnected ${new Date().toISOString()}.`)
        }
        break
      }
      case "CONNECTION_CLOSED":
      {
        console.log("[Livegraph] Connection closed:", event.closeEvent)
        break
      }
      case "PENDING_MUTATION_EXISTENCE":
      {
        if (!event.exist) {
          console.log("[Livegraph] Pending mutations does not contain the optimistic object: ", event.optimisticInstance)
        }
        break
      }
      case "SESSION.NOTIFY_OBSERVERS":
      {
        if (event.result.status === "errors" || event.result.errors && event.result.errors.length > 0) {
          console.error("[Livegraph] Error(s) in view:", `status: ${event.result.status}`, event.view._name, event.args, JSON.stringify(event.result.errors.map(e => `Err: ${e.path.join(".")}, code ${e.code}: ${e.error}`)))
        }
        break
      }
    }
  }
}
const NS = new ConsoleLogger()
const CookiesToClear = ["AWSALBTG", "AWSALBTGCORS", "AWSALB", "AWSALBCORS"]
const PreloadViews = [FileBrowserRecentFilesView, FileBrowserSearchBarData, FileBrowserSidebarData, OrgAdminUserView, OpenEditorFileData]
class ResponseSamplerApi {
  async submitResponseSample(userId, view, args, provided, received) {
    return sendWithRetry.post("/api/response_sampler", {
      service_name: "livegraph",
      user_id: userId,
      source_context: {
        view,
        ...Object.fromEntries(Object.entries(args).filter(([k]) => sampledParameterKeys.includes(k)).map(([k, v]) => [k, String(v)])),
      },
      provided_file_key_metadata: provided,
      received_file_key_metadata: received,
    })
  }
}
const responseSamplerApi = new ResponseSamplerApi()
const sampledParameterKeys = ["repoId", "userId", "targetUserId", "currentOrgId", "teamId", "orgId", "targetOrgId", "orgIds", "workspaceId", "planType", "hubFileId", "projectId", "planId", "libraryKey", "editorType", "planParentId", "planParentType"]

/**
 * Creates and configures a LiveGraph client instance with comprehensive configuration
 * including connection settings, feature flags, and event handling.
 *
 * @param userId - The current user identifier
 * @param earlyWS - Optional pre-established WebSocket connection
 * @returns Configured OptimisticMutationHandler instance
 */
function createLiveGraphClient(userId: string, earlyWS?: WebSocket): OptimisticMutationHandler {
  // Extract and process configuration from global state
  const config = createClientConfiguration(userId, earlyWS)

  // Handle userId changes and cleanup existing connections if needed
  if (config.userId !== userId) {
    handleUserIdChange(config, userId, earlyWS)
  }

  // Update configuration based on desktop/bell API availability
  updateDesktopConfiguration(config)

  // Skip preload views if feature flag is enabled
  if (getFeatureFlags().livegraph_skip_early_conn_preload) {
    config.preloadedViews = {}
  }

  // Configure client behavior based on feature flags and dynamic configs
  const clientConfig = createClientConfig()

  // Initialize core LiveGraph components
  const schemaHandler = new SchemaHandler(RY, null, null)
  const viewRegistry = new ViewRegistry(RY.views, schemaHandler)
  const analytics = new AnalyticsTracker(analyticsEventManager)

  // Create WebSocket factory function
  const webSocketFactory = createWebSocketFactory(earlyWS)

  // Initialize the main LiveGraph handler
  const optimisticHandler = new OptimisticMutationHandler(schemaHandler, viewRegistry, config, webSocketFactory, clientConfig, createVisibilityHandlers(), createCookieCleanupFunction(), PreloadViews, analytics)

  // Setup metrics collection
  const metrics = new LiveGraphMetrics(optimisticHandler, {
    connect_next: config.useNext ? "true" : "false",
  })

  // Initialize SLO monitoring
  const sloMonitor = initializeSloMonitoring(optimisticHandler)

  // Setup error logging
  const errorLogger = createErrorLogger(optimisticHandler)

  // Setup response sampling
  const {
    livegraph_response_sampling_rate,
  } = getLaunchDarklyFlagsExport()
  const sampler = new ResponseSampler(userId, livegraph_response_sampling_rate)

  // Register all event handlers
  optimisticHandler.addEventListener((event) => {
    errorLogger(event)
    liveGraphEventRecorder.logEvent(event)
    NS.logEvent(event)
    metrics.onEvent(event)
    sampler.onEvent(event)
    sloMonitor.onEvent(event)
  })

  // Emit initial events to bootstrap the client
  optimisticHandler.emitInitialEvents()
  return optimisticHandler
}

/**
 * Creates the base client configuration from global options and environment
 */
function createClientConfiguration(_userId: string, _earlyWS?: WebSocket) {
  const figmaUrl = window.INITIAL_OPTIONS?.figma_url
  const useNext = !!window.INITIAL_OPTIONS?.feature_flags?.livegraph_connect_next
  const extras: Record<string, string> = {
    clientUrl: window.document.URL,
  }
  const desktop = window.__figmaDesktop || window.__figmaDesktopGetPopoutAPI?.()
  const bell = window.bellFeedAPI

  // Add desktop/bell metadata to extras
  if (desktop) {
    extras.desktop = JSON.stringify(desktop.appVersion)
    if (desktop.version >= 126) {
      extras.desktopOS = JSON.stringify(desktop.osVersion)
    }
  }
  else if (bell) {
    extras.bell = "1"
    if (bell.version >= 8) {
      extras.desktop = JSON.stringify(bell.desktopAppVersion)
      extras.desktopOS = JSON.stringify(bell.osVersion)
    }
  }
  return {
    url: buildWebSocketUrl(figmaUrl),
    userId: window.INITIAL_OPTIONS?.user_data?.id || null,
    anonUserId: window.INITIAL_OPTIONS?.anonymous_user_id || null,
    pageLoadToken: window.INITIAL_OPTIONS?.page_load_token || "",
    preloadedViews: window.INITIAL_OPTIONS?.livegraph_preload_views || {},
    commitHash: window.INITIAL_OPTIONS?.release_manifest_git_commit || "missing",
    clientType: desktop || bell ? "desktop" : "web",
    useNext,
    extras,
  }
}

/**
 * Builds WebSocket URL from Figma URL or defaults
 */
function buildWebSocketUrl(figmaUrl?: string): string {
  let protocol: string | undefined, host: string | undefined
  if (figmaUrl) {
    try {
      const u = new URL(figmaUrl)
      protocol = u.protocol
      host = u.host
    }
    catch {
      // Ignore parsing errors
    }
  }
  if (!host || !protocol) {
    host = window.location.host
    if (host === "admin.staging.figma.com" || host === "embed.staging.figma.com") {
      host = "staging.figma.com"
    }
    else if (host === "admin.figma.com" || host === "embed.figma.com") {
      host = "www.figma.com"
    }
    protocol = window.location.protocol
  }
  return `${protocol === "https:" ? "wss" : "ws"}://${host}`
}

/**
 * Handles userId changes and cleans up existing WebSocket connections
 */
function handleUserIdChange(config: any, userId: string, earlyWS?: WebSocket): void {
  config.userId = userId
  config.anonUserId = null
  if (earlyWS) {
    console.warn(`[livegraph] userId changed after early websocket creation. userId == null, before: ${config.userId == null}, after: ${userId == null}`)
    earlyWS.close()
  }
}

/**
 * Updates configuration based on desktop/bell API availability
 */
function updateDesktopConfiguration(config: any): void {
  const bellApi = getBellFeedAPI(8)
  if (desktopAPIInstance || bellFeedAPIInstance) {
    config.clientType = "desktop"
    if (desktopAPIInstance) {
      config.extras.desktop = JSON.stringify(desktopAPIInstance.getInformationalVersion())
      if (desktopAPIInstance.hasFeature("addOsVersion")) {
        config.extras.desktopOS = JSON.stringify(desktopAPIInstance.getOSVersion())
      }
    }
    else if (bellFeedAPIInstance && bellApi) {
      config.extras.bell = "1"
      config.extras.desktop = JSON.stringify(bellApi.desktopAppVersion)
      config.extras.desktopOS = JSON.stringify(bellApi.osVersion)
    }
  }
}

/**
 * Creates client configuration object with feature flags and dynamic configs
 */
function createClientConfig() {
  const dynamicConfig = getInitialDynamicConfig("livegraph_client_config")
  return {
    shouldBubbleUpNonNullableResultErrors: getLaunchDarklyFlagsExport().livegraph_nonNullableResult_errors_bubble_up,
    errorsLoggedForAnalyticsFraction: getLaunchDarklyFlagsExport().livegraph_errors_logged_for_analytics_fraction,
    checkPotentiallyMissingOptimisticMutations: getFeatureFlags().livegraph_check_missing_optimistic_mutations,
    backoffConfig: getLaunchDarklyFlagsExport().livegraph_client_backoff_config,
    shouldSplayLoadedViews: !!getFeatureFlags().livegraph_splay_loaded_views,
    splayDesktopBellConnConfig: bellFeedAPIInstance ? getLaunchDarklyFlagsExport().livegraph_splay_desktop_bell_conn : undefined,
    shouldChangeOptimisticMutationRevertOrder: getFeatureFlags().livegraph_change_optimistic_update_order,
    retryErroredViewSubscriptions: dynamicConfig.get("retry_errored_view_subscriptions", false),
    subscriptionRetryBackoffConfig: dynamicConfig.get("subscription_retry_backoff_config", {
      maxAttempt: 5,
      backoffInitialMs: 5000,
      backoffMaxMs: 300000,
      backoffMultiplier: 2,
    }),
    subscriptionRetryBackoffConfigByPriority: dynamicConfig.get("subscription_retry_backoff_config_by_priority", {
      p0: {
        maxAttempt: 10,
        backoffInitialMs: 1000,
        backoffMaxMs: 300000,
        backoffMultiplier: 2,
      },
      p1: {
        maxAttempt: 10,
        backoffInitialMs: 5000,
        backoffMaxMs: 300000,
        backoffMultiplier: 2,
      },
      p2: {
        maxAttempt: 10,
        backoffInitialMs: 5000,
        backoffMaxMs: 300000,
        backoffMultiplier: 2,
      },
      p3: {
        maxAttempt: 10,
        backoffInitialMs: 5000,
        backoffMaxMs: 300000,
        backoffMultiplier: 2,
      },
      default: {
        maxAttempt: 10,
        backoffInitialMs: 5000,
        backoffMaxMs: 300000,
        backoffMultiplier: 2,
      },
    }),
    livegraphUnstickOnRefresh: getFeatureFlags().livegraph_unstick_on_refresh,
    syncTimeoutMs: getLaunchDarklyFlagsExport().livegraph_sync_timeout_ms,
  }
}

/**
 * Creates WebSocket factory function for connection management
 */
function createWebSocketFactory(earlyWS?: WebSocket): (url: string) => WebSocket {
  let ws = earlyWS || null
  return (url: string) => {
    if (!ws || ws.readyState === WebSocket.CLOSED || ws.readyState === WebSocket.CLOSING) {
      return new WebSocket(url)
    }
    const temp = ws
    ws = null
    return temp
  }
}

/**
 * Creates visibility change handlers for document focus management
 */
function createVisibilityHandlers() {
  return {
    isHidden: () => document.visibilityState === "hidden",
    addChangeHandler: (handler: EventListener) => document.addEventListener("visibilitychange", handler),
    removeChangeHandler: (handler: EventListener) => document.removeEventListener("visibilitychange", handler),
  }
}

/**
 * Creates cookie cleanup function for authentication cookies
 */
function createCookieCleanupFunction(): () => void {
  return () => {
    CookiesToClear.forEach((cookie) => {
      document.cookie = `${cookie}=; max-age=-1; path=/;`
    })
  }
}

/**
 * Initializes SLO monitoring with randomized startup delay
 */
function initializeSloMonitoring(optimisticHandler: OptimisticMutationHandler): SloMonitor {
  const {
    livegraph_update_slo_client_frequency,
    livegraph_sessions_capturing_update_slo_percent,
    livegraph_update_slo_failure_threshold,
  } = getLaunchDarklyFlagsExport()
  const slo = new SloMonitor(optimisticHandler, livegraph_update_slo_client_frequency, livegraph_update_slo_failure_threshold, false)
  if (Math.random() < livegraph_sessions_capturing_update_slo_percent) {
    setTimeout(() => slo.startMeasureLoop(), 60000 * Math.random() + 5000)
  }
  return slo
}

/**
 * Creates error logger function for analytics tracking
 */
function createErrorLogger(optimisticHandler: OptimisticMutationHandler): (event: any) => void {
  const {
    errors_logged_for_analytics_fraction,
  } = getLaunchDarklyFlagsExport()
  return (event: any) => {
    if (event.type === "ERROR" && Math.random() < errors_logged_for_analytics_fraction) {
      const analytics = new AnalyticsTracker(analyticsEventManager)
      analytics.logError({
        sessionId: optimisticHandler.session.args.sessionId || "",
        err: event.error.message,
        layer: "client",
        note: "LivegraphEvent ERROR",
      })
    }
  }
}
export function initializeLiveGraph(userId) {
  let state = observableState.get()
  if (state) {
    if (userId === state.userId || isInteractionPathCheck() || getFalseValue())
      return state
    console.warn(`[livegraph] userId changed after livegraph client creation. userId == null, before: ${state.userId == null}, after: ${userId == null}`)
    state.close()
  }
  let earlyWS = (window as any).LGEarlyWS
  delete (window as any).LGEarlyWS
  state = createLiveGraphClient(userId, earlyWS)
  observableState.set(state)
  const views = (getAllResourceViews as () => any)()
  const subscribeForDebugging = (viewName: string, args: any, callback: any) => {
    callback = callback || console.log
    const view = views.find((v: any) => v._name === viewName)
    if (!view) {
      console.warn(`View ${viewName} not found`)
      return
    }
    state.subscribe(view, args, callback)
  };
  (window as any).LIVEGRAPH = {
    client: state,
    logger: liveGraphEventRecorder,
    viewBindings: views,
    subscribeForDebugging,
  }
  measureAsyncDuration("LiveGraph connection", ServiceCategories.WEB_PLATFORM, async () => {
    await state.connect()
  })
  return state
}
export function getCurrentLiveGraphClient() {
  return observableState.get()
}
export function beginEventRecording() {
  const id = liveGraphEventRecorder.startRecording()
  return () => id ? liveGraphEventRecorder.stopRecording(id) : []
}
export const MV = initializeLiveGraph
export const WB = getCurrentLiveGraphClient
export const S6 = beginEventRecording
