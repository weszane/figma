import { loadScript, ScriptLoadError } from '../figma_app/623293'
// Original: $$r0
export let fileImporter: any = null

/**
 * Initializes the file importer by loading the required script and setting up the importer.
 * Original function: $$a1
 * @returns {Promise<void>} A promise that resolves when initialization is complete or rejects on non-ScriptLoadError.
 */
export function initializeFileImporter(): Promise<void> {
  return loadScript(Fig.importShimURL).then(() => {
    fileImporter = window.createFileImporter(Fig.importWorkerURL)
  }).catch((e: any) => {
    if (!(e instanceof ScriptLoadError)) {
      throw e
    }
  })
}

// Original: export const F = $$r0;
export const F = fileImporter

// Original: export const h = $$a1;
export const h = initializeFileImporter
