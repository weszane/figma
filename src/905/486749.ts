import { reportError } from '../905/11'
import { ServiceCategories as ExtensibilityServiceCategory } from '../905/165054'
import { permissionScopeHandler } from '../905/189185'

/**
 * Constants for synced state and synced map key prefixes.
 */
const SYNCED_STATE_PREFIX = 'syncedState'
const SYNCED_STATE_KEY_PREFIX = `${SYNCED_STATE_PREFIX}:`
const SYNCED_MAP_PREFIX = 'syncedMap'
const SYNCED_MAP_KEY_PREFIX = `${SYNCED_MAP_PREFIX}:`

/**
 * WidgetSyncedState interface for type safety.
 */
interface WidgetSyncedState {
  getWidgetSyncedState?: () => Record<string, string>
  renderedSyncedState?: Record<string, string>
  setWidgetSyncedState?: (key: string, value: string) => void
  setInitialWidgetSyncedState?: (key: string, value: string) => void
  clearWidgetSyncedState?: () => void
  deleteWidgetSyncedState?: (key: string) => void
  widgetId?: string
}

/**
 * Combines synced state and synced map values for a widget.
 * @param mode - "current" or other
 * @param widget - WidgetSyncedState object
 */
export function getCombinedSyncedValues(mode: string, widget: WidgetSyncedState) {
  // $$c3
  const state = getSyncedState(mode, widget)
  const map = getSyncedMap(mode, widget)
  return {
    ...state,
    ...map,
  }
}

/**
 * Retrieves synced state values for a widget.
 * @param mode - "current" or other
 * @param widget - WidgetSyncedState object
 */
export function getSyncedState(mode: string, widget: WidgetSyncedState) {
  // $$u1
  const source = mode === 'current' ? widget?.getWidgetSyncedState?.() : widget?.renderedSyncedState
  const result: Record<string, any> = {}
  try {
    for (const key of Object.keys(source ?? {})) {
      if (key.startsWith(SYNCED_STATE_KEY_PREFIX)) {
        const value = JSON.parse(source![key])
        result[key.substring(SYNCED_STATE_KEY_PREFIX.length)] = value
      }
    }
    return result
  }
  catch (err) {
    reportError(
      ExtensibilityServiceCategory.EXTENSIBILITY,
      new Error(`Invalid syncedState for widgetID=${widget.widgetId}: ${err}`),
    )
  }
  return {}
}

/**
 * Sets synced state and synced map values for a widget.
 * @param widget - WidgetSyncedState object
 * @param stateValues - Synced state values
 * @param mapValues - Synced map values
 */
export function setSyncedValues(
  widget: WidgetSyncedState,
  stateValues?: Record<string, any>,
  mapValues?: Record<string, Record<string, any>>,
) {
  // $$p8
  if (stateValues && Object.keys(stateValues).length > 0) {
    const mergedState = {
      ...getSyncedState('current', widget),
      ...stateValues,
    }
    Object.keys(mergedState).forEach((key) => {
      setWidgetSyncedState(widget, key, mergedState[key])
    })
  }
  if (mapValues && Object.keys(mapValues).length > 0) {
    Object.keys(mapValues).forEach((mapKey) => {
      Object.keys(getSyncedMapEntry('current', widget, mapKey)).forEach((entryKey) => {
        deleteWidgetSyncedMapEntry(widget, mapKey, entryKey)
      })
      const entries = mapValues[mapKey]
      Object.keys(entries).forEach((entryKey) => {
        setWidgetSyncedMapEntry(widget, mapKey, entryKey, entries[entryKey])
      })
    })
  }
}

/**
 * Serializes a value for synced state.
 * @param widget - WidgetSyncedState object
 * @param key - State key
 * @param value - Value to serialize
 */
function serializeSyncedStateValue(widget: WidgetSyncedState, key: string, value: any) {
  // m
  const serialized = JSON.stringify(value)
  if (serialized === undefined) {
    throw new Error(
      `Invalid syncedState value for widgetID=${widget?.widgetId} name=${key} value=${value}`,
    )
  }
  return serialized
}

/**
 * Sets a widget's synced state value.
 * @param widget - WidgetSyncedState object
 * @param key - State key
 * @param value - Value to set
 */
export function setWidgetSyncedState(widget: WidgetSyncedState, key: string, value: any) {
  // $$h4
  permissionScopeHandler.plugin('set-widget-synced-state', () =>
    widget?.setWidgetSyncedState?.(
      `${SYNCED_STATE_PREFIX}:${key}`,
      serializeSyncedStateValue(widget, key, value),
    ))
}

/**
 * Sets a widget's initial synced state value.
 * @param widget - WidgetSyncedState object
 * @param key - State key
 * @param value - Value to set
 */
export function setInitialWidgetSyncedState(widget: WidgetSyncedState, key: string, value: any) {
  // $$g5
  permissionScopeHandler.plugin('set-initial-widget-synced-state', () =>
    widget?.setInitialWidgetSyncedState?.(
      `${SYNCED_STATE_PREFIX}:${key}`,
      serializeSyncedStateValue(widget, key, value),
    ))
}

/**
 * Clears all synced state values for a widget.
 * @param widget - WidgetSyncedState object
 */
export function clearWidgetSyncedState(widget: WidgetSyncedState) {
  // $$f0
  permissionScopeHandler.plugin('clear-widget-synced-state', () => widget?.clearWidgetSyncedState?.())
}

/**
 * Retrieves synced map values for a widget.
 * @param mode - "current" or other
 * @param widget - WidgetSyncedState object
 */
export function getSyncedMap(mode: string, widget: WidgetSyncedState) {
  // $$_7
  const source = mode === 'current' ? widget?.getWidgetSyncedState?.() : widget?.renderedSyncedState
  const result: Record<string, any> = {}
  const seen = new Set<string>()
  try {
    for (const key of Object.keys(source ?? {})) {
      if (key.startsWith(SYNCED_MAP_KEY_PREFIX)) {
        const [, mapName] = key.split(':', 3)
        if (!seen.has(mapName)) {
          seen.add(mapName)
          result[mapName] = getSyncedMapEntry(mode, widget, mapName)
        }
      }
    }
    return result
  }
  catch (err) {
    reportError(
      ExtensibilityServiceCategory.EXTENSIBILITY,
      new Error(`Invalid syncedMap values for widgetID=${widget.widgetId}: ${err}`),
    )
  }
  return {}
}

/**
 * Retrieves entries for a specific synced map.
 * @param mode - "current" or other
 * @param widget - WidgetSyncedState object
 * @param mapName - Map name
 */
export function getSyncedMapEntry(mode: string, widget: WidgetSyncedState, mapName: string) {
  // $$A6
  const source
    = mode === 'current' ? widget?.getWidgetSyncedState?.() : widget?.renderedSyncedState ?? {}
  const prefix = `${SYNCED_MAP_PREFIX}:${mapName}:`
  const prefixLength = prefix.length
  const result: Record<string, any> = {}
  try {
    for (const key of Object.keys(source)) {
      if (key.startsWith(prefix)) {
        const value = JSON.parse(source[key])
        result[key.substring(prefixLength)] = value
      }
    }
    return result
  }
  catch  {
    reportError(
      ExtensibilityServiceCategory.EXTENSIBILITY,
      new Error(`Invalid syncedMap for widgetID=${widget?.widgetId}, name=${mapName}`),
    )
  }
  return {}
}

/**
 * Sets a value in a widget's synced map.
 * @param widget - WidgetSyncedState object
 * @param mapName - Map name
 * @param entryKey - Entry key
 * @param value - Value to set
 */
export function setWidgetSyncedMapEntry(
  widget: WidgetSyncedState,
  mapName: string,
  entryKey: string,
  value: any,
) {
  // $$y2
  const serialized = JSON.stringify(value)
  if (serialized === undefined) {
    throw new Error(
      `Invalid syncedMap value for widgetID=${widget?.widgetId} name=${mapName} key=${entryKey} value=${value}`,
    )
  }
  widget?.setWidgetSyncedState?.(`${SYNCED_MAP_PREFIX}:${mapName}:${entryKey}`, serialized)
}

/**
 * Deletes an entry from a widget's synced map.
 * @param widget - WidgetSyncedState object
 * @param mapName - Map name
 * @param entryKey - Entry key
 */
export function deleteWidgetSyncedMapEntry(
  widget: WidgetSyncedState,
  mapName: string,
  entryKey: string,
) {
  // $$b10
  widget?.deleteWidgetSyncedState?.(`${SYNCED_MAP_PREFIX}:${mapName}:${entryKey}`)
}

/**
 * Clears synced state and sets new values for a widget.
 * @param widget - WidgetSyncedState object
 * @param stateValues - Synced state values
 * @param mapValues - Synced map values
 */
export function resetAndSetSyncedValues(
  widget: WidgetSyncedState,
  stateValues?: Record<string, any>,
  mapValues?: Record<string, Record<string, any>>,
) {
  // $$v9
  if (widget) {
    clearWidgetSyncedState(widget)
    setSyncedValues(widget, stateValues, mapValues)
  }
}

// Exported aliases for backward compatibility and refactored names
export const LX = clearWidgetSyncedState
export const MN = getSyncedState
export const Oi = setWidgetSyncedMapEntry
export const RL = getCombinedSyncedValues
export const Yp = setWidgetSyncedState
export const _U = setInitialWidgetSyncedState
export const hu = getSyncedMapEntry
export const oj = getSyncedMap
export const rJ = setSyncedValues
export const sH = resetAndSetSyncedValues
export const vH = deleteWidgetSyncedMapEntry
