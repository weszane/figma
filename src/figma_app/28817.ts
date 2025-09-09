import type { ViewRegistry } from '../905/663269'
import type { Fn } from '../../types/global'
import { v4 as uuidv4 } from 'uuid'
import { ClientConnection } from '../905/47662'
import { SyncTransaction } from '../905/141913'
import { EventEmitter } from '../905/205893'
import { delay, delayedTryCatch, ExponentialBackoff, throwAsyncIf } from '../905/419236'
import { MainSessionStore } from '../905/604870'
import { serializeArgs } from '../905/679168'
import { QueryNode } from '../905/795642'
import { CodedError, ConnectionAttemptTypes, DEFAULT_PRIORITY, PriorityLevels } from '../905/957591'

/**
 * ConnectionState enum (Dj)
 */
export enum ConnectionState {
  CONNECTED = 0,
  DISCONNECTED = 1,
  RECONNECTING = 2,
}

/**
 * SubscriptionErrorType enum (_)
 */
export enum SubscriptionErrorType {
  SHED_LOAD = 'shed-load',
  VIEW_ERRORS = 'view-errors',
}

/**
 * Custom error for optimistic mutation failures (nn)
 */
export class OptimisticMutationError extends Error {}

/**
 * FigmaAppClient (Ay)
 * Handles view subscriptions, optimistic mutations, and connection management.
 */
export class FigmaAppClient {
  /** Authentication arguments */
  authArgs: { userId: string, anonymousUserId?: string, sessionId?: string, anonUserId?: string } = { userId: '', anonymousUserId: '' }
  /** Transaction id counter */
  transactionId = 1
  /** Debugging delay for sync */
  syncDelayForDebugging = 0
  /** Map of sync requests */
  syncRequests = new Map<number, SyncTransaction>()
  /** Set of pending global optimistic updates */
  pendingGlobalOptimisticUpdates = new Set<number>()
  /** Callbacks for optimistic update resolution */
  globalOptimisticUpdateResolutionCallbacks: Array<() => void> = []
  /** Main session store */
  session: MainSessionStore
  /** Client connection */
  connection: ClientConnection
  /** Event emitter */
  emitter = new EventEmitter()
  /** Set of health listeners */
  healthListeners = new Set<Fn>()
  /** List of pending optimistic mutations */
  pendingOptimisticMutationList: any[] = []
  /** List of pending mutations */
  pendingMutationList: {[key:string]: any}[] = []
  /** Last close event */
  lastCloseEvent: any = void 0
  /** Last close timestamp */
  lastCloseTs: number | undefined = void 0
  /** Preloaded views */
  preloadedViews: any[] = []
  /** Arguments for preloaded views */
  preloadedViewArgs: any[] = []
  /** Keys for preloaded views */
  preloadViewKeys = new Set<string>()
  /** Messages for mismatched preloads */
  mismatchedPreloadMsgs: any[] = []
  /** Subscription retries */
  subscriptionRetries = new Map<string, { backoff: ExponentialBackoff, retryTimer?: NodeJS.Timeout | number | null }>()
  /** Resubscribe timeouts */
  resubscribeTimeouts = new Map<string, NodeJS.Timeout | number>()
  viewRegistry: ViewRegistry
  uriParams: {
    preloadedViews: Record<string, { hash: string, args: Record<string, any> }>
  }

  clientOptions: any
  allowedPreloadedViews: any[] | undefined
  /**
   * Constructor for FigmaAppClient (original: $$m0)
   */
  constructor(
    e: any,
    viewRegistry: any,
    uriParams: any,
    n: any,
    clientOptions: any = {},
    s?: any,
    l?: any,
    allowedPreloadedViews?: any,
    c?: any,
  ) {
    this.viewRegistry = viewRegistry
    this.uriParams = uriParams
    this.clientOptions = clientOptions
    this.allowedPreloadedViews = allowedPreloadedViews
    this.authArgs = {
      userId: uriParams.userId,
      anonymousUserId: uriParams.anonUserId,
    }
    this.connection = new ClientConnection(uriParams, n, this.authArgs, this.emitter, clientOptions, s, l)
    this.connection.addObserver(this)
    this.session = new MainSessionStore(
      this.authArgs,
      e,
      viewRegistry,
      this.emitter,
      (e: any, t: any, r: any) => this.requestPaginationChange(e, t, r),
      () => this.connection.isInitial(),
      (e: any) => {
        this.clientOptions.retryErroredViewSubscriptions && this.retrySubscription(e, SubscriptionErrorType.VIEW_ERRORS)
      },
      (e: any) => {
        let t = this.subscriptionRetries.get(e)
        return t ? (clearTimeout(t.retryTimer!), this.subscriptionRetries.delete(e), t.backoff.attemptsSoFar()) : 0
      },
      c,
      clientOptions.shouldBubbleUpNonNullableResultErrors,
      clientOptions.errorsLoggedForAnalyticsFraction,
      clientOptions.useUnitTestObjectStore,
    )
    this.addEventListener(this.healthListener.bind(this))
    this.registerPreloadedViews()
  }

  /** Add event listener */
  addEventListener(listener: Fn) {
    return this.emitter.addListener(listener)
  }

  /** Remove event listener */
  removeEventListener(listener: Fn) {
    return this.emitter.removeListener(listener)
  }

  /** Add health listener */
  addHealthListener(listener: Fn) {
    this.healthListeners.add(listener)
    return () => this.removeHealthListener(listener)
  }

  /** Remove health listener */
  removeHealthListener(listener: Fn) {
    this.healthListeners.delete(listener)
  }

  /** Cleanup resources */
  cleanup() {
    this.connection.cleanup()
  }

  /** Connect to server */
  async connect() {
    await this.connection.connect()
  }

  /** Close connection */
  async close() {
    await this.connection.closeWithoutReconnecting()
  }

  /** Get user id */
  get userId() {
    return this.authArgs.userId
  }

  /** Set optional missing for view */
  setOptionalMissingForView(view: any, value: any) {
    this.session.setOptionalMissingForView(view, value)
  }

  /** Unset optional missing for view */
  unsetOptionalMissingForView(view: any) {
    this.session.unsetOptionalMissingForView(view)
  }

  /** Health listener callback */
  healthListener(event: any) {
    if (event.type === 'CONNECTION_STATE') {
      let status = this.getHealthStatusForConnectionState(event.state)
      for (let listener of this.healthListeners) listener(status)
    }
  }

  /** Get health status */
  getHealthStatus() {
    return this.getHealthStatusForConnectionState(this.connection.getState())
  }

  /** Get health status for connection state */
  getHealthStatusForConnectionState(state: any) {
    return state.type === 'connected' ? 0 : state.type === 'connecting' ? 2 : 1
  }

  /** Register preloaded views */
  registerPreloadedViews() {
    for (let [viewName, preload] of Object.entries(this.uriParams.preloadedViews)) {
      if (!this.viewRegistry.get(viewName))
        continue
      let allowedView = this.allowedPreloadedViews?.find((v: any) => v._name === viewName)
      if (
        allowedView
        && (preload.hash === allowedView._hash || preload.hash === 'development')
      ) {
        this.preloadedViews.push(allowedView)
        this.preloadedViewArgs.push(preload.args)
        this.session.subscribe(allowedView, preload.args, () => {})
        this.preloadViewKeys.add(serializeArgs(viewName, preload.args))
      }
      else {
        this.mismatchedPreloadMsgs.push({
          messageType: 'unsubscribe',
          viewName,
          args: preload.args,
        })
      }
    }
  }

  /** Emit initial events for preloaded views */
  emitInitialEvents() {
    for (let i = 0; i < this.preloadedViews.length; i++) {
      let view = this.preloadedViews[i]
      let args = this.preloadedViewArgs[i]
      let priority = this.getViewPriority(view, ConnectionAttemptTypes.Initial)
      this.emitter.emit({
        type: 'SUBSCRIBE_VIEW_CLIENT',
        view,
        args,
        priority,
        loadType: ConnectionAttemptTypes.Initial,
      })
      this.emitter.emit({
        type: 'SUBSCRIBE_VIEW_SERVER',
        view,
        args,
        priority,
        loadType: ConnectionAttemptTypes.Initial,
      })
    }
  }

  /** Send existing subscriptions */
  sendExistingSubscriptions() {
    for (let [, timeout] of this.resubscribeTimeouts) clearTimeout(timeout)
    this.resubscribeTimeouts.clear()
    if (this.connection.isInitial()) {
      for (let msg of this.mismatchedPreloadMsgs) this.connection.send(msg)
    }
    this.session.startReconnectionStateForPaginationQueries()
    for (let sub of this.session.uniqueSubscriptions()) {
      let key = serializeArgs(sub.viewDef.name, sub.args)
      if (this.connection.isInitial() && this.preloadViewKeys.has(key))
        continue
      let loadType = this.session.getViewLoadType(key)
      if (
        this.clientOptions.shouldSplayLoadedViews
        && !this.connection.isInitial()
        && this.lastCloseTs
        && performance.now() - this.lastCloseTs < 30000
      ) {
        let sKey = serializeArgs(sub.viewDef.name, sub.args)
        let subscribeFn = () => {
          if (
            !this.connection.isConnected()
            || !this.session.hasActiveSubscriptions(sub.viewDef.name, sub.args)
          ) {
            return
          }
          let retry = this.subscriptionRetries.get(sKey)
          if (!retry?.retryTimer)
            this.requestSubscription(sub.viewRef, sub.args, loadType, sub.traceId)
        }
        if (sub.status !== 'loaded') {
          subscribeFn()
        }
        else {
          let delayMs = (() => {
            switch (sub.viewDef.getPriority(ConnectionAttemptTypes.Initial)) {
              case PriorityLevels.P0:
                return 0
              case PriorityLevels.P1:
                return 5000 * Math.random()
              case PriorityLevels.P2:
                return 20000 * Math.random() + 1000
              default:
                return 60000 * Math.random() + 1000
            }
          })()
          delayMs === 0 ? subscribeFn() : this.resubscribeTimeouts.set(sKey, setTimeout(subscribeFn, delayMs))
        }
      }
      else {
        this.requestSubscription(sub.viewRef, sub.args, loadType, sub.traceId)
      }
    }
  }

  /** Handle incoming message */
  handleMessage(msg: any) {
    switch (msg.messageType) {
      case 'authSuccess':
        this.authArgs.sessionId = msg.sessionId
        this.authArgs.anonymousUserId = msg.anonymousUserId
        if (!this.connection.isAuthenticated()) {
          throwAsyncIf(false, 'Expected connection to be in authenticated state')
          break
        }
        for (let req of this.syncRequests.values()) this.requestSync(req)
        break
      case 'pendingMutations':
        if (this.hasUnresolvedGlobalOptimisticUpdates()) {
          this.globalOptimisticUpdateResolutionCallbacks.push(() => {
            this.session.applyMutations(msg.mutations)
          })
          this.pendingMutationList.push(msg.mutations)
          this.session.resolvePendingServerIdList(msg.mutations)
        }
        else {
          this.session.applyMutations(msg.mutations)
        }
        break
      case 'syncFail':
        {
          let req = this.syncRequests.get(msg.transactionId)
          if (req) {
            let retryMs = req.getRetryAfterMs()
            if (!retryMs) {
              this.handleAfterOptimisticUpdateResolved(msg.transactionId)
              return
            }
            throwAsyncIf(!req.retryTimeout, 'Already scheduled retry for sync request.')
            req.retryNumber++
            req.retryTimeout = setTimeout(() => {
              req.retryTimeout = null
              this.requestSync(req)
            }, retryMs)
          }
          else {
            throwAsyncIf(false, 'Received syncFail for unknown sync request')
            this.handleAfterOptimisticUpdateResolved(msg.transactionId)
          }
        }
        break
      case 'synced':
        {
          let req = this.syncRequests.get(msg.transactionId)
          if (req) {
            req.successCallback()
            throwAsyncIf(!req.retryTimeout, 'Sync request completed successfully while having a retry scheduled. This should never happen.')
          }
        }
        break
      case 'viewLoaded':
        {
          let result = this.getViewResultByViewNameAndArgs(msg.viewName, msg.args)
          this.emitEvent({
            type: 'DONE',
            viewName: msg.viewName,
            args: msg.args,
            clientStatus: result?.status,
          })
        }
        break
      case 'viewSubscriptionFailed':
        if (msg.errorCode === SubscriptionErrorType.SHED_LOAD) {
          if (!this.subscriptionRetries.has(msg.liveViewKey))
            this.reportSubscriptionError(msg.liveViewKey, msg.errorCode)
          this.retrySubscription(msg.liveViewKey, SubscriptionErrorType.SHED_LOAD)
        }
        else {
          this.emitter.emit({
            type: 'ERROR',
            error: new CodedError(msg.errorCode),
          })
          this.reportSubscriptionError(msg.liveViewKey, msg.errorCode)
          this.session.cleanupFailedSubscription(msg.liveViewKey)
        }
        break
    }
  }

  /** On connection open */
  onConnectionOpen() {
    this.sendExistingSubscriptions()
  }

  /** On connection close */
  onConnectionClose(event: any) {
    this.lastCloseEvent = event
    this.lastCloseTs = performance.now()
    this.clearSubscriptionRetries()
  }

  /** Request subscription */
  requestSubscription(view: any, args: any, loadType: any, traceId?: any) {
    const payload = {
      messageType: 'subscribe',
      viewName: view._name,
      viewHash: view._hash,
      loadType,
      args,
      traceId,
    }
    const priority = this.getViewPriority(view, loadType)
    if (this.connection.isConnected()) {
      this.connection.send(payload)
      this.emitter.emit({
        type: 'SUBSCRIBE_VIEW_SERVER',
        view,
        args,
        priority,
        loadType,
        traceId,
      })
    }
  }

  /** Request pagination change */
  requestPaginationChange(viewKey: any, queryId: any, paginationArgs: any) {
    const payload = {
      messageType: 'paginationChangeMessage',
      operationType: 'LoadNext',
      queryId,
      count: paginationArgs.count,
      paginationArgs,
      viewKey,
    }
    if (this.connection.isConnected())
      this.connection.send(payload)
  }

  /** Subscribe base */
  subscribeBase(view: any, args: any, callback: Fn, traceId?: any) {
    const alreadySubscribed = this.session.hasActiveSubscriptions(view._name, args)
    const subscription = this.session.subscribe(view, args, callback, traceId)
    if (!alreadySubscribed) {
      this.emitter.emit({
        type: 'SUBSCRIBE_VIEW_CLIENT',
        view,
        priority: this.getViewPriority(view, ConnectionAttemptTypes.Initial),
        args,
        traceId,
        loadType: ConnectionAttemptTypes.Initial,
      })
      this.requestSubscription(view, args, ConnectionAttemptTypes.Initial, traceId)
    }
    return subscription
  }

  /** Get unsubscribe Fn */
  getUnsubscribeFn(subscription: any) {
    return () => {
      subscription.clientUnsubscribed = true
      delayedTryCatch(() => {
        subscription.unsubscribe()
        if (
          !this.session.hasActiveSubscriptions(subscription.view._name, subscription.args)
          && this.connection.isConnected()
        ) {
          this.connection.send({
            messageType: 'unsubscribe',
            viewName: subscription.view._name,
            args: subscription.args,
          })
          this.emitter.emit({
            type: 'UNSUBSCRIBE_VIEW_SERVER',
            view: subscription.view,
            args: subscription.args,
          })
          const key = serializeArgs(subscription.view._name, subscription.args)
          clearTimeout(this.subscriptionRetries.get(key)?.retryTimer)
          this.subscriptionRetries.delete(key)
          if (this.resubscribeTimeouts.has(key)) {
            clearTimeout(this.resubscribeTimeouts.get(key))
            this.resubscribeTimeouts.delete(key)
          }
        }
      }, 2000)
    }
  }

  /** Get view result */
  getViewResult(view: any, args: any) {
    return this.session.getViewResult(view, args)
  }

  /** Get view result by name and args */
  getViewResultByViewNameAndArgs(viewName: string, args: any) {
    return this.session.getViewResultByViewNameAndArgs(viewName, args)
  }

  /** Check if view has static queries */
  viewHasStaticQueries(view: any) {
    return !!this.viewRegistry.get(view._name)?.hasStaticQueries()
  }

  /** Get view priority */
  getViewPriority(view: any, loadType: any) {
    return this.viewRegistry.get(view._name)?.getPriority(loadType) ?? DEFAULT_PRIORITY
  }

  /** Subscribe to a view */
  subscribe(view: any, args: any, callback: Fn, traceId?: any) {
    let actualArgs = args
    if (this.viewHasStaticQueries(view) && !args.__requestId) {
      actualArgs = { ...args, __requestId: uuidv4() }
    }
    const subscription = this.subscribeBase(view, actualArgs, callback, traceId)
    return this.getUnsubscribeFn(subscription)
  }

  /** Check for unresolved global optimistic updates */
  hasUnresolvedGlobalOptimisticUpdates() {
    return this.pendingGlobalOptimisticUpdates.size > 0
  }

  /** Handle before optimistic update applied */
  handleBeforeOptimisticUpdateApplied(transactionId: number) {
    this.pendingGlobalOptimisticUpdates.add(transactionId)
  }

  /** Handle after optimistic update resolved */
  handleAfterOptimisticUpdateResolved(transactionId: number) {
    this.pendingGlobalOptimisticUpdates.delete(transactionId)
    if (!this.hasUnresolvedGlobalOptimisticUpdates()) {
      const callbacks = this.globalOptimisticUpdateResolutionCallbacks
      this.globalOptimisticUpdateResolutionCallbacks = []
      this.emitter.emit({
        type: 'MUTATIONS_BLOCKED_ON_OPTIMISTIC_UPDATE',
        count: callbacks.length,
      })
      this.session.batchMutations(() => {
        for (let cb of callbacks) cb()
      })
      this.pendingOptimisticMutationList = []
      this.pendingMutationList = []
    }
  }

  /** Check potentially missing mutations */
  checkPotentiallyMissingMutations(operationType: string, optimisticMutations: any) {
    if (this.clientOptions.checkPotentiallyMissingOptimisticMutations) {
      if (operationType === 'create' || operationType === 'update') {
        for (let [objectName, instances] of Object.entries(optimisticMutations)) {
          for (let id in instances) {
            const instance = instances[id]
            if (operationType === 'create' && !instance.uuid)
              continue
            let exists = false
            for (let pending of this.pendingMutationList) {
              for (let [pendingName, pendingInstances] of Object.entries(pending)) {
                if (objectName === pendingName) {
                  for (let e of Object.values(pendingInstances.instances)) {
                    if (e.uuid && instance.uuid && e.uuid === instance.uuid)
                      exists = true
                    else if (e.id === id)
                      exists = true
                  }
                }
              }
            }
            if (!exists && operationType === 'update') {
              const state = instance.uuid
                ? this.session.stores[objectName]?.queries.instanceStatesByUuid.get(instance.uuid)
                : this.session.stores[objectName]?.queries.instanceStates.get(id)
              if (state) {
                exists = Object.keys(instance).every(
                  key => JSON.stringify(instance[key]) === JSON.stringify(state.serverFields[key]),
                )
              }
            }
            this.emitter.emit({
              type: 'PENDING_MUTATION_EXISTENCE',
              exist: exists,
              objectName,
              optimisticInstance: instance,
              operationType,
              optimisticMutations,
              pendingServerMutations: this.pendingMutationList,
            })
          }
        }
      }
      else if (operationType === 'delete') {
        for (let [objectName, instances] of Object.entries(optimisticMutations)) {
          for (let id of Object.keys(instances)) {
            let exists = false
            for (let pending of this.pendingMutationList) {
              for (let [pendingName, pendingQueries] of Object.entries(pending)) {
                if (objectName === pendingName) {
                  for (let e of Object.values(pendingQueries.queries)) {
                    if (!('error' in e) && e.results[id] !== false)
                      exists = true
                  }
                }
              }
            }
            this.emitter.emit({
              type: 'PENDING_MUTATION_EXISTENCE',
              exist: exists,
              objectName,
              optimisticInstance: null,
              operationType,
              optimisticMutations,
              pendingServerMutations: this.pendingMutationList,
            })
          }
        }
      }
    }
  }

  /**
   * Apply optimistic mutations (original: applyMutations)
   * @param mutations
   * @param promise
   * @param mutationType
   */
  async applyMutations(mutations: any, promise: Promise<any>, mutationType: string) {
    let result
    const transactionId = this.transactionId++
    const [shadowMutations, serverMutations, observers] = this.session.applyShadowMutations(transactionId, mutations, mutationType)
    const affectedViews = new Set<string>()
    for (let observer of observers) {
      if (observer instanceof QueryNode)
        affectedViews.add(observer.context.viewKey)
      else throwAsyncIf(false, 'Expected observer to be a ClientLiveViewQueryNode')
    }
    this.handleBeforeOptimisticUpdateApplied(transactionId)
    try {
      result = await promise
    }
    catch (err) {
      this.session.removeShadowMutations(transactionId, mutations, false)
      this.handleAfterOptimisticUpdateResolved(transactionId)
      return err
    }
    let success = false
    try {
      this.emitter.emit({
        type: 'OPTIMISTIC_MUTATION_CREATED',
        transactionId,
      })
      await this.sync(transactionId, shadowMutations, serverMutations, affectedViews)
      this.emitter.emit({
        type: 'OPTIMISTIC_MUTATION_COMPLETED',
        transactionId,
        mutationType,
      })
      success = true
    }
    catch (err) {
      if (!(err instanceof OptimisticMutationError))
        throw err
    }
    finally {
      this.pendingOptimisticMutationList.push(mutations)
      if (this.clientOptions.shouldChangeOptimisticMutationRevertOrder) {
        this.globalOptimisticUpdateResolutionCallbacks.unshift(() => {
          this.session.removeShadowMutations(transactionId, mutations, success)
        })
      }
      else {
        this.globalOptimisticUpdateResolutionCallbacks.push(() => {
          this.session.removeShadowMutations(transactionId, mutations, success)
        })
      }
      if (success && mutationType !== 'create') {
        this.globalOptimisticUpdateResolutionCallbacks.push(() => {
          this.checkPotentiallyMissingMutations(mutationType, mutations)
        })
      }
      this.handleAfterOptimisticUpdateResolved(transactionId)
    }
    return result
  }

  /** Wait for server-side objects with UUIDs */
  waitForServerSideObjectsWithUUIDs(mutations: any) {
    const promises: Promise<any>[] = []
    for (let [objectName, instances] of Object.entries(mutations)) {
      for (let uuid of Object.keys(instances)) {
        promises.push(this.getIdFromUuid(objectName, uuid))
      }
    }
    return Promise.all(promises)
  }

  /**
   * Apply mutations with UUID (original: applyMutationsWithUUID)
   */
  async applyMutationsWithUUID(mutations: any, promise: Promise<any>, mutationType: string) {
    let result
    const transactionId = this.transactionId++
    const [shadowMutations, serverMutations, observers] = this.session.applyShadowMutationsWithUUID(transactionId, mutations, mutationType)
    this.handleBeforeOptimisticUpdateApplied(transactionId)
    const affectedViews = new Set<string>()
    for (let observer of observers) {
      if (observer instanceof QueryNode)
        affectedViews.add(observer.context.viewKey)
      else throwAsyncIf(false, 'Expected observer to be a ClientLiveViewQueryNode')
    }
    try {
      result = await promise
    }
    catch (err) {
      this.session.removeShadowMutationsWithUUID(transactionId, mutations, false)
      this.handleAfterOptimisticUpdateResolved(transactionId)
      return err
    }
    let success = false
    try {
      if (mutationType === 'create' && Object.keys(serverMutations).length === 0) {
        this.emitter.emit({
          type: 'WAIT_SERVER_OBJECTS_STARTED',
          mutations,
        })
        await this.waitForServerSideObjectsWithUUIDs(mutations)
        await delay(this.syncDelayForDebugging)
        this.emitter.emit({
          type: 'WAIT_SERVER_OBJECTS_ENDED',
          mutations,
        })
      }
      else {
        this.emitter.emit({
          type: 'OPTIMISTIC_MUTATION_CREATED',
          transactionId,
        })
        await this.sync(transactionId, shadowMutations, serverMutations, affectedViews)
        this.emitter.emit({
          type: 'OPTIMISTIC_MUTATION_COMPLETED',
          transactionId,
          mutationType:
            mutationType === 'update'
              ? 'uuid_update'
              : mutationType === 'delete'
                ? 'uuid_delete'
                : 'uuid_computed_create',
        })
      }
      success = true
    }
    catch (err) {
      if (!(err instanceof OptimisticMutationError))
        throw err
    }
    finally {
      this.pendingOptimisticMutationList.push(mutations)
      this.globalOptimisticUpdateResolutionCallbacks.unshift(() => {
        this.session.removeShadowMutationsWithUUID(transactionId, mutations, success)
      })
      if (success) {
        this.globalOptimisticUpdateResolutionCallbacks.push(() =>
          this.checkPotentiallyMissingMutations(mutationType, mutations),
        )
      }
      this.handleAfterOptimisticUpdateResolved(transactionId)
    }
    return result
  }

  /** Get id from uuid */
  getIdFromUuid(objectName: string, uuid: string) {
    return this.session.getIdFromUuid(objectName, uuid)
  }

  /** Request sync */
  requestSync(syncTransaction: SyncTransaction) {
    if (this.connection.isConnected()) {
      this.connection.send(syncTransaction.toPayload())
      this.emitter.emit({
        type: 'SYNC_STARTED',
        transactionId: syncTransaction.transactionId,
        mutatedObjects: syncTransaction.objectNameToQueryIds ? [...syncTransaction.objectNameToQueryIds.keys()] : [],
      })
    }
  }

  /**
   * Sync mutations (original: sync)
   */
  async sync(
    transactionId: number = this.transactionId++,
    shadowMutations: any,
    serverMutations: any,
    affectedViews: Set<string>,
  ) {
    const syncTransaction = new SyncTransaction(
      transactionId,
      shadowMutations,
      serverMutations,
      affectedViews,
      this.clientOptions.syncTimeoutMs,
      (backgrounded: boolean, wasOffline: boolean) => {
        this.globalOptimisticUpdateResolutionCallbacks.push(() => {
          this.emitter.emit({
            type: 'SYNC_TIMEOUT',
            backgrounded,
            wasOffline,
          })
        })
      },
    )
    this.syncRequests.set(transactionId, syncTransaction)
    this.requestSync(syncTransaction)
    await syncTransaction.waitForSync()
    if (this.syncDelayForDebugging)
      await delay(this.syncDelayForDebugging)
    this.syncRequests.delete(transactionId)
    this.emitter.emit({
      type: 'SYNC_COMPLETED',
      transactionId,
    })
  }

  /** Retry subscription */
  retrySubscription(liveViewKey: string, errorType: SubscriptionErrorType) {
    const activeSub = this.session.getActiveSubscription(liveViewKey)
    if (!activeSub)
      return
    if (!this.subscriptionRetries.has(liveViewKey)) {
      this.subscriptionRetries.set(liveViewKey, {
        backoff: this.getBackoff(this.getViewPriority(activeSub.viewRef, ConnectionAttemptTypes.Initial)),
      })
    }
    const retryObj = this.subscriptionRetries.get(liveViewKey)!
    if (!retryObj.retryTimer) {
      if (retryObj.backoff.shouldAttempt()) {
        const delayMs = retryObj.backoff.nextBackoffMs()
        retryObj.retryTimer = setTimeout(() => {
          retryObj.retryTimer = undefined
          const sub = this.session.getActiveSubscription(liveViewKey)
          if (!sub)
            return
          if (errorType === SubscriptionErrorType.VIEW_ERRORS) {
            this.connection.send({
              messageType: 'unsubscribe',
              viewName: sub.viewRef._name,
              args: sub.args,
            })
          }
          const priority
            = errorType === SubscriptionErrorType.VIEW_ERRORS
              ? PriorityLevels.P3
              : this.getViewPriority(sub.viewRef, ConnectionAttemptTypes.Retry)
          this.emitter.emit({
            type: 'SUBSCRIBE_VIEW_CLIENT',
            view: sub.viewRef,
            priority,
            loadType: ConnectionAttemptTypes.Retry,
            args: sub.args,
            traceId: sub.traceId,
          })
          this.requestSubscription(sub.viewRef, sub.args, ConnectionAttemptTypes.Retry, sub.traceId)
        }, delayMs)
      }
      else {
        this.subscriptionRetries.delete(liveViewKey)
      }
    }
  }

  /** Get backoff for priority */
  getBackoff(priority: any) {
    const config = this.clientOptions.subscriptionRetryBackoffConfigByPriority
    const backoffConfig = config[priority] ? config[priority] : config.$$default
    return new ExponentialBackoff(backoffConfig)
  }

  /** Clear subscription retries */
  clearSubscriptionRetries() {
    for (let retry of this.subscriptionRetries.values()) clearTimeout(retry.retryTimer!)
    this.subscriptionRetries.clear()
  }

  /** Report subscription error */
  reportSubscriptionError(liveViewKey: string, errorCode: string) {
    this.emitter.emit({
      type: 'SUBSCRIPTION_ERROR',
      errorCode,
      liveViewKey,
    })
  }

  /** Emit event */
  emitEvent(event: any) {
    this.emitter.emit(event)
  }

  /** Debug info */
  get debug() {
    const subscriptions = this.session.getViewSubscriptionsForDebugging()
    const loadingSubscriptions: Record<string, any> = {}
    const failedSubscriptions: Record<string, any> = {}
    for (let [key, sub] of Object.entries(subscriptions)) {
      if (sub.status === 'loading')
        loadingSubscriptions[key] = sub
      if (sub.status === 'errors')
        failedSubscriptions[key] = sub
    }
    return {
      subscriptions,
      loadingSubscriptions,
      failedSubscriptions,
      prettyPrintLiveViewTree: (e: any) => this.session.prettyPrintLiveViewTree(e),
      setOptimisticUpdateResolutionDelay: (e: number) => (this.syncDelayForDebugging = e),
      setOptionalMissingForView: (view: any, value: any) => this.setOptionalMissingForView(view, value),
      unsetOptionalMissingForView: (view: any) => this.unsetOptionalMissingForView(view),
      setViewResultForDebugging: this.session.setViewResultForDebugging.bind(this.session),
      unsetViewResultForDebugging: this.session.unsetViewResultForDebugging.bind(this.session),
      ...this.connection.debug,
    }
  }
}

// Export refactored names
export const Ay = FigmaAppClient
export const Dj = ConnectionState
export const nn = OptimisticMutationError
