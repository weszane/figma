import { noop } from 'lodash-es'
import { createContext, useContext } from 'react'

/**
 * ThemeContext provides theme-related state and update logic.
 * @originalName a
 */
const ThemeContext = createContext<{
  version: string
  updateMode: () => void
} | null>(null)

/**
 * Default theme state used when no provider is found.
 * @originalName s
 */
const defaultThemeState = {
  version: 'ui2',
  updateMode: noop,
}

/**
 * ThemeProvider component for supplying theme context.
 * @originalName $$o1
 */
export const ThemeProvider = ThemeContext.Provider

/**
 * Returns the current theme context value.
 * @originalName $$l2
 */
export function useThemeContext() {
  return useContext(ThemeContext)
}

/**
 * Returns the theme context value, or defaults if no provider exists.
 * Logs a debug message if defaults are used outside of test environment.
 * @originalName $$d0
 */
export function getThemeContextOrDefault() {
  const context = useContext(ThemeContext)
  if (context)
    return context
  // eslint-disable-next-line node/prefer-global/process
  if (globalThis.process?.env?.NODE_ENV !== 'test') {
    console.debug(
      'No theme provider exists currently, returning defaults, but switching modes is disabled',
    )
  }
  return defaultThemeState
}

// Refactored exports to match new names
export const DP = getThemeContextOrDefault
export const Dx = ThemeProvider
export const lM = useThemeContext
