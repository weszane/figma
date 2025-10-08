import { createReduxSubscriptionAtomWithState } from '../905/270322'
import { debugState } from '../905/407919'
import { getFeatureFlags } from '../905/601108'
import { isUIHiddenOrLocked } from '../905/868547'
import { selectViewAction } from '../905/929976'
import { atom } from '../figma_app/27355'
import { DISABLED_PANEL_TYPES } from '../figma_app/32891'
import { setupRemovableAtomFamily } from '../figma_app/615482'
import { PanelType, ViewType } from '../figma_app/763686'

// Original: $$p3
// Refactored: sitesViewSetterAtomFamily
// Atom family for setting the sites view, with permission checks and error handling.
export const sitesViewSetterAtomFamily = setupRemovableAtomFamily(() => atom(
  get => get(currentSitesViewAtom), // Getter for current sites view
  (get, set, newSitesView: PanelType) => {
    const selectedView = debugState.getState().selectedView
    if (!selectedView)
      return

    // Permission check for DAKOTA panel
    if (newSitesView === PanelType.DAKOTA && !getFeatureFlags().dakota) {
      console.error('A sites view was accessed that a user did not have permission to access', newSitesView)
      return
    }

    const updatedView = {
      ...selectedView,
      sitesView: newSitesView,
    }
    debugState.dispatch(selectViewAction(updatedView))
  },
))

// Original: currentSitesViewAtom
// Refactored: currentSitesViewAtom (kept name for clarity, but added types and comments)
// Redux subscription atom that computes the current sites view based on state,
// handling UI locks, read-only modes, disabled panels, and permissions.
const currentSitesViewAtom = createReduxSubscriptionAtomWithState((state) => {
  const selectedView = state.selectedView
  const isUIHiddenOrLockedFlag = isUIHiddenOrLocked(state?.progressBarState?.mode)
  const isReadOnly = state.mirror.appModel.isReadOnly || state.mirror.appModel.topLevelMode === ViewType.HISTORY

  // Early return if UI is hidden/locked or no selected view
  if (isUIHiddenOrLockedFlag || !selectedView || !selectedView.sitesView) {
    return PanelType.FILE
  }

  // Handle disabled panels for read-only users
  if (isReadOnly && DISABLED_PANEL_TYPES.includes(selectedView.sitesView)) {
    console.error(`Requested sites view is not available for read-only users. Redirecting to the file view. Tried to access view=${selectedView.sitesView}`)
    const updatedView = {
      ...selectedView,
      sitesView: undefined,
    }
    debugState.dispatch(selectViewAction(updatedView))
    return PanelType.FILE
  }

  // Permission check for DAKOTA panel
  if (selectedView.sitesView === PanelType.DAKOTA && !getFeatureFlags().dakota) {
    console.error('A sites view was accessed that a user did not have permission to access', selectedView.sitesView)
    const updatedView = {
      ...selectedView,
      sitesView: undefined,
    }
    debugState.dispatch(selectViewAction(updatedView))
    return PanelType.FILE
  }

  return selectedView.sitesView ?? PanelType.FILE
})

// Original: $$h0
// Refactored: ViewActionType
// Enum-like object for view action types (e.g., FIND, INSERT).
const ViewActionType = {
  FIND: 'find',
  INSERT: 'insert',
} as const

// Original: $$m1
// Refactored: genericAtomFamily1
// Removable atom family for generic state (initially undefined).
export const genericAtomFamily1 = setupRemovableAtomFamily(() => atom(undefined))

// Original: $$g2
// Refactored: booleanAtomFamily
// Removable atom family for boolean state (initially false).
export const booleanAtomFamily = setupRemovableAtomFamily(() => atom(false))

// Exports with meaningful names (refactored from original obfuscated names)
export const $e = ViewActionType
export const Nl = genericAtomFamily1
export const bP = booleanAtomFamily
export const s0 = sitesViewSetterAtomFamily
