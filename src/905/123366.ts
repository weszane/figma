import { atom } from 'jotai'

/**
 * Undo/Redo state type for useUndoRedoAtom
 */
export interface UndoRedoState<T> {
  past: T[]
  present: T
  future: T[]
}

/**
 * Creates a set of atoms for undo/redo functionality.
 * @param initialValue The initial present value.
 * @returns Atoms for value, undo, redo, and history.
 */
export function useUndoRedoAtom<T>(initialValue: T) {
  // Initial state atom (original: t)
  const stateAtom = atom<UndoRedoState<T>>({
    past: [],
    present: initialValue,
    future: [],
  })

  /**
   * Atom for current value (original: r)
   */
  const valueAtom = atom(
    get => get(stateAtom).present,
    (get, set, nextValue: T) => {
      const { past, present } = get(stateAtom)
      if (nextValue !== present) {
        set(stateAtom, {
          past: [...past, present],
          present: nextValue,
          future: [],
        })
      }
    },
  )

  /**
   * Atom for undo action (original: undoAtom)
   */
  const undoAtom = atom(
    get => get(stateAtom).past.length > 0,
    (get, set) => {
      const { past, present, future } = get(stateAtom)
      if (past.length > 0) {
        set(stateAtom, {
          past: past.slice(0, -1),
          present: past[past.length - 1],
          future: [present, ...future],
        })
      }
    },
  )

  /**
   * Atom for redo action (original: redoAtom)
   */
  const redoAtom = atom(
    get => get(stateAtom).future.length > 0,
    (get, set) => {
      const { past, present, future } = get(stateAtom)
      if (future.length > 0) {
        set(stateAtom, {
          past: [...past, present],
          present: future[0],
          future: future.slice(1),
        })
      }
    },
  )

  /**
   * Atom for full history (original: historyAtom)
   */
  const historyAtom = atom(
    (get) => {
      const { past, present, future } = get(stateAtom)
      return [...past, present, ...future]
    },
    (get, set) => set(stateAtom, get(stateAtom)),
  )

  return {
    valueAtom,
    undoAtom,
    redoAtom,
    historyAtom,
  }
}

// Export with refactored name (original: x = $$r0)
export const x = useUndoRedoAtom
