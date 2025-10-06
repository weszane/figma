import { DESKTOP_API_FEATURES } from '../905/82315'
import { isFigmaBetaOrDev } from '../905/981904'

/**
 * DesktopAPI class - original name: $$a0
 * Handles API-related operations for desktop features, versioning, and client information.
 */
export class DesktopApplicationAPI {
  api: any // Original: this.api = e; - assuming api object with version, osVersion, etc.

  /**
   * Constructor for DesktopAPI - original name: $$a0.constructor
   * @param api - The API object
   */
  constructor(api: any) {
    this.api = api
  }

  /**
   * Gets the API version - original name: $$a0.getVersion
   * @returns The API version
   */
  getVersion(): string {
    return this.api.version
  }

  /**
   * Checks if a feature is available - original name: $$a0.hasFeature
   * @param feature - The feature to check
   * @returns True if the feature is available
   */
  hasFeature(feature: string): boolean {
    if (!DESKTOP_API_FEATURES[feature]) {
      throw new Error(`hasFeature: unknown feature '${feature}'`)
    }
    return this.api.version >= DESKTOP_API_FEATURES[feature] || this.api.backportedApiFeatures?.includes(feature) || false
  }

  /**
   * Gets the OS version - original name: $$a0.getOSVersion
   * @returns The OS version
   */
  getOSVersion(): string {
    return this.api.osVersion
  }

  /**
   * Gets whether the app is in beta or dev mode - original name: $$a0.beta
   * @returns True if beta or dev
   */
  get beta(): boolean {
    return isFigmaBetaOrDev()
  }

  /**
   * Gets the informational app version - original name: $$a0.getInformationalVersion
   * @returns The app version
   */
  getInformationalVersion(): string {
    return this.api.appVersion
  }

  /**
   * Gets the client ID - original name: $$a0.getClientID
   * @returns The client ID
   */
  getClientID(): string {
    return this.api.clientID
  }
}

// Original export: export const E = $$a0;
// Refactored to match new class name for consistency in imports
export const E = DesktopApplicationAPI
