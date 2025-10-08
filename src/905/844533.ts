import { logErrorAndReturn } from '../905/607410'

/**
 * Represents the possible states of a promise-like object.
 */
type PromiseStatus = 'pending' | 'fulfilled' | 'rejected'

/**
 * Defines the shape of the input object for handlePromiseStatus (original: $$r0).
 */
interface PromiseLike<T = any> {
  status: PromiseStatus
  value?: T
  reason?: any
  then: (onFulfilled: (value: T) => void, onRejected: (reason: any) => void) => void
}

/**
 * Handles a promise-like object's status and returns its value, throws its reason, or sets up handlers.
 * @param obj - The promise-like object to process.
 * @returns The fulfilled value, throws the rejection reason, or returns an unreachable error.
 */
export function handlePromiseStatus<T = any>(obj: PromiseLike<T>) {
  // Original function: $$r0
  if (obj.status === 'pending') {
    logErrorAndReturn(obj)
    return new Error('unreachable')
  }
  if (obj.status === 'fulfilled') {
    return obj.value as T
  }
  if (obj.status === 'rejected') {
    throw obj.reason
  }
  obj.status = 'pending'
  obj.then(
    (value) => {
      obj.status = 'fulfilled'
      obj.value = value
    },
    (reason) => {
      obj.status = 'rejected'
      obj.reason = reason
    },
  )
  logErrorAndReturn(obj)
  return new Error('unreachable')
}

// Export with refactored name for import consistency
export const Y = handlePromiseStatus
