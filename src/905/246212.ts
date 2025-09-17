import { createContext, forwardRef, useContext, useLayoutEffect, useMemo, useState } from 'react'
import { jsx } from 'react/jsx-runtime'
import { defaultComponentAttribute } from '../905/577641'
import { useExposedRef } from '../905/581092'
import { setupFauxFocusHandler } from '../905/695226'
import { hasTextSelection } from '../905/914656'
import { useRecording } from '../905/959312'
/**
 * Context for InputPrimitive state management.
 * @originalName c
 */
const InputPrimitiveContext = createContext<{ setDisabled: React.Dispatch<React.SetStateAction<boolean>> } | null>(null)

/**
 * Root component for InputPrimitive.
 * Provides context and handles faux focus and disabled state.
 * @originalName u
 */
export const InputPrimitiveRoot = forwardRef<HTMLDivElement, {
  onPointerDown?: (event: React.PointerEvent<HTMLDivElement>) => void
  spellCheck?: boolean
  [key: string]: any
}>(({
  onPointerDown,
  spellCheck = false,
  ...props
}, ref) => {
  const [disabled, setDisabled] = useState(false)
  const contextValue = useMemo(() => ({ setDisabled }), [])
  const handlePointerDown = setupFauxFocusHandler(onPointerDown)

  return jsx(InputPrimitiveContext.Provider, {
    value: contextValue,
    children: jsx('div', {
      ...props,
      ...defaultComponentAttribute,
      ref,
      'onPointerDown': handlePointerDown,
      spellCheck,
      'data-fpl-disabled': disabled || undefined,
    }),
  })
})
InputPrimitiveRoot.displayName = 'InputPrimitive.Root'

/**
 * InputPrimitive component.
 * Handles input logic, context, recording, and selection.
 * @originalName $$p0
 */
export const InputPrimitive = Object.assign(
  forwardRef<HTMLInputElement, {
    type?: string
    onChange?: (value: string, options?: { event: React.ChangeEvent<HTMLInputElement> }) => void
    disabled?: boolean
    spellCheck?: boolean
    recordingKey?: string
    htmlAttributes?: React.InputHTMLAttributes<HTMLInputElement>
    autoFocus?: boolean
    [key: string]: any
  }>(({
    type = 'text',
    onChange,
    disabled,
    spellCheck = false,
    recordingKey,
    htmlAttributes,
    autoFocus,
    ...props
  }, ref) => {
    const context = useContext(InputPrimitiveContext)
    const inputRef = useExposedRef(ref)

    /**
     * Selects input text on autoFocus if no text is selected.
     * @originalName anonymous function in $$p0
     */
    useLayoutEffect(() => {
      if (autoFocus && inputRef.current && !hasTextSelection(inputRef.current)) {
        inputRef.current.select()
      }
    }, [])

    /**
     * Handles recording logic for input changes.
     * @originalName _
     */
    const handleChange = useRecording(onChange, {
      eventName: 'change',
      recordingKey,
    }, [onChange])

    /**
     * Updates disabled state in context.
     * @originalName useLayoutEffect in $$p0
     */
    useLayoutEffect(() => {
      context?.setDisabled(disabled ?? false)
    }, [context, disabled])

    return jsx('input', {
      ...props,
      ...htmlAttributes,
      ...defaultComponentAttribute,
      'ref': inputRef,
      'size': 1,
      type,
      'onChange': handleChange
        ? e => handleChange(e.target.value, { event: e })
        : undefined,
      'readOnly': disabled,
      'aria-disabled': disabled || undefined,
      spellCheck,
      'data-1p-ignore': type !== 'password' || undefined,
    })
  }),
  {
    Root: InputPrimitiveRoot,
  },
)
InputPrimitive.displayName = 'InputPrimitive'

/** Export InputPrimitive as Y for compatibility. @originalName Y */
export const Y = InputPrimitive
