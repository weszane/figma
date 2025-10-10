import { createContext, useMemo } from "react"
import { jsx } from "react/jsx-runtime"

// Refactored to use descriptive names, added TypeScript types, and improved readability
// Original code name: $$s0, $$a1

interface PriorityContextValue {
  name: string
  priorityMap: Map<string, number>
}

interface PriorityProviderProps {
  name: string
  children: React.ReactNode
  order: string[]
}

export const PriorityContext = createContext<PriorityContextValue | null>(null)

export function PriorityProvider({
  name,
  children,
  order,
}: PriorityProviderProps) {
  const contextValue = useMemo(() => {
    // Create a map where each item's priority is based on its position in the order array
    // Items earlier in the array have higher priority (higher number)
    const priorityMap = order.reduce((map, item, index) => {
      map.set(item, order.length - index)
      return map
    }, new Map<string, number>())

    return {
      name,
      priorityMap,
    }
  }, [name, order])

  return jsx(PriorityContext.Provider, {
    value: contextValue,
    children,
  })
}

export const A = PriorityProvider
export const y = PriorityContext
