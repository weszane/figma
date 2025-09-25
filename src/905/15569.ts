import { mapValues } from 'lodash-es'
import { useEffect, useMemo, useRef, useState } from 'react'
import { shallowEqual } from 'react-redux'
import { reportError } from '../905/11'
import { unsetSymbol, withSubmissionError } from '../905/17894'
import { useMemoShallow, useStableState } from '../905/19536'
import { ServiceCategories } from '../905/165054'
import { useFieldValidation } from '../905/381451'
import { setupFieldTopologicalSort } from '../905/497882'
import { atom, createRemovableAtomFamily, useAtomValueAndSetter } from '../figma_app/27355'
import { throwTypeError } from '../figma_app/465776'

/**
 * Types for field validation and form state
 */
type FieldDeps = Record<string, any>
type FieldStates = Record<string, any>
interface ValidationError {
  type: string
  source?: string
  error?: any
}
type FormStatus = 'idle' | 'error' | 'validated' | 'submitting'

interface FormState {
  status: FormStatus
  errors?: ValidationError[]
}

/**
 * Helper to resolve field dependencies
 * @param fieldDeps - dependencies for a field
 * @param formValues - current form values
 * @param otherFieldStates - other field states
 */
function resolveFieldDependencies(
  fieldDeps: FieldDeps,
  formValues: any,
  otherFieldStates: any,
): any {
  // (function (e, t, i) {...})
  return mapValues(fieldDeps, (dep) => {
    switch (dep.type) {
      case 'form':
        return formValues[dep.source]
      case 'otherField':
        return otherFieldStates[dep.source]
      case 'constant':
        return dep.value
      default:
        throwTypeError(dep)
    }
  })
}

/**
 * Custom hook for form validation and submission logic
 * @param formConfig - form configuration object
 * @returns hook for managing form state
 */
export function setupFormValidationHandler(formConfig: any) {
  // let t = setupFieldTopologicalSort(e)
  const fieldOrder = setupFieldTopologicalSort(formConfig)

  /**
   * Hook for managing form validation and submission
   * @param formValues - current form values
   * @param fieldOptions - options for each field
   */
  function useFormValidation(formValues: any, fieldOptions: Record<string, any> = {}) {
    // let l = useMemoShallow(() => i, [i])
    const deps = useMemoShallow(() => formValues, [formValues])
    // let [c, g] = useStableState({...}, shallowEqual)
    const [formState, setFormState] = useStableState<FormState>(
      { status: 'idle' },
      shallowEqual,
    )

    // Reset form state on deps change
    useEffect(() => {
      setFormState({ status: 'idle' })
    }, [deps, setFormState])

    // Build field states in topological order
    const fieldStates: FieldStates = {}
    for (const fieldName of fieldOrder) {
      const resolvedDeps = resolveFieldDependencies(
        formConfig.fieldToDeps[fieldName],
        deps,
        fieldStates,
      )
      // let r = useMemo(() => t, Object.values(t))
      const memoizedDeps = useMemo(() => resolvedDeps, Object.values(resolvedDeps))
      // _[i] = useFieldValidation(e.fields[i], r, s[i])
      fieldStates[fieldName] = useFieldValidation(
        formConfig.fields[fieldName],
        memoizedDeps,
        fieldOptions[fieldName],
      )
    }

    // Memoize all field states
    const allFieldStates = useMemo(() => fieldStates, Object.values(fieldStates))
    const lastFieldStatesRef = useRef<any>()

    // Validation effect
    useEffect(() => {
      if (allFieldStates !== lastFieldStatesRef.current && formState.status === 'idle') {
        lastFieldStatesRef.current = allFieldStates;
        (async () => {
          const errors: ValidationError[] = []
          try {
            const validationResults = await formConfig.validate(deps, allFieldStates)
            errors.push(
              ...(validationResults ?? []).map((err: any) => ({
                type: 'validation',
                ...err,
              })),
            )
          }
          catch (err) {
            errors.push({
              type: 'exception',
              source: 'validate',
              error: err,
            })
            console.error(`Unhandled exception in ${formConfig.displayName}.validate:`, err)
            reportError(ServiceCategories.COMMUNITY, err, {
              extra: { source: `${formConfig.displayName}.validate` },
            })
          }
          finally {
            if (lastFieldStatesRef.current !== allFieldStates)
              // eslint-disable-next-line no-unsafe-finally
              return
            if (errors.length > 0) {
              console.warn(`Error(s) from ${formConfig.displayName}.validate:`, errors)
              setFormState({ status: 'error', errors })
            }
            else {
              setFormState({ status: 'validated' })
            }
          }
        })()
        return () => {
          lastFieldStatesRef.current = undefined
        }
      }
    }, [deps, allFieldStates, setFormState, formState.status])

    // Reset form state when field states change
    useEffect(() => {
      if (allFieldStates !== undefined) {
        setFormState({ status: 'idle' })
      }
    }, [allFieldStates, setFormState])

    // Can submit logic
    const canSubmit = useMemo(
      () => formState.status === 'validated' && formConfig.canSubmit(deps, allFieldStates),
      [deps, allFieldStates, formState.status],
    )

    // Submission state
    const [submittedValues, setSubmittedValues] = useState<any>()

    /**
     * Submit handler
     */
    const submitHandler = useMemo(
      () =>
        canSubmit
          ? async () => {
            setFormState({ status: 'submitting' })
            // Extract values for submission
            const submissionValues = (() => {
              // u()(A, ({ setValue: e, resetValue: t, ...i }) => i)
              return Object.fromEntries(
                Object.entries(allFieldStates).map(([key, val]: any) => [key, val]),
              )
            })()
            setSubmittedValues(submissionValues)

            const errors: ValidationError[] = []
            try {
              const result = await formConfig.submit(deps, submissionValues)
              if (result instanceof withSubmissionError.SubmissionError) {
                errors.push({
                  type: 'submission',
                  ...result.error,
                })
                console.warn(
                  `Error from ${formConfig.displayName}.submit:`,
                  result.error,
                )
                return { result: 'failure' }
              }
              return { result: 'success', data: result }
            }
            catch (err) {
              if (err instanceof withSubmissionError.SubmissionError) {
                throw new TypeError(
                  'Submission errors should be returned from `submit`, not thrown',
                )
              }
              errors.push({
                type: 'exception',
                source: 'submit',
                error: err,
              })
              console.error(
                `Unhandled exception in ${formConfig.displayName}.submit:`,
                err,
              )
              reportError(ServiceCategories.COMMUNITY, err, {
                extra: { source: `${formConfig.displayName}.submit` },
              })
              return { result: 'failure' }
            }
            finally {
              if (errors.length > 0) {
                setFormState({ status: 'error', errors })
              }
              else {
                setFormState({ status: 'idle' })
              }
              setSubmittedValues(undefined)
            }
          }
          : undefined,
      [canSubmit, allFieldStates, setFormState, deps],
    )

    /**
     * Clear errors handler
     */
    const clearErrorsHandler = useMemo(
      () =>
        formState.status === 'error'
          ? () => setFormState({ status: 'idle' })
          : undefined,
      [setFormState, formState.status],
    )

    // Return form state and handlers
    return useMemo(
      () => ({
        formDisplayName: formConfig.displayName,
        deps,
        fieldStates: submittedValues || allFieldStates,
        submit: submitHandler,
        clearErrors: clearErrorsHandler,
        ...formState,
      }),
      [clearErrorsHandler, allFieldStates, submittedValues, deps, formState, submitHandler],
    )
  }

  return useFormValidation
}

/**
 * Custom hook for atom-based form state management
 * @param validateFn - validation function
 * @param keyFn - function to generate unique key for atom
 * @param filterFn - function to filter field states before storing
 */
export function setupAtomFormHandler(
  validateFn: (a: any, b: any) => any,
  keyFn: (a: any) => any,
  filterFn: (states: any) => any = states =>
    Object.fromEntries(
      Object.entries(states)
        .filter(([_, val]: any) => val.currentValue !== unsetSymbol)
        .map(([key, val]: any) => [key, val.currentValue]),
    ),
) {
  // let r = createRemovableAtomFamily(...)
  const atomFamily = createRemovableAtomFamily(
    ({ initialValues = {} }) => atom(initialValues),
    (a, b) => a.uniqueKey === b.uniqueKey,
  )

  /**
   * Hook for atom-based form state
   * @param formValues - form values
   * @param initialFieldStates - initial field states
   */
  function useAtomForm(formValues: any, initialFieldStates: any = {}) {
    const uniqueKey = keyFn(formValues)
    const atomInstance = atomFamily({
      uniqueKey,
      initialValues: initialFieldStates,
    })
    const [atomFieldStates, setAtomFieldStates] = useAtomValueAndSetter(atomInstance)
    const formHandler = validateFn(formValues, atomFieldStates)

    // Store filtered field states on unmount
    useEffect(
      () => () => {
        setAtomFieldStates(filterFn(formHandler.fieldStates))
      },
      [formHandler.fieldStates, setAtomFieldStates],
    )

    // Remove atom on successful submit
    const submittedRef = useRef(false)
    useEffect(
      () => () => {
        if (submittedRef.current) {
          atomFamily.remove({
            uniqueKey,
            initialValues: initialFieldStates,
          })
        }
      },
      [uniqueKey],
    )

    /**
     * Submit handler with atom removal logic
     */
    const submitWithAtom = useMemo(() => {
      const submitFn = formHandler.submit
      return submitFn
        ? async () => {
          const result = await submitFn()
          submittedRef.current = result.result === 'success'
          return result
        }
        : undefined
    }, [formHandler.submit])

    return {
      ...formHandler,
      submit: submitWithAtom,
    }
  }

  return useAtomForm
}

// Export refactored names for imports
export const T = setupFormValidationHandler // $$_0
export const e = setupAtomFormHandler // $$A1
