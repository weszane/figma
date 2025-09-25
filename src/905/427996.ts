import classNames from 'classnames'
import { useCallback, useEffect, useLayoutEffect, useRef } from 'react'
import { isActiveElement } from '../905/117474'
import { isCommandKeyActive } from '../905/658036'
import { areValuesEqual, getIncrementTargets, handleParseWithError, hasIncrementBy, parseValue, performNudge } from '../905/687992'
import { hasTextSelection } from '../905/914656'
import { executeEventHandler, markEventAsProcessed, preventAndStopEvent } from '../905/955878'
import { SKIP_RECORDING, useRecording } from '../905/959312'

/**
 * Selects the input element using the provided selection handler or default select.
 * @param input - The input element to select.
 * @param selectionHandler - Optional selection handler.
 * @returns void
 * @originalName l
 */
function selectInputElement(input: HTMLInputElement, selectionHandler?: { select?: (el: HTMLInputElement) => void }) {
  if (isActiveElement(input)) {
    selectionHandler?.select ? selectionHandler.select(input) : input.select()
  }
}

/**
 * Handles selection range for incrementable input.
 * @param input - The input element.
 * @param incrementTargets - Increment targets.
 * @param props - Input props containing value and setSelectionRange.
 * @returns boolean
 * @originalName c
 */
function handleIncrementSelection(
  input: any,
  incrementTargets: any,
  props: { value: any, setSelectionRange: (start: number, end: number) => void },
): boolean {
  if (incrementTargets && hasIncrementBy(input) && input.getSelection) {
    const { start, end } = input.getSelection(props.value, incrementTargets)
    props.setSelectionRange(start, end)
    return true
  }
  return false
}

/**
 * Composes multiple input handlers for text input.
 * @param {...Function} handlers - Handler functions.
 * @returns Function
 * @originalName m
 */
export function setupTextInputHandlers(...handlers: Fn[]) {
  return (props: any, context: any) => {
    const ref = useRef({})
    if (context)
      Object.assign(ref.current, context)
    let result = props
    for (const handler of handlers) {
      result = handler(result, ref.current)
    }
    return result
  }
}

/**
 * Handles formatted input logic.
 * @param props - Input props.
 * @param context - Context object.
 * @returns object
 * @originalName (first handler in m)
 */
function formattedInputHandler(
  {
    ref,
    formatter,
    value,
    onChange,
    onChangeRestricted,
    onKeyDown,
    ...rest
  }: any,
  context: any,
) {
  const selectionRef = useRef(null)

  useEffect(() => {
    if (context) {
      context.select = (input: any) => {
        if (selectionRef.current) {
          const targets = selectionRef.current
          selectionRef.current = null
          if (handleIncrementSelection(formatter, targets, input))
            return
        }
        if (formatter.defaultSelection) {
          const { start, end } = formatter.defaultSelection(input.value)
          input.setSelectionRange(start, end)
        }
        else {
          input.select()
        }
      }
    }
  }, [context, formatter])

  const formattedValue = formatter.format(value)

  /**
   * Handles keydown events for nudge and increment.
   * @param event - Keyboard event.
   * @returns any
   * @originalName g
   */
  const handleKeyDown = (event: any) => {
    if (executeEventHandler(event, onKeyDown) || !hasIncrementBy(formatter))
      return SKIP_RECORDING
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowDown': {
        const input = ref.current
        const isBig = event.shiftKey
        const direction = event.key === 'ArrowDown' ? -1 : 1
        const incrementTargets = getIncrementTargets(formatter, input)
        context?.commit?.()
        const nudge = (val: any) => performNudge(formatter, val, direction, { big: isBig, incrementTargets })
        const currentValue = input.value
        const parseResult = handleParseWithError(formatter, currentValue, value, 'nudge', event)
        if (!parseResult)
          break
        if (parseResult.callback) {
          parseResult.callback((val: any) => nudge(val).value, { commit: true })
          break
        }
        const parsedValue = parseResult.value
        const nudged = nudge(parsedValue)
        if (!areValuesEqual(formatter, parsedValue, nudged.value)) {
          onChange(nudged.value, 'nudge')
        }
        if (nudged.value !== nudged.preClamped) {
          onChangeRestricted?.(nudged.preClamped, { value: nudged.value })
        }
        selectionRef.current = incrementTargets
        handleIncrementSelection(formatter, incrementTargets, input)
        break
      }
      default:
        return SKIP_RECORDING
    }
    preventAndStopEvent(event)
  }

  const recordingKeyDown = useRecording(handleKeyDown, {
    eventName: 'keydown',
    recordingKey: context?.recordingKey,
  }, [handleKeyDown])

  return {
    ...rest,
    ref,
    value: formattedValue,
    onChange: (inputValue: any) => {
      const parseResult = handleParseWithError(formatter, inputValue, value, 'change', null)
      if (parseResult) {
        if (parseResult.callback) {
          parseResult.callback((val: any) => parseValue(formatter, inputValue, val).value, { commit: true })
        }
        else {
          if (parseResult.value !== value) {
            onChange(parseResult.value, 'change')
            return
          }
          if (parseResult.value !== parseResult.parsedValue) {
            onChangeRestricted?.(parseResult.parsedValue, { value: parseResult.value })
          }
        }
      }
      ref.current.value = formattedValue
    },
    onKeyDown: recordingKeyDown,
  }
}

/**
 * Handles commit and blur logic for input.
 * @param props - Input props.
 * @param context - Context object.
 * @returns object
 * @originalName (second handler in m)
 */
function commitBlurInputHandler(
  {
    ref,
    value,
    onChange,
    onKeyDown,
    onBlur,
    ...rest
  }: any,
  context: any,
) {
  const isDirtyRef = useRef(false)
  const commitRecording = useRecording(onChange, {
    eventName: 'commit',
    recordingKey: context?.recordingKey,
  }, [onChange])

  /**
   * Commits the input value if changed.
   * @originalName g
   */
  const commitInput = useCallback(() => {
    const input = ref.current
    if (input && isActiveElement(input))
      selectInputElement(input, context)
    if (!isDirtyRef.current)
      return
    const currentValue = input.value
    if (currentValue !== value) {
      input.value = value
      commitRecording?.(currentValue)
    }
    isDirtyRef.current = false
  }, [context, commitRecording, ref, value])

  useEffect(() => {
    if (context)
      context.commit = commitInput
  }, [context, commitInput])

  useLayoutEffect(() => {
    const input = ref.current
    if (!isDirtyRef.current) {
      input.value = value ?? ''
      if (isActiveElement(input))
        selectInputElement(input, context)
    }
  }, [value])

  return {
    ...rest,
    ref,
    defaultValue: value,
    onKeyDown(event: any) {
      if (executeEventHandler(event, onKeyDown))
        return
      const input = event.currentTarget
      switch (event.code) {
        case 'Enter':
          input.blur()
          break
        case 'Escape':
          if (!isDirtyRef.current)
            return
          isDirtyRef.current = false
          input.value = value ?? ''
          selectInputElement(input, context)
          break
        case 'KeyZ':
          if (isCommandKeyActive(event) && !isDirtyRef.current)
            markEventAsProcessed(event)
          return
        default:
          return
      }
      preventAndStopEvent(event)
    },
    onBlur(event: any) {
      onBlur?.(event)
      commitInput()
    },
    onChange() {
      isDirtyRef.current = true
    },
  }
}

/**
 * Handles pointer, focus, and click events for input.
 * @param props - Input props.
 * @param context - Context object.
 * @returns object
 * @originalName (third handler in m)
 */
function pointerFocusClickHandler(
  {
    onPointerDown,
    onFocus,
    onClick,
    className,
    ...rest
  }: any,
  context: any,
) {
  const isFocusedRef = useRef(false)

  return {
    ...rest,
    onPointerDown(event: any) {
      onPointerDown?.(event)
      isFocusedRef.current = false
    },
    onFocus(event: any) {
      onFocus?.(event)
      isFocusedRef.current = true
    },
    onClick(event: any) {
      const wasFocused = isFocusedRef.current
      isFocusedRef.current = false
      if (executeEventHandler(event, onClick))
        return
      const input = event.currentTarget
      if (!wasFocused || hasTextSelection(input))
        return
      selectInputElement(input, context)
    },
    className: classNames(className, 'inputs__text__FIVwi'),
  }
}

// Compose the handlers for text input
export const getInputProps = setupTextInputHandlers(
  formattedInputHandler,
  commitBlurInputHandler,
  pointerFocusClickHandler,
)

/**
 * Main hook for text input with formatting and recording.
 * @param props - Input props.
 * @returns object
 * @originalName $$h0
 */
export function useFormattedTextInput({
  value,
  formatter,
  onChange,
  recordingKey,
  id,
  'aria-label': ariaLabel,
  htmlAttributes,
  ...rest
}: any) {
  const changeRecording = useRecording(
    (val: any, source: any) =>
      rest.disabled
        ? SKIP_RECORDING
        : (onChange(val, source), source.commit && source.source !== 'change' && source.source !== 'nudge')
            ? undefined
            : SKIP_RECORDING,
    {
      eventName: 'change',
      recordingKey,
    },
    [onChange, rest.disabled],
  )

  const inputRef = useRef(null)

  const inputProps = getInputProps(
    {
      ...rest,
      ...htmlAttributes,
      ref: inputRef,
      value,
      formatter,
      onChange: (val: any, source: any) =>
        changeRecording(val, { commit: true, source }),
    },
    { recordingKey },
  )

  return {
    value,
    formatter,
    onChange: changeRecording,
    onChangeRestricted: rest.onChangeRestricted,
    getStringValue: () => inputRef.current.value,
    inputProps: {
      id,
      'aria-label': ariaLabel,
      ...inputProps,
    },
  }
}

// Export aliases for compatibility
export let $$g1 = useFormattedTextInput
// export const E = useFormattedTextInput
export const N = useFormattedTextInput
