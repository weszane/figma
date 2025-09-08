
// Internal variable to hold the runtime instance
export let runtimeInstance: any

/**
 * Stores the runtime instance for later retrieval.
 * @param context - The context object containing the Runtime property.
 * (Original function: $$r1)
 */
export function setRuntimeContext(context: { Runtime: any }): void {
  runtimeInstance = context.Runtime
}

/**
 * Retrieves the stored runtime instance.
 * @returns An object containing the runtime instance.
 * (Original function: $$a0)
 */
export function getRuntimeContext(): { runtime: any } {
  return {
    runtime: runtimeInstance,
  }
}


// Exported aliases for backward compatibility
export const KO = getRuntimeContext
export const LQ = setRuntimeContext
