import { useCallback, useContext, useMemo, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { DynamicConfig, EvaluationReason } from 'statsig-js'
import { getFeatureFlags } from '../905/601108'
import { FrozenConfigManager } from '../905/669698'
import { StatsigContext } from '../905/749933'
import { postUserFlag } from '../905/985254'
import { ConfigManagerProxy } from '../3973/298076'
// Re-export original exports for traceability
import { fetchDynamicConfig, getInitialDynamicConfig, setupDynamicConfigHandler } from '../3973/389215'
import { DynamicConfigSchema, TeamBootstrapSchema } from '../3973/473379'
import { getExperimentConfig } from '../3973/663243'
import { initCompletedPromiseSelector, numericAtom, processSelector } from '../3973/697935'
import { atom, atomStoreManager, createRemovableAtomFamily, useAtomWithSubscription } from '../figma_app/27355'

import { userFlagExistsAtomFamily } from '../figma_app/545877'
import { useLatestRef } from '../figma_app/922077'

/**
 * Retrieves experiment configuration, optionally waiting for initialization.
 * Original: $$E7
 */
export async function getExperimentConfigAsync(
  experimentName: string,
  deviceValue: any,
  disableExposureLogging: boolean,
  keepDeviceValue: boolean = false,
): Promise<any> {
  const processAtom = atomStoreManager.get(processSelector)
  if (disableExposureLogging || getFeatureFlags().statsig_suspend) {
    await processAtom.initCompletedPromise
  }
  return getExperimentConfig(processAtom, experimentName, 'getExperiment', deviceValue, keepDeviceValue)
}

/**
 * Retrieves experiment configuration with forced initialization.
 * Original: $$y10
 */
export function getExperimentConfigWithInit(
  experimentName: string,
  deviceValue: any,
  disableExposureLogging: boolean,
): Promise<any> {
  return getExperimentConfigAsync(experimentName, deviceValue, disableExposureLogging, true)
}

/**
 * Hook for accessing experiment config with memoization and subscription.
 * Original: b
 */
function useExperimentConfig(
  experimentName: string,
  deviceValue: any,
  keepDeviceValue: boolean,
) {
  const { userVersion } = useContext(StatsigContext)
  const userVersionRef = useLatestRef(userVersion)
  const processAtom = useAtomWithSubscription(processSelector)
  const configRef = useRef<any>(null)

  /**
   * Returns experiment config, memoized by dependencies.
   */
  const getConfig = useCallback(() => {
    if (userVersionRef !== userVersion || configRef.current == null) {
      configRef.current = getExperimentConfig(
        processAtom,
        experimentName,
        'useExperiment',
        deviceValue,
        keepDeviceValue,
      )
    }
    return configRef.current
  }, [experimentName, deviceValue, userVersionRef, processAtom, userVersion, keepDeviceValue])

  return { getConfig }
}

/**
 * Selects the appropriate experiment config hook based on statsig_suspend flag.
 * Original: $$T2
 */
export const selectExperimentConfigHook = getFeatureFlags().statsig_suspend
  ? function (
    experimentName: string,
    deviceValue?: any,
    keepDeviceValue?: boolean,
  ) {
    useAtomWithSubscription(initCompletedPromiseSelector)
    return useExperimentConfig(experimentName, deviceValue, keepDeviceValue)
  }
  : useExperimentConfig

/**
 * Hook for accessing user flag experiment config and dispatching flag update.
 * Original: $$I3
 */
export function useUserFlagExperimentConfig(
  flagName: string,
  experimentName: string,
  deviceValue: any,
) {
  const userFlagAtom = useMemo(() => userFlagExistsAtomFamily(flagName), [flagName])
  const { getConfig } = selectExperimentConfigHook(
    experimentName,
    deviceValue,
    useAtomWithSubscription(userFlagAtom).data || false,
  )
  const dispatch = useDispatch()

  /**
   * Returns experiment config and dispatches user flag update.
   */
  const getConfigWithFlag = useCallback(() => {
    dispatch(postUserFlag({ [flagName]: true }))
    return getConfig()
  }, [dispatch, flagName, getConfig])

  return { getConfig: getConfigWithFlag }
}

/**
 * Creates a removable atom family for experiment configs.
 * Original: createRemovableAtomFamily usage
 */
createRemovableAtomFamily(
  ({
    experimentName,
    keepDeviceValue,
    disableExposureLogging,
  }) =>
    atom(async (get) => {
      await get(initCompletedPromiseSelector)
      get(numericAtom)
      const processAtom = get(processSelector)
      let config: any = null
      return () => {
        if (config == null) {
          config = getExperimentConfig(
            processAtom,
            experimentName,
            'getExperiment',
            keepDeviceValue,
            disableExposureLogging,
          )
        }
        return config
      }
    }),
  (a, b) =>
    a.experimentName === b.experimentName
    && a.disableExposureLogging === b.disableExposureLogging
    && a.keepDeviceValue === b.keepDeviceValue,
)
// export { aH, sq } from '../3973/473379'
export const Fj = setupDynamicConfigHandler
export const gP = getInitialDynamicConfig
export const w0 = fetchDynamicConfig
export const aH = DynamicConfigSchema
export const sq = TeamBootstrapSchema
// Refactored export names for clarity and traceability
export const I7 = selectExperimentConfigHook
export const XV = useUserFlagExperimentConfig
export const vs = getExperimentConfigWithInit
export const hW = getExperimentConfigAsync
export const f6 = EvaluationReason
export const Bf = ConfigManagerProxy
export const iO = DynamicConfig
export const w$ = FrozenConfigManager
