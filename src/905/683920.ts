export class $$n0 {
  constructor() {
    this._isWebGL2Supported = !1;
    this._initializationStatus = "webgl1_success";
    this._isWebGL2Supported = !1;
    let e = document.createElement("canvas").getContext("webgl2");
    if (!e) {
      this._initializationStatus = "webgl2_not_supported";
      return;
    }
    let t = this.renderer(e);
    if (!t || /radeon/.test(t)) {
      this._initializationStatus = "webgl2_disallow_list";
      return;
    }
    if (/swiftshader/.test(t)) {
      let e = document.createElement("canvas").getContext("webgl");
      let t = this.renderer(e);
      if (!t || !/swiftshader/.test(t)) {
        this._initializationStatus = "webgl2_software_rendering";
        return;
      }
    }
    this._initializationStatus = "webgl2_success";
    this._isWebGL2Supported = !0;
  }
  renderer(e) {
    if (!e) return null;
    let t = e.getExtension("WEBGL_debug_renderer_info");
    return t && (e.getParameter(t.UNMASKED_RENDERER_WEBGL) + "").toLowerCase();
  }
  static instance() {
    $$n0._instance || ($$n0._instance = new $$n0());
    return $$n0._instance;
  }
  static isWebGL2Supported() {
    return $$n0.instance()._isWebGL2Supported;
  }
  static initializationStatus() {
    return $$n0.instance()._initializationStatus;
  }
}
export const X = $$n0;