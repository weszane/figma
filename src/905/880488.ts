import { deleteRecentPrototype } from "../905/70982";
import { createActionCreator } from "../905/73481";
import { createOptimistThunk } from "../905/350402";
import { liveStoreInstance } from "../905/713695";
import { handleRestoreTrashedFiles } from "../905/844322";
// Origin: /Users/allen/github/fig/src/905/880488.ts
// Refactored: Renamed variables, added TypeScript types/interfaces, simplified logic, added comments for clarity and potential issues.

// Assumed external dependencies:
// - createActionCreator: function to create Redux actions
// - createOptimistThunk: function to create optimistic Redux thunks
// - liveStoreInstance: object with a Mutation method for state updates
// - xy: function to create a Redux action from file state
// - deleteRecentPrototype: action creator for deleting recent prototypes

// Type definitions for mutation and thunk payloads
interface FileObject {
  trashed_at: Date | null;
  // ...other file properties
}
interface MutationPayload {
  fileKeys: Record<string, unknown>;
  // ...other payload properties
}
interface MutationContext {
  objects: {
    File: {
      update: (key: string, updater: (file: FileObject) => void) => void;
    };
  };
  reduxStore: {
    dispatch: (action: any) => any;
  };
}

// Restore trashed files mutation
export const restoreTrashedFilesMutation = liveStoreInstance.Mutation((payload: MutationPayload, context: MutationContext) => {
  // Get all file keys to restore
  const fileKeys = Object.keys(payload.fileKeys);

  // Dispatch Redux action to update state (assumed to handle file restoration)
  const reduxActionResult = context.reduxStore.dispatch(handleRestoreTrashedFiles(payload));

  // Restore each file by setting trashed_at to null
  fileKeys.forEach(key => {
    context.objects.File.update(key, file => {
      file.trashed_at = null;
    });
  });

  // Return result of Redux action dispatch
  return reduxActionResult;
});

// Redux action creators
export const restoreTrashedFilesAction = createActionCreator("RESTORE_TRASHED_FILES");
export const deleteFilesPermanentlyAction = createActionCreator("DELETE_FILES_PERMANENTLY");
export const deleteFilesAction = createActionCreator("DELETE_FILES");

// Optimistic thunk for deleting files
export const deleteFilesOptimistThunk = createOptimistThunk((dispatchContext: {
  dispatch: (action: any) => void;
}, payload: MutationPayload) => {
  // Dispatch delete files action
  dispatchContext.dispatch(deleteFilesAction(payload));

  // Dispatch action to delete recent prototypes for the given file keys
  dispatchContext.dispatch(deleteRecentPrototype({
    fileKeys: Object.keys(payload.fileKeys)
  }));
});

// Exported constants (renamed for clarity)
export const Ip = restoreTrashedFilesMutation;
export const P6 = deleteFilesAction;
export const VK = deleteFilesOptimistThunk;
export const YF = restoreTrashedFilesAction;
export const YK = deleteFilesPermanentlyAction;