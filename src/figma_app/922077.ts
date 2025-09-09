import { useEffect, useRef, useState } from 'react'

/**
 * Stores the latest value in a ref and returns it.
 * @param value - The value to store.
 * @returns The latest value.
 * Original name: $$i2
 */
export function useLatestRef(value: any) {
  const ref = useRef<any>(undefined)
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

/**
 * Returns the current value, using a ref to persist it across renders.
 * If an external ref is provided, it uses that instead of its own.
 * @param value - The value to store.
 * @param externalRef - Optional external ref to use.
 * @returns The current value.
 * Original name: $$a1
 */
export function usePersistentValue<T = any>(value: T, externalRef?: React.RefObject<any>) {
  const internalRef = useRef<T>(undefined)
  const ref = externalRef || internalRef
  useEffect(() => {
    ref.current = value ?? ref.current
  })
  return value ?? ref.current
}

/**
 * Tracks the previous value of a variable.
 * @param value - The value to track.
 * @returns The previous value.
 * Original name: $$s3
 */
export function usePreviousValue(value: any) {
  const ref = useRef<{ value: any, prev: any }>({
    value,
    prev: undefined,
  })
  const currentValue = ref.current.value
  if (value !== currentValue) {
    ref.current = {
      value,
      prev: currentValue,
    }
  }
  return ref.current.prev
}

/**
 * Returns a state value that updates whenever the input changes.
 * @param value - The value to set.
 * @returns The state value.
 * Original name: $$o0
 */
export function useSyncedState(value: any) {
  const [state, setState] = useState<any>(undefined)
  useEffect(() => {
    setState(value)
  }, [value])
  return state
}

// Export aliases for backward compatibility
export const ZC = useLatestRef
export const PD = usePersistentValue
export const qd = usePreviousValue
export const $J = useSyncedState
