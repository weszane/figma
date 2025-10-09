import { createWorker } from "../905/392802"
import { getFeatureFlags } from "../905/601108"
import { getFigmaPluginScope } from "../905/672930"
import { throwTypeError } from "../figma_app/465776"
import { isDebugSelectedFigmakeFullscreen } from "../figma_app/552876"
// Renamed variables, added types, simplified message handling logic, improved readability
// Origin: $$346422.ts

type MessageId = number
type DevtoolsWorker = Worker & { onmessage: (event: MessageEvent<WorkerResponse>) => void }

interface WorkerRequest {
  type: string
  messageId: MessageId
  [key: string]: any
}

interface WorkerResponse {
  type: string
  messageId?: MessageId
  error?: string
  data?: any
  assetPath?: string
  id?: string
  [key: string]: any
}

interface BundleOptions {
  entrypointsOrIdentifierToFileName: Record<string, string>
  filesystem: Record<string, string>
  tailwind?: boolean
  minify?: boolean
  shadcn?: boolean
  noWrapper?: boolean
  jsxDev?: boolean
}

let devtoolsWorker: DevtoolsWorker | undefined
let messageIdCounter: number = 0
const pendingRequests: Map<MessageId, (value: any) => void> = new Map()
const requestErrors: Map<MessageId, (reason: any) => void> = new Map()
const dependencyStatusListeners: Set<(data: any) => void> = new Set()

// Message creators
export function formatCode(sourceCode: string, parserName: string) {
  return sendMessage({
    type: "FORMAT",
    sourceCode,
    parserName,
  })
}

export function bundleCode({
  entrypointsOrIdentifierToFileName,
  filesystem,
  tailwind,
  minify,
  shadcn = false,
  noWrapper = false,
  jsxDev = false,
}: BundleOptions) {
  return sendMessage({
    type: "BUNDLE",
    entrypointsOrIdentifierToFileName,
    filesystem,
    tailwind,
    minify,
    shadcn,
    noWrapper,
    jsxDev,
  })
}

export function initializeLanguageService() {
  return sendMessage({
    type: "INITIALIZE_LS",
    skipTypeAcquisition: !!(getFeatureFlags().bake_skip_ata && isDebugSelectedFigmakeFullscreen()),
  })
}

export function updateFiles(files: Record<string, string>) {
  return sendMessage({
    type: "UPDATE_FILES",
    files,
  })
}

export function lintFile(fileName: string) {
  return sendMessage({
    type: "LINT",
    fileName,
  })
}

export function getAutocomplete(fileName: string, position: number, explicit: boolean) {
  return sendMessage({
    type: "AUTOCOMPLETE",
    fileName,
    position,
    explicit,
  })
}

export function getQuickInfo(fileName: string, position: number) {
  return sendMessage({
    type: "QUICK_INFO",
    fileName,
    position,
  })
}

export function staticAnalyze(sourceCode: string) {
  return sendMessage({
    type: "STATIC_ANALYZE",
    sourceCode,
  })
}

export function analyzeJsxComponents(sourceCode: string, componentNames: string[]) {
  return sendMessage({
    type: "ANALYZE_JSX_COMPONENTS",
    sourceCode,
    componentNames,
  })
}

export function addDependencyStatusListener(listener: (data: any) => void) {
  dependencyStatusListeners.add(listener)
}

export function removeDependencyStatusListener(listener: (data: any) => void) {
  dependencyStatusListeners.delete(listener)
}

function sendMessage(request: Omit<WorkerRequest, 'messageId'>): Promise<any> {
  const messageId = messageIdCounter++
  const promise = new Promise((resolve, reject) => {
    pendingRequests.set(messageId, resolve)
    requestErrors.set(messageId, reject)
  })

  const worker = getOrCreateWorker()
  if (!worker) {
    throw new Error("Devtools worker not available")
  }

  worker.postMessage({
    ...request,
    messageId,
  } as WorkerRequest)

  return promise
}

function getOrCreateWorker(): DevtoolsWorker | null {
  if (!devtoolsWorker) {
    const workerUrl = Fig.devtoolsWorkerURL
    if (workerUrl) {
      devtoolsWorker = createWorker(workerUrl) as DevtoolsWorker
      devtoolsWorker.onmessage = async (event: MessageEvent<WorkerResponse>) => {
        const { type, messageId, error, ...data } = event.data

        switch (type) {
          case "INITIALIZE_LS_RESULT":
            resolveRequest(messageId, true)
            break
          case "FORMAT_RESULT":
            resolveRequest(messageId, data.changes)
            break
          case "BUNDLE_RESULT":
            resolveRequest(messageId, data.bundle)
            break
          case "UPDATE_FILES_RESULT":
            resolveRequest(messageId, data.updatedFiles)
            break
          case "LINT_RESULT":
            resolveRequest(messageId, data.diagnostics)
            break
          case "AUTOCOMPLETE_RESULT":
            resolveRequest(messageId, data.completions)
            break
          case "QUICK_INFO_RESULT":
            resolveRequest(messageId, data.hoverData)
            break
          case "STATIC_ANALYZE_RESULT":
            resolveRequest(messageId, data.results)
            break
          case "ANALYZE_JSX_COMPONENTS_RESULT":
            resolveRequest(messageId, data.componentProps)
            break
          case "ERROR_RESULT":
            rejectRequest(messageId, new Error(error))
            break
          case "DEPENDENCY_TYPES_STATUS":
            dependencyStatusListeners.forEach(listener => listener(data))
            break
          case "REFACTOR_RESULT":
            resolveRequest(messageId, data.updatedSourceCode)
            break
          case "RESOLVE_ASSET":
            {
              const contents = await resolveAsset(data.assetPath)
              sendMessage({
                type: "RESOLVE_ASSET_RESULT",
                messageId,
                contents,
              })
              break
            }
          case "GET_SVG":
            {
              const { svgForDomId } = await import("../2824/40443")
              const svg = svgForDomId(data.id)
              sendMessage({
                type: "GET_SVG_RESULT",
                messageId,
                svg,
              })
              break
            }
          case "GET_CODE_EDITING_SNIPPET_RESULT":
            resolveRequest(messageId, data.codeSnippet)
            break
          case "UPDATE_IMAGES_TO_ESM_IMPORTS_RESULT":
            resolveRequest(messageId, data.result)
            break
          case "OPTIMIZE_CODE_RESULT":
            resolveRequest(messageId, data.reactCode)
            break
          default:
            throwTypeError(event.data)
        }
      }
    }
  }
  return devtoolsWorker
}

function resolveRequest(messageId: MessageId, value: any) {
  const resolve = pendingRequests.get(messageId)
  if (resolve) {
    resolve(value)
    pendingRequests.delete(messageId)
    requestErrors.delete(messageId)
  }
}

function rejectRequest(messageId: MessageId, error: Error) {
  const reject = requestErrors.get(messageId)
  if (reject) {
    reject(error)
    pendingRequests.delete(messageId)
    requestErrors.delete(messageId)
  }
}

export function getCodeEditingSnippet(selectedElementAndParents: any) {
  return sendMessage({
    type: "GET_CODE_EDITING_SNIPPET",
    selectedElementAndParents,
  })
}

async function resolveAsset(assetPath: string): Promise<Uint8Array> {
  if (assetPath.endsWith(".png")) {
    const pluginScope = getFigmaPluginScope()
    const imageHash = assetPath.slice(0, -4)
    const image = pluginScope.getImageByHash(imageHash)
    if (image) {
      return await image.getBytesAsync()
    }
  }
  return new Uint8Array()
}

export function updateImagesToEsmImports(...args: any[]) {
  return sendMessage({
    type: "UPDATE_IMAGES_TO_ESM_IMPORTS",
    args,
  })
}

export function optimizeCode(reactCode: string, refactorJsx: boolean) {
  return sendMessage({
    type: "OPTIMIZE_CODE_REQUEST",
    reactCode,
    refactorJsx,
  })
}

// Export aliases (keeping original names for compatibility)
export const AF = removeDependencyStatusListener
export const Ac = lintFile
export const B9 = updateImagesToEsmImports
export const IC = formatCode
export const M5 = analyzeJsxComponents
export const Nx = addDependencyStatusListener
export const Py = optimizeCode
export const Y3 = getCodeEditingSnippet
export const c2 = getQuickInfo
export const fM = updateFiles
export const pS = bundleCode
export const qs = staticAnalyze
export const sM = initializeLanguageService
export const uH = getAutocomplete
