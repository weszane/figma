import { createActionCreator } from "../905/73481"
/**
 * Action creator for hiding the interaction test recorder
 * Original: $$r0, l
 */
export const hideRecorderAction = createActionCreator("INTERACTION_TEST_HIDE_RECORDER")

/**
 * Action creator for showing the interaction test recorder
 * Original: $$a1, q
 */
export const showRecorderAction = createActionCreator("INTERACTION_TEST_SHOW_RECORDER")

export const l = hideRecorderAction
export const q = showRecorderAction
