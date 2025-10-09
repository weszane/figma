// Refactored to improve readability, added types, and simplified logic
// Original function name: $$n0

/**
 * Creates a web worker from a given script URL.
 * If the URL is same-origin, it creates a worker directly.
 * If cross-origin and fallback is allowed, it uses a Blob to load the script.
 *
 * @param scriptUrl - The URL of the worker script
 * @param rejectCrossOrigin - Whether to throw an error for cross-origin scripts
 * @returns A Worker instance
 */
export function createWorker(scriptUrl: string, rejectCrossOrigin: boolean = false): Worker {
  // Check if the script URL is same-origin
  const isSameOrigin = (url: string): boolean => {
    try {
      return new URL(url, window.location.href).origin === window.location.origin
    }
    catch {
      return false
    }
  }

  // If same-origin, create worker directly
  if (isSameOrigin(scriptUrl)) {
    return new Worker(scriptUrl)
  }

  // If cross-origin and fallback is disabled, throw error
  if (rejectCrossOrigin) {
    throw new Error(`Cannot load cross-origin worker ${scriptUrl}`)
  }

  // For cross-origin with fallback, use Blob to load script
  const blob = new Blob([`importScripts("${scriptUrl}");`], {
    type: "application/javascript",
  })
  return new Worker(URL.createObjectURL(blob))
}

export const x = createWorker
