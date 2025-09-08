// Refactored from original file: 793167.ts

/**
 * Interface for UniquePath_Internal methods.
 */
export interface UniquePathInternal {
  bounds: (handle: any) => any
  getHash: (handle: any) => any
  isRect: (handle: any) => boolean
  loopBlinnCompile: (handle: any) => any
}

/**
 * UniquePathHelpers type placeholder.
 */
type UniquePathHelpers = any

export let uniquePathInternal: UniquePathInternal
export let uniquePathHelpers: UniquePathHelpers

/**
 * Represents a UniquePath with various geometry-related methods.
 */
export class UniquePath {
  handle: any

  /**
   * @param handle - The internal handle for the path.
   */
  constructor(handle: any) {
    this.handle = handle
  }

  /**
   * Returns the bounds of the path.
   */
  bounds() {
    return uniquePathInternal.bounds(this.handle)
  }

  /**
   * Returns the hash of the path.
   */
  getHash() {
    return uniquePathInternal.getHash(this.handle)
  }

  /**
   * Checks if the path is a rectangle.
   */
  isRect() {
    return uniquePathInternal.isRect(this.handle)
  }

  /**
   * Compiles the path using loopBlinn algorithm.
   */
  loopBlinnCompile() {
    return uniquePathInternal.loopBlinnCompile(this.handle)
  }
}

/**
 * Mutable version of UniquePath.
 */
export class MutableUniquePath extends UniquePath {
  /**
   * @param handle - The internal handle for the mutable path.
   */
  constructor(handle: any) {
    super(handle)
    this.handle = handle
  }
}

/**
 * Initializes UniquePath internals and helpers.
 * @param e - Object containing UniquePath_Internal and UniquePathHelpers.
 */
export function setupUniquePath(e: { UniquePath_Internal: UniquePathInternal, UniquePathHelpers: UniquePathHelpers }) {
  uniquePathInternal = e.UniquePath_Internal
  uniquePathHelpers = e.UniquePathHelpers
  globalThis.UniquePath = UniquePath
  globalThis.MutableUniquePath = MutableUniquePath
}

/**
 * Returns the current UniquePath internals and helpers.
 */
export function getUniquePathContext() {
  return {
    uniquePathHelpers,
    uniquePath_Internal: uniquePathInternal,
  }
}

// Exported names refactored for clarity and traceability
export const KO = getUniquePathContext // KO was $$d0
export const LQ = setupUniquePath // LQ was $$l1
