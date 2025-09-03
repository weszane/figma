import { SubscriptionManager } from '../905/417830'
import { observableState } from '../905/441145'
import { resourceUtils } from '../905/989992'

/**
 * Subscribes to an observable and awaits data or errors with optional retention.
 * @param e - Subscription key or identifier.
 * @param t - Additional parameters.
 * @param options - Options object with retainMs for timeout.
 * @returns Promise resolving with data or rejecting with errors.
 */
export function subscribeAndAwaitData(e: any, t: any, { retainMs: i = 0 } = {}): Promise<any> {
  return new Promise((resolve, reject) => {
    const state = observableState.get()
    if (!state) {
      reject(new Error('Observable state not available'))
      return
    }
    const subscription = state.subscribe(e, t, (event: any) => {
      if (event.status === 'loaded') {
        resolve(event.data)
        if (i > 0)
          setTimeout(() => subscription?.(), i)
      }
      else if (event.errors) {
        reject(event.errors)
        if (i > 0)
          setTimeout(() => subscription?.(), i)
      }
    })
  })
}

/**
 * Subscribes to an observable and resolves with the status.
 * @param e - Subscription key or identifier.
 * @param t - Additional parameters.
 * @returns Promise resolving with the status.
 */
export function subscribeAndGetStatus(e: any, t: any): Promise<any> {
  return new Promise((resolve) => {
    const state = observableState.get()
    if (!state) {
      resolve('error') // Assuming default status if no state
      return
    }
    const subscription = state.subscribe(e, t, (event: any) => {
      resolve(event.status)
      subscription?.()
    })
  })
}

/**
 * Subscribes to multiple resources and awaits all to be loaded or have errors.
 * @param e - Subscription key or identifier.
 * @param t - Array of resource arguments.
 * @returns Promise resolving with array of results.
 */
export function subscribeMultipleAndAwaitAll(e: any, t: any[]): Promise<any[]> {
  if (t.length === 0)
    return Promise.resolve([])
  return new Promise((resolve, reject) => {
    const state = observableState.get()
    if (!state) {
      reject(new Error('Livegraph client not available'))
      return
    }
    const manager = new SubscriptionManager(state, () => {
      const results = t.map(arg => ({
        args: arg,
        result: resourceUtils.from(manager.currentResult(arg)),
      }))
      if (results.every(({ result }) => result.status === 'loaded' || result.errors)) {
        resolve(results)
        manager.clear()
      }
    })
    manager.update(e, t)
  })
}

// Original function names: $$o0, $$l1, $$d2
export const Ek = subscribeAndAwaitData
export const RI = subscribeAndGetStatus
export const S8 = subscribeMultipleAndAwaitAll
