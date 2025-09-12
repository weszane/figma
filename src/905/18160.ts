/**
 * Original exported names:
 * - function $$n0
 * - const m = $$n0
 */

/**
 * A function to execute callbacks while accumulating any thrown errors.
 * Replaces $$n0 with a clearer name and safer implementation (no `this` binding).
 */
export type GuardFunction = () => void
export type AsyncGuardFunction = () => Promise<void>

export interface ErrorAccumulator {
  /**
   * Collected errors from guard and guardAsync.
   */
  errors: any[]

  /**
   * Execute a sync function and capture any thrown error into `errors`.
   * (original: guard)
   */
  guard: (fn: GuardFunction) => void

  /**
   * Execute an async function and capture any thrown/rejected error into `errors`.
   * (original: guardAsync)
   */
  guardAsync: (fn: AsyncGuardFunction) => Promise<void>
}

/**
 * Create an ErrorAccumulator for collecting errors from guarded executions.
 * (original factory: $$n0)
 */
export function createErrorAccumulator(): ErrorAccumulator {
  const errors: any[] = []

  const guard = (fn: GuardFunction): void => {
    try {
      fn()
    }
    catch (err) {
      errors.push(err)
    }
  }

  const guardAsync = async (fn: AsyncGuardFunction): Promise<void> => {
    try {
      await fn()
    }
    catch (err) {
      errors.push(err)
    }
  }

  return {
    errors,
    guard,
    guardAsync,
  }
}

// Keep original export aliases to avoid breaking imports.
// (original name) $$n0 -> createErrorAccumulator
export const $$n0 = createErrorAccumulator

// (original alias) m -> createErrorAccumulator
export const m = createErrorAccumulator
