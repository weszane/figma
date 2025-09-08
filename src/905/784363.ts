import { createActionCreator } from '../905/73481'

/**
 * Action creator for setting the last seen timestamp of a file in version history.
 * (Original: $$r3)
 */
export const VERSION_HISTORY_SET_FILE_LAST_SEEN_AT = createActionCreator('VERSION_HISTORY_SET_FILE_LAST_SEEN_AT')

/**
 * Action creator for comparing changes in version history.
 * (Original: $$a6)
 */
export const VERSION_HISTORY_COMPARE_CHANGES = createActionCreator('VERSION_HISTORY_COMPARE_CHANGES')

/**
 * Action creator for setting document change status in version history.
 * (Original: $$s0)
 */
export const VERSION_HISTORY_SET_DOC_HAS_CHANGED = createActionCreator('VERSION_HISTORY_SET_DOC_HAS_CHANGED')

/**
 * Action creator for setting the linked version in version history.
 * (Original: $$o8)
 */
export const VERSION_HISTORY_SET_LINKED_VERSION = createActionCreator('VERSION_HISTORY_SET_LINKED_VERSION')

/**
 * Action creator for setting the active version in version history.
 * (Original: $$l4)
 */
export const VERSION_HISTORY_SET_ACTIVE = createActionCreator('VERSION_HISTORY_SET_ACTIVE')

/**
 * Action creator for resetting versions in version history.
 * (Original: $$d10)
 */
export const VERSION_HISTORY_RESET_VERSIONS = createActionCreator('VERSION_HISTORY_RESET_VERSIONS')

/**
 * Action creator for resetting version history.
 * (Original: $$c7)
 */
export const VERSION_HISTORY_RESET = createActionCreator('VERSION_HISTORY_RESET')

/**
 * Action creator for updating fetched page IDs.
 * (Original: $$u2)
 */
export const UPDATE_FETCHED_PAGE_IDS = createActionCreator('UPDATE_FETCHED_PAGE_IDS')

/**
 * Action creator for setting page loading state in version history.
 * (Original: $$p5)
 */
export const VERSION_HISTORY_PAGE_LOADING = createActionCreator('VERSION_HISTORY_PAGE_LOADING')

/**
 * Action creator for setting loading state in version history.
 * (Original: $$m9)
 */
export const VERSION_HISTORY_LOADING = createActionCreator('VERSION_HISTORY_LOADING')

/**
 * Action creator for appending to version history.
 * (Original: $$h1)
 */
export const VERSION_HISTORY_APPEND = createActionCreator('VERSION_HISTORY_APPEND')

// Export aliases for backward compatibility (original export names)
export const A9 = VERSION_HISTORY_SET_DOC_HAS_CHANGED
export const BC = VERSION_HISTORY_APPEND
export const EB = UPDATE_FETCHED_PAGE_IDS
export const FB = VERSION_HISTORY_SET_FILE_LAST_SEEN_AT
export const Fm = VERSION_HISTORY_SET_ACTIVE
export const SR = VERSION_HISTORY_PAGE_LOADING
export const TO = VERSION_HISTORY_COMPARE_CHANGES
export const cL = VERSION_HISTORY_RESET
export const ke = VERSION_HISTORY_SET_LINKED_VERSION
export const ne = VERSION_HISTORY_LOADING
export const p0 = VERSION_HISTORY_RESET_VERSIONS
