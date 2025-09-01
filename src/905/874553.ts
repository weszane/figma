// Original function: $$n0
// Original export: v

/**
 * Creates a deferred promise object with manual resolve and reject methods.
 * @returns An object containing the promise, resolve, reject functions, and status.
 */
export function createDeferredPromise(): {
  promise: Promise<any>
  resolve: (value: any) => void
  reject: (reason: any) => void
  status: 'pending' | 'resolved' | 'rejected'
  result?: any
  error?: any
} {
  let resolvePromise: (value: any) => void
  let rejectPromise: (reason: any) => void

  const deferred = {
    promise: new Promise<any>((resolve, reject) => {
      resolvePromise = resolve
      rejectPromise = reject
    }),
    resolve: (value: any) => {
      deferred.status = 'resolved'
      deferred.result = value
      resolvePromise(value)
    },
    reject: (reason: any) => {
      deferred.status = 'rejected'
      deferred.error = reason
      rejectPromise(reason)
    },
    status: 'pending' as 'pending' | 'resolved' | 'rejected',
    result: undefined,
    error: undefined,
  }

  return deferred
}

// Original export: v
export const v = createDeferredPromise
