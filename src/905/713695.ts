import { InfiniteQueryObserver, isCancelledError, MutationObserver, QueryClient } from '@tanstack/query-core'
import { produce, setAutoFreeze } from 'immer'
import { atom } from 'jotai'
import { atomWithObservable } from 'jotai/utils'
import { defaults } from 'lodash-es'
import { useEffect, useMemo } from 'react'
import { QueryObserver } from 'react-query'
import { OPAQUE_RQ_PAGINATED_QUERY, OPAQUE_RQ_QUERY } from '../905/16369'
import { deepEqualIgnoreKeys } from '../905/80725'
import { buildSchema, extractNormalizedObjectInfo } from '../905/155604'
import { setupFileLivestoreManager } from '../905/155850'
import { createRepoManager } from '../905/239398'
import { createReduxSubscriptionAtomWithState } from '../905/270322'
import { createObjectDefMap, filterSpecialValue, LIVESTORE_LOADING, LIVESTORE_TOMBSTONED } from '../905/284406'
import { setupAdvanceTimers } from '../905/346780'
import { debugState } from '../905/407919'
import { observableState } from '../905/441145'
import { trackEventAnalytics } from '../905/449184'
import { sendBatchedHistograms, sendBatchedMetrics } from '../905/485103'
import { RetainedPromiseManager } from '../905/491061'
import { setupFolderLivestoreManager } from '../905/493958'
import { waitForVisibility } from '../905/621429'
import { logError } from '../905/714362'
import { createTeamManager } from '../905/844455'
import { generateUUIDv4 } from '../905/871474'
import { denormalizeRoot, normalizeRoot, SchemaLibrary } from '../905/893701'
import { shouldSampleRequest, sendWithRetry } from '../905/910117'
import { getUserPlan } from '../905/912096'
import { resourceUtils } from '../905/989992'
import { atomStoreManager, createCustomAtom, createRemovableAtomFamily, setupAtomWithMount, useAtomWithSubscription } from '../figma_app/27355'
import { throwTypeError } from '../figma_app/465776'
import { getAtomMutate, setupResourceAtomHandler } from '../figma_app/566371'
import { realtimeV2 } from '../figma_app/804490'
import { getFalseValue } from '../figma_app/897289'

// Original: let l = atom(new QueryClient())
const queryClientAtom = atom(new QueryClient())

/**
 * Custom error class for when an object is not found.
 * Original: class m extends Error
 */
class ObjectNotFoundError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ObjectNotFoundError'
  }
}

/**
 * Fetches an object from the store based on the given policy and configuration.
 * Original: async function h(e, t, i, n, r)
 * @param atomStore - The atom store instance.
 * @param store - The object store definition.
 * @param id - The object ID to fetch.
 * @param options - Fetch options including policy.
 * @param gremlinConfig - Optional gremlin configuration.
 * @returns The fetched object data.
 */
async function fetchObject(
  atomStore: any,
  store: any,
  id: any,
  options: { policy?: string },
  gremlinConfig?: any,
): Promise<any> {
  const policy = options.policy || 'cacheFirst'
  const isGremlinEnabled = !!gremlinConfig?.enabled

  if (policy === 'cacheFirst' && !isGremlinEnabled) {
    const cached = atomStore.get(store.atom(id))
    if (cached === LIVESTORE_TOMBSTONED) {
      const uniqueName = extractNormalizedObjectInfo(store.objectDef)?.uniqueName
      throw new ObjectNotFoundError(`Object ${uniqueName}:${id} not found`)
    }
    if (cached !== LIVESTORE_LOADING) {
      return cached
    }
  }

  const fetchedObject = await store.fetchObject(id)
  if (fetchedObject == null) {
    const uniqueName = extractNormalizedObjectInfo(store.objectDef)?.uniqueName
    throw new ObjectNotFoundError(`Object ${uniqueName}:${id} not found`)
  }

  store.remoteUpdate({ [id]: fetchedObject })
  return fetchedObject
}

/**
 * A simple async delay function.
 * Original: async function g()
 */
async function delay(): Promise<void> {
  await 0
}

/**
 * Fetches a query and handles the result based on the atom store and query client.
 * Original: async function f(e, t, i, n = {}, r)
 * @param atomStore - The atom store instance.
 * @param queryClient - The query client instance.
 * @param queryAtom - The query atom to fetch.
 * @param options - Fetch options.
 * @param gremlinConfig - Optional gremlin configuration.
 * @returns The fetched data or an error.
 */
async function fetchQuery(
  atomStore: any,
  queryClient: QueryClient,
  queryAtom: any,
  options: any = {},
  gremlinConfig?: any,
): Promise<any> {
  let resultPromise: Promise<any>

  if ('write' in queryAtom) {
    const unsubscribe = atomStore.sub(queryAtom, () => { })
    const policy = options.policy || 'cacheFirst'
    const isGremlinEnabled = !!gremlinConfig?.enabled

    if (policy === 'networkOnly' || isGremlinEnabled) {
      await queryClient.fetchQuery({
        queryKey: queryAtom.queryKey,
        queryFn: queryAtom.queryFn,
        staleTime: 0,
      })
    }
    else {
      await queryClient.fetchQuery({
        queryKey: queryAtom.queryKey,
        queryFn: queryAtom.queryFn,
        staleTime: Infinity,
      })
    }

    await delay()
    resultPromise = Promise.resolve(atomStore.get(queryAtom))
    unsubscribe()
  }
  else {
    if (options.policy) {
      throw new Error('Not implemented! Please reach out to #a-frontend-platform')
    }

    resultPromise = new Promise((resolve, reject) => {
      const currentResult = atomStore.get(queryAtom)
      if (currentResult.status !== 'loading') {
        resolve(currentResult)
        return
      }

      const unsubscribe = atomStore.sub(queryAtom, () => {
        const updatedResult = atomStore.get(queryAtom)
        if (updatedResult.status !== 'loading') {
          clearTimeout(timeoutId)
          unsubscribe()
          resolve(updatedResult)
        }
      })

      const timeoutId = setTimeout(() => {
        unsubscribe()
        reject(new Error('fetchQuery timed out'))
      }, 5000)
    })
  }

  const result = await resultPromise
  if (result.status === 'loading' || result.status === 'disabled') {
    logError('LiveStore', `fetchQuery encountered "${result.status}" status`, {}, {
      reportAsSentryError: true,
    })
    return new Error(`fetchQuery encountered "${result.status}" status`)
  }

  if (result.status !== 'errors') {
    return result.data
  }

  throw result.errors
}

/**
 * Creates atoms for managing query observers with observable behavior.
 * Original: function b(e, t, i, n)
 * @param queryOptionsFn - Function to get query options.
 * @param contextFn - Function to get context.
 * @param observerFactory - Factory for creating observers.
 * @param actionHandler - Handler for actions.
 * @returns A tuple of atoms for the query.
 */
function createQueryAtoms(
  queryOptionsFn: any,
  contextFn: any,
  observerFactory: any,
  actionHandler: any,
): [any, any] {
  const observersMapAtom = atom(() => new WeakMap())
  const updateCounterAtom = atom(0)
  const uniqueSymbol = Symbol('')

  const observerAtom = atom((get) => {
    get(updateCounterAtom)
    const context = contextFn(get)
    const options = queryOptionsFn(get)
    const observersMap = get(observersMapAtom)
    let observer = observersMap.get(context)

    if (observer) {
      observer[uniqueSymbol] = true
      observer.setOptions(options, { listeners: false })
      delete observer[uniqueSymbol]
    }
    else {
      observer = observerFactory(context, options)
      observersMap.set(context, observer)
    }

    return observer
  })

  const observableAtom = atom((get) => {
    const observer = get(observerAtom)
    const observable = {
      subscribe: (subscriber: any) => {
        const notify = (result: any) => {
          const next = () => subscriber.next(result)
          if (observer[uniqueSymbol]) {
            Promise.resolve().then(next)
          }
          else {
            next()
          }
        }
        const subscription = observer.subscribe(notify)
        notify(observer.getCurrentResult())
        return { unsubscribe: subscription }
      },
    }
    return atomWithObservable(() => observable, {
      initialValue: observer.getCurrentResult(),
    })
  })

  const resultAtom = atom(
    (get) => {
      const observableResult = get(observableAtom)
      return get(observableResult)
    },
    (get, set, action) => {
      const observer = get(observerAtom)
      const context = contextFn(get)
      return actionHandler(action, observer, () => {
        get(observersMapAtom).delete(context)
        set(updateCounterAtom, count => count + 1)
      }, context)
    },
  )

  const promiseAtom = atom((get) => {
    const observer = get(observerAtom)
    const observable = {
      subscribe: (subscriber: any) => {
        const notify = (result: any) => {
          if ((result.isSuccess && result.data !== undefined) || (result.isError && !isCancelledError(result.error))) {
            const next = () => subscriber.next(result)
            if (observer[uniqueSymbol]) {
              Promise.resolve().then(next)
            }
            else {
              next()
            }
          }
        }
        const subscription = observer.subscribe(notify)
        notify(observer.getCurrentResult())
        return { unsubscribe: subscription }
      },
    }
    return atomWithObservable(() => observable)
  })

  const extractData = (result: any) => {
    if (result.error) {
      throw result.error
    }
    return result.data
  }

  return [
    atom(
      (get) => {
        const promiseResult = get(promiseAtom)
        const resolved = get(promiseResult)
        return resolved instanceof Promise ? resolved.then(extractData) : extractData(resolved)
      },
      (get, set, action) => set(resultAtom, action),
    ),
    resultAtom,
  ]
}

// Original: let E = 0
let queryKeyCounter = 0

/**
 * Batch processor for operations.
 * Original: class S
 */
class BatchProcessor {
  constructor(private processBatch: (operations: any[]) => void) {
    this.batchedOperations = []
  }

  private batchedOperations: any[]

  enqueue(operation: any): void {
    this.batchedOperations.push(operation)
    Promise.resolve().then(() => {
      this.processBatch(this.batchedOperations)
      this.batchedOperations = []
    })
  }
}

/**
 * Manager for object stores with batching.
 * Original: class w
 */
class ObjectStoreManager {
  constructor(private stores: any) {
    this.resolutions = []
    const batchProcessor = new BatchProcessor(ops => this.processBatch(ops))
    for (const key of Object.keys(stores)) {
      const storeProxy = new StoreProxy(stores[key], batchProcessor)
      this[key] = storeProxy
    }
  }

  private resolutions: any[]

  private processBatch(operations: any[]): void {
    const groupedOps: any = {}
    for (const op of operations) {
      const uniqueName = extractNormalizedObjectInfo(op.store.objectDef).uniqueName
      groupedOps[uniqueName] = groupedOps[uniqueName] || []
      groupedOps[uniqueName].push(op)
    }

    for (const [name, ops] of Object.entries(groupedOps)) {
      const store = this.stores[name]
      const groupedById: any = {}
      for (const op of ops as any[]) {
        groupedById[op.id] = groupedById[op.id] || []
        groupedById[op.id].push(op)
      }
      this.resolutions.push(store.optimisticUpdate(groupedById))
    }
  }

  registerPromise(promise: Promise<any>): void {
    promise
      .then(() => {
        for (const resolution of this.resolutions) resolution('COMMIT')
        this.resolutions = []
      })
      .catch(() => {
        for (const resolution of this.resolutions) resolution('REJECT')
        this.resolutions = []
      })
  }
}

/**
 * Proxy for a single store with batching.
 * Original: class C
 */
class StoreProxy {
  constructor(private store: any, private batch: BatchProcessor) { }

  update(id: any, updater: any): void {
    this.batch.enqueue({
      type: 'UPDATE',
      id,
      update: (data: any) =>
        typeof updater === 'function' ? produce(data, updater) : updater,
      store: this.store,
    })
  }

  create(): void {
    throw new Error('Not implemented')
  }

  delete(_id?: any): void {
    throw new Error('Not implemented')
  }
}

/**
 * Manager for query mutations with rollback and invalidation.
 * Original: class k
 */
class QueryMutationManager {
  constructor(private client: QueryClient) {
    this.invalidations = new Set()
    this.changes = new Set()
  }

  private invalidations: Set<any>
  private changes: Set<any>

  registerPromise(promise: Promise<any>): void {
    promise
      .then(() => this.invalidate())
      .catch(() => this.revert())
      .finally(() => this.changes.clear())
  }

  mutate(query: any, updater: any): void {
    const currentData = this.client.getQueryData(query.queryKey) as ObjectOf
    const queryState = this.client.getQueryState(query.queryKey)

    if (!currentData) {
      if (queryState?.fetchStatus === 'fetching') {
        this.invalidations.add({ query, queryState })
      }
      return
    }

    const version = generateUUIDv4()
    let newData: any
    if (typeof updater === 'function') {
      setAutoFreeze(false)
      newData = produce(currentData, updater)
      setAutoFreeze(true)
    }
    else {
      newData = updater
    }

    Object.assign(newData, { _version: version })
    Object.defineProperty(newData, '_version', { enumerable: false })

    this.client.setQueryData(query.queryKey, newData)
    this.changes.add({
      query,
      version,
      queryState,
      rollback: { ...currentData },
    })
  }

  private revert(): void {
    [...this.changes].reverse().forEach((change) => {
      this.client.setQueryData<ObjectOf>(change.query.queryKey, data =>
        '_version' in data && data._version === change.version ? change.rollback : data)
    })
  }

  refetch(queryKey: any): Promise<any> {
    return this.client.invalidateQueries(queryKey)
  }

  private invalidate(): void {
    [...this.changes, ...this.invalidations]
      .filter(item => item.queryState?.fetchStatus === 'fetching')
      .forEach((item) => {
        const state = this.client.getQueryState(item.query.queryKey)
        if (state?.fetchStatus === 'fetching') {
          this.client.cancelQueries(item.query.queryKey)
        }
        this.client.invalidateQueries(item.query.queryKey)
      })
  }
}

/**
 * Sets a nested property in an object if it doesn't exist.
 * Original: function D(e, t, i, n)
 * @param obj - The object to modify.
 * @param key1 - First level key.
 * @param key2 - Second level key.
 * @param value - Value to set.
 */
function setNestedProperty(obj: any, key1: string, key2: string, value: any): void {
  obj[key1] = obj[key1] || {}
  obj[key1][key2] = obj[key1][key2] || value
}

/**
 * Creates a normalized atom for schema-based data handling.
 * Original: function L(e, t, i, n, r)
 * @param sourceAtom - The source atom.
 * @param schema - The schema for normalization.
 * @param stores - Object stores.
 * @param atomStoreManager - Atom store manager.
 * @param syncObjects - Whether to sync objects.
 * @returns The normalized atom.
 */
function createNormalizedAtom(
  sourceAtom: any,
  schema: any,
  stores: any,
  atomStoreManager: any,
  syncObjects: boolean,
): any {
  let triggerUpdate: () => void
  let updateCount = 0
  let deferredUpdate = false

  const normalizedResultAtom = atom(null)
  const updateTriggerAtom = atom(0)

  triggerUpdate = () => {
    atomStoreManager.set(updateTriggerAtom, (count: number) => count + 1)
  }

  const scheduleUpdate = () => {
    updateCount += 1
    if (updateCount === 1) {
      Promise.resolve().then(() => {
        if (deferredUpdate)
          triggerUpdate()
        updateCount = 0
        deferredUpdate = false
      })
    }
    if (updateCount <= 3) {
      triggerUpdate()
    }
    else {
      deferredUpdate = true
    }
  }

  const syncSubscriptions = new Map()
  const hydrationSubscriptions = new Map()

  const applyUpdate = (data: any) => {
    const [entities, result] = (() => {
      schema.zodSchema.safeParse(data)
      const { entities, result } = normalizeRoot(data, schema.normalizrSchema)
      return [entities, result]
    })()

    atomStoreManager.set(normalizedResultAtom, result)

    // Hydration logic
    const hydratedEntities = buildHydratedEntities(result, schema.normalizrSchema, stores, atomStoreManager, { hydrate: false })
    for (const [key, entityMap] of Object.entries(hydratedEntities)) {
      const store = stores[key]
      for (const entityId of Object.keys(entityMap)) {
        if (!hydrationSubscriptions.get(`${key}-${entityId}`)) {
          const unsub = atomStoreManager.sub(store.atom(entityId), scheduleUpdate)
          if (unsub)
            hydrationSubscriptions.set(`${key}-${entityId}`, unsub)
        }
      }
    }

    // Remote updates
    for (const [storeKey, entityData] of Object.entries(entities)) {
      stores[storeKey].remoteUpdate(entityData)
    }

    if (syncObjects) {
      // Sync logic
      for (const [storeKey, entityMap] of Object.entries(entities)) {
        const store = stores[storeKey]
        for (const [entityId, entity] of Object.entries(entityMap)) {
          if (!syncSubscriptions.get(`${storeKey}-${entityId}`)) {
            const syncUnsub = store.syncObject?.(entity, entityId, store)
            if (syncUnsub)
              syncSubscriptions.set(`${storeKey}-${entityId}`, syncUnsub)
          }
        }
      }
    }
  }

  return setupAtomWithMount(
    atom<any, { type: string, data: any }[], void>(
      (get) => {
        const result = get(normalizedResultAtom)
        get(updateTriggerAtom)
        if (!result)
          return
        const hydrated = buildHydratedEntities(result, schema.normalizrSchema, stores, atomStoreManager)
        return denormalizeRoot(result, schema.normalizrSchema, hydrated)
      },
      (get, set, action) => {
        if (action.type !== 'REMOTE_UPDATE')
          return set(sourceAtom, action)
        applyUpdate(action.data)
      },
    ),
    () => {
      const onSourceUpdate = () => {
        const data = atomStoreManager.get(sourceAtom)
        if (data)
          applyUpdate(data)
      }
      const unsubSource = atomStoreManager.sub(sourceAtom, onSourceUpdate)
      onSourceUpdate()
      return () => {
        unsubSource()
        for (const unsub of syncSubscriptions.values()) unsub()
        for (const unsub of hydrationSubscriptions.values()) unsub()
        syncSubscriptions.clear()
        hydrationSubscriptions.clear()
      }
    },
  )
}

/**
 * Builds hydrated entities from normalized data.
 * Original: function F(e, t, i, n, { hydrate: r = !0 } = {}, a = {})
 * @param data - The data to hydrate.
 * @param schema - The schema.
 * @param stores - Object stores.
 * @param atomStoreManager - Atom store manager.
 * @param options - Hydration options.
 * @param accumulator - Accumulator object.
 * @returns The hydrated entities.
 */
function buildHydratedEntities(
  data: any,
  schema: any,
  stores: any,
  atomStoreManager: any,
  options: { hydrate?: boolean } = {},
  accumulator: any = {},
): any {
  const { hydrate = true } = options

  if (data == null)
    return accumulator

  if (schema instanceof SchemaLibrary.Entity) {
    const store = stores[schema.key]
    if (data) {
      const atomKey = store.atom(data)
      const cached = hydrate ? atomStoreManager.get(atomKey) : null
      if (cached === LIVESTORE_LOADING || cached === LIVESTORE_TOMBSTONED) {
        setNestedProperty(accumulator, schema.key, data, null)
      }
      else {
        setNestedProperty(accumulator, schema.key, data, cached)
      }
    }
  }
  else if (schema instanceof SchemaLibrary.Array) {
    for (const item of data) {
      buildHydratedEntities(item, schema.schema, stores, atomStoreManager, { hydrate }, accumulator)
    }
  }
  else if (schema instanceof SchemaLibrary.Object) {
    for (const key in schema.schema) {
      buildHydratedEntities(data[key], schema.schema[key], stores, atomStoreManager, { hydrate }, accumulator)
    }
  }

  return accumulator
}
// Original: class G
/**
 * Represents the context for query providers, managing atom store, query client, object stores, and metrics reporting.
 * Original class name: G
 */
class QueryProviderContext {
  private _reporter: any = null
  private _atomStore: any
  private _queryClient: QueryClient
  private _objectStores: any
  private _queryAtomFamilies: Set<any>
  private _gremlinConfig?: any

  /**
   * Constructs a new QueryProviderContext.
   * @param atomStore - The atom store instance.
   * @param objectStores - Object stores configuration.
   * @param queryAtomFamilies - Set of query atom families.
   */
  constructor(atomStore: any, objectStores: any = {}, queryAtomFamilies: Set<any> = new Set()) {
    this._atomStore = atomStore
    this._queryClient = this.createQueryClient()
    this._objectStores = this.buildStores(objectStores)
    this._queryAtomFamilies = queryAtomFamilies
  }

  /**
   * Sets the gremlin configuration.
   * @param config - The gremlin config.
   */
  set gremlinConfig(config: any) {
    this._gremlinConfig = config
  }

  /**
   * Creates a new QueryClient with default options.
   * @returns The QueryClient instance.
   */
  private createQueryClient(): QueryClient {
    return new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          networkMode: 'always',
          structuralSharing: false,
          refetchOnWindowFocus: false,
        },
      },
    })
  }

  /**
   * Gets the gremlin configuration.
   * @returns The gremlin config.
   */
  get gremlinConfig(): any {
    return this._gremlinConfig
  }

  /**
   * Builds object stores from the provided configuration.
   * @param storesConfig - The stores configuration.
   * @returns The built object stores.
   */
  private buildStores(storesConfig: any): any {
    if (!storesConfig)
      return {}
    const stores: any = {}
    for (const key in storesConfig) {
      const store = storesConfig[key]
      const { uniqueName } = extractNormalizedObjectInfo(store.objectDef)
      if (key !== uniqueName) {
        throw new Error(`Mismatched type name for object def ${key} vs. ${uniqueName}`)
      }
      stores[key] = store
    }
    return stores
  }

  /**
   * Gets the query atom families.
   * @returns The set of query atom families.
   */
  get queryAtomFamilies(): Set<any> {
    return this._queryAtomFamilies
  }

  /**
   * Sets the query atom families.
   * @param families - The set of query atom families.
   */
  set queryAtomFamilies(families: Set<any>) {
    this._queryAtomFamilies = families
  }

  /**
   * Gets the atom store.
   * @returns The atom store.
   */
  get atomStore(): any {
    return this._atomStore
  }

  /**
   * Sets the atom store.
   * @param store - The atom store.
   */
  set atomStore(store: any) {
    this._atomStore = store
  }

  /**
   * Gets the object stores.
   * @returns The object stores.
   */
  get objectStores(): any {
    return this._objectStores
  }

  /**
   * Gets the reporter.
   * @returns The reporter.
   */
  get reporter(): any {
    return this._reporter
  }

  /**
   * Sets the reporter.
   * @param reporter - The reporter instance.
   */
  set reporter(reporter: any) {
    this._reporter = reporter
  }

  /**
   * Gets the query client.
   * @returns The QueryClient instance.
   */
  get queryClient(): QueryClient {
    return this._queryClient
  }

  /**
   * Sets the query client.
   * @param client - The QueryClient instance.
   */
  set queryClient(client: QueryClient) {
    this._queryClient = client
  }

  /**
   * Registers a query atom family.
   * @param family - The query atom family to register.
   */
  registerQueryAtomFamily(family: any): void {
    this._queryAtomFamilies.add(family)
  }
}

// Original: class z
/**
 * Main LiveStore class that manages queries, mutations, and object interactions.
 * Original class name: z
 */
class LiveStore {
  private extrasProvider: () => any
  private queryProviderContext: QueryProviderContext
  private gremlinConfig?: any

  /**
   * Constructs a new LiveStore instance.
   * @param atomStoreManager - The atom store manager.
   * @param extrasProvider - Provider for extra context.
   * @param managers - Object managers (e.g., File, Repo, etc.).
   */
  constructor(atomStoreManager: any, extrasProvider: () => any = () => ({}), managers: any) {
    this.extrasProvider = extrasProvider
    this.queryProviderContext = new QueryProviderContext(atomStoreManager, managers)
    atomStoreManager.set(queryClientAtom, this.queryProviderContext.queryClient)
    this._attachAPIs(this.queryProviderContext.objectStores)
    this.Query = this.createQueryMethod()
    this.PaginatedQuery = this.createPaginatedQueryMethod()
    this.Mutation = this.createMutationMethod()
    this.ObjectQuery = this.createObjectQueryMethod()
  }

  /**
   * Gets the query context.
   * @returns The query provider context.
   */
  getQueryContext(): QueryProviderContext {
    return this.queryProviderContext
  }


  /**
   * Creates the Query method.
   * @returns The Query function.
   */
  private createQueryMethod() {
    const extrasProvider = this.extrasProvider
    const getQueryContext = this.getQueryContext.bind(this)
    return (queryConfig: any) => {
      if (queryConfig.key && getQueryContext().uniqueQueryKeys.add(queryConfig.key)) {
        // Key added
      }
      if (queryConfig.refetchIntervalMs !== undefined && queryConfig.refetchIntervalMs < 1000) {
        throw new Error(`⚠️ Whoa there! You're trying to poll a query every ${queryConfig.refetchIntervalMs}ms -- that's probably much faster than you actually want. Please use a value of at least 1000ms, or reach out to #a-frontend-platform if you have a different use case.`)
      }
      const queryAtomFamily = createRemovableAtomFamily((args: any) => {
        const context = extrasProvider()
        const queryKey = [++queryKeyCounter]
        const enabled = !queryConfig.enabled || queryConfig.enabled(args)
        const promiseManager = new RetainedPromiseManager(() => atomStoreManager.sub(queryAtom, () => { }))
        const fetchFn = async () => {
          if (!getFalseValue()) {
            await waitForVisibility()
          }
          const result = queryConfig.fetch(args, context)
          const reporterCallback = queryConfig.key ? getQueryContext().reporter?.reportQueryRequested(queryConfig.key) : null
          result.then(() => {
            reporterCallback?.('success')
            promiseManager.resolve()
          }).catch((error: any) => {
            reporterCallback?.('error')
            promiseManager.reject(error)
          })
          return result
        }
        const [, resultAtom] = createQueryAtoms(
          () => ({
            queryKey,
            queryFn: fetchFn,
            refetchInterval: queryConfig.refetchIntervalMs,
            refetchIntervalInBackground: false,
            enabled,
            staleTime: Infinity,
            cacheTime: Infinity,
          }),
          (get: any) => get(queryClientAtom),
          (context: any, options: any) => new QueryObserver(context, options),
          async (action: any, observer: any) => {
            if (action.type === 'refetch') {
              await waitForVisibility()
              return observer.refetch({ cancelRefetch: false })
            }
            throwTypeError(action.type)
          },
        )
        let mountedAtom = resultAtom
        const stalenessPolicy = queryConfig.stalenessPolicy || 'onUnmount'
        const gcPolicy = queryConfig.gcPolicy || 'default'
        mountedAtom = setupAtomWithMount(mountedAtom, ({ setSelf }: any) => {
          if (stalenessPolicy === 'onUnmount' && enabled) {
            setSelf({ type: 'refetch' })
          }
          return () => {
            if (stalenessPolicy === 'onUnmount') {
              getQueryContext().queryClient.invalidateQueries({ queryKey, exact: true, refetchType: 'none' })
            }
            if (gcPolicy === 'onUnmount') {
              getQueryContext().queryClient.removeQueries({ queryKey, exact: true })
              queryAtomFamily.setShouldRemove((_, key) => key === args)
              queryAtomFamily.setShouldRemove(null)
            }
          }
        })
        let dataAtom = atom((get: any) => get(mountedAtom).data, (get: any, set: any, action: any) => {
          if (action.type !== 'REMOTE_UPDATE') {
            return set(mountedAtom, action)
          }
          getQueryContext().queryClient.setQueryData(queryKey, action.data)
        })
        const objectStores = getQueryContext().objectStores
        const schema = queryConfig.schema && buildSchema(queryConfig.schema, createObjectDefMap(objectStores))
        if (schema?.requiresNormalization) {
          dataAtom = createNormalizedAtom(dataAtom, schema, objectStores, atomStoreManager, !!queryConfig.syncObjects)
        }
        if (queryConfig.sync) {
          const originalAtom = dataAtom
          dataAtom = setupAtomWithMount(originalAtom, () => queryConfig.sync(args, {
            ...context,
            mutate: (updater: any) => {
              const currentData = produce(atomStoreManager.get(originalAtom), (draft: any) => {
                if (draft !== undefined) {
                  updater(draft)
                }
              })
              if (currentData !== undefined) {
                atomStoreManager.set(originalAtom, { type: 'REMOTE_UPDATE', data: currentData })
              }
            },
          }))
        }
        const outputAtom = createCustomAtom(dataAtom, (get: any) => {
          const { output } = queryConfig
          const data = get(dataAtom)
          return output
            ? (data === undefined ? undefined : output({ data, get, args }, context))
            : data
        })
        const queryAtom = createCustomAtom(outputAtom, (get: any) => {
          const result = get(mountedAtom)
          if (!enabled) {
            return resourceUtils.disabledSuspendable(promiseManager)
          }
          const outputData = get(outputAtom)
          switch (result.status) {
            case 'loading':
              return resourceUtils.loadingSuspendable(promiseManager)
            case 'error':
              return resourceUtils.errorSuspendable(result.error, promiseManager)
            case 'success':
              if (outputData === undefined) {
                return resourceUtils.loadingSuspendable(promiseManager)
              }
              return resourceUtils.loadedSuspendable(outputData, result.error || [], promiseManager)
            default:
              throwTypeError(result)
          }
        })
        return Object.assign(queryAtom, {
          queryKey,
          queryFn: fetchFn,
          __OPAQUE_RQ_QUERY__: OPAQUE_RQ_QUERY,
        })
      }, deepEqualIgnoreKeys)
      return (args: any) => {
        getQueryContext().registerQueryAtomFamily(queryAtomFamily)
        return queryAtomFamily(args)
      }
    }
  }

  /**
   * Creates the PaginatedQuery method.
   * @returns The PaginatedQuery function.
   */
  private createPaginatedQueryMethod() {
    const extrasProvider = this.extrasProvider
    const getQueryContext = this.getQueryContext.bind(this)
    return (queryConfig: any) => {
      const queryAtomFamily = createRemovableAtomFamily((args: any) => {
        const context = extrasProvider()
        const queryKey = [++queryKeyCounter]
        const enabled = !queryConfig.enabled || queryConfig.enabled(args)
        const [, resultAtom] = createQueryAtoms(
          () => ({
            queryKey,
            queryFn: async (pageParam: any) => {
              if (!getFalseValue()) {
                await waitForVisibility()
              }
              const fetchContext = { pageParam, ...context }
              return await queryConfig.fetch(args, fetchContext)
            },
            getNextPageParam: (lastPage: any) => lastPage.nextPage,
            getPreviousPageParam: (lastPage: any) => lastPage.prevPage,
            enabled,
            staleTime: Infinity,
          }),
          (get: any) => get(queryClientAtom),
          (context: any, options: any) => new InfiniteQueryObserver(context, options),
          (action: any, observer: any, _cleanup: any, _contextKey: any) => {
            if (action.type === 'refetch') {
              return observer.refetch({ refetchPage: (page: any, index: number) => index === 0 }).then((result: any) => {
                getQueryContext().queryClient.setQueryData(observer.options.queryKey, (data: any) => data
                  ? {
                    pages: data.pages.slice(0, 1),
                    pageParams: data.pageParams.slice(0, 1),
                  }
                  : data)
                return result
              })
            }
            if (action.type === 'fetchNextPage') {
              const options = defaults(action.options || {}, { cancelRefetch: false })
              return observer.fetchNextPage(options)
            }
            if (action.type === 'fetchPreviousPage') {
              const options = defaults(action.options || {}, { cancelRefetch: false })
              return observer.fetchPreviousPage(options)
            }
            throwTypeError(action.type)
          },
        )
        let mountedAtom = setupAtomWithMount(resultAtom, ({ setSelf }: any) => {
          if (enabled) {
            setSelf({ type: 'refetch' })
          }
        })
        const pageAtoms: any[] = []
        let dataAtom = atom<any, any[], any>(
          (get: any) => {
            const pages = get(mountedAtom).data?.pages || []
            const atoms = pages.map((page: any, index: number) => {
              if (!pageAtoms[index]) {
                pageAtoms[index] = atom((get: any) => get(mountedAtom).data?.pages[index]?.data, () => { })
              }
              return pageAtoms[index]
            })
            if (pageAtoms.length > pages.length) {
              pageAtoms.splice(pages.length)
            }
            return atoms
          },
          (get: any, set: any, action: any) => {
            if (action.type !== 'REMOTE_UPDATE') {
              return set(mountedAtom, action)
            }
            getQueryContext().queryClient.setQueryData(queryKey, (data: any) => ({
              pages: action.data,
              pageParams: data?.pageParams || [],
            }))
          },
        )
        const objectStores = getQueryContext().objectStores
        const schema = queryConfig.schema && buildSchema(queryConfig.schema, createObjectDefMap(objectStores))
        if (schema?.requiresNormalization) {
          const atomMap = new WeakMap()
          const originalDataAtom = dataAtom
          dataAtom = atom(
            (get: any) => get(originalDataAtom).map((pageAtom: any) => {
              if (!atomMap.get(pageAtom)) {
                atomMap.set(pageAtom, createNormalizedAtom(pageAtom, schema, objectStores, atomStoreManager, !!queryConfig.syncObjects))
              }
              return atomMap.get(pageAtom)
            }),
            (get: any, set: any, action: any) => {
              if (action.type !== 'REMOTE_UPDATE') {
                return set(originalDataAtom, action)
              }
              action.data.forEach((pageData: any, index: number) => {
                const pageAtom = get(dataAtom)[index]
                if (pageAtom) {
                  atomStoreManager.set(pageAtom, { type: 'REMOTE_UPDATE', data: pageData })
                }
                else {
                  throw new Error(`No pageDataAtom found for index ${index}`)
                }
              })
            },
          )
        }
        if (queryConfig.sync) {
          const originalDataAtom = dataAtom
          dataAtom = setupAtomWithMount(originalDataAtom, () => queryConfig.sync(args, {
            ...context,
            mutate: (updater: any) => {
              const pageData = atomStoreManager.get(dataAtom).map((atom: any) => atomStoreManager.get(atom))
              if (pageData.includes(undefined)) {
                console.warn('Skipping sync mutation because some page data is undefined')
                return
              }
              const updatedData = produce(pageData, updater)
              if (updatedData.length !== pageData.length) {
                throw new Error('Cannot add/delete pages in paginated query mutation')
              }
              atomStoreManager.set(originalDataAtom, { type: 'REMOTE_UPDATE', data: updatedData })
            },
          }))
        }
        const joinedDataAtom = createCustomAtom(dataAtom, (get: any) => {
          const pageData = get(dataAtom).map((atom: any) => get(atom)).filter((data: any) => data !== undefined)
          const pages = get(mountedAtom).data?.pages
          const joinedPages = pageData.map((data: any, index: number) => ({
            data,
            nextPage: pages?.[index]?.nextPage,
            prevPage: pages?.[index]?.prevPage,
          }))
          return queryConfig.joinPages
            ? queryConfig.joinPages(joinedPages)
            : joinedPages.reduce((acc: any[], page: any) => {
              if (!Array.isArray(page.data)) {
                throw new TypeError('Expected array data in page')
              }
              acc.push(...page.data)
              return acc
            }, [])
        })
        const outputAtom = createCustomAtom(joinedDataAtom, (get: any) => {
          const { output } = queryConfig
          const data = get(joinedDataAtom)
          return output
            ? (data === undefined ? undefined : output({ data, get, args }, context))
            : data
        })
        return Object.assign(createCustomAtom(outputAtom, (get: any) => {
          const result = get(mountedAtom)
          if (!enabled) {
            return resourceUtils.Paginated.disabled()
          }
          const outputData = get(outputAtom)
          switch (result.status) {
            case 'error':
              return resourceUtils.Paginated.error(result.error)
            case 'success':
              if (outputData === undefined) {
                return resourceUtils.Paginated.loading()
              }
              return resourceUtils.Paginated.loaded(outputData, {
                hasNextPage: result.hasNextPage,
                hasPreviousPage: result.hasPreviousPage,
                isFetchingNextPage: result.isFetchingNextPage,
                isFetchingPreviousPage: result.isFetchingPreviousPage,
              }, result.error || [])

            case 'loading':
            default:
              return resourceUtils.Paginated.loading()
          }
        }), {
          queryKey,
          __OPAQUE_RQ_PAGINATED_QUERY__: OPAQUE_RQ_PAGINATED_QUERY,
        })
      }, deepEqualIgnoreKeys)
      return (args: any) => queryAtomFamily(args)
    }
  }

  /**
   * Creates the Mutation method.
   * @returns The Mutation function.
   */
  private createMutationMethod() {
    const extrasProvider = this.extrasProvider
    const getQueryContext = this.getQueryContext.bind(this)
    return (mutationConfig: any) => {
      const mutationKey = [++queryKeyCounter]
      const [_, mutationAtom] = createQueryAtoms(
        () => ({
          mutationKey,
          mutationFn: async (variables: any) => {
            const context = extrasProvider()
            const queryManager = new QueryMutationManager(getQueryContext().queryClient)
            const objectManager = new ObjectStoreManager(getQueryContext().objectStores)
            try {
              const result = mutationConfig(variables, { query: queryManager, objects: objectManager, ...context })
              const promise = result instanceof Promise ? result : Promise.resolve(result)
              queryManager.registerPromise(promise)
              objectManager.registerPromise(promise)
              return await promise
            }
            catch (error: any) {
              throw new Error(error)
            }
          },
        }),
        (get: any) => get(queryClientAtom),
        (context: any, options: any) => new MutationObserver(context, options),
        (action: any, observer: any) => observer.mutate(...action),
      )
      return mutationAtom
    }
  }

  /**
   * Creates the ObjectQuery method.
   * @returns The ObjectQuery function.
   */
  private createObjectQueryMethod() {
    const getQueryContext = this.getQueryContext.bind(this)
    return (store: any) => createRemovableAtomFamily((id: any) => {
      if (!id) {
        return atom(resourceUtils.disabled(), () => { })
      }
      const storeAtom = setupAtomWithMount(store.atom(id), () => {
        const context = getQueryContext()
        if (context.atomStore.get(store.atom(id)) === LIVESTORE_LOADING) {
          fetchObject(context.atomStore, store, id, { policy: 'networkOnly' }, context.gremlinConfig)
        }
      })
      return atom((get: any) => {
        const data = get(storeAtom)
        switch (data) {
          case LIVESTORE_LOADING:
            return resourceUtils.loading()
          case LIVESTORE_TOMBSTONED:
            return resourceUtils.error(new Error(`Encountered a tombstoned object: ${id} ${store.objectDef.description}`))
          case null:
            return resourceUtils.loading()
          default:
            return resourceUtils.loaded(data)
        }
      }, (get: any, set: any, action: any) => {
        const context = getQueryContext()
        if (action.type === 'refetch') {
          fetchObject(context.atomStore, store, id, { policy: 'networkOnly' }, context.gremlinConfig)
        }
      })
    })
  }

  /**
   * Helper method to create query atoms, extracted for reuse.
   * @param optionsFn - Function to get query options.
   * @param contextFn - Function to get context.
   * @param observerFactory - Factory for creating observers.
   * @param actionHandler - Handler for actions.
   * @returns A tuple of atoms for the query.
   */
  private createQueryAtoms(optionsFn: any, contextFn: any, observerFactory: any, actionHandler: any): [any, any] {
    const observersMapAtom = atom(() => new WeakMap())
    const updateCounterAtom = atom(0)
    const uniqueSymbol = Symbol('')

    const observerAtom = atom((get: any) => {
      get(updateCounterAtom)
      const context = contextFn(get)
      const options = optionsFn(get)
      const observersMap = get(observersMapAtom)
      let observer = observersMap.get(context)
      if (observer) {
        observer[uniqueSymbol] = true
        observer.setOptions(options, { listeners: false })
        delete observer[uniqueSymbol]
      }
      else {
        observer = observerFactory(context, options)
        observersMap.set(context, observer)
      }
      return observer
    })

    const observableAtom = atom((get: any) => {
      const observer = get(observerAtom)
      const observable = {
        subscribe: (subscriber: any) => {
          const notify = (result: any) => {
            const next = () => subscriber.next(result)
            if (observer[uniqueSymbol]) {
              Promise.resolve().then(next)
            }
            else {
              next()
            }
          }
          const subscription = observer.subscribe(notify)
          notify(observer.getCurrentResult())
          return { unsubscribe: subscription }
        },
      }
      return atomWithObservable(() => observable, { initialValue: observer.getCurrentResult() })
    })

    const resultAtom = atom(
      (get: any) => {
        const observableResult = get(observableAtom)
        return get(observableResult)
      },
      (get: any, set: any, action: any) => {
        const observer = get(observerAtom)
        const context = contextFn(get)
        return actionHandler(action, observer, () => {
          get(observersMapAtom).delete(context)
          set(updateCounterAtom, (count: number) => count + 1)
        }, context)
      },
    )

    const promiseAtom = atom((get: any) => {
      const observer = get(observerAtom)
      const observable = {
        subscribe: (subscriber: any) => {
          const notify = (result: any) => {
            if ((result.isSuccess && result.data !== undefined) || (result.isError && !isCancelledError(result.error))) {
              const next = () => subscriber.next(result)
              if (observer[uniqueSymbol]) {
                Promise.resolve().then(next)
              }
              else {
                next()
              }
            }
          }
          const subscription = observer.subscribe(notify)
          notify(observer.getCurrentResult())
          return { unsubscribe: subscription }
        },
      }
      return atomWithObservable(() => observable)
    })

    const extractData = (result: any) => {
      if (result.error) {
        throw result.error
      }
      return result.data
    }

    return [
      atom((get: any) => {
        const promiseResult = get(promiseAtom)
        const resolved = get(promiseResult)
        return resolved instanceof Promise ? resolved.then(extractData) : extractData(resolved)
      }, (get: any, set: any, action: any) => set(resultAtom, action)),
      resultAtom,
    ]
  }

  // Additional methods from original class z
  setMetricsReporter(reporter: any): void {
    this.queryProviderContext.reporter = reporter
  }

  [key: `useCached${string}`]: (id: any) => any
  [key: `readCached${string}`]: (id: any) => any
  [key: `fetch${string}`]: (id: any, options?: any) => Promise<any>

  private _attachAPIs(stores: any): void {
    for (const key in stores) {
      const store = stores[key];
      (this as any)[`fetch${key}`] = async (id: any, options: any = {}) => {
        const atomStore = this.getQueryContext().atomStore
        return await fetchObject(atomStore, store, id, options, this.gremlinConfig)
      };
      (this as any)[`readCached${key}`] = (id: any) => {
        const atomStore = this.getQueryContext().atomStore
        const data = atomStore.get(store.atom(id))
        return data === LIVESTORE_LOADING || data === LIVESTORE_TOMBSTONED ? null : data
      };
      (this as any)[`useCached${key}`] = (id: any) => {
        return useAtomWithSubscription(store.atom(id))
      }
    }
  }

  extend(extension: (instance: this) => any): this {
    return Object.assign(this, extension(this))
  }

  setGremlinConfig(config: any): void {
    this.gremlinConfig = config
  }

  getMutation(mutationAtom: any) {
    return (variables: any) => this.queryProviderContext.atomStore.get(mutationAtom).mutate(variables)
  }

  fetch(queryAtom: any, options: any = {}): Promise<any> {
    return fetchQuery(this.getQueryContext().atomStore, this.queryProviderContext.queryClient, queryAtom, options)
  }

  getCachedData(queryAtom: any): any {
    const data = this.getQueryContext().atomStore.get(queryAtom)
    return data.status !== 'loaded' ? null : data.data
  }

  // Properties for query methods
  Query: ReturnType<LiveStore['createQueryMethod']>
  PaginatedQuery: ReturnType<LiveStore['createPaginatedQueryMethod']>
  Mutation: ReturnType<LiveStore['createMutationMethod']>
  ObjectQuery: ReturnType<LiveStore['createObjectQueryMethod']>
}
let X = {
  QUERY_FINISHED: 'web.livestore.query.finished',
}
let Q = {
  QUERY_REQUESTED: 'web.livestore.query.requested',
  QUERY_STUCK: 'web.livestore.query.stuck',
}
/**
 * Timer class for tracking query performance metrics, including background state and timeout handling.
 * Original: class J
 */
class QueryTimer {
  private _startTime: number
  private _timerId: number | null
  metadata: any
  finished: boolean
  backgrounded: boolean

  /**
   * Constructs a new QueryTimer instance.
   * @param options - Options for the timer, including onTimeout callback and timeoutMs.
   * @param metadata - Optional metadata for the timer.
   */
  constructor(options: { onTimeout?: (backgrounded: boolean) => void, timeoutMs?: number } = {}, metadata?: any) {
    this._startTime = performance.now()
    this._timerId = null
    this.metadata = metadata || null
    this.finished = false
    this.backgrounded = false
    this.backgrounded = document.visibilityState === 'hidden'
    document.addEventListener('visibilitychange', this.onVisibilityChange)
    if (options.onTimeout) {
      if (!options.timeoutMs) {
        throw new Error('onTimeout specified without timeoutMs')
      }
      this._timerId = setTimeout(() => {
        options.onTimeout!(this.backgrounded)
      }, options.timeoutMs)
    }
  }

  /**
   * Handles visibility change events to track if the document is backgrounded.
   * Original: onVisibilityChange
   */
  private onVisibilityChange = (): void => {
    if (document.visibilityState === 'hidden') {
      this.backgrounded = true
    }
  }

  /**
   * Finishes the timer and returns the elapsed time in milliseconds.
   * Clears the timeout if active and removes event listeners.
   * @returns The elapsed time since the timer started.
   * Original: finish
   */
  finish = (): number => {
    if (this.finished) {
      logError('LiveStore metrics', 'Timer already finished')
    }
    if (this._timerId) {
      clearTimeout(this._timerId)
    }
    this.finished = true
    document.removeEventListener('visibilitychange', this.onVisibilityChange)
    return Math.round(performance.now() - this._startTime)
  }
}
let ee = createReduxSubscriptionAtomWithState(e => e.currentUserOrgId)
/**
 * Class for reporting and batching metrics events, handling visibility changes, and managing query timers.
 * Original: let et = new class { ... }()
 */
class MetricsReporter {
  private batchedCustomEvents: any[] = []
  private batchedNumericEvents: any[] = []
  private onVisibilityChange: () => Promise<void>
  private _currentlySendingBatchedEvents: boolean = false
  private sendBatchedEvents: () => Promise<void>
  private sendBatchedEventsInterval: number
  private reportCustomEvent: (metric: string, tags?: Record<string, any>) => void
  private reportNumericEvent: (metric: string, value: number, tags?: Record<string, any>) => void
  private getDefaultTags: () => Record<string, any>
  private getFigmentTags: () => Record<string, any>
  private reportQueryRequested: (queryKey: string) => (status: string) => void

  /**
   * Constructs a new MetricsReporter instance, setting up event listeners and intervals.
   * Original: constructor() { ... }
   */
  constructor() {
    this.onVisibilityChange = async () => {
      if (document.visibilityState === 'hidden') {
        await this.sendBatchedEvents()
      }
    }

    this.sendBatchedEvents = async () => {
      if (this._currentlySendingBatchedEvents) {
        return
      }
      this._currentlySendingBatchedEvents = true
      const customEvents = this.batchedCustomEvents
      const numericEvents = this.batchedNumericEvents
      this.batchedCustomEvents = []
      this.batchedNumericEvents = []
      try {
        await Promise.all([sendBatchedMetrics(customEvents), sendBatchedHistograms(numericEvents)])
      }
      catch (error) {
        console.error(error)
      }
      this._currentlySendingBatchedEvents = false
    }

    this.reportCustomEvent = (metric: string, tags: Record<string, any> = {}) => {
      this.batchedCustomEvents.push({
        metric,
        tags: {
          ...tags,
          ...this.getDefaultTags(),
        },
      })
    }

    this.reportNumericEvent = (metric: string, value: number, tags: Record<string, any> = {}) => {
      this.batchedNumericEvents.push({
        metric,
        value,
        tags: {
          ...tags,
          ...this.getDefaultTags(),
        },
      })
    }

    document.addEventListener('visibilitychange', this.onVisibilityChange)
    window.addEventListener('pagehide', this.sendBatchedEvents)
    this.sendBatchedEventsInterval = setInterval(this.sendBatchedEvents, 5000)

    this.getDefaultTags = () => ({
      client_visibility: document.visibilityState,
      user_plan_max: getUserPlan() || '',
    })

    this.getFigmentTags = () => ({
      currentOrgId: atomStoreManager.get(ee) || '',
      source: 'livestore',
      ...this.getDefaultTags(),
    })

    this.reportQueryRequested = (queryKey: string) => {
      this.reportCustomEvent(Q.QUERY_REQUESTED, {
        query_key: queryKey,
      })
      const timer = new QueryTimer({
        onTimeout: (backgrounded: boolean) => {
          if (navigator.onLine) {
            this.reportCustomEvent(Q.QUERY_STUCK, {
              query_key: queryKey,
              backgrounded: String(backgrounded),
            })
            if (shouldSampleRequest(10000)) {
              trackEventAnalytics('web_async_request_stuck', {
                queryKey,
                backgrounded: String(backgrounded),
                ...this.getFigmentTags(),
              }, {
                batchRequest: true,
              })
            }
          }
        },
        timeoutMs: 10000,
      })
      return (status: string) => {
        const elapsed = timer.finish()
        this.reportNumericEvent(X.QUERY_FINISHED, elapsed, {
          query_key: queryKey,
          backgrounded: String(timer.backgrounded),
          success: String(status === 'success'),
        })
        if (shouldSampleRequest(elapsed)) {
          trackEventAnalytics('web_async_request', {
            queryKey,
            latencyms: elapsed,
            backgrounded: String(timer.backgrounded),
            success: status === 'success',
            ...this.getFigmentTags(),
          }, {
            batchRequest: true,
          })
        }
      }
    }
  }

  /**
   * Flushes batched events for testing purposes.
   * Original: flushBatchForTests() { ... }
   */
  flushBatchForTests(): void {
    this.sendBatchedEvents()
  }

  /**
   * Cleans up event listeners and intervals.
   * Original: async cleanup() { ... }
   */
  async cleanup(): Promise<void> {
    document.removeEventListener('visibilitychange', this.onVisibilityChange)
    window.removeEventListener('pagehide', this.sendBatchedEvents)
    clearInterval(this.sendBatchedEventsInterval)
    await setupAdvanceTimers()
  }
}

// Original: let et = new class { ... }()
let et = new MetricsReporter()
let el = {
  File: setupFileLivestoreManager(() => debugState, () => realtimeV2),
  Repo: createRepoManager(() => debugState, () => realtimeV2),
  Folder: setupFolderLivestoreManager(() => debugState, () => realtimeV2),
  Team: createTeamManager(() => debugState, () => realtimeV2),
}
/**
 * Creates and configures the main LiveStore instance with extras provider and managers.
 * Original: let ed = (function (e, t = () => ({}), i) { return new LiveStore(e, t, i) }(atomStoreManager, () => { ... }, el)).extend(...).setMetricsReporter(et)
 */
function createLiveStore(atomStoreManager: any, extrasProvider: () => any = () => ({}), managers: any) {
  return new LiveStore(atomStoreManager, extrasProvider, managers)
}

/**
 * Provides extras context for the LiveStore, including atom store, sendWithRetry, realtime client, etc.
 * Original: () => { return { atomStore: atomStoreManager, xr: sendWithRetry, ... } }
 */
function extrasProvider() {
  return {
    atomStore: atomStoreManager,
    xr: sendWithRetry,
    realtimeClient: realtimeV2,
    livegraphClient: observableState.get(),
    reduxStore: debugState,
  }
}

/**
 * Extends the LiveStore with custom query methods for File, Folder, and Team.
 * Original: .extend((e => (t) => { function i(e) { ... } return { File: i(e.File), ... } })(el))
 * @param liveStore - The LiveStore instance to extend.
 * @param managers - The managers object containing File, Folder, Team.
 * @returns The extended LiveStore instance.
 */
function extendLiveStoreWithQueries(liveStore: LiveStore, managers: any) {
  /**
   * Creates a query wrapper for a given store with a useValue hook.
   * Original: function i(e) { let i = t.ObjectQuery(e); return { useValue: (e) => { ... } } }
   * @param store - The store to query.
   * @returns An object with useValue method.
   */
  const createQueryWrapper = (store: any) => {
    const objectQuery = liveStore.ObjectQuery(store)
    return {
      useValue: (id: any) => {
        const queryAtom = objectQuery(id)
        const [resource] = setupResourceAtomHandler(queryAtom)
        return resource
      },
    }
  }

  return {
    File: createQueryWrapper(managers.File),
    Folder: createQueryWrapper(managers.Folder),
    Team: createQueryWrapper(managers.Team),
  }
}

/**
 * The main LiveStore instance, created with atom store manager, extras provider, and managers.
 * Extended with query methods and configured with metrics reporter.
 */
const liveStore = createLiveStore(atomStoreManager, extrasProvider, el).extend(() => extendLiveStoreWithQueries(liveStore, el))
liveStore.setMetricsReporter(et)
/**
 * Extends the LiveStore instance with a custom useFile hook for handling cached file data.
 * Original: export let $$ec0 = Object.assign(ed, { useFile: e => (function (e, t) { ... }(e, ed)) })
 * @param id - The file ID to fetch cached data for.
 * @returns A resource utility object indicating loading or loaded state.
 */
function useFile(id: any) {
  // Original: let i = t.useCachedFile(e || '')
  const cachedData = liveStore.useCachedFile(id || '')

  // Original: useEffect(() => { e && LIVESTORE_LOADING }, [i, e, t])
  useEffect(() => {
    if (id) {
      // Trigger or handle loading state if ID is provided (original logic appears incomplete, assuming intent to check for loading)
      // LIVESTORE_LOADING is a constant, possibly for conditional logic
    }
  }, [cachedData, id, liveStore])

  // Original: return useMemo(() => { let e = filterSpecialValue(i); return e ? resourceUtils.loaded(e) : resourceUtils.loading() }, [i])
  return useMemo(() => {
    const filteredData = filterSpecialValue(cachedData)
    return filteredData ? resourceUtils.loaded(filteredData) : resourceUtils.loading()
  }, [cachedData])
}

/**
 * Exports the extended LiveStore instance with the useFile hook added.
 * Original: export let $$ec0 = Object.assign(ed, { ... })
 */
export let liveStoreInstance = Object.assign(liveStore, {
  useFile,
})
export { getAtomMutate, setupResourceAtomHandler }
export const M4 = liveStoreInstance
export const IT = setupResourceAtomHandler
export const gY = getAtomMutate
