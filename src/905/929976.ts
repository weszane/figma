import { createActionCreator } from '../905/73481'
import { createOptimistThunk } from '../905/350402'
import { hideTooltip } from '../905/765855'
import { hydrateFileBrowser, setSessionStateAction } from '../905/890368'

export let initAction = createActionCreator('INIT')

export let userStateLoadedAction = createActionCreator('USER_STATE_LOADED')

export let showDropdownAction = createActionCreator('SHOW_DROPDOWN')
export let showDropdownThunk = createOptimistThunk((e, t) => {
  e.dispatch(hideTooltip())
  e.dispatch(showDropdownAction(t))
})
export let updateDropdownSelectionAction = createActionCreator('UPDATE_DROPDOWN_SELECTION')
export let hideDropdownAction = createActionCreator('HIDE_DROPDOWN')
export let selectViewAction = createActionCreator('SELECT_VIEW')
export const Qv = hydrateFileBrowser
export const Ts = initAction
export const ab = showDropdownAction
export const ho = updateDropdownSelectionAction
export const j7 = showDropdownThunk
export const o7 = userStateLoadedAction
export const oB = hideDropdownAction
export const os = setSessionStateAction
export const sf = selectViewAction
