import { APPLE_WATCH_PRESET_LIST } from "../905/432457"
import { APPLE_PRESET_LIST } from "../905/484990"
import { ANDROID_PRESET_LIST } from "../905/505138"
import { Extended_PRESET_LIST } from "../905/873528"
import { assertNotNullish } from "../figma_app/465776"

interface FramePreset {
  deviceName: string
  framePresetSize: Size
}
interface Size {
  x: number
  y: number
}

interface DevicePreset {
  presetIdentifier: string
  deviceName: string
  framePresetSize: Size
  archived?: boolean
  isSuggested?: boolean
  hideUnlessActive?: boolean
  url?: string
  inlinePreviewInfo?: {
    hitTargetSvgUrl: string
  }
  imageSize?: Size
  scaleFactor?: number
  offset?: Size
}

// Presentation slide presets
const PRESENTATION_SLIDES: FramePreset[] = [
  {
    deviceName: "Slide 16:9",
    framePresetSize: {
      x: 1920,
      y: 1080,
    },
  },
  {
    deviceName: "Slide 4:3",
    framePresetSize: {
      x: 1024,
      y: 768,
    },
  },
]

// Create a map of all device presets by their identifier for quick lookup
export const DEVICE_PRESETS_BY_ID: Record<string, DevicePreset> = Object.create(null)
for (const presetList of [ANDROID_PRESET_LIST, Extended_PRESET_LIST, APPLE_WATCH_PRESET_LIST, APPLE_PRESET_LIST]) {
  for (const preset of presetList) {
    DEVICE_PRESETS_BY_ID[preset.presetIdentifier] = preset
  }
}

/**
 * Extract unique device names from preset lists, optionally collecting archived device names
 * @param presets - Array of device presets
 * @param archivedDevices - Optional array to collect archived device names
 * @returns Array of non-archived device names
 */
function getUniqueDeviceNames(presets: DevicePreset[], archivedDevices?: string[]): string[] {
  const seenDeviceNames = new Set<string>()
  const activeDeviceNames: string[] = []

  for (const preset of presets) {
    if (!seenDeviceNames.has(preset.deviceName)) {
      seenDeviceNames.add(preset.deviceName)
      if (preset.archived) {
        archivedDevices?.push(preset.deviceName)
      }
      else {
        activeDeviceNames.push(preset.deviceName)
      }
    }
  }

  return activeDeviceNames
}

// Collect archived device names
const archivedDeviceNames: string[] = []

// Get unique device names for each preset list
const androidDeviceNames = getUniqueDeviceNames(ANDROID_PRESET_LIST, archivedDeviceNames)
const extendedDeviceNames = getUniqueDeviceNames(Extended_PRESET_LIST, archivedDeviceNames)
const appleWatchDeviceNames = getUniqueDeviceNames(APPLE_WATCH_PRESET_LIST, archivedDeviceNames)
const appleDeviceNames = getUniqueDeviceNames(APPLE_PRESET_LIST, archivedDeviceNames)

// Group presets by device name
const DEVICE_PRESETS_BY_NAME: Record<string, DevicePreset[]> = Object.create(null)
for (const presetId in DEVICE_PRESETS_BY_ID) {
  const preset = DEVICE_PRESETS_BY_ID[presetId]
  const deviceName = preset.deviceName

  if (!(deviceName in DEVICE_PRESETS_BY_NAME)) {
    DEVICE_PRESETS_BY_NAME[deviceName] = []
  }

  DEVICE_PRESETS_BY_NAME[deviceName].push(preset)
}

/**
 * Find a device preset matching specific dimensions
 * @param width - Width of the frame
 * @param height - Height of the frame
 * @returns Matching device preset or null
 */
function findPresetByDimensions(width: number, height: number): DevicePreset | null {
  for (const presetList of [ANDROID_PRESET_LIST, Extended_PRESET_LIST, APPLE_WATCH_PRESET_LIST, APPLE_PRESET_LIST]) {
    for (const preset of presetList) {
      if (preset.framePresetSize.x === width && preset.framePresetSize.y === height) {
        return preset
      }
    }
  }
  return null
}

/**
 * Check if a device type requires a custom frame
 * @param deviceType - Type of device frame
 * @param presetIdentifier - Identifier for the preset
 * @returns Whether a custom frame is needed
 */
export function isCustomFrameRequired(deviceType: string, presetIdentifier: string | null): boolean {
  if (deviceType === "NONE" || deviceType === "PRESENTATION") {
    return false
  }

  if (deviceType === "CUSTOM") {
    return true
  }

  if (deviceType === "PRESET" && presetIdentifier != null) {
    const preset = DEVICE_PRESETS_BY_ID[presetIdentifier]
    if (preset != null) {
      const isAppleWatch = appleWatchDeviceNames.includes(preset.deviceName)
      const isAppleDevice = appleDeviceNames.includes(preset.deviceName)
      return !isAppleWatch && !isAppleDevice
    }
  }

  return false
}

/**
 * Device categories enumeration
 */
export enum DeviceCategory {
  UNKNOWN = 0,
  PHONE = 1,
  TABLET = 2,
  WATCH = 3,
  DESKTOP = 4,
}

/**
 * Determine the category of a device by its preset identifier
 * @param presetIdentifier - Identifier for the preset
 * @returns Device category
 */
export function getDeviceCategory(presetIdentifier: string): DeviceCategory {
  const preset = DEVICE_PRESETS_BY_ID[presetIdentifier]
  if (preset == null) {
    return DeviceCategory.UNKNOWN
  }

  const deviceName = preset.deviceName
  if (androidDeviceNames.includes(deviceName)) {
    return DeviceCategory.PHONE
  }
  if (extendedDeviceNames.includes(deviceName)) {
    return DeviceCategory.TABLET
  }
  if (appleWatchDeviceNames.includes(deviceName)) {
    return DeviceCategory.WATCH
  }
  if (appleDeviceNames.includes(deviceName)) {
    return DeviceCategory.DESKTOP
  }

  return DeviceCategory.UNKNOWN
}

/**
 * Determine frame type and properties based on dimensions
 * @param width - Width of the frame
 * @param height - Height of the frame
 * @returns Frame information or null
 */
export function determineFrameType(width: number, height: number): {
  type: "PRESENTATION" | "PRESET"
  presetIdentifier: string
  portraitDeviceSize: { x: number, y: number }
  rotation: "NONE" | "CCW_90"
} | null {
  // Check if dimensions match presentation slides
  for (const slide of PRESENTATION_SLIDES) {
    if (slide.framePresetSize.x === width && slide.framePresetSize.y === height) {
      return {
        type: "PRESENTATION",
        presetIdentifier: "",
        portraitDeviceSize: {
          x: 0,
          y: 0,
        },
        rotation: "NONE",
      }
    }
  }

  // Try to find exact match
  let preset = findPresetByDimensions(width, height)
  if (preset != null) {
    return {
      type: "PRESET",
      presetIdentifier: preset.presetIdentifier,
      portraitDeviceSize: preset.framePresetSize,
      rotation: "NONE",
    }
  }

  // Try rotated match
  preset = findPresetByDimensions(height, width)
  if (preset != null && isCustomFrameRequired("PRESET", preset.presetIdentifier)) {
    return {
      type: "PRESET",
      presetIdentifier: preset.presetIdentifier,
      portraitDeviceSize: preset.framePresetSize,
      rotation: "CCW_90",
    }
  }

  return null
}

/**
 * Check if a device is a mobile device (not desktop or unknown)
 * @param presetIdentifier - Identifier for the preset
 * @returns Whether the device is a mobile device
 */
export function isMobileDevice(presetIdentifier: string | null): boolean {
  const category = getDeviceCategory(presetIdentifier || "")
  return category !== DeviceCategory.DESKTOP && category !== DeviceCategory.UNKNOWN
}

// Generate suggested device lists (unused but kept for compatibility)
getUniqueDeviceNames(ANDROID_PRESET_LIST.filter(preset => preset.isSuggested === true)).slice(0, 5)
getUniqueDeviceNames(Extended_PRESET_LIST).slice(0, 5)
getUniqueDeviceNames(APPLE_WATCH_PRESET_LIST).slice(0, 5)
getUniqueDeviceNames(APPLE_PRESET_LIST).slice(0, 5)

/**
 * Check if a device supports inline preview
 * @param presetIdentifier - Identifier for the preset
 * @returns Whether the device supports inline preview
 */
export function supportsInlinePreview(presetIdentifier: string): boolean {
  const preset = DEVICE_PRESETS_BY_ID[presetIdentifier]
  return !!preset?.inlinePreviewInfo
}

/**
 * Preload device images
 * @param presetIdentifier - Identifier for the preset
 */
function preloadImage(url: string): void {
  new Image().src = url
}

/**
 * Preload device preview images
 * @param presetIdentifier - Identifier for the preset
 */
export function preloadDevicePreviewImages(presetIdentifier: string): void {
  if (!presetIdentifier) {
    return
  }

  const preset = DEVICE_PRESETS_BY_ID[presetIdentifier]
  assertNotNullish(
    preset?.inlinePreviewInfo,
    "inline preview device info should not be null if we're preloading the device image. (presetDeviceSupportsInlinePreview == true)",
  )

  preloadImage(preset.url!)
  preloadImage(preset.inlinePreviewInfo!.hitTargetSvgUrl)
}

/**
 * Get device preset with fallback handling
 * @param deviceName - Name of the device
 * @param currentFrame - Current frame information
 * @returns Device preset or null
 */
export function getDevicePresetWithFallback(
  deviceName: string,
  currentFrame?: { type: string, presetIdentifier: string } | null,
): DevicePreset | null {
  let preset = DEVICE_PRESETS_BY_ID[deviceName] || DEVICE_PRESETS_BY_NAME[deviceName]?.[0]

  if (currentFrame && currentFrame.type === "PRESET") {
    const currentPreset = DEVICE_PRESETS_BY_ID[currentFrame.presetIdentifier]

    if (currentPreset) {
      const isSameSizeAndHidden
        = currentPreset.hideUnlessActive
          && !currentPreset.archived
          && preset.framePresetSize.x === currentPreset.framePresetSize.x
          && preset.framePresetSize.y === currentPreset.framePresetSize.y

      if (currentPreset.deviceName === deviceName) {
        preset = currentPreset
      }
      else if (!isSameSizeAndHidden && preset.hideUnlessActive && !preset.archived) {
        return null
      }
    }
  }
  else if (preset.hideUnlessActive && !preset.archived) {
    return null
  }

  return preset
}

// Export constants with meaningful names
export const $X = isCustomFrameRequired
export const $w = appleDeviceNames
export const AG = appleWatchDeviceNames
export const BG = determineFrameType
export const Fh = getDevicePresetWithFallback
export const Gn = preloadDevicePreviewImages
export const J_ = extendedDeviceNames
export const L_ = supportsInlinePreview
export const bq = DeviceCategory
export const dr = archivedDeviceNames
export const hY = DEVICE_PRESETS_BY_ID
export const ln = isMobileDevice
export const qt = getDeviceCategory
export const r6 = androidDeviceNames
export const yr = DEVICE_PRESETS_BY_NAME
