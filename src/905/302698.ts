import type { ReactNode } from 'react'
import { createContext, useContext } from 'react'
import { jsx } from 'react/jsx-runtime'

/**
 * Transforms an object into a set of data-fpl-* attributes.
 * @param obj - The input object.
 * @returns An object with keys prefixed by 'data-fpl-'.
 * (Original function: a)
 */
function createFplDataAttributes(obj: Record<string, any> | undefined): Record<string, any> {
  if (!obj || Object.keys(obj).length === 0)
    return {}
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [`data-fpl-${key}`, value]),
  )
}

/**
 * Returns an empty object.
 * (Original function: s)
 */
function emptyAttributes(_obj?: Record<string, any>): Record<string, any> {
  return {}
}

/**
 * Context for FPL debug attribute generation.
 * (Original variable: o)
 */
const FplDebugContext = createContext<(obj?: Record<string, any>) => Record<string, any>>(emptyAttributes)

/**
 * Hook to access the FPL debug attribute generator.
 * @param obj - The input object.
 * @returns The generated attributes.
 * (Original function: $$l0)
 */
export function useFplDebugAttributes(obj?: Record<string, any>): Record<string, any> {
  return useContext(FplDebugContext)(obj)
}

/**
 * Provider for FPL debug attribute generation.
 * @param children - React children.
 * @param debug - Whether to enable debug attributes.
 * (Original function: $$d1)
 */
export function FplDebugProvider({
  children,
  debug,
}: {
  children: ReactNode
  debug?: boolean
}) {
  const value = debug ? createFplDataAttributes : emptyAttributes
  return jsx(FplDebugContext.Provider, {
    value,
    children,
  })
}
FplDebugProvider.displayName = 'FplDebugProvider'

// Export aliases for backward compatibility
export const _ = useFplDebugAttributes
export const r = FplDebugProvider
