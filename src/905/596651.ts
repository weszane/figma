import { getFeatureFlags } from '../905/601108'

/**
 * Represents a set-like collection with advanced filtering and mapping capabilities.
 * Original class name: $$r0
 */
export class AdvancedSet<T = any, K = any> {
  #items: Set<T>
  #dict: Map<T, K>
  #filters: Map<() => boolean, T[]>

  /**
   * Constructs an AdvancedSet instance.
   * @param items - Initial items for the set.
   * @param dict - Optional mapping from item to key.
   * @param filters - Optional filters as a map from predicate to items.
   */
  constructor(items: T[], dict?: Map<T, K>, filters?: Map<() => boolean, T[]>) {
    this.#items = new Set(items)
    this.#dict = dict ?? new Map(items.map(item => [item, item as unknown as K]))
    this.#filters = filters ?? new Map()
  }

  /**
   * Returns a filtered set of items, excluding those filtered out by predicates.
   */
  get set(): Set<T> {
    const filteredOut = new Set<T>()
    this.#filters.forEach((filterItems, predicate) => {
      if (!predicate()) {
        filterItems.forEach(item => filteredOut.add(item))
      }
    })
    return new Set([...this.#items].filter(item => !filteredOut.has(item)))
  }

  /**
   * Checks if an item exists in the filtered set.
   * @param item - Item to check.
   */
  has(item: T): boolean {
    return this.set.has(item)
  }

  /**
   * Returns a new AdvancedSet sorted by the provided comparator.
   * @param compareFn - Comparator function.
   */
  sort(compareFn: (a: T, b: T) => number): AdvancedSet<T, K> {
    return new AdvancedSet(Array.from(this.set).sort(compareFn), this.#dict, this.#filters)
  }

  /**
   * Reduces the filtered set using the provided reducer.
   * @param reducer - Reducer function.
   * @param initialValue - Initial value.
   */
  reduce<U>(reducer: (acc: U, curr: T) => U, initialValue: U): U {
    return Array.from(this.set).reduce(reducer, initialValue)
  }

  /**
   * Iterates over the filtered set, calling the callback with item and its key.
   * @param callback - Function to call for each item.
   */
  forEach(callback: (item: T, key: K) => void): void {
    for (const item of this.set) {
      const key = this.#dict.get(item)
      if (!key)
        throw new Error('dictKey not found')
      callback(item, key)
    }
  }

  /**
   * Maps the filtered set using the provided mapper.
   * @param mapper - Mapping function.
   */
  map<U>(mapper: (item: T, key: K) => U): U[] {
    const result: U[] = []
    for (const item of this.set) {
      const key = this.#dict.get(item)
      if (!key)
        throw new Error('dictKey not found')
      result.push(mapper(item, key))
    }
    return result
  }

  /**
   * Returns a new AdvancedSet excluding specified items.
   * @param excludeItems - Items to exclude.
   */
  exclude(excludeItems: T[]): AdvancedSet<T, K> {
    const newItems = Array.from(this.#items).filter(item => !excludeItems.includes(item))
    const newDict = new Map(newItems.map(item => [item, this.#dict.get(item)!]))
    const newFilters = new Map<() => boolean, T[]>()
    this.#filters.forEach((items, predicate) => {
      newFilters.set(predicate, items.filter(item => !excludeItems.includes(item)))
    })
    return new AdvancedSet(newItems, newDict, newFilters)
  }

  /**
   * Returns a new AdvancedSet containing only specified items.
   * @param onlyItems - Items to include.
   */
  only(onlyItems: T[]): AdvancedSet<T, K> {
    const newItems = Array.from(this.#items).filter(item => onlyItems.includes(item))
    const newDict = new Map(newItems.map(item => [item, this.#dict.get(item)!]))
    const newFilters = new Map<() => boolean, T[]>()
    this.#filters.forEach((items, predicate) => {
      newFilters.set(predicate, items.filter(item => onlyItems.includes(item)))
    })
    return new AdvancedSet(newItems, newDict, newFilters)
  }

  /**
   * Returns a new AdvancedSet with an additional filter.
   * @param filterItems - Items for the filter.
   * @param predicate - Predicate function.
   */
  excludeUnless(filterItems: T[], predicate: () => boolean): AdvancedSet<T, K> {
    const newFilters = new Map(this.#filters)
    newFilters.set(predicate, filterItems)
    return new AdvancedSet(Array.from(this.#items), this.#dict, newFilters)
  }

  /**
   * Returns a new AdvancedSet with an additional filter based on feature flags.
   * @param filterItems - Items for the filter.
   * @param flag - Feature flag key.
   */
  excludeUnlessFlag(filterItems: T[], flag: string): AdvancedSet<T, K> {
    return this.excludeUnless(filterItems, () => !!getFeatureFlags()[flag])
  }

  /**
   * Returns a new AdvancedSet with item overrides.
   * @param overrides - Mapping of item overrides.
   */
  withOverrides(overrides: Record<string, T>): AdvancedSet<T, K> {
    const newItems: T[] = []
    const newDict = new Map<T, K>()
    this.#items.forEach((item) => {
      const key = this.#dict.get(item)
      if (!key)
        throw new Error('dictKey not found')
      const override = overrides[item as unknown as string]
      if (override) {
        newItems.push(override)
        newDict.set(override, key)
      }
      else {
        newItems.push(item)
        newDict.set(item, key)
      }
    })
    const newFilters = new Map<() => boolean, T[]>()
    this.#filters.forEach((items, predicate) => {
      newFilters.set(predicate, items.map(item => overrides[item as unknown as string] || item))
    })
    return new AdvancedSet(newItems, newDict, newFilters)
  }

  /**
   * Returns a new AdvancedSet with a prefix added to each item.
   * @param prefix - Prefix string.
   */
  withPrefix(prefix: string): AdvancedSet<string, K> {
    const newItems: string[] = []
    const newDict = new Map<string, K>()
    this.#items.forEach((item) => {
      const key = this.#dict.get(item)
      if (!key)
        throw new Error('dictKey not found')
      const newItem = `${prefix}${item}`
      newItems.push(newItem)
      newDict.set(newItem, key)
    })
    const newFilters = new Map<() => boolean, string[]>()
    this.#filters.forEach((items, predicate) => {
      newFilters.set(predicate, items.map(item => `${prefix}${item}`))
    })
    return new AdvancedSet(newItems, newDict, newFilters)
  }

  /**
   * Returns a new AdvancedSet with a suffix added to each item.
   * @param suffix - Suffix string.
   */
  withSuffix(suffix: string): AdvancedSet<string, K> {
    const newItems: string[] = []
    const newDict = new Map<string, K>()
    this.#items.forEach((item) => {
      const key = this.#dict.get(item)
      if (!key)
        throw new Error('dictKey not found')
      const newItem = `${item}${suffix}`
      newItems.push(newItem)
      newDict.set(newItem, key)
    })
    const newFilters = new Map<() => boolean, string[]>()
    this.#filters.forEach((items, predicate) => {
      newFilters.set(predicate, items.map(item => `${item}${suffix}`))
    })
    return new AdvancedSet(newItems, newDict, newFilters)
  }

  /**
   * Returns a dictionary mapping keys to items or mapped values.
   * @param mapper - Optional mapping function.
   */
  dict<U = T>(mapper?: (item: T, key: K) => U): Record<string, U> {
    const result: Record<string, U> = {}
    this.set.forEach((item) => {
      const key = this.#dict.get(item)
      if (!key)
        throw new Error('dictKey not found')
      result[key as unknown as string] = mapper ? mapper(item, key) : (item as unknown as U)
    })
    return result
  }

  /**
   * Iterator for the filtered set.
   */
  [Symbol.iterator](): Iterator<T> {
    return this.set[Symbol.iterator]()
  }

  /**
   * Returns the values of the filtered set.
   */
  values(): IterableIterator<T> {
    return this.set.values()
  }

  /**
   * Returns the size of the filtered set.
   */
  size(): number {
    return this.toArray().length
  }

  /**
   * Returns the filtered set as an array.
   */
  toArray(): T[] {
    return Array.from(this.values())
  }
}

// Export with original variable name for compatibility
export const X = AdvancedSet
