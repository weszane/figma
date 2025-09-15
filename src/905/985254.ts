import { createActionCreator } from '../905/73481'

/**
 * Creates an action for setting all user flags.
 * @see $$r0
 */
export const setAllUserFlags = createActionCreator('USER_FLAG_SET_ALL')

/**
 * Creates an action for posting a user flag.
 * @see $$a1
 */
export const postUserFlag = createActionCreator('USER_FLAG_POST')

// Refactored exports to use descriptive names
export const A = setAllUserFlags
export const b = postUserFlag
