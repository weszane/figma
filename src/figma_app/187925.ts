import { atomWithReducer } from 'jotai/utils'
import { loadTimeTrackerInstance } from '../figma_app/781115'

/**
 * Enum representing the load status.
 * Original name: $$a1
 */
export enum LoadStatusEnum {
  NOT_LOADED = 0,
  LOADED = 1,
}

/**
 * Enum representing the action types for loading.
 * Original name: s
 */
export enum LoadActionType {
  LOAD_LIVEGRAPH = 0,
  LOAD_VIEWER_INSTANCE = 1,
}

/**
 * State shape for the reducer atom.
 */
interface LoadState {
  status: LoadStatusEnum
  livegraphLoaded: boolean
  viewerInstanceLoaded: boolean
  lastLoaded?: 'livegraph' | 'multiplayer'
}

/**
 * Action shape for the reducer atom.
 */
interface LoadAction {
  type: LoadActionType
}

/**
 * Reducer function for atomWithReducer.
 * Handles loading logic for livegraph and viewer instance.
 * Original reducer inside $$o0
 */
function loadReducer(state: LoadState, action: LoadAction): LoadState {
  if (state.status === LoadStatusEnum.LOADED)
    return state

  switch (action.type) {
    case LoadActionType.LOAD_LIVEGRAPH:
      if (state.viewerInstanceLoaded) {
        loadTimeTrackerInstance.handleViewerLoaded('livegraph')
        return {
          status: LoadStatusEnum.LOADED,
          livegraphLoaded: state.livegraphLoaded,
          viewerInstanceLoaded: state.viewerInstanceLoaded,
          lastLoaded: 'livegraph',
        }
      }
      if (state.livegraphLoaded)
        return state
      return {
        ...state,
        livegraphLoaded: true,
      }

    case LoadActionType.LOAD_VIEWER_INSTANCE:
      if (state.livegraphLoaded) {
        loadTimeTrackerInstance.handleViewerLoaded('multiplayer')
        return {
          status: LoadStatusEnum.LOADED,
          livegraphLoaded: state.livegraphLoaded,
          viewerInstanceLoaded: state.viewerInstanceLoaded,
          lastLoaded: 'multiplayer',
        }
      }
      if (state.viewerInstanceLoaded)
        return state
      return {
        ...state,
        viewerInstanceLoaded: true,
      }

    default:
      return state
  }
}

/**
 * Atom with reducer to manage load state.
 * Original name: $$o0
 */
export const loadAtomReducer = atomWithReducer<LoadState, LoadAction>(
  {
    status: LoadStatusEnum.NOT_LOADED,
    livegraphLoaded: false,
    viewerInstanceLoaded: false,
  },
  loadReducer,
)

// Refactored exports for clarity and traceability
export const Md = loadAtomReducer // Original: Md
export const z2 = LoadStatusEnum // Original: z2
