import { Ay } from "../figma_app/778880";
import { ap, Vu, Ew, Zj } from "../figma_app/149304";
let a = "1" === new URLSearchParams().get("fullscreen-high-perf-mode");
let s = () => Ay.mac || Ay.ios || Ay.isIpad || Ay.isIpadNative;
let o = () => Ay.chrome && 0 > Ay.compareVersions([Ay.version.toString(), "120"]);
let $$l0 = {
  isIE: () => Ay.msie,
  isEdge: () => Ay.msedge,
  isChrome: () => Ay.chrome,
  isFirefox: () => Ay.firefox,
  isSafari: () => Ay.safari,
  isMobileBrowser: () => Ay.isMobileBrowser,
  isMac: () => Ay.mac,
  isiOS: () => Ay.ios,
  isWindows: () => Ay.windows,
  isLinux: () => Ay.linux,
  isChromeOS: () => Ay.chromeos,
  isChromePre118: () => Ay.chrome && 0 > Ay.compareVersions([Ay.version.toString(), "118"]),
  isInNativeApp: () => Ay.isInNativeApp,
  isIpad: () => Ay.isIpad,
  isIpadNative: () => Ay.isIpadNative,
  isMeetDevice: () => Ay.isMeetDevice,
  isZoomIntegration: () => Ay.isZoomIntegration,
  isOnline: function () {
    return void 0 === self.navigator.onLine || self.navigator.onLine;
  },
  isApple: () => s(),
  isIntlBacklashAndBackquoteSwapped: () => s() && (Ay.safari || Ay.chrome && !o()),
  logicalCoreCount: function () {
    let e = 2;
    void 0 !== self.navigator.hardwareConcurrency && (e = self.navigator.hardwareConcurrency);
    return e;
  },
  getMemoryLimit: () => a || Ay.isIpad ? {
    hasVirtualMemory: !0,
    physicalMemoryMB: 2048,
    textureMemoryMB: 2048
  } : Ay.isMobileBrowser ? {
    hasVirtualMemory: !1,
    physicalMemoryMB: 256,
    textureMemoryMB: 256
  } : {
    hasVirtualMemory: !0,
    physicalMemoryMB: 2048,
    textureMemoryMB: 2048
  },
  isWebGL2Supported: () => ap(),
  isWebGPUSupported: () => Vu(),
  graphicsBackendOverride: () => Ew(),
  mustUseWebGPU: () => Zj()
};
export const y = $$l0;