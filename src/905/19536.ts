import { isEqual } from 'lodash-es'
import { useCallback, useMemo, useRef, useState } from 'react'
import { shallowEqual } from '../905/605584'
import { useLatestRef } from '../figma_app/922077'

/**
 * Returns a memoized value, using a custom equality function.
 * Original: $$u5
 */
export function useStableMemo(value: any, equalityFn: (a: any, b: any) => boolean = isEqual) {
  const latestRef = useLatestRef(value)
  const stableRef = useRef(value)

  if (latestRef != null && (value === latestRef || equalityFn(value, stableRef.current))) {
    return stableRef.current
  }
  else {
    stableRef.current = value
    return value
  }
}

/**
 * Returns a memoized value using useMemo.
 * Original: $$o3
 */
export function useMemoStable(factory: () => any, deps: any[]) {
  return useStableMemo(useMemo(factory, deps))
}

/**
 * Returns a memoized value using useMemo and shallowEqual.
 * Original: $$l4
 */
export function useMemoShallow(factory: () => any, deps: any[]) {
  return useStableMemo(useMemo(factory, deps), shallowEqual)
}

/**
 * Returns a memoized value using useMemo and a custom equality function.
 * Original: $$d0
 */
export function useMemoCustom(factory: () => any, deps: any[], equalityFn: (a: any, b: any) => boolean) {
  return useStableMemo(useMemo(factory, deps), equalityFn)
}

/**
 * Returns a memoized value using useMemo and a custom array element equality function.
 * Original: $$c2
 */
export function useMemoArrayCustom(factory: () => any[], deps: any[], elementEqual: (a: any, b: any) => boolean) {
  return useMemoCustom(factory, deps, (a: any[], b: any[]) => {
    if (a.length !== b.length)
      return false
    for (let i = 0; i < a.length; i++) {
      if (!elementEqual(a[i], b[i]))
        return false
    }
    return true
  })
}

/**
 * Returns a stateful value and a setter that only updates if the value changes according to the equality function.
 * Original: $$p1
 */
export function useStableState<T>(initialValue: T, equalityFn: (a: T, b: T) => boolean = isEqual): [T, (value: T | ((prev: T) => T)) => void] {
  const [state, setState] = useState(initialValue)
  const stateRef = useRef(state)
  stateRef.current = state

  const setStableState = useCallback((value: T | ((prev: T) => T)) => {
    const nextValue = typeof value === 'function' ? (value as (prev: T) => T)(stateRef.current) : value
    if (nextValue === stateRef.current || equalityFn(nextValue, stateRef.current))
      return
    setState(nextValue)
  }, [equalityFn])

  return [state, setStableState]
}

// Exported aliases for backward compatibility and refactored names
export const DD = useMemoCustom // $$d0
export const ID = useStableState // $$p1
export const Op = useMemoArrayCustom // $$c2
export const k9 = useMemoStable // $$o3
export const wm = useMemoShallow // $$l4
export const zN = useStableMemo // $$u5
