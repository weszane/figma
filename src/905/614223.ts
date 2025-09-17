import React, { useMemo } from 'react'
import { Fragment, jsx } from 'react/jsx-runtime'
import { Pd } from '../905/266289'
import { ThemeProvider2, useTheme } from '../905/289770'

/**
 * Renders children with a theme context if any theme-related prop is provided.
 * Original function: $$o0
 * @param props - Theme and children props
 */
export const setupThemeContext: React.FC<{
  children: React.ReactNode
  mode?: string
  brand?: string
  enhancedContrast?: boolean
}> = function setupThemeContext(props) {
  const { mode, brand, enhancedContrast, children } = props
  // If any theme-related prop is provided, wrap children with ThemeProvider2
  if (mode || brand || enhancedContrast != null) {
    return React.createElement(ThemeContextProvider, props)
  }
  // Otherwise, render children directly
  return React.createElement(Fragment, null, children)
}

/**
 * Provides theme context to children.
 * Original function: l
 * @param props - Theme and children props
 */
export const ThemeContextProvider: React.FC<{
  children: React.ReactNode
  mode?: string
  brand?: string
  enhancedContrast?: boolean
}> = function ThemeContextProvider(props) {
  const theme = useTheme()
  const brand = props.brand ?? theme.brand
  const color = props.mode ?? theme.color
  const enhancedContrast = props.enhancedContrast ?? theme.enhancedContrast

  // Memoize the theme value for performance
  const themeValue = useMemo(
    () => ({
      ...theme,
      color,
      brand,
      enhancedContrast,
    }),
    [theme, color, brand, enhancedContrast],
  )

  return React.createElement(
    ThemeProvider2,
    { value: themeValue },
    React.createElement(
      'div',
      { ...Pd(themeValue), style: { display: 'contents' } },
      props.children,
    ),
  )
}

// Export with refactored name for external usage
export const J = setupThemeContext
