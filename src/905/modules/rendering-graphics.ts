/**
 * Rendering and Graphics Engine Module
 * 
 * This module handles rendering engines, graphics backends, canvas management,
 * drawing tools, and visual rendering functionality extracted from the main plugin file.
 * 
 * Key responsibilities:
 * - WebGL and WebGPU graphics backend management
 * - Canvas rendering and drawing buffer operations
 * - Drawing tools (pen, brush, pencil, eraser, highlighter)
 * - Text rendering and typography management
 * - Vector graphics and shape rendering
 * - Canvas context management and graphics state
 * - Rendering optimization and performance monitoring
 * - Graphics hardware compatibility testing
 */

/**
 * Rendering Types and Interfaces
 */
export interface GraphicsContext {
  canvas: HTMLCanvasElement
  context: WebGLRenderingContext | WebGL2RenderingContext | any // GPUCanvasContext when available
  isWebGPU: boolean
  devicePixelRatio: number
}

export interface RenderingCapabilities {
  webglSupported: boolean
  webgpuSupported: boolean
  astcTextureSupported: boolean
  maxTextureSize: number
  vendorName: string
  rendererName: string
  webglVersion: string
}

export interface DrawingToolState {
  activeTool: DrawingToolType
  lastActiveTool: DrawingToolType
  toolProperties: DrawingToolProperties
  isThickTool: boolean
}

export interface DrawingToolProperties {
  color: { r: number; g: number; b: number; a: number }
  strokeWidth: number
  opacity: number
  blendMode: BlendMode
  pressure: number
}

export interface CanvasViewState {
  showOutlines: boolean
  showOutlineObjectBounds: boolean
  showOutlineHiddenLayers: boolean
  currentZoom: number
  retinaMode: boolean
  overlayRendering: boolean
  syncCursorRendering: boolean
}

export interface TextRenderingState {
  fontFamily: string
  fontSize: number
  fontWeight: string | number
  textRenderingMode: TextRenderingMode
  fillColor: string
  strokeColor: string
  textMatrix: number[]
  textRise: number
}

export type DrawingToolType =
  | 'pen'
  | 'brush'
  | 'pencil'
  | 'eraser'
  | 'highlighter'
  | 'washi-tape'

export type BlendMode =
  | 'normal'
  | 'multiply'
  | 'screen'
  | 'overlay'
  | 'darken'
  | 'lighten'
  | 'color-dodge'
  | 'color-burn'

export type TextRenderingMode =
  | 'FILL'
  | 'STROKE'
  | 'FILL_STROKE'
  | 'ADD_TO_PATH'

export type GraphicsBackend = 'WebGL' | 'WebGPU' | 'Auto'

/**
 * WebGL Context Manager
 * Original: WebGL context management from 91006.ts
 */
export class WebGLContextManager {
  glContext: WebGLRenderingContext | WebGL2RenderingContext | null = null
  contextLostListener?: any
  currentContextLostCallback?: (event: Event) => void
  currentContextRestoredCallback?: (event: Event) => void
  contextLostMessageReceived = false
  vendorName?: string
  rendererName?: string

  /**
   * Initialize WebGL context
   * Original: init method from 91006.ts
   */
  init(): boolean {
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')

      if (!gl) {
        console.warn('WebGL not supported')
        return false
      }

      this.glContext = gl
      this.extractVendorInfo()

      return true
    } catch (error) {
      console.error('Failed to initialize WebGL context:', error)
      return false
    }
  }

  /**
   * Release WebGL context and cleanup
   * Original: release method from 91006.ts
   */
  release(): void {
    if (this.glContext) {
      const canvas = this.glContext.canvas

      // Remove event listeners
      canvas?.removeEventListener('webglcontextlost', this.currentContextLostCallback!)
      canvas?.removeEventListener('webglcontextrestored', this.currentContextRestoredCallback!)

      // Lose context if extension is available
      const loseContextExt = this.glContext.getExtension('WEBGL_lose_context')
      if (loseContextExt) {
        loseContextExt.loseContext()
      }

      this.glContext = null
      this.contextLostListener = undefined
      this.currentContextLostCallback = undefined
      this.currentContextRestoredCallback = undefined
    }
  }

  /**
   * Check if WebGL context is lost
   * Original: isContextLost method from 91006.ts
   */
  isContextLost(): boolean {
    return this.glContext?.isContextLost() ?? true
  }

  /**
   * Install context lost/restored handlers
   * Original: installContextLostHandler from 91006.ts
   */
  installContextLostHandler(listener: any): void {
    if (!this.glContext) return

    this.contextLostListener = listener
    const canvas = this.glContext.canvas

    this.currentContextLostCallback = (event: Event) => {
      this.contextLostListener?.reportContextLost()
      event.preventDefault()
      event.stopImmediatePropagation()
      this.handleContextLost()
    }

    this.currentContextRestoredCallback = (_event: Event) => {
      this.contextLostListener?.reportContextRestored()

      if (!this.contextLostMessageReceived) {
        this.handleContextLost()
      }

      // Flash canvas white briefly for visual feedback
      if (canvas instanceof HTMLCanvasElement) {
        canvas.style.background = 'white'
        setTimeout(() => {
          canvas.style.background = ''
        }, 0)
      }

      this.handleContextRestored()
    }

    canvas?.addEventListener('webglcontextlost', this.currentContextLostCallback)
    canvas?.addEventListener('webglcontextrestored', this.currentContextRestoredCallback)
  }

  /**
   * Get drawing buffer dimensions
   * Original: drawingBufferWidth/Height methods from 91006.ts
   */
  getDrawingBufferSize(): { width: number; height: number } {
    return {
      width: this.glContext?.drawingBufferWidth ?? 0,
      height: this.glContext?.drawingBufferHeight ?? 0
    }
  }

  /**
   * Get graphics hardware information
   * Original: vendor/renderer name methods from 91006.ts
   */
  getHardwareInfo(): { vendor: string; renderer: string } {
    return {
      vendor: this.vendorName ?? '',
      renderer: this.rendererName ?? ''
    }
  }

  /**
   * Upload texture data to WebGL
   * Original: texImage2D methods from 91006.ts
   */
  uploadTexture(
    target: number,
    level: number,
    internalFormat: number,
    width: number,
    height: number,
    border: number,
    format: number,
    type: number,
    data: ArrayBufferView | null
  ): void {
    this.glContext?.texImage2D(target, level, internalFormat, width, height, border, format, type, data)
  }

  /**
   * Upload Float32 texture data
   * Original: texImage2DFloat32 from 91006.ts
   */
  uploadFloat32Texture(
    target: number,
    level: number,
    internalFormat: number,
    width: number,
    height: number,
    border: number,
    format: number,
    type: number,
    data: { buffer: ArrayBuffer }
  ): void {
    this.glContext?.texImage2D(
      target, level, internalFormat, width, height, border, format, type,
      new Float32Array(data.buffer)
    )
  }

  /**
   * Upload bitmap texture data
   * Original: texImage2DBitmap from 91006.ts
   */
  uploadBitmapTexture(
    target: number,
    level: number,
    internalFormat: number,
    format: number,
    type: number,
    source: ImageBitmap | ImageData | HTMLImageElement | HTMLCanvasElement
  ): void {
    this.glContext?.texImage2D(target, level, internalFormat, format, type, source)
  }

  /**
   * Upload compressed texture data
   * Original: compressedTexImage2D from 91006.ts
   */
  uploadCompressedTexture(
    target: number,
    level: number,
    internalFormat: number,
    width: number,
    height: number,
    border: number,
    data: ArrayBufferView
  ): void {
    this.glContext?.compressedTexImage2D(target, level, internalFormat, width, height, border, data)
  }

  /**
   * Extract vendor and renderer information
   */
  extractVendorInfo(): void {
    if (!this.glContext) return

    const debugInfo = this.glContext.getExtension('WEBGL_debug_renderer_info')
    if (debugInfo) {
      this.vendorName = this.glContext.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) || ''
      this.rendererName = this.glContext.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || ''
    }
  }

  /**
   * Handle context lost event
   */
  handleContextLost(): void {
    this.contextLostMessageReceived = true
    console.warn('WebGL context lost')
  }

  /**
   * Handle context restored event
   */
  handleContextRestored(): void {
    this.contextLostMessageReceived = false
    console.warn('WebGL context restored')
  }

  /**
   * Get WebGL context
   */
  getContext(): WebGLRenderingContext | WebGL2RenderingContext | null {
    return this.glContext
  }
}

/**
 * WebGPU Context Manager
 * Original: WebGPU context management from 889931.ts
 */
export class WebGPUContextManager {
  device?: any // GPUDevice when available
  adapter?: any // GPUAdapter when available
  initializationStatus = 'not_initialized'
  recreateDeviceOnNextDestroy = false

  /**
   * Check if WebGPU is available
   */
  isWebGPUAvailable(): boolean {
    return typeof navigator !== 'undefined' && 'gpu' in navigator
  }

  /**
   * Initialize WebGPU device and adapter
   * Original: initialize method from 889931.ts
   */
  async initialize(): Promise<boolean> {
    try {
      if (!this.isWebGPUAvailable()) {
        this.setInitializationStatus('webgpu_not_supported')
        return false
      }

      const gpu = (navigator as any).gpu
      if (!gpu) {
        this.setInitializationStatus('webgpu_not_supported')
        return false
      }

      // Request adapter
      this.adapter = await gpu.requestAdapter({
        powerPreference: 'high-performance'
      })

      if (!this.adapter) {
        this.setInitializationStatus('webgpu_no_adapter')
        return false
      }

      // Request device
      this.device = await this.adapter.requestDevice({
        requiredFeatures: [],
        requiredLimits: {}
      })

      if (!this.device) {
        this.setInitializationStatus('webgpu_no_device')
        return false
      }

      // Test basic rendering capabilities
      const renderingTest = await this.testBasicRendering()
      if (renderingTest instanceof Error) {
        this.setInitializationStatus('webgpu_rendering_failed')
        return false
      }

      this.setInitializationStatus('webgpu_success')
      return true
    } catch (error) {
      console.error('WebGPU initialization failed:', error)
      this.setInitializationStatus('webgpu_error')
      return false
    }
  }

  /**
   * Check if WebGPU device is initialized
   * Original: isDeviceInitialized from 889931.ts
   */
  isDeviceInitialized(): boolean {
    return !!this.device && !this.device.lost
  }

  /**
   * Write data to WebGPU buffer
   * Original: writeBuffer from 889931.ts
   */
  writeBuffer(
    buffer: any, // GPUBuffer
    bufferOffset: number,
    data: ArrayBuffer,
    dataOffset?: number,
    size?: number
  ): void {
    if (!this.device) {
      throw new Error('WebGPU device not initialized')
    }

    this.device.queue.writeBuffer(buffer, bufferOffset, data, dataOffset, size)
  }

  /**
   * Write data to WebGPU texture
   * Original: writeTexture from 889931.ts
   */
  writeTexture(
    destination: any, // GPUImageCopyTexture
    data: ArrayBuffer,
    dataLayout: any, // GPUImageDataLayout
    size: any // GPUExtent3D
  ): void {
    if (!this.device) {
      throw new Error('WebGPU device not initialized')
    }

    this.device.queue.writeTexture(destination, data, dataLayout, size)
  }

  /**
   * Copy external image to WebGPU texture
   * Original: copyExternalImageToTexture from 889931.ts
   */
  copyExternalImageToTexture(
    source: any, // GPUImageCopyExternalImage
    destination: any, // GPUImageCopyTexture
    copySize: any // GPUExtent3D
  ): void {
    if (!this.device) {
      throw new Error('WebGPU device not initialized')
    }

    this.device.queue.copyExternalImageToTexture(source, destination, copySize)
  }

  /**
   * Read pixels from WebGPU texture
   * Original: readPixels from 889931.ts
   */
  async readPixels(
    texture: any, // GPUTexture
    x: number,
    y: number,
    width: number,
    height: number,
    format: string
  ): Promise<Uint8Array> {
    if (!this.device) {
      throw new Error('WebGPU device not initialized')
    }

    const bytesPerPixel = format === 'rgba8unorm' ? 4 : 2
    const buffer = this.device.createBuffer({
      size: width * height * bytesPerPixel,
      usage: this.device.GPUBufferUsage?.COPY_DST | this.device.GPUBufferUsage?.MAP_READ || 0x00000004 | 0x00000001
    })

    const encoder = this.device.createCommandEncoder()
    encoder.copyTextureToBuffer(
      { texture, origin: { x, y, z: 0 } },
      { buffer, bytesPerRow: width * bytesPerPixel },
      { width, height, depthOrArrayLayers: 1 }
    )

    this.device.queue.submit([encoder.finish()])
    await buffer.mapAsync(this.device.GPUMapMode?.READ || 0x0001)

    const data = new Uint8Array(buffer.getMappedRange())
    const result = new Uint8Array(data)

    buffer.unmap()
    buffer.destroy()

    return result
  }

  /**
   * Get preferred canvas format
   * Original: getPreferredCanvasFormat from 889931.ts
   */
  getPreferredCanvasFormat(): string {
    if (!this.isWebGPUAvailable()) {
      return 'bgra8unorm'
    }

    const gpu = (navigator as any).gpu
    return gpu?.getPreferredCanvasFormat?.() || 'bgra8unorm'
  }

  /**
   * Get WebGPU device
   */
  getDevice(): any {
    return this.device
  }

  /**
   * Get WebGPU adapter
   */
  getAdapter(): any {
    return this.adapter
  }

  /**
   * Get initialization status
   */
  getInitializationStatus(): string {
    return this.initializationStatus
  }

  /**
   * Set initialization status
   */
  setInitializationStatus(status: string): void {
    this.initializationStatus = status
  }

  /**
   * Test basic WebGPU rendering capabilities
   * Original: testBasicRendering from 889931.ts
   */
  async testBasicRendering(): Promise<void | Error> {
    if (!this.device) {
      return new Error('Device not available for rendering test')
    }

    try {
      const texture = this.device.createTexture({
        size: { width: 2, height: 2, depthOrArrayLayers: 1 },
        format: 'rgba8unorm',
        usage: this.device.GPUTextureUsage?.RENDER_ATTACHMENT | this.device.GPUTextureUsage?.COPY_SRC || 0x10 | 0x04
      })

      const view = texture.createView()
      const encoder = this.device.createCommandEncoder()

      // Clear to red
      const renderPass = encoder.beginRenderPass({
        colorAttachments: [{
          view,
          clearValue: { r: 1, g: 0, b: 0, a: 1 },
          loadOp: 'clear',
          storeOp: 'store'
        }]
      })
      renderPass.end()

      this.device.queue.submit([encoder.finish()])

      // Verify the rendered result
      const pixels = await this.readPixels(texture, 0, 0, 2, 2, 'rgba8unorm')
      const isRed = pixels[0] === 255 && pixels[1] === 0 && pixels[2] === 0 && pixels[3] === 255

      texture.destroy()

      if (!isRed) {
        return new Error('Rendering test failed: Expected red pixel')
      }

      return undefined
    } catch (error) {
      return error instanceof Error ? error : new Error(String(error))
    }
  }
}

/**
 * Graphics Backend Manager
 * Original: Graphics backend selection from 149304.ts
 */
export class GraphicsBackendManager {
  webglManager: WebGLContextManager
  webgpuManager: WebGPUContextManager
  currentBackend: GraphicsBackend = 'Auto'
  forceWebGPU = false

  constructor() {
    this.webglManager = new WebGLContextManager()
    this.webgpuManager = new WebGPUContextManager()
    this.detectBackendPreference()
  }

  /**
   * Initialize graphics backend
   * Original: backend initialization logic from 149304.ts
   */
  async initializeBackend(preferredBackend?: GraphicsBackend): Promise<boolean> {
    this.currentBackend = preferredBackend || this.currentBackend

    if (this.shouldUseWebGPU()) {
      const webgpuSuccess = await this.webgpuManager.initialize()
      if (webgpuSuccess) {
        this.logRenderingInitialization('webgpu_success')
        return true
      }
    }

    // Fallback to WebGL
    const webglSuccess = this.webglManager.init()
    if (webglSuccess) {
      this.logRenderingInitialization('webgl_success')
      return true
    }

    this.logRenderingInitialization('both_failed')
    return false
  }

  /**
   * Check if WebGPU should be used
   * Original: shouldUseWebGPU logic from 149304.ts
   */
  shouldUseWebGPU(): boolean {
    if (this.currentBackend === 'WebGPU') return true
    if (this.currentBackend === 'WebGL') return false

    // Auto detection
    return this.forceWebGPU || this.isWebGPUPreferred()
  }

  /**
   * Check if ASTC texture compression is supported
   * Original: ASTC support check from 149304.ts
   */
  isASTCTextureSupported(): boolean {
    const gl = this.webglManager.getContext()
    if (!gl) return false

    const ext = gl.getExtension('WEBGL_compressed_texture_astc')
    return !!ext
  }

  /**
   * Get rendering capabilities
   * Original: capabilities detection from various files
   */
  getRenderingCapabilities(): RenderingCapabilities {
    const webglSupported = !this.webglManager.isContextLost()
    const webgpuSupported = this.webgpuManager.isDeviceInitialized()
    const astcSupported = this.isASTCTextureSupported()
    const hardwareInfo = this.webglManager.getHardwareInfo()

    const gl = this.webglManager.getContext()
    const maxTextureSize = gl ? gl.getParameter(gl.MAX_TEXTURE_SIZE) : 0

    return {
      webglSupported,
      webgpuSupported,
      astcTextureSupported: astcSupported,
      maxTextureSize,
      vendorName: hardwareInfo.vendor,
      rendererName: hardwareInfo.renderer,
      webglVersion: gl ? (gl instanceof WebGL2RenderingContext ? 'WebGL 2.0' : 'WebGL 1.0') : 'Not Available'
    }
  }

  /**
   * Get active graphics context
   */
  getActiveContext(): GraphicsContext | null {
    if (this.shouldUseWebGPU() && this.webgpuManager.isDeviceInitialized()) {
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('webgpu')
      if (context) {
        return {
          canvas,
          context,
          isWebGPU: true,
          devicePixelRatio: window.devicePixelRatio || 1
        }
      }
    }

    const gl = this.webglManager.getContext()
    if (gl) {
      return {
        canvas: gl.canvas as HTMLCanvasElement,
        context: gl,
        isWebGPU: false,
        devicePixelRatio: window.devicePixelRatio || 1
      }
    }

    return null
  }

  /**
   * Release all graphics resources
   */
  release(): void {
    this.webglManager.release()
    // WebGPU cleanup would go here
  }

  /**
   * Detect backend preference from environment
   */
  detectBackendPreference(): void {
    // Check for WebGPU override
    const urlParams = new URLSearchParams(window.location.search)
    const backendOverride = urlParams.get('graphics_backend')

    if (backendOverride === 'webgpu') {
      this.currentBackend = 'WebGPU'
      this.forceWebGPU = true
    } else if (backendOverride === 'webgl') {
      this.currentBackend = 'WebGL'
    }
  }

  /**
   * Check if WebGPU is preferred
   */
  isWebGPUPreferred(): boolean {
    // Check if browser has good WebGPU support
    return typeof navigator !== 'undefined' && 'gpu' in navigator
  }

  /**
   * Log rendering initialization status
   * Original: rendering analytics from 149304.ts
   */
  logRenderingInitialization(status: string): void {
    const capabilities = this.getRenderingCapabilities()

    console.warn('Rendering initialization:', {
      status,
      renderer: capabilities.rendererName,
      vendor: capabilities.vendorName,
      version: capabilities.webglVersion,
      backend: this.currentBackend
    })
  }
}

/**
 * Drawing Tools Manager
 * Original: Drawing tools logic from 275043.ts and 421558.ts
 */
export class DrawingToolsManager {
  activeToolState: DrawingToolState
  toolProperties: Map<DrawingToolType, DrawingToolProperties>

  constructor() {
    this.activeToolState = {
      activeTool: 'pen',
      lastActiveTool: 'pen',
      toolProperties: this.getDefaultToolProperties(),
      isThickTool: false
    }

    this.toolProperties = new Map()
    this.initializeToolProperties()
  }

  /**
   * Set active drawing tool
   * Original: tool activation from 275043.ts
   */
  setActiveTool(tool: DrawingToolType): void {
    if (this.activeToolState.activeTool !== tool) {
      this.activeToolState.lastActiveTool = this.activeToolState.activeTool
      this.activeToolState.activeTool = tool
      this.activeToolState.toolProperties = this.getToolProperties(tool)
      this.activeToolState.isThickTool = this.isThickTool(tool)
    }
  }

  /**
   * Get active tool state
   * Original: tool state management from 275043.ts
   */
  getActiveToolState(): DrawingToolState {
    return { ...this.activeToolState }
  }

  /**
   * Get tool icon component
   * Original: tool icon selection from 275043.ts
   */
  getToolIcon(tool: DrawingToolType): string {
    const iconMap: Record<DrawingToolType, string> = {
      'pen': 'pen-icon',
      'brush': 'brush-icon',
      'pencil': 'pencil-icon',
      'eraser': 'eraser-icon',
      'highlighter': 'highlighter-icon',
      'washi-tape': 'washi-tape-icon'
    }

    return iconMap[tool] || 'default-icon'
  }

  /**
   * Check if tool is selected
   * Original: tool selection logic from 421558.ts
   */
  isToolSelected(tool: DrawingToolType): boolean {
    return this.activeToolState.activeTool === tool
  }

  /**
   * Get tool display name
   * Original: tool naming from 275043.ts
   */
  getToolDisplayName(tool: DrawingToolType): string {
    const nameMap: Record<DrawingToolType, string> = {
      'pen': 'Vector Pen',
      'brush': 'Brush',
      'pencil': 'Vector Pencil',
      'eraser': 'Eraser',
      'highlighter': 'Highlighter',
      'washi-tape': 'Washi Tape'
    }

    return nameMap[tool] || 'Unknown Tool'
  }

  /**
   * Update tool properties
   */
  updateToolProperties(tool: DrawingToolType, properties: Partial<DrawingToolProperties>): void {
    const currentProps = this.toolProperties.get(tool) || this.getDefaultToolProperties()
    const updatedProps = { ...currentProps, ...properties }

    this.toolProperties.set(tool, updatedProps)

    if (this.activeToolState.activeTool === tool) {
      this.activeToolState.toolProperties = updatedProps
    }
  }

  /**
   * Get tool properties
   */
  getToolProperties(tool: DrawingToolType): DrawingToolProperties {
    return this.toolProperties.get(tool) || this.getDefaultToolProperties()
  }

  /**
   * Get default tool properties
   */
  getDefaultToolProperties(): DrawingToolProperties {
    return {
      color: { r: 0, g: 0, b: 0, a: 1 },
      strokeWidth: 2,
      opacity: 1,
      blendMode: 'normal',
      pressure: 1
    }
  }

  /**
   * Initialize tool properties for all tools
   */
  initializeToolProperties(): void {
    const tools: DrawingToolType[] = ['pen', 'brush', 'pencil', 'eraser', 'highlighter', 'washi-tape']

    tools.forEach(tool => {
      this.toolProperties.set(tool, this.getDefaultToolProperties())
    })
  }

  /**
   * Check if tool is thick/heavy
   */
  isThickTool(tool: DrawingToolType): boolean {
    return ['brush', 'highlighter', 'washi-tape'].includes(tool)
  }
}

/**
 * Text Rendering Manager
 * Original: Text rendering logic from 177177.ts
 */
export class TextRenderingManager {
  currentTextState: TextRenderingState
  textMatrix: number[] = [1, 0, 0, 1, 0, 0]

  constructor() {
    this.currentTextState = {
      fontFamily: 'Inter',
      fontSize: 14,
      fontWeight: 'normal',
      textRenderingMode: 'FILL',
      fillColor: '#000000',
      strokeColor: '#000000',
      textMatrix: [...this.textMatrix],
      textRise: 0
    }
  }

  /**
   * Set font properties
   * Original: font setting from 177177.ts
   */
  setFont(fontFamily: string, fontSize: number, fontWeight?: string | number): void {
    this.currentTextState.fontFamily = fontFamily
    this.currentTextState.fontSize = fontSize
    if (fontWeight !== undefined) {
      this.currentTextState.fontWeight = fontWeight
    }
  }

  /**
   * Set text rendering mode
   * Original: text rendering mode from 177177.ts
   */
  setTextRenderingMode(mode: TextRenderingMode): void {
    this.currentTextState.textRenderingMode = mode
  }

  /**
   * Set text colors
   * Original: color setting from 177177.ts
   */
  setTextColors(fillColor: string, strokeColor?: string): void {
    this.currentTextState.fillColor = fillColor
    if (strokeColor) {
      this.currentTextState.strokeColor = strokeColor
    }
  }

  /**
   * Set text matrix transformation
   * Original: text matrix from 177177.ts
   */
  setTextMatrix(matrix: number[]): void {
    this.currentTextState.textMatrix = [...matrix]
  }

  /**
   * Set text rise (vertical offset)
   * Original: text rise from 177177.ts
   */
  setTextRise(rise: number): void {
    this.currentTextState.textRise = rise

    // Apply rise to text matrix
    if (rise !== 0) {
      const matrix = [...this.currentTextState.textMatrix]
      matrix[5] += rise
      this.currentTextState.textMatrix = matrix
    }
  }

  /**
   * Render text with current state
   * Original: text rendering from 177177.ts
   */
  renderText(
    context: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number
  ): void {
    const state = this.currentTextState

    // Apply font properties
    context.font = `${state.fontWeight} ${state.fontSize}px ${state.fontFamily}`

    // Apply transformation matrix
    context.save()
    context.setTransform(
      state.textMatrix[0],
      state.textMatrix[1],
      state.textMatrix[2],
      state.textMatrix[3],
      state.textMatrix[4],
      state.textMatrix[5]
    )

    // Render based on mode
    switch (state.textRenderingMode) {
      case 'FILL':
        context.fillStyle = state.fillColor
        context.fillText(text, x, y)
        break

      case 'STROKE':
        context.strokeStyle = state.strokeColor
        context.strokeText(text, x, y)
        break

      case 'FILL_STROKE':
        context.fillStyle = state.fillColor
        context.fillText(text, x, y)
        context.strokeStyle = state.strokeColor
        context.strokeText(text, x, y)
        break

      case 'ADD_TO_PATH':
        // Text as path (not directly supported in Canvas API)
        context.fillStyle = 'transparent'
        context.fillText(text, x, y)
        break
    }

    context.restore()
  }

  /**
   * Get current text state
   */
  getTextState(): TextRenderingState {
    return { ...this.currentTextState }
  }

  /**
   * Reset text state to defaults
   */
  resetTextState(): void {
    this.currentTextState = {
      fontFamily: 'Inter',
      fontSize: 14,
      fontWeight: 'normal',
      textRenderingMode: 'FILL',
      fillColor: '#000000',
      strokeColor: '#000000',
      textMatrix: [1, 0, 0, 1, 0, 0],
      textRise: 0
    }
  }
}

/**
 * Canvas View State Manager
 * Original: Canvas view state from 13528.ts
 */
export class CanvasViewStateManager {
  viewState: CanvasViewState

  constructor() {
    this.viewState = {
      showOutlines: false,
      showOutlineObjectBounds: false,
      showOutlineHiddenLayers: false,
      currentZoom: 1.0,
      retinaMode: window.devicePixelRatio > 1,
      overlayRendering: true,
      syncCursorRendering: false
    }
  }

  /**
   * Update view state properties
   * Original: view state setters from 13528.ts
   */
  updateViewState(updates: Partial<CanvasViewState>): void {
    this.viewState = { ...this.viewState, ...updates }
  }

  /**
   * Get current view state
   * Original: view state getters from 13528.ts
   */
  getViewState(): CanvasViewState {
    return { ...this.viewState }
  }

  /**
   * Set zoom level
   */
  setZoom(zoom: number): void {
    this.viewState.currentZoom = Math.max(0.01, Math.min(100, zoom))
  }

  /**
   * Toggle outline display
   */
  toggleOutlines(): void {
    this.viewState.showOutlines = !this.viewState.showOutlines
  }

  /**
   * Toggle retina mode
   */
  toggleRetinaMode(): void {
    this.viewState.retinaMode = !this.viewState.retinaMode
  }

  /**
   * Toggle overlay rendering
   */
  toggleOverlayRendering(): void {
    this.viewState.overlayRendering = !this.viewState.overlayRendering
  }
}

/**
 * Factory Functions
 */

/**
 * Create WebGL context manager
 */
export function createWebGLContextManager(): WebGLContextManager {
  return new WebGLContextManager()
}

/**
 * Create WebGPU context manager
 */
export function createWebGPUContextManager(): WebGPUContextManager {
  return new WebGPUContextManager()
}

/**
 * Create graphics backend manager
 */
export function createGraphicsBackendManager(): GraphicsBackendManager {
  return new GraphicsBackendManager()
}

/**
 * Create drawing tools manager
 */
export function createDrawingToolsManager(): DrawingToolsManager {
  return new DrawingToolsManager()
}

/**
 * Create text rendering manager
 */
export function createTextRenderingManager(): TextRenderingManager {
  return new TextRenderingManager()
}

/**
 * Create canvas view state manager
 */
export function createCanvasViewStateManager(): CanvasViewStateManager {
  return new CanvasViewStateManager()
}

/**
 * Convenience Exports
 */
export {
  CanvasViewStateManager as CanvasView,
  DrawingToolsManager as DrawingTools,
  GraphicsBackendManager as GraphicsManager,
  TextRenderingManager as TextRenderer,
  WebGLContextManager as WebGL,
  WebGPUContextManager as WebGPU
}

/**
 * Default Export - Comprehensive Rendering and Graphics System
 */
export default {
  WebGLContextManager,
  WebGPUContextManager,
  GraphicsBackendManager,
  DrawingToolsManager,
  TextRenderingManager,
  CanvasViewStateManager,
  createWebGLContextManager,
  createWebGPUContextManager,
  createGraphicsBackendManager,
  createDrawingToolsManager,
  createTextRenderingManager,
  createCanvasViewStateManager
}
