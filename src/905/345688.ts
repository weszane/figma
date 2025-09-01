var n;
var r;
var a;
var s;
var $$o3;
var l;
let $$d4;
let $$c2;
let u;
function p(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
class m {
  setContextLost(e) {
    u.setContextLost(this.handle, e);
  }
  reportContextLost() {
    u.reportContextLost(this.handle);
  }
  reportContextRestored() {
    u.reportContextRestored(this.handle);
  }
  constructor(e) {
    p(this, "handle", void 0);
    this.handle = e;
  }
}
class h extends m {
  constructor(e) {
    super(e);
    p(this, "handle", void 0);
    this.handle = e;
  }
}
export function $$g1(e) {
  $$d4 = e.GpuMetricsLoggingBinding;
  $$c2 = e.WebGPUBindings;
  u = e.WebGlContextLostListener_Internal;
  globalThis.WebGlContextLostListener = m;
  globalThis.MutableWebGlContextLostListener = h;
}
export function $$f0() {
  return {
    gpuMetricsLoggingBinding: $$d4,
    webGPUBindings: $$c2,
    webGlContextLostListener_Internal: u
  };
}
!function (e) {
  e[e.NONE = 0] = "NONE";
  e[e.ODD_WINDING_NUMBER_COMPUTE = 1] = "ODD_WINDING_NUMBER_COMPUTE";
  e[e.NONZERO_WINDING_NUMBER_COMPUTE = 2] = "NONZERO_WINDING_NUMBER_COMPUTE";
  e[e.ODD_WINDING_NUMBER = 3] = "ODD_WINDING_NUMBER";
  e[e.ODD_WINDING_NUMBER_CLEAR = 4] = "ODD_WINDING_NUMBER_CLEAR";
  e[e.NONZERO_WINDING_NUMBER = 5] = "NONZERO_WINDING_NUMBER";
  e[e.NONZERO_WINDING_NUMBER_CLEAR = 6] = "NONZERO_WINDING_NUMBER_CLEAR";
  e[e.ODD_WINDING_NUMBER_FILL = 7] = "ODD_WINDING_NUMBER_FILL";
  e[e.NONZERO_WINDING_NUMBER_FILL = 8] = "NONZERO_WINDING_NUMBER_FILL";
  e[e.ODD_WINDING_NUMBER_STROKE = 9] = "ODD_WINDING_NUMBER_STROKE";
  e[e.NONZERO_WINDING_NUMBER_STROKE = 10] = "NONZERO_WINDING_NUMBER_STROKE";
  e[e.STROKE_INSIDE = 11] = "STROKE_INSIDE";
  e[e.STROKE_OUTSIDE = 12] = "STROKE_OUTSIDE";
  e[e.STROKE_CLEAR = 13] = "STROKE_CLEAR";
  e[e.OVERLAY_UI_COMPUTE_WINDING_NUMBER_ODD = 14] = "OVERLAY_UI_COMPUTE_WINDING_NUMBER_ODD";
  e[e.OVERLAY_UI_COMPUTE_WINDING_NUMBER_NONZERO = 15] = "OVERLAY_UI_COMPUTE_WINDING_NUMBER_NONZERO";
  e[e.OVERLAY_UI_COVER_ODD = 16] = "OVERLAY_UI_COVER_ODD";
  e[e.OVERLAY_UI_COVER_NONZERO = 17] = "OVERLAY_UI_COVER_NONZERO";
  e[e.OVERLAY_UI_COVER_EVEN = 18] = "OVERLAY_UI_COVER_EVEN";
  e[e.OVERLAY_UI_COVER_ZERO = 19] = "OVERLAY_UI_COVER_ZERO";
}(n || (n = {}));
(function (e) {
  e[e.ALL = 0] = "ALL";
  e[e.COLOR = 1] = "COLOR";
  e[e.DEPTH_STENCIL = 2] = "DEPTH_STENCIL";
})(r || (r = {}));
(function (e) {
  e[e.TRIANGLES = 0] = "TRIANGLES";
  e[e.TRIANGLE_STRIP = 1] = "TRIANGLE_STRIP";
})(a || (a = {}));
(function (e) {
  e[e.COPY = 0] = "COPY";
  e[e.KEEP = 1] = "KEEP";
  e[e.PREMULTIPLIED = 2] = "PREMULTIPLIED";
  e[e.PREMULTIPLIED_SRC_UNDER_TARGET = 3] = "PREMULTIPLIED_SRC_UNDER_TARGET";
  e[e.SCREEN = 4] = "SCREEN";
  e[e.LINEAR_DODGE = 5] = "LINEAR_DODGE";
  e[e.INTERPOLATE = 6] = "INTERPOLATE";
  e[e.UNPREMULTIPLIED = 7] = "UNPREMULTIPLIED";
})(s || (s = {}));
(function (e) {
  e[e.REQUEST_DEVICE_FAILURE = 0] = "REQUEST_DEVICE_FAILURE";
  e[e.WEBGPU_ERROR = 1] = "WEBGPU_ERROR";
  e[e.WEBGPU_OOM = 2] = "WEBGPU_OOM";
  e[e.JS_ERROR = 3] = "JS_ERROR";
  e[e.COMPATIBILITY_TEST_FAILURE = 4] = "COMPATIBILITY_TEST_FAILURE";
  e[e.DEBUGGING_HELPERS = 5] = "DEBUGGING_HELPERS";
})($$o3 || ($$o3 = {}));
(function (e) {
  e[e.RGBA8 = 0] = "RGBA8";
  e[e.RG32F = 1] = "RG32F";
  e[e.RGB32F = 2] = "RGB32F";
  e[e.RGBA32F = 3] = "RGBA32F";
  e[e.ASTC_6x6 = 4] = "ASTC_6x6";
  e[e.BC3 = 5] = "BC3";
  e[e.BGRA8 = 6] = "BGRA8";
  e[e.DEPTH24_STENCIL8 = 7] = "DEPTH24_STENCIL8";
  e[e.STENCIL8 = 8] = "STENCIL8";
})(l || (l = {}));
export const KO = $$f0;
export const LQ = $$g1;
export const Pc = $$c2;
export const q6 = $$o3;
export const yu = $$d4;