import type { NoOpVm } from '../700654'
import { w as _$$w4 } from '../83498'
import { getFeatureFlags } from '../601108'
import { nT as _$$nT } from '../../figma_app/53721'
import { getNodeById, validateImmutableFrame } from './helper'
import { NodeAPI } from './node-api'
import { processFeatureFlagFunctions } from './variable-collection-factory'

/**
 * Base Node API Methods - fundamental node operations available on all node types
 * Includes core functionality like toString, parent access, cloning, and lifecycle management
 */
const baseNodeApiMethods = [NodeAPI.toString, NodeAPI.parent, NodeAPI.clone, NodeAPI.remove, NodeAPI.name, NodeAPI.removed, NodeAPI.pluginData, NodeAPI.pluginRelaunchData, NodeAPI.widgetHoverStyle, NodeAPI.getCSSAsync, NodeAPI.isAsset, NodeAPI.getRelatedLinksAsync, NodeAPI.addRelatedLinkAsync, NodeAPI.editRelatedLinkAsync, NodeAPI.deleteRelatedLinkAsync, NodeAPI.setRelatedLinkPreviewAsync, NodeAPI.getDevResourcesAsync, NodeAPI.addDevResourceAsync, NodeAPI.editDevResourceAsync, NodeAPI.deleteDevResourceAsync, NodeAPI.setDevResourcePreviewAsync, NodeAPI.detachedInfo, NodeAPI.getTopLevelFrame]
/**
 * Stuck Node API Methods - methods for managing node sticky/stuck behavior
 */
const stuckNodeApiMethods = [NodeAPI.stuckTo]
/**
 * Variable Mode API Methods - methods for managing variable modes and consumption
 */
const variableModeApiMethods = [NodeAPI.variableConsumerModes, NodeAPI.explicitVariableModes]
/**
 * Variable Binding API Methods - methods for component properties and variable binding
 */
const variableBindingApiMethods = [NodeAPI.componentPropertyReferences, NodeAPI.variableConsumptionMap, NodeAPI.boundVariables, NodeAPI.setBoundVariable, NodeAPI.resolvedVariableModes, NodeAPI.inferredVariables, NodeAPI.availableInferredVariables, ...variableModeApiMethods]
/**
 * Node State API Methods - methods for managing node visibility, locking, and connections
 */
const nodeStateApiMethods = [NodeAPI.visible, NodeAPI.locked, NodeAPI.stuckNodes, NodeAPI.attachedConnectors]
/**
 * Node Hierarchy API Methods - methods for managing node parent-child relationships
 */
const nodeHierarchyApiMethods = [NodeAPI.children, NodeAPI.findAll, NodeAPI.findOne, NodeAPI.findChild, NodeAPI.findChildren, NodeAPI.appendChild, NodeAPI.findAllWithCriteria, NodeAPI.findWidgetNodesByWidgetId]
/**
 * Page API Methods - methods specific to page node types
 */
const pageApiMethods = [NodeAPI.isHomepage]
/**
 * Opacity and Blend API Methods - methods for managing node opacity and blend modes
 */
const opacityBlendApiMethods = [NodeAPI.opacity, NodeAPI.blendMode]
/**
 * Visual Effects API Methods - methods for managing masks, effects, and styling
 */
const visualEffectsApiMethods = [...opacityBlendApiMethods, NodeAPI.isMask, NodeAPI.maskType, NodeAPI.effects, NodeAPI.effectStyleId]
/**
 * Corner Styling API Methods - methods for managing corner radius and smoothing
 */
const cornerStylingApiMethods = [NodeAPI.cornerRadius, NodeAPI.cornerSmoothing]
/**
 * Fill Styling API Methods - methods for managing node fills and fill styles
 */
const fillStylingApiMethods = [NodeAPI.fills, NodeAPI.fillStyleId]
/**
 * Stroke Styling API Methods - methods for managing node strokes and stroke styles
 */
const strokeStylingApiMethods = [NodeAPI.strokes, NodeAPI.strokeStyleId, NodeAPI.strokeWeight, NodeAPI.strokeAlign, NodeAPI.strokeJoin, NodeAPI.dashPattern]
/**
 * Stroke Weight API Methods - methods for managing individual stroke weights
 */
const strokeWeightApiMethods = [NodeAPI.strokeTopWeight, NodeAPI.strokeBottomWeight, NodeAPI.strokeLeftWeight, NodeAPI.strokeRightWeight]
/**
 * Shape Geometry API Methods - methods for managing shape geometry and fills
 */
const shapeGeometryApiMethods = [...fillStylingApiMethods, ...strokeStylingApiMethods, NodeAPI.strokeCap, NodeAPI.strokeMiterLimit, NodeAPI.outlineStroke, NodeAPI.fillGeometry, NodeAPI.strokeGeometry]
/**
 * Documentation API Methods - methods for managing node documentation and metadata
 */
const documentationApiMethods = [NodeAPI.description, NodeAPI.descriptionMarkdown, NodeAPI.documentationLinks, NodeAPI.remote, NodeAPI.key, NodeAPI.getPublishStatus]
/**
 * Table Management API Methods - methods for managing table node operations
 */
const tableManagementApiMethods = [NodeAPI.tableNumRows, NodeAPI.tableNumColumns, NodeAPI.cellAt, NodeAPI.insertRow, NodeAPI.insertColumn, NodeAPI.removeRow, NodeAPI.removeColumn, NodeAPI.moveRow, NodeAPI.moveColumn, NodeAPI.resizeRow, NodeAPI.resizeColumn]
/**
 * Component Instance API Methods - methods for managing component instances
 */
const componentInstanceApiMethods = [NodeAPI.mainComponent, NodeAPI.scaleFactor]
/**
 * Text Character API Methods - core text manipulation and formatting methods
 */
const textCharacterApiMethods = [NodeAPI.characters, NodeAPI.insertCharacters, NodeAPI.deleteCharacters, NodeAPI.hasMissingFont, NodeAPI.fontSize, NodeAPI.hangingPunctuation, NodeAPI.hangingList, NodeAPI.paragraphIndent, NodeAPI.paragraphSpacing, NodeAPI.listSpacing, NodeAPI.textCase, NodeAPI.textDecoration, NodeAPI.textDecorationStyle, NodeAPI.textDecorationSkipInk, NodeAPI.textDecorationOffset, NodeAPI.textDecorationThickness, NodeAPI.textDecorationColor, NodeAPI.letterSpacing, NodeAPI.lineHeight, NodeAPI.leadingTrim, NodeAPI.fontName, NodeAPI.fontWeight, NodeAPI.openTypeFeatures, NodeAPI.hyperlink, NodeAPI.textRangeFunctions, NodeAPI.canUpgradeToNativeBidiSupport, NodeAPI.useNativeBidiSupport]
/**
 * Full Text Node API Methods - comprehensive text node methods including alignment and resizing
 */
const fullTextNodeApiMethods = [...textCharacterApiMethods, NodeAPI.autoRename, NodeAPI.textAlignHorizontal, NodeAPI.textAlignVertical, NodeAPI.textAutoResize, NodeAPI.textStyleId, NodeAPI.textTruncation, NodeAPI.maxLines]
/**
 * Text Selection API Methods - subset of text methods for selections and styles
 */
const textSelectionApiMethods = [NodeAPI.characters, NodeAPI.insertCharacters, NodeAPI.deleteCharacters, NodeAPI.hasMissingFont, NodeAPI.fontSize, NodeAPI.textCase, NodeAPI.letterSpacing, NodeAPI.fontName, NodeAPI.fontWeight, NodeAPI.openTypeFeatures, NodeAPI.hyperlink, NodeAPI.textRangeFunctions, NodeAPI.autoRename, NodeAPI.textAlignHorizontal, NodeAPI.textAlignVertical, NodeAPI.textStyleId]
/**
 * Polygon Shape API Methods - methods for managing polygon point count
 */
const polygonShapeApiMethods = [NodeAPI.pointCount]
/**
 * Vector Network API Methods - methods for managing vector networks and paths
 */
const vectorNetworkApiMethods = [NodeAPI.vectorNetwork, NodeAPI.vectorPaths, NodeAPI.handleMirroring]
/**
 * Read-Only Vector API Methods - methods for read-only vector network access
 */
const readOnlyVectorApiMethods = [NodeAPI.readOnlyVectorNetwork, NodeAPI.readOnlyVectorPaths, NodeAPI.handleMirroring]
/**
 * Canvas Management API Methods - methods for managing canvas guides, selection, and backgrounds
 */
const canvasManagementApiMethods = [NodeAPI.guides, NodeAPI.selection, NodeAPI.backgrounds]
/**
 * Boolean Shape API Methods - methods for managing boolean operations and expansion
 */
const booleanShapeApiMethods = [NodeAPI.booleanOperation, NodeAPI.expanded]
/**
 * Star Shape API Methods - methods for managing star inner radius
 */
const starShapeApiMethods = [NodeAPI.innerRadius]
/**
 * Arc Data API Methods - methods for managing arc data
 */
const arcDataApiMethods = [NodeAPI.arcData]
/**
 * Corner Radius API Methods - methods for managing individual corner radii
 */
const cornerRadiusApiMethods = [NodeAPI.topLeftRadius, NodeAPI.topRightRadius, NodeAPI.bottomLeftRadius, NodeAPI.bottomRightRadius]
/**
 * Export Node API Methods - methods for managing node export functionality
 */
const exportNodeApiMethods = [NodeAPI.exportSettings, NodeAPI.exportNode]
/**
 * Transform Position API Methods - methods for managing node transforms and positions
 */
const transformPositionApiMethods = [NodeAPI.relativeTransform, NodeAPI.absoluteTransform, NodeAPI.x, NodeAPI.y, NodeAPI.width, NodeAPI.height, NodeAPI.absoluteBoundingBox]
/**
 * Basic Node API Methods - combination of core node methods with positioning and export
 */
const basicNodeApiMethods = [...baseNodeApiMethods, ...nodeStateApiMethods, ...exportNodeApiMethods, ...transformPositionApiMethods]
/**
 * Interactive Reaction API Methods - methods for managing node reactions and interactions
 */
const interactiveReactionApiMethods = [NodeAPI.reactions]
/**
 * Playback Settings API Methods - methods for managing prototype playback settings
 */
const playbackSettingsApiMethods = [NodeAPI.playbackSettings]
/**
 * Annotation API Methods - methods for managing node annotations
 */
const annotationApiMethods = [NodeAPI.annotations]
/**
 * Prototype Start API Methods - methods for managing prototype start nodes
 */
const prototypeStartApiMethods = [NodeAPI.prototypeStartNode]
/**
 * Layout Flex API Methods - methods for managing flex layout properties
 */
const layoutFlexApiMethods = [NodeAPI.paddingLeft, NodeAPI.paddingRight, NodeAPI.paddingTop, NodeAPI.paddingBottom, NodeAPI.primaryAxisAlignItems, NodeAPI.counterAxisAlignItems, NodeAPI.primaryAxisSizingMode, NodeAPI.layoutWrap, NodeAPI.counterAxisSpacing, NodeAPI.counterAxisAlignContent]
/**
 * Grid Layout API Methods - methods for managing grid layout properties
 */
const gridLayoutApiMethods = [NodeAPI.gridRowCount, NodeAPI.gridColumnCount, NodeAPI.gridRowGap, NodeAPI.gridColumnGap, NodeAPI.gridRowSizingCSS, NodeAPI.gridColumnSizingCSS, NodeAPI.gridRowSizes, NodeAPI.gridColumnSizes, NodeAPI.appendChildAt]
/**
 * Grid Child API Methods - methods for managing grid child positioning and alignment
 */
const gridChildApiMethods = [NodeAPI.gridRowSpan, NodeAPI.gridColumnSpan, NodeAPI.gridRowAnchorIndex, NodeAPI.gridColumnAnchorIndex, NodeAPI.gridChildHorizontalAlign, NodeAPI.gridChildVerticalAlign, NodeAPI.setGridChildPosition]
/**
 * Auto Layout Inference API Methods - methods for managing inferred auto layout
 */
const autoLayoutInferenceApiMethods = [NodeAPI.inferredAutoLayout]
/**
 * Link Unfurl API Methods - methods for managing link unfurl data
 */
const linkUnfurlApiMethods = [NodeAPI.linkUnfurlData]
/**
 * Embed Data API Methods - methods for managing embed data
 */
const embedDataApiMethods = [NodeAPI.embedData]
/**
 * Media Data API Methods - methods for managing media data
 */
const mediaDataApiMethods = [NodeAPI.mediaData]
/**
 * Author Data API Methods - methods for managing author information
 */
const authorDataApiMethods = [NodeAPI.getAuthorAsync]
/**
 * Document Color Profile API Methods - methods for managing document color profiles
 */
const documentColorProfileApiMethods = [NodeAPI.documentColorProfile]
/**
 * Focused Slide API Methods - methods for managing focused slide
 */
const focusedSlideApiMethods = [NodeAPI.focusedSlide]
/**
 * Focused Node API Methods - methods for managing focused node
 */
const focusedNodeApiMethods = [NodeAPI.focusedNode]

export function setupPrototypeFromArgs(context, target, ...additionalInputs) {
  const prototype = context.vm.newPrototype(target)
  for (const additionalInput of additionalInputs) {
    additionalInput(context, prototype)
  }
  context.vm.retainHandle(prototype)
  return prototype
}

/**
 * Node Factory Class - responsible for creating and managing different types of node prototypes
 * This class serves as the central factory for all node types in the plugin system
 */
export class NodeFactory {
  cache: Map<any, any>
  incLoadingErrorLogger: any
  sceneGraph: any
  vm: NoOpVm
  fullscreenEditorType: any
  documentNodePrototype: any
  pageNodePrototype: any
  sliceNodePrototype: any
  frameNodePrototype: any
  groupNodePrototype: any
  componentNodePrototype: any
  componentSetNodePrototype: any
  instanceNodePrototype: any
  booleanOperationNodePrototype: any
  vectorNodePrototype: any
  starNodePrototype: any
  lineNodePrototype: any
  ellipseNodePrototype: any
  polygonNodePrototype: any
  rectangleNodePrototype: any
  textNodePrototype: any
  textPathNodePrototype: any
  transformNodePrototype: any
  stickyNodePrototype: any
  highlightNodePrototype: any
  codeBlockNodePrototype: any
  shapeWithTextNodePrototype: any
  connectorNodePrototype: any
  stampNodePrototype: any
  textSublayerNodePrototype: any
  alignableTextSublayerNodePrototype: any
  labelSublayerNodePrototype: any
  widgetNodePrototype: any
  embedPrototype: any
  linkUnfurlPrototype: any
  mediaPrototype: any
  sectionPrototype: any
  washiTapeNodePrototype: any
  tableNodePrototype: any
  tableCellNodePrototype: any
  slideNodePrototype: any
  slideGridNodePrototype: any
  slideRowNodePrototype: any
  flappNodePrototype: any
  moduleNodePrototype: any
  webpageNodePrototype: any
  codeLayerNodePrototype: any
  repeaterNodePrototype: any
  cmsRichTextNodePrototype: any

  constructor(e: NoOpVm, options) {
    this.cache = new Map()
    let context = {
      vm: e,
      getNodeFactory: () => this,
      ...options,
    }
    this.incLoadingErrorLogger = options.incLoadingErrorLogger
    this.sceneGraph = options.sceneGraph
    this.vm = e
    this.fullscreenEditorType = options.editorType
    let aspectRatioActions = [NodeAPI.targetAspectRatio, NodeAPI.lockAspectRatio, NodeAPI.unlockAspectRatio]
    let s = [...transformPositionApiMethods, ...aspectRatioActions, ...gridChildApiMethods, NodeAPI.absoluteRenderBounds, NodeAPI.rotation, NodeAPI.layoutAlign, NodeAPI.resizeWithConstraints, NodeAPI.resizeWithoutConstraints, NodeAPI.rescale, NodeAPI.constrainProportions, NodeAPI.layoutGrow, NodeAPI.layoutPositioning, NodeAPI.minWidth, NodeAPI.minHeight, NodeAPI.maxWidth, NodeAPI.maxHeight, NodeAPI.layoutSizingHorizontal, NodeAPI.layoutSizingVertical]
    let o = [...baseNodeApiMethods, ...nodeStateApiMethods, ...variableBindingApiMethods, ...visualEffectsApiMethods, ...shapeGeometryApiMethods, ...s, ...exportNodeApiMethods]
    let l = [...o, NodeAPI.constraints]
    let d = [...textCharacterApiMethods, ...fillStylingApiMethods]
    let c = [...fillStylingApiMethods, ...cornerStylingApiMethods, ...cornerRadiusApiMethods]
    let u = [...baseNodeApiMethods, ...nodeStateApiMethods, ...variableBindingApiMethods, ...visualEffectsApiMethods, ...s, ...nodeHierarchyApiMethods, ...exportNodeApiMethods, ...shapeGeometryApiMethods, ...cornerStylingApiMethods, ...cornerRadiusApiMethods, ...layoutFlexApiMethods, ...gridLayoutApiMethods, ...strokeWeightApiMethods, ...autoLayoutInferenceApiMethods, ...annotationApiMethods, NodeAPI.layoutGrids, NodeAPI.gridStyleId, NodeAPI.backgrounds, NodeAPI.backgroundStyleId, NodeAPI.clipsContent, NodeAPI.guides, NodeAPI.expanded, NodeAPI.constraints, NodeAPI.layoutMode, NodeAPI.counterAxisSizingMode, NodeAPI.horizontalPadding, NodeAPI.verticalPadding, NodeAPI.itemSpacing, NodeAPI.overflowDirection, NodeAPI.numberOfFixedChildren, NodeAPI.overlayPositionType, NodeAPI.overlayBackground, NodeAPI.overlayBackgroundInteraction, NodeAPI.itemReverseZIndex, NodeAPI.strokesIncludedInLayout, NodeAPI.devStatus]
    let p = [...baseNodeApiMethods, ...nodeHierarchyApiMethods, ...documentColorProfileApiMethods]
    this.documentNodePrototype = setupPrototypeFromArgs(context, 'DocumentNode', ...p)
    this.addTypeToPrototype(this.documentNodePrototype, 'DOCUMENT')
    let loadAsyncApiMethods = [NodeAPI.loadAsync]
    this.pageNodePrototype = setupPrototypeFromArgs(context, 'PageNode', ...baseNodeApiMethods, ...nodeHierarchyApiMethods, ...canvasManagementApiMethods, ...exportNodeApiMethods, ...prototypeStartApiMethods, ...loadAsyncApiMethods, ...variableModeApiMethods, NodeAPI.flowStartingPoints, NodeAPI.prototypeBackgrounds, NodeAPI.pageNodeChanges, NodeAPI.measurements, NodeAPI.isPageDivider, ...(this.inSlides() ? focusedSlideApiMethods : []), ...(getFeatureFlags().buzz_plugins && (this.inSlides() || this.inBuzz()) ? focusedNodeApiMethods : []))
    this.addTypeToPrototype(this.pageNodePrototype, 'PAGE')
    this.sliceNodePrototype = setupPrototypeFromArgs(context, 'SliceNode', ...baseNodeApiMethods, ...nodeStateApiMethods, ...variableBindingApiMethods, ...s, ...exportNodeApiMethods)
    this.addTypeToPrototype(this.sliceNodePrototype, 'SLICE')
    this.frameNodePrototype = setupPrototypeFromArgs(context, 'FrameNode', ...u, ...interactiveReactionApiMethods, ...playbackSettingsApiMethods)
    this.addTypeToPrototype(this.frameNodePrototype, 'FRAME')
    this.groupNodePrototype = setupPrototypeFromArgs(context, 'GroupNode', ...baseNodeApiMethods, ...nodeStateApiMethods, ...variableBindingApiMethods, ...visualEffectsApiMethods, ...s, ...nodeHierarchyApiMethods, ...exportNodeApiMethods, ...interactiveReactionApiMethods, ...autoLayoutInferenceApiMethods, NodeAPI.backgrounds, NodeAPI.backgroundStyleId, NodeAPI.expanded)
    this.addTypeToPrototype(this.groupNodePrototype, 'GROUP')
    this.componentNodePrototype = setupPrototypeFromArgs(context, 'ComponentNode', NodeAPI.createInstance, ...u, ...documentationApiMethods, ...interactiveReactionApiMethods, ...playbackSettingsApiMethods, NodeAPI.instances, NodeAPI.variantProperties, NodeAPI.componentPropertyDefinitions)
    this.addTypeToPrototype(this.componentNodePrototype, 'COMPONENT')
    this.componentSetNodePrototype = setupPrototypeFromArgs(context, 'ComponentSetNode', ...u, ...documentationApiMethods, NodeAPI.defaultVariant, NodeAPI.variantGroupProperties, NodeAPI.componentPropertyDefinitions)
    this.addTypeToPrototype(this.componentSetNodePrototype, 'COMPONENT_SET')
    this.instanceNodePrototype = setupPrototypeFromArgs(context, 'InstanceNode', ...u, ...componentInstanceApiMethods, ...interactiveReactionApiMethods, ...playbackSettingsApiMethods, NodeAPI.swapComponent, NodeAPI.detachInstance, NodeAPI.setProperties, NodeAPI.variantProperties, NodeAPI.componentProperties, NodeAPI.isExposedInstance, NodeAPI.exposedInstances, NodeAPI.overrides, NodeAPI.resetOverrides)
    this.addTypeToPrototype(this.instanceNodePrototype, 'INSTANCE')
    this.booleanOperationNodePrototype = setupPrototypeFromArgs(context, 'BooleanOperationNode', ...o, ...cornerStylingApiMethods, ...nodeHierarchyApiMethods, ...booleanShapeApiMethods, ...interactiveReactionApiMethods)
    this.addTypeToPrototype(this.booleanOperationNodePrototype, 'BOOLEAN_OPERATION')
    this.vectorNodePrototype = setupPrototypeFromArgs(context, 'VectorNode', ...l, ...cornerStylingApiMethods, ...vectorNetworkApiMethods, ...interactiveReactionApiMethods, ...playbackSettingsApiMethods, ...annotationApiMethods)
    this.addTypeToPrototype(this.vectorNodePrototype, 'VECTOR')
    this.starNodePrototype = setupPrototypeFromArgs(context, 'StarNode', ...l, ...cornerStylingApiMethods, ...polygonShapeApiMethods, ...starShapeApiMethods, ...interactiveReactionApiMethods, ...playbackSettingsApiMethods, ...annotationApiMethods)
    this.addTypeToPrototype(this.starNodePrototype, 'STAR')
    this.lineNodePrototype = setupPrototypeFromArgs(context, 'LineNode', ...l.filter((e: any) => !aspectRatioActions.includes(e)), ...interactiveReactionApiMethods, ...playbackSettingsApiMethods, ...annotationApiMethods)
    this.addTypeToPrototype(this.lineNodePrototype, 'LINE')
    this.ellipseNodePrototype = setupPrototypeFromArgs(context, 'EllipseNode', ...l, ...cornerStylingApiMethods, ...arcDataApiMethods, ...interactiveReactionApiMethods, ...playbackSettingsApiMethods, ...annotationApiMethods)
    this.addTypeToPrototype(this.ellipseNodePrototype, 'ELLIPSE')
    this.polygonNodePrototype = setupPrototypeFromArgs(context, 'PolygonNode', ...l, ...cornerStylingApiMethods, ...polygonShapeApiMethods, ...interactiveReactionApiMethods, ...playbackSettingsApiMethods, ...annotationApiMethods)
    this.addTypeToPrototype(this.polygonNodePrototype, 'POLYGON')
    this.rectangleNodePrototype = setupPrototypeFromArgs(context, 'RectangleNode', ...l, ...cornerStylingApiMethods, ...cornerRadiusApiMethods, ...interactiveReactionApiMethods, ...strokeWeightApiMethods, ...playbackSettingsApiMethods, ...annotationApiMethods)
    this.addTypeToPrototype(this.rectangleNodePrototype, 'RECTANGLE')
    this.textNodePrototype = setupPrototypeFromArgs(context, 'TextNode', ...l, ...fullTextNodeApiMethods, ...interactiveReactionApiMethods, ...playbackSettingsApiMethods, ...annotationApiMethods)
    this.addTypeToPrototype(this.textNodePrototype, 'TEXT')
    this.textPathNodePrototype = setupPrototypeFromArgs(context, 'TextPathNode', ...l, ...textSelectionApiMethods, ...cornerStylingApiMethods, ...readOnlyVectorApiMethods, ...interactiveReactionApiMethods, ...playbackSettingsApiMethods, ...annotationApiMethods)
    this.addTypeToPrototype(this.textPathNodePrototype, 'TEXT_PATH')
    this.transformNodePrototype = setupPrototypeFromArgs(context, 'TransformGroupNode', ...baseNodeApiMethods, ...nodeStateApiMethods, ...variableBindingApiMethods, ...visualEffectsApiMethods, ...s, ...nodeHierarchyApiMethods, ...exportNodeApiMethods, ...interactiveReactionApiMethods, NodeAPI.expanded)
    this.addTypeToPrototype(this.transformNodePrototype, 'TRANSFORM_GROUP')
    this.stickyNodePrototype = setupPrototypeFromArgs(context, 'StickyNode', ...basicNodeApiMethods, ...fillStylingApiMethods, ...opacityBlendApiMethods, NodeAPI.textSublayer, NodeAPI.authorVisible, NodeAPI.authorName, NodeAPI.rescale, NodeAPI.isWideWidth)
    this.addTypeToPrototype(this.stickyNodePrototype, 'STICKY')
    this.highlightNodePrototype = setupPrototypeFromArgs(context, 'HighlightNode', ...l, ...cornerStylingApiMethods, ...vectorNetworkApiMethods, ...interactiveReactionApiMethods, ...stuckNodeApiMethods)
    this.addTypeToPrototype(this.highlightNodePrototype, 'HIGHLIGHT')
    this.codeBlockNodePrototype = setupPrototypeFromArgs(context, 'CodeBlockNode', ...basicNodeApiMethods, ...opacityBlendApiMethods, NodeAPI.code, NodeAPI.codeLanguage)
    this.addTypeToPrototype(this.codeBlockNodePrototype, 'CODE_BLOCK')
    this.shapeWithTextNodePrototype = setupPrototypeFromArgs(context, 'ShapeWithTextNode', ...basicNodeApiMethods, ...fillStylingApiMethods, ...strokeStylingApiMethods, ...opacityBlendApiMethods, NodeAPI.shapeWithTextType, NodeAPI.textSublayer, NodeAPI.cornerRadius, NodeAPI.rotation, NodeAPI.rescale, NodeAPI.resizeWithConstraints)
    this.addTypeToPrototype(this.shapeWithTextNodePrototype, 'SHAPE_WITH_TEXT')
    this.connectorNodePrototype = setupPrototypeFromArgs(context, 'ConnectorNode', ...basicNodeApiMethods, ...strokeStylingApiMethods, ...opacityBlendApiMethods, NodeAPI.connectorEndpoints, NodeAPI.textSublayer, NodeAPI.immutableFrameLabel, NodeAPI.connectorLineType, NodeAPI.connectorStrokeCap, NodeAPI.cornerRadius, NodeAPI.rotation)
    this.addTypeToPrototype(this.connectorNodePrototype, 'CONNECTOR')
    this.stampNodePrototype = setupPrototypeFromArgs(context, 'StampNode', ...l, ...interactiveReactionApiMethods, ...stuckNodeApiMethods, ...authorDataApiMethods)
    this.addTypeToPrototype(this.stampNodePrototype, 'STAMP')
    this.textSublayerNodePrototype = setupPrototypeFromArgs(context, 'TextSublayerNode', NodeAPI.toString, ...d)
    this.alignableTextSublayerNodePrototype = setupPrototypeFromArgs(context, 'TextSublayerNode', NodeAPI.toString, NodeAPI.textAlignHorizontal, ...d)
    this.labelSublayerNodePrototype = setupPrototypeFromArgs(context, 'LabelSublayerNode', NodeAPI.toString, ...c)
    this.widgetNodePrototype = setupPrototypeFromArgs(context, 'WidgetNode', ...basicNodeApiMethods, ...stuckNodeApiMethods, ...processFeatureFlagFunctions('widgets_children_trait_for_test', nodeHierarchyApiMethods), NodeAPI.cloneWidget, NodeAPI.widgetId, NodeAPI.widgetSyncedState, NodeAPI.setWidgetSyncedState)
    this.addTypeToPrototype(this.widgetNodePrototype, 'WIDGET')
    this.embedPrototype = setupPrototypeFromArgs(context, 'EmbedNode', ...basicNodeApiMethods, ...embedDataApiMethods)
    this.addTypeToPrototype(this.embedPrototype, 'EMBED')
    this.linkUnfurlPrototype = setupPrototypeFromArgs(context, 'LinkUnfurlNode', ...basicNodeApiMethods, ...linkUnfurlApiMethods)
    this.addTypeToPrototype(this.linkUnfurlPrototype, 'LINK_UNFURL')
    this.mediaPrototype = setupPrototypeFromArgs(context, 'MediaNode', ...basicNodeApiMethods, ...mediaDataApiMethods, NodeAPI.resizeWithConstraints, NodeAPI.resizeWithoutConstraints)
    this.addTypeToPrototype(this.mediaPrototype, 'MEDIA')
    this.sectionPrototype = setupPrototypeFromArgs(context, 'SectionNode', ...basicNodeApiMethods, ...nodeHierarchyApiMethods, ...fillStylingApiMethods, ...variableBindingApiMethods, ...aspectRatioActions, NodeAPI.resizeWithoutConstraints, NodeAPI.sectionContentsHidden, NodeAPI.devStatus)
    this.addTypeToPrototype(this.sectionPrototype, 'SECTION')
    this.washiTapeNodePrototype = setupPrototypeFromArgs(context, 'WashiTapeNode', ...l, ...stuckNodeApiMethods)
    this.addTypeToPrototype(this.washiTapeNodePrototype, 'WASHI_TAPE')
    this.tableNodePrototype = setupPrototypeFromArgs(context, 'TableNode', ...basicNodeApiMethods, ...fillStylingApiMethods, ...visualEffectsApiMethods, ...tableManagementApiMethods, ...nodeHierarchyApiMethods, NodeAPI.strokes, NodeAPI.strokeStyleId)
    this.addTypeToPrototype(this.tableNodePrototype, 'TABLE')
    this.tableCellNodePrototype = setupPrototypeFromArgs(context, 'TableCellNode', ...fillStylingApiMethods, NodeAPI.toString, NodeAPI.parent, NodeAPI.width, NodeAPI.height, NodeAPI.textSublayer, NodeAPI.tableCellRowIndex, NodeAPI.tableCellColumnIndex)
    this.addTypeToPrototype(this.tableCellNodePrototype, 'TABLE_CELL')
    this.slideNodePrototype = setupPrototypeFromArgs(context, 'SlideNode', ...u, NodeAPI.getSlideTransition, NodeAPI.setSlideTransition, NodeAPI.isSkippedSlide)
    this.addTypeToPrototype(this.slideNodePrototype, 'SLIDE')
    this.slideGridNodePrototype = setupPrototypeFromArgs(context, 'SlideGridNode', ...basicNodeApiMethods, ...nodeHierarchyApiMethods)
    this.addTypeToPrototype(this.slideGridNodePrototype, 'SLIDE_GRID')
    this.slideRowNodePrototype = setupPrototypeFromArgs(context, 'SlideRowNode', ...basicNodeApiMethods, ...nodeHierarchyApiMethods)
    this.addTypeToPrototype(this.slideRowNodePrototype, 'SLIDE_ROW')
    this.flappNodePrototype = setupPrototypeFromArgs(context, 'InteractiveSlideElementNode', ...basicNodeApiMethods, NodeAPI.interactiveSlideElementType)
    this.addTypeToPrototype(this.flappNodePrototype, 'INTERACTIVE_SLIDE_ELEMENT')
    this.moduleNodePrototype = setupPrototypeFromArgs(context, 'ModuleNode', ...nodeHierarchyApiMethods)
    this.addTypeToPrototype(this.moduleNodePrototype, 'MODULE')
    this.webpageNodePrototype = setupPrototypeFromArgs(context, 'WebpageNode', ...baseNodeApiMethods, ...nodeStateApiMethods, ...nodeHierarchyApiMethods, ...pageApiMethods)
    this.addTypeToPrototype(this.webpageNodePrototype, 'WEBPAGE')
    this.codeLayerNodePrototype = setupPrototypeFromArgs(context, 'CodeLayerNode', ...basicNodeApiMethods)
    this.addTypeToPrototype(this.codeLayerNodePrototype, 'CODE_INSTANCE')
    this.repeaterNodePrototype = setupPrototypeFromArgs(context, 'RepeaterNode', ...basicNodeApiMethods)
    this.addTypeToPrototype(this.repeaterNodePrototype, 'REPEATER')
    this.cmsRichTextNodePrototype = setupPrototypeFromArgs(context, 'CmsRichTextNode', ...basicNodeApiMethods)
    this.addTypeToPrototype(this.cmsRichTextNodePrototype, 'CMS_RICH_TEXT')
  }

  addTypeToPrototype(e, t) {
    this.vm.defineProp(e, 'type', {
      enumerable: !0,
      writable: !1,
      value: this.vm.newString(t),
    })
  }

  createVMObject(e) {
    let t = this.vm
    switch (e) {
      case 'DOCUMENT':
        return t.newObject(this.documentNodePrototype)
      case 'PAGE':
        return t.newObject(this.pageNodePrototype)
      case 'SLICE':
        return t.newObject(this.sliceNodePrototype)
      case 'FRAME':
      case 'SECTION_OVERLAY':
        return t.newObject(this.frameNodePrototype)
      case 'GROUP':
        return t.newObject(this.groupNodePrototype)
      case 'COMPONENT':
        return t.newObject(this.componentNodePrototype)
      case 'COMPONENT_SET':
        return t.newObject(this.componentSetNodePrototype)
      case 'INSTANCE':
        return t.newObject(this.instanceNodePrototype)
      case 'BOOLEAN_OPERATION':
        return t.newObject(this.booleanOperationNodePrototype)
      case 'VECTOR':
      case 'BRUSH':
        return t.newObject(this.vectorNodePrototype)
      case 'STAR':
        return t.newObject(this.starNodePrototype)
      case 'LINE':
        return t.newObject(this.lineNodePrototype)
      case 'ELLIPSE':
        return t.newObject(this.ellipseNodePrototype)
      case 'POLYGON':
        return t.newObject(this.polygonNodePrototype)
      case 'RECTANGLE':
        return t.newObject(this.rectangleNodePrototype)
      case 'TEXT':
        return t.newObject(this.textNodePrototype)
      case 'STICKY':
        return t.newObject(this.stickyNodePrototype)
      case 'HIGHLIGHT':
        return t.newObject(this.highlightNodePrototype)
      case 'SHAPE_WITH_TEXT':
        return t.newObject(this.shapeWithTextNodePrototype)
      case 'CONNECTOR':
        return t.newObject(this.connectorNodePrototype)
      case 'WIDGET':
        return t.newObject(this.widgetNodePrototype)
      case 'STAMP':
        return t.newObject(this.stampNodePrototype)
      case 'CODE_BLOCK':
        return t.newObject(this.codeBlockNodePrototype)
      case 'LINK_UNFURL':
        return t.newObject(this.linkUnfurlPrototype)
      case 'EMBED':
        return t.newObject(this.embedPrototype)
      case 'MEDIA':
        return t.newObject(this.mediaPrototype)
      case 'SECTION':
        return t.newObject(this.sectionPrototype)
      case 'WASHI_TAPE':
        return t.newObject(this.washiTapeNodePrototype)
      case 'TABLE':
        return t.newObject(this.tableNodePrototype)
      case 'TABLE_CELL':
        return t.newObject(this.tableCellNodePrototype)
      case 'SLIDE':
        return t.newObject(this.slideNodePrototype)
      case 'SLIDE_ROW':
        return t.newObject(this.slideRowNodePrototype)
      case 'SLIDE_GRID':
        return t.newObject(this.slideGridNodePrototype)
      case 'INTERACTIVE_SLIDE_ELEMENT':
        return t.newObject(this.flappNodePrototype)
      case 'MODULE':
        return t.newObject(this.moduleNodePrototype)
      case 'WEBPAGE':
        return t.newObject(this.webpageNodePrototype)
      case 'CODE_INSTANCE':
        return t.newObject(this.codeLayerNodePrototype)
      case 'TEXT_PATH':
        return t.newObject(this.textPathNodePrototype)
      case 'REPEATER':
        return t.newObject(this.repeaterNodePrototype)
      case 'TRANSFORM_GROUP':
        return t.newObject(this.transformNodePrototype)
      case 'CMS_RICH_TEXT':
        return t.newObject(this.cmsRichTextNodePrototype)
      default:
        throw new Error(`unsupported type in createVMObject: ${e}`)
    }
  }

  inSlides() {
    return this.fullscreenEditorType === _$$nT.Slides
  }

  inBuzz() {
    return this.fullscreenEditorType === _$$nT.Cooper
  }

  createSublayerVMObject(e, t) {
    let i = this.vm
    switch (e) {
      case 'TEXT':
        return ['STICKY', 'CONNECTOR'].includes(t) ? i.newObject(this.textSublayerNodePrototype) : i.newObject(this.alignableTextSublayerNodePrototype)
      case 'FRAME':
        return i.newObject(this.labelSublayerNodePrototype)
      case 'TABLE_CELL':
        return i.newObject(this.tableCellNodePrototype)
      default:
        throw new Error(`unsupported type in createSublayerVMObject: ${e}`)
    }
  }

  createNodeWithDevFriendlyId(e, t, i) {
    let n = this.cache.get(e)
    let r = this.sceneGraph.guidFromDeveloperFriendlyId(e)
    getFeatureFlags().ext_inc_loading_logging && this.incLoadingErrorLogger.maybeLogError(r, i)
    if (void 0 !== n) {
      return n
    }
    let a = this.vm
    n = this.createVMObject(t)
    a.defineProp(n, 'id', {
      enumerable: !0,
      writable: !1,
      value: a.newString(e),
    })
    a.shallowFreezeObject(n)
    this.cache.set(e, n)
    a.retainHandle(n)
    return n
  }

  createNode(e, t) {
    let i = this.cache.get(e)
    getFeatureFlags().ext_inc_loading_logging && this.incLoadingErrorLogger.maybeLogError(e, t)
    if (void 0 !== i) {
      return i
    }
    let n = this.vm
    let r = getNodeById(e, this.sceneGraph)
    let a = _$$w4(r)
    if (r.isInImmutableFrame) {
      let e = validateImmutableFrame(r)
      i = this.createSublayerVMObject(a, _$$w4(e))
    }
    else {
      i = this.createVMObject(a)
    }
    let s = this.sceneGraph.developerFriendlyIdFromGuid(e)
    if (!s)
      throw new Error(`Internal Figma error: Unknown id "${s}" in createNode`)
    r.parentNode && _$$w4(r.parentNode) === 'PAGE' && r.parentNode?.isPageDivider && (r.parentNode.isPageDivider = !1)
    n.defineProp(i, 'id', {
      enumerable: !0,
      writable: !1,
      value: n.newString(s),
    })
    n.shallowFreezeObject(i)
    this.cache.set(e, i)
    n.retainHandle(i)
    return i
  }

  nodeIds() {
    return Array.from(this.cache.keys())
  }
}
