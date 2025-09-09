import { atom } from 'jotai'
import { atomWithReducer } from 'jotai/utils'

// Original: $$r2 - Enum for network states
export enum NetworkState {
  PENDING = 0,
  SUCCESS = 1,
  FAILURE = 2,
}

// Original: $$a0 - Atom with reducer for managing network requests
interface RequestItem {
  requestJson: any // Assuming requestJson has figment_debugger_uuid
  networkState: NetworkState
}

interface Action {
  networkState?: NetworkState
  requestJsons?: any[]
}

/**
 * Reducer function for managing the list of network requests.
 * Original: $$a0 reducer logic
 * @param state - Current state array of RequestItem
 * @param action - Action to perform: 'clear', null, or { networkState, requestJsons }
 * @returns New state array
 */
function requestsReducer(state: RequestItem[], action: Action | 'clear' | null): RequestItem[] {
  if (action === null) {
    return state
  }
  if (action === 'clear') {
    return []
  }

  const { networkState, requestJsons } = action
  if (!networkState || !requestJsons) {
    return state
  }

  let newItems: any[] = []
  if (networkState === NetworkState.SUCCESS || networkState === NetworkState.FAILURE) {
    requestJsons.forEach((requestJson) => {
      const existing = state.find(item => item.requestJson.figment_debugger_uuid === requestJson.figment_debugger_uuid)
      if (existing) {
        existing.networkState = networkState
      }
      else {
        newItems.push(requestJson)
      }
    })
  }
  else if (networkState === NetworkState.PENDING) {
    newItems = requestJsons
  }

  // Limit to 200 items, remove oldest if necessary
  const totalLength = state.length + newItems.length
  const excess = totalLength - 200
  if (excess > 0) {
    state = state.slice(excess)
  }

  return [
    ...newItems.map(requestJson => ({
      requestJson,
      networkState,
    })),
    ...state
  ]
}

export const requestsAtom = atomWithReducer<RequestItem[], any>([], requestsReducer)

// Original: $$s1 - Simple boolean atom
export const flagAtom = atom<boolean>(false)

// Exports with refactored names
export const a4 = requestsAtom // Original export: a4 = $$a0
export const eE = flagAtom // Original export: eE = $$s1
export const tM = NetworkState // Original export: tM = $$r2
