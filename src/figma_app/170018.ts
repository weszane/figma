import { DEVICE_PRESETS_BY_ID } from "../figma_app/349969"
import { assert, assertNotNullish } from "../figma_app/465776"
import { RotationType } from "../figma_app/763686"

// Renamed variables, added types, simplified logic, and improved readability
// Origin: $$s0, $$o3, $$l1, $$c4, $$u2 and their exports

interface Vector {
  x: number
  y: number
}

// Assuming this is a Redux-like store context
interface StoreContext {
  getCurrentPage: () => Page | null
}

interface Page {
  prototypeDevice?: {
    presetIdentifier: string
  }
}

/**
 * Gets the prototype device preset identifier from the current page.
 * @param storeContext - The Redux-like store context.
 * @returns The preset identifier or null if not set.
 */
export function getCurrentPagePrototypeDevicePresetIdentifier(storeContext: StoreContext): string | null {
  const currentPage = storeContext.getCurrentPage()
  assert(!!currentPage, "expected currentPage to exist")
  const prototypeDevice = currentPage.prototypeDevice
  return prototypeDevice ? prototypeDevice.presetIdentifier : null
}

/**
 * Scales a vector based on the aspect ratio of two reference vectors.
 * @param referenceVector1 - The first reference vector (e.g., screen size).
 * @param referenceVector2 - The second reference vector (e.g., frame size).
 * @param vectorToScale - The vector to scale.
 * @returns The scaled vector.
 */
export function scaleVectorByAspectRatio(
  referenceVector1: Vector,
  referenceVector2: Vector,
  vectorToScale: Vector,
): Vector {
  const aspectRatio1 = referenceVector1.x / referenceVector1.y
  const aspectRatio2 = referenceVector2.x / referenceVector2.y
  assert(
    Math.abs(aspectRatio1 - aspectRatio2) < 0.01,
    `Expected ${aspectRatio1} ≈ ${aspectRatio2}`,
  )

  const scale = referenceVector1.x / referenceVector2.x
  return {
    x: vectorToScale.x * scale,
    y: vectorToScale.y * scale,
  }
}

/**
 * Inverse scales a vector based on the ratio of two vectors.
 * @param referenceVector1 - The first reference vector.
 * @param vectorToScale - The vector to scale.
 * @param referenceVector2 - The second reference vector.
 * @returns The scaled vector.
 */
export function inverseScaleVector(
  referenceVector1: Vector,
  vectorToScale: Vector,
  referenceVector2: Vector,
): Vector {
  const scale = referenceVector1.x / referenceVector2.x
  return {
    x: vectorToScale.x * scale,
    y: vectorToScale.y * scale,
  }
}

/**
 * Calculates the ideal device size based on a preset identifier.
 * @param presetIdentifier - The device preset identifier.
 * @returns The ideal device size.
 */
function getDeviceImageIdealSize(presetIdentifier: string): Vector {
  const devicePreset = DEVICE_PRESETS_BY_ID[presetIdentifier]
  assertNotNullish(devicePreset, "getDeviceImageIdealSize must take in a valid presetIdentifier")
  return {
    x: devicePreset.imageSize.x / devicePreset.scaleFactor,
    y: devicePreset.imageSize.y / devicePreset.scaleFactor,
  }
}

/**
 * Gets device preset information, potentially rotated.
 * @param presetIdentifier - The device preset identifier.
 * @param rotationType - The rotation type.
 * @returns Object containing idealDeviceSize, framePresetSize, and offset.
 */
export function getDevicePresetInfo(
  presetIdentifier: string,
  rotationType: RotationType,
): {
  idealDeviceSize: Vector
  framePresetSize: Vector
  offset: Vector
} {
  // Function to swap x and y coordinates
  const rotateVector = (vector: Vector): Vector => ({
    x: vector.y,
    y: vector.x,
  })

  const { framePresetSize, offset } = DEVICE_PRESETS_BY_ID[presetIdentifier]
  const idealDeviceSize = getDeviceImageIdealSize(presetIdentifier)
  const isRotated = rotationType === RotationType.CCW_90

  // Calculate adjusted offset
  const adjustedOffset = {
    x: idealDeviceSize.x - framePresetSize.x - offset.x,
    y: offset.y,
  }

  if (isRotated) {
    return {
      idealDeviceSize: rotateVector(idealDeviceSize),
      framePresetSize: rotateVector(framePresetSize),
      offset: rotateVector(adjustedOffset),
    }
  }
  else {
    return {
      idealDeviceSize,
      framePresetSize,
      offset,
    }
  }
}

/**
 * Checks if two device presets are equivalent.
 * @param presetIdentifier1 - First device preset identifier.
 * @param presetIdentifier2 - Second device preset identifier.
 * @returns True if devices are equivalent, false otherwise.
 */
export function areDevicesEquivalent(
  presetIdentifier1: string,
  presetIdentifier2: string,
): boolean {
  const device1 = DEVICE_PRESETS_BY_ID[presetIdentifier1]
  const device2 = DEVICE_PRESETS_BY_ID[presetIdentifier2]

  assertNotNullish(device1, "expected device1 to exist")
  assertNotNullish(device2, "expected device2 to exist")

  return (
    device1.deviceName === device2.deviceName
    && device1.imageSize.x === device2.imageSize.x
    && device1.imageSize.y === device2.imageSize.y
  )
}

// Export aliases (keeping original names)
export const $W = getCurrentPagePrototypeDevicePresetIdentifier
export const BX = inverseScaleVector
export const Ew = areDevicesEquivalent
export const Ho = scaleVectorByAspectRatio
export const is = getDevicePresetInfo
