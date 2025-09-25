import { forwardRef, useCallback, useContext, useLayoutEffect } from 'react'
import { jsx } from 'react/jsx-runtime'
import { RadioPrimivteContext } from '../905/5729'
import { useExposedRef } from '../905/581092'

/**
 * Props for RadioPrimitiveOption component.
 */
export interface RadioPrimitiveOptionProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string
  value: string
  className?: string
  readonly?: boolean
  htmlAttributes: any
}

/**
 * RadioPrimitiveOption - Refactored from original RadioPrimitiveOption.
 * Renders a radio input option, handling readonly and autofocus logic.
 */
export const RadioPrimitiveOption = forwardRef<HTMLInputElement, RadioPrimitiveOptionProps>(({
  htmlAttributes,
  id,
  value: optionValue,
  className,
  readonly,
  ...rest
}, ref) => {
  // useExposedRef (original name)
  const inputRef = useExposedRef(ref)

  // RadioPrimivteContext (original name)
  const {
    name,
    value: groupValue,
    onChange,
    readonlyGroup,
    autofocus,
  } = useContext(RadioPrimivteContext)

  // Determine if the option should be readonly/disabled
  const isReadonly = readonlyGroup || readonly || undefined

  /**
   * Handles change event for radio input.
   * @param event - React.ChangeEvent<HTMLInputElement>
   */
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isReadonly && onChange) {
      onChange(event.target.value, { event })
    }
  }, [isReadonly, onChange])

  // Is this option selected?
  const isChecked = groupValue === optionValue

  // Set autofocus if needed
  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.autofocus = isChecked && autofocus
    }
  }, [inputRef, isChecked, autofocus])

  /**
   * Handles keydown event for radio input.
   * @param event - React.KeyboardEvent<HTMLInputElement>
   */
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      event.currentTarget.blur()
    }
  }

  return jsx('input', {
    ...htmlAttributes,
    'ref': inputRef,
    'aria-readonly': isReadonly,
    'aria-disabled': isReadonly,
    'checked': isChecked,
    'onKeyDown': handleKeyDown,
    className,
    id,
    name,
    'onChange': handleChange,
    'type': 'radio',
    'value': optionValue,
    ...rest,
  })
})
RadioPrimitiveOption.displayName = 'RadioPrimitive.Option'

/**
 * Exported alias for RadioPrimitiveOption (original export const c).
 */
export const c = RadioPrimitiveOption
