import type { ReactNode } from "react"
import React, { useMemo, useRef } from "react"
import { useSelector } from "react-redux"
import { jsx } from "react/jsx-runtime"
import { useUniqueId } from "../905/27228"
import { TrackingProvider } from "../figma_app/831799"

// Origin: /src/905/414363.ts
// Refactored: Renamed variables, added types, simplified logic, added comments, improved readability

// Assumed external dependencies:
// - useUniqueId: returns a unique string ID per component instance
// - TrackingProvider: React component accepting name, properties, children
// - Redux store has shape: { search: { sessionId: string } }

interface TrackingProps {
  children: ReactNode
  page: string
  properties?: Record<string, unknown>
}

/**
 * TrackingWrapper
 * - Wraps children with TrackingProvider, injecting unique and search session IDs into properties.
 * - Renamed variables for clarity, added type safety, and comments.
 */
export function TrackingWrapper({
  children,
  page,
  properties,
}: TrackingProps) {
  // Generate a unique session ID for this component instance
  const uniqueSessionId = useUniqueId()

  // Get the current search session ID from Redux store
  const searchSessionId = useSelector(
    (state: { search: { sessionId: string } }) => state.search.sessionId,
  )

  // Store the initial search session ID in a ref (remains constant for this instance)
  const initialSearchSessionIdRef = useRef<string>(searchSessionId)

  // Memoize the properties object to avoid unnecessary re-renders
  const mergedProperties = useMemo(() => ({
    ...(properties ?? {}),
    dsaSessionId: uniqueSessionId,
    searchSessionId: initialSearchSessionIdRef.current,
  }), [properties, uniqueSessionId])

  return jsx(TrackingProvider, {
    name: page,
    properties: mergedProperties,
    children,
  })
}

// Export with original alias for compatibility
export const t = TrackingWrapper
