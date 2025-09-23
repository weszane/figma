import { mean } from 'lodash-es'
import { debugState } from '../905/407919'
import { getFeatureFlags } from '../905/601108'
import { getVisibleArea } from '../figma_app/62612'
import { isAssetSuggestionsEnabled } from '../figma_app/144974'
import { getInitialOptions } from '../figma_app/169182'
import { SEARCH_CONFIG, SearchResultType } from '../figma_app/257779'
import { traverseChildren } from '../figma_app/387100'
import { selectCurrentFile } from '../figma_app/516028'
import { T1 } from '../figma_app/545293'
import { PrimaryWorkflowEnum } from '../figma_app/633080'
import { selectComponentAssetsMap, selectFlattenedStateGroups, selectStateGroupAssetsMap } from '../figma_app/645694'
import { FRAME_SELECTION_VERSION } from '../figma_app/663669'
import { useAppModelProperty } from '../figma_app/722362'
import { Fullscreen, ViewType } from '../figma_app/763686'
import { isSitesFileType } from '../figma_app/976749'

/**
 * Gets the anticipation configuration, defaulting to SEARCH_CONFIG if not set.
 * @returns The anticipation configuration object.
 */
export function getAnticipationConfig() {
  const initialOptions = getInitialOptions()
  if (!initialOptions.anticipation_config) {
    initialOptions.anticipation_config = SEARCH_CONFIG
  }
  return initialOptions.anticipation_config
}

/**
 * Default frame selection version constant.
 */
export const getFrameSectionVersion = () => FRAME_SELECTION_VERSION

/**
 * Default value for some configuration.
 */
export function getDefaultConfigValue(): number {
  return 2
}

/**
 * Counts visible and non-internal nodes in a tree, excluding instances.
 * @param node - The root node to traverse.
 * @returns The count of visible non-instance nodes.
 */
export function countVisibleNonInstanceNodes(node: any): number {
  let count = 0
  traverseChildren(node, (childNode) => {
    if (!childNode || childNode.isInternalOnlyNode || childNode.opacity <= 0 || !childNode.visible) {
      return 'skip'
    }

    count += 1

    // Skip traversing inside instances
    if (childNode.type === 'INSTANCE') {
      return 'skip'
    }
  })
  return count
}

/**
 * Calculates position information for a node relative to its fragment.
 * @param node - The node to calculate position for.
 * @param fragmentNode - The fragment node for reference.
 * @returns Position information including size, fragment size, and relative position.
 */
export function calculateNodePositionInfo(node: any, fragmentNode: any) {
  const nodeBounds = node.absoluteBoundingBox
  const fragmentBounds = fragmentNode.absoluteBoundingBox

  return {
    size: {
      width: nodeBounds.w,
      height: nodeBounds.h,
    },
    fragmentSize: {
      width: fragmentBounds.w,
      height: fragmentBounds.h,
    },
    relativePosition: {
      x: nodeBounds.x - fragmentBounds.x,
      y: nodeBounds.y - fragmentBounds.y,
    },
  }
}

/**
 * Calculates similarity score between two position information objects.
 * @param posInfo1 - First position information.
 * @param posInfo2 - Second position information.
 * @returns A similarity score between 0 and 1.
 */
function calculatePositionSimilarity(posInfo1: any, posInfo2: any): number {
  // Calculate center points
  const center1 = {
    x: posInfo1.relativePosition.x + posInfo1.size.width / 2,
    y: posInfo1.relativePosition.y + posInfo1.size.height / 2,
  }

  const normalizedCenter1 = {
    x: center1.x / posInfo1.fragmentSize.width,
    y: center1.y / posInfo1.fragmentSize.height,
  }

  const center2 = {
    x: posInfo2.relativePosition.x + posInfo2.size.width / 2,
    y: posInfo2.relativePosition.y + posInfo2.size.height / 2,
  }

  const normalizedCenter2 = {
    x: center2.x / posInfo2.fragmentSize.width,
    y: center2.y / posInfo2.fragmentSize.height,
  }

  // Calculate similarity (1 - normalized distance)
  const similarity = {
    x: 1 - Math.abs(normalizedCenter1.x - normalizedCenter2.x),
    y: 1 - Math.abs(normalizedCenter1.y - normalizedCenter2.y),
  }

  // Return Euclidean distance of similarity
  return Math.sqrt(similarity.x ** 2 + similarity.y ** 2)
}

/**
 * Processes asset usage information to create a standardized component info object.
 * @param params - The parameters including usage, filtering config, etc.
 * @returns Standardized component info or null if filtered out.
 */
export function processAssetUsage({
  usage,
  filteringConfig,
  subscribedLibraryKeys,
  fragment,
  targetNodePositionInfo,
}: {
  usage: any
  filteringConfig: any
  subscribedLibraryKeys: Set<string> | undefined
  fragment: any
  targetNodePositionInfo: any
}): any {
  // Check if library key exists and is subscribed
  if (!usage.libraryKey || !subscribedLibraryKeys?.has(usage.libraryKey)) {
    return null
  }

  // Create position information
  const positionInfo: ObjectOf = {
    size: {
      width: usage.positionInfo.width,
      height: usage.positionInfo.height,
    },
    fragmentSize: {
      width: fragment.width,
      height: fragment.height,
    },
    relativePosition: {
      x: usage.positionInfo.relativeX,
      y: usage.positionInfo.relativeY,
    },
  }

  // Calculate proximity score if target position is provided
  const proximityScore = targetNodePositionInfo
    ? calculatePositionSimilarity(positionInfo, targetNodePositionInfo)
    : 0

  // Filter by proximity score threshold
  if ((filteringConfig?.proximityScoreThreshold || 0) > proximityScore) {
    return null
  }

  // Add proximity score to position info
  positionInfo.proximityScore = proximityScore

  // Create result based on usage type
  switch (usage.type) {
    case 'symbol':
      return {
        fragment,
        key: usage.key,
        libraryKey: usage.libraryKey,
        positionInfo,
        type: PrimaryWorkflowEnum.COMPONENT,
      }
    case 'state_group':
      return {
        fragment,
        key: usage.key,
        libraryKey: usage.libraryKey,
        positionInfo,
        type: PrimaryWorkflowEnum.STATE_GROUP,
        stateComponentKey: usage.stateComponentKey,
      }
    default:
      return null
  }
}

/**
 * Extracts component information from a scene by traversing nodes.
 * @param params - Parameters including scene, root node, and configuration.
 * @returns Array of component information objects.
 */
export function extractComponentInfo({
  scene,
  root,
  fragment,
  targetNodePositionInfo,
  filteringConfig,
  subscribedLibraryKeys,
  includeNestedComponents,
  includeComponentProps,
}: {
  scene: any
  root: any
  fragment: any
  targetNodePositionInfo: any
  filteringConfig: any
  subscribedLibraryKeys: Set<string> | undefined
  includeNestedComponents?: boolean
  includeComponentProps: boolean
}): any[] {
  const componentInfos: any[] = []
  const skipNested = includeNestedComponents ? undefined : 'skip'
  const shouldCalculatePosition = !!targetNodePositionInfo

  traverseChildren(root, (node) => {
    // Skip invalid or invisible nodes
    if (!node || node.isInternalOnlyNode || node.opacity <= 0 || !node.visible) {
      return 'skip'
    }

    // Process instances only
    if (node.type === 'INSTANCE') {
      const instanceInfo: any = {
        fragment,
      }

      const symbolId = node.symbolId
      if (!symbolId) {
        return skipNested
      }

      // Calculate position information if needed
      if (shouldCalculatePosition) {
        const topLevelFrame = scene.get(node.findContainingTopLevelFrameOrSelf())
        const positionInfo = calculateNodePositionInfo(node, topLevelFrame)
        const proximityScore = targetNodePositionInfo
          ? calculatePositionSimilarity(positionInfo, targetNodePositionInfo)
          : 0

        // Filter by proximity score threshold
        if ((filteringConfig?.proximityScoreThreshold || 0) > proximityScore) {
          return skipNested
        }

        instanceInfo.positionInfo = {
          ...positionInfo,
          proximityScore,
        }
      }

      // Get component data
      const component = scene.get(symbolId)
      if (!component) {
        return skipNested
      }

      // Get component properties if needed
      const props = includeComponentProps ? node.componentProperties() : undefined

      // Handle state components
      if (component.isState) {
        const stateGroup = scene.get(component.containingStateGroupId)
        if (!stateGroup) {
          return skipNested
        }

        instanceInfo.type = PrimaryWorkflowEnum.STATE_GROUP
        instanceInfo.key = stateGroup.stateGroupKey
        instanceInfo.stateComponentKey = component.componentKey
        instanceInfo.libraryKey = stateGroup.sourceLibraryKey
        instanceInfo.props = props
      }
      else {
        // Handle regular components
        instanceInfo.type = PrimaryWorkflowEnum.COMPONENT
        instanceInfo.key = component.componentKey
        instanceInfo.libraryKey = component.sourceLibraryKey
        instanceInfo.props = props
      }

      // Add to results if valid
      if (
        instanceInfo.key
        && instanceInfo.libraryKey
        && instanceInfo.libraryKey.length
        && component.publishID
        && component.isSubscribedAsset
        && instanceInfo.libraryKey
        && (!subscribedLibraryKeys || subscribedLibraryKeys?.has(instanceInfo.libraryKey))
      ) {
        componentInfos.push(instanceInfo)
      }

      return skipNested
    }
  })

  return componentInfos
}

/**
 * Aggregates component usage statistics from component info array.
 * @param componentInfos - Array of component information objects.
 * @returns Aggregated statistics keyed by component key.
 */
export function aggregateComponentUsage(componentInfos: any[]): any {
  const usageStats: any = {}

  componentInfos.forEach((info) => {
    const {
      key,
      type,
      libraryKey,
      fragment,
      positionInfo,
      asset,
    } = info

    // Initialize stats for this component if not exists
    if (!usageStats[key]) {
      usageStats[key] = {
        type,
        key,
        libraryKey,
        asset,
        count: 0,
        fragmentCount: 0,
        countPerFragment: {},
        scorePerFragment: {},
        stateCounts: {},
        proximityScores: [],
        avgCountPerFragment: 0,
        avgScorePerFragment: 0,
        avgProximityScore: 0,
      }
    }

    const stats = usageStats[key]
    stats.count++

    // Collect proximity scores
    if (positionInfo) {
      stats.proximityScores.push(positionInfo.proximityScore)
    }

    // Track fragment usage
    const fragmentId = fragment ? `${fragment.file_key}.${fragment.node_id}` : null
    if (fragment && fragmentId) {
      if (!stats.countPerFragment[fragmentId]) {
        stats.countPerFragment[fragmentId] = 0
        stats.scorePerFragment[fragmentId] = fragment.score
        stats.fragmentCount++
      }
      stats.countPerFragment[fragmentId]++
    }

    // Track state component counts
    if (type === PrimaryWorkflowEnum.STATE_GROUP) {
      const { stateComponentKey } = info
      if (!stats.stateCounts[stateComponentKey]) {
        stats.stateCounts[stateComponentKey] = 0
      }
      stats.stateCounts[stateComponentKey]++
    }
  })

  // Calculate averages
  Object.values(usageStats).forEach((stats: any) => {
    const countValues = Object.values(stats.countPerFragment)
    stats.avgCountPerFragment = countValues.length > 0 ? mean(countValues) : 0

    const scoreValues = Object.values(stats.scorePerFragment)
    stats.avgScorePerFragment = scoreValues.length > 0 ? mean(scoreValues) : 0

    stats.avgProximityScore = stats.proximityScores.length > 0 ? mean(stats.proximityScores) : 0
  })

  return usageStats
}

/**
 * Analyzes component usage in a scene.
 * @param params - Parameters including scene and topLevelNode.
 * @returns Aggregated component usage statistics.
 */
export function analyzeComponentUsage({
  scene,
  topLevelNode,
}: {
  scene: any
  topLevelNode: any
}): any {
  return aggregateComponentUsage(
    extractComponentInfo({
      scene,
      root: topLevelNode,
      includeNestedComponents: true,
      includeComponentProps: false,
    } as any),
  )
}

/**
 * Ranks components based on usage statistics.
 * @param params - Parameters including componentUsage and rankingConfig.
 * @returns Array of ranked components.
 */
export function rankComponentsByUsage({
  componentUsage,
  rankingConfig,
}: {
  componentUsage: any
  rankingConfig: any
}): any[] {
  const usageValues = Object.values(componentUsage)

  // Calculate max values for normalization
  const maxValues = {
    count: Math.max(...usageValues.map((u: any) => u.count)),
    fragmentCount: Math.max(...usageValues.map((u: any) => u.fragmentCount)),
    avgCountPerFragment: Math.max(...usageValues.map((u: any) => u.avgCountPerFragment)),
    avgScorePerFragment: Math.max(...usageValues.map((u: any) => u.avgScorePerFragment)),
    avgProximityScore: Math.max(...usageValues.map((u: any) => u.avgProximityScore)),
  }

  // Calculate min values for normalization
  const minValues = {
    count: Math.min(...usageValues.map((u: any) => u.count)),
    fragmentCount: Math.min(...usageValues.map((u: any) => u.fragmentCount)),
    avgCountPerFragment: Math.min(...usageValues.map((u: any) => u.avgCountPerFragment)),
    avgScorePerFragment: Math.min(...usageValues.map((u: any) => u.avgScorePerFragment)),
    avgProximityScore: Math.min(...usageValues.map((u: any) => u.avgProximityScore)),
  }

  // Normalize and calculate scores
  return usageValues.map((usage: any) => {
    // Normalization function
    const normalize = (value: number, min: number, max: number): number => {
      return max === min ? 0 : (value - min) / (max - min)
    }

    // Calculate weighted scores
    const countScore = normalize(usage.count, minValues.count, maxValues.count) * rankingConfig.count
    const fragmentCountScore = normalize(usage.fragmentCount, minValues.fragmentCount, maxValues.fragmentCount) * rankingConfig.fragmentCount
    const avgCountPerFragmentScore = normalize(usage.avgCountPerFragment, minValues.avgCountPerFragment, maxValues.avgCountPerFragment) * rankingConfig.avgCountPerFragment
    const avgScorePerFragmentScore = normalize(usage.avgScorePerFragment, minValues.avgScorePerFragment, maxValues.avgScorePerFragment) * rankingConfig.avgScorePerFragment
    const avgProximityScoreScore = normalize(usage.avgProximityScore, minValues.avgProximityScore, maxValues.avgProximityScore) * rankingConfig.avgProximityScore

    // Total score
    const totalScore = countScore + fragmentCountScore + avgCountPerFragmentScore
      + avgScorePerFragmentScore + avgProximityScoreScore

    return {
      ...usage,
      key: usage.key,
      score: totalScore,
    }
  }).sort((a: any, b: any) => b.score - a.score)
}

/**
 * Filters component usage based on context usage.
 * @param params - Parameters including componentUsage and contextComponentUsage.
 */
export function filterComponentUsageByContext({
  componentUsage,
  contextComponentUsage,
}: {
  componentUsage: any
  contextComponentUsage: any
}): void {
  Object.values(componentUsage).forEach(({
    key,
    countPerFragment,
  }: any) => {
    const contextUsage = contextComponentUsage[key]
    if (!contextUsage) {
      return
    }

    // Calculate median count per fragment
    const fragmentCounts: number[] = Object.values(countPerFragment)
    let medianCount: number

    if (fragmentCounts.length === 0) {
      medianCount = 0
    }
    else if (fragmentCounts.length === 1) {
      medianCount = fragmentCounts[0] as number
    }
    else {
      const sortedCounts = [...fragmentCounts].sort((a: number, b: number) => a - b)
      const midIndex = Math.floor(sortedCounts.length / 2)
      medianCount = sortedCounts.length % 2 !== 0
        ? sortedCounts[midIndex]
        : ((sortedCounts[midIndex - 1] + sortedCounts[midIndex]) / 2)
    }

    // Remove component if context usage is less than median
    if (contextUsage.count < medianCount) {
      delete componentUsage[key]
    }
  })
}

/**
 * Determines if asset suggestions should be enabled.
 * @returns True if all conditions are met for enabling asset suggestions.
 */
export function shouldEnableAssetSuggestions(): boolean {
  const isAnticipationEnabled = getFeatureFlags().anticipation
  const suggest = isAssetSuggestionsEnabled()
  const canEditFile = selectCurrentFile()?.canEdit
  const isLayoutView = useAppModelProperty('topLevelMode') === ViewType.LAYOUT
  const isSitesFile = isSitesFileType()

  return (
    isAnticipationEnabled
    && suggest
    && canEditFile
    && isLayoutView
    && !!Fullscreen
    && !isSitesFile
  )
}

/**
 * Processes component information and resolves assets.
 * @param componentInfos - Array of component information objects.
 * @returns Object with updated component info and debug data.
 */
export function processComponentAssets(componentInfos: any[]): any {
  // Resolve assets for each component
  const resolvedAssets = (function (infos: any[], suggestionSource: any) {
    const state = debugState.getState()
    const componentAssetsMap = selectComponentAssetsMap(state)
    const stateGroupAssetsMap = selectStateGroupAssetsMap(state)
    const assets: any = {}

    infos.forEach(({
      type,
      key,
    }) => {
      switch (type) {
        case PrimaryWorkflowEnum.COMPONENT:
          const componentAsset = componentAssetsMap[key]
          if (componentAsset) {
            assets[key] = {
              ...componentAsset,
              suggestionSource,
            }
          }
          break
        case PrimaryWorkflowEnum.STATE_GROUP:
          const stateGroupAsset = stateGroupAssetsMap[key]
          if (stateGroupAsset) {
            assets[key] = {
              ...stateGroupAsset,
              suggestionSource,
            }
          }
          break
      }
    })

    return assets
  }(componentInfos.map(({
    key,
    type,
  }) => ({
    type,
    key,
  })), SearchResultType.FRAGMENTS))

  const flattenedStateGroups = selectFlattenedStateGroups(debugState.getState())

  const debugData = {
    asset_not_found: [],
    state_to_state_group: [],
  }

  const updatedComponentInfos: any[] = []

  componentInfos.forEach((info) => {
    const asset = resolvedAssets[info.key]

    // Handle missing assets
    if (!asset) {
      debugData.asset_not_found.push({
        before: info,
        after: null,
      })
      return
    }

    let updatedInfo = {
      ...info,
      asset,
    }

    // Handle state components that should be converted to state groups
    if (
      info.type === PrimaryWorkflowEnum.COMPONENT
      && asset.type === PrimaryWorkflowEnum.COMPONENT
      && asset.containing_frame?.containingStateGroup
    ) {
      const stateGroupId = asset.containing_frame.containingStateGroup.nodeId
      const stateGroup = stateGroupId ? flattenedStateGroups[info.libraryKey]?.[stateGroupId] : null

      if (stateGroup) {
        updatedInfo = {
          ...info,
          key: stateGroup.key,
          type: PrimaryWorkflowEnum.STATE_GROUP,
          stateComponentKey: info.key,
          asset: {
            ...stateGroup,
            suggestionSource: SearchResultType.FRAGMENTS,
          },
        }

        debugData.state_to_state_group.push({
          before: info,
          asset,
          after: updatedInfo,
        })
      }
      else {
        debugData.state_to_state_group.push({
          before: info,
          asset,
          after: null,
        })
      }
    }

    updatedComponentInfos.push(updatedInfo)
  })

  return {
    updatedComponentInfo: updatedComponentInfos,
    debugData,
  }
}

/**
 * Stringifies a point object.
 * @param point - The point to stringify.
 * @returns Stringified point or undefined if point is falsy.
 */
export function stringifyPoint(point: any): string | undefined {
  if (point) {
    return JSON.stringify({
      x: point.x,
      y: point.y,
    })
  }
  return undefined
}

/**
 * Stringifies a rectangle object.
 * @param rect - The rectangle to stringify.
 * @returns Stringified rectangle or undefined if rect is falsy.
 */
export function stringifyRectangle(rect: any): string | undefined {
  if (rect) {
    return JSON.stringify({
      x: rect.x,
      y: rect.y,
      w: rect.w,
      h: rect.h,
    })
  }
  return undefined
}

/**
 * Stringifies the visible area of a node.
 * @param node - The node to get visible area for.
 * @returns Stringified visible area.
 */
export function stringifyVisibleArea(node: any): string {
  const visibleArea = getVisibleArea(node) as Rect
  return JSON.stringify({
    x: visibleArea.x,
    y: visibleArea.y,
    w: visibleArea.width,
    h: visibleArea.height,
  })
}

/**
 * Generates a thumbnail for a node and measures duration.
 * @param node - The node to generate thumbnail for.
 * @returns Object with thumbnail and duration.
 */
export function generateThumbnailWithDuration(node: any): any {
  const startTime = Date.now()
  const thumbnail = T1(node)
  const duration = Date.now() - startTime

  return {
    thumbnail,
    duration,
  }
}

// Export aliases for backward compatibility
export const AP = processAssetUsage
export const Ag = extractComponentInfo
export const GD = getFrameSectionVersion
export const OD = getDefaultConfigValue
export const Pt = processComponentAssets
export const Sg = rankComponentsByUsage
export const ZU = generateThumbnailWithDuration
export const ay = stringifyRectangle
export const e_ = calculateNodePositionInfo
export const iG = aggregateComponentUsage
export const k1 = getAnticipationConfig
export const mA = countVisibleNonInstanceNodes
export const n1 = filterComponentUsageByContext
export const op = stringifyVisibleArea
export const r8 = shouldEnableAssetSuggestions
export const w3 = analyzeComponentUsage
export const x_ = stringifyPoint
