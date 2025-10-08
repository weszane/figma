import { getFileKey } from '../905/412913'
import { createObjectUrl } from '../905/491806'
import { SourceDirection, ViewType } from '../905/535806'
import { A as _$$A } from '../905/639174'
import { defaultColorManipulator } from '../905/713722'
import { logWarning } from '../905/714362'
import { sessionLocalIDToString } from '../905/871411'
import { sendWithRetry } from '../905/910117'
import { DiffManager } from '../905/985490'
import { A as SVG } from '../2854/317197'
import { A as SVG1 } from '../2854/950417'
import { A as SVG2 } from '../2854/957401'
import { kLz, vPu } from '../figma_app/27776'
import { isColorDark } from '../figma_app/191804'
import { getImageManager } from '../figma_app/624361'
import { batchFetchFiles, fetchStylesByKeys } from '../figma_app/646357'
import { filterNotNullish } from '../figma_app/656233'
import { GitReferenceType, ImageExportType, LibraryUpdateStatus, RelationType, SceneGraphHelpers, Thumbnail } from '../figma_app/763686'
import { parsePxInt } from '../figma_app/783094'
import { partition, chunk, uniq } from 'lodash-es'

// Origin: /Users/allen/github/fig/src/905/432493.ts
// Refactored: Renamed variables, added TypeScript types/interfaces, simplified logic, added comments, improved readability and modularity.

// --- Assumed dependencies ---
// - lodash partition, chunk, uniq
// - External modules as imported above

// --- Type Definitions ---

interface ImageMeta {
  node_id: string
  img_url: string
}

interface GenerateImagesResponse {
  images: ImageMeta[]
}

interface ThumbnailResult {
  image: string
  width: number
  height: number
}

interface Node {
  id: string
  isStyle?: boolean
  backgroundColor?: string
  [key: string]: any
}

interface DisplayNode {
  guid: string
  styleType?: string
  type?: string
  key?: string
  layoutGrids?: any[]
  name?: string
  internalOnly?: boolean
  [key: string]: any
}

interface MainChunk {
  phase: LibraryUpdateStatus
  displayNode: DisplayNode
  styleKey?: string
  componentLibraryKey?: string
  canvasId?: string
  [key: string]: any
}

interface DiffChunk {
  mainChunk: MainChunk
  type?: string
  basisParentHierarchyGuids?: string[]
  parentHierarchyGuids?: string[]
  diffType?: GitReferenceType
  styleKey?: string
  componentLibraryKey?: string
  canvasIsInternal?: boolean
  [key: string]: any
}

interface PageInfo {
  name: string
  backgroundColor: string
}

interface DisplayGroupMap {
  [key: string]: DiffChunk[]
}

interface NumberedDisplayGroupMap {
  [key: string]: (DiffChunk & { index: number })[]
}

interface NumberedDisplayGroupsResult {
  numberedDisplayGroupMap: NumberedDisplayGroupMap
  numberedDisplayGroups: (DiffChunk & { index: number })[]
}

interface MergeResultImagesOptions {
  branchKey: string
  sourceKey: string
  branchModalTrackingId: string
}

interface StyleKeyToLibraryKeyMap {
  [key: string]: string
}

interface StyleKeyToFileKeyMap {
  [key: string]: string
}

interface StyleLibraryResult {
  styleKeyToLibraryKey: StyleKeyToLibraryKeyMap
  styleKeyToFileKey: StyleKeyToFileKeyMap
}

// --- Utility Functions ---

// Generate images for merge diff nodes
async function generateImages(direction: SourceDirection, fileKey: string, payload: object): Promise<ImageMeta[]> {
  const {
    data: {
      meta: { images },
    },
  } = await sendWithRetry.post(
    `/api/file_diff/file_merge/${direction}/${fileKey}/generate_images`,
    payload,
    { retryCount: 2 },
  )
  return images
}

// Generate thumbnails for nodes
export function generateThumbnails({
  nodes,
  width,
  height,
  scale,
}: {
  nodes: Node[]
  width?: number
  height?: number
  scale?: number
}): (ThumbnailResult | null)[] {
  return nodes.map((node) => {
    let clearColor: string | undefined
    if (!node.isStyle) {
      clearColor = node.backgroundColor ?? DEFAULT_BACKGROUND_COLOR
    }
    const [thumbMeta, imageData] = Thumbnail.generateThumbnailForNode(
      node.id,
      width || 0,
      height || 0,
      2,
      {
        scale: scale ?? (width && height ? undefined : 2),
        type: 'UNCOMPRESSED',
        clearColor,
        renderDefaultStateForSubscribedStateGroups: true,
      },
    )
    return imageData.length
      ? {
          image: imageData,
          width: thumbMeta.width,
          height: thumbMeta.height,
        }
      : null
  })
}

// Get immediate parent hierarchy node change
export function getImmediateParentHierarchyNodeChange(chunk: DiffChunk): any {
  let parent = DiffManager.getImmediateParentHierarchyNodeChange(chunk, RelationType.PARENT)
  if (parent)
    return parent
  parent = DiffManager.getImmediateParentHierarchyNodeChange(chunk, RelationType.BASIS_PARENT)
  if (parent)
    return parent
}

// Wait for all images under a node to load, with timeout
async function waitForImagesToLoad(node: any, timeoutMs: number): Promise<void> {
  let timeoutHandle: NodeJS.Timeout
  const timeoutPromise = new Promise<void>((resolve) => {
    timeoutHandle = setTimeout(() => {
      logWarning('merge', 'gave up waiting on images')
      resolve()
    }, timeoutMs)
  })
  const loadPromise = getImageManager().loadAllImagesUnder(
    [node],
    ImageExportType.NON_ANIMATED_ONLY,
    'merge.waitForImagesToLoad',
  )
  await Promise.race([timeoutPromise, loadPromise])
  clearTimeout(timeoutHandle)
}

// Generate merge result images for removed nodes
function getMergeResultImages(nodes: { id: string, styleType?: string }[], options: MergeResultImagesOptions, width: number, height: number): Promise<string[]> {
  const startTime = performance.now()
  const generateImage = async (node: { id: string }) => {
    await waitForImagesToLoad({ id: node.id }, 30000)
    const [, imageData] = Thumbnail.generateThumbnailForNode(
      node.id,
      width || 0,
      height || 0,
      2,
      {
        scale: width && height ? undefined : 2,
        type: 'PNG',
      },
    )
    return createObjectUrl(imageData)
  }
  const nodeIds = nodes.map(n => n.id)
  if (nodeIds.length > 0) {
    const durationMs = performance.now() - startTime
    DiffManager.trackGranularLoadTime({
      durationMs,
      functionName: 'getMergeResultImages',
      nodeIds: nodeIds.sort().join(','),
      ...options,
    })
  }
  return Promise.all(nodes.map(generateImage))
}

// Main function for merge result images
export async function getMergeResultImagesForChunks(
  chunks: DiffChunk[],
  branchKey: string,
  sourceKey: string,
  checkpointKey: string,
  branchModalTrackingId: string,
): Promise<[Promise<Record<string, string>>, Promise<Record<string, string | null>>]> {
  // Partition chunks into removed and others
  const [removedChunks, otherChunks] = partition(chunks, chunk =>
    chunk.mainChunk.phase === LibraryUpdateStatus.REMOVED)

  // Prepare requests for non-removed chunks
  const imageRequests = (() => {
    const direction = SourceDirection.FROM_SOURCE
    const fileKey = branchKey
    const nodeIds = removedChunks.map(chunk =>
      sessionLocalIDToString(chunk.mainChunk.displayNode.guid),
    )
    const resolution = ViewType.SUMMARY
    const maxChunksPerRequest = 50
    if (nodeIds.length === 0)
      return []
    return chunk(nodeIds, maxChunksPerRequest).map((nodeIdChunk: any[]) =>
      generateImages(direction, fileKey, {
        node_ids: nodeIdChunk.join(','),
        checkpoint_key: checkpointKey,
        resolution,
      }).then((images) => {
        const result: Record<string, ImageMeta | null> = {}
        for (const id of nodeIdChunk) result[id] = null
        for (const img of images) result[img.node_id] = img
        return result
      }),
    )
  })()

  // Generate thumbnails for other chunks
  const thumbnailNodes = otherChunks.map(chunk => ({
    id: sessionLocalIDToString(chunk.mainChunk.displayNode.guid),
    styleType: chunk.mainChunk.displayNode.styleType,
  }))
  const thumbnailWidth = 2 * parsePxInt(vPu)
  const thumbnailHeight = 2 * parsePxInt(kLz)
  const thumbnails = await getMergeResultImages(thumbnailNodes, {
    branchKey,
    sourceKey,
    branchModalTrackingId,
  }, thumbnailWidth, thumbnailHeight)

  // Map thumbnails to node IDs
  const thumbnailMap: Record<string, string> = {}
  thumbnails.forEach((imageUrl, idx) => {
    const nodeId = sessionLocalIDToString(otherChunks[idx].mainChunk.displayNode.guid)
    if (nodeId && imageUrl) {
      thumbnailMap[nodeId] = imageUrl
    }
  })

  // Map image URLs for removed chunks
  const removedChunkImagesPromise = Promise.all(imageRequests).then((results) => {
    const imageMap: Record<string, string | null> = {}
    results.forEach((result) => {
      Object.keys(result).forEach((nodeId) => {
        const meta = result[nodeId]
        imageMap[nodeId] = meta ? meta.img_url : null
      })
    })
    return imageMap
  })

  return [Promise.resolve(thumbnailMap), removedChunkImagesPromise]
}

// Default background color constant
export const DEFAULT_BACKGROUND_COLOR = 'rgba(0, 0, 0, 0.06)'

// Utility functions for style/grid checks
export function isDisplayNodeVisible(node: DiffChunk, styleNode?: DiffChunk): boolean {
  return !!node && !(styleNode && isGridStyle(styleNode))
}

export function isGridStyle(node: DiffChunk): boolean {
  return node.styleType === 'GRID' && !!node.layoutGrids?.length
}

export function isInternalCanvas(chunk: MainChunk): boolean {
  return !!(chunk.canvasIsInternal && chunk.displayNode.styleType && !chunk.styleKey)
}

export function isInternalVariableSet(chunk: MainChunk): boolean {
  return (
    chunk.canvasIsInternal
    && chunk.displayNode.type === 'VARIABLE_SET'
    && !chunk.displayNode.key
  )
}

export function hasStyleOrLibraryKey(chunk: MainChunk): boolean {
  return !!(chunk.styleKey || chunk.componentLibraryKey)
}

// Check if symbol has state group in parent hierarchy
export function hasSymbolStateGroup(chunk: DiffChunk): boolean {
  if (chunk.displayNode.type !== 'SYMBOL')
    return false
  const basisParents = chunk.basisParentHierarchyGuids.map(guid =>
    DiffManager.getParentHierarchyNodeChange(chunk.diffType, guid, RelationType.BASIS_PARENT),
  )
  for (const parent of chunk.parentHierarchyGuids.map(guid =>
    DiffManager.getParentHierarchyNodeChange(chunk.diffType, guid, RelationType.PARENT),
  )) {
    if (parent.isStateGroup)
      return true
  }
  for (const parent of basisParents) {
    if (parent.isStateGroup)
      return true
  }
  return false
}

// Get file key utility
const getFileKeyUtil = getFileKey

// Fetch style keys and library keys
async function fetchStyleKeysAndLibraries(styleKeys: string[], branchKey: string, api: any): Promise<StyleLibraryResult> {
  if (styleKeys.length === 0) {
    return {
      styleKeyToFileKey: {},
      styleKeyToLibraryKey: {},
    }
  }
  const styleKeyToLibraryKey: StyleKeyToLibraryKeyMap = {}
  const styleKeyToFileKey: StyleKeyToFileKeyMap = {};
  (await fetchStylesByKeys(api, styleKeys, branchKey)).forEach((style) => {
    styleKeyToLibraryKey[style.key] = style.library_key
    styleKeyToFileKey[style.key] = getFileKeyUtil(style)
  })
  return {
    styleKeyToLibraryKey,
    styleKeyToFileKey,
  }
}

// Fetch style and library keys for chunks
export async function fetchStyleAndLibraryKeysForChunks(
  chunks: DiffChunk[],
  branchKey: string,
  api: any,
) {
  const styleKeys = filterNotNullish(uniq(chunks.map(chunk => chunk.mainChunk.styleKey)))
  const libraryKeys = filterNotNullish(uniq(chunks.map(chunk => chunk.mainChunk.componentLibraryKey)))
  const [styleResult, libraryResult] = await Promise.all([
    fetchStyleKeysAndLibraries(styleKeys, branchKey, api),
    batchFetchFiles(libraryKeys, api),
  ])
  return {
    styleKeyToLibraryKey: styleResult,
    styleKeyToFileKey: libraryResult,
  }
}

// Get parent hierarchy node change for display node
export function getParentHierarchyNodeChangeForDisplayNode(chunk: DiffChunk): any {
  if (chunk.displayNode.type === 'CANVAS') {
    if (chunk.displayNode.internalOnly)
      chunk.displayNode.name = 'Other'
    return DiffManager.parseParentHierarchyNodeChange(chunk.displayNode)
  }
  const immediateParent = DiffManager.getImmediateParentHierarchyNodeChange(chunk, RelationType.PARENT)
  const topLevelParent = DiffManager.getTopLevelParentHierarchyNodeChange(chunk, RelationType.PARENT)
  const immediateBasisParent = DiffManager.getImmediateParentHierarchyNodeChange(chunk, RelationType.BASIS_PARENT)
  const topLevelBasisParent = DiffManager.getTopLevelParentHierarchyNodeChange(chunk, RelationType.BASIS_PARENT)

  if (immediateParent && !immediateParent.internalOnly && topLevelParent)
    return topLevelParent
  if (immediateBasisParent && !immediateBasisParent.internalOnly && topLevelBasisParent)
    return topLevelBasisParent

  const parent = immediateParent ?? immediateBasisParent
  if (!parent)
    throw new Error(`Chunk ${sessionLocalIDToString(chunk.displayNode.guid)} should have a page`)
  parent.name = 'Other'
  return parent
}

// Get background color for a page node
export function getPageBackgroundColor(
  pageBackgrounds: Record<string, { backgroundColor?: string }>,
  chunk: DiffChunk,
): string {
  const parentNode = getParentHierarchyNodeChangeForDisplayNode(chunk)
  const pageId = parentNode.guid || ''
  if (pageBackgrounds[pageId]?.backgroundColor) {
    return pageBackgrounds[pageId].backgroundColor
  }
  if (parentNode?.backgroundColor) {
    return defaultColorManipulator.format({
      r: parentNode.backgroundColor.red,
      g: parentNode.backgroundColor.green,
      b: parentNode.backgroundColor.blue,
      a: parentNode.backgroundColor.alpha,
    })
  }
  return DEFAULT_BACKGROUND_COLOR
}

// Number display groups and assign indices
function numberDisplayGroups(displayGroups: DisplayGroupMap, startIndex: number, keys?: string[]): NumberedDisplayGroupsResult {
  const resultMap: NumberedDisplayGroupMap = {}
  const resultList: (DiffChunk & { index: number })[] = []
  const groupKeys = keys || Object.keys(displayGroups)
  let index = startIndex
  for (const key of groupKeys) {
    resultMap[key] = []
    for (const chunk of displayGroups[key]) {
      const numberedChunk = { ...chunk, index }
      resultMap[key].push(numberedChunk)
      resultList.push(numberedChunk)
      index++
    }
  }
  return {
    numberedDisplayGroupMap: resultMap,
    numberedDisplayGroups: resultList,
  }
}

// Sort page IDs by parent index position
function sortPageIdsByParentIndex(displayGroups: DisplayGroupMap): string[] {
  const indexToKey: Record<string, string> = {}
  Object.keys(displayGroups).forEach((key) => {
    for (const chunk of displayGroups[key]) {
      const mainChunk = chunk.mainChunk
      const parentIndex = DiffManager.getTopLevelParentHierarchyNodeChange(mainChunk, RelationType.PARENT)?.parentIndexPosition
      if (parentIndex) {
        indexToKey[parentIndex] = key
        break
      }
    }
  })
  const sortedKeys = Object.keys(indexToKey).sort().map(idx => indexToKey[idx])
  return sortedKeys.filter(key => key in displayGroups).concat(
    Object.keys(displayGroups).filter(key => !sortedKeys.includes(key)),
  )
}

// Group display chunks by page, style, variable set, and library
export function groupDisplayChunks(
  chunks: DiffChunk[],
  startIndex: number,
  styleKeyToLibraryKey: Record<string, string>,
  direction: SourceDirection,
) {
  // Grouping logic
  const displayGroupsByPage: DisplayGroupMap = {}
  const pageIdToInfo: Record<string, PageInfo> = {}
  const displayGroupsByStyle: DisplayGroupMap = {}
  const displayGroupsByVariableSet: DisplayGroupMap = {}
  const displayGroupsByLibrary: DisplayGroupMap = {}

  chunks.forEach((chunk) => {
    const mainChunk = chunk.mainChunk
    if (isInternalCanvas(mainChunk) && mainChunk.displayNode.styleType) {
      const styleType = mainChunk.displayNode.styleType
      if (!displayGroupsByStyle[styleType])
        displayGroupsByStyle[styleType] = []
      displayGroupsByStyle[styleType].push(chunk)
      return
    }
    if (chunk.type === 'variable-collection' && isInternalVariableSet(mainChunk)) {
      const guid = sessionLocalIDToString(mainChunk.displayNode.guid)
      if (guid == null)
        return
      if (!displayGroupsByVariableSet[guid])
        displayGroupsByVariableSet[guid] = []
      displayGroupsByVariableSet[guid].push(chunk)
      return
    }
    if (hasStyleOrLibraryKey(mainChunk)) {
      const libraryKey = mainChunk.componentLibraryKey || styleKeyToLibraryKey[mainChunk.styleKey!]
      if (!displayGroupsByLibrary[libraryKey])
        displayGroupsByLibrary[libraryKey] = []
      displayGroupsByLibrary[libraryKey].push(chunk)
      return
    }
    if (!displayGroupsByPage[mainChunk.canvasId!])
      displayGroupsByPage[mainChunk.canvasId!] = []
    displayGroupsByPage[mainChunk.canvasId!].push(chunk)

    // Set page info if not removed
    if (!pageIdToInfo[mainChunk.canvasId!] || mainChunk.phase !== LibraryUpdateStatus.REMOVED) {
      const parentNode = getParentHierarchyNodeChangeForDisplayNode(mainChunk)
      const bgColor = parentNode.backgroundColor
        ? defaultColorManipulator.format({
            r: parentNode.backgroundColor.red,
            g: parentNode.backgroundColor.green,
            b: parentNode.backgroundColor.blue,
            a: parentNode.backgroundColor.alpha,
          })
        : DEFAULT_BACKGROUND_COLOR
      pageIdToInfo[mainChunk.canvasId!] = {
        name: parentNode.name,
        backgroundColor: bgColor,
      }
    }
  })

  // Override background color from scene graph if direction is FROM_SOURCE
  if (direction === SourceDirection.FROM_SOURCE) {
    for (const pageId of Object.keys(pageIdToInfo)) {
      const sceneBgColor = SceneGraphHelpers.getNodePageBackgroundColor(pageId)
      if (sceneBgColor) {
        pageIdToInfo[pageId] = {
          ...pageIdToInfo[pageId],
          backgroundColor: sceneBgColor,
        }
      }
    }
  }

  // Number and sort display groups
  const sortedPageIds = sortPageIdsByParentIndex(displayGroupsByPage)
  const { numberedDisplayGroupMap: pageGroupMap, numberedDisplayGroups: pageGroups } = numberDisplayGroups(
    displayGroupsByPage,
    startIndex,
    sortedPageIds,
  )
  let allDisplayGroups: (DiffChunk & { index: number })[] = [...pageGroups]
  let index = startIndex + pageGroups.length

  const { numberedDisplayGroupMap: styleGroupMap, numberedDisplayGroups: styleGroups } = numberDisplayGroups(
    displayGroupsByStyle,
    index,
  )
  allDisplayGroups = allDisplayGroups.concat(styleGroups)
  index += styleGroups.length

  const { numberedDisplayGroupMap: variableSetGroupMap, numberedDisplayGroups: variableSetGroups } = numberDisplayGroups(
    displayGroupsByVariableSet,
    index,
  )
  allDisplayGroups = allDisplayGroups.concat(variableSetGroups)
  index += variableSetGroups.length

  const { numberedDisplayGroupMap: libraryGroupMap, numberedDisplayGroups: libraryGroups } = numberDisplayGroups(
    displayGroupsByLibrary,
    index,
  )
  allDisplayGroups = allDisplayGroups.concat(libraryGroups)

  return {
    allDisplayGroups,
    displayGroupsByPage: pageGroupMap,
    pageIdToInfo,
    displayGroupsByStyle: styleGroupMap,
    displayGroupsByVariableSet: variableSetGroupMap,
    displayGroupsByLibrary: libraryGroupMap,
    sortedPageIds,
  }
}

// Partition variant chunks into modified and unmodified
export function partitionVariantChunks(variantGroup: {
  variantChunks: DiffChunk[]
}): {
  modifiedVariants: (DiffChunk & { index: number })[]
  unmodifiedVariants: (DiffChunk & { index: number })[]
} {
  return {
    modifiedVariants: variantGroup.variantChunks
      .filter(chunk => chunk.mainChunk.phase !== LibraryUpdateStatus.UNMODIFIED)
      .map((chunk, idx) => ({ ...chunk, index: idx })),
    unmodifiedVariants: variantGroup.variantChunks
      .filter(chunk => chunk.mainChunk.phase === LibraryUpdateStatus.UNMODIFIED)
      .map((chunk, idx) => ({ ...chunk, index: idx })),
  }
}

// Get SVG for layout grids
export function getSVGForLayoutGrid(node: { layoutGrids?: any[] }): any {
  const { layoutGrids } = node
  let svg = SVG2
  if (layoutGrids?.length === 1) {
    const grid = layoutGrids[0]
    if (grid.pattern === 'STRIPES') {
      svg = grid.axis === 'Y' ? SVG1 : SVG
    }
  }
  return svg
}

// Utility checks
export function isValidStyleType(styleType: string): boolean {
  return !!styleType && styleType !== 'NONE' && styleType !== undefined
}

export function shouldShowColor(
  color: string,
  backgroundColor: string,
  styleType: string,
): boolean {
  const isDark = backgroundColor && isColorDark(backgroundColor)
  return !(styleType === 'GRID' || styleType === 'EFFECT') && (isDark || (color && (styleType !== 'NONE' || styleType !== undefined)))
}

// Style background helpers
export function getTextOrFillBackgroundStyle(chunk: DiffChunk, background: any): Record<string, any> {
  return getBackgroundStyle(chunk, background, true)
}

export function getEffectOrGridBackgroundStyle(chunk: DiffChunk, background: any): Record<string, any> {
  return getBackgroundStyle(chunk, background, false)
}

export function getBackgroundStyle(chunk: DiffChunk, background: any, isLarge: boolean): Record<string, any> {
  const style: Record<string, any> = {}
  const styleType = chunk.displayNode.styleType
  if (styleType === 'TEXT' || styleType === 'FILL') {
    // No background image for text/fill
  }
  else if (styleType === 'EFFECT' || styleType === 'GRID') {
    style.backgroundImage = `url('${_$$A()}')`
    style.backgroundSize = isLarge ? '24px' : '16px'
  }
  style.backgroundColor
    = background && typeof background !== 'string'
      ? getPageBackgroundColor(background, chunk)
      : background
  return style
}

// --- Exported aliases for compatibility ---
export const $2 = isGridStyle
export const C_ = getImmediateParentHierarchyNodeChange
export const FD = generateThumbnails
export const KZ = isValidStyleType
export const MY = hasSymbolStateGroup
export const Mt = getMergeResultImagesForChunks
export const Oh = getTextOrFillBackgroundStyle
export const Oi = hasStyleOrLibraryKey
export const PE = getPageBackgroundColor
export const Rw = isInternalCanvas
export const WE = getParentHierarchyNodeChangeForDisplayNode
export const Xp = getBackgroundStyle
export const Y1 = isInternalVariableSet
export const cs = isDisplayNodeVisible
export const ju = partitionVariantChunks
export const mT = fetchStyleAndLibraryKeysForChunks
export const on = groupDisplayChunks
export const rB = shouldShowColor
export const s$ = getSVGForLayoutGrid
export const uA = getEffectOrGridBackgroundStyle
export const yi = DEFAULT_BACKGROUND_COLOR
