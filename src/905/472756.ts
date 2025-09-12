import { createContext, forwardRef, useContext, useId, useLayoutEffect, useMemo, useState } from 'react'
import { jsx } from 'react/jsx-runtime'

// Original: s
const ariaAttributeMap = {
  description: 'aria-describedby',
  label: 'aria-labelledby',
  htmlFor: 'htmlFor',
}

// Original: o
const A11yContext = createContext<A11yContextValue | null>(null)

// Type definitions for better type safety
interface A11yContextValue {
  connections: Record<string, Set<string>>
  setConnection: React.Dispatch<React.SetStateAction<Record<string, Set<string>>>>
}

interface AriaAttributes {
  [key: string]: string
}

/**
 * Merges aria attributes from connections.
 * Original: n
 * @param attributes - Object with attribute types as keys and arrays of IDs as values
 * @returns Merged aria attributes object
 */
function mergeAriaAttributes(attributes: Record<string, string[]>): AriaAttributes {
  return Object.entries(attributes).reduce((acc, [key, ids]) => {
    if (ids.length) {
      acc[ariaAttributeMap[key]] = ids.join(' ')
    }
    return acc
  }, {} as AriaAttributes)
}

/**
 * Hook to get merged aria attributes for specified types.
 * Original: $$l1
 * @param types - Array of attribute types to include
 * @returns Merged aria attributes
 */
export function useAriaAttributes(types: string[]): AriaAttributes {
  const context = useContext(A11yContext)
  const connections = context?.connections
  return useMemo(() => {
    if (!connections)
      return {}
    const relevantConnections = types.reduce((acc, type) => {
      acc[type] = [...connections[type]]
      return acc
    }, {} as Record<string, string[]>)
    return mergeAriaAttributes(relevantConnections)
  }, [connections, types])
}

/**
 * Hook to register an ID for a specific aria attribute type.
 * Original: $$d2
 * @param type - The attribute type (e.g., 'description', 'label')
 * @param options - Options object
 * @returns Object with id and isRegistered status
 */
export function useAriaConnection(type: string, options: { enabled?: boolean, providedId?: string } = {}) {
  const context = useContext(A11yContext)
  const enabled = options.enabled ?? true
  const generatedId = useId()
  const id = options.providedId ?? generatedId
  const isRegistered = context !== null && enabled
  const setConnection = context?.setConnection

  useLayoutEffect(() => {
    const cleanup = () => {
      if (setConnection) {
        setConnection((prev) => {
          const newSet = new Set(prev[type])
          newSet.delete(id)
          return {
            ...prev,
            [type]: newSet,
          }
        })
      }
    }

    if (enabled) {
      if (setConnection) {
        setConnection((prev) => {
          const newSet = new Set(prev[type])
          newSet.add(id)
          return {
            ...prev,
            [type]: newSet,
          }
        })
      }
      return cleanup
    }
    else {
      cleanup()
    }
  }, [enabled, id, setConnection, type])

  return useMemo(() => ({
    id,
    isRegistered,
  }), [id, isRegistered])
}

/**
 * Provider component for A11y context.
 * Original: $$c0
 * @param props - Component props
 * @returns JSX element
 */
export function A11yConnectorProvider({ children }: { children: React.ReactNode }) {
  const [connections, setConnections] = useState(() =>
    ['description', 'label', 'htmlFor'].reduce((acc, type) => {
      acc[type] = new Set<string>()
      return acc
    }, {} as Record<string, Set<string>>),
  )

  const contextValue = useMemo(() => ({
    connections,
    setConnection: setConnections,
  }), [connections])

  return jsx(A11yContext.Provider, {
    value: contextValue,
    children,
  })
}

A11yConnectorProvider.displayName = 'A11yConnector'

/**
 * Higher-order component to wrap components with A11yConnectorProvider.
 * Original: $$u3
 * @param Component - The component to wrap
 * @returns Wrapped component with forwardRef
 */
export function withA11yConnector<P extends object>(Component: React.ComponentType<P>) {
  return forwardRef<any, P>((props, ref) =>
    jsx(A11yConnectorProvider, {
      children: jsx(Component, { ...props, ref }),
    }),
  )
}

// Exports with refactored names
export const C4 = A11yConnectorProvider
export const iM = useAriaAttributes
export const VM = useAriaConnection
export const If = withA11yConnector
