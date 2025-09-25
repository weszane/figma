import { createContext, useContext, useMemo } from 'react'
import { D } from '../905/490996'

/**
 * Constant used to indicate that recording should be skipped
 * Original name: $$a2
 */
export const SKIP_RECORDING = 'SKIP_RECORDING'

/**
 * Context for managing recording state
 * Original name: $$s3
 */
export const RecordingContext = createContext<null | ReturnType<typeof D>>(null)

/**
 * Hook to check if recording is enabled
 * Original name: $$o1
 * @returns boolean indicating if recording is active
 */
export function useIsRecording(): boolean {
  return !!useContext(RecordingContext)
}

/**
 * Hook to handle recording logic with memoization
 * Original name: $$l0
 * @param value - The value to be recorded
 * @param options - Transformation function to apply
 * @param deps - Dependencies for useMemo
 * @returns The processed value or original if falsy
 */
export function useRecording<T>(
  value: T,
  options: any,
  deps: React.DependencyList,
): T {
  const context = useContext(RecordingContext) || D
  const memoizedValue = useMemo(() => value, deps)
  const result = context(memoizedValue, options)
  return value ? result : value
}

export const Qv = useRecording
export const _c = useIsRecording
export const aH = SKIP_RECORDING
export const g5 = RecordingContext
