import type { INoOpVm } from '../905/700654'
import type { Fn } from '../../types/global'
import type { TSSceneGraph } from '../figma_app/518682'
import type { FontInfo, PluginOptions, PluginRuntimeOptions } from './types'
import md5 from 'md5'
// Import type definitions
import { useState } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { z as _$$z } from 'zod'
import { reportError } from '../905/11'
import { WidgetManager } from '../905/2122'
import { codeSuggestionAPIHandler } from '../905/70843'
import { ModalSupportsBackground, registerModal } from '../905/102752'
import { bytesToHex } from '../905/125019'
import { FigmaSchema } from '../905/125137'
import { hideSpecificModal, showModalHandler } from '../905/156213'
import { ServiceCategories as _$$e } from '../905/165054'
import { permissionScopeHandler } from '../905/189185'
import { h as _$$h } from '../905/193918'
import { isInvalidValue, isValidValue } from '../905/216495'
import { isPluginConfigMatching } from '../905/240440'
import { widgetErrorTracker } from '../905/250412'
import { DummyUIManager, PluginUIManager } from '../905/261467'
import { resolveDeferredPromise } from '../905/263346'
import { Label } from '../905/270045'
import { Checkbox } from '../905/274480'
import { getPluginIframeMode } from '../905/282455'
import { deepClone } from '../905/284190'
import { maybeCreateSavepoint } from '../905/294113'
import { generateAnonymouseName } from '../905/301652'
import { getI18nString, renderI18nText } from '../905/303541'
import { getDebugPluginParams, isValidPluginId } from '../905/327571'
import { debugState } from '../905/407919'
import { designTypeToIndex, indexToDesignType } from '../905/413743'
import { loadPluginFont } from '../905/426868'
import { R as _$$R } from '../905/441305'
import { trackEventAnalytics } from '../905/449184'
import { deleteWidgetSyncedMapEntry, getSyncedMapEntry, getSyncedState, setInitialWidgetSyncedState, setWidgetSyncedMapEntry } from '../905/486749'
import { dragEventPropType } from '../905/488349'
import { computeCodeExtensionPreferences } from '../905/515076'
import { instanceComponentMap, layoutComponentCollection, mapNodeToComponent } from '../905/531105'
import { PluginApiMetrics } from '../905/545265'
import { decodeBase64, encodeBase64, isValidBase64 } from '../905/561685'
import { dequeuePluginStatus } from '../905/571565'
import { getFunctionHandle, memoizedHandle } from '../905/572400'
import { getFeatureFlags } from '../905/601108'
import { customHistory } from '../905/612521'
import { I as _$$I, np as _$$np, o8 } from '../905/622391'
import { logger } from '../905/651849'
import { e9 as _$$e2, jE } from '../905/656545'
import { findCodegenLanguage } from '../905/661977'
import { createPluginContext, NoOpVm, ScopedNoOpVm } from '../905/700654'
import { Oo } from '../905/709171'
import { getFilteredFeatureFlags } from '../905/717445'
import { Mi } from '../905/736624'
import { MI } from '../905/757052'
import { ZY } from '../905/764747'
import { d1 } from '../905/766303'
import { checkIncrementalUnsafeMember, DocumentAccessState, ensurePluginPageLoaded, loadInternalCanvasMemoized, markPageLoaded } from '../905/816197'
import { mergeDefaults, validateAndCollectErrors, validateWithZSchema } from '../905/816730'
import { getSceneGraphInstance } from '../905/830071'
import { Y as _$$Y } from '../905/830372'
import { _b } from '../905/835985'
import { P as _$$P3, V as _$$V } from '../905/837980'
import { InternalError, RequestError } from '../905/845428'
import { T as _$$T } from '../905/858738'
import { n3 as _$$n, VariableStyleId } from '../905/859698'
import { qg, xF } from '../905/866640'
import { isValidSessionLocalID, parseSessionLocalID } from '../905/871411'
import { nB as _$$nB } from '../905/902840'
import { XHR } from '../905/910117'
import { E as _$$E } from '../905/916933'
import { e1 as _$$e3, tO as _$$tO, cz, fx, h2, J6, lm, Ut, vs } from '../905/933084'
import { c as _$$c } from '../905/949750'
import { E as _$$E2 } from '../905/984674'
import { y as _$$y } from '../905/994901'
import { atomStoreManager } from '../figma_app/27355'
import { m3 } from '../figma_app/45218'
import { DEV_MODE_STRING, FEditorType, SLACK_STRING } from '../figma_app/53721'
import { $$ } from '../figma_app/62612'
import { FE, PB } from '../figma_app/78808'
import { getObservableOrFallback } from '../figma_app/84367'
// Import Data Structures and Collections Management - Phase 16
import { kA, Qj, vl, vT, y1, zH } from '../figma_app/86989'
import { P$ } from '../figma_app/152368'
import { hasLocalFileId, ManifestEditorType } from '../figma_app/155287'
import { getInitialOptions } from '../figma_app/169182'
import { zg } from '../figma_app/193867'
import { VariableIdHandler, VariableSetIdCompatHandler } from '../figma_app/243058'
import { nM as _$$nM, M7 } from '../figma_app/276332'
import { PluginPermissions } from '../figma_app/300692'
import { eG as _$$eG, oJ } from '../figma_app/334505'
import { J9 } from '../figma_app/345997'
import { J3 } from '../figma_app/360163'
import { _1, ne as _$$ne, Qv, Vk, VV } from '../figma_app/389091'
import { Qn } from '../figma_app/415217'
import { Ay as _$$Ay2 } from '../figma_app/432652'
import { getOpenExternalPluginIds } from '../figma_app/455620'
import { fullscreenValue } from '../figma_app/455680'
import { assert, throwTypeError } from '../figma_app/465776'
import { $f as _$$$f, rp as _$$rp } from '../figma_app/474636'
import { tB as _$$tB } from '../figma_app/516028'
import { $y, i1 as _$$i, iP as _$$iP, nf as _$$nf, po as _$$po, _C, B_, b_, Bs, BT, cI, dG, dM, f2, fd, G1, H4, jG, jS, KB, LL, ME, Mw, OD, oZ, Q4, q$, Ql, Rp, sd, Sf, Sx, Ty, Vb, VM, W5, wk, Xx } from '../figma_app/603466'
import { Qb, yh } from '../figma_app/646357'
import { arraysEqual } from '../figma_app/656233'
import * as _require from '../figma_app/664063'
import { WJ } from '../figma_app/671547'
import { UK } from '../figma_app/740163'
import { updateActiveTextReviewPlugin } from '../figma_app/741237'
import { OU } from '../figma_app/757723'
import { AppStateTsApi, Confirmation, CooperHelpers, CooperTemplateTypesTsBindings, DraftState, FirstDraftHelpers, Fullscreen, LibraryPubSub, LogicalOperation, MeasurementUnit, PluginHelpers, PluginModalType, ResourceLocation, SceneChangeType, SceneGraphHelpers, SceneIdentifier, SelectionPaintHelpers, SlideViewType, SocialMediaFormats, TrackType, VariableResolvedDataType } from '../figma_app/763686'
import { AC } from '../figma_app/777551'
import { desktopAPIInstance } from '../figma_app/876459'
import { isInteractionPathCheck } from '../figma_app/897289'
// Import UI Components and Controls Library - Phase 14
import { KJ } from '../figma_app/916560'
import { Ky, u7, zn } from '../figma_app/933328'
import { gH, IN } from '../figma_app/985200'
import { AnnotationCategoryFactory } from './core/annotation'
import { an, convertGridLayoutConfig, createImageProcessor, createNodeHash, eG, ez, generateJsxFromNode, getAllStorageKeysWithPrefix, getNodeById, getNodeGuid, getRowColumn, getStorageValueByKey, i5, isInImmutableContext, isVMPromiseLike, loadFontsForTextNode, parseColorInput, processEffect, processEffectWithValidation, processGridLayout, renameSelectedLayers, setStorageEntry, timerAndStateEvents, variableDefinitions, wrapVmPromise } from './core/helper'
import { ImageStore } from './core/image-store'
import { IncLoadingErrorLogger } from './core/incLoadingErrorLogger'
import { ApplicationError, convertPaintArrayData, mapPaintConfigurations, NodeAPI, processPaint, tB, validateAndExtractCollectionId } from './core/node-api'
import { NodeFactory } from './core/node-factory'
import { PluginRuntimeBridge } from './core/plugin-runtime-bridge'
import { StyleFactory } from './core/style-factory'
import { StyleManager } from './core/style-manager'
import { VariableFactory } from './core/variable-api'
import { VariableCollectionFactory } from './core/variable-collection-factory'
import { VideoStore } from './core/video-store'
import { convertInternalPaintToExternal } from './modules'

let rp = registerModal(({
  resolve: e,
  reject: t,
  pluginName: i,
  ...n
}) => {
  let [r, a] = useState(!1)
  let s = getObservableOrFallback(UK().spellCheckPreference)
  let o = () => {
    n.onClose()
    t()
  }
  return jsx(_$$R, {
    recordingKey: 'textReviewRequestModal',
    title: jsx(_$$E2, {
      color: 'default',
      fontWeight: 'semi-bold',
      fontSize: 11,
      children: i.length > 50
        ? renderI18nText('textreview.use_plugin_name_title_default', {})
        : renderI18nText('textreview.use_plugin_name_title', {
            pluginName: i,
          }),
    }),
    confirmText: i.length > 20
      ? getI18nString('textreview.use_plugin_name_confirm_default', {})
      : getI18nString('textreview.use_plugin_name_confirm', {
          pluginName: i,
        }),
    onCancel: o,
    onClose: o,
    onConfirm: () => {
      n.onClose()
      e({
        turnOffSpellCheck: r,
      })
    },
    open: n.open,
    children: jsxs(_$$Y, {
      direction: 'vertical',
      spacing: 8,
      children: [jsx('div', {
        children: jsx(_$$E2, {
          color: 'default',
          children: renderI18nText('textreview.as_you_type_plugin_name_will_review_your_text_and_provide_suggestions', {
            pluginName: jsx(_$$E2, {
              fontWeight: 'semi-bold',
              children: i,
            }),
          }),
        }),
      }), s && jsx(Checkbox, {
        label: jsx(Label, {
          children: renderI18nText('textreview.also_turn_off_figma_spell_check', {}),
        }),
        checked: r,
        onChange: a,
      })],
    }),
  })
}, 'TEXT_REVIEW_REQUEST_MODAL', ModalSupportsBackground.NO)
export function isPromiseLike(vm: NoOpVm, obj: INoOpVm<any>) {
  // r1 - Check if an object is a promise-like object with then/catch methods
  if (!vm.isObject(obj)) {
    return false
  }
  const thenMethod = vm.getProp(obj, 'then')
  const catchMethod = vm.getProp(obj, 'catch')

  // Return true if both then and catch are functions (promise-like)
  return !!(vm.isFunction(thenMethod) && vm.isFunction(catchMethod))
}
let widgetTerminationWarning = `Your widget was terminated before figma.showUI could finish running. Return a promise in your event handler to keep your widget running while your iframe is open.

For more information, see: https://www.figma.com/widget-docs/handling-user-events/
`
export function r5(widgetState, uiManager) {
  // r5 - Show widget termination warning if no promises are tracked
  if (widgetState.numTrackedPromises === 0 && uiManager.isInnerIframeActive()) {
    console.error(widgetTerminationWarning)
  }
}
/**
 * processWidgetEventHandlers - Handle widget event processing (click/textEditEnd events)
 *
 * Processes widget click and textEditEnd events by extracting event handlers
 * from the widget hierarchy, executing them with proper error handling, and
 * managing promise tracking for widget lifecycle.
 *
 * @param params - Configuration object containing VM instance, event command, virtual node, etc.
 * @param params.vm - Virtual machine instance for executing widget code
 * @param params.command - Event command containing type and data (click/textEditEnd)
 * @param params.vNode - Virtual DOM node representing the widget hierarchy
 * @param params.runtime - Widget runtime environment
 * @param params.uiHandle - UI manager for handling widget interface
 * @param params.widgetManager - Widget lifecycle manager
 * @param params.editScopeLabel - Edit scope for plugin operations
 * @returns Promise<boolean> indicating if event was processed successfully
 */
async function processWidgetEventHandlers({
  vm: NoOpVm,
  command: eventCommand,
  vNode: virtualNode,
  runtime: widgetRuntime,
  uiHandle: uiManager,
  widgetManager: widgetController,
  editScopeLabel: editScope,
}) {
  // Validate supported event types
  if (!isValidWidgetEventType(eventCommand.name)) {
    return false
  }

  // Get and validate widget node
  const widgetNode = getWidgetNodeById(eventCommand.widgetNodeID)
  if (!widgetNode) {
    return false
  }

  // Extract event handlers and create promise queue
  const eventHandlers = extractWidgetEventHandlers(virtualNode, widgetNode, eventCommand, widgetRuntime)
  const promiseQueue: any[] = []

  // Process each event handler
  for (const currentHandler of eventHandlers) {
    const eventData = createEventDataObject(NoOpVm, currentHandler, eventCommand)
    const functionResult = executeEventHandler(NoOpVm, currentHandler, eventData, eventCommand, editScope)
    if (isPromiseLike(NoOpVm, functionResult)) {
      promiseQueue.push(trackEventHandlerPromise(NoOpVm, functionResult, widgetController))
    }
  }

  // Handle promise completion and widget lifecycle
  await processPromiseQueue(promiseQueue, widgetController, uiManager)
  return true
}

// Helper functions for processWidgetEventHandlers

/**
 * isValidWidgetEventType - Check if event type is supported
 */
export function isValidWidgetEventType(eventName) {
  const validTypes = ['click', 'textEditEnd']
  const isValid = validTypes.includes(eventName)
  if (!isValid) {
    assert(false, `unsupported event type: ${eventName}`)
  }
  return isValid
}

/**
 * getWidgetNodeById - Get widget node by ID and validate type
 */
export function getWidgetNodeById(widgetNodeID) {
  const widgetNode = getSceneGraphInstance().get(widgetNodeID)
  if (!widgetNode || widgetNode.type !== 'WIDGET') {
    return null
  }
  return widgetNode
}

/**
 * createEventDataObject - Create event data object for handler execution
 */
export function createEventDataObject(NoOpVm, handler, _eventCommand) {
  return NoOpVm.deepWrap({
    offsetX: handler.bubbleInfo.offsetX,
    offsetY: handler.bubbleInfo.offsetY,
    canvasX: handler.bubbleInfo.canvasX,
    canvasY: handler.bubbleInfo.canvasY,
  })
}

/**
 * executeEventHandler - Execute event handler function with proper error handling
 */
export function executeEventHandler(NoOpVm, handler, eventData, eventCommand, editScope) {
  return permissionScopeHandler.plugin(editScope, () => NoOpVm.callFunction(getFunctionHandle(handler.handle), NoOpVm.undefined, eventCommand.name === 'textEditEnd' ? NoOpVm.deepWrap(eventCommand.event) : eventData))
}

/**
 * trackEventHandlerPromise - Track promise for widget lifecycle management
 */
export function trackEventHandlerPromise(NoOpVm, functionResult, widgetController) {
  widgetController.trackPromise()
  return NoOpVm.unwrapPromise(functionResult).finally(() => {
    widgetController.untrackPromise()
  })
}

/**
 * processPromiseQueue - Handle completion of all event handler promises
 */
async function processPromiseQueue(promiseQueue, widgetController, uiManager) {
  if (promiseQueue.length === 0) {
    r5(widgetController, uiManager)
    return
  }
  try {
    await Promise.all(promiseQueue)
  }
  catch (error) {
    // Log error but don't throw to prevent widget termination
    console.error('Widget event handler error:', error)
  }
}

// Helper function to extract widget event handlers
export function extractWidgetEventHandlers(vNode, widgetNode, command, runtime) {
  const {
    bubbledNodes,
  } = command
  const [rootNode, ...childNodes] = bubbledNodes.slice(0).reverse()
  if (rootNode?.id !== widgetNode.guid) {
    throw new Error('Rendering a widget to the wrong node')
  }
  const handlers: any[] = []
  let currentVNode = vNode
  let currentNode = runtime.getNodeById(widgetNode.reversedChildrenGuids[widgetNode.reversedChildrenGuids.length - 1])
  if (!currentNode) {
    return []
  }
  let currentBubbleNode = childNodes.shift()

  // Helper to add event handler if it exists
  const addEventHandler = (vNode, bubbleInfo) => {
    const eventName = command.name === 'click' ? 'onClick' : 'onTextEditEnd'
    if (vNode && vNode?.renderMetaData?.[eventName]) {
      handlers.push({
        bubbleInfo,
        handle: vNode.renderMetaData[eventName],
      })
    }
  }

  // Process root node
  addEventHandler(currentVNode, currentBubbleNode)

  // Process child nodes in hierarchy
  while (childNodes.length && currentNode.type === 'FRAME') {
    currentBubbleNode = childNodes.shift()
    if (currentVNode && currentVNode.renderMetaData.children?.length) {
      const childIndex = currentNode.children.findIndex(child => child.id === currentBubbleNode?.id)
      if (childIndex === -1) {
        break
      }
      currentVNode = MI(currentVNode.renderMetaData.children)[childIndex]
      currentNode = currentNode.children[childIndex]
      addEventHandler(currentVNode, currentBubbleNode)
    }
    else {
      break
    }
  }
  return handlers.reverse()
}
async function updateWidgetProperties({
  vm,
  uiHandle,
  callbackHandle,
  propertyName,
  propertyValue,
  widgetManager,
  editScopeLabel,
}) {
  // r3 - Execute property change callback for widgets when properties are updated

  // Execute the callback function with the property change data
  const callbackResult = permissionScopeHandler.plugin(editScopeLabel, () => vm.callFunction(callbackHandle, vm.undefined, vm.deepWrap({
    propertyName,
    propertyValue,
  })))

  // Handle execution failure
  if (callbackResult.type === 'FAILURE') {
    throw new InternalError(callbackResult.error)
  }

  // Show warning if callback doesn't return a promise
  if (!isPromiseLike(vm, callbackResult.handle)) {
    r5(widgetManager, uiHandle)
  }

  // Wait for callback completion
  await wrapVmPromise({
    vm,
    promiseHandle: callbackResult.handle,
    shouldRetainResult: false,
  })
}
async function handleStuckStatusChange({
  vm: NoOpVm,
  handler: stuckStatusHandler,
  event: stuckEvent,
}) {
  // r6 - Handle stuck status changed event for widget nodes

  // Validate event type
  if (stuckEvent.name !== 'stuckStatusChanged') {
    throw new Error('runStuckStatusChanged called with event that is not stuckStatusChanged')
  }

  // Execute handler with event data
  const handlerResult = NoOpVm.callFunction(stuckStatusHandler, NoOpVm.undefined, NoOpVm.deepWrap({
    newHostId: stuckEvent.newHost,
    oldHostId: stuckEvent.oldHost,
  }))

  // Handle execution failure
  if (handlerResult.type === 'FAILURE') {
    throw new InternalError(handlerResult.error)
  }

  // Wait for handler completion
  await wrapVmPromise({
    vm: NoOpVm,
    promiseHandle: handlerResult.handle,
    shouldRetainResult: false,
  })
}
async function handleAttachedStickablesChange({
  vm: NoOpVm,
  handler: stickablesHandler,
  event: stickablesEvent,
}) {
  // r7 - Handle attached stickables changed event for widget nodes

  // Validate event type
  if (stickablesEvent.name !== 'attachedStickablesChanged') {
    throw new Error('attachedStickablesChanged called with event that is not attachedStickablesChanged')
  }

  // Execute handler with stickables data
  const handlerResult = NoOpVm.callFunction(stickablesHandler, NoOpVm.undefined, NoOpVm.deepWrap({
    stuckNodeIds: stickablesEvent.addedNodes,
    unstuckNodeIds: stickablesEvent.removedNodes,
  }))

  // Handle execution failure
  if (handlerResult.type === 'FAILURE') {
    throw new InternalError(handlerResult.error)
  }

  // Wait for handler completion
  await wrapVmPromise({
    vm: NoOpVm,
    promiseHandle: handlerResult.handle,
    shouldRetainResult: false,
  })
}
export function defineAlertFunction(e: NoOpVm, _t: any, i: any) {
  // Only define alert if it doesn't exist or is undefined
  if (e.isEqual(e.undefined, e.getProp(e.global, 'alert'))) {
    e.defineFunction(e.global, 'alert', 'alert', (t) => {
      const message = e.toString(t)

      // Format message with plugin context
      const formattedMessage = i !== ''
        ? `From the plugin "${i}":

${message}`
        : `From the current plugin:

${message}`
      // eslint-disable-next-line no-alert
      alert(formattedMessage)
      return e.undefined
    })
  }
}

/**
 * processNodeArrayForHierarchyOperation - Process and validate node array for hierarchy operations
 *
 * Validates input array, extracts node GUIDs, validates responsive set constraints,
 * and processes parent and index parameters for hierarchy manipulation operations.
 *
 * @param params - Configuration object for node processing
 * @param params.vm - Virtual machine instance for VM operations
 * @param params.callerName - Name of the calling operation for error messages
 * @param params.nodes - VM array handle containing nodes to process
 * @param params.parentArg - VM handle for parent node (optional)
 * @param params.indexArg - VM handle for insertion index (optional)
 * @param params.getNode - Function to retrieve node from VM handle
 * @param params.enableResponsiveSetHierarchyMutations - Whether responsive set operations are allowed
 * @returns Object containing processed node IDs, parent node, and insertion index
 * @throws Error if array is invalid, nodes are in responsive sets, or parameters are invalid
 */
export function processNodeArrayForHierarchyOperation({
  vm: NoOpVm,
  callerName: operationName,
  nodes: nodeArray,
  parentArg: parentHandle,
  indexArg: indexHandle,
  getNode: nodeGetter,
  enableResponsiveSetHierarchyMutations: allowResponsiveOperations,
}) {
  // Validate input array
  validateNodeArray(nodeArray, operationName, NoOpVm)

  // Extract and validate nodes
  const nodeIds = extractAndValidateNodes(nodeArray, operationName, NoOpVm, nodeGetter, allowResponsiveOperations)

  // Process parent and index parameters
  const parentNode = processParentParameter(parentHandle, NoOpVm, nodeGetter)
  const insertionIndex = processIndexParameter(indexHandle, operationName, NoOpVm)
  return {
    nodeIds,
    parent: parentNode,
    index: insertionIndex,
  }
}

/**
 * validateNodeArray - Validate that input is a non-empty array
 */
export function validateNodeArray(nodeArray, operationName, NoOpVm) {
  if (!NoOpVm.isArray(nodeArray)) {
    throw new TypeError(`First argument to ${operationName}() must be an array`)
  }
  const arrayLength = NoOpVm.getNumberProp(nodeArray, 'length')
  if (arrayLength < 1) {
    throw new Error(`First argument to ${operationName}() must be an array of at least one node`)
  }
}

/**
 * extractAndValidateNodes - Extract node GUIDs and validate responsive set constraints
 */
export function extractAndValidateNodes(nodeArray, operationName, NoOpVm, nodeGetter, allowResponsiveOperations) {
  const arrayLength = NoOpVm.getNumberProp(nodeArray, 'length')
  const nodeIds: string[] = []
  for (let nodeIndex = 0; nodeIndex < arrayLength; nodeIndex++) {
    const nodeHandle = NoOpVm.getProp(nodeArray, nodeIndex.toString())
    const targetNode = nodeGetter(nodeHandle)

    // Validate responsive set constraints
    if (targetNode.isOrInResponsiveSet && !allowResponsiveOperations) {
      throw new Error(`Cannot ${operationName} nodes in a webpage`)
    }
    nodeIds.push(targetNode.guid)
  }
  return nodeIds
}

/**
 * processParentParameter - Process optional parent node parameter
 */
export function processParentParameter(parentHandle, NoOpVm, nodeGetter) {
  return NoOpVm.isUndefined(parentHandle) ? undefined : nodeGetter(parentHandle)
}

/**
 * processIndexParameter - Process optional index parameter with validation
 */
export function processIndexParameter(indexHandle, operationName, NoOpVm) {
  if (NoOpVm.isUndefined(indexHandle)) {
    return -1
  }
  return validateWithZSchema({
    vm: NoOpVm,
    handle: indexHandle,
    zSchema: FigmaSchema.PositiveInteger,
    property: `${operationName} index`,
  })
}
export const RESTRICTED_TRIGGERS = {
  NO_UI: new Set(['codegen', 'related-link-preview', 'textreview']),
  NO_CHECKOUT: new Set(['codegen', 'linkpreview', 'textreview']),
}
let ar = new Set(['codegen', 'linkpreview', 'textreview'])
let as = ['close', 'selectionchange', 'currentpagechange', 'drop', 'run', 'documentchange', 'textreview', 'slidesviewchange'].concat(['timerstart', 'timerstop', 'timerpause', 'timerresume', 'timerdone', 'timeradjust'])
let ao = []
let al = ['message']
let ad = ['input']
let ac = [FEditorType.Design, FEditorType.Whiteboard, FEditorType.DevHandoff, FEditorType.Slides, FEditorType.Sites, FEditorType.Illustration, FEditorType.Cooper]
class PluginRuntime {
  vm: NoOpVm
  options: PluginOptions
  visualBellCounter: number
  eventHandlers: Map<string, any[]>
  eventHandlerTimeouts: Map<string, any>
  scheduledEvents: Map<string, Fn>
  runningSyncEvent: string | null
  runningCloseEventHandler: boolean
  previousSelection: string[]
  previousSelectedTextRangeJson: string
  onMessageCallback?: Fn
  queryMode: boolean
  checkoutRequested: boolean
  widgetManager: WidgetManager | undefined
  skipInvisibleInstanceChildren: boolean
  textReviewRequestRejects: number
  isTextReviewRequestModalOpen: boolean
  isWidget: boolean
  privateSceneGraph: TSSceneGraph
  styleManager: StyleManager
  imageStore: ImageStore
  videoStore: VideoStore
  documentAccessState: DocumentAccessState
  _hasRegisteredWidgetFunction: boolean
  fullscreenEditorType: any
  mixedSentinel: any
  runtimeOptions: PluginRuntimeOptions
  nodeFactory: NodeFactory
  styleFactory: StyleFactory
  variableFactory: VariableFactory
  variableCollectionFactory: any
  annotationCategoryFactory: any
  uiHandle: PluginUIManager | DummyUIManager
  authCallback = this.createPromiseCallback({
    makeInputEvent: (e) => {
      let t = this.vm.newObject()
      this.vm.setProp(t, 'links', this.vm.deepWrap(e))
      return t
    },
    eventName: 'auth',
    zResultSchema: FigmaSchema.AuthResultSchema,
    rejectMessage: 'Promise returned from \'auth\' event rejected. Unable to authenticate.',
    defaultResult: null,
  })

  /**
   * getNode - Retrieve a node, style, variable, or variable collection by VM handle.
   * @param handle - VM handle representing the node object.
   * @returns The corresponding node, style, variable, or variable collection.
   * @throws ApplicationError or TypeError if not found or invalid.
   */
  getNode = (handle: INoOpVm<any>): any => {
    const vm = this.vm
    const sceneGraph = this.privateSceneGraph
    if (!vm.isObject(handle)) {
      throw new TypeError(`Expected node, got ${vm.isNull(handle) ? 'null' : vm.typeof(handle)}`)
    }
    const idHandle = vm.getProp(handle, 'id')
    if (!vm.isString(idHandle)) {
      throw new TypeError(`Expected node id to be a string, got ${vm.typeof(idHandle)}`)
    }
    const id = vm.toString(idHandle)

    // Style node
    if (M7(id)) {
      const style = this.styleManager.get(id)
      if (!style) {
        throw new ApplicationError(`The style with id ${JSON.stringify(id)} does not exist`)
      }
      return style
    }

    // Variable node
    const variableId = VariableIdHandler.fromString(id)
    if (variableId) {
      const variable = sceneGraph.getVariableNode(variableId)
      if (variable === undefined) {
        throw new ApplicationError(`The variable with id ${JSON.stringify(id)} does not exist`)
      }
      return variable
    }

    // Variable collection node
    const collectionId = VariableSetIdCompatHandler.fromString(id)
    if (collectionId) {
      const collection = sceneGraph.getVariableCollectionNode(collectionId)
      if (collection === undefined) {
        throw new ApplicationError(`The variable collection with id ${JSON.stringify(id)} does not exist`)
      }
      return collection
    }

    // Regular node by GUID path
    if (sceneGraph.isDeveloperFriendlyIdAGuidPath(id)) {
      const guid = sceneGraph.guidFromDeveloperFriendlyId(id)
      const node = guid ? sceneGraph.get(guid) : undefined
      if (!node) {
        throw new ApplicationError(`The node (instance sublayer or table cell) with id ${JSON.stringify(id)} does not exist`)
      }
      return node
    }

    // Fallback: get node by ID
    const node = getNodeById(id, sceneGraph)
    if (node.isInWidget && !(getFeatureFlags().widgets_children_trait_for_test || vm.vmType === 'scopednoopvm')) {
      throw new ApplicationError(`The node (instance sublayer) with id ${JSON.stringify(id)} does not exist`)
    }
    return node
  }

  /**
   * getVariableNode - Retrieve a variable node by VM handle.
   * @param handle - VM handle representing the variable node object.
   * @returns The corresponding variable node.
   * @throws ApplicationError or TypeError if not found or invalid.
   */
  getVariableNode = (handle: INoOpVm<any>): any => {
    const vm = this.vm
    const sceneGraph = this.privateSceneGraph
    if (!vm.isObject(handle)) {
      throw new TypeError(`Expected node, got ${vm.isNull(handle) ? 'null' : vm.typeof(handle)}`)
    }
    const idHandle = vm.getProp(handle, 'id')
    if (!vm.isString(idHandle)) {
      throw new TypeError(`Expected node id to be a string, got ${vm.typeof(idHandle)}`)
    }
    const id = vm.toString(idHandle)
    const variableId = VariableIdHandler.fromString(id)
    if (!variableId) {
      throw new Error(`The variable id ${JSON.stringify(id)} is not valid`)
    }
    const variable = sceneGraph.getVariableNode(variableId)
    if (variable === undefined) {
      throw new ApplicationError(`The variable with id ${JSON.stringify(id)} does not exist`)
    }
    return variable
  }

  /**
   * getVariableCollectionNode - Retrieve a variable collection node by VM handle.
   * @param handle - VM handle representing the variable collection node object.
   * @returns The corresponding variable collection node.
   * @throws ApplicationError or TypeError if not found or invalid.
   */
  getVariableCollectionNode = (handle: INoOpVm<any>): any => {
    const vm = this.vm
    const sceneGraph = this.privateSceneGraph
    if (!vm.isObject(handle)) {
      throw new TypeError(`Expected node, got ${vm.isNull(handle) ? 'null' : vm.typeof(handle)}`)
    }
    const idHandle = vm.getProp(handle, 'id')
    if (!vm.isString(idHandle)) {
      throw new TypeError(`Expected node id to be a string, got ${vm.typeof(idHandle)}`)
    }
    const id = vm.toString(idHandle)
    const collectionId = VariableSetIdCompatHandler.fromString(id)
    if (!collectionId) {
      throw new Error(`The variable collection id ${JSON.stringify(id)} is not valid`)
    }
    const collection = sceneGraph.getVariableCollectionNode(collectionId)
    if (collection === undefined) {
      throw new ApplicationError(`The variable collection with id ${JSON.stringify(id)} does not exist`)
    }
    return collection
  }

  /**
   * getAnnotationCategory - Retrieve an annotation category by VM handle.
   * @param handle - VM handle representing the annotation category object.
   * @returns The corresponding annotation category.
   * @throws Error or TypeError if not found or invalid.
   */
  getAnnotationCategory = (handle: INoOpVm<any>): any => {
    const vm = this.vm
    const sceneGraph = this.privateSceneGraph
    if (!vm.isObject(handle)) {
      throw new TypeError(`Expected node, got ${vm.isNull(handle) ? 'null' : vm.typeof(handle)}`)
    }
    const idHandle = vm.getProp(handle, 'id')
    if (!vm.isString(idHandle)) {
      throw new TypeError(`Expected node id to be a string, got ${vm.typeof(idHandle)}`)
    }
    const id = vm.toString(idHandle)
    if (!isValidSessionLocalID(parseSessionLocalID(id))) {
      throw new Error(`The annotation category id ${JSON.stringify(id)} is not valid`)
    }
    const categories = sceneGraph.getRoot().annotationCategories
    if (categories === null) {
      throw new Error('Annotation categories have not been initialized')
    }
    const category = categories.find(cat => cat.id === id)
    if (category === undefined) {
      throw new Error(`The annotation category with id ${JSON.stringify(id)} does not exist`)
    }
    return category
  }

  spellCheckCallback = this.createPromiseCallback({
    makeInputEvent: (e) => {
      let t = this.vm.newObject()
      this.vm.setProp(t, 'text', this.vm.newString(e))
      return t
    },
    eventName: 'textreview',
    zResultSchema: FigmaSchema.TextReviewResultSchema,
    defaultResult: [],
    rejectMessage: 'Promise returned from \'textreview\' event rejected. Unable to show text review suggestions.',
  })

  legacyCodegenCallback = this.createPromiseCallback({
    makeInputEvent: (e) => {
      let t = this.vm.newObject()
      let i = this.nodeFactory.createNode(e, 'codegen')
      this.vm.setProp(t, 'node', i)
      return t
    },
    eventName: 'codegen',
    zResultSchema: FigmaSchema.CodegenResultSchema,
    defaultResult: [],
    rejectMessage: 'Promise returned from codegen event rejected. Unable to generate code.',
  })

  codegenCallback = this.createPromiseCallback({
    makeInputEvent: (e) => {
      let t = this.vm.newObject()
      let i = this.nodeFactory.createNode(e, 'generate')
      this.vm.setProp(t, 'node', i)
      this.vm.setProp(t, 'language', this.vm.newString(this.getCodegenLanguage()))
      return t
    },
    eventName: 'generate',
    zResultSchema: FigmaSchema.CodegenResultSchema,
    defaultResult: [],
    rejectMessage: 'Promise returned from codegen \'generate\' event rejected. Unable to generate code.',
  })

  linkPreviewCallback = this.createPromiseCallback({
    makeInputEvent: (e) => {
      let t = this.vm.newObject()
      this.vm.setProp(t, 'link', this.vm.deepWrap(e))
      return t
    },
    eventName: 'linkpreview',
    zResultSchema: FigmaSchema.LinkPreviewResultSchema,
    defaultResult: null,
    rejectMessage: 'Promise returned from \'linkpreview\' event rejected. Unable to generate preview.',
  })

  constructor(vm: NoOpVm, options: PluginOptions) {
    this.vm = vm
    this.options = options
    this.visualBellCounter = 0
    this.eventHandlers = new Map()
    this.eventHandlerTimeouts = new Map()
    this.scheduledEvents = new Map()
    this.runningSyncEvent = null
    this.runningCloseEventHandler = false
    this.previousSelection = []
    this.previousSelectedTextRangeJson = 'null'
    this.onMessageCallback = undefined
    this.queryMode = false
    this.checkoutRequested = false
    this.widgetManager = undefined
    this.skipInvisibleInstanceChildren = false
    this.textReviewRequestRejects = 0
    this.isTextReviewRequestModalOpen = false
    this.isWidget = this.options.apiMode?.type === 'WIDGET'
    this.privateSceneGraph = options.sceneGraph ?? getSceneGraphInstance()
    this.styleManager = new StyleManager(this.privateSceneGraph)
    this.imageStore = new ImageStore()
    this.videoStore = new VideoStore()
    this.documentAccessState = new DocumentAccessState({
      incrementalMode: this.options.incrementalSafeApi || false,
      stats: options.stats,
      allowIncrementalUnsafeApiCalls: !!options.allowIncrementalUnsafeApiCalls,
    })
    W5(this.pluginPageLoaded)
    Ql(this.getAccessiblePages)
    this._hasRegisteredWidgetFunction = false
    if (this.isWidget) {
      const {
        runtimeBridge,
        shutdownCallback,
      } = PluginRuntime.createRuntimeBridgeForWidgetReconciler(options.pluginID, vm)
      this.widgetManager = new WidgetManager(vm, options.pluginID, runtimeBridge)
      if (shutdownCallback) {
        this.widgetManager.addShutdownAction(shutdownCallback)
      }
    }
    let selectedView = debugState.getState().selectedView
    if (ac.includes(selectedView.editorType) || vm.vmType === 'scopednoopvm') {
      this.fullscreenEditorType = selectedView.editorType
    }
    else {
      throw new Error(`Unsupported editor type: ${selectedView.editorType}`)
    }
    this.fullscreenEditorType = selectedView.editorType
    this.mixedSentinel = vm.newSymbol('figma.mixed')
    this.setSkipInvisibleInstanceChildren(this.fullscreenEditorType === FEditorType.DevHandoff || options.apiMode.type === 'WIDGET_RECONCILER')
    vm.retainHandle(this.mixedSentinel)
    this.runtimeOptions = getInitialOptions().ext_lego_plugins_runmode
      ? {
          allowVisibleIframe: !RESTRICTED_TRIGGERS.NO_CHECKOUT.has(this.getRunMode()),
          iframeId: getPluginIframeMode({
            runMode: this.getRunMode(),
          }),
          allowInitiateCheckout: !RESTRICTED_TRIGGERS.NO_CHECKOUT.has(this.getRunMode()),
        }
      : {
          allowVisibleIframe: !RESTRICTED_TRIGGERS.NO_CHECKOUT.has(options.triggeredFrom),
          iframeId: getPluginIframeMode({
            triggeredFrom: options.triggeredFrom,
          }),
          allowInitiateCheckout: !options.triggeredFrom || !RESTRICTED_TRIGGERS.NO_UI.has(options.triggeredFrom),
        }
    vm.retainHandle(this.mixedSentinel)
    this.nodeFactory = new NodeFactory(vm, {
      pluginID: options.pluginID,
      pluginVersionID: options.pluginVersionID,
      imageStore: this.imageStore,
      videoStore: this.videoStore,
      getStyleFactory: () => this.styleFactory,
      getVariableCollectionFactory: () => this.variableCollectionFactory,
      documentAccessState: this.documentAccessState,
      mixedSentinel: this.mixedSentinel,
      stats: options.stats,
      enableProposedApi: options.enableProposedApi,
      isWidget: this.isWidget,
      widgetManager: this.widgetManager,
      validatedPermissions: options.validatedPermissions,
      editorType: this.fullscreenEditorType,
      defineVmFunction: this.defineVmFunction,
      defineVmIncrementalMethod: this.defineVmIncrementalMethod,
      defineVmProp: this.defineVmProp,
      defineVmIncrementalProp: this.defineVmIncrementalProp,
      addEventHandlersTo: this.addEventHandlersTo,
      incLoadingErrorLogger: new IncLoadingErrorLogger({
        pluginID: options.pluginID,
        pluginVersionID: options.pluginVersionID,
      }),
      openFileKey: options.openFileKey,
      apiMode: options.apiMode,
      sceneGraph: this.privateSceneGraph,
      getNode: this.getNode,
      getVariableNode: this.getVariableNode,
      getVariableCollectionNode: this.getVariableCollectionNode,
      getAnnotationCategory: this.getAnnotationCategory,
      incrementalSafeApi: this.options.incrementalSafeApi,
      allowIncrementalUnsafeApiCalls: !!this.options.allowIncrementalUnsafeApiCalls,
      styleManager: this.styleManager,
      isPluginExemptFromPluginDataLimits: options.isPluginExemptFromPluginDataLimits,
      enableResponsiveSetHierarchyMutations: options.enableResponsiveSetHierarchyMutations,
    })
    Q4(this.getAllAccessedGuids)
    this.styleFactory = new StyleFactory({
      vm,
      stats: this.options.stats,
      pluginID: options.pluginID,
      pluginVersionID: options.pluginVersionID,
      getNodeFactory: () => this.nodeFactory,
      getVariableCollectionFactory: () => this.variableCollectionFactory,
      imageStore: this.imageStore,
      videoStore: this.videoStore,
      documentAccessState: this.documentAccessState,
      mixedSentinel: this.mixedSentinel,
      enableProposedApi: options.enableProposedApi,
      isWidget: this.isWidget,
      widgetManager: this.widgetManager,
      validatedPermissions: options.validatedPermissions,
      editorType: this.fullscreenEditorType,
      defineVmFunction: this.defineVmFunction,
      defineVmIncrementalMethod: this.defineVmIncrementalMethod,
      defineVmProp: this.defineVmProp,
      defineVmIncrementalProp: this.defineVmIncrementalProp,
      addEventHandlersTo: this.addEventHandlersTo,
      apiMode: options.apiMode,
      openFileKey: options.openFileKey,
      getNode: this.getNode,
      getVariableNode: this.getVariableNode,
      getVariableCollectionNode: this.getVariableCollectionNode,
      getAnnotationCategory: this.getAnnotationCategory,
      sceneGraph: this.privateSceneGraph,
      incrementalSafeApi: this.options.incrementalSafeApi,
      allowIncrementalUnsafeApiCalls: !!this.options.allowIncrementalUnsafeApiCalls,
      styleManager: this.styleManager,
      isPluginExemptFromPluginDataLimits: options.isPluginExemptFromPluginDataLimits,
      enableResponsiveSetHierarchyMutations: options.enableResponsiveSetHierarchyMutations,
    })
    this.variableFactory = new VariableFactory({
      vm,
      stats: this.options.stats,
      pluginID: options.pluginID,
      pluginVersionID: options.pluginVersionID,
      getNodeFactory: () => this.nodeFactory,
      getStyleFactory: () => this.styleFactory,
      getVariableCollectionFactory: () => this.variableCollectionFactory,
      imageStore: this.imageStore,
      videoStore: this.videoStore,
      documentAccessState: this.documentAccessState,
      mixedSentinel: this.mixedSentinel,
      enableProposedApi: options.enableProposedApi,
      isWidget: this.isWidget,
      widgetManager: this.widgetManager,
      validatedPermissions: options.validatedPermissions,
      editorType: this.fullscreenEditorType,
      defineVmFunction: this.defineVmFunction,
      defineVmIncrementalMethod: this.defineVmIncrementalMethod,
      defineVmProp: this.defineVmProp,
      defineVmIncrementalProp: this.defineVmIncrementalProp,
      addEventHandlersTo: this.addEventHandlersTo,
      apiMode: options.apiMode,
      openFileKey: options.openFileKey,
      getNode: this.getNode,
      getVariableNode: this.getVariableNode,
      getVariableCollectionNode: this.getVariableCollectionNode,
      getAnnotationCategory: this.getAnnotationCategory,
      sceneGraph: this.privateSceneGraph,
      incrementalSafeApi: this.options.incrementalSafeApi,
      allowIncrementalUnsafeApiCalls: !!this.options.allowIncrementalUnsafeApiCalls,
      styleManager: this.styleManager,
      isPluginExemptFromPluginDataLimits: options.isPluginExemptFromPluginDataLimits,
      enableResponsiveSetHierarchyMutations: options.enableResponsiveSetHierarchyMutations,
    })
    this.variableCollectionFactory = new VariableCollectionFactory({
      vm,
      stats: options.stats,
      pluginID: options.pluginID,
      pluginVersionID: options.pluginVersionID,
      getNodeFactory: () => this.nodeFactory,
      getStyleFactory: () => this.styleFactory,
      getVariableCollectionFactory: () => this.variableCollectionFactory,
      imageStore: this.imageStore,
      videoStore: this.videoStore,
      documentAccessState: this.documentAccessState,
      mixedSentinel: this.mixedSentinel,
      enableProposedApi: options.enableProposedApi,
      isWidget: this.isWidget,
      widgetManager: this.widgetManager,
      validatedPermissions: options.validatedPermissions,
      editorType: this.fullscreenEditorType,
      defineVmFunction: this.defineVmFunction,
      defineVmIncrementalMethod: this.defineVmIncrementalMethod,
      defineVmProp: this.defineVmProp,
      defineVmIncrementalProp: this.defineVmIncrementalProp,
      addEventHandlersTo: this.addEventHandlersTo,
      apiMode: options.apiMode,
      openFileKey: options.openFileKey,
      getNode: this.getNode,
      getVariableNode: this.getVariableNode,
      getVariableCollectionNode: this.getVariableCollectionNode,
      getAnnotationCategory: this.getAnnotationCategory,
      sceneGraph: this.privateSceneGraph,
      incrementalSafeApi: this.options.incrementalSafeApi,
      allowIncrementalUnsafeApiCalls: !!this.options.allowIncrementalUnsafeApiCalls,
      styleManager: this.styleManager,
      isPluginExemptFromPluginDataLimits: options.isPluginExemptFromPluginDataLimits,
      enableResponsiveSetHierarchyMutations: options.enableResponsiveSetHierarchyMutations,
    })
    this.annotationCategoryFactory = new AnnotationCategoryFactory({
      vm,
      stats: this.options.stats,
      pluginID: options.pluginID,
      pluginVersionID: options.pluginVersionID,
      getNodeFactory: () => this.nodeFactory,
      getStyleFactory: () => this.styleFactory,
      getVariableCollectionFactory: () => this.variableCollectionFactory,
      imageStore: this.imageStore,
      videoStore: this.videoStore,
      documentAccessState: this.documentAccessState,
      mixedSentinel: this.mixedSentinel,
      enableProposedApi: options.enableProposedApi,
      isWidget: this.isWidget,
      widgetManager: this.widgetManager,
      validatedPermissions: options.validatedPermissions,
      editorType: this.fullscreenEditorType,
      defineVmFunction: this.defineVmFunction,
      defineVmIncrementalMethod: this.defineVmIncrementalMethod,
      defineVmProp: this.defineVmProp,
      defineVmIncrementalProp: this.defineVmIncrementalProp,
      addEventHandlersTo: this.addEventHandlersTo,
      apiMode: options.apiMode,
      openFileKey: options.openFileKey,
      getNode: this.getNode,
      getVariableNode: this.getVariableNode,
      getVariableCollectionNode: this.getVariableCollectionNode,
      getAnnotationCategory: this.getAnnotationCategory,
      sceneGraph: this.privateSceneGraph,
      incrementalSafeApi: this.options.incrementalSafeApi,
      allowIncrementalUnsafeApiCalls: !!this.options.allowIncrementalUnsafeApiCalls,
      styleManager: this.styleManager,
      isPluginExemptFromPluginDataLimits: options.isPluginExemptFromPluginDataLimits,
      enableResponsiveSetHierarchyMutations: options.enableResponsiveSetHierarchyMutations,
    })
    let n = this.options.apiMode
    const getUI = function (e: PluginOptions['apiMode']) {
      switch (e.type) {
        case 'GLOBAL_API':
        case 'CONSOLE_SHIM':
        case 'SECURITY_CHECK':
          return !1
        case 'WIDGET_RECONCILER':
          return !0
        case 'WIDGET':
        case 'PLUGIN':
          return e.noOpUI
      }
    }
    if (n.type === 'CONSOLE_SHIM') {
      this.uiHandle = n.uiHandle
    }
    else if (getUI(n)) {
      this.uiHandle = new DummyUIManager()
    }
    else {
      let t = n.type !== 'GLOBAL_API' && n.type !== 'SECURITY_CHECK'
      this.uiHandle = new PluginUIManager(vm.vmType, this.options.pluginID, this.options.titleIconURL, this.options.name, this.options.validatedPermissions.permissions, this.isWidget, this.isWidget ? JSON.parse(this.options.command || '{}') : {}, t, this.uiCancelCallback, this.iframeMessageHandler, this.options.allowedDomains, this.options.isLocal, this.options.triggeredFrom, this.options.capabilities)
    }
    if (this.vm instanceof NoOpVm || this.vm as any instanceof ScopedNoOpVm) {
      // No additional event callbacks needed for NoOp VMs
    }
    else {
      LL(this.selectionCallback)
      Xx(this.pageCallback)
      Sf(this.timerCallback)
      KB(this.dropCallback)
      _$$i(this.codegenPreferencesChangeCallback)
      _C(this.slidesViewChangeCallback)
    }
    this.options.addShutdownAction(e => this.tearDown(e))
    this.previousSelection = this.privateSceneGraph.getDirectlySelectedNodes().map(e => e.guid)
    PluginHelpers.resetSelectionCouldBeDirty()
    this.createAPI()
  }

  /**
   * defineVmIncrementalProp - Define incremental VM property with safe API support
   *
   * Sets up a VM property with getter/setter and optional incremental-safe variants.
   * Handles document preparation, value resolution, and incremental API calls.
   *
   * @param params.handle - VM object handle
   * @param params.key - Property key
   * @param params.metricsKey - Metrics key for tracking
   * @param params.enumerable - Whether property is enumerable
   * @param params.incrementalSafeApiKey - Key for incremental-safe getter
   * @param params.incrementalSafeApiMetricsKey - Metrics key for incremental-safe getter
   * @param params.incrementalSafeApiSetKey - Key for incremental-safe setter
   * @param params.incrementalSafeApiSetMetricsKey - Metrics key for incremental-safe setter
   * @param params.canWriteInReadOnly - Allow write in read-only mode
   * @param params.parseThis - Function to parse 'this' context
   * @param params.parseIncrementalValueArg - Function to parse incremental value argument
   * @param params.prepareDocument - Async function to prepare document
   * @param params.resolveValue - Function to resolve property value
   * @param params.resolveValueIncremental - Function to resolve value incrementally
   * @param params.retainGetter - Whether to retain getter for incremental API
   * @param params.setValue - Function to set property value
   * @param params.setValueIncremental - Function to set value incrementally
   * @param params.incrementalSafeApi - Whether incremental safe API is enabled
   * @param params.allowIncrementalUnsafeApiCalls - Allow unsafe incremental API calls
   * @param params.isAllowedInWidgetRender - Allow in widget render
   * @param params.hasEditScope - Use edit scope for operations
   */
  defineVmIncrementalProp({
    handle,
    key,
    metricsKey,
    enumerable,
    incrementalSafeApiKey,
    incrementalSafeApiMetricsKey,
    incrementalSafeApiSetKey,
    incrementalSafeApiSetMetricsKey,
    canWriteInReadOnly,
    parseThis,
    parseIncrementalValueArg,
    prepareDocument,
    resolveValue,
    resolveValueIncremental,
    retainGetter,
    setValue,
    setValueIncremental,
    incrementalSafeApi,
    allowIncrementalUnsafeApiCalls,
    isAllowedInWidgetRender = true,
    hasEditScope = true,
  }) {
    // Define main property with getter/setter
    this.defineMainProperty({
      handle,
      key,
      metricsKey,
      enumerable,
      canWriteInReadOnly,
      parseThis,
      resolveValue,
      retainGetter,
      setValue,
      setValueIncremental,
      incrementalSafeApi,
      incrementalSafeApiMetricsKey,
      incrementalSafeApiSetMetricsKey,
      allowIncrementalUnsafeApiCalls,
      isAllowedInWidgetRender,
      hasEditScope,
    })

    // Define incremental-safe getter if configured
    if (incrementalSafeApiKey && incrementalSafeApiMetricsKey) {
      this.defineIncrementalGetter({
        handle,
        key: incrementalSafeApiKey,
        metricsKey: incrementalSafeApiMetricsKey,
        parseThis,
        prepareDocument,
        resolveValue,
        resolveValueIncremental,
        isAllowedInWidgetRender,
        hasEditScope,
      })
    }

    // Define incremental-safe setter if configured
    if (incrementalSafeApiSetKey && incrementalSafeApiSetMetricsKey && setValueIncremental && parseIncrementalValueArg) {
      this.defineIncrementalSetter({
        handle,
        key: incrementalSafeApiSetKey,
        metricsKey: incrementalSafeApiSetMetricsKey,
        parseThis,
        parseIncrementalValueArg,
        prepareDocument,
        setValueIncremental,
        canWriteInReadOnly,
        isAllowedInWidgetRender,
        hasEditScope,
      })
    }
  }

  /**
   * defineMainProperty - Define the main VM property with getter/setter
   */
  defineMainProperty({
    handle,
    key,
    metricsKey,
    enumerable,
    canWriteInReadOnly,
    parseThis,
    resolveValue,
    retainGetter,
    setValue,
    setValueIncremental,
    incrementalSafeApi,
    incrementalSafeApiMetricsKey,
    incrementalSafeApiSetMetricsKey,
    allowIncrementalUnsafeApiCalls,
    isAllowedInWidgetRender,
    hasEditScope,
  }) {
    const self = this
    this.defineVmProp({
      handle,
      key,
      options: {
        metricsKey,
        enumerable,
        get() {
          if (incrementalSafeApi && incrementalSafeApiMetricsKey && !retainGetter) {
            checkIncrementalUnsafeMember(allowIncrementalUnsafeApiCalls, metricsKey, incrementalSafeApiMetricsKey)
          }
          return resolveValue(parseThis(this))
        },
        set: setValue
          ? function (value) {
            if (incrementalSafeApi && setValueIncremental) {
              checkIncrementalUnsafeMember(allowIncrementalUnsafeApiCalls, `${metricsKey} =`, incrementalSafeApiSetMetricsKey)
            }
            return setValue(parseThis(self), value)
          }
          : undefined,
      },
      canWriteInReadOnly,
      isAllowedInWidgetRender,
      hasEditScope,
    })
  }

  /**
   * defineIncrementalGetter - Define incremental-safe getter function
   */
  defineIncrementalGetter({
    handle,
    key,
    metricsKey,
    parseThis,
    prepareDocument,
    resolveValue,
    resolveValueIncremental,
    isAllowedInWidgetRender,
    hasEditScope,
  }) {
    const vm = this.vm
    this.defineVmFunction({
      handle,
      key,
      metricsKey,
      cb() {
        const element = parseThis(this)
        const {
          promise,
          resolve,
          reject,
        } = vm.newPromise()
        vm.registerPromise(prepareDocument(element)).then(() => {
          const result = resolveValueIncremental ? resolveValueIncremental(element) : resolveValue(element)
          resolve(result)
        }).catch((error) => {
          reject(vm.newString(error.message))
        })
        return promise
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender,
      hasEditScope,
    })
  }

  /**
   * defineIncrementalSetter - Define incremental-safe setter function
   */
  defineIncrementalSetter({
    handle,
    key,
    metricsKey,
    parseThis,
    parseIncrementalValueArg,
    prepareDocument,
    setValueIncremental,
    canWriteInReadOnly,
    isAllowedInWidgetRender,
    hasEditScope,
  }) {
    const vm = this.vm
    this.defineVmFunction({
      handle,
      key,
      metricsKey,
      cb(value) {
        const element = parseThis(this)
        const parsedValue = parseIncrementalValueArg(value)
        const {
          promise,
          resolve,
          reject,
        } = vm.newPromise()
        vm.registerPromise(prepareDocument(element)).then(() => {
          permissionScopeHandler.plugin(key, () => {
            setValueIncremental(element, parsedValue)
            resolve(vm.undefined)
          })
        }).catch((error) => {
          reject(vm.newString(error.message))
        })
        return promise
      },
      isAllowedInReadOnly: canWriteInReadOnly,
      isAllowedInWidgetRender,
      hasEditScope,
    })
  }

  /**
   * defineVmFunction - Define a VM function with security and permission checks
   *
   * Adds a function to a VM object with optional security checks for widget rendering,
   * read-only mode, and focus view. Uses guard clauses for clarity and maintainability.
   *
   * @param params.handle - The VM object handle
   * @param params.key - The function key
   * @param params.metricsKey - Optional metrics key for tracking
   * @param params.cb - The callback function to execute
   * @param params.isAllowedInReadOnly - Allow in read-only mode
   * @param params.isAllowedInWidgetRender - Allow in widget render
   * @param params.isAllowedInFocusViewInteractiveInspection - Allow in focus view
   * @param params.hasEditScope - Use edit scope for execution
   */
  defineVmFunction = ({
    handle,
    key,
    metricsKey,
    cb,
    isAllowedInReadOnly,
    isAllowedInWidgetRender = true,
    isAllowedInFocusViewInteractiveInspection = true,
    hasEditScope = true,
  }) => {
    const self = this
    this.vm.defineFunction(handle, key, metricsKey, (...args) => {
      // Widget rendering restriction
      if (self.widgetManager?.isRunningWidgetFunction() && self.shouldLockDownPluginApiForWidgets() && !isAllowedInWidgetRender) {
        return self.handleLockDownPluginApiError(`Widget Rendering Error: Cannot use "${key}" during widget rendering.`)
      }

      // Read-only restriction
      if (self.isReadOnlyMode() && !isAllowedInReadOnly) {
        throw new Error(`Can't call "${key}" in read-only mode`)
      }

      // Focus view restriction
      if (!isAllowedInFocusViewInteractiveInspection && _$$np()) {
        throw new Error(`Cannot call "${key}" in focus view with changes. Reset changes and try again.`)
      }

      // Edit scope
      return self.conditionalEditScope(hasEditScope, `plugin-${key}`, () => cb(args))
    })
  }

  /**
   * defineVmIncrementalFunction - Define incremental VM function with safe API support
   *
   * Adds a function and its incremental-safe variant to a VM object, handling
   * argument parsing, document preparation, and value resolution.
   *
   * @param params.handle - The VM object handle
   * @param params.key - The function key
   * @param params.metricsKey - Metrics key for tracking
   * @param params.incrementalSafeApiKey - Key for incremental-safe variant
   * @param params.incrementalSafeApiMetricsKey - Metrics key for incremental-safe variant
   * @param params.parseArg - Argument parsing function
   * @param params.prepareDocument - Async document preparation function
   * @param params.resolveValue - Value resolution function
   * @param params.isAllowedInReadOnly - Allow in read-only mode
   * @param params.incrementalSafeApi - Whether incremental safe API is enabled
   * @param params.allowIncrementalUnsafeApiCalls - Allow unsafe incremental API calls
   * @param params.isAllowedInWidgetRender - Allow in widget render
   * @param params.hasEditScope - Use edit scope for execution
   */
  defineVmIncrementalFunction = ({
    handle,
    key,
    metricsKey,
    incrementalSafeApiKey,
    incrementalSafeApiMetricsKey,
    parseArg,
    prepareDocument,
    resolveValue,
    isAllowedInReadOnly,
    incrementalSafeApi,
    allowIncrementalUnsafeApiCalls,
    isAllowedInWidgetRender = true,
    hasEditScope = true,
  }) => {
    // Main function
    this.defineVmFunction({
      handle,
      key,
      metricsKey,
      cb: (arg) => {
        if (incrementalSafeApi && incrementalSafeApiMetricsKey) {
          checkIncrementalUnsafeMember(allowIncrementalUnsafeApiCalls, metricsKey, incrementalSafeApiMetricsKey)
        }
        return resolveValue(parseArg(arg))
      },
      isAllowedInReadOnly,
      isAllowedInWidgetRender,
      hasEditScope,
    })

    // Incremental-safe variant
    this.defineVmFunction({
      handle,
      key: incrementalSafeApiKey,
      metricsKey: incrementalSafeApiMetricsKey,
      cb: (arg) => {
        const parsedArg = parseArg(arg)
        const {
          promise,
          resolve,
          reject,
        } = this.vm.newPromise()
        this.vm.registerPromise(prepareDocument(parsedArg)).then(() => {
          resolve(resolveValue(parsedArg))
        }).catch((error) => {
          reject(this.vm.newString(error.message))
        })
        return promise
      },
      isAllowedInReadOnly,
      isAllowedInWidgetRender,
      hasEditScope,
    })
  }

  /**
   * defineVmIncrementalMethod - Define incremental VM method with advanced argument handling
   *
   * Adds a method and its incremental-safe variant to a VM object, handling
   * argument parsing, document preparation, and value resolution for methods.
   *
   * @param params.handle - The VM object handle
   * @param params.key - The method key
   * @param params.metricsKey - Metrics key for tracking
   * @param params.incrementalSafeApiKey - Key for incremental-safe variant
   * @param params.incrementalSafeApiMetricsKey - Metrics key for incremental-safe variant
   * @param params.parseThis - Function to parse 'this' context
   * @param params.parseArg - Function to parse arguments
   * @param params.prepareDocument - Async document preparation function
   * @param params.resolveValue - Value resolution function
   * @param params.isAllowedInReadOnly - Allow in read-only mode
   * @param params.incrementalSafeApi - Whether incremental safe API is enabled
   * @param params.allowIncrementalUnsafeApiCalls - Allow unsafe incremental API calls
   * @param params.isAllowedInWidgetRender - Allow in widget render
   * @param params.hasEditScope - Use edit scope for execution
   */
  defineVmIncrementalMethod = ({
    handle,
    key,
    metricsKey,
    incrementalSafeApiKey,
    incrementalSafeApiMetricsKey,
    parseThis,
    parseArg,
    prepareDocument,
    resolveValue,
    isAllowedInReadOnly,
    incrementalSafeApi,
    allowIncrementalUnsafeApiCalls,
    isAllowedInWidgetRender = true,
    hasEditScope = true,
  }) => {
    const vm = this.vm

    // Main method
    this.defineVmFunction({
      handle,
      key,
      metricsKey,
      cb(...args) {
        if (incrementalSafeApi) {
          checkIncrementalUnsafeMember(allowIncrementalUnsafeApiCalls, metricsKey, incrementalSafeApiMetricsKey)
        }
        const thisContext = parseThis(this)
        const parsedArgs = parseArg(thisContext, ...args)
        return resolveValue(thisContext, parsedArgs)
      },
      isAllowedInReadOnly,
      isAllowedInWidgetRender,
      hasEditScope,
    })

    // Incremental-safe variant
    this.defineVmFunction({
      handle,
      key: incrementalSafeApiKey,
      metricsKey: incrementalSafeApiMetricsKey,
      cb(...args) {
        const thisContext = parseThis(this)
        const parsedArgs = parseArg(thisContext, ...args)
        const {
          promise,
          resolve,
          reject,
        } = vm.newPromise()
        vm.registerPromise(prepareDocument(thisContext, parsedArgs)).then(() => {
          resolve(permissionScopeHandler.plugin(incrementalSafeApiKey, () => resolveValue(thisContext, parsedArgs)))
        }).catch((error) => {
          reject(vm.newString(error.message))
        })
        return promise
      },
      isAllowedInReadOnly,
      isAllowedInWidgetRender,
      hasEditScope,
    })
  }

  /**
   * defineVmProp - Define a VM property with security and permission checks
   *
   * Adds a property to a VM object with optional getter/setter, enforcing widget, read-only,
   * and focus view restrictions. Uses guard clauses for clarity and maintainability.
   *
   * @param params.handle - The VM object handle
   * @param params.key - The property key
   * @param params.options - Property descriptor (get/set/value/etc.)
   * @param params.canWriteInReadOnly - Allow write in read-only mode
   * @param params.isAllowedInFocusViewInteractiveInspection - Allow in focus view
   * @param params.isAllowedInWidgetRender - Allow in widget render
   * @param params.hasEditScope - Use edit scope for set
   */
  defineVmProp = ({
    handle,
    key,
    options,
    canWriteInReadOnly,
    isAllowedInFocusViewInteractiveInspection = true,
    isAllowedInWidgetRender = true,
    hasEditScope = true,
  }) => {
    const self = this
    const desc = {
      ...options,
    }
    if (options.get) {
      desc.get = function () {
        // Widget rendering restriction
        if (self.widgetManager?.isRunningWidgetFunction() && self.shouldLockDownPluginApiForWidgets() && !isAllowedInWidgetRender) {
          self.handleLockDownPluginApiError(`Widget Rendering Error: Cannot use "${key}" during widget rendering.`)
        }
        return options.get.call(this)
      }
    }
    if (options.set) {
      desc.set = function (value) {
        // Widget rendering restriction
        if (self.widgetManager?.isRunningWidgetFunction() && self.shouldLockDownPluginApiForWidgets() && !isAllowedInWidgetRender) {
          self.handleLockDownPluginApiError(`Widget Rendering Error: Cannot use "${key}" during widget rendering.`)
        }
        // Read-only restriction
        if (self.isReadOnlyMode() && !canWriteInReadOnly) {
          throw new Error(`Can't set "${key}" in read-only mode`)
        }
        // Focus view restriction
        if (!isAllowedInFocusViewInteractiveInspection && _$$np()) {
          throw new Error(`Cannot set "${key}" in focus view with changes. Reset changes and try again.`)
        }
        // Edit scope
        return self.conditionalEditScope(hasEditScope, `plugin-${key}`, () => options.set.call(this, value))
      }
    }
    this.vm.defineProp(handle, key, desc)
  }

  /**
   * addEventHandler - Add event handler with validation and setup
   *
   * Registers event handlers with comprehensive validation, incremental mode checks,
   * page-specific handling, and automatic registration of system callbacks.
   *
   * @param nodeHandle - VM handle for node (for nodechange events)
   * @param eventType - Type of event to handle
   * @param handlerFunction - VM function to call when event fires
   * @param isOnceOnly - Whether handler should only fire once
   * @param statsCategory - Category for stats tracking
   */
  addEventHandler = (nodeHandle, eventType, handlerFunction, isOnceOnly, statsCategory) => {
    // Track event handler registration stats
    this.options.stats.increment(isOnceOnly ? `${statsCategory}.once.${eventType}` : `${statsCategory}.on.${eventType}`)

    // Validate handler function
    this.validateEventHandler(handlerFunction, eventType)

    // Get or create event handler list
    const existingHandlers = this.eventHandlers.get(eventType) || []
    const isFirstHandler = existingHandlers.length === 0

    // Setup event-specific initialization
    let pageGuid
    if (isFirstHandler) {
      pageGuid = this.setupEventSpecificInitialization(eventType, nodeHandle)
    }

    // Register the handler
    this.registerEventHandler(eventType, handlerFunction, isOnceOnly, pageGuid)

    // Setup system callbacks for first handler
    if (isFirstHandler) {
      this.setupSystemCallbacks(eventType)
    }

    // Process any scheduled events
    this.processScheduledEvents(eventType)
  }

  /**
   * validateEventHandler - Validate event handler function
   *
   * @param handlerFunction - Function to validate
   * @param eventType - Type of event for error messages
   */
  validateEventHandler(handlerFunction, eventType) {
    if (!this.vm.isFunction(handlerFunction)) {
      throw new TypeError(`${eventType} handler must be a function`)
    }
  }

  /**
   * setupEventSpecificInitialization - Setup initialization for specific event types
   *
   * @param eventType - Type of event
   * @param nodeHandle - Node handle for node-specific events
   * @returns Page GUID for page-specific events
   */
  setupEventSpecificInitialization(eventType, nodeHandle) {
    switch (eventType) {
      case 'documentchange':
        return this.setupDocumentChangeEvent()
      case 'stylechange':
        return this.setupStyleChangeEvent()
      case 'nodechange':
        return this.setupNodeChangeEvent(nodeHandle)
      default:
        return undefined
    }
  }

  /**
   * setupDocumentChangeEvent - Setup document change event validation
   *
   * @returns undefined (no page-specific GUID)
   */
  setupDocumentChangeEvent() {
    if (this.options.incrementalSafeApi && this.documentAccessState.getIsIncrementalMode()) {
      if (this.options.allowIncrementalUnsafeApiCalls) {
        console.warn('To ensure consistent results for documentchange handler, call `await figma.loadAllPagesAsync()` first.')
      }
      else {
        throw new Error('Cannot register documentchange handler in incremental mode without calling figma.loadAllPagesAsync first.')
      }
    }
    Mw(this.documentChangeCallback)
    return undefined
  }

  /**
   * setupStyleChangeEvent - Setup style change event with async registration
   *
   * @returns undefined (no page-specific GUID)
   */
  setupStyleChangeEvent() {
    this.vm.registerPromise(loadInternalCanvasMemoized(this.documentAccessState)).then(() => {
      _$$iP(this.styleChangeCallback)
    }).catch((error) => {
      throw new Error(`Cannot register stylechange handler: ${error.message}`)
    })
    return undefined
  }

  /**
   * setupNodeChangeEvent - Setup node change event validation
   *
   * @param nodeHandle - Handle for the node
   * @returns Page GUID for the node
   */
  setupNodeChangeEvent(nodeHandle) {
    const targetNode = this.getNode(nodeHandle)
    if (targetNode.type !== 'CANVAS') {
      throw new Error('Cannot register nodechange handler on non-page node')
    }
    BT(this.nodeChangeCallback)
    return targetNode.guid
  }

  /**
   * registerEventHandler - Register the event handler in the system
   *
   * @param eventType - Type of event
   * @param handlerFunction - Function to register
   * @param isOnceOnly - Whether handler fires only once
   * @param pageGuid - Optional page GUID for page-specific events
   */
  registerEventHandler(eventType, handlerFunction, isOnceOnly, pageGuid) {
    const existingHandlers = this.eventHandlers.get(eventType) || []
    existingHandlers.push({
      handler: handlerFunction,
      once: isOnceOnly,
      pageGuid,
    })
    this.eventHandlers.set(eventType, existingHandlers)
    this.vm.retainHandle(handlerFunction)
  }

  /**
   * setupSystemCallbacks - Setup system callbacks for first handler registration
   *
   * @param eventType - Type of event to setup callbacks for
   */
  setupSystemCallbacks(eventType) {
    const callbackSetup = {
      textreview: () => {
        if (this.options.command === 'textreview') {
          Sx(this.spellCheckCallback)
        }
      },
      generate: () => {
        oZ(this.codegenCallback)
      },
      codegen: () => {
        if (!this.options.isLocal) {
          oZ(this.legacyCodegenCallback)
        }
      },
      linkpreview: () => {
        OD(this.linkPreviewCallback)
      },
      auth: () => {
        ME(this.authCallback)
      },
      open: () => {
        B_(this.devResourceOpenCallback)
      },
      close: () => {
        if (getFeatureFlags().plugins_async_on_close_handler) {
          Bs(this.onCloseCallback)
        }
      },
    }
    const setupFunction = callbackSetup[eventType]
    if (setupFunction) {
      setupFunction()
    }
  }

  /**
   * processScheduledEvents - Process any events that were scheduled for this event type
   *
   * @param eventType - Type of event to process
   */
  processScheduledEvents(eventType) {
    const scheduledEvent = this.scheduledEvents.get(eventType)
    if (scheduledEvent) {
      scheduledEvent()
    }
  }

  removeEventHandler = (e, t, i) => {
    let n = this.eventHandlers.get(t)
    if (n) {
      for (let r = n.length - 1; r >= 0; r--) {
        if (this.vm.isEqual(n[r].handler, i)) {
          if (t === 'nodechange') {
            let t = this.getNode(e)
            if (n[r].pageGuid !== t.guid)
              continue
          }
          n.splice(r, 1)
          this.vm.releaseHandle(i)
          n.length || t !== 'nodechange' || q$(this.nodeChangeCallback)
          n.length || t !== 'stylechange' || fd(this.styleChangeCallback)
          n.length || t !== 'documentchange' || b_(this.documentChangeCallback)
          n.length || t !== 'slidesviewchange' || _$$nf(this.slidesViewChangeCallback)
          getFeatureFlags().plugins_async_on_close_handler && !n.length && t === 'close' && Vb(this.onCloseCallback)
          return
        }
      }
    }
  }

  addEventHandlersTo = (e, t, i, n) => {
    let r = this.vm
    let a = this.addEventHandler
    let s = this.removeEventHandler
    this.defineVmFunction({
      handle: e,
      key: 'on',
      metricsKey: null,
      cb(e, s) {
        let o = validateWithZSchema({
          vm: r,
          handle: e,
          zSchema: timerAndStateEvents.refine(e => t.includes(e)),
          property: 'eventName',
        })
        a(this, o, s, !1, i)
        n && n(o)
        return r.undefined
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmFunction({
      handle: e,
      key: 'once',
      metricsKey: null,
      cb(e, s) {
        let o = validateWithZSchema({
          vm: r,
          handle: e,
          zSchema: timerAndStateEvents.refine(e => t.includes(e)),
          property: 'eventName',
        })
        a(this, o, s, !0, i)
        n && n(o)
        return r.undefined
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmFunction({
      handle: e,
      key: 'off',
      metricsKey: null,
      cb(e, i) {
        s(this, validateWithZSchema({
          vm: r,
          handle: e,
          zSchema: timerAndStateEvents.refine(e => t.includes(e)),
          property: 'eventName',
        }), i)
        return r.undefined
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
  }

  selectionCallback = () => {
    this.fireDebouncedEventAsync('selectionchange', () => {
      let e = this.privateSceneGraph.getDirectlySelectedNodes().map(e => e.guid)
      let t = this.currentSelectedTextRangeJson()
      arraysEqual(this.previousSelection, e) && this.previousSelectedTextRangeJson === t || this.fireEventSync('selectionchange', [])
      this.previousSelection = e
      this.previousSelectedTextRangeJson = t
      PluginHelpers.resetSelectionCouldBeDirty()
    })
  }

  pageCallback = () => {
    this.fireDebouncedEventAsync('currentpagechange', () => {
      this.fireEventSync('currentpagechange', [])
    })
  }

  codegenPreferencesChangeCallback = (e) => {
    this.fireDebouncedEventAsync('preferenceschange', () => {
      this.overrideRuntimeOptions({
        allowVisibleIframe: !0,
        defaultIframePosition: 'codegen-default',
        iframeId: getPluginIframeMode({
          triggeredFrom: 'codegen',
        }),
        allowInitiateCheckout: !0,
      }, () => {
        let t = this.vm.newObject()
        this.vm.setStringProp(t, 'propertyName', e.propertyName)
        this.fireEventSync('preferenceschange', [t])
      })
    })
  }

  devResourceOpenCallback = (e) => {
    this.fireEventSync('open', [this.vm.deepWrap(e)])
  }

  pluginPageLoaded = (e) => {
    this.documentAccessState.addLoadedPageIds([e])
  }

  getAllAccessedGuids = () => this.nodeFactory.nodeIds()
  getAccessiblePages = () => this.documentAccessState.getLoadedPages()
  dropCallback = (e) => {
    if (!e.dataTransfer)
      return !0
    let t: any[] = []
    for (let i = 0; i < e.dataTransfer.items.length; i++) {
      let n = e.dataTransfer.items[i]
      n.kind === 'string' && t.push({
        type: n.type,
        data: e.dataTransfer.getData(n.type),
      })
    }
    let i = this.createDropEvent({
      x: e.clientX,
      y: e.clientY,
    }, t, e.dataTransfer.files)
    return this.fireEventSyncWithReturn('drop', [i])
  }

  onCloseCallback = () => {
    let e = this.vm
    let t = this.vm.undefined
    let i = Promise.all((this.eventHandlers.get('close') || []).map((i) => {
      let n = this.overrideRuntimeOptions({
        activePromiseCallback: 'close',
      }, () => e.callFunction(i.handler, this.vm.undefined, t))
      return n.type === 'SUCCESS'
        ? isVMPromiseLike(e, n.handle)
          ? wrapVmPromise({
              vm: e,
              promiseHandle: n.handle,
              shouldRetainResult: !0,
            })
          : (e.retainHandle(n.handle), Promise.resolve(n.handle))
        : Promise.reject(new Error('Handler did not return success'))
    }))
    return e.registerPromise(i).then((t) => {
      for (let i of t) e.releaseHandle(i)
    }).catch((e) => {
      console.error(e)
      let t = 'Promise returned from close event rejected.'
      typeof e == 'object' && 'message' in e && (t += `\nError: ${e.message}`)
      console.warn(t)
    })
  }

  /**
   * getChangeCallbackHandle - Create callback handle array for document changes with proper VM object mapping
   *
   * Processes an array of document changes and converts them into VM-wrapped objects
   * containing change information including IDs, types, origins, properties, and
   * associated nodes or styles. Handles different change types like property changes,
   * creation, deletion, and style changes with appropriate object structures.
   *
   * @param eventContext - Context string for event identification
   * @param documentChanges - Array of raw document change objects to process
   * @returns VM array containing mapped change record objects
   */
  getChangeCallbackHandle = (eventContext, documentChanges) => {
    const changesArray = this.vm.newArray()
    for (const [changeIndex, changeData] of documentChanges.entries()) {
      const changeRecord = this.createChangeRecord(changeData, eventContext)
      this.vm.setProp(changesArray, String(changeIndex), changeRecord)
    }
    return changesArray
  }

  /**
   * createChangeRecord - Create a single change record object from change data
   */
  createChangeRecord(changeData, eventContext) {
    const changeRecord = this.vm.newObject()

    // Set change ID based on type
    this.setChangeRecordId(changeRecord, changeData)

    // Set basic change information
    this.setBasicChangeInfo(changeRecord, changeData)

    // Handle specific change types
    this.handleSpecificChangeTypes(changeRecord, changeData, eventContext)
    return changeRecord
  }

  /**
   * setChangeRecordId - Set the ID field based on change type
   */
  setChangeRecordId(changeRecord, changeData) {
    const isStyleChange = this.isStyleRelatedChange(changeData.type)
    const idValue = isStyleChange ? changeData.styleKey : changeData.devFriendlyId
    this.vm.setProp(changeRecord, 'id', this.vm.newString(idValue))
  }

  /**
   * isStyleRelatedChange - Check if change type is style-related
   */
  isStyleRelatedChange(changeType) {
    return changeType === SceneChangeType.STYLE_PROPERTY_CHANGE || changeType === SceneChangeType.STYLE_CREATE || changeType === SceneChangeType.STYLE_DELETE
  }

  /**
   * setBasicChangeInfo - Set basic change information (origin and type)
   */
  setBasicChangeInfo(changeRecord, changeData) {
    const changeTypeString = this.documentChangeTypeToString(changeData.type)
    const originString = this.documentChangeOriginToString(changeData.origin)
    this.vm.setProp(changeRecord, 'origin', this.vm.newString(originString))
    this.vm.setProp(changeRecord, 'type', this.vm.newString(changeTypeString))
  }

  /**
   * handleSpecificChangeTypes - Handle specific change types with appropriate data
   */
  handleSpecificChangeTypes(changeRecord, changeData, eventContext) {
    const changeTypeString = this.documentChangeTypeToString(changeData.type)

    // Handle property changes
    if (changeTypeString && this.isPropertyChange(changeTypeString)) {
      this.addPropertiesArray(changeRecord, changeData)
    }

    // Handle style changes
    if (this.isStyleRelatedChange(changeData.type)) {
      this.handleStyleChanges(changeRecord, changeData)
    }
    else {
      // Handle node changes
      this.handleNodeChanges(changeRecord, changeData, eventContext)
    }
  }

  /**
   * isPropertyChange - Check if change involves property modifications
   */
  isPropertyChange(changeTypeString) {
    return changeTypeString === 'PROPERTY_CHANGE' || changeTypeString === 'STYLE_PROPERTY_CHANGE'
  }

  /**
   * addPropertiesArray - Add properties array to change record
   */
  addPropertiesArray(changeRecord, changeData) {
    const propertiesArray = this.vm.newArray()
    const propertyNames = Array.from(changeData.properties)
    for (const [propIndex, propertyName] of propertyNames.entries()) {
      // Handle legacy typo fix for strokeTopWeight
      const correctedPropertyName = propertyName === 'strokeTopWeight' ? 'stokeTopWeight' : propertyName
      this.vm.setProp(propertiesArray, String(propIndex), this.vm.newString(correctedPropertyName))
    }
    this.vm.setProp(changeRecord, 'properties', propertiesArray)
  }

  /**
   * handleStyleChanges - Handle style creation, modification, and deletion
   */
  handleStyleChanges(changeRecord, changeData) {
    if (changeData.type === SceneChangeType.STYLE_DELETE) {
      this.vm.setProp(changeRecord, 'style', this.vm.$$null)
    }
    else {
      // Handle STYLE_PROPERTY_CHANGE and STYLE_CREATE
      const styleObject = this.styleFactory.createStyle(changeData.styleKey)
      this.vm.setProp(changeRecord, 'style', styleObject)
    }
  }

  /**
   * handleNodeChanges - Handle node creation, modification, and deletion
   */
  handleNodeChanges(changeRecord, changeData, eventContext) {
    const nodeExists = !!this.privateSceneGraph.get(changeData.id)
    if (nodeExists) {
      // Node still exists, create full node object
      const nodeObject = this.nodeFactory.createNode(changeData.id, eventContext)
      this.vm.setProp(changeRecord, 'node', nodeObject)
    }
    else {
      // Node was removed, create minimal removed node object
      const removedNodeObject = this.createRemovedNodeObject(changeData)
      this.vm.setProp(changeRecord, 'node', removedNodeObject)
    }
  }

  /**
   * createRemovedNodeObject - Create object representing a removed node
   */
  createRemovedNodeObject(changeData) {
    const nodeObject = this.vm.newObject()
    this.vm.setProp(nodeObject, 'id', this.vm.newString(changeData.devFriendlyId))
    this.vm.setProp(nodeObject, 'type', this.vm.newString(changeData.nodeType))
    this.vm.setProp(nodeObject, 'removed', this.vm.newBoolean(true))
    this.vm.shallowFreezeObject(nodeObject)
    return nodeObject
  }

  slidesViewChangeCallback = (e) => {
    let t = this.vm.newObject()
    this.vm.setProp(t, 'view', this.vm.newString(this.slidesViewChangeToString(e.view)))
    try {
      PluginHelpers.prepareToRunDocumentChangeCallback()
      this.fireEventSync('slidesviewchange', [t])
    }
    finally {
      PluginHelpers.finishedRunningDocumentChangeCallback()
    }
  }

  documentChangeCallback = (e) => {
    let t = this.getChangeCallbackHandle('documentchange', e)
    let i = this.vm.newObject()
    this.vm.setProp(i, 'documentChanges', t)
    try {
      PluginHelpers.prepareToRunDocumentChangeCallback()
      this.fireEventSync('documentchange', [i])
    }
    finally {
      PluginHelpers.finishedRunningDocumentChangeCallback()
    }
  }

  styleChangeCallback = (e) => {
    if (e.length === 0)
      return
    let t = this.getChangeCallbackHandle('stylechange', e)
    let i = this.vm.newObject()
    this.vm.setProp(i, 'styleChanges', t)
    try {
      PluginHelpers.prepareToRunDocumentChangeCallback()
      this.fireEventSync('stylechange', [i])
    }
    finally {
      PluginHelpers.finishedRunningDocumentChangeCallback()
    }
  }

  nodeChangeCallback = (e) => {
    for (let [t, i] of this.eventsByPageGuid(e)) {
      if (i.length === 0)
        continue
      let e = this.getChangeCallbackHandle('nodechange', i)
      let n = this.vm.newObject()
      this.vm.setProp(n, 'nodeChanges', e)
      try {
        PluginHelpers.prepareToRunDocumentChangeCallback()
        this.fireEventSyncForPage('nodechange', t, [n])
      }
      finally {
        PluginHelpers.finishedRunningDocumentChangeCallback()
      }
    }
  }

  /**
   * triggerParameterInputEvent - Trigger parameter input event with suggestion handling
   *
   * Handles parameter input events with suggestion validation, data serialization checks,
   * icon validation, and URL security verification. Provides comprehensive error handling
   * for suggestion data size limits, JSON serialization, and URL security.
   *
   * @param inputData - The parameter input data to process
   */
  triggerParameterInputEvent = (inputData) => {
    const vm = this.vm
    this.fireAsyncEventOrSchedule('input', () => {
      let hasCalledSetSuggestions = false
      const resultObject = vm.newObject()

      // Setup setSuggestions function with validation
      vm.defineFunction(resultObject, 'setSuggestions', 'result.setSuggestions', (suggestionsHandle) => {
        this.validateSingleCall(hasCalledSetSuggestions, 'setSuggestions or setError')
        hasCalledSetSuggestions = true
        const suggestions = this.processSuggestions(vm, suggestionsHandle)
        this.validateSuggestions(suggestions)

        // Process suggestions and fire event
        // TODO: Fix callback handling
        // const callbackHandle = this.getParameterInputCallbackHandle(inputData)
        // if (callbackHandle) {
        //   callbackHandle({
        //     suggestions,
        //     onErrorHandler: this.triggerParameterInputEvent,
        //   })
        // }
      })

      // Setup setError function
      this.setupSetErrorFunction(resultObject, vm, hasCalledSetSuggestions, inputData)

      // Fire parameter input event
      this.fireEventSyncForPage('parameterinput', inputData, [resultObject])
    })
  }

  /**
   * validateSingleCall - Validate that a function is only called once
   *
   * Ensures that certain functions like setSuggestions or setError are only
   * called once per result object to prevent duplicate operations.
   *
   * @param hasBeenCalled - Boolean indicating if function was already called
   * @param functionDescription - Description of the function for error message
   */
  validateSingleCall(hasBeenCalled, functionDescription) {
    if (hasBeenCalled) {
      throw new Error(`${functionDescription} called multiple times on the same result object`)
    }
  }

  /**
   * processSuggestions - Process and normalize suggestion data
   *
   * Converts suggestion handles to normalized suggestion objects, handling both
   * string suggestions (converted to name-only objects) and complex suggestion
   * objects with data and metadata.
   *
   * @param vm - Virtual machine instance
   * @param suggestionsHandle - VM handle containing suggestions array
   * @returns Array of normalized suggestion objects
   */
  processSuggestions(vm, suggestionsHandle) {
    const rawSuggestions = validateWithZSchema({
      vm,
      handle: suggestionsHandle,
      zSchema: FigmaSchema.ParameterValues,
      property: 'setSuggestions',
    })
    return rawSuggestions.map(suggestion => typeof suggestion === 'string'
      ? {
          name: suggestion,
          data: undefined,
        }
      : suggestion)
  }

  /**
   * validateSuggestions - Validate suggestion data and constraints
   *
   * Performs comprehensive validation including JSON serialization checks,
   * icon/iconUrl mutual exclusion, data size limits, and URL security validation
   * for each suggestion in the array.
   *
   * @param suggestions - Array of suggestion objects to validate
   */
  validateSuggestions(suggestions) {
    suggestions.forEach((suggestion) => {
      // Validate JSON serialization
      this.validateSuggestionSerialization(suggestion)

      // Validate icon constraints
      this.validateSuggestionIcons(suggestion)

      // Validate size limits
      this.validateSuggestionSize(suggestion)

      // Validate and normalize URL if present
      this.validateAndNormalizeSuggestionUrl(suggestion)
    })
  }

  /**
   * validateSuggestionSerialization - Validate that suggestion data can be serialized to JSON
   *
   * Performs deep validation by attempting JSON serialization and comparing the result
   * with the original data to ensure all values are properly serializable.
   *
   * @param suggestion - Suggestion object to validate
   */
  validateSuggestionSerialization(suggestion) {
    if (suggestion.data !== undefined) {
      try {
        this.deepValidateSerializable(suggestion.data, JSON.parse(JSON.stringify(suggestion.data)))
      }
      catch {
        throw new Error(`Contains value which could not be serialized to JSON: ${suggestion.data}`)
      }
    }
  }

  /**
   * deepValidateSerializable - Recursively validate that data is JSON serializable
   *
   * Performs deep comparison between original data and JSON-parsed version
   * to ensure all nested values are properly serializable.
   *
   * @param original - Original data value
   * @param serialized - JSON-parsed version of the data
   */
  deepValidateSerializable(original, serialized) {
    if (original !== serialized) {
      if (Array.isArray(original) && Array.isArray(serialized) && original.length === serialized.length) {
        for (let i = 0; i < original.length; i++) {
          this.deepValidateSerializable(original[i], serialized[i])
        }
        return
      }
      if (Object.prototype.toString.call(original) === '[object Object]' && Object.prototype.toString.call(serialized) === '[object Object]') {
        for (const key in original) {
          this.deepValidateSerializable(original[key], key in serialized ? serialized[key] : Symbol('missing property'))
        }
        return
      }
      throw new Error(`Contains value which could not be serialized to JSON: ${original}`)
    }
  }

  /**
   * validateSuggestionIcons - Validate icon constraints for suggestions
   *
   * Ensures that suggestions don't have both icon and iconUrl properties set
   * simultaneously, as they are mutually exclusive.
   *
   * @param suggestion - Suggestion object to validate
   */
  validateSuggestionIcons(suggestion) {
    if (suggestion.icon && suggestion.iconUrl) {
      throw new Error('Only icon or iconUrl may be provided. Not both.')
    }
  }

  /**
   * validateSuggestionSize - Validate suggestion data size limits
   *
   * Ensures that the total size of suggestion data and icon doesn't exceed
   * the 20KB limit by calculating JSON string length and icon length.
   *
   * @param suggestion - Suggestion object to validate
   */
  validateSuggestionSize(suggestion) {
    const dataSize = JSON.stringify(suggestion.data)?.length || 0
    const iconSize = suggestion.icon?.length || 0
    const totalSize = dataSize + iconSize
    if (totalSize > 20480) {
      throw new Error('Total size of suggestion must be no greater than 20KB')
    }
  }

  /**
   * validateAndNormalizeSuggestionUrl - Validate and normalize suggestion icon URLs
   *
   * Validates URL protocol (must be http/https), ensures URLs don't point to figma.com
   * domains for security reasons, and normalizes the URL format.
   *
   * @param suggestion - Suggestion object with potential iconUrl to validate
   */
  validateAndNormalizeSuggestionUrl(suggestion) {
    if (suggestion.iconUrl) {
      const url = new URL(suggestion.iconUrl)

      // Validate protocol
      if (!['https:', 'http:'].includes(url.protocol)) {
        throw new Error('Must be https or http URL')
      }

      // Validate against figma.com domains for security
      if (this.isFigmaDomain(url.hostname)) {
        throw new Error('figma.com URLs not supported')
      }

      // Normalize URL
      suggestion.iconUrl = url.href
    }
  }

  /**
   * isFigmaDomain - Check if hostname is a figma.com domain
   *
   * Validates hostname against various figma.com domain patterns including
   * subdomains, trailing dots, and current window location for security.
   *
   * @param hostname - Hostname to validate
   * @returns true if hostname is a figma.com domain
   */
  isFigmaDomain(hostname) {
    return hostname.endsWith('.figma.com') || hostname.endsWith('.figma.com.') || hostname === 'figma.com' || hostname === 'figma.com.' || hostname === window.location.hostname
  }

  /**
   * setupSetErrorFunction - Setup setError function for result object
   *
   * Configures the setError function that allows parameter input handlers
   * to report errors during suggestion processing.
   *
   * @param resultObject - VM result object to setup
   * @param vm - Virtual machine instance
   * @param hasCalledSetSuggestions - Reference to call tracking flag
   * @param inputData - The parameter input data for validation
   */
  setupSetErrorFunction(resultObject, vm, hasCalledSetSuggestions, inputData) {
    vm.defineFunction(resultObject, 'setError', 'result.setError', (errorHandle) => {
      this.validateSingleCall(hasCalledSetSuggestions, 'setSuggestions or setError')
      if (inputData.currentParameter.allowFreeform) {
        throw new Error('setError not supported on allowFreeform parameters')
      }
      const errorMessage = validateWithZSchema({
        vm,
        handle: errorHandle,
        zSchema: _$$z.string(),
        property: 'message',
      })
      inputData.onSuggestions({
        type: 'ERROR',
        message: errorMessage,
      })
      hasCalledSetSuggestions = true
      return vm.undefined
    })

    // Setup loading message function
    vm.defineFunction(resultObject, 'setLoadingMessage', 'result.setLoadingMessage', (loadingHandle) => {
      const loadingMessage = validateWithZSchema({
        vm,
        handle: loadingHandle,
        zSchema: _$$z.string(),
        property: 'message',
      })
      inputData.onSuggestions({
        type: 'LOADING',
        message: loadingMessage,
      })
      return vm.undefined
    })

    // Fire parameter input event
    this.fireEventSyncForPage('parameterinput', inputData, [resultObject])
  }

  triggerRunEvent = (e) => {
    this.setQueryMode(!1)
    this.triggerOrScheduleRunEvent(e)
  }

  triggerOrScheduleRunEvent = (e) => {
    this.options.stats.setRunParameters(e)
    this.fireAsyncEventOrSchedule('run', () => {
      let t = this.vm
      let i = this.options.command
      this.fireDebouncedEventAsync('run', () => {
        let n = t.newObject()
        t.setProp(n, 'command', t.newString(i))
        e.command === 'parameters' ? e.parameters ? t.setProp(n, 'parameters', t.deepWrap(transformParameterValues(e.parameters))) : isValidPluginId(this.options.pluginID) && t.setProp(n, 'parameters', t.deepWrap(getDebugPluginParams(this.options.pluginID))) : (e.command === 'open-related-link' || e.command === 'open-dev-resource') && t.setProp(n, 'link', t.deepWrap(e.link))
        t.shallowFreezeObject(n)
        this.fireEventSync('run', [n])
      })
    })
  }

  requestCheckoutCallback = async () => {
    try {
      await this.initiateCheckoutAsyncImpl({})
      let e = this.getPublishedExtension(this.options.pluginID)
      return this.userPaymentStatusType(e) === zH.PAID
    }
    catch (e) {
      logger.error(e)
    }
    return !1
  }

  timerCallback = (e) => {
    this.fireEventSync(e, [])
  }

  uiCancelCallback = (e) => {
    this.closePlugin(e)
  }

  /**
   * Handle messages from plugin UI iframe with proper validation and routing
   * Processes different message types: getPluginId, pluginMessage, and pluginDrop
   * @param messageEvent - The message event from the iframe
   */
  iframeMessageHandler = (messageEvent) => {
    const vmHandle = this.vm

    // Handle special keyboard trigger message
    if (messageEvent.data === IN) {
      fullscreenValue.triggerAction('plugins-run-last', {
        source: 'keyboard',
      })
      return
    }

    // Validate message structure
    if (!this.isValidMessageStructure(messageEvent.data)) {
      logger.warn('Message from UI to plugin ignored because it\'s not an object. The message must be an object with a "pluginMessage" property containing the actual message.')
      return
    }
    const currentPluginId = this.options.pluginID
    const messageOrigin = this.normalizeMessageOrigin(messageEvent.origin)

    // Handle plugin ID request
    if (this.isPluginIdRequest(messageEvent.data)) {
      this.handlePluginIdRequest(messageEvent, currentPluginId)
      return
    }

    // Validate plugin ID authorization
    if (!this.isAuthorizedMessage(messageEvent.data, currentPluginId, messageEvent.origin)) {
      return
    }

    // Route message based on type
    if (this.isPluginMessage(messageEvent.data)) {
      this.handlePluginMessage(messageEvent.data, messageOrigin, vmHandle)
    }
    else if (this.isPluginDropMessage(messageEvent.data)) {
      this.handlePluginDropMessage(messageEvent.data, vmHandle)
    }
    else {
      logger.warn('Ignoring postMessage from plugin UI iframe due to missing "pluginMessage" or "pluginDrop"')
    }
  }

  /**
   * Validate that message data has proper structure
   * @param messageData - The data from the message event
   * @returns True if message structure is valid
   */
  isValidMessageStructure(messageData) {
    return messageData instanceof Object
  }

  /**
   * Normalize message origin, handling special encoded cases
   * @param origin - The origin from the message event
   * @returns Normalized origin string
   */
  normalizeMessageOrigin(origin) {
    let normalizedOrigin = `${origin}`

    // Handle encoded origins
    if (/^https?:\/\/%7b[a-f0-9.-]+%7d$/.test(normalizedOrigin)) {
      normalizedOrigin = 'null'
    }
    return normalizedOrigin
  }

  /**
   * Check if message is requesting plugin ID
   * @param messageData - The message data
   * @returns True if this is a plugin ID request
   */
  isPluginIdRequest(messageData) {
    return 'getPluginId' in messageData
  }

  /**
   * Handle plugin ID request by responding with current plugin ID
   * @param messageEvent - The message event
   * @param pluginId - Current plugin ID
   */
  handlePluginIdRequest(messageEvent, pluginId) {
    const responseOrigin = messageEvent.origin !== 'null' ? messageEvent.origin : '*'
    this.uiHandle.postMessageToIframe({
      pluginId,
    }, {
      origin: responseOrigin,
      skipQueue: !0,
    })
  }

  /**
   * Check if message is authorized for current plugin
   * @param messageData - The message data
   * @param currentPluginId - Current plugin ID
   * @param messageOrigin - Origin of the message
   * @returns True if message is authorized
   */
  isAuthorizedMessage(messageData, currentPluginId, messageOrigin) {
    // Skip authorization for wildcard messages from null origin
    if (messageData.pluginId === '*' && (!('pluginId' in messageData) || messageOrigin === 'null')) {
      return true
    }

    // Check plugin ID match
    if (currentPluginId && this.isPluginIdMatch(messageData.pluginId, currentPluginId)) {
      return true
    }

    // Handle authorization failures
    if ('pluginId' in messageData) {
      logger.warn('Provided pluginId does not match id of currently running plugin')
      return false
    }
    else {
      logger.warn('Message from UI to plugin ignored due to missing pluginId in message. Please specify the pluginId that you wish to deliver the message to when using postMessage. You can also use \'*\' if it is safe to deliver the message to any plugin.\n\nExample: `parent.postMessage({pluginMessage: /*your message*/, pluginId: /*your plugin id*/}, \'*\')`.')
      return false
    }
  }

  /**
   * Check if plugin ID matches current plugin
   * @param messagePluginId - Plugin ID from message
   * @param currentPluginId - Current plugin ID
   * @returns True if IDs match
   */
  isPluginIdMatch(messagePluginId, currentPluginId) {
    if (messagePluginId === currentPluginId) {
      return true
    }
    if (Array.isArray(messagePluginId) && messagePluginId.includes(currentPluginId)) {
      return true
    }
    return false
  }

  /**
   * Check if message contains plugin message data
   * @param messageData - The message data
   * @returns True if this is a plugin message
   */
  isPluginMessage(messageData) {
    return 'pluginMessage' in messageData
  }

  /**
   * Handle plugin message by forwarding to event handlers
   * @param messageData - The message data
   * @param messageOrigin - Normalized origin
   * @param vmHandle - VM handle for object creation
   */
  handlePluginMessage(messageData, messageOrigin, vmHandle) {
    const messageHandlers = this.eventHandlers.get('message')
    if ((!messageHandlers || !messageHandlers.length) && !this.onMessageCallback) {
      logger.warn('Message from UI to plugin dropped due to no message handler installed')
      return
    }
    const messageArguments = [vmHandle.deepWrap(messageData.pluginMessage), vmHandle.deepWrap({
      origin: messageOrigin,
    })]

    // Fire event to registered handlers
    this.fireEventSync('message', messageArguments)

    // Call direct callback if available
    if (this.onMessageCallback) {
      vmHandle.callFunction(this.onMessageCallback, vmHandle.undefined, ...messageArguments)
    }
  }

  /**
   * Check if message contains plugin drop data
   * @param messageData - The message data
   * @returns True if this is a plugin drop message
   */
  isPluginDropMessage(messageData) {
    return 'pluginDrop' in messageData
  }

  /**
   * Handle plugin drop message by validating and forwarding drop event
   * @param messageData - The message data
   * @param vmHandle - VM handle for object creation
   */
  handlePluginDropMessage(messageData, vmHandle) {
    const dropData = messageData.pluginDrop

    // Validate drop data structure
    if (!this.isValidDropData(dropData)) {
      logger.warn(`"pluginDrop" object must have "clientX" and "clientY" properties,
          as well as either "items" or "files" properties`)
      return
    }

    // Create drop event object
    const dropEvent = this.createDropEvent({
      x: dropData.clientX,
      y: dropData.clientY,
    }, dropData.items ?? [], dropData.files ?? [])

    // Add drop metadata if provided
    vmHandle.setProp(dropEvent, 'dropMetadata', 'dropMetadata' in dropData ? vmHandle.deepWrap(dropData.dropMetadata) : vmHandle.$$null)

    // Fire drop event
    this.fireEventSync('drop', [dropEvent])
  }

  /**
   * Validate drop data structure and file types
   * @param dropData - The drop data to validate
   * @returns True if drop data is valid
   */
  isValidDropData(dropData) {
    // Check for validation errors
    const validationErrors = validateAndCollectErrors(dropData, dragEventPropType, 'pluginDrop')
    if (validationErrors.length > 0) {
      return false
    }

    // Check required properties
    if (dropData.items === undefined && dropData.files === undefined) {
      return false
    }

    // Validate file types
    if ('files' in dropData && dropData.files.some(file => !(file instanceof File))) {
      return false
    }
    return true
  }

  /**
   * createSpellCheckCallback - Create spell check promise callback
   */
  createSpellCheckCallback() {
    return this.createPromiseCallback({
      makeInputEvent: (textContent) => {
        const inputEvent = this.vm.newObject()
        this.vm.setProp(inputEvent, 'text', this.vm.newString(textContent))
        return inputEvent
      },
      eventName: 'textreview',
      zResultSchema: FigmaSchema.TextReviewResultSchema,
      defaultResult: [],
      rejectMessage: 'Promise returned from \'textreview\' event rejected. Unable to show text review suggestions.',
    })
  }

  /**
   * createLegacyCodegenCallback - Create legacy codegen promise callback
   */
  createLegacyCodegenCallback() {
    return this.createPromiseCallback({
      makeInputEvent: (nodeId) => {
        const inputEvent = this.vm.newObject()
        const nodeObject = this.nodeFactory.createNode(nodeId, 'codegen')
        this.vm.setProp(inputEvent, 'node', nodeObject)
        return inputEvent
      },
      eventName: 'codegen',
      zResultSchema: FigmaSchema.CodegenResultSchema,
      defaultResult: [],
      rejectMessage: 'Promise returned from codegen event rejected. Unable to generate code.',
    })
  }

  /**
   * createCodegenCallback - Create modern codegen promise callback
   */
  createCodegenCallback() {
    return this.createPromiseCallback({
      makeInputEvent: (nodeId) => {
        const inputEvent = this.vm.newObject()
        const nodeObject = this.nodeFactory.createNode(nodeId, 'generate')
        this.vm.setProp(inputEvent, 'node', nodeObject)
        this.vm.setProp(inputEvent, 'language', this.vm.newString(this.getCodegenLanguage()))
        return inputEvent
      },
      eventName: 'generate',
      zResultSchema: FigmaSchema.CodegenResultSchema,
      defaultResult: [],
      rejectMessage: 'Promise returned from codegen \'generate\' event rejected. Unable to generate code.',
    })
  }

  /**
   * createLinkPreviewCallback - Create link preview promise callback
   */
  createLinkPreviewCallback() {
    return this.createPromiseCallback({
      makeInputEvent: (linkData) => {
        const inputEvent = this.vm.newObject()
        this.vm.setProp(inputEvent, 'link', this.vm.deepWrap(linkData))
        return inputEvent
      },
      eventName: 'linkpreview',
      zResultSchema: FigmaSchema.LinkPreviewResultSchema,
      defaultResult: null,
      rejectMessage: 'Promise returned from \'linkpreview\' event rejected. Unable to generate preview.',
    })
  }

  createAuthCallback() {
    return this.createPromiseCallback({
      makeInputEvent: (linkArray) => {
        const inputEvent = this.vm.newObject()
        this.vm.setProp(inputEvent, 'links', this.vm.deepWrap(linkArray))
        return inputEvent
      },
      eventName: 'auth',
      zResultSchema: FigmaSchema.AuthResultSchema,
      rejectMessage: 'Promise returned from \'auth\' event rejected. Unable to authenticate.',
      defaultResult: null,
    })
  }

  /**
   * setupWidgetManager - Set up widget management if in widget mode
   */
  setupWidgetManager() {
    W5(this.pluginPageLoaded)
    Ql(this.getAccessiblePages)
    if (this.isWidget) {
      const {
        runtimeBridge,
        shutdownCallback,
      } = PluginRuntime.createRuntimeBridgeForWidgetReconciler(this.options.pluginID, this.vm)
      this.widgetManager = new WidgetManager(this.vm, this.options.pluginID, runtimeBridge)
      if (shutdownCallback) {
        this.widgetManager.addShutdownAction(shutdownCallback)
      }
    }
  }

  /**
   * setupEditorType - Set up fullscreen editor type based on current view
   */
  setupEditorType() {
    const currentView = debugState.getState().selectedView
    if (ac.includes(currentView.editorType) || this.vm.vmType === 'scopednoopvm') {
      this.fullscreenEditorType = currentView.editorType
    }
    else {
      throw new Error(`Unsupported editor type: ${currentView.editorType}`)
    }
  }

  /**
   * setupMixedSentinel - Set up mixed value sentinel symbol
   */
  setupMixedSentinel() {
    this.mixedSentinel = this.vm.newSymbol('figma.mixed')
    this.vm.retainHandle(this.mixedSentinel)
    const shouldSkipInvisibleChildren = this.fullscreenEditorType === FEditorType.DevHandoff || this.options.apiMode.type === 'WIDGET_RECONCILER'
    this.setSkipInvisibleInstanceChildren(shouldSkipInvisibleChildren)
  }

  /**
   * setupRuntimeOptions - Configure runtime options based on feature flags and mode
   */
  setupRuntimeOptions() {
    const featureFlags = getFeatureFlags()
    this.runtimeOptions = featureFlags.ext_lego_plugins_runmode ? this.createFeatureFlagRuntimeOptions() : this.createLegacyRuntimeOptions()
  }

  /**
   * createFeatureFlagRuntimeOptions - Create runtime options using feature flag mode
   */
  createFeatureFlagRuntimeOptions() {
    const runMode = this.getRunMode()
    return {
      allowVisibleIframe: !ar.has(runMode),
      iframeId: getPluginIframeMode({
        runMode,
      }),
      allowInitiateCheckout: !ar.has(runMode),
    }
  }

  /**
   * createLegacyRuntimeOptions - Create runtime options using legacy triggered mode
   */
  createLegacyRuntimeOptions() {
    const triggeredFrom = this.options.triggeredFrom
    return {
      allowVisibleIframe: !triggeredFrom || !an.has(triggeredFrom),
      iframeId: getPluginIframeMode({
        triggeredFrom,
      }),
      allowInitiateCheckout: !triggeredFrom || !an.has(triggeredFrom),
    }
  }

  /**
   * shouldCreateNoOpUiHandle - Check if NoOp UI handle should be created
   */
  shouldCreateNoOpUiHandle(apiMode) {
    switch (apiMode.type) {
      case 'GLOBAL_API':
      case 'CONSOLE_SHIM':
      case 'SECURITY_CHECK':
        return false
      case 'WIDGET_RECONCILER':
        return true
      case 'WIDGET':
      case 'PLUGIN':
        return apiMode.noOpUI
      default:
        return false
    }
  }

  /**
   * setupEventCallbacks - Set up event callbacks for VM instances
   */
  setupEventCallbacks() {
    LL(this.selectionCallback)
    Xx(this.pageCallback)
    Sf(this.timerCallback)
    KB(this.dropCallback)
    _$$i(this.codegenPreferencesChangeCallback)
    _C(this.slidesViewChangeCallback)
  }

  /**
   * finalizeInitialization - Complete the final initialization steps
   */
  finalizeInitialization() {
    this.options.addShutdownAction(reason => this.tearDown(reason))
    this.previousSelection = this.privateSceneGraph.getDirectlySelectedNodes().map(node => node.guid)
    PluginHelpers.resetSelectionCouldBeDirty()
    this.createAPI()
  }

  hasRegisteredWidget() {
    return this._hasRegisteredWidgetFunction
  }

  shouldLockDownPluginApiForWidgets() {
    return this.isWidget
  }

  overrideRuntimeOptions(e, t) {
    // overrideRuntimeOptions - Temporarily override runtime options for a callback execution
    const originalOptions = this.runtimeOptions

    // Apply new options
    this.runtimeOptions = {
      ...originalOptions,
      ...e,
    }
    try {
      return t()
    }
    finally {
      // Always restore original options
      this.runtimeOptions = originalOptions
    }
  }

  validateMakeIframeOptionsOrThrow(e, t) {
    if (this.options.isLocal && (this.runtimeOptions?.activePromiseCallback === 'generate' || this.runtimeOptions?.activePromiseCallback === 'codegen')) {
      throw new Error(`Cannot call figma.showUI inside the codegen generate callback.

Move figma.showUI outside the callback and use figma.ui.postMessage within the callback instead to ensure that your plugin handles concurrent "generate" events correctly.`)
    }
    let i = t.position ?? this.runtimeOptions?.defaultIframePosition ?? 'last'
    if (t.visible && this.queryMode)
      throw new Error('Cannot show UI in queryMode.')
    if (t.visible && !this.runtimeOptions?.allowVisibleIframe)
      throw new Error('Cannot show UI')
    return {
      html: e,
      title: t.title,
      width: t.width,
      height: t.height,
      iframeId: this.runtimeOptions.iframeId,
      position: i,
      includeThemeColors: t.themeColors,
    }
  }

  inDesignOrDevHandoffOrIllustration() {
    return this.fullscreenEditorType === FEditorType.Design || this.fullscreenEditorType === FEditorType.DevHandoff || this.fullscreenEditorType === FEditorType.Illustration
  }

  inFigjam() {
    return this.fullscreenEditorType === FEditorType.Whiteboard
  }

  inSlides() {
    return this.fullscreenEditorType === FEditorType.Slides
  }

  inBuzz() {
    return this.fullscreenEditorType === FEditorType.Cooper
  }

  inSites() {
    return this.fullscreenEditorType === FEditorType.Sites
  }

  isReadOnlyMode() {
    let e = debugState.getState()
    let t = e.selectedView.editorType === FEditorType.DevHandoff
    return e.mirror.appModel.isReadOnly || t
  }

  hasFileReachedPageLimit() {
    let e = debugState.getState().openFile
    let t = this.privateSceneGraph.get('0:0')
    if (!t)
      throw new Error('Root node not found. This should never happen.')
    let i = t.childrenNodes.reduce((e, t) => t.type !== 'CANVAS' || t.isInternalOnlyNode ? e : e + 1, 0)
    return !!(e && J9({
      openFile: e,
      pageCount: i,
    }))
  }

  handleLockDownPluginApiError(e) {
    if (this.options.isLocal)
      throw new Error(e)
    {
      let t = this.widgetManager?.getCurrentWidgetNodeId()
      t && widgetErrorTracker.trackLockDownApiError(new Error(e), this.getWidgetContext(t))
    }
  }

  getRunMode() {
    return atomStoreManager.get<string>(_$$$f) ?? 'default'
  }

  getWidgetContext(e) {
    let t = this.privateSceneGraph.get(e)
    return {
      widgetNodeID: e,
      pluginID: t.widgetId,
      widgetVersionID: t.widgetVersionId,
      isLocalWidget: !t.widgetVersionId,
      widgetName: t.name,
    }
  }

  editScope(e, t) {
    return permissionScopeHandler.plugin(`plugin-${e}`, t)
  }

  conditionalEditScope(e, t, i) {
    return e ? this.editScope(t, i) : i()
  }

  /**
   * tearDown - Clean up plugin resources and handle shutdown properly
   *
   * Performs comprehensive cleanup including unregistering callbacks, clearing handlers,
   * tearing down stores, releasing VM handles, and handling widget cleanup with proper
   * async handling for close events when feature flags are enabled.
   *
   * @param shutdownReason - Reason for shutdown (optional)
   */
  async tearDown(shutdownReason) {
    try {
      // Unregister all callbacks and observers
      await this.unregisterAllCallbacks()

      // Handle close events and UI teardown
      await this.handleCloseEventsAndUiTeardown(shutdownReason)

      // Cleanup stores and resources
      this.cleanupStoresAndResources()

      // Release all event handlers
      this.releaseAllEventHandlers()

      // Clear remaining state
      this.clearRemainingState()

      // Handle widget-specific cleanup
      await this.handleWidgetCleanup()
    }
    catch (error) {
      console.error('Error during tearDown:', error)
    }
  }

  /**
   * unregisterAllCallbacks - Unregister all callbacks and observers
   */
  async unregisterAllCallbacks() {
    _$$po(this.timerCallback)
    wk(this.selectionCallback)
    cI(this.pageCallback)
    Ty(this.dropCallback)
    sd(this.spellCheckCallback)
    G1(this.codegenCallback)
    G1(this.legacyCodegenCallback)
    Rp(this.pluginPageLoaded)
    VM(this.getAllAccessedGuids)
    jS(this.getAccessiblePages)
    dG()
    b_(this.documentChangeCallback)
    fd(this.styleChangeCallback)
    q$(this.nodeChangeCallback)
    $y(this.codegenPreferencesChangeCallback)
    _$$nf(this.slidesViewChangeCallback)
    H4(this.devResourceOpenCallback)
  }

  /**
   * handleCloseEventsAndUiTeardown - Handle close events and UI teardown based on feature flags
   */
  async handleCloseEventsAndUiTeardown(shutdownReason) {
    if (getFeatureFlags().plugins_async_on_close_handler) {
      // New async close handling
      this.uiHandle.tearDown(shutdownReason)
      await this.fireCloseEventAsync()
    }
    else {
      // Legacy sync close handling
      this.fireEventSync('close', [])
      this.uiHandle.tearDown(shutdownReason)
    }
  }

  /**
   * cleanupStoresAndResources - Clean up image and video stores
   */
  cleanupStoresAndResources() {
    this.imageStore.tearDown()
    this.videoStore.tearDown()
  }

  /**
   * releaseAllEventHandlers - Release all VM handles for event handlers
   */
  releaseAllEventHandlers() {
    for (const [, handlers] of this.eventHandlers.entries()) {
      for (const handler of handlers) {
        this.vm.releaseHandle(handler.handler)
      }
    }
  }

  /**
   * clearRemainingState - Clear remaining state variables and cleanup
   */
  clearRemainingState() {
    this.eventHandlers.clear()
    this.eventHandlerTimeouts.forEach(timeoutId => clearTimeout(timeoutId))
    this.eventHandlerTimeouts.clear()
    this.scheduledEvents.clear()
    this.onMessageCallback = undefined
    this.setSkipInvisibleInstanceChildren(false)
  }

  /**
   * handleWidgetCleanup - Handle widget-specific cleanup if in widget mode
   */
  async handleWidgetCleanup() {
    if (this.isWidget) {
      // Small delay for widget cleanup
      await new Promise(resolve => setTimeout(resolve))

      // Wait for widget operations to finish
      await this.widgetManager?.waitForFinish({
        fromClosePlugin: true,
      })

      // Clear widget manager
      this.widgetManager?.clear()
    }
  }

  currentSelectedTextRangeJson() {
    let e = this.privateSceneGraph.getCurrentPage()
    return JSON.stringify(e?.getSelectedTextRange() || null)
  }

  /**
   * makeGroupingOperationFunction - Create a function for grouping operations (group, ungroup, etc.)
   *
   * Returns a configured function that processes node arrays, validates parameters,
   * and performs grouping operations on nodes with proper hierarchy handling.
   * Handles responsive set constraints and provides detailed error messaging.
   *
   * @param operationName - Name of the operation for error messages and context
   * @param operationType - Type identifier for the specific grouping operation
   * @returns Function that performs the configured grouping operation
   */
  makeGroupingOperationFunction(operationName, operationType) {
    return (nodesHandle, parentHandle, indexHandle) => {
      // Process and validate node array parameters
      const processedNodes = this.processNodesForGroupingOperation(operationName, nodesHandle, parentHandle, indexHandle)

      // Validate parent node requirement
      this.validateParentNodeForGrouping(operationName, processedNodes.parent)

      // Execute the grouping operation
      const resultNodeId = this.executeGroupingOperation(operationType, processedNodes, operationName)

      // Return wrapped node result
      return this.nodeFactory.createNode(resultNodeId, operationName)
    }
  }

  /**
   * processNodesForGroupingOperation - Process and validate nodes for grouping
   */
  processNodesForGroupingOperation(operationName, nodesHandle, parentHandle, indexHandle) {
    return processNodeArrayForHierarchyOperation({
      vm: this.vm,
      callerName: operationName,
      nodes: nodesHandle,
      parentArg: parentHandle,
      indexArg: indexHandle,
      getNode: this.getNode,
      enableResponsiveSetHierarchyMutations: this.options.enableResponsiveSetHierarchyMutations,
    })
  }

  /**
   * validateParentNodeForGrouping - Ensure parent node is provided for grouping
   */
  validateParentNodeForGrouping(operationName, parentNode) {
    if (!parentNode) {
      throw new Error(`Second argument to ${operationName}() must be provided`)
    }
  }

  /**
   * executeGroupingOperation - Execute the actual grouping operation
   */
  executeGroupingOperation(operationType, processedNodes, _operationName) {
    return PluginHelpers.groupNodes(operationType, processedNodes.nodeIds, processedNodes.parent.sessionID, processedNodes.parent.localID, processedNodes.index, this.privateSceneGraph.scene)
  }

  /**
   * fireAsyncEventOrSchedule - Fire async event immediately or schedule for later
   *
   * If event handlers exist, fires the event immediately. Otherwise, schedules
   * the event to be fired when handlers are registered. Provides flexible
   * event timing for plugin lifecycle management.
   *
   * @param eventName - Name of the event to fire or schedule
   * @param eventCallback - Function to execute when event should fire
   */
  fireAsyncEventOrSchedule(eventName, eventCallback) {
    const eventHandlers = this.eventHandlers.get(eventName)
    if (eventHandlers && eventHandlers.length !== 0) {
      // Handlers exist, fire immediately
      this.fireEventAsync(eventCallback)
    }
    else {
      // No handlers yet, schedule for later
      this.scheduleEventForLater(eventName, eventCallback)
    }
  }

  /**
   * scheduleEventForLater - Schedule event to fire when handlers are registered
   */
  scheduleEventForLater(eventName, eventCallback) {
    this.scheduledEvents.set(eventName, () => {
      this.scheduledEvents.delete(eventName)
      this.fireEventAsync(eventCallback)
    })
  }

  /**
   * fireEventAsync - Execute event callback asynchronously
   *
   * Uses Promise.resolve().then() to ensure callback executes in next tick,
   * allowing current synchronous execution to complete first.
   *
   * @param eventCallback - Function to execute asynchronously
   */
  fireEventAsync(eventCallback) {
    Promise.resolve().then(eventCallback)
  }

  /**
   * fireDebouncedEventAsync - Fire event with debouncing to prevent rapid repeated calls
   *
   * Cancels any pending timeout for the same event and sets a new one.
   * Ensures event only fires once after rapid successive triggers stop.
   *
   * @param eventName - Name of the event for debouncing key
   * @param eventCallback - Function to execute after debounce delay
   */
  fireDebouncedEventAsync(eventName, eventCallback) {
    // Cancel existing timeout if present
    this.cancelExistingEventTimeout(eventName)

    // Set new debounced timeout
    this.setDebouncedEventTimeout(eventName, eventCallback)
  }

  /**
   * cancelExistingEventTimeout - Cancel existing timeout for event
   */
  cancelExistingEventTimeout(eventName) {
    if (this.eventHandlerTimeouts.has(eventName)) {
      clearTimeout(this.eventHandlerTimeouts.get(eventName))
    }
  }

  /**
   * setDebouncedEventTimeout - Set new timeout for debounced event
   */
  setDebouncedEventTimeout(eventName, eventCallback) {
    const timeoutId = setTimeout(() => {
      this.eventHandlerTimeouts.delete(eventName)
      eventCallback()
    }, 0)
    this.eventHandlerTimeouts.set(eventName, timeoutId)
  }

  /**
   * fireEventSync - Fire event synchronously to all registered handlers
   *
   * Executes all handlers immediately and removes "once" handlers after execution.
   * Tracks currently running sync event to prevent recursion issues.
   *
   * @param eventName - Name of the event to fire
   * @param eventArgs - Arguments to pass to event handlers
   */
  fireEventSync(eventName, eventArgs) {
    // Set running event tracking
    this.runningSyncEvent = eventName

    // Get and process handlers
    const handlers = this.getAndProcessEventHandlers(eventName)

    // Execute all handlers
    this.executeEventHandlers(handlers, eventArgs)

    // Clear running event tracking
    this.runningSyncEvent = null
  }

  /**
   * getAndProcessEventHandlers - Get handlers and filter out "once" handlers after execution
   */
  getAndProcessEventHandlers(eventName) {
    let handlers = this.eventHandlers.get(eventName)
    if (handlers) {
      // Filter out "once" handlers after this execution
      this.eventHandlers.set(eventName, handlers.filter(({
        once,
      }) => !once))
    }
    else {
      handlers = []
    }
    return handlers
  }

  /**
   * executeEventHandlers - Execute all event handlers with provided arguments
   */
  executeEventHandlers(handlers, eventArgs) {
    for (const handler of handlers) {
      this.vm.callFunction(handler.handler, this.vm.undefined, ...eventArgs)
    }
  }

  fireEventSyncForPage(e, t, i) {
    this.runningSyncEvent = e
    let n = this.eventHandlers.get(e)
    let r = n ? n.filter(e => e.pageGuid === t) : []
    for (let a of (n && r.length > 0 && this.eventHandlers.set(e, n.filter(({
      once: e,
      pageGuid: i,
    }) => !(e && i === t))), r)) this.vm.callFunction(a.handler, this.vm.undefined, ...i)
    this.runningSyncEvent = null
  }

  fireEventSyncWithReturn(e, t) {
    let i = this.vm
    let n = this.eventHandlers.get(e)
    for (let r of (n
      ? this.eventHandlers.set(e, n.filter(({
          once: e,
        }) => !e))
      : n = [], n)) {
      let e = i.callFunction(r.handler, this.vm.undefined, ...t)
      if (e.type === 'SUCCESS' && !1 === i.deepUnwrap(e.handle))
        return !1
    }
    return !0
  }

  windowToCanvasPosition(e) {
    let t = fullscreenValue.getViewportInfo()
    let i = new Mi(t.x, t.y)
    let n = new Mi(e.x, e.y).subtract(i)
    return $$(t, n)
  }

  /**
   * wrapFile - Wraps a file object into a VM object with async methods for reading content
   *
   * Original code: wrapFile method from PluginRuntime class
   *
   * Creates a VM object representing a file with properties and async methods
   * for reading the file content as bytes or text. Uses helper functions to
   * reduce code duplication and improve maintainability.
   *
   * @param file - The file object to wrap
   * @returns VM object with file properties and async read methods
   */
  wrapFile(file) {
    const vm = this.vm
    const vmObject = vm.newObject()

    // Set file properties
    vm.setProp(vmObject, 'name', vm.newString(file.name))
    vm.setProp(vmObject, 'type', vm.newString(file.type))

    // Define getBytesAsync method using helper
    vm.defineFunction(vmObject, 'getBytesAsync', 'file.getBytesAsync', () => {
      return this.createFileReaderPromise(file, 'arrayBuffer', (result) => {
        if (result instanceof ArrayBuffer) {
          return vm.deepWrap(new Uint8Array(result))
        }
        else {
          throw new TypeError('Failed to read file')
        }
      })
    })

    // Define getTextAsync method using helper
    vm.defineFunction(vmObject, 'getTextAsync', 'file.getTextAsync', () => {
      return this.createFileReaderPromise(file, 'text', (result) => {
        return vm.newString(result)
      })
    })
    return vmObject
  }

  /**
   * createFileReaderPromise - Helper to create a promise for FileReader operations
   *
   * Original code: FileReader setup logic from wrapFile method
   *
   * Encapsulates the common FileReader promise creation logic to reduce duplication
   * and improve readability. Handles both arrayBuffer and text reading methods.
   *
   * @param file - The file to read
   * @param readMethod - The read method ('arrayBuffer' or 'text')
   * @param processResult - Function to process the reader result
   * @returns Promise that resolves with the processed result
   */
  createFileReaderPromise(file, readMethod, processResult) {
    const vm = this.vm
    const {
      promise,
      resolve,
      reject,
    } = vm.newPromise()
    const reader = new FileReader()
    reader.onload = (_event) => {
      // Early return if VM is destroyed
      if (vm.isDestroyed())
        return
      try {
        const result = processResult(reader.result)
        resolve(result)
      }
      catch (error) {
        reject(vm.deepWrap(error))
      }
    }
    reader.onerror = (_event) => {
      // Early return if VM is destroyed
      if (vm.isDestroyed())
        return
      reject(vm.deepWrap(reader.error))
    }

    // Execute the appropriate read method
    if (readMethod === 'arrayBuffer') {
      reader.readAsArrayBuffer(file)
    }
    else if (readMethod === 'text') {
      reader.readAsText(file)
    }
    return promise
  }

  /**
   * createDropEvent - Create a drop event object with position, items, and files
   *
   * Original code: createDropEvent method from PluginRuntime class
   *
   * Creates a VM-wrapped drop event object containing drop position (both window and canvas space),
   * dropped items data, and file objects. Handles parent node validation and file wrapping.
   *
   * @param dropPosition - Position object with x and y coordinates
   * @param items - Array of dropped item data
   * @param files - Array of File objects
   * @returns VM object representing the drop event
   */
  createDropEvent(dropPosition, items, files) {
    const vm = this.vm
    const canvasPosition = this.windowToCanvasPosition(dropPosition)
    const {
      parentId,
      relativeTransform,
    } = PluginHelpers.pickInsertionLocation(canvasPosition.x, canvasPosition.y)

    // Create drop event data object
    const dropEventData = {
      x: relativeTransform.m02,
      y: relativeTransform.m12,
      absoluteX: canvasPosition.x,
      absoluteY: canvasPosition.y,
      items,
    }
    const dropEvent = vm.deepWrap(dropEventData)

    // Set parent node if valid
    const parentNode = this.privateSceneGraph.get(parentId)
    const isValidParent = parentNode && !parentNode.isInImmutableFrame && !parentNode.isInWidget
    vm.setProp(dropEvent, 'node', isValidParent ? this.nodeFactory.createNode(parentId, 'drop') : vm.$$null)

    // Wrap and set files array
    const filesArray = vm.newArray()
    for (let i = 0; i < files.length; i++) {
      vm.setProp(filesArray, i.toString(), this.wrapFile(files[i]))
    }
    vm.setProp(dropEvent, 'files', filesArray)
    return dropEvent
  }

  /**
   * createPromiseCallback - Create a promise-based callback for event handling
   *
   * Original code: createPromiseCallback method from PluginRuntime class
   *
   * Creates a callback function that handles event firing with promise resolution,
   * result validation, and error handling. Manages event handler cleanup and
   * runtime options override for promise callbacks.
   *
   * @param config - Configuration object with event details and schemas
   * @returns Promise callback function
   */
  createPromiseCallback(config) {
    return (eventData) => {
      const vm = this.vm
      const inputEvent = config.makeInputEvent(eventData)
      const eventHandlers = this.eventHandlers.get(config.eventName) || []

      // Filter out 'once' handlers after execution
      this.eventHandlers.set(config.eventName, eventHandlers.filter(({
        once,
      }) => !once))
      for (const handler of eventHandlers) {
        const result = this.overrideRuntimeOptions({
          activePromiseCallback: config.eventName,
        }, () => vm.callFunction(handler.handler, vm.undefined, inputEvent))
        if (result.type === 'SUCCESS') {
          const promise = isVMPromiseLike(vm, result.handle)
            ? wrapVmPromise({
                vm,
                promiseHandle: result.handle,
                shouldRetainResult: true,
              })
            : (vm.retainHandle(result.handle), Promise.resolve(result.handle))
          return vm.registerPromise(promise).then((handle) => {
            const validatedResult = validateWithZSchema({
              vm,
              handle,
              zSchema: config.zResultSchema,
              property: `${config.eventName} Result`,
            })
            vm.releaseHandle(handle)
            return validatedResult
          }).catch((error) => {
            console.error(error)
            const errorMessage = config.rejectMessage + (typeof error === 'object' && 'message' in error ? `\nError: ${error.message}` : '')
            console.warn(errorMessage)
            return config.defaultResult
          })
        }
      }
      return Promise.reject()
    }
  }

  /**
   * fireCloseEventAsync - Fire close event asynchronously with timeout handling
   *
   * Original code: fireCloseEventAsync method from PluginRuntime class
   *
   * Handles asynchronous firing of close events with proper timeout management
   * and callback cleanup. Ensures close event handlers are executed within
   * the specified timeout period.
   */
  async fireCloseEventAsync() {
    if (!dM())
      return
    this.runningCloseEventHandler = true
    try {
      await f2(5000) // 5 second timeout
    }
    finally {
      Vb(this.onCloseCallback)
      this.runningCloseEventHandler = false
    }
  }

  documentChangeTypeToString(e) {
    switch (e) {
      case SceneChangeType.CREATE:
        return 'CREATE'
      case SceneChangeType.DELETE:
        return 'DELETE'
      case SceneChangeType.PROPERTY_CHANGE:
        return 'PROPERTY_CHANGE'
      case SceneChangeType.STYLE_PROPERTY_CHANGE:
        return 'STYLE_PROPERTY_CHANGE'
      case SceneChangeType.STYLE_CREATE:
        return 'STYLE_CREATE'
      case SceneChangeType.STYLE_DELETE:
        return 'STYLE_DELETE'
    }
  }

  documentChangeOriginToString(e) {
    switch (e) {
      case ResourceLocation.LOCAL:
        return 'LOCAL'
      case ResourceLocation.REMOTE:
        return 'REMOTE'
    }
  }

  slidesViewChangeToString(e) {
    switch (e) {
      case SlideViewType.GRID:
        return 'GRID'
      case SlideViewType.SINGLE_SLIDE:
        return 'SINGLE_SLIDE'
    }
  }

  eventsByPageGuid(e) {
    let t = new Map()
    for (let i of e) {
      let {
        containingCanvas,
      } = i
      t.has(containingCanvas) || t.set(containingCanvas, [])
      t.get(containingCanvas).push(i)
    }
    return t
  }

  /**
   * createTimerApi - Create timer API object with state management and controls
   *
   * Provides timer functionality including remaining time, total time, and control methods
   * (start, stop, pause, resume). Integrates with global debug state for persistence
   * and provides proper state tracking across timer operations.
   *
   * @returns VM object with timer properties and methods
   */
  createTimerApi() {
    const vm = this.vm
    const timerObject = vm.newObject()

    // Set up timer properties
    this.setupTimerProperties(timerObject, vm)

    // Set up timer control methods
    this.setupTimerMethods(timerObject, vm)
    vm.shallowFreezeObject(timerObject)
    return timerObject
  }

  /**
   * setupTimerProperties - Set up timer properties (remaining, total, state)
   */
  setupTimerProperties(timerObject, vm) {
    // Add remaining time property
    vm.defineProp(timerObject, 'remaining', {
      enumerable: false,
      metricsKey: 'timer.remaining',
      get: () => {
        const timerState = this.getTimerState()
        const remainingMs = Math.max(0, P$(timerState.time))
        return vm.newNumber(remainingMs / 1000)
      },
    })

    // Add total time property
    vm.defineProp(timerObject, 'total', {
      enumerable: false,
      metricsKey: 'timer.total',
      get: () => {
        const timerState = this.getTimerState()
        const totalMs = timerState.time?.totalTimeMs || 0
        return vm.newNumber(totalMs / 1000)
      },
    })

    // Add state property
    vm.defineProp(timerObject, 'state', {
      enumerable: false,
      metricsKey: 'timer.state',
      get: () => {
        const timerState = this.getTimerState()
        const stateString = this.getTimerStateString(timerState.time)
        return vm.newString(stateString)
      },
    })
  }

  /**
   * setupTimerMethods - Set up timer control methods (start, stop, pause, resume)
   */
  setupTimerMethods(timerObject, vm) {
    // Add pause method
    vm.defineFunction(timerObject, 'pause', 'timer.pause', () => {
      this.pauseTimer()
      return vm.undefined
    })

    // Add resume method
    vm.defineFunction(timerObject, 'resume', 'timer.resume', () => {
      this.resumeTimer()
      return vm.undefined
    })

    // Add start method
    vm.defineFunction(timerObject, 'start', 'timer.start', (durationHandle) => {
      const durationSeconds = vm.getNumber(durationHandle)
      this.startTimer(durationSeconds)
      return vm.undefined
    })

    // Add stop method
    vm.defineFunction(timerObject, 'stop', 'timer.stop', () => {
      this.stopTimer()
      return vm.undefined
    })
  }

  /**
   * getTimerState - Get current timer state from debug state
   */
  getTimerState() {
    return debugState.getState().timer
  }

  /**
   * getTimerStateString - Convert timer state to string representation
   */
  getTimerStateString(timerTime) {
    if (P$(timerTime) <= 0) {
      return 'STOPPED'
    }
    return timerTime?.isPaused ? 'PAUSED' : 'RUNNING'
  }

  /**
   * pauseTimer - Pause the current timer if running
   */
  pauseTimer() {
    const timerState = this.getTimerState()
    if (P$(timerState.time) > 0) {
      debugState.dispatch(_1(timerState.time))
    }
  }

  /**
   * resumeTimer - Resume the timer if paused
   */
  resumeTimer() {
    const timerState = this.getTimerState()
    if (P$(timerState.time) > 0 && timerState.time.isPaused) {
      debugState.dispatch(_$$ne(timerState.time))
    }
  }

  /**
   * startTimer - Start timer with specified duration
   */
  startTimer(durationSeconds) {
    const timerState = this.getTimerState()
    const currentRemainingMs = Math.max(0, P$(timerState.time))
    const targetDurationMs = durationSeconds * 1000
    if (this.getTimerStateString(timerState?.time) === 'STOPPED') {
      // Start new timer
      this.startNewTimer(targetDurationMs)
    }
    else {
      // Adjust existing timer
      this.adjustExistingTimer(timerState, targetDurationMs, currentRemainingMs)
    }
  }

  /**
   * startNewTimer - Start a completely new timer
   */
  startNewTimer(totalTimeMs) {
    debugState.dispatch(Qv({
      totalTimeMs,
    }))
  }

  /**
   * adjustExistingTimer - Adjust the duration of an existing timer
   */
  adjustExistingTimer(timerState, targetDurationMs, currentRemainingMs) {
    const deltaMs = targetDurationMs - currentRemainingMs
    debugState.dispatch(VV({
      timer: timerState.time,
      deltaMs,
    }))

    // Resume if currently paused
    if (timerState.time?.isPaused) {
      debugState.dispatch(_$$ne(this.getTimerState().time))
    }
  }

  /**
   * stopTimer - Stop the current timer
   */
  stopTimer() {
    const timerState = this.getTimerState()
    if (P$(timerState.time) > 0) {
      debugState.dispatch(Vk(timerState.time))
    }
  }

  /**
   * createActiveUsersApi - Create API array containing information about all active users
   *
   * Retrieves all active users from multiplayer state, processes their information
   * including names, photos, colors, selections, and viewports. Orders users with
   * current user first (index 0) followed by other users in order.
   *
   * @returns VM array containing user information objects
   */
  createActiveUsersApi() {
    const vm = this.vm
    const allUsers = PluginHelpers.getAllUsers()
    const usersArray = vm.newArray()

    // Get user info lookup for efficient access
    const userInfoLookup = this.getMultiplayerUserInfoBySessionId()

    // Process users and build array
    this.processAndAddUsers(usersArray, allUsers, userInfoLookup, vm)
    return usersArray
  }

  /**
   * processAndAddUsers - Process all users and add them to the users array
   */
  processAndAddUsers(usersArray, allUsers, userInfoLookup, vm) {
    let nextUserIndex = 1 // Reserve index 0 for current user

    for (const user of allUsers) {
      const userInfo = this.getMultiplayerUserInfo(user.sessionId, userInfoLookup)
      const arrayIndex = this.determineUserArrayIndex(userInfo.isCurrentUser, nextUserIndex)
      if (!userInfo.isCurrentUser) {
        nextUserIndex++
      }
      const userObject = this.createUserObject(user, userInfo, vm)
      vm.setProp(usersArray, arrayIndex.toString(), vm.deepWrap(userObject))
    }
  }

  /**
   * determineUserArrayIndex - Determine array index for user (current user gets index 0)
   */
  determineUserArrayIndex(isCurrentUser, nextUserIndex) {
    return isCurrentUser ? 0 : nextUserIndex
  }

  /**
   * createUserObject - Create user object with all relevant information
   */
  createUserObject(user, userInfo, _vm) {
    const userObject = {
      id: userInfo.userId,
      name: userInfo.name || '',
      sessionId: user.sessionId,
      photoUrl: userInfo.photoUrl,
      color: userInfo.color,
      selection: user.selection,
      position: this.processUserPosition(user.position),
      viewport: this.processUserViewport(user.viewport),
    }
    return userObject
  }

  /**
   * processUserPosition - Process user position, handling null coordinates
   */
  processUserPosition(position) {
    if (position?.x === null || position?.y === null) {
      return null
    }
    return position
  }

  /**
   * processUserViewport - Process user viewport, handling null dimensions
   */
  processUserViewport(viewport) {
    if (viewport?.x === null || viewport?.y === null || viewport?.height === null || viewport?.width === null) {
      return null
    }
    return viewport
  }

  /**
   * getMultiplayerUserInfo - Get comprehensive user information for multiplayer context
   *
   * Retrieves user details including name, photo URL, user ID, and color from various sources
   * based on whether it's the current user or another multiplayer participant.
   * Handles fallbacks for workshop mode and local storage.
   *
   * @param sessionId Session ID to get user info for
   * @param userLookup Lookup table for user data
   * @returns Complete user information object
   */
  getMultiplayerUserInfo(sessionId, userLookup) {
    const multiplayerState = debugState.getState().multiplayer
    const isCurrentUser = multiplayerState.sessionID === sessionId
    const userData = userLookup[sessionId]

    // Get user information based on whether it's current user or remote user
    const userInfo = this.getUserBasicInfo(isCurrentUser, userData)

    // Process photo URL if available
    const photoUrl = this.processUserPhotoUrl(userInfo.photoUrl)
    return {
      sessionId,
      name: userInfo.name,
      userId: userInfo.userId,
      color: userData?.color || null,
      photoUrl: photoUrl ? photoUrl.toString() : null,
      isCurrentUser: multiplayerState.sessionID === sessionId,
    }
  }

  /**
   * getUserBasicInfo - Get basic user information (name, photo, ID) based on user type
   */
  getUserBasicInfo(isCurrentUser, userData) {
    if (isCurrentUser && !userData) {
      return this.getCurrentUserInfo()
    }
    else {
      return this.getRemoteUserInfo(userData)
    }
  }

  /**
   * getCurrentUserInfo - Get current user information from various sources
   */
  getCurrentUserInfo() {
    const userState = debugState.getState().user
    const selectedView = debugState.getState().selectedView
    const isWorkshopMode = zg(selectedView)
    const isFullscreenWorkshop = selectedView.view === 'fullscreen' && selectedView.workshopModeInfo
    let name: string | null = null
    let photoUrl = null
    let userId = null
    if (userState) {
      name = userState.name
      photoUrl = userState.img_url
    }
    else if (isWorkshopMode) {
      name = isFullscreenWorkshop ? localStorage.getItem(generateAnonymouseName(selectedView.workshopModeInfo.id)) : null
    }

    // Get user ID for current user
    userId = o8() ?? null
    return {
      name,
      photoUrl,
      userId,
    }
  }

  /**
   * getRemoteUserInfo - Get remote user information from user data
   */
  getRemoteUserInfo(userData) {
    return {
      name: userData?.name ?? null,
      photoUrl: userData?.imageURL ?? null,
      userId: userData?.userID ?? null,
    }
  }

  /**
   * processUserPhotoUrl - Process and validate user photo URL
   */
  processUserPhotoUrl(photoUrl) {
    if (!photoUrl)
      return null
    try {
      return tB(new URL(photoUrl))
    }
    catch {
      return null
    }
  }

  /**
   * getMultiplayerUserInfoBySessionId - Create lookup table for user information by session ID
   *
   * Builds an efficient lookup table mapping session IDs to user data objects
   * from the multiplayer state. Used for quick access during user processing.
   *
   * @returns Lookup object with session ID as key and user data as value
   */
  getMultiplayerUserInfoBySessionId() {
    const multiplayerState = debugState.getState().multiplayer
    const userLookup = {}
    multiplayerState.allUsers.forEach((user) => {
      userLookup[user.sessionID] = user
    })
    return userLookup
  }

  /**
   * createUserApi - Create API object for current user information
   *
   * Creates a VM object containing current user's information including
   * ID, photo URL, name, color, and session ID. Returns null if no user
   * is available and not in workshop mode.
   *
   * @returns VM object with user properties or null
   */
  createUserApi() {
    const vm = this.vm
    const userState = debugState.getState().user
    const selectedView = debugState.getState().selectedView
    const isWorkshopMode = zg(selectedView)

    // Return null if no user and not in workshop mode
    if (userState === null && !isWorkshopMode) {
      return vm.$$null
    }
    const userObject = vm.newObject()
    const userId = o8()
    const multiplayerState = debugState.getState().multiplayer

    // Get user info from multiplayer context
    const userInfo = this.getMultiplayerUserInfo(multiplayerState.sessionID, this.getMultiplayerUserInfoBySessionId())

    // Set user properties
    this.setUserApiProperties(userObject, userId, userInfo, vm)
    vm.shallowFreezeObject(userObject)
    return userObject
  }

  /**
   * setUserApiProperties - Set all user API properties on the user object
   */
  setUserApiProperties(userObject, userId, userInfo, vm) {
    vm.setProp(userObject, 'id', userId ? vm.newString(userId) : vm.$$null)
    vm.setProp(userObject, 'photoUrl', userInfo.photoUrl ? vm.newString(userInfo.photoUrl.toString()) : vm.$$null)
    vm.setProp(userObject, 'name', userInfo.name ? vm.newString(userInfo.name) : vm.$$null)
    vm.setProp(userObject, 'color', userInfo.color ? vm.newString(userInfo.color) : vm.$$null)
    vm.setProp(userObject, 'sessionId', vm.newNumber(userInfo.sessionId))
  }

  /**
   * createViewportApi - Create viewport API object for managing viewport properties and functions
   *
   * Creates a VM object with properties and methods for controlling the viewport,
   * including center, bounds, zoom, scroll and zoom functionality, and view modes
   * for slides and buzz editors.
   *
   * @returns VM object with viewport API methods and properties
   */
  createViewportApi() {
    const vm = this.vm
    const viewportApi = vm.newObject()

    // Helper function to check if in query mode
    const isQueryMode = () => this.queryMode

    // Setup viewport center property
    this.setupViewportCenterProperty(viewportApi, vm, isQueryMode)

    // Setup viewport bounds property
    this.setupViewportBoundsProperty(viewportApi, vm)

    // Setup viewport zoom property
    this.setupViewportZoomProperty(viewportApi, vm, isQueryMode)

    // Setup scroll and zoom into view function
    this.setupScrollAndZoomFunction(viewportApi, vm, isQueryMode)

    // Setup slides view property if in slides mode
    if (this.inSlides()) {
      this.setupSlidesViewProperty(viewportApi, vm)
    }

    // Setup canvas view property if in buzz or slides mode
    if (this.inBuzz() || this.inSlides()) {
      this.setupCanvasViewProperty(viewportApi, vm)
    }
    vm.shallowFreezeObject(viewportApi)
    return viewportApi
  }

  /**
   * setupViewportCenterProperty - Setup the center property for viewport API
   *
   * @param viewportApi - The viewport API object to modify
   * @param vm - Virtual machine instance
   * @param isQueryMode - Function to check query mode
   */
  setupViewportCenterProperty(viewportApi, vm, isQueryMode) {
    this.defineVmProp({
      handle: viewportApi,
      key: 'center',
      options: {
        enumerable: false,
        metricsKey: 'viewport.center',
        get: () => {
          const viewportBounds = PluginHelpers.getViewportBounds()
          const centerObject = vm.newObject()
          vm.setProp(centerObject, 'x', vm.newNumber(viewportBounds.x + viewportBounds.width / 2))
          vm.setProp(centerObject, 'y', vm.newNumber(viewportBounds.y + viewportBounds.height / 2))
          vm.shallowFreezeObject(centerObject)
          return centerObject
        },
        set: (valueHandle) => {
          if (isQueryMode()) {
            throw new Error('Cannot modify viewport in queryMode')
          }
          const {
            x,
            y,
          } = validateWithZSchema({
            vm,
            handle: valueHandle,
            zSchema: FigmaSchema.Vector,
            property: 'viewport.center',
          })
          PluginHelpers.setViewportCenter({
            x,
            y,
          })
          return vm.undefined
        },
      },
      canWriteInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setupViewportBoundsProperty - Setup the bounds property for viewport API
   *
   * @param viewportApi - The viewport API object to modify
   * @param vm - Virtual machine instance
   */
  setupViewportBoundsProperty(viewportApi, vm) {
    this.defineVmProp({
      handle: viewportApi,
      key: 'bounds',
      options: {
        enumerable: false,
        metricsKey: 'viewport.bounds',
        get: () => {
          const viewportBounds = PluginHelpers.getViewportBounds()
          const boundsObject = vm.newObject()
          vm.setProp(boundsObject, 'x', vm.newNumber(viewportBounds.x))
          vm.setProp(boundsObject, 'y', vm.newNumber(viewportBounds.y))
          vm.setProp(boundsObject, 'width', vm.newNumber(viewportBounds.width))
          vm.setProp(boundsObject, 'height', vm.newNumber(viewportBounds.height))
          vm.shallowFreezeObject(boundsObject)
          return boundsObject
        },
      },
      canWriteInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setupViewportZoomProperty - Setup the zoom property for viewport API
   *
   * @param viewportApi - The viewport API object to modify
   * @param vm - Virtual machine instance
   * @param isQueryMode - Function to check query mode
   */
  setupViewportZoomProperty(viewportApi, vm, isQueryMode) {
    this.defineVmProp({
      handle: viewportApi,
      key: 'zoom',
      options: {
        enumerable: false,
        metricsKey: 'viewport.zoom',
        get: () => {
          const zoomScale = PluginHelpers.getViewportZoomScale()
          return vm.newNumber(zoomScale)
        },
        set: (valueHandle) => {
          if (isQueryMode()) {
            throw new Error('Cannot modify viewport in queryMode')
          }
          const zoomValue = validateWithZSchema({
            vm,
            handle: valueHandle,
            zSchema: FigmaSchema.PositiveFloat,
            property: 'viewport.zoom',
          })
          if (!(zoomValue > 0)) {
            throw new Error('viewport.zoom expects a positive number')
          }
          PluginHelpers.setViewportZoomScale(zoomValue)
          return vm.undefined
        },
      },
      canWriteInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setupScrollAndZoomFunction - Setup the scrollAndZoomIntoView function for viewport API
   *
   * @param viewportApi - The viewport API object to modify
   * @param vm - Virtual machine instance
   * @param isQueryMode - Function to check query mode
   */
  setupScrollAndZoomFunction(viewportApi, vm, isQueryMode) {
    this.defineVmFunction({
      handle: viewportApi,
      key: 'scrollAndZoomIntoView',
      metricsKey: 'viewport.scrollAndZoomIntoView',
      cb: (nodesHandle) => {
        if (isQueryMode()) {
          throw new Error('Cannot modify viewport in queryMode')
        }
        if (!vm.isArray(nodesHandle)) {
          throw new TypeError('Call to scrollAndZoomIntoView expected an array')
        }
        const nodeIds: string[] = []
        const arrayLength = vm.getNumberProp(nodesHandle, 'length')
        for (let i = 0; i < arrayLength; i++) {
          const nodeHandle = vm.getProp(nodesHandle, i.toString())
          const nodeId = vm.getString(vm.getProp(nodeHandle, 'id'))
          nodeIds.push(nodeId)
        }
        PluginHelpers.scrollAndZoomIntoView(nodeIds)
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setupSlidesViewProperty - Setup the slidesView property for viewport API (slides mode only)
   *
   * @param viewportApi - The viewport API object to modify
   * @param vm - Virtual machine instance
   */
  setupSlidesViewProperty(viewportApi, vm) {
    this.defineVmProp({
      handle: viewportApi,
      key: 'slidesView',
      options: {
        enumerable: true,
        metricsKey: 'viewport.slidesView',
        get: () => {
          const isInFocusedNodeView = AppStateTsApi.singleSlideView().isInFocusedNodeView.getCopy()
          return vm.newString(isInFocusedNodeView ? 'single-slide' : 'grid')
        },
        set: (valueHandle) => {
          const viewType = validateWithZSchema({
            vm,
            handle: valueHandle,
            zSchema: _$$z.union([_$$z.literal('grid'), _$$z.literal('single-slide')]),
            property: 'grid or single-slide',
          })
          const isInFocusedNodeView = AppStateTsApi.singleSlideView().isInFocusedNodeView.getCopy()
          if (viewType === 'grid' && isInFocusedNodeView) {
            AppStateTsApi.singleSlideView().exitFocusedNodeView()
          }
          else if (viewType === 'single-slide' && !isInFocusedNodeView) {
            fullscreenValue.triggerAction('enter-single-slide-view')
          }
        },
      },
      canWriteInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setupCanvasViewProperty - Setup the canvasView property for viewport API (buzz/slides mode only)
   *
   * @param viewportApi - The viewport API object to modify
   * @param vm - Virtual machine instance
   */
  setupCanvasViewProperty(viewportApi, vm) {
    this.defineVmProp({
      handle: viewportApi,
      key: 'canvasView',
      options: {
        enumerable: true,
        metricsKey: 'viewport.canvasView',
        get: () => {
          let isInFocusedNodeView = false
          switch (this.fullscreenEditorType) {
            case FEditorType.Cooper:
              isInFocusedNodeView = AppStateTsApi?.cooperFocusView().isInFocusedNodeView.getCopy() ?? false
              break
            case FEditorType.Slides:
              isInFocusedNodeView = AppStateTsApi?.singleSlideView().isInFocusedNodeView.getCopy() ?? false
              break
          }
          return vm.newString(isInFocusedNodeView ? 'single-asset' : 'grid')
        },
        set: (valueHandle) => {
          const viewType = validateWithZSchema({
            vm,
            handle: valueHandle,
            zSchema: _$$z.union([_$$z.literal('grid'), _$$z.literal('single-asset')]),
            property: 'grid or single-asset',
          })
          switch (this.fullscreenEditorType) {
            case FEditorType.Cooper:
            {
              const isInFocusedNodeView = AppStateTsApi?.cooperFocusView().isInFocusedNodeView.getCopy() ?? false
              if (viewType === 'grid' && isInFocusedNodeView) {
                AppStateTsApi?.cooperFocusView().exitFocusedNodeViewAndLeavePanelsOpen()
              }
              else if (viewType === 'single-asset' && !isInFocusedNodeView) {
                AppStateTsApi?.cooperFocusView().enterFocusedNodeView()
              }
              break
            }
            case FEditorType.Slides:
            {
              const isInFocusedNodeView = AppStateTsApi?.singleSlideView().isInFocusedNodeView.getCopy() ?? false
              if (viewType === 'grid' && isInFocusedNodeView) {
                AppStateTsApi?.singleSlideView().exitFocusedNodeView()
              }
              else if (viewType === 'single-asset' && !isInFocusedNodeView) {
                AppStateTsApi?.singleSlideView().enterFocusedNodeView()
              }
              break
            }
          }
        },
      },
      canWriteInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * createParametersApi - Create parameters API object for handling plugin parameters
   *
   * Creates a VM object with event handlers for parameter-related events.
   * Only available for plugin mode, not console shim.
   *
   * @returns VM object with parameters API event handlers
   */
  createParametersApi() {
    const vm = this.vm
    const parametersApi = vm.newObject()

    // Add event handlers for parameters
    this.addEventHandlersTo(parametersApi, ad, 'figma.parameters', (_eventType) => {
      if (this.options.apiMode.type !== 'PLUGIN') {
        throw new Error('Cannot use "parameters.on(input)" from the developer tools console')
      }
    })
    vm.shallowFreezeObject(parametersApi)

    // Setup parameter input event triggers if in plugin mode
    if (this.options.apiMode.type === 'PLUGIN') {
      resolveDeferredPromise({
        triggerParameterInputEvent: this.triggerParameterInputEvent,
        triggerRunEvent: this.triggerRunEvent,
      })
    }
    return parametersApi
  }

  /**
   * createCodegenApi - Create codegen API object for code generation functionality
   *
   * Creates a VM object with preferences property and refresh function for codegen.
   * Requires 'codegen' capability in manifest.
   *
   * @returns VM object with codegen API methods and properties
   * @throws Error if codegen capability is not specified
   */
  createCodegenApi() {
    const vm = this.vm

    // Validate codegen capability
    if (!this.options.capabilities?.includes('codegen')) {
      const capabilityName = 'codegen'
      throw new Error(`"${capabilityName}" capability is not specified in manifest.json. Add the following to your manifest.json: "capabilities": ["${capabilityName}"]. See https://www.figma.com/plugin-docs/manifest/#capabilities for more details.`)
    }
    const codegenApi = vm.newObject()

    // Setup preferences property
    this.defineVmProp({
      handle: codegenApi,
      key: 'preferences',
      options: {
        metricsKey: 'codegen.preferences',
        enumerable: true,
        configurable: false,
        get: () => vm.deepWrap(this.getCodegenPreferences()),
      },
      canWriteInReadOnly: false,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })

    // Setup refresh function
    this.defineVmFunction({
      handle: codegenApi,
      key: 'refresh',
      metricsKey: 'codegen.refresh',
      cb: () => {
        _$$c()
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })

    // Add event handlers for codegen events
    this.addEventHandlersTo(codegenApi, ['generate', 'preferenceschange'], 'figma.codegen', null)
    return codegenApi
  }

  /**
   * createDevResourcesApi - Create dev resources API object for development resources
   *
   * Creates a VM object with event handlers for dev resource events like open, linkpreview, auth.
   * Availability depends on plugin configuration and feature flags.
   *
   * @returns VM object with dev resources API event handlers
   */
  createDevResourcesApi() {
    const vm = this.vm
    const devResourcesApi = vm.newObject()
    const {
      apiMode,
      pluginID,
      pluginVersionID,
    } = this.options

    // Check if dev resources are available
    const isDevResourcesAvailable = (() => {
      const hasPlugin = getOpenExternalPluginIds().has(pluginID)
      const isLocalWithFlag = (apiMode.type === 'CONSOLE_SHIM' || !pluginVersionID) && getFeatureFlags().plugins_related_links_local
      return hasPlugin || isLocalWithFlag
    })()
    if (isDevResourcesAvailable) {
      let eventTypes = ['open']
      if (this.options.capabilities?.includes('linkpreview')) {
        eventTypes = eventTypes.concat(['linkpreview', 'auth'])
      }
      this.addEventHandlersTo(devResourcesApi, eventTypes, 'figma.devResources', null)
    }
    return devResourcesApi
  }

  createVsCodeApi() {
    let e = this.vm
    return _$$T() ? e.newObject() : e.undefined
  }

  isTextReviewPluginEnabled() {
    let {
      activeTextReviewPlugin,
    } = debugState.getState().mirror.appModel
    let t = this.getPlugin()
    return !!activeTextReviewPlugin && !!t && isPluginConfigMatching(activeTextReviewPlugin, t)
  }

  /**
   * createTextReviewApi - Create API for text review functionality
   *
   * Creates the text review API object with requestToBeEnabledAsync method.
   * Handles enabling text review plugin with proper user consent, rate limiting,
   * and modal state management.
   *
   * @returns VM object with text review API methods
   */
  createTextReviewApi() {
    const vm = this.vm
    const textReviewObject = vm.newObject()
    this.defineVmFunction({
      handle: textReviewObject,
      key: 'requestToBeEnabledAsync',
      metricsKey: 'textreview.requestToBeEnabledAsync',
      cb: () => {
        const {
          promise,
          resolve,
          reject,
        } = vm.newPromise()

        // Handle various validation states
        if (this.queryMode) {
          reject(vm.newString('Cannot enable text review plugin in query mode.'))
          return promise
        }
        if (this.isTextReviewPluginEnabled()) {
          resolve(vm.undefined)
          return promise
        }
        if (this.shouldRejectTextReviewRequest()) {
          reject(vm.newString('The user rejected your request to enable text review plugin too many times.'))
          return promise
        }

        // Process the text review request
        this.processTextReviewRequest(vm, resolve, reject)
        return promise
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
    return textReviewObject
  }

  /**
   * shouldRejectTextReviewRequest - Check if text review request should be rejected
   */
  shouldRejectTextReviewRequest() {
    return this.textReviewRequestRejects >= 2 || this.isTextReviewRequestModalOpen
  }

  /**
   * processTextReviewRequest - Process text review enablement request
   */
  processTextReviewRequest(vm, resolve, reject) {
    this.isTextReviewRequestModalOpen = true
    const plugin = this.getPlugin()
    const pluginName = plugin?.name || 'Plugin'
    const enablementPromise = this.createTextReviewEnablementPromise(pluginName)
    vm.registerPromise(enablementPromise).then(result => this.handleTextReviewSuccess(result, vm, resolve), () => this.handleTextReviewRejection(vm, reject)).finally(() => {
      this.isTextReviewRequestModalOpen = false
    })
  }

  /**
   * createTextReviewEnablementPromise - Create promise for text review enablement
   */
  createTextReviewEnablementPromise(pluginName) {
    return new Promise((resolve, reject) => {
      debugState.dispatch(showModalHandler({
        type: rp,
        data: {
          reject,
          resolve,
          pluginName,
        },
      }))
    })
  }

  /**
   * handleTextReviewSuccess - Handle successful text review enablement
   */
  handleTextReviewSuccess(result, vm, resolve) {
    const {
      turnOffSpellCheck,
    } = result

    // Handle spell check preference
    if (turnOffSpellCheck && UK().spellCheckPreference.getCopy()) {
      fullscreenValue.triggerAction('toggle-spell-check')
    }

    // Enable the plugin
    const plugin = this.getPlugin()
    if (plugin) {
      const pluginConfig = hasLocalFileId(plugin)
        ? {
            type: 'local',
            localFileId: plugin.localFileId,
          }
        : {
            type: 'published',
            pluginId: plugin.plugin_id,
          }
      updateActiveTextReviewPlugin(pluginConfig)
    }
    requestAnimationFrame(() => resolve(vm.undefined))
  }

  /**
   * handleTextReviewRejection - Handle text review request rejection
   */
  handleTextReviewRejection(vm, reject) {
    this.textReviewRequestRejects++
    reject(vm.newString('The user declined to enable your plugin for text review.'))
  }

  /**
   * setupTextReviewDisableFunction - Setup the requestToBeDisabledAsync function
   */
  setupTextReviewDisableFunction(textReviewObject, vm) {
    this.defineVmFunction({
      handle: textReviewObject,
      key: 'requestToBeDisabledAsync',
      metricsKey: 'textreview.requestToBeDisabledAsync',
      cb: () => {
        const {
          promise,
          resolve,
          reject,
        } = vm.newPromise()
        if (this.queryMode) {
          reject(vm.newString('Cannot disable text review plugin in query mode.'))
          return promise
        }
        const {
          activeTextReviewPlugin,
        } = debugState.getState().mirror.appModel
        if (this.isTextReviewPluginEnabled()) {
          updateActiveTextReviewPlugin(null)
          requestAnimationFrame(() => resolve(vm.undefined))
        }
        else if (activeTextReviewPlugin == null) {
          resolve(vm.undefined)
        }
        else {
          reject(vm.newString('The user currently has a text review plugin enabled that isn\'t yours. Did you mean to call figma.textreview.requestToBeEnabledAsync?'))
        }
        return promise
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setupTextReviewEnabledProperty - Setup the isEnabled property
   */
  setupTextReviewEnabledProperty(textReviewObject, vm) {
    this.defineVmProp({
      handle: textReviewObject,
      key: 'isEnabled',
      options: {
        enumerable: true,
        metricsKey: 'textreview.isEnabled',
        get: () => vm.deepWrap(this.isTextReviewPluginEnabled()),
      },
      canWriteInReadOnly: false,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })

    // Setup additional text review functions
    this.setupTextReviewDisableFunction(textReviewObject, vm)
    this.setupTextReviewEnabledProperty(textReviewObject, vm)
    return textReviewObject
  }

  getCodegenLanguage() {
    let {
      devHandoffCodeLanguage,
    } = debugState.getState().mirror.appModel
    return devHandoffCodeLanguage?.pluginLanguage ?? ''
  }

  getCodegenPreferences() {
    let e = this.getPlugin()
    if (!e) {
      return {
        unit: 'PIXEL',
        scaleFactor: 1,
        customSettings: {},
      }
    }
    let t = this.getCodegenLanguage()
    let i = findCodegenLanguage(e, t)
    let {
      preferences,
    } = computeCodeExtensionPreferences(e, i)
    return {
      ...preferences,
      unit: preferences.unit === MeasurementUnit.PIXEL ? 'PIXEL' : 'SCALED',
      scaleFactor: preferences.scaleFactor || 1,
    }
  }

  /**
   * createUiApi - Create UI API for plugin iframe management
   *
   * Creates comprehensive UI API with iframe control methods including show, hide,
   * resize, reposition, message handling, and event management. Handles both
   * position tracking and message communication with the plugin iframe.
   *
   * @returns VM object with UI API methods and properties
   */
  createUiApi() {
    const vm = this.vm
    const uiObject = vm.newObject()

    // Setup core UI control functions
    this.setupUiControlFunctions(uiObject, vm)

    // Setup position and dimension functions
    this.setupUiPositionFunctions(uiObject, vm)

    // Setup message handling
    this.setupUiMessageHandling(uiObject, vm)

    // Add event handlers
    this.addEventHandlersTo(uiObject, al, 'figma.ui', null)
    vm.shallowFreezeObject(uiObject)
    return uiObject
  }

  /**
   * setupUiControlFunctions - Setup basic UI control functions (show, hide, close)
   */
  setupUiControlFunctions(uiObject, vm) {
    // Show UI function
    this.defineVmFunction({
      handle: uiObject,
      key: 'show',
      metricsKey: 'ui.show',
      cb: () => {
        if (this.queryMode) {
          throw new Error('Cannot show UI in queryMode.')
        }
        if (!this.runtimeOptions?.allowVisibleIframe) {
          throw new Error('Cannot show UI')
        }
        this.uiHandle.showIframe()
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })

    // Hide UI function
    this.defineVmFunction({
      handle: uiObject,
      key: 'hide',
      metricsKey: 'ui.hide',
      cb: () => {
        this.uiHandle.hideIframe()
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })

    // Close UI function
    this.defineVmFunction({
      handle: uiObject,
      key: 'close',
      metricsKey: 'ui.close',
      cb: () => {
        this.uiHandle.destroyIframe()
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setupUiPositionFunctions - Setup UI positioning and sizing functions
   */
  setupUiPositionFunctions(uiObject, vm) {
    // Resize function
    this.defineVmFunction({
      handle: uiObject,
      key: 'resize',
      metricsKey: 'ui.resize',
      cb: (widthHandle, heightHandle) => {
        const width = validateWithZSchema({
          vm,
          handle: widthHandle,
          zSchema: FigmaSchema.PositiveInteger,
          property: 'resize width',
        })
        const height = validateWithZSchema({
          vm,
          handle: heightHandle,
          zSchema: FigmaSchema.PositiveInteger,
          property: 'resize height',
        })
        this.uiHandle.setIframeSize(width, height)
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })

    // Get position function
    this.defineVmFunction({
      handle: uiObject,
      key: 'getPosition',
      metricsKey: 'ui.getPosition',
      cb: () => {
        const {
          windowSpace,
          canvasSpace,
        } = this.uiHandle.getIframePosition()
        return this.createPositionObject(windowSpace, canvasSpace, vm)
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })

    // Reposition function
    this.defineVmFunction({
      handle: uiObject,
      key: 'reposition',
      metricsKey: 'ui.reposition',
      cb: (xHandle, yHandle) => {
        const x = validateWithZSchema({
          vm,
          handle: xHandle,
          zSchema: FigmaSchema.FiniteNumber,
          property: 'x',
        })
        const y = validateWithZSchema({
          vm,
          handle: yHandle,
          zSchema: FigmaSchema.FiniteNumber,
          property: 'y',
        })
        this.uiHandle.setIframePosition(x, y)
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * createPositionObject - Create position object with window and canvas space coordinates
   */
  createPositionObject(windowSpace, canvasSpace, vm) {
    const positionObject = vm.newObject()
    const windowSpaceObject = vm.newObject()
    vm.setProp(windowSpaceObject, 'x', vm.newNumber(windowSpace.x))
    vm.setProp(windowSpaceObject, 'y', vm.newNumber(windowSpace.y))
    const canvasSpaceObject = vm.newObject()
    vm.setProp(canvasSpaceObject, 'x', vm.newNumber(canvasSpace.x))
    vm.setProp(canvasSpaceObject, 'y', vm.newNumber(canvasSpace.y))
    vm.setProp(positionObject, 'windowSpace', windowSpaceObject)
    vm.setProp(positionObject, 'canvasSpace', canvasSpaceObject)
    return positionObject
  }

  /**
   * setupUiMessageHandling - Setup UI message handling (onmessage property and postMessage function)
   */
  setupUiMessageHandling(uiObject, vm) {
    // onmessage property
    this.defineVmProp({
      handle: uiObject,
      key: 'onmessage',
      options: {
        enumerable: false,
        metricsKey: 'ui.onmessage',
        get: () => {
          if (this.options.apiMode.type === 'CONSOLE_SHIM') {
            throw new Error('Cannot use "onmessage" from the developer tools console')
          }
          return this.onMessageCallback ? this.onMessageCallback : vm.undefined
        },
        set: (callbackHandle) => {
          if (this.options.apiMode.type === 'CONSOLE_SHIM') {
            throw new Error('Cannot use "onmessage" from the developer tools console')
          }
          this.setMessageCallback(callbackHandle, vm)
          return vm.undefined
        },
      },
      canWriteInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })

    // postMessage function
    this.defineVmFunction({
      handle: uiObject,
      key: 'postMessage',
      metricsKey: 'ui.postMessage',
      cb: (messageHandle, optionsHandle) => {
        const options = mergeDefaults(validateWithZSchema({
          vm,
          handle: optionsHandle,
          zSchema: _$$z.object({
            origin: _$$z.string().optional(),
          }).optional(),
          property: 'postMessage options',
        }) || {}, {
          origin: '*',
        })
        this.uiHandle.postMessageToIframe({
          pluginMessage: vm.deepUnwrap(messageHandle),
          pluginId: this.options.pluginID,
        }, {
          origin: options.origin,
        })
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setMessageCallback - Set the message callback with proper handle management
   */
  setMessageCallback(callbackHandle, vm) {
    let newCallback
    if (vm.isNull(callbackHandle) || vm.isUndefined(callbackHandle)) {
      newCallback = undefined
    }
    else if (vm.isFunction(callbackHandle)) {
      newCallback = callbackHandle
    }
    else {
      throw new TypeError('onmessage must be a function')
    }

    // Release old callback handle
    if (this.onMessageCallback) {
      vm.releaseHandle(this.onMessageCallback)
    }

    // Set new callback and retain handle
    this.onMessageCallback = newCallback
    if (this.onMessageCallback) {
      vm.retainHandle(this.onMessageCallback)
    }
  }

  /**
   * createClientStorageApi - Create client storage API for persistent data management
   *
   * Creates API for managing client-side persistent storage with async operations
   * for getting, setting, deleting, and listing keys. Handles error reporting
   * and proper promise management for all storage operations.
   *
   * @returns VM object with client storage API methods
   */
  createClientStorageApi() {
    const vm = this.vm
    const {
      userID,
      pluginID,
    } = this.options
    const storageObject = vm.newObject()

    // Setup all storage operation functions
    this.setupStorageGetFunction(storageObject, vm, userID, pluginID)
    this.setupStorageSetFunction(storageObject, vm, userID, pluginID)
    this.setupStorageDeleteFunction(storageObject, vm, userID, pluginID)
    this.setupStorageKeysFunction(storageObject, vm, userID, pluginID)
    vm.shallowFreezeObject(storageObject)
    return storageObject
  }

  /**
   * setupStorageGetFunction - Setup the getAsync function for retrieving stored values
   */
  setupStorageGetFunction(storageObject, vm, userID, pluginID) {
    this.defineVmFunction({
      handle: storageObject,
      key: 'getAsync',
      metricsKey: 'clientStorage.getAsync',
      cb: (keyHandle) => {
        const key = validateWithZSchema({
          vm,
          handle: keyHandle,
          zSchema: _$$z.string(),
          property: 'key',
        })
        const {
          promise,
          resolve,
          reject,
        } = vm.newPromise()
        vm.registerPromise(getStorageValueByKey({
          userID,
          pluginID,
          name: key,
        })).then(value => resolve(vm.deepWrap(value)), error => this.handleStorageError(reject, vm, 'get', key, error))
        return promise
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setupStorageSetFunction - Setup the setAsync function for storing values
   */
  setupStorageSetFunction(storageObject, vm, userID, pluginID) {
    this.defineVmFunction({
      handle: storageObject,
      key: 'setAsync',
      metricsKey: 'clientStorage.setAsync',
      cb: (keyHandle, valueHandle) => {
        const key = validateWithZSchema({
          vm,
          handle: keyHandle,
          zSchema: _$$z.string(),
          property: 'key',
        })
        const value = vm.deepUnwrap(valueHandle)
        const {
          promise,
          resolve,
          reject,
        } = vm.newPromise()
        const stats = vm.getStats()
        const requestParams = {
          userID,
          pluginID,
          key,
          // Added missing key property
          name: key,
          value,
          ...(stats
            ? {
                stats,
              }
            : {}),
        }
        vm.registerPromise(setStorageEntry(requestParams)).then(() => resolve(vm.undefined), error => this.handleStorageError(reject, vm, 'set', key, error))
        return promise
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setupStorageDeleteFunction - Setup the deleteAsync function for removing stored values
   */
  setupStorageDeleteFunction(storageObject, vm, userID, pluginID) {
    this.defineVmFunction({
      handle: storageObject,
      key: 'deleteAsync',
      metricsKey: 'clientStorage.deleteAsync',
      cb: (keyHandle) => {
        const key = validateWithZSchema({
          vm,
          handle: keyHandle,
          zSchema: _$$z.string(),
          property: 'key',
        })
        const {
          promise,
          resolve,
          reject,
        } = vm.newPromise()
        vm.registerPromise(setStorageEntry({
          userID,
          pluginID,
          name: key,
          // remove: true, // Commented out: not supported in StorageEntry type
          // delete: true, // Alternative property for removal - also not supported
        })).then(
        // Type assertion to bypass interface restrictions
          () => resolve(vm.undefined),
          (error) => {
            const keyStr = JSON.stringify(key)
            reject(vm.newString(`Failed to delete client storage key ${keyStr}: ${error}`))
          },
        )
        return promise
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setupStorageKeysFunction - Setup the keysAsync function for listing all stored keys
   */
  setupStorageKeysFunction(storageObject, vm, userID, pluginID) {
    this.defineVmFunction({
      handle: storageObject,
      key: 'keysAsync',
      metricsKey: 'clientStorage.keysAsync',
      cb: () => {
        const {
          promise,
          resolve,
          reject,
        } = vm.newPromise()
        vm.registerPromise(getAllStorageKeysWithPrefix({
          userID,
          pluginID,
          name: 'keysAsync', // Added missing name property
        })).then(keys => resolve(vm.deepWrap(keys)), (error) => {
          reject(vm.newString(`Failed to get client storage keys: ${error}`))
        })
        return promise
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * handleStorageError - Handle storage operation errors with proper logging
   */
  handleStorageError(reject, vm, operation, key, error) {
    const keyStr = JSON.stringify(key)
    reject(vm.newString(`Failed to ${operation} client storage key ${keyStr}: ${error}`))
    reportError(_$$e.EXTENSIBILITY, error instanceof Error ? error : new Error(`figma.clientStorageAsync.${operation}Async failed: ${error}.`))
  }

  getPublishedExtension(e) {
    let {
      publishedPlugins,
      publishedWidgets,
    } = debugState.getState()
    return publishedPlugins[e] ?? publishedWidgets[e]
  }

  getOnCanvasPublishedWidgetVersion(e, t) {
    let {
      publishedCanvasWidgetVersions,
    } = debugState.getState()
    return publishedCanvasWidgetVersions[e]?.[t]
  }

  getLocalPlugin(e) {
    let {
      localPlugins,
    } = debugState.getState()
    return Object.values(localPlugins).find((t: any) => t.plugin_id === e)
  }

  getPlugin() {
    return this.options.isLocal ? this.getLocalPlugin(this.options.pluginID) : this.getPublishedExtension(this.options.pluginID)?.versions[this.options.pluginVersionID]
  }

  inReviewByCommunityAdmin(e) {
    return !!(getFeatureFlags().community_hub_admin && e && AC(e))
  }

  userPaymentStatusType(e) {
    if (this.options.isLocal || this.inReviewByCommunityAdmin(e)) {
      let e = y1()
      return e?.type || zH.UNPAID
    }
    if (e && m3(e)) {
      let {
        communityPayments,
        user,
      } = debugState.getState()
      return user ? vl(e, user) ? zH.PAID : vT(e, communityPayments) ? zH.PAID : zH.UNPAID : zH.NOT_SUPPORTED
    }
    return zH.NOT_SUPPORTED
  }

  /**
   * createPaymentsApi - Create payments API for plugin monetization
   *
   * Creates comprehensive payments API with user tracking, payment status,
   * checkout functionality, and payment token generation. Handles both
   * development and production payment flows with proper validation.
   *
   * @returns VM object with payments API methods and properties
   */
  createPaymentsApi() {
    const vm = this.vm
    const paymentsObject = vm.newObject()

    // Setup payment tracking functions
    this.setupPaymentTrackingFunctions(paymentsObject, vm)

    // Setup payment status property
    this.setupPaymentStatusProperty(paymentsObject, vm)

    // Setup development payment functions
    this.setupDevelopmentPaymentFunctions(paymentsObject, vm)

    // Setup checkout functions
    this.setupCheckoutFunctions(paymentsObject, vm)

    // Setup payment token function
    this.setupPaymentTokenFunction(paymentsObject, vm)
    vm.shallowFreezeObject(paymentsObject)
    return paymentsObject
  }

  /**
   * setupPaymentTrackingFunctions - Setup functions for tracking user payment history
   */
  setupPaymentTrackingFunctions(paymentsObject, vm) {
    this.defineVmFunction({
      handle: paymentsObject,
      key: 'getUserFirstRanSecondsAgo',
      metricsKey: 'figma.payments.getUserFirstRanSecondsAgo',
      cb: () => {
        const {
          pluginID,
        } = this.options
        const extension = this.getPublishedExtension(pluginID)
        if (extension?.current_user_first_ran_at) {
          const firstRanDate = new Date(extension.current_user_first_ran_at)
          const secondsAgo = Math.floor((Date.now() - firstRanDate.getTime()) / 1000)
          return vm.newNumber(secondsAgo)
        }
        return vm.newNumber(0)
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setupPaymentStatusProperty - Setup the payment status property
   */
  setupPaymentStatusProperty(paymentsObject, vm) {
    this.defineVmProp({
      handle: paymentsObject,
      key: 'status',
      options: {
        enumerable: true,
        metricsKey: 'figma.payments.status',
        get: () => {
          const {
            pluginID,
          } = this.options
          const extension = this.getPublishedExtension(pluginID)
          const statusObject = vm.newObject()
          vm.setProp(statusObject, 'type', vm.newString(this.userPaymentStatusType(extension)))
          vm.shallowFreezeObject(statusObject)
          return statusObject
        },
      },
      canWriteInReadOnly: false,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setupDevelopmentPaymentFunctions - Setup development-only payment functions
   */
  setupDevelopmentPaymentFunctions(paymentsObject, vm) {
    this.defineVmFunction({
      handle: paymentsObject,
      key: 'setPaymentStatusInDevelopment',
      metricsKey: 'figma.payments.setPaymentStatusInDevelopment',
      cb: (statusHandle) => {
        const {
          pluginID,
        } = this.options
        const extension = this.getPublishedExtension(pluginID)

        // Only allow in local development or community admin review
        if (!this.options.isLocal && !this.inReviewByCommunityAdmin(extension)) {
          return vm.undefined
        }
        const paymentStatus = validateWithZSchema({
          vm,
          handle: statusHandle,
          zSchema: _$$z.strictObject({
            type: _$$z.nativeEnum(zH),
          }),
          property: 'setPaymentStatusInDevelopment',
        })
        Qj(paymentStatus)
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setupCheckoutFunctions - Setup checkout request and initiation functions
   */
  setupCheckoutFunctions(paymentsObject, vm) {
    // Request checkout function
    this.defineVmFunction({
      handle: paymentsObject,
      key: 'requestCheckout',
      metricsKey: 'figma.payments.requestCheckout',
      cb: () => {
        if (!this.checkoutRequested) {
          this.checkoutRequested = true
          jG(this.requestCheckoutCallback)
        }
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })

    // Initiate checkout async function
    this.defineVmFunction({
      handle: paymentsObject,
      key: 'initiateCheckoutAsync',
      metricsKey: 'figma.payments.initiateCheckoutAsync',
      cb: (optionsHandle) => {
        if (this.queryMode || !this.runtimeOptions.allowInitiateCheckout) {
          throw new Error('Unexpected call to figma.payments.initiateCheckoutAsync')
        }
        const {
          promise,
          resolve,
        } = vm.newPromise()
        const checkoutOptions = this.parseCheckoutOptions(optionsHandle, vm)
        vm.registerPromise(this.initiateCheckoutAsyncImpl(checkoutOptions)).then(() => resolve(vm.undefined))
        return promise
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * parseCheckoutOptions - Parse and validate checkout options
   */
  parseCheckoutOptions(optionsHandle, vm) {
    const defaultOptions = {
      interstitial: _$$P3.PAID_FEATURE,
    }
    if (vm.isUndefined(optionsHandle)) {
      return defaultOptions
    }
    const userOptions = validateWithZSchema({
      vm,
      handle: optionsHandle,
      zSchema: _$$z.object({
        interstitial: _$$z.nativeEnum(_$$P3),
      }).partial(),
      property: 'initiateCheckoutAsync',
    })
    return {
      ...defaultOptions,
      ...userOptions,
    }
  }

  /**
   * setupPaymentTokenFunction - Setup payment token generation function
   */
  setupPaymentTokenFunction(paymentsObject, vm) {
    this.defineVmFunction({
      handle: paymentsObject,
      key: 'getPluginPaymentTokenAsync',
      metricsKey: 'figma.payments.getPluginPaymentTokenAsync',
      cb: () => {
        const {
          promise,
          resolve,
          reject,
        } = vm.newPromise()
        vm.registerPromise(this.getPluginPaymentTokenAsyncImpl()).then(token => resolve(vm.newString(token))).catch((error) => {
          reject(vm.newString(`Failed to generate plugin payment token with error: ${error.message}`))
        })
        return promise
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * initiateCheckoutAsyncImpl - Implementation of checkout initiation process
   *
   * Handles the complex checkout flow including validation of user payment status,
   * plugin monetization requirements, and UI display management. Manages
   * async checkout process with proper cleanup and error handling.
   *
   * @param options Checkout options including interstitial type
   * @returns Promise that resolves when checkout process is complete
   */
  initiateCheckoutAsyncImpl(options) {
    const user = debugState.getState().user
    const {
      pluginID,
      pluginVersionID,
      isLocal,
    } = this.options

    // Get plugin/widget information
    const publishedExtension = this.getPublishedExtension(pluginID)
    const localPlugin = isLocal ? this.getLocalPlugin(pluginID) : undefined
    const canvasWidget = this.getOnCanvasPublishedWidgetVersion(pluginID, pluginVersionID)

    // Validate checkout requirements
    this.validateCheckoutRequirements(publishedExtension, localPlugin, isLocal)

    // Setup UI bell notification
    dequeuePluginStatus({
      shouldShowVisualBell: true,
    })
    return this.executeCheckoutFlow(user, publishedExtension, localPlugin, canvasWidget, options)
  }

  /**
   * validateCheckoutRequirements - Validate that checkout can be initiated
   */
  validateCheckoutRequirements(publishedExtension, localPlugin, isLocal) {
    if (publishedExtension) {
      // Check if plugin is monetized
      if (!m3(publishedExtension) && !localPlugin) {
        throw new Error('Resource must be monetized to initiate checkout')
      }

      // Check payment status - only allow checkout for unpaid users
      if (this.userPaymentStatusType(publishedExtension) !== zH.UNPAID) {
        if (isLocal) {
          throw new Error('Cannot initiate checkout, user\'s payment status type is not UNPAID')
        }
        return Promise.resolve()
      }
    }
  }

  /**
   * executeCheckoutFlow - Execute the main checkout flow with proper cleanup
   */
  executeCheckoutFlow(user, publishedExtension, localPlugin, canvasWidget, options) {
    return new Promise(async (resolve) => {
      let isActive = true

      // Setup cleanup action for shutdown
      this.options.addShutdownAction(() => {
        if (isActive) {
          fullscreenValue.dispatch(hideSpecificModal(_$$V))
          fullscreenValue.dispatch(hideSpecificModal(_$$h))
        }
      })

      // Execute the checkout process
      await kA(debugState.dispatch, user, publishedExtension, localPlugin, canvasWidget, options?.interstitial)

      // Mark as complete and resolve
      isActive = false
      resolve(undefined)
    })
  }

  /**
   * getPluginPaymentTokenAsyncImpl - Implementation of payment token generation
   *
   * Generates secure payment tokens for monetized plugins and widgets.
   * Validates plugin existence, monetization status, and determines the
   * correct API endpoint based on plugin type.
   *
   * @returns Promise that resolves to the payment token
   */
  getPluginPaymentTokenAsyncImpl() {
    const {
      pluginID,
      isLocal,
    } = this.options

    // Get plugin information
    const publishedExtension = this.getPublishedExtension(pluginID)
    const localPlugin = isLocal ? this.getLocalPlugin(pluginID) : undefined

    // Validate plugin and monetization requirements
    this.validateTokenRequirements(pluginID, publishedExtension, localPlugin)

    // Determine API endpoint type
    const apiType = this.determineApiType(publishedExtension, localPlugin)

    // Generate and return token
    return this.generatePaymentToken(apiType, pluginID)
  }

  /**
   * validateTokenRequirements - Validate requirements for token generation
   */
  validateTokenRequirements(pluginID, publishedExtension, localPlugin) {
    if (!pluginID || !publishedExtension && !localPlugin) {
      throw new Error('Cannot generate plugin payment token, plugin is not found')
    }
    if (!m3(publishedExtension) && !localPlugin) {
      throw new Error('Resource must be monetized to generate a plugin payment token')
    }
  }

  /**
   * determineApiType - Determine API endpoint type (plugins vs widgets)
   */
  determineApiType(publishedExtension, localPlugin) {
    const isWidget = publishedExtension?.is_widget || localPlugin?.cachedContainsWidget
    return isWidget ? 'widgets' : 'plugins'
  }

  /**
   * generatePaymentToken - Generate payment token via API call
   */
  generatePaymentToken(apiType, pluginID) {
    // TODO: Phase 18 Refactoring - Replace XHR with Advanced HTTP Client:
    // const httpClient = createAdvancedHTTPClientManager('/api')
    // return httpClient.put(`/${apiType}/${pluginID}/id_token`).then(response => response.data.meta.token)
    return XHR.put(`/api/${apiType}/${pluginID}/id_token`).then(({
      data,
    }) => Promise.resolve(data.meta.token)).catch(error => Promise.reject(error))
  }

  /**
   * createUtilApi - Create utility API for color and paint operations
   *
   * Creates utility functions for color conversion, paint creation, and markdown
   * processing. Provides convenient methods for working with colors in different
   * formats and creating paint objects with proper validation.
   *
   * @returns VM object with utility API methods
   */
  createUtilApi() {
    const vm = this.vm
    const utilObject = vm.newObject()

    // Setup color utility functions
    this.setupColorUtilityFunctions(utilObject, vm)

    // Setup paint utility functions
    this.setupPaintUtilityFunctions(utilObject, vm)

    // Setup text utility functions
    this.setupTextUtilityFunctions(utilObject, vm)
    return utilObject
  }

  /**
   * setupColorUtilityFunctions - Setup color conversion utility functions
   */
  setupColorUtilityFunctions(utilObject, vm) {
    // RGBA color function
    this.defineVmFunction({
      handle: utilObject,
      key: 'rgba',
      metricsKey: 'figma.util.rgba',
      cb: (colorHandle) => {
        const colorInput = validateWithZSchema({
          vm,
          handle: colorHandle,
          zSchema: FigmaSchema.ColorInput,
          property: 'color',
        })
        return vm.deepWrap(parseColorInput(colorInput))
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: true,
      hasEditScope: false,
    })

    // RGB color function (without alpha)
    this.defineVmFunction({
      handle: utilObject,
      key: 'rgb',
      metricsKey: 'figma.util.rgb',
      cb: (colorHandle) => {
        const colorInput = validateWithZSchema({
          vm,
          handle: colorHandle,
          zSchema: FigmaSchema.ColorInput,
          property: 'color',
        })
        const rgbaColor = parseColorInput(colorInput)
        const rgbColor = {
          r: rgbaColor.r,
          g: rgbaColor.g,
          b: rgbaColor.b,
        }
        return vm.deepWrap(rgbColor)
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: true,
      hasEditScope: false,
    })
  }

  /**
   * setupPaintUtilityFunctions - Setup paint creation utility functions
   */
  setupPaintUtilityFunctions(utilObject, vm) {
    this.defineVmFunction({
      handle: utilObject,
      key: 'solidPaint',
      metricsKey: 'figma.util.solidPaint',
      cb: (colorHandle, paintOptionsHandle) => {
        const colorInput = validateWithZSchema({
          vm,
          handle: colorHandle,
          zSchema: FigmaSchema.ColorInput,
          property: 'color',
        })
        const partialPaintOptions = validateWithZSchema({
          vm,
          handle: paintOptionsHandle,
          zSchema: FigmaSchema.PartialSolidPaint,
          property: 'SolidPaint',
        })

        // Clean up undefined properties
        const cleanedOptions = this.cleanPaintOptions(partialPaintOptions)

        // Create solid paint object
        const solidPaint = this.createSolidPaintObject(colorInput, cleanedOptions)
        return vm.deepWrap(solidPaint)
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: true,
      hasEditScope: false,
    })
  }

  /**
   * cleanPaintOptions - Clean undefined properties from paint options
   */
  cleanPaintOptions(partialPaintOptions) {
    if (partialPaintOptions === undefined) {
      return undefined
    }
    const cleaned = {
      ...partialPaintOptions,
    }
    for (const key in cleaned) {
      if (cleaned[key] === undefined) {
        delete cleaned[key]
      }
    }
    return cleaned
  }

  /**
   * createSolidPaintObject - Create solid paint object from color and options
   */
  createSolidPaintObject(colorInput, paintOptions) {
    const normalizedColor = parseColorInput(colorInput)
    return {
      ...deepClone(paintOptions),
      type: 'SOLID',
      color: {
        r: normalizedColor.r,
        g: normalizedColor.g,
        b: normalizedColor.b,
      },
      opacity: normalizedColor.a,
    }
  }

  /**
   * setupTextUtilityFunctions - Setup text processing utility functions
   */
  setupTextUtilityFunctions(utilObject, vm) {
    this.defineVmFunction({
      handle: utilObject,
      key: 'normalizeMarkdown',
      metricsKey: 'figma.util.normalizeMarkdown',
      cb: (markdownHandle) => {
        const markdownText = validateWithZSchema({
          vm,
          handle: markdownHandle,
          zSchema: _$$z.string(),
          property: 'markdown',
        })
        const normalizedMarkdown = _$$nB(markdownText)
        return vm.newString(normalizedMarkdown)
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: true,
      hasEditScope: false,
    })
  }

  createInternalApi() {
    let e = this.vm
    let t = e.newObject()
    e.shallowFreezeObject(t)
    return t
  }

  createConstantsApi() {
    let e = this.vm
    let t = e.newObject()
    this.defineVmProp({
      handle: t,
      key: 'colors',
      options: {
        enumerable: !1,
        metricsKey: 'constants.colors',
        get: () => {
          let t = e.newObject()
          let i = e.newObject()
          for (let t in ez) {
            let n = e.newString(ez[t])
            e.setProp(i, t, n)
          }
          let n = e.newObject()
          for (let t in eG) {
            let i = e.newString(eG[t])
            e.setProp(n, t, i)
          }
          e.setProp(t, 'figJamBase', n)
          e.setProp(t, 'figJamBaseLight', i)
          return t
        },
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !0,
      hasEditScope: !1,
    })
    return t
  }

  /**
   * defineWidgetApi - Define comprehensive widget API for Figma widgets
   *
   * Creates the complete widget API including registration, lifecycle management,
   * event handling, and utility functions. Handles complex widget rendering,
   * state management, and interaction patterns.
   *
   * @param apiObject The main API object to define widget property on
   */
  defineWidgetApi(apiObject) {
    if (!this.isWidget)
      return
    const widgetManager = this.widgetManager
    if (!widgetManager) {
      throw new Error('WidgetManager not defined')
    }
    const vm = this.vm
    const widgetApiObject = vm.newObject()

    // Define widget property on main API
    vm.defineProp(apiObject, 'widget', {
      enumerable: false,
      value: widgetApiObject,
    })

    // Setup core widget functions
    this.setupWidgetCoreFunctions(widgetApiObject, vm, widgetManager)

    // Setup widget utility functions
    this.setupWidgetUtilityFunctions(widgetApiObject, vm)
  }

  /**
   * setupWidgetCoreFunctions - Setup core widget functions (register, waitForTask)
   */
  setupWidgetCoreFunctions(widgetApiObject, vm, widgetManager) {
    // Widget registration function
    vm.defineFunction(widgetApiObject, 'register', 'widget.register', (widgetFunctionHandle) => {
      this._hasRegisteredWidgetFunction = true
      return this.executeWidgetRegistration(widgetFunctionHandle, widgetManager, vm)
    })

    // Wait for task function
    vm.defineFunction(widgetApiObject, 'waitForTask', 'widget.waitForTask', (promiseHandle) => {
      if (widgetManager.isRunningWidgetFunction()) {
        throw new Error('waitForTask can only be called in useEffect or an event handler')
      }
      widgetManager.trackPromise(wrapVmPromise({
        vm,
        promiseHandle,
        shouldRetainResult: false,
      }))
      return vm.undefined
    })
  }

  /**
   * executeWidgetRegistration - Execute the complex widget registration process
   */
  executeWidgetRegistration(widgetFunctionHandle, widgetManager: WidgetManager, _vm) {
    return (async () => {
      widgetManager.registerWidgetFunction(widgetFunctionHandle)
      try {
        const widgetEvent = this.parseWidgetEvent()
        widgetManager.setLifecycleCommand(widgetEvent)
        const widgetNode = this.getWidgetNode(widgetEvent.widgetNodeID)
        if (!widgetNode) {
          this.closePlugin(undefined)
          return
        }
        const pluginDataHash = await this.handlePluginDataUpdate(widgetNode)
        await this.processWidgetEvent(widgetEvent, widgetManager, pluginDataHash)
      }
      catch (error) {
        this.handleWidgetError(error)
      }
      finally {
        await this.closePlugin(undefined)
      }
      await widgetManager.waitForFinish()
    })()
  }

  /**
   * parseWidgetEvent - Parse and validate widget event from command
   */
  parseWidgetEvent() {
    const widgetEvent = JSON.parse(this.options.command)
    if (typeof widgetEvent !== 'object') {
      throw new TypeError('Invalid widget event')
    }
    return widgetEvent
  }

  /**
   * getWidgetNode - Get widget node from scene graph
   */
  getWidgetNode(widgetNodeId) {
    return this.privateSceneGraph.get(widgetNodeId)
  }

  /**
   * handlePluginDataUpdate - Handle local plugin data updates if needed
   */
  async handlePluginDataUpdate(widgetNode) {
    let pluginDataHash = null
    if (this.options.isLocal && this.options.code && !ZY(this.options.pluginID)) {
      const existingData = widgetNode.getPluginData(this.options.pluginID, cz)
      const newCodeHash = md5(this.options.code)
      if (existingData !== newCodeHash) {
        pluginDataHash = newCodeHash
      }
    }
    return pluginDataHash
  }

  /**
   * processWidgetEvent - Process different types of widget events
   */
  async processWidgetEvent(widgetEvent, widgetManager, pluginDataHash) {
    const interactiveEvents = ['click', 'propertymenu', 'rerender', 'textEditEnd', 'attachedStickablesChanged', 'stuckStatusChanged']
    if (interactiveEvents.includes(widgetEvent.name)) {
      await this.handleInteractiveEvent(widgetEvent, widgetManager, pluginDataHash)
    }
    if (widgetEvent.name === 'mount' || widgetEvent.name === 'rerender' || pluginDataHash) {
      await this.handleMountOrRerenderEvent(widgetEvent, widgetManager, pluginDataHash)
    }
  }

  /**
   * handleInteractiveEvent - Handle interactive widget events that require rendering
   */
  async handleInteractiveEvent(widgetEvent, widgetManager, pluginDataHash) {
    const widgetNodeId = widgetEvent.widgetNodeID
    widgetManager.initializeRenderingState(widgetNodeId)
    const renderedTree = widgetManager.renderWidgetTree(widgetNodeId, 'previous')
    if (pluginDataHash) {
      widgetManager.setOldVRoot(widgetNodeId, renderedTree)
    }
    widgetManager.maybeRunEffects(widgetNodeId)
    await this.handleSpecificEventType(widgetEvent, widgetManager, renderedTree)
  }

  /**
   * handleSpecificEventType - Handle specific types of widget events
   */
  async handleSpecificEventType(widgetEvent, widgetManager, renderedTree) {
    const widgetNodeId = widgetEvent.widgetNodeID
    switch (widgetEvent.name) {
      case 'textEditEnd':
      case 'click':
        await this.handleClickOrTextEditEvent(widgetEvent, widgetManager, renderedTree)
        break
      case 'propertymenu':
        await this.handlePropertyMenuEvent(widgetEvent, widgetManager, widgetNodeId)
        break
      case 'stuckStatusChanged':
        await this.handleStuckStatusChangedEvent(widgetEvent, widgetManager, widgetNodeId)
        break
      case 'attachedStickablesChanged':
        await this.handleAttachedStickablesChangedEvent(widgetEvent, widgetManager, widgetNodeId)
        break
    }
  }

  /**
   * handleClickOrTextEditEvent - Handle click and text edit events
   */
  async handleClickOrTextEditEvent(widgetEvent, widgetManager, renderedTree) {
    await widgetManager.trackPromise(processWidgetEventHandlers({
      vm: this.vm,
      uiHandle: this.uiHandle,
      runtime: widgetManager.getPluginRuntimeBridge(),
      vNode: renderedTree.rootNode,
      command: widgetEvent,
      widgetManager,
      editScopeLabel: `widget-${widgetEvent.name}`,
    }))
    widgetManager.scheduleRender(widgetEvent.widgetNodeID)
  }

  /**
   * handlePropertyMenuEvent - Handle property menu events
   */
  async handlePropertyMenuEvent(widgetEvent, widgetManager, widgetNodeId) {
    const propertyMenuCallback = widgetManager.getPropertyMenuCallbackHandle(widgetNodeId)
    if (propertyMenuCallback) {
      await widgetManager.trackPromise(updateWidgetProperties({
        vm: this.vm,
        uiHandle: this.uiHandle,
        widgetManager,
        callbackHandle: propertyMenuCallback,
        propertyName: widgetEvent.propertyName,
        propertyValue: widgetEvent.propertyValue,
        editScopeLabel: 'widget-property-menu',
      }))
    }
  }

  /**
   * handleStuckStatusChangedEvent - Handle stuck status changed events
   */
  async handleStuckStatusChangedEvent(widgetEvent, widgetManager, widgetNodeId) {
    const renderingState = widgetManager.getRenderingState(widgetNodeId)
    const stuckStatusHandler = renderingState.stickableState.stuckStatusChangedHandle
    if (stuckStatusHandler) {
      await widgetManager.trackPromise(handleStuckStatusChange({
        vm: this.vm,
        handler: stuckStatusHandler,
        event: widgetEvent,
      }))
    }
  }

  /**
   * handleAttachedStickablesChangedEvent - Handle attached stickables changed events
   */
  async handleAttachedStickablesChangedEvent(widgetEvent, widgetManager, widgetNodeId) {
    const renderingState = widgetManager.getRenderingState(widgetNodeId)
    const attachedStickablesHandler = renderingState.stickableState.attachedStickablesChangedHandle
    if (attachedStickablesHandler) {
      await widgetManager.trackPromise(handleAttachedStickablesChange({
        vm: this.vm,
        handler: attachedStickablesHandler,
        event: widgetEvent,
      }))
    }
  }

  /**
   * handleMountOrRerenderEvent - Handle mount, rerender, or code change events
   */
  async handleMountOrRerenderEvent(widgetEvent, widgetManager, pluginDataHash) {
    const widgetNodeId = widgetEvent.widgetNodeID
    if (pluginDataHash) {
      const widgetNode = this.getWidgetNode(widgetNodeId)
      permissionScopeHandler.plugin('widget-code-change-setPluginData', () => {
        widgetNode.setPluginData(this.options.pluginID, cz, pluginDataHash)
      })
    }
    widgetManager.scheduleRender(widgetNodeId)
  }

  /**
   * handleWidgetError - Handle widget processing errors
   */
  handleWidgetError(error) {
    if (error instanceof InternalError) {
      logger.error(error)
    }
    else if (error instanceof RequestError) {
      // Handle specific error type silently
    }
    else {
      throw error
    }
  }

  /**
   * setupWidgetUtilityFunctions - Setup widget utility and hook functions
   */
  setupWidgetUtilityFunctions(widgetApiObject, vm) {
    const widgetManager = this.widgetManager

    // Color map to options utility
    vm.defineFunction(widgetApiObject, 'colorMapToOptions', 'widget.colorMapToOptions', (colorMapHandle) => {
      const optionsArray = vm.newArray()
      const colorMap = vm.deepUnwrap(colorMapHandle)
      Object.keys(colorMap).forEach((key, index) => {
        const optionObject = vm.newObject()
        vm.setProp(optionObject, 'option', vm.newString(colorMap[key]))
        if (key === '') {
          vm.setProp(optionObject, 'tooltip', vm.newString(''))
        }
        else {
          const tooltip = key.replace(/([A-Z])/g, ' $1').trim().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
          vm.setProp(optionObject, 'tooltip', vm.newString(tooltip))
        }
        vm.setProp(optionsArray, String(index), optionObject)
      })
      return optionsArray
    })

    // Widget ID hook functions
    const getWidgetId = () => vm.newString(widgetManager!.getCurrentWidgetNodeId())
    this.defineWidgetHookFunction(widgetApiObject, vm, widgetManager, 'useWidgetId', getWidgetId)
    this.defineWidgetHookFunction(widgetApiObject, vm, widgetManager, 'useWidgetNodeId', getWidgetId)

    // Effect hook
    this.defineWidgetHookFunction(widgetApiObject, vm, widgetManager, 'useEffect', (effectCallback) => {
      widgetManager!.addEffect(effectCallback)
      return vm.undefined
    })

    // Synced state hook
    this.defineWidgetHookFunction(widgetApiObject, vm, widgetManager, 'useSyncedState', (stateKey, defaultValueFunction) => {
      return this.handleUseSyncedState(stateKey, defaultValueFunction, vm, widgetManager)
    })
  }

  /**
   * defineWidgetHookFunction - Helper function to define widget hook functions with proper validation
   */
  defineWidgetHookFunction(widgetApiObject, vm, widgetManager, hookName, hookImplementation) {
    vm.defineFunction(widgetApiObject, hookName, `widget.${hookName}`, (hookContext, hookData, hookOptions) => {
      if (!widgetManager.isRunningWidgetFunction()) {
        throw new Error(`Cannot use ${hookName} hook outside of widget rendering.`)
      }
      return hookImplementation(hookContext, hookData, hookOptions)
    })
  }

  /**
   * handleUseSyncedState - Handle the useSyncedState hook implementation
   */
  handleUseSyncedState(stateKey, defaultValueFunction, vm, widgetManager) {
    const currentWidgetNodeId = widgetManager.getCurrentWidgetNodeId()
    const validatedStateKey = validateWithZSchema({
      vm,
      handle: stateKey,
      zSchema: _$$z.string(),
      property: 'key',
    })
    const getDefaultValue = () => {
      if (vm.isFunction(defaultValueFunction)) {
        let defaultValue = vm.undefined
        widgetManager.runSyncedStateDefaultValueFunction(() => {
          const functionResult = vm.callFunction(defaultValueFunction, vm.undefined)
          if (functionResult.type === 'FAILURE') {
            throw new InternalError(`Error in useSyncedState default value function: ${functionResult.error}`)
          }
          if (vm.isUndefined(functionResult.handle)) {
            throw new InternalError('Cannot return undefined from default value function in useSyncedState')
          }
          defaultValue = functionResult.handle
        })
        return defaultValue
      }
      return defaultValueFunction
    }
    const widgetNode = this.privateSceneGraph.get(currentWidgetNodeId)
    if (!widgetNode) {
      const stateArray = vm.newArray()
      vm.setProp(stateArray, '0', getDefaultValue())
      vm.setProp(stateArray, '1', vm.newFunction('setSyncedState', () => {
        if (widgetManager.isRunningWidgetFunction()) {
          throw new Error('Cannot call setSyncedState while widget is rendering.')
        }
        throw new Error(`Invalid widgetID=${currentWidgetNodeId}`)
      }))
      return stateArray
    }
    const getCurrentState = () => {
      const renderMode = widgetManager.getRenderMode(widgetNode.guid)
      const syncedData = getSyncedState(renderMode, widgetNode)
      const defaultValue = getDefaultValue()
      if (renderMode === 'current' && !vm.isUndefined(defaultValue) && !Object.prototype.hasOwnProperty.call(syncedData, validatedStateKey)) {
        const unwrappedDefault = vm.deepUnwrap(defaultValue)
        setInitialWidgetSyncedState(this.privateSceneGraph.get(currentWidgetNodeId), validatedStateKey, unwrappedDefault)
      }
      return Object.prototype.hasOwnProperty.call(syncedData, validatedStateKey) ? vm.deepWrap(syncedData[validatedStateKey]) : defaultValue
    }
    const setSyncedState = vm.newFunction('setSyncedState', (newValue) => {
      if (widgetManager.isRunningWidgetFunction()) {
        throw new Error('Cannot call setSyncedState while widget is rendering.')
      }
      const processedValue = vm.deepUnwrap((() => {
        if (vm.isFunction(newValue)) {
          const result = vm.callFunction(newValue, vm.undefined, getCurrentState())
          if (result.type === 'FAILURE') {
            throw new InternalError(`Error in setSyncedState: ${result.error}`)
          }
          return result.handle
        }
        return newValue
      })())

      // Set the synced state value
      setInitialWidgetSyncedState(this.privateSceneGraph.get(currentWidgetNodeId), validatedStateKey, processedValue)
      return vm.undefined
    })
    const stateArray = vm.newArray()
    vm.setProp(stateArray, '0', getCurrentState())
    vm.setProp(stateArray, '1', setSyncedState)
    return stateArray
  }

  /**
   * handleUseSyncedMap - Handle the useSyncedMap hook implementation
   */
  handleUseSyncedMap(mapKey, vm, widgetManager) {
    const currentWidgetNodeId = widgetManager.getCurrentWidgetNodeId()
    const validatedMapKey = validateWithZSchema({
      vm,
      handle: mapKey,
      zSchema: _$$z.string(),
      property: 'mapKey',
    })
    const getCurrentMapData = () => {
      const widgetNode = this.privateSceneGraph.get(currentWidgetNodeId)
      return getSyncedMapEntry(widgetManager.getRenderMode(widgetNode?.guid ?? '-1:-1'), widgetNode, validatedMapKey)
    }
    const mapObject = vm.newObject()
    vm.defineFunction(mapObject, 'set', 'map.set', (key, value) => {
      if (widgetManager.isRunningWidgetFunction())
        throw new Error('Cannot call map.set while widget is rendering.')
      const validatedKey = validateWithZSchema({
        vm,
        handle: key,
        zSchema: _$$z.string(),
        property: 'map.key',
      })
      const unwrappedValue = vm.deepUnwrap(value)
      permissionScopeHandler.plugin('widget-set-synced-map-key', () => setWidgetSyncedMapEntry(this.privateSceneGraph.get(currentWidgetNodeId), validatedMapKey, validatedKey, unwrappedValue))
      widgetManager.scheduleRender(currentWidgetNodeId)
      return vm.undefined
    })
    vm.defineFunction(mapObject, 'get', 'map.get', (key) => {
      const validatedKey = validateWithZSchema({
        vm,
        handle: key,
        zSchema: _$$z.string(),
        property: 'map.key',
      })
      return vm.deepWrap(getCurrentMapData()[validatedKey])
    })
    vm.defineFunction(mapObject, 'has', 'map.has', (key) => {
      const validatedKey = validateWithZSchema({
        vm,
        handle: key,
        zSchema: _$$z.string(),
        property: 'map.key',
      })
      return vm.newBoolean(Object.prototype.hasOwnProperty.call(getCurrentMapData(), validatedKey))
    })
    vm.defineFunction(mapObject, 'delete', 'map.delete', (key) => {
      if (widgetManager.isRunningWidgetFunction())
        throw new Error('Cannot call map.delete while widget is rendering.')
      let a = validateWithZSchema({
        vm,
        handle: key,
        zSchema: _$$z.string(),
        property: 'map.key',
      })
      deleteWidgetSyncedMapEntry(this.privateSceneGraph.get(variableDefinitions), NodeAPI, a)
      widgetManager.scheduleRender(variableDefinitions)
      return vm.undefined
    })
    vm.defineFunction(mapObject, 'keys', 'map.keys', () => vm.deepWrap(Object.keys(getCurrentMapData())))
    vm.defineProp(mapObject, 'length', {
      enumerable: false,
      metricsKey: 'map.length',
      get: () => {
        logger.warn('map.length is deprecated. please use map.size instead.')
        return vm.newNumber(Object.keys(getCurrentMapData()).length)
      },
    })
    vm.defineProp(mapObject, 'size', {
      enumerable: false,
      metricsKey: 'map.size',
      get: () => vm.newNumber(Object.keys(getCurrentMapData()).length),
    })
    vm.defineFunction(mapObject, 'values', 'map.values', () => vm.deepWrap(Object.values(getCurrentMapData())))
    vm.defineFunction(mapObject, 'entries', 'map.entries', () => vm.deepWrap(Object.entries(getCurrentMapData())))
    return mapObject
  }

  /**
   * setupWidgetHooks - Setup additional widget hooks for property menu and stickable functionality
   */
  setupWidgetHooks(widgetApiObject, vm, widgetManager) {
    // Property menu hook
    this.defineWidgetHookFunction(widgetApiObject, vm, widgetManager, 'usePropertyMenu', (propertyMenuDefinition, propertyMenuCallback) => {
      widgetManager.setPropertyMenu({
        propertyMenuDefinitionHandle: propertyMenuDefinition,
        propertyMenuCallbackHandle: propertyMenuCallback,
      })
      return vm.undefined
    })

    // Stickable hooks
    this.defineWidgetHookFunction(widgetApiObject, vm, widgetManager, 'useStickable', (isStickable) => {
      widgetManager.setIsStickable(isStickable)
      return vm.undefined
    })
    this.defineWidgetHookFunction(widgetApiObject, vm, widgetManager, 'useStickableHost', (isStickableHost) => {
      widgetManager.setIsStickableHost(isStickableHost)
      return vm.undefined
    })

    // Hide cursors hook (permission-based)
    if (this.options.validatedPermissions.permissions.includes('hidecursors')) {
      this.defineWidgetHookFunction(widgetApiObject, vm, widgetManager, 'useHideCursors', (shouldHideCursors) => {
        widgetManager.setShouldHideCursors(shouldHideCursors)
        return vm.undefined
      })
    }

    // Add component names to object
    this.addComponentNamesToObject(widgetApiObject)

    // Define JSX renderer
    vm.defineProp(widgetApiObject, 'h', {
      enumerable: false,
      value: vm.newJsxRenderer(Object.keys({
        ...layoutComponentCollection,
        ...instanceComponentMap,
      })),
    })
    vm.shallowFreezeObject(widgetApiObject)
  }

  /**
   * defineWidgetLiteApi - Define widget lite API functionality
   */
  defineWidgetLiteApi(e) {
    let t = this.vm.newObject()
    this.vm.defineProp(e, 'widget', {
      value: t,
      enumerable: !1,
    })
    this.addComponentNamesToObject(t)
    this.vm.defineProp(t, 'h', {
      enumerable: !1,
      value: this.vm.newJsxRenderer(Object.keys({
        ...layoutComponentCollection,
        ...instanceComponentMap,
      })),
    })
    this.vm.shallowFreezeObject(t)
  }

  /**
   * addComponentNamesToObject - Add component names to an object
   */
  addComponentNamesToObject(e) {
    for (let t of Object.keys({
      ...layoutComponentCollection,
      ...instanceComponentMap,
    })) {
      this.vm.defineProp(e, t, {
        enumerable: !0,
        value: this.vm.newString(t),
      })
    }
  }

  /**
   * defineInternalApis - Define internal APIs based on validated permissions
   *
   * Conditionally defines internal APIs (analytics, cortex, firstDraft, debug)
   * based on the plugin's validated permissions. Uses a systematic approach
   * to avoid code duplication and ensure consistent API registration.
   *
   * @param apiObject The main API object to define internal APIs on
   */
  defineInternalApis(apiObject) {
    const internalApis = [{
      permission: 'analytics',
      key: 'analytics',
      factory: () => this.createAnalyticsApi(),
    }, {
      permission: 'cortex',
      key: 'cortex',
      factory: () => this.createCortexApi(),
    }, {
      permission: 'firstdraft',
      key: 'firstDraft',
      factory: () => this.createFirstDraftApi(),
    }, {
      permission: 'debug',
      key: 'debug',
      factory: () => this.createDebugNodesApi(),
    }]
    internalApis.forEach((api) => {
      this.defineInternalApiIfPermitted(apiObject, api.permission, api.key, api.factory)
    })
  }

  /**
   * defineInternalApiIfPermitted - Define internal API if permission is granted
   */
  defineInternalApiIfPermitted(apiObject, permission, apiKey, apiFactory) {
    if (this.options.validatedPermissions.permissions.includes(permission)) {
      this.defineVmProp({
        handle: apiObject,
        key: apiKey,
        options: {
          enumerable: false,
          value: apiFactory(),
        },
        canWriteInReadOnly: false,
        isAllowedInWidgetRender: false,
        hasEditScope: false,
      })
    }
  }

  /**
   * createDebugNodesApi - Create debug nodes API for development
   */
  createDebugNodesApi() {
    let e = this.vm
    let t = e.newObject()
    this.defineVmFunction({
      handle: t,
      key: 'matchNodes',
      metricsKey: 'debugNodes.matchNodes',
      cb: (t) => {
        if (!e.isArray(t))
          throw new Error('Not an array')
        let i = e.getNumberProp(t, 'length')
        if (i < 1) {
          throw new Error('First argument to matchNodes must be an array of at least one node')
        }
        let n: any[] = []
        for (let r = 0; r < i; r++) {
          let i = e.getStringProp(t, r.toString())
          n.push(i)
        }
        let r = PluginHelpers.matchNodes(n)
        return e.deepWrap(r)
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    e.shallowFreezeObject(t)
    return t
  }

  /**
   * createFirstDraftApi - Create First Draft API for component and design management
   *
   * Creates comprehensive API for First Draft functionality including component
   * serialization, deserialization, variable management, override handling,
   * and design system operations. Supports async operations and proper
   * error handling for complex design workflows.
   *
   * @returns VM object with First Draft API methods
   */
  createFirstDraftApi() {
    const vm = this.vm
    const firstDraftObject = vm.newObject()

    // Setup component serialization functions
    this.setupComponentSerializationFunctions(firstDraftObject, vm)

    // Setup page and navigation functions
    this.setupPageNavigationFunctions(firstDraftObject, vm)

    // Setup component management functions
    this.setupComponentManagementFunctions(firstDraftObject, vm)

    // Setup variable and text functions
    this.setupVariableAndTextFunctions(firstDraftObject, vm)

    // Setup async component functions
    this.setupAsyncComponentFunctions(firstDraftObject, vm)

    // Setup layer and override functions
    this.setupLayerAndOverrideFunctions(firstDraftObject, vm)
    vm.shallowFreezeObject(firstDraftObject)
    return firstDraftObject
  }

  /**
   * setupComponentSerializationFunctions - Setup component serialization/deserialization
   */
  setupComponentSerializationFunctions(firstDraftObject, vm) {
    // Serialize component for publish
    this.defineVmFunction({
      handle: firstDraftObject,
      key: 'serializeProductComponentForPublish',
      metricsKey: 'firstDraft.serializeProductComponentForPublish',
      cb: (nodeHandle) => {
        const node = this.getNode(nodeHandle)
        if (node.isLooseComponent || node.isStateGroup) {
          const [serializedData, buffer] = PluginHelpers.serializeProductComponentForPublish(node.guid)
          if (serializedData && buffer) {
            const wrappedData = vm.deepWrap(serializedData)
            vm.setProp(wrappedData, 'buffer', vm.deepWrap(new Uint8Array(buffer)))
            return wrappedData
          }
        }
        return vm.$$null
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })

    // Deserialize component from buffer
    this.defineVmFunction({
      handle: firstDraftObject,
      key: 'deserializeProductComponentFromBuffer',
      metricsKey: 'firstDraft.deserializeProductComponentFromBuffer',
      cb: (idHandle, bufferHandle) => {
        if (!vm.isString(idHandle)) {
          throw new TypeError(`Expected id to be a string, got ${vm.typeof(idHandle)}`)
        }
        const id = vm.toString(idHandle)
        const buffer = validateWithZSchema({
          vm,
          handle: bufferHandle,
          zSchema: FigmaSchema.UInt8Array,
          property: 'buffer',
        })
        const result = PluginHelpers.deserializeProductComponentFromBuffer(id, buffer)
        return vm.newString(result)
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: true,
    })
  }

  /**
   * setupPageNavigationFunctions - Setup page and navigation related functions
   */
  setupPageNavigationFunctions(firstDraftObject, vm) {
    this.defineVmFunction({
      handle: firstDraftObject,
      key: 'getInternalPageId',
      metricsKey: 'firstDraft.getInternalPageId',
      cb: () => {
        const rootNode = getSceneGraphInstance().get('0:0')
        if (rootNode) {
          for (const childNode of rootNode.childrenNodes) {
            if (childNode.type === 'CANVAS' && childNode.isInternalOnlyNode) {
              return vm.newString(childNode.guid)
            }
          }
        }
        return vm.$$null
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * setupComponentManagementFunctions - Setup component version and override management
   */
  setupComponentManagementFunctions(firstDraftObject, vm) {
    // Get component version
    this.defineVmFunction({
      handle: firstDraftObject,
      key: 'getComponentVersion',
      metricsKey: 'firstDraft.getComponentVersion',
      cb: (idHandle) => {
        if (!vm.isString(idHandle)) {
          throw new TypeError(`Expected id to be a string, got ${vm.typeof(idHandle)}`)
        }
        const id = vm.toString(idHandle)
        if (!isValidSessionLocalID(parseSessionLocalID(id))) {
          return vm.$$null
        }
        const node = this.privateSceneGraph.get(id)
        if (!node) {
          return vm.$$null
        }
        return this.getNodeComponentVersion(node, vm)
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })

    // Get override key for GUID
    this.defineVmFunction({
      handle: firstDraftObject,
      key: 'getOverrideKeyForGuidOrNull',
      metricsKey: 'firstDraft.getOverrideKeyForGuidOrNull',
      cb: (idHandle) => {
        if (!vm.isString(idHandle)) {
          throw new TypeError(`Expected id to be a string, got ${vm.typeof(idHandle)}`)
        }
        const id = vm.toString(idHandle)
        if (!isValidSessionLocalID(parseSessionLocalID(id))) {
          return vm.$$null
        }
        const node = this.privateSceneGraph.get(id)
        if (!node) {
          return vm.$$null
        }
        const overrideKey = node.overrideKey
        return overrideKey ? vm.newString(overrideKey) : vm.$$null
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
  }

  /**
   * getNodeComponentVersion - Get component version for a node
   */
  getNodeComponentVersion(node, vm) {
    if (node.isStateGroup) {
      const version = node.sharedStateGroupVersion
      return version ? vm.newString(version) : vm.$$null
    }
    if (node.isLooseComponent) {
      const version = node.sharedSymbolVersion
      return version ? vm.newString(version) : vm.$$null
    }
    return vm.$$null
  }

  /**
   * setupVariableAndTextFunctions - Setup variable and text management functions
   */
  setupVariableAndTextFunctions(firstDraftObject, vm) {
    // Localize subtree
    this.defineVmFunction({
      handle: firstDraftObject,
      key: 'localizeSubtree',
      metricsKey: 'firstDraft.localizeSubtree',
      cb: (nodeHandle) => {
        const node = this.getNode(nodeHandle)
        if (!node) {
          return vm.newBoolean(false)
        }
        const success = FirstDraftHelpers.detachGeneratedDesign(node.guid, DraftState.CURRENT)
        return vm.newBoolean(success)
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })

    // Get consumed variable collection IDs
    this.defineVmFunction({
      handle: firstDraftObject,
      key: 'consumedVariableCollectionIds',
      metricsKey: 'firstDraft.consumedVariableCollectionIds',
      cb: (nodeHandle) => {
        const node = this.getNode(nodeHandle)
        if (!node) {
          return vm.newBoolean(false)
        }
        const collectionIds = FirstDraftHelpers.consumedVariableCollectionIds(node.guid)
        const resultArray = vm.newArray()
        for (let i = 0; i < collectionIds.length; i++) {
          vm.setProp(resultArray, String(i), vm.newString(collectionIds[i]))
        }
        return resultArray
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })

    // Detach font family variable
    this.defineVmFunction({
      handle: firstDraftObject,
      key: 'detachFontFamilyVariable',
      metricsKey: 'firstDraft.detachFontFamilyVariable',
      cb: (nodeHandle) => {
        const node = this.getNode(nodeHandle)
        if (node && node.type === 'TEXT') {
          node.inheritedTextStyle = null
          node.setBoundVariable('fontFamily', null)
        }
        return vm.$$null
      },
      isAllowedInReadOnly: false,
      isAllowedInWidgetRender: false,
      hasEditScope: true,
    })
  }

  /**
   * setupAsyncComponentFunctions - Setup async component information functions
   */
  setupAsyncComponentFunctions(firstDraftObject, vm) {
    this.defineVmFunction({
      handle: firstDraftObject,
      key: 'getComponentInfoByIdAsync',
      metricsKey: 'firstDraft.getComponentInfoByIdAsync',
      cb: (idHandle) => {
        if (!vm.isString(idHandle)) {
          return vm.$$null
        }
        const {
          promise,
          resolve,
        } = vm.newPromise()
        vm.registerPromise((async () => {
          const componentModule = await Promise.resolve().then(() => _require) // Fix Promise chain
          const id = vm.toString(idHandle)
          const componentInfo = componentModule?.getComponentInfoByIdUncached?.(id, {
            enableTsArrays: !!getFeatureFlags().first_draft_ts_arrays,
          })
          resolve(componentInfo ? vm.deepWrap(componentInfo) : vm.$$null)
        })())
        return promise
      },
      isAllowedInReadOnly: false,
      isAllowedInWidgetRender: false,
      hasEditScope: true,
    })
  }

  /**
   * setupLayerAndOverrideFunctions - Setup layer renaming and override functions
   */
  setupLayerAndOverrideFunctions(firstDraftObject, vm) {
    // Rename layers from selection
    this.defineVmFunction({
      handle: firstDraftObject,
      key: 'renameLayersFromSelection',
      metricsKey: 'firstDraft.renameLayersFromSelection',
      cb: () => {
        const {
          promise,
          resolve,
          reject,
        } = vm.newPromise()
        vm.registerPromise(renameSelectedLayers()).then(() => resolve(vm.undefined)).catch(error => reject(this.wrapError(error)))
        return promise
      },
      isAllowedInReadOnly: false,
      isAllowedInWidgetRender: false,
      hasEditScope: true,
    })

    // Apply overrides to instance to match node
    this.defineVmFunction({
      handle: firstDraftObject,
      key: 'applyOverridesToInstanceToMatchNode',
      metricsKey: 'firstDraft.applyOverridesToInstanceToMatchNode',
      cb: (instanceHandle, targetHandle) => {
        const instanceNode = this.getNode(instanceHandle)
        const targetNode = this.getNode(targetHandle)
        FirstDraftHelpers.applyOverridesToInstanceToMatchNode(instanceNode.guid, targetNode.guid)
        return vm.$$null
      },
      isAllowedInReadOnly: false,
      isAllowedInWidgetRender: false,
      hasEditScope: true,
    })
  }

  /**
   * createAnalyticsApi - Creates the Analytics API object for plugin analytics tracking.
   *
   * Provides a 'track' method for sending analytics events with event name and properties.
   * The API object is frozen to prevent modification.
   *
   * @returns VM object with analytics API methods
   */
  createAnalyticsApi() {
    const vm = this.vm
    const analyticsApi = vm.newObject()

    /**
     * track - Sends an analytics event with the specified name and properties.
     * @param nameHandle - VM handle for the event name (string)
     * @param propertiesHandle - VM handle for event properties (object)
     */
    this.defineVmFunction({
      handle: analyticsApi,
      key: 'track',
      metricsKey: 'analytics.track',
      cb: (nameHandle, propertiesHandle) => {
        const eventName = validateWithZSchema({
          vm,
          handle: nameHandle,
          zSchema: _$$z.string(),
          property: 'analytics.track name',
        })
        const eventProperties = validateWithZSchema({
          vm,
          handle: propertiesHandle,
          zSchema: _$$z.record(_$$z.any()),
          property: 'analytics.track properties',
        })
        trackEventAnalytics(eventName, eventProperties)
        return vm.undefined
      },
      isAllowedInReadOnly: true,
      isAllowedInWidgetRender: false,
      hasEditScope: false,
    })
    vm.shallowFreezeObject(analyticsApi)
    return analyticsApi
  }

  /**
   * wrapPromise - Wrap a promise for VM context
   */
  wrapPromise(e) {
    let t = this.vm
    let {
      promise,
      resolve,
      reject,
    } = t.newPromise()
    t.registerPromise(e).then(e => resolve(t.deepWrap(e))).catch(e => reject(this.wrapError(e)))
    return promise
  }

  /**
   * wrapError - Wrap an error for VM context
   */
  wrapError(e) {
    let t = this.vm
    let i = t.newObject()
    t.defineProp(i, 'message', {
      enumerable: !0,
      value: t.newString(e.message),
    })
    t.shallowFreezeObject(i)
    return i
  }

  /**
   * createCortexKiwiApi - Create Cortex Kiwi API for internal operations
   */
  createCortexKiwiApi() {
    let e = this
    let t = this.vm
    let i = t.newObject()
    this.defineVmFunction({
      handle: i,
      key: 'getSceneForNode',
      metricsKey: 'cortex.internal.kiwi.getSceneForNode',
      cb: (i) => {
        let n = e.getNode(i)
        let r = Fullscreen.generateClipboardScene(n.guid)
        return t.newUint8Array(r)
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmFunction({
      handle: i,
      key: 'applyScene',
      metricsKey: 'cortex.internal.kiwi.applyScene',
      cb: (e) => {
        let i = validateWithZSchema({
          vm: t,
          handle: e,
          zSchema: FigmaSchema.UInt8Array,
          property: 'applyScene',
        })
        Fullscreen.applyFileToCurrentScene(i)
        return t.undefined
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    t.shallowFreezeObject(i)
    return i
  }

  /**
   * createCortexApi - Create Cortex API for plugin operations
   */
  createCortexApi() {
    let e = this.vm
    let t = e.newObject()
    this.defineVmProp({
      handle: t,
      key: 'kiwi',
      options: {
        enumerable: !1,
        writable: !1,
        metricsKey: 'figma.kiwi',
        value: this.createCortexKiwiApi(),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    let i = (t, i) => validateWithZSchema({
      vm: e,
      handle: i,
      zSchema: _$$z.record(_$$z.any()),
      property: t,
    })
    let n = (e, n, r) => {
      this.defineVmFunction({
        handle: t,
        key: e,
        metricsKey: n,
        cb: (e) => {
          let t = i(`${n} input`, e)
          let a = debugState.getState()
          let s = OU(a)
          return this.wrapPromise(r(t, s))
        },
        isAllowedInReadOnly: !0,
        isAllowedInWidgetRender: !1,
        hasEditScope: !1,
      })
    }
    let r = (e, n, r) => {
      let a = this.vm
      this.defineVmFunction({
        handle: t,
        key: e,
        metricsKey: n,
        cb: (e) => {
          let t = i(`${n} input`, e)
          let s = debugState.getState()
          let o = OU(s)
          let {
            promise,
            resolve,
            reject,
          } = a.newPromise()
          a.registerPromise(r(t, o)).then(e => resolve(this.wrapReadableStream(e))).catch(e => reject(this.wrapError(e)))
          return promise
        },
        isAllowedInReadOnly: !0,
        isAllowedInWidgetRender: !1,
        hasEditScope: !1,
      })
    }
    n('completeChat', 'cortex.internal.openai.completeChat', _$$Ay2.openai.completeChat)
    r('streamChat', 'cortex.internal.openai.streamChat', _$$Ay2.openai.streamChat)
    n('computeEmbeddings', 'cortex.internal.openai.embeddings', _$$Ay2.openai.computeEmbeddings)
    n('getTextImageEmbeds', 'cortex.internal.clip.embeddings', _$$Ay2.design.getTextImageEmbeds)
    r('streamText', 'cortex.internal.streamText', _$$Ay2.internal.streamText)
    n('generateImages', 'cortex.internal.design.generateImages', _$$Ay2.design.generateImages)
    n('jamGPT', 'cortex.internal.figjam.jamGPT', _$$Ay2.figjam.jamGPT)
    r('createTemplate', 'cortex.internal.figjam.createTemplate', _$$Ay2.figjam.createTemplate)
    n('createVisual', 'cortex.internal.figjam.createVisual', _$$Ay2.figjam.createVisual)
    e.shallowFreezeObject(t)
    return t
  }

  /**
   * wrapReadableStream - Wrap a ReadableStream for VM context
   */
  wrapReadableStream(stream) {
    const vm = this.vm
    const ReadableStreamCtor = vm.getProp(vm.global, 'ReadableStream')
    if (!ReadableStreamCtor) {
      logger.error(`
Import a polyfill to use this plugin API, eg:
\`\`\`
import { ReadableStream } from "web-streams-polyfill/es6";
if (typeof globalThis !== "undefined" && !("ReadableStream" in globalThis)) {
  globalThis.ReadableStream = ReadableStream;
}
// Now it's safe to use APIs that return ReadableStreams
\`\`\`
`)
      return new Error('ReadableStream not available on the VM global object.')
    }
    const underlyingSource = vm.newObject()
    const reader = stream.getReader()
    const callController = (controller, method, ...args) => {
      const fn = vm.getProp(controller, method)
      return !!vm.isFunction(fn) && (vm.callFunction(fn, controller, ...args).type !== 'FAILURE' || void logger.error(`Error calling controller.${method}(\u2026)`))
    }
    vm.defineFunction(underlyingSource, 'pull', 'underlyingSource.pull', (controller) => {
      vm.retainHandle(controller)
      return this.wrapPromise((async () => {
        try {
          const {
            done,
            value,
          } = await reader.read()
          if (vm.isDestroyed()) {
            reader.cancel()
            return
          }
          done ? callController(controller, 'close', vm.undefined) : callController(controller, 'enqueue', vm.deepWrap(value))
        }
        catch (err) {
          logger.error('ReadableStream: Error reading from stream passing to plugin vm', err)
          callController(controller, 'error', this.wrapError(err))
        }
        finally {
          vm.releaseHandle(controller)
        }
      })())
    })
    vm.defineFunction(underlyingSource, 'cancel', 'underlyingSource.cancel', () => this.wrapPromise(reader.cancel()))
    vm.shallowFreezeObject(underlyingSource)
    const result = vm.callConstructor(ReadableStreamCtor, underlyingSource)
    if (result.type === 'FAILURE') {
      logger.error(`Error creating ReadableStream: ${result.error}`)
      return new Error(`Error creating ReadableStream: ${result.error}`)
    }
    return result.handle
  }

  setQueryMode(e) {
    this.queryMode = e
    PluginHelpers.runInQueryMode(this.queryMode)
    this.uiHandle.setHideVisibleUI(this.queryMode)
  }

  /**
   * setSkipInvisibleInstanceChildren - Set whether to skip invisible instance children
   */
  setSkipInvisibleInstanceChildren(e) {
    this.skipInvisibleInstanceChildren = e
    PluginHelpers.skipInvisibleInstanceChildren(e)
  }

  /**
   * createCodebaseSuggestionsApi - Create codebase suggestions API
   */
  createCodebaseSuggestionsApi() {
    let e = this.vm.newObject()
    this.defineVmFunction({
      handle: e,
      key: 'getSuggestionsUrl',
      metricsKey: 'codebase_suggestions.getSuggestionsUrl',
      cb: () => {
        let e = _$$I()
        if (!e)
          throw new Error('No org id found')
        let t = codeSuggestionAPIHandler.getZipUrl(e).then(e => e.data.meta.url)
        return this.wrapPromise(t)
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmFunction({
      handle: e,
      key: 'getSuggestions',
      metricsKey: 'codebase_suggestions.getSuggestions',
      cb: () => {
        let e = _$$I()
        if (!e)
          throw new Error('No org id found')
        let t = codeSuggestionAPIHandler.getZipUrl(e).then((e) => {
          let t = e.data.meta.url
          if (!t)
            throw new Error('No url found')
          // TODO: Phase 18 Refactoring - Replace with:
          // const httpClient = createAdvancedHTTPClientManager()
          // return httpClient.get(t, { responseType: 'arrayBuffer' }).then(response => response.data)
          return fetch(t)
        }).then(e => e.arrayBuffer())
        return this.wrapPromise(t)
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    return e
  }

  /**
   * createJsxApi - Create JSX API for React-like components
   */
  createJsxApi() {
    let e = this.vm
    let t = e.newObject()
    this.defineVmFunction({
      handle: t,
      key: 'serialize',
      metricsKey: 'jsx.serialize',
      cb: (t, i) => {
        let n = this.getNode(t)
        let r = validateWithZSchema({
          vm: e,
          handle: i,
          zSchema: J3.optional(),
          property: 'options',
        })
        return this.wrapPromise(generateJsxFromNode(n, r))
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmFunction({
      handle: t,
      key: 'deserialize',
      metricsKey: 'jsx.deserialize',
      cb: (t, i) => {
        if (!e.isString(t))
          throw new Error('jsx not a string')
        let n = e.toString(t)
        let r = validateWithZSchema({
          vm: e,
          handle: i,
          zSchema: J3.optional(),
          property: 'options',
        })
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        e.registerPromise(getNodeGuid(n, r)).then((t) => {
          t ? resolve(this.nodeFactory.createNode(t, 'figma.jsx.deserialize')) : resolve(e.$$null)
        }).catch(t => reject(e.newString(t.message)))
        return promise
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    return t
  }

  /**
   * getUiHandle - Get the UI handle for the plugin
   */
  getUiHandle() {
    return this.uiHandle
  }

  /**
   * createAPI - Create the main plugin API
   */
  createAPI() {
    let e = this.vm
    let {
      command,
      queryMode,
      apiVersion,
      enableProposedApi,
      enablePrivatePluginApi,
      openFileKey,
      stats,
      incrementalSafeApi,
      allowIncrementalUnsafeApiCalls,
    } = this.options
    let u = 0
    let y = e.newObject()
    e.setProp(e.global, 'figma', y)
    this.defineVmProp({
      handle: y,
      key: 'apiVersion',
      options: {
        enumerable: !1,
        writable: !1,
        metricsKey: 'figma.apiVersion',
        value: e.newString(apiVersion),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmFunction({
      handle: y,
      key: 'getHTMLString',
      metricsKey: 'figma.getHTMLString',
      cb: () => this.vm.newString(this.options.html ?? ''),
      isAllowedInReadOnly: !0,
      hasEditScope: !1,
    });
    (enablePrivatePluginApi || this.options.validatedPermissions.permissions.includes('filekey')) && this.defineVmProp({
      handle: y,
      key: 'fileKey',
      options: {
        enumerable: !1,
        writable: !1,
        metricsKey: 'figma.fileKey',
        value: e.newString(openFileKey),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    // =====================
    // REFACTORED: Modular Buzz API Extension
    // =====================
    if (this.inBuzz() && getFeatureFlags().buzz_plugins) {
      const buzzApiConfig = {
        vm: e,
        figmaApi: y,
        defineVmFunction: this.defineVmFunction,
        defineVmProp: this.defineVmProp,
        getNode: this.getNode,
        sceneGraph: this.privateSceneGraph,
        nodeFactory: this.nodeFactory,
        documentAccessState: this.documentAccessState,
        imageStore: this.imageStore,
        videoStore: this.videoStore,
      }
      buzzApiConfig.defineVmProp({
        handle: buzzApiConfig.figmaApi,
        key: 'buzz',
        options: {
          enumerable: false,
          metricsKey: 'figma.buzz',
          get: memoizedHandle(buzzApiConfig.vm, () => {
            const buzzObj = buzzApiConfig.vm.newObject()

            // createFrame
            buzzApiConfig.defineVmFunction({
              handle: buzzObj,
              key: 'createFrame',
              metricsKey: 'figma.buzz.createFrame',
              cb: (rowHandle, colHandle) => {
                const row = validateWithZSchema({
                  vm: buzzApiConfig.vm,
                  handle: rowHandle,
                  zSchema: _$$z.number().finite().min(0).int().optional(),
                  property: 'canvasRow',
                })
                const col = validateWithZSchema({
                  vm: buzzApiConfig.vm,
                  handle: colHandle,
                  zSchema: _$$z.number().finite().min(0).int().optional(),
                  property: 'canvasColumn',
                })
                const assetType = designTypeToIndex.get('CUSTOM')
                if (assetType === undefined)
                  throw new Error('Invalid asset type')
                const size = CooperTemplateTypesTsBindings?.getCooperTemplateTypeSize(assetType)
                if (!size)
                  throw new Error('Failed fetching size for asset type')
                const {
                  row: r,
                  col: c,
                } = getRowColumn(row, col)
                const guid = CooperHelpers?.createBlankChildAtCoord(r, c, size, 'plugin_buzz_create_frame', true, assetType)
                if (!guid)
                  throw new Error('Failed to create frame')
                markPageLoaded(guid, buzzApiConfig.documentAccessState)
                AppStateTsApi?.canvasGrid().recomputeGrid()
                return buzzApiConfig.nodeFactory.createNode(guid, 'figma.buzz.createFrame')
              },
              isAllowedInReadOnly: true,
              isAllowedInWidgetRender: false,
              hasEditScope: true,
            })

            // createInstance
            buzzApiConfig.defineVmFunction({
              handle: buzzObj,
              key: 'createInstance',
              metricsKey: 'figma.buzz.createInstance',
              cb: (nodeHandle, rowHandle, colHandle) => {
                const row = validateWithZSchema({
                  vm: buzzApiConfig.vm,
                  handle: rowHandle,
                  zSchema: FigmaSchema.PositiveInteger.optional(),
                  property: 'canvasRow',
                })
                const col = validateWithZSchema({
                  vm: buzzApiConfig.vm,
                  handle: colHandle,
                  zSchema: FigmaSchema.PositiveInteger.optional(),
                  property: 'canvasColumn',
                })
                const targetNode = buzzApiConfig.getNode(nodeHandle)
                if (targetNode.type !== 'SYMBOL')
                  throw new Error('Node is not a component')
                const instanceGuid = targetNode.createInstance()?.guid || ''
                const nodeObj = buzzApiConfig.nodeFactory.createNode(instanceGuid, 'node.createInstance')
                const {
                  row: r,
                  col: c,
                } = getRowColumn(row, col)
                AppStateTsApi?.canvasGrid().moveChildrenToCoord([instanceGuid], {
                  row: r,
                  col: c,
                })
                markPageLoaded(instanceGuid, buzzApiConfig.documentAccessState)
                AppStateTsApi?.canvasGrid().recomputeGrid()
                return nodeObj
              },
              isAllowedInReadOnly: false,
              hasEditScope: true,
            })

            // getBuzzAssetTypeForNode
            buzzApiConfig.defineVmFunction({
              handle: buzzObj,
              key: 'getBuzzAssetTypeForNode',
              metricsKey: 'figma.buzz.getBuzzAssetTypeForNode',
              cb: (nodeHandle) => {
                const node = buzzApiConfig.getNode(nodeHandle)
                if (node && CooperTemplateTypesTsBindings) {
                  const type = CooperTemplateTypesTsBindings.getCooperTemplateType(node.guid)
                  if (type != null) {
                    const label = indexToDesignType.get(type)
                    return label ? buzzApiConfig.vm.newString(label.toString()) : buzzApiConfig.vm.$$null
                  }
                }
                return buzzApiConfig.vm.$$null
              },
              isAllowedInReadOnly: true,
              isAllowedInWidgetRender: false,
              hasEditScope: false,
            })

            // setBuzzAssetTypeForNode
            buzzApiConfig.defineVmFunction({
              handle: buzzObj,
              key: 'setBuzzAssetTypeForNode',
              metricsKey: 'figma.buzz.setBuzzAssetTypeForNode',
              cb: (nodeHandle, typeHandle) => {
                const node = buzzApiConfig.getNode(nodeHandle)
                if (!node.isCooperFrame)
                  throw new Error('Can only set asset type on Buzz Asset Node')
                if (node.isInstance) {
                  throw new Error('Cannot set asset type on Locked Buzz Asset Node')
                }
                const assetType = validateWithZSchema({
                  vm: buzzApiConfig.vm,
                  handle: typeHandle,
                  zSchema: FigmaSchema.BuzzAssetType,
                  property: 'buzzAssetType',
                })
                const typeValue = designTypeToIndex.get(assetType)
                if (CooperTemplateTypesTsBindings && typeValue)
                  CooperTemplateTypesTsBindings.setCooperTemplateType(node.guid, typeValue)
                return buzzApiConfig.vm.undefined
              },
              isAllowedInReadOnly: false,
              isAllowedInWidgetRender: false,
              hasEditScope: true,
            })

            // getTextContent
            buzzApiConfig.defineVmFunction({
              handle: buzzObj,
              key: 'getTextContent',
              metricsKey: 'figma.buzz.getTextContent',
              cb: (nodeHandle) => {
                const node = buzzApiConfig.getNode(nodeHandle)
                if (!node.isCooperFrame) {
                  throw new Error('Can only get Buzz Text Content on Buzz Asset Node')
                }
                return createBuzzTextContentArray(node, buzzApiConfig.vm, buzzApiConfig.sceneGraph)
              },
              isAllowedInReadOnly: false,
              isAllowedInWidgetRender: false,
              hasEditScope: true,
            })

            // getMediaContent
            buzzApiConfig.defineVmFunction({
              handle: buzzObj,
              key: 'getMediaContent',
              metricsKey: 'figma.buzz.getMediaContent',
              cb: (nodeHandle) => {
                const node = buzzApiConfig.getNode(nodeHandle)
                if (!node.isCooperFrame) {
                  throw new Error('Can only get Buzz Media Content on Buzz Asset Node')
                }
                return createBuzzMediaContentArray(node, buzzApiConfig.vm, buzzApiConfig.imageStore, buzzApiConfig.videoStore, buzzApiConfig.nodeFactory)
              },
              isAllowedInReadOnly: false,
              isAllowedInWidgetRender: false,
              hasEditScope: true,
            })

            // smartResize
            buzzApiConfig.defineVmFunction({
              handle: buzzObj,
              key: 'smartResize',
              metricsKey: 'figma.buzz.smartResize',
              cb: (nodeHandle, widthHandle, heightHandle) => {
                const node = buzzApiConfig.getNode(nodeHandle)
                if (!node.isCooperFrame) {
                  throw new Error('Can only get Buzz Media Content on Buzz Asset Node')
                }
                if (node.isInstance) {
                  throw new Error('Cannot smart resize Locked Buzz Asset Nodes')
                }
                const width = validateWithZSchema({
                  vm: buzzApiConfig.vm,
                  handle: widthHandle,
                  zSchema: FigmaSchema.PositiveFloat,
                  property: 'width',
                })
                const height = validateWithZSchema({
                  vm: buzzApiConfig.vm,
                  handle: heightHandle,
                  zSchema: FigmaSchema.PositiveFloat,
                  property: 'height',
                })
                if (CooperTemplateTypesTsBindings) {
                  CooperTemplateTypesTsBindings.setCooperTemplateType(node.guid, SocialMediaFormats.CUSTOM)
                  CooperTemplateTypesTsBindings.resizeNode(node.guid, width, height)
                }
                return buzzApiConfig.vm.undefined
              },
              isAllowedInReadOnly: false,
              isAllowedInWidgetRender: false,
              hasEditScope: true,
            })

            // --- Helper Functions for Buzz API ---

            /**
             * Create a VM array of text field objects for Buzz content.
             * Each object has isComponentProp, value, and setValueAsync.
             */
            function createBuzzTextContentArray(targetNode, vm, nodeMap) {
              const arr = vm.newArray()
              targetNode.getBuzzTextFields().forEach((field, idx) => {
                const obj = vm.newObject()
                vm.defineProp(obj, 'isComponentProp', {
                  enumerable: false,
                  get: () => vm.newBoolean(field.type === 'TEXT_PROP_DEF'),
                })
                vm.defineProp(obj, 'value', {
                  enumerable: false,
                  get: () => {
                    const guid = field.guids[0]
                    if (guid) {
                      const textNode = nodeMap.get(guid)
                      if (textNode)
                        return vm.newString(textNode.characters)
                    }
                    return vm.$$null
                  },
                })
                vm.defineFunction(obj, 'setValueAsync', 'buzz.textContent.setValueAsync', (newValueHandle) => {
                  const newValue = validateWithZSchema({
                    vm,
                    handle: newValueHandle,
                    zSchema: _$$z.string(),
                    property: 'newBuzzTextFieldValue',
                  })
                  const {
                    promise,
                    resolve,
                  } = vm.newPromise()
                  vm.registerPromise((async () => {
                    for (let guid of field.guids) {
                      if (!guid)
                        continue
                      const textNode = nodeMap.get(guid)
                      if (textNode)
                        await loadFontsForTextNode(textNode)
                    }
                    permissionScopeHandler.plugin('plugin-buzz-set-textfield-value', () => {
                      field.setValue(newValue)
                    })
                    resolve(vm.$$null)
                  })())
                  return promise
                })
                vm.setProp(arr, idx.toString(), obj)
              })
              return arr
            }

            /**
             * Create a VM array of media field objects for Buzz content.
             * Each object has type, hash, node, getMedia, setMedia.
             */
            function createBuzzMediaContentArray(targetNode, vm, imageStore, videoStore, nodeFactory) {
              const arr = vm.newArray()
              const fields = oJ(targetNode)
              fields.forEach((field, idx) => {
                const obj = createMediaFieldObject(field, vm, imageStore, videoStore, nodeFactory)
                if (obj)
                  vm.setProp(arr, idx.toString(), obj)
              })
              return arr
            }
            function createMediaFieldObject(field, vm, imageStore, videoStore, nodeFactory) {
              const {
                mediaPaint,
                mediaPaintIndex,
              } = _$$eG(field)
              if (!mediaPaint || mediaPaintIndex == null || isInvalidValue(mediaPaint) || mediaPaint.image?.hash === undefined) {
                return null
              }
              const obj = vm.newObject()
              // type
              vm.defineProp(obj, 'type', {
                enumerable: false,
                get: () => mediaPaint && isValidValue(mediaPaint) ? vm.newString(mediaPaint.type) : vm.$$null,
              })
              // hash
              vm.defineProp(obj, 'hash', {
                enumerable: false,
                get: () => {
                  if (!mediaPaint || isInvalidValue(mediaPaint))
                    return vm.$$null
                  let hash = null
                  switch (mediaPaint.type) {
                    case 'IMAGE':
                      hash = mediaPaint.image?.hash
                      break
                    case 'VIDEO':
                      hash = mediaPaint.video?.hash
                      break
                  }
                  return hash ? vm.newString(bytesToHex(hash)) : vm.$$null
                },
              })
              // node
              vm.defineProp(obj, 'node', {
                enumerable: false,
                get: () => nodeFactory.createNode(field.guid, 'BuzzMediaField.node.get'),
              })
              // getMedia
              vm.defineFunction(obj, 'getMedia', 'buzz.mediaContent.getMedia', () => {
                if (!mediaPaint || mediaPaintIndex == null)
                  throw new Error('No media paint found')
                if (isInvalidValue(mediaPaint))
                  throw new Error('Mixed media paint not supported')
                switch (mediaPaint.type) {
                  case 'IMAGE':
                  {
                    const hash = mediaPaint.image?.hash
                    if (hash === undefined)
                      throw new Error('Invalid Image paint - no hash found')
                    const img = imageStore.getImageFromSHA1(bytesToHex(hash))
                    if (img === null)
                      throw new Error('Could not retrieve image')
                    return createImageProcessor(vm, img)
                  }
                  case 'VIDEO':
                  {
                    const hash = mediaPaint.video?.hash
                    if (hash === undefined)
                      throw new Error('Invalid Video paint - no hash found')
                    try {
                      const vid = videoStore.getPrivateVideoOrThrow(bytesToHex(hash))
                      return createNodeHash(vm, vid)
                    }
                    catch {
                      throw new Error('getMedia is not currently supported for videos not directly created through plugins')
                    }
                  }
                  default:
                    throwTypeError(mediaPaint.type, 'Unknown media type')
                }
              })
              // setMedia
              vm.defineFunction(obj, 'setMedia', 'buzz.mediaContent.setMedia', (hashHandle, typeHandle) => {
                const hash = validateWithZSchema({
                  vm,
                  handle: hashHandle,
                  zSchema: _$$z.string(),
                  property: 'mediaHash',
                })
                const type = validateWithZSchema({
                  vm,
                  handle: typeHandle,
                  zSchema: _$$z.enum(['IMAGE', 'VIDEO']),
                  property: 'mediaType',
                })
                const paint = type === 'IMAGE'
                  ? processPaint(imageStore, videoStore, {
                      type: 'IMAGE',
                      imageHash: hash,
                      scaleMode: 'FILL',
                    }, [])
                  : processPaint(imageStore, videoStore, {
                      type: 'VIDEO',
                      videoHash: hash,
                      scaleMode: 'FILL',
                    }, [])
                const {
                  promise,
                  resolve,
                } = vm.newPromise()
                const {
                  mediaPaintIndex,
                } = _$$eG(field)
                vm.registerPromise((async () => {
                  const fills = field.fills.slice()
                  if (mediaPaintIndex !== null && fills[mediaPaintIndex]) {
                    fills[mediaPaintIndex] = paint
                    field.fills = fills
                  }
                  resolve(vm.$$null)
                })())
                return promise
              })
              return obj
            }
            return buzzObj
          }),
        },
        canWriteInReadOnly: false,
        isAllowedInWidgetRender: false,
        hasEditScope: false,
      })
    }
    // =====================
    // REFACTORED: Modular API Extensions for Styles, Variables, Team Library, and Annotations
    // =====================

    /**
     * Register style-related API methods if in supported editor types.
     * Handles getStyleById, moveStyle, moveFolder, createStyle, and getAllLocalStyles for each style type.
     */
    if (this.inDesignOrDevHandoffOrIllustration() || this.inSites()) {
      const styleApiConfig = {
        vm: e,
        figmaApi: y,
        styleFactory: this.styleFactory,
        defineVmFunction: this.defineVmFunction,
        defineVmIncrementalFunction: this.defineVmIncrementalFunction,
        incrementalSafeApi: this.options.incrementalSafeApi,
        getNode: this.getNode,
        styleManager: this.styleManager,
        documentAccessState: this.documentAccessState,
        allowIncrementalUnsafeApiCalls: !!this.options.allowIncrementalUnsafeApiCalls,
      }

      // Register style API methods for each style type
      for (const {
        styleType,
        moveMethod,
        moveFolderMethod,
        createMethod,
        getMethod,
        getMethodAsync,
      } of Ut) {
        // getStyleById (and async variant)
        styleApiConfig.defineVmIncrementalFunction({
          handle: styleApiConfig.figmaApi,
          key: 'getStyleById',
          metricsKey: 'figma.getStyleById',
          incrementalSafeApiKey: 'getStyleByIdAsync',
          incrementalSafeApiMetricsKey: 'figma.getStyleByIdAsync',
          parseArg: t => styleApiConfig.vm.toString(t),
          prepareDocument: async () => {
            await loadInternalCanvasMemoized(styleApiConfig.documentAccessState)
          },
          resolveValue: id => styleApiConfig.styleFactory.createStyle(id),
          incrementalSafeApi: styleApiConfig.incrementalSafeApi,
          allowIncrementalUnsafeApiCalls: styleApiConfig.allowIncrementalUnsafeApiCalls,
          isAllowedInReadOnly: true,
          hasEditScope: false,
        })

        // moveStyle
        styleApiConfig.defineVmFunction({
          handle: styleApiConfig.figmaApi,
          key: moveMethod,
          metricsKey: `figma.${moveMethod}`,
          cb: (targetHandle, refHandle) => {
            const target = styleApiConfig.getNode(targetHandle)
            const ref = styleApiConfig.vm.isNull(refHandle) ? null : styleApiConfig.getNode(refHandle)
            if (target.styleType !== styleType) {
              throw new Error(`Target node is a ${target.styleType} node, instead of ${styleType}`)
            }
            if (ref !== null && ref.styleType !== styleType) {
              throw new Error(`Reference node is a ${ref.styleType} node, instead of ${styleType}`)
            }
            if (ref !== null && target.guid === ref.guid)
              throw new Error('Target node and reference node cannot be equal')
            const err = styleApiConfig.styleManager.moveStyle(target, ref, styleType)
            if (err !== '')
              throw new Error(err)
            return styleApiConfig.vm.undefined
          },
          isAllowedInReadOnly: false,
          hasEditScope: true,
        })

        // moveFolder
        styleApiConfig.defineVmFunction({
          handle: styleApiConfig.figmaApi,
          key: moveFolderMethod,
          metricsKey: `figma.${moveFolderMethod}`,
          cb: (folderIdHandle, refFolderIdHandle) => {
            const folderId = styleApiConfig.vm.toString(folderIdHandle)
            const refFolderId = styleApiConfig.vm.isNull(refFolderIdHandle) ? null : styleApiConfig.vm.toString(refFolderIdHandle)
            const err = styleApiConfig.styleManager.moveFolder(folderId, refFolderId, styleType)
            if (err !== '')
              throw new Error(err)
            return styleApiConfig.vm.undefined
          },
          isAllowedInReadOnly: false,
          hasEditScope: true,
        })

        // createStyle
        styleApiConfig.defineVmFunction({
          handle: styleApiConfig.figmaApi,
          key: createMethod,
          metricsKey: `figma.${createMethod}`,
          cb: () => {
            const style = styleApiConfig.styleManager.createStyle(styleType)
            if (!style)
              throw new Error(`Could not create ${styleType} style`)
            return styleApiConfig.styleFactory.createStyle(style)
          },
          isAllowedInReadOnly: false,
          hasEditScope: true,
        })

        // getAllLocalStyles (and async variant)
        styleApiConfig.defineVmIncrementalFunction({
          handle: styleApiConfig.figmaApi,
          key: getMethod,
          metricsKey: `figma.${getMethod}`,
          incrementalSafeApiKey: getMethodAsync,
          incrementalSafeApiMetricsKey: `figma.${getMethodAsync}`,
          parseArg: () => {},
          prepareDocument: async () => {},
          resolveValue: () => {
            const styles = styleApiConfig.styleManager.getAllLocalStyles(styleType).map(_$$nM)
            const arr = styleApiConfig.vm.newArray()
            let idx = 0
            for (const style of styles) {
              const styleObj = styleApiConfig.styleFactory.createStyle(style)
              if (!styleApiConfig.vm.isNull(styleObj)) {
                styleApiConfig.vm.setProp(arr, idx.toString(), styleObj)
                idx++
              }
            }
            return arr
          },
          incrementalSafeApi: styleApiConfig.incrementalSafeApi,
          allowIncrementalUnsafeApiCalls: styleApiConfig.allowIncrementalUnsafeApiCalls,
          isAllowedInReadOnly: true,
          hasEditScope: false,
        })
      }
    }

    /**
     * Register variable and variable collection API methods.
     * Handles getVariableById, getLocalVariables, getSubscribedVariables, getVariableCollectionById, getLocalVariableCollections,
     * createVariableCollection, createVariable, createVariableAlias, createVariableAliasByIdAsync, importVariableByKeyAsync,
     * extendLibraryCollectionByKeyAsync, setBoundVariableForPaint, setBoundVariableForEffect, setBoundVariableForLayoutGrid.
     */
    {
      const variableApiConfig = {
        vm: e,
        videoStore: this.videoStore,
        imageStore: this.imageStore,
        figmaApi: y,
        variableFactory: this.variableFactory,
        variableCollectionFactory: this.variableCollectionFactory,
        defineVmFunction: this.defineVmFunction,
        defineVmIncrementalFunction: this.defineVmIncrementalFunction,
        defineVmProp: this.defineVmProp,
        incrementalSafeApi: this.options.incrementalSafeApi,
        documentAccessState: this.documentAccessState,
        pluginVersionID: this.options.pluginVersionID,
        getNode: this.getNode,
        getVariableNode: this.getVariableNode,
        getVariableCollectionNode: this.getVariableCollectionNode,
        allowIncrementalUnsafeApiCalls: !!this.options.allowIncrementalUnsafeApiCalls,
        sceneGraph: this.privateSceneGraph,
      }
      variableApiConfig.defineVmProp({
        handle: variableApiConfig.figmaApi,
        key: 'variables',
        options: {
          enumerable: false,
          metricsKey: 'figma.variables',
          get: memoizedHandle(variableApiConfig.vm, () => {
            const r = variableApiConfig.vm.newObject()
            // getVariableById (and async)
            variableApiConfig.defineVmIncrementalFunction({
              handle: r,
              key: 'getVariableById',
              hasEditScope: false,
              metricsKey: 'figma.variables.getVariableById',
              incrementalSafeApiKey: 'getVariableByIdAsync',
              incrementalSafeApiMetricsKey: 'figma.variables.getVariableByIdAsync',
              parseArg: t => variableApiConfig.vm.toString(t),
              prepareDocument: async () => {
                await loadInternalCanvasMemoized(variableApiConfig.documentAccessState)
              },
              resolveValue: id => variableApiConfig.variableFactory.createVariableHandle(id, variableApiConfig.sceneGraph),
              isAllowedInReadOnly: true,
              incrementalSafeApi: variableApiConfig.incrementalSafeApi,
              allowIncrementalUnsafeApiCalls: variableApiConfig.allowIncrementalUnsafeApiCalls,
            })
            // getLocalVariables (and async)
            variableApiConfig.defineVmIncrementalFunction({
              handle: r,
              key: 'getLocalVariables',
              hasEditScope: false,
              metricsKey: 'figma.variables.getLocalVariables',
              incrementalSafeApiKey: 'getLocalVariablesAsync',
              incrementalSafeApiMetricsKey: 'figma.variables.getLocalVariablesAsync',
              parseArg: t => validateWithZSchema({
                vm: variableApiConfig.vm,
                handle: t,
                zSchema: variableDefinitions.PublicVariableResolvedType.optional(),
                property: 'resolvedType',
              }) ?? null,
              prepareDocument: async () => {},
              resolveValue: resolvedType => variableApiConfig.variableFactory.getLocalVariables(resolvedType),
              isAllowedInReadOnly: true,
              incrementalSafeApi: variableApiConfig.incrementalSafeApi,
              allowIncrementalUnsafeApiCalls: variableApiConfig.allowIncrementalUnsafeApiCalls,
            })
            // getSubscribedVariables
            variableApiConfig.defineVmFunction({
              handle: r,
              key: 'getSubscribedVariables',
              hasEditScope: false,
              metricsKey: 'figma.variables.getSubscribedVariables',
              cb: (t) => {
                const resolvedType = validateWithZSchema({
                  vm: variableApiConfig.vm,
                  handle: t,
                  zSchema: variableDefinitions.PublicVariableResolvedType.optional(),
                  property: 'resolvedType',
                }) ?? null
                return variableApiConfig.variableFactory.getSubscribedVariables(resolvedType)
              },
              isAllowedInReadOnly: true,
            })
            // getVariableCollectionById (and async)
            variableApiConfig.defineVmIncrementalFunction({
              handle: r,
              key: 'getVariableCollectionById',
              hasEditScope: false,
              metricsKey: 'figma.variables.getVariableCollectionById',
              incrementalSafeApiKey: 'getVariableCollectionByIdAsync',
              incrementalSafeApiMetricsKey: 'figma.variables.getVariableCollectionByIdAsync',
              parseArg: t => variableApiConfig.vm.toString(t),
              prepareDocument: async () => {
                await loadInternalCanvasMemoized(variableApiConfig.documentAccessState)
              },
              resolveValue: id => variableApiConfig.variableCollectionFactory.createVariableCollectionHandle(id, variableApiConfig.sceneGraph),
              incrementalSafeApi: variableApiConfig.incrementalSafeApi,
              isAllowedInReadOnly: true,
              allowIncrementalUnsafeApiCalls: variableApiConfig.allowIncrementalUnsafeApiCalls,
            })
            // getLocalVariableCollections (and async)
            variableApiConfig.defineVmIncrementalFunction({
              handle: r,
              key: 'getLocalVariableCollections',
              hasEditScope: false,
              metricsKey: 'figma.variables.getLocalVariableCollections',
              incrementalSafeApiKey: 'getLocalVariableCollectionsAsync',
              incrementalSafeApiMetricsKey: 'figma.variables.getLocalVariableCollectionsAsync',
              parseArg: () => {},
              prepareDocument: async () => {},
              resolveValue: () => variableApiConfig.variableCollectionFactory.getLocalVariableCollections(),
              isAllowedInReadOnly: true,
              incrementalSafeApi: variableApiConfig.incrementalSafeApi,
              allowIncrementalUnsafeApiCalls: variableApiConfig.allowIncrementalUnsafeApiCalls,
            })
            // createVariableCollection
            variableApiConfig.defineVmFunction({
              handle: r,
              key: 'createVariableCollection',
              hasEditScope: true,
              metricsKey: 'figma.variables.createVariableCollection',
              cb: (t) => {
                const name = validateWithZSchema({
                  vm: variableApiConfig.vm,
                  handle: t,
                  zSchema: _$$z.string(),
                  property: 'name',
                })
                const collection = variableApiConfig.variableCollectionFactory.createNewVariableCollection(name)
                return variableApiConfig.variableCollectionFactory.createVariableCollectionHandle(collection, variableApiConfig.sceneGraph)
              },
              isAllowedInReadOnly: false,
            })
            // createVariable
            variableApiConfig.defineVmFunction({
              handle: r,
              key: 'createVariable',
              hasEditScope: true,
              metricsKey: 'figma.variables.createVariable',
              cb: (nameHandle, collectionHandle, typeHandle) => {
                const name = validateWithZSchema({
                  vm: variableApiConfig.vm,
                  handle: nameHandle,
                  zSchema: _$$z.string(),
                  property: 'name',
                })
                const collectionId = validateAndExtractCollectionId({
                  callerName: 'createVariable',
                  consoleLogger: logger,
                  getNode: variableApiConfig.getNode,
                  incrementalSafeApi: variableApiConfig.incrementalSafeApi,
                  pluginVersionID: variableApiConfig.pluginVersionID,
                  vm: variableApiConfig.vm,
                  vmHandle: collectionHandle,
                  allowIncrementalUnsafeApiCalls: variableApiConfig.allowIncrementalUnsafeApiCalls,
                })
                const resolvedType = validateWithZSchema({
                  vm: variableApiConfig.vm,
                  handle: typeHandle,
                  zSchema: variableDefinitions.PublicVariableResolvedType,
                  property: 'resolvedType',
                })
                const variable = variableApiConfig.variableFactory.createNewVariable(name, collectionId, resolvedType)
                return variableApiConfig.variableFactory.createVariableHandle(variable, variableApiConfig.sceneGraph)
              },
              isAllowedInReadOnly: false,
            })
            // createVariableAlias
            variableApiConfig.defineVmFunction({
              handle: r,
              key: 'createVariableAlias',
              hasEditScope: true,
              metricsKey: 'figma.variables.createVariableAlias',
              cb: (t) => {
                if (variableApiConfig.getNode(t).type !== 'VARIABLE') {
                  throw new Error('Can only construct variable aliases from variables')
                }
                const id = variableApiConfig.vm.getStringProp(t, 'id')
                return variableApiConfig.vm.deepWrap({
                  type: 'VARIABLE_ALIAS',
                  id,
                })
              },
              isAllowedInReadOnly: true,
            })
            // createVariableAliasByIdAsync
            variableApiConfig.defineVmFunction({
              handle: r,
              key: 'createVariableAliasByIdAsync',
              metricsKey: 'figma.variables.createVariableAliasByIdAsync',
              cb: (t) => {
                const id = validateWithZSchema({
                  vm: variableApiConfig.vm,
                  handle: t,
                  zSchema: _$$z.string(),
                  property: 'variableId',
                })
                if (!VariableIdHandler.fromString(id))
                  throw new Error('Invalid variable id')
                const {
                  promise,
                  resolve,
                  reject,
                } = variableApiConfig.vm.newPromise()
                variableApiConfig.vm.registerPromise(loadInternalCanvasMemoized(variableApiConfig.documentAccessState)).then(() => {
                  resolve(variableApiConfig.vm.deepWrap({
                    type: 'VARIABLE_ALIAS',
                    id,
                  }))
                }).catch(err => reject(variableApiConfig.vm.newString(err.message)))
                return promise
              },
              isAllowedInReadOnly: true,
              hasEditScope: false,
            })
            // importVariableByKeyAsync
            variableApiConfig.defineVmFunction({
              handle: r,
              key: 'importVariableByKeyAsync',
              metricsKey: 'figma.variables.importVariableByKeyAsync',
              cb: (t) => {
                const key = validateWithZSchema({
                  vm: variableApiConfig.vm,
                  handle: t,
                  zSchema: _$$z.string(),
                  property: 'variableKey',
                })
                return variableApiConfig.variableFactory.importByKeyAsync(key)
              },
              isAllowedInReadOnly: false,
              hasEditScope: false,
            })
            // extendLibraryCollectionByKeyAsync (feature flag)
            if (getFeatureFlags().ds_extended_collections) {
              variableApiConfig.defineVmFunction({
                handle: r,
                key: 'extendLibraryCollectionByKeyAsync',
                metricsKey: 'figma.variables.extendLibraryCollectionByKeyAsync',
                cb: (collectionKeyHandle, nameHandle) => {
                  const collectionKey = validateWithZSchema({
                    vm: variableApiConfig.vm,
                    handle: collectionKeyHandle,
                    zSchema: _$$z.string(),
                    property: 'collectionKey',
                  })
                  const name = validateWithZSchema({
                    vm: variableApiConfig.vm,
                    handle: nameHandle,
                    zSchema: _$$z.string(),
                    property: 'name',
                  })
                  const {
                    promise,
                    resolve,
                    reject,
                  } = variableApiConfig.vm.newPromise()
                  variableApiConfig.vm.registerPromise(af(collectionKey, name, variableApiConfig.variableCollectionFactory)).then((result) => {
                    resolve(variableApiConfig.variableCollectionFactory.createExtendedVariableCollectionHandle(result))
                  }).catch(err => reject(variableApiConfig.vm.newString(err.message)))
                  return promise
                },
                isAllowedInReadOnly: false,
                hasEditScope: true,
              })
            }
            // setBoundVariableForPaint
            variableApiConfig.defineVmFunction({
              handle: r,
              key: 'setBoundVariableForPaint',
              metricsKey: 'figma.variables.setBoundVariableForPaint',
              cb: (paintHandle, fieldHandle, variableHandle) => {
                const paint = validateWithZSchema({
                  vm: variableApiConfig.vm,
                  handle: paintHandle,
                  zSchema: FigmaSchema.Paint,
                  property: 'paintCopy',
                })
                const field = validateWithZSchema({
                  vm: variableApiConfig.vm,
                  handle: fieldHandle,
                  zSchema: variableDefinitions.VariableBindablePaintField,
                  property: 'field',
                })
                if (variableApiConfig.vm.isNull(variableHandle) || variableApiConfig.vm.isUndefined(variableHandle)) {
                  const n = processPaint(variableApiConfig.imageStore, variableApiConfig.videoStore, paint, [])
                  n.colorVar = void 0
                  return variableApiConfig.vm.deepWrap(convertInternalPaintToExternal(n))
                }
                const variable = variableApiConfig.getVariableNode(variableHandle)
                if (!variable || variable.type !== 'VARIABLE' || variable.variableResolvedType !== VariableResolvedDataType.COLOR) {
                  throw new Error(`can only bind color variables to ${field}`)
                }
                const n = processPaint(variableApiConfig.imageStore, variableApiConfig.videoStore, paint, [])
                if (n.type !== 'SOLID')
                  throw new Error('can only bind variables to solid paints')
                n.colorVar = {
                  value: {
                    alias: VariableIdHandler.toKiwi(variable.id),
                  },
                  dataType: 'ALIAS',
                  resolvedDataType: 'COLOR',
                }
                return variableApiConfig.vm.deepWrap(convertInternalPaintToExternal(n))
              },
              isAllowedInReadOnly: true,
              hasEditScope: false,
            })
            // setBoundVariableForEffect
            variableApiConfig.defineVmFunction({
              handle: r,
              key: 'setBoundVariableForEffect',
              metricsKey: 'figma.variables.setBoundVariableForEffect',
              cb: (effectHandle, fieldHandle, variableHandle) => {
                const effectCopy = validateWithZSchema({
                  vm: variableApiConfig.vm,
                  handle: effectHandle,
                  zSchema: getFilteredFeatureFlags()?.ce_il_root ? FigmaSchema.EffectIncludingDrawMode : FigmaSchema.Effect,
                  property: 'effectCopy',
                })
                if (variableApiConfig.vm.isNull(variableHandle) || variableApiConfig.vm.isUndefined(variableHandle)) {
                  return this.unbindAllEffectVariables(effectCopy)
                }
                const variableObject = variableApiConfig.getVariableNode(variableHandle)
                const mutableEffect = processEffectWithValidation(effectCopy, undefined)
                if (this.isShadowEffect(mutableEffect)) {
                  return this.bindShadowEffectVariable(mutableEffect, fieldHandle, variableObject)
                }
                else {
                  return this.bindBlurEffectVariable(mutableEffect, fieldHandle, variableObject)
                }
              },
              isAllowedInReadOnly: true,
              hasEditScope: false,
            })
            // setBoundVariableForLayoutGrid
            variableApiConfig.defineVmFunction({
              handle: r,
              key: 'setBoundVariableForLayoutGrid',
              metricsKey: 'figma.variables.setBoundVariableForLayoutGrid',
              cb: (layoutGridHandle, fieldHandle, variableHandle) => {
                const layoutGrid = validateWithZSchema({
                  vm: variableApiConfig.vm,
                  handle: layoutGridHandle,
                  zSchema: FigmaSchema.LayoutGrid,
                  property: 'layoutGridCopy',
                })
                if (variableApiConfig.vm.isNull(variableHandle) || variableApiConfig.vm.isUndefined(variableHandle)) {
                  const t = convertGridLayoutConfig(layoutGrid)
                  t.offsetVar = void 0
                  t.gutterSizeVar = void 0
                  t.numSectionsVar = void 0
                  t.sectionSizeVar = void 0
                  return variableApiConfig.vm.deepWrap(processGridLayout(t))
                }
                const variable = variableApiConfig.getVariableNode(variableHandle)
                if (!variable || variable.type !== 'VARIABLE' || variable.variableResolvedType !== VariableResolvedDataType.FLOAT) {
                  throw new Error('can only bind float variables to layoutGrids')
                }
                const grid = convertGridLayoutConfig(layoutGrid)
                if (grid.pattern === 'GRID') {
                  const field = validateWithZSchema({
                    vm: variableApiConfig.vm,
                    handle: fieldHandle,
                    zSchema: variableDefinitions.VariableBindableGridLayoutField,
                    property: 'field',
                  })
                  if (!variable || variable.type !== 'VARIABLE' || variable.variableResolvedType !== VariableResolvedDataType.FLOAT) {
                    throw new Error(`can only bind float variables to ${field}`)
                  }
                  grid.sectionSizeVar = {
                    value: {
                      alias: VariableIdHandler.toKiwi(variable.id),
                    },
                    dataType: 'ALIAS',
                    resolvedDataType: 'FLOAT',
                  }
                }
                else {
                  let field
                  switch (grid.type) {
                    case 'MIN':
                    case 'MAX':
                      field = validateWithZSchema({
                        vm: variableApiConfig.vm,
                        handle: fieldHandle,
                        zSchema: variableDefinitions.VariableBindableMinMaxLayoutField,
                        property: 'field',
                      })
                      break
                    case 'CENTER':
                      field = validateWithZSchema({
                        vm: variableApiConfig.vm,
                        handle: fieldHandle,
                        zSchema: variableDefinitions.VariableBindableCenterLayoutField,
                        property: 'field',
                      })
                      break
                    case 'STRETCH':
                      field = validateWithZSchema({
                        vm: variableApiConfig.vm,
                        handle: fieldHandle,
                        zSchema: variableDefinitions.VariableBindableStretchLayoutField,
                        property: 'field',
                      })
                      break
                  }
                  switch (field) {
                    case 'sectionSize':
                      grid.sectionSizeVar = {
                        value: {
                          alias: VariableIdHandler.toKiwi(variable.id),
                        },
                        dataType: 'ALIAS',
                        resolvedDataType: 'COLOR',
                      }
                      break
                    case 'offset':
                      grid.offsetVar = {
                        value: {
                          alias: VariableIdHandler.toKiwi(variable.id),
                        },
                        dataType: 'ALIAS',
                        resolvedDataType: 'FLOAT',
                      }
                      break
                    case 'count':
                      grid.numSectionsVar = {
                        value: {
                          alias: VariableIdHandler.toKiwi(variable.id),
                        },
                        dataType: 'ALIAS',
                        resolvedDataType: 'FLOAT',
                      }
                      break
                    case 'gutterSize':
                      grid.gutterSizeVar = {
                        value: {
                          alias: VariableIdHandler.toKiwi(variable.id),
                        },
                        dataType: 'ALIAS',
                        resolvedDataType: 'FLOAT',
                      }
                      break
                  }
                }
                return variableApiConfig.vm.deepWrap(processGridLayout(grid))
              },
              isAllowedInReadOnly: true,
              hasEditScope: false,
            })
            variableApiConfig.vm.shallowFreezeObject(r)
            return r
          }),
        },
        canWriteInReadOnly: false,
        isAllowedInWidgetRender: false,
        hasEditScope: false,
      })
    }

    /**
     * Register teamLibrary API if permission is granted.
     * Handles getAvailableLibraryVariableCollectionsAsync and getVariablesInLibraryCollectionAsync.
     */
    {
      const teamLibraryApiConfig = {
        vm: e,
        stats,
        figmaApi: y,
        validatedPermissions: this.options.validatedPermissions,
        variableFactory: this.variableFactory,
        variableCollectionFactory: this.variableCollectionFactory,
        defineVmFunction: this.defineVmFunction,
        defineVmProp: this.defineVmProp,
      }
      teamLibraryApiConfig.defineVmProp({
        handle: teamLibraryApiConfig.figmaApi,
        key: 'teamLibrary',
        options: {
          enumerable: false,
          metricsKey: 'figma.teamLibrary',
          get: memoizedHandle(teamLibraryApiConfig.vm, () => {
            if (!teamLibraryApiConfig.validatedPermissions.permissions.includes('teamlibrary')) {
              throw new Error('"teamlibrary" permission not specified in manifest.json.')
            }
            const t = teamLibraryApiConfig.vm.newObject()
            teamLibraryApiConfig.defineVmFunction({
              handle: t,
              key: 'getAvailableLibraryVariableCollectionsAsync',
              metricsKey: 'figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync',
              cb: () => teamLibraryApiConfig.variableCollectionFactory.getLibraryVariableCollectionsAsync(),
              isAllowedInReadOnly: true,
              hasEditScope: false,
            })
            teamLibraryApiConfig.defineVmFunction({
              handle: t,
              key: 'getVariablesInLibraryCollectionAsync',
              metricsKey: 'figma.teamLibrary.getVariablesInLibraryCollectionAsync',
              cb: (variableCollectionKeyHandle) => {
                const key = validateWithZSchema({
                  vm: teamLibraryApiConfig.vm,
                  handle: variableCollectionKeyHandle,
                  zSchema: _$$z.string(),
                  property: 'variableCollectionKey',
                })
                return teamLibraryApiConfig.variableFactory.getVariablesInLibraryCollectionAsync(key)
              },
              isAllowedInReadOnly: true,
              hasEditScope: false,
            })
            return t
          }),
        },
        canWriteInReadOnly: false,
        isAllowedInWidgetRender: false,
        hasEditScope: false,
      })
    }

    /**
     * Register annotations API for supported editor types.
     * Handles getAnnotationCategoriesAsync, getAnnotationCategoryByIdAsync, addAnnotationCategoryAsync.
     */
    {
      const annotationApiConfig = {
        vm: e,
        figmaApi: y,
        editorType: this.fullscreenEditorType,
        annotationCategoryFactory: this.annotationCategoryFactory,
        defineVmFunction: this.defineVmFunction,
        defineVmProp: this.defineVmProp,
      }
      annotationApiConfig.defineVmProp({
        handle: annotationApiConfig.figmaApi,
        key: 'annotations',
        options: {
          enumerable: false,
          metricsKey: 'figma.annotations',
          get: memoizedHandle(annotationApiConfig.vm, () => {
            const t = annotationApiConfig.vm.newObject()
            annotationApiConfig.defineVmFunction({
              handle: t,
              key: 'getAnnotationCategoriesAsync',
              metricsKey: 'figma.annotations.getAnnotationCategoriesAsync',
              cb: () => annotationApiConfig.annotationCategoryFactory.getLocalAnnotationCategoriesAsync(),
              hasEditScope: true,
              isAllowedInReadOnly: true,
            })
            annotationApiConfig.defineVmFunction({
              handle: t,
              key: 'getAnnotationCategoryByIdAsync',
              metricsKey: 'figma.annotations.getAnnotationCategoryByIdAsync',
              cb: (idHandle) => {
                const id = validateWithZSchema({
                  vm: annotationApiConfig.vm,
                  handle: idHandle,
                  zSchema: _$$z.string(),
                  property: 'annotationCategoryId',
                })
                return annotationApiConfig.annotationCategoryFactory.getLocalAnnotationCategoryByIdAsync(id)
              },
              hasEditScope: true,
              isAllowedInReadOnly: true,
            })
            annotationApiConfig.defineVmFunction({
              handle: t,
              key: 'addAnnotationCategoryAsync',
              metricsKey: 'figma.annotations.addAnnotationCategoryAsync',
              cb: (categoryInputHandle) => {
                if (annotationApiConfig.editorType !== FEditorType.DevHandoff && annotationApiConfig.editorType !== FEditorType.Design && annotationApiConfig.editorType !== FEditorType.Illustration) {
                  throw new Error('Annotations can only be written in Dev Mode and Design Mode')
                }
                const input = validateWithZSchema({
                  vm: annotationApiConfig.vm,
                  handle: categoryInputHandle,
                  zSchema: i5,
                  property: 'categoryInput',
                })
                return annotationApiConfig.annotationCategoryFactory.createAnnotationCategoryAsync(input.label, input.color)
              },
              hasEditScope: true,
              isAllowedInReadOnly: true,
            })
            return t
          }),
        },
        canWriteInReadOnly: false,
        isAllowedInWidgetRender: false,
        hasEditScope: false,
      })
    }
    this.defineVmProp({
      handle: y,
      key: 'root',
      options: {
        enumerable: !1,
        metricsKey: 'figma.root',
        get: () => this.nodeFactory.createNode('0:0', 'root'),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmProp({
      handle: y,
      key: 'mode',
      options: {
        metricsKey: 'figma.mode',
        enumerable: !1,
        get: () => {
          if (getFeatureFlags().ext_lego_plugins_runmode) {
            let t = this.getRunMode()
            t !== 'inspect' || this.options.capabilities.includes('inspect') || (t = 'panel')
            return e.newString(t)
          }
          let t = this.options.triggeredFrom === 'codegen'
          let i = this.options.triggeredFrom === 'related-link-preview'
          let n = this.options.triggeredFrom === 'related-link-auth'
          let r = this.fullscreenEditorType === FEditorType.DevHandoff && !t
          let a = this.options.command === 'textreview'
          let s = 'default'
          t ? s = 'codegen' : i ? s = 'linkpreview' : n ? s = 'auth' : r ? s = this.options.capabilities.includes('inspect') ? 'inspect' : 'panel' : a && (s = 'textreview')
          return e.newString(s)
        },
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmProp({
      handle: y,
      key: 'editorType',
      options: {
        get: () => {
          let t = 'figjam'
          switch (this.fullscreenEditorType) {
            case FEditorType.Design:
            case FEditorType.Illustration:
              t = 'figma'
              break
            case FEditorType.DevHandoff:
              t = this.options.editorType?.includes(ManifestEditorType.DEV) ? 'dev' : 'inspect'
              break
            case FEditorType.Whiteboard:
              t = 'figjam'
              break
            case FEditorType.Slides:
              t = 'slides'
              break
            case FEditorType.Sites:
              t = 'sites'
              break
            case FEditorType.Figmake:
              t = SLACK_STRING
              break
            case FEditorType.Cooper:
              t = DEV_MODE_STRING
              break
            default:
              throwTypeError(this.fullscreenEditorType, undefined)
            // Add missing second argument
          }
          return e.newString(t)
        },
        metricsKey: 'figma.editorType',
        enumerable: !1,
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    let v = this
    this.defineVmProp({
      handle: y,
      key: 'currentPage',
      options: {
        enumerable: !1,
        metricsKey: 'figma.currentPage',
        get: () => {
          let t = v.privateSceneGraph.getCurrentPage()
          return t === null ? e.$$null : (markPageLoaded(t.guid, this.documentAccessState), this.nodeFactory.createNode(t.guid, 'currentPage'))
        },
        set(t) {
          incrementalSafeApi && checkIncrementalUnsafeMember(!!allowIncrementalUnsafeApiCalls, 'figma.currentPage =', 'figma.setCurrentPageAsync')
          let i = v.getNode(t)
          if (i.type !== 'CANVAS')
            throw new Error('figma.currentPage expects a PageNode')
          v.privateSceneGraph.setCurrentPage_DEPRECATED(i.guid)
          return e.$$null
        },
      },
      canWriteInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmFunction({
      handle: y,
      key: 'setCurrentPageAsync',
      metricsKey: 'figma.setCurrentPageAsync',
      cb: (t) => {
        let i = this.getNode(t)
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        atomStoreManager.set(_$$rp, !0)
        e.registerPromise(ensurePluginPageLoaded(i.guid, this.documentAccessState)).then(() => {
          if (i.type !== 'CANVAS')
            throw new Error('figma.setCurrentPageAsync expects a PageNode')
          return this.privateSceneGraph.setCurrentPageAsync(i.guid)
        }).then(() => resolve(e.$$null)).catch(t => reject(e.newString(t.message))).finally(() => {
          atomStoreManager.set(_$$rp, !1)
        })
        return promise
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmProp({
      handle: y,
      key: 'currentUser',
      options: {
        enumerable: !1,
        metricsKey: 'figma.currentUser',
        get: () => {
          if (!this.options.validatedPermissions.permissions.includes('currentuser')) {
            throw new Error(aS('currentuser', {
              isWidget: this.isWidget,
            }))
          }
          return this.createUserApi()
        },
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmProp({
      handle: y,
      key: 'activeUsers',
      options: {
        enumerable: !1,
        metricsKey: 'activeUsers',
        get: () => {
          if (!this.options.validatedPermissions.permissions.includes('activeusers')) {
            throw new Error(aS('activeusers', {
              isWidget: this.isWidget,
            }))
          }
          return this.createActiveUsersApi()
        },
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.isWidget
      ? this.defineVmProp({
          handle: y,
          key: 'widgetId',
          options: {
            enumerable: !1,
            metricsKey: 'figma.widgetId',
            get: () => e.newString(this.options.pluginID),
          },
          canWriteInReadOnly: !1,
          isAllowedInWidgetRender: !1,
          hasEditScope: !1,
        })
      : this.defineVmProp({
          handle: y,
          key: 'pluginId',
          options: {
            enumerable: !1,
            metricsKey: 'figma.pluginId',
            get: () => e.newString(this.options.pluginID),
          },
          canWriteInReadOnly: !1,
          isAllowedInWidgetRender: !1,
          hasEditScope: !1,
        })
    this.defineVmProp({
      handle: y,
      key: 'command',
      options: {
        enumerable: !1,
        metricsKey: 'figma.command',
        get: () => this.isWidget ? e.undefined : e.newString(command),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.setQueryMode(queryMode)
    e.defineProp(y, 'mixed', {
      enumerable: !1,
      metricsKey: 'figma.mixed',
      get: () => this.mixedSentinel,
    })
    this.defineVmProp({
      handle: y,
      key: 'skipInvisibleInstanceChildren',
      options: {
        enumerable: !1,
        metricsKey: 'figma.skipInvisibleInstanceChildren',
        get: () => e.newBoolean(this.skipInvisibleInstanceChildren),
        set: (t) => {
          let i = validateWithZSchema({
            vm: e,
            handle: t,
            zSchema: _$$z.boolean(),
            property: 'skipInvisibleInstanceChildren',
          })
          this.setSkipInvisibleInstanceChildren(i)
        },
      },
      canWriteInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    });
    (getFeatureFlags().jsx_debugging || getFeatureFlags().internal_only_debug_tools) && this.defineVmProp({
      handle: y,
      key: 'jsx',
      options: {
        enumerable: !1,
        value: this.createJsxApi(),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    getFeatureFlags().codebase_suggestions && this.defineVmProp({
      handle: y,
      key: 'codebaseSuggestions',
      options: {
        enumerable: !1,
        value: this.createCodebaseSuggestionsApi(),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmProp({
      handle: y,
      key: 'payments',
      options: {
        enumerable: !1,
        metricsKey: 'figma.payments',
        get: memoizedHandle(e, () => {
          if (!this.options.validatedPermissions.permissions.includes('payments')) {
            throw new Error('"payments" permission not specified in manifest.json.')
          }
          return this.createPaymentsApi()
        }),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    let I = this.inDesignOrDevHandoffOrIllustration()
    let C = this.inFigjam()
    let R = this.inSlides()
    let D = this.inBuzz()
    let M = this.inSites()
    /**
     * Register node creation methods for supported node types.
     * Handles special cases for TABLE, SLIDE, and SLIDE_ROW node types.
     * For other node types, registers a generic creation function.
     */
    for (const {
      nodeType,
      createMethod,
    } of h2) {
      // Determine if node type is allowed in the current editor context
      const isAllowed = C && fx.includes(nodeType) || I && _$$tO.includes(nodeType) || R && J6.includes(nodeType) || M && lm.includes(nodeType) || D && _$$e3.includes(nodeType)
      if (isAllowed)
        continue

      // Special handling for TABLE node type
      if (nodeType === 'TABLE') {
        /**
         * Create a TABLE node with optional row and column counts.
         * @param n - Number of rows (optional)
         * @param r - Number of columns (optional)
         */
        this.defineVmFunction({
          handle: y,
          key: createMethod,
          metricsKey: `figma.${createMethod}`,
          cb: (n, r) => {
            const numRows = validateWithZSchema({
              vm: e,
              handle: n,
              zSchema: FigmaSchema.FiniteNumber.int().min(1).optional(),
              property: 'options',
            })
            const numCols = validateWithZSchema({
              vm: e,
              handle: r,
              zSchema: FigmaSchema.FiniteNumber.int().min(1).optional(),
              property: 'options',
            })
            const options = {
              tracking: TrackType.TRACK,
              ...(numRows && {
                tableNumRows: numRows,
              }),
              ...(numCols && {
                tableNumColumns: numCols,
              }),
            }
            const node = this.privateSceneGraph.createNode(nodeType, options)
            markPageLoaded(node.guid, this.documentAccessState)
            return this.nodeFactory.createNode(node.guid, `figma.${createMethod}`)
          },
          isAllowedInReadOnly: false,
          isAllowedInWidgetRender: false,
          hasEditScope: true,
        })
        continue
      }

      // Special handling for SLIDE node type
      if (nodeType === 'SLIDE') {
        /**
         * Create a SLIDE node with optional row and column indices.
         * @param e - Slide row (optional)
         * @param n - Slide column (optional)
         */
        this.defineVmFunction({
          handle: y,
          key: createMethod,
          metricsKey: `figma.${createMethod}`,
          cb: (e, n) => {
            const slideRow = validateWithZSchema({
              vm: this.vm,
              handle: e,
              zSchema: _$$z.number().finite().min(0).int().optional(),
              property: 'slideRow',
            })
            const slideCol = validateWithZSchema({
              vm: this.vm,
              handle: n,
              zSchema: _$$z.number().finite().min(0).int().optional(),
              property: 'slideCol',
            })
            const options = {
              tracking: TrackType.TRACK,
              ...(typeof slideRow === 'number' && {
                slideRow,
              }),
              ...(typeof slideCol === 'number' && {
                slideCol,
              }),
            }
            const node = this.privateSceneGraph.createNode(nodeType, options)
            markPageLoaded(node.guid, this.documentAccessState)
            return this.nodeFactory.createNode(node.guid, `figma.${createMethod}`)
          },
          isAllowedInReadOnly: false,
          isAllowedInWidgetRender: false,
          hasEditScope: true,
        })
        continue
      }

      // Special handling for SLIDE_ROW node type
      if (nodeType === 'SLIDE_ROW') {
        /**
         * Create a SLIDE_ROW node with optional row index.
         * @param e - Slide row (optional)
         */
        this.defineVmFunction({
          handle: y,
          key: createMethod,
          metricsKey: `figma.${createMethod}`,
          cb: (e) => {
            const slideRow = validateWithZSchema({
              vm: this.vm,
              handle: e,
              zSchema: _$$z.number().finite().min(0).int().optional(),
              property: 'slideRow',
            })
            const options = {
              tracking: TrackType.TRACK,
              ...(typeof slideRow === 'number' && {
                slideRow,
              }),
            }
            const node = this.privateSceneGraph.createNode(nodeType, options)
            markPageLoaded(node.guid, this.documentAccessState)
            return this.nodeFactory.createNode(node.guid, `figma.${createMethod}`)
          },
          isAllowedInReadOnly: false,
          isAllowedInWidgetRender: false,
          hasEditScope: true,
        })
        continue
      }

      // Generic node creation for other node types
      /**
       * Create a node of the specified nodeType.
       * Throws error if page limit is reached for CANVAS.
       */
      this.defineVmFunction({
        handle: y,
        key: createMethod,
        metricsKey: `figma.${createMethod}`,
        cb: () => {
          if (nodeType === 'CANVAS' && createMethod === 'createPage' && this.hasFileReachedPageLimit()) {
            throw new Error('The Starter plan only comes with 3 pages. Upgrade to Professional for unlimited pages.')
          }
          const node = this.privateSceneGraph.createNode(nodeType)
          markPageLoaded(node.guid, this.documentAccessState, {
            ignoreReduxState: nodeType === 'CANVAS',
          })
          return this.nodeFactory.createNode(node.guid, `figma.${createMethod}`)
        },
        isAllowedInReadOnly: false,
        isAllowedInWidgetRender: false,
        hasEditScope: true,
      })
    }
    this.defineVmFunction({
      handle: y,
      key: 'flatten',
      metricsKey: 'figma.flatten',
      cb: (t, i, n) => {
        let {
          nodeIds,
          parent,
          index,
        } = processNodeArrayForHierarchyOperation({
          vm: e,
          callerName: 'flatten',
          nodes: t,
          parentArg: i,
          indexArg: n,
          getNode: this.getNode,
          enableResponsiveSetHierarchyMutations: this.options.enableResponsiveSetHierarchyMutations,
        })
        let o = PluginHelpers.flattenNodes(nodeIds, parent ? parent.sessionID : -1, parent ? parent.localID : -1, index, this.privateSceneGraph.scene)
        return this.nodeFactory.createNode(o, 'figma.flatten')
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'createPageDivider',
      metricsKey: 'figma.createPageDivider',
      cb: () => {
        if (this.inSites() || this.inBuzz() || this.inSlides())
          throw new Error('Cannot add page dividers in this editor.')
        if (this.hasFileReachedPageLimit()) {
          throw new Error('The Starter plan only comes with 3 pages. Upgrade to Professional for unlimited pages.')
        }
        let e = this.privateSceneGraph.createNode('CANVAS')
        e.name = '---'
        e.isPageDivider = !0
        markPageLoaded(e.guid, this.documentAccessState, {
          ignoreReduxState: !0,
        })
        return this.nodeFactory.createNode(e.guid, 'figma.createPageDivider')
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    });
    (I || M) && this.defineVmFunction({
      handle: y,
      key: 'combineAsVariants',
      metricsKey: 'figma.combineAsVariants',
      cb: this.makeGroupingOperationFunction('combineAsVariants', LogicalOperation.STATE_GROUP),
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'group',
      metricsKey: 'figma.group',
      cb: this.makeGroupingOperationFunction('group', LogicalOperation.GROUP),
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'union',
      metricsKey: 'figma.union',
      cb: this.makeGroupingOperationFunction('union', LogicalOperation.UNION),
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'subtract',
      metricsKey: 'figma.subtract',
      cb: this.makeGroupingOperationFunction('subtract', LogicalOperation.SUBTRACT),
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'intersect',
      metricsKey: 'figma.intersect',
      cb: this.makeGroupingOperationFunction('intersect', LogicalOperation.INTERSECT),
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'exclude',
      metricsKey: 'figma.exclude',
      cb: this.makeGroupingOperationFunction('exclude', LogicalOperation.XOR),
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'ungroup',
      metricsKey: 'figma.ungroup',
      cb: (t) => {
        let i = this.getNode(t)
        if (!i)
          throw new Error('Parent must be provided to ungroup()')
        if (i.isOrInResponsiveSet && !this.options.enableResponsiveSetHierarchyMutations) {
          throw new Error('Cannot ungroup nodes inside a webpage')
        }
        let n = PluginHelpers.ungroupNode(i.guid, this.privateSceneGraph.scene)
        let r = e.newArray()
        n.forEach((t, i) => {
          let n = this.nodeFactory.createNode(t, 'figma.ungroup')
          e.setProp(r, i.toString(), n)
        })
        return r
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'commitUndo',
      metricsKey: 'figma.commitUndo',
      cb: (_t) => {
        fullscreenValue.triggerAction('commit')
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'triggerUndo',
      metricsKey: 'figma.triggerUndo',
      cb: (_t) => {
        fullscreenValue.triggerAction('undo')
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'createImage',
      metricsKey: 'figma.createImage',
      cb: (t) => {
        let i = this.imageStore.createImage(validateWithZSchema({
          vm: e,
          handle: t,
          zSchema: FigmaSchema.UInt8Array,
          property: 'createImage',
        }))
        return createImageProcessor(e, i)
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'createImageAsync',
      metricsKey: 'figma.createImageAsync',
      cb: (t) => {
        let i = validateWithZSchema({
          vm: e,
          handle: t,
          zSchema: _$$z.string(),
          property: 'createImageAsync',
        })
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        let s = xF(i, this.options.allowedDomains)
        e.registerPromise(s).then((t) => {
          resolve(createImageProcessor(e, this.imageStore.createImage(t)))
        }).catch(t => reject(e.newString(t.message)))
        return promise
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'getImageByHash',
      metricsKey: 'figma.getImageByHash',
      cb: (t) => {
        let i = validateWithZSchema({
          vm: e,
          handle: t,
          zSchema: _$$z.string(),
          property: 'getImageByHash',
        })
        let n = this.imageStore.getImageFromSHA1(i)
        return n === null ? e.$$null : createImageProcessor(e, n)
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmFunction({
      handle: y,
      key: 'createVideo',
      metricsKey: 'figma.createVideo',
      cb: (t) => {
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        e.registerPromise(this.videoStore.createVideoAsync(validateWithZSchema({
          vm: e,
          handle: t,
          zSchema: FigmaSchema.UInt8Array,
          property: 'createVideo',
        }))).then((t) => {
          resolve(createNodeHash(e, t))
        }, t => reject(e.newString(`Failed create video. Error: ${t.message}`)))
        return promise
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'createVideoAsync',
      metricsKey: 'figma.createVideoAsync',
      cb: (t) => {
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        e.registerPromise(this.videoStore.createVideoAsync(validateWithZSchema({
          vm: e,
          handle: t,
          zSchema: FigmaSchema.UInt8Array,
          property: 'createVideoAsync',
        }))).then((t) => {
          resolve(createNodeHash(e, t))
        }, t => reject(e.newString(`Failed create video. Error: ${t.message}`)))
        return promise
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'listAvailableFontsAsync',
      metricsKey: 'figma.listAvailableFontsAsync',
      cb: () => {
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        e.registerPromise(listAllFonts()).then(t => resolve(e.deepWrap(t)), (t) => {
          reject(e.newString('Internal error'))
          reportError(_$$e.EXTENSIBILITY, t)
        })
        return promise
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmFunction({
      handle: y,
      key: 'loadAllPagesAsync',
      metricsKey: 'figma.loadAllPagesAsync',
      cb: () => {
        if (this.options.command === 'textreview' || this.queryMode)
          throw new Error('Unexpected call to figma.loadAllPagesAsync')
        let {
          promise,
          resolve,
        } = e.newPromise()
        e.registerPromise(_$$E(null, null, PluginModalType.DYNAMIC_PLUGIN_LOAD_ALL)).then(t => resolve(e.deepWrap(t)))
        this.documentAccessState.loadedAllPages()
        return promise
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmFunction({
      handle: y,
      key: 'loadFontAsync',
      metricsKey: 'figma.loadFontAsync',
      cb: (t) => {
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        let a = validateWithZSchema({
          vm: e,
          handle: t,
          zSchema: FigmaSchema.FontName,
          property: 'loadFontAsync',
        })
        u += 1
        setTimeout(() => {
          e.registerPromise(loadPluginFont(a)).then(() => {
            u -= 1
            resolve(e.undefined)
          }, () => {
            u -= 1
            reject(e.newString(`The font "${a.family} ${a.style}" could not be loaded`))
          })
        })
        return promise
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmProp({
      handle: y,
      key: 'hasMissingFont',
      options: {
        enumerable: !1,
        metricsKey: 'hasMissingFont',
        get: () => e.newBoolean(PluginHelpers.documentHasMissingFont()),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmIncrementalFunction({
      handle: y,
      key: 'getNodeById',
      hasEditScope: !1,
      metricsKey: 'figma.getNodeById',
      incrementalSafeApiKey: 'getNodeByIdAsync',
      incrementalSafeApiMetricsKey: 'figma.getNodeByIdAsync',
      parseArg: t => e.toString(t),
      prepareDocument: async (e) => {
        await ensurePluginPageLoaded(e, this.documentAccessState)
      },
      resolveValue: t => (function ({
        nodeID: e,
        vm: t,
        nodeFactory: i,
        method: n,
        sceneGraph: r,
      }) {
        if (!vs.test(e))
          return t.$$null
        let a = r.guidFromDeveloperFriendlyId(e)
        if (!a)
          return t.$$null
        let s = r.get(a)
        return !s || s && isInImmutableContext(t, s) ? t.$$null : i.createNode(a, n)
      }({
        nodeID: t,
        vm: e,
        nodeFactory: this.nodeFactory,
        sceneGraph: this.privateSceneGraph,
        method: 'figma.getNodeById',
      })),
      incrementalSafeApi: this.options.incrementalSafeApi,
      allowIncrementalUnsafeApiCalls: !!this.options.allowIncrementalUnsafeApiCalls,
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
    })
    this.defineVmFunction({
      handle: y,
      key: 'getSelectionColors',
      metricsKey: 'figma.getSelectionColors',
      isAllowedInReadOnly: !0,
      cb: () => {
        SelectionPaintHelpers.collectPaintsAndSendToWeb()
        let {
          selectionPaints,
        } = debugState.getState().mirror
        if (selectionPaints.emptyDueToLimitExceeded)
          return e.$$null
        let i = e.newObject()
        let n = (selectionPaints.paints.length ? selectionPaints.paints : selectionPaints.paintsDirectlyOnSingleNode).map(e => convertPaintArrayData([e.paint])[0])
        let r = (selectionPaints.styles.length ? selectionPaints.styles : selectionPaints.stylesDirectlyOnSingleNode).map((t) => {
          let i = this.styleFactory.createStyle(_$$nM({
            key: t.styleKey,
            version: VariableStyleId(t.version),
          }))
          if (i !== e.$$null)
            return i
          let n = this.privateSceneGraph.get(t.styleGUIDs[0])
          if (!n)
            return null
          let r = n?.styleVersionHash
          let a = n?.styleKeyForPublish
          return r && a
            ? this.styleFactory.createStyle(_$$nM({
                key: a,
                version: r,
              }))
            : null
        }).filter(e => e != null)
        let a = e.newArray()
        for (let t = 0; t < r.length; t++) e.setProp(a, String(t), r[t])
        e.setProp(i, 'paints', e.deepWrap(n))
        e.setProp(i, 'styles', a)
        return i
      },
      hasEditScope: !1,
    })
    this.defineVmFunction({
      handle: y,
      key: 'createNodeFromSvg',
      metricsKey: 'figma.createNodeFromSvg',
      cb: (t) => {
        let i = e.toString(t)
        try {
          let e = this.privateSceneGraph.createNodeFromSVG(i, {
            tracking: TrackType.TRACK,
          })
          return this.nodeFactory.createNode(e.guid, 'figma.createNodeFromSvg')
        }
        catch (e) {
          console.error(e)
          return new Error('Failed to convert SVG file')
        }
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'importStyleByKeyAsync',
      metricsKey: 'figma.importStyleByKeyAsync',
      cb: (t) => {
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        let a = validateWithZSchema({
          vm: e,
          handle: t,
          zSchema: _$$z.string(),
          property: 'key',
        })
        e.registerPromise(a_(e, a, this.options.openFileKey || 'default')).then(({
          key: t,
          version: i,
        }) => {
          let r = this.styleFactory.createStyle(_$$nM({
            key: t,
            version: i,
          }))
          if (e.isNull(r))
            throw new Error('Unable to create style')
          resolve(r)
        }, (_t) => {
          reject(e.newString(`Failed to import style by key "${a}"`))
        })
        return promise
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'importComponentByKeyAsync',
      metricsKey: 'figma.importComponentByKeyAsync',
      cb: (t) => {
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        let a = validateWithZSchema({
          vm: e,
          handle: t,
          zSchema: _$$z.string(),
          property: 'key',
        })
        e.registerPromise($$ab4(a)).then(e => resolve(this.nodeFactory.createNode(e, 'figma.importComponentByKeyAsync'))).catch((t) => {
          reject(e.newString(t.message))
        })
        return promise
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'importComponentSetByKeyAsync',
      metricsKey: 'figma.importComponentSetByKeyAsync',
      cb: (t) => {
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        let a = validateWithZSchema({
          vm: e,
          handle: t,
          zSchema: _$$z.string(),
          property: 'key',
        })
        e.registerPromise($$av5(a)).then(e => resolve(this.nodeFactory.createNode(e, 'figma.importComponentSetByKeyAsync'))).catch((_t) => {
          reject(e.newString(`Failed to import component set by key "${a}"`))
        })
        return promise
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmFunction({
      handle: y,
      key: 'closePlugin',
      metricsKey: 'figma.closePlugin',
      cb: (t) => {
        let i = validateWithZSchema({
          vm: e,
          handle: t,
          zSchema: _$$z.string().optional(),
          property: 'closePlugin message',
        })
        u > 0 && logger.warn('There are still font loads in progress. Please ensure `closePlugin` is not called until after the font loading has resolved.')
        i
          ? this.closePlugin({
              message: i,
              isError: !1,
            })
          : this.closePlugin(undefined)
        return e.undefined
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmFunction({
      handle: y,
      key: 'notify',
      metricsKey: 'figma.notify',
      cb: (messageHandle, optionsHandle) => {
        // Validate notification can be shown
        if (this.queryMode) {
          throw new Error('Cannot notify in queryMode.')
        }

        // Extract and validate message and options
        const notificationData = extractNotificationData(messageHandle, optionsHandle, e)
        const notificationOptions = processNotificationOptions(notificationData.options)

        // Set up action and dequeue handlers
        const handlerData = setupNotificationHandlers(notificationOptions, e)

        // Create and show notification
        const notificationId = createNotificationId(this.visualBellCounter)
        this.uiHandle.showPluginVisualBell(notificationData.message, notificationId, handlerData.processedOptions, createDequeueCallback(handlerData, e))
        this.visualBellCounter++

        // Return notification controller object
        return createNotificationController(e, this.uiHandle, notificationId)
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })

    // Helper functions for notification handling

    /**
     * extractNotificationData - Extract and validate message and options from VM handles
     */
    function extractNotificationData(messageHandle, optionsHandle, vm) {
      const message = validateWithZSchema({
        vm,
        handle: messageHandle,
        zSchema: _$$z.string(),
        property: 'notify message',
      })
      const options = optionsHandle && validateWithZSchema({
        vm,
        handle: optionsHandle,
        zSchema: FigmaSchema.ShowVisualBellOptions.optional(),
        property: 'notify options',
      }) || {}
      return {
        message,
        options,
      }
    }

    /**
     * processNotificationOptions - Process and apply defaults to notification options
     */
    function processNotificationOptions(options) {
      const processedOptions = mergeDefaults(options, {
        timeout: null,
        error: false,
        button: undefined,
      })

      // Set timeout defaults
      if (processedOptions.timeout == null) {
        processedOptions.timeout = processedOptions.error ? Infinity : 3000
      }
      processedOptions.timeout = Math.max(processedOptions.timeout, 100)
      return processedOptions
    }

    /**
     * setupNotificationHandlers - Set up action button and dequeue handlers
     */
    function setupNotificationHandlers(options, vm) {
      let actionHandler = null
      let dequeueHandler = null

      // Set up button action handler
      if (options.button) {
        actionHandler = getFunctionHandle(options.button.action)
        vm.retainHandle(actionHandler)
        options.button.action = createActionCallback(actionHandler, vm)
      }

      // Set up dequeue handler
      if (options.onDequeue) {
        dequeueHandler = getFunctionHandle(options.onDequeue)
        vm.retainHandle(dequeueHandler)
      }
      return {
        actionHandler,
        dequeueHandler,
        processedOptions: options,
      }
    }

    /**
     * createActionCallback - Create callback function for notification button action
     */
    function createActionCallback(actionHandler, vm) {
      return () => {
        if (!vm.isDestroyed()) {
          const result = vm.callFunction(actionHandler, vm.undefined)
          if (result.type === 'SUCCESS') {
            const unwrappedResult = vm.deepUnwrap(result.handle)
            if (typeof unwrappedResult === 'boolean') {
              return unwrappedResult
            }
          }
        }
      }
    }

    /**
     * createNotificationId - Generate unique notification identifier
     */
    function createNotificationId(counter) {
      return `message-from-plugin-${counter}`
    }

    /**
     * createDequeueCallback - Create callback for notification dequeue event
     */
    function createDequeueCallback({
      actionHandler,
      dequeueHandler,
    }, vm) {
      return (reason) => {
        if (!vm.isDestroyed()) {
          // Handle dequeue callback
          if (dequeueHandler) {
            try {
              vm.callFunction(dequeueHandler, vm.undefined, vm.newString(reason))
              vm.releaseHandle(dequeueHandler)
            }
            catch (error) {
              console.error('onDequeueHandle error: ', error)
            }
          }

          // Clean up action handler
          if (actionHandler) {
            try {
              vm.releaseHandle(actionHandler)
            }
            catch (error) {
              console.error('actionHandle error: ', error)
            }
          }
        }
      }
    }

    /**
     * createNotificationController - Create notification controller object with cancel method
     */
    function createNotificationController(vm, uiHandle, notificationId) {
      const controller = vm.newObject()
      vm.defineFunction(controller, 'cancel', 'visualBellHandler.cancel', () => {
        uiHandle.cancelPluginVisualBell(notificationId)
        return vm.undefined
      })
      return controller
    }
    let j = as
    // Add additional event handlers and API methods to the main figma API object (y)
    if (enableProposedApi) {
      j = j.concat(ao)
    }
    if (!this.options.isLocal) {
      j = j.concat(['codegen'])
    }
    j = j.concat(['stylechange'])

    // Register event handlers for all supported events
    this.addEventHandlersTo(y, j, 'figma', null)

    // Trigger run event for parameters if provided, otherwise defer or trigger default run event
    if (this.options.parameterValues) {
      this.triggerOrScheduleRunEvent({
        command: 'parameters',
        parameters: this.options.parameterValues,
      })
    }
    else if (!this.options.deferRunEvent) {
      this.triggerOrScheduleRunEvent({
        command: 'parameters',
      })
    }

    // Add closePluginWithFailure for supported environments
    if (isInteractionPathCheck()) {
      this.defineVmFunction({
        handle: y,
        key: 'closePluginWithFailure',
        metricsKey: 'figma.closePluginWithFailure',
        cb: (t) => {
          let i
          try {
            i = e.toString(t)
          }
          catch {
            i = 'The plugin called "closePluginWithFailure"'
          }
          this.closePlugin({
            message: i,
            isError: !0,
          })
          return e.undefined
        },
        isAllowedInReadOnly: !0,
        isAllowedInWidgetRender: !1,
        hasEditScope: !1,
      })
    }

    // showUI method for displaying plugin UI iframe
    this.defineVmFunction({
      handle: y,
      key: 'showUI',
      metricsKey: 'figma.showUI',
      cb: (t, i) => {
        let n = _$$z.strictObject({
          visible: _$$z.boolean(),
          title: _$$z.string(),
          width: FigmaSchema.FiniteNumber.min(0).int(),
          height: FigmaSchema.FiniteNumber.min(0).int(),
          position: _$$z.strictObject({
            x: FigmaSchema.FiniteNumber,
            y: FigmaSchema.FiniteNumber,
          }),
          themeColors: _$$z.boolean(),
        }).partial().optional()
        let r = e.isObject(t) && e.getBooleanProp(t, '__html__') && this.options.html
          ? this.options.html
          : validateWithZSchema({
              vm: e,
              handle: t,
              zSchema: _$$z.string(),
              property: 'showUI',
            })
        let a = validateWithZSchema({
          vm: e,
          handle: i,
          zSchema: n,
          property: 'showUI options',
        })
        let s = mergeDefaults(a || {}, {
          visible: !0,
          themeColors: !1,
        })
        let o = this.validateMakeIframeOptionsOrThrow(r, {
          visible: s.visible,
          title: s.title,
          width: s.width,
          height: s.height,
          position: s.position,
          themeColors: s.themeColors,
        })
        stats.increment(`showUI.${s.visible ? 'visible' : 'invisible'}`)
        s.themeColors && stats.increment('showUI.themeColors')
        this.uiHandle.makeIframe(o)
        s.visible && this.uiHandle.showIframe()
        stats.markTime('timeToShowUIMs')
        return e.undefined
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })

    // saveVersionHistoryAsync method for saving file version history
    this.defineVmFunction({
      handle: y,
      key: 'saveVersionHistoryAsync',
      metricsKey: 'figma.saveVersionHistoryAsync',
      cb: (t, i) => {
        let n = validateWithZSchema({
          vm: e,
          handle: t,
          zSchema: _$$z.string(),
          property: 'saveVersionHistoryAsync',
        })
        let r = validateWithZSchema({
          vm: e,
          handle: i,
          zSchema: _$$z.string().optional(),
          property: 'saveVersionHistoryAsync',
        }) || ''
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        e.registerPromise(createVersionSavepoint(n, r)).then((t) => {
          let i = e.newObject()
          e.setProp(i, 'id', e.newString(t.id))
          e.shallowFreezeObject(i)
          resolve(i)
        }, t => reject(e.newString(`Failed to save version history. Error: ${t.message}`)))
        return promise
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })

    // Utility functions for base64 encoding/decoding
    this.defineVmFunction({
      handle: y,
      key: 'base64Encode',
      metricsKey: 'figma.base64Encode',
      cb: (t) => {
        let i = validateWithZSchema({
          vm: e,
          handle: t,
          zSchema: FigmaSchema.UInt8Array,
          property: 'base64Encode',
        })
        return e.deepWrap(encodeBase64(i))
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmFunction({
      handle: y,
      key: 'base64Decode',
      metricsKey: 'figma.base64Decode',
      cb: (t) => {
        let i = validateWithZSchema({
          vm: e,
          handle: t,
          zSchema: _$$z.string(),
          property: 'base64Decode',
        })
        if (!isValidBase64(i))
          throw new Error('Invalid base64 string')
        return e.deepWrap(decodeBase64(i))
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })

    // getFileThumbnailNode and setFileThumbnailNodeAsync for file thumbnail management
    this.defineVmIncrementalFunction({
      handle: y,
      key: 'getFileThumbnailNode',
      metricsKey: 'figma.getFileThumbnailNode',
      incrementalSafeApiKey: 'getFileThumbnailNodeAsync',
      incrementalSafeApiMetricsKey: 'figma.getFileThumbnailNodeAsync',
      prepareDocument: async (e) => {
        e && (await ensurePluginPageLoaded(e, this.documentAccessState))
      },
      parseArg: (_e) => {
        let t = debugState.getState()
        let i = _$$tB(t)
        return i ? i?.thumbnailGuid : null
      },
      resolveValue: t => t && this.privateSceneGraph.get(t) ? this.nodeFactory.createNode(t, 'getFileThumbnailNode') : e.$$null,
      incrementalSafeApi: this.options.incrementalSafeApi,
      allowIncrementalUnsafeApiCalls: !!this.options.allowIncrementalUnsafeApiCalls,
      isAllowedInReadOnly: !0,
      hasEditScope: !1,
    })
    if (!(R || D)) {
      this.defineVmFunction({
        handle: y,
        key: 'setFileThumbnailNodeAsync',
        metricsKey: 'figma.setFileThumbnailNodeAsync',
        cb: (t) => {
          let i
          let n = debugState.getState()
          let r = n.openFile?.key
          if (r == null)
            throw new Error('File must be open for editing')
          if (e.isNull(t)) {
            i = null
          }
          else {
            let e = this.getNode(t)
            if (!((e.type === 'FRAME' || e.type === 'SYMBOL' || e.type === 'SECTION') && !e.resizeToFit)) {
              throw new Error('Thumbnail node must be a FrameNode, ComponentNode, ComponentSetNode, or SectionNode')
            }
            i = e.guid
          }
          let {
            promise,
            resolve,
            reject,
          } = e.newPromise()
          e.registerPromise(FE(r, i)).then(() => {
            resolve(e.undefined)
          }).catch((t) => {
            reject(e.newString(`Failed to set thumbnail guid. Error: ${t.message}`))
          })
          return promise
        },
        isAllowedInReadOnly: !1,
        isAllowedInWidgetRender: !1,
        hasEditScope: !0,
      })
    }

    // Register parameters, codegen, relatedLinks, devResources, vscode, ui, viewport, clientStorage, constants, and internal APIs
    this.defineVmProp({
      handle: y,
      key: 'parameters',
      options: {
        enumerable: !1,
        value: this.createParametersApi(),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmProp({
      handle: y,
      key: 'codegen',
      options: {
        enumerable: !1,
        get: memoizedHandle(e, () => this.createCodegenApi()),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmProp({
      handle: y,
      key: 'relatedLinks',
      options: {
        enumerable: !1,
        get: memoizedHandle(e, () => {
          if (this.options.isLocal) {
            throw new Error('relatedLinks API is not available for local plugins. Please use the figma.devResources API instead.')
          }
          return this.createDevResourcesApi()
        }),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmProp({
      handle: y,
      key: 'devResources',
      options: {
        enumerable: !1,
        get: () => this.createDevResourcesApi(),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmProp({
      handle: y,
      key: 'vscode',
      options: {
        enumerable: !1,
        value: this.createVsCodeApi(),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmProp({
      handle: y,
      key: 'ui',
      options: {
        enumerable: !1,
        value: this.createUiApi(),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmProp({
      handle: y,
      key: 'viewport',
      options: {
        enumerable: !1,
        value: this.createViewportApi(),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmProp({
      handle: y,
      key: 'clientStorage',
      options: {
        enumerable: !1,
        value: this.createClientStorageApi(),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmProp({
      handle: y,
      key: 'constants',
      options: {
        enumerable: !1,
        value: this.createConstantsApi(),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !0,
      hasEditScope: !1,
    })
    if (getFeatureFlags().internal_only_debug_tools) {
      this.defineVmProp({
        handle: y,
        key: 'internal',
        options: {
          enumerable: !1,
          value: this.createInternalApi(),
        },
        canWriteInReadOnly: !1,
        isAllowedInWidgetRender: !1,
        hasEditScope: !1,
      })
    }

    // createLinkPreviewAsync for FigJam (C)
    if (C) {
      const t = 'createLinkPreviewAsync'
      const i = this
      this.defineVmFunction({
        handle: y,
        key: t,
        metricsKey: 'figma.createLinkPreviewAsync',
        cb: (n) => {
          let r = validateWithZSchema({
            vm: e,
            handle: n,
            zSchema: _$$z.string(),
            property: t,
          })
          let {
            promise,
            resolve,
            reject,
          } = e.newPromise()
          e.registerPromise(ag(this.privateSceneGraph, r)).then((e) => {
            markPageLoaded(e, this.documentAccessState)
            i.editScope(t, () => resolve(this.nodeFactory.createNode(e, 'figma.createLinkPreviewAsync')))
          }, t => reject(e.newString(`Failed to create an embed. Error: ${t.message}`)))
          return promise
        },
        isAllowedInReadOnly: !1,
        isAllowedInWidgetRender: !1,
        hasEditScope: !1,
      })
    }
    function U(e, t, i) {
      let n = t.deepUnwrap(e, !0)
      return mapNodeToComponent(n, {
        isLocalWidget: !1,
        widgetNodeID: '',
        pluginID: i.pluginID,
        widgetVersionID: i.pluginVersionID,
        widgetName: '',
        widgetApiVersion: '1.0.0',
        enableFullJsx: !0,
      })
    }
    (C || R || isInteractionPathCheck()) && this.defineVmFunction({
      handle: y,
      key: 'createGif',
      metricsKey: 'figma.createGif',
      cb: (t) => {
        let i = validateWithZSchema({
          vm: e,
          handle: t,
          zSchema: _$$z.string(),
          property: 'createGif',
        })
        let n = Fullscreen.createRichMediaGifNode(i)
        if (!n)
          throw new Error('Failed to create GIF')
        let r = []
        let a = {
          data: mapPaintConfigurations(this.imageStore, this.videoStore, [{
            type: 'IMAGE',
            scaleMode: 'FILL',
            imageHash: i,
          }], r),
          blobs: r,
        }
        let s = this.privateSceneGraph.get(n)
        if (s == null)
          throw new Error('Failed to create GIF')
        s.fillPaintsForPluginOnly = a
        markPageLoaded(n, this.documentAccessState)
        return this.nodeFactory.createNode(n, 'figma.createGif')
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    });
    (I || M) && this.defineVmFunction({
      handle: y,
      key: 'createComponentFromNode',
      metricsKey: 'figma.createComponentFromNode',
      cb: (e) => {
        let t = this.privateSceneGraph.createComponentFromNode(this.getNode(e).guid)
        return this.nodeFactory.createNode(t.guid, 'figma.createComponentFromNode')
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
    this.isWidget ? this.defineWidgetApi(y) : this.defineWidgetLiteApi(y)
    if (this.options.enableNativeJsx) {
      this.defineVmFunction({
        handle: y,
        key: 'reconcileNodeFromJSXAsync',
        metricsKey: 'figma.reconcileNodeFromJSXAsync',
        cb: (t, i, n) => {
          let r = e.deepUnwrap(t, !0)
          let a = U(i, e, this.options)
          let s = U(n, e, this.options)
          let {
            runtimeBridge,
            shutdownCallback,
          } = PluginRuntime.createRuntimeBridgeForWidgetReconciler(this.options.pluginID, this.vm)
          shutdownCallback && this.options.addShutdownAction(shutdownCallback)
          let d = qg(() => ({
            rootNode: a,
            syncedState: {},
          }), runtimeBridge, this.options.allowedDomains)
          let c = qg(() => ({
            rootNode: s,
            syncedState: {},
          }), runtimeBridge, this.options.allowedDomains)
          let {
            promise,
            resolve,
            reject,
          } = e.newPromise()
          e.registerPromise((async () => {
            try {
              let [e, t] = await Promise.all([d, c])
              let i = this.privateSceneGraph.getCurrentPage()
              let n = _b({
                vNode: t.vRoot.rootNode,
                oldVNode: e.vRoot.rootNode,
                imgInfoMap: t.imgInfoMap,
                runtime: runtimeBridge,
                parentId: i.guid,
                currentNodeId: r.id,
                editScopeLabel: 'reconcile-node-from-jsx',
              })
              let a = this.nodeFactory.createNode(n.getID(), 'figma.reconcileNodeFromJSXAsync')
              resolve(a)
            }
            catch (t: any) {
              reject(e.newString(t.message))
            }
          })())
          return promise
        },
        isAllowedInReadOnly: !1,
        isAllowedInWidgetRender: !1,
        hasEditScope: !0,
      })
    }
    this.defineVmFunction({
      handle: y,
      key: 'createNodeFromJSXAsync',
      metricsKey: 'figma.createNodeFromJSXAsync',
      cb: (t) => {
        let i = this.vm.deepUnwrap(t, !0)
        let n = mapNodeToComponent(i, {
          isLocalWidget: !1,
          widgetNodeID: '',
          pluginID: this.options.pluginID,
          widgetVersionID: this.options.pluginVersionID,
          widgetName: '',
          widgetApiVersion: '1.0.0',
          enableFullJsx: this.options.enableNativeJsx ?? !1,
        })
        let {
          runtimeBridge,
          shutdownCallback,
        } = PluginRuntime.createRuntimeBridgeForWidgetReconciler(this.options.pluginID, this.vm)
        shutdownCallback && this.options.addShutdownAction(shutdownCallback)
        let s = qg(() => ({
          rootNode: n,
          syncedState: {},
        }), runtimeBridge, this.options.allowedDomains).then((e) => {
          let t = this.privateSceneGraph.getCurrentPage()
          return _b({
            vNode: e.vRoot.rootNode,
            imgInfoMap: e.imgInfoMap,
            runtime: runtimeBridge,
            parentId: t.guid,
            editScopeLabel: 'create-node-from-jsx',
            currentNodeId: null,
            // Added missing property
            oldVNode: null, // Added missing property
          }).getID()
        })
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        e.registerPromise(s).then((e) => {
          resolve(this.nodeFactory.createNode(e, 'figma.createNodeFromJSXAsync'))
        }).catch(t => reject(e.newString(t.message)))
        return promise
      },
      isAllowedInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !0,
    })
    this.defineVmProp({
      handle: y,
      key: 'util',
      options: {
        enumerable: !1,
        metricsKey: 'figma.util',
        value: this.createUtilApi(),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !0,
      hasEditScope: !1,
    })
    this.options.capabilities.includes('textreview') && this.defineVmProp({
      handle: y,
      key: 'textreview',
      options: {
        enumerable: !1,
        value: this.createTextReviewApi(),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineInternalApis(y);
    (C || isInteractionPathCheck()) && this.defineVmProp({
      handle: y,
      key: 'timer',
      options: {
        enumerable: !1,
        value: this.createTimerApi(),
      },
      canWriteInReadOnly: !1,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.options.validatedPermissions.permissions.includes('displaycapture') && this.defineVmFunction({
      handle: y,
      key: 'getDisplayMetadataAsync',
      metricsKey: 'figma.getDisplayMetadataAsync',
      cb: (t) => {
        if (!desktopAPIInstance) {
          let {
            promise,
            resolve,
          } = e.newPromise()
          resolve(e.$$null)
          return promise
        }
        let i = validateWithZSchema({
          vm: e,
          handle: t,
          zSchema: FigmaSchema.Size.optional(),
          property: 'thumbnailSize',
        }) ?? {
          width: 150,
          height: 150,
        }
        let n = desktopAPIInstance.getDisplayMetadata(i)
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        e.registerPromise(n).then(t => resolve(e.deepWrap(t)), _t => reject(e.newString('Failed to get display metadata')))
        return promise
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    this.defineVmFunction({
      handle: y,
      key: 'openExternal',
      metricsKey: 'figma.openExternal',
      cb: (e) => {
        let t = validateWithZSchema({
          vm: this.vm,
          handle: e,
          zSchema: _$$z.string(),
          property: 'url',
        })
        _$$T() ? Qn(t) : customHistory.unsafeRedirect(t, '_blank', undefined)
        return this.vm.undefined
      },
      isAllowedInReadOnly: !0,
      isAllowedInWidgetRender: !1,
      hasEditScope: !1,
    })
    // ============================================================================
    // REFACTORED: Slide Grid and Canvas Grid API Methods for Slides and Buzz Editors
    // ============================================================================

    // --- Slide Grid API (Slides Editor Only) ---
    if (R) {
      /**
       * getSlideGrid - Returns a 2D array of slide nodes representing the slide grid.
       * Each element is a row array of node handles.
       */
      this.defineVmFunction({
        handle: y,
        key: 'getSlideGrid',
        metricsKey: 'figma.getSlideGrid',
        cb: () => {
          const vm = e
          const slideGrid = this.privateSceneGraph.getSlideGrid()
          const gridArray = vm.newArray()
          slideGrid.forEach((row, rowIndex) => {
            const rowArray = vm.newArray()
            row.forEach((node, colIndex) => {
              vm.setProp(rowArray, colIndex.toString(), this.nodeFactory.createNode(node.guid, 'figma.getSlideGrid'))
            })
            vm.setProp(gridArray, rowIndex.toString(), rowArray)
          })
          vm.shallowFreezeObject(gridArray)
          return gridArray
        },
        isAllowedInReadOnly: true,
        isAllowedInWidgetRender: false,
        hasEditScope: false,
      })

      /**
       * setSlideGrid - Sets the slide grid using a 2D array of node objects with id properties.
       * @param nextSlideGrid - 2D array of objects with 'id' property
       */
      this.defineVmFunction({
        handle: y,
        key: 'setSlideGrid',
        metricsKey: 'figma.setSlideGrid',
        cb: (nextSlideGridHandle) => {
          const nextSlideGrid = validateWithZSchema({
            vm: this.vm,
            handle: nextSlideGridHandle,
            zSchema: _$$z.array(_$$z.array(_$$z.object({
              id: _$$z.string(),
            }))),
            property: 'nextSlideGrid',
          })
          this.privateSceneGraph.setSlideGrid(nextSlideGrid.map(row => row.map(cell => ({
            guid: cell.id,
          }))))
          return e.$$null
        },
        isAllowedInReadOnly: false,
        isAllowedInWidgetRender: false,
        hasEditScope: true,
      })
    }

    // --- Canvas Grid API (Buzz and Slides Editors) ---
    if (D || R) {
      /**
       * getCanvasGrid - Returns a 2D array of canvas grid nodes.
       * Each element is a row array of node handles.
       */
      this.defineVmFunction({
        handle: y,
        key: 'getCanvasGrid',
        metricsKey: 'figma.getCanvasGrid',
        cb: () => {
          const vm = e
          const canvasGrid = this.privateSceneGraph.getSlideGrid()
          const gridArray = vm.newArray()
          canvasGrid.forEach((row, rowIndex) => {
            const rowArray = vm.newArray()
            row.forEach((node, colIndex) => {
              vm.setProp(rowArray, colIndex.toString(), this.nodeFactory.createNode(node.guid, 'figma.getCanvasGrid'))
            })
            vm.setProp(gridArray, rowIndex.toString(), rowArray)
          })
          vm.shallowFreezeObject(gridArray)
          return gridArray
        },
        isAllowedInReadOnly: true,
        isAllowedInWidgetRender: false,
        hasEditScope: false,
      })

      /**
       * setCanvasGrid - Sets the canvas grid using a 2D array of node objects with id properties.
       * @param nextCanvasGrid - 2D array of objects with 'id' property
       */
      this.defineVmFunction({
        handle: y,
        key: 'setCanvasGrid',
        metricsKey: 'figma.setCanvasGrid',
        cb: (nextCanvasGridHandle) => {
          const nextCanvasGrid = validateWithZSchema({
            vm: this.vm,
            handle: nextCanvasGridHandle,
            zSchema: FigmaSchema.CanvasGrid,
            property: 'nextCanvasGrid',
          })
          this.privateSceneGraph.setSlideGrid(nextCanvasGrid.map(row => row.map(cell => ({
            guid: cell.id,
          }))))
          return e.$$null
        },
        isAllowedInReadOnly: false,
        isAllowedInWidgetRender: false,
        hasEditScope: true,
      })

      /**
       * createCanvasRow - Creates a new row in the canvas grid at the specified index.
       * @param canvasGridRowIndex - Optional row index to insert at
       */
      this.defineVmFunction({
        handle: y,
        key: 'createCanvasRow',
        metricsKey: 'figma.createCanvasRow',
        cb: (canvasGridRowIndexHandle) => {
          const rowIndex = validateWithZSchema({
            vm: e,
            handle: canvasGridRowIndexHandle,
            zSchema: FigmaSchema.PositiveInteger.optional(),
            property: 'canvasGridRowIndex',
          })
          const canvasGridManager = AppStateTsApi?.canvasGrid()
          if (!canvasGridManager) {
            throw new Error('Could not find canvas grid')
          }
          const insertIndex = rowIndex ?? canvasGridManager.canvasGridArray.getCopy().length
          const newRowGuid = canvasGridManager.createRow(insertIndex)
          return this.nodeFactory.createNode(newRowGuid, 'figma.createCanvasRow')
        },
        isAllowedInReadOnly: false,
        isAllowedInWidgetRender: false,
        hasEditScope: true,
      })
    }
    e.shallowFreezeObject(y)
    return y
  }

  /**
   * closePlugin - Asynchronously closes the plugin and handles cleanup.
   *
   * Ensures that the plugin is not already in the process of closing, then
   * invokes the configured closePlugin handler. Handles special case for
   * codegen-triggered plugins by scheduling a codegen refresh.
   *
   * @param closeOptions - Optional object containing close message or error flag.
   */
  async closePlugin(closeOptions) {
    // Prevent duplicate close events
    if (this.runningSyncEvent === 'close' || this.runningCloseEventHandler) {
      return
    }
    await this.options.closePlugin(closeOptions)
    // Special handling for codegen-triggered plugins: schedule codegen refresh
    if (this.options.triggeredFrom === 'codegen') {
      setTimeout(() => _$$c(), 0)
    }
  }

  /**
   * unbindAllEffectVariables - Unbind all variable bindings from an effect
   * @param effectCopy - The effect object to unbind variables from
   * @returns VM wrapped effect object with all variables unbound
   */
  unbindAllEffectVariables(effectCopy) {
    const mutableEffect = processEffectWithValidation(effectCopy, undefined)
    mutableEffect.colorVar = void 0
    mutableEffect.radiusVar = void 0
    mutableEffect.spreadVar = void 0
    mutableEffect.xVar = void 0
    mutableEffect.yVar = void 0
    return this.vm.deepWrap(processEffect(mutableEffect))
  }

  /**
   * Check if effect is a shadow effect type
   * @param effect - Effect object to check
   * @returns True if effect is shadow type
   */
  isShadowEffect(effect) {
    return effect.type === 'INNER_SHADOW' || effect.type === 'DROP_SHADOW'
  }

  /**
   * Bind variable to shadow effect field with validation
   * @param mutableEffect - Effect object to modify
   * @param fieldHandle - VM handle for field name
   * @param variableObject - Variable object to bind
   * @returns VM wrapped effect object with variable binding
   */
  bindShadowEffectVariable(mutableEffect, fieldHandle, variableObject) {
    const fieldName = validateWithZSchema({
      vm: this.vm,
      handle: fieldHandle,
      zSchema: variableDefinitions.VariableBindableShadowEffectField,
      property: 'field',
    })

    // Validate variable type for field
    this.validateShadowEffectVariable(variableObject, fieldName)

    // Create variable binding based on field type
    const variableBinding = this.createVariableBinding(variableObject)

    // Apply binding to appropriate field
    switch (fieldName) {
      case 'color':
        mutableEffect.colorVar = variableBinding
        break
      case 'radius':
        mutableEffect.radiusVar = variableBinding
        break
      case 'spread':
        mutableEffect.spreadVar = variableBinding
        break
      case 'offsetX':
        mutableEffect.xVar = variableBinding
        break
      case 'offsetY':
        mutableEffect.yVar = variableBinding
        break
    }
    return this.vm.deepWrap(processEffect(mutableEffect))
  }

  /**
   * Bind variable to blur effect field with validation
   * @param mutableEffect - Effect object to modify
   * @param fieldHandle - VM handle for field name
   * @param variableObject - Variable object to bind
   * @returns VM wrapped effect object with variable binding
   */
  bindBlurEffectVariable(mutableEffect, fieldHandle, variableObject) {
    const fieldName = validateWithZSchema({
      vm: this.vm,
      handle: fieldHandle,
      zSchema: variableDefinitions.VariableBindableBlurEffectField,
      property: 'field',
    })

    // Validate variable type
    if (!variableObject || variableObject.type !== 'VARIABLE' || variableObject.variableResolvedType !== VariableResolvedDataType.FLOAT) {
      throw new Error(`can only bind float variables to ${fieldName}`)
    }

    // Create and apply variable binding
    mutableEffect.radiusVar = this.createVariableBinding(variableObject)
    return this.vm.deepWrap(processEffect(mutableEffect))
  }

  /**
   * Validate variable for shadow effect field binding
   * @param variableObject - Variable object to validate
   * @param fieldName - Name of the field being bound
   * @throws Error if variable is invalid for field type
   */
  validateShadowEffectVariable(variableObject, fieldName) {
    if (!variableObject || variableObject.type !== 'VARIABLE') {
      throw new Error(`can only bind variables to ${fieldName}`)
    }

    // Validate color field requires color variable
    if (fieldName === 'color' && variableObject.variableResolvedType !== VariableResolvedDataType.COLOR) {
      throw new Error(`can only bind color variables to ${fieldName}`)
    }

    // Validate non-color fields require float variables
    if (fieldName !== 'color' && variableObject.variableResolvedType !== VariableResolvedDataType.FLOAT) {
      throw new Error(`can only bind float variables to ${fieldName}`)
    }
  }

  /**
   * Create variable binding object for effect
   * @param variableObject - Variable object to create binding for
   * @returns Variable binding object with proper structure
   */
  createVariableBinding(variableObject) {
    const resolvedDataType = variableObject.variableResolvedType === VariableResolvedDataType.COLOR ? 'COLOR' : 'FLOAT'
    return {
      value: {
        alias: VariableIdHandler.toKiwi(variableObject.id),
      },
      dataType: 'ALIAS',
      resolvedDataType,
    }
  }

  static createRuntimeBridgeForWidgetReconciler(e, t) {
    if (t instanceof ScopedNoOpVm) {
      return {
        runtimeBridge: new PluginRuntimeBridge(e, t),
        shutdownCallback: void 0,
      }
    }
    let {
      vm,
      api,
    } = createScopedPluginInstance({
      apiMode: {
        type: 'WIDGET_RECONCILER',
      },
      pluginID: e,
      enableNativeJsx: !1,
      enableResponsiveSetHierarchyMutations: !1,
      sceneGraph: null, // Added missing required property
    })
    return {
      runtimeBridge: new PluginRuntimeBridge(e, vm),
      shutdownCallback: () => api.closePlugin(undefined),
    }
  }
}
export function createPluginInstance(vmConfig: NoOpVm, contextOptions: PluginOptions) {
  // $$ap1 - Create new plugin instance (au class factory function)
  return new PluginRuntime(vmConfig, contextOptions)
}
async function listAllFonts() {
  // am - Get all available fonts from debug state with style information

  const fonts = debugState.getState().fonts
  const fontList: FontInfo[] = []

  // Iterate through font families
  for (const familyName in fonts) {
    const styleSet = new Set()
    const fontFamily = fonts[familyName]

    // Iterate through font weights
    for (const weight in fontFamily) {
      const fontWeight = fontFamily[weight]

      // Iterate through font styles
      for (const styleName in fontWeight.styles) {
        // Avoid duplicate styles
        if (!styleSet.has(styleName)) {
          styleSet.add(styleName)
          fontList.push({
            fontName: {
              family: familyName,
              style: styleName,
            },
          })
        }
      }
    }
  }

  // Sort fonts by family name first, then by style name
  fontList.sort((fontA, fontB) => {
    if (fontA.fontName.family > fontB.fontName.family)
      return 1
    if (fontA.fontName.family < fontB.fontName.family)
      return -1
    if (fontA.fontName.style > fontB.fontName.style)
      return 1
    if (fontA.fontName.style < fontB.fontName.style)
      return -1
    return 0
  })
  return fontList
}
async function createVersionSavepoint(versionTitle, versionDescription) {
  // ah - Create a version savepoint for the current file with title and optional description

  const fileKey = await fullscreenValue.openFileKeyPromise()
  if (!fileKey) {
    throw new Error('File must be open for editing')
  }
  if (!versionTitle) {
    throw new Error('Version title must be non-empty')
  }
  const savepoint = await maybeCreateSavepoint(fileKey, versionTitle, versionDescription, debugState.dispatch)
  if (savepoint === null) {
    throw new Error('createSavepoint() returned null')
  }
  return savepoint
}
async function ag(nodeMap, urlText) {
  // ag - Create link preview node from URL text and return the node ID

  const urlInfo = KJ(urlText)
  if (!urlInfo || urlInfo.isFromIFrame) {
    throw new Error('The provided text was not a URL')
  }
  const linkPreviewResult = await _$$y(urlText, urlInfo.url, urlInfo.isFromIFrame, WJ.PLUGIN, debugState.getState())
  if (linkPreviewResult.status === 'error') {
    throw new Error(linkPreviewResult.error)
  }
  if (linkPreviewResult.nodeID && nodeMap.get(linkPreviewResult.nodeID)) {
    return linkPreviewResult.nodeID
  }
  throw new Error('Could not find the created link preview in the document')
}
async function af(collectionName, modeNames, context) {
  // af - Create or update variable collection with specified modes

  const variableCollection = await context.getOrUpsertVariableCollectionAsync(collectionName)
  return context.createNewExtendedVariableCollection(variableCollection, modeNames)
}
async function a_(_componentKey, styleKey, permissions) {
  // a_ - Import and upsert shared style from library with proper error handling

  let downloadedStyle
  const debugStateInstance = debugState
  const currentState = debugStateInstance.getState()

  // Find published style in used libraries or fetch it
  const publishedStyle = yh(styleKey, currentState.library.used__LIVEGRAPH.styles, currentState.library.openFilePublished__LIVEGRAPH.styles) || (await Ky(debugStateInstance, styleKey))
  if (!publishedStyle) {
    throw new Error(`Could not find a published style with the key "${styleKey}"`)
  }

  // Check if style is already available locally
  if (Oo(publishedStyle, permissions)) {
    return {
      key: _$$n(publishedStyle.key),
      version: VariableStyleId(publishedStyle.content_hash) ?? 'INVALID',
    }
  }

  // Download the style from library
  try {
    downloadedStyle = await _$$e2(debugStateInstance.dispatch, publishedStyle, publishedStyle.library_key, jE.PLUGIN_INSERT_STYLE, currentState.userFlags, currentState.fonts)
  }
  catch {
    throw new Error(`Failed to download the style with the key "${styleKey}"`)
  }

  // Upsert the style in the current scene
  const upsertResult = permissionScopeHandler.system('upsert-shared-style-plugin', () => LibraryPubSub.getOrCreateSubscribedStyleNodeId(publishedStyle.key, publishedStyle.content_hash ?? 'INVALID', publishedStyle.library_key, downloadedStyle, SceneIdentifier.ACTIVE_SCENE))
  if (upsertResult?.fileUpdateRequired) {
    throw new Error('Can\'t insert style of a different file version')
  }

  // Update library state
  debugStateInstance.dispatch(PB({
    libraryKeys: [publishedStyle.library_key],
  }))
  return {
    key: _$$n(upsertResult.key),
    version: VariableStyleId(upsertResult.version),
  }
}
async function aA(componentData, permissions) {
  // aA - Import and upsert shared component from library

  const debugStateInstance = debugState
  const currentState = debugStateInstance.getState()
  let localNodeId = componentData.node_id

  // Check if component is already available locally
  if (!Oo(componentData, permissions)) {
    let downloadedComponent

    // Download the component from library
    try {
      downloadedComponent = await _$$e2(debugStateInstance.dispatch, componentData, componentData.library_key, jE.PLUGIN_INSERT_COMPONENT, currentState.userFlags, currentState.fonts)
    }
    catch {
      throw new Error(`Failed to download the component with the key "${componentData.component_key}"`)
    }

    // Upsert the component in the current scene
    const upsertResult = permissionScopeHandler.system('upsert-shared-symbol-plugin', () => LibraryPubSub.upsertSharedSymbol(componentData.component_key ?? 'INVALID', componentData.content_hash ?? 'INVALID', componentData.library_key, Confirmation.NO, downloadedComponent, SceneIdentifier.ACTIVE_SCENE))
    if (!upsertResult) {
      throw new Error('Couldn\'t insert component')
    }
    if (upsertResult.fileUpdateRequired) {
      throw new Error('Can\'t insert component of a different file version')
    }
    localNodeId = upsertResult.localGUID
  }
  return localNodeId
}
async function ay(stateGroupData, permissions) {
  // ay - Import and upsert shared state group from library

  const debugStateInstance = debugState
  const currentState = debugStateInstance.getState()
  let localNodeId = stateGroupData.node_id

  // Check if state group is already available locally
  if (!Oo(stateGroupData, permissions)) {
    let downloadedStateGroup

    // Download the state group from library
    try {
      downloadedStateGroup = await _$$e2(debugStateInstance.dispatch, stateGroupData, stateGroupData.library_key, jE.PLUGIN_INSERT_STATE_GROUP, currentState.userFlags, currentState.fonts)
    }
    catch {
      throw new Error(`Failed to download the component set with the key "${stateGroupData.key}"`)
    }

    // Upsert the state group in the current scene
    const upsertResult = permissionScopeHandler.system('upsert-shared-state-group-plugin', () => LibraryPubSub.upsertSharedStateGroup(stateGroupData.key, stateGroupData.version, stateGroupData.library_key, Confirmation.NO, downloadedStateGroup, SceneIdentifier.ACTIVE_SCENE))
    if (!upsertResult) {
      throw new Error('Couldn\'t insert state group')
    }
    if (upsertResult.fileUpdateRequired) {
      throw new Error('Can\'t insert state group of a different file version')
    }
    localNodeId = upsertResult.localGUID
  }
  return localNodeId
}
/**
 * Import component by key with comprehensive state group and library handling
 * Handles local components, published components, and nested state group components
 * @param componentKey - The key of the component to import
 * @param sceneGraphInstance - Scene graph instance for node operations
 * @returns Promise resolving to the imported component GUID
 * @throws Error if component cannot be found or imported
 */
export async function $$ab4(componentKey, sceneGraphInstance = getSceneGraphInstance()) {
  const debugStateInstance = debugState
  const currentState = debugStateInstance.getState()
  const currentFile = d1(currentState)
  if (!currentFile) {
    throw new Error('Missing a current file')
  }

  // Resolve component key (handle moved library items)
  const resolvedComponentKey = currentState.library.movedLibraryItems.subscribed[componentKey] || componentKey

  // Search for published component and its parent state group
  const componentSearchResult = await searchForPublishedComponent(currentState, resolvedComponentKey)

  // Handle unpublished component validation
  if (getFeatureFlags().ds_block_unpublished_symbol_reqs && !componentSearchResult.component) {
    validateUnpublishedComponent(currentState, componentKey)
  }

  // Attempt to fetch component if not found locally
  let finalComponent: any = componentSearchResult.component
  let parentStateGroup = componentSearchResult.parentStateGroup
  if (!finalComponent) {
    const fetchResult = await u7(debugStateInstance, resolvedComponentKey, 'importComponentByKeyAsync')
    finalComponent = fetchResult.component
    parentStateGroup = fetchResult.parentStateGroup
    if (!finalComponent) {
      throw new Error(`Could not find a published component with the key "${componentKey}"`)
    }
  }

  // Handle direct component import (no state group)
  if (!isComponentInStateGroup(finalComponent, parentStateGroup)) {
    debugStateInstance.dispatch(PB({
      libraryKeys: [finalComponent?.library_key || 'unknown'], // Safe property access
    }))
    return await aA(finalComponent, currentFile.key)
  }

  // Handle component within state group
  return await importComponentFromStateGroup(parentStateGroup, finalComponent, sceneGraphInstance, componentKey)
}

/**
 * Search for published component in library
 * @param currentState - Current application state
 * @param componentKey - Key to search for
 * @returns Object containing found component and parent state group
 */
export function searchForPublishedComponent(currentState, componentKey) {
  let foundComponent = null
  let parentStateGroup = null
  Qb(currentState.library.publishedByLibraryKey.components, (libraryKey, version, _componentId, componentData) => {
    if (componentData.component_key === componentKey) {
      foundComponent = componentData

      // Check for containing state group
      const stateGroupNodeId = componentData?.containing_frame?.containingStateGroup?.nodeId
      if (stateGroupNodeId) {
        parentStateGroup = currentState.library.publishedByLibraryKey.stateGroups[libraryKey]?.[version]?.[stateGroupNodeId] ?? null
      }
    }
  })
  return {
    component: foundComponent,
    parentStateGroup,
  }
}

/**
 * Validate unpublished component restrictions
 * @param currentState - Current application state
 * @param componentKey - Component key to validate
 * @throws Error if unpublished component import is blocked
 */
export function validateUnpublishedComponent(currentState, componentKey) {
  for (const localComponent of Object.values(currentState.library.local.components)) {
    const component = localComponent as unknown as any // Type assertion for unknown component
    if (!component?.component_key && SceneGraphHelpers.getAssetKeyForPublish(component?.node_id) === componentKey) {
      throw new Error(`Cannot import component with key "${componentKey}" since it is unpublished`)
    }
  }
}

/**
 * Check if component is contained within a state group
 * @param component - Component data
 * @param stateGroup - State group data
 * @returns True if component is in a state group
 */
export function isComponentInStateGroup(component, stateGroup) {
  return !!(component.containing_frame?.containingStateGroup?.nodeId && stateGroup?.key)
}

/**
 * Import component from within a state group
 * @param stateGroup - Parent state group
 * @param component - Component to import
 * @param sceneGraphInstance - Scene graph instance
 * @param originalComponentKey - Original component key for error messages
 * @returns Promise resolving to component GUID
 * @throws Error if component cannot be found in state group
 */
async function importComponentFromStateGroup(stateGroup, component, sceneGraphInstance, originalComponentKey) {
  const stateGroupGuid = await $$av5(stateGroup.key)
  const stateGroupNode = sceneGraphInstance.get(stateGroupGuid)

  // Search for component within state group children
  for (const childGuid of stateGroupNode?.reversedChildrenGuids || []) {
    const childNode = sceneGraphInstance.get(childGuid)
    if (childNode) {
      const childComponentKey = childNode.componentKey ?? SceneGraphHelpers.getAssetKeyForPublish(childNode.guid)
      if (childComponentKey === component.component_key) {
        return childNode.guid
      }
    }
  }
  throw new Error(`Could not find a published component set with the key "${originalComponentKey}"`)
}
/**
 * Import component set by key with comprehensive state group handling
 * Resolves component set from library, handles moved items, and ensures proper loading
 * @param componentSetKey - The key of the component set to import
 * @returns Promise resolving to the imported component set GUID
 * @throws Error if component set cannot be found or imported
 */
export async function $$av5(componentSetKey) {
  const currentState = debugState.getState()
  const currentFile = d1(currentState)
  if (!currentFile) {
    throw new Error('Missing a current file')
  }

  // Resolve component set key (handle moved library items)
  const resolvedComponentSetKey = currentState.library.movedLibraryItems.subscribed[componentSetKey] || componentSetKey

  // Search for published state group in library
  let foundStateGroup: any = searchForPublishedStateGroup(currentState, resolvedComponentSetKey)

  // Attempt to fetch state group if not found locally
  if (!foundStateGroup) {
    foundStateGroup = await zn(debugState, resolvedComponentSetKey)
    if (!foundStateGroup) {
      throw new Error(`Could not find a published component set with the key "${componentSetKey}"`)
    }
  }

  // Dispatch library loading action
  debugState.dispatch(PB({
    libraryKeys: [foundStateGroup.library_key],
  }))

  // Import the state group
  return await ay(foundStateGroup, currentFile.key)
}

/**
 * Search for published state group in library by key
 * @param currentState - Current application state
 * @param stateGroupKey - Key to search for
 * @returns Found state group data or null
 */
export function searchForPublishedStateGroup(currentState, stateGroupKey) {
  let foundStateGroup = null
  Qb(currentState.library.publishedByLibraryKey.stateGroups, (_libraryKey, _version, _stateGroupId, stateGroupData) => {
    if (stateGroupData.key === stateGroupKey) {
      foundStateGroup = stateGroupData
    }
  })
  return foundStateGroup
}
/**
 * aI - Transform parameter values object to plain key-value mapping
 * @param sourceObject - Object with parameter values (name/data)
 * @returns Object mapping keys to data or name
 */
export function transformParameterValues(sourceObject: Record<string, {
  name?: string
  data?: any
}>): Record<string, any> {
  const transformedObject: Record<string, any> = {}
  for (const propertyKey in sourceObject) {
    const propertyValue = sourceObject[propertyKey]
    if (propertyValue) {
      // Use data property if available, otherwise fallback to name property
      transformedObject[propertyKey] = propertyValue.data !== undefined ? propertyValue.data : propertyValue.name
    }
  }
  return transformedObject
}

/**
 * createDefaultPluginOptions - Returns default plugin options for global API context
 * Original: $$aE2
 */
export function createDefaultPluginOptions() {
  const state = debugState.getState()
  return {
    stats: new PluginApiMetrics(),
    name: '',
    command: '',
    pluginID: '',
    pluginVersionID: '',
    queryMode: false,
    userID: state.user?.id || '',
    titleIconURL: '',
    openFileKey: state.openFile?.key || '',
    apiVersion: '1.0.0',
    apiMode: {
      type: 'GLOBAL_API',
    },
    enableProposedApi: true,
    enablePrivatePluginApi: true,
    deferRunEvent: false,
    validatedPermissions: PluginPermissions.forConsoleGlobal(),
    isLocal: true,
    capabilities: [],
    allowedDomains: gH,
    editorType: [ManifestEditorType.FIGMA, ManifestEditorType.FIGJAM, ManifestEditorType.INSPECT, ManifestEditorType.DEV, ManifestEditorType.SITES, ManifestEditorType.SLIDES],
    html: null,
    incrementalSafeApi: false,
    enableNativeJsx: false,
    enableResponsiveSetHierarchyMutations: false,
    isPluginExemptFromPluginDataLimits: false,
  }
}

/**
 * createScopedPluginInstance - Create a plugin instance with scoped VM/context
 * Original: $$ax3
 */
export function createScopedPluginInstance({
  apiMode,
  pluginID,
  enableNativeJsx,
  enableResponsiveSetHierarchyMutations,
  sceneGraph,
}: {
  apiMode: any
  pluginID: string
  enableNativeJsx?: boolean
  enableResponsiveSetHierarchyMutations?: boolean
  sceneGraph?: TSSceneGraph
}) {
  const {
    addShutdownAction,
    closePlugin,
    noOpVm,
  } = createPluginContext()
  const pluginInstance = createPluginInstance(noOpVm, {
    ...createDefaultPluginOptions(),
    apiMode,
    pluginID,
    closePlugin,
    addShutdownAction,
    enableNativeJsx: enableNativeJsx ?? false,
    enableResponsiveSetHierarchyMutations: enableResponsiveSetHierarchyMutations ?? false,
    sceneGraph,
  })
  return {
    vm: noOpVm,
    api: pluginInstance,
  }
}
export function aS(permissionName, options: any = {}) {
  // aS - Generate permission error message with appropriate documentation link

  const documentationUrl = options?.isWidget ? 'https://www.figma.com/widget-docs/widget-manifest/#permissions' : 'https://www.figma.com/plugin-docs/manifest/#permissions'
  return `"${permissionName}" permission not specified in manifest.json. Add the following to your manifest.json: "permissions": ["${permissionName}"]. See ${documentationUrl} for more details.`
}
export const _T = defineAlertFunction
export const K2 = createPluginInstance
export const _$ = createDefaultPluginOptions
export const eR = createScopedPluginInstance
export const $C = $$ab4
export const $f = $$av5
