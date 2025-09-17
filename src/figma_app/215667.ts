import { createContext, useContext } from 'react'
import { jsx } from 'react/jsx-runtime'

let darkThemeContext = createContext('dark')
export function useDarkContext() {
  return useContext(darkThemeContext)
}
export function DropdownThemeProvider({
  mode: e,
  children: t,
}) {
  return jsx(darkThemeContext.Provider, {
    value: e,
    children: t,
  })
}
DropdownThemeProvider.displayName = 'DropdownThemeProvider'
export const S = useDarkContext
export const a = DropdownThemeProvider
