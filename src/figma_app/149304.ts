import { getGpuDeviceInfo } from "../905/190247"
import { analyticsEventManager } from "../905/449184"
import { sendMetric } from "../905/485103"
import { getFeatureFlags } from "../905/601108"
import { customHistory } from "../905/612521"
import { WebGLDetector } from "../905/683920"
import { createWebGLContext, getPreferredWebGLContext } from "../905/686312"
import { logError } from "../905/714362"
import { getInitialDynamicConfig } from "../figma_app/594947"
import { GLContextType } from "../figma_app/763686"
import { BrowserInfo, getIsChromeOS, getIsLinux, getIsMac, getIsWindows, isMobilePlatform } from "../figma_app/778880"
import { isInteractionOrEvalMode } from "../figma_app/897289"

enum WebGLTestResult {
  SUCCESS = 0,
  NO_WEBGL = 1,
  STENCIL_TEST_FAILURE = 2,
}

/**
 * Checks if WebGPU is supported in the current environment
 * Original function: $$f2
 */
export function isWebGPUSupported(): boolean {
  if (getGraphicsBackendOverride() !== GLContextType.WebGPU) {
    // Check for unsupported browsers/platforms
    if (BrowserInfo.safari || BrowserInfo.firefox || isMobilePlatform || (getIsLinux() && !isInteractionOrEvalMode())) {
      return false
    }

    // Check Chrome version requirements
    if (BrowserInfo.chrome) {
      const webgpuConfig = getInitialDynamicConfig("webgpu_platform_device_config")
      const minimumChromiumVersion = webgpuConfig.get("minimum_chromium_version", 0)

      if (BrowserInfo.compareVersions([
        BrowserInfo.version.toString(),
        minimumChromiumVersion.toString(),
      ]) < 0 && !isInteractionOrEvalMode()) {
        return false
      }
    }
  }

  return navigator.gpu !== undefined
}

/**
 * Determines if WebGPU should be enabled based on various conditions
 * Original function: $$E7
 */
export function shouldEnableWebGPU(): boolean {
  // First check if WebGPU is supported at all
  if (!isWebGPUSupported()) {
    return false
  }

  const backendOverride = getGraphicsBackendOverride()

  // If we're not using WebGL1 or WebGL2, check WebGPU conditions
  if (backendOverride !== GLContextType.WebGL2 && backendOverride !== GLContextType.WebGL1) {
    // If we must use WebGPU or feature flags allow it
    if (mustUseWebGPU()) {
      return true
    }

    // Platform-specific WebGPU feature flag checks
    if (getIsMac()) {
      return !!getFeatureFlags().use_webgpu
    }
    else if (getIsWindows() || getIsChromeOS()) {
      return !!getFeatureFlags().use_webgpu_windows_chromeos
    }
    else if (getIsLinux() && isInteractionOrEvalMode()) {
      return !!getFeatureFlags().use_webgpu || !!getFeatureFlags().use_webgpu_windows_chromeos
    }
  }

  return false
}

/**
 * Determines if WebGL2 should be used
 * Original function: $$y5
 */
export function shouldUseWebGL2(): boolean {
  const backendOverride = GraphicsBackendManager.getInstance().graphicsBackendOverride()

  // Use WebGL2 if explicitly overridden, or if WebGL2 is supported and not using WebGL1
  return backendOverride === GLContextType.WebGL2
    || (backendOverride !== GLContextType.WebGL1 && WebGLDetector.isWebGL2Supported())
}

/**
 * Checks if WebGL2 is supported
 * Original function: $$b3
 */
export function isWebGL2Supported(): boolean {
  return WebGLDetector.isWebGL2Supported()
}

/**
 * Tests WebGL support and gathers GPU information
 * Original function: $$T6
 */
export function testWebGLSupport(): number {
  if (window.webGLTestResult == null) {
    window.webGLTestResult = (() => {
      let result = WebGLTestResult.SUCCESS

      try {
        // Try to create a WebGL context
        const createContext = (): WebGLRenderingContext | null => {
          const canvas = document.createElement("canvas")
          try {
            return canvas.getContext("webgl")
          }
          catch {
            // Context creation failed
            return null
          }
        }

        const glContext = createContext()

        // If no context, mark as unsupported
        if (!glContext) {
          result = WebGLTestResult.NO_WEBGL
          return result
        }

        // If context is lost, don't proceed with GPU info gathering
        if (glContext.isContextLost()) {
          return result
        }

        // Gather GPU information
        const gatherGpuInfo = (gl: WebGLRenderingContext) => {
          const debugInfoExtension = gl.getExtension("WEBGL_debug_renderer_info")
          const unmaskedRenderer = debugInfoExtension
            && `${gl.getParameter(debugInfoExtension.UNMASKED_RENDERER_WEBGL)}`.toLowerCase()

          const gpuInfo = {
            gpu_vendor: unmaskedRenderer
              ? (/\bamd\b|\bati\b/.test(unmaskedRenderer)
                ? "amd"
                : /\bnvidia\b/.test(unmaskedRenderer)
                  ? "nvidia"
                  : /\bintel\b/.test(unmaskedRenderer) ? "intel" : "unknown")
              : "unknown",
            gpu_api: unmaskedRenderer
              ? (/direct3d9/.test(unmaskedRenderer)
                ? "d3d9"
                : /direct3d11/.test(unmaskedRenderer)
                  ? "d3d11"
                  : /opengl/.test(unmaskedRenderer) ? "opengl" : "unknown")
              : "unknown",
          }

          sendMetric("page_load", gpuInfo).catch(error =>
            console.error("Error trying to send tags", gpuInfo, error),
          )
        }

        gatherGpuInfo(glContext)
      }
      catch {
        // In case of any error during testing, mark as unsupported
        result = WebGLTestResult.NO_WEBGL
      }

      return result
    })()
  }

  return window.webGLTestResult
}

/**
 * Manages graphics backend overrides based on feature flags or URL parameters
 */
class GraphicsBackendManager {
  _graphicsBackendOverride: GLContextType = GLContextType.None
  static _instance: GraphicsBackendManager | null = null

  constructor() {
    // Check feature flag overrides
    if (getFeatureFlags().webgl2_override) {
      this._graphicsBackendOverride = GLContextType.WebGL2
    }
    else if (getFeatureFlags().webgl1_override) {
      this._graphicsBackendOverride = GLContextType.WebGL1
    }
    else if (getFeatureFlags().webgpu_override) {
      this._graphicsBackendOverride = GLContextType.WebGPU
    }
    else if (getFeatureFlags().webgpu_webgl_url_param && customHistory.location) {
      // Check URL parameters for overrides
      const urlParams = new URLSearchParams(customHistory.location.search)

      if (urlParams.get("force-webgpu") === "1") {
        this._graphicsBackendOverride = GLContextType.WebGPU
      }
      else if (urlParams.get("force-webgl2") === "1") {
        this._graphicsBackendOverride = GLContextType.WebGL2
      }
      else if (urlParams.get("force-webgl1") === "1") {
        this._graphicsBackendOverride = GLContextType.WebGL1
      }
    }
  }

  /**
   * Gets the current graphics backend override
   */
  graphicsBackendOverride(): GLContextType {
    return this._graphicsBackendOverride
  }

  /**
   * Gets the singleton instance
   */
  static getInstance(): GraphicsBackendManager {
    if (!this._instance) {
      this._instance = new GraphicsBackendManager()
    }
    return this._instance
  }

  /**
   * Resets the instance for testing purposes
   */
  static resetForTests(): void {
    this._instance = null
  }
}

/**
 * Handles special cases for JSL UHD ChromeOS devices
 */
class JSLUHDChromeOSHandler {
  _isJSLUHDChromeOS: boolean = false
  static _instance: JSLUHDChromeOSHandler | null = null

  constructor() {
    this._isJSLUHDChromeOS = this.detectJSLUHDChromeOS()
  }

  /**
   * Detects if we're running on a JSL UHD ChromeOS device
   */
  detectJSLUHDChromeOS(): boolean {
    // Check basic requirements
    if (!getIsChromeOS() || !isWebGPUSupported() || !getFeatureFlags().use_webgpu_chromeos_jsl_override) {
      return false
    }

    const glContext = getPreferredWebGLContext(shouldUseWebGL2())
    if (!glContext) {
      return false
    }

    const debugInfoExtension = glContext.getExtension("WEBGL_debug_renderer_info")
    if (!debugInfoExtension) {
      return false
    }

    const unmaskedRenderer = glContext.getParameter(debugInfoExtension.UNMASKED_RENDERER_WEBGL)

    // Check for specific JSL UHD graphics with Vulkan
    return /uhd graphics \(jsl\)/i.test(unmaskedRenderer) && /vulkan/i.test(unmaskedRenderer)
  }

  /**
   * Determines if WebGPU must be used (e.g., for JSL UHD ChromeOS)
   */
  mustUseWebGPU(): boolean {
    return this._isJSLUHDChromeOS
  }

  /**
   * Gets the singleton instance
   */
  static getInstance(): JSLUHDChromeOSHandler {
    if (!this._instance) {
      this._instance = new JSLUHDChromeOSHandler()
    }
    return this._instance
  }

  /**
   * Resets the instance
   */
  static reset(): void {
    this._instance = null
  }
}

/**
 * Checks if WebGPU must be used based on device-specific requirements
 * Original function: $$v4
 */
export function mustUseWebGPU(): boolean {
  try {
    return JSLUHDChromeOSHandler.getInstance().mustUseWebGPU()
      || GraphicsBackendManager.getInstance().graphicsBackendOverride() === GLContextType.WebGPU
  }
  catch (error) {
    logError("Error checking if we must use WebGPU", error?.message ?? "Unknown error", {
      reportAsSentryError: true,
    })
    return false
  }
}

/**
 * Gets the current graphics backend override
 * Original function: $$A0
 */
function getGraphicsBackendOverride(): GLContextType {
  return GraphicsBackendManager.getInstance().graphicsBackendOverride()
}

/**
 * Checks for ASTC texture compression support
 * Original function: $$x8
 */
export function isASTCCompressionSupported(): boolean {
  const glContext = createWebGLContext(shouldUseWebGL2())
  return !!glContext?.getExtension("WEBGL_compressed_texture_astc")
}

/**
 * Sends WebGL initialization analytics
 * Original function: $$N1
 */
export function sendWebGLInitializationAnalytics(status: string): void {
  let webGLStatus = "webgl_not_supported"
  let renderer = "unknown"
  let vendor = "unknown"
  let version = "unknown"

  // If WebGL test passed, gather detailed info
  if (window.webGLTestResult === WebGLTestResult.SUCCESS) {
    webGLStatus = WebGLDetector.initializationStatus()
    const gpuDeviceInfo = getGpuDeviceInfo()

    if (gpuDeviceInfo) {
      renderer = gpuDeviceInfo.graphicsCardName
      vendor = gpuDeviceInfo.vendor
      version = gpuDeviceInfo.webGLVersion
    }
  }

  // Override status for WebGPU success
  if (status === "webgpu_success") {
    webGLStatus = "webgpu_success"
  }

  analyticsEventManager.trackDefinedEvent("rendering_and_animation.webgl_initialization", {
    status: webGLStatus,
    renderer,
    vendor,
    version,
  })
}

// Export aliases for backward compatibility
export const Ew = getGraphicsBackendOverride
export const IJ = sendWebGLInitializationAnalytics
export const Vu = isWebGPUSupported
export const WQ = isWebGL2Supported
export const Zj = mustUseWebGPU
export const ap = shouldUseWebGL2
export const dK = testWebGLSupport
export const wO = shouldEnableWebGPU
export const x2 = isASTCCompressionSupported
export const xt = WebGLTestResult
