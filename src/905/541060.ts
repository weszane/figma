import { createActionCreator } from '../905/73481';
import { VisualBellActions } from '../905/302958';
import { createOptimistThunk } from '../905/350402';
import { G } from '../905/674940';
import { logInfo } from '../905/714362';
import { handlePluginError } from '../905/753206';
import { hidePickerThunk } from '../figma_app/91703';
import { resetLocalMusicThunk, resetLocalTimer } from '../figma_app/389091';
import { H1 } from '../figma_app/451700';
import { fullscreenValue } from '../figma_app/455680';
import { cL } from '../figma_app/712525';
import { AppStateTsApi, CanvasSearchHelpers, Fullscreen, HandoffBindingsCpp, SelectionState } from '../figma_app/763686';
import { resetComments } from '../figma_app/770088';
// Original code: $$f1 = createActionCreator('FULLSCREEN_CLOSE')
// Original code: $$_0 = createOptimistThunk((e) => { ... })

/**
 * Action creator for closing the fullscreen mode.
 */
export const closeFullscreenAction = createActionCreator('FULLSCREEN_CLOSE');

/**
 * Thunk for handling fullscreen close cleanup operations.
 * This includes logging, dispatching cleanup actions, resetting states, and clearing resources.
 * @param e - The thunk dispatch object.
 */
export const closeFullscreenThunk = createOptimistThunk(e => {
  // Log fullscreen cleanup info
  logInfo('fullscreen cleanup', 'Closing fullscreen file', {
    fileKey: e.getState().openFile?.key
  });

  // Dispatch cleanup actions
  e.dispatch(resetComments());
  e.dispatch(cL());
  e.dispatch(resetLocalTimer());
  e.dispatch(resetLocalMusicThunk());

  // Exit search mode and destroy index
  CanvasSearchHelpers?.exitSearchMode(SelectionState.NONE);
  H1.destroyIndex();

  // Clear dev mode focus and memory usage
  HandoffBindingsCpp?.setDevModeFocusViewNodeId(null, null);
  if (AppStateTsApi != null) {
    AppStateTsApi.uiState().showMemoryUsage.set(false);
  }

  // Hide picker and handle fullscreen close
  e.dispatch(hidePickerThunk());
  if (fullscreenValue.isReady()) {
    Fullscreen.fullscreenWasClosed();
    handlePluginError();
  }

  // Dequeue visual bell and clear G
  e.dispatch(VisualBellActions.dequeue({
    matchType: 'unsaved_changes'
  }));
  G.clear();

  // Dispatch close fullscreen action
  e.dispatch(closeFullscreenAction());
});

// Original exports: export const V = $$_0; export const a = $$f1
export const V = closeFullscreenThunk;
export const a = closeFullscreenAction;