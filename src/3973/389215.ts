import { useCallback, useRef } from 'react'
import { EvaluationReason } from 'statsig-js'
import { DynamicConfig, Statsig } from 'statsig-react'
import { OperationStatus } from '../3973/473379'
import { defaultDynamicConfig } from '../3973/663243'
import { initCompletedPromiseSelector, processSelector } from '../3973/697935'
import { atomStoreManager, useAtomWithSubscription } from '../figma_app/27355'
import { getInitialOptions } from '../figma_app/169182'

/**
 * Provides dynamic config retrieval logic using Statsig and atom store.
 * @param configKey - The key for the dynamic config.
 * @param disableExposureLogging - Whether to disable exposure logging.
 * @returns Object with getDynamicConfig function.
 * @originalName $$c0
 */
export function setupDynamicConfigHandler(configKey: string, disableExposureLogging: boolean) {
  const configRef = useRef<any>(null)
  useAtomWithSubscription(initCompletedPromiseSelector)

  /**
   * Retrieves the dynamic config, using Statsig if initialization is complete.
   * @returns The dynamic config object.
   * @originalName getDynamicConfig (from $$c0)
   */
  const getDynamicConfig = useCallback(() => {
    if (atomStoreManager.get(processSelector).status !== OperationStatus.COMPLETED)
      return defaultDynamicConfig

    if (configRef.current == null) {
      try {
        configRef.current = disableExposureLogging
          ? Statsig.getConfigWithExposureLoggingDisabled(configKey)
          : Statsig.getConfig(configKey)
      }
      catch {
        configRef.current = defaultDynamicConfig
      }
    }
    return configRef.current
  }, [configKey, disableExposureLogging])

  return { getDynamicConfig }
}

/**
 * Asynchronously retrieves a dynamic config using Statsig.
 * @param configKey - The key for the dynamic config.
 * @param disableExposureLogging - Whether to disable exposure logging.
 * @returns The dynamic config object.
 * @originalName $$d2
 */
export async function fetchDynamicConfig(configKey: string, disableExposureLogging?: boolean) {
  await atomStoreManager.get(initCompletedPromiseSelector)
  if (atomStoreManager.get(processSelector).status !== OperationStatus.COMPLETED)
    return defaultDynamicConfig

  try {
    return disableExposureLogging
      ? Statsig.getConfigWithExposureLoggingDisabled(configKey)
      : Statsig.getConfig(configKey)
  }
  catch {
    return defaultDynamicConfig
  }
}

/**
 * Gets the initial dynamic config options for a given key.
 * @param configKey - The key for the dynamic config.
 * @returns The dynamic config object.
 * @originalName $$g1
 */
export function getInitialDynamicConfig(configKey: string) {
  const configValue = getInitialOptions()?.dynamic_configs?.[configKey]
  return configValue
    ? new DynamicConfig(configKey, configValue, '', {
      reason: EvaluationReason.Unrecognized,
      time: Date.now(),
    })
    : defaultDynamicConfig
}

// Exported aliases for refactored functions
export const Fj = setupDynamicConfigHandler
export const gP = getInitialDynamicConfig
export const w0 = fetchDynamicConfig
