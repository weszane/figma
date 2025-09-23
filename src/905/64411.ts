import { reportError } from '../905/11'
import { isNullOrFailure } from '../905/18797'
import { ServiceCategories } from '../905/165054'
import { createOptimistThunk } from '../905/350402'
import { hubFilePutAll } from '../905/359847'
import { setupLoadingStateHandler } from '../905/696711'
import { librariesAPI } from '../905/939602'
import { batchPutFileAction } from '../figma_app/78808'
import { addTrackedState, deletedLoadingStates, generatePublishedComponentsCacheKey } from '../figma_app/646357'
import { putProductComponentsBulkThunk } from '../figma_app/864378'

// Original: export let $$m0 = createOptimistThunk(async (e, t) => { ... })
// Refactored: Named function for better readability
export const getPublishedComponentsForLibraryThunk = createOptimistThunk(async ({dispatch, getState}, params) => {
  const { libraryKey, includeThumbnail, includeRealtime } = params
  const loadingState = getState().loadingState
  const cacheKey = generatePublishedComponentsCacheKey(libraryKey)

  // Original: if (!isNullOrFailure(h, g)) return
  if (!isNullOrFailure(loadingState, cacheKey)) {
    return
  }

  const fetchPromise = librariesAPI.getLibraryPublishedComponentsV2({
    libraryKey,
    includeThumbnail,
    includeRealtime,
  })

  setupLoadingStateHandler(fetchPromise, { dispatch }, cacheKey)
  deletedLoadingStates.add(cacheKey)

  try {
    const response = await fetchPromise
    const { components, stateGroups } = transformComponentsAndStateGroups(response?.data?.meta)
    const file = response?.data?.meta?.file
    const hubFile = response?.data?.meta?.hub_file

    if (file) {
      dispatch(batchPutFileAction({
        files: [file],
        subscribeToRealtime: includeRealtime,
      }))
    }
    else if (hubFile) {
      dispatch(hubFilePutAll([hubFile]))
    }

    const fileKeyOrHubFileId = getFileKeyOrHubFileId(libraryKey, file, hubFile)

    dispatch(putProductComponentsBulkThunk({
      components,
      stateGroups,
      fileKeyOrHubFileId,
      libraryKey,
      teamId: file?.team_id,
    }))

    addTrackedState(libraryKey)
  }
  catch  {
    console.warn(`Failed to get published components from library with libraryKey ${libraryKey}`)
  }
})

// Original: export const n = $$m0
export const n = getPublishedComponentsForLibraryThunk

/**
 * Transforms components and stateGroups by adding team_id if present in file.
 * Original: (function ({ components: e, stateGroups: t, file: i }) { ... })
 */
function transformComponentsAndStateGroups(meta: any): { components: any[], stateGroups: any[] } {
  const { components, stateGroups, file } = meta
  if (file?.team_id) {
    return {
      components: components.map(c => ({ ...c, team_id: file.team_id })),
      stateGroups: stateGroups.map(s => ({ ...s, team_id: file.team_id })),
    }
  }
  return { components: components || [], stateGroups: stateGroups || [] }
}

/**
 * Gets the file key or hub file ID, reporting error if neither is found.
 * Original: (function (e, t, i) { ... })
 */
function getFileKeyOrHubFileId(libraryKey: string, file: any, hubFile: any): string {
  if (hubFile?.id) {
    return hubFile.id
  }
  if (file?.key) {
    return file.key
  }
  reportError(ServiceCategories.DESIGN_SYSTEMS_ECOSYSTEM, new Error('getPublishedComponentsForLibrary: no hub file or file found'), {
    tags: { libraryKey },
  })
  return ''
}
