import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { Yh } from '../figma_app/357047'
/**
 * Enum representing selection states.
 * Original name: $$$$s1
 */
export enum SelectionState {
  NEEDS_INITIAL_SELECTION = 0,
  SELECTION_LOST = 1,
  SELECTION_OK = 2,
}

/**
 * Hook to manage selection state.
 * Original name: $$o0
 * @param id - The identifier for selection.
 * @returns An object with current state and a method to confirm initial selection.
 */
export function useSelectionState(id: any) {
  const isSelected = useSelector<AppState>(state => Yh(state.mirror.appModel, id))
  const [confirmed, setConfirmed] = useState(isSelected)
  let state = SelectionState.NEEDS_INITIAL_SELECTION

  if (isSelected && confirmed) {
    state = SelectionState.SELECTION_OK
  }
  else if (confirmed && !isSelected) {
    state = SelectionState.SELECTION_LOST
    setConfirmed(false)
  }

  return useMemo(() => ({
    state,
    confirmInitialSelection: () => setConfirmed(true),
  }), [state])
}

/**
 * Exported hook for selection state management.
 * Original name: s
 */
export const s = useSelectionState

/**
 * Exported selection state enum.
 * Original name: w
 */
export const w = SelectionState
