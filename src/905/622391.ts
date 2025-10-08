import { debugState } from '../905/407919'
import { getUserOrAnonymousId } from '../905/506024'
import { logWarning } from '../905/714362'
import { canPerformAction, canRunExtensions, isExportRestricted } from '../figma_app/12796'
import { getInitialOptions } from '../figma_app/169182'
import { canAccessFullDevMode } from '../figma_app/473493'
import { isDevModeFocusViewCopyActive } from '../figma_app/544649'
import { isInteractionPathCheck } from '../figma_app/897289'

/**
 * Original name: $$p6
 * Retrieves the selected view from the debug state.
 * Logs a warning if the selected view is invalid.
 * @returns The selected view or undefined.
 */
export function handleSelectedView(): any {
  const state = debugState.getState()
  const selectedView = getUserOrAnonymousId(state)
  if (!selectedView && !state.selectedView) {
    logWarning('plugins', 'selectedView is invalid')
  }
  return selectedView
}

/**
 * Original name: $$m3
 * Retrieves the key of the open file from the debug state.
 * @returns The file key or undefined.
 */
export function getOpenFileKey(): string | undefined {
  const state = debugState.getState()
  return state.openFile?.key
}

/**
 * Original name: $$h1
 * Checks if extensions can be run based on the debug state.
 * @param state The debug state.
 * @returns True if extensions can be run.
 */
export function checkCanRunExtensions(): boolean {
  return canRunExtensions(debugState.getState())
}

/**
 * Original name: $$g7
 * Determines if an action can be performed, considering E2E traffic or interaction path.
 * @returns True if the action can be performed.
 */
export function canPerformActionCheck(): boolean {
  if (getInitialOptions().e2e_traffic || isInteractionPathCheck()) {
    return true
  }
  const state = debugState.getState()
  return canPerformAction(state) && canRunExtensions(state)
}

/**
 * Original name: $$f2
 * Retrieves the current user organization ID from the debug state.
 * @returns The organization ID or undefined.
 */
export function getCurrentUserOrgId(): string | undefined {
  return debugState.getState().currentUserOrgId || undefined
}

/**
 * Original name: $$_8
 * Determines the plugin development mode based on the debug state.
 * @returns 'realms' or 'cppvm'.
 */
export function getPluginDevMode(): 'realms' | 'cppvm' {
  return debugState.getState().mirror.appModel.useRealmsForPluginDev ? 'realms' : 'cppvm'
}

/**
 * Original name: $$A0
 * Checks if the open file can be exported (exists and not restricted).
 * @returns True if export is allowed.
 */
export function canExportFile(): boolean {
  const openFile = debugState.getState().openFile
  return !!openFile && !isExportRestricted(openFile)
}

/**
 * Original name: $$y4
 * Checks if full dev mode can be accessed based on the debug state.
 * @returns True if full dev mode is accessible.
 */
export function accessFullDevMode(): boolean {
  const state = debugState.getState()
  return canAccessFullDevMode(state)
}
export const CQ = canExportFile
export const Fr = checkCanRunExtensions
export const I = getCurrentUserOrgId
export const YR = getOpenFileKey
export const fb = accessFullDevMode
export const np = isDevModeFocusViewCopyActive
export const o8 = handleSelectedView
export const op = canPerformActionCheck
export const r_ = getPluginDevMode
export { isDevModeFocusViewCopyActive }
