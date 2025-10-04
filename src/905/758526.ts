import { currentUserOrgIdAtom } from "../905/845253"
import { atom } from "../figma_app/27355"

const ORG_IDS = ["1294228696770984111"]

/**
 * Atom that checks if current user's organization ID is in the allowed list
 * Original name: $$s0
 */
export const isAllowedOrgAtom = atom((get) => {
  const currentOrgId = get(currentUserOrgIdAtom)
  return !!currentOrgId && ORG_IDS.includes(currentOrgId)
})

export const D = isAllowedOrgAtom
