import type { PluginError } from "../905/572400"
import type { RealmVmWrapper } from "./realmVmWrapper"
import type { CppVmWrapper } from "./valueCloner"
import { z as _$$z2 } from "zod"
import { clearPlaybackHandler } from "../905/104019"
import { splitBufferIntoRawStacks } from "../905/117966"
import { FigmaSchema } from "../905/125137"
import { widgetInteractionTracker } from "../905/223332"
import { getStoredValue } from "../905/266529"
import { trackEventAnalytics } from "../905/449184"
import { createPluginInstance, defineAlertFunction } from "../905/472793"
import { getFeatureFlags } from "../905/601108"
import { AK, nB } from "../905/642684"
import { NoOpVm } from "../905/700654"
import { mergeDefaults, validateWithZSchema } from "../905/816730"
import { fullscreenValue } from "../figma_app/455680"
import { fetchDynamicConfig } from "../figma_app/594947"
import { setStackInvariantCallback } from "../figma_app/603466"
import { PluginHelpers } from "../figma_app/763686"
import { isInteractionPathCheck } from "../figma_app/897289"
import { FetchPlugin } from "../figma_app/985200"
import { createVmInstance, ensureVmModuleLoaded, realmConsoleMethodNames, realmConsoleMethods } from "./realmVmWrapper"
import { boundConsoleMethods } from "./valueCloner"

// Refactored from minified JS to TypeScript with improved readability, type safety, and comments
// Original variable names preserved in comments where applicable

// Refactored from minified JS to TypeScript with improved readability, type safety, and comments
// Original variable names preserved in comments where applicable

for (const method of ["log", "error", "assert", "info", "warn", "clear"]) {
  boundConsoleMethods[method] = console[method].bind(console)
}

// Refactored from minified JS to TypeScript with improved readability, type safety, and comments
// Original variable names preserved in comments where applicable

for (const methodName of realmConsoleMethodNames) {
  realmConsoleMethods[methodName] = console[methodName].bind(console)
}

// Error tracking counter
let errorTrackingCounter = 0

/**
 * Tracks plugin-generated errors
 * Original name: eo
 */
function trackPluginError(errorData: {
  message: string
  raw_stack: any
  apiVersion: string
  pluginID?: string
}): void {
  if (++errorTrackingCounter > 100) {
    return
  }

  const { message, raw_stack, apiVersion, pluginID } = errorData
  const errorInfo = {
    message,
    ...splitBufferIntoRawStacks(raw_stack),
    pluginID: pluginID || "",
    version: apiVersion,
  }

  trackEventAnalytics("plugin_generated_error", errorInfo, {
    forwardToDatadog: true,
  })
}

// Original variable name: ec
/**
 * Fetches the list of plugins exempt from data limits
 */
async function fetchExemptPlugins(): Promise<any> {
  return await fetchDynamicConfig("ext_plugindata_limit_exempt_plugins")
}

// Original function name: $$eu1
/**
 * Initializes and runs a plugin in a secure VM environment
 * @param pluginConfig - Configuration object for the plugin
 * @returns Object containing the run result promise and close function
 */
export async function runPluginInVm(pluginConfig: {
  vmType: "cppvm" | "realm"
  apiVersion: string
  capabilities: any
  code: string
  command: string
  deferRunEvent?: boolean
  disableSilenceConsole?: boolean
  enablePrivatePluginApi?: boolean
  enableProposedApi?: boolean
  errorHandler?: (message: string) => void
  isLocal: boolean
  isWidget: boolean
  name: string
  openFileKey?: string
  parameterValues: any
  permissions: any
  pluginCounter: number
  pluginID?: string
  pluginVersionID?: string
  queryMode?: boolean
  securityCheckReporter?: (results: string) => void
  stats: any
  testMessageHandler?: any
  triggeredFrom: string
  userID: string
  allowedDomains?: string[]
  titleIconURL?: string
  editorType?: string
  html?: string
  incrementalSafeApi?: boolean
  allowIncrementalUnsafeApiCalls?: boolean
  enableNativeJsx?: boolean
  enableResponsiveSetHierarchyMutations?: boolean
} & ObjectOf) {
  let closePluginFunction: (result?: { message?: string, isError?: boolean, overriddenBy?: any }) => Promise<void>

  // Destructure plugin configuration
  const {
    apiVersion,
    capabilities,
    code,
    command,
    deferRunEvent,
    disableSilenceConsole,
    enablePrivatePluginApi,
    enableProposedApi,
    errorHandler,
    isLocal,
    isWidget,
    name,
    openFileKey,
    parameterValues,
    permissions,
    pluginCounter,
    pluginID,
    pluginVersionID,
    queryMode,
    securityCheckReporter,
    stats,
    testMessageHandler,
    triggeredFrom,
    userID,
    allowedDomains,
    titleIconURL,
    editorType,
    html,
    incrementalSafeApi,
    allowIncrementalUnsafeApiCalls,
    enableNativeJsx,
    enableResponsiveSetHierarchyMutations,
  } = pluginConfig

  // Create VM instance
  const vmInstance = await createVmInstance(pluginConfig.vmType)

  // Track widget VM start time
  if (isWidget) {
    widgetInteractionTracker.didVmStart(window.performance.now())
  }

  // Fetch exempt plugins list
  const exemptPluginsConfig = await fetchExemptPlugins()

  // Set up error handler
  vmInstance.setErrorHandler((error: PluginError) => {
    let errorMessage = ""
    try {
      errorMessage = vmInstance.toString(error.handle)
    }
    catch {
      errorMessage = "Error: An error was thrown, but couldn't be converted into a string"
    }

    let stackTrace = ""
    try {
      stackTrace = vmInstance.getStringProp(error.handle, "stack")
    }
    catch {
      stackTrace = "Unable to get stack"
    }

    trackPluginError({
      message: errorMessage,
      raw_stack: stackTrace,
      pluginID,
      apiVersion,
    })

    errorHandler?.(errorMessage)
  })

  // Set up abort handler
  vmInstance.setAbortHandler((stack: string) => {
    closePluginFunction?.({
      message: "Plugin runtime aborted",
      isError: true,
    })

    trackPluginError({
      message: "Plugin runtime aborted",
      raw_stack: stack,
      pluginID,
      apiVersion,
    })
  })

  // Set stats
  vmInstance.setStats(stats)

  // Create plugin execution promise
  const runResult = new Promise<string>((resolve, reject) => {
    let apiMode: { type: string, noOpUI?: boolean } | { type: string, uiHandle?: any }
    const shutdownActions: Fn[] = []

    // Execute all shutdown actions
    const executeShutdownActions = async (overriddenBy?: any) => {
      let error: any
      for (const action of shutdownActions) {
        try {
          await action(overriddenBy)
        }
        catch (e) {
          if (!error)
            error = e
        }
      }
      shutdownActions.length = 0 // Clear the array
      if (error)
        throw error
    }

    // Add shutdown action
    const addShutdownAction = (action: any) => {
      if (!shutdownActions.includes(action)) {
        // If async close handler feature is enabled, add to the beginning of the array
        if (getFeatureFlags().plugins_async_on_close_handler) {
          shutdownActions.unshift(action)
        }
        else {
          shutdownActions.push(action)
        }
      }
    }

    // Close plugin function
    closePluginFunction = async (result?: { message?: string, isError?: boolean, overriddenBy?: any }) => {
      let error: Error | undefined
      if (result?.isError) {
        error = new Error(result.message)
      }

      try {
        await executeShutdownActions(result?.overriddenBy)
      }
      catch (e) {
        error = error || e
        reject(e)
        return
      }
      finally {
        if (error) {
          reject(error)
        }
        else {
          resolve(result?.message)
        }
      }
    }

    // Silence console if needed
    if (!disableSilenceConsole) {
      nB()
    }

    // Determine API mode
    if (securityCheckReporter) {
      apiMode = {
        type: "SECURITY_CHECK",
      }
    }
    else if (isWidget) {
      apiMode = {
        type: "WIDGET",
        noOpUI: false,
      }
    }
    else {
      apiMode = {
        type: "PLUGIN",
        noOpUI: false,
      }
    }

    // Get exempt plugin IDs
    const exemptPluginIds = exemptPluginsConfig.get("pluginIds", [])
    const pluginId = pluginID || ""

    // Create main plugin instance
    const mainPluginInstance = createPluginInstance(vmInstance as any, {
      addShutdownAction,
      allowedDomains,
      apiMode,
      apiVersion,
      capabilities,
      closePlugin: closePluginFunction,
      code,
      command,
      deferRunEvent: deferRunEvent || false,
      enablePrivatePluginApi,
      enableProposedApi,
      isLocal,
      name,
      openFileKey,
      parameterValues,
      pluginID: pluginId,
      pluginVersionID: pluginVersionID || "",
      queryMode,
      stats,
      titleIconURL: titleIconURL || "",
      triggeredFrom,
      userID,
      validatedPermissions: permissions,
      editorType,
      html,
      incrementalSafeApi,
      allowIncrementalUnsafeApiCalls: !!allowIncrementalUnsafeApiCalls,
      enableNativeJsx,
      isPluginExemptFromPluginDataLimits: exemptPluginIds.includes(pluginId),
      enableResponsiveSetHierarchyMutations,
    })

    // Add standard shutdown actions
    addShutdownAction(() => vmInstance.destroy())
    if (!disableSilenceConsole) {
      addShutdownAction(() => AK())
    }
    addShutdownAction(() => fullscreenValue.triggerAction("commit"))

    // Define alert function
    defineAlertFunction(vmInstance as any, stats, name)

    // Refactored timer functions setup: Removed IIFE, improved type safety with interfaces, added detailed comments for clarity, and ensured modular structure.
    // Original code name: setupTimerFunctions (from IIFE in runPluginInVm)

    interface TimerHandle {
      release: () => void
      realId: number
    }

    interface CallbackWrapper {
      release: () => void
      callback: () => void
    }

    /**
     * Sets up timer functions (setTimeout, clearTimeout, setInterval, clearInterval) in the VM.
     * This replaces the global timer functions with VM-safe implementations that track handles and clean up resources.
     * @param vm - The plugin VM wrapper instance.
     * @param statsInstance - Stats tracker for incrementing timer usage metrics.
     * @param addAction - Function to add shutdown actions for cleanup.
     */
    function setupTimerFunctions(
      vm: CppVmWrapper | RealmVmWrapper,
      statsInstance: any, // Inferred from context: likely a stats object with increment method
      addAction: (action: () => void) => void,
    ): void {
      // Skip if setTimeout is already defined in the VM
      if (!vm.isEqual(vm.undefined, vm.getProp(vm.global, "setTimeout"))) {
        return
      }

      const timeoutHandles = new Map<number, TimerHandle>()
      const intervalHandles = new Map<number, TimerHandle>()
      let nextId = 1

      /**
       * Creates a wrapper for the callback function, handling retention and release of VM handles.
       * Supports both function callbacks and string code evaluation.
       * @param callbackHandle - The VM handle for the callback.
       * @param args - Additional arguments to pass to the callback.
       * @returns An object with release and callback methods.
       */
      function createCallbackWrapper(callbackHandle: any, args: any[]): CallbackWrapper {
        if (vm.isFunction(callbackHandle)) {
          vm.retainHandle(callbackHandle)
          for (const arg of args) {
            vm.retainHandle(arg)
          }

          let isReleased = false
          return {
            release: () => {
              if (!isReleased && !vm.isDestroyed()) {
                isReleased = true
                vm.releaseHandle(callbackHandle)
                for (const arg of args) {
                  vm.releaseHandle(arg)
                }
              }
            },
            callback: () => {
              if (!isReleased && !vm.isDestroyed()) {
                vm.callFunction(callbackHandle, vm.global, ...args)
              }
            },
          }
        }
        else {
          const codeString = vm.toString(callbackHandle)
          return {
            release: () => {},
            callback: () => vm.evalCode(codeString),
          }
        }
      }

      // Implement setTimeout
      vm.setProp(
        vm.global,
        "setTimeout",
        vm.newFunction("setTimeout", (callback: any, delay: any, ...args: any[]) => {
          statsInstance?.increment("setTimeout")
          const { release, callback: executeCallback } = createCallbackWrapper(callback, args)
          const delayMs = vm.toNumber(delay)
          const id = nextId++

          const realId = setTimeout(() => {
            timeoutHandles.delete(id)
            executeCallback()
            release()
          }, delayMs)

          timeoutHandles.set(id, {
            release,
            realId,
          })

          return vm.newNumber(id)
        }),
      )

      // Implement clearTimeout
      vm.setProp(
        vm.global,
        "clearTimeout",
        vm.newFunction("clearTimeout", (id: any) => {
          statsInstance?.increment("clearTimeout")
          const numericId = vm.toNumber(id)
          const handle = timeoutHandles.get(numericId)

          if (handle !== undefined) {
            timeoutHandles.delete(numericId)
            clearTimeout(handle.realId)
            handle.release()
          }

          return vm.undefined
        }),
      )

      // Implement setInterval
      vm.setProp(
        vm.global,
        "setInterval",
        vm.newFunction("setInterval", (callback: any, interval: any, ...args: any[]) => {
          statsInstance?.increment("setInterval")
          const { release, callback: executeCallback } = createCallbackWrapper(callback, args)
          const intervalMs = vm.toNumber(interval)
          const id = nextId++

          const realId = setInterval(() => {
            executeCallback()
          }, intervalMs)

          intervalHandles.set(id, {
            release,
            realId,
          })

          return vm.newNumber(id)
        }),
      )

      // Implement clearInterval
      vm.setProp(
        vm.global,
        "clearInterval",
        vm.newFunction("clearInterval", (id: any) => {
          statsInstance?.increment("clearInterval")
          const numericId = vm.toNumber(id)
          const handle = intervalHandles.get(numericId)

          if (handle !== undefined) {
            intervalHandles.delete(numericId)
            clearInterval(handle.realId)
            handle.release()
          }

          return vm.undefined
        }),
      )

      // Add cleanup action to clear all timers on shutdown
      addAction(() => {
        for (const { realId } of timeoutHandles.values()) {
          clearTimeout(realId)
        }
        timeoutHandles.clear()

        for (const { realId } of intervalHandles.values()) {
          clearInterval(realId)
        }
        intervalHandles.clear()
      })
    }

    // Call the setup function with the required parameters
    setupTimerFunctions(vmInstance, stats, addShutdownAction)

    // Set up fetch functionality
    const fetchPlugin = new FetchPlugin(pluginID || "", {
      allowedDomains,
      isLocal,
    })

    addShutdownAction(() => fetchPlugin.destroyIframe())

    // Implement fetch function
    ; (function implementFetch(vm, statsInstance, fetchPluginInstance: FetchPlugin) {
      // Skip if fetch is already defined
      if (!vm.isEqual(vm.undefined, vm.getProp(vm.global, "fetch"))) {
        return
      }

      vm.setProp(vm.global, "fetch", vm.newFunction("fetch", (urlHandle: any, initHandle: any) => {
        statsInstance?.increment("fetch")

        // Validate URL
        const url = validateWithZSchema({
          vm,
          handle: urlHandle,
          zSchema: _$$z2.string(),
          property: "url",
        })

        // Validate init options
        const initOptions = validateWithZSchema({
          vm,
          handle: initHandle,
          zSchema: FigmaSchema.FetchInitOptions,
          property: "init",
        }) || {}

        // Merge with defaults
        const options = mergeDefaults(initOptions, {
          body: null,
          headersObject: {},
        })

        if (options.headers == null) {
          options.headers = options.headersObject
        }
        delete options.headersObject

        // Create promise for fetch result
        const { promise, resolve, reject } = vm.newPromise()

        const fetchRequest = {
          ...options,
          url,
        }

        // Perform fetch
        vm.registerPromise(fetchPluginInstance.fetch(fetchRequest)).then(async (response: any) => {
          const arrayBuffer = await response._blob.arrayBuffer()

          // Create response object
          const responseObject = vm.deepWrap({
            headersObject: response.headersObject,
            ok: response.ok,
            redirected: response.redirected,
            status: response.status,
            statusText: response.statusText,
            type: response.type,
            url: response.url,
          })

          // Define arrayBuffer method
          vm.defineFunction(responseObject, "arrayBuffer", "fetchResponse.arrayBuffer", () => {
            const { promise: arrayBufferPromise, resolve: arrayBufferResolve } = vm.newPromise()
            arrayBufferResolve(vm.newArrayBuffer(arrayBuffer))
            return arrayBufferPromise
          })

          // Define text method
          vm.defineFunction(responseObject, "text", "fetchResponse.text", () => {
            const { promise: textPromise, resolve: textResolve } = vm.newPromise()
            const decoder = new TextDecoder()
            textResolve(vm.deepWrap(decoder.decode(arrayBuffer)))
            return textPromise
          })

          // Define json method
          vm.defineFunction(responseObject, "json", "fetchResponse.json", () => {
            const { promise: jsonPromise, resolve: jsonResolve, reject: jsonReject } = vm.newPromise()
            const decoder = new TextDecoder()

            try {
              const text = decoder.decode(arrayBuffer)
              const json = JSON.parse(text)
              jsonResolve(vm.deepWrap(json))
            }
            catch (error) {
              jsonReject(
                error instanceof SyntaxError
                  ? vm.deepWrap({
                      message: error.message,
                    })
                  : vm.deepWrap({
                      message: "Error parsing JSON",
                    }),
              )
            }

            return jsonPromise
          })

          // Freeze response object
          vm.shallowFreezeObject(responseObject)
          resolve(responseObject)
        }, (error: Error) => {
          reject(vm.deepWrap({
            message: error.message,
          }))
        })

        return promise
      }))
    })(vmInstance, stats, fetchPlugin)

    // Set up test message handler for interaction path checks
    // Refactored setupTestMessageHandler: Extracted from IIFE into a named function for better readability and modularity.
    // Original code name: setupTestMessageHandler (from IIFE in runPluginInVm)
    // Added type annotations for parameters and improved comments.

    /**
     * Sets up the test message handler for interaction path checks.
     * Creates a __TEST__ object in the VM global scope with sendMessage and onMessage methods.
     * @param vm - The plugin VM wrapper instance.
     * @param testHandler - The test message handler object with methods for communication.
     */
    function setupTestMessageHandler(vm: RealmVmWrapper, testHandler: any): void {
      const testObject = vm.newObject()
      vm.setProp(vm.global, "__TEST__", testObject)

      if (testHandler) {
      // Define sendMessage function to send messages from plugin to test
        vm.defineFunction(testObject, "sendMessage", null, (message: any) => {
          testHandler.sendMessageToTest(vm.toString(message))
          return vm.undefined
        })

        // Define onMessage function to handle messages from test to plugin
        vm.defineFunction(testObject, "onMessage", null, (handler: any) => {
          if (!vm.isFunction(handler)) {
            throw new TypeError("onMessage handler must be a function")
          }

          vm.retainHandle(handler)
          testHandler.sendMessageToPlugin = (message: string) => {
            if (!vm.isDestroyed()) {
              vm.callFunction(handler, vm.undefined, vm.newString(message))
            }
          }

          return vm.undefined
        })

        // Notify test handler when ready, checking if VM is not destroyed
        testHandler.ready(() => !vm.isDestroyed())
      }

      vm.shallowFreezeObject(testObject)
    }

    // Set up test message handler for interaction path checks
    if (isInteractionPathCheck()) {
      setupTestMessageHandler(vmInstance as any, testMessageHandler)
    }

    // Set up security check reporter
    if (securityCheckReporter) {
      vmInstance.defineFunction(vmInstance.global, "reportSecurityResults", "reportSecurityResults", (results: any) => {
        securityCheckReporter(vmInstance.toString(results))
        return vmInstance.undefined
      })
    }

    // Create NoOp VM instance
    const noOpVm = new NoOpVm()
    addShutdownAction(() => noOpVm.destroy())
    addShutdownAction(clearPlaybackHandler)
    addShutdownAction(() =>
      setStackInvariantCallback((enforced: boolean) => {
        stats.stackInvariantsEnforced(enforced)
      }),
    )

    // Create console shim plugin instance
    createPluginInstance(noOpVm, {
      addShutdownAction,
      allowedDomains,
      apiMode: {
        type: "CONSOLE_SHIM",
        uiHandle: mainPluginInstance.getUiHandle(),
      },
      apiVersion,
      capabilities,
      closePlugin: closePluginFunction,
      command,
      deferRunEvent: deferRunEvent || false,
      enablePrivatePluginApi,
      enableProposedApi,
      isLocal,
      name,
      openFileKey,
      pluginID: pluginId,
      pluginVersionID: pluginVersionID || "",
      queryMode,
      stats,
      titleIconURL,
      triggeredFrom,
      userID,
      validatedPermissions: permissions,
      editorType,
      html,
      incrementalSafeApi,
      enableNativeJsx,
      isPluginExemptFromPluginDataLimits: exemptPluginIds.includes(pluginId),
      enableResponsiveSetHierarchyMutations,
    })

    // Execute plugin code
    const sourceCode = `${code}\n//# sourceURL=PLUGIN_${pluginCounter}_SOURCE\n`

    setTimeout(() => {
      // Check if plugin is still valid
      if (!securityCheckReporter && getStoredValue() !== pluginCounter) {
        closePluginFunction({
          message: "Plugin already terminated",
          isError: true,
        })
        return
      }

      // Prepare to run plugin
      if (!securityCheckReporter) {
        PluginHelpers.prepareToRunPlugin()
        addShutdownAction(() => PluginHelpers.finishedRunningPlugin())
      }

      let evalResult: { type: "SUCCESS" } | { type: "FAILURE", error: PluginError }

      try {
        evalResult = vmInstance.evalTopLevelCode(sourceCode)

        // For local widgets, verify widget registration
        if (isWidget && isLocal) {
          if (mainPluginInstance.hasRegisteredWidget()) {
            testMessageHandler?.widgetRegistered?.()
          }
          else {
            throw new Error("widget missing call to figma.widget.register")
          }
        }
      }
      catch (error) {
        let errorMessage = "Unknown error"
        try {
          errorMessage = `${error}`
        }
        catch {
          // Ignore error in string conversion
        }

        closePluginFunction({
          message: errorMessage,
          isError: true,
        })
        return
      }
      finally {
        stats.markTime("timeToEvalTopLevelCodeMs")
      }

      // Handle evaluation failure
      if (isWidget) {
        widgetInteractionTracker.didEvalJSVM()
      }

      if (evalResult.type === "FAILURE") {
        if (isInteractionPathCheck()) {
          const errorMessage = vmInstance.toString(evalResult.error.handle)
          closePluginFunction({
            message: errorMessage,
            isError: true,
          })
        }
        else {
          closePluginFunction()
        }
      }
    })
  })

  return {
    runResult,
    closePlugin: closePluginFunction,
  }
}

// Export with original names for compatibility
export const a7 = ensureVmModuleLoaded
export const ls = runPluginInVm
