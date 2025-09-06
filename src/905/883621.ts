import { isAppShellEnabled } from '../905/561581'
import { entrypointVariant, uiVariantName } from '../905/709735'
import { getInitialOptions, getLocaleFallbacks } from '../figma_app/169182'
import { BrowserInfo, isIpadDevice } from '../figma_app/778880'

/**
 * Returns the OS name based on device type.
 * @returns {string} OS name
 * @original o
 */
const getOsName = (): string => isIpadDevice ? 'iPadOS' : BrowserInfo.osname

/**
 * Returns the OS version based on device type.
 * @returns {string} OS version
 * @original l
 */
const getOsVersion = (): string => isIpadDevice ? '0' : `${BrowserInfo.osversion}`

/**
 * Retrieves the navigator language at the specified index.
 * @param {number} index
 * @returns {string | undefined} Language code or undefined
 * @original d
 */
function getNavigatorLanguage(index: number): string | undefined {
  const languages = window.navigator.languages || []
  return index < languages.length ? languages[index] : undefined
}

/**
 * Type for environment info object.
 * @original c
 */
export interface EnvironmentInfo {
  browser_name: string
  browser_version: number
  bundler: string
  entrypoint_variant: string
  entrypoint: string
  isAppShell: boolean
  navigatorLanguage1?: string
  navigatorLanguage2?: string
  navigatorLanguage3?: string
  navigatorLanguages: string
  os_name: string
  os_version: string
  page_locale: string
  release_tag: string
  release: string
  uiVersion: string
  desktop_channel?: string
  desktop_version?: string
  desktop_client_id?: string
}

/**
 * Holds the current environment info.
 * @original c
 */
let environmentInfo: EnvironmentInfo = {
  browser_name: BrowserInfo.name,
  browser_version: +BrowserInfo.version,
  bundler: 'webpack',
  entrypoint_variant: entrypointVariant,
  entrypoint: window.ENTRY_POINT ?? 'unknown',
  isAppShell: isAppShellEnabled(),
  navigatorLanguage1: getNavigatorLanguage(0),
  navigatorLanguage2: getNavigatorLanguage(1),
  navigatorLanguage3: getNavigatorLanguage(2),
  navigatorLanguages: (window.navigator.languages || []).join(','),
  os_name: getOsName(),
  os_version: getOsVersion(),
  page_locale: getLocaleFallbacks()[0],
  release_tag: getInitialOptions().release_git_tag,
  release: getInitialOptions().release_manifest_git_commit,
  uiVersion: uiVariantName,
}

/**
 * Returns the current environment info.
 * @returns {EnvironmentInfo}
 * @original $$u0
 */
export const getEnvironmentInfo = (): EnvironmentInfo => environmentInfo

/**
 * Updates the environment info with new values.
 * @param {Partial<EnvironmentInfo>} updates
 * @original $$p1
 */
export function updateEnvironmentInfo(updates: Partial<EnvironmentInfo>): void {
  environmentInfo = {
    ...environmentInfo,
    ...updates,
  }
}

// Refactored exports for compatibility
export const X = getEnvironmentInfo
export const v = updateEnvironmentInfo
