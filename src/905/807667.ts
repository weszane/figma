import { reportError } from '../905/11';
import { ServiceCategories } from '../905/165054';
import { debugState } from '../905/407919';
import { loadAllPagesAndTrack } from '../figma_app/582924';
import { PluginModalType } from '../figma_app/763686';
import { loadActiveVersion } from '../figma_app/841351';

// Original function name: $$d0
// Original export name: q

/**
 * Handles loading all pages, considering version history state.
 * If in version history mode, performs actions based on the modal type.
 * @param modalType - The type of plugin modal triggering the load.
 * @returns A promise resolving when the load is complete.
 */
export function handleLoadAllPagesWithVersionCheck(modalType: PluginModalType) {
  const state = debugState.getState();
  if (state.versionHistory.activeId && state.versionHistory.activeId !== 'current_version') {
    switch (modalType) {
      case PluginModalType.SAVE_LOCAL_COPY:
      case PluginModalType.FIND_AND_REPLACE:
        return loadActiveVersion();
      default:
        reportError(ServiceCategories.SCENEGRAPH_AND_SYNC, new Error(`Unexpected reason for loading all pages from version history (${modalType})`));
        return Promise.resolve();
    }
  }
  return loadAllPagesAndTrack(modalType);
}

// Refactored export name to match the new function name
export const q = handleLoadAllPagesWithVersionCheck;