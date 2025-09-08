import { forwardRef, useCallback, useLayoutEffect, useRef } from 'react'
import { jsx } from 'react/jsx-runtime'
import { defaultComponentAttribute } from '../905/577641'
import { useExposedRef } from '../905/581092'
import { isEventAtOrigin, isFakeTouchEvent } from '../905/955878'
import { useRecording } from '../905/959312'

export interface CheckboxPrimitiveProps {
  'htmlAttributes'?: React.InputHTMLAttributes<HTMLInputElement>
  'mixed'?: boolean
  'onChange'?: (checked: boolean, meta: { event: React.ChangeEvent<HTMLInputElement>, source: 'keyboard' | 'mouse' }) => void
  'recordingKey'?: string
  'actionOnPointerDown'?: boolean
  'aria-disabled'?: boolean
  'disabled'?: boolean
  [key: string]: any
}

/**
 * Custom hook for handling Enter key press behavior
 * @returns Object containing keyboard event handlers
 */
function useEnterKeyHandler() {
  const enterKeyPressed = useRef(false)

  const onKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      enterKeyPressed.current = true
    }
  }, [])

  const onKeyUp = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && enterKeyPressed.current) {
      event.preventDefault()
      event.currentTarget.click()
    }
  }, [])

  const onBlur = useCallback(() => {
    enterKeyPressed.current = false
  }, [])

  return {
    onKeyDown,
    onKeyUp,
    onBlur,
  }
}

/**
 * Hook for handling checkbox interactions and events
 */
function useCheckboxHandlers({
  mixed,
  inputRef,
  onChange,
  recordingKey,
  // actionOnPointerDown,
}: {
  mixed?: boolean
  inputRef: React.RefObject<HTMLInputElement | null>
  onChange?: (checked: boolean, meta: { event: React.ChangeEvent<HTMLInputElement>, source: 'keyboard' | 'mouse' }) => void
  recordingKey?: string
  actionOnPointerDown?: boolean
}) {
  const clickHandled = useRef(false)
  const interactionSource = useRef<'keyboard' | 'mouse'>('mouse')

  // Handle indeterminate state
  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = mixed ?? false
    }
  }, [inputRef, mixed])

  const recordingHandler = useRecording(onChange, {
    eventName: 'change',
    recordingKey,
  }, [onChange])

  const handlePointerDown = useCallback((event: React.PointerEvent<HTMLInputElement>) => {
    if (!isFakeTouchEvent(event.nativeEvent)) {
      event.currentTarget?.click()
      clickHandled.current = true
    }
  }, [])

  const handlePointerLeave = useCallback(() => {
    clickHandled.current = false
  }, [])

  const handleClick = useCallback((event: React.MouseEvent<HTMLInputElement>) => {
    interactionSource.current = isEventAtOrigin(event) ? 'keyboard' : 'mouse'
  }, [])

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (clickHandled.current) {
      event.preventDefault()
      clickHandled.current = false
      return
    }

    const isChecked = mixed !== undefined ? mixed : event.currentTarget.checked
    recordingHandler?.(isChecked, {
      event,
      source: interactionSource.current,
    })
  }, [mixed, recordingHandler])

  const keyboardHandlers = useEnterKeyHandler()

  return {
    handleClick,
    handleChange,
    handlePointerDown,
    handlePointerLeave,
    ...keyboardHandlers,
  }
}

export const CheckboxPrimitive = forwardRef<HTMLInputElement, CheckboxPrimitiveProps>(({
  htmlAttributes,
  mixed,
  onChange,
  recordingKey,
  actionOnPointerDown,
  ...restProps
}, ref) => {
  const inputRef = useExposedRef(ref)

  const {
    handleClick,
    handleChange,
    handlePointerDown,
    handlePointerLeave,
    onKeyDown,
    onKeyUp,
    onBlur,
  } = useCheckboxHandlers({
    mixed,
    inputRef,
    onChange,
    recordingKey,
    actionOnPointerDown,
  })

  const inputProps = {
    ...restProps,
    onClick: handleClick,
    onChange: handleChange,
    onKeyDown,
    onKeyUp,
    onBlur,
    tabIndex: 0,
    ...(actionOnPointerDown
      ? {
        onPointerDown: handlePointerDown,
        onPointerLeave: handlePointerLeave,
      }
      : {}),
  }

  return jsx('input', {
    ...defaultComponentAttribute,
    ...htmlAttributes,
    ...inputProps,
    'type': 'checkbox',
    'ref': inputRef,
    'aria-disabled': restProps['aria-disabled'] || restProps.disabled || undefined,
  })
})

CheckboxPrimitive.displayName = 'CheckboxPrimitive'
export const F = CheckboxPrimitive
