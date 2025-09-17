import { getPlanUserAtomFamily } from '../905/276025'
import { resourceUtils } from '../905/989992'
import { atom, useAtomWithSubscription } from '../figma_app/27355'
import { FileCreationPermissionsView } from '../figma_app/43951'

/**
 * Atom for fetching the user's drafts folder project permissions.
 * Original variable: o
 */
export const draftsFolderProjectAtom = atom((get) => {
  const draftsFolderId = get<ObjectOf>(getPlanUserAtomFamily(true)).data?.draftsFolderId
  if (!draftsFolderId) {
    const errorResource = {
      code: 'nonNullableResult',
      path: [],
      retriable: false,
      error: new Error('No draft folder id'),
    }
    return resourceUtils.error([errorResource])
  }
  return (get(
    FileCreationPermissionsView.Query({
      projectId: draftsFolderId,
    }),
  ) as any).transform(result => result.project)
})

/**
 * Hook to subscribe to the draftsFolderProjectAtom.
 * Original function: $$l0
 */
export function useDraftsFolderProject() {
  return useAtomWithSubscription(draftsFolderProjectAtom)
}

/** Alias for useDraftsFolderProject (original export: y) */
export const y = useDraftsFolderProject
