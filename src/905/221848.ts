import { useMemo } from 'react'
import { selectWithShallowEqual } from '../905/103090'
import { N } from '../905/281143'
import { getBasename } from '../905/309735'
import { useMultipleLibraryMetadata } from '../905/726668'
import { $1, oV } from '../figma_app/76115'
import { getComponentBreadcrumbs, getFullComponentBreadcrumbs, memoizedProcessComponentsAndStateGroups, processLocalComponents } from '../figma_app/80990'
import { VL } from '../figma_app/112055'
import { useSubscribedLibraryKeys } from '../figma_app/155728'
import { flattenAssetsByTeam, getNonDeletedAssets } from '../figma_app/646357'
import { sortByPropertyWithOptions, sortByWithOptions } from '../figma_app/656233'
import { isExamplePreset } from '../figma_app/915774'

/**
 * Enum for drilldown order.
 * @originalName $$g5
 */
export enum DrilldownOrder {
  SUBPATHS_FIRST = 0,
  COMPONENTS_FIRST = 1,
}

/**
 * Flattens nested drilldown items into a single array of leaf items.
 *
 * @param items Drilldown items
 * @returns Array of leaf items
 * @originalName f
 */
export function flattenDrilldownItems(items: any[]): any[] {
  const result: any[] = []
  for (const item of items) {
    if (item.type === 'LEAF') {
      result.push(item)
    }
    else {
      result.push(...flattenDrilldownItems(item.children))
    }
  }
  return result
}

/**
 * Builds a nested drilldown structure from component items.
 * @param items Component items
 * @param order Drilldown order
 * @param flattenSubpaths Whether to flatten subpaths
 * @returns Nested drilldown structure
 * @originalName _
 */
export function buildDrilldownStructure(items: any[], order: DrilldownOrder, flattenSubpaths: boolean): any[] {
  if (items.length === 0)
    return []
  const root = { subpaths: Object.create(null), items: [] }
  for (const item of items) {
    const breadcrumbs = getComponentBreadcrumbs(item, items)
    let node = root
    for (const crumb of breadcrumbs) {
      if (!node.subpaths[crumb]) {
        node.subpaths[crumb] = { subpaths: Object.create(null), items: [] }
      }
      node = node.subpaths[crumb]
    }
    node.items.push(item)
  }
  const buildTree = (node: any): any[] => {
    const result: any[] = []
    for (const item of node.items) {
      result.push({
        type: 'LEAF',
        displayText: getBasename(item.name),
        item,
        id: item.library_key + item.node_id,
      })
    }
    for (const subpath in node.subpaths) {
      result.push({
        type: 'SUBPATH',
        displayText: subpath,
        children: buildTree(node.subpaths[subpath]),
        id: subpath,
      })
    }
    sortByWithOptions(result, e => `${e.type === 'SUBPATH' ? order : ~order + 2}-${e.displayText}`, {
      useExpensiveNaturalComparison: true,
    })
    return result
  }
  const tree = buildTree(root)
  return flattenSubpaths ? flattenDrilldownItems(tree) : tree
}

/**
 * Groups assets by their containing frame's page, then builds drilldown structure.
 * @param items Asset items
 * @param order Drilldown order
 * @param flattenSubpaths Whether to flatten subpaths
 * @returns Drilldown structure grouped by page
 * @originalName A
 */
export function groupAssetsByPage(items: any[], order: DrilldownOrder, flattenSubpaths: boolean): any[] {
  const pageGroups: Record<string, any[]> = {}
  const pageIdToName: Record<string, string> = {}
  const noPageItems: any[] = []
  for (const item of items) {
    const pageId = item.containing_frame?.pageId
    const pageName = item.containing_frame?.pageName?.trim() || item.containing_frame?.pageName
    if (!pageId || !pageName) {
      noPageItems.push(item)
      continue
    }
    if (Object.prototype.hasOwnProperty.call(pageGroups, pageName)) {
      pageGroups[pageName].push(item)
    }
    else {
      pageGroups[pageName] = [item]
    }
    pageIdToName[pageId] = pageName
  }
  if (noPageItems.length > 0) {
    const keys = Object.keys(pageGroups)
    let target: any[] | null = null
    if (keys.length === 1) {
      target = pageGroups[keys[0]] || null
    }
    else if (pageIdToName[VL]) {
      target = pageGroups[pageIdToName[VL]] || null
    }
    if (target !== null) {
      target.push(...noPageItems)
    }
  }
  const result: any[] = []
  for (const [pageName, group] of Object.entries(pageGroups)) {
    if (Object.keys(pageGroups).length === 1) {
      return buildDrilldownStructure(group, order, flattenSubpaths)
    }
    result.push({
      type: 'SUBPATH',
      displayText: pageName || '',
      children: buildDrilldownStructure(group, order, flattenSubpaths),
      id: pageName || '',
    })
  }
  sortByPropertyWithOptions(result, 'displayText', {
    useExpensiveNaturalComparison: true,
  })
  return result
}

/**
 * Returns drilldown items for non-deleted assets.
 * @param components Component assets
 * @param order Drilldown order
 * @param flattenSubpaths Whether to flatten subpaths
 * @returns Drilldown items
 * @originalName $$y1
 */
export function getDrilldownItems(components: any[], order: DrilldownOrder, flattenSubpaths: boolean): any[] {
  return groupAssetsByPage(getNonDeletedAssets(memoizedProcessComponentsAndStateGroups(components)), order, flattenSubpaths)
}

/**
 * Hook to get published library items and root drilldown items by library key.
 * @param params Parameters
 * @returns Published items and root drilldown items
 * @originalName $$b6
 */
export function usePublishedLibraryItems({
  libraryKeyBackingSelectedItems,
  order,
  libraryMetadataMap,
  flattenSubpaths,
}: {
  libraryKeyBackingSelectedItems: string
  order: DrilldownOrder
  libraryMetadataMap: any
  flattenSubpaths: boolean
}) {
  const { subscribedFileDataByLibraryKey, hubFilesByLibraryKey } = N() as { subscribedFileDataByLibraryKey: any, hubFilesByLibraryKey: any }
  const { library, openFile } = selectWithShallowEqual(e => ({ library: (e as any).library, openFile: (e as any).openFile }))

  // Helper to get all subscribed items by library key
  const getSubscribedItemsByLibraryKey = (
    library: any,
    fileDataByLibraryKey: any,
    hubFilesByLibraryKey: any,
    openFile: any,
    selectedLibraryKey: string,
  ) => {
    const { libraryKeyToSubscribedItems } = $1({ library, fileDataByLibraryKey })
    const { libraryKeyToSubscribedItems: hubSubscribedItems } = oV({ library, hubFilesByLibraryKey })
    return useMemo(() => {
      const allSubscribed: Record<string, any[]> = {
        ...libraryKeyToSubscribedItems,
        ...hubSubscribedItems,
      }
      if (
        selectedLibraryKey != null
        && selectedLibraryKey !== openFile?.libraryKey
        && !(selectedLibraryKey in allSubscribed)
      ) {
        const teamComponents = flattenAssetsByTeam(library.publishedByLibraryKey.components)
        const teamStateGroups = flattenAssetsByTeam(library.publishedByLibraryKey.stateGroups)
        const components = teamComponents[selectedLibraryKey] ?? {}
        const stateGroups = teamStateGroups[selectedLibraryKey] ?? {}
        allSubscribed[selectedLibraryKey] = [
          ...Object.values(processLocalComponents(components)),
          ...Object.values(stateGroups),
        ]
      }
      return allSubscribed
    }, [libraryKeyToSubscribedItems, hubSubscribedItems, selectedLibraryKey, openFile?.libraryKey, library.publishedByLibraryKey.components, library.publishedByLibraryKey.stateGroups])
  }

  const publishedLibraryItemsByLibraryKey = getSubscribedItemsByLibraryKey(
    library,
    subscribedFileDataByLibraryKey,
    hubFilesByLibraryKey,
    openFile,
    libraryKeyBackingSelectedItems,
  )

  const rootDrilldownItemsByLibraryKey = useMemo(() => {
    const keys = Object.keys(publishedLibraryItemsByLibraryKey).sort((a, b) => {
      const nameA = libraryMetadataMap[a]?.name ?? ''
      const nameB = libraryMetadataMap[b]?.name ?? ''
      return nameA.localeCompare(nameB)
    })
    const result: Record<string, any[]> = {}
    for (const key of keys) {
      let items = publishedLibraryItemsByLibraryKey[key]
      if (libraryMetadataMap[key]?.isHubFile) {
        items = items.filter((item: any) => !isExamplePreset(item, { isPreset: true }))
      }
      result[key] = groupAssetsByPage(items, order, flattenSubpaths)
    }
    return result
  }, [flattenSubpaths, libraryMetadataMap, order, publishedLibraryItemsByLibraryKey])

  return useMemo(() => ({
    publishedLibraryItemsByLibraryKey,
    rootDrilldownItemsByLibraryKey,
  }), [publishedLibraryItemsByLibraryKey, rootDrilldownItemsByLibraryKey])
}

/**
 * Creates a leaf drilldown item from a component.
 * @param component Component
 * @returns Leaf drilldown item
 * @originalName $$v2
 */
export function createLeafDrilldownItem(component: any) {
  return {
    type: 'LEAF',
    item: component,
    displayText: component.name,
    id: component.library_key + component.node_id,
  }
}

/**
 * Enum for select/deselect actions.
 * @originalName $$I4
 */
export enum SelectAction {
  SELECT = 'SELECT',
  DESELECT = 'DESELECT',
}

/**
 * Returns tooltip data for a component.
 * @param component Component
 * @param options Options
 * @returns Tooltip data
 * @originalName $$E8
 */
export function getComponentTooltipData(component: any, options?: { hideName?: boolean }) {
  return {
    'data-tooltip': options?.hideName
      ? component.description?.trim()
      : `${getBasename(component.name)}\n\n${component.description}`.trim(),
    'data-tooltip-text-left': component.description != null,
    'data-tooltip-max-width': 240,
  }
}

/**
 * Gets the common breadcrumbs for a list of components.
 * @param components Components
 * @param allComponents All components
 * @returns Array of common breadcrumbs
 * @originalName $$x3
 */
export function getCommonComponentBreadcrumbs(components: any[], allComponents: any[]): string[] {
  let common: string[] | undefined
  for (let i = 0; i < components.length; i++) {
    const breadcrumbs = getFullComponentBreadcrumbs(components[i], allComponents)
    if (!common) {
      common = breadcrumbs
      continue
    }
    if (common.length > breadcrumbs.length) {
      common = common.slice(0, breadcrumbs.length)
    }
    for (let j = 0; j < breadcrumbs.length; j++) {
      if (common[j] !== breadcrumbs[j]) {
        common = common.slice(0, j)
        break
      }
    }
    if (common.length === 0)
      return []
  }
  return common ?? []
}

/**
 * Returns the first leaf item from a drilldown structure.
 * @param drilldown Drilldown item
 * @returns First leaf item or null
 * @originalName $$S0
 */
export function getFirstLeafItem(drilldown: any): any {
  if (drilldown.type === 'LEAF')
    return drilldown.item
  const queue = [...drilldown.children]
  while (queue.length > 0) {
    const item = queue.shift()
    if (item.type === 'LEAF')
      return item.item
    queue.push(...item.children)
  }
  return null
}

/**
 * Hook to get library metadata loading state and map.
 * @param selectedLibraryKey Selected library key
 * @returns Loading state and metadata map
 * @originalName $$w7
 */
export function useLibraryMetadata(selectedLibraryKey?: string) {
  const subscribedKeys = useSubscribedLibraryKeys()
  const keys = useMemo(() => selectedLibraryKey ? [...subscribedKeys, selectedLibraryKey] : [...subscribedKeys], [selectedLibraryKey, subscribedKeys])
  const metadata = useMultipleLibraryMetadata(keys)
  return useMemo(() => ({
    libraryMetadataLoading: metadata.status === 'loading',
    libraryMetadataMap: metadata?.data ?? {},
  }), [metadata?.data, metadata.status])
}

// Export aliases for backward compatibility and refactored names
export const Bx = getFirstLeafItem // $$S0
export const Dr = getDrilldownItems // $$y1
export const Kk = createLeafDrilldownItem // $$v2
export const OK = getCommonComponentBreadcrumbs // $$x3
export const Wu = SelectAction // $$I4
export const Wx = DrilldownOrder // $$g5
export const Xx = usePublishedLibraryItems // $$b6
export const jB = useLibraryMetadata // $$w7
export const pf = getComponentTooltipData // $$E8
