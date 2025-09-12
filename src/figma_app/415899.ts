import type { ReactNode } from 'react'
import { createContext, useContext } from 'react'
import { jsx } from 'react/jsx-runtime'

/**
 * StringsContextType defines the shape of the context value.
 */
export interface StringsContextType {
  back: string
  close: string
  danger: string
  dismiss: string
  error: string
  hasChecked: string
  help: string
  loading: string
  mixed: string
  moveRowDown: string
  moveRowToBottom: string
  moveRowToTop: string
  moveRowUp: string
  remainingCharacters: string
  select: string
  success: string
  warning: string
}

/**
 * StringsContext provides UI strings for the app.
 * (original variable: a)
 */
const StringsContext = createContext<StringsContextType>({
  back: 'Back',
  close: 'Close',
  danger: 'Danger:',
  dismiss: 'Dismiss',
  error: 'Error:',
  hasChecked: 'Contains checked item',
  help: 'Help',
  loading: 'Loading',
  mixed: 'Mixed',
  moveRowDown: 'Move down',
  moveRowToBottom: 'Move to bottom',
  moveRowToTop: 'Move to top',
  moveRowUp: 'Move up',
  remainingCharacters: 'Remaining characters',
  select: 'Select an option',
  success: 'Success:',
  warning: 'Warning:',
})

/**
 * Props for StringsProvider.
 */
export interface StringsProviderProps {
  children: ReactNode
  strings: StringsContextType
}

/**
 * StringsProvider wraps children with the StringsContext provider.
 * (original function: $$s0)
 */
export function FplStringsProvider({ children, strings }: StringsProviderProps) {
  return jsx(StringsContext.Provider, {
    value: strings,
    children,
  })
}
FplStringsProvider.displayName = 'FplStringsProvider'

/**
 * useString returns the string value for the given key from context.
 * (original function: $$o1)
 * @param key - Key of the string to retrieve
 */
export function useFplStrings(key: keyof StringsContextType): string {
  return useContext(StringsContext)[key]
}

// Refactored exports to match new names
export const AD = FplStringsProvider
export const Lh = useFplStrings
