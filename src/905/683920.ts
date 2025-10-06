export class WebGLDetector {
  _isWebGL2Supported: boolean = false
  _initializationStatus: WebGLInitializationStatus = "webgl1_success"
  static _instance: WebGLDetector | null = null

  constructor() {
    this.detectWebGL2Support()
  }

  /**
   * Detects WebGL2 support and sets the appropriate status
   * Original code: constructor logic from $$n0
   */
  detectWebGL2Support(): void {
    this._isWebGL2Supported = false
    this._initializationStatus = "webgl1_success"

    const webgl2Context = document.createElement("canvas").getContext("webgl2")

    if (!webgl2Context) {
      this._initializationStatus = "webgl2_not_supported"
      return
    }

    const rendererInfo = this.getRendererInfo(webgl2Context)

    if (!rendererInfo || /radeon/i.test(rendererInfo)) {
      this._initializationStatus = "webgl2_disallow_list"
      return
    }

    // Check for software rendering
    if (/swiftshader/i.test(rendererInfo)) {
      const webglContext = document.createElement("canvas").getContext("webgl")
      const webglRendererInfo = this.getRendererInfo(webglContext)

      if (!webglRendererInfo || !/swiftshader/i.test(webglRendererInfo)) {
        this._initializationStatus = "webgl2_software_rendering"
        return
      }
    }

    this._initializationStatus = "webgl2_success"
    this._isWebGL2Supported = true
  }

  /**
   * Gets renderer information from WebGL context
   * Original code: renderer method from $$n0
   * @param context - WebGL context
   * @returns Renderer information or null if not available
   */
  getRendererInfo(context: WebGLRenderingContext | WebGL2RenderingContext | null): string | null {
    if (!context)
      return null

    const debugRendererInfo = context.getExtension("WEBGL_debug_renderer_info")
    if (debugRendererInfo) {
      return (context.getParameter(debugRendererInfo.UNMASKED_RENDERER_WEBGL) as string)
        .toLowerCase()
    }

    return null
  }

  /**
   * Gets singleton instance of WebGLDetector
   * Original code: static instance method from $$n0
   * @returns Singleton instance
   */
  static getInstance(): WebGLDetector {
    if (!WebGLDetector._instance) {
      WebGLDetector._instance = new WebGLDetector()
    }
    return WebGLDetector._instance
  }

  /**
   * Checks if WebGL2 is supported
   * Original code: static isWebGL2Supported method from $$n0
   * @returns True if WebGL2 is supported, false otherwise
   */
  static isWebGL2Supported(): boolean {
    return WebGLDetector.getInstance()._isWebGL2Supported
  }

  /**
   * Gets initialization status
   * Original code: static initializationStatus method from $$n0
   * @returns Initialization status
   */
  static initializationStatus(): WebGLInitializationStatus {
    return WebGLDetector.getInstance()._initializationStatus
  }
}

// Type definitions for better type safety
type WebGLInitializationStatus
  = | "webgl1_success"
  | "webgl2_not_supported"
  | "webgl2_disallow_list"
  | "webgl2_software_rendering"
  | "webgl2_success"

export const X = WebGLDetector
