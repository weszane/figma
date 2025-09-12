import { useContext } from 'react'

/**
 * Ensures a React context is not null, throwing an error if it is.
 * @param context - The React context to consume.
 * @param contextName - The name of the context variable.
 * @param providerName - The name of the provider component.
 * @returns The context value if not null.
 * @throws Error if the context value is null.
 * @originalName $$r0
 */
export function ensureContext(context: React.Context<any>, contextName: string, providerName: string): any {
  const value = useContext(context)
  if (value == null) {
    throw new Error(`null context: ${contextName} must be nested within ${providerName}`)
  }
  return value
}

// Alias for backward compatibility with original export name ($)
export const $ = ensureContext
