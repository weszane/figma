/**
 * Data Structures and Collections Management Module
 * 
 * This module handles advanced data structures, collections management,
 * memory optimization, and data manipulation utilities extracted from the main plugin file.
 * 
 * Key responsibilities:
 * - Hash maps and hash tables with custom hash/equality functions
 * - Memory management and optimization systems
 * - Collection utilities (arrays, maps, sets, queues, stacks)
 * - Data structure algorithms (sorting, filtering, searching)
 * - Buffer management and binary data handling
 * - Cache systems and data deduplication
 * - Memory profiling and usage tracking
 * - Data serialization and deserialization
 */

/**
 * Data Structure Types and Interfaces
 */
export interface HashMapEntry<K, V> {
  key: K
  value: V
}

export interface CollectionIterator<T> {
  next: () => IteratorResult<T>
  hasNext: () => boolean
  reset: () => void
}

export interface MemoryUsageStats {
  totalMemory: number
  usedMemory: number
  freeMemory: number
  heapUsed: number
  heapTotal: number
  external: number
  arrayBuffers: number
}

export interface CacheEntry<T> {
  key: string
  value: T
  timestamp: number
  accessCount: number
  size: number
}

export interface BufferInfo {
  buffer: ArrayBuffer
  byteLength: number
  byteOffset: number
  type: BufferType
}

export interface DataNode<T> {
  data: T
  children: DataNode<T>[]
  parent?: DataNode<T>
  id: string
}

export interface SortingOptions<T> {
  compareFn?: (a: T, b: T) => number
  direction: 'asc' | 'desc'
  field?: keyof T
  stable?: boolean
}

export interface FilterOptions<T> {
  predicate: (item: T) => boolean
  limit?: number
  offset?: number
}

export type BufferType = 'ARRAY_BUFFER' | 'SHARED_ARRAY_BUFFER' | 'TYPED_ARRAY'
export type CollectionType = 'ARRAY' | 'MAP' | 'SET' | 'QUEUE' | 'STACK' | 'TREE' | 'GRAPH'

/**
 * HashMap Implementation
 * Original: HashMap from 543209.ts
 */
export class HashMap<K, V> {
  private _buckets: Map<number, HashMapEntry<K, V>[]>
  private _hash: (key: K) => number
  private _equals: (a: K, b: K) => boolean
  private _size: number = 0

  /**
   * Constructor
   * Original: HashMap constructor from 543209.ts
   */
  constructor(hashFn: (key: K) => number, equalsFn: (a: K, b: K) => boolean) {
    this._buckets = new Map()
    this._hash = hashFn
    this._equals = equalsFn
  }

  /**
   * Get value by key
   * Original: get method from 543209.ts
   */
  get(key: K, defaultValue: V): V {
    const hash = this._hash(key)
    const bucket = this._buckets.get(hash)
    
    if (bucket !== undefined) {
      for (const entry of bucket) {
        if (this._equals(key, entry.key)) {
          return entry.value
        }
      }
    }
    
    return defaultValue
  }

  /**
   * Set key-value pair
   * Original: set method from 543209.ts
   */
  set(key: K, value: V): void {
    const hash = this._hash(key)
    let bucket = this._buckets.get(hash)
    
    if (bucket === undefined) {
      bucket = []
      this._buckets.set(hash, bucket)
    }
    
    // Check if key already exists
    for (let i = 0; i < bucket.length; i++) {
      if (this._equals(key, bucket[i].key)) {
        bucket[i].value = value
        return
      }
    }
    
    // Add new entry
    bucket.push({ key, value })
    this._size++
  }

  /**
   * Check if key exists
   */
  has(key: K): boolean {
    const hash = this._hash(key)
    const bucket = this._buckets.get(hash)
    
    if (bucket !== undefined) {
      for (const entry of bucket) {
        if (this._equals(key, entry.key)) {
          return true
        }
      }
    }
    
    return false
  }

  /**
   * Delete key-value pair
   */
  delete(key: K): boolean {
    const hash = this._hash(key)
    const bucket = this._buckets.get(hash)
    
    if (bucket !== undefined) {
      for (let i = 0; i < bucket.length; i++) {
        if (this._equals(key, bucket[i].key)) {
          bucket.splice(i, 1)
          this._size--
          
          if (bucket.length === 0) {
            this._buckets.delete(hash)
          }
          
          return true
        }
      }
    }
    
    return false
  }

  /**
   * Clear all entries
   */
  clear(): void {
    this._buckets.clear()
    this._size = 0
  }

  /**
   * Get size
   */
  get size(): number {
    return this._size
  }

  /**
   * Get all keys
   */
  keys(): K[] {
    const keys: K[] = []
    for (const bucket of this._buckets.values()) {
      for (const entry of bucket) {
        keys.push(entry.key)
      }
    }
    return keys
  }

  /**
   * Get all values
   */
  values(): V[] {
    const values: V[] = []
    for (const bucket of this._buckets.values()) {
      for (const entry of bucket) {
        values.push(entry.value)
      }
    }
    return values
  }

  /**
   * Get all entries
   */
  entries(): [K, V][] {
    const entries: [K, V][] = []
    for (const bucket of this._buckets.values()) {
      for (const entry of bucket) {
        entries.push([entry.key, entry.value])
      }
    }
    return entries
  }

  /**
   * Iterate over entries
   */
  forEach(callback: (value: V, key: K) => void): void {
    for (const bucket of this._buckets.values()) {
      for (const entry of bucket) {
        callback(entry.value, entry.key)
      }
    }
  }
}

/**
 * Memory Management System
 * Original: Memory functionality from 684180.ts and related files
 */
export class MemoryManager {
  private memoryUsageCallbacks: Set<(stats: MemoryUsageStats) => void> = new Set()
  private monitoringInterval: NodeJS.Timeout | null = null
  private memoryThreshold: number = 0.8 // 80% threshold
  private lastMemoryCheck: number = 0

  /**
   * Get current memory usage
   * Original: Memory stats from 793953.ts
   */
  getMemoryUsage(): MemoryUsageStats {
    const stats: MemoryUsageStats = {
      totalMemory: 0,
      usedMemory: 0,
      freeMemory: 0,
      heapUsed: 0,
      heapTotal: 0,
      external: 0,
      arrayBuffers: 0
    }

    // Browser memory API (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory
      stats.totalMemory = memory.totalJSHeapSize || 0
      stats.usedMemory = memory.usedJSHeapSize || 0
      stats.heapTotal = memory.totalJSHeapSize || 0
      stats.heapUsed = memory.usedJSHeapSize || 0
      stats.freeMemory = stats.totalMemory - stats.usedMemory
    }

    // Estimate ArrayBuffer usage
    if ('getEntriesByType' in performance) {
      const resourceEntries = performance.getEntriesByType('resource')
      stats.arrayBuffers = resourceEntries.length * 1024 // Rough estimate
    }

    return stats
  }

  /**
   * Start memory monitoring
   * Original: Memory monitoring from 792332.ts
   */
  startMonitoring(intervalMs: number = 5000): void {
    this.stopMonitoring()
    
    this.monitoringInterval = setInterval(() => {
      const stats = this.getMemoryUsage()
      this.lastMemoryCheck = Date.now()
      
      // Notify callbacks
      this.memoryUsageCallbacks.forEach(callback => {
        try {
          callback(stats)
        } catch (error) {
          console.warn('Memory usage callback error:', error)
        }
      })
      
      // Check thresholds
      this.checkMemoryThresholds(stats)
    }, intervalMs)
  }

  /**
   * Stop memory monitoring
   */
  stopMonitoring(): void {
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval)
      this.monitoringInterval = null
    }
  }

  /**
   * Check memory thresholds
   */
  private checkMemoryThresholds(stats: MemoryUsageStats): void {
    const usageRatio = stats.totalMemory > 0 ? stats.usedMemory / stats.totalMemory : 0
    
    if (usageRatio > this.memoryThreshold) {
      this.triggerMemoryWarning(stats, usageRatio)
    }
  }

  /**
   * Trigger memory warning
   */
  private triggerMemoryWarning(stats: MemoryUsageStats, usageRatio: number): void {
    console.warn(`Memory usage high: ${(usageRatio * 100).toFixed(1)}%`, stats)
    
    // Dispatch custom event
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('memoryWarning', {
        detail: { stats, usageRatio }
      }))
    }
  }

  /**
   * Add memory usage callback
   */
  addMemoryUsageCallback(callback: (stats: MemoryUsageStats) => void): void {
    this.memoryUsageCallbacks.add(callback)
  }

  /**
   * Remove memory usage callback
   */
  removeMemoryUsageCallback(callback: (stats: MemoryUsageStats) => void): void {
    this.memoryUsageCallbacks.delete(callback)
  }

  /**
   * Set memory threshold
   */
  setMemoryThreshold(threshold: number): void {
    this.memoryThreshold = Math.max(0, Math.min(1, threshold))
  }

  /**
   * Force garbage collection (if available)
   */
  forceGarbageCollection(): void {
    if ('gc' in window && typeof window.gc === 'function') {
      window.gc()
    } else if ('gc' in global && typeof global.gc === 'function') {
      global.gc()
    }
  }

  /**
   * Get memory recommendations
   */
  getMemoryRecommendations(stats: MemoryUsageStats): string[] {
    const recommendations: string[] = []
    const usageRatio = stats.totalMemory > 0 ? stats.usedMemory / stats.totalMemory : 0
    
    if (usageRatio > 0.8) {
      recommendations.push('Consider breaking large files into smaller ones')
      recommendations.push('Clean up unused layers and components')
      recommendations.push('Flatten complex shapes when possible')
      recommendations.push('Trim unused component variants')
    }
    
    if (stats.arrayBuffers > 100 * 1024 * 1024) { // 100MB
      recommendations.push('Large ArrayBuffer usage detected - check for memory leaks')
    }
    
    return recommendations
  }
}

/**
 * LRU Cache Implementation
 * Original: Cache functionality from various files
 */
export class LRUCache<T> {
  private cache: Map<string, CacheEntry<T>> = new Map()
  private accessOrder: string[] = []
  private maxSize: number
  private maxAge: number
  private currentSize: number = 0

  constructor(maxSize: number = 1000, maxAge: number = 5 * 60 * 1000) { // 5 minutes default
    this.maxSize = maxSize
    this.maxAge = maxAge
  }

  /**
   * Get value from cache
   */
  get(key: string): T | undefined {
    const entry = this.cache.get(key)
    
    if (!entry) {
      return undefined
    }
    
    // Check if expired
    if (Date.now() - entry.timestamp > this.maxAge) {
      this.delete(key)
      return undefined
    }
    
    // Update access
    entry.accessCount++
    this.updateAccessOrder(key)
    
    return entry.value
  }

  /**
   * Set value in cache
   */
  set(key: string, value: T, size: number = 1): void {
    // Remove existing entry if it exists
    this.delete(key)
    
    // Create new entry
    const entry: CacheEntry<T> = {
      key,
      value,
      timestamp: Date.now(),
      accessCount: 1,
      size
    }
    
    this.cache.set(key, entry)
    this.accessOrder.push(key)
    this.currentSize += size
    
    // Evict if necessary
    this.evictIfNecessary()
  }

  /**
   * Delete entry from cache
   */
  delete(key: string): boolean {
    const entry = this.cache.get(key)
    if (!entry) {
      return false
    }
    
    this.cache.delete(key)
    this.currentSize -= entry.size
    
    const index = this.accessOrder.indexOf(key)
    if (index > -1) {
      this.accessOrder.splice(index, 1)
    }
    
    return true
  }

  /**
   * Clear cache
   */
  clear(): void {
    this.cache.clear()
    this.accessOrder = []
    this.currentSize = 0
  }

  /**
   * Get cache statistics
   */
  getStats(): { size: number; count: number; hitRate: number } {
    let totalAccess = 0
    let totalHits = 0
    
    for (const entry of this.cache.values()) {
      totalAccess += entry.accessCount
      if (entry.accessCount > 1) {
        totalHits += entry.accessCount - 1
      }
    }
    
    return {
      size: this.currentSize,
      count: this.cache.size,
      hitRate: totalAccess > 0 ? totalHits / totalAccess : 0
    }
  }

  /**
   * Update access order
   */
  private updateAccessOrder(key: string): void {
    const index = this.accessOrder.indexOf(key)
    if (index > -1) {
      this.accessOrder.splice(index, 1)
      this.accessOrder.push(key)
    }
  }

  /**
   * Evict entries if necessary
   */
  private evictIfNecessary(): void {
    // Evict by count
    while (this.cache.size > this.maxSize) {
      this.evictLeastRecentlyUsed()
    }
    
    // Evict expired entries
    this.evictExpired()
  }

  /**
   * Evict least recently used entry
   */
  private evictLeastRecentlyUsed(): void {
    if (this.accessOrder.length > 0) {
      const oldestKey = this.accessOrder[0]
      this.delete(oldestKey)
    }
  }

  /**
   * Evict expired entries
   */
  private evictExpired(): void {
    const now = Date.now()
    const expiredKeys: string[] = []
    
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > this.maxAge) {
        expiredKeys.push(key)
      }
    }
    
    expiredKeys.forEach(key => this.delete(key))
  }
}

/**
 * Collection Utilities
 * Original: Collection manipulation from various files
 */
export class CollectionUtils {
  /**
   * Sort array with custom options
   */
  static sort<T>(array: T[], options: SortingOptions<T>): T[] {
    const { compareFn, direction, field, stable = true } = options
    
    let compareFunction: (a: T, b: T) => number
    
    if (compareFn) {
      compareFunction = compareFn
    } else if (field) {
      compareFunction = (a: T, b: T) => {
        const aVal = a[field]
        const bVal = b[field]
        
        if (aVal < bVal) return -1
        if (aVal > bVal) return 1
        return 0
      }
    } else {
      compareFunction = (a: T, b: T) => {
        if (a < b) return -1
        if (a > b) return 1
        return 0
      }
    }
    
    // Apply direction
    const finalCompareFn = direction === 'desc' 
      ? (a: T, b: T) => -compareFunction(a, b)
      : compareFunction
    
    // Use stable sort if requested
    if (stable) {
      return array
        .map((item, index) => ({ item, index }))
        .sort((a, b) => {
          const result = finalCompareFn(a.item, b.item)
          return result !== 0 ? result : a.index - b.index
        })
        .map(({ item }) => item)
    } else {
      return [...array].sort(finalCompareFn)
    }
  }

  /**
   * Filter array with options
   */
  static filter<T>(array: T[], options: FilterOptions<T>): T[] {
    const { predicate, limit, offset = 0 } = options
    
    let result = array.filter(predicate)
    
    if (offset > 0) {
      result = result.slice(offset)
    }
    
    if (limit !== undefined && limit > 0) {
      result = result.slice(0, limit)
    }
    
    return result
  }

  /**
   * Group array by key
   */
  static groupBy<T, K extends string | number | symbol>(
    array: T[], 
    keyFn: (item: T) => K
  ): Record<K, T[]> {
    const groups = {} as Record<K, T[]>
    
    for (const item of array) {
      const key = keyFn(item)
      if (!groups[key]) {
        groups[key] = []
      }
      groups[key].push(item)
    }
    
    return groups
  }

  /**
   * Deduplicate array
   */
  static deduplicate<T>(array: T[], keyFn?: (item: T) => string): T[] {
    if (!keyFn) {
      return [...new Set(array)]
    }
    
    const seen = new Set<string>()
    const result: T[] = []
    
    for (const item of array) {
      const key = keyFn(item)
      if (!seen.has(key)) {
        seen.add(key)
        result.push(item)
      }
    }
    
    return result
  }

  /**
   * Chunk array into smaller arrays
   */
  static chunk<T>(array: T[], size: number): T[][] {
    const chunks: T[][] = []
    
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size))
    }
    
    return chunks
  }

  /**
   * Flatten nested arrays
   */
  static flatten<T>(array: (T | T[])[]): T[] {
    const result: T[] = []
    
    for (const item of array) {
      if (Array.isArray(item)) {
        result.push(...this.flatten(item))
      } else {
        result.push(item)
      }
    }
    
    return result
  }

  /**
   * Find intersection of arrays
   */
  static intersection<T>(...arrays: T[][]): T[] {
    if (arrays.length === 0) return []
    if (arrays.length === 1) return [...arrays[0]]
    
    const [first, ...rest] = arrays
    
    return first.filter(item => {
      return rest.every(arr => arr.includes(item))
    })
  }

  /**
   * Find union of arrays
   */
  static union<T>(...arrays: T[][]): T[] {
    const allItems = arrays.flat()
    return [...new Set(allItems)]
  }

  /**
   * Find difference between arrays
   */
  static difference<T>(array1: T[], array2: T[]): T[] {
    const set2 = new Set(array2)
    return array1.filter(item => !set2.has(item))
  }
}

/**
 * Buffer Management System
 * Original: Buffer handling from 548559.ts
 */
export class BufferManager {
  private buffers: Map<string, BufferInfo> = new Map()
  private totalSize: number = 0
  private maxSize: number = 100 * 1024 * 1024 // 100MB default

  /**
   * Create buffer
   */
  createBuffer(id: string, size: number, type: BufferType = 'ARRAY_BUFFER'): ArrayBuffer {
    // Check if we have enough space
    if (this.totalSize + size > this.maxSize) {
      this.freeOldestBuffers(size)
    }
    
    const buffer = new ArrayBuffer(size)
    
    const info: BufferInfo = {
      buffer,
      byteLength: size,
      byteOffset: 0,
      type
    }
    
    this.buffers.set(id, info)
    this.totalSize += size
    
    return buffer
  }

  /**
   * Get buffer
   */
  getBuffer(id: string): ArrayBuffer | undefined {
    const info = this.buffers.get(id)
    return info?.buffer
  }

  /**
   * Delete buffer
   */
  deleteBuffer(id: string): boolean {
    const info = this.buffers.get(id)
    if (!info) {
      return false
    }
    
    this.buffers.delete(id)
    this.totalSize -= info.byteLength
    
    return true
  }

  /**
   * Get buffer info
   */
  getBufferInfo(id: string): BufferInfo | undefined {
    return this.buffers.get(id)
  }

  /**
   * Get total buffer size
   */
  getTotalSize(): number {
    return this.totalSize
  }

  /**
   * Get buffer count
   */
  getBufferCount(): number {
    return this.buffers.size
  }

  /**
   * Clear all buffers
   */
  clear(): void {
    this.buffers.clear()
    this.totalSize = 0
  }

  /**
   * Set max size
   */
  setMaxSize(maxSize: number): void {
    this.maxSize = maxSize
    
    // Free buffers if over limit
    if (this.totalSize > this.maxSize) {
      this.freeOldestBuffers(0)
    }
  }

  /**
   * Free oldest buffers to make space
   */
  private freeOldestBuffers(requiredSpace: number): void {
    const targetSize = this.maxSize - requiredSpace
    
    // Convert to array and sort by some criteria (could be access time, creation time, etc.)
    const bufferEntries = Array.from(this.buffers.entries())
    
    // For simplicity, just remove in order until we have enough space
    for (const [id] of bufferEntries) {
      if (this.totalSize <= targetSize) {
        break
      }
      this.deleteBuffer(id)
    }
  }

  /**
   * Copy buffer
   */
  copyBuffer(sourceId: string, targetId: string): boolean {
    const sourceInfo = this.buffers.get(sourceId)
    if (!sourceInfo) {
      return false
    }
    
    const newBuffer = new ArrayBuffer(sourceInfo.byteLength)
    new Uint8Array(newBuffer).set(new Uint8Array(sourceInfo.buffer))
    
    const targetInfo: BufferInfo = {
      buffer: newBuffer,
      byteLength: sourceInfo.byteLength,
      byteOffset: 0,
      type: sourceInfo.type
    }
    
    this.buffers.set(targetId, targetInfo)
    this.totalSize += targetInfo.byteLength
    
    return true
  }
}

/**
 * Factory Functions
 */

/**
 * Create hash map with default string hash function
 */
export function createHashMap<V>(): HashMap<string, V> {
  const stringHash = (str: string): number => {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash // Convert to 32-bit integer
    }
    return hash
  }
  
  const stringEquals = (a: string, b: string): boolean => a === b
  
  return new HashMap(stringHash, stringEquals)
}

/**
 * Create number hash map
 */
export function createNumberHashMap<V>(): HashMap<number, V> {
  const numberHash = (num: number): number => Math.floor(num)
  const numberEquals = (a: number, b: number): boolean => a === b
  
  return new HashMap(numberHash, numberEquals)
}

/**
 * Create memory manager
 */
export function createMemoryManager(): MemoryManager {
  return new MemoryManager()
}

/**
 * Create LRU cache
 */
export function createLRUCache<T>(maxSize?: number, maxAge?: number): LRUCache<T> {
  return new LRUCache<T>(maxSize, maxAge)
}

/**
 * Create buffer manager
 */
export function createBufferManager(maxSize?: number): BufferManager {
  const manager = new BufferManager()
  if (maxSize !== undefined) {
    manager.setMaxSize(maxSize)
  }
  return manager
}

/**
 * Hash function utilities
 */
export const HashFunctions = {
  /**
   * Simple string hash
   */
  stringHash: (str: string): number => {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash
    }
    return hash
  },

  /**
   * FNV-1a hash
   */
  fnv1aHash: (str: string): number => {
    let hash = 2166136261
    for (let i = 0; i < str.length; i++) {
      hash ^= str.charCodeAt(i)
      hash *= 16777619
    }
    return hash >>> 0 // Convert to unsigned 32-bit
  },

  /**
   * Object hash
   */
  objectHash: (obj: any): number => {
    const str = JSON.stringify(obj)
    return HashFunctions.stringHash(str)
  }
}

/**
 * Convenience Exports
 */
export {
  BufferManager as Buffers,
  LRUCache as Cache,
  CollectionUtils as Collections,
  HashMap as Map,
  MemoryManager as Memory
}

/**
 * Default Export - Comprehensive Data Structures and Collections System
 */
export default {
  HashMap,
  MemoryManager,
  LRUCache,
  CollectionUtils,
  BufferManager,
  HashFunctions,
  createHashMap,
  createNumberHashMap,
  createMemoryManager,
  createLRUCache,
  createBufferManager
}
