/**
 * Retrieves network connection information from the browser's navigator.
 * Original function name: $$n2
 */
export function getConnectionInfo(): ConnectionInfo {
  const connection = window.navigator?.connection || {}
  return {
    connectionDownlinkMax: connection?.downlinkMax,
    connectionDownlink: connection?.downlink,
    connectionEffectiveType: connection?.effectiveType,
    connectionType: connection?.type,
    connectionRtt: connection?.rtt,
  }
}

/**
 * Retrieves hardware concurrency and device memory information from the browser's navigator.
 * Original function name: $$r0
 */
export function getNavigatorHardwareInfo(): NavigatorHardwareInfo {
  return {
    navigatorHardwareConcurrency: window.navigator?.hardwareConcurrency,
    navigatorDeviceMemory: window.navigator?.deviceMemory,
  }
}

/**
 * Retrieves device pixel ratio and window dimensions.
 * Original function name: $$a1
 */
export function getWindowDeviceInfo(): WindowDeviceInfo {
  return {
    devicePixelRatio: window.devicePixelRatio,
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
  }
}

/**
 * Types for returned objects.
 */
export interface ConnectionInfo {
  connectionDownlinkMax: number | undefined
  connectionDownlink: number | undefined
  connectionEffectiveType: string | undefined
  connectionType: string | undefined
  connectionRtt: number | undefined
}

export interface NavigatorHardwareInfo {
  navigatorHardwareConcurrency: number | undefined
  navigatorDeviceMemory: number | undefined
}

export interface WindowDeviceInfo {
  devicePixelRatio: number
  windowHeight: number
  windowWidth: number
}

// Refactored export names for easier imports
export const PH = getNavigatorHardwareInfo
export const VD = getWindowDeviceInfo
export const dd = getConnectionInfo
