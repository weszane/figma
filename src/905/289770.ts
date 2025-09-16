import { noop } from 'lodash-es'

import { createContext, useContext } from 'react'

/**
 * ThemeContext provides theme-related values and functions.
 * Original variable: a
 */
const ThemeContext = createContext<ThemeContextValue | null>(null)

/**
 * Default theme values used when no provider is present.
 * Original variable: s
 */
const defaultTheme: ThemeContextValue = {
  color: 'light',
  brand: 'design',
  enhancedContrast: false,
  addThemeListener: () => noop,
}

/**
 * ThemeContextValue defines the shape of theme context.
 */
export interface ThemeContextValue {
  color: string
  brand: string
  enhancedContrast: boolean
  addThemeListener: () => typeof noop
}

/**
 * ThemeProvider component for supplying theme context.
 * Original variable: $$o0
 */
export const ThemeProvider2 = ThemeContext.Provider

/**
 * useTheme returns the current theme context or defaults if none exists.
 * Original function: $$l1
 */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (context)
    return context
  if (process?.env?.NODE_ENV !== 'test') {
    console.debug(
      'No theme provider exists currently, returning defaults, but switching modes is disabled',
    )
  }
  return defaultTheme
}

// Refactored exports for compatibility with original names
export const A = ThemeProvider2
export const G = useTheme
