import { reportError } from '../905/11'
import { clearPlaybackHandler } from '../905/104019'
import { ServiceCategories } from '../905/165054'
import { delay } from '../905/236856'
import { getCounter, getStoredValue, hasStoredValue, incrementCounter, setStoredValue } from '../905/266529'
import { SubscriptionStatus } from '../905/272080'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { debugState } from '../905/407919'
import { trackEventAnalytics } from '../905/449184'
import { createDefaultPluginOptions, createPluginInstance } from '../905/472793'
import { getPluginApiDebugCopy } from '../905/535481'
import { PluginApiMetrics } from '../905/545265'
import { dequeuePluginStatus } from '../905/571565'
import { VisualBellIcon } from '../905/576487'
import { getFeatureFlags } from '../905/601108'
import { getCurrentUserOrgId, getPluginDevMode, handleSelectedView } from '../905/622391'
import { yA } from '../905/642684'
import { logger } from '../905/651849'
import { localStorageRef } from '../905/657224'
import { NoOpVm } from '../905/700654'
import { parseAndRemoveSourceMapComments } from '../905/751771'
import { closeCurrentPlugin, generateRandomID, handlePluginError, isGlobalPluginActive, pluginState, resetPluginState, setFAtom, setGlobalPluginCloseFunc, setPluginCloseFunc, setPluginData, setPluginTriggeredFrom, setResetGlobalPluginAPI } from '../905/753206'
import { mapEditorTypeTo } from '../905/808775'
import { setupPluginCodeCache } from '../905/827944'
import { isVsCodeEnvironment } from '../905/858738'
import { waitForAllPagesForPlugin } from '../905/916933'
import { runPluginInVm } from '../905/917898'
import { canPerformAction, canRunExtensions } from '../figma_app/12796'
import { atomStoreManager } from '../figma_app/27355'
import { hasMonetizedResourceMetadata } from '../figma_app/45218'
import { mapEditorTypeToStringWithObfuscated } from '../figma_app/53721'
import { addPluginToRecentsThunk, addWidgetToRecentsThunk } from '../figma_app/147952'
import { hasLocalFileId } from '../figma_app/155287'
import { isDevEnvironment, isE2ETraffic } from '../figma_app/169182'
import { clearVisualBell, getFullscreenViewEditorType, hasSpecialCapability, isBuzzPlugin, isDevModeWithInspectPanel, isValidForCooper, isValidForCooperSelectedView, isValidForFullscreenView, joinStringSegments, loadLocalPluginSource, loadPluginManifest, PluginPermissions, showVisualBell } from '../figma_app/300692'
import { fullscreenValue } from '../figma_app/455680'
import { d4 } from '../figma_app/474636'
import { PluginManager } from '../figma_app/612938'
import { assetCategoryAtom, AssetCategoryEnum } from '../figma_app/639711'
import { setSelectedDevModePropertiesPanelTab } from '../figma_app/741237'
import { IAssertResource } from '../figma_app/763686'
import { C3, SH } from '../figma_app/790714'
import { desktopAPIInstance } from '../figma_app/876459'
import { isInteractionPathCheck } from '../figma_app/897289'
import { DEFAULT_ALLOWED_ORIGINS, getPluginIframeMode, PluginInstanceManager } from '../figma_app/985200'
import { ensureVmModuleLoaded } from "./realmVmWrapper"

/**
 * Creates an error handler based on configuration
 */
function createErrorHandler(showRuntimeErrors: boolean, isWidget: boolean, originalErrorHandler?: (error: string) => void) {
  if (showRuntimeErrors) {
    let errorCount = 0
    const visualBellErrorHandler = (errorMessage: string) => {
      const formattedMessage = errorMessage.startsWith('Error')
        ? errorMessage.replace('Error', 'error')
        : errorMessage
      const errorCountSuffix = ++errorCount > 1 ? ` (${errorCount} errors total)` : ''
      const fullMessage = `${isWidget ? 'Widget' : 'Plugin'} ${formattedMessage}${errorCountSuffix}`
      showVisualBell(fullMessage)
    }

    return originalErrorHandler
      ? (error: string) => {
          visualBellErrorHandler(error)
          originalErrorHandler(error)
        }
      : visualBellErrorHandler
  }

  return originalErrorHandler || (() => {})
}

/**
 * Performs syntax checking on plugin code
 */
async function performSyntaxCheck(code: string, noConsoleError: boolean) {
  let parseResult
  try {
    parseResult = await parseAndRemoveSourceMapComments(code)
  }
  catch {
    // Ignore parse errors for now
  }

  if (parseResult && parseResult.success === false) {
    const { lineNumber, column, description } = parseResult.error
    const errorMessage = `Syntax error on line ${lineNumber}: ${description}`
    const codeLines = code.split('\n')
    let contextualError = ''

    const isValidLineAndColumn = lineNumber >= 1 && lineNumber <= codeLines.length
      && column >= 1 && column < 100
    if (isValidLineAndColumn) {
      const errorLine = codeLines[lineNumber - 1].replace(/\t/g, ' ').slice(0, column + 100)
      const pointer = `${' '.repeat(column - 1)}^`
      contextualError = `\n${errorLine}\n${pointer}`
    }

    if (!noConsoleError) {
      yA(errorMessage + contextualError)
    }

    return {
      hasError: true,
      error: new Error(errorMessage),
      parseResult,
    }
  }

  return {
    hasError: false,
    error: null,
    parseResult,
  }
}

/**
 * Extracts HTML content from plugin code and replaces it with proxy code
 */
function extractHtmlFromCode(code: string) {
  let extractedHtml = null
  // eslint-disable-next-line regexp/no-useless-assertions
  const processedCode = code.replace(/^const __html__ = ("(.*?)([^\\]|^)");/, (match, htmlString) => {
    extractedHtml = JSON.parse(htmlString.split('"+"').join(''))
    return HTML_PROXY_CODE
  })

  return {
    html: extractedHtml,
    code: processedCode,
  }
}

let testMessageHandlerGlobal
let realmsSecurityCheckPromise
let cppvmSecurityCheckPromise

const HTML_PROXY_CODE = `const __html__ = (() => {
  let realString = null;
  const getRealString = () => {
    if (realString == null) {
      realString = figma.getHTMLString();
    }
    return realString;
  };
  return new Proxy(
    { __html__: true },
    {
      get(_, prop) {
        if (prop === '__html__') {
          return true;
        }
        if (typeof String.prototype[prop] === 'function') {
          return (...args) => String.prototype[prop].apply(getRealString(), args);
        }
        return getRealString()[prop];
      },
    },
  );
})();`.replace(/\n/g, ' ')

async function executePluginCode(pluginExecutionOptions: any): Promise<{
  runResult: Promise<string>
  closePlugin: (result?: {
    message?: string
    isError?: boolean
    overriddenBy?: any
  }) => Promise<void>
}> {
  let processedErrorHandler
  let extractedHtml

  const {
    apiVersion,
    checkSyntax,
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
    noConsoleError,
    openFileKey,
    parameterValues,
    permissions,
    pluginCounter,
    queryMode,
    securityCheckReporter,
    showRuntimeErrors,
    stats,
    testMessageHandler = testMessageHandlerGlobal,
    triggeredFrom,
    userID,
    vmType,
    widgetAction,
    incrementalSafeApi,
    allowIncrementalUnsafeApiCalls,
    enableNativeJsx,
    enableResponsiveSetHierarchyMutations,
  } = pluginExecutionOptions

  const pluginType = isWidget ? 'widget' : 'plugin'
  stats.markTime('timeToRunPluginCodeInternalMs')

  const SUPPORTED_API_VERSIONS = ['0.6.0', '1.0.0']
  if (!SUPPORTED_API_VERSIONS.includes(apiVersion)) {
    throw new Error(`Unknown ${pluginType} api version "${apiVersion}". Supported versions: ${SUPPORTED_API_VERSIONS.join(', ')}`)
  }

  processedErrorHandler = createErrorHandler(showRuntimeErrors, isWidget, errorHandler)

  let processedCode = code
  const shouldCheckSyntax = !getFeatureFlags().plugins_remove_syntax_checking && checkSyntax !== false

  if (shouldCheckSyntax) {
    const syntaxCheckResult = await performSyntaxCheck(code, noConsoleError)
    if (syntaxCheckResult.hasError) {
      return syntaxCheckResult.error as any
    }

    if (vmType === 'realms' && syntaxCheckResult.parseResult?.success) {
      processedCode = joinStringSegments(code, syntaxCheckResult.parseResult.rangesToRemove)
    }
  }

  const htmlExtractionResult = extractHtmlFromCode(processedCode)
  extractedHtml = htmlExtractionResult.html
  processedCode = htmlExtractionResult.code

  return runPluginInVm({
    allowedDomains: pluginExecutionOptions.allowedDomains,
    apiVersion,
    capabilities: pluginExecutionOptions.capabilities,
    checkSyntax: false,
    code: processedCode,
    command,
    deferRunEvent,
    disableSilenceConsole,
    enablePrivatePluginApi,
    enableProposedApi,
    errorHandler: processedErrorHandler,
    isLocal,
    isWidget,
    name,
    openFileKey,
    parameterValues,
    permissions,
    pluginCounter,
    pluginID: pluginExecutionOptions.pluginID,
    pluginRunID: '',
    pluginVersionID: pluginExecutionOptions.pluginVersionID,
    queryMode,
    securityCheckReporter,
    showLaunchErrors: false,
    showRuntimeErrors: false,
    stats,
    testMessageHandler,
    titleIconURL: pluginExecutionOptions.titleIconURL,
    triggeredFrom,
    userID,
    vmType,
    widgetAction,
    editorType: pluginExecutionOptions.editorType,
    html: extractedHtml,
    incrementalSafeApi,
    allowIncrementalUnsafeApiCalls: !!allowIncrementalUnsafeApiCalls,
    enableNativeJsx,
    enableResponsiveSetHierarchyMutations,
  })
}

/**
 * Runs security checks for the specified VM type
 */
async function runVmSecurityChecks(vmType: string) {
  let securityError
  const iframeSecurityScript = `<script>
  function doIframeSecurityChecks() {
    // Edge seems to change the URL and origin of the page when you document.write()
    // a whole new page. The new URL looks something like http://{abc123.abcd-1234-5678-0123}/
    // with the {} escaped using percent encoding.
    if (document.location.origin !== "null" &&
        !/^https?\\:\\/\\/\\%7b[a-f0-9.-]+\\%7d$/.test(document.location.origin)) {
      return "Failed origin check: " + document.location.origin
    }
    // This doesn't ensure that we're sandboxed. But we want this to be true
    if (!document.location.href.startsWith('data:text/html,') &&
        !document.location.href.startsWith('data:text/html;base64,') &&
        !/^https?\\:\\/\\/\\%7b[a-f0-9.-]+\\%7d\\/$/.test(document.location.href)) {
      return "Failed location.href check: " + document.location.href
    }
    try {
      if (localStorage && localStorage["figma-extension-guard"] !== undefined) {
        return "Failed localStorage check"
      }
    } catch(ex) {}
    try {
      window.parent.document.body
      return "Failed DOM access check"
    } catch(ex) {}
    try {
      window.parent.someRandomProperty
      return "Failed JS heap access check"
    } catch(ex) {}
    return "ok"
  }
  let result
  try {
    result = doIframeSecurityChecks()
  } catch(ex) {
    result = ex + ''
  }
  window.parent.postMessage({ pluginMessage: result }, '*')
  </script>`

  const mainThreadSecurityCode = `
    function doMainThreadSecurityChecks() {
      // Modify a grab bag of prototype objects to try to modify prototypes outside
      // of the sandbox.
      // Grab prototype objects both through global property accesses, like
      // Array.prototype, through syntax access, like [].__proto__, and through
      // Object helpers, like Object.getPrototypeOf({}), in case
      // the realm API accidentally protects one but not the other.
      // Also grab prototypes for things that don't have named constructors, like
      // GeneratorFunction
      for (let obj of [Array.prototype,
                       String.prototype,
                       Function.prototype,
                       Object.prototype,
                       Date.prototype,
                       [].__proto__,
                       "".__proto__,
                       Math.__proto__,
                       (new Date()).__proto__,
                       ({}).__proto__,
                       (() => {}).__proto__,
                       (function*(){}).__proto__,
                       "(async () => {}).__proto__",
                       "(async function*(){}).__proto__",
                       Object.getPrototypeOf([]),
                       Object.getPrototypeOf(""),
                       Object.getPrototypeOf(Math),
                       Object.getPrototypeOf(new Date()),
                       Object.getPrototypeOf({}),
                       Object.getPrototypeOf(() => {}),
                       Object.getPrototypeOf(function*(){}),
                       "Object.getPrototypeOf(async () => {})",
                       "Object.getPrototypeOf(async function*(){})",
                       ]) {
        // Some syntaxes might not work in all browser versions. But we still want to protect the
        // ones where it does work.
        if (typeof obj === 'string') {
          try {
            obj = eval(obj)
          } catch(ex) {
            continue
          }
        }
        // Don't make it enumerable since adding enumerable properties on Object.prototype
        // will completely break Figma. And we want a breach here to prevent plugins from
        // running, not to prevent Figma from continuing to work
        Object.defineProperty(obj, 'hackedSandbox', {
          value: true,
          configurable: true,
          enumerable: false,
        })
      }
      function swallowErrors(cb) {
        try { return cb() }
        catch (e) { return false }
      }
      if (swallowErrors(() => window) ||
          swallowErrors(() => document) ||
          swallowErrors(() => localStorage)) {
        return "Browser globals accessible"
      }
      // Check if you can use eval or Function to break out of the sandbox
      if (swallowErrors(() => eval('window')) ||
          swallowErrors(() => eval('document')) ||
          swallowErrors(() => eval('localStorage')) ||
          swallowErrors(() => new Function('return window')()) ||
          swallowErrors(() => new Function('return document')()) ||
          swallowErrors(() => new Function('return localStorage')())) {
        return "Browser globals accessible"
      }
      if (figma.showUI.__proto__ !== Function.prototype) {
        return "APIs use unexpected prototype"
      }
      if ([].__proto__ !== Array.prototype) {
        return "Array use unexpected prototype"
      }
      return "ok"
    }
    let result
    try {
      result = doMainThreadSecurityChecks()
    } catch(ex) {
      result = ex + ''
    }
    if (result !== "ok") {
      reportSecurityResults(result)
      figma.closePlugin()
    }
    figma.showUI(${JSON.stringify(iframeSecurityScript)}, { visible: false })
    figma.ui.onmessage = result => {
      reportSecurityResults(result)
      figma.closePlugin()
    }
  `
  localStorageRef && (localStorageRef['figma-extension-guard'] = 'guard')
  let securityCheckResult = ''

  const { runResult } = await executePluginCode({
    allowedDomains: DEFAULT_ALLOWED_ORIGINS,
    apiVersion: '1.0.0',
    capabilities: [],
    checkSyntax: false,
    code: mainThreadSecurityCode,
    command: '',
    disableSilenceConsole: true,
    enablePrivatePluginApi: false,
    enableProposedApi: false,
    errorHandler: (error: string) => {
      securityError = securityError || error || 'unknown error'
    },
    isLocal: true,
    isWidget: false,
    name: 'Security Checker',
    openFileKey: '',
    permissions: PluginPermissions.none(),
    pluginCounter: -1,
    pluginID: '',
    pluginRunID: '',
    pluginVersionID: '',
    queryMode: false,
    securityCheckReporter: (result: string) => {
      securityCheckResult = result
    },
    showLaunchErrors: false,
    showRuntimeErrors: false,
    stats: new PluginApiMetrics(),
    titleIconURL: '',
    triggeredFrom: undefined,
    userID: '',
    vmType,
    editorType: [],
    html: null,
    incrementalSafeApi: false,
    enableNativeJsx: false,
    enableResponsiveSetHierarchyMutations: false,
  })
  await runResult

  const prototypesToCheck = [
    Array.prototype,
    Function.prototype,
    Object.prototype,
    Date.prototype,
    Object.getPrototypeOf(function* () { yield 0 }),
    'Object.getPrototypeOf(async () => {})',
    'Object.getPrototypeOf(async function*(){ yield 0 })',
  ]

  let prototypesHacked = false
  for (let prototypeRef of prototypesToCheck) {
    if (typeof prototypeRef === 'string') {
      try {
        // eslint-disable-next-line no-eval
        prototypeRef = (0, eval)(prototypeRef)
      }
      catch {
        continue
      }
    }
    if (prototypeRef.hackedSandbox) {
      prototypesHacked = true
      delete prototypeRef.hackedSandbox
    }
  }

  if (prototypesHacked) {
    throw new Error('Prototypes not isolated')
  }
  if (securityError !== undefined) {
    throw new Error('Security checks triggered error')
  }
  if (securityCheckResult !== 'ok') {
    throw new Error(securityCheckResult)
  }
}

/**
 * Sets up the VM environment and runs security checks
 */
async function setupVmEnvironment(vmType: any, triggeredFrom?: string) {
  await ensureVmModuleLoaded(vmType)

  // Load plugin instances in parallel
  await Promise.all([
    PluginInstanceManager.getInstanceLoading(getPluginIframeMode({ triggeredFrom: undefined })),
    PluginInstanceManager.getInstanceLoading(getPluginIframeMode({ triggeredFrom })),
  ])

  // Run security checks for the appropriate VM type
  if (vmType === 'realms') {
    if (!realmsSecurityCheckPromise) {
      realmsSecurityCheckPromise = runVmSecurityChecks('realms').catch((error) => {
        trackEventAnalytics('Plugin Sandbox Failure', {
          error: `${error}`,
          vm: 'realms',
        })
        return error
      })
    }
    await realmsSecurityCheckPromise
  }

  if (vmType === 'cppvm') {
    if (!cppvmSecurityCheckPromise) {
      cppvmSecurityCheckPromise = runVmSecurityChecks('cppvm').catch((error) => {
        trackEventAnalytics('Plugin Sandbox Failure', {
          error: `${error}`,
          vm: 'cppvm',
        })
        return error
      })
    }
    await cppvmSecurityCheckPromise
  }
}

/**
 * Custom error class for plugin execution errors that should be displayed to users
 */
class PluginExecutionError extends Error {
  constructor(message: string) {
    super(message)
  }
}
export function initializeGlobalPluginAPI(pluginConfig) {
  const currentState = debugState.getState()
  const canPerformActions = canPerformAction(currentState) && canRunExtensions(currentState)
  const shouldInitialize = isE2ETraffic() || canPerformActions

  if (!shouldInitialize) {
    if (isGlobalPluginActive()) {
      handlePluginError().then(clearPlaybackHandler)
      return
    }
    clearPlaybackHandler()
    return
  }

  setResetGlobalPluginAPI(initializeGlobalPluginAPI)

  try {
    if (isGlobalPluginActive()) {
      return
    }

    if (shouldInitialize) {
      setupGlobalPluginInstance(pluginConfig)
    }
  }
  catch (error) {
    if (isDevEnvironment() && currentState.selectedView.view === 'fullscreen') {
      console.error(error)
    }
  }
}

function setupGlobalPluginInstance(pluginConfig) {
  const vm = new NoOpVm()
  const shutdownActions = [
    () => vm.destroy(),
    () => clearPlaybackHandler,
    () => fullscreenValue.triggerAction('commit'),
  ]

  const executeShutdownActions = () => {
    let lastError
    for (const action of shutdownActions) {
      try {
        action()
      }
      catch (error) {
        lastError = lastError || error
      }
    }
    shutdownActions.length = 0
    if (lastError) {
      throw lastError
    }
  }

  const closePlugin = () => {
    executeShutdownActions()
    Promise.resolve()
  }
  clearPlaybackHandler()

  const defaultOptions = createDefaultPluginOptions()
  createPluginInstance(vm, {
    ...defaultOptions,
    openFileKey: pluginConfig.openFileKey,
    userID: pluginConfig.userID,
    closePlugin,
    addShutdownAction: (action) => {
      if (!shutdownActions.includes(action)) {
        shutdownActions.push(action)
      }
    },
    incrementalSafeApi: true,
    allowIncrementalUnsafeApiCalls: true,
    enableResponsiveSetHierarchyMutations: true,
  })

  setGlobalPluginCloseFunc(closePlugin)
}
export function isCurrentWidgetActive({
  pluginID,
  widgetNodeID,
}) {
  return hasStoredValue()
    && pluginState.currentWidget !== undefined
    && pluginState.currentWidget.pluginID === pluginID
    && pluginState.currentWidget.widgetNodeID === widgetNodeID
}
export async function runPluginWorkflow(runPluginRequest) {
  const pluginRunID = generateRandomID()
  pluginState.currentPluginRunID = pluginRunID
  const stats = new PluginApiMetrics()
  pluginState.stats = stats
  const plugin = runPluginRequest.plugin

  trackEventAnalytics('Plugin Start Initiated', {
    pluginID: plugin.plugin_id,
    trigger: runPluginRequest.triggeredFrom,
    runMode: runPluginRequest.runMode,
    isWidget: runPluginRequest.isWidget,
    command: runPluginRequest.command,
    fileKey: runPluginRequest.openFileKey,
    orgId: getCurrentUserOrgId() ?? null,
    pluginRunID,
    editorType: getFullscreenViewEditorType(),
    ...(hasLocalFileId(plugin)
      ? {
          pluginVersionID: '',
          source: 'development',
          name: '<local plugin>',
        }
      : {
          pluginVersionID: plugin.id,
          source: 'imported',
          name: plugin.name,
        }),
  })

  const { isCancelled } = await stats.markDuration('waitForAllPagesMs', async () =>
    await waitForAllPagesForPlugin(runPluginRequest))
  if (!isCancelled) {
    if (isValidForCooper(runPluginRequest.triggeredFrom)) {
      if (!isDevModeWithInspectPanel(runPluginRequest.plugin))
        throw new Error('Plugin not compatible to run in dev handoff panel. Make sure you have "dev" as an editorType and "inspect" as a capability in your manifest.json.')
      atomStoreManager.set(d4, 'LOADING')
      setSelectedDevModePropertiesPanelTab(IAssertResource.PLUGIN)
    }
    if (isValidForCooperSelectedView(runPluginRequest.triggeredFrom)) {
      if (!isBuzzPlugin(runPluginRequest.plugin))
        throw new Error('Plugin not compatible to run in buzz panel. Make sure you have "buzz" as an editorType in your manifest.json.')
      atomStoreManager.set(d4, 'LOADING')
      atomStoreManager.set(assetCategoryAtom, AssetCategoryEnum.PLUGINS)
    }
    runPluginRequest.isWidget || runPluginRequest.ignoreForRunLastPlugin || C3(runPluginRequest)
    setPluginData(runPluginRequest.plugin)
    setPluginTriggeredFrom(runPluginRequest.triggeredFrom)
    runPluginRequest.runMode === 'default' && isValidForCooper(runPluginRequest.triggeredFrom) && (runPluginRequest.runMode = 'inspect')
    setFAtom(runPluginRequest.runMode)
    try {
      if (hasLocalFileId(runPluginRequest.plugin)) {
        try {
          const pluginCode = await loadPluginCode(runPluginRequest, stats, runPluginRequest.plugin)
          await executeLocalPlugin({
            localPlugin: runPluginRequest.plugin,
            runPluginArgs: runPluginRequest,
            stats,
            pluginRunID,
            code: pluginCode,
          })
        }
        catch (error) {
          yA(error)
          showPluginError(error, runPluginRequest.isWidget)
        }
      }
      else {
        try {
          const pluginCode = await loadPluginCode(runPluginRequest, stats, runPluginRequest.plugin)
          await executeRemotePlugin({
            pluginVersion: runPluginRequest.plugin,
            runPluginArgs: runPluginRequest,
            stats,
            pluginRunID,
            code: pluginCode,
          })
        }
        catch (error) {
          if (!(error instanceof PluginExecutionError)) {
            reportError(ServiceCategories.EXTENSIBILITY, error)
          }
          showPluginError(error, runPluginRequest.isWidget)
        }
      }
    }
    finally {
      setPluginData(null)
      setPluginTriggeredFrom(null)
      setFAtom(null)
    }
  }
}

async function executeRemotePlugin({
  pluginVersion,
  runPluginArgs,
  stats,
  pluginRunID,
  code,
}) {
  const {
    command,
    queryMode,
    triggeredFrom,
    openFileKey,
    deferRunEvent,
    parameterValues,
    isWidget,
    widgetAction,
    forcePluginVersionId,
  } = runPluginArgs

  const currentUserId = handleSelectedView()
  if (!currentUserId) {
    throw new PluginExecutionError(runPluginArgs.isWidget
      ? getI18nString('plugins.cannot_run_widget_logged_out')
      : getI18nString('plugins.cannot_run_plugin_logged_out'))
  }

  const updatedPluginVersion = {
    ...pluginVersion,
    id: forcePluginVersionId || pluginVersion.id,
  }

  if (pluginState.currentPluginRunID !== pluginRunID) {
    return
  }

  const editorType = debugState.getState().selectedView.editorType
  const recentsData = {
    storeInRecentsKey: mapEditorTypeTo(editorType),
    id: updatedPluginVersion.plugin_id,
    version: updatedPluginVersion.version,
    currentUserId: handleSelectedView(),
  }

  if (isWidget) {
    debugState.dispatch(addWidgetToRecentsThunk(recentsData))
  }
  else {
    debugState.dispatch(addPluginToRecentsThunk(recentsData))
  }

  const publishedPlugin = debugState.getState().publishedPlugins[updatedPluginVersion.plugin_id]
  const isMonetized = hasMonetizedResourceMetadata(publishedPlugin)

  const getPaidStatus = (plugin) => {
    const hasMonetization = hasMonetizedResourceMetadata(plugin)
    const payment = plugin?.community_resource_payment
    if (hasMonetization && payment) {
      return payment.status === SubscriptionStatus.TRIALING ? 'trial' : 'paid'
    }
    return 'none'
  }

  const analyticsData = {
    pluginID: updatedPluginVersion.plugin_id,
    pluginVersionID: updatedPluginVersion.id,
    trigger: triggeredFrom,
    source: 'imported',
    command,
    name: updatedPluginVersion.name,
    fileKey: openFileKey,
    pluginRunID,
    queryMode,
    deferRunEvent: !!deferRunEvent,
    runWithParameters: !!parameterValues,
    manifest: JSON.stringify(updatedPluginVersion.manifest),
    productType: mapEditorTypeToStringWithObfuscated(editorType),
    isWidget,
    isMonetized,
    paidStatus: getPaidStatus(publishedPlugin),
    widgetAction: widgetAction ?? null,
    isReadOnly: debugState.getState().mirror.appModel.isReadOnly,
    editorType: getFullscreenViewEditorType(),
    incrementalMode: updatedPluginVersion.manifest.documentAccess === 'dynamic-page',
    isVsCode: isVsCodeEnvironment(),
    orgId: getCurrentUserOrgId() ?? null,
  }

  trackEventAnalytics('Plugin Start', analyticsData, isWidget ? { forwardToDatadog: true } : {})

  return executePluginWithOptions(createPluginOptions({
    runPluginArgs,
    manifest: updatedPluginVersion.manifest,
    stats,
    isLocal: false,
    customOverrides: {
      code,
      name: updatedPluginVersion.name,
      openFileKey,
      permissions: PluginPermissions.forInstalledPlugin(updatedPluginVersion),
      pluginID: updatedPluginVersion.plugin_id,
      pluginRunID,
      pluginVersionID: updatedPluginVersion.id,
      titleIconURL: updatedPluginVersion.redirect_icon_url,
      userID: currentUserId,
      enablePrivatePluginApi: !!(updatedPluginVersion.manifest.enablePrivatePluginApi && updatedPluginVersion.is_private),
    },
  }))
}
function showPluginError(error, isWidget) {
  const errorMessage = (error instanceof PluginExecutionError ? error?.message : undefined)
    ?? (isWidget ? getI18nString('plugins.error_loading_environment_widget') : getI18nString('plugins.error_loading_environment_plugin'))
  showVisualBell(errorMessage)
}
async function loadPluginCode(runPluginArgs, stats, plugin) {
  const isLocalPlugin = hasLocalFileId(plugin)
  try {
    fullscreenValue.dispatch(VisualBellActions.enqueue({
      message: getI18nString('plugins.loading_plugin', {
        pluginName: plugin.name,
      }),
      icon: VisualBellIcon.SPINNER,
      type: 'loading-plugin',
      delay: 200,
      timeoutOverride: Infinity,
    }))

    const vmType = isLocalPlugin ? getPluginDevMode() : 'cppvm'
    const [pluginCode] = await Promise.all([
      (async () => {
        if (isLocalPlugin) {
          return plugin.testCode ? plugin.testCode : loadLocalPluginSource(plugin.localFileId)
        }
        else {
          return await stats.markDuration('pluginCodeDownloadedMs', async () =>
            await setupPluginCodeCache.getAndCache(plugin, getCurrentUserOrgId()))
        }
      })(),
      (async () => {
        await stats.markDuration('loadSandboxAndRunSecurityChecksMs', async () => {
          try {
            await setupVmEnvironment(vmType, runPluginArgs.triggeredFrom)
          }
          catch {
            const errorMessage = runPluginArgs.isWidget
              ? getI18nString('plugins.error_loading_environment_widget')
              : getI18nString('plugins.error_loading_environment_plugin')
            throw new PluginExecutionError(errorMessage)
          }
        })
      })(),
    ])

    if (!pluginCode) {
      const errorMessage = runPluginArgs.isWidget
        ? getI18nString('plugins.no_code_found_for_widget')
        : getI18nString('plugins.no_code_found_for_plugin')
      throw new PluginExecutionError(errorMessage)
    }
    return pluginCode
  }
  finally {
    fullscreenValue.dispatch(VisualBellActions.dequeue({
      matchType: 'loading-plugin',
    }))
  }
}
async function executeLocalPlugin({
  localPlugin,
  runPluginArgs,
  pluginRunID,
  stats,
  code,
}) {
  const {
    command,
    isWidget,
    widgetAction,
    queryMode,
    triggeredFrom,
    openFileKey,
    deferRunEvent,
    parameterValues,
  } = runPluginArgs

  const currentUserId = handleSelectedView()
  if (!currentUserId) {
    throw new PluginExecutionError(isWidget
      ? getI18nString('plugins.cannot_run_widget_logged_out')
      : getI18nString('plugins.cannot_run_plugin_logged_out'))
  }

  const editorType = debugState.getState().selectedView.editorType

  if (localPlugin.manifest) {
    const analyticsData = {
      pluginID: localPlugin.manifest.id || '',
      pluginVersionID: '',
      trigger: triggeredFrom,
      source: 'development',
      command,
      name: '<local plugin>',
      fileKey: openFileKey,
      pluginRunID,
      queryMode,
      deferRunEvent: !!deferRunEvent,
      runWithParameters: !!parameterValues,
      manifest: JSON.stringify(localPlugin.manifest),
      productType: mapEditorTypeToStringWithObfuscated(editorType),
      isWidget,
      widgetAction: widgetAction ?? null,
      isReadOnly: debugState.getState().mirror.appModel.isReadOnly,
      editorType: getFullscreenViewEditorType(),
      incrementalMode: localPlugin.manifest.documentAccess === 'dynamic-page',
      isVsCode: isVsCodeEnvironment(),
      orgId: getCurrentUserOrgId() ?? null,
    }
    trackEventAnalytics('Plugin Start', analyticsData, isWidget ? { forwardToDatadog: true } : {})
  }

  const recentsData = {
    storeInRecentsKey: mapEditorTypeTo(editorType),
    id: String(localPlugin.localFileId),
    isDevelopment: true,
    version: '',
    currentUserId: handleSelectedView(),
  }

  if (isWidget) {
    debugState.dispatch(addWidgetToRecentsThunk(recentsData))
  }
  else {
    debugState.dispatch(addPluginToRecentsThunk(recentsData))
  }

  try {
    const manifest = localPlugin.testCode
      ? localPlugin.manifest
      : await loadPluginManifest(localPlugin.localFileId, {
          resourceType: isWidget ? 'widget' : 'plugin',
          ignoreMissingEditorType: true,
          isPublishing: false,
        })

    const pluginOptions = createPluginOptions({
      runPluginArgs,
      manifest,
      stats,
      isLocal: true,
      customOverrides: {
        code,
        openFileKey,
        permissions: PluginPermissions.forLocalPlugin(localPlugin),
        enablePrivatePluginApi: !!manifest.enablePrivatePluginApi,
        pluginID: manifest.id || '',
        pluginRunID,
        pluginVersionID: '',
        titleIconURL: '',
        userID: currentUserId,
      },
    })
    await executePluginWithOptions(pluginOptions)
  }
  catch (error) {
    yA(error)
    dequeuePluginStatus({
      shouldShowVisualBell: true,
    })
    const errorMessage = (error instanceof PluginExecutionError ? error?.message : undefined)
      ?? (isWidget ? getI18nString('plugins.error_occured_while_running_widget') : getI18nString('plugins.error_occured_while_running_plugin'))
    showVisualBell(errorMessage)
  }
}
export function runLastPlugin({
  newTriggeredFrom = 'runlast',
} = {}) {
  const lastPluginArgs = SH()
  if (lastPluginArgs && isValidForFullscreenView(lastPluginArgs)) {
    if (newTriggeredFrom) {
      lastPluginArgs.triggeredFrom = newTriggeredFrom
    }
    PluginManager.instance.enqueue({
      mode: 'run-forever',
      runPluginArgs: lastPluginArgs,
    })
  }
}
export function executePluginWithOptions(pluginOptions) {
  if (pluginState.currentPluginRunID !== pluginOptions.pluginRunID) {
    return Promise.resolve()
  }

  getPluginApiDebugCopy() && logger.debug('[Plugin API]', `Plugin run ${pluginOptions.pluginRunID} started`, pluginOptions)

  const stats = pluginOptions.stats
  stats.markTime('timeToRunPluginCodeStartMs')
  const pluginType = pluginOptions.isWidget ? 'widget' : 'plugin'
  clearVisualBell()

  const counterValue = getCounter()
  setStoredValue(counterValue)
  incrementCounter()

  const pluginPromise = new Promise<void>(async (resolve, reject) => {
    await closeCurrentPlugin({
      overriddenBy: pluginOptions.triggeredFrom,
    })
    if (getStoredValue() !== counterValue) {
      resolve()
      return
    }

    let closeFunction = () => {
      resolve()
      Promise.resolve()
    }
    setPluginCloseFunc(closeFunction)

    try {
      if (pluginOptions.isWidget) {
        try {
          const { widgetNodeID } = JSON.parse(pluginOptions.command)
          pluginState.currentWidget = {
            widgetNodeID,
            pluginID: pluginOptions.pluginID,
          }
        }
        catch {
          pluginState.currentWidget = undefined
        }
      }
      else {
        pluginState.currentWidget = undefined
      }
    }
    catch {
      pluginState.currentWidget = undefined
    }

    try {
      if (isInteractionPathCheck()) {
        await setupVmEnvironment('cppvm', pluginOptions?.triggeredFrom)
      }

      if (desktopAPIInstance && hasSpecialCapability(pluginOptions.permissions.permissions)) {
        pluginState.setMediaEnabled = true
        if (pluginOptions.permissions.trustedPluginOrigin && desktopAPIInstance) {
          pluginState.allowedPluginOrigin = pluginOptions.permissions.trustedPluginOrigin
          await desktopAPIInstance.addAllowedPluginOrigin(pluginOptions.permissions.trustedPluginOrigin)
        }
      }

      await delay(0)

      if (getStoredValue() !== counterValue) {
        resolve()
        return
      }

      const { runResult, closePlugin } = await executePluginCode({
        ...pluginOptions,
        pluginCounter: counterValue,
        html: null,
      })

      if (getStoredValue() === counterValue) {
        setPluginCloseFunc(closePlugin, {
          ignorePreviousCloseFunc: closeFunction,
        })
        closeFunction = closePlugin
        const result = await runResult
        if (result) {
          fullscreenValue.dispatch(VisualBellActions.enqueue({
            type: 'plugins-supplied-message',
            message: result,
          }))
        }
      }
      resolve()
    }
    catch (error) {
      reject(error)
    }
    finally {
      if (counterValue === getStoredValue()) {
        setPluginCloseFunc(null, {
          ignorePreviousCloseFunc: closeFunction,
        })
        resetPluginState()
      }
    }
  }).catch((error) => {
    if (!pluginOptions.noConsoleError) {
      yA(error)
    }

    if (pluginOptions.showLaunchErrors) {
      const errorMessage = (error instanceof PluginExecutionError ? error?.message : undefined)
        ?? (pluginOptions.isWidget ? getI18nString('plugins.error_occured_while_running_widget') : getI18nString('plugins.error_occured_while_running_plugin'))
      showVisualBell(errorMessage)
    }
    else {
      throw error
    }
  })

  const completionHandler = () => {
    const pluginEndEventData = {
      pluginID: pluginOptions.pluginID,
      pluginVersionID: pluginOptions.pluginVersionID,
      pluginRunID: pluginOptions.pluginRunID,
      apiUsage: stats.callCountsToJSON(),
      perfMetrics: stats.perfMetricsToJSON(),
      ranWithParameters: stats.ranWithParameters(),
      parameterCount: stats.parameterCount(),
      isWidget: pluginOptions.isWidget,
      trigger: pluginOptions.triggeredFrom,
      stackInvariants: stats.stackInvariantFieldsToJSON(),
      incrementalMode: pluginOptions.incrementalSafeApi,
      numPagesLoaded: stats.getNumPagesLoaded(),
      ...stats.getTimingMarks(),
      totalValidationDuration: stats.totalValidationDuration(),
      validationCount: stats.validationCount(),
      clientStorageUsageDelta: stats.clientStorageUsageDelta(),
      totalClientStorageUsage: stats.totalClientStorageUsage(),
      jsvmCppFromManifest: !!getFeatureFlags().ext_jsvm_cpp_upgrade,
    }

    const setPluginDataStats = {
      pluginDataHistogram: stats.pluginDataHistogramToJSON(),
      pluginDataTotalSetSize: stats.pluginDataTotalSetSize(),
      sharedPluginDataTotalSetSize: stats.sharedPluginDataTotalSetSize(),
      pluginDataMaximumKeyCountExceeded: stats.pluginDataMaximumKeyCountExceeded(),
    }

    getPluginApiDebugCopy() && logger.debug('[Plugin API]', `Plugin run ${pluginOptions.pluginRunID} finished`, {
      pluginEndEventData,
      setPluginDataStats,
    })

    trackEventAnalytics('Plugin End', {
      ...pluginEndEventData,
      ...setPluginDataStats,
    }, {
      forwardToDatadog: true,
    })

    if (pluginOptions.pluginID && stats.hasResizedNodeWithMissingFont()) {
      trackEventAnalytics('Plugin resized node with missing font', {
        pluginID: pluginOptions.pluginID,
      })
      console.warn(`This ${pluginType} resized a node with missing fonts. Text layout for node will not be applied.`)
    }
  }

  pluginPromise.then(completionHandler, completionHandler)
  return pluginPromise
}
function createPluginOptions({
  manifest,
  isLocal,
  stats,
  runPluginArgs,
  customOverrides,
}) {
  return {
    name: manifest.name,
    allowedDomains: getAllowedDomains(manifest, isLocal),
    apiVersion: manifest.api,
    capabilities: manifest.capabilities ?? [],
    stats,
    checkSyntax: isLocal,
    isLocal,
    disableSilenceConsole: isLocal,
    enableProposedApi: isLocal && !!manifest.enableProposedApi,
    showLaunchErrors: !isLocal,
    showRuntimeErrors: isLocal,
    vmType: isLocal ? getPluginDevMode() : 'cppvm',
    ...customOverrides,
    command: runPluginArgs.command,
    queryMode: runPluginArgs.queryMode,
    triggeredFrom: runPluginArgs.triggeredFrom,
    openFileKey: runPluginArgs.openFileKey,
    deferRunEvent: runPluginArgs.deferRunEvent,
    parameterValues: runPluginArgs.parameterValues,
    isWidget: runPluginArgs.isWidget,
    editorType: runPluginArgs.plugin.manifest.editorType ?? [],
    incrementalSafeApi: manifest.documentAccess === 'dynamic-page',
    enableNativeJsx: !!getFeatureFlags().ext_full_jsx,
    enableResponsiveSetHierarchyMutations: true,
  }
}

function getAllowedDomains(manifest, isLocal) {
  const { networkAccess } = manifest
  if (!networkAccess)
    return DEFAULT_ALLOWED_ORIGINS

  if (isLocal && networkAccess.devAllowedDomains) {
    if (networkAccess.devAllowedDomains.includes('*') || networkAccess.allowedDomains.includes('none')) {
      return networkAccess.devAllowedDomains
    }
    return Array.from(new Set([...networkAccess.devAllowedDomains, ...networkAccess.allowedDomains]))
  }

  return networkAccess.allowedDomains
}
export const hM = hasStoredValue
export const mK = isCurrentWidgetActive
export const s2 = initializeGlobalPluginAPI
export const A9 = runLastPlugin
export const bT = runPluginWorkflow
export const E9 = executePluginWithOptions
export {hasStoredValue}
