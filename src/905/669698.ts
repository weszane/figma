import md5 from 'md5'
import { EvaluationReason } from 'statsig-js'
import { Statsig } from 'statsig-react'
import { trackEventAnalytics } from '../905/449184'
import { getFeatureFlags } from '../905/601108'
import { PerfProfileLevel, runProfileSession } from '../905/958077'
import { OperationStatus } from '../3973/473379'
import { defaultDynamicConfig, getExperimentConfig } from '../3973/663243'
import { processSelector } from '../3973/697935'
import { atomStoreManager } from '../figma_app/27355'
import { getFeatureFlagRulesExport } from '../figma_app/169182'
import { debug } from '../figma_app/465776'
import { isInteractionOrEvalMode } from '../figma_app/897289'
/**
 * Checks if Statsig is initialized and the atom store manager status is COMPLETED.
 * @param storeStatus - The status from atomStoreManager.get(processSelector)
 * @returns boolean
 * (Original: h)
 */
export function isStatsigReady(storeStatus = atomStoreManager.get(processSelector)): boolean {
  return !!Statsig.initializeCalled() && storeStatus.status === OperationStatus.COMPLETED
}

/**
 * Types for config and gate objects.
 */
export interface FeatureGate {
  value: boolean
  rule_id: string | null
}

export interface DynamicConfig {
  get: (key: string, defaultValue: any, fallback?: any) => any
  getEvaluationDetails: () => { reason: EvaluationReason }
  value?: Record<string, any>
}

/**
 * Manages frozen configs, feature gates, and exposure logging.
 * (Original: class e)
 */
export class FrozenConfigManager {
  static DataDogInvalidStatsigFetchKey = 'statsig.frozen_config_invalid_fetch'
  static DefaultSourceLoggingString = 'web'

  static AlreadyExposedExperimentConfigSet = new Set<string>()
  static ToBeExposedExperimentConfigSet = new Set<string>()
  static AlreadyExposedDynamicConfigSet = new Set<string>()
  static ToBeExposedDynamicConfigSet = new Set<string>()
  static FrozenDyanmicConfigs = new Map<string, DynamicConfig | null>()
  static FrozenFeatureGates = new Map<string, FeatureGate>()
  static AlreadyExposedFeatureGateSet = new Set<string>()
  static ToBeExposedFeatureGateExposureMap = new Map<string, FeatureGate>()
  static InRenderServerForViewerTests = false
  static LogExposureTimeoutHandle: number | null = null

  /**
   * Checks if not in testing environment for logging.
   * (Original: notInTestingEnvForLogging)
   */
  static notInTestingEnvForLogging(): boolean {
    return (
      typeof process === 'undefined'
      || void 0 === (process as any)?.env?.JEST_WORKER_ID
    ) && !isInteractionOrEvalMode()
  }

  /**
   * Populates dynamic config for a given key.
   * (Original: populateDynamicConfig)
   */
  static populateDynamicConfig(key: string, source: string): void {
    if (!this.FrozenDyanmicConfigs.get(key)) {
      const config
        = isStatsigReady() ? Statsig.getConfigWithExposureLoggingDisabled(key) : null
      if (
        config !== null
        && config.getEvaluationDetails().reason !== EvaluationReason.Unrecognized
      ) {
        this.ToBeExposedDynamicConfigSet.add(key)
        if (this.LogExposureTimeoutHandle == null) {
          this.LogExposureTimeoutHandle = window.setTimeout(
            this.LogExposureCallback,
            this.getInitialLogExposureDelayMs(),
          )
        }
      }
      else {
        if (this.notInTestingEnvForLogging()) {
          const event = {
            resource_type: 'config',
            source,
            resource_name: key,
            statsig_ready: isStatsigReady(),
          }
          trackEventAnalytics(this.DataDogInvalidStatsigFetchKey, event, {
            forwardToDatadog: true,
          })
        }
        this.AlreadyExposedDynamicConfigSet.add(key)
      }
      this.FrozenDyanmicConfigs.set(key, config)
    }
  }

  /**
   * Populates experiment config for a given key.
   * (Original: populateExperimentConfig)
   */
  static populateExperimentConfig(key: string, source: string): void {
    if (!this.FrozenDyanmicConfigs.get(key)) {
      const config = (() => {
        const store = atomStoreManager.get(processSelector)
        const expConfig = getExperimentConfig(
          store,
          key,
          'getFrozenExperiment',
          false,
          true,
        )
        return expConfig
          && expConfig !== defaultDynamicConfig
          && expConfig.getEvaluationDetails().reason !== EvaluationReason.Unrecognized
          ? expConfig
          : null
      })()
      if (config != null) {
        this.ToBeExposedExperimentConfigSet.add(key)
        if (this.LogExposureTimeoutHandle == null) {
          this.LogExposureTimeoutHandle = window.setTimeout(
            this.LogExposureCallback,
            this.getInitialLogExposureDelayMs(),
          )
        }
      }
      else {
        if (this.notInTestingEnvForLogging()) {
          const event = {
            resource_type: 'experiment',
            source,
            resource_name: key,
            statsig_ready: isStatsigReady(),
          }
          trackEventAnalytics(this.DataDogInvalidStatsigFetchKey, event, {
            forwardToDatadog: true,
          })
        }
        this.AlreadyExposedExperimentConfigSet.add(key)
      }
      this.FrozenDyanmicConfigs.set(key, config)
    }
  }

  /**
   * Type guard for boolean.
   * (Original: typeGuardBoolean)
   */
  static typeGuardBoolean(val: any): val is boolean {
    const isBool = typeof val === 'boolean'
    if (!isBool)
      debug(false, `Expected boolean, got ${typeof val}`)
    return isBool
  }

  /**
   * Gets boolean value from dynamic config.
   * (Original: getDynamicConfigBoolean)
   */
  static getDynamicConfigBoolean(
    key: string,
    prop: any,
    defaultValue: any,
    source: string = this.DefaultSourceLoggingString,
  ): boolean {
    this.populateDynamicConfig(key, source)
    const config = this.FrozenDyanmicConfigs.get(key)
    return config != null ? config.get(prop, defaultValue, undefined) : defaultValue
  }

  /**
   * Gets boolean value from experiment config.
   * (Original: getExperimentBoolean)
   */
  static getExperimentBoolean(
    key: string,
    prop: any,
    defaultValue: any,
    source: string = this.DefaultSourceLoggingString,
  ): boolean {
    this.populateExperimentConfig(key, source)
    const config = this.FrozenDyanmicConfigs.get(key)
    return config != null ? config.get(prop, defaultValue, undefined) : defaultValue
  }

  /**
   * Type guard for number.
   * (Original: typeGuardNumber)
   */
  static typeGuardNumber(val: any): val is number {
    const isNum = typeof val === 'number'
    if (!isNum)
      debug(false, `Expected number, got ${typeof val}`)
    return isNum
  }

  /**
   * Gets number value from dynamic config.
   * (Original: getDynamicConfigNumber)
   */
  static getDynamicConfigNumber(
    key: string,
    prop: any,
    defaultValue: any,
    source: string = this.DefaultSourceLoggingString,
  ): number {
    this.populateDynamicConfig(key, source)
    const config = this.FrozenDyanmicConfigs.get(key)
    return config != null ? config.get(prop, defaultValue, undefined) : defaultValue
  }

  /**
   * Gets number value from experiment config.
   * (Original: getExperimentNumber)
   */
  static getExperimentNumber(
    key: string,
    prop: any,
    defaultValue: any,
    source: string = this.DefaultSourceLoggingString,
  ): number {
    this.populateExperimentConfig(key, source)
    const config = this.FrozenDyanmicConfigs.get(key)
    return config != null ? config.get(prop, defaultValue, undefined) : defaultValue
  }

  /**
   * Type guard for string.
   * (Original: typeGuardString)
   */
  static typeGuardString(val: any): val is string {
    const isStr = typeof val === 'string'
    if (!isStr)
      debug(false, `Expected string, got ${typeof val}`)
    return isStr
  }

  /**
   * Gets string value from dynamic config.
   * (Original: getDynamicConfigString)
   */
  static getDynamicConfigString(
    key: string,
    prop: any,
    defaultValue: string,
    source: string = this.DefaultSourceLoggingString,
  ): string {
    this.populateDynamicConfig(key, source)
    const config = this.FrozenDyanmicConfigs.get(key)
    return config != null ? config.get(prop, defaultValue, undefined) : defaultValue
  }

  /**
   * Gets string value from experiment config.
   * (Original: getExperimentString)
   */
  static getExperimentString(
    key: string,
    prop: string,
    defaultValue: string,
    source: string = this.DefaultSourceLoggingString,
  ): string {
    this.populateExperimentConfig(key, source)
    const config = this.FrozenDyanmicConfigs.get(key)
    return config != null ? config.get(prop, defaultValue, undefined) : defaultValue
  }

  /**
   * Gets feature gate from initial options.
   * (Original: getFeatureGateFromInitialOptionsInternal)
   */
  static getFeatureGateFromInitialOptionsInternal(
    key: string,
  ): FeatureGate {
    return {
      value: getFeatureFlags()[key] ?? false,
      rule_id: getFeatureFlagRulesExport()[md5(key)] ?? null,
    }
  }

  /**
   * Gets feature gate value from initial options and logs exposure.
   * (Original: getFeatureGateFromInitialOptions)
   */
  static getFeatureGateFromInitialOptions(key: string): boolean {
    if (!this.FrozenFeatureGates.has(key)) {
      const gate = FrozenConfigManager.getFeatureGateFromInitialOptionsInternal(key)
      this.FrozenFeatureGates.set(key, gate)
    }
    const value = this.FrozenFeatureGates.get(key)?.value ?? false
    this.logExposureForFeatureGate(key, value)
    return value
  }

  /**
   * Logs exposure for feature gate.
   * (Original: logExposureForFeatureGate)
   */
  static logExposureForFeatureGate(key: string, _value: boolean): void {
    const gate = FrozenConfigManager.getFeatureGateFromInitialOptionsInternal(key)
    if (!this.AlreadyExposedFeatureGateSet.has(key)) {
      this.ToBeExposedFeatureGateExposureMap.set(key, gate)
      if (this.LogExposureTimeoutHandle == null) {
        this.LogExposureTimeoutHandle = window.setTimeout(
          this.LogExposureCallback,
          this.getInitialLogExposureDelayMs(),
        )
      }
    }
  }

  /**
   * Gets initial log exposure delay in ms.
   * (Original: getInitialLogExposureDelayMs)
   */
  static getInitialLogExposureDelayMs(): number {
    return getFeatureFlags().use_short_exposure_logging_delay ? 0 : 30000
  }

  /**
   * Gets retry log exposure delay in ms.
   * (Original: getRetryLogExposureDelayMs)
   */
  static getRetryLogExposureDelayMs(): number {
    return getFeatureFlags().use_short_exposure_logging_delay ? 1000 : 30000
  }

  /**
   * Updates experiment config for testing.
   * (Original: updateExperimentForTesting)
   */
  static updateExperimentForTesting(
    key: string,
    prop: string,
    value: any,
  ): void {
    const config = this.FrozenDyanmicConfigs.get(key)?.value
    if (config) {
      config[prop] = value
    }
  }

  /**
   * Updates feature gate for testing.
   * (Original: updateFeatureGateForTesting)
   */
  static updateFeatureGateForTesting(
    key: string,
    value: boolean,
    rule_id: string | null = null,
  ): void {
    this.FrozenFeatureGates.set(key, { value, rule_id })
  }

  /**
   * Sets render server flag for viewer tests.
   * (Original: setInRenderServerForViewerTests)
   */
  static setInRenderServerForViewerTests(): void {
    this.InRenderServerForViewerTests = true
  }

  /**
   * Clears all frozen configs, gates, and exposure sets.
   * (Original: clear)
   */
  static clear(): void {
    this.FrozenFeatureGates.clear()
    this.FrozenDyanmicConfigs.clear()
    this.AlreadyExposedFeatureGateSet.clear()
    this.ToBeExposedFeatureGateExposureMap.clear()
    this.AlreadyExposedDynamicConfigSet.clear()
    this.ToBeExposedDynamicConfigSet.clear()
    this.AlreadyExposedExperimentConfigSet.clear()
    this.ToBeExposedExperimentConfigSet.clear()
    if (this.LogExposureTimeoutHandle != null) {
      clearTimeout(this.LogExposureTimeoutHandle)
      this.LogExposureTimeoutHandle = null
    }
    this.InRenderServerForViewerTests = false
  }

  /**
   * Logs exposure for feature gates, dynamic configs, and experiments.
   * (Original: LogExposureCallback)
   */
  static LogExposureCallback = (): void => {
    if (!FrozenConfigManager.InRenderServerForViewerTests) {
      if (!isStatsigReady()) {
        console.error('Statsig is not ready to log exposures')
        if (FrozenConfigManager.notInTestingEnvForLogging()) {
          const event = {
            resource_type: 'exposure_log',
            source: 'web',
            statsig_ready: isStatsigReady(),
          }
          trackEventAnalytics(
            FrozenConfigManager.DataDogInvalidStatsigFetchKey,
            event,
            { forwardToDatadog: true },
          )
        }
        FrozenConfigManager.LogExposureTimeoutHandle = window.setTimeout(
          FrozenConfigManager.LogExposureCallback,
          FrozenConfigManager.getRetryLogExposureDelayMs(),
        )
        return
      }
      runProfileSession(
        'LogExposureCallback',
        PerfProfileLevel.DEFAULT,
        () => {
          // Feature gates
          for (const [key, gate] of FrozenConfigManager.ToBeExposedFeatureGateExposureMap) {
            if (
              isStatsigReady()
              && Statsig.instance.getLogger().logGateExposure(
                Statsig.getCurrentUser(),
                key,
                gate.value,
                gate.rule_id ?? 'unknown',
                [],
                {},
                true,
              )
            ) {
              FrozenConfigManager.ToBeExposedFeatureGateExposureMap.delete(key)
              FrozenConfigManager.AlreadyExposedFeatureGateSet.add(key)
            }
          }
          // Dynamic configs
          for (const key of FrozenConfigManager.ToBeExposedDynamicConfigSet) {
            if (isStatsigReady()) {
              Statsig.manuallyLogConfigExposure(key)
              FrozenConfigManager.AlreadyExposedDynamicConfigSet.add(key)
              FrozenConfigManager.ToBeExposedDynamicConfigSet.delete(key)
            }
          }
          // Experiment configs
          for (const key of FrozenConfigManager.ToBeExposedExperimentConfigSet) {
            if (isStatsigReady()) {
              Statsig.manuallyLogExperimentExposure(key, false)
              FrozenConfigManager.AlreadyExposedExperimentConfigSet.add(key)
              FrozenConfigManager.ToBeExposedExperimentConfigSet.delete(key)
            }
          }
          FrozenConfigManager.LogExposureTimeoutHandle = null
        },
      )
    }
  }
}

// Export refactored names

export const w = FrozenConfigManager
