import { createSelector } from 'reselect'
import { DUserRole } from '../figma_app/858344'

/**
 * Selector to get the selected view from state
 * (original name: $$a0)
 */
export const getSelectedView = (state: any) => state.selectedView

/**
 * Selector to get workspace ID when view is 'workspace' and subView is DIRECTORY
 * (original name: $$s1)
 */
export const getDirectoryWorkspaceId = createSelector(
  getSelectedView,
  (selectedView) => {
    if (selectedView?.view === 'workspace' && selectedView?.subView === DUserRole.DIRECTORY) {
      return selectedView.workspaceId
    }
    return undefined
  },
)

export const h = getSelectedView
export const o = getDirectoryWorkspaceId
