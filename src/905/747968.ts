/**
 * Retrieves the base URL (without query/hash) from a given URL string.
 * @param url - The URL string to process.
 * @returns The base URL.
 * @originalName s
 */
const getBaseUrl = (url: string): string => url.split(/[?#]/)[0]

// Store the initial referrer and location values.
let initialReferrer = self.document?.referrer
let currentReferrer = initialReferrer
let previousLocation = self.document?.location.href

/**
 * Updates the referrer if the base URL has changed.
 * @originalName $$o1
 */
export function updateReferrer(): void {
  if (getBaseUrl(previousLocation) !== getBaseUrl(document.location.href)) {
    currentReferrer = previousLocation
    previousLocation = document.location.href
  }
}

/**
 * Returns the current referrer value.
 * @originalName $$l2
 */
export function getCurrentReferrer(): string | undefined {
  return currentReferrer
}

/**
 * Returns the initial referrer value.
 * @originalName $$d0
 */
export function getInitialReferrer(): string | undefined {
  return initialReferrer
}

// Export aliases for compatibility with original code.
export const Je = getInitialReferrer
export const d7 = updateReferrer
export const zo = getCurrentReferrer
