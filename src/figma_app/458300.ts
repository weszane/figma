import { getFeatureFlags } from "../905/601108"
import { B3 } from "../905/709095"
import { logError } from "../905/714362"
import { PerfProfileLevel, runProfileSession } from "../905/958077"
import { ColorSpaceEnum } from "../figma_app/763686"
import { colorProfileManagerInstance } from "../figma_app/773170"
// Origin: $$d0 (from /src/figma_app/458300.ts)
// Refactored: Renamed variables, added TypeScript types/interfaces, simplified logic, added comments, improved readability

// Assumed dependencies:
// - ColorSpaceEnum: enum for color spaces (SRGB, DISPLAY_P3)
// - colorProfileManagerInstance: manages canvas color profiles
// - logError: logs errors
// - runProfileSession, PerfProfileLevel: performance profiling utilities
// - getFeatureFlags: returns feature flags

// Type definitions for clarity and type safety
type WebGLColorSpace = "srgb" | "display-p3"
interface WebGLContext {
  drawingBufferColorSpace: WebGLColorSpace
}

type ColorSpace = ColorSpaceEnum.SRGB | ColorSpaceEnum.DISPLAY_P3
type CanvasInvalidator = { invalidateCanvas: () => void } | null

type FrameCallback = (() => void) | null

interface FeatureFlags {
  viewer_p3_fix: boolean
}

// Refactored class with clear names and comments
class WebGLColorSpaceManager {
  // Callback to be executed on frame
  private onFrameCallback: FrameCallback = null

  /**
   * Switches the WebGL context's color space and updates the color profile manager.
   * Logs an error if the color space is unsupported.
   */
  switchWebGLColorSpace(context: WebGLContext, targetColorSpace: ColorSpace): void {
    const currentColorSpace = context.drawingBufferColorSpace
    switch (targetColorSpace) {
      case ColorSpaceEnum.SRGB:
        if (currentColorSpace === "srgb")
          return
        context.drawingBufferColorSpace = "srgb"
        colorProfileManagerInstance.setCanvasColorProfile(ColorSpaceEnum.SRGB)
        break
      case ColorSpaceEnum.DISPLAY_P3:
        if (currentColorSpace === "display-p3")
          return
        context.drawingBufferColorSpace = "display-p3"
        colorProfileManagerInstance.setCanvasColorProfile(ColorSpaceEnum.DISPLAY_P3)
        break
      default:
        logError("color management", "unsupported color space", {
          targetColorSpace,
        })
    }
  }

  /**
   * Runs the frame callback inside a performance profiling session.
   */
  onFrame(): void {
    runProfileSession(B3, PerfProfileLevel.DEFAULT, () => {
      if (this.onFrameCallback) {
        this.onFrameCallback()
      }
    })
  }

  /**
   * Queues or immediately switches the WebGL color space depending on the mode.
   * If viewer_p3_fix is enabled and a canvas invalidator is provided, invalidates the canvas.
   * @param context WebGL context
   * @param targetColorSpace Desired color space
   * @param mode "mirror" to execute immediately, otherwise queue for next frame
   * @param canvasInvalidator Optional object with invalidateCanvas method
   */
  queueSwitchWebGLColorSpace(
    context: WebGLContext,
    targetColorSpace: ColorSpace,
    mode: string,
    canvasInvalidator: CanvasInvalidator,
  ): void {
    const switchColorSpace = () => {
      this.switchWebGLColorSpace(context, targetColorSpace)
      const featureFlags: FeatureFlags = getFeatureFlags()
      // Potential bug: If viewer_p3_fix is true but canvasInvalidator is null, invalidateCanvas is not called.
      if (featureFlags.viewer_p3_fix && canvasInvalidator) {
        canvasInvalidator.invalidateCanvas()
      }
    }
    if (mode === "mirror") {
      switchColorSpace()
    }
    else {
      this.onFrameCallback = switchColorSpace
    }
  }
}

// Export with original names for compatibility
export const webGLColorSpaceManager = new WebGLColorSpaceManager()
export const q = webGLColorSpaceManager
