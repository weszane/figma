interface HandlerResult {
  code: any[]
  error?: Error
  autocomplete?: any[]
}
/**
 * Default handler that returns a not implemented error
 * @param e - input parameter (unused in default implementation)
 * @returns Promise resolving to an object with empty code array and error
 */
let defaultHandler = (_e: any): Promise<HandlerResult> =>
  Promise.resolve({
    code: [],
    error: new Error("Not implemented"),
  })

/**
 * Sets the handler function to be used by the executor
 * @param handler - The new handler function
 */
export function setHandler(handler: typeof defaultHandler): void {
  defaultHandler = handler
}

/**
 * Executes the current handler with the provided input
 * @param input - The input to pass to the handler
 * @returns Promise resolving to the handler's result
 */
export async function executeHandler(input: unknown): Promise<HandlerResult> {
  return await defaultHandler(input)
}

// Aliases for backward compatibility
export const P = setHandler
export const k = executeHandler
