import { shouldUseWebGL2, getGraphicsBackendOverride, isWebGPUSupported, mustUseWebGPU } from '../figma_app/149304';
import { BrowserInfo } from '../figma_app/778880';
let a = new URLSearchParams().get('fullscreen-high-perf-mode') === '1';
let s = () => BrowserInfo.mac || BrowserInfo.ios || BrowserInfo.isIpad || BrowserInfo.isIpadNative;
let o = () => BrowserInfo.chrome && BrowserInfo.compareVersions([BrowserInfo.version.toString(), '120']) < 0;
export let browserCapabilities = {
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
  isChromePre118: () => BrowserInfo.chrome && BrowserInfo.compareVersions([BrowserInfo.version.toString(), '118']) < 0,
  isInNativeApp: () => BrowserInfo.isInNativeApp,
  isIpad: () => BrowserInfo.isIpad,
  isIpadNative: () => BrowserInfo.isIpadNative,
  isMeetDevice: () => BrowserInfo.isMeetDevice,
  isZoomIntegration: () => BrowserInfo.isZoomIntegration,
  isOnline() {
    return void 0 === self.navigator.onLine || self.navigator.onLine;
  },
  isApple: () => s(),
  isIntlBacklashAndBackquoteSwapped: () => s() && (BrowserInfo.safari || BrowserInfo.chrome && !o()),
  logicalCoreCount() {
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
  isWebGL2Supported: () => shouldUseWebGL2(),
  isWebGPUSupported: () => isWebGPUSupported(),
  graphicsBackendOverride: () => getGraphicsBackendOverride(),
  mustUseWebGPU: () => mustUseWebGPU()
};
export const y = browserCapabilities;