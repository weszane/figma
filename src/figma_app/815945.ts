import { LRUCache } from '../905/196201'

/**
 * Memoizes a function based on argument equality.
 * Original: $$i2
 * @param fn Function to memoize
 * @returns Memoized function
 */
export function memoizeByArgs<T extends (...args: any[]) => any>(fn: T): T {
  let cache: { args: any[], result: any } | null = null
  return function (...args: any[]) {
    if (cache && cache.args.length === args.length) {
      let isSame = true
      for (let i = 0; i < args.length; i++) {
        if (args[i] !== cache.args[i]) {
          isSame = false
          break
        }
      }
      if (isSame)
        return cache.result
    }
    cache = {
      args,
      result: fn(...args),
    }
    return cache.result
  } as T
}

/**
 * Memoizes a function using WeakMap for object keys.
 * Original: $$a1
 * @param fn Function to memoize
 * @returns Memoized function
 */
export function memoizeWeak<T extends object, R>(fn: (arg: T) => R): (arg: T) => R {
  const cache = new WeakMap<T, R>()
  return (arg: T) => {
    if (cache.has(arg))
      return cache.get(arg)!
    const result = fn(arg)
    cache.set(arg, result)
    return result
  }
}

/**
 * Memoizes a function using LRU cache.
 * Original: $$s0
 * @param fn Function to memoize
 * @param size LRU cache size
 * @returns Memoized function
 */
export function memoizeLRU<T, R>(fn: (arg: T) => R, size: number): (arg: T) => R {
  const cache = new LRUCache<T, R>(size)
  return (arg: any) => {
    if (cache.has(arg))
      return cache.get(arg)!
    const result = fn(arg)
    cache.set(arg, result)
    return result
  }
}

// Export refactored names for imports
export const UJ = memoizeLRU
export const cm = memoizeWeak
export const xx = memoizeByArgs
