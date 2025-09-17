import { useEffect, useLayoutEffect, useRef, useState } from 'react'
/**
 * useDebouncedValue - Refactored from $$r0
 * Handles debounced state updates for a value prop.
 *
 * @param props - Object containing value and onChange handler
 * @returns Object with debounced value and onChange handler
 */
export function useDebouncedValue<T>(props: { value: T, onChange: (value: T, event?: any) => void }) {
  const [debouncedValue, setDebouncedValue] = useState(props.value)
  const pendingValueRef = useRef<T | null>(null)
  const timeoutRef = useRef<number | null>(null)

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Sync debounced value with incoming prop value
  useLayoutEffect(() => {
    if (timeoutRef.current == null) {
      setDebouncedValue(props.value)
      pendingValueRef.current = null
    }
    else {
      pendingValueRef.current = props.value
    }
  }, [props.value])

  /**
   * Handles change events with debounce logic.
   * @param value - New value to set
   * @param event - Optional event object
   */
  const handleChange = (value: T, event?: any) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = window.setTimeout(() => {
      timeoutRef.current = null
      setDebouncedValue(pendingValueRef.current ?? props.value)
      pendingValueRef.current = null
    }, 1000)
    setDebouncedValue(value)
    props.onChange(value, event)
  }

  return {
    ...props,
    value: debouncedValue,
    onChange: handleChange,
  }
}

// Export with refactored name
export const M = useDebouncedValue
