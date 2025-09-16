import { useSelector } from 'react-redux'
import { getPanelTypeString } from '../905/105002'
import { isUIHiddenOrLocked } from '../905/868547'
import { PanelType, ViewType } from '../figma_app/763686'
// Original: let $$o2 = [PanelType.CODE, PanelType.SETTINGS];
export const DISABLED_PANEL_TYPES = [PanelType.CODE, PanelType.SETTINGS]

// Original: let l = [...$$o2.map(e => getPanelTypeString(e)), 'INSERT'];
export const DISABLED_PANEL_STRINGS = [...DISABLED_PANEL_TYPES.map(panelType => getPanelTypeString(panelType)), 'INSERT']

/**
 * Retrieves the loading and read-only state from the Redux store.
 * Original function: $$d0
 * @returns {object} An object containing fileLoading and readOnlyUser flags.
 */
export function getLoadingAndReadOnlyState() {
  const fileLoading = useSelector<ObjectOf>(state => isUIHiddenOrLocked(state.progressBarState.mode))
  const readOnlyUser = useSelector<ObjectOf>(state => state.mirror.appModel.isReadOnly || state.mirror.appModel.topLevelMode === ViewType.HISTORY)
  return {
    fileLoading,
    readOnlyUser: fileLoading ? undefined : readOnlyUser,
  }
}

/**
 * Checks if a given panel type should be disabled based on loading and read-only state.
 * Original function: $$c1
 * @param {string} panelType - The panel type to check.
 * @returns {boolean} True if the panel should be disabled, false otherwise.
 */
export function isPanelDisabled(panelType: string) {
  const { fileLoading, readOnlyUser } = getLoadingAndReadOnlyState()
  return !!fileLoading || (!!readOnlyUser && DISABLED_PANEL_STRINGS.includes(panelType.toUpperCase()))
}

// Original exports: export const Sn = $$d0; export const hM = $$c1; export const ou = $$o2;
export const Sn = getLoadingAndReadOnlyState
export const hM = isPanelDisabled
export const ou = DISABLED_PANEL_TYPES
