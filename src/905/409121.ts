import { BrowserInfo } from "../figma_app/778880";
import { ap, Vu, Ew, Zj } from "../figma_app/149304";
let a = "1" === new URLSearchParams().get("fullscreen-high-perf-mode");
let s = () => BrowserInfo.mac || BrowserInfo.ios || BrowserInfo.isIpad || BrowserInfo.isIpadNative;
let o = () => BrowserInfo.chrome && 0 > BrowserInfo.compareVersions([BrowserInfo.version.toString(), "120"]);
let $$l0 = {
  isIE: () => BrowserInfo.msie,
  isEdge: () => BrowserInfo.msedge,
  isChrome: () => BrowserInfo.chrome,
  isFirefox: () => BrowserInfo.firefox,
  isSafari: () => BrowserInfo.safari,
  isMobileBrowser: () => BrowserInfo.isMobileBrowser,
  isMac: () => BrowserInfo.mac,
  isiOS: () => BrowserInfo.ios,
  isWindows: () => BrowserInfo.windows,
  isLinux: () => BrowserInfo.linux,
  isChromeOS: () => BrowserInfo.chromeos,
  isChromePre118: () => BrowserInfo.chrome && 0 > BrowserInfo.compareVersions([BrowserInfo.version.toString(), "118"]),
  isInNativeApp: () => BrowserInfo.isInNativeApp,
  isIpad: () => BrowserInfo.isIpad,
  isIpadNative: () => BrowserInfo.isIpadNative,
  isMeetDevice: () => BrowserInfo.isMeetDevice,
  isZoomIntegration: () => BrowserInfo.isZoomIntegration,
  isOnline: function () {
    return void 0 === self.navigator.onLine || self.navigator.onLine;
  },
  isApple: () => s(),
  isIntlBacklashAndBackquoteSwapped: () => s() && (BrowserInfo.safari || BrowserInfo.chrome && !o()),
  logicalCoreCount: function () {
    let e = 2;
    void 0 !== self.navigator.hardwareConcurrency && (e = self.navigator.hardwareConcurrency);
    return e;
  },
  getMemoryLimit: () => a || BrowserInfo.isIpad ? {
    hasVirtualMemory: !0,
    physicalMemoryMB: 2048,
    textureMemoryMB: 2048
  } : BrowserInfo.isMobileBrowser ? {
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
