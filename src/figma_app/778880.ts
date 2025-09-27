import {
  android,
  blink,
  chrome,
  chromeos,
  compareVersions,
  firefox,
  ios,
  isUnsupportedBrowser,
  linux,
  mac,
  mobile,
  msedge,
  msie,
  name,
  osname,
  osversion,
  safari,
  tablet,
  version,
  webkit,
  windows,
} from 'bowser'
import { getFeatureFlags } from '../905/601108'
import { isGoogleMeetHardwareIntegration, isZoomIntegration } from '../figma_app/469876'

/**
 * Checks if the device is an iPad (including iPadOS on Mac).
 * Original: $$o8
 */
export const isIpadDevice = /iPad/.test(navigator.userAgent)
  || (/Mac/.test(navigator.userAgent)
    && !/iPhone/.test(navigator.userAgent)
    && navigator.maxTouchPoints > 2)
  || false

/**
 * Returns true if the OS is macOS.
 * Original: $$d15
 */
export function getIsMac(): boolean {
  return mac
}

/**
 * Returns true if the OS is Linux.
 * Original: $$c18
 */
export function getIsLinux(): boolean {
  return linux
}

/**
 * Returns true if the OS is Windows.
 * Original: $$u24
 */
export function getIsWindows(): boolean {
  return windows
}

/**
 * Returns true if the OS is ChromeOS.
 * Original: $$p11
 */
export function getIsChromeOS(): boolean {
  return chromeos
}

/**
 * Checks if the device is mobile based on user agent.
 * Original: $$_23
 */
export const isMobileUA: boolean = /Mobi/.test(navigator.userAgent)

/**
 * Returns true if the device is mobile.
 * Original: $$h22
 */
export function getIsMobile(): boolean {
  return isMobileUA
}

/**
 * Checks if the device is FigmaMirror-Android.
 * Original: $$m12
 */
export function isFigmaMirrorAndroid(): boolean {
  return /FigmaMirror-Android/.test(navigator.userAgent)
}

/**
 * Checks if the device is Android.
 * Original: $$g19
 */
export const isAndroidUA: boolean = /Android/.test(navigator.userAgent)

/**
 * Returns true if running inside FigmaMobile.
 * Original: $$f6
 */
export function isInFigmaMobile(): boolean {
  return !!window.FigmaMobile
}

/**
 * Checks if the device is iOS (iPhone, iPad, iPod).
 * Original: $$E14
 */
const isIOSUA: boolean = /iPhone|iPad|iPod/.test(navigator.userAgent)

/**
 * Checks if the device is iPhone or iPod.
 * Original: y
 */
const isIphoneOrIpodUA: boolean = /iPhone|iPod/.test(navigator.userAgent)

/**
 * Returns true if the device is iOS.
 * Original: $$b17
 */
export function getIsIOS(): boolean {
  return isIOSUA
}

/**
 * Checks if the device is Android or iOS.
 * Original: $$T2
 */
const isMobilePlatform: boolean = isAndroidUA || isIOSUA

/**
 * Checks if the device is mobile platform and not FigmaMobile.
 * Original: $$I25
 */
const isMobilePlatformNotFigmaMobile: boolean = isMobilePlatform && !isFigmaMobileApp()

/**
 * Checks if the device is Android or iPhone/iPod and not FigmaMobile.
 * Original: $$S21
 */
const isAndroidOrIphoneNotFigmaMobile: boolean
  = (isAndroidUA || isIphoneOrIpodUA) && !isFigmaMobileApp()

/**
 * Returns true if running inside FigmaMobile.
 * Original: $$O5
 */
export function isFigmaMobileApp(): boolean {
  return /FigmaMobile/.test(navigator.userAgent)
}

/**
 * Returns true if running inside FigmaMirror-Android.
 * Original: $$R20
 */
export function isFigmaMirrorAndroidApp(): boolean {
  return /FigmaMobile-Android/.test(navigator.userAgent)
}

/**
 * Returns true if running inside FigmaMobile-iOS.
 * Original: $$L16
 */
export function isFigmaMobileIOSApp(): boolean {
  return /FigmaMobile-iOS/.test(navigator.userAgent)
}

/**
 * Returns true if running inside FigmaMobile and handleTripleTaps is not present.
 * Original: $$C10
 */
export function isFigmaMobileWithoutTripleTaps(): boolean {
  return !!window.FigmaMobile && !window.FigmaMobile.handleTripleTaps
}

/**
 * Returns true if FigmaMirror-Android or FigmaMobile without triple taps.
 * Original: $$w4
 */
export function isMirrorOrMobileNoTripleTaps(): boolean {
  return isFigmaMirrorAndroid() || isFigmaMobileWithoutTripleTaps()
}

/**
 * Returns true if the device is mobile, Android, iPad, FigmaMobile, or FigmaMirror-Android.
 * Original: $$v9
 */
export const isAnyMobile: boolean
  = isMobileUA || isAndroidUA || isIpadDevice || isFigmaMobileApp() || isMirrorOrMobileNoTripleTaps()

/**
 * Returns true if the device is mobile and not in FigmaMobile.
 * Original: $$A3
 */
export function isMobileNotFigmaMobile(): boolean {
  return isAnyMobile && !isInFigmaMobile()
}

/**
 * Returns true if the device is any mobile.
 * Original: $$x7
 */
export function getIsAnyMobile(): boolean {
  return isAnyMobile
}

/**
 * Returns true if the device is Android or iPhone/iPod and not FigmaMobile.
 * Original: $$N1
 */
export function getIsAndroidOrIphoneNotFigmaMobile(): boolean {
  return isAndroidOrIphoneNotFigmaMobile
}

/**
 * Returns true if not any mobile.
 * Original: $$P13
 */
export function isNotMobile(): boolean {
  return !isAnyMobile
}

/**
 * Stores original values for overrides.
 * Original: D
 */
const originalOverrides: Record<string, any> = {}

/**
 * Browser and platform info object.
 * Original: $$k0
 */
export const BrowserInfo = {
  mac,
  windows,
  linux,
  chromeos,
  android,
  ios,
  chrome,
  firefox,
  msedge,
  safari,
  msie,
  webkit,
  blink,
  tablet,
  mobile,
  name,
  version,
  osname,
  osversion,
  compareVersions,
  isUnsupportedBrowser,
  /**
   * Checks if the browser is 64-bit.
   */
  get is64BitBrowser(): boolean {
    if (this.windows && !this.firefox)
      return /Win64|x64/.test(window.navigator.userAgent)
    return /MacIntel|Win64|x86_64/.test(window.navigator.platform)
  },
  /**
   * Checks if the browser supports WASM 4GB.
   */
  get isWasm4gbSupported(): boolean {
    if (this.chrome)
      return Number(this.version) >= 83
    if (this.firefox)
      return Number(this.version) >= 89
    if (this.safari)
      return Number(this.version) >= 15.2
    if (this.msedge)
      return Number(this.version) >= 89
    return false
  },
  /**
   * Returns browser type as string.
   */
  get browserType(): string | undefined {
    if (this.chrome)
      return 'chrome'
    if (this.firefox)
      return 'firefox'
    if (this.safari)
      return 'safari'
    if (this.msedge)
      return 'msedge'
    return undefined
  },
  /**
   * Checks if the browser is mobile.
   */
  get isMobileBrowser(): boolean {
    return /Mobi/.test(window.navigator.userAgent)
  },
  /**
   * Checks if running in native app.
   */
  get isInNativeApp(): boolean {
    return isInFigmaMobile()
  },
  /**
   * Checks if the device is iPad.
   */
  get isIpad(): boolean {
    return isIpadDevice()
  },
  /**
   * Checks if the device is iPad native app.
   */
  get isIpadNative(): boolean {
    return isIpadDevice() && window.FigmaMobile && window.FigmaMobile.shouldOptimizeForIpadApp
  },
  /**
   * Checks if the device is a Google Meet hardware device.
   */
  get isMeetDevice(): boolean {
    return !!getFeatureFlags().figjam_3p_hardware_device && isGoogleMeetHardwareIntegration()
  },
  /**
   * Checks if the device is a Zoom integration.
   */
  get isZoomIntegration(): boolean {
    return isZoomIntegration()
  },
  /**
   * Override browser info properties.
   * Original: override
   */
  override(overrides: Record<string, any>): void {
    for (const key in overrides) {
      if (!(key in originalOverrides)) {
        originalOverrides[key] = this[key]
      }
      this[key] = overrides[key]
    }
  },
  /**
   * Reset browser info overrides.
   * Original: resetOverrides
   */
  resetOverrides(): void {
    for (const key in originalOverrides) {
      this[key] = originalOverrides[key]
    }
  },
}

// Exported variables and functions (refactored names)
export const Ay = BrowserInfo
export const C8 = getIsAndroidOrIphoneNotFigmaMobile
export const EC = isMobilePlatform
export const FP = isMobileNotFigmaMobile
export const Ji = isMirrorOrMobileNoTripleTaps
export const KR = isFigmaMobileApp
export const Q1 = isInFigmaMobile
export const Wv = getIsAnyMobile
export const XN = isIpadDevice
export const Xb = isAnyMobile
export const Yb = isFigmaMobileWithoutTripleTaps
export const Zs = getIsChromeOS
export const _N = isFigmaMirrorAndroid
export const aJ = isNotMobile
export const aR = isIOSUA
export const cX = getIsMac
export const gR = isFigmaMobileIOSApp
export const j5 = getIsIOS
export const j9 = getIsLinux
export const m0 = isAndroidUA
export const mt = isFigmaMirrorAndroidApp
export const nW = isAndroidOrIphoneNotFigmaMobile
export const o4 = getIsMobile
export const rr = isMobileUA
export const uF = getIsWindows
export const uG = isMobilePlatformNotFigmaMobile
export const wg = isIpadDevice
