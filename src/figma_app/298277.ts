import { reportError } from '../905/11';
import { fullscreenPerfManager } from '../905/125218';
import { ServiceCategories } from '../905/165054';
import { registerBinaryModule } from '../905/189279';
import { trackEventAnalytics } from '../905/449184';
import { isSpecialRoutePath } from '../905/470286';
import { getFeatureFlags } from '../905/601108';
import { getQueryParam } from '../905/609392';
import { customHistory, isMainAppRoute, isMakeRoute } from '../905/612521';
import { logWarning } from '../905/714362';
import { setMemoryCallback } from '../figma_app/527873';
import { singletonAsync } from '../figma_app/562352';
import { injectTextDecoderFix, loadScript } from '../figma_app/623293';
import { getAndRemoveFullscreenEmscriptenExecutor, initializeTsApiBindings, setupWasmModule } from '../figma_app/762706';
import { interactionTestHelpers, UserAppType } from '../figma_app/763686';
import { isAndroidUA, isFigmaMobileApp } from '../figma_app/778880';
import { bellFeedAPIInstance, desktopAPIInstance } from '../figma_app/876459';
import { isInteractionPathCheck } from '../figma_app/897289';

// WASM binary URL resolver
function getWasmBinaryUrl(binaryType: 'fullscreen-app' | 'prototype-lib' | string): string {
  return binaryType === 'prototype-lib' ? Fig.prototypeLibURLs['compiled_wasm.wasm'] : Fig.fullscreenURLs['compiled_wasm.wasm'];
}

// Emscripten JS loader URL resolver
function getEmscriptenJsUrl(binaryType: 'fullscreen-app' | 'prototype-lib'): string {
  return binaryType === 'prototype-lib' ? Fig.prototypeLibURLs['compiled_wasm.js'] : Fig.fullscreenURLs['compiled_wasm.js'];
}

// ASAN mode initialization
async function initializeAsanMode(tsApisForCpp: any, binaryType: 'fullscreen-app' | 'prototype-lib'): Promise<void> {
  await loadScript(getEmscriptenJsUrl(binaryType));
  const moduleConfig = {
    wasmBinaryFile: getWasmBinaryUrl(binaryType),
    preRun(): void {
      (this.emscripten_realloc_buffer ?? this.growMemory)(0x60000000);
    }
  };
  window.Module = moduleConfig;
  initializeTsApiBindings({
    callMain: getAndRemoveFullscreenEmscriptenExecutor(),
    tsApisForCpp,
    registerRefreshCallback: (callback: () => void) => {
      registerBinaryModule(binaryType, callback);
    },
    leakBindings: true
  });
}

// Load Emscripten JavaScript code
async function loadEmscriptenJs(binaryType: 'fullscreen-app' | 'prototype-lib'): Promise<any> {
  try {
    await fullscreenPerfManager.timeAsync('loadingCode', () => {
      injectTextDecoderFix();
      return window.FULLSCREEN_PRELOADS?.js || loadScript(getEmscriptenJsUrl(binaryType));
    });
  } catch {
    throw new Error('Failed to load fullscreen JS code');
  }
  return setupWasmModule({
    isProduction: true,
    executeEmscriptenJS: getAndRemoveFullscreenEmscriptenExecutor()
  });
}

// WebAssembly streaming instantiation with performance tracking
async function instantiateWasmStreaming(response: Response, imports: WebAssembly.Imports): Promise<WebAssembly.WebAssemblyInstantiatedSource> {
  const instantiationResult = fullscreenPerfManager.time('instantiateStreaming', async () => {
    try {
      return await WebAssembly.instantiateStreaming(response, imports);
    } catch (error) {
      if (typeof error === 'string') {
        throw new TypeError(error);
      }
      throw error;
    }
  });
  return await fullscreenPerfManager.timeAsync('awaitInstantiateStreaming', () => instantiationResult);
}

// WebAssembly array buffer instantiation with performance tracking
async function instantiateWasmArrayBuffer(response: Response, imports: WebAssembly.Imports): Promise<WebAssembly.WebAssemblyInstantiatedSource> {
  if (!response.ok) {
    throw new Error(`Downloading wasm failed with ${response.status}`);
  }
  const arrayBuffer = await response.arrayBuffer();
  const instantiationResult = fullscreenPerfManager.time('instantiate', async () => {
    try {
      return await WebAssembly.instantiate(arrayBuffer, imports);
    } catch (error) {
      if (typeof error === 'string') {
        throw new TypeError(error);
      }
      throw error;
    }
  });
  return await fullscreenPerfManager.timeAsync('awaitInstantiate', () => instantiationResult);
}

// Flag to track if local build is being used
let isLocalBuild = false;
// Track previously loaded binary type to prevent conflicts
let previouslyLoadedBinaryType: 'fullscreen-app' | 'prototype-lib' | null = null;

// Main WASM binary loading function
async function loadWasmBinary(binaryType: 'fullscreen-app' | 'prototype-lib'): Promise<{
  receiveInstance: (instance: WebAssembly.Instance, module: WebAssembly.Module) => void;
  wasmResult: WebAssembly.WebAssemblyInstantiatedSource;
} | Error> {
  isInteractionPathCheck() && console.log('loadWasmBinary called for', binaryType);

  // Report error if switching between binary types in non-test environments
  if (previouslyLoadedBinaryType && previouslyLoadedBinaryType !== binaryType && !isInteractionPathCheck() && !isCommunityOrUserPath()) {
    if (previouslyLoadedBinaryType === 'fullscreen-app') {
      reportError(ServiceCategories.CLIENT_PLATFORM, new Error('Previously downloaded fullscreen wasm, but is now downloading prototype-lib'));
    } else if (previouslyLoadedBinaryType === 'prototype-lib') {
      reportError(ServiceCategories.CLIENT_PLATFORM, new Error('Previously downloaded prototype-lib wasm, but is now downloading fullscreen'));
    }
  }
  isInteractionPathCheck() && console.log('About to get binaryURL for', binaryType);
  const binaryUrl = getWasmBinaryUrl(binaryType);
  fullscreenPerfManager.start('loadingBinaryStart');
  isInteractionPathCheck() && console.log('About to call loadJS and fetch wasm for url', binaryUrl, getEmscriptenJsUrl(binaryType));
  const [wasmResponse, wasmModuleSetup] = await Promise.all([window.FULLSCREEN_PRELOADS?.wasm || fetch(binaryUrl), loadEmscriptenJs(binaryType)]);
  isInteractionPathCheck() && console.log('Finished calling loadJS and fetch wasm');
  delete window.FULLSCREEN_PRELOADS;
  const {
    imports,
    receiveInstance,
    getReservedHeapSize
  } = wasmModuleSetup;
  setMemoryCallback(binaryType, getReservedHeapSize);
  if (wasmResponse.headers.get('x-figma-local-build') === 'true') {
    isLocalBuild = true;
  }

  // Try streaming instantiation first (faster)
  if (WebAssembly.instantiateStreaming) {
    try {
      isInteractionPathCheck() && console.log('About to call instantiateWasmStreaming');
      const wasmResult = await instantiateWasmStreaming(wasmResponse, imports);
      isInteractionPathCheck() && console.log('Finished calling instantiateWasmStreaming');
      previouslyLoadedBinaryType = binaryType;
      return {
        receiveInstance,
        wasmResult
      };
    } catch (error) {
      if (isInteractionPathCheck()) {
        console.log('Error calling instantiateWasmStreaming', error);
      }

      // Handle MIME type issues that might be caused by proxies
      if (error && (!error.message || error.message.includes('Incorrect response MIME type') || error.message.includes('Unexpected response MIME type'))) {
        console.warn('Detected a proxy interfering with the "application/wasm" MIME type. ' + 'Falling back to a slower WebAssembly instantiation method instead.');
        reportError(ServiceCategories.UNOWNED, new Error(`Working around error instantiating streaming fullscreen WASM: ${error}`));
        // Retry with regular fetch
        const retryResponse = await fetch(binaryUrl);
        const wasmResult = await instantiateWasmArrayBuffer(retryResponse, imports);
        previouslyLoadedBinaryType = binaryType;
        return {
          receiveInstance,
          wasmResult
        };
      } else {
        logWarning('loader', 'Error loading wasm', {
          url: binaryUrl,
          message: error?.message
        });
        return error;
      }
    }
  }

  // Fallback to array buffer instantiation
  const wasmResult = await instantiateWasmArrayBuffer(wasmResponse, imports);
  previouslyLoadedBinaryType = binaryType;
  return {
    receiveInstance,
    wasmResult
  };
}

// Singleton instances for different binary types
const fullscreenAppLoader = singletonAsync(async () => await loadWasmBinary('fullscreen-app'));
const prototypeLibLoader = singletonAsync(async () => await loadWasmBinary('prototype-lib'));

// Binary type loader dispatcher
async function loadBinaryByType(binaryType: 'fullscreen-app' | 'prototype-lib'): Promise<any> {
  if (isInteractionPathCheck()) {
    console.log('Called loadAllForWasmBinaryType for', binaryType);
  }
  switch (binaryType) {
    case 'fullscreen-app':
      return await fullscreenAppLoader();
    case 'prototype-lib':
      return await prototypeLibLoader();
  }
}

/**
 * Get WASM variant information for analytics
 * @param binaryType - The binary type to analyze
 * @returns Object containing variant information
 */
export function getWasmVariantInfo(binaryType?: string | null): Record<string, string> {
  const effectiveBinaryType = binaryType || previouslyLoadedBinaryType || previouslyLoadedBinaryType;
  if (effectiveBinaryType) {
    const urlParts = getWasmBinaryUrl(effectiveBinaryType).split('/');
    if (urlParts.length < 2) return {};
    const pathSegment = urlParts[urlParts.length - 2];
    if (pathSegment === 'fullscreen-wasm') {
      return {
        fullscreen_variant: 'wasm'
      };
    }
    if (pathSegment === 'prototype-lib') {
      return {
        prototype_variant: 'lib'
      };
    }
    if (pathSegment.startsWith('fullscreen-wasm-')) {
      return {
        fullscreen_variant: pathSegment.replace('fullscreen-wasm-', '')
      };
    }
    if (pathSegment.startsWith('prototype-lib-')) {
      return {
        prototype_variant: pathSegment.replace('prototype-lib-', '')
      };
    }
  }
  return {};
}

/**
 * Check if current path is a community or user path
 * @returns boolean indicating if current path is community/user related
 */
export function isCommunityOrUserPath(): boolean {
  const currentPath = customHistory.location.pathname;
  const communityPaths = ['/c', '/community', '/@', '/user', '/org', '/team'];
  for (const path of communityPaths) {
    if (currentPath.startsWith(path)) return true;
  }
  return false;
}

/**
 * Check if device should use fullscreen mode
 * @returns boolean indicating if fullscreen should be enabled
 */
export function shouldUseFullscreen(): boolean {
  return !/Mobi/.test(navigator.userAgent) || /iPad/.test(navigator.userAgent) || /Macintosh/.test(navigator.userAgent) || isMakeRoute() && !!getFeatureFlags().load_fullscreen_make_mobile_web;
}

/**
 * Load WASM binary by type
 * @param binaryType - Type of binary to load
 * @returns Promise that resolves when loading is complete
 */
export function loadWasmBinaryByType(binaryType: 'fullscreen-app' | 'prototype-lib' = 'fullscreen-app'): Promise<void> {
  return loadBinaryByType(binaryType).then(() => {});
}
const currentPath = document.location.pathname;

/**
 * Check if path is a preload path
 * @param path - Path to check
 * @returns boolean indicating if path is preload related
 */
function isPreloadPath(path: string): boolean {
  return path === '/preload-editor' || path === '/preload-android-proto' || path.startsWith('/mobile-preload');
}

/**
 * Determine when to preload fullscreen
 * @returns 'never' | 'immediately' | 'eventually'
 */
export function getFullscreenPreloadTiming(): 'never' | 'immediately' | 'eventually' {
  const shouldNeverPreload = isPreloadPath(currentPath) && isFigmaMobileApp() && isAndroidUA || isSpecialRoutePath(currentPath) || desktopAPIInstance && desktopAPIInstance.isFileBrowserTab() || bellFeedAPIInstance || isCommunityOrUserPath() || isPreloadPath(customHistory.location.pathname) && !desktopAPIInstance;
  if (shouldNeverPreload) {
    return 'never';
  }
  const shouldPreloadImmediately = !getFeatureFlags().preload_fullscreen_on_load || document.readyState === 'complete' || isMainAppRoute();
  return shouldPreloadImmediately ? 'immediately' : 'eventually';
}

/**
 * Initialize fullscreen preloading based on timing configuration
 */
export function initializeFullscreenPreloading(): void {
  function loadFullscreenApp(): void {
    loadBinaryByType('fullscreen-app').catch(_ => {});
  }
  const preloadTiming = getFullscreenPreloadTiming();
  if (preloadTiming === 'immediately') {
    loadFullscreenApp();
  } else if (preloadTiming === 'eventually') {
    window.addEventListener('load', () => {
      loadFullscreenApp();
    });
  }
}

// Track current tsApisForCpp instance
let currentTsApisForCpp: any = null;
// Track currently initialized binary type
let currentlyInitializedBinaryType: 'fullscreen-app' | 'prototype-lib' | null = null;

/**
 * Initialize WASM with proper error handling and analytics
 * @param tsApisForCpp - TypeScript APIs for C++ integration
 * @param binaryType - Type of binary to initialize
 * @returns Promise that resolves when initialization is complete or rejects with error
 */
export async function initializeWasm(tsApisForCpp: any, binaryType: 'fullscreen-app' | 'prototype-lib' = 'fullscreen-app'): Promise<any> {
  // Report error if switching between binary types in non-test environments
  if (currentlyInitializedBinaryType && currentlyInitializedBinaryType !== binaryType && !isInteractionPathCheck()) {
    if (currentlyInitializedBinaryType === 'fullscreen-app') {
      reportError(ServiceCategories.UNOWNED, new Error('Previously initialized fullscreen wasm, but is now initializing prototype-lib'));
    } else if (currentlyInitializedBinaryType === 'prototype-lib') {
      reportError(ServiceCategories.UNOWNED, new Error('Previously initialized prototype-lib wasm, but is now initializing fullscreen'));
    }
  }

  // Redirect to unsupported browser page if WASM is not available
  if (!getWasmBinaryUrl(binaryType) || !window.WebAssembly) {
    location.href = '/unsupported_browser';
    return new Promise(() => null);
  }

  // Use ASAN mode if enabled
  if (getQueryParam('asan')) {
    currentlyInitializedBinaryType = binaryType;
    return initializeAsanMode(tsApisForCpp, binaryType);
  }
  try {
    // Reload if tsApisForCpp has changed
    if (currentTsApisForCpp && currentTsApisForCpp !== tsApisForCpp) {
      await customHistory.reloadAndWaitForever('tsApisForCpp changed', {
        from: UserAppType[currentTsApisForCpp.CommonApp().appType()],
        to: UserAppType[tsApisForCpp.CommonApp().appType()]
      });
    }
    currentTsApisForCpp = tsApisForCpp;
    isInteractionPathCheck() && console.log('About to call loadAllForWasmBinaryType');
    const {
      receiveInstance,
      wasmResult
    } = (await loadBinaryByType(binaryType)) as {
      receiveInstance: (instance: WebAssembly.Instance, module: WebAssembly.Module) => void;
      wasmResult: WebAssembly.WebAssemblyInstantiatedSource;
    };
    isInteractionPathCheck() && console.log('Finished calling loadAllForWasmBinaryType');
    isInteractionPathCheck() && console.log('About to call initializeWasm');
    initializeTsApiBindings({
      callMain: () => {
        fullscreenPerfManager.time('callMain', () => receiveInstance(wasmResult.instance, wasmResult.module));
      },
      tsApisForCpp: currentTsApisForCpp,
      registerRefreshCallback: (callback: () => void) => {
        registerBinaryModule(binaryType, callback);
      }
    });
    isInteractionPathCheck() && console.log('Finished calling initializeWasm');
    currentlyInitializedBinaryType = binaryType;
    isInteractionPathCheck() && interactionTestHelpers.setIsRunningInteractionTests();
    const variantInfo = getWasmVariantInfo(binaryType);
    trackEventAnalytics('Fullscreen Loaded', {
      ...variantInfo
    });
  } catch (error) {
    trackEventAnalytics('Fullscreen Load Failure', {
      error: `${error}`
    });
    isInteractionPathCheck() && console.log('Failed to initialize fullscreen', error);

    // Report error to Sentry unless it's a network-related error
    let errorToReport = error;
    if (!error || error.message !== 'Failed to fetch' && error.message !== 'Could not download wasm module' && error.message !== 'TypeError: Load failed' && !error.message.includes('NetworkError') && !error.message.toLowerCase().includes('network error')) {
      if (!(error instanceof Error)) {
        errorToReport = new Error(`Fullscreen load failure: ${error}`);
      }
      reportError(ServiceCategories.UNOWNED, errorToReport);
    }

    // Type assertion to add property to the original error object
    (error as any).reportedToSentry = true;
    return error;
  }
}

/**
 * Check if using local build
 * @returns boolean indicating if local build is being used
 */
export function isUsingLocalBuild(): boolean {
  if (isLocalBuild) return true;
  const jsUrl = Fig.fullscreenURLs['compiled_wasm.js'];
  return !!(jsUrl && jsUrl.startsWith('/'));
}

// Export constants for external usage
export const Bz = shouldUseFullscreen;
export const F$ = loadWasmBinaryByType;
export const LH = initializeFullscreenPreloading;
export const bY = getWasmVariantInfo;
export const wl = isCommunityOrUserPath;
export const g4 = getFullscreenPreloadTiming;
export const y4 = isUsingLocalBuild;
export const e3 = initializeWasm;