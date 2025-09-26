import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

/**
 * Handles draft submission logic for a form-like object.
 * Original function name: $$$$r0
 * @param e - Object containing submit, clearErrors, and status properties.
 * @param onSubmitCallback - Optional callback to execute on submit.
 * @returns Object with draftSubmissionResult, clearDraftSubmissionResult, and submit handler.
 */
export function setupDraftSubmissionHandler(e: {
  submit?: () => Promise<any>
  clearErrors?: () => void
  status?: string
}, onSubmitCallback?: () => void) {
  const [draftSubmissionResult, setDraftSubmissionResult] = useState<any>()
  const clearDraftSubmissionResult = useCallback(() => {
    setDraftSubmissionResult(undefined)
  }, [])

  const submit = useMemo(() => {
    if (!e.submit)
      return undefined
    return async () => {
      setDraftSubmissionResult({ result: 'pending' })
      onSubmitCallback?.()
      const result = await e.submit?.()
      setDraftSubmissionResult(result)
    }
  }, [e, onSubmitCallback])

  const shouldClear = useRef(false)

  const clearErrorsAndFlag = useMemo(() => {
    if (!e.clearErrors)
      return undefined
    return () => {
      e.clearErrors?.()
      shouldClear.current = true
    }
  }, [e])

  useEffect(() => {
    if (shouldClear.current && submit) {
      submit()
      shouldClear.current = false
    }
  }, [submit])

  useEffect(() => {
    if (shouldClear.current && e.status === 'error') {
      shouldClear.current = false
    }
  }, [e.status])

  return {
    draftSubmissionResult,
    clearDraftSubmissionResult,
    submit: submit ?? clearErrorsAndFlag,
  }
}

// Refactored export name for clarity and maintainability
export const r = setupDraftSubmissionHandler
