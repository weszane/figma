import { useEffect as useEffectReact, useRef as useRefReact } from 'react'

/**
 * Executes the provided effect function only once, and ensures cleanup on unmount.
 * Original function name: $$r0
 * @param effectFn - Function to execute, should return a cleanup function or void.
 */
export function useSingleEffect(effectFn: () => (() => void) | void): void {
  const hasRun = useRefReact(false)

  useEffectReact(() => {
    if (hasRun.current)
      return
    const cleanup = effectFn()
    hasRun.current = true
    return () => cleanup?.()
  }, [])
}

// Refactored export for original variable 'h'
export const h = useSingleEffect
