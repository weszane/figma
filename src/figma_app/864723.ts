import { createReduxSubscriptionAtomWithState } from '../905/270322'
import { atom } from '../figma_app/27355'

/**
 * Atom for user state from Redux subscription.
 * (original: $$a4)
 */
export const userAtom = createReduxSubscriptionAtomWithState(e => e.user)

/**
 * Atom for user id.
 * (original: $$s2)
 */
export const userIdAtom = atom(e => e(userAtom)?.id)

/**
 * Atom for user creation date.
 * (original: $$o3)
 */
export const userCreatedAtAtom = atom(e => e(userAtom)?.created_at)

/**
 * Atom for user state loaded flag.
 * (original: $$l1)
 */
export const userStateLoadedAtom = createReduxSubscriptionAtomWithState(e => e.userStateLoaded)

/**
 * Atom for starter user flag.
 * (original: $$d0)
 */
export const isStarterUserAtom = createReduxSubscriptionAtomWithState(e => e.isStarterUser)

// Export refactored atoms with new names
export const UQ = isStarterUserAtom
export const VF = userStateLoadedAtom
export const kS = userIdAtom
export const mp = userCreatedAtAtom
export const p9 = userAtom
