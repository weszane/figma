import { getFeatureFlags } from '../905/601108'
import { desktopAPIInstance } from '../figma_app/876459'

interface BinaryModuleRegistry {
  [key: string]: () => void
}

interface FeatureAPI {
  getFeatureFlags: () => ReturnType<typeof getFeatureFlags>
  desktopAppGetAPIVersion: () => number
}

/**
 * Registry for managing binary modules
 * Original name: s
 */
const binaryModuleRegistry: BinaryModuleRegistry = {}

/**
 * API for feature flags and desktop app version
 * Original name: $$a0
 */
export const featureAPI: FeatureAPI = {
  getFeatureFlags: () => getFeatureFlags(),
  desktopAppGetAPIVersion: () => desktopAPIInstance ? desktopAPIInstance.getVersion() : 0,
}

/**
 * Register a binary module with a specific key
 * Original name: $$o2
 * @param key - The identifier for the binary module
 * @param module - The binary module function to register
 */
export function registerBinaryModule(key: string, module: () => void): void {
  binaryModuleRegistry[key] = module
}

/**
 * Execute a registered binary module by key
 * Original name: $$l1
 * @param key - The identifier of the binary module to execute
 */
export function executeBinaryModule(key: string): void {
  const module = binaryModuleRegistry[key]
  if (module) {
    module()
  }
  else {
    console.warn(`The binary ${key} hasn't been loaded yet; nothing to refresh`)
  }
}

// Exported constants with descriptive names
export const LO = featureAPI
export const f_ = executeBinaryModule
export const vw = registerBinaryModule
