/* eslint-disable ts/ban-ts-comment */
import A11yDialog from 'a11y-dialog'
import classNames from 'classnames'
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { mergeProps } from '../905/475481'
import { defaultComponentAttribute } from '../905/577641'
import { PopoverOutlet } from '../905/691059'
import { DialogContext } from '../905/749786'
import { useSelectionProvider } from '../905/751750'
import { EVENT_CAPTURE_CLASS } from '../905/955878'
import { useRecording } from '../905/959312'

// Original: let h = 'data-modals-open'
const MODALS_OPEN_ATTRIBUTE = 'data-modals-open'

/**
 * Original: export function $$g0
 * ModalRoot component for rendering the modal dialog.
 * @param theme - Theme object for styling.
 * @param children - Child components.
 * @param manager - Manager object with props.
 * @param htmlAttributes - Additional HTML attributes.
 * @param rest - Other props.
 */
export function ModalRoot({
  theme = {},
  children,
  manager,
  htmlAttributes,
  ...rest
}: {
  theme?: Record<string, string>
  children: React.ReactNode
  manager: { props: any }
  htmlAttributes?: Record<string, any>
  [key: string]: any
}) {
  const [selectionId, SelectionProvider] = useSelectionProvider()
  const { close, ...managerProps } = manager.props
  const dialogContextValue = useMemo(() => ({
    close: (options = { source: 'other' }) => close(options),
  }), [close])

  return jsx(SelectionProvider, {
    value: selectionId,
    children: jsx(DialogContext.Provider, {
      value: dialogContextValue,
      children: jsxs('div', {
        ...defaultComponentAttribute,
        ...mergeProps(rest, htmlAttributes, managerProps),
        'role': 'dialog',
        'aria-modal': 'true',
        'className': classNames('modal-primitive__root__x1Mdk', theme.root, EVENT_CAPTURE_CLASS),
        'aria-labelledby': selectionId,
        'tabIndex': -1,
        'children': [
          jsx('div', {
            'data-backdrop': true,
            'className': theme.backdrop,
          }),
          jsx(PopoverOutlet, {
            children: jsx('section', {
              className: theme.contents,
              children,
            }),
          }),
        ],
      }),
    }),
  })
}

/**
 * Original: export function $$f1
 * Hook for managing modal state and interactions.
 * @param open - Whether the modal is open.
 * @param onClose - Callback for closing the modal.
 * @param preventUserClose - Whether to prevent user-initiated close.
 * @param recordingKey - Key for recording.
 * @returns Object with modal props and state.
 */
export function useModalManager({
  open,
  onClose,
  preventUserClose = false,
  recordingKey,
}: {
  open?: boolean
  onClose: (options?: { source?: string }) => void
  preventUserClose?: boolean
  recordingKey?: string
}) {
  const closeHandler = useRecording(onClose, {
    eventName: 'close',
    recordingKey,
  }, [onClose])

  const [dialogRef, dialogInstance] = useDialogInstance(preventUserClose ? undefined : closeHandler)

  useLayoutEffect(() => {
    if (open && dialogInstance) {
      if (!dialogInstance.shown) {
        dialogInstance.show()
        incrementModalsOpenCount()
      }
      return () => {
        if (dialogInstance.shown) {
          dialogInstance.hide()
          decrementModalsOpenCount()
        }
      }
    }
  }, [dialogInstance, open])

  return {
    preventUserClose,
    props: {
      ref: dialogRef,
      close: closeHandler,
      onPointerDown(event: React.PointerEvent) {
        if (!preventUserClose && (event.target as HTMLElement).matches('[data-backdrop]')) {
          closeHandler({ source: 'outside' })
        }
      },
      onKeyDown(event: React.KeyboardEvent) {
        if (!preventUserClose && event.code === 'Escape') {
          event.preventDefault()
          closeHandler({ source: 'escape' })
        }
      },
    },
  }
}

/**
 * Original: export function $$_2
 * Hook for controlled modal state.
 * @param defaultOpen - Default open state.
 * @param onClose - Callback for closing.
 * @returns Object with modal controls.
 */
export function useModal({
  defaultOpen = false,
  onClose,
}: {
  defaultOpen?: boolean
  onClose?: () => void
} = {}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const closeModal = useCallback(() => setIsOpen(false), [])
  const openModal = useCallback(() => setIsOpen(true), [])

  return {
    ...useModalManager({
      open: isOpen,
      onClose: useCallback(() => {
        closeModal()
        onClose?.()
      }, [closeModal, onClose]),
    }),
    open: openModal,
    close: closeModal,
    isOpen,
  }
}

/**
 * Original: class A extends A11yDialog
 * Custom A11yDialog class with modified behavior.
 */
class CustomA11yDialog extends A11yDialog {
  destroy() {
    this.hide()
    // @ts-ignore
    document.removeEventListener('click', this.handleTriggerClicks, true)
    // @ts-ignore
    this.fire('destroy')
    return this
  }

  bindKeypress(event: KeyboardEvent) {
    if (event.key !== 'Escape') {
      super.bindKeypress(event)
    }
  }
}

/**
 * Original: let [s, o] = (function (e) { ... }(i ? void 0 : a))
 * Helper hook for dialog instance management.
 * @param closeHandler - Handler for closing.
 * @returns Tuple of ref setter and dialog instance.
 */
function useDialogInstance(closeHandler?: (options?: { source?: string }) => void) {
  const [dialog, setDialog] = useState<CustomA11yDialog | null>(null)
  const dialogRef = useRef<CustomA11yDialog | null>(null)
  const closeRef = useRef(closeHandler)
  closeRef.current = closeHandler

  const setDialogRef = useCallback((element: HTMLElement | null) => {
    if (element === null) {
      dialogRef.current?.destroy()
      setDialog(null)
      return
    }
    setDialog(new CustomA11yDialog(element))
  }, [])

  return [setDialogRef, dialog] as const
}

/**
 * Original: (function (e, t) { ... }(document.body, h))
 * Increments the modals open count on body.
 */
function incrementModalsOpenCount() {
  const count = parseInt(document.body.getAttribute(MODALS_OPEN_ATTRIBUTE) || '0')
  document.body.setAttribute(MODALS_OPEN_ATTRIBUTE, (count + 1).toString())
}

/**
 * Original: (function (e, t) { ... }(document.body, h))
 * Decrements the modals open count on body.
 */
function decrementModalsOpenCount() {
  const countStr = document.body.getAttribute(MODALS_OPEN_ATTRIBUTE)
  if (countStr === null)
    return
  const count = parseInt(countStr) - 1
  if (count <= 0) {
    document.body.removeAttribute(MODALS_OPEN_ATTRIBUTE)
  }
  else {
    document.body.setAttribute(MODALS_OPEN_ATTRIBUTE, count.toString())
  }
}

// Original exports with refactored names
export const bL = ModalRoot
export const hS = useModalManager
export const wQ = useModal
