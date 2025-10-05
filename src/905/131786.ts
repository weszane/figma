import { permissionScopeHandler } from "../905/189185"

import { throwTypeError } from "../figma_app/465776"
import { PrimaryWorkflowEnum } from "../figma_app/633080"
import { getAssetsForNodeIds } from "../figma_app/646357"
import { Fullscreen } from "../figma_app/763686"
import { removeSpaces } from "../figma_app/930338"
import { loadSharedStyle, upsertSharedSymbolOrStateGroup } from "../figma_app/933328"

// $$u1
/**
 * mergeAssetMaps
 * Merges two asset maps (grouped by library key). Values for the same key are concatenated.
 *
 * Original name: $$u1
 */
export function mergeAssetMaps(
  nodeA: any,
  nodeB: any,
  nodeC: any,
  nodeD: any,
  nodeE: any,
  additionalMap: Record<string, any[]>,
): Record<string, any[]> {
  const baseMap = groupAssetsByLibraryKey(nodeA, nodeB, nodeC, nodeD, nodeE, /* lastArg */ undefined)
  const merged: Record<string, any[]> = { ...baseMap }

  for (const [libKey, items] of Object.entries(additionalMap)) {
    const key = libKey as string
    const existing = baseMap[key]
    if (existing)
      merged[key] = [...existing, ...items]
    else merged[key] = items
  }

  return merged
}
interface Asset { library_key?: string, [k: string]: any }
// $$p3
/**
 * groupAssetsByLibraryKey
 * Calls getAssetsForNodeIds(...) and groups returned assets by their `library_key`.
 *
 * Original name: $$p3
 */
export function groupAssetsByLibraryKey(
  arg0: any,
  arg1: any,
  arg2: any,
  arg3: any,
  arg4: any,
  arg5: any,
): Record<string, any[]> {
  

  const assets = getAssetsForNodeIds(arg0, arg1, arg2, arg3, arg4, arg5) as Asset[]
  const grouped: Record<string, Asset[]> = {}

  for (const asset of assets) {
    if (!asset.library_key)
      continue
    const key = asset.library_key
    grouped[key] ??= []
    grouped[key].push(asset)
  }

  return grouped
}

// $$m0
/**
 * replaceStyleIfContentHash
 * If the provided style metadata has a content_hash, loads the shared style and replaces all uses
 * via Fullscreen.swapAllUsesOfStyle under the "replace-libraries" permission scope.
 *
 * Resolves when replacement is allowed/successful, rejects otherwise.
 *
 * Original name: $$m0
 */
export function replaceStyleIfContentHash(
  styleMeta: { content_hash?: unknown, key?: string },
  styleToLoad: any,
  extraArg: any,
  dispatchLoad: (p: any) => void,
): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!styleMeta?.content_hash) {
      resolve()
      return
    }

    dispatchLoad(
      loadSharedStyle({
        style: styleToLoad,
        callback: (loadedStyle: any) => {
          // permissionScopeHandler.user returns a truthy/falsey value in original code context
          const ok = permissionScopeHandler.user("replace-libraries", () =>
            Fullscreen.swapAllUsesOfStyle(styleMeta.key, loadedStyle, extraArg))
          ok ? resolve() : reject()
        },
        omitFullscreenCommit: true,
      }),
    )
  })
}

// $$h2
/**
 * upsertAndSwapComponentOrStateGroup
 * Upserts a shared symbol or state group and, if a new GUID is returned, swaps all instances
 * in Fullscreen (under "replace-libraries" permission).
 *
 * Original name: $$h2
 */
export async function upsertAndSwapComponentOrStateGroup(localId: string, item: any): Promise<void> {
  const result = await upsertSharedSymbolOrStateGroup(item)
  const newGuid = result?.newSymbolOrStateGroupGuid
  if (newGuid) {
    permissionScopeHandler.user("replace-libraries", () => {
      Fullscreen.swapAllInstancesOfComponentOrStateGroup(
        localId,
        newGuid,
        item.type === PrimaryWorkflowEnum.COMPONENT ? "" : item.default_state_key,
      )
    })
  }
}

// $$g6
/**
 * buildLibraryLookupMap
 * Builds lookup maps from a remote library payload to local items.
 *
 * - Creates quick-lookup objects keyed by removeSpaces(name) for components, stateGroups, and styles.
 * - Returns a pair of Maps:
 *   - components: Map<localItem, matchedRemoteItem | null>
 *   - styles: Map<localStyleItem, matchedRemoteStyle | null>
 *
 * Original name: $$g6
 */
export function buildLibraryLookupMap(remote: { components: any[], stateGroups: any[], styles: any[] }, local: { components: any[], stateGroups: any[], styles: any[] }) {
  const componentsByName: Record<string, any> = Object.create(null)
  const stateGroupsByName: Record<string, any> = Object.create(null)
  const stylesByTypeAndName: Record<string, Record<string, any>> = Object.create(null)

  for (const comp of remote.components) componentsByName[removeSpaces(comp.name)] = comp
  for (const sg of remote.stateGroups) stateGroupsByName[removeSpaces(sg.name)] = sg

  for (const style of remote.styles) {
    const { name, style_type } = style
    const byType = stylesByTypeAndName[style_type] || Object.create(null)
    byType[removeSpaces(name)] = style
    stylesByTypeAndName[style_type] = byType
  }

  const result = {
    components: new Map<any, any>(),
    styles: new Map<any, any>(),
  }

  for (const localItem of [...local.components, ...local.stateGroups]) {
    const match = stateGroupsByName[removeSpaces(localItem.name)] || componentsByName[removeSpaces(localItem.name)] || null
    result.components.set(localItem, match)
  }

  for (const localStyle of local.styles) {
    const match = stylesByTypeAndName[localStyle.style_type]?.[removeSpaces(localStyle.name)] || null
    result.styles.set(localStyle, match)
  }

  return result
}

// $$f4
/**
 * sortByName
 * Returns a new array sorted by the `name` property (ascending).
 *
 * Original name: $$f4
 */
export function sortByName<T extends { name: string }>(items: Iterable<T>) {
  return [...items].sort((a, b) => (a.name < b.name ? -1 : 1))
}

// $$_5
/**
 * separateItemsByType
 * Categorizes an array of items into { components, stateGroups, styles } according to PrimaryWorkflowEnum.
 *
 * Original name: $$_5
 */
export function separateItemsByType(items: any[] = []) {
  const categorized = {
    components: [] as any[],
    stateGroups: [] as any[],
    styles: [] as any[],
  }

  for (const item of sortByName(items)) {
    if (item.type === PrimaryWorkflowEnum.STYLE) {
      categorized.styles.push(item)
    }
    else if (item.type === PrimaryWorkflowEnum.STATE_GROUP) {
      categorized.stateGroups.push(item)
    }
    else if (item.type === PrimaryWorkflowEnum.VARIABLE_SET || item.type === PrimaryWorkflowEnum.VARIABLE) {
      // keep as-is (no placement in this categorization)
    }
    else if (item.type === PrimaryWorkflowEnum.COMPONENT) {
      categorized.components.push(item)
    }
    else if (item.type === PrimaryWorkflowEnum.MODULE) {
      // modules are ignored in this categorization
    }
    else {
      throwTypeError(item, "Unhandled item type")
    }
  }

  return categorized
}

// Preserve original exported identifiers as aliases to the refactored functions
export const $l = replaceStyleIfContentHash // $$m0
export const MV = mergeAssetMaps // $$u1
export const RJ = upsertAndSwapComponentOrStateGroup // $$h2
export const TE = groupAssetsByLibraryKey // $$p3
export const VV = sortByName // $$f4
export const px = separateItemsByType // $$_5
export const q = buildLibraryLookupMap // $$g6
