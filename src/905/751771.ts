import { sendWithRetry } from '../905/910117'
import { buildStaticUrl } from '../figma_app/169182'
/**
 * Regular expression to match sourceMappingURL comments.
 * @originalName d
 */
const SOURCE_MAP_URL_REGEX = /^[#|@] sourceMappingURL=(.*)/

/**
 * Map to store pending worker requests.
 * @originalName o
 */
const workerRequests = new Map<number, (result: any) => void>()

/**
 * Counter for unique worker request IDs.
 * @originalName l
 */
let workerRequestId = 0

/**
 * Cached promise for loading Esprima script.
 * @originalName n
 */
let esprimaScriptPromise: Promise<string> | undefined

/**
 * Cached promise for initializing the worker.
 * @originalName r
 */
let workerInitPromise: Promise<Worker> | undefined

/**
 * Loads the Esprima script from a static URL.
 * @returns Promise resolving to the script content.
 * @originalName n
 */
function loadEsprimaScript(): Promise<string> {
  if (!esprimaScriptPromise) {
    const scriptUrl = buildStaticUrl('scripts/esprima-4.0.1.min.js')
    esprimaScriptPromise = sendWithRetry.crossOriginGetAny(scriptUrl, null, { raw: true })
      .then(res => `${res.response}`)
      .catch(() => {
        esprimaScriptPromise = undefined
        throw new Error('Failed to load Esprima script')
      })
  }
  return esprimaScriptPromise
}

/**
 * Initializes the worker with Esprima and custom parsing logic.
 * @returns Promise resolving to the Worker instance.
 * @originalName r
 */
function initEsprimaWorker(): Promise<Worker> {
  if (!workerInitPromise) {
    workerInitPromise = loadEsprimaScript().then((esprimaCode) => {
      const workerScript = `
        function getRelativeSourceMapUrlRanges(comments) {
          const ranges = [];
          for (const comment of comments) {
            if (comment.type !== 'Line') {
              continue;
            }
            const match = comment.value.match(${SOURCE_MAP_URL_REGEX});
            if (match) {
              try {
                const sourceMapUrl = new URL(match[1]);
              } catch (e) {
                // Not a valid url for source maps
                ranges.push(comment.range);
              }
            }
          }
          return ranges;
        };

        onmessage = function(e) {
          const id = e.data[0];
          try {
            const parsed = esprima.parse(e.data[1], { comment: true, range: true });
            const rangesToRemove = getRelativeSourceMapUrlRanges(parsed.comments);
            postMessage([id, { success: true, rangesToRemove }]);
          } catch (e) {
            e = {
              index: e.index,
              description: e.description,
              column: e.column,
              lineNumber: e.lineNumber
            };
            postMessage([id, { success: false, error: e }]);
          }
        };
      `
      const blobUrl = URL.createObjectURL(new Blob([esprimaCode, workerScript]))
      const worker = new Worker(blobUrl)
      worker.onmessage = (event) => {
        const [id, result] = event.data
        const callback = workerRequests.get(id)
        if (callback !== undefined) {
          workerRequests.delete(id)
          callback(result)
        }
        URL.revokeObjectURL(blobUrl)
      }
      return worker
    }).catch(() => {
      workerInitPromise = undefined
      throw new Error('Failed to initialize worker')
    })
  }
  return workerInitPromise
}

/**
 * Parses JavaScript code and removes relative source map URL comments.
 * @param code JavaScript code to parse.
 * @returns Promise resolving to parsing result.
 * @originalName $$c0
 */
export async function parseAndRemoveSourceMapComments(code: string): Promise<any> {
  const worker = await initEsprimaWorker()
  return new Promise((resolve) => {
    const id = workerRequestId++
    workerRequests.set(id, resolve)
    worker.postMessage([id, code])
  })
}

/**
 * Export for backward compatibility.
 * @originalName z
 */
export const z = parseAndRemoveSourceMapComments
