var n;
var r;
var a;
var s;
var o;
var l;
let $$d2;
let c;
let u;
let p;
let m;
let h;
let g;
let f;
let _;
function A(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
class y {
  getId() {
    return c.getId(this.handle);
  }
  constructor(e) {
    A(this, "handle", void 0);
    this.handle = e;
  }
}
class b extends y {
  bindWithoutTextures(e, t) {
    c.bindWithoutTextures(this.handle, e, t);
  }
  constructor(e) {
    super(e);
    A(this, "handle", void 0);
    this.handle = e;
  }
}
class v {
  emscriptenId() {
    return m.emscriptenId(this.handle);
  }
  width() {
    return m.width(this.handle);
  }
  height() {
    return m.height(this.handle);
  }
  sizeInBytes() {
    return m.sizeInBytes(this.handle);
  }
  format() {
    return m.format(this.handle);
  }
  constructor(e) {
    A(this, "handle", void 0);
    this.handle = e;
  }
}
class I extends v {
  constructor(e) {
    super(e);
    A(this, "handle", void 0);
    this.handle = e;
  }
}
class E {
  emscriptenId() {
    return g.emscriptenId(this.handle);
  }
  constructor(e) {
    A(this, "handle", void 0);
    this.handle = e;
  }
}
class x extends E {
  constructor(e) {
    super(e);
    A(this, "handle", void 0);
    this.handle = e;
  }
}
export function $$S1(e) {
  $$d2 = e.Prototype;
  globalThis.Prototype = $$d2;
  c = e.GLMaterial_Internal;
  globalThis.GLMaterial = y;
  globalThis.MutableGLMaterial = b;
  u = e.WasmRendererBindings;
  p = e.GPUTextureBindings;
  m = e.GPUTexture_Internal;
  globalThis.GPUTexture = v;
  globalThis.MutableGPUTexture = I;
  h = e.GPUFramebufferBindings;
  g = e.GPUFramebuffer_Internal;
  globalThis.GPUFramebuffer = E;
  globalThis.MutableGPUFramebuffer = x;
  f = e.VertexBufferPoolHelper;
  _ = e.VertexBufferAreaHelper;
}
export function $$w0() {
  return {
    prototype: $$d2,
    wasmRendererBindings: u,
    gPUTextureBindings: p,
    gPUFramebufferBindings: h,
    vertexBufferPoolHelper: f,
    vertexBufferAreaHelper: _,
    gLMaterial_Internal: c,
    gPUTexture_Internal: m,
    gPUFramebuffer_Internal: g
  };
}
!function (e) {
  e[e.ALLOWED = 0] = "ALLOWED";
  e[e.DISALLOWED_CYCLE = 1] = "DISALLOWED_CYCLE";
  e[e.DISALLOWED_OTHER = 2] = "DISALLOWED_OTHER";
}(n || (n = {}));
(function (e) {
  e[e.MATERIALIZE_SWAPPED_OUT_TREE = 0] = "MATERIALIZE_SWAPPED_OUT_TREE";
  e[e.SKIP_MATERIALIZATION = 1] = "SKIP_MATERIALIZATION";
})(r || (r = {}));
(function (e) {
  e[e.PENDING_INITIAL_LOAD = 0] = "PENDING_INITIAL_LOAD";
  e[e.PENDING_LOAD_AFTER_RECONNECT = 1] = "PENDING_LOAD_AFTER_RECONNECT";
  e[e.LOADED = 2] = "LOADED";
})(a || (a = {}));
(function (e) {
  e[e.NONE = 0] = "NONE";
  e[e.CONTAIN = 1] = "CONTAIN";
  e[e.SCALE_DOWN = 2] = "SCALE_DOWN";
  e[e.MIN_ZOOM = 3] = "MIN_ZOOM";
  e[e.FREE = 4] = "FREE";
  e[e.SCALE_DOWN_TO_FIT_WIDTH = 5] = "SCALE_DOWN_TO_FIT_WIDTH";
  e[e.FIT_WIDTH = 6] = "FIT_WIDTH";
  e[e.RESPONSIVE = 7] = "RESPONSIVE";
})(s || (s = {}));
(function (e) {
  e[e.FIXED = 0] = "FIXED";
  e[e.RESPONSIVE = 1] = "RESPONSIVE";
})(o || (o = {}));
(function (e) {
  e[e.MISSING_FONTS_ONLY = 0] = "MISSING_FONTS_ONLY";
  e[e.MISSING_OR_LOCAL_FONTS = 1] = "MISSING_OR_LOCAL_FONTS";
})(l || (l = {}));
export const KO = $$w0;
export const LQ = $$S1;
export const bp = $$d2;