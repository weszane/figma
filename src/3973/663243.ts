import { DynamicConfig, EvaluationReason } from 'statsig-js'
import { Statsig } from 'statsig-react'
import { ServiceCategories } from '../905/165054'
import { a as _$$a } from '../905/425366'
import { measureSyncDuration } from '../905/670985'
import { OperationStatus } from '../3973/473379'
import { EXPERIMENT_NAME_FULLSCREEN_VIEW, isSampled10Percent, logPerformanceMetric, reportStatsigError, trackExperimentEvaluation, trackInvalidBootstrapInfo } from '../3973/890507'
import { atomStoreManager } from '../figma_app/27355'
import { getInitialOptions } from '../figma_app/169182'
import { isInteractionPathCheck } from '../figma_app/897289'

/**
 * Default DynamicConfig instance used as a fallback.
 * (original: $$g1)
 */
export const defaultDynamicConfig = new DynamicConfig('default', {}, 'default', {
  reason: EvaluationReason.Unrecognized,
  time: Date.now(),
})

/**
 * User and organization ID string constants.
 * (original: p)
 */
export enum IdStrings {
  UserIDString = 'userID',
  OrgIdString = 'orgID',
  TeamIdString = 'teamID',
  StableIdString = 'stableID',
  DeveloperIdString = 'developerID',
  DefaultIdString = 'defaultID',
  RandomIdString = 'randomID',
  UserFigmateEmailString = 'userFigmateEmail',
  PlanKeyString = 'planKey',
}

/**
 * Fetches experiment config for a user, with error handling and performance tracking.
 * Returns a DynamicConfig instance.
 * (original: $$m0)
 * @param e - The experiment context object (should have status property)
 * @param experimentName - The experiment name string
 * @param rule - The rule identifier
 * @param keepDeviceValue - Whether to keep device value (default: false)
 * @param disableExposureLogging - Whether to disable exposure logging (default: false)
 */
export function getExperimentConfig(
  e: { status: OperationStatus },
  experimentName: string,
  rule: string,
  keepDeviceValue = false,
  disableExposureLogging = false,
): DynamicConfig {
  if (
    !Statsig.initializeCalled()
    || getInitialOptions().e2e_ci_test
    || e.status !== OperationStatus.COMPLETED
  ) {
    return defaultDynamicConfig
  }

  let duration = 0
  let error: Error | null = null
  let config: DynamicConfig = defaultDynamicConfig
  const sampled = isSampled10Percent()

  try {
    duration = measureSyncDuration(
      'statsigGetExperimentValDuration',
      ServiceCategories.GROWTH_PLATFORM,
      () => {
        config = disableExposureLogging
          ? Statsig.getExperimentWithExposureLoggingDisabled(experimentName, {
              keepDeviceValue,
            })
          : Statsig.getExperiment(experimentName, keepDeviceValue)
      },
      sampled,
    )
  }
  catch (err) {
    const userId = getInitialOptions().user_data?.id || 'undefined'
    reportStatsigError(
      `Errored while fetching experiment config for experiment ${experimentName} and user ${userId}: ${err}`,
    )
    error = err instanceof Error ? err : null
    config = defaultDynamicConfig
  }

  const currentUser = Statsig.getCurrentUser()

  // Track experiment evaluation if no error and sampled
  if (
    error === null
    && sampled
  ) {
    trackExperimentEvaluation(
      experimentName,
      duration,
      rule,
      config.getEvaluationDetails().reason,
      config.getRuleID(),
      currentUser,
    )
  }

  // Track invalid bootstrap info if evaluation reason is InvalidBootstrap
  if (
    config.getEvaluationDetails().reason === EvaluationReason.InvalidBootstrap
  ) {
    const atomStore = atomStoreManager.get<{ evaluated_keys?: { userID?: string, customIDs?: string[] } }>(_$$a)
    if (atomStore) {
      trackInvalidBootstrapInfo(
        experimentName,
        atomStore.evaluated_keys?.userID,
        JSON.stringify(atomStore.evaluated_keys?.customIDs),
        currentUser?.userID?.toString(),
        JSON.stringify(currentUser?.customIDs),
      )
    }
  }

  // Log performance metrics for fullscreen view experiment
  if (
    isInteractionPathCheck()
    && EXPERIMENT_NAME_FULLSCREEN_VIEW === experimentName
  ) {
    const value: any = config.getValue()
    logPerformanceMetric(EXPERIMENT_NAME_FULLSCREEN_VIEW, duration)
    logPerformanceMetric(`${EXPERIMENT_NAME_FULLSCREEN_VIEW}_value`, value)
  }

  return config
}

/** Alias for getExperimentConfig (original: Tq) */
export const Tq = getExperimentConfig

/** Alias for defaultDynamicConfig (original: sb) */
export const sb = defaultDynamicConfig
