import { awaitSync } from '../905/412815'
import { VERSION_HISTORY_APPEND, VERSION_HISTORY_SET_DOC_HAS_CHANGED } from '../905/784363'
import { XHR } from '../905/910117'
import { PAGINATION_PREV } from '../figma_app/661371'

/**
 * Metadata returned from the savepoint API.
 */
export interface SavepointMeta {
  // Add properties as needed based on actual meta structure
  [key: string]: any
}

/**
 * Callback type for dispatching actions.
 */
export type DispatchAction = (action: any) => void

/**
 * Creates a savepoint for a multiplayer document.
 *
 * @param docId - The document ID.
 * @param label - Optional label for the savepoint.
 * @param description - Optional description for the savepoint.
 * @param dispatch - Function to dispatch actions.
 * @param shouldAwaitSync - Whether to await synchronization before creating the savepoint.
 * @returns Metadata of the created savepoint.
 */
// $$o0
export async function createSavepoint(
  docId: string,
  label: string = '',
  description: string = '',
  dispatch: DispatchAction,
  shouldAwaitSync: boolean = false,
): Promise<SavepointMeta> {
  if (shouldAwaitSync) {
    await awaitSync()
  }

  const {
    data: { meta },
  } = await XHR.post(`/api/multiplayer/${docId}/create_savepoint`, {
    label,
    description,
  })

  dispatch(
    VERSION_HISTORY_APPEND({
      history: { versions: [meta] },
      direction: PAGINATION_PREV,
    }),
  )
  dispatch(
    VERSION_HISTORY_SET_DOC_HAS_CHANGED({
      status: false,
    }),
  )

  return meta
}

/**
 * Conditionally creates a savepoint if docId is provided.
 *
 * @param docId - The document ID.
 * @param label - Optional label for the savepoint.
 * @param description - Optional description for the savepoint.
 * @param dispatch - Function to dispatch actions.
 * @param shouldAwaitSync - Whether to await synchronization before creating the savepoint.
 * @returns Metadata of the created savepoint or null if docId is not provided.
 */
// $$l1
export async function maybeCreateSavepoint(
  docId: string | null | undefined,
  label: string = '',
  description: string = '',
  dispatch: DispatchAction,
  shouldAwaitSync: boolean = false,
): Promise<SavepointMeta | null> {
  if (docId == null)
    return null
  return await createSavepoint(docId, label, description, dispatch, shouldAwaitSync)
}

// Refactored exports to match new function names
export const J = createSavepoint
export const m = maybeCreateSavepoint
