import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { FlashActions } from '../905/573154'
import { useLatestRef } from '../figma_app/922077'

/**
 * Interface for the error state object passed to useErrorFlash.
 */
interface ErrorState {
  status: string
  errors: any
}

/**
 * Custom hook to flash error messages when the status changes to 'errors'.
 * It extracts a message from errors.data.message if available, otherwise uses a default message.
 * Dispatches a flash error action and logs the error to console.
 * @param state - The error state object containing status and errors.
 * @param defaultMessage - The default error message to use if no specific message is found.
 * @param timeout - The timeout for the flash error in milliseconds (default: 5000).
 */
export function useErrorFlash(state: ErrorState, defaultMessage: string, timeout: number = 5000) {
  const dispatch = useDispatch<AppDispatch>()
  const previousStatus = useLatestRef(state.status)
  const { status, errors } = state

  useEffect(() => {
    // Early return if status is not 'errors' or if it was already 'errors' previously
    if (status !== 'errors' || previousStatus === 'errors') {
      return
    }

    // Extract message from errors.data.message if it's a string, otherwise undefined
    const message = (typeof errors?.data?.message === 'string') ? errors.data.message : undefined

    // Dispatch flash error with extracted message or default
    dispatch(FlashActions.error(message || defaultMessage, timeout))

    // Log the errors to console for debugging
    console.error(errors)
  }, [status, previousStatus, errors, dispatch, defaultMessage, timeout])
}

/**
 * Exported alias for useErrorFlash (original export const i = $$o0).
 */
export const i = useErrorFlash
