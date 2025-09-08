import { createContext, useContext, useId } from 'react'

const SelectionContext = createContext<string>('')

/**
 * Custom hook to access the selection context value.
 * @returns The current selection context value.
 */
export function useSelectionContext(): string {
  return useContext(SelectionContext)
}

/**
 * Hook that provides the selection context provider and a unique ID.
 * @returns A tuple containing a unique ID and the SelectionContext.Provider component.
 */
export function useSelectionProvider(): [string, React.Provider<string>] {
  const id = useId()
  return [id, SelectionContext.Provider]
}

// Aliases for backward compatibility
export const Z = useSelectionContext
export const q = useSelectionProvider
