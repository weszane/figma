import { getAutoSuggestResultsInBackground } from '../905/150554'
import { debugState } from '../905/407919'
import { analyticsEventManager } from '../905/449184'
import { getFeatureFlags } from '../905/601108'
import { getSingletonSceneGraph } from '../905/700578'
import { logError, logInfo } from '../905/714362'
import { FDocumentType } from '../905/862883'
import { atomStoreManager } from '../figma_app/27355'
import { FEditorType } from '../figma_app/53721'
import { SubscribedLibrariesAtom } from '../figma_app/155728'
import { ContextType } from '../figma_app/257779'
import { analyzeComponentUsage, generateThumbnailWithDuration, getAnticipationConfig, getDefaultConfigValue, stringifyPoint, stringifyRectangle } from '../figma_app/407767'
import { fullscreenValue } from '../figma_app/455680'
import { openFileKeyAtom } from '../figma_app/516028'
import { PrimaryWorkflowEnum } from '../figma_app/633080'
import { getBestFrame, getFrameSelectionConfig } from '../figma_app/663669'
import { editorTypeAtom } from '../figma_app/976749'
import { AutoSuggestAnalyticsLogger } from '../figma_app/984498'

interface ShadowSuggestionParams {
  topLevelNode: any
  symbolNode: any
  parentNode: any
  insertedNode: any
  insertedLocation: any
  preComputedThumbnails: any
  sourceForTracking: string
  contextComponentUsage: any
}

interface PreInsertionData {
  predictedTLFGuid: string
  thumbnail: any
  thumbnailGenerationDuration: number
  contextComponentUsage: any
}

/**
 * Process and log shadow suggestion analytics data
 * (original function: v)
 */
async function processShadowSuggestion({
  topLevelNode,
  symbolNode,
  parentNode,
  insertedNode,
  insertedLocation,
  preComputedThumbnails,
  sourceForTracking,
  contextComponentUsage,
}: ShadowSuggestionParams): Promise<void> {
  if (!getFeatureFlags().anticipation_suggestions_shadow) {
    return
  }

  try {
    const openFileKey = atomStoreManager.get(openFileKeyAtom) ?? undefined
    const editorType = atomStoreManager.get(editorTypeAtom)

    if (!openFileKey || editorType !== FEditorType.Design) {
      return
    }

    const subscribedLibraries = atomStoreManager.get(SubscribedLibrariesAtom)
    if (!subscribedLibraries) {
      return
    }

    const subscribedLibraryKeys = new Set(subscribedLibraries.map(lib => lib.libraryKey))
    const componentKey = symbolNode.componentKey ?? symbolNode.stateGroupKey
    const sourceLibraryKey = symbolNode.sourceLibraryKey
    const isSubscribedLibrary = !!sourceLibraryKey && subscribedLibraryKeys.has(sourceLibraryKey)
    const hasPublishID = sourceLibraryKey && symbolNode.publishID

    if (!componentKey || !isSubscribedLibrary || !hasPublishID) {
      return
    }

    const recentlyUsedIndex = debugState.getState().recentlyUsed.libraryItems[FDocumentType.Design].findIndex(item => item.key === componentKey)

    const config = getAnticipationConfig()
    config.numResults = null

    const analyticsLogger = new AutoSuggestAnalyticsLogger({
      config,
      entryPoint: ContextType.SHADOW_SUGGESTIONS,
    })

    const { suggestions } = await getAutoSuggestResultsInBackground({
      targetNode: topLevelNode,
      topLevelNode,
      openFileKey,
      subscribedLibraryKeys,
      config,
      preComputedThumbnails,
      logger: analyticsLogger,
      contextComponentUsage,
    })

    const suggestionRank = suggestions.findIndex(suggestion =>
      (suggestion.type === PrimaryWorkflowEnum.COMPONENT && suggestion.component_key === componentKey)
      || (suggestion.type === PrimaryWorkflowEnum.STATE_GROUP && suggestion.key === componentKey),
    )

    const serializedSuggestions = JSON.stringify(suggestions.map(suggestion => ({
      type: suggestion.type,
      key: suggestion.type === PrimaryWorkflowEnum.COMPONENT
        ? suggestion.component_key
        : suggestion.type === PrimaryWorkflowEnum.STATE_GROUP
          ? suggestion.key
          : undefined,
      libraryKey: suggestion.library_key,
      suggestionSource: suggestion.suggestionSource,
    })))

    analyticsEventManager.trackDefinedEvent('auto_suggest.suggestion_shadow_read', {
      fileKey: openFileKey,
      version: getDefaultConfigValue(),
      thumbnailGenerationDuration: preComputedThumbnails.thumbnailGenerationDuration,
      sourceForTracking,
      suggestions: serializedSuggestions,
      numSuggestions: suggestions.length,
      suggestionsRank: suggestionRank,
      recentsRank: recentlyUsedIndex,
      insertedNodeGuid: insertedNode.guid,
      insertedLocation: insertedLocation ? stringifyPoint(insertedLocation) : '',
      insertedNodeType: insertedNode?.type,
      insertedNodeBounds: stringifyRectangle(insertedNode?.absoluteBoundingBox),
      parentNodeGuid: parentNode?.guid,
      parentNodeType: parentNode?.type,
      parentNodeBounds: stringifyRectangle(parentNode?.absoluteBoundingBox),
      topLevelNodeGuid: topLevelNode?.guid,
      topLevelNodeBounds: stringifyRectangle(topLevelNode?.absoluteBoundingBox),
      insertedAssetKey: componentKey,
      insertedAssetLibraryKey: sourceLibraryKey,
    })
  }
  catch (error) {
    logError('auto_suggest', 'shadow: error logging shadow read suggestions', {
      error,
    })
  }
}

/**
 * Handle shadow suggestion on node insertion
 * (original function: $$I2)
 */
export function handleShadowSuggestionOnInsertion(
  preInsertionData: PreInsertionData,
  insertionPoint: any,
  nodeGuid: string,
  sourceAction: string,
): void {
  if (!getFeatureFlags().anticipation_suggestions_shadow
    || !preInsertionData
    || sourceAction?.startsWith('auto-suggest')) {
    return
  }

  try {
    const sceneGraph = getSingletonSceneGraph()
    const insertedNode = sceneGraph.get(nodeGuid)
    const symbolNode = insertedNode?.symbolId ? sceneGraph.get(insertedNode.symbolId) : undefined
    const parentNode = insertedNode?.parentNode
    const containingFrameGuid = insertedNode?.findContainingTopLevelFrameOrSelf()
    const containingFrame = containingFrameGuid ? sceneGraph.get(containingFrameGuid) : undefined

    if (!insertedNode
      || insertedNode.type !== 'INSTANCE'
      || !symbolNode
      || !parentNode
      || !containingFrame) {
      return
    }

    if (containingFrameGuid !== preInsertionData.predictedTLFGuid || !preInsertionData.thumbnail) {
      logInfo('auto_suggest', 'shadow: incorrect tlf prediction', {
        topLevelNodeGuid: containingFrameGuid,
        preInsertionDataDominantFrameGuid: preInsertionData.predictedTLFGuid,
        preInsertionDataThumbnail: preInsertionData.thumbnail,
      })
      return
    }

    processShadowSuggestion({
      topLevelNode: containingFrame,
      symbolNode,
      parentNode,
      insertedNode,
      insertedLocation: insertionPoint,
      preComputedThumbnails: {
        targetNode: preInsertionData.thumbnail,
        topLevelNode: preInsertionData.thumbnail,
        thumbnailGenerationDuration: preInsertionData.thumbnailGenerationDuration,
      },
      sourceForTracking: `local__${sourceAction}`,
      contextComponentUsage: preInsertionData.contextComponentUsage,
    })
  }
  catch (error) {
    logError('auto_suggest', 'shadow: error logging shadow read suggestions', {
      error,
    })
  }
}

/**
 * Get pre-insertion data for shadow suggestions
 * (original function: $$E0)
 */
export function getShadowSuggestionPreInsertionData(): PreInsertionData | null {
  if (!getFeatureFlags().anticipation_suggestions_shadow) {
    return null
  }

  try {
    const sceneGraph = getSingletonSceneGraph()
    const viewportInfo = fullscreenValue.getViewportInfo()
    const bestFrameGuid = getBestFrame(viewportInfo, getFrameSelectionConfig())
    const bestFrame = bestFrameGuid ? sceneGraph.get(bestFrameGuid) : null
    const topLevelFrameGuid = bestFrame?.findContainingTopLevelFrameOrSelf()
    const topLevelFrame = topLevelFrameGuid ? sceneGraph.get(topLevelFrameGuid) : null

    if (!bestFrame || !topLevelFrame || !topLevelFrameGuid) {
      return null
    }

    const { thumbnail, duration } = generateThumbnailWithDuration(bestFrame)
    if (!thumbnail) {
      return null
    }

    const componentUsage = analyzeComponentUsage({
      scene: sceneGraph,
      topLevelNode: topLevelFrame,
    })

    return {
      predictedTLFGuid: topLevelFrameGuid,
      thumbnail,
      thumbnailGenerationDuration: duration,
      contextComponentUsage: componentUsage,
    }
  }
  catch (error) {
    logError('auto_suggest', 'shadow: error getting data for shadow read suggestions', {
      error,
    })
    return null
  }
}

/**
 * Handle shadow suggestion on paste operation
 * (original function: $$x1)
 */
export function handleShadowSuggestionOnPaste(nodeGuid: string, parentGuid: string): void {
  if (!getFeatureFlags().anticipation_suggestions_shadow) {
    return
  }

  try {
    const sceneGraph = getSingletonSceneGraph()
    const node = sceneGraph.get(nodeGuid)
    const parent = sceneGraph.get(parentGuid)
    const symbolId = node?.symbolId
    const symbolNode = symbolId ? sceneGraph.get(symbolId) : null
    const containingFrameGuid = parent?.findContainingTopLevelFrameOrSelf()
    const containingFrame = containingFrameGuid ? sceneGraph.get(containingFrameGuid) : null

    if (!node || !parent || !symbolNode || !containingFrame) {
      return
    }

    const { thumbnail, duration } = generateThumbnailWithDuration(containingFrame)
    if (!thumbnail) {
      return
    }

    const componentUsage = analyzeComponentUsage({
      scene: sceneGraph,
      topLevelNode: containingFrame,
    })

    processShadowSuggestion({
      topLevelNode: containingFrame,
      symbolNode,
      parentNode: parent,
      insertedNode: node,
      insertedLocation: undefined,
      preComputedThumbnails: {
        targetNode: thumbnail,
        topLevelNode: thumbnail,
        thumbnailGenerationDuration: duration,
      },
      sourceForTracking: 'paste',
      contextComponentUsage: componentUsage,
    })
  }
  catch (error) {
    logError('auto_suggest', 'shadow: error logging shadow read suggestions on paste', {
      error,
    })
  }
}

export const Dl = getShadowSuggestionPreInsertionData
export const QO = handleShadowSuggestionOnPaste
export const cI = handleShadowSuggestionOnInsertion
