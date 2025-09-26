import { useCallback, useState } from 'react'

/**
 * Custom hook that provides a counter with increment functionality
 * Original name: $$r0
 */
export function useCounter() {
  const [count, setCount] = useState<number>(0)

  /**
   * Increments the counter by 1
   * Original implementation: useCallback(() => t(e => e + 1), [])
   */
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])

  return {
    count,
    increment,
  }
}

/**
 * Alias for useCounter hook
 * Original name: C
 */
export const C = useCounter
