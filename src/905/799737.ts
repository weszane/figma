import type { FocusEvent, HTMLAttributes, ReactNode } from 'react'
import { forwardRef, useEffect, useRef } from 'react'
import { jsx } from 'react/jsx-runtime'
import { closestFocusableAncestor, containsActiveElement } from '../905/117474'
import { setupAutofocusHandler } from '../905/128376'
import { defaultComponentAttribute } from '../905/577641'
import { useExposedRef } from '../905/581092'
import { useSelectionContext, useSelectionProvider } from '../905/751750'
import { defaultInputState } from '../905/768014'

/**
 * Props for DialogRoot component
 */
interface DialogRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  htmlAttributes?: HTMLAttributes<HTMLDivElement>
}

/**
 * DialogRoot - Refactored from $$u1
 * Provides a dialog container with focus management and selection context.
 */
export const DialogRoot = forwardRef<HTMLDivElement, DialogRootProps>(({
  children,
  htmlAttributes,
  ...restProps
}, ref) => {
  // Expose ref for focus management
  const exposedRef = useExposedRef(ref)

  // Selection context provider
  const [selectionValue, SelectionProvider] = useSelectionProvider()

  /**
   * useDialogFocusHandler - Handles focus logic for dialog
   * @param dialogRef - Ref to dialog element
   * @param options - Optional event handlers
   * @returns Focus event handlers
   */
  function useDialogFocusHandler(
    dialogRef: React.RefObject<HTMLDivElement>,
    options: { onBlur?: (event: FocusEvent<HTMLDivElement>) => void } = {},
  ) {
    const focusableAncestorRef = useRef<HTMLElement | undefined>(undefined)

    useEffect(() => {
      const dialogElement = dialogRef.current
      if (focusableAncestorRef.current === undefined) {
        // Find closest focusable ancestor for keyboard navigation
        const ancestor = closestFocusableAncestor(defaultInputState.element) as HTMLElement
        focusableAncestorRef.current = ancestor
      }
      // Focus dialog if it doesn't already contain the active element
      if (dialogElement && !containsActiveElement(dialogElement)) {
        (dialogElement.querySelector('[autofocus]') as HTMLElement | null || dialogElement).focus()
      }
      // Restore focus to ancestor on unmount if keyboard type
      return () => {
        const ancestor = focusableAncestorRef.current
        if (ancestor && defaultInputState.type === 'keyboard') {
          ancestor.focus()
        }
      }
    }, [dialogRef])

    return {
      /**
       * onBlur - Handles blur event for dialog
       * @param event - Focus event
       */
      onBlur(event: FocusEvent<HTMLDivElement>) {
        if (!event.relatedTarget && defaultInputState.key !== 'Tab') {
          dialogRef.current?.focus()
        }
        options.onBlur?.(event)
      },
    }
  }

  // Setup focus handler for dialog
  const focusHandlers = useDialogFocusHandler(exposedRef, {
    onBlur: htmlAttributes?.onBlur,
  })

  return jsx(SelectionProvider, {
    value: selectionValue,
    children: jsx('div', {
      ...defaultComponentAttribute,
      ...htmlAttributes,
      ...restProps,
      ...focusHandlers,
      'ref': exposedRef,
      'role': 'dialog',
      'aria-labelledby': selectionValue,
      'tabIndex': -1,
      children,
    }),
  })
})
DialogRoot.displayName = 'DialogPrimitive.Root'

/**
 * Props for DialogLabel component
 */
interface DialogLabelProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  autofocus?: boolean
  htmlAttributes?: HTMLAttributes<HTMLHeadingElement>
}

/**
 * DialogLabel - Refactored from $$p0
 * Provides a label for the dialog, with optional autofocus.
 */
export const DialogLabel = forwardRef<HTMLHeadingElement, DialogLabelProps>(({
  children,
  autofocus = false,
  htmlAttributes,
  ...restProps
}, ref) => {
  // Get selection context for aria-labelledby
  const selectionId = useSelectionContext()

  // Setup autofocus handler for label
  const labelRef = setupAutofocusHandler(ref, autofocus)

  return jsx('h2', {
    ...htmlAttributes,
    ...restProps,
    ref: labelRef,
    id: selectionId,
    tabIndex: autofocus ? -1 : undefined,
    children,
  })
})
DialogLabel.displayName = 'DialogPrimitive.Label'

// Export with refactored names
export const J = DialogLabel
export const b = DialogRoot
