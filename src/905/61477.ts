import { createReduxSubscriptionAtomWithState } from '../905/270322'
import { atom } from '../figma_app/27355'

// Search-related atoms for managing query, input, scope, model type, filters, view state, responses, and preview order.

// Atom for the search query parameter from Redux state.
// Original: $$a2
export const searchQueryAtom = createReduxSubscriptionAtomWithState(e => e.search.parameters.query)

// Atom for the search input string.
// Original: $$s3
export const searchInputAtom = atom('')

// Atom for the search scope parameter from Redux state.
// Original: $$o8
export const searchScopeAtom = createReduxSubscriptionAtomWithState(e => e.search.parameters.searchScope)

// Atom for the search model type parameter from Redux state.
// Original: $$l1
export const searchModelTypeAtom = createReduxSubscriptionAtomWithState(e => e.search.parameters.searchModelType)

// Atom for the selected item (initially null).
// Original: $$d4
export const selectedItemAtom = atom(null)

// Atom for the facet filters parameter from Redux state.
// Original: $$c7
export const facetFiltersAtom = createReduxSubscriptionAtomWithState(e => e.search.parameters.facetFilters)

// Atom indicating if the current view is 'search'.
// Original: $$u0
export const isSearchViewAtom = createReduxSubscriptionAtomWithState(e => e.selectedView.view === 'search')

// Atom for the search responses from Redux state.
// Original: $$p6
export const searchResponsesAtom = createReduxSubscriptionAtomWithState(e => e.search.responses)

// Atom for the search preview order from Redux state.
// Original: $$m5
export const searchPreviewOrderAtom = createReduxSubscriptionAtomWithState(e => e.search.searchPreviewOrder)

/**
 * Atom indicating if the current view is 'search'.
 * @type {Atom<boolean>}
 */
export const BA = isSearchViewAtom

/**
 * Atom for the search model type parameter.
 * @type {Atom<any>}
 */
export const Hv = searchModelTypeAtom

/**
 * Atom for the search query parameter.
 * @type {Atom<string>}
 */
export const Q = searchQueryAtom

/**
 * Atom for the search input string.
 * @type {Atom<string>}
 */
export const Q8 = searchInputAtom

/**
 * Atom for the selected item.
 * @type {Atom<any>}
 */
export const R9 = selectedItemAtom

/**
 * Atom for the search preview order.
 * @type {Atom<any>}
 */
export const Yj = searchPreviewOrderAtom

/**
 * Atom for the search responses.
 * @type {Atom<any>}
 */
export const ic = searchResponsesAtom

/**
 * Atom for the facet filters parameter.
 * @type {Atom<any>}
 */
export const ih = facetFiltersAtom

/**
 * Atom for the search scope parameter.
 * @type {Atom<any>}
 */
export const sC = searchScopeAtom
