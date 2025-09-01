/**
 * Configuration and Lifecycle Management Module
 * 
 * This module handles plugin configuration, preferences management, lifecycle operations,
 * and file operations extracted from the main plugin file.
 * 
 * Key responsibilities:
 * - Plugin configuration and preferences management
 * - Plugin lifecycle (initialization, termination, state management)
 * - Settings serialization and persistence
 * - File operations and local storage management
 * - Auto-run and plugin management utilities
 * - Organization and user preference handling
 * - Plugin matching and validation
 */

/**
 * Plugin Configuration Types
 */
export interface PublishedPluginConfig {
  type: 'published'
  pluginId: string
}

export interface LocalPluginConfig {
  type: 'local'
  localFileId: string
}

export type PluginConfig = PublishedPluginConfig | LocalPluginConfig

export interface PluginContext {
  localFileId?: string
  plugin_id?: string
}

export interface CodegenSettings {
  language: {
    type: string
    id: string
    pluginLanguage?: string | null
  }
  preferences: {
    unit: string
    customSettings?: any
    scaleFactor?: number | null
  }
  behavior: string
}

export interface PluginPreferences {
  pins: Array<{ pluginId: string; inherited?: boolean }>
  removedInheritedPins: string[]
  codegenSettings: CodegenSettings | null
}

/**
 * Plugin Configuration Manager
 */
export class PluginConfigurationManager {
  private config: PluginPreferences
  private parentPreferences: PluginPreferences | null
  private parentEnabledPreferences: PluginPreferences | null

  constructor(
    config: PluginPreferences,
    parentPreferences: PluginPreferences | null = null,
    parentEnabledPreferences: PluginPreferences | null = null
  ) {
    this.config = config
    this.parentPreferences = parentPreferences
    this.parentEnabledPreferences = parentEnabledPreferences
  }

  /**
   * Get pinned plugin IDs with inheritance logic
   * Original: get pinnedPluginIDs()
   */
  getPinnedPluginIds(): string[] {
    const orgPinsNotInUserPins = this.getOrgPinsNotInUserPins()
    const allPins = [...this.config.pins, ...orgPinsNotInUserPins]
    const removedSet = new Set(this.config.removedInheritedPins)
    
    return allPins
      .filter(pin => {
        if (removedSet.has(pin.pluginId)) return false
        if (!pin.inherited) return true
        return this.isInheritedPinValid(pin.pluginId)
      })
      .map(pin => pin.pluginId)
  }

  /**
   * Get codegen settings with inheritance
   * Original: get codegenSettings()
   */
  getCodegenSettings(): CodegenSettings | null {
    const hasOverride = this.config.codegenSettings?.behavior === 'OVERRIDE'
    
    if (this.parentPreferences && !hasOverride) {
      return this.parentPreferences.codegenSettings ?? null
    }
    
    return this.config.codegenSettings
  }

  /**
   * Update configuration with functional updates
   * Original: update(e)
   */
  update(updater: (config: PluginPreferences) => void): PluginConfigurationManager {
    const newConfig = { ...this.config }
    updater(newConfig)
    return new PluginConfigurationManager(
      newConfig,
      this.parentPreferences,
      this.parentEnabledPreferences
    )
  }

  /**
   * Pin a plugin
   * Original: pinPlugin(e)
   */
  pinPlugin(pluginId: string): PluginConfigurationManager {
    return this.update(config => {
      config.pins = [...config.pins, { pluginId, inherited: false }]
    })
  }

  /**
   * Unpin a plugin
   * Original: unpinPlugin(e)
   */
  unpinPlugin(pluginId: string): PluginConfigurationManager {
    return this.update(config => {
      config.pins = config.pins.filter(pin => pin.pluginId !== pluginId)
      
      // Add to removed inherited pins if it was inherited
      if (this.isInheritedPin(pluginId)) {
        config.removedInheritedPins = [...config.removedInheritedPins, pluginId]
      }
    })
  }

  /**
   * Move pin position
   * Original: movePin(e, t)
   */
  movePin(pluginId: string, newIndex: number): PluginConfigurationManager {
    return this.update(config => {
      const currentIndex = config.pins.findIndex(pin => pin.pluginId === pluginId)
      if (currentIndex === -1) return

      const pin = config.pins[currentIndex]
      const newPins = [...config.pins]
      newPins.splice(currentIndex, 1)
      newPins.splice(newIndex, 0, pin)
      config.pins = newPins
    })
  }

  /**
   * Set codegen settings
   * Original: setCodegenSetting(e)
   */
  setCodegenSettings(settings: CodegenSettings | null): PluginConfigurationManager {
    return this.update(config => {
      config.codegenSettings = settings
    })
  }

  /**
   * Set codegen language
   * Original: setCodegenSettingLanguage(e)
   */
  setCodegenLanguage(language: any): PluginConfigurationManager {
    return this.update(config => {
      const langType = this.localLanguageTypeToLgLanguageType(language.type)
      if (!langType) throw new Error('Invalid language type')

      const newLanguage = {
        ...language,
        type: langType,
        pluginLanguage: language.pluginLanguage ?? null
      }

      const currentSettings = this.getCodegenSettings()
      config.codegenSettings = {
        language: newLanguage,
        preferences: currentSettings?.preferences || this.getDefaultPreferences(),
        behavior: currentSettings?.behavior || 'INHERIT'
      }
    })
  }

  /**
   * Set codegen unit
   * Original: setCodegenSettingUnit(e)
   */
  setCodegenUnit(unit: string): PluginConfigurationManager {
    return this.update(config => {
      const currentSettings = this.getCodegenSettings()
      if (!currentSettings) return

      config.codegenSettings = {
        ...currentSettings,
        preferences: {
          ...currentSettings.preferences,
          unit: this.localUnitToLgUnit(unit)
        }
      }
    })
  }

  /**
   * Set custom codegen settings
   * Original: setCodegenSettingCustomSettings(e, t)
   */
  setCodegenCustomSettings(language: any, customSettings: any): PluginConfigurationManager {
    return this.update(config => {
      const currentSettings = this.getCodegenSettings()
      if (!currentSettings) return

      const langType = this.localLanguageTypeToLgLanguageType(language.type)
      if (!langType) throw new Error('Invalid language type')

      const newLanguage = {
        ...language,
        type: langType,
        pluginLanguage: language.pluginLanguage ?? null
      }

      const newPreferences = {
        scaleFactor: currentSettings.preferences?.scaleFactor ?? null,
        unit: currentSettings.preferences?.unit ?? null,
        customSettings: {
          ...currentSettings.preferences?.customSettings,
          ...customSettings.customSettings
        }
      }

      config.codegenSettings = {
        language: newLanguage,
        preferences: newPreferences,
        behavior: currentSettings.behavior
      }
    })
  }

  /**
   * Serialize configuration for storage
   * Original: serialize()
   */
  serialize(): PluginPreferences {
    return { ...this.config }
  }

  // Private helper methods

  private getOrgPinsNotInUserPins(): Array<{ pluginId: string; inherited: boolean }> {
    // Mock implementation - would contain actual org pin logic
    return []
  }

  private isInheritedPinValid(_pluginId: string): boolean {
    // Mock implementation - would check parent preferences
    return !!this.parentPreferences
  }

  private isInheritedPin(pluginId: string): boolean {
    // Check if plugin exists in parent preferences
    return !!this.parentPreferences?.pins.some(pin => pin.pluginId === pluginId)
  }

  private localLanguageTypeToLgLanguageType(type: string): string | null {
    // Mock mapping - would contain actual language type conversion
    const mapping: Record<string, string> = {
      'first-party': 'FIRST_PARTY',
      'plugin': 'PLUGIN'
    }
    return mapping[type] || null
  }

  private localUnitToLgUnit(unit: string): string {
    // Mock conversion - would contain actual unit conversion
    return unit.toUpperCase()
  }

  private getDefaultPreferences() {
    return {
      customSettings: null,
      unit: 'PIXEL',
      scaleFactor: null
    }
  }
}

/**
 * Plugin Lifecycle Manager
 */
export class PluginLifecycleManager {
  private currentRunState: any = null
  private runQueue: any[] = []
  private upgradeHandler: ((plugin: any) => void) | null = null

  /**
   * Set upgrade handler for plugin updates
   * Original: setUpgradeHandler(e)
   */
  setUpgradeHandler(handler: (plugin: any) => void): void {
    this.upgradeHandler = handler
  }

  /**
   * Handle plugin upgrade
   * Original: handleUpgrade(e)
   */
  handleUpgrade(plugin: any): void {
    if (this.upgradeHandler) {
      this.upgradeHandler(plugin)
    }
  }

  /**
   * Add plugin to run queue
   * Original: enqueue(e)
   */
  enqueue(pluginTask: any): void {
    this.runQueue.push(pluginTask)
  }

  /**
   * Get current run status
   * Original: getCurrentRunStatusOrNull()
   */
  getCurrentRunStatus(): any | null {
    return this.currentRunState
  }

  /**
   * Get run queue length
   * Original: getRunQueueLength()
   */
  getRunQueueLength(): number {
    return this.runQueue.length
  }

  /**
   * Check if plugin is currently running
   * Original: isCurrentlyRunning({ runPluginArgs: e, mode: t })
   */
  isCurrentlyRunning(pluginArgs: any, mode: string): boolean {
    return !!this.findExistingRunState(pluginArgs, mode)
  }

  /**
   * Find existing run state for plugin
   * Original: findExistingRunState({ runPluginArgs: e, mode: t })
   */
  findExistingRunState(pluginArgs: any, mode: string): any | null {
    const currentPluginId = this.currentRunState?.runPluginArgs.plugin.plugin_id
    
    if (currentPluginId === pluginArgs.plugin.plugin_id) {
      return this.currentRunState
    }

    return this.runQueue.find(state => 
      state.runPluginArgs.plugin.plugin_id === pluginArgs.plugin.plugin_id &&
      state.mode === mode
    ) || null
  }

  /**
   * Prepare plugin for execution
   * Original: prepPluginForRun(e)
   */
  prepPluginForRun(plugin: any): void {
    this.log('prepPluginForRun', 'Prepping plugin for run', { plugin })
    
    // Mock implementation - would contain actual plugin preparation
    // dW(plugin, null)
    // f$()
    // n4()
    // hY()
  }

  /**
   * Terminate plugin execution
   * Original: terminatePlugin()
   */
  async terminatePlugin(): Promise<void> {
    this.log('terminatePlugin', 'Terminating plugin')
    this.currentRunState = null
    
    // Mock implementation - would contain actual termination logic
    // await wY()
    // await yQ()
  }

  /**
   * Maybe terminate plugin before run
   * Original: maybeTerminatePluginBeforeRun()
   */
  async maybeTerminatePluginBeforeRun(): Promise<void> {
    // Mock implementation - would contain conditional termination logic
    this.log('maybeTerminatePluginBeforeRun', 'Maybe terminating plugin')
  }

  /**
   * Maybe terminate plugin after run settled
   * Original: maybeTerminatePluginAfterRunSettled(e)
   */
  async maybeTerminatePluginAfterRunSettled(runState: any): Promise<void> {
    const { mode } = runState
    
    this.log('maybeTerminatePluginAfterRunSettled', 'Maybe terminating plugin', {
      toMaybeTerminate: runState
    })

    switch (mode) {
      case 'run-forever':
        if (this.runQueue.length > 0) {
          await this.terminatePlugin()
        }
        break
      case 'run-and-terminate':
        await this.terminatePlugin()
        break
      default:
        console.warn('Unknown run mode:', mode)
    }
  }

  /**
   * Create plugin task
   * Original: createTask(e)
   */
  createTask(taskConfig: any): any {
    return {
      id: Date.now().toString(),
      config: taskConfig,
      status: 'pending',
      createdAt: new Date()
    }
  }

  /**
   * Log lifecycle events
   * Original: log(t, r, n = {})
   */
  private log(method: string, message: string, data: any = {}): void {
    // Using console.warn for development logging - would use proper logger in production
    console.warn(`[PluginLifecycle:${method}] ${message}`, data)
  }
}

/**
 * Plugin Configuration Utilities
 */
export class PluginConfigUtils {
  /**
   * Check if plugin configuration matches context
   * Original function: isPluginConfigMatching
   */
  static isPluginConfigMatching(
    pluginConfig: PluginConfig | null | undefined,
    pluginContext: PluginContext
  ): boolean {
    if (!pluginConfig) return false

    if (pluginConfig.type === 'local') {
      return !!pluginContext.localFileId && 
        pluginConfig.localFileId === pluginContext.localFileId
    }

    if (pluginConfig.type === 'published') {
      return !pluginContext.localFileId && 
        !!pluginContext.plugin_id &&
        pluginConfig.pluginId === pluginContext.plugin_id
    }

    return false
  }

  /**
   * Validate plugin configuration
   */
  static validatePluginConfig(config: PluginConfig): boolean {
    if (config.type === 'local') {
      return !!config.localFileId && typeof config.localFileId === 'string'
    }

    if (config.type === 'published') {
      return !!config.pluginId && typeof config.pluginId === 'string'
    }

    return false
  }

  /**
   * Create default plugin preferences
   */
  static createDefaultPreferences(): PluginPreferences {
    return {
      pins: [],
      removedInheritedPins: [],
      codegenSettings: null
    }
  }

  /**
   * Create default codegen settings
   */
  static createDefaultCodegenSettings(): CodegenSettings {
    return {
      language: {
        type: 'FIRST_PARTY',
        id: 'CSS',
        pluginLanguage: null
      },
      preferences: {
        customSettings: null,
        unit: 'PIXEL',
        scaleFactor: null
      },
      behavior: 'INHERIT'
    }
  }
}

/**
 * Local Storage and Persistence Manager
 */
export class PersistenceManager {
  private storagePrefix: string

  constructor(storagePrefix = 'figma_plugin_') {
    this.storagePrefix = storagePrefix
  }

  /**
   * Save plugin preferences to local storage
   */
  savePreferences(userId: string, preferences: PluginPreferences): void {
    try {
      const key = `${this.storagePrefix}prefs_${userId}`
      const serialized = JSON.stringify(preferences)
      localStorage.setItem(key, serialized)
    } catch (error) {
      console.error('Failed to save preferences:', error)
    }
  }

  /**
   * Load plugin preferences from local storage
   */
  loadPreferences(userId: string): PluginPreferences | null {
    try {
      const key = `${this.storagePrefix}prefs_${userId}`
      const serialized = localStorage.getItem(key)
      
      if (!serialized) return null
      
      return JSON.parse(serialized)
    } catch (error) {
      console.error('Failed to load preferences:', error)
      return null
    }
  }

  /**
   * Clear plugin preferences
   */
  clearPreferences(userId: string): void {
    try {
      const key = `${this.storagePrefix}prefs_${userId}`
      localStorage.removeItem(key)
    } catch (error) {
      console.error('Failed to clear preferences:', error)
    }
  }

  /**
   * Set lifecycle local storage item
   * Original: setLifecycleLocalStorageItem(e)
   */
  setLifecycleItem(name: string, data: any): void {
    try {
      const key = `${this.storagePrefix}lifecycle_${name}`
      localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      console.error('Failed to set lifecycle item:', error)
    }
  }

  /**
   * Get lifecycle local storage item
   */
  getLifecycleItem(name: string): any | null {
    try {
      const key = `${this.storagePrefix}lifecycle_${name}`
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch (error) {
      console.error('Failed to get lifecycle item:', error)
      return null
    }
  }

  /**
   * Increment lifecycle counter
   * Original: incrementLifecycleCounter()
   */
  incrementLifecycleCounter(name: string): void {
    const current = this.getLifecycleItem(name)
    const updated = {
      count: current?.count ? current.count + 1 : 1,
      updatedAt: new Date().toISOString()
    }
    this.setLifecycleItem(name, updated)
  }

  /**
   * Remove stale lifecycle storage items
   * Original: removeStaleLocalStorageLifecycleNames()
   */
  removeStaleLifecycleItems(): void {
    try {
      const keys = Object.keys(localStorage)
      const lifecycleKeys = keys.filter(key => 
        key.startsWith(`${this.storagePrefix}lifecycle_`)
      )
      
      // Remove items older than 30 days
      const thirtyDaysAgo = new Date()
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
      
      lifecycleKeys.forEach(key => {
        try {
          const item = JSON.parse(localStorage.getItem(key) || '{}')
          const updatedAt = new Date(item.updatedAt)
          
          if (updatedAt < thirtyDaysAgo) {
            localStorage.removeItem(key)
          }
        } catch {
          // Remove invalid items
          localStorage.removeItem(key)
        }
      })
    } catch (error) {
      console.error('Failed to remove stale lifecycle items:', error)
    }
  }
}

/**
 * Factory Functions
 */

/**
 * Create plugin configuration manager
 */
export function createPluginConfigurationManager(
  config: PluginPreferences,
  parentPreferences?: PluginPreferences | null,
  parentEnabledPreferences?: PluginPreferences | null
): PluginConfigurationManager {
  return new PluginConfigurationManager(config, parentPreferences, parentEnabledPreferences)
}

/**
 * Create plugin lifecycle manager
 */
export function createPluginLifecycleManager(): PluginLifecycleManager {
  return new PluginLifecycleManager()
}

/**
 * Create persistence manager
 */
export function createPersistenceManager(storagePrefix?: string): PersistenceManager {
  return new PersistenceManager(storagePrefix)
}

/**
 * Convenience Exports
 */
export {
  PluginConfigurationManager as ConfigManager,
  PluginConfigUtils as ConfigUtils,
  PluginLifecycleManager as LifecycleManager,
  PersistenceManager as StorageManager
}

/**
 * Default Export - Comprehensive Configuration and Lifecycle System
 */
export default {
  PluginConfigurationManager,
  PluginLifecycleManager,
  PluginConfigUtils,
  PersistenceManager,
  createPluginConfigurationManager,
  createPluginLifecycleManager,
  createPersistenceManager
}
