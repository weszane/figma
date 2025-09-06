/**
 * BaseMap - Original class 'n'
 * Provides a wrapper around Map with common methods.
 */
class BaseMap<K, V> {
  protected map: Map<K, V>

  constructor() {
    this.map = new Map<K, V>()
  }

  /**
   * Checks if the map contains a key.
   * @param key - The key to check.
   */
  has(key: K): boolean {
    return this.map.has(key)
  }

  /**
   * Returns the number of elements in the map.
   */
  get size(): number {
    return this.map.size
  }

  /**
   * Returns an iterator over the keys.
   */
  keys(): IterableIterator<K> {
    return this.map.keys()
  }

  /**
   * Returns an iterator over the values.
   */
  values(): IterableIterator<V> {
    return this.map.values()
  }

  /**
   * Returns an iterator over the entries.
   */
  entries(): IterableIterator<[K, V]> {
    return this.map.entries()
  }
}

/**
 * MultiValueMap - Original class '$$r0'
 * Stores multiple values per key using arrays.
 */
export class MultiValueMap<K, V> extends BaseMap<K, V[]> {
  /**
   * Initializes the map with optional entries.
   * @param entries - Array of [key, value] pairs.
   */
  constructor(entries?: [K, V][]) {
    super()
    if (entries) {
      for (const [key, value] of entries) {
        this.add(key, value)
      }
    }
  }

  /**
   * Adds a value to the array for the given key.
   * @param key - The key.
   * @param value - The value to add.
   */
  add(key: K, value: V): void {
    if (this.has(key)) {
      this.map.get(key)!.push(value)
    }
    else {
      this.map.set(key, [value])
    }
  }

  /**
   * Gets the array of values for the given key.
   * @param key - The key.
   */
  get(key: K): V[] {
    return this.map.get(key) ?? []
  }
}

/**
 * MultiSetMap - Original class '$$a1'
 * Stores multiple values per key using sets.
 */
export class MultiSetMap<K, V> extends BaseMap<K, Set<V>> {
  /**
   * Initializes the map with optional entries.
   * @param entries - Array of [key, value] pairs.
   */
  constructor(entries?: [K, V][]) {
    super()
    if (entries) {
      for (const [key, value] of entries) {
        this.add(key, value)
      }
    }
  }

  /**
   * Adds a value to the set for the given key.
   * @param key - The key.
   * @param value - The value to add.
   */
  add(key: K, value: V): void {
    if (this.has(key)) {
      this.map.get(key)!.add(value)
    }
    else {
      this.map.set(key, new Set([value]))
    }
  }

  /**
   * Gets the set of values for the given key.
   * @param key - The key.
   */
  get(key: K): Set<V> {
    return this.map.get(key) ?? new Set<V>()
  }
}

// Refactored exports for original names
export const _ = MultiValueMap
export const d = MultiSetMap
