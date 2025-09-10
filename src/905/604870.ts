/* eslint-disable no-console */
import type { ObjectTypeDefinition } from '../905/644409'
import deepmerge from 'deepmerge'
import { ComputationHandler } from '../905/42339'
import { ComputedFieldDef, isComputedField } from '../905/52806'
import { ComputationObjectNode } from '../905/113115'
import { createDeferredPromise, noop, once, throwAsyncIf, throwIf } from '../905/419236'
import { LiveViewNode, serializeArgs } from '../905/679168'
import { QueryInstanceNode } from '../905/763387'
import { QueryNode } from '../905/795642'
import { PaginatedQueryNode } from '../905/870891'
import { ConnectionAttemptTypes } from '../905/957591'

/**
 * Entry wrapper for Map values (original: class a)
 */
class MapEntry<K, V> {
  constructor(public key: K, public value: V) { }

  /**
   * Returns the value (original: orInsert)
   */
  orInsert(): V {
    return this.value
  }

  /**
   * Returns the value (original: orInsertWith)
   */
  orInsertWith(): V {
    return this.value
  }

  /**
   * Modifies the value using the provided function (original: andModify)
   */
  andModify(fn: (value: V) => void): this {
    fn(this.value)
    return this
  }
}

/**
 * Entry wrapper for missing Map values (original: class s)
 */
class MapInsertEntry<K, V> {
  /**
   * The map can be any Map<K, V> (original: map)
   */
  constructor(public key: K, public map: Map<K, V>) { }

  /**
   * Inserts the value if missing (original: orInsert)
   */
  orInsert(value: V): V {
    this.map.set(this.key, value)
    return value
  }

  /**
   * Inserts the value using a factory function if missing (original: orInsertWith)
   */
  orInsertWith(factory: () => V): V {
    return this.orInsert(factory())
  }

  /**
   * No-op for missing entry (original: andModify)
   */
  andModify(): this {
    return this
  }
}

/**
 * Map with entry() helper (original: class o)
 */
class EntryMap<K, V> extends Map<K, V> {
  /**
   * Returns an entry wrapper for the given key (original: entry)
   */
  entry(key: K): MapEntry<K, V> | MapInsertEntry<K, V> {
    return this.has(key)
      ? new MapEntry(key, this.get(key) as V)
      : new MapInsertEntry(key, this)
  }
}

/**
 * Entry wrapper with default value (original: class l)
 */
class DefaultMapEntry<K, V> extends MapEntry<K, V> {
  /**
   * Returns the value (original: orDefault)
   */
  orDefault(): V {
    return this.value
  }
}

/**
 * Insert entry wrapper with default value (original: class d)
 */
class DefaultMapInsertEntry<K, V> extends MapInsertEntry<K, V> {
  /**
   * Inserts the default value if missing (original: orDefault)
   */
  orDefault(): V {
    // DefaultMapInsertEntry.orDefault
    return this.orInsert((this.map as DefaultEntryMap<K, V>).default(this.key))
  }
}

/**
 * Map with default value factory (original: class c)
 */
class DefaultEntryMap<K, V> extends Map<K, V> {
  default: (key: K) => V

  constructor(defaultFn: (key: K) => V, entries?: readonly (readonly [K, V])[] | null) {
    super(entries)
    this.default = defaultFn
  }

  /**
   * Returns an entry wrapper for the given key (original: entry)
   */
  entry(key: K): DefaultMapEntry<K, V> | DefaultMapInsertEntry<K, V> {
    return this.has(key)
      ? new DefaultMapEntry(key, this.get(key) as V)
      : new DefaultMapInsertEntry(key, this)
  }
}

/**
 * Instance state for object queries (original: class u)
 */
class ObjectInstanceState {
  emitter: any
  isInitialConnection: any
  serverFields: any
  shadowFields: any
  objectName: string
  serverId: any = null
  shadowMutations = new Set()
  shadowQueries = new Set()
  serverQueries = new Set()
  serverIdResolveList: any[] = []

  constructor(fields: any, hasShadow: boolean, objectName: string, emitter: any, isInitialConnection?: any) {
    this.emitter = emitter
    this.isInitialConnection = isInitialConnection
    this.serverFields = fields
    this.shadowFields = fields
    this.objectName = objectName
    if (!hasShadow) {
      this.serverId = fields.id
    }
  }

  /**
   * Checks if updatedAt is different (original: isUpdatedAtDifferent)
   */
  isUpdatedAtDifferent(fields: any): boolean {
    if (
      typeof this.serverFields.updatedAt !== 'undefined'
      && typeof fields.updatedAt !== 'undefined'
    ) {
      if (
        typeof this.serverFields.updatedAt === 'string'
        && typeof fields.updatedAt === 'string'
      ) {
        return this.serverFields.updatedAt !== fields.updatedAt
      }
      if (
        !(this.serverFields.updatedAt instanceof Date)
        || !(fields.updatedAt instanceof Date)
      ) {
        return true
      }
      return this.serverFields.updatedAt.getTime() !== fields.updatedAt.getTime()
    }
    return false
  }

  /**
   * Returns current fields (original: fields)
   */
  fields(): any {
    return this.shadowMutations.size === 0 ? this.serverFields : this.shadowFields
  }

  /**
   * Returns dependent queries (original: dependentQueries)
   */
  dependentQueries(): Set<any> {
    return this.shadowMutations.size === 0 ? this.serverQueries : this.shadowQueries
  }

  /**
   * Resolves pending server id list (original: resolvePendingServerIdList)
   */
  resolvePendingServerIdList(fields: any): void {
    this.serverId = fields.id
    for (const cb of this.serverIdResolveList) cb(this.serverId)
    this.serverIdResolveList = []
  }

  /**
   * Applies mutation to instance (original: applyMutation)
   */
  applyMutation(fields: any): void {
    if (this.isUpdatedAtDifferent(fields)) {
      const updatedAt = typeof fields.updatedAt === 'string' ? new Date(fields.updatedAt) : fields.updatedAt
      if (!isNaN(updatedAt.getTime())) {
        const now = new Date()
        const latency = now.getTime() - updatedAt.getTime()
        this.emitter.emit({
          type: 'SUBSCRIPTION_UPDATE_LATENCY',
          objectName: this.objectName,
          latencyMs: latency,
          currentTime: now,
          updatedAt,
          isInitialConnection: this.isInitialConnection?.(),
        })
      }
    }
    this.serverFields = { ...this.serverFields, ...fields }
    this.shadowFields = { ...this.shadowFields, id: fields.id }
    this.resolvePendingServerIdList(fields)
    if (this.shadowMutations.size === 0) {
      for (const query of this.dependentQueries().values()) {
        for (const observer of query.observers) {
          observer.onUpdateResult(this.serverFields, query.missingFields)
        }
      }
    }
  }

  /**
   * Applies shadow mutation (original: applyShadowMutation)
   */
  applyShadowMutation(transactionId: any, fields: any, patch: any): void {
    if (this.shadowMutations.size === 0) {
      this.shadowFields = { ...this.serverFields }
      this.shadowQueries = new Set(this.serverQueries)
    }
    this.shadowMutations.add(transactionId)
    if (patch) {
      this.shadowFields = { ...this.shadowFields, ...patch, ...fields }
    }
  }

  /**
   * Removes shadow mutation (original: removeShadowMutation)
   */
  removeShadowMutation(transactionId: any, clearAll: boolean): void {
    if (clearAll) {
      this.shadowMutations.delete(transactionId)
    }
    else {
      this.shadowMutations = new Set()
    }
  }

  /**
   * Returns server-side id, resolves if not present (original: getServerSideId)
   */
  getServerSideId(): Promise<any> {
    if (this.serverId)
      return Promise.resolve(this.serverId)
    const [promise, resolver] = createDeferredPromise()
    this.serverIdResolveList.push(resolver)
    return promise
  }
}

/**
 * Store for object queries and instances (original: class p)
 */
class ObjectStore {
  objectDef: any
  emitter: any
  useUnitTestBehaviors: boolean
  isInitialConnection: any

  instanceStates = new EntryMap<any, ObjectInstanceState>()
  instanceStatesByUuid = new EntryMap<any, ObjectInstanceState>()
  shadowInstances = new Set<ObjectInstanceState>()
  queryStates = new EntryMap<any, any>()
  possiblyOrphanedQueryResults = new EntryMap<any, any>()
  possiblyOrphanInstances = new Set<ObjectInstanceState>()

  constructor(objectDef: any, emitter: any, useUnitTestBehaviors: boolean, isInitialConnection: any) {
    this.objectDef = objectDef
    this.emitter = emitter
    this.useUnitTestBehaviors = useUnitTestBehaviors
    this.isInitialConnection = isInitialConnection
  }

  /**
   * Returns all query ids (original: getAllQueryIds)
   */
  getAllQueryIds(): any[] {
    return Array.from(this.queryStates.keys())
  }

  /**
   * Adds an instance to a query (original: addInstance)
   */
  addInstance(query: any, instance: ObjectInstanceState): void {
    this.emitter.emit({
      type: 'STORE.ADD_INSTANCE',
      objectName: this.objectDef.name,
      instance: instance.fields(),
    })
    ObjectStore.internalAssert(query.results.type !== 'failed', 'Instance added to a failed query')
    if (query.results.instances.has(instance)) {
      if (query.missingFields.length && query.results.type === 'loaded') {
        for (const observer of query.observers) {
          observer.onUpdateResult(instance.fields(), query.missingFields)
        }
      }
    }
    else {
      query.results.instances.add(instance)
      if (query.results.type === 'loaded') {
        for (const observer of query.observers) {
          observer.onAddResult(instance.fields(), query.missingFields)
        }
      }
      instance.dependentQueries().add(query)
    }
  }

  /**
   * Removes an instance from a query (original: removeInstance)
   */
  removeInstance(query: any, instance: ObjectInstanceState, restore: boolean): void {
    this.emitter.emit({
      type: 'STORE.REMOVE_INSTANCE',
      objectName: this.objectDef.name,
      instance: instance.fields(),
    })
    ObjectStore.internalAssert(query.results.type !== 'failed', 'Instance removed from a failed query')
    if (!query.results.instances.has(instance)) {
      throwAsyncIf(false, 'tried to remove instance that does not exist')
      return
    }
    query.results.instances.delete(instance)
    for (const observer of query.observers) {
      restore ? observer.onRemoveResult(instance.fields()) : observer.detachChild(instance.fields())
    }
    instance.dependentQueries().delete(query)
  }

  /**
   * Assembles results for a query (original: assembleResults)
   */
  assembleResults(query: any): Record<string, boolean> {
    const results: Record<string, boolean> = {}
    const { queryDef, query: queryObj } = query
    for (const instance of this.instanceStates.values()) {
      const allFieldsPresent = Array.from(queryDef.projectedFields.keys()).every(
        (field: string) => Object.keys(instance.fields()).includes(field) && queryObj.matches(instance.fields()),
      )
      if (allFieldsPresent) {
        results[instance.fields().id] = true
      }
    }
    return results
  }

  /**
   * Applies shadow mutation for add (original: applyShadowMutationAdd)
   */
  applyShadowMutationAdd(transactionId: any, id: any, patch: any): [any[], Set<any>] {
    const instance = this.instanceStates.entry(id).orInsertWith(
      () => new ObjectInstanceState({ id }, true, this.objectDef.name, this.emitter),
    )
    this.shadowInstances.add(instance)
    instance.applyShadowMutation(transactionId, { id }, patch)
    const affectedQueries: any[] = []
    const affectedObservers = new Set<any>()
    for (const [queryId, query] of this.queryStates.entries()) {
      if (query.query.matches(instance.fields()) && query.results.type === 'loaded') {
        affectedQueries.push(queryId)
        this.addInstance(query, instance)
        query.observers.forEach(o => affectedObservers.add(o))
      }
    }
    return [affectedQueries, affectedObservers]
  }

  /**
   * Applies shadow mutation for add with UUID (original: applyShadowMutationAddWithUUID)
   */
  applyShadowMutationAddWithUUID(transactionId: any, uuid: any, patch: any): [any[], Set<any>] {
    const instance = this.instanceStatesByUuid.entry(uuid).orInsertWith(
      () => new ObjectInstanceState({ id: uuid, uuid }, true, this.objectDef.name, this.emitter),
    )
    this.shadowInstances.add(instance)
    instance.applyShadowMutation(transactionId, { uuid }, { ...patch, id: uuid })
    const affectedQueries: any[] = []
    const affectedObservers = new Set<any>()
    for (const [queryId, query] of this.queryStates.entries()) {
      if (query.query.matches(instance.fields()) && query.results.type !== 'failed') {
        affectedQueries.push(queryId)
        this.addInstance(query, instance)
        query.observers.forEach(o => affectedObservers.add(o))
      }
    }
    return [affectedQueries, affectedObservers]
  }

  /**
   * Applies shadow mutation for delete (original: applyShadowMutationDelete)
   */
  applyShadowMutationDelete(transactionId: any, id: any, instance: ObjectInstanceState): [any[], Set<any>] {
    this.shadowInstances.add(instance)
    instance.applyShadowMutation(transactionId, { id }, null)
    const affectedQueries: any[] = []
    const affectedObservers = new Set<any>()
    for (const query of instance.dependentQueries().values()) {
      if (query.results.type !== 'failed') {
        this.removeInstance(query, instance, false)
        affectedQueries.push(query.queryId)
        query.observers.forEach(o => affectedObservers.add(o))
      }
    }
    return [affectedQueries, affectedObservers]
  }

  /**
   * Applies shadow mutation for delete with UUID (original: applyShadowMutationDeleteWithUUID)
   */
  applyShadowMutationDeleteWithUUID(transactionId: any, uuid: any, instance: ObjectInstanceState): [any[], Set<any>] {
    this.shadowInstances.add(instance)
    instance.applyShadowMutation(transactionId, { uuid }, null)
    const affectedQueries: any[] = []
    const affectedObservers = new Set<any>()
    for (const query of instance.dependentQueries().values()) {
      if (query.results.type !== 'failed') {
        this.removeInstance(query, instance, false)
        affectedQueries.push(query.queryId)
        query.observers.forEach(o => affectedObservers.add(o))
      }
    }
    return [affectedQueries, affectedObservers]
  }

  /**
   * Applies shadow mutation for update (original: applyShadowMutationUpdate)
   */
  applyShadowMutationUpdate(transactionId: any, id: any, instance: ObjectInstanceState, patch: any): [any[], Set<any>] {
    this.shadowInstances.add(instance)
    instance.applyShadowMutation(transactionId, { id }, patch)
    const fields = instance.fields()
    const affectedQueries: any[] = []
    const affectedObservers = new Set<any>()
    for (const query of this.queryStates.values()) {
      if (query.results.type !== 'failed') {
        if (query.results.instances.has(instance)) {
          if (query.query.matches(fields)) {
            for (const observer of query.observers) observer.onUpdateResult(fields, query.missingFields)
          }
          else {
            this.removeInstance(query, instance, false)
          }
          query.observers.forEach(o => affectedObservers.add(o))
          affectedQueries.push(query.queryId)
        }
        else {
          if (query.query.matches(fields)) {
            this.addInstance(query, instance)
            query.observers.forEach(o => affectedObservers.add(o))
            affectedQueries.push(query.queryId)
          }
        }
      }
    }
    return [affectedQueries, affectedObservers]
  }

  /**
   * Applies shadow mutation for update with UUID (original: applyShadowMutationUpdateWithUUID)
   */
  applyShadowMutationUpdateWithUUID(transactionId: any, uuid: any, instance: ObjectInstanceState, patch: any): [any[], Set<any>] {
    this.shadowInstances.add(instance)
    instance.applyShadowMutation(transactionId, { uuid }, patch)
    const fields = instance.fields()
    const affectedQueries: any[] = []
    const affectedObservers = new Set<any>()
    for (const query of this.queryStates.values()) {
      if (query.results.type !== 'failed') {
        if (query.results.instances.has(instance)) {
          if (query.query.matches(fields)) {
            for (const observer of query.observers) observer.onUpdateResult(fields, query.missingFields)
          }
          else {
            this.removeInstance(query, instance, false)
          }
          query.observers.forEach(o => affectedObservers.add(o))
          affectedQueries.push(query.queryId)
        }
        else {
          if (query.query.matches(fields)) {
            this.addInstance(query, instance)
            query.observers.forEach(o => affectedObservers.add(o))
            affectedQueries.push(query.queryId)
          }
        }
      }
    }
    return [affectedQueries, affectedObservers]
  }

  /**
   * Removes shadow mutations (original: removeShadowMutations)
   */
  removeShadowMutations(transactionId: any, mutations: Record<string, any>, clearAll: boolean): void {
    for (const id in mutations) {
      const instance = this.instanceStates.get(id)
      if (
        typeof instance !== 'undefined'
        && instance.shadowMutations.has(transactionId)
        && (instance.removeShadowMutation(transactionId, clearAll), instance.shadowMutations.size === 0)
      ) {
        this.shadowInstances.delete(instance)
        const fields = instance.fields()
        for (const query of instance.dependentQueries().values()) {
          for (const observer of query.observers) observer.restoreChild(fields)
        }
        for (const query of this.queryStates.values()) {
          if (query.results.type !== 'failed') {
            if (query.results.instances.has(instance)) {
              if (instance.dependentQueries().has(query)) {
                for (const observer of query.observers) observer.onUpdateResult(fields, query.missingFields)
              }
              else {
                this.removeInstance(query, instance, true)
              }
            }
            else {
              if (instance.dependentQueries().has(query))
                this.addInstance(query, instance)
            }
          }
        }
        this.checkOrphanInstance(instance)
      }
    }
  }

  /**
   * Removes shadow mutations with UUID (original: removeShadowMutationsWithUUID)
   */
  removeShadowMutationsWithUUID(transactionId: any, mutations: Record<string, any>, clearAll: boolean): void {
    for (const uuid in mutations) {
      const instance = this.instanceStatesByUuid.get(uuid)
      if (
        typeof instance !== 'undefined'
        && instance.shadowMutations.has(transactionId)
        && (instance.removeShadowMutation(transactionId, clearAll), instance.shadowMutations.size === 0)
      ) {
        this.shadowInstances.delete(instance)
        const fields = instance.fields()
        for (const query of instance.dependentQueries().values()) {
          for (const observer of query.observers) observer.restoreChild(fields)
        }
        for (const query of this.queryStates.values()) {
          if (query.results.type !== 'failed') {
            if (query.results.instances.has(instance)) {
              if (instance.dependentQueries().has(query)) {
                for (const observer of query.observers) observer.onUpdateResult(fields, query.missingFields)
              }
              else {
                this.removeInstance(query, instance, true)
              }
            }
            else {
              if (instance.dependentQueries().has(query))
                this.addInstance(query, instance)
            }
          }
        }
        this.checkOrphanInstance(instance)
      }
    }
  }

  /**
   * Resolves pending server id list (original: resolvePendingServerIdList)
   */
  resolvePendingServerIdList(instances: Record<string, any>): void {
    for (const obj of Object.values(instances)) {
      const plainObj = this.objectDef.readPlainObject(obj)
      if (plainObj.uuid && this.instanceStatesByUuid.has(plainObj.uuid)) {
        this.instanceStatesByUuid.get(plainObj.uuid).resolvePendingServerIdList(plainObj)
      }
    }
  }

  /**
   * Applies mutations to instances and queries (original: applyMutations)
   */
  applyMutations(instances: Record<string, any>, queries: Record<string, any>): void {
    for (const [id, obj] of Object.entries(instances)) {
      const plainObj = this.objectDef.readPlainObject(obj)
      if (this.instanceStates.has(id)) {
        this.instanceStates.get(id).applyMutation(plainObj)
      }
      else if (plainObj.uuid && this.instanceStatesByUuid.has(plainObj.uuid)) {
        const instance = this.instanceStatesByUuid.get(plainObj.uuid)
        this.instanceStates.set(plainObj.id, instance)
        instance.applyMutation(plainObj)
      }
      else {
        const instance = new ObjectInstanceState(plainObj, false, this.objectDef.name, this.emitter, this.isInitialConnection)
        if (plainObj.uuid)
          this.instanceStatesByUuid.set(plainObj.uuid, instance)
        this.instanceStates.set(plainObj.id, instance)
        this.possiblyOrphanInstances.add(instance)
      }
    }
    for (const [queryId, queryState] of Object.entries(queries)) {
      if (!this.queryStates.has(queryId)) {
        this.possiblyOrphanedQueryResults.set(queryId, queryState)
        continue
      }
      const query = this.queryStates.get(queryId)
      this.setQueryStateResults(query, queryState, instances)
    }
  }

  /**
   * Applies mutations for unit tests (original: applyMutations__UNIT_TEST)
   */
  applyMutations__UNIT_TEST(instances: Record<string, any>): void {
    if (!this.useUnitTestBehaviors)
      throw new Error('applyMutations__UNIT_TEST called when useUnitTestBehaviors is false')
    for (const [id, obj] of Object.entries(instances)) {
      if (obj === null) {
        this.instanceStates.delete(id)
        continue
      }
      const plainObj = { id, ...obj }
      if (this.instanceStates.has(id)) {
        this.instanceStates.get(id).applyMutation(plainObj)
      }
      else if (plainObj.uuid && this.instanceStatesByUuid.has(plainObj.uuid)) {
        const instance = this.instanceStatesByUuid.get(plainObj.uuid)
        this.instanceStates.set(plainObj.id, instance)
        instance.applyMutation(plainObj)
      }
      else {
        const instance = new ObjectInstanceState(plainObj, false, this.objectDef.name, this.emitter)
        if (plainObj.uuid)
          this.instanceStatesByUuid.set(plainObj.uuid, instance)
        this.instanceStates.set(plainObj.id, instance)
        this.possiblyOrphanInstances.add(instance)
      }
    }
    for (const query of this.queryStates.values()) {
      const results = this.assembleResults(query)
      this.setQueryStateResults(query, { results, fullResults: true })
    }
  }

  /**
   * Subscribes to a query (original: subscribe)
   */
  subscribe(queryObj: any, observer: any): () => void {
    const queryState = this.queryStates.entry(queryObj.queryId).orInsertWith(() => ({
      queryId: queryObj.queryId,
      results: {
        type: 'loading',
        instances: new Set(),
      },
      query: queryObj.substituted(),
      queryDef: queryObj.queryDef,
      observers: new Set(),
      missingFields: [],
    }))
    ObjectStore.internalAssert(!queryState.observers.has(observer), 'Duplicate subscription for query id')
    queryState.observers.add(observer)

    if (this.useUnitTestBehaviors) {
      this.setQueryStateResults(queryState, {
        results: this.assembleResults(queryState),
        fullResults: true,
      })
    }
    else if (this.possiblyOrphanedQueryResults.has(queryObj.queryId)) {
      this.setQueryStateResults(queryState, this.possiblyOrphanedQueryResults.get(queryObj.queryId))
      this.possiblyOrphanedQueryResults.delete(queryObj.queryId)
    }
    else if (queryState.results.type === 'loaded') {
      const results: Record<string, any> = {}
      for (const instance of queryState.results.instances.values()) {
        const fields = instance.fields()
        results[fields.id] = fields
      }
      observer.onInitialResults(results, undefined, queryState.missingFields)
    }
    else if (queryState.results.type === 'failed') {
      observer.onError(queryState.results.error)
    }

    return () => {
      ObjectStore.internalAssert(queryState.observers.has(observer), 'Duplicate unsubscription for query')
      queryState.observers.delete(observer)
      if (queryState.observers.size === 0) {
        if (queryState.results.type !== 'failed') {
          for (const instance of queryState.results.instances.values()) {
            instance.dependentQueries().delete(queryState)
            this.checkOrphanInstance(instance)
          }
        }
        this.queryStates.delete(queryObj.queryId)
      }
    }
  }

  /**
   * Gets id from uuid (original: getIdFromUuid)
   */
  getIdFromUuid(uuid: any): Promise<any> {
    if (!this.instanceStatesByUuid.has(uuid)) {
      throw new Error(`uuid ${uuid} doesn't exist in object store ${this.objectDef.name}`)
    }
    return this.instanceStatesByUuid.get(uuid).getServerSideId()
  }

  /**
   * Sets query state results (original: setQueryStateResults)
   */
  setQueryStateResults(query: any, state: any, _instances?: Record<string, any>): void {
    if ('error' in state) {
      if (query.results.type !== 'loaded') {
        query.results = {
          type: 'failed',
          error: state.error,
        }
        for (const observer of query.observers) observer.onError(state.error)
      }
      return
    }
    const { results, fullResults, pagination, missingFields } = state
    if (missingFields) {
      query.missingFields = query.missingFields.concat(missingFields)
    }
    if (query.results.type === 'loaded') {
      for (const [id, present] of Object.entries(results)) {
        if (!this.instanceStates.has(id)) {
          throwAsyncIf(this.instanceStates.has(id), `objectId is missing from ${this.objectDef.name} store`, {
            objectId: id,
            queryResults: JSON.stringify(state),
          })
          continue
        }
        const instance = this.instanceStates.get(id)
        if (this.shadowInstances.has(instance)) {
          if (present === true)
            instance.serverQueries.add(query)
          else instance.serverQueries.delete(query)
          continue
        }
        if (present === true) {
          this.addInstance(query, instance)
        }
        else {
          this.removeInstance(query, instance, true)
          this.possiblyOrphanInstances.add(instance)
        }
      }
      if (fullResults) {
        for (const instance of query.results.instances) {
          if (!this.shadowInstances.has(instance) && !results[instance.fields().id]) {
            this.removeInstance(query, instance, true)
            this.possiblyOrphanInstances.add(instance)
          }
        }
        for (const instance of this.shadowInstances.values()) {
          if (!results[instance.fields().id])
            instance.serverQueries.delete(query)
        }
      }
    }
    else {
      if (!fullResults) {
        console.error('[Livegraph] Partial results received while query is in a non-loaded state', {
          queryState: query.results.type,
          queryId: query.queryId,
        })
      }
      ObjectStore.internalAssert(fullResults, 'Partial results received while query is in a non-loaded state', {
        queryState: query.results.type,
        queryId: query.queryId,
      })
      query.results = {
        type: 'loaded',
        instances: query.results.type === 'loading' ? query.results.instances : new Set(),
      }
      const resultFields: Record<string, any> = {}
      for (const id in results) {
        ObjectStore.internalAssert(results[id], 'Pending mutations for objectId is falsy')
        ObjectStore.internalAssert(this.instanceStates.has(id), 'Query result contains id not found in instanceStates')
        const instance = this.instanceStates.get(id)
        instance.serverQueries.add(query)
        if (!this.shadowInstances.has(instance)) {
          resultFields[id] = instance.fields()
          query.results.instances.add(instance)
        }
      }
      for (const instance of this.shadowInstances.values()) {
        const fields = instance.fields()
        if (query.query.matches(fields))
          resultFields[fields.id] = fields
      }
      for (const observer of query.observers) observer.onInitialResults(resultFields, pagination, missingFields)
    }
  }

  /**
   * Cleans up orphaned instances and query results (original: cleanupOrphans)
   */
  cleanupOrphans(): void {
    this.possiblyOrphanedQueryResults.clear()
    for (const instance of this.possiblyOrphanInstances) {
      this.checkOrphanInstance(instance)
    }
  }

  /**
   * Checks if an instance is orphaned and removes it (original: checkOrphanInstance)
   */
  checkOrphanInstance(instance: ObjectInstanceState): void {
    const hasId = this.instanceStates.has(instance.fields().id)
    const isSame = this.instanceStates.get(instance.fields().id) === instance
    const noDeps = instance.dependentQueries().size === 0
    const notShadow = !this.shadowInstances.has(instance)
    if (hasId && isSame && noDeps && notShadow) {
      this.instanceStates.delete(instance.fields().id)
      const uuid = instance.fields().uuid
      if (uuid)
        this.instanceStatesByUuid.delete(uuid)
    }
  }

  /**
   * Throws if condition is true (original: internalAssert)
   */
  static internalAssert(condition: boolean, message: string, details?: any): void {
    throwIf(condition, message, details)
  }
}

/**
 * Regex patterns for session and anonymous user IDs (original: let f, let _)
 */
const SESSION_ID_REGEX = /(,"sessionId":"session-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}")/
const ANONYMOUS_USER_ID_REGEX = /(,"anonymousUserId":(null|"[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"))/

/**
 * State for a computation subscription (original: states)
 */
interface ComputationState {
  state: {
    type: 'loading' | 'loaded' | 'failed'
    value?: any
    errors?: Array<{
      code: string
      path: string[]
      error: Error
      retriable?: boolean
    }>
  }
  observers: Set<any>
}

/**
 * Store for computed field subscriptions (original: class $$A)
 */
export class ComputationStore {
  objectDef: ObjectTypeDefinition
  states: DefaultEntryMap<string, ComputationState>

  constructor(objectDef: any) {
    this.objectDef = objectDef
    this.states = new DefaultEntryMap<string, ComputationState>(() => ({
      state: { type: 'loading' },
      observers: new Set(),
    }))
  }

  /**
   * Removes session and anonymous user IDs from the computation key (original: stripSessionArgs)
   */
  stripSessionArgs(key: string): string {
    return key.replace(SESSION_ID_REGEX, '').replace(ANONYMOUS_USER_ID_REGEX, '')
  }

  /**
   * Applies mutations to computation states (original: applyMutations)
   */
  applyMutations(mutations: Record<string, any>): void {
    for (const [rawKey, mutation] of Object.entries(mutations)) {
      let key = this.stripSessionArgs(rawKey)
      const stateEntry = this.states.entry(key).orDefault()

      if ('error' in mutation) {
        if (stateEntry.state.type !== 'loaded') {
          stateEntry.state = {
            type: 'failed',
            errors: [{
              code: 'computedFieldError',
              path: ['computedFieldFunction'],
              error: new Error(mutation.error.message),
              retriable: mutation.error.retriable,
            }],
          }
        }
      }
      else {
        const { value, fieldName } = mutation
        if (this.objectDef.fields.has(fieldName)) {
          // let computedValue = this.objectDef.readPlainObjectField(fieldName, value)
          const fieldDef = this.objectDef.fields.get(fieldName)
          if (
            fieldDef instanceof ComputedFieldDef
            && fieldDef?.isComputedObject()
            && value
            && typeof value === 'object'
            && stateEntry.state.type === 'loaded'
          ) {
            stateEntry.state = {
              type: 'loaded',
              value: deepmerge(stateEntry.state.value, value, {
                arrayMerge: (_old, newArr) => newArr,
              }),
            }
          }
          else {
            stateEntry.state = {
              type: 'loaded',
              value,
            }
          }
        }
      }

      for (const observer of stateEntry.observers.values()) {
        if (stateEntry.state.type === 'loaded') {
          observer.onUpdateResult(stateEntry.state.value)
        }
        else if (stateEntry.state.type === 'failed') {
          observer.onErrors(stateEntry.state.errors)
        }
      }
    }
  }

  /**
   * Subscribes to a computation (original: subscribe)
   */
  subscribe(
    { computationId }: { computationId: string },
    observer: any,
  ): () => void {
    const key = this.stripSessionArgs(computationId)
    const stateEntry = this.states.entry(key).orDefault()
    throwIf(stateEntry.observers.has(observer), 'Duplicate subscription for computation')
    stateEntry.observers.add(observer)

    if (stateEntry.state.type === 'loaded') {
      observer.onUpdateResult(stateEntry.state.value)
    }
    else if (stateEntry.state.type === 'failed') {
      observer.onErrors(stateEntry.state.errors)
    }

    return () => {
      stateEntry.observers.delete(observer)
      if (stateEntry.observers.size === 0) {
        this.states.delete(key)
      }
    }
  }
}

/**
 * Subscription for a view (original: class b)
 */
export class ViewSubscription {
  key: string
  viewRef: any
  viewDef: any
  context: any
  traceId: any
  view: LiveViewNode
  subscriptions: any[] = []

  constructor(
    key: string,
    viewRef: any,
    viewDef: any,
    context: any,
    emitter: any,
    traceId: any,
  ) {
    this.key = key
    this.viewRef = viewRef
    this.viewDef = viewDef
    this.context = context
    this.traceId = traceId
    this.view = new LiveViewNode(key, viewDef, context, emitter)
  }

  /**
   * Returns all subscription observers (original: getSubscriptionObservers)
   */
  getSubscriptionObservers(): any[] {
    return this.subscriptions
  }

  /**
   * Adds a subscription observer (original: addSubscription)
   */
  addSubscription(subscription: any): void {
    this.subscriptions.push(subscription)
  }

  /**
   * Removes a subscription observer (original: removeSubscription)
   */
  removeSubscription(subscription: any): void {
    this.subscriptions = this.subscriptions.filter(s => s !== subscription)
  }

  /**
   * Returns view arguments (original: viewArgs)
   */
  viewArgs(): any {
    return this.view.viewArgs
  }

  /**
   * Returns the active view node (original: activeView)
   */
  activeView(): LiveViewNode {
    return this.view
  }

  /**
   * Marks an optional field as missing (original: setOptionalMissing)
   */
  setOptionalMissing(field: string): void {
    if (this.context.options) {
      if (!this.context.options.forceMissingOptionals) {
        this.context.options.forceMissingOptionals = []
      }
      this.context.options.forceMissingOptionals.push(field)
    }
  }

  /**
   * Unsets all optional missing fields (original: unsetOptionalMissing)
   */
  unsetOptionalMissing(): void {
    if (this.context.options) {
      this.context.options.forceMissingOptionals = []
    }
  }

  /**
   * Enables view caching (original: enableViewCaching)
   */
  enableViewCaching(): void {
    if (this.context.options) {
      this.context.options.bustViewCache = false
    }
  }

  /**
   * Disables view caching (original: disableViewCaching)
   */
  disableViewCaching(): void {
    if (this.context.options) {
      this.context.options.bustViewCache = true
    }
  }

  /**
   * Destroys the view node (original: destroy)
   */
  destroy(): void {
    this.view.destroy()
  }
}

/**
 * Context for a view (original: class S)
 */
export class ViewContext {
  viewKey: string
  sessionArgs: any
  viewArgs: any
  options: any

  constructor(viewKey: string, sessionArgs: any = {}, viewArgs: any = {}, options?: any) {
    this.viewKey = viewKey
    this.sessionArgs = sessionArgs
    this.viewArgs = viewArgs
    this.options = options
  }
}
/**
 * Logger for view context events (original: class C)
 */
class ContextLogger {
  emitter: any

  constructor(emitter: any) {
    this.emitter = emitter
  }

  /**
   * Logs critical and page events (original: criticalAndPage)
   */
  criticalAndPage(_event: any): void {
    // Implement as needed
  }

  /**
   * Logs error events (original: error)
   */
  error(_event: any): void {
    // Implement as needed
  }

  /**
   * Logs warning events (original: warn)
   */
  warn(_event: any): void {
    // Implement as needed
  }

  /**
   * Logs info events (original: info)
   */
  info(_event: any): void {
    // Implement as needed
  }

  /**
   * Logs debug events (original: debug)
   */
  debug(eventType: string, ...args: any[]): void {
    switch (eventType) {
      case 'VIEW_QUERY_NODE.ADD_RESULT':
      case 'VIEW_QUERY_NODE.UPDATE_RESULT':
      case 'VIEW_QUERY_NODE.REMOVE_RESULT':
        this.emitter.emit({
          type: eventType,
          queryId: args[0],
          instance: args[1],
        })
        break
      case 'VIEW_QUERY_NODE.INITIAL_RESULT':
        this.emitter.emit({
          type: eventType,
          queryId: args[0],
          instances: args[1],
        })
        break
      default:
        // No-op for other debug events
        break
    }
  }
}

/**
 * Main session store for managing views, queries, computations, and subscriptions (original: class $$T0)
 */
export class MainSessionStore {
  args: any
  schema: any
  viewRegistry: any
  emitter: any
  onPaginationChange: any
  isInitialConnection: any
  onRetriableViewFailure: any
  getRetryCountOnResult: any
  analyticsLogger: any
  shouldBubbleUpNonNullableResultErrors: any
  errorsLoggedForAnalyticsFraction: any
  useUnitTestBehaviors: any
  contextLogger: ContextLogger
  stores: Record<string, { queries: ObjectStore; computations: ComputationStore }>
  viewSubscriptions: Map<string, ViewSubscription> = new Map()
  failedViewSubscriptions: Map<string, ViewSubscription> = new Map()
  forceMissingOptionalsForViews: Map<string, string[]> = new Map()
  nextSubscriptionId = 1
  paginationQueryNodeMap: Map<any, any> = new Map()
  computationObjectNodes: Record<string, any[]> = {}
  isInMutationBatch = false
  shouldNotifyOnMutationBatchCompletion = false

  constructor(
    args: any,
    schema: any,
    viewRegistry: any,
    emitter: any,
    onPaginationChange: any,
    isInitialConnection: any,
    onRetriableViewFailure: any,
    getRetryCountOnResult: any,
    analyticsLogger: any,
    shouldBubbleUpNonNullableResultErrors: any,
    errorsLoggedForAnalyticsFraction: any,
    useUnitTestBehaviors: any,
  ) {
    this.args = args
    this.schema = schema
    this.viewRegistry = viewRegistry
    this.emitter = emitter
    this.onPaginationChange = onPaginationChange
    this.isInitialConnection = isInitialConnection
    this.onRetriableViewFailure = onRetriableViewFailure
    this.getRetryCountOnResult = getRetryCountOnResult
    this.analyticsLogger = analyticsLogger
    this.shouldBubbleUpNonNullableResultErrors = shouldBubbleUpNonNullableResultErrors
    this.errorsLoggedForAnalyticsFraction = errorsLoggedForAnalyticsFraction
    this.useUnitTestBehaviors = useUnitTestBehaviors
    this.contextLogger = new ContextLogger(this.emitter)
    this.stores = {}

    for (const [objectName, objectDef] of schema.objects) {
      this.stores[objectName] = {
        queries: new ObjectStore(objectDef, this.emitter, !!this.useUnitTestBehaviors, this.isInitialConnection),
        computations: new ComputationStore(objectDef),
      }
    }
  }

  /**
   * Returns all query ids across all stores (original: getAllQueryIds)
   */
  getAllQueryIds(): any[] {
    const ids: any[] = []
    for (const store of Object.values(this.stores)) {
      if (store) ids.push(...store.queries.getAllQueryIds())
    }
    return ids
  }

  /**
   * Resolves pending server id list for all stores (original: resolvePendingServerIdList)
   */
  resolvePendingServerIdList(mutations: Record<string, any>): void {
    for (const [objectName, mutation] of Object.entries(mutations)) {
      const store = this.getStores(objectName)
      if (store) store.queries.resolvePendingServerIdList(mutation.instances)
    }
  }

  /**
   * Applies mutations to all stores (original: applyMutations)
   */
  applyMutations(mutations: Record<string, any>): void {
    this.emitter.emit({
      type: 'SESSION.APPLY_MUTATIONS',
      mutations,
    })
    for (const [objectName, mutation] of Object.entries(mutations)) {
      const { instances, queries, computations } = mutation
      const store = this.getStores(objectName)
      if (store) {
        store.queries.applyMutations(instances, queries)
        store.computations.applyMutations(computations)
      }
    }
    this.notifyObservers()
    for (const objectName of Object.keys(mutations)) {
      const store = this.getStores(objectName)
      if (store) store.queries.cleanupOrphans()
    }
  }

  /**
   * Applies mutations for unit tests (original: applyMutations__UNIT_TEST)
   */
  applyMutations__UNIT_TEST(mutations: Record<string, any>): void {
    for (const [objectName, instances] of Object.entries(mutations)) {
      const store = this.getStores(objectName)
      if (store) store.queries.applyMutations__UNIT_TEST(instances)
    }
    this.notifyObservers()
  }

  /**
   * Applies shadow mutations (original: applyShadowMutations)
   */
  applyShadowMutations(transactionId: any, mutations: Record<string, any>, operationType: string): [Map<string, Set<any>>, Record<string, any>, Set<any>] {
    this.emitter.emit({
      type: 'SESSION.APPLY_SHADOW_MUTATIONS',
      transactionId,
      mutations,
      operationType,
    })
    const affectedQueries = new Map<string, Set<any>>()
    const affectedObservers = new Set<any>()
    const computedFields: Record<string, any> = {}
    const viewStatuses: Record<string, any> = {}

    for (const [key, subscription] of this.viewSubscriptions.entries()) {
      viewStatuses[key] = subscription.activeView().root.result().status
    }

    this.transformComputedObjectMutations(mutations, operationType)

    const collectComputedFields = (
      isAdd: boolean,
      objectName: string,
      instanceId: any,
      patch: any,
    ) => {
      for (const fieldName of Object.keys(patch)) {
        const fieldDef = this.schema.objects.get(objectName)?.fields.get(fieldName)
        if (fieldDef && isComputedField(fieldDef)) {
          if (!computedFields[objectName]) {
            computedFields[objectName] = {
              instanceIds: isAdd ? undefined : [],
              fieldNames: [],
            }
          }
          if (!isAdd && !computedFields[objectName].instanceIds?.includes(instanceId)) {
            computedFields[objectName].instanceIds?.push(instanceId)
          }
          if (!computedFields[objectName].fieldNames.includes(fieldName)) {
            computedFields[objectName].fieldNames.push(fieldName)
          }
        }
      }
    }

    for (const [objectName, objectMutations] of Object.entries(mutations)) {
      const store = this.getStores(objectName)
      if (store) {
        for (const [instanceId, patch] of Object.entries(objectMutations)) {
          const instance = store.queries.instanceStates.get(instanceId)
          if (instance === undefined) {
            if (operationType === 'update' || operationType === 'delete') {
              console.warn(`Update/delete triggered on non-existent instance of object type ${objectName}, id ${instanceId}`)
              continue
            }
            throwIf(patch, 'Optimistic mutation is not defined')
            const [queryIds, observers] = store.queries.applyShadowMutationAdd(transactionId, instanceId, patch)
            for (const qid of queryIds) getOrCreateSet(affectedQueries, objectName).add(qid)
            observers.forEach(o => affectedObservers.add(o))
            collectComputedFields(true, objectName, instanceId, patch)
          } else if (patch === null) {
            const [queryIds, observers] = store.queries.applyShadowMutationDelete(transactionId, instanceId, instance)
            for (const qid of queryIds) getOrCreateSet(affectedQueries, objectName).add(qid)
            observers.forEach(o => affectedObservers.add(o))
          } else {
            const [queryIds, observers] = store.queries.applyShadowMutationUpdate(transactionId, instanceId, instance, patch)
            for (const qid of queryIds) getOrCreateSet(affectedQueries, objectName).add(qid)
            observers.forEach(o => affectedObservers.add(o))
            collectComputedFields(false, objectName, instanceId, patch)
          }
        }
      }
    }

    const loadedToLoadingViews: string[] = []
    const loadingPaths: any[] = []
    for (const [key, subscription] of this.viewSubscriptions.entries()) {
      if (
        viewStatuses[key] === 'loaded' &&
        subscription.activeView().root.result().status === 'loading'
      ) {
        loadedToLoadingViews.push(subscription.activeView().root.queryDef.objectFieldDef.name)
        loadingPaths.push(subscription.activeView().root.getLoadingPathsForDebugging())
      }
    }
    if (loadedToLoadingViews.length > 0) {
      this.emitter.emit({
        type: 'SESSION.OPTIMISTIC_UPDATE_INSUFFICIENT_DATA',
        loadedToLoadingViews,
        loadingPaths,
      })
    }
    this.notifyObservers()
    return [affectedQueries, computedFields, affectedObservers]
  }

  /**
   * Removes shadow mutations (original: removeShadowMutations)
   */
  removeShadowMutations(transactionId: any, mutations: Record<string, any>, success: boolean): void {
    this.emitter.emit({
      type: 'SESSION.REMOVE_SHADOW_MUTATIONS',
      transactionId,
      mutations,
      success,
    })
    for (const [objectName, mutation] of Object.entries(mutations)) {
      const store = this.getStores(objectName)
      if (store) store.queries.removeShadowMutations(transactionId, mutation, success)
    }
    this.notifyObservers()
  }

  /**
   * Applies shadow mutations with UUID (original: applyShadowMutationsWithUUID)
   */
  applyShadowMutationsWithUUID(transactionId: any, mutations: Record<string, any>, operationType: string): [Map<string, Set<any>>, Record<string, any>, Set<any>] {
    this.emitter.emit({
      type: 'SESSION.APPLY_SHADOW_MUTATIONS',
      transactionId,
      mutations,
      operationType,
    })
    const affectedQueries = new Map<string, Set<any>>()
    const computedFields: Record<string, any> = {}
    const viewStatuses: Record<string, any> = {}
    const affectedObservers = new Set<any>()

    for (const [key, subscription] of this.viewSubscriptions.entries()) {
      viewStatuses[key] = subscription.activeView().root.result().status
    }

    const collectComputedFields = (
      objectName: string,
      uuid: any,
      patch: any,
    ) => {
      for (const fieldName of Object.keys(patch)) {
        const fieldDef = this.schema.objects.get(objectName)?.fields.get(fieldName)
        if (fieldDef && isComputedField(fieldDef)) {
          if (!computedFields[objectName]) {
            computedFields[objectName] = {
              instanceUuids: [],
              fieldNames: [],
            }
          }
          if (!computedFields[objectName].instanceUuids.includes(uuid)) {
            computedFields[objectName].instanceUuids.push(uuid)
          }
          if (!computedFields[objectName].fieldNames.includes(fieldName)) {
            computedFields[objectName].fieldNames.push(fieldName)
          }
        }
      }
    }

    for (const [objectName, objectMutations] of Object.entries(mutations)) {
      if (objectName in this.schema.computedObjectFields) {
        console.warn(`UUID optimistic updates for computed objects are not supported. Optimistically updating computed object '${objectName}' may not work`)
        continue
      }
      const store = this.getStores(objectName)
      if (store) {
        for (const [uuid, patch] of Object.entries(objectMutations)) {
          const instance = store.queries.instanceStatesByUuid.get(uuid)
          if (instance === undefined) {
            if (operationType === 'update' || operationType === 'delete') {
              console.warn(`Update/delete triggered on non-existent instance of object type ${objectName}, uuid ${uuid}`)
              continue
            }
            throwIf(patch, 'Optimistic uuid mutation is not defined')
            const [queryIds, observers] = store.queries.applyShadowMutationAddWithUUID(transactionId, uuid, patch)
            for (const qid of queryIds) getOrCreateSet(affectedQueries, objectName).add(qid)
            observers.forEach(o => affectedObservers.add(o))
            collectComputedFields(objectName, uuid, patch)
          } else if (operationType === 'delete') {
            const [queryIds, observers] = store.queries.applyShadowMutationDeleteWithUUID(transactionId, uuid, instance)
            for (const qid of queryIds) getOrCreateSet(affectedQueries, objectName).add(qid)
            observers.forEach(o => affectedObservers.add(o))
          } else if (patch !== null) {
            const [queryIds, observers] = store.queries.applyShadowMutationUpdateWithUUID(transactionId, uuid, instance, patch)
            for (const qid of queryIds) getOrCreateSet(affectedQueries, objectName).add(qid)
            observers.forEach(o => affectedObservers.add(o))
            collectComputedFields(objectName, uuid, patch)
          }
        }
      }
    }

    const loadedToLoadingViews: string[] = []
    const loadingPaths: any[] = []
    for (const [key, subscription] of this.viewSubscriptions.entries()) {
      if (
        viewStatuses[key] === 'loaded' &&
        subscription.activeView().root.result().status === 'loading'
      ) {
        loadedToLoadingViews.push(subscription.activeView().root.queryDef.objectFieldDef.name)
        loadingPaths.push(subscription.activeView().root.getLoadingPathsForDebugging())
      }
    }
    if (loadedToLoadingViews.length > 0) {
      this.emitter.emit({
        type: 'SESSION.OPTIMISTIC_UPDATE_INSUFFICIENT_DATA',
        loadedToLoadingViews,
        loadingPaths,
      })
    }
    this.notifyObservers()
    return [affectedQueries, computedFields, affectedObservers]
  }

  /**
   * Transforms computed object mutations (original: transformComputedObjectMutations)
   */
  transformComputedObjectMutations(mutations: Record<string, any>, operationType: string): void {
    for (const [objectName, objectMutations] of Object.entries(mutations)) {
      if (objectName in this.schema.computedObjectFields) {
        for (const [id, patch] of Object.entries(objectMutations)) {
          const nodes: any[] = []
          for (const node of this.computationObjectNodes[objectName] ?? []) {
            if (node.computedObject?.id === id) {
              nodes.push(node)
              break
            }
          }
          if (nodes.length === 0) {
            if (operationType === 'update' || operationType === 'delete') {
              console.warn(`Update/delete triggered on non-existent instance of computed object type ${objectName}, id ${id}`)
              continue
            }
            for (const field of this.schema.computedObjectFields[objectName] ?? []) {
              for (const obj of Object.values(mutations[field.parentName] ?? {})) {
                if (obj && obj[field.fieldName]?.id === id) {
                  obj[field.fieldName] = patch
                }
              }
            }
          } else {
            for (const node of nodes) {
              const parent = node.parent
              const parentName = parent.queryDef.name
              const instanceId = parent.instance.id
              const instanceUuid = parent.instance.uuid
              mutations[parentName] ||= {}
              let obj = mutations[parentName]?.[instanceId]
              if (!obj && instanceUuid) obj = mutations[parentName]?.[instanceUuid]
              if (!obj) {
                obj = {}
                mutations[parentName][instanceId] = obj
              }
              if (patch === null) {
                obj[node.fieldName] = null
              } else {
                obj[node.fieldName] = {
                  ...(node.computedObject ?? {}),
                  ...patch,
                }
              }
            }
          }
        }
        delete mutations[objectName]
      }
    }
  }

  /**
   * Removes shadow mutations with UUID (original: removeShadowMutationsWithUUID)
   */
  removeShadowMutationsWithUUID(transactionId: any, mutations: Record<string, any>, success: boolean): void {
    this.emitter.emit({
      type: 'SESSION.REMOVE_SHADOW_MUTATIONS',
      transactionId,
      mutations,
      success,
    })
    for (const [objectName, mutation] of Object.entries(mutations)) {
      const store = this.getStores(objectName)
      if (store) store.queries.removeShadowMutationsWithUUID(transactionId, mutation, success)
    }
    this.notifyObservers()
  }

  /**
   * Gets id from uuid for a given object (original: getIdFromUuid)
   */
  getIdFromUuid(objectName: string, uuid: any): Promise<any> {
    const store = this.getStores(objectName)
    if (!store) throw new Error(`objectName ${objectName} doesn't exist`)
    return store.queries.getIdFromUuid(uuid)
  }

  /**
   * Gets view definition by view reference (original: getViewDef)
   */
  getViewDef(viewRef: any): any {
    const viewDef = this.viewRegistry.get(viewRef._name)
    if (!viewDef) throw new Error(`View with name ${viewRef._name} not found`)
    return viewDef
  }

  /**
   * Gets view result by view reference and args (original: getViewResult)
   */
  getViewResult(viewRef: any, args: any): any {
    const key = serializeArgs(this.getViewDef(viewRef).name, args)
    return this.viewSubscriptions.has(key)
      ? this.viewSubscriptions.get(key)!.activeView().result()
      : null
  }

  /**
   * Gets view result by view name and args (original: getViewResultByViewNameAndArgs)
   */
  getViewResultByViewNameAndArgs(viewName: string, args: any): any {
    const key = serializeArgs(viewName, args)
    return this.viewSubscriptions.has(key)
      ? this.viewSubscriptions.get(key)!.activeView().result()
      : null
  }

  /**
   * Subscribes to a view (original: subscribe)
   */
  subscribe(viewRef: any, args: any, observer: any, traceId?: any): any {
    let subscription: ViewSubscription
    const viewDef = this.getViewDef(viewRef)
    viewDef.validateArguments(args).unwrap()
    const key = serializeArgs(viewDef.name, args)
    if (this.viewSubscriptions.has(key)) {
      subscription = this.viewSubscriptions.get(key)!
    } else {
      if (!this.args.sessionId) {
        this.emitter.emit({
          type: 'SESSION.SUBSCRIBE_BEFORE_SESSION_ID_SET',
          sessionArgs: this.args,
          viewName: viewDef.name,
        })
      }
      subscription = new ViewSubscription(
        key,
        viewRef,
        viewDef,
        new ViewContext(key, this.args, args, {
          logger: this.contextLogger,
          analyticsLogger: this.analyticsLogger,
          paginationQueryNodeMap: this.paginationQueryNodeMap,
          computationObjectNodes: this.computationObjectNodes,
          shouldBubbleUpNonNullableResultErrors: this.shouldBubbleUpNonNullableResultErrors,
          forceMissingOptionals: this.forceMissingOptionalsForViews.get(viewDef.name),
          errorsLoggedForAnalyticsFraction: this.errorsLoggedForAnalyticsFraction,
          emitter: this.emitter,
        }),
        this,
        traceId,
      )
      this.viewSubscriptions.set(key, subscription)
    }
    const subscriptionObj = {
      id: this.nextSubscriptionId++,
      view: viewRef,
      args,
      observer,
      unsubscribe: once(() => {
        subscription.removeSubscription(subscriptionObj)
        if (subscription.getSubscriptionObservers().length === 0) {
          this.viewSubscriptions.delete(key)
          subscription.destroy()
        }
      }),
      clientUnsubscribed: false,
      lastResult: null,
    }
    subscription.addSubscription(subscriptionObj)
    MainSessionStore.nextTick(() => {
      if (!subscriptionObj.clientUnsubscribed) {
        this.notifyObserver(subscription, subscriptionObj)
      }
    })
    return subscriptionObj
  }

  /**
   * Cleans up failed subscription (original: cleanupFailedSubscription)
   */
  cleanupFailedSubscription(key: string): void {
    const subscription = this.viewSubscriptions.get(key)
    if (subscription) {
      for (const sub of subscription.getSubscriptionObservers()) {
        const result = {
          status: 'errors',
          data: null,
          errors: [],
        }
        MainSessionStore.nextTick(() => {
          if (!sub.clientUnsubscribed) {
            sub.observer(result)
            sub.lastResult = result
          }
        })
      }
      this.failedViewSubscriptions.set(key, subscription)
      this.viewSubscriptions.delete(key)
    }
  }

  /**
   * Checks if there are active subscriptions for a view (original: hasActiveSubscriptions)
   */
  hasActiveSubscriptions(viewName: string, args: any): boolean {
    const key = serializeArgs(viewName, args)
    const subscription = this.viewSubscriptions.get(key)
    return !!subscription && subscription.getSubscriptionObservers().length > 0
  }

  /**
   * Gets active subscription by key (original: getActiveSubscription)
   */
  getActiveSubscription(key: string): { viewRef: any; args: any; traceId: any } | undefined {
    const subscription = this.viewSubscriptions.get(key)
    if (subscription) {
      return {
        viewRef: subscription.viewRef,
        args: subscription.viewArgs(),
        traceId: subscription.traceId,
      }
    }
    return undefined
  }

  /**
   * Returns all unique subscriptions (original: uniqueSubscriptions)
   */
  uniqueSubscriptions(): any[] {
    const result: any[] = []
    for (const [key, subscription] of this.failedViewSubscriptions.entries()) {
      if (!this.viewSubscriptions.has(key)) {
        result.push({
          viewRef: subscription.viewRef,
          args: subscription.viewArgs(),
          status: subscription.activeView().result().status,
          viewDef: subscription.viewDef,
        })
      }
    }
    this.failedViewSubscriptions.clear()
    for (const subscription of this.viewSubscriptions.values()) {
      result.push({
        viewRef: subscription.viewRef,
        args: subscription.viewArgs(),
        traceId: subscription.traceId,
        status: subscription.activeView().result().status,
        viewDef: subscription.viewDef,
      })
    }
    return result
  }

  /**
   * Starts reconnection state for pagination queries (original: startReconnectionStateForPaginationQueries)
   */
  startReconnectionStateForPaginationQueries(): void {
    for (const node of this.paginationQueryNodeMap.values()) {
      node.startReconnectionState()
    }
  }

  /**
   * Subscribes to a query (original: subscribeQuery)
   */
  subscribeQuery(query: any, observer: any): () => void {
    this.emitter.emit({
      type: 'SESSION.SUBSCRIBE_QUERY',
      query,
    })
    const store = this.getStores(query.objectName)
    return store ? store.queries.subscribe(query, observer) : () => { }
  }

  /**
   * Requests pagination change (original: requestPaginationChange)
   */
  requestPaginationChange(view: any, query: any, pagination: any): void {
    this.onPaginationChange(view, query.queryId, pagination)
    this.notifyObservers()
  }

  /**
   * Subscribes to a computation (original: subscribeComputation)
   */
  subscribeComputation(computation: any, observer: any): () => void {
    this.emitter.emit({
      type: 'SESSION.SUBSCRIBE_COMPUTATION',
      computation,
    })
    const store = this.getStores(computation.objectName)
    return store ? store.computations.subscribe(computation, observer) : () => { }
  }

  /**
   * Batches mutations and notifies observers after completion (original: batchMutations)
   */
  batchMutations(fn: () => void): void {
    this.isInMutationBatch = true
    this.shouldNotifyOnMutationBatchCompletion = false
    try {
      fn()
    } finally {
      this.isInMutationBatch = false
      if (this.shouldNotifyOnMutationBatchCompletion) {
        this.notifyObservers()
      }
    }
  }

  /**
   * Notifies all observers (original: notifyObservers)
   */
  notifyObservers(): void {
    if (this.isInMutationBatch) {
      this.shouldNotifyOnMutationBatchCompletion = true
      return
    }
    for (const subscription of this.viewSubscriptions.values()) {
      for (const sub of subscription.getSubscriptionObservers()) {
        this.notifyObserver(subscription, sub)
      }
    }
  }

  /**
   * Notifies a single observer (original: notifyObserver)
   */
  notifyObserver(subscription: ViewSubscription, sub: any): void {
    let retryCount: any
    const result = subscription.activeView().result()
    if (
      sub.lastResult !== result &&
      (
        sub.lastResult?.status !== 'loaded' ||
        result.status !== 'loading' ||
        subscription.activeView().viewResultForDebugging !== undefined
      )
    ) {
      if (
        sub.lastResult?.status === 'loaded' &&
        result.status === 'errors'
      ) {
        this.emitter.emit({
          type: 'VIEW.STATE_TRANSITION',
          viewName: subscription.viewRef._name,
          transitionType: 'LOADED_TO_ERROR',
          userId: this.args.userId,
          isInitialConnection: this.isInitialConnection(),
          sessionId: this.args.sessionId || '',
        })
      }
      if (
        sub.lastResult?.status === 'loaded' &&
        sub.lastResult?.errors.length === 0 &&
        result.status === 'loaded' &&
        result.errors.length > 0
      ) {
        this.emitter.emit({
          type: 'VIEW.STATE_TRANSITION',
          viewName: subscription.viewRef._name,
          transitionType: 'LOADED_TO_LOADED_WITH_ERROR',
          userId: this.args.userId,
          isInitialConnection: this.isInitialConnection(),
          sessionId: this.args.sessionId || '',
        })
      }
      if (!sub.clientUnsubscribed) {
        sub.observer(result)
        sub.lastResult = result
      }
      if (result.errors && result.errors.length > 0) {
        if (result.errors.every((err: any) => err.retriable)) {
          this.onRetriableViewFailure(subscription.key)
        }
      } else if (result.status === 'loaded') {
        retryCount = this.getRetryCountOnResult(subscription.key)
      }
      this.emitter.emit({
        type: 'SESSION.NOTIFY_OBSERVERS',
        view: subscription.viewRef,
        args: subscription.viewArgs(),
        result,
        subscriptionId: sub.id,
        retryCount,
      })
    }
  }

  /**
   * Gets store for an object name (original: getStores)
   */
  getStores(objectName: string): { queries: ObjectStore; computations: ComputationStore } | null {
    if (this.stores[objectName]) return this.stores[objectName]
    this.emitter.emit({
      type: 'SESSION.UNEXPECTED_OBJECT_NAME',
      objectName,
    })
    return null
  }

  /**
   * Gets view load type (original: getViewLoadType)
   */
  getViewLoadType(key: string): ConnectionAttemptTypes {
    const subscription = this.viewSubscriptions.get(key)
    return subscription && subscription.activeView().result().status !== 'loading'
      ? ConnectionAttemptTypes.Reinitialization
      : ConnectionAttemptTypes.Initial
  }

  /**
   * Schedules a function for next tick (original: nextTick)
   */
  static nextTick(fn: () => void): void {
    setTimeout(fn, 0)
  }

  /**
   * Returns a promise resolved on next tick (original: tick)
   */
  static async tick(): Promise<void> {
    return new Promise((resolve) => {
      MainSessionStore.nextTick(() => {
        resolve()
      })
    })
  }

  /**
   * Sets optional missing for a view (original: setOptionalMissingForView)
   */
  setOptionalMissingForView(viewName: string, field: string): void {
    if (this.forceMissingOptionalsForViews.has(viewName)) {
      const arr = this.forceMissingOptionalsForViews.get(viewName)!
      this.forceMissingOptionalsForViews.set(viewName, [...arr, field])
    } else {
      this.forceMissingOptionalsForViews.set(viewName, [field])
    }
    for (const [, subscription] of this.viewSubscriptions.entries()) {
      if (subscription.viewRef._name === viewName) {
        subscription.disableViewCaching()
        subscription.setOptionalMissing(field)
        for (const sub of subscription.getSubscriptionObservers()) {
          this.notifyObserver(subscription, sub)
        }
      }
    }
  }

  /**
   * Unsets optional missing for a view (original: unsetOptionalMissingForView)
   */
  unsetOptionalMissingForView(viewName: string): void {
    for (const [, subscription] of this.viewSubscriptions.entries()) {
      if (subscription.viewRef._name === viewName) {
        subscription.unsetOptionalMissing()
        for (const sub of subscription.getSubscriptionObservers()) {
          this.notifyObserver(subscription, sub)
        }
        subscription.enableViewCaching()
      }
    }
    this.forceMissingOptionalsForViews.delete(viewName)
  }

  /**
   * Gets view subscriptions for testing (original: getViewSubscriptionsForTesting)
   */
  getViewSubscriptionsForTesting(): Map<string, ViewSubscription> {
    return this.viewSubscriptions
  }

  /**
   * Gets view subscriptions for debugging (original: getViewSubscriptionsForDebugging)
   */
  getViewSubscriptionsForDebugging(): Record<string, any> {
    const result: Record<string, any> = {}
    for (const [key, subscription] of this.viewSubscriptions.entries()) {
      let debugResult = {
        ...subscription.activeView().root.result(),
        optionalErrorPaths: subscription.activeView().root.getOptionalErrorPathsForDebugging(),
      }
      if (debugResult.status === 'loading') {
        debugResult = {
          ...debugResult,
          loadingPaths: subscription.activeView().root.getLoadingPathsForDebugging(),
        }
      }
      result[key] = debugResult
    }
    return result
  }

  /**
   * Pretty prints live view tree for a subscription (original: prettyPrintLiveViewTree)
   */
  prettyPrintLiveViewTree(input: string | QueryInstanceNode): string {
    let key = ''
    let root: any = null
    if (typeof input === 'string') {
      if (!this.viewSubscriptions.has(input)) {
        const options = [...this.viewSubscriptions.keys()].join('\n').replace(/"/g, '\\"')
        throw new Error(`Subscription key not found, possible options: \n${options}`)
      }
      key = input
      root = this.viewSubscriptions.get(key)!.activeView().root
    } else if (input instanceof QueryInstanceNode) {
      key = input.parent.key
      root = input
    } else {
      throw new TypeError('Please enter a subscription key or a LiveViewInstanceNode')
    }
    const viewArgs = root.context.viewArgs
    const debugState = root.debugState((node: any) => {
      if (node instanceof QueryInstanceNode)
        return `I: ${node.instance.id ? node.instance.id : 'Root Instance'}`
      if (node instanceof QueryNode) {
        const argsArr: string[] = []
        const queryDef = node.query.queryDef
        if (viewArgs) {
          Object.keys(viewArgs).forEach((arg) => {
            argsArr.push(`${queryDef.objectDef.name}.${arg} = ${viewArgs[arg]}`)
          })
        }
        let label = `Q: ${queryDef.objectFieldDef.name} - `
        label += argsArr.length > 0 ? `args:(${argsArr.join()})` : `(${queryDef.objectDef.name})`
        return label
      }
      if (node instanceof ComputationHandler || node instanceof ComputationObjectNode) {
        const result = node.result()
        return result.status === 'loaded'
          ? `C: ${node.fieldName} = ${result.data}`
          : `C: ${node.fieldName} is loading`
      }
      if (node instanceof PaginatedQueryNode)
        return 'PaginationQueryNode'
      noop(node)
      return new Error('Unexpected node type')
    })
    return `Logging LiveView tree for subscription: ${key} 
View Name: ${root.queryDef.objectFieldDef.name} 
${LiveViewNode.debugStateAsString(debugState)}`
  }

  /**
   * Sets view result for debugging (original: setViewResultForDebugging)
   */
  setViewResultForDebugging(key: string, status: string, data: any, errors: any): void {
    const subscription = this.viewSubscriptions.get(key)
    if (subscription) {
      subscription.activeView().setViewResultForDebugging({
        status,
        data,
        errors,
      })
      this.notifyObservers()
    } else {
      console.log(`setViewResultForDebugging: ${key} doesn't exist`)
    }
  }

  /**
   * Unsets view result for debugging (original: unsetViewResultForDebugging)
   */
  unsetViewResultForDebugging(key: string): void {
    const subscription = this.viewSubscriptions.get(key)
    if (subscription) {
      subscription.activeView().setViewResultForDebugging(undefined)
      this.notifyObservers()
    } else {
      console.log(`unsetViewResultForDebugging: ${key} doesn't exist`)
    }
  }
}

/**
 * Helper to get or create a Set in a Map (original: function k)
 */
function getOrCreateSet<K, V>(map: Map<K, Set<V>>, key: K): Set<V> {
  if (!map.has(key)) map.set(key, new Set<V>())
  return map.get(key)!
}

/** Exported session store (original: export const A = $$T0) */
export const A = MainSessionStore
