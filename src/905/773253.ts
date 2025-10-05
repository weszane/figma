import { createContext, useContext, useMemo } from "react"
import { jsx } from "react/jsx-runtime"

/**
 * Context for managing visibility state.
 * Default value is false (visible).
 */
const visibilityContext = createContext<boolean>(false)

/**
 * Hook to access the current visibility state from the context.
 * @returns {boolean} The visibility state (true if hidden, false if visible).
 */
export function useVisibility(): boolean {
  return useContext(visibilityContext)
}

/**
 * Provider component for managing visibility state.
 * It propagates the hidden state: if the parent context is hidden or the isHidden prop is true, the value is true (hidden).
 * @param {object} props - The props object.
 * @param {boolean} props.isHidden - Whether this component should be hidden.
 * @param {React.ReactNode} props.children - The child components.
 * @returns {JSX.Element} The provider wrapping the children.
 */
export function VisibilityProvider({
  isHidden,
  children,
}: {
  isHidden: boolean
  children: React.ReactNode
}): JSX.Element {
  const parentHidden = useVisibility()
  const isHiddenValue = useMemo(() => parentHidden || isHidden, [isHidden, parentHidden])

  return jsx(visibilityContext.Provider, {
    value: isHiddenValue,
    children,
  })
}

// Original export names maintained for compatibility
export const H = VisibilityProvider
export const L = useVisibility

