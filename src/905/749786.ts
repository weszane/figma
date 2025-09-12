import { createContext, useContext } from 'react'
/**
 * DialogContext - Original: DialogContext
 * Provides context for dialog operations.
 */
export const DialogContext = createContext<{
  close?: () => void
} | null>(null)

/**
 * useDialogClose - Original: $$a1
 * Custom hook to access the `close` function from DialogContext.
 * @returns {() => void | undefined} The close function from context, if available.
 */
export function useDialogClose(): (() => void) | undefined {
  const context = useContext(DialogContext)
  return context?.close
}

/**
 * M - Original: M
 * Alias for DialogContext.
 */
export const M = DialogContext

/**
 * g - Original: g
 * Alias for useDialogClose.
 */
export const g = useDialogClose
