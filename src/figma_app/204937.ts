import { FrozenConfigManager } from "../figma_app/594947"

/**
 * Configuration manager class for handling feature gates and dynamic configs
 * Original class name: e
 */
export class StatsigConfigBindings {
  static readonly SOURCE_LOGGING_STRING = "fullscreen"

  /**
   * Logs exposure for a feature gate
   * @param featureGateId - The feature gate identifier
   * @param exposedValue - The value that was exposed
   */
  logFeatureGateExposure(featureGateId: string, exposedValue: any): void {
    FrozenConfigManager.logExposureForFeatureGate(featureGateId, exposedValue)
  }

  /**
   * Gets a dynamic config number rounded to the nearest integer
   * @param configKey - The configuration key
   * @param defaultValue - The default value if config not found
   * @param userId - The user identifier
   * @returns Rounded integer value
   */
  getDynamicConfigNumberAsRoundedInt(configKey: string, defaultValue: number, userId: string): number {
    return Math.round(
      FrozenConfigManager.getDynamicConfigNumber(
        configKey,
        defaultValue,
        userId,
        StatsigConfigBindings.SOURCE_LOGGING_STRING,
      ),
    )
  }

  /**
   * Gets an experiment number rounded to the nearest integer
   * @param experimentKey - The experiment key
   * @param defaultValue - The default value if experiment not found
   * @param userId - The user identifier
   * @returns Rounded integer value
   */
  getExperimentNumberAsRoundedInt(experimentKey: string, defaultValue: number, userId: string): number {
    return Math.round(
      FrozenConfigManager.getExperimentNumber(
        experimentKey,
        defaultValue,
        userId,
        StatsigConfigBindings.SOURCE_LOGGING_STRING,
      ),
    )
  }

  /**
   * Gets a dynamic config number as float
   * @param configKey - The configuration key
   * @param defaultValue - The default value if config not found
   * @param userId - The user identifier
   * @returns Float value
   */
  getDynamicConfigNumberAsFloat(configKey: string, defaultValue: number, userId: string): number {
    return FrozenConfigManager.getDynamicConfigNumber(
      configKey,
      defaultValue,
      userId,
      StatsigConfigBindings.SOURCE_LOGGING_STRING,
    )
  }

  /**
   * Gets an experiment number as float
   * @param experimentKey - The experiment key
   * @param defaultValue - The default value if experiment not found
   * @param userId - The user identifier
   * @returns Float value
   */
  getExperimentNumberAsFloat(experimentKey: string, defaultValue: number, userId: string): number {
    return FrozenConfigManager.getExperimentNumber(
      experimentKey,
      defaultValue,
      userId,
      StatsigConfigBindings.SOURCE_LOGGING_STRING,
    )
  }

  /**
   * Gets a dynamic config string value
   * @param configKey - The configuration key
   * @param defaultValue - The default value if config not found
   * @param userId - The user identifier
   * @returns String value
   */
  getDynamicConfigString(configKey: string, defaultValue: string, userId: string): string {
    return FrozenConfigManager.getDynamicConfigString(
      configKey,
      defaultValue,
      userId,
      StatsigConfigBindings.SOURCE_LOGGING_STRING,
    )
  }

  /**
   * Gets an experiment string value
   * @param experimentKey - The experiment key
   * @param defaultValue - The default value if experiment not found
   * @param userId - The user identifier
   * @returns String value
   */
  getExperimentString(experimentKey: string, defaultValue: string, userId: string): string {
    return FrozenConfigManager.getExperimentString(
      experimentKey,
      defaultValue,
      userId,
      StatsigConfigBindings.SOURCE_LOGGING_STRING,
    )
  }

  /**
   * Gets a dynamic config boolean value
   * @param configKey - The configuration key
   * @param defaultValue - The default value if config not found
   * @param userId - The user identifier
   * @returns Boolean value
   */
  getDynamicConfigBoolean(configKey: string, defaultValue: boolean, userId: string): boolean {
    return FrozenConfigManager.getDynamicConfigBoolean(
      configKey,
      defaultValue,
      userId,
      StatsigConfigBindings.SOURCE_LOGGING_STRING,
    )
  }

  /**
   * Gets an experiment boolean value
   * @param experimentKey - The experiment key
   * @param defaultValue - The default value if experiment not found
   * @param userId - The user identifier
   * @returns Boolean value
   */
  getExperimentBoolean(experimentKey: string, defaultValue: boolean, userId: string): boolean {
    return FrozenConfigManager.getExperimentBoolean(
      experimentKey,
      defaultValue,
      userId,
      StatsigConfigBindings.SOURCE_LOGGING_STRING,
    )
  }
}

// Export instances and constructors with meaningful names
export let fullscreenConfigInstance: StatsigConfigBindings | undefined

export function initializeFullscreenConfig(): void {
  fullscreenConfigInstance = new StatsigConfigBindings()
}

export const _v = StatsigConfigBindings
export const gR = fullscreenConfigInstance
export const kJ = initializeFullscreenConfig
