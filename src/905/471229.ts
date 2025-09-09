import { getInitialOptions } from '../figma_app/169182'
/**
 * Stores the tracking session ID.
 * @see r
 */
let trackingSessionId = ''

/**
 * Counter for session increments.
 * @see a
 */
let sessionCounter = 0

/**
 * Stores the initial ISO timestamp.
 * @see $$s1
 */
export const initISOString = new Date().toISOString()

/**
 * Returns the tracking session ID, generating it if not already set.
 * @returns {string} The tracking session ID.
 * @see $$o2
 */
export function getTrackingSessionId(): string {
  if (trackingSessionId === '') {
    const options = getInitialOptions()
    trackingSessionId = options.tracking_session_id || Math.random().toString(36).substring(2)
  }
  return trackingSessionId
}

/**
 * Increments and returns the session counter.
 * @returns {number} The incremented session counter.
 * @see $$l0
 */
export function incrementSessionCounter(): number {
  return ++sessionCounter
}

// Exported aliases for backward compatibility and clarity
export const EG = incrementSessionCounter
export const aK = initISOString
export const fF = getTrackingSessionId
