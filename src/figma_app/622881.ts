import { useEffect, useMemo, useState } from 'react'
import { ColorSpaceEnum } from '../figma_app/763686'
import { desktopAPIInstance } from '../figma_app/876459'

/**
 * Converts a ColorSpaceEnum value to its corresponding string representation.
 * @param colorSpace - The color space enum value.
 * @returns The string representation of the color space.
 * @throws Error if the color space is unrecognized.
 * (Original: $$o2)
 */
export function getColorSpaceString(colorSpace: ColorSpaceEnum): PredefinedColorSpace {
  switch (colorSpace) {
    case ColorSpaceEnum.SRGB:
      return 'srgb'
    case ColorSpaceEnum.DISPLAY_P3:
      return 'display-p3'
    default:
      throw new Error(`unrecognized color profile: ${colorSpace}`)
  }
}

/**
 * Checks if the given color space is supported by WebGL.
 * @param colorSpace - The color space enum value.
 * @returns True if supported, false otherwise.
 * (Original: l)
 */
function isWebGLColorSpaceSupported(colorSpace: ColorSpaceEnum): boolean {
  try {
    if (colorSpace === ColorSpaceEnum.SRGB)
      return true
    const context = document.createElement('canvas').getContext('webgl')
    if (!context)
      throw new Error('failed to create webgl canvas context to determine support')
    if (!('drawingBufferColorSpace' in context))
      throw new Error('webgl context does not contain drawingBufferColorSpace attribute')
    const colorSpaceStr = getColorSpaceString(colorSpace)
    context.drawingBufferColorSpace = colorSpaceStr
    if (context.drawingBufferColorSpace !== colorSpaceStr)
      throw new Error(`webgl context does not support color space: ${colorSpaceStr}`)
    return true
  }
  catch {
    return false
  }
}

const webGLSupportCache = new Map<ColorSpaceEnum, boolean>()

/**
 * Memoized check for WebGL color space support.
 * @param colorSpace - The color space enum value.
 * @returns True if supported, false otherwise.
 * (Original: c)
 */
function getWebGLSupport(colorSpace: ColorSpaceEnum): boolean {
  if (webGLSupportCache.has(colorSpace))
    return webGLSupportCache.get(colorSpace)!
  const supported = isWebGLColorSpaceSupported(colorSpace)
  webGLSupportCache.set(colorSpace, supported)
  return supported
}

/**
 * Checks if the given color space is supported by 2D canvas and ImageData.
 * @param colorSpace - The color space enum value.
 * @returns True if supported, false otherwise.
 * (Original: u)
 */
function isCanvas2DColorSpaceSupported(colorSpace: ColorSpaceEnum): boolean {
  try {
    if (colorSpace === ColorSpaceEnum.SRGB)
      return true
    const canvas = document.createElement('canvas')
    const colorSpaceStr = getColorSpaceString(colorSpace)
    const ctx = canvas.getContext('2d', { colorSpace: colorSpaceStr })
    if (ctx) {
      if ('getContextAttributes' in ctx) {
        if (ctx.getContextAttributes().colorSpace !== colorSpaceStr)
          throw new Error('2d canvas context does not match the desired color space')
      }
      else {
        throw new Error('2d canvas context does not support getContextAttributes')
      }
    }
    else {
      throw new Error('failed to create 2d canvas context to determine support')
    }
    if (shouldUsePolyfill()) {
      const imgData = new ImageData(new Uint8ClampedArray([0, 0, 0, 0]), 1, 1, { colorSpace: colorSpaceStr })
      if (!('colorSpace' in imgData) || imgData.colorSpace !== colorSpaceStr)
        throw new Error(`image does not support color space: ${colorSpaceStr}`)
    }
    return true
  }
  catch {
    return false
  }
}

/**
 * Checks if CSS supports display-p3 color.
 * @returns True if supported, false otherwise.
 * (Original: $$p1)
 */
export function isCSSDisplayP3Supported(): boolean {
  return typeof CSS !== 'undefined'
    && typeof CSS.supports === 'function'
    && CSS.supports('color', 'color(display-p3 1 1 1)')
}

/**
 * Checks if the display supports P3 color gamut.
 * @returns True if supported, false otherwise.
 * (Original: _)
 */
function isDisplayP3Gamut(): boolean {
  return window.matchMedia('(color-gamut: p3)').matches
}

/**
 * Determines if a polyfill should be used for color space support.
 * @returns True if polyfill should be used, false otherwise.
 * (Original: $$h3)
 */
export const shouldUsePolyfill = (): boolean => !isCSSDisplayP3Supported()

/**
 * Gets the name of an alternative monitor that supports Display P3.
 * @returns The localized name of the monitor, or undefined.
 * (Original: m)
 */
async function getAlternativeMonitorName(): Promise<string | undefined> {
  if (!desktopAPIInstance)
    return
  const screens = await desktopAPIInstance.getActiveNSScreens()
  if (screens) {
    for (const screen of screens) {
      if (!screen.isCurrentWindow && screen.canRepresentDisplayGamutP3)
        return screen.localizedName
    }
  }
}

/**
 * Determines if the color space status is supported.
 * @param statusObj - The status object.
 * @returns True if supported, false otherwise.
 * (Original: $$g4)
 */
export function isColorSpaceStatusSupported(statusObj: { status: string }): boolean {
  switch (statusObj.status) {
    case 'SupportedNatively':
    case 'SupportedWithPolyfill':
      return true
    case 'MonitorNotSupported':
    case 'ClientNotSupported':
      return false
    default:
      return false
  }
}

/**
 * React hook to get the alternative monitor name.
 * @returns The alternative monitor name.
 * (Original: f)
 */
function useAlternativeMonitorName(): string | undefined {
  const [monitorName, setMonitorName] = useState<string | undefined>()
  useEffect(() => {
    getAlternativeMonitorName().then(setMonitorName)
  }, [])
  return monitorName
}

/**
 * React hook to track display P3 gamut support.
 * @returns True if supported, false otherwise.
 * (Original: E)
 */
function useDisplayP3Gamut(): boolean {
  const [isSupported, setIsSupported] = useState(isDisplayP3Gamut())
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSupported(isDisplayP3Gamut())
    }, 5000)
    return () => clearInterval(interval)
  }, [])
  return isSupported
}

/**
 * Checks if the desktop app is running in unmanaged color space.
 * @returns True if unmanaged, false otherwise.
 * (Original: y)
 */
function isUnmanagedColorSpace(): boolean {
  return !!desktopAPIInstance && desktopAPIInstance.getColorSpace() === 'unmanaged'
}

/**
 * Determines the color space support status and diagnostics.
 * @returns Status and diagnostics object.
 * (Original: $$b0)
 */
export function getColorSpaceSupportStatus() {
  const webGLSupported = useMemo(() => getWebGLSupport(ColorSpaceEnum.DISPLAY_P3), [])
  const canvas2DSupported = useMemo(() => isCanvas2DColorSpaceSupported(ColorSpaceEnum.DISPLAY_P3), [])
  const cssSupported = useMemo(() => isCSSDisplayP3Supported(), [])
  const unmanaged = isUnmanagedColorSpace()
  const alternativeMonitorName = useAlternativeMonitorName()
  const displayP3Gamut = useDisplayP3Gamut()

  if (webGLSupported && canvas2DSupported) {
    if (unmanaged) {
      return {
        status: 'ClientNotSupported',
        diagnostics: {
          client: 'desktop-app',
          shouldRestartDesktopAppInManagedColorSpace: true,
        },
      }
    }
    if (displayP3Gamut) {
      if (cssSupported) {
        return {
          status: 'SupportedNatively',
          diagnostics: null,
        }
      }
      return {
        status: 'SupportedWithPolyfill',
        diagnostics: null,
      }
    }
    return {
      status: 'MonitorNotSupported',
      diagnostics: {
        alternativeMonitorName,
      },
    }
  }
  return {
    status: 'ClientNotSupported',
    diagnostics: {
      client: desktopAPIInstance ? 'desktop-app' : 'browser',
    },
  }
}

// Exported names refactored for clarity and traceability
export const Av = getColorSpaceSupportStatus
export const Pv = isCSSDisplayP3Supported
export const VG = getColorSpaceString
export const p3 = shouldUsePolyfill
export const tK = isColorSpaceStatusSupported
