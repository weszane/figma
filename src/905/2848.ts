/**
 * Promise resolver function type
 */
type PromiseResolver = () => void

/**
 * Promise that can be resolved externally
 */
export let resolvePromise: PromiseResolver = () => { }
export let externalPromise: Promise<void> = new Promise((resolve) => {
  resolvePromise = resolve
})

/**
 * Resolves the current promise and creates a new one
 *
 * @returns {void}
 */
export function resolveAndResetPromise(): void {
  resolvePromise()
  externalPromise = new Promise((resolve) => {
    resolvePromise = resolve
  })
}

/**
 * Current promise resolver function
 */
export const WR: PromiseResolver = resolvePromise

/**
 * Function to resolve and reset the promise
 */
export const X0 = resolveAndResetPromise

/**
 * External promise that can be resolved externally
 */
export const gi: Promise<void> = externalPromise
