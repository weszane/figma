import type { RefObject } from 'react'


export function updateRefOrCallback(
  refOrCallback: ((value: any) => void) | RefObject<any> | null | undefined,
  value: any,
): void {
  if (typeof refOrCallback === 'function') {
    // $$n0: callback branch
    refOrCallback(value)
    return
  }
  if (refOrCallback) {
    // $$n0: React ref branch
    refOrCallback.current = value
  }
}

/**
 * Refactored export for original 'c'
 */
export const c = updateRefOrCallback
