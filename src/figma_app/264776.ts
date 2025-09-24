import { createContext } from 'react'
import { createSelector } from 'reselect'
import { MIXED_MARKER } from '../905/216495'

import { trackEventAnalytics } from '../905/449184'
import { fullscreenValue } from '../figma_app/455680'
import { selectOpenFileKey, selectOpenFileLibraryKey } from '../figma_app/516028'
import { createLocalComponent } from '../figma_app/646357'
import { renameNode } from '../figma_app/741237'
import { Fullscreen, StateGroupErrorType, StateHierarchy } from '../figma_app/763686'
import { isSelectedViewFullscreenCooper } from '../figma_app/828186'

// Refactored code with meaningful names, grouped logically, and added TypeScript documentation.
// Original function names are preserved in comments for traceability.
// Functions are converted to named arrow functions where appropriate for readability.
// Nested logic simplified with early returns and helper functions.
// Exports renamed to match refactored function names.

// Constants
export const EM_DASH = '\u2014' // Original: $$h14

// Utility functions
/**
 * Formats an object into a comma-separated string of key=value pairs, sorted by a given order.
 * @param obj - The object to format.
 * @param order - Array defining the sort order of keys.
 * @returns The formatted string.
 */
export function formatPropertyValues(obj: Record<string, any>, order: string[]): string { // Original: $$m16
  return Object.keys(obj)
    .sort((a, b) => order.indexOf(a) - order.indexOf(b))
    .map(key => `${key}=${obj[key]}`)
    .join(', ')
}

/**
 * Sanitizes a property name by removing commas and equals signs, then trimming.
 * @param name - The property name to sanitize.
 * @returns The sanitized name.
 */
export function sanitizePropertyName(name: string): string { // Original: $$T5
  return name.replace(/[,=]/g, '').trim()
}

// State aggregation and error handling
/**
 * Aggregates property values from states, considering action index path and sort order.
 * @param states - Array of states.
 * @param sortOrder - Array of property names in sort order.
 * @param actionIndexPath - Optional action index path for filtering.
 * @returns Aggregated property values object.
 */
export function aggregatePropertyValues(states: any[], sortOrder: string[], actionIndexPath?: number[]): Record<string, any> { // Original: $$g10
  const aggregated: Record<string, any> = {}
  for (const state of states) {
    if (actionIndexPath && state.actionIndexPath && state.actionIndexPath.some((val, idx) => val !== actionIndexPath[idx])) {
      continue
    }
    const { propertyValues } = state.stateInfo
    if (propertyValues) {
      for (const prop of sortOrder) {
        if (prop in aggregated && aggregated[prop] !== propertyValues[prop]) {
          aggregated[prop] = aggregated[prop] && propertyValues[prop] ? MIXED_MARKER : ''
        }
        else {
          aggregated[prop] = propertyValues[prop] || ''
        }
      }
    }
  }
  return aggregated
}

/**
 * Gets the maximum error type from an array of states.
 * @param states - Array of states.
 * @returns The highest StateGroupErrorType.
 */
export function getMaxErrorType(states: any[]): StateGroupErrorType { // Original: $$f0
  let maxError = StateGroupErrorType.NONE
  for (const state of states) {
    if (state.stateInfo.stateError && state.stateInfo.stateError > maxError) {
      maxError = state.stateInfo.stateError
    }
  }
  return maxError
}

/**
 * Filters states by a specific error type.
 * @param states - Array of states.
 * @param errorType - The error type to filter by.
 * @returns Filtered array of states.
 */
export function filterByErrorType(states: any[], errorType: StateGroupErrorType): any[] { // Original: $$E11
  return states.filter(state => state.stateInfo.stateError === errorType)
}

// State matching functions
/**
 * Finds the best matching state based on property values and differences.
 * @param targetValues - Target property values.
 * @param criteria - Array of criteria objects with property and value.
 * @param states - Array of states to search.
 * @returns The best matching state or null.
 */
export function findBestMatchingState(targetValues: Record<string, any>, criteria: { property: string, value: any }[], states: any[]): any | null { // Original: $$y1
  let candidates: any[] = []
  let maxMatchCount = 0
  for (const state of states) {
    const propValues = state.propertyValues
    if (!propValues)
      continue
    let matchCount = 0
    for (const crit of criteria) {
      if (crit.value !== propValues[crit.property])
        break
      matchCount++
    }
    if (matchCount > maxMatchCount) {
      maxMatchCount = matchCount
      candidates = [state]
    }
    else if (matchCount === maxMatchCount) {
      candidates.push(state)
    }
  }
  if (maxMatchCount === 0)
    return null
  let bestState = null
  let minDiff = Infinity
  for (const candidate of candidates) {
    const diff = Object.keys(targetValues).reduce((count, key) => {
      if (targetValues[key] !== MIXED_MARKER && targetValues[key] !== candidate.propertyValues[key])
        count++
      return count
    }, 0)
    if (diff < minDiff) {
      minDiff = diff
      bestState = candidate
    }
  }
  return bestState
}

/**
 * Finds the best matching variant state based on property values and differences.
 * @param targetValues - Target property values.
 * @param criteria - Array of criteria objects with property and value.
 * @param states - Array of states to search.
 * @returns The best matching state or null.
 */
export function findBestMatchingVariantState(targetValues: Record<string, any>, criteria: { property: string, value: any }[], states: any[]): any | null { // Original: $$b9
  let candidates: any[] = []
  let maxMatchCount = 0
  for (const state of states) {
    const propValues = state.stateInfo.propertyValues
    if (!propValues)
      continue
    let matchCount = 0
    for (const crit of criteria) {
      if (crit.value !== propValues[crit.property])
        break
      matchCount++
    }
    if (matchCount > maxMatchCount) {
      maxMatchCount = matchCount
      candidates = [state]
    }
    else if (matchCount === maxMatchCount) {
      candidates.push(state)
    }
  }
  if (maxMatchCount === 0)
    return null
  let bestState = null
  let minDiff = Infinity
  for (const candidate of candidates) {
    const diff = Object.keys(targetValues).reduce((count, key) => {
      if (targetValues[key] !== MIXED_MARKER && targetValues[key] !== candidate.stateInfo.propertyValues[key])
        count++
      return count
    }, 0)
    if (diff < minDiff) {
      minDiff = diff
      bestState = candidate
    }
  }
  return bestState
}

// Analytics and deferral
/**
 * Tracks analytics for state group events.
 * @param event - The event name.
 * @param stateGroup - The state group.
 * @param additionalData - Optional additional data.
 */
export function trackStateGroupAnalytics(event: string, stateGroup: any, additionalData?: Record<string, any>): void { // Original: $$I15
  const analyticsInfo = Fullscreen.getStateGroupAnalyticsInfo(stateGroup)
  trackEventAnalytics(event, {
    ...analyticsInfo,
    ...(additionalData || {}),
  })
}

/**
 * Executes a function with deferred variant property definition backfill.
 * @param fn - The function to execute.
 * @param fullscreen - The Fullscreen instance.
 */
export function withDeferredVariantPropDefBackfill(fn: () => void, fullscreen: any): void { // Original: $$S4
  fullscreen.setDeferVariantPropDefBackfill(true)
  try {
    fn()
  }
  finally {
    fullscreen.setDeferVariantPropDefBackfill(false)
  }
}

// Property manipulation
/**
 * Renames a property in variant states.
 * @param oldName - The old property name.
 * @param newName - The new property name.
 * @param states - Array of states.
 * @param sortOrder - Array of property names in sort order.
 */
export function renameProperty(oldName: string, newName: string, states: any[], sortOrder: string[]): void { // Original: $$v12
  const sanitizedNewName = sanitizePropertyName(newName)
  if (sanitizedNewName === '' || oldName === sanitizedNewName || !sortOrder.includes(oldName) || !Fullscreen)
    return
  const newSortOrder = [...sortOrder]
  newSortOrder[newSortOrder.indexOf(oldName)] = sanitizedNewName
  withDeferredVariantPropDefBackfill(() => {
    states.forEach((state) => {
      const propValues = state.stateInfo.propertyValues
      if (propValues) {
        const newPropValues = { ...propValues }
        if (newPropValues[oldName]) {
          newPropValues[sanitizedNewName] = newPropValues[oldName]
          delete newPropValues[oldName]
          renameNode(state.symbol.node_id, formatPropertyValues(newPropValues, newSortOrder))
        }
      }
    })
  }, Fullscreen)
  fullscreenValue.commit()
}

/**
 * Deletes properties from variant states.
 * @param properties - Array of property names to delete.
 * @param states - Array of states.
 * @param sortOrder - Array of property names in sort order.
 * @param stateGroup - The state group for analytics.
 */
export function deleteProperties(properties: string[], states: any[], sortOrder: string[], stateGroup: any): void { // Original: $$$$A6
  if (!Fullscreen)
    return
  trackStateGroupAnalytics('Deleting Property from Variant Component', stateGroup)
  withDeferredVariantPropDefBackfill(() => {
    states.forEach((state) => {
      const propValues = state.stateInfo.propertyValues
      if (!propValues)
        return
      const newPropValues = { ...propValues }
      for (const prop of properties) {
        if (newPropValues[prop])
          delete newPropValues[prop]
      }
      let formatted = formatPropertyValues(newPropValues, sortOrder)
      if (formatted === '')
        formatted = 'Property 1=Default'
      renameNode(state.symbol.node_id, formatted)
    })
  }, Fullscreen)
  fullscreenValue.commit()
}

// State creation and processing
/**
 * Creates a state variant object.
 * @param state - The original state.
 * @param name - Optional name.
 * @param description - Optional description.
 * @param thumbnail - Optional thumbnail.
 * @returns The new state object.
 */
export function createStateVariant(state: any, name?: string, description?: string, thumbnail?: any): any { // Original: $$x8
  const parseActionIndexPath = (path: string | undefined): number[] => {
    if (!path)
      return []
    const match = path.match(/\{(.*?)\}/)
    return !match || match.length < 2 ? [] : match[1].trim().split(',').map(val => parseFloat(val.trim()))
  }
  return {
    stateInfo: state.stateInfo,
    symbol: createLocalComponent(null, null, state.symbol, name || '', description || '', thumbnail),
    actionIndexPath: parseActionIndexPath(state.actionIndexPath),
  }
}

/**
 * Processes state hierarchy information.
 * @param info - The state hierarchy info.
 * @param name - Optional name.
 * @param description - Optional description.
 * @param thumbnail - Optional thumbnail.
 * @param actionIndexPath - Optional action index path.
 * @returns Processed state hierarchy or null.
 */
export function processStateHierarchy(info: any, name?: string, description?: string, thumbnail?: any, actionIndexPath?: number[]): any | null { // Original: $$N7
  if (!info)
    return null
  const mode = info.mode
  if (mode === StateHierarchy.NONE)
    return null
  if (mode === StateHierarchy.NON_STATE_COMPONENTS) {
    return {
      mode,
      numSelectedNonStateComponents: info.numSelectedNonStateComponents,
    }
  }
  const stateGroup = info.stateGroup
  const stateGroupModel = info.stateGroupModel
  const isOneDimensional = stateGroupModel?.propertySortOrder?.length === 1
  const allStates = info.allStates.map(state => createStateVariant(state, name, description, thumbnail))
  if (mode === StateHierarchy.STATE_GROUP) {
    return {
      mode,
      stateGroup,
      stateGroupModel,
      allStates,
      modelIsOneDimensional: isOneDimensional,
    }
  }
  const selectedStates = info.selectedStates.map(state => createStateVariant(state, name, description, thumbnail))
  const selectedStatesPropertyValues = aggregatePropertyValues(selectedStates, stateGroupModel.propertySortOrder || [], actionIndexPath)
  return {
    mode,
    stateGroup,
    stateGroupModel,
    allStates,
    modelIsOneDimensional: isOneDimensional,
    selectedStates,
    selectedStatesPropertyValues,
  }
}

// Selectors and constants
createContext(null)
export const stateGroupSelectionSelector = createSelector( // Original: $$C13
  [
    (state: any) => state.mirror.selectionProperties.stateGroupSelectionInfo,
    selectOpenFileKey,
    selectOpenFileLibraryKey,
    isSelectedViewFullscreenCooper,
  ],
  processStateHierarchy,
)

export const BOOLEAN_VALUES = [['yes', 'no'], ['true', 'false'], ['on', 'off']] // Original: $$w2
export const FLATTENED_BOOLEAN_VALUES = BOOLEAN_VALUES.reduce((acc, pair) => acc.concat(pair), []) // Original: $$O3

// Updated exports to match refactored names
export const A = getMaxErrorType
export const Jj = findBestMatchingState
export const NE = BOOLEAN_VALUES
export const O4 = FLATTENED_BOOLEAN_VALUES
export const Po = withDeferredVariantPropDefBackfill
export const QV = sanitizePropertyName
export const bk = deleteProperties
export const cP = processStateHierarchy
export const dq = createStateVariant
export const kz = findBestMatchingVariantState
export const m4 = aggregatePropertyValues
export const pg = filterByErrorType
export const q1 = renameProperty
export const uL = stateGroupSelectionSelector
export const xJ = EM_DASH
export const zb = trackStateGroupAnalytics
export const zh = formatPropertyValues
