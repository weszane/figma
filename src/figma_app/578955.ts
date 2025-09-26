import type { TSSceneGraph } from './518682'
import { useEffect, useState } from 'react'
import { getFeatureFlags } from '../905/601108'
import { generateUUIDv4 } from '../905/871474'
import { sendWithRetry } from '../905/910117'
import { findComponentInStateGroup, findNearestCanvas } from '../figma_app/325988'
import { GPTSearchType } from '../figma_app/338442'
import { suggestComponentProps } from '../figma_app/443973'
import { useCurrentFileKey } from '../figma_app/516028'
import { T1 } from '../figma_app/545293'
import { getComponentInfoById } from '../figma_app/664063'
import { trackFileEventWithStore } from '../figma_app/901889'

/**
 * Performs fragment search by exporting a thumbnail and querying the API.
 * @param params - The parameters including node and file_key.
 * @returns An object with fragments or undefined on error.
 */
async function performFragmentSearch(params: { node: any, file_key: string }): Promise<{ fragments: any[] } | undefined> {
  const { node, file_key } = params
  const trackingMetadata = {
    session_id: null,
    search_id: generateUUIDv4(),
    node_id: node.guid,
  }
  try {
    const thumbnail = T1(node)
    if (!thumbnail) {
      throw new Error('Failed to export thumbnail')
    }
    const response = await sendWithRetry.post('/api/auto_suggest_props/fragment_search', {
      input: {
        type: 'image',
        value: thumbnail,
      },
      file_key,
      tracking_metadata: trackingMetadata,
    })
    return {
      fragments: response.data.meta.results.map((result: any) => ({
        ...result,
        type: 'fig-file-fragment',
      })),
    }
  }
  catch {
    // Error handled silently as per original logic
    return undefined
  }
}

/**
 * Aggregates the most common property values from component usages.
 * @param usages - Array of usage objects with properties.
 * @returns An object with the most frequent values for each property.
 */
function aggregateCommonProps(usages: any[]): Record<string, any> {
  const propCounts: Record<string, Map<any, number>> = {}
  usages.forEach((usage) => {
    Object.entries(usage).forEach(([prop, value]) => {
      if (!propCounts[prop]) {
        propCounts[prop] = new Map()
      }
      const count = propCounts[prop].get(value) || 0
      propCounts[prop].set(value, count + 1)
    })
  })
  const aggregated: Record<string, any> = {}
  for (const prop in propCounts) {
    const mostFrequent = Array.from(propCounts[prop].entries()).reduce((a, b) => (b[1] > a[1] ? b : a))
    if (mostFrequent) {
      aggregated[prop] = mostFrequent[0]
    }
  }
  return aggregated
}

/**
 * Processes component usages to extract and transform properties.
 * @param usages - Component usages array.
 * @param selectedNodeId - ID of the selected node.
 * @param sceneGraph - The scene graph map.
 * @param componentInfo - Info of the target component.
 * @returns Array of processed property objects.
 */
function processComponentUsages(usages: any[], selectedNodeId: string, sceneGraph: TSSceneGraph, componentInfo: any): any[] {
  const processed: any[] = []
  usages.forEach((usage) => {
    if (usage.key === componentInfo.key) {
      const selectedNode = sceneGraph.get(selectedNodeId)
      const stateComponent = usage.stateComponentKey && selectedNode ? findComponentInStateGroup(usage.stateComponentKey, selectedNode, sceneGraph) : null
      const props: Record<string, any> = {}
      const variantProps = stateComponent?.variantProperties()
      if (variantProps) {
        Object.entries(variantProps).forEach(([key, value]) => {
          props[key] = value
        })
      }
      Object.entries(usage.props).forEach(([prop, value]) => {
        const normalizedProp = prop.split('#').length === 2 ? prop.split('#').reverse().join('#') : prop
        const def = componentInfo?.parsedDefs.find((d: any) => d.rawProp === normalizedProp)
        props[normalizedProp] = def
          ? (() => {
            switch (def.def.type) {
              case 'BOOLEAN':
                return value === 'true'
              case 'NUMBER':
                return parseFloat(value as string)
              default:
                return value
            }
          })()
          : value
      })
      processed.push(props)
    }
  })
  return processed
}

/**
 * Autosuggests component props using fragment search.
 * @param componentId - ID of the component.
 * @param selectedNodeId - ID of the selected node.
 * @param sceneGraph - The scene graph map.
 * @param trackEvent - Function to track events.
 * @param fileKey - The file key.
 * @returns Promise resolving to suggested props or empty object.
 */
async function autosuggestPropsViaFS(
  componentId: string,
  selectedNodeId: string,
  sceneGraph: TSSceneGraph,
  trackEvent: (event: string, data: any) => void,
  fileKey?: string,
): Promise<{ componentProps?: Record<string, any> }> {
  const startTime = performance.now()
  if (!fileKey) {
    console.error('Could not find the open file')
    return {}
  }
  const component = sceneGraph.get(componentId)
  if (!component) {
    console.error('Could not find component in scene graph:', componentId)
    return {}
  }
  const selectedNode = sceneGraph.get(selectedNodeId)
  if (!selectedNode) {
    console.error('Could not find selected node in scene graph:', selectedNodeId)
    return {}
  }
  const canvas = findNearestCanvas(selectedNode)
  const fragmentResult = await performFragmentSearch({
    node: canvas,
    file_key: fileKey,
  })
  if (!fragmentResult || fragmentResult.fragments.length === 0) {
    console.error('No fragment search results')
    return {}
  }
  const uniqueFragments = Array.from(new Map(fragmentResult.fragments.map(f => [`${f.file_key}_${f.node_id}`, f])).values())
  const componentInfo = getComponentInfoById(component.guid, { enableTsArrays: false })
  if (!componentInfo) {
    console.error('Could not find selected component')
    return {}
  }
  const processedUsages = processComponentUsages(uniqueFragments.flatMap(f => f.component_usages || []), selectedNodeId, sceneGraph, componentInfo)
  const suggestedProps = aggregateCommonProps(processedUsages)
  trackEvent('autosuggest_props_fs_perf', {
    totalMs: Math.round(performance.now() - startTime),
    numFragments: fragmentResult.fragments.length,
    numMatchingComponents: processedUsages.length,
    matchingComponentsUsedProps: JSON.stringify(processedUsages),
    suggestedProps: JSON.stringify(suggestedProps),
    componentKey: componentInfo.key,
  })
  return Object.keys(suggestedProps).length === 0 ? {} : { componentProps: suggestedProps }
}

/**
 * Custom hook for autosuggesting component props.
 * @param componentId - ID of the component.
 * @param selectedNodeId - ID of the selected node.
 * @param sceneGraph - The scene graph map.
 * @param abortSignal - Abort signal for cancellation.
 * @returns Object with autosuggested values and loading state.
 */
export function useAutosuggestProps(
  componentId: string,
  selectedNodeId: string,
  abortSignal: boolean,
  sceneGraph: TSSceneGraph | null,
): { autosuggestedValues: any, isLoading: boolean } {
  const fileKey = useCurrentFileKey()
  const trackEvent = trackFileEventWithStore()
  const [autosuggestedValues, setAutosuggestedValues] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    if (!sceneGraph || !abortSignal) {
      setIsLoading(false)
      return
    }
    setAutosuggestedValues({})
    setIsLoading(true)
    const controller = new AbortController()
    const performAutosuggest = async () => {
      let result: any = {}
      switch (getAutosuggestSearchType()) {
        case GPTSearchType.GPT:
          result = await suggestComponentProps(selectedNodeId, componentId, sceneGraph, controller.signal, trackEvent)
          break
        case GPTSearchType.FS:
          result = await autosuggestPropsViaFS(componentId, selectedNodeId, sceneGraph, trackEvent, fileKey ?? undefined)
          break
        default:
          result = {}
      }
      if (!controller.signal.aborted) {
        setAutosuggestedValues(result)
        const node = sceneGraph.get(selectedNodeId)
        const componentInfo = node ? getComponentInfoById(node.guid, { enableTsArrays: false }) : null
        if (Object.keys(result).length === 0) {
          trackEvent('autosuggest_props_no_suggestions', {
            fileKey,
            componentKey: componentInfo?.key,
            guid: node?.guid,
            method: getAutosuggestSearchType(),
          })
        }
      }
    }
    performAutosuggest().catch((error) => {
      if (error.name !== 'AbortError') {
        console.error(`Error getting results: ${error}`)
      }
    }).finally(() => {
      if (!controller.signal.aborted) {
        setIsLoading(false)
      }
    })
    return () => {
      controller.abort()
    }
  }, [sceneGraph, componentId, selectedNodeId])
  return { autosuggestedValues, isLoading }
}

/**
 * Gets the current autosuggest search type based on feature flags.
 * @returns The search type.
 */
export function getAutosuggestSearchType(): GPTSearchType {
  return getFeatureFlags().anticipation_props_fs ? GPTSearchType.FS : GPTSearchType.GPT
}

export const p3 = getAutosuggestSearchType
export const V2 = useAutosuggestProps
