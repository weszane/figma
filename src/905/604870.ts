import { createDeferredPromise, throwAsyncIf, throwIf, once, noop } from "../905/419236";
import { ConnectionAttemptTypes } from "../905/957591";
import m from "../vendor/546838";
import { F, V } from "../905/52806";
import { A as _$$A, J } from "../905/679168";
import { A as _$$A2 } from "../905/763387";
import { A as _$$A3 } from "../905/870891";
import { Ay } from "../905/795642";
import { A as _$$A4 } from "../905/42339";
import { A as _$$A5 } from "../905/113115";
class a {
  constructor(e, t) {
    this.key = e;
    this.value = t;
  }
  orInsert() {
    return this.value;
  }
  orInsertWith() {
    return this.value;
  }
  andModify(e) {
    e(this.value);
    return this;
  }
}
class s {
  constructor(e, t) {
    this.key = e;
    this.map = t;
  }
  orInsert(e) {
    this.map.set(this.key, e);
    return e;
  }
  orInsertWith(e) {
    return this.orInsert(e());
  }
  andModify() {
    return this;
  }
}
class o extends Map {
  entry(e) {
    return this.has(e) ? new a(e, this.get(e)) : new s(e, this);
  }
}
class l extends a {
  orDefault() {
    return this.value;
  }
}
class d extends s {
  orDefault() {
    return this.orInsert(this.map.$$default(this.key));
  }
}
class c extends Map {
  default;
  constructor(e, t) {
    super(t);
    this.$$default = e;
  }
  entry(e) {
    return this.has(e) ? new l(e, this.get(e)) : new d(e, this);
  }
}
class u {
  constructor(e, t, i, n, r) {
    this.emitter = n;
    this.isInitialConnection = r;
    this.serverFields = e;
    this.shadowFields = e;
    this.objectName = i;
    t || (this.serverId = e.id);
  }
  serverId = null;
  serverFields;
  shadowFields;
  objectName;
  shadowMutations = new Set();
  shadowQueries = new Set();
  serverQueries = new Set();
  serverIdResolveList = [];
  isUpdatedAtDifferent(e) {
    return void 0 !== this.serverFields.updatedAt && void 0 !== e.updatedAt && ("string" == typeof this.serverFields.updatedAt && "string" == typeof e.updatedAt ? this.serverFields.updatedAt !== e.updatedAt : !(this.serverFields.updatedAt instanceof Date) || !(e.updatedAt instanceof Date) || this.serverFields.updatedAt.getTime() !== e.updatedAt.getTime());
  }
  fields() {
    return 0 === this.shadowMutations.size ? this.serverFields : this.shadowFields;
  }
  dependentQueries() {
    return 0 === this.shadowMutations.size ? this.serverQueries : this.shadowQueries;
  }
  resolvePendingServerIdList(e) {
    for (let t of (this.serverId = e.id, this.serverIdResolveList)) t(this.serverId);
    this.serverIdResolveList = [];
  }
  applyMutation(e) {
    if (this.isUpdatedAtDifferent(e)) {
      let t = "string" == typeof e.updatedAt ? new Date(e.updatedAt) : e.updatedAt;
      if (!isNaN(t.getTime())) {
        let e = new Date();
        let i = e.getTime() - t.getTime();
        this.emitter.emit({
          type: "SUBSCRIPTION_UPDATE_LATENCY",
          objectName: this.objectName,
          latencyMs: i,
          currentTime: e,
          updatedAt: t,
          isInitialConnection: this.isInitialConnection?.()
        });
      }
    }
    if (this.serverFields = {
      ...this.serverFields,
      ...e
    }, this.shadowFields = {
      ...this.shadowFields,
      id: e.id
    }, this.resolvePendingServerIdList(e), 0 === this.shadowMutations.size) for (let e of this.dependentQueries().values()) for (let t of e.observers) t.onUpdateResult(this.serverFields, e.missingFields);
  }
  applyShadowMutation(e, t, i) {
    0 === this.shadowMutations.size && (this.shadowFields = {
      ...this.serverFields
    }, this.shadowQueries = new Set(this.serverQueries));
    this.shadowMutations.add(e);
    i && (this.shadowFields = {
      ...this.shadowFields,
      ...i,
      ...t
    });
  }
  removeShadowMutation(e, t) {
    t ? this.shadowMutations.$$delete(e) : this.shadowMutations = new Set();
  }
  getServerSideId() {
    if (this.serverId) return Promise.resolve(this.serverId);
    let [e, t] = createDeferredPromise();
    this.serverIdResolveList.push(t);
    return e;
  }
}
class p {
  constructor(e, t, i, n) {
    this.objectDef = e;
    this.emitter = t;
    this.useUnitTestBehaviors = i;
    this.isInitialConnection = n;
  }
  instanceStates = new o();
  instanceStatesByUuid = new o();
  shadowInstances = new Set();
  queryStates = new o();
  possiblyOrphanedQueryResults = new o();
  possiblyOrphanInstances = new Set();
  getAllQueryIds() {
    return Array.from(this.queryStates.keys());
  }
  addInstance(e, t) {
    if (this.emitter.emit({
      type: "STORE.ADD_INSTANCE",
      objectName: this.objectDef.name,
      instance: t.fields()
    }), p.internalAssert("failed" !== e.results.type, "Instance added to a failed query"), e.results.instances.has(t)) {
      if (e.missingFields.length && "loaded" === e.results.type) for (let i of e.observers) i.onUpdateResult(t.fields(), e.missingFields);
    } else {
      if (e.results.instances.add(t), "loaded" === e.results.type) for (let i of e.observers) i.onAddResult(t.fields(), e.missingFields);
      t.dependentQueries().add(e);
    }
  }
  removeInstance(e, t, i) {
    if (this.emitter.emit({
      type: "STORE.REMOVE_INSTANCE",
      objectName: this.objectDef.name,
      instance: t.fields()
    }), p.internalAssert("failed" !== e.results.type, "Instance removed from a failed query"), !e.results.instances.has(t)) {
      throwAsyncIf(!1, "tried to remove instance that does not exist");
      return;
    }
    for (let n of (e.results.instances.$$delete(t), e.observers)) i ? n.onRemoveResult(t.fields()) : n.detachChild(t.fields());
    t.dependentQueries().$$delete(e);
  }
  assembleResults(e) {
    let t = {};
    let {
      queryDef,
      query
    } = e;
    for (let e of this.instanceStates.values()) Array.from(queryDef.projectedFields.keys()).every(t => Object.keys(e.fields()).includes(t) && query.matches(e.fields())) && (t[e.fields().id] = !0);
    return t;
  }
  applyShadowMutationAdd(e, t, i) {
    let n = this.instanceStates.entry(t).orInsertWith(() => new u({
      id: t
    }, !0, this.objectDef.name, this.emitter));
    this.shadowInstances.add(n);
    n.applyShadowMutation(e, {
      id: t
    }, i);
    let r = [];
    let a = new Set();
    for (let [e, t] of this.queryStates.entries()) t.query.matches(n.fields()) && "loaded" === t.results.type && (r.push(e), this.addInstance(t, n), t.observers.forEach(e => a.add(e)));
    return [r, a];
  }
  applyShadowMutationAddWithUUID(e, t, i) {
    let n = this.instanceStatesByUuid.entry(t).orInsertWith(() => new u({
      id: t,
      uuid: t
    }, !0, this.objectDef.name, this.emitter));
    this.shadowInstances.add(n);
    n.applyShadowMutation(e, {
      uuid: t
    }, {
      ...i,
      id: t
    });
    let r = [];
    let a = new Set();
    for (let [e, t] of this.queryStates.entries()) t.query.matches(n.fields()) && "failed" !== t.results.type && (r.push(e), this.addInstance(t, n), t.observers.forEach(e => a.add(e)));
    return [r, a];
  }
  applyShadowMutationDelete(e, t, i) {
    this.shadowInstances.add(i);
    i.applyShadowMutation(e, {
      id: t
    }, null);
    let n = [];
    let r = new Set();
    for (let e of i.dependentQueries().values()) "failed" !== e.results.type && (this.removeInstance(e, i, !1), n.push(e.queryId), e.observers.forEach(e => r.add(e)));
    return [n, r];
  }
  applyShadowMutationDeleteWithUUID(e, t, i) {
    this.shadowInstances.add(i);
    i.applyShadowMutation(e, {
      uuid: t
    }, null);
    let n = [];
    let r = new Set();
    for (let e of i.dependentQueries().values()) "failed" !== e.results.type && (this.removeInstance(e, i, !1), n.push(e.queryId), e.observers.forEach(e => r.add(e)));
    return [n, r];
  }
  applyShadowMutationUpdate(e, t, i, n) {
    this.shadowInstances.add(i);
    i.applyShadowMutation(e, {
      id: t
    }, n);
    let r = i.fields();
    let a = [];
    let s = new Set();
    for (let e of this.queryStates.values()) if ("failed" !== e.results.type) {
      if (e.results.instances.has(i)) {
        if (e.query.matches(r)) for (let t of e.observers) t.onUpdateResult(r, e.missingFields);else this.removeInstance(e, i, !1);
        e.observers.forEach(e => s.add(e));
        a.push(e.queryId);
      } else e.query.matches(r) && (this.addInstance(e, i), e.observers.forEach(e => s.add(e)), a.push(e.queryId));
    }
    return [a, s];
  }
  applyShadowMutationUpdateWithUUID(e, t, i, n) {
    this.shadowInstances.add(i);
    i.applyShadowMutation(e, {
      uuid: t
    }, n);
    let r = i.fields();
    let a = [];
    let s = new Set();
    for (let e of this.queryStates.values()) if ("failed" !== e.results.type) {
      if (e.results.instances.has(i)) {
        if (e.query.matches(r)) for (let t of e.observers) t.onUpdateResult(r, e.missingFields);else this.removeInstance(e, i, !1);
        e.observers.forEach(e => s.add(e));
        a.push(e.queryId);
      } else e.query.matches(r) && (this.addInstance(e, i), e.observers.forEach(e => s.add(e)), a.push(e.queryId));
    }
    return [a, s];
  }
  removeShadowMutations(e, t, i) {
    for (let n in t) {
      let t = this.instanceStates.get(n);
      if (void 0 !== t && t.shadowMutations.has(e) && (t.removeShadowMutation(e, i), 0 === t.shadowMutations.size)) {
        this.shadowInstances.$$delete(t);
        let e = t.fields();
        for (let i of t.dependentQueries().values()) for (let t of i.observers) t.restoreChild(e);
        for (let i of this.queryStates.values()) if ("failed" !== i.results.type) {
          if (i.results.instances.has(t)) {
            if (t.dependentQueries().has(i)) for (let t of i.observers) t.onUpdateResult(e, i.missingFields);else this.removeInstance(i, t, !0);
          } else t.dependentQueries().has(i) && this.addInstance(i, t);
        }
        this.checkOrphanInstance(t);
      }
    }
  }
  removeShadowMutationsWithUUID(e, t, i) {
    for (let n in t) {
      let t = this.instanceStatesByUuid.get(n);
      if (void 0 !== t && t.shadowMutations.has(e) && (t.removeShadowMutation(e, i), 0 === t.shadowMutations.size)) {
        this.shadowInstances.$$delete(t);
        let e = t.fields();
        for (let i of t.dependentQueries().values()) for (let t of i.observers) t.restoreChild(e);
        for (let i of this.queryStates.values()) if ("failed" !== i.results.type) {
          if (i.results.instances.has(t)) {
            if (t.dependentQueries().has(i)) for (let t of i.observers) t.onUpdateResult(e, i.missingFields);else this.removeInstance(i, t, !0);
          } else t.dependentQueries().has(i) && this.addInstance(i, t);
        }
        this.checkOrphanInstance(t);
      }
    }
  }
  resolvePendingServerIdList(e) {
    for (let t of Object.values(e)) {
      let e = this.objectDef.readPlainObject(t);
      e.uuid && this.instanceStatesByUuid.has(e.uuid) && this.instanceStatesByUuid.get(e.uuid).resolvePendingServerIdList(e);
    }
  }
  applyMutations(e, t) {
    for (let [t, i] of Object.entries(e)) {
      let e = this.objectDef.readPlainObject(i);
      if (this.instanceStates.has(t)) this.instanceStates.get(t).applyMutation(e);else if (e.uuid && this.instanceStatesByUuid.has(e.uuid)) {
        let t = this.instanceStatesByUuid.get(e.uuid);
        this.instanceStates.set(e.id, t);
        t.applyMutation(e);
      } else {
        let t = new u(e, !1, this.objectDef.name, this.emitter, this.isInitialConnection);
        e.uuid && this.instanceStatesByUuid.set(e.uuid, t);
        this.instanceStates.set(e.id, t);
        this.possiblyOrphanInstances.add(t);
      }
    }
    for (let [i, n] of Object.entries(t)) {
      if (!this.queryStates.has(i)) {
        this.possiblyOrphanedQueryResults.set(i, n);
        continue;
      }
      let t = this.queryStates.get(i);
      this.setQueryStateResults(t, n, e);
    }
  }
  applyMutations__UNIT_TEST(e) {
    if (!this.useUnitTestBehaviors) throw Error("applyMutations__UNIT_TEST called when useUnitTestBehaviors is false");
    for (let [t, i] of Object.entries(e)) {
      if (null === i) {
        this.instanceStates.$$delete(t);
        continue;
      }
      let e = {
        id: t,
        ...i
      };
      if (this.instanceStates.has(t)) this.instanceStates.get(t).applyMutation(e);else if (e.uuid && this.instanceStatesByUuid.has(e.uuid)) {
        let t = this.instanceStatesByUuid.get(e.uuid);
        this.instanceStates.set(e.id, t);
        t.applyMutation(e);
      } else {
        let t = new u(e, !1, this.objectDef.name, this.emitter);
        e.uuid && this.instanceStatesByUuid.set(e.uuid, t);
        this.instanceStates.set(e.id, t);
        this.possiblyOrphanInstances.add(t);
      }
    }
    for (let e of this.queryStates.values()) {
      let t = this.assembleResults(e);
      this.setQueryStateResults(e, {
        results: t,
        fullResults: !0
      });
    }
  }
  subscribe(e, t) {
    let i = this.queryStates.entry(e.queryId).orInsertWith(() => ({
      queryId: e.queryId,
      results: {
        type: "loading",
        instances: new Set()
      },
      query: e.substituted(),
      queryDef: e.queryDef,
      observers: new Set(),
      missingFields: []
    }));
    if (p.internalAssert(!i.observers.has(t), "Duplicate subscription for query id"), i.observers.add(t), this.useUnitTestBehaviors) this.setQueryStateResults(i, {
      results: this.assembleResults(i),
      fullResults: !0
    });else if (this.possiblyOrphanedQueryResults.has(e.queryId)) {
      this.setQueryStateResults(i, this.possiblyOrphanedQueryResults.get(e.queryId));
      this.possiblyOrphanedQueryResults.$$delete(e.queryId);
    } else if ("loaded" === i.results.type) {
      let e = {};
      for (let t of i.results.instances.values()) {
        let i = t.fields();
        e[i.id] = i;
      }
      t.onInitialResults(e, void 0, i.missingFields);
    } else "failed" === i.results.type && t.onError(i.results.error);
    return () => {
      if (p.internalAssert(i.observers.has(t), "Duplicate unsubscription for query"), i.observers.$$delete(t), 0 === i.observers.size) {
        if ("failed" !== i.results.type) for (let e of i.results.instances.values()) {
          e.dependentQueries().$$delete(i);
          this.checkOrphanInstance(e);
        }
        this.queryStates.$$delete(e.queryId);
      }
    };
  }
  getIdFromUuid(e) {
    if (!this.instanceStatesByUuid.has(e)) throw Error(`uuid ${e} doesn't exist in object store ${this.objectDef.name}`);
    return this.instanceStatesByUuid.get(e).getServerSideId();
  }
  setQueryStateResults(e, t, i) {
    if ("error" in t) {
      if ("loaded" !== e.results.type) for (let i of (e.results = {
        type: "failed",
        error: t.error
      }, e.observers)) i.onError(t.error);
      return;
    }
    let {
      results,
      fullResults,
      pagination,
      missingFields
    } = t;
    if (missingFields && (e.missingFields = e.missingFields.concat(missingFields)), "loaded" === e.results.type) {
      for (let [i, a] of Object.entries(results)) {
        if (!this.instanceStates.has(i)) {
          throwAsyncIf(this.instanceStates.has(i), `objectId is missing from ${this.objectDef.name} store`, {
            objectId: i,
            queryResults: JSON.stringify(t)
          });
          continue;
        }
        let r = this.instanceStates.get(i);
        if (this.shadowInstances.has(r)) {
          !0 === a ? r.serverQueries.add(e) : r.serverQueries.$$delete(e);
          continue;
        }
        !0 === a ? this.addInstance(e, r) : (this.removeInstance(e, r, !0), this.possiblyOrphanInstances.add(r));
      }
      if (fullResults) {
        for (let t of e.results.instances) this.shadowInstances.has(t) || results[t.fields().id] || (this.removeInstance(e, t, !0), this.possiblyOrphanInstances.add(t));
        for (let t of this.shadowInstances.values()) results[t.fields().id] || t.serverQueries.$$delete(e);
      }
    } else {
      fullResults || console.error("[Livegraph] Partial results received while query is in a non-loaded state", {
        queryState: e.results.type,
        queryId: e.queryId
      });
      p.internalAssert(fullResults, "Partial results received while query is in a non-loaded state", {
        queryState: e.results.type,
        queryId: e.queryId
      });
      e.results = {
        type: "loaded",
        instances: "loading" === e.results.type ? e.results.instances : new Set()
      };
      let t = {};
      for (let i in results) {
        p.internalAssert(results[i], "Pending mutations for objectId is falsy");
        p.internalAssert(this.instanceStates.has(i), "Query result contains id not found in instanceStates");
        let n = this.instanceStates.get(i);
        n.serverQueries.add(e);
        this.shadowInstances.has(n) || (t[i] = n.fields(), e.results.instances.add(n));
      }
      for (let i of this.shadowInstances.values()) {
        let n = i.fields();
        e.query.matches(n) && (t[n.id] = n);
      }
      for (let i of e.observers) i.onInitialResults(t, pagination, missingFields);
    }
  }
  cleanupOrphans() {
    for (let e of (this.possiblyOrphanedQueryResults.clear(), this.possiblyOrphanInstances)) this.checkOrphanInstance(e);
  }
  checkOrphanInstance(e) {
    let t = this.instanceStates.has(e.fields().id);
    let i = this.instanceStates.get(e.fields().id) === e;
    let n = 0 === e.dependentQueries().size;
    let r = this.shadowInstances.has(e);
    if (t && i && n && !r) {
      this.instanceStates.$$delete(e.fields().id);
      let t = e.fields().uuid;
      t && this.instanceStatesByUuid.$$delete(t);
    }
  }
  static internalAssert(e, t, i) {
    throwIf(e, t, i);
  }
}
var h = m;
let f = /(,\"sessionId\":\"session-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\")/;
let _ = /(,\"anonymousUserId\":(null|\"[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\"))/;
class $$A {
  constructor(e) {
    this.objectDef = e;
  }
  states = new c(() => ({
    state: {
      type: "loading"
    },
    observers: new Set()
  }));
  stripSessionArgs(e) {
    return e.replace(f, "").replace(_, "");
  }
  applyMutations(e) {
    for (let [t, i] of Object.entries(e)) {
      let e = this.stripSessionArgs(t);
      let n = this.states.entry(e).orDefault();
      if ("error" in i) "loaded" !== n.state.type && (n.state = {
        type: "failed",
        errors: [{
          code: "computedFieldError",
          path: ["computedFieldFunction"],
          error: Error(i.error.message),
          retriable: i.error.retriable
        }]
      });else {
        let {
          value
        } = i;
        let {
          fieldName
        } = i;
        if (this.objectDef.fields.has(fieldName)) {
          e = this.objectDef.readPlainObjectField(fieldName, value);
          let i = this.objectDef.fields.get(fieldName);
          i instanceof F && i?.isComputedObject() && value && "object" == typeof value && "loaded" === n.state.type ? n.state = {
            type: "loaded",
            value: h()(n.state.value, value, {
              arrayMerge: (e, t, i) => t
            })
          } : n.state = {
            type: "loaded",
            value
          };
        }
      }
      for (let e of n.observers.values()) "loaded" === n.state.type ? e.onUpdateResult(n.state.value) : "failed" === n.state.type && e.onErrors(n.state.errors);
    }
  }
  subscribe({
    computationId: e
  }, t) {
    let i = this.stripSessionArgs(e);
    let r = this.states.entry(i).orDefault();
    throwIf(!r.observers.has(t), "Duplicate subscription for computation");
    r.observers.add(t);
    "loaded" === r.state.type ? t.onUpdateResult(r.state.value) : "failed" === r.state.type && t.onErrors(r.state.errors);
    return () => {
      r.observers.$$delete(t);
      0 === r.observers.size && this.states.$$delete(i);
    };
  }
}
class b {
  constructor(e, t, i, n, r, a) {
    this.key = e;
    this.viewRef = t;
    this.viewDef = i;
    this.context = n;
    this.traceId = a;
    this.view = new _$$A(e, i, n, r);
  }
  view;
  subscriptions = [];
  getSubscriptionObservers() {
    return this.subscriptions;
  }
  addSubscription(e) {
    this.subscriptions.push(e);
  }
  removeSubscription(e) {
    this.subscriptions = this.subscriptions.filter(t => t !== e);
  }
  viewArgs() {
    return this.view.viewArgs;
  }
  activeView() {
    return this.view;
  }
  setOptionalMissing(e) {
    this.context.options && (this.context.options?.forceMissingOptionals || (this.context.options.forceMissingOptionals = []), this.context.options.forceMissingOptionals.push(e));
  }
  unsetOptionalMissing() {
    this.context.options && (this.context.options.forceMissingOptionals = []);
  }
  enableViewCaching() {
    this.context.options && (this.context.options.bustViewCache = !1);
  }
  disableViewCaching() {
    this.context.options && (this.context.options.bustViewCache = !0);
  }
  destroy() {
    this.view.destroy();
  }
}
class S {
  constructor(e, t = {}, i = {}, n) {
    this.viewKey = e;
    this.sessionArgs = t;
    this.viewArgs = i;
    this.options = n;
  }
}
class C {
  constructor(e) {
    this.emitter = e;
  }
  criticalAndPage(e) {}
  error(e) {}
  warn(e) {}
  info(e) {}
  debug(e, ...t) {
    switch (e) {
      case "VIEW_QUERY_NODE.ADD_RESULT":
      case "VIEW_QUERY_NODE.UPDATE_RESULT":
      case "VIEW_QUERY_NODE.REMOVE_RESULT":
        this.emitter.emit({
          type: e,
          queryId: t[0],
          instance: t[1]
        });
        break;
      case "VIEW_QUERY_NODE.INITIAL_RESULT":
        this.emitter.emit({
          type: e,
          queryId: t[0],
          instances: t[1]
        });
    }
  }
}
export class $$T0 {
  constructor(e, t, i, n, r, a, s, o, l, d, c, u) {
    for (let [m, h] of (this.args = e, this.schema = t, this.viewRegistry = i, this.emitter = n, this.onPaginationChange = r, this.isInitialConnection = a, this.onRetriableViewFailure = s, this.getRetryCountOnResult = o, this.analyticsLogger = l, this.shouldBubbleUpNonNullableResultErrors = d, this.errorsLoggedForAnalyticsFraction = c, this.useUnitTestBehaviors = u, this.contextLogger = new C(this.emitter), t.objects)) this.stores[m] = {
      queries: new p(h, this.emitter, !!this.useUnitTestBehaviors, this.isInitialConnection),
      computations: new $$A(h)
    };
  }
  viewSubscriptions = new Map();
  failedViewSubscriptions = new Map();
  contextLogger;
  forceMissingOptionalsForViews = new Map();
  nextSubscriptionId = 1;
  paginationQueryNodeMap = new Map();
  computationObjectNodes = {};
  stores = {};
  getAllQueryIds() {
    let e = [];
    for (let t of Object.values(this.stores)) t && e.push(...t.queries.getAllQueryIds());
    return e;
  }
  resolvePendingServerIdList(e) {
    for (let [t, i] of Object.entries(e)) {
      let e = this.getStores(t);
      e && e.queries.resolvePendingServerIdList(i.instances);
    }
  }
  applyMutations(e) {
    for (let [t, i] of (this.emitter.emit({
      type: "SESSION.APPLY_MUTATIONS",
      mutations: e
    }), Object.entries(e))) {
      let {
        instances,
        queries,
        computations
      } = i;
      let a = this.getStores(t);
      a && (a.queries.applyMutations(instances, queries), a.computations.applyMutations(computations));
    }
    for (let t of (this.notifyObservers(), Object.keys(e))) {
      let e = this.getStores(t);
      e && e.queries.cleanupOrphans();
    }
  }
  applyMutations__UNIT_TEST(e) {
    for (let [t, i] of Object.entries(e)) {
      let e = this.getStores(t);
      e && e.queries.applyMutations__UNIT_TEST(i);
    }
    this.notifyObservers();
  }
  applyShadowMutations(e, t, i) {
    this.emitter.emit({
      type: "SESSION.APPLY_SHADOW_MUTATIONS",
      transactionId: e,
      mutations: t,
      operationType: i
    });
    let r = new Map();
    let a = new Set();
    let s = {};
    let o = {};
    for (let [e, t] of this.viewSubscriptions.entries()) o[e] = t.activeView().root.result().status;
    this.transformComputedObjectMutations(t, i);
    let l = (e, t, i, n) => {
      for (let r of Object.keys(n)) {
        let n = this.schema.objects.get(t)?.fields.get(r);
        n && V(n) && (s[t] || (s[t] = {
          instanceIds: e ? void 0 : [],
          fieldNames: []
        }), e || s[t].instanceIds?.includes(i) || s[t].instanceIds?.push(i), s[t].fieldNames.includes(r) || s[t].fieldNames.push(r));
      }
    };
    for (let [s, o] of Object.entries(t)) {
      let t = this.getStores(s);
      if (t) for (let [d, c] of Object.entries(o)) {
        let o = t.queries.instanceStates.get(d);
        if (void 0 === o) {
          if ("update" === i || "delete" === i) {
            console.warn(`Update/delete triggered on non-existent instance of object type ${s}, id ${d}`);
            continue;
          }
          throwIf(c, "Optimistic mutation is not defined");
          let [o, u] = t.queries.applyShadowMutationAdd(e, d, c);
          for (let e of o) k(r, s).add(e);
          u.forEach(e => a.add(e));
          l(!0, s, d, c);
        } else if (null === c) {
          let [i, n] = t.queries.applyShadowMutationDelete(e, d, o);
          for (let e of i) k(r, s).add(e);
          n.forEach(e => a.add(e));
        } else {
          let [i, n] = t.queries.applyShadowMutationUpdate(e, d, o, c);
          for (let e of i) k(r, s).add(e);
          n.forEach(e => a.add(e));
          l(!1, s, d, c);
        }
      }
    }
    let d = [];
    let c = [];
    for (let [e, t] of this.viewSubscriptions.entries()) "loaded" === o[e] && "loading" === t.activeView().root.result().status && (d.push(t.activeView().root.queryDef.objectFieldDef.name), c.push(t.activeView().root.getLoadingPathsForDebugging()));
    d.length > 0 && this.emitter.emit({
      type: "SESSION.OPTIMISTIC_UPDATE_INSUFFICIENT_DATA",
      loadedToLoadingViews: d,
      loadingPaths: c
    });
    this.notifyObservers();
    return [r, s, a];
  }
  removeShadowMutations(e, t, i) {
    for (let [n, r] of (this.emitter.emit({
      type: "SESSION.REMOVE_SHADOW_MUTATIONS",
      transactionId: e,
      mutations: t,
      success: i
    }), Object.entries(t))) {
      let t = this.getStores(n);
      t && t.queries.removeShadowMutations(e, r, i);
    }
    this.notifyObservers();
  }
  applyShadowMutationsWithUUID(e, t, i) {
    this.emitter.emit({
      type: "SESSION.APPLY_SHADOW_MUTATIONS",
      transactionId: e,
      mutations: t,
      operationType: i
    });
    let r = new Map();
    let a = {};
    let s = {};
    for (let [e, t] of this.viewSubscriptions.entries()) s[e] = t.activeView().root.result().status;
    let o = new Set();
    let l = (e, t, i) => {
      for (let n of Object.keys(i)) {
        let i = this.schema.objects.get(e)?.fields.get(n);
        i && V(i) && (a[e] || (a[e] = {
          instanceUuids: [],
          fieldNames: []
        }), a[e].instanceUuids?.includes(t) || a[e].instanceUuids?.push(t), a[e].fieldNames.includes(n) || a[e].fieldNames.push(n));
      }
    };
    for (let [a, s] of Object.entries(t)) {
      if (a in this.schema.computedObjectFields) {
        console.warn(`UUID optimistic updates for computed objects are not supported. Optimistically updating computed object '${a}' may not work`);
        continue;
      }
      let t = this.getStores(a);
      if (t) for (let [d, c] of Object.entries(s)) {
        let s = t.queries.instanceStatesByUuid.get(d);
        if (void 0 === s) {
          if ("update" === i || "delete" === i) {
            console.warn(`Update/delete triggered on non-existent instance of object type ${a}, uuid ${d}`);
            continue;
          }
          throwIf(c, "Optimistic uuid mutation is not defined");
          let [s, u] = t.queries.applyShadowMutationAddWithUUID(e, d, c);
          for (let e of s) k(r, a).add(e);
          u.forEach(e => o.add(e));
          l(a, d, c);
        } else if ("delete" === i) {
          let [i, n] = t.queries.applyShadowMutationDeleteWithUUID(e, d, s);
          for (let e of i) k(r, a).add(e);
          n.forEach(e => o.add(e));
        } else if (null !== c) {
          let [i, n] = t.queries.applyShadowMutationUpdateWithUUID(e, d, s, c);
          for (let e of i) k(r, a).add(e);
          n.forEach(e => o.add(e));
          l(a, d, c);
        }
      }
    }
    let d = [];
    let c = [];
    for (let [e, t] of this.viewSubscriptions.entries()) "loaded" === s[e] && "loading" === t.activeView().root.result().status && (d.push(t.activeView().root.queryDef.objectFieldDef.name), c.push(t.activeView().root.getLoadingPathsForDebugging()));
    d.length > 0 && this.emitter.emit({
      type: "SESSION.OPTIMISTIC_UPDATE_INSUFFICIENT_DATA",
      loadedToLoadingViews: d,
      loadingPaths: c
    });
    this.notifyObservers();
    return [r, a, o];
  }
  transformComputedObjectMutations(e, t) {
    for (let [i, n] of Object.entries(e)) if (i in this.schema.computedObjectFields) {
      for (let [r, a] of Object.entries(n)) {
        let n = [];
        for (let e of this.computationObjectNodes[i] ?? []) if (e.computedObject?.id === r) {
          n.push(e);
          break;
        }
        if (0 === n.length) {
          if ("update" === t || "delete" === t) {
            console.warn(`Update/delete triggered on non-existent instance of computed object type ${i}, id ${r}`);
            continue;
          }
          for (let t of this.schema.computedObjectFields[i] ?? []) for (let i of Object.values(e[t.parentName] ?? {})) i && i[t.fieldName]?.id === r && (i[t.fieldName] = a);
        } else for (let t of n) {
          let i = t.parent;
          let n = i.queryDef.name;
          let r = i.instance.id;
          let s = i.instance.uuid;
          e[n] || (e[n] = {});
          let o = e[n]?.[r];
          !o && s && (o = e[n]?.[s]);
          o || (o = {}, e[n][r] = o);
          null === a ? o[t.fieldName] = null : o[t.fieldName] = {
            ...(t.computedObject ?? {}),
            ...a
          };
        }
      }
      delete e[i];
    }
  }
  removeShadowMutationsWithUUID(e, t, i) {
    for (let [n, r] of (this.emitter.emit({
      type: "SESSION.REMOVE_SHADOW_MUTATIONS",
      transactionId: e,
      mutations: t,
      success: i
    }), Object.entries(t))) {
      let t = this.getStores(n);
      t && t.queries.removeShadowMutationsWithUUID(e, r, i);
    }
    this.notifyObservers();
  }
  getIdFromUuid(e, t) {
    let i = this.getStores(e);
    if (!i) throw Error(`objectName ${e} doesn't exist`);
    return i.queries.getIdFromUuid(t);
  }
  getViewDef(e) {
    let t = this.viewRegistry.get(e._name);
    if (!t) throw Error(`View with name ${e._name} not found`);
    return t;
  }
  getViewResult(e, t) {
    let i = J(this.getViewDef(e).name, t);
    return this.viewSubscriptions.has(i) ? this.viewSubscriptions.get(i).activeView().result() : null;
  }
  getViewResultByViewNameAndArgs(e, t) {
    let i = J(e, t);
    return this.viewSubscriptions.has(i) ? this.viewSubscriptions.get(i).activeView().result() : null;
  }
  subscribe(e, t, i, r) {
    let a;
    let s = this.getViewDef(e);
    s.validateArguments(t).unwrap();
    let o = J(s.name, t);
    this.viewSubscriptions.has(o) ? a = this.viewSubscriptions.get(o) : (this.args.sessionId || this.emitter.emit({
      type: "SESSION.SUBSCRIBE_BEFORE_SESSION_ID_SET",
      sessionArgs: this.args,
      viewName: s.name
    }), a = new b(o, e, s, new S(o, this.args, t, {
      logger: this.contextLogger,
      analyticsLogger: this.analyticsLogger,
      paginationQueryNodeMap: this.paginationQueryNodeMap,
      computationObjectNodes: this.computationObjectNodes,
      shouldBubbleUpNonNullableResultErrors: this.shouldBubbleUpNonNullableResultErrors,
      forceMissingOptionals: this.forceMissingOptionalsForViews.get(s.name),
      errorsLoggedForAnalyticsFraction: this.errorsLoggedForAnalyticsFraction,
      emitter: this.emitter
    }), this, r), this.viewSubscriptions.set(o, a));
    let l = {
      id: this.nextSubscriptionId++,
      view: e,
      args: t,
      observer: i,
      unsubscribe: once(() => {
        a.removeSubscription(l);
        0 === a.getSubscriptionObservers().length && (this.viewSubscriptions.$$delete(o), a.destroy());
      }),
      clientUnsubscribed: !1,
      lastResult: null
    };
    a.addSubscription(l);
    $$T0.nextTick(() => {
      l.clientUnsubscribed || this.notifyObserver(a, l);
    });
    return l;
  }
  cleanupFailedSubscription(e) {
    let t = this.viewSubscriptions.get(e);
    if (t) {
      for (let e of t.getSubscriptionObservers()) {
        let t = {
          status: "errors",
          data: null,
          errors: []
        };
        $$T0.nextTick(() => {
          e.clientUnsubscribed || (e.observer(t), e.lastResult = t);
        });
      }
      this.failedViewSubscriptions.set(e, t);
      this.viewSubscriptions.$$delete(e);
    }
  }
  hasActiveSubscriptions(e, t) {
    let i = J(e, t);
    let n = this.viewSubscriptions.get(i);
    return !!n && n.getSubscriptionObservers().length > 0;
  }
  getActiveSubscription(e) {
    let t = this.viewSubscriptions.get(e);
    if (t) return {
      viewRef: t.viewRef,
      args: t.viewArgs(),
      traceId: t.traceId
    };
  }
  uniqueSubscriptions() {
    let e = [];
    for (let [t, i] of this.failedViewSubscriptions.entries()) this.viewSubscriptions.has(t) || e.push({
      viewRef: i.viewRef,
      args: i.viewArgs(),
      status: i.activeView().result().status,
      viewDef: i.viewDef
    });
    for (let t of (this.failedViewSubscriptions.clear(), this.viewSubscriptions.values())) e.push({
      viewRef: t.viewRef,
      args: t.viewArgs(),
      traceId: t.traceId,
      status: t.activeView().result().status,
      viewDef: t.viewDef
    });
    return e;
  }
  startReconnectionStateForPaginationQueries() {
    for (let e of this.paginationQueryNodeMap.values()) e.startReconnectionState();
  }
  subscribeQuery(e, t) {
    this.emitter.emit({
      type: "SESSION.SUBSCRIBE_QUERY",
      query: e
    });
    let i = this.getStores(e.objectName);
    return i ? i.queries.subscribe(e, t) : () => {};
  }
  requestPaginationChange(e, t, i) {
    this.onPaginationChange(e, t.queryId, i);
    this.notifyObservers();
  }
  subscribeComputation(e, t) {
    this.emitter.emit({
      type: "SESSION.SUBSCRIBE_COMPUTATION",
      computation: e
    });
    let i = this.getStores(e.objectName);
    return i ? i.computations.subscribe(e, t) : () => {};
  }
  isInMutationBatch = !1;
  shouldNotifyOnMutationBatchCompletion = !1;
  batchMutations(e) {
    this.isInMutationBatch = !0;
    this.shouldNotifyOnMutationBatchCompletion = !1;
    try {
      e();
    } finally {
      this.isInMutationBatch = !1;
      this.shouldNotifyOnMutationBatchCompletion && this.notifyObservers();
    }
  }
  notifyObservers() {
    if (this.isInMutationBatch) {
      this.shouldNotifyOnMutationBatchCompletion = !0;
      return;
    }
    for (let e of this.viewSubscriptions.values()) for (let t of e.getSubscriptionObservers()) this.notifyObserver(e, t);
  }
  notifyObserver(e, t) {
    let i;
    let n = e.activeView().result();
    t.lastResult !== n && (t.lastResult?.status !== "loaded" || "loading" !== n.status || void 0 !== e.activeView().viewResultForDebugging) && (t.lastResult?.status === "loaded" && "errors" === n.status && this.emitter.emit({
      type: "VIEW.STATE_TRANSITION",
      viewName: e.viewRef._name,
      transitionType: "LOADED_TO_ERROR",
      userId: this.args.userId,
      isInitialConnection: this.isInitialConnection(),
      sessionId: this.args.sessionId || ""
    }), t.lastResult?.status === "loaded" && t.lastResult?.errors.length === 0 && "loaded" === n.status && n.errors.length > 0 && this.emitter.emit({
      type: "VIEW.STATE_TRANSITION",
      viewName: e.viewRef._name,
      transitionType: "LOADED_TO_LOADED_WITH_ERROR",
      userId: this.args.userId,
      isInitialConnection: this.isInitialConnection(),
      sessionId: this.args.sessionId || ""
    }), t.clientUnsubscribed || (t.observer(n), t.lastResult = n), n.errors && n.errors.length > 0 ? n.errors.every(e => e.retriable) && this.onRetriableViewFailure(e.key) : "loaded" === n.status && (i = this.getRetryCountOnResult(e.key)), this.emitter.emit({
      type: "SESSION.NOTIFY_OBSERVERS",
      view: e.viewRef,
      args: e.viewArgs(),
      result: n,
      subscriptionId: t.id,
      retryCount: i
    }));
  }
  getStores(e) {
    return this.stores[e] || (this.emitter.emit({
      type: "SESSION.UNEXPECTED_OBJECT_NAME",
      objectName: e
    }), null);
  }
  getViewLoadType(e) {
    let t = this.viewSubscriptions.get(e);
    return t && "loading" !== t.activeView().result().status ? ConnectionAttemptTypes.Reinitialization : ConnectionAttemptTypes.Initial;
  }
  static nextTick(e) {
    setTimeout(e, 0);
  }
  static async tick() {
    return new Promise(e => {
      this.nextTick(() => {
        e();
      });
    });
  }
  setOptionalMissingForView(e, t) {
    if (this.forceMissingOptionalsForViews.has(e)) {
      let i = this.forceMissingOptionalsForViews.get(e);
      this.forceMissingOptionalsForViews.set(e, [...i, t]);
    } else this.forceMissingOptionalsForViews.set(e, [t]);
    for (let [i, n] of this.viewSubscriptions.entries()) if (n.viewRef._name === e) for (let e of (n.disableViewCaching(), n.setOptionalMissing(t), n.getSubscriptionObservers())) this.notifyObserver(n, e);
  }
  unsetOptionalMissingForView(e) {
    for (let [t, i] of this.viewSubscriptions.entries()) if (i.viewRef._name === e) {
      for (let e of (i.unsetOptionalMissing(), i.getSubscriptionObservers())) this.notifyObserver(i, e);
      i.enableViewCaching();
    }
    this.forceMissingOptionalsForViews.$$delete(e);
  }
  getViewSubscriptionsForTesting() {
    return this.viewSubscriptions;
  }
  getViewSubscriptionsForDebugging() {
    let e = {};
    for (let [t, i] of this.viewSubscriptions.entries()) {
      let n = {
        ...i.activeView().root.result(),
        optionalErrorPaths: i.activeView().root.getOptionalErrorPathsForDebugging()
      };
      "loading" === n.status && (n = {
        ...n,
        loadingPaths: i.activeView().root.getLoadingPathsForDebugging()
      });
      e[t] = n;
    }
    return e;
  }
  prettyPrintLiveViewTree(e) {
    let t = "";
    let i = null;
    if ("string" == typeof e) {
      if (!this.viewSubscriptions.has(e)) {
        let e = [...this.viewSubscriptions.keys()].join("\n").replace(/"/g, '\\"');
        throw Error(`Subscription key not found, possible options: 
${e}`);
      }
      t = e;
      i = this.viewSubscriptions.get(t).activeView().root;
    } else if (e instanceof _$$A2) {
      t = e.parent.key;
      i = e;
    } else throw Error("Please enter a subscription key or a LiveViewInstanceNode");
    let r = i.context.viewArgs;
    let a = i.debugState(e => {
      if (e instanceof _$$A2) return `I: ${e.instance.id ? e.instance.id : "Root Instance"}`;
      if (e instanceof Ay) {
        let t = [];
        let i = e.query.queryDef;
        r && Object.keys(r).forEach(e => {
          t.push(`${i.objectDef.name}.${e} = ${r[e]}`);
        });
        let n = `Q: ${i.objectFieldDef.name} - `;
        t.length > 0 ? n += `args:(${t.join()})` : n += `(${i.objectDef.name})`;
        return n;
      }
      if (e instanceof _$$A4 || e instanceof _$$A5) {
        let t = e.result();
        return "loaded" === t.status ? `C: ${e.fieldName} = ${t.data}` : `C: ${e.fieldName} is loading`;
      }
      if (e instanceof _$$A3) return "PaginationQueryNode";
      noop(e);
      return Error("Unexpected node type");
    });
    return `Logging LiveView tree for subscription: ${t} 
View Name: ${i.queryDef.objectFieldDef.name} 
` + _$$A.debugStateAsString(a);
  }
  setViewResultForDebugging(e, t, i, n) {
    let r = this.viewSubscriptions.get(e);
    r ? (r.activeView().setViewResultForDebugging({
      status: t,
      data: i,
      errors: n
    }), this.notifyObservers()) : console.log(`setViewResultForDebugging: ${e} doesn't exist`);
  }
  unsetViewResultForDebugging(e) {
    let t = this.viewSubscriptions.get(e);
    t ? (t.activeView().setViewResultForDebugging(void 0), this.notifyObservers()) : console.log(`unsetViewResultForDebugging: ${e} doesn't exist`);
  }
}
function k(e, t) {
  e.has(t) || e.set(t, new Set());
  return e.get(t);
}
export const A = $$T0;