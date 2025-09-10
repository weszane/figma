import { flagAtom, requestsAtom } from '../905/149196'
import { getFeatureFlags } from '../905/601108'
import { atomStoreManager } from '../figma_app/27355'
// Original variable: s
const SHOW_FIGMENT_DEBUGGER_KEY = 'showFigmentDebugger'

/**
 * Tracks network requests for the Figment Debugger if enabled.
 * @param requestJsons - Array of request JSON objects.
 * @param networkState - Current network state.
 * Original function: $$o0
 */
export function trackFigmentRequest(requestJsons: any[], networkState: any): void {
  try {
    const flags = getFeatureFlags()
    if (!flags.internal_only_debug_tools || !flags.figment_debugger || !requestJsons) {
      return
    }
    atomStoreManager.set(requestsAtom, {
      requestJsons,
      networkState,
    })
  }
  catch {
    console.error('[Figment Debugger] Error tracking request')
  }
}

/**
 * Toggles the Figment Debugger flag and updates storage.
 * Original function: $$l1
 */
export function toggleFigmentDebugger(): void {
  const isEnabled = getFigmentDebuggerFlag()
  const newValue = !isEnabled
  localStorage.setItem(SHOW_FIGMENT_DEBUGGER_KEY, newValue ? 'true' : 'false')
  atomStoreManager.set(flagAtom, newValue)
}

/**
 * Retrieves the Figment Debugger flag from localStorage.
 * @returns True if enabled, false otherwise.
 * Original function: $$d2
 */
export function getFigmentDebuggerFlag(): boolean {
  try {
    if (!localStorage) {
      return false
    }
    const value = localStorage.getItem(SHOW_FIGMENT_DEBUGGER_KEY)
    return value === 'true'
  }
  catch {
    return false
  }
}

// Updated exports to use refactored function names
export const N = trackFigmentRequest
export const Y = toggleFigmentDebugger
export const wh = getFigmentDebuggerFlag
