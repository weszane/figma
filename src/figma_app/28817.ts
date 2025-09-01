import { ConnectionAttemptTypes, PriorityLevels, CodedError, DEFAULT_PRIORITY } from "../905/957591";
import { A } from "../905/604870";
import { throwAsyncIf, delayedTryCatch, delay, ExponentialBackoff } from "../905/419236";
import { b } from "../905/205893";
import { A as _$$A } from "../905/47662";
import { A as _$$A2 } from "../vendor/682394";
import { J } from "../905/679168";
import { Q } from "../905/141913";
import { Ay as _$$Ay } from "../905/795642";
var $$p1 = (e => (e[e.CONNECTED = 0] = "CONNECTED", e[e.DISCONNECTED = 1] = "DISCONNECTED", e[e.RECONNECTING = 2] = "RECONNECTING", e))($$p1 || {});
var _ = (e => (e.SHED_LOAD = "shed-load", e.VIEW_ERRORS = "view-errors", e))(_ || {});
export class $$h2 extends Error {}
export class $$m0 {
  constructor(e, t, r, n, a = {}, s, l, d, c) {
    this.viewRegistry = t;
    this.uriParams = r;
    this.clientOptions = a;
    this.allowedPreloadedViews = d;
    this.authArgs = {
      userId: r.userId,
      anonymousUserId: r.anonUserId
    };
    this.connection = new _$$A(r, n, this.authArgs, this.emitter, a, s, l);
    this.connection.addObserver(this);
    this.session = new A(this.authArgs, e, t, this.emitter, (e, t, r) => {
      this.requestPaginationChange(e, t, r);
    }, () => this.connection.isInitial(), e => {
      this.clientOptions.retryErroredViewSubscriptions && this.retrySubscription(e, "view-errors");
    }, e => {
      let t = this.subscriptionRetries.get(e);
      return t ? (clearTimeout(t.retryTimer), this.subscriptionRetries.$$delete(e), t.backoff.attemptsSoFar()) : 0;
    }, c, a.shouldBubbleUpNonNullableResultErrors, a.errorsLoggedForAnalyticsFraction, a.useUnitTestObjectStore);
    this.addEventListener(this.healthListener.bind(this));
    this.registerPreloadedViews();
  }
  authArgs;
  transactionId = 1;
  syncDelayForDebugging = 0;
  syncRequests = new Map();
  pendingGlobalOptimisticUpdates = new Set();
  globalOptimisticUpdateResolutionCallbacks = [];
  session;
  connection;
  emitter = new b();
  healthListeners = new Set();
  pendingOptimisticMutationList = [];
  pendingMutationList = [];
  lastCloseEvent = void 0;
  lastCloseTs = void 0;
  preloadedViews = [];
  preloadedViewArgs = [];
  preloadViewKeys = new Set();
  mismatchedPreloadMsgs = [];
  subscriptionRetries = new Map();
  resubscribeTimeouts = new Map();
  cleanup() {
    this.connection.cleanup();
  }
  async connect() {
    await this.connection.connect();
  }
  async close() {
    await this.connection.closeWithoutReconnecting();
  }
  get userId() {
    return this.authArgs.userId;
  }
  addEventListener(e) {
    return this.emitter.addListener(e);
  }
  removeEventListener(e) {
    return this.emitter.removeListener(e);
  }
  setOptionalMissingForView(e, t) {
    this.session.setOptionalMissingForView(e, t);
  }
  unsetOptionalMissingForView(e) {
    this.session.unsetOptionalMissingForView(e);
  }
  healthListener(e) {
    if ("CONNECTION_STATE" === e.type) {
      let t = this.getHealthStatusForConnectionState(e.state);
      for (let e of this.healthListeners) e(t);
    }
  }
  getHealthStatus() {
    return this.getHealthStatusForConnectionState(this.connection.getState());
  }
  getHealthStatusForConnectionState(e) {
    return "connected" === e.type ? 0 : "connecting" === e.type ? 2 : 1;
  }
  addHealthListener(e) {
    this.healthListeners.add(e);
    return () => this.removeHealthListener(e);
  }
  removeHealthListener(e) {
    this.healthListeners.$$delete(e);
  }
  registerPreloadedViews() {
    for (let [e, t] of Object.entries(this.uriParams.preloadedViews)) {
      if (!this.viewRegistry.get(e)) continue;
      let r = this.allowedPreloadedViews?.find(t => t._name === e);
      r && (t.hash === r._hash || "development" === t.hash) ? (this.preloadedViews.push(r), this.preloadedViewArgs.push(t.args), this.session.subscribe(r, t.args, () => {}), this.preloadViewKeys.add(J(e, t.args))) : this.mismatchedPreloadMsgs.push({
        messageType: "unsubscribe",
        viewName: e,
        args: t.args
      });
    }
  }
  emitInitialEvents() {
    for (let e = 0; e < this.preloadedViews.length; e++) {
      let t = this.preloadedViews[e];
      let r = this.preloadedViewArgs[e];
      let i = this.getViewPriority(t, ConnectionAttemptTypes.Initial);
      this.emitter.emit({
        type: "SUBSCRIBE_VIEW_CLIENT",
        view: t,
        args: r,
        priority: i,
        loadType: ConnectionAttemptTypes.Initial
      });
      this.emitter.emit({
        type: "SUBSCRIBE_VIEW_SERVER",
        view: t,
        args: r,
        priority: i,
        loadType: ConnectionAttemptTypes.Initial
      });
    }
  }
  sendExistingSubscriptions() {
    for (let [e, t] of this.resubscribeTimeouts) clearTimeout(t);
    if (this.resubscribeTimeouts.clear(), this.connection.isInitial()) for (let e of this.mismatchedPreloadMsgs) this.connection.send(e);
    for (let {
      viewRef,
      args,
      traceId,
      status,
      viewDef
    } of (this.session.startReconnectionStateForPaginationQueries(), this.session.uniqueSubscriptions())) {
      let s = J(viewDef.name, args);
      if (this.connection.isInitial() && this.preloadViewKeys.has(s)) continue;
      let o = this.session.getViewLoadType(s);
      if (this.clientOptions.shouldSplayLoadedViews && !this.connection.isInitial() && this.lastCloseTs && performance.now() - this.lastCloseTs < 3e4) {
        let s = J(viewDef.name, args);
        let l = () => {
          if (!this.connection.isConnected() || !this.session.hasActiveSubscriptions(viewDef.name, args)) return;
          let n = this.subscriptionRetries.get(s);
          n?.retryTimer || this.requestSubscription(viewRef, args, o, traceId);
        };
        if ("loaded" !== status) l();else {
          let e = function (e) {
            switch (e) {
              case PriorityLevels.P0:
                return 0;
              case PriorityLevels.P1:
                return 5e3 * Math.random();
              case PriorityLevels.P2:
                return 2e4 * Math.random() + 1e3;
              default:
                return 6e4 * Math.random() + 1e3;
            }
          }(viewDef.getPriority(ConnectionAttemptTypes.Initial));
          0 === e ? l() : this.resubscribeTimeouts.set(s, setTimeout(l, e));
        }
      } else this.requestSubscription(viewRef, args, o, traceId);
    }
  }
  handleMessage(e) {
    switch (e.messageType) {
      case "authSuccess":
        if (this.authArgs.sessionId = e.sessionId, this.authArgs.anonymousUserId = e.anonymousUserId, !this.connection.isAuthenticated()) {
          throwAsyncIf(!1, "Expected connection to be in authenticated state");
          break;
        }
        for (let e of this.syncRequests.values()) this.requestSync(e);
        break;
      case "pendingMutations":
        this.hasUnresolvedGlobalOptimisticUpdates() ? (this.globalOptimisticUpdateResolutionCallbacks.push(() => {
          this.session.applyMutations(e.mutations);
        }), this.pendingMutationList.push(e.mutations), this.session.resolvePendingServerIdList(e.mutations)) : this.session.applyMutations(e.mutations);
        break;
      case "syncFail":
        let t = this.syncRequests.get(e.transactionId);
        if (t) {
          let r = t?.getRetryAfterMs();
          if (!r) {
            this.handleAfterOptimisticUpdateResolved(e.transactionId);
            return;
          }
          throwAsyncIf(!t.retryTimeout, "Already scheduled retry for sync request.");
          t.retryNumber++;
          t.retryTimeout = setTimeout(() => {
            t.retryTimeout = null;
            this.requestSync(t);
          }, r);
        } else {
          throwAsyncIf(!1, "Received syncFail for unknown sync request");
          this.handleAfterOptimisticUpdateResolved(e.transactionId);
        }
        break;
      case "synced":
        let r = this.syncRequests.get(e.transactionId);
        r && (r.successCallback(), throwAsyncIf(!r.retryTimeout, "Sync request completed successfully while having a retry scheduled. This should never happen."));
        break;
      case "viewLoaded":
        let i = this.getViewResultByViewNameAndArgs(e.viewName, e.args);
        this.emitEvent({
          type: "DONE",
          viewName: e.viewName,
          args: e.args,
          clientStatus: i?.status
        });
        break;
      case "viewSubscriptionFailed":
        "shed-load" === e.errorCode ? (this.subscriptionRetries.has(e.liveViewKey) || this.reportSubscriptionError(e.liveViewKey, e.errorCode), this.retrySubscription(e.liveViewKey, "shed-load")) : (this.emitter.emit({
          type: "ERROR",
          error: new CodedError(e.errorCode)
        }), this.reportSubscriptionError(e.liveViewKey, e.errorCode), this.session.cleanupFailedSubscription(e.liveViewKey));
    }
  }
  onConnectionOpen() {
    this.sendExistingSubscriptions();
  }
  onConnectionClose(e) {
    this.lastCloseEvent = e;
    this.lastCloseTs = performance.now();
    this.clearSubscriptionRetries();
  }
  requestSubscription(e, t, r, n) {
    let i = {
      messageType: "subscribe",
      viewName: e._name,
      viewHash: e._hash,
      loadType: r,
      args: t,
      traceId: n
    };
    let a = this.getViewPriority(e, r);
    this.connection.isConnected() && (this.connection.send(i), this.emitter.emit({
      type: "SUBSCRIBE_VIEW_SERVER",
      view: e,
      args: t,
      priority: a,
      loadType: r,
      traceId: n
    }));
  }
  requestPaginationChange(e, t, r) {
    let n = {
      messageType: "paginationChangeMessage",
      operationType: "LoadNext",
      queryId: t,
      count: r.count,
      paginationArgs: r,
      viewKey: e
    };
    this.connection.isConnected() && this.connection.send(n);
  }
  subscribeBase(e, t, r, i) {
    let a = this.session.hasActiveSubscriptions(e._name, t);
    let s = this.session.subscribe(e, t, r, i);
    a || (this.emitter.emit({
      type: "SUBSCRIBE_VIEW_CLIENT",
      view: e,
      priority: this.getViewPriority(e, ConnectionAttemptTypes.Initial),
      args: t,
      traceId: i,
      loadType: ConnectionAttemptTypes.Initial
    }), this.requestSubscription(e, t, ConnectionAttemptTypes.Initial, i));
    return s;
  }
  getUnsubscribeFunction(e) {
    return () => {
      e.clientUnsubscribed = !0;
      delayedTryCatch(() => {
        if (e.unsubscribe(), !this.session.hasActiveSubscriptions(e.view._name, e.args) && this.connection.isConnected()) {
          this.connection.send({
            messageType: "unsubscribe",
            viewName: e.view._name,
            args: e.args
          });
          this.emitter.emit({
            type: "UNSUBSCRIBE_VIEW_SERVER",
            view: e.view,
            args: e.args
          });
          let t = J(e.view._name, e.args);
          clearTimeout(this.subscriptionRetries.get(t)?.retryTimer);
          this.subscriptionRetries.$$delete(t);
          this.resubscribeTimeouts.has(t) && (clearTimeout(this.resubscribeTimeouts.get(t)), this.resubscribeTimeouts.$$delete(t));
        }
      }, 2e3);
    };
  }
  getViewResult(e, t) {
    return this.session.getViewResult(e, t);
  }
  getViewResultByViewNameAndArgs(e, t) {
    return this.session.getViewResultByViewNameAndArgs(e, t);
  }
  viewHasStaticQueries(e) {
    return !!this.viewRegistry.get(e._name)?.hasStaticQueries();
  }
  getViewPriority(e, t) {
    return this.viewRegistry.get(e._name)?.getPriority(t) ?? DEFAULT_PRIORITY;
  }
  subscribe(e, t, r, n) {
    let i = t;
    this.viewHasStaticQueries(e) && !t.__requestId && (i = {
      ...t,
      __requestId: _$$A2()
    });
    let a = this.subscribeBase(e, i, r, n);
    return this.getUnsubscribeFunction(a);
  }
  hasUnresolvedGlobalOptimisticUpdates() {
    return this.pendingGlobalOptimisticUpdates.size > 0;
  }
  handleBeforeOptimisticUpdateApplied(e) {
    this.pendingGlobalOptimisticUpdates.add(e);
  }
  handleAfterOptimisticUpdateResolved(e) {
    if (this.pendingGlobalOptimisticUpdates.$$delete(e), !this.hasUnresolvedGlobalOptimisticUpdates()) {
      let e = this.globalOptimisticUpdateResolutionCallbacks;
      this.globalOptimisticUpdateResolutionCallbacks = [];
      this.emitter.emit({
        type: "MUTATIONS_BLOCKED_ON_OPTIMISTIC_UPDATE",
        count: e.length
      });
      this.session.batchMutations(() => {
        for (let t of e) t();
      });
      this.pendingOptimisticMutationList = [];
      this.pendingMutationList = [];
    }
  }
  checkPotentiallyMissingMutations(e, t) {
    if (this.clientOptions.checkPotentiallyMissingOptimisticMutations) {
      if ("create" === e || "update" === e) for (let [r, n] of Object.entries(t)) for (let i in n) {
        let a = n[i];
        if ("create" === e && !a.uuid) continue;
        let s = !1;
        for (let e of this.pendingMutationList) for (let [t, n] of Object.entries(e)) if (r === t) for (let e of Object.values(n.instances)) e.uuid && a.uuid && e.uuid === a.uuid ? s = !0 : e.id === i && (s = !0);
        if (!s && "update" === e) {
          let e = a.uuid ? this.session.stores[r]?.queries.instanceStatesByUuid.get(a.uuid) : this.session.stores[r]?.queries.instanceStates.get(i);
          e && (s = Object.keys(a).every(t => JSON.stringify(a[t]) === JSON.stringify(e.serverFields[t])));
        }
        this.emitter.emit({
          type: "PENDING_MUTATION_EXISTENCE",
          exist: s,
          objectName: r,
          optimisticInstance: a,
          operationType: e,
          optimisticMutations: t,
          pendingServerMutations: this.pendingMutationList
        });
      } else if ("delete" === e) for (let [r, n] of Object.entries(t)) for (let i of Object.keys(n)) {
        let n = !1;
        for (let e of this.pendingMutationList) for (let [t, a] of Object.entries(e)) if (r === t) for (let e of Object.values(a.queries)) "error" in e || !1 !== e.results[i] || (n = !0);
        this.emitter.emit({
          type: "PENDING_MUTATION_EXISTENCE",
          exist: n,
          objectName: r,
          optimisticInstance: null,
          operationType: e,
          optimisticMutations: t,
          pendingServerMutations: this.pendingMutationList
        });
      }
    }
  }
  async applyMutations(e, t, r) {
    let n;
    let i = this.transactionId;
    this.transactionId++;
    let [s, o, l] = this.session.applyShadowMutations(i, e, r);
    let d = new Set();
    for (let e of l) e instanceof _$$Ay ? d.add(e.context.viewKey) : throwAsyncIf(!1, "Expected observer to be a ClientLiveViewQueryNode");
    this.handleBeforeOptimisticUpdateApplied(i);
    try {
      n = await t;
    } catch (t) {
      this.session.removeShadowMutations(i, e, !1);
      this.handleAfterOptimisticUpdateResolved(i);
      return t;
    }
    let c = !1;
    try {
      this.emitter.emit({
        type: "OPTIMISTIC_MUTATION_CREATED",
        transactionId: i
      });
      await this.sync(i, s, o, d);
      this.emitter.emit({
        type: "OPTIMISTIC_MUTATION_COMPLETED",
        transactionId: i,
        mutationType: r
      });
      c = !0;
    } catch (e) {
      if (!(e instanceof $$h2)) throw e;
    } finally {
      this.pendingOptimisticMutationList.push(e);
      this.clientOptions.shouldChangeOptimisticMutationRevertOrder ? this.globalOptimisticUpdateResolutionCallbacks.unshift(() => {
        this.session.removeShadowMutations(i, e, c);
      }) : this.globalOptimisticUpdateResolutionCallbacks.push(() => {
        this.session.removeShadowMutations(i, e, c);
      });
      c && "create" !== r && this.globalOptimisticUpdateResolutionCallbacks.push(() => {
        this.checkPotentiallyMissingMutations(r, e);
      });
      this.handleAfterOptimisticUpdateResolved(i);
    }
    return n;
  }
  waitForServerSideObjectsWithUUIDs(e) {
    let t = [];
    for (let [r, n] of Object.entries(e)) for (let e of Object.keys(n)) t.push(this.getIdFromUuid(r, e));
    return Promise.all(t);
  }
  async applyMutationsWithUUID(e, t, r) {
    let n;
    let i = this.transactionId;
    this.transactionId++;
    let [s, o, l] = this.session.applyShadowMutationsWithUUID(i, e, r);
    this.handleBeforeOptimisticUpdateApplied(i);
    let d = new Set();
    for (let e of l) e instanceof _$$Ay ? d.add(e.context.viewKey) : throwAsyncIf(!1, "Expected observer to be a ClientLiveViewQueryNode");
    try {
      n = await t;
    } catch (t) {
      this.session.removeShadowMutationsWithUUID(i, e, !1);
      this.handleAfterOptimisticUpdateResolved(i);
      return t;
    }
    let c = !1;
    try {
      "create" === r && 0 === Object.keys(o).length ? (this.emitter.emit({
        type: "WAIT_SERVER_OBJECTS_STARTED",
        mutations: e
      }), await this.waitForServerSideObjectsWithUUIDs(e), await delay(this.syncDelayForDebugging), this.emitter.emit({
        type: "WAIT_SERVER_OBJECTS_ENDED",
        mutations: e
      })) : (this.emitter.emit({
        type: "OPTIMISTIC_MUTATION_CREATED",
        transactionId: i
      }), await this.sync(i, s, o, d), this.emitter.emit({
        type: "OPTIMISTIC_MUTATION_COMPLETED",
        transactionId: i,
        mutationType: "update" === r ? "uuid_update" : "delete" === r ? "uuid_delete" : "uuid_computed_create"
      }));
      c = !0;
    } catch (e) {
      if (!(e instanceof $$h2)) throw e;
    } finally {
      this.pendingOptimisticMutationList.push(e);
      this.globalOptimisticUpdateResolutionCallbacks.unshift(() => {
        this.session.removeShadowMutationsWithUUID(i, e, c);
      });
      c && this.globalOptimisticUpdateResolutionCallbacks.push(() => this.checkPotentiallyMissingMutations(r, e));
      this.handleAfterOptimisticUpdateResolved(i);
    }
    return n;
  }
  getIdFromUuid(e, t) {
    return this.session.getIdFromUuid(e, t);
  }
  requestSync(e) {
    this.connection.isConnected() && (this.connection.send(e.toPayload()), this.emitter.emit({
      type: "SYNC_STARTED",
      transactionId: e.transactionId,
      mutatedObjects: e.objectNameToQueryIds ? [...e.objectNameToQueryIds.keys()] : []
    }));
  }
  async sync(e = this.transactionId++, t, r, n) {
    let i = new Q(e, t, r, n, this.clientOptions.syncTimeoutMs, (e, t) => {
      this.globalOptimisticUpdateResolutionCallbacks.push(() => {
        this.emitter.emit({
          type: "SYNC_TIMEOUT",
          backgrounded: e,
          wasOffline: t
        });
      });
    });
    this.syncRequests.set(e, i);
    this.requestSync(i);
    await i.waitForSync();
    this.syncDelayForDebugging && (await delay(this.syncDelayForDebugging));
    this.syncRequests.$$delete(e);
    this.emitter.emit({
      type: "SYNC_COMPLETED",
      transactionId: e
    });
  }
  retrySubscription(e, t) {
    let r = this.session.getActiveSubscription(e);
    if (!r) return;
    this.subscriptionRetries.has(e) || this.subscriptionRetries.set(e, {
      backoff: this.getBackoff(this.getViewPriority(r.viewRef, ConnectionAttemptTypes.Initial))
    });
    let i = this.subscriptionRetries.get(e);
    if (!i.retryTimer) {
      if (i.backoff.shouldAttempt()) {
        let r = i.backoff.nextBackoffMs();
        i.retryTimer = setTimeout(() => {
          i.retryTimer = void 0;
          let r = this.session.getActiveSubscription(e);
          if (!r) return;
          "view-errors" === t && this.connection.send({
            messageType: "unsubscribe",
            viewName: r.viewRef._name,
            args: r.args
          });
          let a = "view-errors" === t ? PriorityLevels.P3 : this.getViewPriority(r.viewRef, ConnectionAttemptTypes.Retry);
          this.emitter.emit({
            type: "SUBSCRIBE_VIEW_CLIENT",
            view: r.viewRef,
            priority: a,
            loadType: ConnectionAttemptTypes.Retry,
            args: r.args,
            traceId: r.traceId
          });
          this.requestSubscription(r.viewRef, r.args, ConnectionAttemptTypes.Retry, r.traceId);
        }, r);
      } else this.subscriptionRetries.$$delete(e);
    }
  }
  getBackoff(e) {
    let t;
    let r = this.clientOptions.subscriptionRetryBackoffConfigByPriority;
    t = r[e] ? r[e] : r.$$default;
    return new ExponentialBackoff(t);
  }
  clearSubscriptionRetries() {
    for (let e of this.subscriptionRetries.values()) clearTimeout(e.retryTimer);
    this.subscriptionRetries.clear();
  }
  reportSubscriptionError(e, t) {
    this.emitter.emit({
      type: "SUBSCRIPTION_ERROR",
      errorCode: t,
      liveViewKey: e
    });
  }
  emitEvent(e) {
    this.emitter.emit(e);
  }
  get debug() {
    let e = this.session.getViewSubscriptionsForDebugging();
    let t = {};
    let r = {};
    for (let [n, i] of Object.entries(e)) {
      "loading" === i.status && (t[n] = i);
      "errors" === i.status && (r[n] = i);
    }
    return {
      subscriptions: e,
      loadingSubscriptions: t,
      failedSubscriptions: r,
      prettyPrintLiveViewTree: e => this.session.prettyPrintLiveViewTree(e),
      setOptimisticUpdateResolutionDelay: e => this.syncDelayForDebugging = e,
      setOptionalMissingForView: (e, t) => this.setOptionalMissingForView(e, t),
      unsetOptionalMissingForView: e => this.unsetOptionalMissingForView(e),
      setViewResultForDebugging: this.session.setViewResultForDebugging.bind(this.session),
      unsetViewResultForDebugging: this.session.unsetViewResultForDebugging.bind(this.session),
      ...this.connection.debug
    };
  }
}
export const Ay = $$m0;
export const Dj = $$p1;
export const nn = $$h2;