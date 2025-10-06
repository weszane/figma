import { flattenObjectToTarget } from '../figma_app/493477'
import { FullscreenPerfMetrics } from '../figma_app/763686'
/**
 * Adds device information from the source object to the target object.
 * @param source - The source object containing device info.
 * @param target - The target object to receive device info.
 */
// Original function name: $$a1
export function addDeviceInfoToTarget(source: object, target: object): void {
  if (source) {
    flattenObjectToTarget(source, target, 'deviceInfo')
  }
}

/**
 * Retrieves GPU device information using FullscreenPerfMetrics.
 * @returns The GPU device info object or null if unavailable.
 */
// Original function name: $$s0
export function getGpuDeviceInfo() {
  return FullscreenPerfMetrics ? FullscreenPerfMetrics.getGpuDeviceInfo() : null
}

// Export aliases for backward compatibility
export const l = getGpuDeviceInfo
export const q = addDeviceInfoToTarget
