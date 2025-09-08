
import {  useImperativeHandle, useRef } from 'react'

/**
 * Custom hook that exposes a ref to the parent component.
 * This allows the parent to directly access the DOM element or component instance.
 *
 * @param ref - The ref passed from the parent component
 * @returns A mutable ref object pointing to the DOM element
 */
export function useExposedRef<T>(ref: React.Ref<T>) {
  const internalRef = useRef<T>(null)

  useImperativeHandle(ref, () => internalRef.current!, [])

  return internalRef
}

export const M = useExposedRef
