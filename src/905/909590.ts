import classNames from 'classnames'
import { createContext, forwardRef, useCallback, useContext, useLayoutEffect, useMemo, useState } from 'react'
import { jsx } from 'react/jsx-runtime'
import { defaultComponentAttribute } from '../905/577641'
import { useExposedRef } from '../905/581092'
import { setupFauxFocusHandler } from '../905/695226'
import { useDebouncedValue } from '../905/850310'
import { useRecording } from '../905/959312'

/**
 * Context for TextareaPrimitive state management (original: p)
 */
const TextareaContext = createContext<{
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>
  setReadOnly: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)

/**
 * Root component for TextareaPrimitive (original: u)
 * Provides context for disabled/readOnly state.
 */
const TextareaPrimitiveRoot = forwardRef<HTMLDivElement, {
  htmlAttributes?: { onPointerDown?: React.PointerEventHandler<HTMLDivElement> }
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>>(
  ({ htmlAttributes = {}, children, ...rest }, ref) => {
    const [disabled, setDisabled] = useState(false)
    const [readOnly, setReadOnly] = useState(false)
    const contextValue = useMemo(() => ({
      setDisabled,
      setReadOnly,
    }), [])
    const handlePointerDown = setupFauxFocusHandler(htmlAttributes?.onPointerDown)
    return jsx(TextareaContext.Provider, {
      value: contextValue,
      children: jsx('div', {
        ...rest,
        ...defaultComponentAttribute,
        ref,
        'onPointerDown': handlePointerDown,
        'data-fpl-disabled': disabled || undefined,
        'data-fpl-readOnly': readOnly || undefined,
        children,
      }),
    })
  },
)
TextareaPrimitiveRoot.displayName = 'TextareaPrimitive.Root'

/**
 * Helper to auto-expand textarea height (original: h)
 * @param textarea HTMLTextAreaElement
 */
function autoExpandTextarea(textarea: HTMLTextAreaElement) {
  textarea.style.height = 'auto'
  textarea.style.height = `${textarea?.scrollHeight}px`
}

/**
 * Main TextareaPrimitive component (original: m)
 * Handles expandable, recording, and context state.
 */
const TextareaPrimitive = Object.assign(
  forwardRef<HTMLTextAreaElement, {
    className?: string
    disabled?: boolean
    expandable?: boolean
    htmlAttributes?: React.TextareaHTMLAttributes<HTMLTextAreaElement>
    maxHeight?: number | string
    onChange?: (...args: any[]) => void
    recordingKey?: string
    rows?: number
    spellCheck?: boolean
    style?: React.CSSProperties
    readOnly?: boolean
  } & React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
    ({
      className,
      disabled,
      expandable,
      htmlAttributes,
      maxHeight,
      onChange,
      recordingKey,
      rows = 3,
      spellCheck = true,
      style,
      readOnly,
      ...rest
    }, ref) => {
      const context = useContext(TextareaContext)
      const exposedRef = useExposedRef(ref)
      const handleChange = useCallback((...args: any[]) => {
        onChange?.(...args)
        if (expandable && exposedRef.current)
          autoExpandTextarea(exposedRef.current)
      }, [expandable, onChange, exposedRef])
      const recordingHandler = useRecording(handleChange, {
        eventName: 'change',
        recordingKey,
      }, [handleChange])
      useLayoutEffect(() => {
        if (expandable && exposedRef.current)
          autoExpandTextarea(exposedRef.current)
      }, [expandable, exposedRef])
      useLayoutEffect(() => {
        context?.setDisabled(disabled ?? false)
        context?.setReadOnly(readOnly ?? false)
      }, [context, disabled, readOnly])
      return jsx('textarea', {
        ...rest,
        ...htmlAttributes,
        ...defaultComponentAttribute,
        rows,
        'className': classNames('textarea-reset__textareaReset__SBluM', className),
        'style': {
          ...style,
          maxHeight,
        },
        'ref': exposedRef,
        'onChange': recordingHandler
          ? e => recordingHandler(e.target.value, { event: e })
          : undefined,
        'readOnly': readOnly || disabled,
        'aria-disabled': disabled || undefined,
        spellCheck,
      })
    },
  ),
  {
    Root: TextareaPrimitiveRoot,
  },
)
TextareaPrimitive.displayName = 'TextareaPrimitive'

/**
 * Textarea Root wrapper (original: f)
 * @param props
 */
function TextareaRoot({
  className,
  htmlAttributes,
  ...rest
}: {
  className?: string
  htmlAttributes?: React.HTMLAttributes<HTMLDivElement>
} & React.HTMLAttributes<HTMLDivElement>) {
  return jsx(TextareaPrimitive.Root, {
    ...htmlAttributes,
    ...rest,
    className: classNames('textarea__root__kusdD', className),
  })
}
TextareaRoot.displayName = 'Textarea.Root'

/**
 * Lazy Textarea with debounced value (original: _)
 * @param props
 */
function TextareaLazy(props: any) {
  const debouncedProps = useDebouncedValue(props)
  return jsx(Textarea, {
    ...debouncedProps,
  })
}
TextareaLazy.displayName = 'Textarea.Lazy'

/**
 * Main exported Textarea component (original: $$g0)
 * Handles size, rows, and className.
 */
export const Textarea = Object.assign(
  forwardRef<HTMLTextAreaElement, {
    size?: 'lg' | string
    rows?: number
  } & React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
    ({ size, rows, ...rest }, ref) =>
      jsx(TextareaPrimitive, {
        ...rest,
        ref,
        rows: rows ?? (size === 'lg' ? 6 : 3),
        className: classNames('textarea__textarea__-mOWC', {
          textarea__large__BJYMW: size === 'lg',
        }),
      }),
  ),
  {
    Root: TextareaRoot,
    Lazy: TextareaLazy,
  },
)
Textarea.displayName = 'Textarea'

export const T = Textarea
