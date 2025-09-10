import { Kt } from "src/figma_app/562352";
import { ServiceCategories as _$$e } from "src/905/165054";
import { UserAppType, interactionTestHelpers } from "src/figma_app/763686";
import { jS, eS, N4 } from "src/figma_app/762706";
import { getFeatureFlags } from "src/905/601108";
import { trackEventAnalytics } from "src/905/449184";
import { desktopAPIInstance, bellFeedAPIInstance } from "src/figma_app/876459";
import { k0, RM } from "src/figma_app/623293";
import { customHistory, isMakeRoute, isMainAppRoute } from "src/905/612521";
import { isFigmaMobileApp, isAndroidUA } from "src/figma_app/778880";
import { reportError } from "src/905/11";
import { logWarning } from "src/905/714362";
import { isInteractionPathCheck } from "src/figma_app/897289";
import { Sh } from "src/905/470286";
import { QL } from "src/905/609392";
import { xK } from "src/905/125218";
import { bM } from "src/figma_app/527873";
import { vw } from "src/905/189279";
function T(e) {
  return "prototype-lib" === e ? Fig.prototypeLibURLs["compiled_wasm.wasm"] : Fig.fullscreenURLs["compiled_wasm.wasm"];
}
function I(e) {
  return "prototype-lib" === e ? Fig.prototypeLibURLs["compiled_wasm.js"] : Fig.fullscreenURLs["compiled_wasm.js"];
}
async function S(e, t) {
  await k0(I(t));
  let r = {
    wasmBinaryFile: T(t),
    preRun() {
      (r.emscripten_realloc_buffer ?? r.growMemory)(0x60000000);
    }
  };
  window.Module = r;
  jS({
    callMain: eS(),
    tsApisForCpp: e,
    registerRefreshCallback: e => {
      vw(t, e);
    },
    leakBindings: !0
  });
}
async function v(e) {
  try {
    await xK.timeAsync("loadingCode", () => (RM(), window.FULLSCREEN_PRELOADS?.js || k0(I(e))));
  } catch (e) {
    throw Error("Failed to load fullscreen JS code");
  }
  return N4({
    isProduction: !0,
    executeEmscriptenJS: eS()
  });
}
async function A(e, t) {
  let r = xK.time("instantiateStreaming", async () => {
    try {
      return await WebAssembly.instantiateStreaming(e, t);
    } catch (e) {
      if ("string" == typeof e) throw Error(e);
      throw e;
    }
  });
  return await xK.timeAsync("awaitInstantiateStreaming", () => r);
}
async function x(e, t) {
  if (!e.ok) throw Error(`Downloading wasm failed with ${e.status}`);
  let r = await e.arrayBuffer();
  let n = xK.time("instantiate", async () => {
    try {
      return await WebAssembly.instantiate(r, t);
    } catch (e) {
      if ("string" == typeof e) throw Error(e);
      throw e;
    }
  });
  return await xK.timeAsync("awaitInstantiate", () => n);
}
let N = !1;
let C = null;
async function w(e) {
  isInteractionPathCheck() && console.log("loadWasmBinary called for", e);
  !C || C === e || isInteractionPathCheck() || $$D6() || ("fullscreen-app" === C ? reportError(_$$e.CLIENT_PLATFORM, Error("Previously downloaded fullscreen wasm, but is now downloading prototype-lib")) : "prototype-lib" === C && reportError(_$$e.CLIENT_PLATFORM, Error("Previously downloaded prototype-lib wasm, but is now downloading fullscreen")));
  isInteractionPathCheck() && console.log("About to get binaryURL for", e);
  let t = T(e);
  xK.start("loadingBinaryStart");
  isInteractionPathCheck() && console.log("About to call loadJS and fetch wasm for url", t, I(e));
  let [r, n] = await Promise.all([window.FULLSCREEN_PRELOADS?.wasm || fetch(t), v(e)]);
  isInteractionPathCheck() && console.log("Finished calling loadJS and fetch wasm");
  delete window.FULLSCREEN_PRELOADS;
  let {
    imports,
    receiveInstance,
    getReservedHeapSize
  } = n;
  if (bM(e, getReservedHeapSize), "true" === r.headers.get("x-figma-local-build") && (N = !0), WebAssembly.instantiateStreaming) try {
    isInteractionPathCheck() && console.log("About to call instantiateWasmStreaming");
    let t = await A(r, imports);
    isInteractionPathCheck() && console.log("Finished calling instantiateWasmStreaming");
    C = e;
    return {
      receiveInstance,
      wasmResult: t
    };
  } catch (e) {
    if (isInteractionPathCheck() && console.log("Error calling instantiateWasmStreaming", e), e && (!e.message || e.message.includes("Incorrect response MIME type") || e.message.includes("Unexpected response MIME type"))) {
      console.warn('Detected a proxy interfering with the "application/wasm" MIME type. Falling back to a slower WebAssembly instantiation method instead.');
      reportError(_$$e.UNOWNED, Error(`Working around error instantiating streaming fullscreen WASM: ${e}`));
      r = await fetch(t);
    } else {
      logWarning("loader", "Error loading wasm", {
        url: t,
        message: e?.message
      });
      return e;
    }
  }
  let l = await x(r, imports);
  C = e;
  return {
    receiveInstance,
    wasmResult: l
  };
}
let O = Kt(async () => await w("fullscreen-app"));
let R = Kt(async () => await w("prototype-lib"));
let L = async e => {
  switch (isInteractionPathCheck() && console.log("Called loadAllForWasmBinaryType for", e), e) {
    case "fullscreen-app":
      return await O();
    case "prototype-lib":
      return await R();
  }
};
export function $$P3(e) {
  let t = e || V || C;
  if (t) {
    let e = T(t).split("/");
    if (e.length < 2) return;
    let r = e[e.length - 2];
    if ("fullscreen-wasm" === r) return {
      fullscreen_variant: "wasm"
    };
    if ("prototype-lib" === r) return {
      prototype_variant: "lib"
    };
    if (r.startsWith("fullscreen-wasm-")) return {
      fullscreen_variant: r.replace("fullscreen-wasm-", "")
    };
    if (r.startsWith("prototype-lib-")) return {
      prototype_variant: r.replace("prototype-lib-", "")
    };
  }
  return {};
}
export function $$D6() {
  let e = customHistory.location.pathname;
  for (let t of ["/c", "/community", "/@", "/user", "/org", "/team"]) if (e.startsWith(t)) return !0;
  return !1;
}
export function $$k0() {
  return !/Mobi/.test(navigator.userAgent) || /iPad/.test(navigator.userAgent) || /Macintosh/.test(navigator.userAgent) || isMakeRoute() && !!getFeatureFlags().load_fullscreen_make_mobile_web;
}
export function $$M1(e = "fullscreen-app") {
  return L(e).then(() => {});
}
let F = document.location.pathname;
function j(e) {
  return "/preload-editor" === e || "/preload-android-proto" === e || e.startsWith("/mobile-preload");
}
export function $$U5() {
  return j(F) && isFigmaMobileApp() && isAndroidUA || Sh(F) || desktopAPIInstance && desktopAPIInstance.isFileBrowserTab() || bellFeedAPIInstance || $$D6() || j(customHistory.location.pathname) && !desktopAPIInstance ? "never" : !getFeatureFlags().preload_fullscreen_on_load || "complete" === document.readyState || isMainAppRoute() ? "immediately" : "eventually";
}
export function $$B2() {
  function e() {
    L("fullscreen-app").catch(e => {});
  }
  let t = $$U5();
  "immediately" === t ? e() : "eventually" === t && window.addEventListener("load", () => {
    e();
  });
}
let G = null;
let V = null;
export async function $$H4(e, t = "fullscreen-app") {
  if (V && V !== t && !isInteractionPathCheck() && ("fullscreen-app" === V ? reportError(_$$e.UNOWNED, Error("Previously initialized fullscreen wasm, but is now initializing prototype-lib")) : "prototype-lib" === V && reportError(_$$e.UNOWNED, Error("Previously initialized prototype-lib wasm, but is now initializing fullscreen"))), !T(t) || !window.WebAssembly) {
    location.href = "/unsupported_browser";
    return new Promise(() => null);
  }
  if (QL("asan")) {
    V = t;
    return S(e, t);
  }
  try {
    G && G !== e && (await customHistory.reloadAndWaitForever("tsApisForCpp changed", {
      from: UserAppType[G.CommonApp().appType()],
      to: UserAppType[e.CommonApp().appType()]
    }));
    G = e;
    isInteractionPathCheck() && console.log("About to call loadAllForWasmBinaryType");
    let {
      receiveInstance,
      wasmResult
    } = await L(t);
    isInteractionPathCheck() && console.log("Finished calling loadAllForWasmBinaryType");
    isInteractionPathCheck() && console.log("About to call initializeWasm");
    jS({
      callMain: () => {
        xK.time("callMain", () => receiveInstance(wasmResult.instance, wasmResult.module));
      },
      tsApisForCpp: G,
      registerRefreshCallback: e => {
        vw(t, e);
      }
    });
    isInteractionPathCheck() && console.log("Finished calling initializeWasm");
    V = t;
    isInteractionPathCheck() && interactionTestHelpers.setIsRunningInteractionTests();
    let i = $$P3(t);
    trackEventAnalytics("Fullscreen Loaded", {
      ...i
    });
  } catch (e) {
    trackEventAnalytics("Fullscreen Load Failure", {
      error: e + ""
    });
    isInteractionPathCheck() && console.log("Failed to initialize fullscreen", e);
    !e || "Failed to fetch" === e.message || "Could not download wasm module" === e.message || "TypeError: Load failed" === e.message || e.message.includes("NetworkError") || e.message.toLowerCase().includes("network error") || (e instanceof Error || (e = Error(`Fullscreen load failure: ${e}`)), reportError(_$$e.UNOWNED, e));
    e.reportedToSentry = !0;
    return e;
  }
}
export function $$z7() {
  if (N) return !0;
  let e = Fig.fullscreenURLs["compiled_wasm.js"];
  return !!(e && e.startsWith("/"));
}
export const Bz = $$k0;
export const F$ = $$M1;
export const LH = $$B2;
export const bY = $$P3;
export const e3 = $$H4;
export const g4 = $$U5;
export const wl = $$D6;
export const y4 = $$z7;
