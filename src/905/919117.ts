import type { Atom, WritableAtom } from "jotai"
import { atom } from "jotai"
import { useEffect } from "react"
import { analyticsEventManager } from "../905/449184"
import { generateUUIDv4 } from "../905/871474"
import { setupRemovableAtomFamily } from "../figma_app/615482"
import { atomStoreManager } from "./490038"

// Refactored from /Users/allen/github/fig/src/905/919117.ts
// Changes: Renamed minified variables (e.g., $$o1 to copySelectionToastAtom, $$l0 to useCopySelectionToastEffect), added TypeScript interfaces for type safety, improved readability with comments and clear logic, preserved functionality including conditional updates and analytics tracking.

// Define interface for the atom's state to ensure type safety
interface CopySelectionToastState {
  impressionId: string | null
  source: string | null
  hasSearchTerm?: boolean // Optional, inferred from usage
}

// Create a removable atom family for managing copy selection toast state
export let copySelectionToastAtom = setupRemovableAtomFamily<CopySelectionToastState>(() =>
  atom({
    impressionId: null,
    source: null,
  }),
)

// React hook to handle impression tracking for copy selection toast
export function useCopySelectionToastEffect() {
  useEffect(() => {
    // Generate a new impression ID
    const impressionId = generateUUIDv4()
    const source = "COPY_SELECTION_TOAST"

    // Retrieve current state from the atom
    // Since copySelectionToastAtom is an AtomFamily, we need to get a specific atom from it first
    const fileKeyAtom = copySelectionToastAtom("FILE_KEY")
    const currentState: CopySelectionToastState = atomStoreManager.get(fileKeyAtom)

    const { impressionId: currentImpressionId, source: currentSource, hasSearchTerm }
      = currentState

    // Check if state needs updating (only if impressionId, source differ, or hasSearchTerm is not false)
    // Note: The original logic checks if impressionId !== e || source !== t || !1 !== hasSearchTerm
    // This simplifies to: update if any key differs or hasSearchTerm is not false
    if (
      currentImpressionId !== impressionId
      || currentSource !== source
      || hasSearchTerm !== false
    ) {
      // Update the atom state
      atomStoreManager.set(fileKeyAtom as WritableAtom<CopySelectionToastState, [CopySelectionToastState], void>, {
        impressionId,
        source,
        hasSearchTerm: false,
      })

      // Track the analytics event
      analyticsEventManager.trackDefinedMetric("suggested_actions.entry_point_impressions", {
        impressionId,
        source: "COPY_SELECTION_TOAST",
        hasSearchTerm: false,
      })
    }
  }, []) // Empty dependency array means this runs once on mount
}

// Export aliases to match original structure
export const _ = useCopySelectionToastEffect
export const b = copySelectionToastAtom
