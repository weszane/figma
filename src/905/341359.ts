import { useMemo } from 'react'
import { Fragment, jsx } from 'react/jsx-runtime'
import { getThemeContextOrDefault, ThemeProvider } from '../905/158740'

/**
 * Props for UI3ThemeWrapper component (originally o).
 */
interface UI3ThemeWrapperProps {
  children: React.ReactNode
}

/**
 * Wraps children with ThemeProvider and applies UI3 theme version.
 * @param props - UI3ThemeWrapperProps
 */
function UI3ThemeWrapper({ children }: UI3ThemeWrapperProps) {
  const theme = getThemeContextOrDefault()
  const themeValue = useMemo(
    () => ({
      ...theme,
      version: 'ui3',
    }),
    [theme],
  )

  return jsx(ThemeProvider, {
    value: themeValue,
    children: jsx('div', {
      'data-fpl-ui3-override': true,
      'style': { display: 'contents' },
      children,
    }),
  })
}

/**
 * Props for UI3ConditionalWrapper (originally $$s0).
 */
interface UI3ConditionalWrapperProps extends UI3ThemeWrapperProps {
  disabled?: boolean
}

/**
 * Conditionally wraps children with UI3ThemeWrapper unless disabled.
 * @param props - UI3ConditionalWrapperProps
 */
export function UI3ConditionalWrapper({
  disabled,
  children,
}: UI3ConditionalWrapperProps) {
  // $$s0
  if (disabled) {
    return jsx(Fragment, { children })
  }
  return jsx(UI3ThemeWrapper, { children })
}

// Refactored export name for J
export const J = UI3ConditionalWrapper
