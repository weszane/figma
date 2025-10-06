import { reportError } from "../905/11"
import { ServiceCategories } from "../905/165054"
import { browserCapabilities } from "../905/409121"
import { getWasmModule } from "../figma_app/762706"

/**
 * WebGL context manager for TypeScript-based WebGL operations
 * Original class: s
 */
class TsGlContextManager {
  _reportError: (error: string) => void
  _platformInfoBindings: any

  constructor(reportError: (error: string) => void, platformInfoBindings: any) {
    this._reportError = reportError
    this._platformInfoBindings = platformInfoBindings
  }

  /**
   * Creates a new WebGL context instance
   * Original method: createTsGlContext
   */
  createContext(): TsGlContext {
    return new TsGlContext(this._reportError, this._platformInfoBindings)
  }

  /**
   * Checks if Emscripten WebGL context was initialized
   * Original method: emscriptenWebGLContextWasInitialized
   */
  isEmscriptenContextInitialized(): boolean {
    return getWasmModule().ctx != null
  }
}

/**
 * WebGL context implementation handling WebGL operations and context management
 * Original class: o
 */
class TsGlContext {
  _reportError: (error: string) => void
  _platformInfoBindings: any
  _currentContextLostCb: ((event: Event) => void) | null = null
  _currentContextRestoredCb: ((event: Event) => void) | null = null

  glContext: WebGLRenderingContext | WebGL2RenderingContext | null = null
  gl: any = undefined
  debugRendererInfo: any = null
  vendorName: string | null = null
  rendererName: string | null = null
  instancedArraysANGLE: any = null
  contextLostListener: any = null
  contextLostMessageReceived: boolean = false

  constructor(reportError: (error: string) => void, platformInfoBindings: any) {
    this._reportError = reportError
    this._platformInfoBindings = platformInfoBindings
  }

  /**
   * Initializes the WebGL context
   * Original method: init
   */
  init(): void {
    this.glContext = getWasmModule().ctx

    if (this.glContext == null) {
      this._reportError("Could not get WebGL context")
      return
    }

    this.gl = getWasmModule().WebGLEmscriptenObj
    this.debugRendererInfo = this.glContext.getExtension("WEBGL_debug_renderer_info")

    if (this.debugRendererInfo) {
      this.vendorName = this.glContext.getParameter(this.debugRendererInfo.UNMASKED_VENDOR_WEBGL)
      this.rendererName = this.glContext.getParameter(this.debugRendererInfo.UNMASKED_RENDERER_WEBGL)
    }
    else if (this._platformInfoBindings.isWindows()) {
      const firefoxWarning = this._platformInfoBindings.isFirefox()
        ? ', please enable "webgl.enable-debug-renderer-info" in about:config'
        : ""
      console.warn(`the "WEBGL_debug_renderer_info" extension is missing so rendering may be incorrect${firefoxWarning}`)
    }

    this.instancedArraysANGLE = this.glContext.getExtension("ANGLE_instanced_arrays")
    this.glContext.pixelStorei(this.glContext.UNPACK_COLORSPACE_CONVERSION_WEBGL, this.glContext.NONE)
    this.glContext.pixelStorei(this.glContext.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.glContext.NONE)
  }

  /**
   * Releases WebGL context resources
   * Original method: release
   */
  release(): void {
    if (this.glContext != null) {
      const canvas = this.glContext.canvas

      if (this._currentContextLostCb != null) {
        canvas?.removeEventListener("webglcontextlost", this._currentContextLostCb)
        this._currentContextLostCb = null
      }

      if (this._currentContextRestoredCb != null) {
        canvas?.removeEventListener("webglcontextrestored", this._currentContextRestoredCb)
        this._currentContextRestoredCb = null
      }
    }

    this.contextLostListener = null
    this.glContext = null
    this.gl = undefined
    this.debugRendererInfo = null
    this.vendorName = null
    this.rendererName = null
    this.contextLostMessageReceived = false
  }

  /**
   * Checks if WebGL context is lost
   * Original method: isContextLost
   */
  isContextLost(): boolean {
    return !!this.glContext && this.glContext.isContextLost()
  }

  /**
   * Installs context lost event handlers
   * Original method: installContextLostHandler
   */
  installContextLostHandler(listener: any): void {
    if (this.glContext === null) {
      return
    }

    this.contextLostListener = listener
    const canvas = this.glContext.canvas

    this._currentContextLostCb = (event: Event) => {
      this.contextLostListener?.reportContextLost()
      event.preventDefault()
      event.stopImmediatePropagation()
      this.handleContextLost()
    }

    this._currentContextRestoredCb = (_event: Event) => {
      this.contextLostListener?.reportContextRestored()

      if (!this.contextLostMessageReceived) {
        this.handleContextLost()
      }

      if (canvas && canvas instanceof HTMLCanvasElement) {
        canvas.style.background = "white"
        setTimeout(() => {
          canvas.style.background = ""
        }, 0)
      }

      this.handleContextRestored()
    }

    canvas?.addEventListener("webglcontextlost", this._currentContextLostCb)
    canvas?.addEventListener("webglcontextrestored", this._currentContextRestoredCb)
  }

  /**
   * Gets drawing buffer width
   * Original method: drawingBufferWidth
   */
  drawingBufferWidth(): number {
    return this.glContext ? this.glContext.drawingBufferWidth : 0
  }

  /**
   * Gets drawing buffer height
   * Original method: drawingBufferHeight
   */
  drawingBufferHeight(): number {
    return this.glContext ? this.glContext.drawingBufferHeight : 0
  }

  /**
   * Gets unmasked vendor name
   * Original method: unmaskedVendorName
   */
  unmaskedVendorName(): string {
    return this.vendorName ?? ""
  }

  /**
   * Gets unmasked renderer name
   * Original method: unmaskedRendererName
   */
  unmaskedRendererName(): string {
    return this.rendererName ?? ""
  }

  /**
   * Uploads texture image data
   * Original method: texImage2D
   */
  texImage2D(
    target: number,
    level: number,
    internalformat: number,
    width: number,
    height: number,
    border: number,
    format: number,
    type: number,
    pixels: ArrayBufferView | null,
  ): void {
    this.glContext?.texImage2D(target, level, internalformat, width, height, border, format, type, pixels)
  }

  /**
   * Uploads texture image data with Float32 conversion
   * Original method: texImage2DFloat32
   */
  texImage2DFloat32(
    target: number,
    level: number,
    internalformat: number,
    width: number,
    height: number,
    border: number,
    format: number,
    type: number,
    pixels: { buffer: ArrayBuffer },
  ): void {
    this.glContext?.texImage2D(
      target,
      level,
      internalformat,
      width,
      height,
      border,
      format,
      type,
      new Float32Array(pixels.buffer),
    )
  }

  /**
   * Uploads bitmap texture image data
   * Original method: texImage2DBitmap
   */
  texImage2DBitmap(
    target: number,
    level: number,
    internalformat: number,
    format: number,
    type: number,
    source: TexImageSource,
  ): void {
    this.glContext?.texImage2D(target, level, internalformat, format, type, source)
  }

  /**
   * Uploads compressed texture image data
   * Original method: compressedTexImage2D
   */
  compressedTexImage2D(
    target: number,
    level: number,
    internalformat: number,
    width: number,
    height: number,
    border: number,
    data: ArrayBufferView,
  ): void {
    this.glContext?.compressedTexImage2D(target, level, internalformat, width, height, border, data)
  }

  /**
   * Reads pixels from framebuffer
   * Original method: readPixels
   */
  readPixels(
    x: number,
    y: number,
    width: number,
    height: number,
    format: number,
    type: number,
    pixels: ArrayBufferView | null,
  ): void {
    this.glContext?.readPixels(x, y, width, height, format, type, pixels)
  }

  /**
   * Updates buffer subdata
   * Original method: bufferSubData
   */
  bufferSubData(
    target: number,
    offset: number,
    data: { subarray: (start: number, end: number) => ArrayBufferView },
    start: number,
    length: number,
  ): void {
    this.glContext?.bufferSubData(target, offset, data.subarray(start, start + length))
  }

  /**
   * Downloads WebGL trace
   * Original method: downloadWebGlTrace
   */
  downloadWebGlTrace(filename: string): void {
    (this.glContext as any)?.downloadTrace?.(filename)
  }

  /**
   * Gets active uniform block parameter
   * Original method: getActiveUniformBlockParameter
   */
  getActiveUniformBlockParameter(programIndex: number, uniformBlockIndex: number, pname: number): number {
    if (
      this.glContext === null
      || this.gl === undefined
      || this.gl.programs[programIndex] === undefined
    ) {
      return 0
    }

    if (this.glContext instanceof WebGLRenderingContext) {
      this._reportError("getActiveUniformBlockParameter called on WebGL 1 context")
      return 0
    }

    return this.glContext.getActiveUniformBlockParameter(
      this.gl.programs[programIndex],
      uniformBlockIndex,
      pname,
    )
  }

  /**
   * Sets 3x3 matrix uniform with fixed values
   * Original method: uniMat3Fix
   */
  uniMat3Fix(
    location: number,
    m00: number,
    m01: number,
    m10: number,
    m11: number,
    m20: number,
    m21: number,
  ): void {
    const webGlLocation = getWasmModule().getWebGlUniformLocation?.(location)

    if (webGlLocation !== undefined) {
      this.glContext?.uniformMatrix3fv(
        webGlLocation,
        false,
        new Float32Array([m00, m01, 0, m10, m11, 0, m20, m21, 1]),
      )
    }
  }

  /**
   * Sets 4-component float uniform
   * Original method: uni4fFix
   */
  uni4fFix(location: number, x: number, y: number, z: number, w: number): void {
    const webGlLocation = getWasmModule().getWebGlUniformLocation?.(location)

    if (webGlLocation !== undefined) {
      this.glContext?.uniform4f(webGlLocation, x, y, z, w)
    }
  }

  /**
   * Sets vertex attribute divisor for ANGLE instanced arrays
   * Original method: vertexAttribDivisorANGLE
   */
  vertexAttribDivisorANGLE(index: number, divisor: number): void {
    if (this.instancedArraysANGLE !== null) {
      this.instancedArraysANGLE.vertexAttribDivisorANGLE(index, divisor)
    }
  }

  /**
   * Draws arrays with instancing using ANGLE extension
   * Original method: drawArraysInstancedANGLE
   */
  drawArraysInstancedANGLE(mode: number, first: number, count: number, primcount: number): void {
    if (this.instancedArraysANGLE !== null) {
      this.instancedArraysANGLE.drawArraysInstancedANGLE(mode, first, count, primcount)
    }
  }

  /**
   * Clears Emscripten WebGL API state
   * Original method: clearEmscriptenGLAPI
   */
  clearEmscriptenGLAPI(): void {
    if (this.gl !== undefined) {
      this.gl.counter = 1
      this.gl.buffers = []
      this.gl.programs = []
      this.gl.framebuffers = []
      this.gl.renderbuffers = []
      this.gl.textures = []
      this.gl.shaders = []
      this.gl.stringCache = {}
    }
  }

  /**
   * Handles WebGL context loss
   * Original method: handleContextLost
   */
  handleContextLost(): void {
    this.clearEmscriptenGLAPI()
    this.contextLostListener?.setContextLost(true)
    this.contextLostMessageReceived = true
  }

  /**
   * Handles WebGL context restoration
   * Original method: handleContextRestored
   */
  handleContextRestored(): void {
    if (!this.isContextLost() && this.contextLostMessageReceived) {
      if (this.gl && this.gl.currentContext) {
        this.gl.currentContext.initExtensionsDone = false
        this.gl.initExtensions(this.gl.currentContext)
      }

      this.contextLostListener?.setContextLost(false)
      this.contextLostMessageReceived = false
    }
  }
}

// Singleton instance
let tsGlContextManagerInstance: TsGlContextManager | null = null

/**
 * Factory function for WebGL context manager
 * Original function: $$u0
 */
export function createTsGlContextManager(): TsGlContextManager {
  if (tsGlContextManagerInstance == null) {
    const reportErrorHandler = (error: string) =>
      reportError(ServiceCategories.RENDERING_AND_ANIMATION, new Error(error))

    tsGlContextManagerInstance = new TsGlContextManager(
      reportErrorHandler,
      browserCapabilities,
    )
  }

  return tsGlContextManagerInstance
}

// Export alias
export const X = createTsGlContextManager
