import type { PrimitiveAtom } from 'jotai'
import md5 from 'md5'
import { useEffect, useRef } from 'react'
import { reportError } from '../905/11'
import { ServiceCategories } from '../905/165054'
import { analyticsEventManager } from '../905/449184'
import { getFeatureFlags } from '../905/601108'
import { getSingletonSceneGraph } from '../905/700578'
import { atom, useAtomWithSubscription } from '../figma_app/27355'
import { DefinitionAssignment } from '../figma_app/164212'
import { getInitialOptions } from '../figma_app/169182'
import { hasJubileePermissionForDesign } from '../figma_app/251115'
import { suggestComponentContext } from '../figma_app/443973'
import { findSingleInstanceId } from '../figma_app/460003'
import { getAutosuggestSearchType, useAutosuggestProps } from '../figma_app/578955'
import { fetchDynamicConfig } from '../figma_app/594947'
import { useComponentBackingGUID } from '../figma_app/626952'
import { isInteractionOrEvalMode } from '../figma_app/897289'
import { useLatestRef } from '../figma_app/922077'

// Original atoms and function names refactored for clarity:
// $$T2 -> nodeIdAtom (atom for node ID)
// $$I0 -> componentKeyAtom (atom for component key)
// $$S1 -> useAutosuggestShadowRead (hook for autosuggest props and shadow read analytics)

/**
 * Atom for storing the current node ID.
 */
export const nodeIdAtom = atom(null) as PrimitiveAtom<any>

/**
 * Atom for storing the component key.
 */
export const componentKeyAtom = atom<any>(undefined) as PrimitiveAtom<any>

/**
 * Hook for handling autosuggest props and shadow read analytics.
 * This hook manages autosuggest values, caches them, and logs analytics for shadow reads.
 */
export function useAutosuggestShadowRead() {
  const nodeId = useAtomWithSubscription(nodeIdAtom)
  const componentKey = useAtomWithSubscription(componentKeyAtom)
  const autosuggestCacheRef = useRef(new Map())
  const randomSeedRef = useRef(0)
  const sceneGraph = getSingletonSceneGraph()
  const delayRef = useRef(300000) // Default 5 minutes
  const proportionRef = useRef(0)

  // Fetch dynamic config for shadow reads if not in interaction/eval mode
  useEffect(() => {
    if (!isInteractionOrEvalMode() && !getInitialOptions().e2e_traffic) {
      fetchDynamicConfig('autosuggest_prop_shadow_reads').then((config) => {
        delayRef.current = config.get('delayForComparisonMs', 300000)
        proportionRef.current = config.get('proportionLogged', 0)
      })
    }
  }, [])

  const instanceId = findSingleInstanceId(nodeId ? [nodeId] : [], sceneGraph)
  const componentGuid = useComponentBackingGUID([instanceId], DefinitionAssignment.ASSIGNMENT)

  // Update random seed when nodeId changes
  const latestNodeIdRef = useLatestRef(nodeId)
  if (latestNodeIdRef.current !== nodeId) {
    randomSeedRef.current = Math.random()
  }

  const shouldLogShadowReads = !!(
    hasJubileePermissionForDesign()
    && getFeatureFlags().anticipation_props_shadow_reads
    && randomSeedRef.current < proportionRef.current
  )

  const { autosuggestedValues, isLoading } = useAutosuggestProps(
    instanceId,
    componentGuid,
    shouldLogShadowReads,
    sceneGraph,
  )

  // Cache autosuggested values when not loading
  useEffect(() => {
    if (!isLoading && nodeId) {
      autosuggestCacheRef.current.set(nodeId, autosuggestedValues)
    }
  }, [isLoading, autosuggestedValues, nodeId])

  const node = nodeId ? sceneGraph?.get(nodeId) : null
  let currentProperties = null
  try {
    currentProperties = node?.type === 'INSTANCE' ? node.componentProperties() : null
  }
  catch (error) {
    reportError(ServiceCategories.SEARCH_EXPERIENCE, error)
  }

  const latestNodeId = useLatestRef(nodeId)

  // Effect for logging shadow read analytics after delay
  useEffect(() => {
    if (!nodeId || !shouldLogShadowReads)
      return

    const timeoutId = setTimeout(() => {
      const currentNode = sceneGraph?.get(nodeId)
      const cachedProps = autosuggestCacheRef.current.get(nodeId)?.componentProps
      let liveProperties = null
      try {
        liveProperties = currentNode?.type === 'INSTANCE' ? currentNode?.componentProperties() : null
      }
      catch (error) {
        reportError(ServiceCategories.SEARCH_EXPERIENCE, error)
      }

      if (cachedProps && liveProperties) {
        logShadowReadAnalytics(cachedProps, liveProperties, currentProperties, currentNode, componentKey)
      }
      autosuggestCacheRef.current.delete(nodeId)
    }, delayRef.current)

    return () => clearTimeout(timeoutId)
  }, [nodeId, componentKey, latestNodeId, currentProperties, sceneGraph, shouldLogShadowReads])

  // Helper function to log analytics
  function logShadowReadAnalytics(
    cachedProps: any,
    liveProps: any,
    initialProps: any,
    node: any,
    componentKey: any,
  ) {
    const counts = {
      total: { TEXT: 0, VARIANT: 0 },
      accurate: { TEXT: 0, VARIANT: 0 },
      changedAccurate: { TEXT: 0, VARIANT: 0 },
      changedInaccurate: { TEXT: 0, VARIANT: 0 },
      unchangedAccurate: { TEXT: 0, VARIANT: 0 },
      unchangedInaccurate: { TEXT: 0, VARIANT: 0 },
    }
    let otherPropsCount = 0

    Object.entries(cachedProps).forEach(([propName, suggestedValue]) => {
      if (liveProps[propName]) {
        const liveValue = liveProps[propName]?.value
        const initialValue = initialProps?.[propName]?.value
        const propType = liveProps[propName]?.type

        if (propType === 'TEXT' || propType === 'VARIANT') {
          counts.total[propType]++
          if (suggestedValue === liveValue) {
            counts.accurate[propType]++
            if (initialValue !== null) {
              if (suggestedValue === initialValue) {
                counts.unchangedAccurate[propType]++
              }
              else {
                counts.changedAccurate[propType]++
              }
            }
          }
          else if (initialValue !== null) {
            if (suggestedValue === initialValue) {
              counts.unchangedInaccurate[propType]++
            }
            else {
              counts.changedInaccurate[propType]++
            }
          }
        }
        else {
          otherPropsCount++
        }
      }
    })

    analyticsEventManager.trackDefinedEvent('auto_suggest.props_shadow_read', {
      textAccuracy: counts.accurate.TEXT / counts.total.TEXT,
      textCANCount: counts.changedAccurate.TEXT,
      textCNNCount: counts.changedInaccurate.TEXT,
      textCRPCount: counts.unchangedAccurate.TEXT,
      textCNPCount: counts.unchangedInaccurate.TEXT,
      textPropertyCount: counts.total.TEXT,
      variantAccuracy: counts.accurate.VARIANT / counts.total.VARIANT,
      variantCANCount: counts.changedAccurate.VARIANT,
      variantCNNCount: counts.changedInaccurate.VARIANT,
      variantCRPCount: counts.unchangedAccurate.VARIANT,
      variantCNPCount: counts.unchangedInaccurate.VARIANT,
      variantPropertyCount: counts.total.VARIANT,
      missingPropertyCount: otherPropsCount,
      suggestionMethod: getAutosuggestSearchType(),
      gptPromptMd5Version: md5(suggestComponentContext()),
      delayForComparisonMs: delayRef.current,
      numDescendants: node?.getVisibleDescendantIds().length,
      componentKey,
    })
  }
}

// Updated exports to match refactored names
export const fu = componentKeyAtom
export const qh = useAutosuggestShadowRead
export const xB = nodeIdAtom
