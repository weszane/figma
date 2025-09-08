// Enums for various states and modes (original: n, r, a, s, o, l)
/**
 * PermissionState
 */
export enum PermissionState {
  ALLOWED = 0,
  DISALLOWED_CYCLE = 1,
  DISALLOWED_OTHER = 2,
}

/**
 * MaterializationMode
 */
export enum MaterializationMode {
  MATERIALIZE_SWAPPED_OUT_TREE = 0,
  SKIP_MATERIALIZATION = 1,
}

/**
 * LoadState
 */
export enum LoadState {
  PENDING_INITIAL_LOAD = 0,
  PENDING_LOAD_AFTER_RECONNECT = 1,
  LOADED = 2,
}

/**
 * ZoomMode
 */
export enum ZoomMode {
  NONE = 0,
  CONTAIN = 1,
  SCALE_DOWN = 2,
  MIN_ZOOM = 3,
  FREE = 4,
  SCALE_DOWN_TO_FIT_WIDTH = 5,
  FIT_WIDTH = 6,
  RESPONSIVE = 7,
}

/**
 * LayoutMode
 */
export enum LayoutMode {
  FIXED = 0,
  RESPONSIVE = 1,
}

/**
 * FontMissingMode
 */
export enum FontMissingMode {
  MISSING_FONTS_ONLY = 0,
  MISSING_OR_LOCAL_FONTS = 1,
}

// Internal bindings and helpers
export let prototypeInternal: any;
let GLMaterial_Internal: any;
let WasmRendererBindings: any;
let GPUTextureBindings: any;
let GPUTexture_Internal: any;
let GPUFramebufferBindings: any;
let GPUFramebuffer_Internal: any;
let VertexBufferPoolHelper: any;
let VertexBufferAreaHelper: any;

/**
 * GLMaterial class (original: y)
 */
export class GLMaterial {
  handle: any;

  /**
   * @param handle - Internal handle
   */
  constructor(handle: any) {
    this.handle = handle;
  }

  /**
   * Get the material ID
   */
  getId(): any {
    return GLMaterial_Internal.getId(this.handle);
  }
}

/**
 * MutableGLMaterial class (original: b)
 */
export class MutableGLMaterial extends GLMaterial {
  /**
   * @param handle - Internal handle
   */
  constructor(handle: any) {
    super(handle);
  }

  /**
   * Bind material without textures
   */
  bindWithoutTextures(e: any, t: any): void {
    GLMaterial_Internal.bindWithoutTextures(this.handle, e, t);
  }
}

/**
 * GPUTexture class (original: v)
 */
export class GPUTexture {
  handle: any;

  /**
   * @param handle - Internal handle
   */
  constructor(handle: any) {
    this.handle = handle;
  }

  /**
   * Get emscripten ID
   */
  emscriptenId(): any {
    return GPUTexture_Internal.emscriptenId(this.handle);
  }

  /**
   * Get texture width
   */
  width(): any {
    return GPUTexture_Internal.width(this.handle);
  }

  /**
   * Get texture height
   */
  height(): any {
    return GPUTexture_Internal.height(this.handle);
  }

  /**
   * Get texture size in bytes
   */
  sizeInBytes(): any {
    return GPUTexture_Internal.sizeInBytes(this.handle);
  }

  /**
   * Get texture format
   */
  format(): any {
    return GPUTexture_Internal.format(this.handle);
  }
}

/**
 * MutableGPUTexture class (original: I)
 */
export class MutableGPUTexture extends GPUTexture {
  /**
   * @param handle - Internal handle
   */
  constructor(handle: any) {
    super(handle);
  }
}

/**
 * GPUFramebuffer class (original: E)
 */
export class GPUFramebuffer {
  handle: any;

  /**
   * @param handle - Internal handle
   */
  constructor(handle: any) {
    this.handle = handle;
  }

  /**
   * Get emscripten ID
   */
  emscriptenId(): any {
    return GPUFramebuffer_Internal.emscriptenId(this.handle);
  }
}

/**
 * MutableGPUFramebuffer class (original: x)
 */
export class MutableGPUFramebuffer extends GPUFramebuffer {
  /**
   * @param handle - Internal handle
   */
  constructor(handle: any) {
    super(handle);
  }
}

/**
 * Setup function to initialize bindings (original: $$S1)
 * @param e - Bindings object
 */
export function initializeRenderBindings(e: any): void {
  prototypeInternal = e.Prototype;
  globalThis.Prototype = prototypeInternal;
  GLMaterial_Internal = e.GLMaterial_Internal;
  globalThis.GLMaterial = GLMaterial;
  globalThis.MutableGLMaterial = MutableGLMaterial;
  WasmRendererBindings = e.WasmRendererBindings;
  GPUTextureBindings = e.GPUTextureBindings;
  GPUTexture_Internal = e.GPUTexture_Internal;
  globalThis.GPUTexture = GPUTexture;
  globalThis.MutableGPUTexture = MutableGPUTexture;
  GPUFramebufferBindings = e.GPUFramebufferBindings;
  GPUFramebuffer_Internal = e.GPUFramebuffer_Internal;
  globalThis.GPUFramebuffer = GPUFramebuffer;
  globalThis.MutableGPUFramebuffer = MutableGPUFramebuffer;
  VertexBufferPoolHelper = e.VertexBufferPoolHelper;
  VertexBufferAreaHelper = e.VertexBufferAreaHelper;
}

/**
 * Get all internal bindings and helpers (original: $$w0)
 */
export function getInternalBindings() {
  return {
    prototype: prototypeInternal,
    wasmRendererBindings: WasmRendererBindings,
    gPUTextureBindings: GPUTextureBindings,
    gPUFramebufferBindings: GPUFramebufferBindings,
    vertexBufferPoolHelper: VertexBufferPoolHelper,
    vertexBufferAreaHelper: VertexBufferAreaHelper,
    gLMaterial_Internal: GLMaterial_Internal,
    gPUTexture_Internal: GPUTexture_Internal,
    gPUFramebuffer_Internal: GPUFramebuffer_Internal,
  };
}

// Export refactored names for external usage
export const KO = getInternalBindings;
export const LQ = initializeRenderBindings;
export const bp = prototypeInternal;
