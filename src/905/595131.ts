import { useSelector } from 'react-redux'
import { createReduxSubscriptionAtomWithState } from '../905/270322'

/**
 * Checks if the current state has an open file that cannot edit the canvas.
 * @param state - The Redux state object.
 * @returns True if openFile exists and cannot edit canvas, false otherwise.
 * (Original function: $$a1)
 */
export function isCanvasEditDisabled(state: any): boolean {
  return state.openFile !== null && !state.openFile?.canEditCanvas
}

/**
 * React hook to select if canvas editing is disabled from Redux state.
 * @returns True if canvas editing is disabled, false otherwise.
 * (Original function: $$r0)
 */
export function useIsCanvasEditDisabled(): boolean {
  return useSelector(isCanvasEditDisabled)
}

/**
 * Atom for subscribing to canvas edit disabled state.
 * (Original variable: $$s2)
 */
export const canvasEditDisabledAtom = createReduxSubscriptionAtomWithState(isCanvasEditDisabled)

// Exported aliases for backward compatibility
export const Td = useIsCanvasEditDisabled // $$r0
export const eC = isCanvasEditDisabled // $$a1
export const hS = canvasEditDisabledAtom // $$s2
