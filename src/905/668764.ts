import { roundToMultiple } from '../figma_app/492908'

/**
 * Default nudge amount for coarse adjustment (original: $$a1)
 */
export const DEFAULT_COARSE_NUDGE = 10

/**
 * Default nudge amount for fine adjustment (original: $$r2)
 */
export const DEFAULT_FINE_NUDGE = 1

/**
 * Retrieves increment targets from the editor instance.
 * @param editor - The editor object with getIncrementTargets method.
 * @param inputState - The input state containing selectionStart, selectionEnd, and value.
 * @returns Increment targets or null if not available.
 * (original: $$s0)
 */
export function getIncrementTargets(
  editor: { getIncrementTargets?: (value: string, selection: { start: number, end: number }) => any },
  inputState: { selectionStart?: number, selectionEnd?: number, value: string },
): any | null {
  if (!editor.getIncrementTargets)
    return null
  const start = inputState.selectionStart || 0
  const end = inputState.selectionEnd || 0
  return editor.getIncrementTargets(inputState.value, { start, end })
}
interface NudgeEditor {
  getNudgeAmount?: (isCoarse: boolean, value: any) => number
  incrementBy?: (value: any, amount: any, incrementTargets: any) => any
  snap?: (value: any, resolution: number) => any
  clamp?: (value: any) => any
}
/**
 * Determines the nudge amount based on coarse/fine adjustment.
 * @param editor - The editor object with getNudgeAmount method.
 * @param isCoarse - Whether the adjustment is coarse.
 * @param value - The current value.
 * @returns The nudge amount.
 * (original: $$o3)
 */
export function getNudgeAmount(
  editor: NudgeEditor,
  isCoarse: boolean,
  value: any,
): number {
  return editor.getNudgeAmount?.(isCoarse, value) ?? (isCoarse ? DEFAULT_COARSE_NUDGE : DEFAULT_FINE_NUDGE)
}

/**
 * Increments a value by a specified amount, with optional snapping and clamping.
 * @param editor - The editor object with incrementBy, snap, and clamp methods.
 * @param value - The value to increment.
 * @param amount - The amount to increment by.
 * @param options - Optional settings for incrementTargets, snap, snapResolution, and coarse.
 * @returns The incremented value.
 * (original: $$l4)
 */
export function incrementValue(
  editor: NudgeEditor,
  value: any,
  amount: any,
  options: {
    incrementTargets?: any
    snap?: boolean
    snapResolution?: number
    coarse?: boolean
  } = {},
): any {
  if (!editor.incrementBy)
    return value
  let incremented = editor.incrementBy(value, amount, options.incrementTargets ?? null)

  if (options.snap) {
    const resolution
      = options.snapResolution
        ?? getNudgeAmount(editor, options.coarse ?? false, value)
    if (editor.snap) {
      incremented = editor.snap(incremented, resolution)
    }
    else if (typeof incremented === 'number') {
      incremented = roundToMultiple(incremented, resolution)
    }
  }

  return editor.clamp?.(incremented) ?? incremented
}

// Refactored exports for clarity and traceability
export const _L = getIncrementTargets // original: $$s0
export const _q = DEFAULT_COARSE_NUDGE // original: $$a1
export const bA = DEFAULT_FINE_NUDGE // original: $$r2
export const mb = getNudgeAmount // original: $$o3
export const ql = incrementValue // original: $$l4
