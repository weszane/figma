/**
 * WebGL Context Lost Listener and related bindings.
 * Original classes: m, h
 * Original functions: $$g1, $$f0
 * Original exports: KO, LQ, Pc, q6, yu
 */

export enum WindingNumberMode {
  NONE = 0,
  ODD_WINDING_NUMBER_COMPUTE = 1,
  NONZERO_WINDING_NUMBER_COMPUTE = 2,
  ODD_WINDING_NUMBER = 3,
  ODD_WINDING_NUMBER_CLEAR = 4,
  NONZERO_WINDING_NUMBER = 5,
  NONZERO_WINDING_NUMBER_CLEAR = 6,
  ODD_WINDING_NUMBER_FILL = 7,
  NONZERO_WINDING_NUMBER_FILL = 8,
  ODD_WINDING_NUMBER_STROKE = 9,
  NONZERO_WINDING_NUMBER_STROKE = 10,
  STROKE_INSIDE = 11,
  STROKE_OUTSIDE = 12,
  STROKE_CLEAR = 13,
  OVERLAY_UI_COMPUTE_WINDING_NUMBER_ODD = 14,
  OVERLAY_UI_COMPUTE_WINDING_NUMBER_NONZERO = 15,
  OVERLAY_UI_COVER_ODD = 16,
  OVERLAY_UI_COVER_NONZERO = 17,
  OVERLAY_UI_COVER_EVEN = 18,
  OVERLAY_UI_COVER_ZERO = 19,
}

export enum BufferClearMode {
  ALL = 0,
  COLOR = 1,
  DEPTH_STENCIL = 2,
}

export enum IPrimitiveType {
  TRIANGLES = 0,
  TRIANGLE_STRIP = 1,
}

export enum BlendMode {
  COPY = 0,
  KEEP = 1,
  PREMULTIPLIED = 2,
  PREMULTIPLIED_SRC_UNDER_TARGET = 3,
  SCREEN = 4,
  LINEAR_DODGE = 5,
  INTERPOLATE = 6,
  UNPREMULTIPLIED = 7,
}

export enum GpuErrorType {
  REQUEST_DEVICE_FAILURE = 0,
  WEBGPU_ERROR = 1,
  WEBGPU_OOM = 2,
  JS_ERROR = 3,
  COMPATIBILITY_TEST_FAILURE = 4,
  DEBUGGING_HELPERS = 5,
}

export enum TextureFormat {
  RGBA8 = 0,
  RG32F = 1,
  RGB32F = 2,
  RGBA32F = 3,
  ASTC_6x6 = 4,
  BC3 = 5,
  BGRA8 = 6,
  DEPTH24_STENCIL8 = 7,
  STENCIL8 = 8,
}

// Internal bindings and listeners
export let gpuMetricsLoggingBinding: any;
export let webGPUBindings: any;
export let webGlContextLostListener_Internal: any;

/**
 * WebGlContextLostListener
 * Original class: m
 */
export class WebGlContextLostListener {
  handle: any;

  /**
   * @param handle - The context handle
   */
  constructor(handle: any) {
    this.handle = handle;
  }

  /**
   * Set context lost state.
   * Original method: setContextLost
   */
  setContextLost(isLost: boolean): void {
    webGlContextLostListener_Internal.setContextLost(this.handle, isLost);
  }

  /**
   * Report context lost.
   * Original method: reportContextLost
   */
  reportContextLost(): void {
    webGlContextLostListener_Internal.reportContextLost(this.handle);
  }

  /**
   * Report context restored.
   * Original method: reportContextRestored
   */
  reportContextRestored(): void {
    webGlContextLostListener_Internal.reportContextRestored(this.handle);
  }
}

/**
 * MutableWebGlContextLostListener
 * Original class: h
 */
export class MutableWebGlContextLostListener extends WebGlContextLostListener {
  /**
   * @param handle - The context handle
   */
  constructor(handle: any) {
    super(handle);
  }
}

/**
 * Setup bindings for WebGL context lost listener.
 * Original function: $$g1
 */
export function setupWebGLBindings(bindings: {
  GpuMetricsLoggingBinding: any;
  WebGPUBindings: any;
  WebGlContextLostListener_Internal: any;
}): void {
  gpuMetricsLoggingBinding = bindings.GpuMetricsLoggingBinding;
  webGPUBindings = bindings.WebGPUBindings;
  webGlContextLostListener_Internal = bindings.WebGlContextLostListener_Internal;
  globalThis.WebGlContextLostListener = WebGlContextLostListener;
  globalThis.MutableWebGlContextLostListener = MutableWebGlContextLostListener;
}

/**
 * Get current bindings.
 * Original function: $$f0
 */
export function getWebGLBindings() {
  return {
    gpuMetricsLoggingBinding,
    webGPUBindings,
    webGlContextLostListener_Internal,
  };
}

// Exported variables (renamed for clarity)
export const KO = getWebGLBindings;
export const LQ = setupWebGLBindings;
export const Pc = webGPUBindings;
export const q6 = GpuErrorType;
export const yu = gpuMetricsLoggingBinding;
