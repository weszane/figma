import * as zip from '@zip.js/zip.js'
import { z } from '../905/875422'
import { sendWithRetry } from '../905/910117'

/**
 * Enum representing the status of the import process.
 */
enum ImportStatus {
  IMPORTING_FILES = 0,
  ATTACHING_BRANCH = 1,
  SUCCESS = 2,
  ERROR = 3,
}

/**
 * Interface for the extracted branch files.
 */
interface BranchFiles {
  bp: Blob
  bt: Blob
  mt: Blob
  branchFileName: string
  sourceFileName: string
}

/**
 * Attaches a branch by making an sendWithRetry POST request to the API.
 * @param branchTipFileKey - The file key for the branch tip.
 * @param branchPointFileKey - The file key for the branch point.
 * @param mainTipFileKey - The file key for the main tip.
 * @returns The sendWithRetry response.
 */
function attachBranch(branchTipFileKey: string, branchPointFileKey: string, mainTipFileKey: string) {
  return sendWithRetry.post('/api/files/attach_branch', {
    branch_tip_file_key: branchTipFileKey,
    branch_point_file_key: branchPointFileKey,
    main_tip_file_key: mainTipFileKey,
  })
}

/**
 * Parses metadata from the zip entry.
 * @param metaEntry - The zip entry for meta.json.
 * @returns Parsed metadata object.
 */
async function parseMetaData(metaEntry: zip.FileEntry): Promise<{ branch_file_name: string, source_file_name: string }> {
  const data = await metaEntry.getData(new zip.TextWriter())
  return JSON.parse(data)
}

/**
 * Extracts specific .fig files from the zip entries.
 * @param entries - Array of zip entries.
 * @returns Object containing the extracted blobs.
 */
async function extractFigFiles(entries: zip.FileEntry[]): Promise<{ bp?: Blob, bt?: Blob, mt?: Blob }> {
  const files: { bp?: Blob, bt?: Blob, mt?: Blob } = {}
  for (const entry of entries) {
    if (!entry.getData)
      continue
    try {
      const blob = await entry.getData(new zip.BlobWriter())
      switch (entry.filename) {
        case 'branch_point.fig':
          files.bp = blob
          break
        case 'branch_tip.fig':
          files.bt = blob
          break
        case 'main_tip.fig':
          files.mt = blob
          break
      }
    }
    catch {
      // Skip entries that fail to read
    }
  }
  return files
}

/**
 * Extracts branch files from a zip blob.
 * @param zipBlob - The zip file as a Blob.
 * @returns BranchFiles object if all required files are found, otherwise undefined.
 */
async function extractBranchFiles(zipBlob: Blob): Promise<BranchFiles | undefined> {
  const zipReader = new zip.ZipReader(new zip.BlobReader(zipBlob))
  const entries = await zipReader.getEntries() as zip.FileEntry[]
  const metaEntry = entries.find(entry => entry.filename === 'meta.json')
  if (!metaEntry || !metaEntry.getData)
    return
  const metaData = await parseMetaData(metaEntry)
  const figFiles = await extractFigFiles(entries)
  if (figFiles.bp && figFiles.bt && figFiles.mt) {
    return {
      bp: figFiles.bp,
      bt: figFiles.bt,
      mt: figFiles.mt,
      branchFileName: metaData.branch_file_name,
      sourceFileName: metaData.source_file_name,
    }
  }
}

/**
 * Dispatches branch files to the store.
 * @param dispatch - The dispatch function.
 * @param files - The BranchFiles object.
 */
function dispatchBranchFiles(dispatch: (action: any) => void, files: BranchFiles): void {
  dispatch(z({
    name: `${files.branchFileName} (branch point)`,
    blob: files.bp,
  }))
  dispatch(z({
    name: `${files.sourceFileName} (main tip)`,
    blob: files.mt,
  }))
  dispatch(z({
    name: `${files.branchFileName} (branch tip)`,
    blob: files.bt,
  }))
}

export const uf = ImportStatus
export const yA = attachBranch
export const Gc = extractBranchFiles
export const TA = dispatchBranchFiles
