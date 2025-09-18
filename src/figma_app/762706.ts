import { getGlobalThis } from '../905/841449'
import { initializeAppBindings } from '../figma_app/763686'
/**
 * @module FigmaAppWasm
 * Provides utilities for managing the Figma WASM module and related bindings.
 */

interface WasmInstantiateParams {
  isProduction: boolean
  executeEmscriptenJS: () => void
}

interface WasmImportsResult {
  imports: unknown
  receiveInstance: unknown
  getReservedHeapSize: () => number
}

interface TsApiInitParams {
  callMain: () => void
  tsApisForCpp: {
    jsHelpers: unknown
    [key: string]: unknown
  }
  registerRefreshCallback?: (t: unknown) => void
  leakBindings?: boolean
}

let wasmModule: Record<string, any> = {}

/**
 * Returns the current WASM module object.
 * @returns {Record<string, any>} The WASM module object.
 * @originalName $$s2
 */
export function getWasmModule(): Record<string, any> {
  return wasmModule
}

/**
 * Sets up the WASM module and returns its imports and instance receiver.
 * @param {WasmInstantiateParams} params - Configuration for WASM instantiation.
 * @returns {WasmImportsResult} The WASM imports, instance receiver, and heap size getter.
 * @throws If imports or receiveInstance are not set by the WASM code.
 * @originalName $$o0
 */
export function setupWasmModule({
  isProduction,
  executeEmscriptenJS,
}: WasmInstantiateParams): WasmImportsResult {
  let imports: unknown
  let receiveInstance: unknown
  const globalObj = getGlobalThis()

  // Reset wasmModule and define instantiateWasm
  wasmModule.instantiateWasm = function (imp: unknown, recv: unknown) {
    imports = imp
    receiveInstance = recv
    return {}
  }

  globalObj.Module = wasmModule

  let accessedWasmOffsetData = false

  if (!isProduction) {
    Object.defineProperty(wasmModule, 'wasmOffsetData', {
      get: () => {
        accessedWasmOffsetData = true
        return {
          offset_map: {},
          func_starts: [],
          name_map: {},
          import_functions: 0,
        }
      },
      set: () => { },
    })
  }

  try {
    executeEmscriptenJS()
    if (accessedWasmOffsetData) {
      (wasmModule.emscripten_realloc_buffer ?? wasmModule.growMemory)?.(0x60000000)
    }
  }
  finally {
    delete globalObj.Module
  }

  if (imports === undefined)
    throw new Error('Expected WebAssembly code to set "imports"')
  if (receiveInstance === undefined)
    throw new Error('Expected WebAssembly code to set "receiveInstance"')

  return {
    imports,
    receiveInstance,
    getReservedHeapSize: () => wasmModule.HEAPU8.buffer.byteLength,
  }
}

/**
 * Retrieves and removes the executeFullscreenEmscriptenCode function from the global object.
 * @returns {Function | undefined} The fullscreen Emscripten code executor.
 * @originalName $$l1
 */
export function getAndRemoveFullscreenEmscriptenExecutor(): (() => void) | undefined {
  const globalObj = getGlobalThis()
  const executor = globalObj.executeFullscreenEmscriptenCode
  delete globalObj.executeFullscreenEmscriptenCode
  return executor
}

/**
 * Initializes TypeScript APIs for C++ and manages global bindings.
 * @param {TsApiInitParams} params - Parameters for initialization.
 * @originalName $$d3
 */
export function initializeTsApiBindings({
  callMain,
  tsApisForCpp,
  registerRefreshCallback,
  leakBindings,
}: TsApiInitParams): void {
  const globalObj = getGlobalThis()
  try {
    globalObj.tsapi_init = (e: unknown, t: unknown) => {
      initializeAppBindings(e)
      registerRefreshCallback?.(t)
    }
    globalObj.tsApisForCpp = tsApisForCpp
    wasmModule.jsHelpers = tsApisForCpp.jsHelpers
    callMain()
  }
  finally {
    if (!leakBindings) {
      delete globalObj.tsapi_init
      delete globalObj.tsApisForCpp
    }
  }
}

// Export aliases for backward compatibility
export const N4 = setupWasmModule
export const eS = getAndRemoveFullscreenEmscriptenExecutor
export const iL = getWasmModule
export const jS = initializeTsApiBindings
