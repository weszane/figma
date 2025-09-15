import {
  FrozenConfigManager,
} from '../905/669698'

/**
 * ConfigManagerProxy provides a proxy interface to FrozenConfigManager for
 * accessing dynamic configs, experiments, and feature gates.
 *
 * Original class name: $$s0
 */
export class ConfigManagerProxy {
  /**
   * Retrieves a boolean value from dynamic config.
   * @param key - Config key
   * @param defaultValue - Default value if not found
   * @param options - Additional options
   */
  getDynamicConfigBoolean(key: string, defaultValue: boolean, options?: any): boolean {
    return FrozenConfigManager.getDynamicConfigBoolean(key, defaultValue, options)
  }

  /**
   * Retrieves a number value from dynamic config.
   * @param key - Config key
   * @param defaultValue - Default value if not found
   * @param options - Additional options
   */
  getDynamicConfigNumber(key: string, defaultValue: number, options?: any): number {
    return FrozenConfigManager.getDynamicConfigNumber(key, defaultValue, options)
  }

  /**
   * Retrieves a string value from dynamic config.
   * @param key - Config key
   * @param defaultValue - Default value if not found
   * @param options - Additional options
   */
  getDynamicConfigString(key: string, defaultValue: string, options?: any): string {
    return FrozenConfigManager.getDynamicConfigString(key, defaultValue, options)
  }

  /**
   * Retrieves a boolean value from experiments.
   * @param key - Experiment key
   * @param defaultValue - Default value if not found
   * @param options - Additional options
   */
  getExperimentBoolean(key: string, defaultValue: boolean, options?: any): boolean {
    return FrozenConfigManager.getExperimentBoolean(key, defaultValue, options)
  }

  /**
   * Retrieves a number value from experiments.
   * @param key - Experiment key
   * @param defaultValue - Default value if not found
   * @param options - Additional options
   */
  getExperimentNumber(key: string, defaultValue: number, options?: any): number {
    return FrozenConfigManager.getExperimentNumber(key, defaultValue, options)
  }

  /**
   * Retrieves a string value from experiments.
   * @param key - Experiment key
   * @param defaultValue - Default value if not found
   * @param options - Additional options
   */
  getExperimentString(key: string, defaultValue: string, options?: any): string {
    return FrozenConfigManager.getExperimentString(key, defaultValue, options)
  }

  /**
   * Gets the value of a feature gate.
   * @param gateName - Name of the feature gate
   */
  getFeatureGate(gateName: string): boolean {
    return FrozenConfigManager.getFeatureGateFromInitialOptions(gateName)
  }

  /**
   * Updates a feature gate for testing purposes.
   * @param gateName - Name of the feature gate
   * @param value - Value to set
   */
  updateFeatureGateForTesting(gateName: string, value: boolean): void {
    FrozenConfigManager.updateFeatureGateForTesting(gateName, value)
  }

  /**
   * Clears all feature gates for testing.
   */
  clearFeatureGatesForTesting(): void {
    FrozenConfigManager.clear()
  }

  /**
   * Sets the render server for viewer tests.
   */
  setInRenderServerForViewerTests(): void {
    FrozenConfigManager.setInRenderServerForViewerTests()
  }

  /**
   * Updates an experiment for testing purposes.
   * @param experimentName - Name of the experiment
   * @param value - Value to set
   * @param options - Additional options
   */
  updateExperimentForTesting(experimentName: string, value: any, options?: any): void {
    FrozenConfigManager.updateExperimentForTesting(experimentName, value, options)
  }

  /**
   * Clears all experiments for testing.
   */
  clearExperimentsForTesting(): void {
    FrozenConfigManager.clear()
  }
}

// Refactored export name: B -> ConfigManagerProxy
export const B = ConfigManagerProxy
