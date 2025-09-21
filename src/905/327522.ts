import { logError, logWarning } from '../905/714362'

/**
 * Logs an autosave error with additional context.
 * Original function name: $$r2
 * @param error - The error to log.
 * @param context - Additional context for the error.
 */
export function logAutosaveError(error: any, context?: any) {
  logError('Autosave', error, context, {
    reportAsSentryError: true,
  })
}

/**
 * Logs an autosave error with the original message from the error object.
 * Original function name: $$a0
 * @param error - The error to log.
 * @param originalError - The original error object containing the message.
 */
export function logAutosaveErrorWithOriginalMessage(error: any, originalError: { message: string }) {
  logAutosaveError(error, {
    'original message': originalError.message,
  })
}

/**
 * Checks if the given object represents an autosave file.
 * Original function name: $$s4
 * @param obj - The object to check.
 * @returns True if the object is an autosave file, false otherwise.
 */
export function isAutosaveFile(obj: { type: string }) {
  return obj.type === 'autosave-file'
}

/**
 * Determines if autosave is enabled. Currently always returns false.
 * Original function name: $$o3
 * @returns Always false.
 */
export function isAutosaveEnabled() {
  return false
}

/**
 * Retrieves storage usage and quota estimates from the navigator.
 * Original function name: $$l1
 * @returns A promise resolving to an object with usageBytes and quotaBytes.
 */
export async function getStorageEstimate() {
  try {
    if (!navigator.storage?.estimate) {
      return Promise.resolve({
        usageBytes: undefined,
        quotaBytes: undefined,
      })
    }
    const { usage, quota } = await navigator.storage.estimate()
    return {
      usageBytes: usage,
      quotaBytes: quota,
    }
  }
  catch (error) {
    logWarning('Autosave', 'Failed to get storage usage', {
      message: error?.message,
    })
    return Promise.resolve({
      usageBytes: undefined,
      quotaBytes: undefined,
    })
  }
}

export const Lf = logAutosaveErrorWithOriginalMessage
export const U4 = getStorageEstimate
export const W6 = logAutosaveError
export const rQ = isAutosaveEnabled
export const y8 = isAutosaveFile
