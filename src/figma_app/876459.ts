import { setContextGlobal } from '../905/11'
import { E as PopoutAPIWrapper } from '../905/55574'
import { OpenTarget } from '../905/380844'
import { DesktopAPI } from '../905/698995'
import { updateEnvironmentInfo } from '../905/883621'
import { checkVersionSupport, VersionSupportStatus } from '../figma_app/369803'
import { BrowserInfo } from '../figma_app/778880'

/**
 * Initializes the DesktopAPI from the global window object.
 * @returns {DesktopAPI | null}
 */
export const desktopAPIInstance = (() => {
  // $$c5
  const desktopAPIData = window.__figmaDesktop
  delete window.__figmaDesktop
  return desktopAPIData ? new DesktopAPI(desktopAPIData) : null
})()

/**
 * Initializes the PopoutAPIWrapper from the global window object.
 * @returns {PopoutAPIWrapper | null}
 */
const popoutAPIInstance = (() => {
  // $$u7
  const popoutAPIData = window.__figmaDesktopGetPopoutAPI?.()
  popoutAPIData?.lockAPI()
  return popoutAPIData ? new PopoutAPIWrapper(popoutAPIData) : null
})()

/**
 * Checks if running inside Figma Desktop by user agent.
 * @returns {boolean}
 */
const isFigmaDesktopUA = !!navigator.userAgent.match(/Figma\//) // $$p3

/**
 * Gets the bellFeedAPI from the global window object.
 * @returns {any | null}
 */
const bellFeedAPIInstance = window.bellFeedAPI ? window.bellFeedAPI : null // $$_2

/**
 * Returns the bellFeedAPI if its version is at least the required version.
 * @param {number} minVersion
 * @returns {any | null}
 */
export function getBellFeedAPI(minVersion: number) { // $$h1
  return window.bellFeedAPI
    && window.bellFeedAPI.version != null
    && window.bellFeedAPI.version >= minVersion
    ? window.bellFeedAPI
    : null
}

/**
 * Sets up environment info for Desktop or Popout API.
 */
const mainAPIInstance = desktopAPIInstance || popoutAPIInstance // m
if (mainAPIInstance && !navigator.userAgent.match(/figma-linux/)) {
  updateEnvironmentInfo({
    browser_name: 'Figma Desktop',
    desktop_channel: mainAPIInstance.beta ? 'beta' : 'stable',
    desktop_version: mainAPIInstance.getInformationalVersion(),
    desktop_client_id: mainAPIInstance.getClientID(),
    os_version: mainAPIInstance.getOSVersion(),
  })
  setContextGlobal('browser', {
    name: 'Desktop',
    version: mainAPIInstance.getInformationalVersion(),
  })
}

/**
 * Gets bellFeedAPI if its version is at least 8.
 */
const bellFeedAPIv8 = getBellFeedAPI(8) // g

if (bellFeedAPIv8) {
  updateEnvironmentInfo({
    browser_name: 'Figma Desktop',
    desktop_version: bellFeedAPIv8.desktopAppVersion,
    os_version: bellFeedAPIv8.osVersion,
  })
}

/**
 * Returns the deprecation date if the desktop version is deprecated.
 * @returns {string | null}
 */
export function getDeprecationDate() { // $$f0
  const versionSupport = checkVersionSupport(desktopAPIInstance?.getInformationalVersion())
  return versionSupport.status === VersionSupportStatus.DEPRECATED ? versionSupport.date : null
}

/**
 * Returns true if the desktop version is disabled.
 * @returns {boolean}
 */
export function isDesktopVersionDisabled() { // $$E8
  return checkVersionSupport(desktopAPIInstance?.getInformationalVersion()).status === VersionSupportStatus.DISABLED
}

/**
 * Checks if the current OS version is unsupported on Mac.
 * @returns {boolean}
 */
export function isUnsupportedMacVersion() { // $$y6
  if (desktopAPIInstance && BrowserInfo.mac) {
    const [major, minor] = `${BrowserInfo.osversion}`.split('.')
    return +major < 10 || (+major === 10 && +minor < 12)
  }
  return false
}


export function hasDesktopAPI() { // $$b9
  return !!desktopAPIInstance
}

// Exported variables with refactored names
export const GN = getDeprecationDate
export const O_ = getBellFeedAPI
export const S8 = bellFeedAPIInstance
export const Zy = isFigmaDesktopUA
export const aw = OpenTarget
export const eD = desktopAPIInstance
export const fU = isUnsupportedMacVersion
export const hX = popoutAPIInstance
export const hl = isDesktopVersionDisabled
export const y3 = hasDesktopAPI
