import { createActionCreator } from "../905/73481"
import { createOptimistThunk } from "../905/350402"

export const USER_FOLDERS = "USER_FOLDERS"
export const USER_DRAFTS = "USER_DRAFTS"

/**
 * Thunk to handle file move logic based on team and folder ordering
 * Original name: $$o15
 */
export const handleFileMove = createOptimistThunk(({dispatch, getState}) => {
  const { foldersByTeamId, teamOrder } = getState().fileMove

  // Early return if required data is missing
  if (!teamOrder || teamOrder.length === 0 || !foldersByTeamId) {
    return
  }

  let currentIndex = 0

  for (let i = 0; i < teamOrder.length; i++) {
    const teamId = teamOrder[i]
    const hasFolders = foldersByTeamId[teamId] && foldersByTeamId[teamId].length > 0

    if (teamId === USER_DRAFTS) {
      if (hasFolders) {
        currentIndex += 1
      }
    }
    else if (teamId === USER_FOLDERS) {
      if (hasFolders) {
        dispatch(setFocusedIndexAt({
          indexAt: currentIndex,
        }))
        return
      }
    }
    else {
      if (hasFolders) {
        dispatch(setFocusedIndexAt({
          indexAt: currentIndex,
        }))
        return
      }
      currentIndex += 1
    }
  }
})

// Action creators with descriptive names
export const setCanMouseFocus = createActionCreator("FILE_MOVE_CAN_MOUSE_FOCUS")
export const setKeyPressedToFalse = createActionCreator("FILE_MOVE_SET_KEY_PRESSED_TO_FALSE")
export const setIsSearchFocused = createActionCreator("FILE_MOVE_IS_SEARCH_FOCUSED")
export const setIndexOrder = createActionCreator("FILE_MOVE_INDEX_ORDER")
export const setIsSearchResult = createActionCreator("FILE_MOVE_IS_SEARCH_RESULT")
export const setFolderOrder = createActionCreator("FILE_MOVE_SET_FOLDER_ORDER")
export const setTeamOrder = createActionCreator("FILE_MOVE_SET_TEAM_ORDER")
export const setUserTeamCount = createActionCreator("FILE_MOVE_SET_USER_TEAM_COUNT")
export const setIndexOffsets = createActionCreator("FILE_MOVE_SET_INDEX_OFFSETS")
export const setFolderCount = createActionCreator("FILE_MOVE_SET_FOLDER_COUNT")
export const resetFocusedIndex = createActionCreator("FILE_MOVE_RESET_FOCUSED_INDEX")
export const setFocusedIndexAt = createActionCreator("FILE_MOVE_SET_FOCUSED_INDEX_AT")
export const decrementFocusedIndex = createActionCreator("FILE_MOVE_DECREMENT_FOCUSED_INDEX")
export const incrementFocusedIndex = createActionCreator("FILE_MOVE_INCREMENT_FOCUSED_INDEX")
export const endFolderRename = createActionCreator("FILE_MOVE_END_FOLDER_RENAME")
export const startFolderRename = createActionCreator("FILE_MOVE_START_FOLDER_RENAME")
export const setFolderSearchQuery = createActionCreator("FILE_MOVE_SET_FOLDER_SEARCH_QUERY")

// Exported constants with meaningful names
export const CU = setFolderCount
export const Dp = setFocusedIndexAt
export const EN = setIsSearchResult
export const HK = USER_DRAFTS
export const JG = startFolderRename
export const Mi = setTeamOrder
export const Mn = endFolderRename
export const OT = setIndexOrder
export const Pb = setFolderOrder
export const TL = incrementFocusedIndex
export const Ww = setCanMouseFocus
export const YG = setIsSearchFocused
export const hq = setFolderSearchQuery
export const iK = USER_FOLDERS
export const qM = setKeyPressedToFalse
export const qb = handleFileMove
export const t3 = setIndexOffsets
export const w3 = setUserTeamCount
export const xH = resetFocusedIndex
export const zv = decrementFocusedIndex
