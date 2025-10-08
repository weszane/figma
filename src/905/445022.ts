import { createActionCreator } from "../905/73481"
import { createOptimistThunk } from "../905/350402"
import { progressSetAction } from "../3973/647885"
// Origin: /Users/allen/github/fig/src/905/445022.ts
// Refactored: Renamed variables, added types, simplified logic, added comments, TypeScript best practices

// Assumed dependencies:
// - createActionCreator: (type: string) => ActionCreator<T>
// - createOptimistThunk: (fn: OptimistThunkFn<T>) => ThunkAction
// - progressSetAction: (payload: ProgressPayload) => Action
// - The Redux store has a state shape with saveAsState.startTime



// Action creators for save-as workflow
export const updateSaveAsAction = createActionCreator("UPDATE_SAVE_AS")
export const beginSaveAsAction = createActionCreator("BEGIN_SAVE_AS")
export const cancelSaveAsAction = createActionCreator("CANCEL_SAVE_AS")
export const initiateSaveAsAction = createActionCreator("INITIATE_SAVE_AS")

// Optimistic thunk for updating save-as progress
export const updateSaveAsProgressThunk = createOptimistThunk(
  ({dispatch, getState}, payload) => {
     const { saveAsState } = getState()
    // Only update progress if a save-as operation has started
    if (saveAsState.startTime != null) {
      const { totalImages, pendingImageDownload } = payload
      // Calculate completed images and dispatch progress update
      dispatch(
        progressSetAction({
          key: "save-as",
          progress: totalImages - pendingImageDownload,
          total: totalImages,
        }),
      )
    }
    // Dispatch the updateSaveAs action with the payload
    dispatch(updateSaveAsAction(payload))
  },
)

// Exported constants (renamed for clarity)
export const CL = updateSaveAsAction
export const Dc = initiateSaveAsAction
export const Mt = cancelSaveAsAction
export const VQ = updateSaveAsProgressThunk
export const hf = beginSaveAsAction
