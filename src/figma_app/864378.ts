import { reportError } from '../905/11'
import { ServiceCategories } from '../905/165054'
import { createOptimistThunk } from '../905/350402'
import { getFeatureFlags } from '../905/601108'
import { componentUpdate } from '../905/879323'
import { PrimaryWorkflowEnum } from '../figma_app/633080'
import { updateLocalLibraryItems } from '../figma_app/646357'
/**
 * Thunk to update local library items.
 * Original: $$c0
 */
export const updateLocalLibraryItemsThunk = createOptimistThunk((context) => {
  updateLocalLibraryItems(context)
})

/**
 * Thunk to put product components, with error reporting if libraryKey is missing.
 * Original: $$u2
 */
export const putProductComponentsThunk = createOptimistThunk((dispatch, payload) => {
  dispatch.dispatch(componentUpdate(payload))
  if (dispatch.getState().openFile) {
    dispatch.dispatch(updateLocalLibraryItemsThunk())
  }
  if (!payload.libraryKey && getFeatureFlags().dse_lk_realtime_audit) {
    reportError(ServiceCategories.DESIGN_SYSTEMS_ECOSYSTEM, new Error('putProductComponents called without a libraryKey'), {
      tags: {
        libraryFileKey: payload.fileKey,
        openFileKey: dispatch.getState().openFile?.key,
        teamId: payload.teamId,
        type: payload.type,
      },
    })
  }
})

/**
 * Thunk to put product components in bulk, handling stateGroups and components.
 * Original: $$p1
 */
export const putProductComponentsBulkThunk = createOptimistThunk((dispatch, payload) => {
  const { stateGroups, components, fileKeyOrHubFileId, libraryKey, teamId } = payload

  if (stateGroups.length !== 0) {
    const itemsById = stateGroups.reduce((acc, item) => {
      acc[item.node_id] = item
      return acc
    }, {})
    dispatch.dispatch(putProductComponentsThunk({
      itemsById,
      fileKey: fileKeyOrHubFileId,
      libraryKey,
      teamId: teamId ?? null,
      type: PrimaryWorkflowEnum.STATE_GROUP,
    }))
  }

  if (components.length !== 0) {
    const itemsById = components.reduce((acc, item) => {
      acc[item.node_id] = item
      return acc
    }, {})
    dispatch.dispatch(putProductComponentsThunk({
      itemsById,
      fileKey: fileKeyOrHubFileId,
      libraryKey,
      teamId: teamId ?? null,
      type: PrimaryWorkflowEnum.COMPONENT,
    }))
  }
})

export const Nf = updateLocalLibraryItemsThunk
export const aW = putProductComponentsBulkThunk
export const vP = putProductComponentsThunk
