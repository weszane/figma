import { useSelector } from 'react-redux'

import { selectOpenFile } from '../figma_app/516028'

/**
 * Checks if the open file has a parent organization ID.
 * Original function name: $$a1
 * @param state - The Redux state containing openFile.
 * @returns True if parentOrgId exists, false otherwise.
 */
export function hasParentOrgId(state: { openFile: any }) {
  const file = selectOpenFile({ openFile: state.openFile })
  return !!file?.parentOrgId
}

/**
 * Selector hook for checking if the open file has a parent organization ID.
 * Original function name: $$s0
 * @returns True if parentOrgId exists, false otherwise.
 */
export function useHasParentOrgId() {
  return useSelector(hasParentOrgId)
}

// Exported aliases for compatibility with original exports
export const D = useHasParentOrgId
export const o = hasParentOrgId
