import { createActionCreator } from '../905/73481'

/**
 * Action creators for selection paints and styles updates.
 * Original variable names preserved in comments for traceability.
 */

/** @see $$r3 */
export const forceUpdateSelectionPaintsForUndo = createActionCreator('FORCE_UPDATE_SELECTION_PAINTS_FOR_UNDO')
/** @see $$a5 */
export const updateCurrentSelectionPaintInPicker = createActionCreator('UPDATE_CURRENT_SELECTION_PAINT_IN_PICKER')
/** @see $$s1 */
export const clearSelectionPaintsDueToLimitExceeded = createActionCreator('CLEAR_SELECTION_PAINTS_DUE_TO_LIMIT_EXCEEDED')
/** @see $$o6 */
export const updateStylesDirectlyOnSingleNodeFromFullscreen = createActionCreator('UPDATE_STYLES_DIRECTLY_ON_SINGLE_NODE_FROM_FULLSCREEN')
/** @see $$l4 */
export const updatePaintsDirectlyOnSingleNodeFromFullscreen = createActionCreator('UPDATE_PAINTS_DIRECTLY_ON_SINGLE_NODE_FROM_FULLSCREEN')
/** @see $$d0 */
export const updateSelectionStylesFromFullscreen = createActionCreator('UPDATE_SELECTION_STYLES_FROM_FULLSCREEN')
/** @see $$c2 */
export const updateSelectionPaintsFromFullscreen = createActionCreator('UPDATE_SELECTION_PAINTS_FROM_FULLSCREEN')

/**
 * Exported action creators with original export names preserved.
 */
export const Xp = forceUpdateSelectionPaintsForUndo // $$r3
export const oI = updateCurrentSelectionPaintInPicker // $$a5
export const Mc = clearSelectionPaintsDueToLimitExceeded // $$s1
export const uQ = updateStylesDirectlyOnSingleNodeFromFullscreen // $$o6
export const n0 = updatePaintsDirectlyOnSingleNodeFromFullscreen // $$l4
export const Lh = updateSelectionStylesFromFullscreen // $$d0
export const QA = updateSelectionPaintsFromFullscreen // $$c2
