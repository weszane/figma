import { pickBy } from 'lodash-es'
import { createSelector } from 'reselect'
import { getResourceDataOrFallback } from '../905/663269'
import { isNotNullish } from '../figma_app/95419'

import { mapHubOrTeamFile, mapVariableProperties, mapVariableSetProperties } from '../figma_app/349248'
import { flattenNestedAssets, getAllAssets, getComponentAssetsMap, hasContainingStateGroup } from '../figma_app/646357'

// Selectors for library components and state groups
const selectComponents = (state: AppState) => state.library.publishedByLibraryKey.components
const selectStateGroups = (state: AppState) => state.library.publishedByLibraryKey.stateGroups

// Flatten nested assets for components and state groups
export const selectFlattenedComponents = createSelector([selectComponents], flattenNestedAssets)
export const selectFlattenedStateGroups = createSelector([selectStateGroups], flattenNestedAssets)

// Get component assets map for components and state groups
export const selectComponentAssetsMap = createSelector([selectComponents], getComponentAssetsMap)
export const selectStateGroupAssetsMap = createSelector([selectStateGroups], getComponentAssetsMap)

// Get all assets for components and state groups
export const selectAllComponentAssets = createSelector([selectComponents], getAllAssets)
export const selectAllStateGroupAssets = createSelector([selectStateGroups], getAllAssets)

// Filter out components that have containing state groups
export const selectStandaloneComponents = createSelector([selectComponentAssetsMap], components =>
  pickBy(components, component => !hasContainingStateGroup(component)))

// Merge state group assets with standalone components
export const selectMergedAssets = createSelector([selectStateGroupAssetsMap, selectStandaloneComponents], (stateGroupAssets, standaloneComponents) => ({
  ...stateGroupAssets,
  ...standaloneComponents,
}))

/**
 * Maps loaded library variables to their properties
 * @param state - The library state containing known used library variables
 * @returns Object mapping variable keys to their mapped properties
 */
export function mapLibraryVariables(state: any) {
  return Object.fromEntries(
    Object.entries(state.library.knownUsedLibraryVariablesByKey)
      .filter(([, variableEntry]: [string, any]) =>
        variableEntry.status === 'loaded'
        && (variableEntry.data?.variable?.file
          || (variableEntry.data?.variable?.hubFile.status === 'loaded' && variableEntry.data.variable.hubFile.data)),
      )
      .map(([key, variableEntry]: [string, any]) => {
        const variable = variableEntry.data.variable
        const file = variable.file
        const hubFile = variable.hubFile != null ? getResourceDataOrFallback(variable.hubFile) : void 0
        const mappedFile = mapHubOrTeamFile(file, hubFile)

        if (mappedFile) {
          return [key, mapVariableProperties(variable, mappedFile, false)]
        }
        return null
      })
      .filter(isNotNullish),
  )
}

/**
 * Maps loaded library variable sets to their properties
 * @param state - The library state containing known used library variable sets
 * @returns Object mapping variable set keys to their mapped properties
 */
export const mapLibraryVariableSets = createSelector([state => state.library.knownUsedLibraryVariableSetsByKey], variableSets =>
  Object.fromEntries(
    Object.entries(variableSets)
      .filter(([, variableSetEntry]: [string, any]) =>
        variableSetEntry.status === 'loaded'
        && (variableSetEntry.data?.variableCollection?.file
          || (variableSetEntry.data?.variableCollection?.hubFile.status === 'loaded' && variableSetEntry.data.variableCollection.hubFile.data)),
      )
      .map(([key, variableSetEntry]: [string, any]) => {
        const variableCollection = variableSetEntry.data.variableCollection
        const file = variableCollection.file
        const hubFile = variableCollection.hubFile != null ? getResourceDataOrFallback(variableCollection.hubFile) : void 0
        const mappedFile = mapHubOrTeamFile(file, hubFile)

        if (mappedFile) {
          return [key, mapVariableSetProperties(variableCollection, mappedFile, false)]
        }
        return null
      })
      .filter(isNotNullish),
  ))

// Export selectors with meaningful names
export const Ls = selectComponentAssetsMap
export const Th = selectAllComponentAssets
export const WH = selectAllStateGroupAssets
export const ZA = selectFlattenedStateGroups
export const a3 = mapLibraryVariables
export const c5 = selectMergedAssets
export const gJ = mapLibraryVariableSets
export const m3 = selectStateGroupAssetsMap
export const qV = selectFlattenedComponents
