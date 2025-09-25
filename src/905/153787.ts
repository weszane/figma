import { createContext, useCallback, useRef } from 'react'
import { jsx } from 'react/jsx-runtime'
import { dP } from '../figma_app/119475'

/**
 * Context to provide a function that checks if the current element contains the active document element.
 * Original name: $$s0
 */
export const VimFocusContext = createContext<() => boolean>(() => false)

/**
 * Props for VimFocusProvider.
 */
export interface VimFocusProviderProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

/**
 * Provides Vim focus context to its children.
 * Original name: $$$$o1
 * @param props - VimFocusProviderProps
 */
export function VimFocusProvider({
  children,
  className,
  style,
}: VimFocusProviderProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  /**
   * Checks if the current ref contains the active document element.
   * Original logic: l
   */
  const isFocused = useCallback(() => !!ref.current?.contains(document.activeElement), [])

  return jsx(dP, {
    ref,
    className,
    style,
    allowVim: true,
    children: jsx(VimFocusContext.Provider, {
      value: isFocused,
      children,
    }),
  })
}

// Refactored exports for clarity and maintainability
export const G = VimFocusContext
export const o = VimFocusProvider
