import { useCallback } from 'react'
import { useStore } from 'react-redux'
import { useDebouncedCallback } from 'use-debounce'
import { trackDefinedFileEvent, trackFileEvent, trackOrgEvent } from '../figma_app/314264'

/**
 * Tracks a file event using the current Redux store state.
 * Original name: $$o2
 */
export function trackFileEventWithStore(): ((eventType: string, payload?: any, options?: any) => void) {
  const store = useStore()
  return useCallback((eventType: string, payload?: any, options?: any) => {
    const state = store.getState() as { openFile: any }
    trackFileEvent(eventType, state.openFile?.key, state, payload, options)
  }, [store])
}

/**
 * Tracks a defined file event using the current Redux store state.
 * Original name: $$l4
 */
export function trackDefinedFileEventWithStore(): ((eventType: string, payload?: any) => void) {
  const store = useStore()
  return useCallback((eventType: string, payload?: any) => {
    const state = store.getState() as { openFile: any }
    trackDefinedFileEvent(eventType, state.openFile?.key ?? '', state, payload ?? {})
  }, [store])
}

/**
 * Tracks a file event with user information.
 * Original name: $$d3
 */
export function trackFileEventWithUser(): ((eventType: string, payload?: any, options?: any) => void) {
  const store = useStore()
  return useCallback((eventType: string, payload?: any, options?: any) => {
    const state = store.getState() as { openFile: any, user: any }
    const fileKey = state.openFile?.key
    const userId = state.user && state.user.id
    trackFileEvent(eventType, fileKey, state, {
      userId,
      ...payload,
    }, options)
  }, [store])
}

/**
 * Tracks a file event with current page information.
 * Original name: $$c0
 */
export function trackFileEventWithPage(): ((eventType: string, payload?: any, options?: any) => void) {
  const store = useStore()
  return useCallback((eventType: string, payload?: any, options?: any) => {
    const state = store.getState() as { openFile: any, mirror: any }
    const fileKey = state.openFile?.key
    const pageId = state.mirror.appModel.currentPage
    trackFileEvent(eventType, fileKey, state, {
      pageId,
      ...payload,
    }, options)
  }, [store])
}

/**
 * Tracks an organization event using the current Redux store state.
 * Original name: $$u5
 */
export function trackOrgEventWithStore(): ((eventType: string, payload?: any, options?: any) => void) {
  const store = useStore()
  return useCallback((eventType: string, payload?: any, options?: any) => {
    const state = store.getState() as { currentUserOrgId: string | null }
    const orgId = state.currentUserOrgId ?? ''
    trackOrgEvent(eventType, orgId, state, {
      ...payload,
    }, options)
  }, [store])
}

/**
 * Returns a debounced organization event tracker.
 * Original name: $$p1
 * @param wait - debounce wait time in ms
 */
export function debouncedTrackOrgEvent(wait: number) {
  const trackOrg = trackOrgEventWithStore()
  return useDebouncedCallback(trackOrg, wait, {
    leading: true,
    trailing: false,
  })
}

// Refactored exports to match new function names
export const IL = trackFileEventWithPage
export const NV = debouncedTrackOrgEvent
export const U = trackFileEventWithStore
export const am = trackFileEventWithUser
export const hC = trackDefinedFileEventWithStore
export const iT = trackOrgEventWithStore
