/**
 * PromiseResolver handles deferred promise resolution.
 */
let resolver: ((value?: unknown) => void) | undefined;

/**
 * Creates a new promise and stores its resolver for later use.
 * @returns {Promise<unknown>} A promise that can be resolved externally.
 * @originalName $$r0
 */
export function createDeferredPromise<T>(): Promise<T> {
  return new Promise(resolve => {
    resolver = resolve;
  });
}

/**
 * Resolves the previously created deferred promise with the provided value.
 * @param {unknown} value - The value to resolve the promise with.
 * @originalName $$a1
 */
export function resolveDeferredPromise(value?: unknown): void {
  if (resolver) {
    resolver(value);
    resolver = undefined;
  }
}

// Export aliases for backward compatibility and clarity
export const D = createDeferredPromise; // original: D = $$r0
export const k = resolveDeferredPromise; // original: k = $$a1
