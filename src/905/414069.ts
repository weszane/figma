import { getElapsedTime } from '../905/293182'
import { VisualBellActions } from '../905/302958'
import { debugState } from '../905/407919'
import { subscribeObservable } from '../figma_app/84367'
import { fullscreenValue } from '../figma_app/455680'
import { isInteractionOrEvalMode } from '../figma_app/897289'

/**
 * Tracks whether a protected execution block is running.
 * (original variable: d)
 */
let isProtectedExecution = false

/**
 * Executes a function within a protected block, setting a flag during execution.
 * @param fn - Function to execute
 * (original function: $$c2)
 */
export function runProtected(fn: () => void): void {
  isProtectedExecution = true
  try {
    fn()
  }
  finally {
    isProtectedExecution = false
  }
}

/**
 * Determines if settings changes should be processed based on app mode and timing.
 * @returns boolean
 * (original function: $$u1)
 */
export function shouldProcessSettingsChange(): boolean {
  if (isInteractionOrEvalMode())
    return true
  if (isProtectedExecution)
    return false
  const fileLoadTime = fullscreenValue.fileLoadTime()
  if (fileLoadTime == null)
    return false
  const elapsed = window.performance.now() - fileLoadTime
  return !(elapsed > 0 && elapsed < 1000 || getElapsedTime() < 1000)
}

/**
 * Subscribes to observables and dispatches a visual bell action when settings change.
 * @param items - Array of objects with getObservable and getMessage methods
 * (original function: $$p0)
 */
export function subscribeSettingsChange(
  items: Array<{
    getObservable: () => { getCopy: () => unknown }
    getMessage: (copy: unknown) => Record<string, unknown> | null
  }>,
): void {
  for (const item of items) {
    subscribeObservable(item.getObservable(), {
      onChangeImmediate() {
        if (!shouldProcessSettingsChange())
          return
        const message = item.getMessage(item.getObservable().getCopy())
        if (message) {
          debugState.dispatch(
            VisualBellActions.enqueue({
              type: 'settings_changed',
              ...message,
            }),
          )
        }
      },
    })
  }
}

// Export refactored names for compatibility
export const Mo = subscribeSettingsChange
export const Ok = shouldProcessSettingsChange
export const WK = runProtected
