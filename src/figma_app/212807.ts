import { shallowEqual, useSelector } from 'react-redux'
import { isCopyExportAllowed, isExportRestricted } from '../figma_app/12796'
import { getPermissionsState } from '../figma_app/642025'

/**
 * Returns the permissions state from the Redux store.
 * Original function name: $$s1
 */
export const selectPermissionsState = () => useSelector(getPermissionsState, shallowEqual)

/**
 * Determines if copy export is allowed for the currently open file.
 * Original function name: $$o0
 */
export function selectIsCopyExportAllowed() {
  return useSelector<{ openFile: any }, boolean>(state =>
    isCopyExportAllowed({
      copyExportRestrictedArgs: state.openFile,
    }),
  )
}

/**
 * Checks if export is restricted for the currently open file.
 * Original function name: $$l2
 */
export function selectIsExportRestricted() {
  return useSelector<{ openFile: any }, boolean>(state =>
    !!state.openFile && isExportRestricted(state.openFile),
  )
}

// Refactored exports for clarity and traceability
export const AF = selectIsCopyExportAllowed
export const FC = selectPermissionsState
export const h = selectIsExportRestricted
