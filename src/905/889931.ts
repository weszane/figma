import { ServiceCategories as _$$e } from "../905/165054";
import { PcT, q6_, RYP } from "../figma_app/763686";
import { iL } from "../figma_app/762706";
import { zD } from "../905/686312";
import { getFeatureFlags } from "../905/601108";
import { analyticsEventManager } from "../905/449184";
import { getIsWindows } from "../figma_app/778880";
import { reportError } from "../905/11";
import { logWarning, logError } from "../905/714362";
import { gP } from "../figma_app/594947";
import { wO, ap, Zj, Vu } from "../figma_app/149304";
import { l as _$$l } from "../figma_app/773170";
export let $$n5;
class f {
  constructor() {
    this._gpuCanvas = null;
    this._gpuCtx = null;
    this._glCanvas = null;
    this._gl = null;
    this._texture = null;
    this._framebuffer = null;
    this._webglContextLost = !1;
    this._canvas2DCanvasNoAlpha = null;
    this._canvas2DContextNoAlpha = null;
    this._canvas2DCanvasAlpha = null;
    this._canvas2DContextAlpha = null;
    this._lastDevice = null;
    this._pipeline = null;
    this._sampler = null;
    this._bindGroupLayout = null;
    this._uv = new Float32Array(4);
    this.initializeIfNeeded();
  }
  _setupWebGL() {
    this._gl && (this._texture = this._gl.createTexture(), this._framebuffer = this._gl.createFramebuffer(), this._gl.bindTexture(this._gl.TEXTURE_2D, this._texture), this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, this._framebuffer), this._gl.framebufferTexture2D(this._gl.FRAMEBUFFER, this._gl.COLOR_ATTACHMENT0, this._gl.TEXTURE_2D, this._texture, 0), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0));
  }
  isInitialized() {
    return !!(this._gpuCanvas && this._gpuCtx && this._gl && this._glCanvas && this._framebuffer && this._texture && this._canvas2DCanvasNoAlpha && this._canvas2DContextNoAlpha && this._canvas2DCanvasAlpha && this._canvas2DContextAlpha);
  }
  initializeIfNeeded() {
    !wO() || this.isInitialized() || (this._gpuCanvas = new OffscreenCanvas(1, 1), this._gpuCtx = this._gpuCanvas.getContext("webgpu"), this._canvas2DCanvasNoAlpha = new OffscreenCanvas(1, 1), this._canvas2DContextNoAlpha = this._canvas2DCanvasNoAlpha.getContext("2d", {
      alpha: !1
    }), this._canvas2DCanvasAlpha = new OffscreenCanvas(1, 1), this._canvas2DContextAlpha = this._canvas2DCanvasAlpha.getContext("2d"), this._glCanvas = new OffscreenCanvas(1, 1), this._gl = zD(ap(), this._glCanvas), this._glCanvas.addEventListener("webglcontextlost", () => {
      this._webglContextLost = !0;
    }), this._glCanvas.addEventListener("webglcontextrestored", () => {
      this._webglContextLost = !1;
      this._setupWebGL();
    }), this._setupWebGL());
  }
  getGLContext() {
    this.initializeIfNeeded();
    return this._gl;
  }
  _drawTextureToTexture(e, t, i, n) {
    e !== this._lastDevice && (this._lastDevice = e, this._pipeline = null, this._sampler = null, this._bindGroupLayout = null);
    let r = n.byteLength;
    if (this._bindGroupLayout || (this._bindGroupLayout = e.createBindGroupLayout({
      entries: [{
        binding: 0,
        visibility: GPUShaderStage.VERTEX,
        buffer: {
          type: "uniform",
          minBindingSize: r
        }
      }, {
        binding: 1,
        visibility: GPUShaderStage.FRAGMENT,
        sampler: {}
      }, {
        binding: 2,
        visibility: GPUShaderStage.FRAGMENT,
        texture: {}
      }]
    })), !this._pipeline) {
      let t = e.createShaderModule({
        code: `
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
      });
      let i = e.createPipelineLayout({
        bindGroupLayouts: [this._bindGroupLayout]
      });
      this._pipeline = e.createRenderPipeline({
        layout: i,
        vertex: {
          module: t,
          entryPoint: "vertex_main"
        },
        fragment: {
          module: t,
          entryPoint: "fragment_main",
          targets: [{
            format: navigator.gpu.getPreferredCanvasFormat()
          }]
        },
        primitive: {
          topology: "triangle-list"
        }
      });
    }
    this._sampler || (this._sampler = e.createSampler({
      magFilter: "nearest",
      minFilter: "nearest"
    }));
    let a = e.createBuffer({
      size: r,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    });
    let s = e.createBindGroup({
      layout: this._bindGroupLayout,
      entries: [{
        binding: 0,
        resource: {
          buffer: a
        }
      }, {
        binding: 1,
        resource: this._sampler
      }, {
        binding: 2,
        resource: t.createView()
      }]
    });
    let o = e.createCommandEncoder({
      label: "drawTextureToTextureSyncReadback"
    });
    let l = {
      view: i.createView(),
      loadOp: "clear",
      storeOp: "store",
      clearValue: {
        r: 0,
        g: 0,
        b: 0,
        a: 1
      }
    };
    let d = o.beginRenderPass({
      colorAttachments: [l]
    });
    d.setPipeline(this._pipeline);
    d.setBindGroup(0, s);
    d.draw(3, 1, 0, 0);
    d.end();
    let c = o.finish();
    e.queue.writeBuffer(a, 0, n);
    e.queue.submit([c]);
  }
  readPixels(e, t, i, n, r, a, s, o) {
    if (this.initializeIfNeeded(), !this._gpuCanvas || !this._gpuCtx || !this._gl || !this._glCanvas || !this._framebuffer || !this._texture || !this._canvas2DCanvasNoAlpha || !this._canvas2DContextNoAlpha || !this._canvas2DCanvasAlpha || !this._canvas2DContextAlpha) return !1;
    let l = r * a * 4;
    if (s.byteLength !== l) return !1;
    let d = navigator.gpu.getPreferredCanvasFormat();
    if (this._gpuCanvas.width = r, this._gpuCanvas.height = a, this._gpuCtx.configure({
      device: e,
      format: d,
      usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC,
      alphaMode: "premultiplied"
    }), "rgba8unorm" === d) {
      let s = e.createCommandEncoder({
        label: "copyTextureToTextureSyncReadback"
      });
      s.copyTextureToTexture({
        texture: t,
        origin: {
          x: i,
          y: n
        }
      }, {
        texture: this._gpuCtx.getCurrentTexture()
      }, [r, a, 1]);
      let o = s.finish();
      e.queue.submit([o]);
    } else {
      this._uv[0] = i / t.width;
      this._uv[1] = n / t.height;
      this._uv[2] = r / t.width;
      this._uv[3] = a / t.height;
      this._drawTextureToTexture(e, t, this._gpuCtx.getCurrentTexture(), this._uv);
    }
    if (this._canvas2DCanvasNoAlpha && this._canvas2DContextNoAlpha && this._canvas2DCanvasAlpha && this._canvas2DContextAlpha && this._useContext2D(o)) {
      this._canvas2DCanvasNoAlpha.width = r;
      this._canvas2DCanvasNoAlpha.height = a;
      this._canvas2DContextNoAlpha.drawImage(this._gpuCanvas, 0, 0);
      let e = this._canvas2DContextNoAlpha.getImageData(0, 0, r, a).data;
      this._canvas2DCanvasAlpha.width = r;
      this._canvas2DCanvasAlpha.height = a;
      this._canvas2DContextAlpha.drawImage(this._gpuCanvas, 0, 0);
      let t = this._canvas2DContextAlpha.getImageData(0, 0, r, a).data;
      for (let i = 0; i < l; i += 4) {
        let n = e[i];
        let r = e[i + 1];
        let a = e[i + 2];
        let o = t[i + 3];
        if (void 0 === n || void 0 === r || void 0 === a || void 0 === o) return !1;
        s[i] = n;
        s[i + 1] = r;
        s[i + 2] = a;
        s[i + 3] = o;
      }
    } else {
      if (this._webglContextLost || !this._gl) return !1;
      this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, this._gl.RGBA, this._gl.UNSIGNED_BYTE, this._gpuCanvas);
      this._gl.readPixels(0, 0, r, a, this._gl.RGBA, this._gl.UNSIGNED_BYTE, s);
    }
    return !0;
  }
  _useContext2D(e) {
    return !!(getFeatureFlags().webgpu_canvas_2d_readpixels_windows && getIsWindows()) || !!getFeatureFlags().webgpu_canvas_2d_readpixels && gP("webgpu_sync_readback_config").get("vendor_architecture_context2d", []).some(t => t.vendor === e.webgpuVendor && t.architecture === e.webgpuArchitecture);
  }
}
class _ {
  constructor() {
    this._device = null;
    this._deviceIdForEmscripten = null;
    this._recreateDeviceOnNextDestroy = !1;
    this._recreateDeviceOnNextDestroyTimeoutId = null;
    this._emscriptenModule = void 0;
    this._surfaceIdToConfiguredColorSpace = new Map();
    this._initializationStatus = "webgpu_not_supported";
    this._didCreateDevice = !1;
    this._gpuDeviceInfo = {
      figmaRenderingBackend: "",
      graphicsCardName: "",
      vendor: "",
      webGLVersion: "",
      webgpuArchitecture: "",
      webgpuDescription: "",
      webgpuDevice: "",
      webgpuVendor: ""
    };
    this._webglFallbackTriggers = {
      request_device_failure: !1,
      webgpu_error: !1,
      webgpu_oom: !1,
      js_error: !1,
      compatibility_test: !1
    };
    this._syncReadback = new f();
  }
  emscriptenModule() {
    this._emscriptenModule || (this._emscriptenModule = iL());
    return this._emscriptenModule;
  }
  initializationStatus() {
    return this._initializationStatus;
  }
  setInitializationStatus(e) {
    this._initializationStatus = e;
  }
  async initialize() {
    if (this._device) return;
    let e = () => {
      this._shouldFallbackToWebGLOnDeviceCreateFailure() && PcT?.requestFallbackToWebGL(q6_.REQUEST_DEVICE_FAILURE);
    };
    let t = null;
    try {
      (t = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      })) && !t.isFallbackAdapter || (logWarning("GPU", "Failed to get high-performance WebGPU adapter. Trying low-power."), (t = await navigator.gpu.requestAdapter({
        powerPreference: "low-power"
      })) && !t.isFallbackAdapter || (logWarning("GPU", "Failed to get low-power WebGPU adapter. Trying default."), t = await navigator.gpu.requestAdapter()));
    } catch (e) {
      reportError(_$$e.RENDERING_AND_ANIMATION, e);
      try {
        t = await navigator.gpu.requestAdapter();
      } catch (e) {
        reportError(_$$e.RENDERING_AND_ANIMATION, e);
      }
    }
    if (!t) {
      logWarning("GPU", "No WebGPU adapters found. We should fallback to WebGL.");
      this._initializationStatus = "webgpu_no_adapter";
      e();
      return;
    }
    if (t.isFallbackAdapter) {
      logWarning("GPU", "WebGPU fallback adapter found. We should fallback to WebGL.");
      this._initializationStatus = "webgpu_software_rendering";
      e();
      return;
    }
    try {
      this._device = await t.requestDevice();
    } catch (t) {
      reportError(_$$e.RENDERING_AND_ANIMATION, t);
      this._initializationStatus = "webgpu_no_device";
      e();
      return;
    }
    if (!this._device) {
      logError("GPU", "Unexpectedly failed to create WebGPU device", {
        reportAsSentryError: !0
      });
      this._initializationStatus = "webgpu_no_device";
      e();
      return;
    }
    let i = t.info;
    i || "function" != typeof t.requestAdapterInfo || (i = await t.requestAdapterInfo());
    let n = this._syncReadback.getGLContext();
    if (n || (n = zD(ap())), this._gpuDeviceInfo.figmaRenderingBackend = "WebGPU", n) {
      this._gpuDeviceInfo.webGLVersion = n.getParameter(n.VERSION);
      let e = n.getExtension("WEBGL_debug_renderer_info");
      e ? (this._gpuDeviceInfo.graphicsCardName = n.getParameter(e.UNMASKED_RENDERER_WEBGL) ?? "", this._gpuDeviceInfo.vendor = n.getParameter(e.UNMASKED_VENDOR_WEBGL) ?? "") : (this._gpuDeviceInfo.graphicsCardName = n.getParameter(n.RENDERER) ?? "", this._gpuDeviceInfo.vendor = n.getParameter(n.VENDOR) ?? "");
    } else i ? (logWarning("GPU", "No WebGL context found... using WebGPUAdapterInfo to fill in GPU hardware info"), this._gpuDeviceInfo.graphicsCardName = i.device, this._gpuDeviceInfo.vendor = i.vendor) : logWarning("GPU", "No WebGL context found and no WebGPUAdapterInfo found. Using empty GPU hardware info");
    if (i && (this._gpuDeviceInfo.webgpuArchitecture = i.architecture, this._gpuDeviceInfo.webgpuDescription = i.description, this._gpuDeviceInfo.webgpuDevice = i.device, this._gpuDeviceInfo.webgpuVendor = i.vendor), this._webglFallbackTriggers = gP("webgl_fallback_triggers").get("webgl_fallback_triggers", {
      request_device_failure: !1,
      webgpu_error: !1,
      webgpu_oom: !1,
      js_error: !1,
      compatibility_test: !1
    }), function (e) {
      if (Zj()) return !1;
      if (getIsWindows() && "intel" === e.webgpuVendor.toLowerCase() && ("gen-7" === e.webgpuArchitecture.toLowerCase() || "gen-8" === e.webgpuArchitecture.toLowerCase())) return !0;
      if ("apple" === e.webgpuVendor.toLowerCase() && "metal-3" === e.webgpuArchitecture.toLowerCase()) return !getFeatureFlags().webgpu_canvas_2d_readpixels;
      if (gP("webgpu_platform_device_config").get("block_missing_graphics_card_name", !1) && 0 === e.graphicsCardName.length) return !0;
      let t = gP("webgpu_platform_device_config").get("graphics_card_blocklist", []);
      let i = gP("webgpu_platform_device_config").get("vendor_architecture_blocklist", []);
      return t.some(t => e.graphicsCardName.toLowerCase().includes(t.toLowerCase())) || i.some(t => t.vendor === e.webgpuVendor && t.architecture === e.webgpuArchitecture);
    }(this._gpuDeviceInfo)) {
      this._initializationStatus = "webgpu_disallow_list";
      this._device = null;
      return;
    }
    this._device.lost.then(async e => {
      logWarning("GPU", "WebGPU device was lost: ", {
        message: e.message,
        reason: e.reason
      });
      PcT?.reportDeviceLost();
      this._device = null;
      this._deviceIdForEmscripten = null;
      "destroyed" !== e.reason ? (await this.initialize(), this.isDeviceInitialized() ? (logWarning("GPU", "WebGPU device was re-initialized."), PcT?.reportDeviceRestored()) : (logWarning("GPU", "WebGPU device was lost and failed to re-initialize."), this._shouldFallbackToWebGLOnDeviceCreateFailure() && PcT?.requestFallbackToWebGL(q6_.REQUEST_DEVICE_FAILURE)), this._recreateDeviceOnNextDestroy = !1) : this._recreateDeviceOnNextDestroy && !this._recreateDeviceOnNextDestroyTimeoutId && (this._recreateDeviceOnNextDestroyTimeoutId = setTimeout(async () => {
        await this.initialize();
        logWarning("GPU", "WebGPU device was re-initialized after timeout.");
        PcT?.reportDeviceRestored();
        this._recreateDeviceOnNextDestroy = !1;
        this._recreateDeviceOnNextDestroyTimeoutId = null;
      }, 3e3));
    });
    this._didCreateDevice = !0;
    this._initializationStatus = "webgpu_success";
  }
  isDeviceInitialized() {
    return null != this._device;
  }
  wasDeviceInitializedAtLeastOnce() {
    return this._didCreateDevice;
  }
  setRecreateDeviceOnNextDestroy(e) {
    this._recreateDeviceOnNextDestroy = e;
  }
  writeBuffer(e, t, i, n, a, s) {
    let o = this.emscriptenModule().WebGPUEmscriptenObj;
    if (!o) {
      logError("GPU", "WebGPU emscripten object not initialized when writing buffer", {
        reportAsSentryError: !0
      });
      return;
    }
    let l = o.mgrQueue.get(e);
    let d = o.mgrBuffer.get(t);
    try {
      l.writeBuffer(d, i, n, a, s);
    } catch (e) {
      reportError(_$$e.RENDERING_AND_ANIMATION, e);
    }
  }
  writeTexture(e, t, i, n) {
    let a = this.emscriptenModule().WebGPUEmscriptenObj;
    if (!a) {
      logError("GPU", "WebGPU emscripten object not initialized when writing texture", {
        reportAsSentryError: !0
      });
      return;
    }
    let s = a.mgrQueue.get(e);
    let o = a.mgrTexture.get(t);
    let l = n * o.width;
    try {
      s.writeTexture({
        texture: o
      }, i, {
        offset: 0,
        bytesPerRow: l
      }, {
        width: o.width,
        height: o.height
      });
    } catch (e) {
      reportError(_$$e.RENDERING_AND_ANIMATION, e);
    }
  }
  copyExternalImageToTexture(e, t, i) {
    let n = this.emscriptenModule().WebGPUEmscriptenObj;
    if (!n) {
      logError("GPU", "WebGPU emscripten object not initialized when copying external image to texture", {
        reportAsSentryError: !0
      });
      return;
    }
    let a = n.mgrQueue.get(e);
    let s = n.mgrTexture.get(t);
    try {
      a.copyExternalImageToTexture({
        source: i,
        flipY: !1
      }, {
        texture: s
      }, {
        width: s.width,
        height: s.height
      });
    } catch (e) {
      reportError(_$$e.RENDERING_AND_ANIMATION, e);
    }
  }
  readPixels(e, t, i, n, a, s, o) {
    let l = this.emscriptenModule().WebGPUEmscriptenObj;
    if (!l) {
      logError("GPU", "WebGPU emscripten object not initialized when reading pixels", {
        reportAsSentryError: !0
      });
      return !1;
    }
    let d = l.mgrDevice.get(e);
    let c = l.mgrTexture.get(t);
    try {
      return this._syncReadback.readPixels(d, c, i, n, a, s, o, this._gpuDeviceInfo);
    } catch (e) {
      reportError(_$$e.RENDERING_AND_ANIMATION, e);
      return !1;
    }
  }
  screenWidth() {
    return screen?.width ?? 0;
  }
  screenHeight() {
    return screen?.height ?? 0;
  }
  getPreferredCanvasFormat() {
    return navigator.gpu.getPreferredCanvasFormat();
  }
  colorProfileToString(e) {
    switch (e) {
      case RYP.SRGB:
        return "srgb";
      case RYP.DISPLAY_P3:
        return "display-p3";
    }
  }
  needToConfigure(e) {
    return this._surfaceIdToConfiguredColorSpace.get(e) !== this.colorProfileToString(_$$l.getCanvasColorProfile());
  }
  configure(e, t) {
    let i = this.emscriptenModule().WebGPUEmscriptenObj;
    if (!i) {
      logError("GPU", "WebGPU emscripten object not initialized when configuring context", {
        reportAsSentryError: !0
      });
      return 0;
    }
    let n = i.mgrDevice.get(e);
    let r = i.mgrSurface.get(t);
    let a = this.colorProfileToString(_$$l.getCanvasColorProfile());
    r.configure({
      device: n,
      format: this.getPreferredCanvasFormat(),
      usage: GPUTextureUsage.RENDER_ATTACHMENT,
      colorSpace: a
    });
    this._surfaceIdToConfiguredColorSpace.set(t, a);
    return i.mgrSwapChain.create(r);
  }
  deviceId() {
    let e = this.emscriptenModule().WebGPUEmscriptenObj;
    if (!e) {
      logError("GPU", "WebGPU emscripten object not initialized when getting device id", {
        reportAsSentryError: !0
      });
      return -1;
    }
    if (!this._device) {
      logError("GPU", "WebGPU device not initialized when getting device id", {
        reportAsSentryError: !0
      });
      return -1;
    }
    if (null == this._deviceIdForEmscripten) {
      let t = {
        queueId: e.mgrQueue.create(this._device.queue)
      };
      this._deviceIdForEmscripten = e.mgrDevice.create(this._device, t);
    }
    e.mgrDevice.reference(this._deviceIdForEmscripten);
    return this._deviceIdForEmscripten;
  }
  gpuDeviceInfo() {
    return this._gpuDeviceInfo;
  }
  logInitializationStatus() {
    analyticsEventManager.trackDefinedEvent("rendering_and_animation.webgpu_initialization", {
      status: this._initializationStatus,
      graphicsCardName: this._gpuDeviceInfo.graphicsCardName,
      vendor: this._gpuDeviceInfo.vendor,
      webGLVersion: this._gpuDeviceInfo.webGLVersion,
      webgpuArchitecture: this._gpuDeviceInfo.webgpuArchitecture,
      webgpuDescription: this._gpuDeviceInfo.webgpuDescription,
      webgpuDevice: this._gpuDeviceInfo.webgpuDevice,
      webgpuVendor: this._gpuDeviceInfo.webgpuVendor
    });
  }
  getInitializationStatus() {
    return this._initializationStatus;
  }
  shouldFallbackToWebGLOnError() {
    return this._webglFallbackTriggers.webgpu_error && !Zj();
  }
  shouldFallbackToWebGLOnOOM() {
    return this._webglFallbackTriggers.webgpu_oom && !Zj();
  }
  _shouldFallbackWebGLOnJSError() {
    return this._webglFallbackTriggers.js_error && !Zj();
  }
  _shouldFallbackToWebGLOnDeviceCreateFailure() {
    return this._webglFallbackTriggers.request_device_failure && !Zj() && this._didCreateDevice;
  }
  _shouldFallbackToWebGLOnCompatibilityTestFailure(e) {
    return this._webglFallbackTriggers.compatibility_test && !Zj() && e;
  }
  checkJsErrors() {
    let e = this.emscriptenModule().WebGPUEmscriptenObj;
    if (!e) {
      logError("GPU", "WebGPU emscripten object not initialized when getting js errors", {
        reportAsSentryError: !0
      });
      return;
    }
    if (e.jsErrorsToReport) for (; e.jsErrorsToReport.length > 0;) {
      let t = e.jsErrorsToReport.shift();
      t && (reportError(_$$e.RENDERING_AND_ANIMATION, t), this._shouldFallbackWebGLOnJSError() && PcT?.requestFallbackToWebGL(q6_.JS_ERROR));
    }
  }
  async _testCompositeTilePipeline() {
    if (this._device && PcT) {
      this._device.pushErrorScope("internal");
      this._device.pushErrorScope("validation");
      this._device.pushErrorScope("out-of-memory");
      try {
        let e = PcT.getWGSLShader("COMPOSITE_TILE_VERTEX");
        let t = PcT.getWGSLShader("COMPOSITE_TILE_FRAGMENT");
        let i = this._device.createShaderModule({
          code: e
        });
        let n = this._device.createShaderModule({
          code: t
        });
        let r = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT;
        let s = this._device.createBindGroupLayout({
          entries: [{
            binding: 0,
            visibility: r,
            buffer: {
              type: "uniform"
            }
          }]
        });
        let o = this._device.createBindGroupLayout({
          entries: [{
            binding: 0,
            visibility: r,
            texture: {
              sampleType: "unfilterable-float"
            }
          }, {
            binding: 1,
            visibility: r,
            sampler: {
              type: "non-filtering"
            }
          }]
        });
        let l = "float32x2";
        let d = this._device.createPipelineLayout({
          bindGroupLayouts: [s, o]
        });
        await this._device.createRenderPipelineAsync({
          layout: d,
          vertex: {
            module: i,
            entryPoint: "main",
            buffers: [{
              attributes: [{
                shaderLocation: 0,
                offset: 0,
                format: l
              }, {
                shaderLocation: 1,
                offset: 16,
                format: l
              }, {
                shaderLocation: 2,
                offset: 32,
                format: l
              }],
              arrayStride: 48
            }]
          },
          fragment: {
            module: n,
            entryPoint: "main",
            targets: [{
              format: "rgba8unorm"
            }]
          },
          primitive: {
            topology: "triangle-list"
          }
        });
        return;
      } catch (e) {
        this.logWebGPUCompabilityEvent("exception", "composite_tile_pipeline", e);
        return e;
      } finally {
        let e = await this._device.popErrorScope();
        e && this.logWebGPUCompabilityEvent("out_of_memory", "composite_tile_pipeline", e.message);
        let t = await this._device.popErrorScope();
        t && this.logWebGPUCompabilityEvent("validation", "composite_tile_pipeline", t.message);
        let i = await this._device.popErrorScope();
        if (i && this.logWebGPUCompabilityEvent("internal", "composite_tile_pipeline", i.message), e || t || i) throw Error("WebGPU composite tile pipeline compatibility test failed");
      }
    }
  }
  async _testBicubicSamplerPipeline() {
    if (this._device && PcT) {
      this._device.pushErrorScope("internal");
      this._device.pushErrorScope("validation");
      this._device.pushErrorScope("out-of-memory");
      try {
        let e = PcT.getWGSLShader("IMAGE_BICUBIC_SAMPLER_VERTEX");
        let t = PcT.getWGSLShader("IMAGE_BICUBIC_SAMPLER_FRAGMENT");
        let i = this._device.createShaderModule({
          code: e
        });
        let n = this._device.createShaderModule({
          code: t
        });
        let r = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT;
        let s = this._device.createBindGroupLayout({
          entries: [{
            binding: 0,
            visibility: r,
            buffer: {
              type: "uniform"
            }
          }]
        });
        let o = this._device.createBindGroupLayout({
          entries: [{
            binding: 0,
            visibility: r,
            texture: {
              sampleType: "unfilterable-float"
            }
          }, {
            binding: 1,
            visibility: r,
            sampler: {
              type: "non-filtering"
            }
          }]
        });
        let l = this._device.createPipelineLayout({
          bindGroupLayouts: [s, o]
        });
        await this._device.createRenderPipelineAsync({
          layout: l,
          vertex: {
            module: i,
            entryPoint: "main",
            buffers: [{
              attributes: [{
                shaderLocation: 0,
                offset: 0,
                format: "float32x2"
              }],
              arrayStride: 8
            }]
          },
          fragment: {
            module: n,
            entryPoint: "main",
            targets: [{
              format: "rgba8unorm"
            }]
          },
          primitive: {
            topology: "triangle-list"
          }
        });
        return;
      } catch (e) {
        this.logWebGPUCompabilityEvent("exception", "bicubic_sampler_pipeline", e);
        return e;
      } finally {
        let e = await this._device.popErrorScope();
        e && this.logWebGPUCompabilityEvent("out_of_memory", "bicubic_sampler_pipeline", e.message);
        let t = await this._device.popErrorScope();
        t && this.logWebGPUCompabilityEvent("validation", "bicubic_sampler_pipeline", t.message);
        let i = await this._device.popErrorScope();
        if (i && this.logWebGPUCompabilityEvent("internal", "bicubic_sampler_pipeline", i.message), e || t || i) throw Error("WebGPU bicubic sampler pipeline compatibility test failed");
      }
    }
  }
  async _testBasicRendering() {
    if (this._device) {
      this._device.pushErrorScope("internal");
      this._device.pushErrorScope("validation");
      this._device.pushErrorScope("out-of-memory");
      try {
        let e = new OffscreenCanvas(4, 4).getContext("webgpu");
        if (!e) throw Error("Failed to get WebGPU context");
        let t = this.getPreferredCanvasFormat();
        e.configure({
          device: this._device,
          format: t,
          usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
          alphaMode: "premultiplied"
        });
        let i = new Float32Array([-.5, .5, -.5, -.5, .5, .5, .5, .5, -.5, -.5, .5, -.5]);
        let n = this._device.createBuffer({
          size: i.byteLength,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        });
        this._device.queue.writeBuffer(n, 0, i);
        let r = this._device.createRenderPipeline({
          layout: "auto",
          vertex: {
            module: this._device.createShaderModule({
              code: `
              @vertex
              fn main(@location(0) pos: vec2f) -> @builtin(position) vec4f {
                return vec4f(pos.x, pos.y, 0.0, 1.0);
              }
            `
            }),
            entryPoint: "main",
            buffers: [{
              arrayStride: 8,
              attributes: [{
                shaderLocation: 0,
                offset: 0,
                format: "float32x2"
              }]
            }]
          },
          fragment: {
            module: this._device.createShaderModule({
              code: `
              @fragment
              fn main() -> @location(0) vec4f {
                return vec4f(1.0, 0.0, 0.0, 1.0);
              }
            `
            }),
            entryPoint: "main",
            targets: [{
              format: t
            }]
          },
          primitive: {
            topology: "triangle-list"
          }
        });
        let a = this._device.createBuffer({
          size: 1024,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
        });
        let s = this._device.createCommandEncoder();
        let o = s.beginRenderPass({
          colorAttachments: [{
            view: e.getCurrentTexture().createView(),
            clearValue: {
              r: 0,
              g: 1,
              b: 0,
              a: 1
            },
            loadOp: "clear",
            storeOp: "store"
          }]
        });
        o.setPipeline(r);
        o.setVertexBuffer(0, n);
        o.draw(6);
        o.end();
        s.copyTextureToBuffer({
          texture: e.getCurrentTexture()
        }, {
          buffer: a,
          bytesPerRow: 256
        }, {
          width: 4,
          height: 4
        });
        this._device.queue.submit([s.finish()]);
        await a.mapAsync(GPUMapMode.READ);
        let l = new Uint8Array(a.getMappedRange());
        let d = [l[0], l[1], l[2], l[3]];
        let c = [l[520], l[521], l[522], l[523]];
        if ("rgba8unorm" !== t && "bgra8unorm" !== t) throw Error("Unsupported format");
        let u = "rgba8unorm" === t ? 0 : 2;
        let p = "rgba8unorm" === t ? 2 : 0;
        let m = 255 === c[u] && 0 === c[1] && 0 === c[p] && 255 === c[3];
        let h = 0 === d[u] && 255 === d[1] && 0 === d[p] && 255 === d[3];
        if (!m || !h) throw Error(`Rendering test failed. Center pixel (should be red): [${c}], Corner pixel (should be green): [${d}]`);
        a.unmap();
      } catch (e) {
        this.logWebGPUCompabilityEvent("exception", "basic_rendering", e);
        return e;
      } finally {
        let e = await this._device.popErrorScope();
        e && this.logWebGPUCompabilityEvent("out_of_memory", "basic_rendering", e.message);
        let t = await this._device.popErrorScope();
        t && this.logWebGPUCompabilityEvent("validation", "basic_rendering", t.message);
        let i = await this._device.popErrorScope();
        if (i && (logError("GPU", "WebGPU basic rendering internal error", {
          message: i.message
        }), this.logWebGPUCompabilityEvent("internal", "basic_rendering", i.message)), e || t || i) throw Error("WebGPU basic rendering compatibility test failed");
      }
    }
  }
  logWebGPUCompabilityEvent(e, t, i) {
    analyticsEventManager.trackDefinedEvent("rendering_and_animation.webgpu_compatibility", {
      graphicsCardName: this._gpuDeviceInfo.graphicsCardName,
      vendor: this._gpuDeviceInfo.vendor,
      webGLVersion: this._gpuDeviceInfo.webGLVersion,
      webgpuArchitecture: this._gpuDeviceInfo.webgpuArchitecture,
      webgpuDescription: this._gpuDeviceInfo.webgpuDescription,
      webgpuDevice: this._gpuDeviceInfo.webgpuDevice,
      webgpuVendor: this._gpuDeviceInfo.webgpuVendor,
      category: t,
      errorType: e,
      message: i
    });
  }
  async logWebGPUCompatibilityStatus(e) {
    try {
      await Promise.all([this._testCompositeTilePipeline(), this._testBicubicSamplerPipeline(), this._testBasicRendering()]);
    } catch (t) {
      this.logWebGPUCompabilityEvent("exception", "general", t);
      this._shouldFallbackToWebGLOnCompatibilityTestFailure(e) && PcT?.requestFallbackToWebGL(q6_.COMPATIBILITY_TEST_FAILURE);
    }
    this.logWebGPUCompabilityEvent("none", "none", "");
  }
}
export function $$A1() {
  $$n5 = new _();
}
export async function $$y2() {
  if (!wO()) {
    Vu() && $$n5.setInitializationStatus("webgpu_not_allowed");
    return;
  }
  if (!$$n5) {
    logError("GPU", "WebGPUTsContext binding not initialized.", {
      reportAsSentryError: !0
    });
    return;
  }
  await $$n5.initialize();
}
export async function $$b3() {
  if (!Vu() || !getFeatureFlags().log_webgpu_compatibility) return;
  if (!$$n5) {
    logError("GPU", "WebGPUTsContext binding not initialized.", {
      reportAsSentryError: !0
    });
    return;
  }
  let e = $$n5.isDeviceInitialized();
  try {
    e || (await $$n5.initialize());
    await $$n5.logWebGPUCompatibilityStatus(e);
    e || $$A1();
  } catch (e) {
    logError("GPU", "WebGPU caught error while running compatibility tests", {
      message: e
    }, {
      reportAsSentryError: !0
    });
  }
}
export function $$v4() {
  $$n5.logInitializationStatus();
}
export function $$I0() {
  return $$n5.getInitializationStatus();
}
export const pi = $$I0;
export const bS = $$A1;
export const vU = $$y2;
export const bX = $$b3;
export const fs = $$v4;
export const NP = $$n5;