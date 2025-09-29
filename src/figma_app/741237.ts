import { MIXED_MARKER } from '../905/216495'
import { kiwiParserCodec } from '../905/294864'
import { debugState } from '../905/407919'
import { trackEventAnalytics } from '../905/449184'
import { reactTimerGroup } from '../905/542194'
import { getFeatureFlags } from '../905/601108'
import { extractOriginalTextMap } from '../905/744769'
import { getPropertyActions } from '../905/770460'
import { defaultSessionLocalID, sessionLocalIDToString } from '../905/871411'
import { debounce } from '../905/915765'
import { convertVariableDataToEntries, YesNoTrackingEnum } from '../figma_app/198712'
import { fullscreenValue } from '../figma_app/455680'
import { debug } from '../figma_app/465776'
import { AppStateTsApi, Fullscreen, SceneGraphHelpers, ScrollBehavior } from '../figma_app/763686'
import { desktopAPIInstance } from '../figma_app/876459'

// Refactored selection and scene graph helpers with meaningful names and types

/**
 * The current session local ID as a string.
 * (was $$E6)
 */
let currentSessionLocalIDString = sessionLocalIDToString(defaultSessionLocalID)

/**
 * Adds nodes to the current selection.
 * (was $$y3)
 */
export function addToSelection(nodeIds: string[]) {
  SceneGraphHelpers.addToSelection(nodeIds)
}

/**
 * Removes nodes from the current selection.
 * (was $$b2)
 */
export function removeFromSelection(nodeIds: string[]) {
  SceneGraphHelpers.removeFromSelection(nodeIds)
}

/**
 * Replaces the current selection with the given nodes.
 * (was $$T30)
 */
export function replaceSelection(nodeIds: string[], keepSelection: boolean = true) {
  SceneGraphHelpers.replaceSelection(nodeIds, keepSelection)
}

/**
 * Clears the current selection.
 * (was $$I33)
 */
export function clearSelection() {
  SceneGraphHelpers.clearSelection()
}

/**
 * Selects nodes in a given range.
 * (was $$S5)
 */
export function selectNodesInRange(startNodeId: string, endNodeId: string) {
  SceneGraphHelpers.selectNodesInRange(startNodeId, endNodeId)
}

/**
 * Transfers selection from one set of nodes to another.
 * (was $$v13)
 */
export function transferSelection(fromNodeIds: string[], toNodeIds: string[], scrollBehavior: ScrollBehavior = ScrollBehavior.SCROLLS) {
  SceneGraphHelpers.transferSelection(fromNodeIds, toNodeIds, scrollBehavior)
}

/**
 * Duplicates the current selection.
 * (was $$A25)
 */
export function duplicateSelection(nodeIds: string[], targetNodeIds: string[], scrollBehavior: ScrollBehavior = ScrollBehavior.SCROLLS) {
  SceneGraphHelpers.duplicateSelection(nodeIds, targetNodeIds, scrollBehavior)
}

/**
 * Renames a node and sets manual rename flags based on feature flags.
 * (was $$x23)
 */
export function renameNode(nodeId: string, newName: string) {
  let node = debugState?.getState().mirror.sceneGraph.get(nodeId)
  if (node) {
    if (getFeatureFlags().sts_code && (node.isCodeFile || node.isCodeInstance || node.isCodeComponent)
      || newName && getFeatureFlags().slide_chapters && node.isCanvasGridRow) {
      node.setHasBeenManuallyRenamed(true)
    }
    else if (getFeatureFlags().slide_chapters && node.isCanvasGridRow) {
      node.setHasBeenManuallyRenamed(false)
    }
    node.name = newName
  }
}

/**
 * Renames all selected nodes.
 * (was $$N0)
 */
export function renameSelectedNodes(newName: string) {
  Object.keys(debugState?.getState().mirror.sceneGraphSelection).forEach(nodeId => renameNode(nodeId, newName))
}

/**
 * Sets the expanded state of a node.
 * (was $$C29)
 */
export function setNodeExpanded(nodeId: string, isExpanded: boolean) {
  let node = debugState?.getState().mirror.sceneGraph.get(nodeId)
  if (node)
    node.isExpanded = isExpanded
}

/**
 * Sets the temporary expanded state of a node.
 * (was $$w7)
 */
export function setNodeTemporarilyExpanded(nodeId: string, isTemporarilyExpanded: boolean) {
  let node = debugState?.getState().mirror.sceneGraph.get(nodeId)
  if (node)
    node.isTemporarilyExpanded = isTemporarilyExpanded
}

/**
 * Sets whether a node is symbol publishable.
 * (was $$O4)
 */
export function setNodeSymbolPublishable(nodeId: string, isPublishable: boolean) {
  let node = debugState?.getState().mirror.sceneGraph.get(nodeId)
  if (node)
    node.isSymbolPublishable = isPublishable
}

/**
 * Sets whether a node is publishable.
 * (was $$R24)
 */
export function setNodePublishable(nodeId: string, isPublishable: boolean) {
  let node = debugState?.getState().mirror.sceneGraph.get(nodeId)
  if (node)
    node.isPublishable = isPublishable
}

/**
 * Expands a node up to the root.
 * (was $$L22)
 */
export function expandNodeToRoot(nodeId: string) {
  SceneGraphHelpers.expandUpToRoot(nodeId)
}

/**
 * Recursively sets expanded state for a node.
 * (was $$P28)
 */
export function setNodeExpandedRecursive(nodeId: string, isExpanded: boolean) {
  SceneGraphHelpers.setExpandedRecursive(nodeId, isExpanded)
}

/**
 * Sets expanded state for the selection.
 * (was $$D34)
 */
export function setSelectionExpanded(nodeIds: string[], isExpanded: boolean) {
  SceneGraphHelpers.setSelectionExpanded(nodeIds, isExpanded)
}

/**
 * Updates the fullscreen app model.
 * (was $$k21)
 */
export function updateFullscreenAppModel(model: any) {
  Fullscreen?.updateAppModel(model)
}

/**
 * Updates the hovered node in the fullscreen app model.
 * (was $$M11)
 */
export function updateHoveredNode(nodeId: string) {
  updateFullscreenAppModel({ hoveredNode: nodeId })
}

/**
 * Sets the hovered component property definition.
 * (was $$F19)
 */
export function setHoveredComponentPropDef(propDef: any) {
  AppStateTsApi.uiState().hoveredComponentPropDef.set(propDef)
}

/**
 * Updates temporarily expanded instance layers in the fullscreen app model.
 * (was $$j17)
 */
export function updateTemporarilyExpandedInstanceLayers(layers: any) {
  updateFullscreenAppModel({ temporarilyExpandedInstanceLayers: layers })
}

/**
 * Updates dev handoff code language in the fullscreen app model.
 * (was $$U18)
 */
export function updateDevHandoffCodeLanguage(language: string) {
  updateFullscreenAppModel({ devHandoffCodeLanguage: language })
}

/**
 * Updates dev handoff preferences in the fullscreen app model.
 * (was $$B14)
 */
export function updateDevHandoffPreferences(preferences: any) {
  updateFullscreenAppModel({ devHandoffPreferences: preferences })
}

/**
 * Gets the current properties panel tab.
 * (was $$G15)
 */
export function getPropertiesPanelTab() {
  return AppStateTsApi?.propertiesPanelState()?.propertiesPanelTab
}

/**
 * Sets the current properties panel tab.
 * (was $$V9)
 */
export function setPropertiesPanelTab(tab: any) {
  return getPropertiesPanelTab()?.set(tab)
}

/**
 * Gets enabled tabs for the dev mode properties panel.
 * (was $$H8)
 */
export function getEnabledDevModePropertiesPanelTabs() {
  return AppStateTsApi?.devModePropertiesPanelState()?.getEnabledTabs() ?? []
}

/**
 * Gets the selected tab for the dev mode properties panel.
 * (was $$z32)
 */
export function getSelectedDevModePropertiesPanelTab() {
  return AppStateTsApi?.devModePropertiesPanelState()?.selectedTab
}

/**
 * Sets the selected tab for the dev mode properties panel.
 * (was $$W16)
 */
export function setSelectedDevModePropertiesPanelTab(tab: any) {
  return getSelectedDevModePropertiesPanelTab()?.set(tab)
}

/**
 * Updates the active text review plugin in the fullscreen app model.
 * (was $$K1)
 */
export function updateActiveTextReviewPlugin(plugin: any) {
  updateFullscreenAppModel({ activeTextReviewPlugin: plugin })
}

/**
 * Sets node locked state.
 * (was $$Y31)
 */
function setNodeLocked(nodeId: string, isLocked: boolean, recursive?: boolean) {
  SceneGraphHelpers.setNodeLocked(nodeId, isLocked, recursive)
}

/**
 * Sets node visible state.
 * (was $$$27)
 */
function setNodeVisible(nodeId: string, isVisible: boolean, recursive?: boolean) {
  SceneGraphHelpers.setNodeVisible(nodeId, isVisible, recursive)
}

// List of property keys for selection updates (was X)
const selectionPropertyKeys = [
  'x',
  'y',
  'width',
  'height',
  'minWidth',
  'minHeight',
  'maxWidth',
  'maxHeight',
  'angle',
  'canBecomeFrame',
  'canBecomeGroup',
  'canBecomeSection',
  'aspectRatioLockToggled',
  'miterLimitAngle',
  'terminalCap',
  'dashCap',
  'dynamicStrokeFrequency',
  'dynamicStrokeSmoothen',
  'dynamicStrokeWiggle',
  'scatterBrushGap',
  'scatterBrushWiggle',
  'scatterBrushAngularJitter',
  'scatterBrushRotation',
  'scatterBrushSizeJitter',
  'availableOTFeaturesForSelection',
  'availableOTFeaturesForFonts',
  'toggledOnOTFeaturesForSelection',
  'toggledOffOTFeaturesForSelection',
  'mixedStateOTFeaturesForSelection',
  'detectedList',
  'destinationOverlayPositionType',
  'destinationOverlayBackgroundInteraction',
  'destinationOverlayBackgroundType',
  'destinationOverlayBackgroundColor',
  'name',
  'numSelected',
  'numSelectedByType',
  'arcStart',
  'arcSweep',
  'arcRadius',
  'fontFamily',
  'previewFontFamily',
  'fontStyle',
  'fontVariations',
  'intrinsicLineHeight',
  'textContent',
  'textPathStartForward',
  'prototypeInteractions',
  'prototypeInheritedInternalInteractions',
  'isValidPrototypingSourceSelected',
  'selectionIsHyperlink',
  'whiteboardControls',
  'whiteboardColor',
  'whiteboardDividedSwatchColors',
  'whiteboardStrokeColor',
  'whiteboardFontFamilies',
  'whiteboardFontSizes',
  'whiteboardTextAlignHorizontal',
  'whiteboardTextAlignVertical',
  'whiteboardStrokeStyle',
  'whiteboardNumSelected',
  'whiteboardNumSelectedByType',
  'whiteboardSelectionCanSummarize',
  'whiteboardSelectionCanCluster',
  'whiteboardSelectionCanShowAiOnboardingBadge',
  'whiteboardStickyAIControlsShown',
  'whiteboardMindmapAIControlsShown',
  'nodeSelectedValidForQuickAdd',
  'whiteboardStrokeWeight',
  'washiTapePaint',
  'washiTapePaintIsMixed',
  'connectorLineStyleForSelection',
  'connectorStartCapForSelection',
  'connectorEndCapForSelection',
  'connectorTextBackgroundTransparent',
  'codeBlockLanguage',
  'codeBlockTheme',
  'leftEndCap',
  'rightEndCap',
  'leftCapSize',
  'rightCapSize',
  'maxStrokeWeight',
  'shapeWithTextTypeForSelection',
  'shapeWithTextFillType',
  'shapeWithTextOpacityOverride',
  'platformShapeFillType',
  'platformShapeOpacityOverride',
  'authorVisibility',
  'imageAspectRatio',
  'imageHasNoStroke',
  'imageOverlayPaint',
  'sectionContentsHidden',
  'isSection',
  'variableConsumptionInfo',
  'borderTopVisible',
  'borderRightVisible',
  'borderBottomVisible',
  'borderLeftVisible',
  'borderSharedWeight',
  'stackCounterSpacing',
  'gridRowCount',
  'gridColumnCount',
  'gridTrackSize',
  'gridTrackSizingType',
  'directlySubscribedAssetKeys',
  'numVideosSelected',
  'videoAutoplay',
  'videoMediaLoop',
  'videoMuted',
  'videoShowControls',
  'themeId',
  'objectAnimationType',
  'objectAnimationDuration',
  'objectAnimationPhase',
  'shadow',
  'blur',
  'htmlWidgetYouTubeVideoURL',
  'htmlWidgetGoogleMapLocation',
  'htmlWidgetGoogleMapZoom',
  'htmlWidgetMailchimpFormURL',
  'htmlWidgetMailchimpInputPlaceholder',
  'htmlWidgetMailchimpSubmitButtonLabel',
  'htmlWidgetMailchimpLayoutIsVertical',
  'htmlWidgetGenericEmbedUrl',
  'htmlWidgetGenericEmbedCodeType',
  'htmlWidgetGenericEmbedIframeHtml',
  'htmlWidgetGenericEmbedAllowFullscreen',
  'appear',
  'hover',
  'press',
  'focus',
  'scrollParallax',
  'scrollTransform',
  'cursor',
  'marquee',
  'code',
]

/**
 * Debounced style edit tracking.
 * (was Z)
 */
const trackStyleEdit = debounce((styleType: any) => {
  trackEventAnalytics('Style Edited', { styleType })
}, 500)

/**
 * Updates selection properties and handles style tracking.
 * (was $$q10)
 */
/**
 * Updates selection properties and handles style tracking.
 * (was $$q10)
 * @param properties - Properties to update.
 * @param node - The node to update.
 * @param trackingType - Tracking type for analytics.
 * @param styleType - Style type for tracking.
 * @param extra - Additional data for update.
 */
function updateSelectionProperties(
  properties: Record<string, any>,
  node: any,
  trackingType: YesNoTrackingEnum,
  styleType: any,
  extra?: any,
) {
  reactTimerGroup.start('update-selection-properties')
  try {
    // Create a copy of the properties to avoid mutation
    const propsCopy = { ...properties }

    /**
     * Extracts selection properties from the provided properties.
     * Only includes keys defined in selectionPropertyKeys and not MIXED_MARKER.
     */
    function extractSelectionProps(props: Record<string, any>): Record<string, any> {
      const result: Record<string, any> = Object.create(null)
      for (const key of selectionPropertyKeys) {
        if (key in props) {
          const value = props[key]
          if (value !== MIXED_MARKER) {
            result[key] = value
          }
          delete props[key]
        }
      }
      return result
    }

    /**
     * Extracts node changes from the remaining properties.
     * Only includes keys not in selectionPropertyKeys and not MIXED_MARKER.
     */
    function extractNodeChanges(props: Record<string, any>): Record<string, any> {
      const result: Record<string, any> = {
        guid: { sessionID: 0, localID: 0 },
      }
      for (const key in props) {
        const value = props[key]
        if (value !== MIXED_MARKER) {
          result[key] = value
        }
      }
      return result
    }

    const selectionProps = extractSelectionProps(propsCopy)
    const nodeChanges = extractNodeChanges(propsCopy)
    const normalizedStyleType = normalizeTrackingEnum(styleType)

    // Handle font family and style updates
    if (node?.guid) {
      if (selectionProps) {
        const hasFontFamilyAndStyle = selectionProps.fontFamily && selectionProps.fontStyle
        debug(!hasFontFamilyAndStyle, 'UI should never simultaneously update font family and style')

        if (selectionProps.fontFamily && node.fontStyle) {
          nodeChanges.fontName = {
            family: selectionProps.fontFamily,
            style: node.fontStyle,
            postscript: '',
          }
        }
        if (node.fontFamily && selectionProps.fontStyle) {
          nodeChanges.fontName = {
            family: node.fontFamily,
            style: selectionProps.fontStyle,
            postscript: '',
          }
        }
        if (selectionProps.fontVariations) {
          nodeChanges.fontVariations = selectionProps.fontVariations
        }
        if (selectionProps.variableConsumptionInfo?.variableConsumptionMap) {
          const variableMap = selectionProps.variableConsumptionInfo.variableConsumptionMap
          const entries = convertVariableDataToEntries(variableMap)
          nodeChanges.variableConsumptionMap = entries
          nodeChanges.parameterConsumptionMap = entries
        }
      }

      // Encode node changes and update fullscreen style properties
      const encoded = kiwiParserCodec.encodeMessage({
        type: 'NODE_CHANGES',
        sessionID: 0,
        ackID: 0,
        nodeChanges: [nodeChanges],
      })
      Fullscreen?.updateSelectedStyleProperties(
        encoded,
        trackingType,
        normalizedStyleType === YesNoTrackingEnum.YES,
      )
      debug(node.styleType != null, 'unknown style type')
      trackStyleEdit(node.styleType)
    }
    else {
      // Encode node changes and update selection properties via SceneGraphHelpers
      const encoded = kiwiParserCodec.encodeMessage({
        type: 'NODE_CHANGES',
        sessionID: 0,
        ackID: 0,
        nodeChanges: [nodeChanges],
      })
      SceneGraphHelpers.updateSelectionProperties(
        selectionProps,
        trackingType,
        extra,
        normalizedStyleType === YesNoTrackingEnum.YES,
        encoded,
      )
    }
  }
  // eslint-disable-next-line no-useless-catch
  catch (err) {
    throw err
  }
  finally {
    reactTimerGroup.stop('update-selection-properties')
  }
}

/**
 * Normalizes tracking enum values.
 * (was $$J20)
 */
function normalizeTrackingEnum(value: YesNoTrackingEnum): YesNoTrackingEnum {
  switch (value) {
    case YesNoTrackingEnum.YES:
    case YesNoTrackingEnum.YES_FORCE_TRACKING_AS_EDIT:
    case YesNoTrackingEnum.YES_WITHOUT_TRACKING_AS_EDIT:
      return YesNoTrackingEnum.YES
    default:
      return YesNoTrackingEnum.NO
  }
}

// Internal state for fullscreen event handling (was Q)
let fullscreenEventState: Record<string, any> = Object.create(null)

/**
 * Fullscreen event types enum.
 * (was ee)
 */
enum FullscreenEventType {
  SceneGraph = 0,
  AppModel = 1,
  Selection = 2,
  SelectionProperties = 3,
}
const fullscreenEventTypesSet = new Set([
  FullscreenEventType.SceneGraph,
  FullscreenEventType.AppModel,
  FullscreenEventType.Selection,
  FullscreenEventType.SelectionProperties,
])

/**
 * Registers fullscreen event handlers.
 * (was $$er26)
 */
function registerFullscreenEventHandlers(eventTypes: Set<number> = fullscreenEventTypesSet) {
  if (eventTypes.has(FullscreenEventType.SceneGraph)) {
    fullscreenValue.fromFullscreen.on('sceneGraphMirrorUpdate', handleSceneGraphMirrorUpdate)
  }
  if (eventTypes.has(FullscreenEventType.Selection)) {
    fullscreenValue.fromFullscreen.on('selection:addSelectors', handleAddSelectors)
    fullscreenValue.fromFullscreen.on('selection:removeSelectors', handleRemoveSelectors)
    fullscreenValue.fromFullscreen.on('selection:replaceSelectors', handleReplaceSelectors)
  }
  if (eventTypes.has(FullscreenEventType.AppModel)) {
    fullscreenValue.fromFullscreen.on('updateAppModel', handleUpdateAppModel)
  }
  if (eventTypes.has(FullscreenEventType.SelectionProperties)) {
    fullscreenValue.fromFullscreen.on('selectionPropertiesUpdate', handleSelectionPropertiesUpdate)
  }
}

/**
 * Returns and resets the fullscreen event state.
 * (was $$en12)
 */
export function consumeFullscreenEventState() {
  const state = fullscreenEventState
  fullscreenEventState = Object.create(null)
  return state
}

/**
 * Handles scene graph mirror update events.
 * (was ei)
 */
export function handleSceneGraphMirrorUpdate(event: { rebuildRows?: boolean }) {
  debug(!fullscreenEventState.invalidateSceneGraph, 'We should get at most one sceneGraphMirrorUpdate per frame. We got two.')
  fullscreenEventState.invalidateSceneGraph = {
    rebuildRows: !event || event.rebuildRows,
  }
}

/**
 * Reads a 32-bit integer from a buffer.
 * (was ea)
 */
export function readInt32(buffer: Uint8Array, offset: number): number {
  return buffer[offset] | buffer[offset + 1] << 8 | buffer[offset + 2] << 16 | buffer[offset + 3] << 24
}

/**
 * Handles add selectors event.
 * (was es)
 */
export function handleAddSelectors(event: { buffer?: Uint8Array, userTriggered?: boolean }) {
  debug(!fullscreenEventState.selection?.replace, 'addSelectors and replaceSelectors called on the same frame')
  fullscreenEventState.selection ||= Object.create(null)
  fullscreenEventState.selection.add ||= Object.create(null)
  fullscreenEventState.selection.userTriggered ||= event.userTriggered
  const buffer = event.buffer
  if (buffer) {
    for (let i = 0; i < buffer.length; i += 8) {
      const sessionID = readInt32(buffer, i)
      const localID = readInt32(buffer, i + 4)
      const idString = sessionLocalIDToString({ sessionID, localID })
      fullscreenEventState.selection.add[idString] = true
    }
  }
}

/**
 * Handles remove selectors event.
 * (was eo)
 */
export function handleRemoveSelectors(event: { buffer?: Uint8Array, userTriggered?: boolean }) {
  debug(!fullscreenEventState.selection?.replace, 'removeSelectors and replaceSelectors called on the same frame')
  fullscreenEventState.selection ||= Object.create(null)
  fullscreenEventState.selection.remove ||= Object.create(null)
  fullscreenEventState.selection.userTriggered ||= event.userTriggered
  const buffer = event.buffer
  if (buffer) {
    for (let i = 0; i < buffer.length; i += 8) {
      const sessionID = readInt32(buffer, i)
      const localID = readInt32(buffer, i + 4)
      const idString = sessionLocalIDToString({ sessionID, localID })
      fullscreenEventState.selection.remove[idString] = true
    }
  }
}

/**
 * Handles replace selectors event.
 * (was el)
 */
function handleReplaceSelectors(event: { buffer?: Uint8Array, userTriggered?: boolean }) {
  debug(!fullscreenEventState.selection?.add, 'addSelectors and replaceSelectors called on the same frame')
  debug(!fullscreenEventState.selection?.remove, 'removeSelectors and replaceSelectors called on the same frame')
  fullscreenEventState.selection ||= Object.create(null)
  fullscreenEventState.selection.replace ||= Object.create(null)
  fullscreenEventState.selection.userTriggered ||= event.userTriggered
  const buffer = event.buffer
  if (buffer) {
    for (let i = 0; i < buffer.length; i += 8) {
      const sessionID = readInt32(buffer, i)
      const localID = readInt32(buffer, i + 4)
      const idString = sessionLocalIDToString({ sessionID, localID })
      fullscreenEventState.selection.replace[idString] = true
    }
  }
}

/**
 * Handles update app model event.
 * (was ed)
 */
function handleUpdateAppModel({
  changes,
  shouldIgnoreUserPrefs,
}: {
  changes: Record<string, any>
  shouldIgnoreUserPrefs?: Record<string, any>
}) {
  if (desktopAPIInstance) {
    let shortcuts
    let actionEnabledState: Record<string, any> = {}
    let actionCheckedState: Record<string, any> = {}
    const actionPrefix = 'actionEnabled__'
    for (let key of Object.keys(changes)) {
      if (key.startsWith(actionPrefix)) {
        actionEnabledState[key.substr(actionPrefix.length)] = changes[key].value
      }
      else {
        const propertyActions = getPropertyActions(key)
        if (propertyActions !== undefined) {
          const value = changes[key].value
          for (let { name, propertyValue } of propertyActions.actions) {
            actionCheckedState[name] = value === propertyValue
          }
        }
      }
    }
    if (changes.keyboardShortcuts) {
      shortcuts = extractOriginalTextMap(changes.keyboardShortcuts.value)
    }
    const hasEnabled = Object.keys(actionEnabledState).length > 0
    const hasChecked = Object.keys(actionCheckedState).length > 0
    const hasShortcuts = shortcuts !== undefined
    if (hasEnabled || hasChecked || hasShortcuts) {
      desktopAPIInstance.updateFullscreenMenuState({
        actionEnabledState: hasEnabled ? actionEnabledState : undefined,
        actionCheckedState: hasChecked ? actionCheckedState : undefined,
        actionShortcuts: shortcuts,
      })
    }
  }
  let appModelChanges: Record<string, any> = Object.create(null)
  let appModelChangesShouldIgnoreUserPrefs: Record<string, any> = Object.create(null)
  for (let key in changes) {
    appModelChanges[key] = changes[key].value
    appModelChangesShouldIgnoreUserPrefs[key] = shouldIgnoreUserPrefs?.[key]
  }
  fullscreenEventState.appModelChanges = {
    ...fullscreenEventState.appModelChanges,
    ...appModelChanges,
  }
  fullscreenEventState.appModelChangesShouldIgnoreUserPrefs = {
    ...fullscreenEventState.appModelChangesShouldIgnoreUserPrefs,
    ...appModelChangesShouldIgnoreUserPrefs,
  }
}

/**
 * Handles selection properties update event.
 * (was ec)
 */
function handleSelectionPropertiesUpdate(event: { buffer?: Uint8Array }) {
  const message = event.buffer && event.buffer.length > 0 ? kiwiParserCodec.decodeMessage(event.buffer) : null
  delete event.buffer
  debug(!fullscreenEventState.selectionProperties, 'Updating selectionProperties multiple times on a frame')
  fullscreenEventState.selectionProperties = {
    message,
    derivedProperties: event,
  }
}

// Export original names for compatibility
export const BH = renameSelectedNodes
export const Br = updateActiveTextReviewPlugin
export const D$ = removeFromSelection
export const Dh = addToSelection
export const G9 = setNodeSymbolPublishable
export const GL = selectNodesInRange
export const Hr = currentSessionLocalIDString
export const Ir = setNodeTemporarilyExpanded
export const NI = getEnabledDevModePropertiesPanelTabs
export const NT = setPropertiesPanelTab
export const T8 = updateSelectionProperties
export const Uc = updateHoveredNode
export const XP = consumeFullscreenEventState
export const Yu = transferSelection
export const aB = updateDevHandoffPreferences
export const aY = getPropertiesPanelTab
export const ax = setSelectedDevModePropertiesPanelTab
export const bd = updateTemporarilyExpandedInstanceLayers
export const bw = updateDevHandoffCodeLanguage
export const dH = setHoveredComponentPropDef
export const dZ = normalizeTrackingEnum
export const gX = updateFullscreenAppModel
export const hq = expandNodeToRoot
export const i = renameNode
export const iT = setNodePublishable
export const kH = duplicateSelection
export const n_ = registerFullscreenEventHandlers
export const pr = setNodeVisible
export const sK = setNodeExpandedRecursive
export const sq = setNodeExpanded
export const tJ = replaceSelection
export const tU = setNodeLocked
export const tw = getSelectedDevModePropertiesPanelTab
export const wr = clearSelection
export const yF = setSelectionExpanded
