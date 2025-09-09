import { GLContextType } from "../figma_app/763686";
import { zD, j9 } from "../905/686312";
import { getFeatureFlags } from "../905/601108";
import { analyticsEventManager } from "../905/449184";
import { customHistory } from "../905/612521";
import { Rh } from "../905/485103";
import { BrowserInfo, isMobilePlatform, getIsLinux, getIsMac, getIsWindows, getIsChromeOS } from "../figma_app/778880";
import { logError } from "../905/714362";
import { gP } from "../figma_app/594947";
import { PN } from "../figma_app/897289";
import { X } from "../905/683920";
import { D } from "../905/347702";
import { l as _$$l } from "../905/190247";
var $$g9 = (e => (e[e.SUCCESS = 0] = "SUCCESS", e[e.NO_WEBGL = 1] = "NO_WEBGL", e[e.STENCIL_TEST_FAILURE = 2] = "STENCIL_TEST_FAILURE", e))($$g9 || {});
export let $$f2 = D(() => {
  if ($$A0() !== GLContextType.WebGPU) {
    if (BrowserInfo.safari || BrowserInfo.firefox || isMobilePlatform || getIsLinux() && !PN()) return !1;
    if (BrowserInfo.chrome) {
      let e = gP("webgpu_platform_device_config").get("minimum_chromium_version", 0);
      if (0 > BrowserInfo.compareVersions([BrowserInfo.version.toString(), e.toString()]) && !PN()) return !1;
    }
  }
  return void 0 !== navigator.gpu;
});
export function $$E7() {
  if (!$$f2()) return !1;
  let e = $$A0();
  return e !== GLContextType.WebGL2 && e !== GLContextType.WebGL1 && (!!$$v4() || (getIsMac() ? !!getFeatureFlags().use_webgpu : getIsWindows() || getIsChromeOS() ? !!getFeatureFlags().use_webgpu_windows_chromeos : !!(getIsLinux() && PN()) && (!!getFeatureFlags().use_webgpu || !!getFeatureFlags().use_webgpu_windows_chromeos)));
}
export function $$y5() {
  let e = I.getInstance().graphicsBackendOverride();
  return e === GLContextType.WebGL2 || e !== GLContextType.WebGL1 && X.isWebGL2Supported();
}
export function $$b3() {
  return X.isWebGL2Supported();
}
export function $$T6() {
  null == window.webGLTestResult && (window.webGLTestResult = function () {
    var e = 0;
    try {
      let t = function () {
        let e = document.createElement("canvas");
        try {
          return e.getContext("webgl");
        } catch (e) {}
        return null;
      }();
      t || (e = 1);
      0 !== e || t?.isContextLost() || function (e) {
        let t = e.getExtension("WEBGL_debug_renderer_info");
        let r = t && (e.getParameter(t.UNMASKED_RENDERER_WEBGL) + "").toLowerCase();
        let n = {
          gpu_vendor: r ? /\bamd\b|\bati\b/.test(r) ? "amd" : /\bnvidia\b/.test(r) ? "nvidia" : /\bintel\b/.test(r) ? "intel" : "unknown" : "unknown",
          gpu_api: r ? /direct3d9/.test(r) ? "d3d9" : /direct3d11/.test(r) ? "d3d11" : /opengl/.test(r) ? "opengl" : "unknown" : "unknown"
        };
        Rh("page_load", n).catch(e => console.error("Error trying to send tags", n, e));
      }(t);
    } catch (e) {}
    return e;
  }());
  return window.webGLTestResult;
}
class I {
  constructor() {
    this._graphicsBackendOverride = GLContextType.None;
    if (getFeatureFlags().webgl2_override) this._graphicsBackendOverride = GLContextType.WebGL2;else if (getFeatureFlags().webgl1_override) this._graphicsBackendOverride = GLContextType.WebGL1;else if (getFeatureFlags().webgpu_override) this._graphicsBackendOverride = GLContextType.WebGPU;else if (getFeatureFlags().webgpu_webgl_url_param && customHistory.location) {
      let e = new URLSearchParams(customHistory.location.search);
      "1" === e.get("force-webgpu") ? this._graphicsBackendOverride = GLContextType.WebGPU : "1" === e.get("force-webgl2") ? this._graphicsBackendOverride = GLContextType.WebGL2 : "1" === e.get("force-webgl1") && (this._graphicsBackendOverride = GLContextType.WebGL1);
    }
  }
  graphicsBackendOverride() {
    return this._graphicsBackendOverride;
  }
  static getInstance() {
    this._instance || (this._instance = new I());
    return this._instance;
  }
  static resetForTests() {
    this._instance = null;
  }
}
class S {
  constructor() {
    this._isJSLUHDChromeOS = !1;
    this._isJSLUHDChromeOS = this.isJSLUHDChromeOS();
  }
  isJSLUHDChromeOS() {
    if (!getIsChromeOS() || !$$f2() || !getFeatureFlags().use_webgpu_chromeos_jsl_override) return !1;
    let e = zD($$y5());
    if (!e) return !1;
    let t = e.getExtension("WEBGL_debug_renderer_info");
    if (!t) return !1;
    let r = e.getParameter(t.UNMASKED_RENDERER_WEBGL);
    return /uhd graphics \(jsl\)/i.test(r) && /vulkan/i.test(r);
  }
  mustUseWebGPU() {
    return this._isJSLUHDChromeOS;
  }
  static getInstance() {
    this._instance || (this._instance = new S());
    return this._instance;
  }
  static reset() {
    this._instance = null;
  }
}
let $$v4 = D(() => {
  try {
    return S.getInstance().mustUseWebGPU() || I.getInstance().graphicsBackendOverride() === GLContextType.WebGPU;
  } catch (e) {
    logError("Error checking if we must use WebGPU", e?.message ?? "Unknown error", {
      reportAsSentryError: !0
    });
    return !1;
  }
});
let $$A0 = D(() => I.getInstance().graphicsBackendOverride());
export function $$x8() {
  let e = j9($$y5());
  return !!e?.getExtension("WEBGL_compressed_texture_astc");
}
export function $$N1(e) {
  let t = "webgl_not_supported";
  let r = "unknown";
  let n = "unknown";
  let i = "unknown";
  if (0 === window.webGLTestResult) {
    t = X.initializationStatus();
    let e = _$$l();
    e && (r = e.graphicsCardName, n = e.vendor, i = e.webGLVersion);
  }
  "webgpu_success" === e && (t = "webgpu_success");
  analyticsEventManager.trackDefinedEvent("rendering_and_animation.webgl_initialization", {
    status: t,
    renderer: r,
    vendor: n,
    version: i
  });
}
export const Ew = $$A0;
export const IJ = $$N1;
export const Vu = $$f2;
export const WQ = $$b3;
export const Zj = $$v4;
export const ap = $$y5;
export const dK = $$T6;
export const wO = $$E7;
export const x2 = $$x8;
export const xt = $$g9;