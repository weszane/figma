import { debugState } from '../905/407919'
import { getSelectedFile } from '../905/766303'
import { trackFileEvent } from '../figma_app/314264'

/**
 * AI Summary Event Types (mr)
 */
export enum AiSummaryEventType {
  REQUEST = 'ai_summary_requested',
  CREATE = 'ai_summary_created',
  DELETE = 'ai_summary_deleted',
  LINK_COPIED = 'ai_summary_link_copied',
  TEXT_COPIED = 'ai_summary_text_copied',
  TIME_TAKEN_TO_COMPLETE = 'figjam.summarize.time_taken_to_complete',
}

/**
 * Cluster Event Types (Ux)
 */
export enum ClusterEventType {
  TIME_TAKEN_TO_COMPLETE = 'figjam.cluster.time_taken_to_complete',
}

/**
 * Calculates the length of the JSON stringified object.
 * @param obj - The object to stringify and measure.
 * @returns The length of the JSON string.
 * @originalName $$l3
 */
export function getJsonStringLength(obj: unknown): number {
  return JSON.stringify(obj).length
}

/**
 * Tracks a file event with additional metadata.
 * @param eventType - The event type to track.
 * @param metadata - Additional metadata for the event.
 * @originalName $$d1
 */
export function trackSummaryFileEvent(eventType: any, metadata?: Record<string, unknown>): void {
  const state = debugState.getState()
  const fileKey = getSelectedFile(state)?.key ?? ''
  trackFileEvent(eventType, fileKey, state, {
    ...metadata,
  })
}

// Export refactored names for compatibility
export const mr = AiSummaryEventType
export const Ux = ClusterEventType
export const sh = getJsonStringLength
export const Vn = trackSummaryFileEvent
