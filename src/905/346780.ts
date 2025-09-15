/**
 * Advances timers and returns a promise that resolves after 0ms.
 * @param {object} params - Parameters for timer advancement.
 * @param {(ms: number) => void} [params.advanceTimers] - Optional function to advance timers.
 * @returns {Promise<void>} Promise that resolves after advancing timers.
 * @originalName $$n0
 */
export function setupAdvanceTimers({
  advanceTimers,
}: {
  advanceTimers?: (ms: number) => void
} = {}): Promise<void> {
  // Create a promise that resolves after 0ms
  const timerPromise = new Promise<void>(resolve => setTimeout(resolve, 0))
  // Optionally advance timers
  advanceTimers?.(0)
  return timerPromise
}

// Export with original alias for backward compatibility
export const g = setupAdvanceTimers
