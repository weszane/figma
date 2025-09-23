import { createReduxSubscriptionAtomWithState } from '../905/270322'
import { createSelector } from '../vendor/925040'

// Define a basic state interface for type safety

// Original: $$a2 = e => e.fileByKey
// Selector to get fileByKey from state
export const fileByKeySelector = (state: AppState) => state.fileByKey

// Original: $$s3(e) { return e.fileVersion }
// Selector to get fileVersion from state
export const fileVersionSelector = (state: AppState) => state.fileVersion

// Original: $$o1(e) { ... }
// Selector to check if the current page is the first page in the list
export function isFirstPageCurrentSelector(state: AppState): boolean {
  const currentPage = state.mirror.appModel.currentPage
  const pagesList = state.mirror.appModel.pagesList
  if (pagesList.length === 0)
    return false
  const firstPage = pagesList[0]
  return firstPage && firstPage.nodeId === currentPage
}

// Original: $$r0 = createReduxSubscriptionAtomWithState(...)
// Atom for subscribing to fileByKey changes
export const fileByKeyAtom = createReduxSubscriptionAtomWithState(fileByKeySelector, {
  notifyImmediate: true,
})

// Exports with meaningful names (refactored from originals: k1 = $$r0, s6 = $$o1, t_ = $$a2, vx = $$s3)
// Note: Added export for fileNamesMapSelector as it was created but not originally exported
export const k1 = fileByKeyAtom
export const s6 = isFirstPageCurrentSelector
export const t_ = fileByKeySelector
export const vx = fileVersionSelector
