import { reportError } from '../905/11'
import { fullscreenPerfManager } from '../905/125218'
import { ServiceCategories as _$$e } from '../905/165054'
import { vw } from '../905/189279'
import { trackEventAnalytics } from '../905/449184'
import { Sh } from '../905/470286'
import { getFeatureFlags } from '../905/601108'
import { QL } from '../905/609392'
import { customHistory, isMainAppRoute, isMakeRoute } from '../905/612521'
import { logWarning } from '../905/714362'
import { setMemoryCallback } from '../figma_app/527873'
import { singletonAsync } from '../figma_app/562352'
import { injectTextDecoderFix, loadScript } from '../figma_app/623293'
import { getAndRemoveFullscreenEmscriptenExecutor, initializeTsApiBindings, setupWasmModule } from '../figma_app/762706'
import { interactionTestHelpers, UserAppType } from '../figma_app/763686'
import { isAndroidUA, isFigmaMobileApp } from '../figma_app/778880'
import { bellFeedAPIInstance, desktopAPIInstance } from '../figma_app/876459'
import { isInteractionPathCheck } from '../figma_app/897289'

function T(e) {
  return e === 'prototype-lib' ? Fig.prototypeLibURLs['compiled_wasm.wasm'] : Fig.fullscreenURLs['compiled_wasm.wasm']
}
function I(e) {
  return e === 'prototype-lib' ? Fig.prototypeLibURLs['compiled_wasm.js'] : Fig.fullscreenURLs['compiled_wasm.js']
}
async function S(e, t) {
  await loadScript(I(t))
  let r = {
    wasmBinaryFile: T(t),
    preRun() {
      (r.emscripten_realloc_buffer ?? r.growMemory)(0x60000000)
    },
  }
  window.Module = r
  initializeTsApiBindings({
    callMain: getAndRemoveFullscreenEmscriptenExecutor(),
    tsApisForCpp: e,
    registerRefreshCallback: (e) => {
      vw(t, e)
    },
    leakBindings: !0,
  })
}
async function v(e) {
  try {
    await fullscreenPerfManager.timeAsync('loadingCode', () => (injectTextDecoderFix(), window.FULLSCREEN_PRELOADS?.js || loadScript(I(e))))
  }
  catch (e) {
    throw new Error('Failed to load fullscreen JS code')
  }
  return setupWasmModule({
    isProduction: !0,
    executeEmscriptenJS: getAndRemoveFullscreenEmscriptenExecutor(),
  })
}
async function A(e, t) {
  let r = fullscreenPerfManager.time('instantiateStreaming', async () => {
    try {
      return await WebAssembly.instantiateStreaming(e, t)
    }
    catch (e) {
      if (typeof e == 'string')
        throw new Error(e)
      throw e
    }
  })
  return await fullscreenPerfManager.timeAsync('awaitInstantiateStreaming', () => r)
}
async function x(e, t) {
  if (!e.ok)
    throw new Error(`Downloading wasm failed with ${e.status}`)
  let r = await e.arrayBuffer()
  let n = fullscreenPerfManager.time('instantiate', async () => {
    try {
      return await WebAssembly.instantiate(r, t)
    }
    catch (e) {
      if (typeof e == 'string')
        throw new Error(e)
      throw e
    }
  })
  return await fullscreenPerfManager.timeAsync('awaitInstantiate', () => n)
}
let N = !1
let C = null
async function w(e) {
  isInteractionPathCheck() && console.log('loadWasmBinary called for', e)
  !C || C === e || isInteractionPathCheck() || $$D6() || (C === 'fullscreen-app' ? reportError(_$$e.CLIENT_PLATFORM, new Error('Previously downloaded fullscreen wasm, but is now downloading prototype-lib')) : C === 'prototype-lib' && reportError(_$$e.CLIENT_PLATFORM, new Error('Previously downloaded prototype-lib wasm, but is now downloading fullscreen')))
  isInteractionPathCheck() && console.log('About to get binaryURL for', e)
  let t = T(e)
  fullscreenPerfManager.start('loadingBinaryStart')
  isInteractionPathCheck() && console.log('About to call loadJS and fetch wasm for url', t, I(e))
  let [r, n] = await Promise.all([window.FULLSCREEN_PRELOADS?.wasm || fetch(t), v(e)])
  isInteractionPathCheck() && console.log('Finished calling loadJS and fetch wasm')
  delete window.FULLSCREEN_PRELOADS
  let {
    imports,
    receiveInstance,
    getReservedHeapSize,
  } = n
  if (setMemoryCallback(e, getReservedHeapSize), r.headers.get('x-figma-local-build') === 'true' && (N = !0), WebAssembly.instantiateStreaming) {
    try {
      isInteractionPathCheck() && console.log('About to call instantiateWasmStreaming')
      let t = await A(r, imports)
      isInteractionPathCheck() && console.log('Finished calling instantiateWasmStreaming')
      C = e
      return {
        receiveInstance,
        wasmResult: t,
      }
    }
    catch (e) {
      if (isInteractionPathCheck() && console.log('Error calling instantiateWasmStreaming', e), e && (!e.message || e.message.includes('Incorrect response MIME type') || e.message.includes('Unexpected response MIME type'))) {
        console.warn('Detected a proxy interfering with the "application/wasm" MIME type. Falling back to a slower WebAssembly instantiation method instead.')
        reportError(_$$e.UNOWNED, new Error(`Working around error instantiating streaming fullscreen WASM: ${e}`))
        r = await fetch(t)
      }
      else {
        logWarning('loader', 'Error loading wasm', {
          url: t,
          message: e?.message,
        })
        return e
      }
    }
  }
  let l = await x(r, imports)
  C = e
  return {
    receiveInstance,
    wasmResult: l,
  }
}
let O = singletonAsync(async () => await w('fullscreen-app'))
let R = singletonAsync(async () => await w('prototype-lib'))
let L = async (e) => {
  switch (isInteractionPathCheck() && console.log('Called loadAllForWasmBinaryType for', e), e) {
    case 'fullscreen-app':
      return await O()
    case 'prototype-lib':
      return await R()
  }
}
export function $$P3(e) {
  let t = e || V || C
  if (t) {
    let e = T(t).split('/')
    if (e.length < 2)
      return
    let r = e[e.length - 2]
    if (r === 'fullscreen-wasm') {
      return {
        fullscreen_variant: 'wasm',
      }
    }
    if (r === 'prototype-lib') {
      return {
        prototype_variant: 'lib',
      }
    }
    if (r.startsWith('fullscreen-wasm-')) {
      return {
        fullscreen_variant: r.replace('fullscreen-wasm-', ''),
      }
    }
    if (r.startsWith('prototype-lib-')) {
      return {
        prototype_variant: r.replace('prototype-lib-', ''),
      }
    }
  }
  return {}
}
export function $$D6() {
  let e = customHistory.location.pathname
  for (let t of ['/c', '/community', '/@', '/user', '/org', '/team']) {
    if (e.startsWith(t))
      return !0
  }
  return !1
}
export function $$k0() {
  return !/Mobi/.test(navigator.userAgent) || /iPad/.test(navigator.userAgent) || /Macintosh/.test(navigator.userAgent) || isMakeRoute() && !!getFeatureFlags().load_fullscreen_make_mobile_web
}
export function $$M1(e = 'fullscreen-app') {
  return L(e).then(() => {})
}
let F = document.location.pathname
function j(e) {
  return e === '/preload-editor' || e === '/preload-android-proto' || e.startsWith('/mobile-preload')
}
export function $$U5() {
  return j(F) && isFigmaMobileApp() && isAndroidUA || Sh(F) || desktopAPIInstance && desktopAPIInstance.isFileBrowserTab() || bellFeedAPIInstance || $$D6() || j(customHistory.location.pathname) && !desktopAPIInstance ? 'never' : !getFeatureFlags().preload_fullscreen_on_load || document.readyState === 'complete' || isMainAppRoute() ? 'immediately' : 'eventually'
}
export function $$B2() {
  function e() {
    L('fullscreen-app').catch((e) => {})
  }
  let t = $$U5()
  t === 'immediately'
    ? e()
    : t === 'eventually' && window.addEventListener('load', () => {
      e()
    })
}
let G = null
let V = null
export async function $$H4(e, t = 'fullscreen-app') {
  if (V && V !== t && !isInteractionPathCheck() && (V === 'fullscreen-app' ? reportError(_$$e.UNOWNED, new Error('Previously initialized fullscreen wasm, but is now initializing prototype-lib')) : V === 'prototype-lib' && reportError(_$$e.UNOWNED, new Error('Previously initialized prototype-lib wasm, but is now initializing fullscreen'))), !T(t) || !window.WebAssembly) {
    location.href = '/unsupported_browser'
    return new Promise(() => null)
  }
  if (QL('asan')) {
    V = t
    return S(e, t)
  }
  try {
    G && G !== e && (await customHistory.reloadAndWaitForever('tsApisForCpp changed', {
      from: UserAppType[G.CommonApp().appType()],
      to: UserAppType[e.CommonApp().appType()],
    }))
    G = e
    isInteractionPathCheck() && console.log('About to call loadAllForWasmBinaryType')
    let {
      receiveInstance,
      wasmResult,
    } = await L(t)
    isInteractionPathCheck() && console.log('Finished calling loadAllForWasmBinaryType')
    isInteractionPathCheck() && console.log('About to call initializeWasm')
    initializeTsApiBindings({
      callMain: () => {
        fullscreenPerfManager.time('callMain', () => receiveInstance(wasmResult.instance, wasmResult.module))
      },
      tsApisForCpp: G,
      registerRefreshCallback: (e) => {
        vw(t, e)
      },
    })
    isInteractionPathCheck() && console.log('Finished calling initializeWasm')
    V = t
    isInteractionPathCheck() && interactionTestHelpers.setIsRunningInteractionTests()
    let i = $$P3(t)
    trackEventAnalytics('Fullscreen Loaded', {
      ...i,
    })
  }
  catch (e) {
    trackEventAnalytics('Fullscreen Load Failure', {
      error: `${e}`,
    })
    isInteractionPathCheck() && console.log('Failed to initialize fullscreen', e)
    !e || e.message === 'Failed to fetch' || e.message === 'Could not download wasm module' || e.message === 'TypeError: Load failed' || e.message.includes('NetworkError') || e.message.toLowerCase().includes('network error') || (e instanceof Error || (e = new Error(`Fullscreen load failure: ${e}`)), reportError(_$$e.UNOWNED, e))
    e.reportedToSentry = !0
    return e
  }
}
export function $$z7() {
  if (N)
    return !0
  let e = Fig.fullscreenURLs['compiled_wasm.js']
  return !!(e && e.startsWith('/'))
}
export const Bz = $$k0
export const F$ = $$M1
export const LH = $$B2
export const bY = $$P3
export const e3 = $$H4
export const g4 = $$U5
export const wl = $$D6
export const y4 = $$z7
