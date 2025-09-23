import { createActionCreator } from '../905/73481'
import { createOptimistThunk } from '../905/350402'
// Original action creators: $$a0, $$s1, $$o2
// Refactored to meaningful names with JSDoc comments

/**
 * Action creator for putting all hub files.
 */
export const hubFilePutAll = createActionCreator('HUB_FILE_PUT_ALL')

/**
 * Action creator for deleting all hub files.
 */
export const hubFileDelAll = createActionCreator('HUB_FILE_DEL_ALL')

/**
 * Validates a hub file and returns it if valid.
 * @param hubFile - The hub file to validate.
 * @param src - Source identifier for error messages.
 * @returns The validated hub file.
 * @throws Error if validation fails.
 */
function validateHubFile(hubFile: any, src: string): any {
  if (!hubFile || !hubFile.id) {
    throw new Error(`${src} Invalid hubFile id`)
  }
  const currentVersionId = hubFile.current_hub_file_version_id
  if (!currentVersionId) {
    throw new Error(`${src} Invalid hubFile ${hubFile.id}: current version id does not exist`)
  }
  if (!hubFile.versions || !hubFile.versions[currentVersionId]) {
    throw new Error(`${src} Invalid hubFile ${hubFile.id}: version id ${currentVersionId} does not exist in versions`)
  }
  return hubFile
}

/**
 * Processes hub files by validating published ones and separating into published and unpublished lists.
 * @param hubFiles - Array of hub files to process.
 * @param src - Source identifier.
 * @returns Object containing published and unpublished hub files.
 */
function processHubFiles(hubFiles: any[], src: string): { published: any[], unpublished: any[] } {
  const published: any[] = []
  const unpublished: any[] = []

  for (const hubFile of hubFiles) {
    if (hubFile.unpublished_at) {
      unpublished.push(hubFile)
      continue
    }
    try {
      published.push(validateHubFile(hubFile, src))
    }
    catch (error) {
      console.error(error)
    }
  }

  return { published, unpublished }
}

/**
 * Optimist thunk for processing hub files.
 * Dispatches actions to put all published files and delete all unpublished files.
 */
export const processHubFilesThunk = createOptimistThunk(({ dispatch }, { hubFiles, src }) => {
  if (!hubFiles)
    return

  const { published, unpublished } = processHubFiles(hubFiles, src)

  dispatch(hubFilePutAll(published))
  dispatch(hubFileDelAll(unpublished))
})

// Exports with meaningful names
export const D3 = hubFilePutAll
export const L1 = hubFileDelAll
export const Sb = processHubFilesThunk
