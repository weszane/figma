import { createActionCreator } from '../905/73481'
/**
 * VisualBellActions - Action creators for visual bell operations.
 * Original variable: $$n0
 */
export const VisualBellActions = {
  /** Action to update the visual bell. (VISUAL_BELL_UPDATE) */
  update: createActionCreator('VISUAL_BELL_UPDATE'),
  /** Action to enqueue a visual bell. (VISUAL_BELL_ENQUEUE) */
  enqueue: createActionCreator('VISUAL_BELL_ENQUEUE'),
  /** Action to dequeue a visual bell. (VISUAL_BELL_DEQUEUE) */
  dequeue: createActionCreator('VISUAL_BELL_DEQUEUE'),
  /** Action to clear all visual bells. (VISUAL_BELL_CLEAR_ALL) */
  clearAll: createActionCreator('VISUAL_BELL_CLEAR_ALL'),
  /** Action to clear all except specified visual bells. (VISUAL_BELL_CLEAR_ALL_EXCEPT) */
  clearAllExcept: createActionCreator('VISUAL_BELL_CLEAR_ALL_EXCEPT'),
}

/** Exported as F in original code */
export const F = VisualBellActions
