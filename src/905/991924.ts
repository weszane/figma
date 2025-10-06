import { forwardRef, useCallback, useEffect, useMemo, useRef } from "react"
import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import { Q } from "../905/249555"
import { createMultiRefCallback } from "../figma_app/272902"
import { useHandleChangeEvent, useHandleGenericEvent, useHandleKeyboardEvent, useSetupPlayback } from "../figma_app/878298"
import { useLatestRef } from "../figma_app/922077"
// Original: $$d0
// Refactored component for a playback-enabled input with submit/cancel functionality
/**
 * A forward-ref input component that handles playback recording, keyboard events, and focus management.
 * @param props - The component props.
 * @param ref - The forwarded ref to the input element.
 */
export const PlaybackInput = forwardRef<HTMLInputElement, PlaybackInputProps>((props, ref) => {
  const {
    recordingKey = "",
    usePlaceholderAttribute,
    noDefaultFocus,
    placeholderValue,
    submit,
    cancel,
    hiddenLabelText,
    inputId,
    className,
    maxLength,
    onBlur,
    dontPropagateKeyDown,
    onKeyDown,
    style,
  } = props

  const inputRef = useRef<HTMLInputElement>(null)
  const latestInputRef = useLatestRef(inputRef.current)

  // Original: useEffect for initial focus and placeholder setup
  useEffect(() => {
    const input = inputRef.current
    if (input && !latestInputRef.current) {
      if (!input.value) {
        if (usePlaceholderAttribute) {
          input.value = placeholderValue || ""
        }
      }
      if (!noDefaultFocus) {
        input.focus()
        input.select()
      }
    }
  }, [inputRef, latestInputRef, noDefaultFocus, placeholderValue, usePlaceholderAttribute])

  // Original: m (setupPlayback)
  const handlePlaybackSubmit = useSetupPlayback(recordingKey, "submit", (event) => {
    if (inputRef.current) {
      submit(event, inputRef.current)
    }
  })

  // Original: h (callback for submit or cancel)
  const handleSubmitOrCancel = useCallback(() => {
    const input = inputRef.current
    if (!input)
      return
    const value = input.value
    if (value) {
      handlePlaybackSubmit(value)
    }
    else {
      cancel(input)
    }
  }, [inputRef, cancel, handlePlaybackSubmit])

  // Original: g (change event handler)
  const handleChange = useHandleChangeEvent(recordingKey, "change", () => {})

  // Original: f (blur callback)
  const handleBlur = useCallback(() => {
    const input = inputRef.current
    if (input && input.value !== placeholderValue) {
      handleSubmitOrCancel()
    }
    else if (input) {
      cancel(input)
    }
  }, [cancel, placeholderValue, handleSubmitOrCancel])

  // Original: _ (generic blur event)
  const blurHandler = useHandleGenericEvent(recordingKey, "blur", handleBlur)

  // Original: A (keyboard event handler)
  const handleKeyDown = useHandleKeyboardEvent(recordingKey, "keydown", (event) => {
    const input = inputRef.current
    if (!input)
      return

    switch (event.keyCode) {
      case 13: // Enter
        event.stopPropagation()
        handleSubmitOrCancel()
        break
      case 27: // Escape
        event.stopPropagation()
        cancel(input)
        break
      default:
        if (dontPropagateKeyDown) {
          event.stopPropagation()
        }
        else {
          onKeyDown?.(event)
        }
    }
  })

  // Original: y (click handler)
  const handleClick = useCallback((event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation()
    event.preventDefault()
  }, [])

  // Original: b (multi ref callback)
  const multiRef = useMemo(() => createMultiRefCallback(inputRef, ref), [inputRef, ref])

  return jsxs(Fragment, {
    children: [
      hiddenLabelText && jsx("label", {
        htmlFor: inputId,
        className: Q,
        children: hiddenLabelText,
      }),
      jsx("input", {
        ref: multiRef,
        className: `input--input--IPk3x ${className || ""}`,
        dir: "auto",
        id: inputId,
        maxLength,
        onBlur: onBlur || blurHandler,
        onChange: handleChange,
        onClick: handleClick,
        onKeyDown: handleKeyDown,
        placeholder: usePlaceholderAttribute ? placeholderValue : undefined,
        style,
      }),
    ],
  })
})

// Original: p
export const p = PlaybackInput

// Interface for props (added for type safety)
interface PlaybackInputProps {
  recordingKey?: string
  usePlaceholderAttribute?: boolean
  noDefaultFocus?: boolean
  placeholderValue?: string
  submit: (event: any, input: HTMLInputElement) => void
  cancel: (input: HTMLInputElement) => void
  hiddenLabelText?: string
  inputId?: string
  className?: string
  maxLength?: number
  onBlur?: (event: any) => void
  dontPropagateKeyDown?: boolean
  onKeyDown?: (event: KeyboardEvent) => void
  style?: React.CSSProperties
}
