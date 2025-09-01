import { getFeatureFlags } from "../905/601108";
import { mac, linux, windows, chromeos, android, ios, chrome, firefox, msedge, safari, msie, webkit, blink, tablet, mobile, name, version, osname, osversion, compareVersions, isUnsupportedBrowser } from "../vendor/634570";
import { U1, MP } from "../figma_app/469876";
import { n as _$$n } from "../905/347702";
let $$o8 = /iPad/.test(navigator.userAgent) || /Mac/.test(navigator.userAgent) && !/iPhone/.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2 || !1;
let $$l26 = _$$n(() => $$o8);
export function $$d15() {
  return mac;
}
export function $$c18() {
  return linux;
}
export function $$u24() {
  return windows;
}
export function $$p11() {
  return chromeos;
}
export let $$_23 = /Mobi/.test(navigator.userAgent);
export function $$h22() {
  return $$_23;
}
export function $$m12() {
  return /FigmaMirror-Android/.test(navigator.userAgent);
}
export let $$g19 = /Android/.test(navigator.userAgent);
export function $$f6() {
  return !!window.FigmaMobile;
}
let $$E14 = /iPhone|iPad|iPod/.test(navigator.userAgent);
let y = /iPhone|iPod/.test(navigator.userAgent);
export function $$b17() {
  return $$E14;
}
let $$T2 = $$g19 || $$E14;
let $$I25 = $$T2 && !$$O5();
let $$S21 = ($$g19 || y) && !$$O5();
$$g19 && $$O5();
y && $$O5();
$$E14 && $$O5();
export let $$v9 = $$_23 || $$g19 || $$o8 || $$O5() || $$w4();
export function $$A3() {
  return $$v9 && !$$f6();
}
export function $$x7() {
  return $$v9;
}
export function $$N1() {
  return $$S21;
}
export function $$C10() {
  return !!window.FigmaMobile && !window.FigmaMobile.handleTripleTaps;
}
export function $$w4() {
  return $$m12() || $$C10();
}
export function $$O5() {
  return /FigmaMobile/.test(navigator.userAgent);
}
export function $$R20() {
  return /FigmaMobile-Android/.test(navigator.userAgent);
}
export function $$L16() {
  return /FigmaMobile-iOS/.test(navigator.userAgent);
}
$$O5() || $$w4();
let $$P13 = _$$n(() => !$$v9);
let D = {};
let $$k0 = {
  mac: mac,
  windows: windows,
  linux: linux,
  chromeos: chromeos,
  android: android,
  ios: ios,
  chrome: chrome,
  firefox: firefox,
  msedge: msedge,
  safari: safari,
  msie: msie,
  webkit: webkit,
  blink: blink,
  tablet: tablet,
  mobile: mobile,
  name: name,
  version: version,
  osname: osname,
  osversion: osversion,
  compareVersions: compareVersions,
  isUnsupportedBrowser: isUnsupportedBrowser,
  get is64BitBrowser() {
    if (this.windows && !this.firefox) return /(?:Win64|x64)/.test(window.navigator.userAgent);
    return /(?:MacIntel|Win64|x86_64)/.test(window.navigator.platform);
  },
  get isWasm4gbSupported() {
    if (this.chrome) return Number(this.version) >= 83;
    if (this.firefox) return Number(this.version) >= 89;
    if (this.safari) return Number(this.version) >= 15.2;
    if (this.msedge) return Number(this.version) >= 89;
    return !1;
  },
  get browserType() {
    if (this.chrome) return "chrome";
    if (this.firefox) return "firefox";
    if (this.safari) return "safari";
    if (this.msedge) return "msedge";
  },
  get isMobileBrowser() {
    return /Mobi/.test(window.navigator.userAgent);
  },
  get isInNativeApp() {
    return $$f6();
  },
  get isIpad() {
    return $$l26();
  },
  get isIpadNative() {
    return $$l26() && window.FigmaMobile && window.FigmaMobile.shouldOptimizeForIpadApp;
  },
  get isMeetDevice() {
    return !!getFeatureFlags().figjam_3p_hardware_device && U1();
  },
  get isZoomIntegration() {
    return MP();
  },
  override(e) {
    for (let t in e) {
      t in D || (D[t] = this[t]);
      this[t] = e[t];
    }
  },
  resetOverrides() {
    for (let e in D) this[e] = D[e];
  }
};
export const Ay = $$k0;
export const C8 = $$N1;
export const EC = $$T2;
export const FP = $$A3;
export const Ji = $$w4;
export const KR = $$O5;
export const Q1 = $$f6;
export const Wv = $$x7;
export const XN = $$o8;
export const Xb = $$v9;
export const Yb = $$C10;
export const Zs = $$p11;
export const _N = $$m12;
export const aJ = $$P13;
export const aR = $$E14;
export const cX = $$d15;
export const gR = $$L16;
export const j5 = $$b17;
export const j9 = $$c18;
export const m0 = $$g19;
export const mt = $$R20;
export const nW = $$S21;
export const o4 = $$h22;
export const rr = $$_23;
export const uF = $$u24;
export const uG = $$I25;
export const wg = $$l26;