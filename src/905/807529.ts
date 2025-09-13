/**
 * Ensures the provided function runs only once at a time, ignoring concurrent calls.
 * Original name: $$n0
 * @param fn Function to wrap
 * @returns Wrapped function that prevents concurrent execution
 */
export function runOnceAtATime<T extends (...args: any[]) => void>(fn: T): (...args: Parameters<T>) => void {
  let isRunning = false
  return (...args: Parameters<T>) => {
    if (!isRunning) {
      try {
        isRunning = true
        fn(...args)
      }
      finally {
        isRunning = false
      }
    }
  }
}

/** Exported alias for runOnceAtATime (original: M) */
export const M = runOnceAtATime
