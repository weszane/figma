import { defineIntegration } from '@sentry/core'

/**
 * Stores metadata about loaded WASM modules.
 * Original variable: f
 */
const wasmImages: WasmImage[] = []

/**
 * Type definition for WASM image metadata.
 */
interface WasmImage {
  type: 'wasm'
  code_id: string | null
  code_file: string
  debug_file: string | null
  debug_id: string
}

/**
 * Extracts buildId and debugFile from a WebAssembly.Module.
 * Original anonymous function inside r
 * @param module WebAssembly.Module
 * @returns Object containing buildId and debugFile
 */
function extractWasmMetadata(module: WebAssembly.Module): { buildId: string | null, debugFile: string | null } {
  const buildIdSection = WebAssembly.Module.customSections(module, 'build_id')
  let buildId: string | null = null
  let debugFile: string | null = null

  const buildIdData = buildIdSection[0]
  if (buildIdData) {
    buildId = Array.from(new Uint8Array(buildIdData))
      .reduce((acc, byte) => acc + byte.toString(16).padStart(2, '0'), '')
  }

  const debugInfoSection = WebAssembly.Module.customSections(module, 'external_debug_info')[0]
  if (debugInfoSection) {
    const debugInfoBytes = new Uint8Array(debugInfoSection)
    debugFile = new TextDecoder('utf-8').decode(debugInfoBytes)
  }

  return { buildId, debugFile }
}

/**
 * Finds the index of a WASM image by code_file.
 * Original function: a
 * @param codeFile string
 * @returns index or -1 if not found
 */
function findWasmImageIndex(codeFile: string): number {
  return wasmImages.findIndex(img => img.type === 'wasm' && img.code_file === codeFile)
}

/**
 * Registers a WASM module's metadata.
 * Original function: r
 * @param module WebAssembly.Module
 * @param codeFile string
 */
function registerWasmImage(module: WebAssembly.Module, codeFile: string): void {
  const { buildId, debugFile } = extractWasmMetadata(module)
  if (buildId) {
    const idx = findWasmImageIndex(codeFile)
    if (idx >= 0)
      wasmImages.splice(idx, 1)

    let debugFileUrl: string | null = null
    if (debugFile) {
      try {
        debugFileUrl = new URL(debugFile, codeFile).href
      }
      catch {
        // Ignore invalid URLs
      }
    }

    wasmImages.push({
      type: 'wasm',
      code_id: buildId,
      code_file: codeFile,
      debug_file: debugFileUrl,
      debug_id: `${buildId.padEnd(32, '0').slice(0, 32)}0`,
    })
  }
}

/**
 * Sentry integration for WASM debug metadata.
 * Original export: $$o0
 */
export const wasmIntegration = defineIntegration(() => ({
  name: 'Wasm',
  /**
   * Sets up WASM streaming hooks to register debug metadata.
   * Original method: setupOnce
   */
  setupOnce() {
    // Patch WebAssembly.instantiateStreaming
    if ('instantiateStreaming' in WebAssembly) {
      const originalInstantiateStreaming = WebAssembly.instantiateStreaming
      WebAssembly.instantiateStreaming = function (source, importObject) {
        return Promise.resolve(source).then(src =>
          originalInstantiateStreaming(src, importObject).then((result) => {
            if (src.url)
              registerWasmImage(result.module, src.url)
            return result
          }),
        )
      }
    }
    // Patch WebAssembly.compileStreaming
    if ('compileStreaming' in WebAssembly) {
      const originalCompileStreaming = WebAssembly.compileStreaming
      WebAssembly.compileStreaming = function (source) {
        return Promise.resolve(source).then(src =>
          originalCompileStreaming(src).then((module) => {
            if (src.url)
              registerWasmImage(module, src.url)
            return module
          }),
        )
      }
    }
  },
  /**
   * Processes Sentry events to inject WASM debug metadata.
   * Original method: processEvent
   * @param event SentryEvent
   * @returns SentryEvent
   */
  processEvent(event) {
    let hasWasmFrame = false
    if (event.exception?.values) {
      event.exception.values.forEach((exception) => {
        let frames = exception.stacktrace?.frames
        let foundWasm = false
        if (frames) {
          frames.forEach((frame) => {
            if (!frame.filename)
              return
            const match = frame.filename.match(/^(.*?):wasm-function\[\d+\]:(0x[a-fA-F0-9]+)$/)
            if (match) {
              const idx = findWasmImageIndex(match[1])
              frame.instruction_addr = match[2]
              frame.filename = match[1]
              frame.platform = 'native'
              if (idx >= 0) {
                frame.addr_mode = `rel:${idx}`
                foundWasm = true
              }
            }
          })
          hasWasmFrame = hasWasmFrame || foundWasm
        }
      })
    }
    if (hasWasmFrame) {
      event.debug_meta = event.debug_meta || {}
      event.debug_meta.images = [...(event.debug_meta.images || []), ...wasmImages]
    }
    return event
  },
}))

// Refactored export name
export const F = wasmIntegration
