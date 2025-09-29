import { useEffect, useState } from 'react'
import { createFailureState, createInitState, createLoadingState, createSuccessState } from '../figma_app/851625'
/**
 * Original function: $$a0
 * Hook for managing async operations with a reset capability.
 * @param asyncFn - Function that receives an object with a reset method and returns a Promise.
 * @param deps - Dependencies array for useEffect.
 * @returns The current state of the async operation.
 */
export function useAsyncWithReset<T>(
  asyncFn: (options: { reset: () => void }) => Promise<T>,
  deps: React.DependencyList,
): ReturnType<typeof createLoadingState> {
  const initialState = createLoadingState()
  const [state, setState] = useState(initialState)

  useEffect(() => {
    let isCancelled = false
    asyncFn({
      reset: () => setState(initialState),
    }).then(
      (result) => {
        if (!isCancelled) {
          setState(createSuccessState(result))
        }
      },
      (error) => {
        if (!isCancelled) {
          setState(createFailureState(error))
        }
      },
    )
    return () => {
      isCancelled = true
    }
  }, deps)

  return state
}

/**
 * Original function: $$s1
 * Hook for managing async operations without reset.
 * @param asyncFn - Function that returns a Promise.
 * @param deps - Dependencies array for useEffect.
 * @returns The current state of the async operation.
 */
export function useAsyncEffect<T>(
  asyncFn: () => Promise<T>,
  deps: React.DependencyList,
): ReturnType<typeof createInitState> {
  const [state, setState] = useState(createInitState())

  useEffect(() => {
    let isCancelled = false
    asyncFn().then(
      (result) => {
        if (!isCancelled) {
          setState(result == null ? createInitState() : createSuccessState(result))
        }
      },
      (error) => {
        if (!isCancelled) {
          setState(createFailureState(error))
        }
      },
    )
    return () => {
      isCancelled = true
    }
  }, deps)

  return state
}

export const J = useAsyncWithReset
export const f = useAsyncEffect
