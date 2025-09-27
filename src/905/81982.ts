import Fuse from 'fuse.js'
import { getFalseValue, isEvalViewPathCheck } from '../figma_app/897289'

// Original global counter for library IDs
let libraryIdCounter = 0

// Original worker and message handling
let worker: Worker | null = null
let messageIdCounter = 0
let messageCallbacks: { [key: number]: (results: any) => void } = {}

/**
 * Creates a unique message ID and stores the callback for worker responses.
 * Original: f
 * @param callback - The callback to invoke with search results.
 * @returns The unique message ID.
 */
function createMessageId(callback: (results: any) => void): number {
  const id = messageIdCounter++
  messageCallbacks[id] = callback
  return id
}

/**
 * Gets the worker instance if conditions allow, initializing it if necessary.
 * Original: m
 * @returns The worker instance or null.
 */
function getWorker(): Worker | null {
  if (!(getFalseValue() || isEvalViewPathCheck())) {
    if (!worker) {
      worker = new Worker((globalThis as any).Fig.librarySearchWorkerURL)
      worker.onmessage = (event: MessageEvent) => {
        if (event.data.type === 'SEARCH_RESULTS') {
          const messageId = event.data.messageId
          const callback = messageCallbacks[messageId]
          if (callback) {
            callback(event.data.results)
            delete messageCallbacks[messageId]
          }
        }
      }
    }
    return worker
  }
  return null
}

/**
 * A simple Fuse.js search wrapper without including scores.
 * Original: $$d2
 */
export const SimpleFuseSearch = class {
  options: any
  sourceList: any[]
  fuse: Fuse<any>

  /**
   * Constructs a SimpleFuseSearch instance.
   * @param sourceList - The list of items to search.
   * @param options - Fuse options, with includeScore forced to false.
   */
  constructor(sourceList: any[], options: any = {}) {
    this.options = { ...options, includeScore: false }
    this.sourceList = sourceList
    this.fuse = new Fuse(sourceList, this.options)
  }

  /**
   * Updates the source list and reinitializes Fuse.
   * @param sourceList - The new list of items.
   */
  set(sourceList: any[]) {
    this.fuse = new Fuse(sourceList, this.options)
    this.sourceList = sourceList
  }

  /**
   * Returns a copy of the source list.
   * @returns A copy of the source list.
   */
  list(): any[] {
    return [...this.sourceList]
  }

  /**
   * Searches the list using the query.
   * @param query - The search query.
   * @returns The search results.
   */
  search(query: string): any[] {
    return this.fuse.search(query.trim())
  }
}

/**
 * A basic Fuse.js search wrapper.
 * Original: $$c0
 */
export const BasicFuseSearch = class {
  options: any
  sourceList: any[]
  fuse: Fuse<any>

  /**
   * Constructs a BasicFuseSearch instance.
   * @param sourceList - The list of items to search.
   * @param options - Fuse options.
   */
  constructor(sourceList: any[], options: any = {}) {
    this.options = options
    this.sourceList = sourceList
    this.fuse = new Fuse(sourceList, options)
  }

  /**
   * Updates the source list and reinitializes Fuse.
   * @param sourceList - The new list of items.
   */
  set(sourceList: any[]) {
    this.fuse = new Fuse(sourceList, this.options)
    this.sourceList = sourceList
  }

  /**
   * Returns a copy of the source list.
   * @returns A copy of the source list.
   */
  list(): any[] {
    return [...this.sourceList]
  }

  /**
   * Searches the list using the query.
   * @param query - The search query.
   * @returns The search results.
   */
  search(query: string): any[] {
    return this.fuse.search(query.trim())
  }
}

/**
 * A Fuse.js search wrapper that uses a web worker for operations.
 * Original: $$u3
 */
export const WorkerFuseSearch = class {
  fuse: Fuse<any> | null = null
  libraryId: number
  options: any
  sourceList: any[] = []

  /**
   * Constructs a WorkerFuseSearch instance.
   * @param options - Fuse options, with includeScore forced to true.
   */
  constructor(options: any = {}) {
    this.libraryId = libraryIdCounter++
    this.options = { ...options, includeScore: true }
  }

  /**
   * Updates the source list, initializing Fuse or posting to worker.
   * @param sourceList - The new list of items.
   */
  set(sourceList: any[]) {
    const workerInstance = getWorker()
    if (workerInstance) {
      const message = {
        type: 'INIT',
        list: sourceList,
        libraryId: this.libraryId,
        options: this.options,
      }
      workerInstance.postMessage(message)
    }
    else {
      this.fuse = new Fuse(sourceList, this.options)
    }
    this.sourceList = sourceList
  }

  /**
   * Returns a copy of the source list.
   * @returns A copy of the source list.
   */
  list(): any[] {
    return [...this.sourceList]
  }

  /**
   * Searches the list using the query, using worker if available.
   * @param query - The search query.
   * @returns A promise resolving to the search results.
   */
  search(query: string): Promise<any[]> {
    const workerInstance = getWorker()
    const trimmedQuery = query.trim()
    if (workerInstance) {
      return new Promise((resolve) => {
        const messageId = createMessageId(resolve)
        const message = {
          type: 'SEARCH',
          libraryId: this.libraryId,
          pattern: trimmedQuery,
          messageId,
        }
        workerInstance.postMessage(message)
      })
    }
    else {
      return this.fuse ? Promise.resolve(this.fuse.search(trimmedQuery)) : Promise.resolve([])
    }
  }
}

/**
 * An advanced Fuse.js search wrapper with exact match, add, remove, and update operations, using a web worker.
 * Original: $$p1
 */
export const AdvancedWorkerFuseSearch = class {
  fuse: Fuse<any> | null = null
  libraryId: number
  exactMatch: boolean
  options: any

  /**
   * Constructs an AdvancedWorkerFuseSearch instance.
   * @param config - Configuration object with exactMatch and other options.
   */
  constructor({ exactMatch, ...options }: { exactMatch?: boolean } & any = {}) {
    this.libraryId = libraryIdCounter++
    this.exactMatch = exactMatch ?? false
    this.options = { ...options, useExtendedSearch: this.exactMatch }
  }

  /**
   * Updates the source list, initializing Fuse or posting to worker.
   * @param sourceList - The new list of items.
   */
  set(sourceList: any[]) {
    const workerInstance = getWorker()
    if (workerInstance) {
      const message = {
        type: 'INIT',
        list: sourceList,
        libraryId: this.libraryId,
        options: this.options,
        newFuse: true,
      }
      workerInstance.postMessage(message)
    }
    else {
      this.fuse = new Fuse(sourceList, this.options)
    }
  }

  /**
   * Searches the list using the query, with exact match handling if enabled.
   * @param query - The search query.
   * @returns A promise resolving to the search results.
   */
  search(query: string): Promise<any[]> {
    const workerInstance = getWorker()
    let processedQuery = query
    if (typeof query === 'string') {
      processedQuery = this.exactMatch ? `"${query.trim()}"` : query.trim()
    }
    if (workerInstance) {
      return new Promise((resolve) => {
        const messageId = createMessageId(resolve)
        const message = {
          type: 'SEARCH',
          libraryId: this.libraryId,
          pattern: processedQuery,
          messageId,
          newFuse: true,
        }
        workerInstance.postMessage(message)
      })
    }
    else {
      return this.fuse ? Promise.resolve(this.fuse.search(processedQuery)) : Promise.resolve([])
    }
  }

  /**
   * Adds an item to the search index.
   * @param item - The item to add.
   */
  add(item: any) {
    const workerInstance = getWorker()
    if (workerInstance) {
      const message = {
        type: 'ADD',
        doc: item,
        libraryId: this.libraryId,
      }
      workerInstance.postMessage(message)
    }
    else {
      this.fuse?.add(item)
    }
  }

  /**
   * Removes items from the search index based on a key and value.
   * @param key - The key to match.
   * @param value - The value object to match against.
   */
  remove(key: string, value: any) {
    const workerInstance = getWorker()
    if (workerInstance) {
      const id = value[key]
      const message = {
        type: 'REMOVE',
        key,
        id,
        libraryId: this.libraryId,
      }
      workerInstance.postMessage(message)
    }
    else {
      this.fuse?.remove(item => item[key] === value[key])
    }
  }

  /**
   * Updates the search index by removing and adding items.
   * @param key - The key for removal.
   * @param removeList - List of values to remove.
   * @param addList - List of items to add.
   */
  updateEntries(key: string, removeList: any[], addList: any[]) {
    const workerInstance = getWorker()
    if (workerInstance) {
      const message = {
        type: 'UPDATE',
        removeKey: key,
        removeList,
        addList,
        libraryId: this.libraryId,
      }
      workerInstance.postMessage(message)
    }
    else {
      for (const item of removeList) {
        this.fuse?.remove(searchItem => searchItem[key] === item)
      }
      for (const item of addList) {
        this.fuse?.add(item)
      }
    }
  }

  /**
   * Logs the index via the worker.
   */
  logIndex() {
    const workerInstance = getWorker()
    if (workerInstance) {
      const message = {
        type: 'LOG',
        libraryId: this.libraryId,
      }
      workerInstance.postMessage(message)
    }
  }
}
export const Bg = BasicFuseSearch
export const CN = AdvancedWorkerFuseSearch
export const Ef = SimpleFuseSearch
export const KH = WorkerFuseSearch
