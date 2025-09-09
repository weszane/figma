/**
 * Doubly linked list node for LRUCache.
 */
interface LRUNode<K, V> {
  key: K
  value: V
  prev: LRUNode<K, V> | null
  next: LRUNode<K, V> | null
}

/**
 * LRUCache - Least Recently Used cache implementation.
 * Original class name: $$n0
 */
export class LRUCache<K, V> {
  /** Maximum number of elements allowed in the cache */
  private maxElements: number
  /** Current size of the cache */
  private size: number
  /** Map of keys to nodes */
  private nodeByKey: Record<string, LRUNode<K, V>>
  /** Head of the doubly linked list (most recently used) */
  private head: LRUNode<K, V> | null
  /** Tail of the doubly linked list (least recently used) */
  private tail: LRUNode<K, V> | null

  /**
   * @param maxElements Maximum number of elements in the cache
   */
  constructor(maxElements: number) {
    this.maxElements = maxElements
    this.size = 0
    this.nodeByKey = Object.create(null)
    this.head = null
    this.tail = null
  }

  /** Returns the current number of elements in the cache */
  get length(): number {
    return this.size
  }

  /**
   * Retrieves a value by key and moves it to the head (most recently used).
   * Original method name: get
   */
  get(key: string): V | undefined {
    const node = this.nodeByKey[key]
    if (!node)
      return undefined
    this.moveElemToHead(node)
    return node.value
  }

  /**
   * Sets a value for a key, adds it to the cache, and evicts least recently used if necessary.
   * Original method name: set
   */
  set(key: string, value: V): void {
    let node = this.nodeByKey[key]
    if (node) {
      this.moveElemToHead(node)
      node.value = value
    }
    else {
      node = { key, value, prev: null, next: null }
      this.addElemAsHead(node)
      this.nodeByKey[key] = node
      this.size++
      if (this.size > this.maxElements && this.tail) {
        this.delete(this.tail.key as string)
      }
    }
  }

  /**
   * Checks if a key exists in the cache.
   * Original method name: has
   */
  has(key: string): boolean {
    return Object.prototype.hasOwnProperty.call(this.nodeByKey, key)
  }

  /**
   * Resets the cache to its initial empty state.
   * Original method name: reset
   */
  reset(): void {
    this.size = 0
    this.nodeByKey = Object.create(null)
    this.head = null
    this.tail = null
  }

  /**
   * Deletes a key from the cache.
   * Original method name: delete
   */
  delete(key: string): void {
    const node = this.nodeByKey[key]
    if (!node)
      return
    delete this.nodeByKey[node.key as string]
    this.removeFromList(node)
    this.size--
  }

  /**
   * Iterates over all key-value pairs in the cache from most to least recently used.
   * Original method name: forEach
   */
  forEach(callback: (key: K, value: V) => void): void {
    let node = this.head
    while (node) {
      callback(node.key, node.value)
      node = node.next
    }
  }

  /**
   * Moves a node to the head of the list (most recently used).
   * Original method name: moveElemToHead
   */
  private moveElemToHead(node: LRUNode<K, V>): void {
    this.removeFromList(node)
    this.addElemAsHead(node)
  }

  /**
   * Removes a node from the doubly linked list.
   * Original method name: removeFromList
   */
  private removeFromList(node: LRUNode<K, V>): void {
    const prev = node.prev
    const next = node.next
    if (prev)
      prev.next = next
    if (next)
      next.prev = prev
    if (node === this.tail)
      this.tail = prev
    if (node === this.head)
      this.head = next
    node.next = node.prev = null
  }

  /**
   * Adds a node as the head of the doubly linked list.
   * Original method name: addElemAsHead
   */
  private addElemAsHead(node: LRUNode<K, V>): void {
    if (this.head) {
      node.next = this.head
      this.head.prev = node
      this.head = node
    }
    else {
      this.head = this.tail = node
    }
  }
}

/** Exported alias for LRUCache (original export const q = $$n0) */
export const q = LRUCache
