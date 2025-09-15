import { useCallback } from 'react'
import { hubFileAndPresetKeysSetAtom, resourceDataAndPresetKeysV2SetAtom } from '../905/72677'
import { getResourceDataOrFallback } from '../905/419236'
import { analyticsEventManager } from '../905/449184'
import { subscribeMultipleAndAwaitAll } from '../905/553831'
import { M4 } from '../905/713695'
import { increment } from '../905/972754'
import { QN, r9 } from '../905/991973'
import { fetchDynamicConfig } from '../3973/389215'
import { atom, atomStoreManager, useAtomWithSubscription } from '../figma_app/27355'
import { CommunityLibraryComponentsAndStateGroups, StyleByKey, VariableByKey, VariableCollectionByKey } from '../figma_app/43951'

/**
 * Query for UI kits feedback URLs.
 * Original: $$m4
 */
export const queryUiKitsFeedbackUrls = M4.Query({
  fetch: async (key: string) =>
    key ? (await fetchDynamicConfig('ui_kits_feedback_urls')).get(key, '') : '',
})

/**
 * Get partner type from loaded library preset subscriptions.
 * Original: $$g2
 */
export function getPartnerTypeFromPreset(e: any, t: any): string | undefined {
  if (e.status === 'loaded') {
    const preset = e.data.libraryPresetSubscriptionsV2?.find(
      (sub: any) => getResourceDataOrFallback(sub.libraryKey) === t,
    )
    if (preset)
      return preset.partner_type ?? undefined
  }
}

/**
 * Checks if a resource key exists in the preset keys atom.
 * Original: $$f6
 */
export function hasResourcePresetKey(key: string): boolean {
  const presetKeys = useAtomWithSubscription(resourceDataAndPresetKeysV2SetAtom)
  return !!key && presetKeys.has(key)
}

/**
 * Returns a callback to check if a resource key exists in the preset keys atom.
 * Original: $$E1
 */
export function useHasResourcePresetKey(): (key: string) => boolean {
  return useCallback((key: string) => {
    const presetKeys = atomStoreManager.get(resourceDataAndPresetKeysV2SetAtom)
    return !!key && presetKeys.has(key)
  }, [])
}

/**
 * Checks if a library key exists in a given set.
 * Original: $$y9
 */
export function hasLibraryKeyInSet(item: any, set: Set<any>): boolean {
  return set.has(item.library_key)
}

/**
 * Returns a callback to check if a library key exists in the atom set.
 * Original: $$b15
 */
export function useHasLibraryKeyInSet(): (item: any) => boolean {
  const presetKeys = useAtomWithSubscription(resourceDataAndPresetKeysV2SetAtom)
  return useCallback((item: any) => hasLibraryKeyInSet(item, presetKeys), [presetKeys])
}

/**
 * Atom for tracking nonce.
 * Original: $$T7
 */
export const nonceAtom = atom(null)

/**
 * Atom for tracking page load increment.
 * Original: $$I13
 */
export const pageLoadAtom = atom({
  value: increment(),
  updateSource: 'page_load',
})

/**
 * Checks if a file or preset key exists in the hub atom.
 * Original: $$S5
 */
export function hasHubFileOrPresetKey(key: string): boolean {
  return !!key && atomStoreManager.get(hubFileAndPresetKeysSetAtom).has(key)
}

/**
 * Checks if a resource key exists in the preset keys atom (non-hook version).
 * Original: $$v11
 */
export function hasResourcePresetKeyStatic(key: string): boolean {
  const presetKeys = atomStoreManager.get(resourceDataAndPresetKeysV2SetAtom)
  return !!key && presetKeys.has(key)
}

/**
 * Checks if a key exists in either QN or r9 atom sets.
 * Original: $$A0
 */
export function isKeyInQNOrR9(key: string): boolean {
  if (!key)
    return false
  const qnSet = atomStoreManager.get(QN)
  const r9Set = atomStoreManager.get(r9)
  return qnSet.includes(key) || r9Set.includes(key)
}

// Grouped resource types for library queries
const resourceTypeMap: Record<string, any> = {
  VariableByKey: null,
  VariableCollectionByKey: null,
  StyleByKey: null,
  CommunityLibraryComponentsAndStateGroups: null,
}

const resourceTypes = [
  VariableByKey,
  VariableCollectionByKey,
  StyleByKey,
  CommunityLibraryComponentsAndStateGroups,
]

/**
 * Checks if a resource type name exists in the resourceTypes array.
 * Original: C
 */
function isResourceTypeName(name: string): boolean {
  return resourceTypes.some(type => type._name === name)
}

/**
 * Returns the resource type name if valid, otherwise undefined.
 * Original: w
 */
function getValidResourceTypeName(name: string): string | undefined {
  return isResourceTypeName(name) ? name : undefined
}

/**
 * Creates a query for a resource type, tracking static update fetches.
 * Original: O
 */
function createResourceTypeQuery(resourceType: any) {
  return M4.Query({
    fetch: async (params: any) => {
      const result = subscribeMultipleAndAwaitAll(resourceType, params.$$arguments)
      const typeName = getValidResourceTypeName(resourceType._name)
      if (typeName) {
        const lastNonce = resourceTypeMap[typeName]
        if (lastNonce === null || params.nonce.value > lastNonce) {
          analyticsEventManager.trackDefinedEvent('preset_libraries.static_update_fetch', {
            viewName: getValidResourceTypeName(resourceType._name),
            batchSize: params.$$arguments.length,
            updateSource: params.nonce.updateSource,
          })
          resourceTypeMap[typeName] = params.nonce.value
        }
      }
      return await result
    },
  })
}

// Queries for each resource type
export const variableByKeyQuery = createResourceTypeQuery(VariableByKey)
export const variableCollectionByKeyQuery = createResourceTypeQuery(VariableCollectionByKey)
export const styleByKeyQuery = createResourceTypeQuery(StyleByKey)
export const communityLibraryComponentsQuery = createResourceTypeQuery(CommunityLibraryComponentsAndStateGroups)

/**
 * Handles resource query with fallback to nonce atom.
 * Original: $$k8
 */
export function handleResourceQuery(
  query: any,
  args: any,
  useAtom: (atom: any) => any,
): any {
  const fallbackNonce = useAtom(nonceAtom)
  const pageLoadNonce = useAtom(pageLoadAtom)
  let result = useAtom(query({
    arguments: args,
    nonce: pageLoadNonce,
  }))
  if (result.status === 'loading' && fallbackNonce !== null) {
    result = useAtom(query({
      arguments: args,
      nonce: fallbackNonce,
    }))
  }
  return result
}

// Exported names refactored for clarity and traceability
export const YJ = isKeyInQNOrR9 // Ag
export const ZB = useHasResourcePresetKey // B8
export const PT = getPartnerTypeFromPreset // HA
export const CLCSG = communityLibraryComponentsQuery // Os
export const QUKFU = queryUiKitsFeedbackUrls // Re
export const HFOPK = hasHubFileOrPresetKey // TX
export const HRPK = hasResourcePresetKey // fd
export const NA = nonceAtom // fn
export const HRQ = handleResourceQuery // ku
export const HLKS = hasLibraryKeyInSet // lR
export const VCQ = variableCollectionByKeyQuery // nT
export const HRPKS = hasResourcePresetKeyStatic // o3
export const VBKQ = variableByKeyQuery // p9
export const PLA = pageLoadAtom // qA
export const SBKQ = styleByKeyQuery // ue
export const UHLKS = useHasLibraryKeyInSet // xm
