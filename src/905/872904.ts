import { currentUserOrgIdAtom, useCurrentUserOrgId } from '../905/845253'
import { atom } from '../figma_app/27355'
import { openFileAtom, selectCurrentFile } from '../figma_app/516028'

/**
 * Returns the parent organization ID of the selected file, or the current user's organization ID if no file is selected.
 * (Original: $$o1)
 */
export function getParentOrgId(): string | undefined {
  return resolveParentOrgId(selectCurrentFile(), useCurrentUserOrgId())
}

/**
 * Resolves the parent organization ID from file or falls back to user org ID.
 * (Original: $$l2)
 * @param file - The selected file object
 * @param userOrgId - The current user's organization ID
 * @returns The parent organization ID
 */
export function resolveParentOrgId(file: { parentOrgId?: string } | null, userOrgId: string): string | undefined {
  return file ? file.parentOrgId : userOrgId
}

/**
 * Atom that computes the parent organization ID from the open file or current user org ID.
 * (Original: $$d0)
 */
export const parentOrgIdAtom = atom(getter =>
  resolveParentOrgId(getter(openFileAtom), getter(currentUserOrgIdAtom)),
)

// Exported aliases for refactored names
export const DQ = parentOrgIdAtom
export const LH = getParentOrgId
export const ag = resolveParentOrgId
