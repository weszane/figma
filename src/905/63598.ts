import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { createOptimistThunk } from '../905/350402'
import { VisualBellIcon } from '../905/576487'
import { progressClearAction, progressSetAction } from '../3973/647885'

// Original constants: l and d both 'library-update'
const PROGRESS_TYPE = 'library-update'
const PROGRESS_KEY = 'library-update'

/**
 * Enqueues a progress notification for library updates.
 * Original function: c
 */
function enqueueProgressNotification(dispatch: any) {
  dispatch(VisualBellActions.enqueue({
    type: PROGRESS_TYPE,
    message: getI18nString('design_systems.update_actions.updating_assets'),
    icon: VisualBellIcon.PROGRESS,
    progressKey: PROGRESS_KEY,
  }))
}

/**
 * Retrieves the current progress state for library updates.
 * Original function: u
 */
function getProgress(state: any) {
  return state.getState().progress[PROGRESS_KEY] ?? {
    progress: 0,
    total: 0,
  }
}

/**
 * Thunk to start the library update process by setting initial progress.
 * Original: $$p2
 */
export const startLibraryUpdate = createOptimistThunk((dispatch: any, params: { total: number }) => {
  dispatch(progressSetAction({
    key: PROGRESS_KEY,
    progress: 0,
    total: params.total,
  }))
  enqueueProgressNotification(dispatch)
})

/**
 * Thunk to update progress during library update, or complete if finished.
 * Original: $$m3
 */
export const updateLibraryProgress = createOptimistThunk((dispatch: any, params: { delta: number }) => {
  const progress = getProgress(dispatch)
  if (progress.progress + params.delta >= progress.total) {
    dispatch(completeLibraryUpdate())
  }
  else {
    dispatch(progressSetAction({
      key: PROGRESS_KEY,
      progress: progress.progress + params.delta,
      total: progress.total,
    }))
    enqueueProgressNotification(dispatch)
  }
})

/**
 * Thunk to complete the library update successfully.
 * Original: $$h1
 */
export const completeLibraryUpdate = createOptimistThunk((dispatch: any) => {
  const progress = getProgress(dispatch)
  dispatch(progressSetAction({
    key: PROGRESS_KEY,
    progress: progress.total,
    total: progress.total,
  }))
  dispatch(VisualBellActions.dequeue({
    matchType: PROGRESS_TYPE,
  }))
  dispatch(VisualBellActions.enqueue({
    type: PROGRESS_TYPE,
    message: getI18nString('design_systems.update_actions.update_success'),
    icon: VisualBellIcon.CHECK,
  }))
})

/**
 * Thunk to handle library update failure.
 * Original: $$g0
 */
export const failLibraryUpdate = createOptimistThunk((dispatch: any) => {
  dispatch(progressClearAction({
    key: PROGRESS_KEY,
  }))
  dispatch(VisualBellActions.dequeue({
    matchType: PROGRESS_TYPE,
  }))
  dispatch(VisualBellActions.enqueue({
    type: PROGRESS_TYPE,
    message: getI18nString('design_systems.update_actions.update_failure'),
    icon: VisualBellIcon.EXCLAMATION,
  }))
})

// Refactored exports with meaningful names
export const V2 = failLibraryUpdate
export const kX = completeLibraryUpdate
export const ni = startLibraryUpdate
export const qB = updateLibraryProgress
