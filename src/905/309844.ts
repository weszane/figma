import { createActionCreator } from "../905/73481"
/**
 * Action creator for stopping drag and drop operation
 * Original name: $$r0
 */
export const dragAndDropStop = createActionCreator("DRAG_AND_DROP_STOP")

/**
 * Action creator for starting drag and drop operation
 * Original name: $$a1
 */
export const dragAndDropStart = createActionCreator("DRAG_AND_DROP_START")

/**
 * Exported action creators with meaningful names
 * T -> dragAndDropStopAction
 * v -> dragAndDropStartAction
 */
export const T = dragAndDropStop
export const v = dragAndDropStart
