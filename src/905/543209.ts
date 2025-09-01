/**
 * Represents a hash map with custom hash and equality functions.
 * Original class name: $$n0
 */
export interface HashMapEntry<K, V> {
  key: K;
  value: V;
}

/**
 * HashMap provides a map-like structure with custom hash and equality logic.
 * @template K - Type of the key.
 * @template V - Type of the value.
 */
export class HashMap<K, V> {
  private _buckets: Map<number, HashMapEntry<K, V>[]>;
  private _hash: (key: K) => number;
  private _equals: (a: K, b: K) => boolean;

  /**
   * @param hashFn - Function to compute hash from a key.
   * @param equalsFn - Function to compare two keys for equality.
   */
  constructor(hashFn: (key: K) => number, equalsFn: (a: K, b: K) => boolean) {
    this._buckets = new Map();
    this._hash = hashFn;
    this._equals = equalsFn;
  }

  /**
   * Retrieves the value associated with the given key, or returns the default value if not found.
   * Original method name: get
   * @param key - The key to look up.
   * @param defaultValue - The value to return if key is not found.
   */
  get(key: K, defaultValue: V): V {
    const hash = this._hash(key);
    const bucket = this._buckets.get(hash);
    if (bucket !== undefined) {
      for (const entry of bucket) {
        if (this._equals(key, entry.key)) {
          return entry.value;
        }
      }
    }
    return defaultValue;
  }

  /**
   * Sets the value for the given key in the map.
   * Original method name: set
   * @param key - The key to set.
   * @param value - The value to associate with the key.
   */
  set(key: K, value: V): V {
    const hash = this._hash(key);
    let bucket = this._buckets.get(hash);
    if (bucket === undefined) {
      bucket = [];
      this._buckets.set(hash, bucket);
    }
    for (const entry of bucket) {
      if (this._equals(key, entry.key)) {
        entry.value = value;
        return value;
      }
    }
    bucket.push({ key, value });
    return value;
  }

  /**
   * Removes the entry associated with the given key.
   * Original method name: remove
   * @param key - The key to remove.
   */
  remove(key: K): void {
    const hash = this._hash(key);
    const bucket = this._buckets.get(hash);
    if (bucket !== undefined) {
      for (let i = 0; i < bucket.length; ++i) {
        if (this._equals(key, bucket[i].key)) {
          bucket.splice(i, 1);
          if (bucket.length === 0) {
            this._buckets.delete(hash); // Fixed typo: $$delete -> delete
          }
          break;
        }
      }
    }
  }
}

// Export alias for backward compatibility (original export: J = $$n0)
export const J = HashMap;
