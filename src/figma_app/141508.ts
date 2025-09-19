import { keyBy, uniq } from 'lodash-es'
import { createSelector } from 'reselect'
import { createReduxSubscriptionAtomWithState } from '../905/270322'

import { composeWithTransformer, createDeepEqualSelector } from '../905/270781'

// Original: function c(e) { return composeWithTransformer(e => e.library, e) }
/**
 * Composes a selector with the library state using a transformer.
 * @param selector - The selector function to compose.
 * @returns The composed selector.
 */
export const composeWithLibrary = <T>(selector: (state: any) => T) => composeWithTransformer((state: any) => state.library, selector)

// Original: let $$u15 = c(e => e.subscribedSymbolsFromLoadedPages)
/**
 * Selector for subscribed symbols from loaded pages.
 * Original: $$u15
 */
export const subscribedSymbolsFromLoadedPagesSelector = composeWithLibrary(state => state.subscribedSymbolsFromLoadedPages)

// Original: let $$p11 = c(e => e.subscribedSymbolsOnCurrentPage)
/**
 * Selector for subscribed symbols on current page.
 * Original: $$p11
 */
export const subscribedSymbolsOnCurrentPageSelector = composeWithLibrary(state => state.subscribedSymbolsOnCurrentPage)

// Original: let $$_19 = createDeepEqualSelector([e => e.library.subscribedVariablesByIdFromLoadedPages], e => Object.values(e))
/**
 * Selector for subscribed variables from loaded pages as an array.
 * Original: $$_19
 */
export const subscribedVariablesFromLoadedPagesSelector = createDeepEqualSelector(
  [(state: any) => state.library.subscribedVariablesByIdFromLoadedPages],
  (variablesById: Record<string, any>) => Object.values(variablesById),
)

// Original: let $$h2 = e => e.library.subscribedVariableSetsByIdFromLoadedPages
/**
 * Selector for subscribed variable sets by ID from loaded pages.
 * Original: $$h2
 */
export const subscribedVariableSetsByIdFromLoadedPagesSelector = (state: any) => state.library.subscribedVariableSetsByIdFromLoadedPages

// Original: let $$m12 = createDeepEqualSelector([$$h2], e => Object.values(e))
/**
 * Selector for subscribed variable sets from loaded pages as an array.
 * Original: $$m12
 */
export const subscribedVariableSetsFromLoadedPagesSelector = createDeepEqualSelector(
  [subscribedVariableSetsByIdFromLoadedPagesSelector],
  (variableSetsById: Record<string, any>) => Object.values(variableSetsById),
)

// Original: let $$g9 = createSelector([$$u15], e => keyBy(e, e => e.key))
/**
 * Selector for subscribed symbols from loaded pages keyed by their key.
 * Original: $$g9
 */
export const subscribedSymbolsByKeyFromLoadedPagesSelector = createSelector(
  [subscribedSymbolsFromLoadedPagesSelector],
  (symbols: any[]) => keyBy(symbols, (symbol: any) => symbol.key),
)

// Original: let $$f7 = c(e => e.subscribedStateGroupsFromLoadedPages)
/**
 * Selector for subscribed state groups from loaded pages.
 * Original: $$f7
 */
export const subscribedStateGroupsFromLoadedPagesSelector = composeWithLibrary(state => state.subscribedStateGroupsFromLoadedPages)

// Original: let E = c(e => e.subscribedStateGroupsOnCurrentPage)
/**
 * Selector for subscribed state groups on current page.
 * Original: E
 */
export const subscribedStateGroupsOnCurrentPageSelector = composeWithLibrary(state => state.subscribedStateGroupsOnCurrentPage)

// Original: let $$y10 = c(e => e.directlySubscribedStylesFromLoadedPages)
/**
 * Selector for directly subscribed styles from loaded pages.
 * Original: $$y10
 */
export const directlySubscribedStylesFromLoadedPagesSelector = composeWithLibrary(state => state.directlySubscribedStylesFromLoadedPages)

// Original: let b = c(e => e.directlySubscribedStylesOnCurrentPage)
/**
 * Selector for directly subscribed styles on current page.
 * Original: b
 */
export const directlySubscribedStylesOnCurrentPageSelector = composeWithLibrary(state => state.directlySubscribedStylesOnCurrentPage)

// Original: let T = c(e => e.indirectlySubscribedStylesFromLoadedPages)
/**
 * Selector for indirectly subscribed styles from loaded pages.
 * Original: T
 */
export const indirectlySubscribedStylesFromLoadedPagesSelector = composeWithLibrary(state => state.indirectlySubscribedStylesFromLoadedPages)

// Original: let $$I1 = createSelector([T], e => e.length > 0)
/**
 * Selector indicating if there are indirectly subscribed styles from loaded pages.
 * Original: $$I1
 */
export const hasIndirectlySubscribedStylesFromLoadedPagesSelector = createSelector(
  [indirectlySubscribedStylesFromLoadedPagesSelector],
  (styles: any[]) => styles.length > 0,
)

// Original: let S = createSelector([$$y10, T], (e, t) => [...e, ...t])
/**
 * Selector for all subscribed styles from loaded pages (direct and indirect).
 * Original: S
 */
export const allSubscribedStylesFromLoadedPagesSelector = createSelector(
  [directlySubscribedStylesFromLoadedPagesSelector, indirectlySubscribedStylesFromLoadedPagesSelector],
  (direct: any[], indirect: any[]) => [...direct, ...indirect],
)

// Original: function v(e) { return e.map(e => e.nodeId) }
/**
 * Maps an array of items to their nodeIds.
 * @param items - Array of items with nodeId.
 * @returns Array of nodeIds.
 * Original: v
 */
export const mapToNodeIds = (items: { nodeId: string }[]) => items.map(item => item.nodeId)

// Original: function A(e) { return uniq(e.map(e => e.key)) }
/**
 * Maps an array of items to their keys and removes duplicates.
 * @param items - Array of items with key.
 * @returns Unique array of keys.
 * Original: A
 */
export const mapToUniqueKeys = (items: { key: string }[]) => uniq(items.map(item => item.key))

// Original: let $$x0 = createSelector([$$u15], v)
/**
 * Selector for nodeIds of subscribed symbols from loaded pages.
 * Original: $$x0
 */
export const subscribedSymbolsNodeIdsFromLoadedPagesSelector = createSelector(
  [subscribedSymbolsFromLoadedPagesSelector],
  mapToNodeIds,
)

// Original: let $$N4 = createSelector([$$p11], v)
/**
 * Selector for nodeIds of subscribed symbols on current page.
 * Original: $$N4
 */
export const subscribedSymbolsNodeIdsOnCurrentPageSelector = createSelector(
  [subscribedSymbolsOnCurrentPageSelector],
  mapToNodeIds,
)

// Original: let $$C13 = createSelector([$$f7], v)
/**
 * Selector for nodeIds of subscribed state groups from loaded pages.
 * Original: $$C13
 */
export const subscribedStateGroupsNodeIdsFromLoadedPagesSelector = createSelector(
  [subscribedStateGroupsFromLoadedPagesSelector],
  mapToNodeIds,
)

// Original: let $$w3 = createSelector([E], v)
/**
 * Selector for nodeIds of subscribed state groups on current page.
 * Original: $$w3
 */
export const subscribedStateGroupsNodeIdsOnCurrentPageSelector = createSelector(
  [subscribedStateGroupsOnCurrentPageSelector],
  mapToNodeIds,
)

// Original: let $$O14 = createSelector([$$y10], v)
/**
 * Selector for nodeIds of directly subscribed styles from loaded pages.
 * Original: $$O14
 */
export const directlySubscribedStylesNodeIdsFromLoadedPagesSelector = createSelector(
  [directlySubscribedStylesFromLoadedPagesSelector],
  mapToNodeIds,
)

// Original: createSelector([b], v) - This was unused, so omitted.

// Original: let $$R6 = createSelector([S], v)
/**
 * Selector for nodeIds of all subscribed styles from loaded pages.
 * Original: $$R6
 */
export const allSubscribedStylesNodeIdsFromLoadedPagesSelector = createSelector(
  [allSubscribedStylesFromLoadedPagesSelector],
  mapToNodeIds,
)

// Original: let $$L8 = createSelector([$$u15], A)
/**
 * Selector for unique keys of subscribed symbols from loaded pages.
 * Original: $$L8
 */
export const subscribedSymbolsUniqueKeysFromLoadedPagesSelector = createSelector(
  [subscribedSymbolsFromLoadedPagesSelector],
  mapToUniqueKeys,
)

// Original: createSelector([$$p11], e => new Set(e.map(e => e.key))) - This was unused, so omitted.

// Original: let $$P5 = createSelector([$$f7], A)
/**
 * Selector for unique keys of subscribed state groups from loaded pages.
 * Original: $$P5
 */
export const subscribedStateGroupsUniqueKeysFromLoadedPagesSelector = createSelector(
  [subscribedStateGroupsFromLoadedPagesSelector],
  mapToUniqueKeys,
)

// Original: let D = createSelector([$$y10], A)
/**
 * Selector for unique keys of directly subscribed styles from loaded pages.
 * Original: D
 */
export const directlySubscribedStylesUniqueKeysFromLoadedPagesSelector = createSelector(
  [directlySubscribedStylesFromLoadedPagesSelector],
  mapToUniqueKeys,
)

// Original: let $$k18 = createSelector([b], e => new Set(e.map(e => e.key)))
/**
 * Selector for unique keys of directly subscribed styles on current page as a Set.
 * Original: $$k18
 */
export const directlySubscribedStylesUniqueKeysOnCurrentPageSelector = createSelector(
  [directlySubscribedStylesOnCurrentPageSelector],
  (styles: any[]) => new Set(styles.map(style => style.key)),
)

// Original: let $$M17 = createReduxSubscriptionAtomWithState(D)
/**
 * Redux subscription atom for directly subscribed styles unique keys from loaded pages.
 * Original: $$M17
 */
export const directlySubscribedStylesUniqueKeysAtom = createReduxSubscriptionAtomWithState(directlySubscribedStylesUniqueKeysFromLoadedPagesSelector)

// Original: let $$F16 = createSelector([S], A)
/**
 * Selector for unique keys of all subscribed styles from loaded pages.
 * Original: $$F16
 */
export const allSubscribedStylesUniqueKeysFromLoadedPagesSelector = createSelector(
  [allSubscribedStylesFromLoadedPagesSelector],
  mapToUniqueKeys,
)

// Exports with meaningful names
export const C9 = subscribedSymbolsNodeIdsFromLoadedPagesSelector
export const Co = hasIndirectlySubscribedStylesFromLoadedPagesSelector
export const Du = subscribedVariableSetsByIdFromLoadedPagesSelector
export const EY = subscribedStateGroupsNodeIdsOnCurrentPageSelector
export const J5 = subscribedSymbolsNodeIdsOnCurrentPageSelector
export const LL = subscribedStateGroupsUniqueKeysFromLoadedPagesSelector
export const MH = allSubscribedStylesNodeIdsFromLoadedPagesSelector
export const No = subscribedStateGroupsFromLoadedPagesSelector
export const OQ = subscribedSymbolsUniqueKeysFromLoadedPagesSelector
export const S_ = subscribedSymbolsByKeyFromLoadedPagesSelector
export const _Q = directlySubscribedStylesFromLoadedPagesSelector
export const aD = subscribedSymbolsOnCurrentPageSelector
export const jU = subscribedVariableSetsFromLoadedPagesSelector
export const jf = subscribedStateGroupsNodeIdsFromLoadedPagesSelector
export const kc = directlySubscribedStylesNodeIdsFromLoadedPagesSelector
export const m0 = subscribedSymbolsFromLoadedPagesSelector
export const qC = allSubscribedStylesUniqueKeysFromLoadedPagesSelector
export const sm = directlySubscribedStylesUniqueKeysAtom
export const tY = directlySubscribedStylesUniqueKeysOnCurrentPageSelector
export const v3 = subscribedVariablesFromLoadedPagesSelector
