import { atom } from '../figma_app/27355'
import { DEFAULT_SEARCH_CONTEXT, MAX_CONCURRENT_FRAGMENT_LOADS } from '../figma_app/257779'
import { createTrackedAtom } from '../figma_app/615482'

interface SearchSuggestionsState {
  suggestions: Array<{ id: string }>
  analyticsData: typeof DEFAULT_SEARCH_CONTEXT
  isSeen: boolean
}

interface UpdateSuggestionsPayload {
  suggestions: Array<{ id: string }>
}

export const searchSuggestionsAtom = createTrackedAtom<SearchSuggestionsState>({
  suggestions: [],
  analyticsData: DEFAULT_SEARCH_CONTEXT,
  isSeen: true,
})

/**
 * Atom for managing search suggestions with concurrency limiting
 * (refactored from $$o0)
 */
export const suggestionsManagerAtom = atom(
  get => get(searchSuggestionsAtom),
  (get, set, payload: UpdateSuggestionsPayload) => {
    const currentState = get(searchSuggestionsAtom)
    const limitedSuggestions = payload.suggestions.slice(0, MAX_CONCURRENT_FRAGMENT_LOADS)

    // Check if suggestions have actually changed
    const hasSuggestionsChanged
      = currentState.suggestions.length !== limitedSuggestions.length
        || currentState.suggestions.some((suggestion, index) =>
          suggestion.id !== limitedSuggestions[index]?.id,
        )

    // Update isSeen flag: reset to false when suggestions change,
    // unless there are no suggestions
    const shouldMarkAsSeen = hasSuggestionsChanged
      ? limitedSuggestions.length === 0
      : currentState.isSeen

    set(searchSuggestionsAtom, {
      ...payload,
      suggestions: limitedSuggestions,
      isSeen: shouldMarkAsSeen,
    } as any)
  },
)

/**
 * Atom for tracking whether search suggestions have been seen
 * (refactored from $$l1)
 */
const suggestionsSeenTrackerAtom = atom(
  get => get(searchSuggestionsAtom).isSeen,
  (get, set) => {
    const currentState = get(searchSuggestionsAtom)
    set(searchSuggestionsAtom, {
      ...currentState,
      isSeen: true,
    })
  },
)

export const P = suggestionsManagerAtom
export const a = suggestionsSeenTrackerAtom
