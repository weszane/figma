import { ServiceCategories as _$$e } from "../905/165054";
import { iL } from "../figma_app/762706";
import { $D } from "../905/11";
import { y } from "../905/409121";
function a(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
class s {
  createTsGlContext() {
    return new o(this._reportError, this._platformInfoBindings);
  }
  emscriptenWebGLContextWasInitialized() {
    return null != iL().ctx;
  }
  constructor(e, t) {
    a(this, "_reportError", void 0);
    a(this, "_platformInfoBindings", void 0);
    this._reportError = e;
    this._platformInfoBindings = t;
  }
}
class o {
  init() {
    if (this.glContext = iL().ctx, null == this.glContext) {
      this._reportError("Could not get WebGL context");
      return;
    }
    this.gl = iL().WebGLEmscriptenObj;
    this.debugRendererInfo = this.glContext.getExtension("WEBGL_debug_renderer_info");
    this.debugRendererInfo ? (this.vendorName = this.glContext.getParameter(this.debugRendererInfo.UNMASKED_VENDOR_WEBGL), this.rendererName = this.glContext.getParameter(this.debugRendererInfo.UNMASKED_RENDERER_WEBGL)) : this._platformInfoBindings.isWindows() && console.warn('the "WEBGL_debug_renderer_info" extension is missing so rendering may be incorrect' + (this._platformInfoBindings.isFirefox() ? ', please enable "webgl.enable-debug-renderer-info" in about:config' : ""));
    this.instancedArraysANGLE = this.glContext.getExtension("ANGLE_instanced_arrays");
    this.glContext.pixelStorei(this.glContext.UNPACK_COLORSPACE_CONVERSION_WEBGL, this.glContext.NONE);
    this.glContext.pixelStorei(this.glContext.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.glContext.NONE);
  }
  release() {
    if (null != this.glContext) {
      let e = this.glContext.canvas;
      null != this._currentContextLostCb && (e?.removeEventListener("webglcontextlost", this._currentContextLostCb), this._currentContextLostCb = null);
      null != this._currentContextRestoredCb && (e?.removeEventListener("webglcontextrestored", this._currentContextRestoredCb), this._currentContextRestoredCb = null);
    }
    this.contextLostListener = null;
    this.glContext = null;
    this.gl = void 0;
    this.debugRendererInfo = null;
    this.vendorName = null;
    this.rendererName = null;
    this.contextLostMessageReceived = !1;
  }
  isContextLost() {
    return !!this.glContext && this.glContext.isContextLost();
  }
  installContextLostHandler(e) {
    if (null === this.glContext) return;
    this.contextLostListener = e;
    let t = this.glContext.canvas;
    this._currentContextLostCb = (e) => {
      this.contextLostListener?.reportContextLost();
      e.preventDefault();
      e.stopImmediatePropagation();
      this.handleContextLost();
    };
    this._currentContextRestoredCb = (e) => {
      this.contextLostListener?.reportContextRestored();
      this.contextLostMessageReceived || this.handleContextLost();
      t && t instanceof HTMLCanvasElement && (t.style.background = "white", setTimeout(function () {
        t.style.background = "";
      }, 0));
      this.handleContextRestored();
    };
    t?.addEventListener("webglcontextlost", this._currentContextLostCb);
    t?.addEventListener("webglcontextrestored", this._currentContextRestoredCb);
  }
  drawingBufferWidth() {
    return this.glContext ? this.glContext.drawingBufferWidth : 0;
  }
  drawingBufferHeight() {
    return this.glContext ? this.glContext.drawingBufferHeight : 0;
  }
  unmaskedVendorName() {
    return this.vendorName ?? "";
  }
  unmaskedRendererName() {
    return this.rendererName ?? "";
  }
  texImage2D(e, t, i, n, r, a, s, o, l) {
    this.glContext?.texImage2D(e, t, i, n, r, a, s, o, l);
  }
  texImage2DFloat32(e, t, i, n, r, a, s, o, l) {
    this.glContext?.texImage2D(e, t, i, n, r, a, s, o, new Float32Array(l.buffer));
  }
  texImage2DBitmap(e, t, i, n, r, a) {
    this.glContext?.texImage2D(e, t, i, n, r, a);
  }
  compressedTexImage2D(e, t, i, n, r, a, s) {
    this.glContext?.compressedTexImage2D(e, t, i, n, r, a, s);
  }
  readPixels(e, t, i, n, r, a, s) {
    this.glContext?.readPixels(e, t, i, n, r, a, s);
  }
  bufferSubData(e, t, i, n, r) {
    this.glContext?.bufferSubData(e, t, i.subarray(n, n + r));
  }
  downloadWebGlTrace(e) {
    this.glContext?.downloadTrace?.(e);
  }
  getActiveUniformBlockParameter(e, t, i) {
    return null === this.glContext || void 0 === this.gl || void 0 === this.gl.programs[e] ? 0 : this.glContext instanceof WebGLRenderingContext ? (this._reportError("getActiveUniformBlockParameter called on WebGL 1 context"), 0) : this.glContext.getActiveUniformBlockParameter(this.gl.programs[e], t, i);
  }
  uniMat3Fix(e, t, i, n, a, s, o) {
    let l = iL().getWebGlUniformLocation?.(e);
    void 0 !== l && this.glContext?.uniformMatrix3fv(l, !1, new Float32Array([t, i, 0, n, a, 0, s, o, 1]));
  }
  uni4fFix(e, t, i, n, a) {
    let s = iL().getWebGlUniformLocation?.(e);
    void 0 !== s && this.glContext?.uniform4f(s, t, i, n, a);
  }
  vertexAttribDivisorANGLE(e, t) {
    null !== this.instancedArraysANGLE && this.instancedArraysANGLE.vertexAttribDivisorANGLE(e, t);
  }
  drawArraysInstancedANGLE(e, t, i, n) {
    null !== this.instancedArraysANGLE && this.instancedArraysANGLE.drawArraysInstancedANGLE(e, t, i, n);
  }
  clearEmscriptenGLAPI() {
    void 0 !== this.gl && (this.gl.counter = 1, this.gl.buffers = [], this.gl.programs = [], this.gl.framebuffers = [], this.gl.renderbuffers = [], this.gl.textures = [], this.gl.shaders = [], this.gl.stringCache = {});
  }
  handleContextLost() {
    this.clearEmscriptenGLAPI();
    this.contextLostListener?.setContextLost(!0);
    this.contextLostMessageReceived = !0;
  }
  handleContextRestored() {
    !this.isContextLost() && this.contextLostMessageReceived && (this.gl && this.gl.currentContext && (this.gl.currentContext.initExtensionsDone = !1, this.gl.initExtensions(this.gl.currentContext)), this.contextLostListener?.setContextLost(!1), this.contextLostMessageReceived = !1);
  }
  constructor(e, t) {
    a(this, "_reportError", void 0);
    a(this, "_platformInfoBindings", void 0);
    a(this, "_currentContextLostCb", null);
    a(this, "_currentContextRestoredCb", null);
    a(this, "glContext", null);
    a(this, "gl", void 0);
    a(this, "debugRendererInfo", null);
    a(this, "vendorName", null);
    a(this, "rendererName", null);
    a(this, "instancedArraysANGLE", null);
    a(this, "contextLostListener", null);
    a(this, "contextLostMessageReceived", !1);
    this._reportError = e;
    this._platformInfoBindings = t;
  }
}
let l = null;
export function $$u0() {
  var e;
  var t;
  e = (e) => $D(_$$e.RENDERING_AND_ANIMATION, Error(e));
  t = y;
  null == l && (l = new s(e, t));
  return l;
}
export const X = $$u0;