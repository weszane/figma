import { isEqual } from 'lodash-es'
import { useSelector } from 'react-redux'
import { createReduxSubscriptionAtomWithState } from '../905/270322'

import { atom } from '../figma_app/27355'

/**
 * Selector for the selectedView property from Redux state.
 * @param state - The Redux state object.
 * @returns The selectedView object.
 * (Original: l)
 */
export const selectSelectedView = (state: any) => state.selectedView

/**
 * Selector for the view property inside selectedView.
 * @param state - The Redux state object.
 * @returns The view string.
 * (Original: d)
 */
export const selectSelectedViewType = (state: any) => state.selectedView.view

/**
 * Returns the selectedView from Redux state.
 * @returns The selectedView object.
 * (Original: $$c4)
 */
export function getSelectedView() {
  return useSelector(selectSelectedView)
}

/**
 * Returns the selectedView from Redux state, using deep equality check.
 * @returns The selectedView object.
 * (Original: $$u6)
 */
export function getSelectedViewDeepEqual() {
  return useSelector(selectSelectedView, isEqual)
}

/**
 * Returns the selectedView if its view is 'prototype', otherwise throws an error.
 * @returns The selectedView object.
 * @throws Error if view is not 'prototype'.
 * (Original: $$p5)
 */
export function getPrototypeSelectedView() {
  const selectedView = getSelectedView()
  if (selectedView.view !== 'prototype')
    throw new Error(`Unexpected non-prototype view: ${selectedView.view}`)
  return selectedView
}

/**
 * Atom for subscribing to selectedView changes.
 * (Original: $$_1)
 */
export const selectedViewAtom = createReduxSubscriptionAtomWithState(selectSelectedView)

/**
 * Atom for subscribing to modalShown changes.
 * (Original: $$h3)
 */
export const modalShownAtom = createReduxSubscriptionAtomWithState(state => state.modalShown)

/**
 * Atom for the type of the currently shown modal.
 * (Original: $$m7)
 */
export const modalTypeAtom = atom(get => get(modalShownAtom)?.type || null)

/**
 * Atom for the type of the first notification.
 * (Original: $$g0)
 */
export const notificationTypeAtom = createReduxSubscriptionAtomWithState(state => state.notifications?.[0]?.type ?? null)

/**
 * Returns the selectedView.view value from Redux state.
 * @returns The view string.
 * (Original: $$f8)
 */
export function getSelectedViewType() {
  return useSelector(selectSelectedViewType)
}

/**
 * Returns the fileKey if the selectedView is 'fullscreen', otherwise null.
 * @returns The fileKey string or null.
 * (Original: $$E2)
 */
export function getFullscreenFileKey() {
  return useSelector<{ selectedView: { view: string, fileKey: string | null } }>(state =>
    state.selectedView.view === 'fullscreen' && state.selectedView.fileKey
      ? state.selectedView.fileKey
      : null,
  )
}

// Exported variables with refactored names
export const AN = notificationTypeAtom
export const OC = selectedViewAtom
export const Td = getFullscreenFileKey
export const Uc = modalShownAtom
export const _6 = getSelectedView
export const mr = getPrototypeSelectedView
export const tc = getSelectedViewDeepEqual
export const yF = modalTypeAtom
export const z3 = getSelectedViewType
