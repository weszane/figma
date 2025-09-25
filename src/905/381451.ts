/* eslint-disable no-unsafe-finally */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { shallowEqual } from 'react-redux'
import { reportError } from '../905/11'
import { unsetSymbol } from '../905/17894'
import { useMemoShallow, useStableState } from '../905/19536'
import { ServiceCategories } from '../905/165054'

/**
 * Symbol used to indicate a reset state (original: $$d)
 */
const RESET_SYMBOL = Symbol('RESET')

/**
 * Type for validation and exception errors (original: error objects in $$c0)
 */
interface FieldError {
  type: 'validation' | 'exception'
  source?: string
  error?: unknown
  [key: string]: any
}

/**
 * Status for field validation (original: status in $$c0)
 */
type FieldStatus = 'idle' | 'loading' | 'error' | 'validated'

/**
 * State for field validation (original: p, m in $$c0)
 */
interface FieldState {
  status: FieldStatus
  errors?: FieldError[]
}

/**
 * Props for the field handler (original: e in $$c0)
 */
interface FieldHandler<TDeps, TValue> {
  displayName: string
  fetchInitialValue: (deps: TDeps) => Promise<TValue>
  validate: (deps: TDeps, value: TValue) => Promise<FieldError[] | undefined>
  canSet: (deps: TDeps, value: TValue) => boolean
  isEqual?: (a: TValue, b: TValue) => boolean
}

/**
 * Hook for managing field state, validation, and errors (original: $$c0)
 * @param handler FieldHandler for the field
 * @param deps Dependencies for the field
 * @param initialValue Initial value for the field
 */
export function useFieldValidation<TDeps, TValue>(
  handler: FieldHandler<TDeps, TValue>,
  deps: TDeps,
  initialValue: TValue | symbol = unsetSymbol,
) {
  // Memoize dependencies (original: u)
  const memoDeps = useMemoShallow(() => deps, [deps])

  // State for status and errors (original: p, m)
  const [fieldState, setFieldState] = useStableState<FieldState>(
    { status: 'idle' },
    shallowEqual,
  )

  // Reset status when dependencies change (original: useEffect for m)
  useEffect(() => {
    setFieldState({ status: 'idle' })
  }, [memoDeps, setFieldState])

  // Current value state (original: h, g)
  const [currentValue, setCurrentValue] = useState<TValue | symbol>(initialValue)

  // Fetch initial value when unset or reset (original: useEffect for fetchInitialValue)
  useEffect(() => {
    if (currentValue === unsetSymbol || currentValue === RESET_SYMBOL) {
      setFieldState({ status: 'loading' })
      let cancelled = false
      async function inner() {
        let errorObj: FieldError | undefined
        let fetchedValue: TValue | symbol = unsetSymbol
        try {
          fetchedValue = await handler.fetchInitialValue(memoDeps)
        }
        catch (error) {
          errorObj = {
            type: 'exception',
            source: 'fetchInitialValue',
            error,
          }
          console.error(
            `Unhandled exception in ${handler.displayName}.fetchInitialValue:`,
            error,
          )
          reportError(ServiceCategories.COMMUNITY, error, {
            extra: { source: `${handler.displayName}.fetchInitialValue` },
          })
        }
        finally {
          if (cancelled)
            return 
          if (errorObj) {
            setFieldState({ status: 'error', errors: [errorObj] })
            return
          }
          if (fetchedValue !== unsetSymbol || currentValue === RESET_SYMBOL) {
            setCurrentValue(fetchedValue)
          }
          setFieldState({ status: 'idle' })
        }
      }
      inner()
      return () => {
        cancelled = true
      }
    }
  }, [handler, currentValue, memoDeps, setCurrentValue, setFieldState])

  // Ref to track last validated value (original: f)
  const lastValidatedRef = useRef<TValue | symbol>(unsetSymbol)

  // Validate value when changed (original: useEffect for validate)
  useEffect(() => {
    if (
      currentValue !== unsetSymbol
      && currentValue !== RESET_SYMBOL
      && currentValue !== lastValidatedRef.current
      && fieldState.status === 'idle'
    ) {
      lastValidatedRef.current = currentValue
      async function inner() {
        const errors: FieldError[] = []
        try {
          const validationErrors = await handler.validate(memoDeps, currentValue as TValue)
          errors.push(
            ...(validationErrors ?? []).map(e => ({
              type: 'validation',
              ...e,
            })),
          )
        }
        catch (error) {
          errors.push({
            type: 'exception',
            source: 'validate',
            error,
          })
          console.error(
            `Unhandled exception in ${handler.displayName}.validate:`,
            error,
          )
          reportError(ServiceCategories.COMMUNITY, error, {
            extra: { source: `${handler.displayName}.validate` },
          })
        }
        finally {
          if (lastValidatedRef.current !== currentValue) {
            return false
          }
          if (errors.length > 0) {
            console.warn(
              `Error(s) from ${handler.displayName}.validate:`,
              errors,
            )
            setFieldState({ status: 'error', errors })
          }
          else {
            setFieldState({ status: 'validated' })
          }
        }
      }
      inner()
      return () => {
        lastValidatedRef.current = unsetSymbol
      }
    }
  }, [handler, currentValue, memoDeps, setFieldState, fieldState.status])

  // Reset status when value changes (original: useEffect for h !== unsetSymbol)
  useEffect(() => {
    if (currentValue !== unsetSymbol) {
      setFieldState({ status: 'idle' })
    }
  }, [currentValue, setFieldState])

  // Can set value (original: _)
  const canSetValue = useMemo(
    () =>
      currentValue !== unsetSymbol
      && currentValue !== RESET_SYMBOL
      && handler.canSet(memoDeps, currentValue as TValue),
    [handler, memoDeps, currentValue],
  )

  /**
   * Set value handler (original: A)
   */
  const setValue = useMemo(
    () =>
      canSetValue
        ? (value: TValue) => {
            if (
              value === currentValue
              || (currentValue !== unsetSymbol
                && currentValue !== RESET_SYMBOL
                && handler.isEqual?.(value, currentValue as TValue))
            ) {
              return
            }
            setCurrentValue(value)
            setFieldState({ status: 'idle' })
          }
        : undefined,
    [handler, canSetValue, currentValue, setFieldState],
  )

  /**
   * Reset value handler (original: y)
   */
  const resetValue = useCallback(() => {
    setCurrentValue(RESET_SYMBOL)
    setFieldState({ status: 'idle' })
  }, [setCurrentValue, setFieldState])

  /**
   * Clear errors handler (original: b)
   */
  const clearErrors = useMemo(
    () =>
      fieldState.status === 'error'
        ? () => setFieldState({ status: 'idle' })
        : undefined,
    [setFieldState, fieldState.status],
  )

  /**
   * Return field validation state and handlers (original: return useMemo)
   */
  return useMemo(
    () => ({
      fieldDisplayName: handler.displayName,
      deps: memoDeps,
      currentValue: currentValue === RESET_SYMBOL ? unsetSymbol : currentValue,
      setValue,
      resetValue,
      clearErrors,
      ...fieldState,
    }),
    [
      handler.displayName,
      clearErrors,
      currentValue,
      resetValue,
      setValue,
      memoDeps,
      fieldState,
    ],
  )
}

/**
 * Export for backward compatibility (original: export const d = $$c0)
 */
export const d = useFieldValidation
