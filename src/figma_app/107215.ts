import { storeAnonymousUserData } from '../905/32091'
import { createActionCreator } from '../905/73481'
import { createOptimistThunk } from '../905/350402'
import { getStorage } from '../905/657224'
import { getSelectedViewUrl } from '../figma_app/193867'
import { copyTextToClipboard } from '../figma_app/623293'
import { Multiplayer } from '../figma_app/763686'
/**
 * Key for onboarding state in storage.
 * @originalName $$c3
 */
export const SEEN_TRY_ONBOARDING_KEY = 'seen_try_onboarding'

/**
 * Action creator for setting workshop user name.
 * @originalName $$u9
 */
export const setWorkshopUserName = createActionCreator('SET_WORKSHOP_USER_NAME')

/**
 * Optimist thunk for updating workshop user name.
 * @originalName $$p4
 */
export const updateWorkshopUserName = createOptimistThunk((dispatch, payload) => {
  const trimmedName = payload.name.trim().substring(0, 170)
  const state = dispatch.getState()
  const workshopInfo
    = state.selectedView.view === 'fullscreen' && state.selectedView.workshopModeInfo
  if (workshopInfo) {
    setMultiplayerName(trimmedName)
    storeAnonymousUserData(workshopInfo.id, trimmedName)
    dispatch.dispatch(setWorkshopUserName(payload))
  }
})

/**
 * Action creator for hiding starter kit.
 * @originalName $$_7
 */
export const setStarterKitHasBeenHidden = createActionCreator('SET_STARTER_KIT_HAS_BEEN_HIDDEN')

/**
 * Action creator for onboarding finished/dismissed.
 * @originalName $$h5
 */
export const setFigmaEditorOnboardingFinishedOrDismissed = createActionCreator(
  'SET_FIGJAM_EDITOR_ONBOARDING_FINISHED_OR_DISMISSED',
)

/**
 * Action creator for onboarding started.
 * @originalName $$m1
 */
export const setFigmaEditorOnboardingStarted = createActionCreator('SET_FIGJAM_EDITOR_ONBOARDING_STARTED')

/**
 * Action creator for setting workshop mode until.
 * @originalName $$g6
 */
export const setWorkshopModeUntil = createActionCreator('SET_WORKSHOP_MODE_UNTIL')

/**
 * Action creator for clearing try plugin.
 * @originalName $$f0
 */
export const clearTryPlugin = createActionCreator('CLEAR_TRY_PLUGIN')

/**
 * Optimist thunk for copying selected view URL to clipboard.
 * @originalName $$E8
 */
export const copySelectedViewUrlToClipboard = createOptimistThunk((dispatch, payload) => {
  const state = dispatch.getState()
  return copyTextToClipboard(getSelectedViewUrl(state, payload))
})

/**
 * Sets the multiplayer name.
 * @param name - The name to set.
 * @originalName $$y2
 */
export function setMultiplayerName(name: string): void {
  Multiplayer?.setName(name)
}

// Export refactored variables with original export names for compatibility
export const MV = clearTryPlugin
export const N = setFigmaEditorOnboardingStarted
export const QA = setMultiplayerName
export const Xk = SEEN_TRY_ONBOARDING_KEY
export const cq = updateWorkshopUserName
export const hh = setFigmaEditorOnboardingFinishedOrDismissed
export const lX = setWorkshopModeUntil
export const q0 = setStarterKitHasBeenHidden
export const zT = copySelectedViewUrlToClipboard
export const zU = setWorkshopUserName
