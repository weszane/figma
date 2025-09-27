import { executeBinaryModule, registerBinaryModule } from '../905/189279'
import { gx } from '../905/319279'
import { updateAppCapabilities } from '../905/544669'
import { isFigmaNativeApp } from '../905/575846'
import { getFeatureFlags } from '../905/601108'
import { fetchFontList, updateFontList } from '../905/777093'
import { createDeferredPromise } from '../905/874553'
import { $$K0 } from '../905/896230'
import { initializeWasm } from '../figma_app/298277'
import { loadTimeTrackerModule, prototypeLibPerfModule } from '../figma_app/661568'
import { initializeTsApiBindings } from '../figma_app/762706'
import { bindings, FontSourceType, initializeFigmaServices, prototypeInternal } from '../figma_app/763686'
import { isInteractionPathCheck } from '../figma_app/897289'

let isWasmInitialized = false
let wasmInitializationPromise = createDeferredPromise()

/**
 * Initialize WASM module for prototype library
 * @function A -> initializePrototypeWasm
 */
async function initializePrototypeWasm() {
  if (!isFigmaNativeApp && !isWasmInitialized) {
    const loadTimeTracker = loadTimeTrackerModule.getLoadTimeTracker()
    if (loadTimeTracker) {
      loadTimeTracker.fullscreenEvents.loadAndStartFullscreenIfNecessary = Math.round(performance.now())
    }
    isWasmInitialized = true
    await initializeWasm($$K0, 'prototype-lib')
    wasmInitializationPromise.resolve()
  }
}

/**
 * Font list loading promise
 * @type {Promise}
 */
let fontListLoadingPromise = new Promise(() => { })

/**
 * Cache for initialized modules
 * @type {Record<string, Promise<any> | null>}
 */
let initializedModulesCache = {
  'fullscreen-app': null,
  'prototype-lib': null,
}

/**
 * Initialize prototype library module
 * @param {object} config - Configuration object
 * @param {any} t - Additional parameter
 * @returns {Promise<{cppModules: any, fontListPromise: Promise<any>}>}
 * @function $$v0 -> initializePrototypeLibModule
 */
export async function initializePrototypeLibModule(config: any, _t: any) {
  gx(config.prototypeApp, config.skewKiwiSerialization, config.deprecatedJsSceneHooks)

  const moduleName = 'prototype-lib'

  if (initializedModulesCache[moduleName] == null) {
    initializedModulesCache[moduleName] = (async () => {
      // Reset and start performance tracking
      prototypeLibPerfModule.reset()
      prototypeLibPerfModule.start('initializePrototypeLib')

      // Update app capabilities for prototype viewer
      updateAppCapabilities({
        canLoadImageResource: false,
        canLoadFontResource: true,
        isInPrototypeViewer: true,
        actionStateDisableUpdates: true,
        appCanInteractWithWidgetEmbedsAndLinkPreviews: false,
        appIsReadOnly: true,
        appIsRecovery: false,
        appCanRenderHyperlinkHoverUI: false,
        appCanRenderMultiplayerOrSelectionUI: false,
        appCanRenderScrollbars: false,
        appCanRenderSceneGraphUI: false,
        onlyRenderTopLevelFrameOfSelection: false,
        clickOnlyComments: false,
        allowToggleCommentsWhenLoggedOut: false,
        requireInteractionForFocus: false,
        requestVariableMirroring: false,
        requestAssetMirroring: false,
      })

      // Initialize WASM
      await initializePrototypeWasm()

      if (!prototypeInternal) {
        throw new Error('PrototypeLib: error during initialization')
      }

      const loadTimeTracker = loadTimeTrackerModule.getLoadTimeTracker()
      const fontSourceTypes = [FontSourceType.LOCAL, FontSourceType.GOOGLE]

      // Fetch and update font list
      const fontListPromise = fetchFontList(fontSourceTypes).then((fontData) => {
        if (loadTimeTracker) {
          const fontCount = (fontData.indexFontsList?.length || 0) + (fontData.localFontsList?.length || 0)
          loadTimeTracker.handleFontListLoaded(fontCount)
        }
        updateFontList(fontData)
      })

      // Handle async font loading based on feature flag
      fontListLoadingPromise = getFeatureFlags().prototype_async_font_loading
        ? Promise.resolve()
        : fontListPromise

      // End performance tracking
      prototypeLibPerfModule.end('initializePrototypeLib')
      console.debug('[prototype lib] Ready for interactions', performance.now())

      if (loadTimeTracker) {
        loadTimeTracker.fullscreenEvents.fullscreenIsReady = Math.round(performance.now())
      }

      prototypeLibPerfModule.loadTimer.report()

      return initializeFigmaServices()
    })()
  }
  else if (bindings && !isInteractionPathCheck()) {
    // Re-initialize TS API bindings
    initializeTsApiBindings({
      callMain: () => {
        bindings.refreshJsCppBindings()
      },
      tsApisForCpp: $$K0,
      registerRefreshCallback: (module) => {
        registerBinaryModule('prototype-lib', module)
      },
    })
  }
  else if (isInteractionPathCheck()) {
    // Execute binary module and ensure WASM initialization
    executeBinaryModule('prototype-lib')
    await initializePrototypeWasm()
  }

  return {
    cppModules: await initializedModulesCache[moduleName],
    fontListPromise: fontListLoadingPromise,
  }
}

/**
 * Module initialization function alias
 * @function M -> initializePrototypeLibModule
 */
export const M = initializePrototypeLibModule
