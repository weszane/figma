import type { NoTeamItemValue } from '../../types/app'
import { selectAtom } from 'jotai/utils'
import { keyBy } from 'lodash-es'
import { getCurrentHubFileVersionName } from '../905/71785'
import { fileByKeyAtom, fileVersionSelector } from '../905/91038'
import { libraryKeyMapAtom } from '../905/221694'
import { createReduxSubscriptionAtomWithState } from '../905/270322'
import { debugState } from '../905/407919'
import { getSingletonSceneGraph } from '../905/700578'
import { atom } from '../figma_app/27355'
import { subscribedStateGroupsFromLoadedPagesSelector, subscribedSymbolsFromLoadedPagesSelector } from '../figma_app/141508'
import { equals } from '../figma_app/476572'
import { getAssetKey, getAssetsForNodeIds } from '../figma_app/646357'

/**
 * Atom for published components from the library.
 */
const componentsAtom = createReduxSubscriptionAtomWithState(e => e.library.publishedByLibraryKey.components)

/**
 * Atom for published state groups from the library.
 */
const stateGroupsAtom = createReduxSubscriptionAtomWithState(e => e.library.publishedByLibraryKey.stateGroups)

/**
 * Atom for subscribed symbols from loaded pages.
 */
const subscribedSymbolsAtom = createReduxSubscriptionAtomWithState(subscribedSymbolsFromLoadedPagesSelector)

/**
 * Atom for subscribed state groups from loaded pages.
 */
const subscribedStateGroupsAtom = createReduxSubscriptionAtomWithState(subscribedStateGroupsFromLoadedPagesSelector)

/**
 * Atom that computes state group counts for components, grouped by library key and component key.
 * Original: $$b3
 */
const stateGroupCountsAtom = atom((get) => {
  const counts: Record<string, Record<string, Record<string, number>>> = {}
  const components = get(componentsAtom)

  const stateGroups = get(stateGroupsAtom)
  for (const [libraryKey, stateGroupMap] of Object.entries(stateGroups)) {
    if (libraryKey && stateGroupMap) {
      counts[libraryKey] = {}
      for (const stateGroupKey of Object.keys(stateGroupMap)) {
        if (!stateGroupKey)
          continue
        const componentKey = stateGroupKey
        const countMap: Record<string, number> = {}
        const current = components?.[libraryKey]?.[componentKey] as NoTeamItemValue

        for (const component of Object.values(current ?? {})) {
          const nodeId = component?.containing_frame?.containingStateGroup?.nodeId
          if (nodeId) {
            countMap[nodeId] = (countMap[nodeId] ?? 0) + 1
          }
        }
        counts[libraryKey][componentKey] = countMap
      }
    }
  }
  return counts
})

/**
 * Atom for files keyed by library key.
 * Original: $$v2
 */
const filesByLibraryKeyAtom = atom(get => keyBy(get(fileByKeyAtom), file => file.library_key))

/**
 * Atom that maps library keys to their names, combining from files and library key map.
 * Original: $$I1
 */
const libraryKeyToNameAtom = atom((get) => {
  const nameMap: Record<string, string> = {}
  const files = get(filesByLibraryKeyAtom)
  for (const libraryKey of Object.keys(files)) {
    const file = files[libraryKey]
    if (file) {
      nameMap[libraryKey] = file.name
    }
  }
  const libraryKeyMap = get(libraryKeyMapAtom)
  for (const libraryKey of Object.keys(libraryKeyMap)) {
    const version = libraryKeyMap[libraryKey]
    if (version) {
      nameMap[libraryKey] = getCurrentHubFileVersionName(version)
    }
  }
  return nameMap
})

/**
 * Atom for file version selector.
 */
const fileVersionAtom = createReduxSubscriptionAtomWithState(fileVersionSelector)

/**
 * Atom that computes assets for subscribed node IDs.
 * Original: x
 */
const assetsAtom = atom((get) => {
  const sceneGraph = getSingletonSceneGraph()
  const symbolNodeIds = get(subscribedSymbolsAtom).map(symbol => symbol.nodeId)
  const stateGroupNodeIds = get(subscribedStateGroupsAtom).map(stateGroup => stateGroup.nodeId)
  const libraryData = {
    components: get(componentsAtom),
    stateGroups: get(stateGroupsAtom),
  }
  return getAssetsForNodeIds(sceneGraph, symbolNodeIds, stateGroupNodeIds, libraryData, get(fileVersionAtom), debugState.dispatch)
})

/**
 * Atom for a set of asset keys from assets.
 * Original: $$S0
 */
const assetKeysSetAtom = selectAtom(assetsAtom, assets => new Set(assets.map(asset => getAssetKey(asset))), equals)

export const hN = assetKeysSetAtom
export const oE = libraryKeyToNameAtom
export const qp = filesByLibraryKeyAtom
export const rg = stateGroupCountsAtom
