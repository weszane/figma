import { getFeatureFlags } from '../905/601108'
import { customHistory } from '../905/612521'
import { logInfo } from '../905/714362'
import { isDevEnvironment } from '../figma_app/169182'
import { fullscreenValue } from '../figma_app/455680'
import { CorePerfInfo, DocumentMode, performanceEventCounters } from '../figma_app/763686'

/**
 * Default heap memory size constant (original: $$d7)
 */
const defaultHeapMemorySize = 1048576

/**
 * Heap memory mode constant (original: $$c4)
 */
const heapMemoryModeFlag = 0x40000000

/**
 * Determines the document mode based on feature flags and URL parameters (original: $$_5)
 */
const documentMode = (() => {
  const featureFlags = getFeatureFlags()
  const location = customHistory.location
  const searchParams = location ? new URLSearchParams(location.search) : null
  const wasm4gbEnabled = featureFlags.wasm_4gb && searchParams?.get('wasm-4gb') === '1'
  const recoveryEnabled = searchParams?.get('recovery') === 'true'
  if (wasm4gbEnabled)
    return DocumentMode.MAXIMUM
  if (recoveryEnabled)
    return DocumentMode.RECOVERY
  return DocumentMode.DEFAULT
})()

/**
 * Sets the heap memory mode and logs the result (original: $$h0)
 * @param mode - The heap memory mode to set
 * @returns Whether the operation was successful
 */
export function setHeapMemoryMode(mode: number): boolean {
  const success = CorePerfInfo.setHeapMemoryMode(mode)
  logInfo('memory', `setHeapMemoryMode(${mode}) ${success ? 'success' : 'failed'}`)
  return success
}

/**
 * Stores callback functions for fullscreen-app and prototype-lib (original: $$f3)
 * @param type - The type of app ('fullscreen-app' or 'prototype-lib')
 * @param callback - The callback function to store
 */
export function setMemoryCallback(type: string, callback: () => number): void {
  if (type === 'fullscreen-app') {
    fullscreenCallback = callback
  }
  else {
    prototypeCallback = callback
  }
}

let fullscreenCallback: (() => number) | null = null
let prototypeCallback: (() => number) | null = null

/**
 * Retrieves memory usage from stored callbacks (original: $$E6)
 * @param type - The type of app
 * @returns The memory usage value
 */
export function getMemoryUsage(type: string): number {
  if (type === 'fullscreen-app')
    return fullscreenCallback?.() ?? 0
  if (type === 'prototype-lib')
    return prototypeCallback?.() ?? 0
  return fullscreenCallback?.() || prototypeCallback?.() || 0
}

/**
 * Gets the used JS heap size from the browser's performance API (original: $$y2)
 * @returns The used JS heap size
 */
export function getUsedJSHeapSize(): number {
  if (window.performance) {
    const memory = window.performance.memory
    if (memory)
      return memory.usedJSHeapSize
  }
  return 0
}

/**
 * Gets the total used heap memory including memory spike on file load (original: $$b1)
 * @returns The total used heap memory
 */
export function getTotalUsedHeapMemory(): number {
  return (CorePerfInfo?.getTotalUsedHeapMemory() || 0) + fullscreenValue.memorySpikeOnFileLoadBytes()
}

// Memory profiling and performance event counters for development environment
if (getFeatureFlags().memory_profiling_local && isDevEnvironment()) {
  // @ts-ignore
  window.startMemoryProfile = async () => {
    const fileHandle = await window.showSaveFilePicker()
    const writable = await fileHandle.createWritable({ keepExistingData: true })
    // @ts-ignore
    window.memoryProfileOperationsWritable = writable
  }
}

if (isDevEnvironment()) {
  // @ts-ignore
  window.getTopMemoryFunctions = () => {
    const events = performanceEventCounters.getAll()
    const callCountEvents = new Map<string, number>()
    const maxDeltaEvents = new Map<string, number>()
    const totalDeltaEvents = new Map<string, number>()
    for (const event of events) {
      if (event.includes('allocCallCount')) {
        callCountEvents.set(event, performanceEventCounters.getCount(event))
      }
      else if (event.includes('allocMaxDelta')) {
        maxDeltaEvents.set(event, performanceEventCounters.getCount(event))
      }
      else if (event.includes('allocTotalDelta')) {
        totalDeltaEvents.set(event, performanceEventCounters.getCount(event))
      }
    }
    console.log('call count events', Array.from(callCountEvents).sort((a, b) => b[1] - a[1]).slice(0, 10))
    console.log('max delta events', Array.from(maxDeltaEvents).sort((a, b) => b[1] - a[1]).slice(0, 10))
    console.log('total delta events', Array.from(totalDeltaEvents).sort((a, b) => b[1] - a[1]).slice(0, 10))
  }
  // @ts-ignore
  window.resetPerformanceEventCounters = () => {
    performanceEventCounters.resetAll()
  }
}

// Exported variables and functions with original names for traceability
export const F4 = setHeapMemoryMode // $$h0
export const Yc = getTotalUsedHeapMemory // $$b1
export const aW = getUsedJSHeapSize // $$y2
export const bM = setMemoryCallback // $$f3
export const cF = heapMemoryModeFlag // $$c4
export const dn = documentMode // $$_5
export const le = getMemoryUsage // $$E6
export const o_ = defaultHeapMemorySize // $$d7
