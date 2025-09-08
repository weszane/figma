import { useEffect, useRef, useState } from 'react'

/**
 * useSyncedRef
 * Custom hook that returns a ref synced with state, the current state value, and a setter.
 * Original function name: $$r0
 * @param initialValue - The initial state value
 * @returns [ref, state, setState]
 */
export function useSyncedRef<T>(initialValue: T): [React.MutableRefObject<T>, T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState(initialValue)
  const ref = useRef(initialValue)

  useEffect(() => {
    ref.current = state
  }, [state])

  return [ref, state, setState]
}

// Export alias for backward compatibility (Original export: J)
export const J = useSyncedRef
