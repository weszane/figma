// Refactored to improve readability, added type safety, and used clearer method names.
// Original code name: $$n0

export interface StatsigDelegate {
  getDynamicConfigBoolean: (configName: string, key: string, defaultValue: boolean) => boolean
  getDynamicConfigNumber: (configName: string, key: string, defaultValue: number) => number
  getDynamicConfigString: (configName: string, key: string, defaultValue: string) => string
  getExperimentBoolean: (experimentName: string, parameter: string, defaultValue: boolean) => boolean
  getExperimentNumber: (experimentName: string, parameter: string, defaultValue: number) => number
  getExperimentString: (experimentName: string, parameter: string, defaultValue: string) => string
  getFeatureGate: (gateName: string) => boolean
  updateFeatureGateForTesting: (gateName: string, value: boolean) => void
  clearFeatureGatesForTesting: () => void
  setInRenderServerForViewerTests: () => void
  updateExperimentForTesting: (experimentName: string, parameter: string, value: string | number | boolean) => void
  clearExperimentsForTesting: () => void
}

export let statsigClient = new class {
  _statsigDelegate: StatsigDelegate | undefined

  /**
   * Sets the delegate that handles actual Statsig logic.
   * @param delegate - The delegate implementation.
   */
  setDelegate(delegate: StatsigDelegate): void {
    this._statsigDelegate = delegate
  }

  /**
   * Clears the current delegate.
   */
  clearDelegate(): void {
    this._statsigDelegate = undefined
  }

  /**
   * Gets a boolean value from dynamic config.
   * @param configName - Name of the config.
   * @param key - Key for the value.
   * @param defaultValue - Default value if not found.
   * @returns The boolean value or default.
   */
  getDynamicConfigBoolean(configName: string, key: string, defaultValue: boolean): boolean {
    return this._statsigDelegate
      ? this._statsigDelegate.getDynamicConfigBoolean(configName, key, defaultValue)
      : defaultValue
  }

  /**
   * Gets a number value from dynamic config.
   * @param configName - Name of the config.
   * @param key - Key for the value.
   * @param defaultValue - Default value if not found.
   * @returns The number value or default.
   */
  getDynamicConfigNumber(configName: string, key: string, defaultValue: number): number {
    return this._statsigDelegate
      ? this._statsigDelegate.getDynamicConfigNumber(configName, key, defaultValue)
      : defaultValue
  }

  /**
   * Gets a string value from dynamic config.
   * @param configName - Name of the config.
   * @param key - Key for the value.
   * @param defaultValue - Default value if not found.
   * @returns The string value or default.
   */
  getDynamicConfigString(configName: string, key: string, defaultValue: string): string {
    return this._statsigDelegate
      ? this._statsigDelegate.getDynamicConfigString(configName, key, defaultValue)
      : defaultValue
  }

  /**
   * Gets a boolean value from an experiment.
   * @param experimentName - Name of the experiment.
   * @param parameter - Parameter name.
   * @param defaultValue - Default value if not found.
   * @returns The boolean value or default.
   */
  getExperimentBoolean(experimentName: string, parameter: string, defaultValue: boolean): boolean {
    return this._statsigDelegate
      ? this._statsigDelegate.getExperimentBoolean(experimentName, parameter, defaultValue)
      : defaultValue
  }

  /**
   * Gets a number value from an experiment.
   * @param experimentName - Name of the experiment.
   * @param parameter - Parameter name.
   * @param defaultValue - Default value if not found.
   * @returns The number value or default.
   */
  getExperimentNumber(experimentName: string, parameter: string, defaultValue: number): number {
    return this._statsigDelegate
      ? this._statsigDelegate.getExperimentNumber(experimentName, parameter, defaultValue)
      : defaultValue
  }

  /**
   * Gets a string value from an experiment.
   * @param experimentName - Name of the experiment.
   * @param parameter - Parameter name.
   * @param defaultValue - Default value if not found.
   * @returns The string value or default.
   */
  getExperimentString(experimentName: string, parameter: string, defaultValue: string): string {
    return this._statsigDelegate
      ? this._statsigDelegate.getExperimentString(experimentName, parameter, defaultValue)
      : defaultValue
  }

  /**
   * Checks if a feature gate is enabled.
   * @param gateName - Name of the gate.
   * @returns True if enabled, false otherwise.
   */
  getFeatureGate(gateName: string): boolean {
    return !!this._statsigDelegate && this._statsigDelegate.getFeatureGate(gateName)
  }

  /**
   * Updates a feature gate for testing purposes.
   * @param gateName - Name of the gate.
   * @param value - Value to set.
   */
  updateFeatureGateForTesting(gateName: string, value: boolean): void {
    this._statsigDelegate?.updateFeatureGateForTesting(gateName, value)
  }

  /**
   * Clears all feature gates used for testing.
   */
  clearFeatureGatesForTesting(): void {
    this._statsigDelegate?.clearFeatureGatesForTesting()
  }

  /**
   * Sets the client in render server mode for viewer tests.
   */
  setInRenderServerForViewerTests(): void {
    this._statsigDelegate?.setInRenderServerForViewerTests()
  }

  /**
   * Updates an experiment for testing.
   * @param experimentName - Name of the experiment.
   * @param parameter - Parameter to update.
   * @param value - New value.
   */
  updateExperimentForTesting(
    experimentName: string,
    parameter: string,
    value: string | number | boolean,
  ): void {
    this._statsigDelegate?.updateExperimentForTesting(experimentName, parameter, value)
  }

  /**
   * Clears all experiments used for testing.
   */
  clearExperimentsForTesting(): void {
    this._statsigDelegate?.clearExperimentsForTesting()
  }
}()

export const v = statsigClient
