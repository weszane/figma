/**
 * Races a promise with an abort signal, rejecting if the signal is aborted.
 * @param promise - The promise to race.
 * @param signal - The optional AbortSignal to monitor for abortion.
 * @returns The resolved value of the promise, or throws if aborted.
 */
export async function withAbortSignal<T>(
  promise: Promise<T>,
  signal?: AbortSignal,
): Promise<T> {
  if (!signal)
    return promise
  if (signal.aborted)
    throw new Error('Aborted')

  // Create a promise that rejects on abort
  const abortPromise = new Promise<never>((_, reject) => {
    const abortHandler = () => reject(new Error('Aborted'))
    signal.addEventListener('abort', abortHandler)
    // Clean up listener after the race resolves
    promise.finally(() => signal.removeEventListener('abort', abortHandler))
  })

  return Promise.race([promise, abortPromise])
}

// Original export name maintained for compatibility
export const Z = withAbortSignal
