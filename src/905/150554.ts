import { InvalidSessionError } from '../905/203573'
import { getSingletonSceneGraph } from '../905/700578'
import { logError, logInfo } from '../905/714362'
import { generateUUIDv4 } from '../905/871474'
import { XHR } from '../905/910117'
import { ResultSourceType, SearchEventType, TimerType } from '../figma_app/257779'
import { aggregateComponentUsage, analyzeComponentUsage, calculateNodePositionInfo, countVisibleNonInstanceNodes, extractComponentInfo, filterComponentUsageByContext, generateThumbnailWithDuration, processAssetUsage, processComponentAssets, rankComponentsByUsage } from '../figma_app/407767'
import { getUUID } from '../figma_app/517115'
import { runWithConcurrency } from '../figma_app/562352'
import { getAssetKey } from '../figma_app/646357'
import { Fullscreen } from '../figma_app/763686'

interface AssetSuggestionRequest {
  node: any
  file_key: string
  type: string
  name: string
}

interface TrackingMetadata {
  session_id: string | null
  search_id: string
  node_id: string
}

interface FragmentResult {
  file_key: string
  node_id: string
  score: number
  component_usages?: any[]
  [key: string]: any
}

interface AutoSuggestConfig {
  searchByNodeType: 'targeted' | 'topLevel' | 'all'
  numResults?: number
  numConcurrentFragmentLoads: number
  targetNodeConfig: {
    skipLowVolumeNodes: number
    filteringConfig: any
    rankingConfig: any
  }
  topLevelNodeConfig: {
    skipLowVolumeNodes: number
    filteringConfig: any
    rankingConfig: any
  }
}

interface ComponentUsageContext {
  [key: string]: any
}

interface ThumbnailData {
  targetNode?: string
  topLevelNode?: string
}

interface Logger {
  logTimer: (source: ResultSourceType, timer: TimerType, startTime?: number) => number | undefined
  logDebugInfo: (key: string, data: any) => void
  logFunnelEvent: (event: SearchEventType) => void
  debugInfo?: any
  entryPoint?: string
}

/**
 * Fetches asset suggestions from the API
 * (Original function: p)
 */
async function fetchAssetSuggestions(
  request: AssetSuggestionRequest,
  thumbnailData: string,
): Promise<{ fragments: FragmentResult[] } | undefined> {
  const { node, file_key } = request

  const trackingMetadata: TrackingMetadata = {
    session_id: null,
    search_id: generateUUIDv4(),
    node_id: node.guid,
  }

  try {
    const response = await XHR.post('/api/auto_suggest/asset_suggestions', {
      input: {
        type: 'image',
        value: thumbnailData,
      },
      file_key,
      tracking_metadata: trackingMetadata,
    })

    return {
      fragments: response.data.meta.results.map((fragment: any) => ({
        ...fragment,
        type: 'fig-file-fragment',
      })),
    }
  }
  catch {
    // Silently handle errors as in original implementation
    return undefined
  }
}

/**
 * Main entry point for auto-suggest functionality
 * (Original function: $$_0)
 */
export async function getAutoSuggestResults(options: {
  targetNode: any
  topLevelNode: any
  logger?: Logger
  openFileKey: string
  subscribedLibraryKeys: Set<string>
  autoSuggestSession?: any
  config: AutoSuggestConfig
}): Promise<{ suggestions: any[] }> {
  const {
    targetNode,
    topLevelNode,
    logger,
  } = options

  // Early return if fullscreen is not available
  if (!Fullscreen) {
    return Promise.resolve({
      suggestions: [],
    })
  }

  const sceneGraph = getSingletonSceneGraph()
  let effectiveTopLevelNode = topLevelNode

  // Find containing fragment if topLevelNode is not provided
  if (!effectiveTopLevelNode) {
    effectiveTopLevelNode = sceneGraph.get(targetNode.findContainingFragmentOrSelf()) ?? undefined
  }

  // Return early if we can't determine the topLevelNode
  if (!effectiveTopLevelNode) {
    return Promise.resolve({
      suggestions: [],
    })
  }

  // Analyze component usage in the context
  const contextComponentUsage = analyzeComponentUsage({
    scene: sceneGraph,
    topLevelNode: effectiveTopLevelNode,
  })

  logger?.logTimer(ResultSourceType.SOURCE_FRAGMENT, TimerType.EXTRACT_CONTEXT)
  logger?.logDebugInfo('contextComponentUsage', contextComponentUsage)

  // Generate thumbnails for target and top level nodes
  const targetNodeThumbnail = generateThumbnailWithDuration(targetNode).thumbnail
  const topLevelNodeThumbnail = targetNode.guid === effectiveTopLevelNode.guid
    ? targetNodeThumbnail
    : generateThumbnailWithDuration(effectiveTopLevelNode).thumbnail

  // Proceed only if both thumbnails are available
  if (targetNodeThumbnail && topLevelNodeThumbnail) {
    return await processAutoSuggest({
      ...options,
      preComputedThumbnails: {
        targetNode: targetNodeThumbnail,
        topLevelNode: topLevelNodeThumbnail,
      },
      topLevelNode: effectiveTopLevelNode,
      contextComponentUsage,
    })
  }
  else {
    return Promise.resolve({
      suggestions: [],
    })
  }
}

/**
 * Processes auto-suggest logic for target and top-level nodes
 * (Original function: $$A)
 */
async function processAutoSuggest(options: {
  targetNode: any
  topLevelNode: any
  openFileKey: string
  subscribedLibraryKeys: Set<string>
  autoSuggestSession?: any
  logger?: Logger
  config: AutoSuggestConfig
  preComputedThumbnails?: ThumbnailData
  contextComponentUsage: ComponentUsageContext
}): Promise<{ suggestions: any[] }> {
  let suggestions: any[] = []
  const {
    targetNode,
    topLevelNode,
    openFileKey,
    subscribedLibraryKeys,
    autoSuggestSession,
    logger,
    config,
    preComputedThumbnails,
    contextComponentUsage,
  } = options

  logger?.logFunnelEvent(SearchEventType.START)
  logger?.logDebugInfo('start', {
    targetNodeGuid: targetNode.guid,
    topLevelNodeGuid: topLevelNode.guid,
    openFileKey,
    subscribedLibraryKeys: Array.from(subscribedLibraryKeys),
    config,
    preComputedThumbnails,
  })

  const isTargetNodeSameAsTopLevel = topLevelNode?.guid === targetNode.guid
  const targetNodePositionInfo = calculateNodePositionInfo(targetNode, topLevelNode)

  try {
    let targetNodeSuggestions: Promise<any[]> | undefined
    let topLevelNodeSuggestions: Promise<any[]> | undefined

    // Process target node suggestions if configured
    if (['targeted', 'all'].includes(config.searchByNodeType)) {
      targetNodeSuggestions = processNodeSuggestions({
        node: targetNode,
        openFileKey,
        config,
        configForNodeType: config.targetNodeConfig,
        contextComponentUsage,
        targetNodePositionInfo,
        subscribedLibraryKeys,
        autoSuggestSession,
        logger,
        timerContext: ResultSourceType.TARGET_NODE_RESULTS,
        preComputedThumbnail: preComputedThumbnails?.targetNode,
      })
    }

    // Process top level node suggestions if configured
    if (
      (config.searchByNodeType === 'topLevel'
        || (config.searchByNodeType === 'all' && !isTargetNodeSameAsTopLevel))
      && topLevelNode
    ) {
      topLevelNodeSuggestions = processNodeSuggestions({
        node: topLevelNode,
        openFileKey,
        config,
        configForNodeType: config.topLevelNodeConfig,
        contextComponentUsage,
        targetNodePositionInfo,
        subscribedLibraryKeys,
        autoSuggestSession,
        logger,
        timerContext: ResultSourceType.TL_NODE_RESULTS,
        preComputedThumbnail: preComputedThumbnails?.topLevelNode,
      })
    }

    // Collect suggestions from both nodes
    if (targetNodeSuggestions) {
      suggestions = await targetNodeSuggestions
    }

    if ((!config.numResults || suggestions.length < config.numResults) && topLevelNodeSuggestions) {
      const additionalSuggestions = await topLevelNodeSuggestions
      suggestions = [...suggestions, ...additionalSuggestions]
    }

    // Deduplicate suggestions by asset key
    suggestions = suggestions.filter((suggestion, index, self) =>
      self.findIndex(item => getAssetKey(item) === getAssetKey(suggestion)) === index,
    )
  }
  catch (error) {
    if (!(error instanceof InvalidSessionError)) {
      logError('auto_suggest', 'Error getting suggestions', {
        error,
      })
    }
  }

  logger?.logTimer(ResultSourceType.SOURCE_FRAGMENT, TimerType.TOTAL, 0)
  logInfo('auto_suggest', 'Auto Suggest Results', {
    suggestions: suggestions || 'no_results',
    debugInfo: logger?.debugInfo,
    sessionId: getUUID(),
    entryPoint: logger?.entryPoint,
  })

  return {
    suggestions,
  }
}

/**
 * Processes suggestions for a specific node
 * (Original function: y)
 */
async function processNodeSuggestions(options: {
  node: any
  openFileKey: string
  config: AutoSuggestConfig
  configForNodeType: any
  contextComponentUsage: ComponentUsageContext
  targetNodePositionInfo: any
  subscribedLibraryKeys: Set<string>
  autoSuggestSession?: any
  logger?: Logger
  timerContext: ResultSourceType
  preComputedThumbnail?: string
}): Promise<any[]> {
  const {
    node,
    openFileKey,
    config,
    configForNodeType,
    contextComponentUsage,
    targetNodePositionInfo,
    subscribedLibraryKeys,
    autoSuggestSession,
    logger,
    timerContext,
    preComputedThumbnail,
  } = options

  let startTime = logger?.logTimer(timerContext, TimerType.SEARCH_SUGGESTIONS_START)

  // Skip nodes with too few visible non-instance nodes
  if (countVisibleNonInstanceNodes(node) < configForNodeType.skipLowVolumeNodes) {
    logger?.logFunnelEvent(SearchEventType.SKIP_LOW_VOLUME_NODE)
    return Promise.resolve([])
  }

  // Skip if no subscribed libraries
  if (subscribedLibraryKeys.size === 0) {
    logger?.logFunnelEvent(SearchEventType.SKIP_NO_SUBSCRIBED_LIBRARIES)
    return Promise.resolve([])
  }

  const filteringConfig = configForNodeType.filteringConfig
  logger?.logFunnelEvent(SearchEventType.INITIATING_FRAGMENT_SEARCH)

  // Fetch asset suggestions
  const suggestionResponse = await fetchAssetSuggestions({
    type: 'input-selection',
    node,
    file_key: openFileKey,
    name: node.name,
  }, preComputedThumbnail || '')

  startTime = logger?.logTimer(timerContext, TimerType.FRAGMENT_SEARCH, startTime)

  // Handle no results
  if (!suggestionResponse || suggestionResponse.fragments.length === 0) {
    logger?.logFunnelEvent(SearchEventType.NO_RESULTS)
    return Promise.resolve([])
  }

  const containingFragment = node.findContainingFragmentOrSelf()

  // Filter and limit fragments
  const filteredFragments = Array.from(
    new Map(
      suggestionResponse.fragments.map(fragment => [`${fragment.file_key}_${fragment.node_id}`, fragment]),
    ).values(),
  )
    .filter(fragment =>
      !(fragment.score < filteringConfig.fragmentsBelowScore)
      && (fragment.file_key !== openFileKey
        || fragment.node_id !== node.guid
        && (!containingFragment || fragment.node_id !== containingFragment)),
    )
    .slice(0, 10)

  // Handle no filtered results
  if (filteredFragments.length === 0) {
    logger?.logFunnelEvent(SearchEventType.NO_RESULTS)
    return Promise.resolve([])
  }

  logger?.logDebugInfo(`${timerContext}.fragments`, filteredFragments)

  // Process fragments concurrently
  const fragmentProcessingResults = await runWithConcurrency(
    filteredFragments.map(fragment => async () => {
      try {
        if (fragment.component_usages) {
          return fragment.component_usages
            .map(usage => processAssetUsage({
              usage,
              filteringConfig,
              subscribedLibraryKeys,
              fragment,
              targetNodePositionInfo,
            }))
            .filter(result => result != null)
        }

        if (autoSuggestSession) {
          const fragmentScene = await autoSuggestSession.getFragmentScene(fragment)
          const componentInfo = extractComponentInfo({
            scene: fragmentScene,
            root: fragmentScene.getRoot(),
            fragment,
            targetNodePositionInfo,
            filteringConfig,
            subscribedLibraryKeys,
            includeComponentProps: false,
          })
          autoSuggestSession.unloadFragment(fragment)
          return componentInfo
        }

        throw new Error('No component usage information or session provided')
      }
      catch (error) {
        if (error instanceof InvalidSessionError) {
          throw error
        }
        logError('auto_suggest', 'Error loading fragment', {
          error,
          fragment,
        })
        return null
      }
    }),
    config.numConcurrentFragmentLoads,
  )

  // Flatten results
  const componentInfo = fragmentProcessingResults
    .map(result => result.type === 'resolve' ? result.resolve : null)
    .filter(result => result != null)
    .flat()

  startTime = logger?.logTimer(timerContext, TimerType.EXTRACT_CONTEXT, startTime)
  logger?.logDebugInfo(`${timerContext}.fragmentComponentInfo`, componentInfo)

  // Process component assets
  const { updatedComponentInfo, debugData } = processComponentAssets(componentInfo)
  startTime = logger?.logTimer(timerContext, TimerType.ASSET_LOOKUP, startTime)
  logger?.logDebugInfo(`${timerContext}.updatedComponentInfoDebugData`, debugData)

  // Aggregate and filter component usage
  const aggregatedUsage = aggregateComponentUsage(updatedComponentInfo)
  startTime = logger?.logTimer(timerContext, TimerType.SUMMARIZE_CONTEXT, startTime)
  logger?.logDebugInfo(`${timerContext}.componentUsage`, aggregatedUsage)

  filterComponentUsageByContext({
    componentUsage: aggregatedUsage,
    contextComponentUsage,
  })

  // Rank components and extract assets
  const rankedComponents = rankComponentsByUsage({
    componentUsage: aggregatedUsage,
    rankingConfig: configForNodeType.rankingConfig,
  })

  logger?.logTimer(timerContext, TimerType.FILTERING_RANKING, startTime)
  logger?.logDebugInfo(`${timerContext}.weightedAssets`, rankedComponents)

  let assets = rankedComponents
    .map(component => component.asset)
    .filter(asset => !!asset)

  // Limit results if configured
  if (config.numResults) {
    assets = assets.slice(0, config.numResults)
  }

  logger?.logDebugInfo(`${timerContext}.results`, assets)

  if (assets.length === 0) {
    logger?.logFunnelEvent(SearchEventType.NO_RESULTS)
  }

  return Promise.resolve(assets)
}

/**
 * Background task version of auto-suggest processing
 * (Original function: $$b1)
 */
export async function getAutoSuggestResultsInBackground(options: any): Promise<any> {
  const taskController = new TaskController({
    priority: 'background',
  })

  const resultPromise = new Promise((resolve) => {
    scheduler.postTask(async () => {
      resolve(await processAutoSuggest(options))
    }, {
      signal: taskController.signal,
    })
  })

  return await resultPromise
}

// Export public API
export const AutoSuggestService = {
  getResults: getAutoSuggestResults,
  getResultsInBackground: getAutoSuggestResultsInBackground,
}

export const A = getAutoSuggestResults
export const z = getAutoSuggestResultsInBackground
