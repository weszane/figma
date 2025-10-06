/* eslint-disable no-unsafe-finally */
import { reportError } from "../905/11"
import { ServiceCategories } from "../905/165054"
import { analyticsEventManager } from "../905/449184"
import { getFeatureFlags } from "../905/601108"
import { getPreferredWebGLContext } from "../905/686312"
import { logError, logWarning } from "../905/714362"
import {
  isWebGPUSupported,
  mustUseWebGPU,
  shouldEnableWebGPU,
  shouldUseWebGL2,
} from "../figma_app/149304"
import { getInitialDynamicConfig } from "../figma_app/594947"
import { getWasmModule } from "../figma_app/762706"
import {
  ColorSpaceEnum,
  GpuErrorType,
  webGPUBindings,
} from "../figma_app/763686"
import { colorProfileManagerInstance } from "../figma_app/773170"
import { getIsWindows } from "../figma_app/778880"

// WebGPU initialization status types
type WebGPUInitializationStatus
  = | "webgpu_not_supported"
  | "webgpu_not_allowed"
  | "webgpu_no_adapter"
  | "webgpu_software_rendering"
  | "webgpu_no_device"
  | "webgpu_disallow_list"
  | "webgpu_success"

// GPU device information interface
export interface GPUDeviceInfo {
  figmaRenderingBackend: string
  graphicsCardName: string
  vendor: string
  webGLVersion: string
  webgpuArchitecture: string
  webgpuDescription: string
  webgpuDevice: string
  webgpuVendor: string
}

// WebGL fallback triggers configuration
export interface WebGLFallbackTriggers {
  request_device_failure: boolean
  webgpu_error: boolean
  webgpu_oom: boolean
  js_error: boolean
  compatibility_test: boolean
}

// Global WebGPU context instance
export let webGPUContextInstance: WebGPUContext

/**
 * WebGPU Synchronous Readback Utility
 * Handles pixel reading operations from WebGPU textures using fallback methods
 */
class WebGPUSyncReadback {
  _gpuCanvas: OffscreenCanvas | null = null
  _gpuCtx: GPUCanvasContext | null = null
  _glCanvas: OffscreenCanvas | null = null
  _gl: WebGLRenderingContext | WebGL2RenderingContext | null = null
  _texture: WebGLTexture | null = null
  _framebuffer: WebGLFramebuffer | null = null
  _webglContextLost: boolean = false
  _canvas2DCanvasNoAlpha: OffscreenCanvas | null = null
  _canvas2DContextNoAlpha: OffscreenCanvasRenderingContext2D | null
    = null

  _canvas2DCanvasAlpha: OffscreenCanvas | null = null
  _canvas2DContextAlpha: OffscreenCanvasRenderingContext2D | null
    = null

  _lastDevice: GPUDevice | null = null
  _pipeline: GPURenderPipeline | null = null
  _sampler: GPUSampler | null = null
  _bindGroupLayout: GPUBindGroupLayout | null = null
  _uv: Float32Array = new Float32Array(4)

  constructor() {
    this.initializeIfNeeded()
  }

  _setupWebGL(): void {
    if (!this._gl)
      return

    this._texture = this._gl.createTexture()
    this._framebuffer = this._gl.createFramebuffer()

    this._gl.bindTexture(this._gl.TEXTURE_2D, this._texture)
    this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, this._framebuffer)
    this._gl.framebufferTexture2D(
      this._gl.FRAMEBUFFER,
      this._gl.COLOR_ATTACHMENT0,
      this._gl.TEXTURE_2D,
      this._texture,
      0,
    )
    this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true)
  }

  isInitialized(): boolean {
    return !!(
      this._gpuCanvas
      && this._gpuCtx
      && this._gl
      && this._glCanvas
      && this._framebuffer
      && this._texture
      && this._canvas2DCanvasNoAlpha
      && this._canvas2DContextNoAlpha
      && this._canvas2DCanvasAlpha
      && this._canvas2DContextAlpha
    )
  }

  initializeIfNeeded(): void {
    if (!shouldEnableWebGPU() || this.isInitialized())
      return

    // Initialize WebGPU canvas
    this._gpuCanvas = new OffscreenCanvas(1, 1)
    this._gpuCtx = this._gpuCanvas.getContext("webgpu")

    // Initialize 2D canvas contexts
    this._canvas2DCanvasNoAlpha = new OffscreenCanvas(1, 1)
    this._canvas2DContextNoAlpha = this._canvas2DCanvasNoAlpha.getContext(
      "2d",
      { alpha: false },
    )

    this._canvas2DCanvasAlpha = new OffscreenCanvas(1, 1)
    this._canvas2DContextAlpha = this._canvas2DCanvasAlpha.getContext("2d")

    // Initialize WebGL context
    this._glCanvas = new OffscreenCanvas(1, 1)
    this._gl = getPreferredWebGLContext(shouldUseWebGL2(), this._glCanvas)

    // Setup WebGL context event handlers
    this._glCanvas.addEventListener("webglcontextlost", () => {
      this._webglContextLost = true
    })

    this._glCanvas.addEventListener("webglcontextrestored", () => {
      this._webglContextLost = false
      this._setupWebGL()
    })

    this._setupWebGL()
  }

  getGLContext(): WebGLRenderingContext | WebGL2RenderingContext | null {
    this.initializeIfNeeded()
    return this._gl
  }

  _createShaderPipeline(device: GPUDevice): void {
    const shaderCode = `
      struct UniformBlock {
        uv: vec4f,
      };
      @group(0) @binding(0) var<uniform> uniforms: UniformBlock;
      @group(0) @binding(1) var mySampler: sampler;
      @group(0) @binding(2) var myTexture: texture_2d<f32>;

      struct VertexOutput {
          @builtin(position) Position: vec4<f32>,
          @location(0) fragUV: vec2<f32>,
      };

      @vertex
      fn vertex_main(@builtin(vertex_index) VertexIndex: u32) -> VertexOutput {
          var pos = array<vec2<f32>, 3>(
              vec2<f32>(-1.0, -1.0),
              vec2<f32>( 3.0, -1.0),
              vec2<f32>(-1.0, 3.0)
          );
          var x = uniforms.uv.x;
          var y = uniforms.uv.y;
          var w = uniforms.uv.z;
          var h = uniforms.uv.w;
          var uv = array<vec2<f32>, 3>(
              vec2<f32>(x, y + h),
              vec2<f32>(x + 2.0 * w, y + h),
              vec2<f32>(x, y - h)
          );
          var output: VertexOutput;
          output.Position = vec4<f32>(pos[VertexIndex], 0.0, 1.0);
          output.fragUV = uv[VertexIndex];
          return output;
      }

      @fragment
      fn fragment_main(input: VertexOutput) -> @location(0) vec4<f32> {
        return textureSample(myTexture, mySampler, input.fragUV);
      }
    `

    const shaderModule = device.createShaderModule({ code: shaderCode })
    const pipelineLayout = device.createPipelineLayout({
      bindGroupLayouts: [this._bindGroupLayout!],
    })

    this._pipeline = device.createRenderPipeline({
      layout: pipelineLayout,
      vertex: {
        module: shaderModule,
        entryPoint: "vertex_main",
      },
      fragment: {
        module: shaderModule,
        entryPoint: "fragment_main",
        targets: [
          {
            format: navigator.gpu.getPreferredCanvasFormat(),
          },
        ],
      },
      primitive: {
        topology: "triangle-list",
      },
    })
  }

  _drawTextureToTexture(
    device: GPUDevice,
    sourceTexture: GPUTexture,
    targetTexture: GPUTexture,
    uvData: Float32Array,
  ): void {
    // Reset pipeline if device changed
    if (device !== this._lastDevice) {
      this._lastDevice = device
      this._pipeline = null
      this._sampler = null
      this._bindGroupLayout = null
    }

    const bufferSize = uvData.byteLength

    // Create bind group layout if needed
    if (!this._bindGroupLayout) {
      this._bindGroupLayout = device.createBindGroupLayout({
        entries: [
          {
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              minBindingSize: bufferSize,
            },
          },
          {
            binding: 1,
            visibility: GPUShaderStage.FRAGMENT,
            sampler: {},
          },
          {
            binding: 2,
            visibility: GPUShaderStage.FRAGMENT,
            texture: {},
          },
        ],
      })
    }

    // Create pipeline if needed
    if (!this._pipeline) {
      this._createShaderPipeline(device)
    }

    // Create sampler if needed
    if (!this._sampler) {
      this._sampler = device.createSampler({
        magFilter: "nearest",
        minFilter: "nearest",
      })
    }

    // Create uniform buffer
    const uniformBuffer = device.createBuffer({
      size: bufferSize,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    })

    // Create bind group
    const bindGroup = device.createBindGroup({
      layout: this._bindGroupLayout,
      entries: [
        {
          binding: 0,
          resource: { buffer: uniformBuffer },
        },
        {
          binding: 1,
          resource: this._sampler,
        },
        {
          binding: 2,
          resource: sourceTexture.createView(),
        },
      ],
    })

    // Create command encoder and render pass
    const commandEncoder = device.createCommandEncoder({
      label: "drawTextureToTextureSyncReadback",
    })

    const renderPassDescriptor: GPURenderPassDescriptor = {
      colorAttachments: [
        {
          view: targetTexture.createView(),
          loadOp: "clear",
          storeOp: "store",
          clearValue: { r: 0, g: 0, b: 0, a: 1 },
        },
      ],
    }

    const renderPass = commandEncoder.beginRenderPass(renderPassDescriptor)
    renderPass.setPipeline(this._pipeline)
    renderPass.setBindGroup(0, bindGroup)
    renderPass.draw(3, 1, 0, 0)
    renderPass.end()

    const commandBuffer = commandEncoder.finish()
    device.queue.writeBuffer(uniformBuffer, 0, uvData)
    device.queue.submit([commandBuffer])
  }

  readPixels(
    device: GPUDevice,
    sourceTexture: GPUTexture,
    x: number,
    y: number,
    width: number,
    height: number,
    outputBuffer: Uint8Array,
    gpuDeviceInfo: GPUDeviceInfo,
  ): boolean {
    this.initializeIfNeeded()

    if (!this._validateContexts()) {
      return false
    }

    const expectedBufferSize = width * height * 4
    if (outputBuffer.byteLength !== expectedBufferSize) {
      return false
    }

    const preferredFormat = navigator.gpu.getPreferredCanvasFormat()

    // Configure GPU canvas
    this._gpuCanvas!.width = width
    this._gpuCanvas!.height = height
    this._gpuCtx!.configure({
      device,
      format: preferredFormat,
      usage:
        GPUTextureUsage.RENDER_ATTACHMENT
        | GPUTextureUsage.COPY_DST
        | GPUTextureUsage.COPY_SRC,
      alphaMode: "premultiplied",
    })

    // Copy texture data
    if (preferredFormat === "rgba8unorm") {
      this._copyTextureDirectly(device, sourceTexture, x, y, width, height)
    }
    else {
      this._copyTextureWithShader(device, sourceTexture, x, y, width, height)
    }

    // Read pixels using appropriate method
    if (this._shouldUseContext2D(gpuDeviceInfo)) {
      return this._readPixelsWithContext2D(
        width,
        height,
        expectedBufferSize,
        outputBuffer,
      )
    }
    else {
      return this._readPixelsWithWebGL(width, height, outputBuffer)
    }
  }

  _validateContexts(): boolean {
    return !!(
      this._gpuCanvas
      && this._gpuCtx
      && this._gl
      && this._glCanvas
      && this._framebuffer
      && this._texture
      && this._canvas2DCanvasNoAlpha
      && this._canvas2DContextNoAlpha
      && this._canvas2DCanvasAlpha
      && this._canvas2DContextAlpha
    )
  }

  _copyTextureDirectly(
    device: GPUDevice,
    sourceTexture: GPUTexture,
    x: number,
    y: number,
    width: number,
    height: number,
  ): void {
    const commandEncoder = device.createCommandEncoder({
      label: "copyTextureToTextureSyncReadback",
    })

    commandEncoder.copyTextureToTexture(
      {
        texture: sourceTexture,
        origin: { x, y },
      },
      {
        texture: this._gpuCtx!.getCurrentTexture(),
      },
      [width, height, 1],
    )

    const commandBuffer = commandEncoder.finish()
    device.queue.submit([commandBuffer])
  }

  _copyTextureWithShader(
    device: GPUDevice,
    sourceTexture: GPUTexture,
    x: number,
    y: number,
    width: number,
    height: number,
  ): void {
    this._uv[0] = x / sourceTexture.width
    this._uv[1] = y / sourceTexture.height
    this._uv[2] = width / sourceTexture.width
    this._uv[3] = height / sourceTexture.height

    this._drawTextureToTexture(
      device,
      sourceTexture,
      this._gpuCtx!.getCurrentTexture(),
      this._uv,
    )
  }

  _readPixelsWithContext2D(
    width: number,
    height: number,
    expectedBufferSize: number,
    outputBuffer: Uint8Array,
  ): boolean {
    if (
      !this._canvas2DCanvasNoAlpha
      || !this._canvas2DContextNoAlpha
      || !this._canvas2DCanvasAlpha
      || !this._canvas2DContextAlpha
    ) {
      return false
    }

    // Get RGB data without alpha
    this._canvas2DCanvasNoAlpha.width = width
    this._canvas2DCanvasNoAlpha.height = height
    this._canvas2DContextNoAlpha.drawImage(this._gpuCanvas!, 0, 0)
    const rgbData = this._canvas2DContextNoAlpha.getImageData(
      0,
      0,
      width,
      height,
    ).data

    // Get alpha data
    this._canvas2DCanvasAlpha.width = width
    this._canvas2DCanvasAlpha.height = height
    this._canvas2DContextAlpha.drawImage(this._gpuCanvas!, 0, 0)
    const alphaData = this._canvas2DContextAlpha.getImageData(
      0,
      0,
      width,
      height,
    ).data

    // Combine RGB and alpha data
    for (let i = 0; i < expectedBufferSize; i += 4) {
      const r = rgbData[i]
      const g = rgbData[i + 1]
      const b = rgbData[i + 2]
      const a = alphaData[i + 3]

      if (
        r === undefined
        || g === undefined
        || b === undefined
        || a === undefined
      ) {
        return false
      }

      outputBuffer[i] = r
      outputBuffer[i + 1] = g
      outputBuffer[i + 2] = b
      outputBuffer[i + 3] = a
    }

    return true
  }

  _readPixelsWithWebGL(
    width: number,
    height: number,
    outputBuffer: Uint8Array,
  ): boolean {
    if (this._webglContextLost || !this._gl) {
      return false
    }

    this._gl.texImage2D(
      this._gl.TEXTURE_2D,
      0,
      this._gl.RGBA,
      this._gl.RGBA,
      this._gl.UNSIGNED_BYTE,
      this._gpuCanvas!,
    )

    this._gl.readPixels(
      0,
      0,
      width,
      height,
      this._gl.RGBA,
      this._gl.UNSIGNED_BYTE,
      outputBuffer,
    )

    return true
  }

  _shouldUseContext2D(gpuDeviceInfo: GPUDeviceInfo): boolean {
    // Check Windows-specific feature flag
    if (
      getFeatureFlags().webgpu_canvas_2d_readpixels_windows
      && getIsWindows()
    ) {
      return true
    }

    // Check general feature flag and device compatibility
    if (getFeatureFlags().webgpu_canvas_2d_readpixels) {
      const compatibleDevices = getInitialDynamicConfig(
        "webgpu_sync_readback_config",
      ).get("vendor_architecture_context2d", [])

      return compatibleDevices.some(
        (device: any) =>
          device.vendor === gpuDeviceInfo.webgpuVendor
          && device.architecture === gpuDeviceInfo.webgpuArchitecture,
      )
    }

    return false
  }
}

/**
 * Main WebGPU Context Manager
 * Handles WebGPU device initialization, configuration, and operations
 */
class WebGPUContext {
  _device: GPUDevice | null = null
  _deviceIdForEmscripten: number | null = null
  _recreateDeviceOnNextDestroy: boolean = false
  _recreateDeviceOnNextDestroyTimeoutId: number | null = null
  _emscriptenModule: any = undefined
  _surfaceIdToConfiguredColorSpace = new Map<number, string>()
  _initializationStatus: WebGPUInitializationStatus
    = "webgpu_not_supported"

  _didCreateDevice: boolean = false
  _gpuDeviceInfo: GPUDeviceInfo = {
    figmaRenderingBackend: "",
    graphicsCardName: "",
    vendor: "",
    webGLVersion: "",
    webgpuArchitecture: "",
    webgpuDescription: "",
    webgpuDevice: "",
    webgpuVendor: "",
  }

  _webglFallbackTriggers: WebGLFallbackTriggers = {
    request_device_failure: false,
    webgpu_error: false,
    webgpu_oom: false,
    js_error: false,
    compatibility_test: false,
  }

  _syncReadback = new WebGPUSyncReadback()

  emscriptenModule(): any {
    if (!this._emscriptenModule) {
      this._emscriptenModule = getWasmModule()
    }
    return this._emscriptenModule
  }

  initializationStatus(): WebGPUInitializationStatus {
    return this._initializationStatus
  }

  setInitializationStatus(status: WebGPUInitializationStatus): void {
    this._initializationStatus = status
  }

  async initialize(): Promise<void> {
    if (this._device)
      return

    const handleDeviceCreateFailure = () => {
      if (this._shouldFallbackToWebGLOnDeviceCreateFailure()) {
        webGPUBindings?.requestFallbackToWebGL(
          GpuErrorType.REQUEST_DEVICE_FAILURE,
        )
      }
    }

    // Request WebGPU adapter
    const adapter = await this._requestAdapter()
    if (!adapter) {
      logWarning(
        "GPU",
        "No WebGPU adapters found. We should fallback to WebGL.",
      )
      this._initializationStatus = "webgpu_no_adapter"
      handleDeviceCreateFailure()
      return
    }

    if ((adapter as any).isFallbackAdapter) {
      logWarning(
        "GPU",
        "WebGPU fallback adapter found. We should fallback to WebGL.",
      )
      this._initializationStatus = "webgpu_software_rendering"
      handleDeviceCreateFailure()
      return
    }

    // Request WebGPU device
    const device = await this._requestDevice(adapter)
    if (!device) {
      this._initializationStatus = "webgpu_no_device"
      handleDeviceCreateFailure()
      return
    }

    this._device = device

    // Collect device information
    await this._collectDeviceInfo(adapter)

    // Configure fallback triggers
    this._configureFallbackTriggers()

    // Check device compatibility
    if (this._isDeviceBlocked()) {
      this._initializationStatus = "webgpu_disallow_list"
      this._device = null
      return
    }

    // Setup device lost handler
    this._setupDeviceLostHandler()

    this._didCreateDevice = true
    this._initializationStatus = "webgpu_success"
  }

  async _requestAdapter(): Promise<GPUAdapter | null> {
    let adapter: GPUAdapter | null = null

    try {
      // Try high-performance first
      adapter = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
      })

      if (!adapter || (adapter as any).isFallbackAdapter) {
        logWarning(
          "GPU",
          "Failed to get high-performance WebGPU adapter. Trying low-power.",
        )

        adapter = await navigator.gpu.requestAdapter({
          powerPreference: "low-power",
        })

        if (!adapter || (adapter as any).isFallbackAdapter) {
          logWarning(
            "GPU",
            "Failed to get low-power WebGPU adapter. Trying default.",
          )
          adapter = await navigator.gpu.requestAdapter()
        }
      }
    }
    catch (error) {
      reportError(ServiceCategories.RENDERING_AND_ANIMATION, error)
      try {
        adapter = await navigator.gpu.requestAdapter()
      }
      catch (fallbackError) {
        reportError(ServiceCategories.RENDERING_AND_ANIMATION, fallbackError)
      }
    }

    return adapter
  }

  async _requestDevice(adapter: GPUAdapter): Promise<GPUDevice | null> {
    try {
      return await adapter.requestDevice()
    }
    catch (error) {
      reportError(ServiceCategories.RENDERING_AND_ANIMATION, error)
      logError("GPU", "Unexpectedly failed to create WebGPU device", {
        reportAsSentryError: true,
      })
      return null
    }
  }

  async _collectDeviceInfo(adapter: GPUAdapter): Promise<void> {
    // Get adapter info
    let adapterInfo = (adapter as any).info
    if (
      !adapterInfo
      && typeof (adapter as any).requestAdapterInfo === "function"
    ) {
      adapterInfo = await (adapter as any).requestAdapterInfo()
    }

    // Get WebGL context for additional info
    const glContext
      = this._syncReadback.getGLContext()
      || getPreferredWebGLContext(shouldUseWebGL2())

    this._gpuDeviceInfo.figmaRenderingBackend = "WebGPU"

    if (glContext) {
      this._gpuDeviceInfo.webGLVersion = glContext.getParameter(
        glContext.VERSION,
      )

      const debugInfo = glContext.getExtension("WEBGL_debug_renderer_info")
      if (debugInfo) {
        this._gpuDeviceInfo.graphicsCardName
          = glContext.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) ?? ""
        this._gpuDeviceInfo.vendor
          = glContext.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) ?? ""
      }
      else {
        this._gpuDeviceInfo.graphicsCardName
          = glContext.getParameter(glContext.RENDERER) ?? ""
        this._gpuDeviceInfo.vendor
          = glContext.getParameter(glContext.VENDOR) ?? ""
      }
    }
    else if (adapterInfo) {
      logWarning(
        "GPU",
        "No WebGL context found... using WebGPUAdapterInfo to fill in GPU hardware info",
      )
      this._gpuDeviceInfo.graphicsCardName = adapterInfo.device
      this._gpuDeviceInfo.vendor = adapterInfo.vendor
    }
    else {
      logWarning(
        "GPU",
        "No WebGL context found and no WebGPUAdapterInfo found. Using empty GPU hardware info",
      )
    }

    if (adapterInfo) {
      this._gpuDeviceInfo.webgpuArchitecture = adapterInfo.architecture
      this._gpuDeviceInfo.webgpuDescription = adapterInfo.description
      this._gpuDeviceInfo.webgpuDevice = adapterInfo.device
      this._gpuDeviceInfo.webgpuVendor = adapterInfo.vendor
    }
  }

  _configureFallbackTriggers(): void {
    this._webglFallbackTriggers = getInitialDynamicConfig(
      "webgl_fallback_triggers",
    ).get("webgl_fallback_triggers", {
      request_device_failure: false,
      webgpu_error: false,
      webgpu_oom: false,
      js_error: false,
      compatibility_test: false,
    })
  }

  _isDeviceBlocked(): boolean {
    if (mustUseWebGPU())
      return false

    const deviceInfo = this._gpuDeviceInfo

    // Check Windows Intel Gen-7/8 blocks
    if (
      getIsWindows()
      && deviceInfo.webgpuVendor.toLowerCase() === "intel"
      && (deviceInfo.webgpuArchitecture.toLowerCase() === "gen-7"
        || deviceInfo.webgpuArchitecture.toLowerCase() === "gen-8")
    ) {
      return true
    }

    // Check Apple Metal-3 compatibility
    if (
      deviceInfo.webgpuVendor.toLowerCase() === "apple"
      && deviceInfo.webgpuArchitecture.toLowerCase() === "metal-3"
    ) {
      return !getFeatureFlags().webgpu_canvas_2d_readpixels
    }

    // Check missing graphics card name
    if (
      getInitialDynamicConfig("webgpu_platform_device_config").get(
        "block_missing_graphics_card_name",
        false,
      )
      && deviceInfo.graphicsCardName.length === 0
    ) {
      return true
    }

    // Check graphics card blocklist
    const graphicsCardBlocklist = getInitialDynamicConfig(
      "webgpu_platform_device_config",
    ).get("graphics_card_blocklist", [])

    const vendorArchitectureBlocklist = getInitialDynamicConfig(
      "webgpu_platform_device_config",
    ).get("vendor_architecture_blocklist", [])

    const isGraphicsCardBlocked = graphicsCardBlocklist.some(
      (blockedCard: string) =>
        deviceInfo.graphicsCardName
          .toLowerCase()
          .includes(blockedCard.toLowerCase()),
    )

    const isVendorArchitectureBlocked = vendorArchitectureBlocklist.some(
      (blocked: any) =>
        blocked.vendor === deviceInfo.webgpuVendor
        && blocked.architecture === deviceInfo.webgpuArchitecture,
    )

    return isGraphicsCardBlocked || isVendorArchitectureBlocked
  }

  _setupDeviceLostHandler(): void {
    this._device!.lost.then(async (info) => {
      logWarning("GPU", "WebGPU device was lost: ", {
        message: info.message,
        reason: info.reason,
      })

      webGPUBindings?.reportDeviceLost()
      this._device = null
      this._deviceIdForEmscripten = null

      if (info.reason !== "destroyed") {
        await this.initialize()

        if (this.isDeviceInitialized()) {
          logWarning("GPU", "WebGPU device was re-initialized.")
          webGPUBindings?.reportDeviceRestored()
        }
        else {
          logWarning(
            "GPU",
            "WebGPU device was lost and failed to re-initialize.",
          )
          if (this._shouldFallbackToWebGLOnDeviceCreateFailure()) {
            webGPUBindings?.requestFallbackToWebGL(
              GpuErrorType.REQUEST_DEVICE_FAILURE,
            )
          }
        }

        this._recreateDeviceOnNextDestroy = false
      }
      else if (
        this._recreateDeviceOnNextDestroy
        && !this._recreateDeviceOnNextDestroyTimeoutId
      ) {
        this._recreateDeviceOnNextDestroyTimeoutId = setTimeout(async () => {
          await this.initialize()
          logWarning("GPU", "WebGPU device was re-initialized after timeout.")
          webGPUBindings?.reportDeviceRestored()
          this._recreateDeviceOnNextDestroy = false
          this._recreateDeviceOnNextDestroyTimeoutId = null
        }, 3000)
      }
    })
  }

  isDeviceInitialized(): boolean {
    return this._device !== null
  }

  wasDeviceInitializedAtLeastOnce(): boolean {
    return this._didCreateDevice
  }

  setRecreateDeviceOnNextDestroy(recreate: boolean): void {
    this._recreateDeviceOnNextDestroy = recreate
  }

  writeBuffer(
    queueId: number,
    bufferId: number,
    bufferOffset: number,
    data: ArrayBuffer,
    dataOffset: number,
    size: number,
  ): void {
    const emscriptenObj = this.emscriptenModule().WebGPUEmscriptenObj
    if (!emscriptenObj) {
      logError(
        "GPU",
        "WebGPU emscripten object not initialized when writing buffer",
        {
          reportAsSentryError: true,
        },
      )
      return
    }

    const queue = emscriptenObj.mgrQueue.get(queueId)
    const buffer = emscriptenObj.mgrBuffer.get(bufferId)

    try {
      queue.writeBuffer(buffer, bufferOffset, data, dataOffset, size)
    }
    catch (error) {
      reportError(ServiceCategories.RENDERING_AND_ANIMATION, error)
    }
  }

  writeTexture(
    queueId: number,
    textureId: number,
    data: ArrayBuffer,
    bytesPerRow: number,
  ): void {
    const emscriptenObj = this.emscriptenModule().WebGPUEmscriptenObj
    if (!emscriptenObj) {
      logError(
        "GPU",
        "WebGPU emscripten object not initialized when writing texture",
        {
          reportAsSentryError: true,
        },
      )
      return
    }

    const queue = emscriptenObj.mgrQueue.get(queueId)
    const texture = emscriptenObj.mgrTexture.get(textureId)
    const textureDataLayout = bytesPerRow * texture.width

    try {
      queue.writeTexture(
        { texture },
        data,
        {
          offset: 0,
          bytesPerRow: textureDataLayout,
        },
        {
          width: texture.width,
          height: texture.height,
        },
      )
    }
    catch (error) {
      reportError(ServiceCategories.RENDERING_AND_ANIMATION, error)
    }
  }

  copyExternalImageToTexture(
    queueId: number,
    textureId: number,
    imageSource: ImageBitmapSource,
  ): void {
    const emscriptenObj = this.emscriptenModule().WebGPUEmscriptenObj
    if (!emscriptenObj) {
      logError(
        "GPU",
        "WebGPU emscripten object not initialized when copying external image to texture",
        {
          reportAsSentryError: true,
        },
      )
      return
    }

    const queue = emscriptenObj.mgrQueue.get(queueId)
    const texture = emscriptenObj.mgrTexture.get(textureId)

    try {
      queue.copyExternalImageToTexture(
        {
          source: imageSource,
          flipY: false,
        },
        { texture },
        {
          width: texture.width,
          height: texture.height,
        },
      )
    }
    catch (error) {
      reportError(ServiceCategories.RENDERING_AND_ANIMATION, error)
    }
  }

  readPixels(
    deviceId: number,
    textureId: number,
    x: number,
    y: number,
    width: number,
    height: number,
    outputBuffer: Uint8Array,
  ): boolean {
    const emscriptenObj = this.emscriptenModule().WebGPUEmscriptenObj
    if (!emscriptenObj) {
      logError(
        "GPU",
        "WebGPU emscripten object not initialized when reading pixels",
        {
          reportAsSentryError: true,
        },
      )
      return false
    }

    const device = emscriptenObj.mgrDevice.get(deviceId)
    const texture = emscriptenObj.mgrTexture.get(textureId)

    try {
      return this._syncReadback.readPixels(
        device,
        texture,
        x,
        y,
        width,
        height,
        outputBuffer,
        this._gpuDeviceInfo,
      )
    }
    catch (error) {
      reportError(ServiceCategories.RENDERING_AND_ANIMATION, error)
      return false
    }
  }

  screenWidth(): number {
    return screen?.width ?? 0
  }

  screenHeight(): number {
    return screen?.height ?? 0
  }

  getPreferredCanvasFormat(): GPUTextureFormat {
    return navigator.gpu.getPreferredCanvasFormat()
  }

  colorProfileToString(colorSpace: ColorSpaceEnum): string {
    switch (colorSpace) {
      case ColorSpaceEnum.SRGB:
        return "srgb"
      case ColorSpaceEnum.DISPLAY_P3:
        return "display-p3"
      default:
        return "srgb"
    }
  }

  needToConfigure(surfaceId: number): boolean {
    const currentColorSpace = this.colorProfileToString(
      colorProfileManagerInstance.getCanvasColorProfile(),
    )
    return (
      this._surfaceIdToConfiguredColorSpace.get(surfaceId) !== currentColorSpace
    )
  }

  configure(deviceId: number, surfaceId: number): number {
    const emscriptenObj = this.emscriptenModule().WebGPUEmscriptenObj
    if (!emscriptenObj) {
      logError(
        "GPU",
        "WebGPU emscripten object not initialized when configuring context",
        {
          reportAsSentryError: true,
        },
      )
      return 0
    }

    const device = emscriptenObj.mgrDevice.get(deviceId)
    const surface = emscriptenObj.mgrSurface.get(surfaceId)
    const colorSpace = this.colorProfileToString(
      colorProfileManagerInstance.getCanvasColorProfile(),
    )

    surface.configure({
      device,
      format: this.getPreferredCanvasFormat(),
      usage: GPUTextureUsage.RENDER_ATTACHMENT,
      colorSpace,
    })

    this._surfaceIdToConfiguredColorSpace.set(surfaceId, colorSpace)
    return emscriptenObj.mgrSwapChain.create(surface)
  }

  deviceId(): number {
    const emscriptenObj = this.emscriptenModule().WebGPUEmscriptenObj
    if (!emscriptenObj) {
      logError(
        "GPU",
        "WebGPU emscripten object not initialized when getting device id",
        {
          reportAsSentryError: true,
        },
      )
      return -1
    }

    if (!this._device) {
      logError("GPU", "WebGPU device not initialized when getting device id", {
        reportAsSentryError: true,
      })
      return -1
    }

    if (this._deviceIdForEmscripten === null) {
      const deviceDescriptor = {
        queueId: emscriptenObj.mgrQueue.create(this._device.queue),
      }
      this._deviceIdForEmscripten = emscriptenObj.mgrDevice.create(
        this._device,
        deviceDescriptor,
      )
    }

    emscriptenObj.mgrDevice.reference(this._deviceIdForEmscripten)
    return this._deviceIdForEmscripten
  }

  gpuDeviceInfo(): GPUDeviceInfo {
    return this._gpuDeviceInfo
  }

  logInitializationStatus(): void {
    analyticsEventManager.trackDefinedEvent(
      "rendering_and_animation.webgpu_initialization",
      {
        status: this._initializationStatus,
        graphicsCardName: this._gpuDeviceInfo.graphicsCardName,
        vendor: this._gpuDeviceInfo.vendor,
        webGLVersion: this._gpuDeviceInfo.webGLVersion,
        webgpuArchitecture: this._gpuDeviceInfo.webgpuArchitecture,
        webgpuDescription: this._gpuDeviceInfo.webgpuDescription,
        webgpuDevice: this._gpuDeviceInfo.webgpuDevice,
        webgpuVendor: this._gpuDeviceInfo.webgpuVendor,
      },
    )
  }

  getInitializationStatus(): WebGPUInitializationStatus {
    return this._initializationStatus
  }

  shouldFallbackToWebGLOnError(): boolean {
    return this._webglFallbackTriggers.webgpu_error && !mustUseWebGPU()
  }

  shouldFallbackToWebGLOnOOM(): boolean {
    return this._webglFallbackTriggers.webgpu_oom && !mustUseWebGPU()
  }

  _shouldFallbackWebGLOnJSError(): boolean {
    return this._webglFallbackTriggers.js_error && !mustUseWebGPU()
  }

  _shouldFallbackToWebGLOnDeviceCreateFailure(): boolean {
    return (
      this._webglFallbackTriggers.request_device_failure
      && !mustUseWebGPU()
      && this._didCreateDevice
    )
  }

  _shouldFallbackToWebGLOnCompatibilityTestFailure(
    deviceWasInitialized: boolean,
  ): boolean {
    return (
      this._webglFallbackTriggers.compatibility_test
      && !mustUseWebGPU()
      && deviceWasInitialized
    )
  }

  checkJsErrors(): void {
    const emscriptenObj = this.emscriptenModule().WebGPUEmscriptenObj
    if (!emscriptenObj) {
      logError(
        "GPU",
        "WebGPU emscripten object not initialized when getting js errors",
        {
          reportAsSentryError: true,
        },
      )
      return
    }

    if (emscriptenObj.jsErrorsToReport) {
      while (emscriptenObj.jsErrorsToReport.length > 0) {
        const error = emscriptenObj.jsErrorsToReport.shift()
        if (error) {
          reportError(ServiceCategories.RENDERING_AND_ANIMATION, error)
          if (this._shouldFallbackWebGLOnJSError()) {
            webGPUBindings?.requestFallbackToWebGL(GpuErrorType.JS_ERROR)
          }
        }
      }
    }
  }

  async _testCompositeTilePipeline() {
    if (!this._device || !webGPUBindings)
      return

    this._device.pushErrorScope("internal")
    this._device.pushErrorScope("validation")
    this._device.pushErrorScope("out-of-memory")

    try {
      const vertexShaderCode = webGPUBindings.getWGSLShader(
        "COMPOSITE_TILE_VERTEX",
      )
      const fragmentShaderCode = webGPUBindings.getWGSLShader(
        "COMPOSITE_TILE_FRAGMENT",
      )

      const vertexShaderModule = this._device.createShaderModule({
        code: vertexShaderCode,
      })
      const fragmentShaderModule = this._device.createShaderModule({
        code: fragmentShaderCode,
      })

      const shaderStage = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT

      const uniformBindGroupLayout = this._device.createBindGroupLayout({
        entries: [
          {
            binding: 0,
            visibility: shaderStage,
            buffer: { type: "uniform" },
          },
        ],
      })

      const textureBindGroupLayout = this._device.createBindGroupLayout({
        entries: [
          {
            binding: 0,
            visibility: shaderStage,
            texture: { sampleType: "unfilterable-float" },
          },
          {
            binding: 1,
            visibility: shaderStage,
            sampler: { type: "non-filtering" },
          },
        ],
      })

      const pipelineLayout = this._device.createPipelineLayout({
        bindGroupLayouts: [uniformBindGroupLayout, textureBindGroupLayout],
      })

      await this._device.createRenderPipelineAsync({
        layout: pipelineLayout,
        vertex: {
          module: vertexShaderModule,
          entryPoint: "main",
          buffers: [
            {
              attributes: [
                {
                  shaderLocation: 0,
                  offset: 0,
                  format: "float32x2",
                },
                {
                  shaderLocation: 1,
                  offset: 16,
                  format: "float32x2",
                },
                {
                  shaderLocation: 2,
                  offset: 32,
                  format: "float32x2",
                },
              ],
              arrayStride: 48,
            },
          ],
        },
        fragment: {
          module: fragmentShaderModule,
          entryPoint: "main",
          targets: [{ format: "rgba8unorm" }],
        },
        primitive: { topology: "triangle-list" },
      })
    }
    catch (error) {
      this.logWebGPUCompabilityEvent(
        "exception",
        "composite_tile_pipeline",
        error,
      )
      throw error
    }
    finally {
      const oomError = await this._device.popErrorScope()
      if (oomError) {
        this.logWebGPUCompabilityEvent(
          "out_of_memory",
          "composite_tile_pipeline",
          oomError.message,
        )
      }

      const validationError = await this._device.popErrorScope()
      if (validationError) {
        this.logWebGPUCompabilityEvent(
          "validation",
          "composite_tile_pipeline",
          validationError.message,
        )
      }

      const internalError = await this._device.popErrorScope()
      if (internalError) {
        this.logWebGPUCompabilityEvent(
          "internal",
          "composite_tile_pipeline",
          internalError.message,
        )
      }

      if (oomError || validationError || internalError) {
        throw new Error(
          "WebGPU composite tile pipeline compatibility test failed",
        )
      }
    }
  }

  async _testBicubicSamplerPipeline() {
    if (!this._device || !webGPUBindings)
      return

    this._device.pushErrorScope("internal")
    this._device.pushErrorScope("validation")
    this._device.pushErrorScope("out-of-memory")

    try {
      const vertexShaderCode = webGPUBindings.getWGSLShader(
        "IMAGE_BICUBIC_SAMPLER_VERTEX",
      )
      const fragmentShaderCode = webGPUBindings.getWGSLShader(
        "IMAGE_BICUBIC_SAMPLER_FRAGMENT",
      )

      const vertexShaderModule = this._device.createShaderModule({
        code: vertexShaderCode,
      })
      const fragmentShaderModule = this._device.createShaderModule({
        code: fragmentShaderCode,
      })

      const shaderStage = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT

      const uniformBindGroupLayout = this._device.createBindGroupLayout({
        entries: [
          {
            binding: 0,
            visibility: shaderStage,
            buffer: { type: "uniform" },
          },
        ],
      })

      const textureBindGroupLayout = this._device.createBindGroupLayout({
        entries: [
          {
            binding: 0,
            visibility: shaderStage,
            texture: { sampleType: "unfilterable-float" },
          },
          {
            binding: 1,
            visibility: shaderStage,
            sampler: { type: "non-filtering" },
          },
        ],
      })

      const pipelineLayout = this._device.createPipelineLayout({
        bindGroupLayouts: [uniformBindGroupLayout, textureBindGroupLayout],
      })

      await this._device.createRenderPipelineAsync({
        layout: pipelineLayout,
        vertex: {
          module: vertexShaderModule,
          entryPoint: "main",
          buffers: [
            {
              attributes: [
                {
                  shaderLocation: 0,
                  offset: 0,
                  format: "float32x2",
                },
              ],
              arrayStride: 8,
            },
          ],
        },
        fragment: {
          module: fragmentShaderModule,
          entryPoint: "main",
          targets: [{ format: "rgba8unorm" }],
        },
        primitive: { topology: "triangle-list" },
      })
    }
    catch (error) {
      this.logWebGPUCompabilityEvent(
        "exception",
        "bicubic_sampler_pipeline",
        error,
      )
      throw error
    }
    finally {
      const oomError = await this._device.popErrorScope()
      if (oomError) {
        this.logWebGPUCompabilityEvent(
          "out_of_memory",
          "bicubic_sampler_pipeline",
          oomError.message,
        )
      }

      const validationError = await this._device.popErrorScope()
      if (validationError) {
        this.logWebGPUCompabilityEvent(
          "validation",
          "bicubic_sampler_pipeline",
          validationError.message,
        )
      }

      const internalError = await this._device.popErrorScope()
      if (internalError) {
        this.logWebGPUCompabilityEvent(
          "internal",
          "bicubic_sampler_pipeline",
          internalError.message,
        )
      }

      if (oomError || validationError || internalError) {
        throw new Error(
          "WebGPU bicubic sampler pipeline compatibility test failed",
        )
      }
    }
  }

  async _testBasicRendering() {
    if (!this._device)
      return

    this._device.pushErrorScope("internal")
    this._device.pushErrorScope("validation")
    this._device.pushErrorScope("out-of-memory")

    try {
      // Create offscreen canvas and context
      const canvas = new OffscreenCanvas(4, 4)
      const context = canvas.getContext("webgpu")
      if (!context) {
        throw new Error("Failed to get WebGPU context")
      }

      const preferredFormat = this.getPreferredCanvasFormat()
      context.configure({
        device: this._device,
        format: preferredFormat,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
        alphaMode: "premultiplied",
      })

      // Create vertex data (two triangles forming a quad)
      const vertexData = new Float32Array([
        -0.5,
        0.5, // Triangle 1
        -0.5,
        -0.5,
        0.5,
        0.5,
        0.5,
        0.5, // Triangle 2
        -0.5,
        -0.5,
        0.5,
        -0.5,
      ])

      const vertexBuffer = this._device.createBuffer({
        size: vertexData.byteLength,
        usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
      })

      this._device.queue.writeBuffer(vertexBuffer, 0, vertexData.buffer)

      // Create render pipeline
      const renderPipeline = this._device.createRenderPipeline({
        layout: "auto",
        vertex: {
          module: this._device.createShaderModule({
            code: `
              @vertex
              fn main(@location(0) pos: vec2f) -> @builtin(position) vec4f {
                return vec4f(pos.x, pos.y, 0.0, 1.0);
              }
            `,
          }),
          entryPoint: "main",
          buffers: [
            {
              arrayStride: 8,
              attributes: [
                {
                  shaderLocation: 0,
                  offset: 0,
                  format: "float32x2",
                },
              ],
            },
          ],
        },
        fragment: {
          module: this._device.createShaderModule({
            code: `
              @fragment
              fn main() -> @location(0) vec4f {
                return vec4f(1.0, 0.0, 0.0, 1.0);
              }
            `,
          }),
          entryPoint: "main",
          targets: [{ format: preferredFormat }],
        },
        primitive: { topology: "triangle-list" },
      })

      // Create readback buffer
      const readbackBuffer = this._device.createBuffer({
        size: 1024,
        usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
      })

      // Render and copy to buffer
      const commandEncoder = this._device.createCommandEncoder()

      const renderPass = commandEncoder.beginRenderPass({
        colorAttachments: [
          {
            view: context.getCurrentTexture().createView(),
            clearValue: { r: 0, g: 1, b: 0, a: 1 },
            loadOp: "clear",
            storeOp: "store",
          },
        ],
      })

      renderPass.setPipeline(renderPipeline)
      renderPass.setVertexBuffer(0, vertexBuffer)
      renderPass.draw(6)
      renderPass.end()

      commandEncoder.copyTextureToBuffer(
        { texture: context.getCurrentTexture() },
        { buffer: readbackBuffer, bytesPerRow: 256 },
        { width: 4, height: 4 },
      )

      this._device.queue.submit([commandEncoder.finish()])

      // Read and validate results
      await readbackBuffer.mapAsync(GPUMapMode.READ)
      const mappedData = new Uint8Array(readbackBuffer.getMappedRange())

      const cornerPixel = [
        mappedData[0],
        mappedData[1],
        mappedData[2],
        mappedData[3],
      ]
      const centerPixel = [
        mappedData[520],
        mappedData[521],
        mappedData[522],
        mappedData[523],
      ]

      // Handle different texture formats
      const isRGBA = preferredFormat === "rgba8unorm"
      const redIndex = isRGBA ? 0 : 2
      const blueIndex = isRGBA ? 2 : 0

      const isCenterRed
        = centerPixel[redIndex] === 255
        && centerPixel[1] === 0
        && centerPixel[blueIndex] === 0
        && centerPixel[3] === 255

      const isCornerGreen
        = cornerPixel[redIndex] === 0
        && cornerPixel[1] === 255
        && cornerPixel[blueIndex] === 0
        && cornerPixel[3] === 255

      if (!isCenterRed || !isCornerGreen) {
        throw new Error(
          `Rendering test failed. Center pixel (should be red): [${centerPixel}], Corner pixel (should be green): [${cornerPixel}]`,
        )
      }

      readbackBuffer.unmap()
    }
    catch (error) {
      this.logWebGPUCompabilityEvent("exception", "basic_rendering", error)
      throw error
    }
    finally {
      const oomError = await this._device.popErrorScope()
      if (oomError) {
        this.logWebGPUCompabilityEvent(
          "out_of_memory",
          "basic_rendering",
          oomError.message,
        )
      }

      const validationError = await this._device.popErrorScope()
      if (validationError) {
        this.logWebGPUCompabilityEvent(
          "validation",
          "basic_rendering",
          validationError.message,
        )
      }

      const internalError = await this._device.popErrorScope()
      if (internalError) {
        logError("GPU", "WebGPU basic rendering internal error", {
          message: internalError.message,
        })
        this.logWebGPUCompabilityEvent(
          "internal",
          "basic_rendering",
          internalError.message,
        )
      }

      if (oomError || validationError || internalError) {
        throw new Error("WebGPU basic rendering compatibility test failed")
      }
    }
  }

  logWebGPUCompabilityEvent(
    errorType: string,
    category: string,
    error: any,
  ): void {
    analyticsEventManager.trackDefinedEvent(
      "rendering_and_animation.webgpu_compatibility",
      {
        graphicsCardName: this._gpuDeviceInfo.graphicsCardName,
        vendor: this._gpuDeviceInfo.vendor,
        webGLVersion: this._gpuDeviceInfo.webGLVersion,
        webgpuArchitecture: this._gpuDeviceInfo.webgpuArchitecture,
        webgpuDescription: this._gpuDeviceInfo.webgpuDescription,
        webgpuDevice: this._gpuDeviceInfo.webgpuDevice,
        webgpuVendor: this._gpuDeviceInfo.webgpuVendor,
        category,
        errorType,
        message: error,
      },
    )
  }

  async logWebGPUCompatibilityStatus(
    deviceWasInitialized: boolean,
  ): Promise<void> {
    try {
      await Promise.all([
        this._testCompositeTilePipeline(),
        this._testBicubicSamplerPipeline(),
        this._testBasicRendering(),
      ])
    }
    catch (error) {
      this.logWebGPUCompabilityEvent("exception", "general", error)
      if (
        this._shouldFallbackToWebGLOnCompatibilityTestFailure(
          deviceWasInitialized,
        )
      ) {
        webGPUBindings?.requestFallbackToWebGL(
          GpuErrorType.COMPATIBILITY_TEST_FAILURE,
        )
      }
    }

    this.logWebGPUCompabilityEvent("none", "none", "")
  }
}

// Public API Functions

/**
 * Initialize the global WebGPU context instance
 */
export function initializeWebGPUContext(): void {
  webGPUContextInstance = new WebGPUContext()
}

/**
 * Initialize the WebGPU device if WebGPU is enabled
 */
export async function initializeWebGPUDevice(): Promise<void> {
  if (!shouldEnableWebGPU()) {
    if (isWebGPUSupported()) {
      webGPUContextInstance.setInitializationStatus("webgpu_not_allowed")
    }
    return
  }

  if (!webGPUContextInstance) {
    logError("GPU", "WebGPUTsContext binding not initialized.", {
      reportAsSentryError: true,
    })
    return
  }

  await webGPUContextInstance.initialize()
}

/**
 * Run WebGPU compatibility tests and log results
 */
export async function runWebGPUCompatibilityTests(): Promise<void> {
  if (!isWebGPUSupported() || !getFeatureFlags().log_webgpu_compatibility) {
    return
  }

  if (!webGPUContextInstance) {
    logError("GPU", "WebGPUTsContext binding not initialized.", {
      reportAsSentryError: true,
    })
    return
  }

  const deviceWasInitialized = webGPUContextInstance.isDeviceInitialized()

  try {
    if (!deviceWasInitialized) {
      await webGPUContextInstance.initialize()
    }

    await webGPUContextInstance.logWebGPUCompatibilityStatus(
      deviceWasInitialized,
    )

    if (!deviceWasInitialized) {
      initializeWebGPUContext()
    }
  }
  catch (error) {
    logError(
      "GPU",
      "WebGPU caught error while running compatibility tests",
      {
        message: error,
      },
      {
        reportAsSentryError: true,
      },
    )
  }
}

/**
 * Log the WebGPU initialization status
 */
export function logWebGPUInitializationStatus(): void {
  webGPUContextInstance.logInitializationStatus()
}

/**
 * Get the current WebGPU initialization status
 */
export function getWebGPUInitializationStatus(): WebGPUInitializationStatus {
  return webGPUContextInstance.getInitializationStatus()
}

// Export aliases for compatibility
export const getInitializationStatus = getWebGPUInitializationStatus
export const createWebGPUContext = initializeWebGPUContext
export const initializeDevice = initializeWebGPUDevice
export const runCompatibilityTests = runWebGPUCompatibilityTests
export const logInitializationStatus = logWebGPUInitializationStatus
export const webGPUContext = webGPUContextInstance
