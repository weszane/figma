import { useMemo } from "react"
/**
 * Creates a ref callback that assigns the ref value to multiple refs
 * ($$i0 - original function name)
 * @param refs - Array of refs (functions or ref objects)
 * @returns A callback function that sets all provided refs to the same value
 */
export function createMultiRefCallback<T>(...refs: Array<React.Ref<T> | undefined>): (instance: T | null) => void {
  return (instance: T | null) => {
    refs.forEach((ref) => {
      setRefValue(ref, instance)
    })
  }
}

/**
 * Creates a memoized version of createMultiRefCallback
 * ($$a1 - original function name)
 * @param refs - Array of refs (functions or ref objects)
 * @returns A memoized callback function that sets all provided refs to the same value
 */
export function useMultiRefCallback<T>(...refs: Array<React.Ref<T> | undefined>): (instance: T | null) => void {
  return useMemo(() => createMultiRefCallback(...refs), refs)
}

/**
 * Sets the value of a ref (either a ref function or a ref object)
 * ($$s2 - original function name)
 * @param ref - The ref to set (can be a function or an object with current property)
 * @param value - The value to assign to the ref
 */
export function setRefValue<T>(ref: React.Ref<T> | undefined, value: T | null): void {
  if (typeof ref === 'function') {
    ref(value)
  }
  else if (ref && typeof ref === 'object') {
    (ref as React.MutableRefObject<T | null>).current = value
  }
}

// Export aliases for backward compatibility
export const Ay = createMultiRefCallback
export const SV = useMultiRefCallback
export const cZ = setRefValue
