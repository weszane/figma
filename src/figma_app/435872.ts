import { createActionCreator } from "../905/73481"
import { createOptimistThunk } from "../905/350402"
import { trackEventAnalytics } from "../905/449184"
import { atomStoreManager } from "../905/490038"
import { fileKeyAtom } from "../905/662353"
import { liveStoreInstance } from "../905/713695"
import { autosaveNewFilesDelete, autosaveNewFilesUpdate, autosaveNewFileSyncStart, ipcStorageHandler } from "../905/725909"

import { selectViewAction } from "../905/929976"
import { autosaveFilesQuery, deleteAutosaveExceptFileKeys, garbageCollectAutosave, getUnsyncedAutosaveFilesForUser, setRenamedFileInfo } from "../figma_app/840917"
import { desktopAPIInstance } from "../figma_app/876459"

// Refactored from minified code in /Users/allen/github/fig/src/figma_app/435872.ts
// Changes: Renamed variables for clarity (e.g., $$_4 to deleteAutosaveFilesExceptKeys), added TypeScript types (interfaces for store state, thunk params), simplified logic with better structure, added comments explaining logic and potential issues. Preserved functionality; assumed dependencies like Redux store state structure (user.id as string).

// Define types for better type safety
interface StoreState {
  user?: {
    id: string
  }
  // Add other state properties as needed
}

interface ThunkAPI {
  getState: () => StoreState
  dispatch: (action: any) => void
  // Other thunk properties if needed
}

interface UnsyncedFilesData {
  unsyncedFiles: any[] // Infer from logic; could be more specific
  newFiles: any[]
  nextGarbageCollectionTimestamp: number
}

interface RenamedFileInfo {
  localFileKey: string
  realFileKey: string
}

// Original: let $$_4 = createOptimistThunk(async (e, t) => { ... })
const deleteAutosaveFilesExceptKeys = createOptimistThunk(async (thunkAPI: ThunkAPI, fileKeysToKeep: Record<string, any>) => {
  const userId = thunkAPI.getState()?.user?.id
  if (!userId)
    return // Early return if no user ID; potential issue: silent failure

  const keysToKeep = Object.keys(fileKeysToKeep)
  await deleteAutosaveExceptFileKeys(userId, keysToKeep)
  ipcStorageHandler.sendToAllTabs(autosaveNewFilesDelete, keysToKeep)
  trackEventAnalytics("Delete New Autosave Files", {
    deletedCount: keysToKeep.length,
  })
})

// Original: let $$h0 = createOptimistThunk(async (e) => { ... })
const garbageCollectAndSyncAutosave = createOptimistThunk(async (thunkAPI: ThunkAPI) => {
  const state = thunkAPI.getState()
  const userId = state.user?.id
  if (!userId)
    return // Early return if no user ID

  await garbageCollectAutosave(userId)
  const unsyncedData: UnsyncedFilesData = await getUnsyncedAutosaveFilesForUser(userId)
  thunkAPI.dispatch(setUnclaimedFiles({
    filesWithChangesInIDB: unsyncedData.unsyncedFiles,
    filesCreatedOffline: unsyncedData.newFiles,
  }))
  thunkAPI.dispatch(setAutosaveNextGarbageCollectionTimestamp(unsyncedData.nextGarbageCollectionTimestamp))
})

// Original: let $$m1 = createActionCreator("SET_AUTOSAVE_NEXT_GARBAGE_COLLECTION_TIMESTAMP")
export const setAutosaveNextGarbageCollectionTimestamp = createActionCreator("SET_AUTOSAVE_NEXT_GARBAGE_COLLECTION_TIMESTAMP")

// Original: let $$g5 = createActionCreator("SET_AUTOSAVE_SNOOZE")
export const setAutosaveSnooze = createActionCreator("SET_AUTOSAVE_SNOOZE")

// Original: let $$f2 = createActionCreator("SET_UNCLAIMED_FILES")
export const setUnclaimedFiles = createActionCreator("SET_UNCLAIMED_FILES")

// Original: export function $$E3(e) { ... }
export function setupAutosaveIPCListeners(thunkAPI: ThunkAPI) {
  // Register handler for autosave new files update
  ipcStorageHandler.register(autosaveNewFilesUpdate, () => {
    const userId = thunkAPI.getState().user?.id ?? null
    liveStoreInstance.fetch(autosaveFilesQuery({
      userId,
    }), {
      policy: "networkOnly",
    })
  })

  // Register handler for autosave new files delete
  ipcStorageHandler.register(autosaveNewFilesDelete, (deletedKeys: string[]) => {
    const currentFileKey = atomStoreManager.get(fileKeyAtom)
    if (currentFileKey && deletedKeys.includes(currentFileKey)) {
      if (desktopAPIInstance) {
        desktopAPIInstance.close({
          suppressReopening: true,
          shouldForceClose: true,
        })
      }
      else {
        thunkAPI.dispatch(selectViewAction({
          view: "recentsAndSharing",
        }))
      }
    }
    thunkAPI.dispatch(garbageCollectAndSyncAutosave())
  })

  // Register handler for autosave new file sync start
  ipcStorageHandler.register(autosaveNewFileSyncStart, ({ localFileKey, realFileKey }: RenamedFileInfo) => {
    setRenamedFileInfo(localFileKey, realFileKey)
  })
}

// Exports: Keep original export names, update to refactored names
export const Jw = garbageCollectAndSyncAutosave
export const TP = setAutosaveNextGarbageCollectionTimestamp
export const Y3 = setUnclaimedFiles
export const h0 = setupAutosaveIPCListeners
export const vv = deleteAutosaveFilesExceptKeys
export const zE = setAutosaveSnooze
