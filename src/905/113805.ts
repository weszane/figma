import { useEffect, useState } from 'react'

/**
 * Returns validation errors based on the status of the input object.
 * Updates errors when the input object or the toggle changes.
 *
 * Original function name: $$r0
 * Original export name: w
 *
 * @param input - Object containing status and errors.
 * @param ignoreError - If true, errors are ignored.
 * @returns Array of errors.
 */
export function getValidationErrors(input: { status: string, errors: any[] }, ignoreError: boolean = false): any[] {
  const [errors, setErrors] = useState(
    input.status !== 'error' || ignoreError ? [] : input.errors,
  )

  useEffect(() => {
    if (input.status !== 'error' || ignoreError) {
      if (input.status === 'validated') {
        setErrors(prevErrors => prevErrors.length > 0 ? [] : prevErrors)
      }
    }
    else {
      setErrors(input.errors)
    }
  }, [input, ignoreError])

  return errors
}

// Refactored export for original usage
export const w = getValidationErrors
