import { createErrorAccumulator } from '../905/18160'
import { permissionScopeHandler } from '../905/189185'
import { widgetErrorTracker } from '../905/250412'
import { TEXT_STYLE_KEYS } from '../905/285398'
import { deepEqual } from '../905/382883'
import { trackEventAnalytics } from '../905/449184'
import { handleConstraints, handleElementSizing, isFrameType, processChildren } from '../905/757052'
import { getSceneGraphInstance } from '../905/830071'
import { InternalError } from '../905/845428'
import { getFullscreenViewEditorType } from '../figma_app/300692'
import { assert, throwTypeError } from '../figma_app/465776'
import { JSXRendererBindings, TrackType } from '../figma_app/763686'

// Refactor notes:
// - Introduced named helpers and types to improve clarity and maintainability.
// - Preserved original function and variable names as comments for traceability.
// - Added JSDoc-style documentation.
// - Split complex logic into smaller helpers and reduced nesting with guard clauses.
// - Kept original exports ($$v0, $$I1, Lb, _b) for compatibility and added clearer aliases.
// - Replaced anonymous class with a named singleton (ComponentUsageTracker).

type VNode = any // TODO: Replace with actual VNode type
type SceneNodeAdapter = any // TODO: Replace with actual SceneNodeAdapter type
type RuntimeAdapter = any // TODO: Replace with actual RuntimeAdapter type
interface ImageInfo { hash: string, width: number, height: number }
type ImgInfoMap = Map<string, ImageInfo>

interface ReconcileWidgetParams {
  widgetNodeID: string
  newVRoot: VNode
  oldVRoot: VNode | null
  propertyMenuDefinition: Array<{ itemType: string } & Record<string, any>>
  runtime: RuntimeAdapter
  imgInfoMap: ImgInfoMap
  stickableState?: {
    isStickable?: boolean
    attachedStickablesChangedHandle?: boolean
    stuckStatusChangedHandle?: boolean
  }
  shouldHideCursors?: boolean
}

interface RenderUnderParentParams {
  imgInfoMap: ImgInfoMap
  runtime: RuntimeAdapter
  parentId: string
  vNode: VNode
  oldVNode?: VNode | null
  currentNodeId?: string
  editScopeLabel?: string
}

interface ReconcileNodeParams {
  widgetNodeID: string
  oldVNode: VNode | null
  newVNode: VNode | null
  figmaNode: SceneNodeAdapter | null
  figmaParent: SceneNodeAdapter
  indexInParent: number
  dataURIToImgInfo: ImgInfoMap
  newParentDirection: string
  oldParentDirection: string
  runtime: RuntimeAdapter
  forceReconcileProps: string[]
  tracking: TrackType
  isRootNode?: boolean
  inputNodes: Set<string>
  textNodes: Set<string>
  vNodeParentType?: string
}

/** Named replacement for anonymous usage tracker class (original variable: c) */
class ComponentUsageTracker {
  _pluginID: string | null = null
  _componentCounts: Record<string, number> = {}

  startReconciliation(pluginId: string) {
    this._pluginID = pluginId
  }

  getCount(component: string): number {
    return this._componentCounts[component] || 0
  }

  incrementComponent(component: string) {
    this._componentCounts[component] = this.getCount(component) + 1
  }

  logAndClear() {
    const payload = {
      pluginID: this._pluginID,
      ...this._componentCounts,
    }
    trackEventAnalytics('Widget Component Usage', payload)
    this.clear()
  }

  clear() {
    this._componentCounts = {}
  }
}

// Singleton instance (original variable name: c)
const componentUsageTracker = new ComponentUsageTracker()

/** Iterate text style props (original function: f) */
function forEachTextStyleProp(style: any, cb: (key: string, value: any) => void) {
  for (const key of TEXT_STYLE_KEYS) {
    if (Object.prototype.hasOwnProperty.call(style, key)) {
      cb(key, style[key])
    }
  }
}

/** Props that are applied in primary phase (original variable: _ and A) */
const PRIMARY_PROP_ORDER = ['layoutMode', 'wrap', 'componentId', 'componentProps', 'nestedInstancesVisibility'] as const
const PRIMARY_PROP_SET = new Set(PRIMARY_PROP_ORDER)

/** Sizing limit props (original variable: y and b) */
const LIMIT_SIZING_PROPS = ['minWidth', 'minHeight', 'maxWidth', 'maxHeight'] as const
const LIMIT_SIZING_PROP_SET = new Set(LIMIT_SIZING_PROPS)

/** Compute widget events required by a VNode (original function: x) */
function getWidgetEvents(newVNode: VNode): string[] {
  const events: string[] = []
  if (newVNode.renderMetaData.onClick)
    events.push('CLICK')
  if (newVNode.renderMetaData.onTextEditEnd)
    events.push('TEXT_EDIT_END')
  return events
}

/** Adjust nodes after creation (original function: E) */
function adjustCreatedNodes({
  inputNodes,
  textNodes,
}: {
  inputNodes: Set<string>
  textNodes: Set<string>
}) {
  for (const id of inputNodes) {
    permissionScopeHandler.plugin('adjust-widget-input-node', () => {
      JSXRendererBindings.adjustWidgetInputNodeAfterCreation(id)
    })
  }
  for (const id of textNodes) {
    permissionScopeHandler.plugin('adjust-widget-text-node', () => {
      JSXRendererBindings.adjustTextNodeAfterCreation(id)
    })
  }
}

/** Validate scene divergence and build error message */
function buildSceneDivergenceError(
  divergence:
    | null
    | {
      type: 'more_than_one_root' | 'no_root' | 'node_type_mismatch' | 'node_font_mismatch' | 'child_count_mismatch'
      nodeID?: string
      expectedType?: string
      actualType?: string
      expectedFont?: any
      actualFont?: any
    },
): string | null {
  if (!divergence)
    return null
  switch (divergence.type) {
    case 'more_than_one_root':
      return 'Widget on canvas has more children at the root than expected'
    case 'no_root':
      return 'Widget on canvas is missing a child at the root'
    case 'node_type_mismatch':
      return `Child of a widget node doesn't match the expected type from render. Expected ${divergence.expectedType} but got ${divergence.actualType}. Node ID: ${divergence.nodeID}`
    case 'node_font_mismatch':
      return `Child of a widget node doesn't match the expected font from render. Expected ${JSON.stringify(divergence.expectedFont)} but got ${JSON.stringify(divergence.actualFont)}. Node ID: ${divergence.nodeID}`
    case 'child_count_mismatch':
      return `Widget sub-node has different number of children than expected. Node ID: ${divergence.nodeID}`
    default:
      throwTypeError(divergence)
  }
}

/** Determine image fill info and set renderMetaData defaults (original function: w) */
function applyImageDefaults(vNode: VNode, info?: ImageInfo) {
  if (info) {
    const { width, height } = info
    vNode.renderMetaData.width = vNode.renderMetaData.width ?? width
    vNode.renderMetaData.height = vNode.renderMetaData.height ?? height
    return
  }
  if (vNode.renderMetaData.width && vNode.renderMetaData.height) {
    // keep as-is
    // vNode.renderMetaData.width = vNode.renderMetaData.width
    // vNode.renderMetaData.height = vNode.renderMetaData.height
    return
  }
  vNode.props.visible = false
}

/** Compute props that must be force-reconciled for a node (original function: C) */
function computeForceReconcileProps(node: VNode, parent: VNode | null): string[] {
  if (node.type === 'inputframe' || parent?.type === 'inputframe')
    return ['characters', 'visible']
  if (node.type === 'instance')
    return ['nestedInstancesVisibility']
  return []
}

/** Decide if inputframe is being edited by someone else; if so, skip reconciliation for this node */
function isInputFrameBeingEdited(newVNode: VNode, figmaNode: SceneNodeAdapter, runtime: RuntimeAdapter): boolean {
  if (newVNode.type !== 'inputframe')
    return false
  const children = figmaNode.children
  if (!children || children.length < 2)
    return false
  const textChild = children[1]
  return runtime.getMultiplayerSelection().has(textChild.getID())
}

/** Sync events prop on figma node based on vnode */
function reconcileWidgetEvents(figmaNode: SceneNodeAdapter, oldVNode: VNode | null, newVNode: VNode) {
  const prev = oldVNode ? getWidgetEvents(oldVNode) : []
  const next = getWidgetEvents(newVNode)
  if (!deepEqual(prev, next)) {
    figmaNode.writeProperty('widgetEvents', next)
  }
}

/** Handle fillSrc and image hash mapping and updates */
function reconcileImageFill({
  figmaNode,
  newVNode,
  oldVNode,
  imageInfoMap,
}: {
  figmaNode: SceneNodeAdapter
  newVNode: VNode
  oldVNode: VNode | null
  imageInfoMap: ImgInfoMap
}) {
  const prevFillSrc = oldVNode?.renderMetaData.fillSrc
  const nextFillSrc = newVNode.renderMetaData.fillSrc

  if (prevFillSrc)
    applyImageDefaults(oldVNode, imageInfoMap.get(prevFillSrc))
  if (nextFillSrc)
    applyImageDefaults(newVNode, imageInfoMap.get(nextFillSrc))

  if (!nextFillSrc)
    return

  const info = imageInfoMap.get(nextFillSrc)
  if (info) {
    newVNode.props.fills[0].imageHash = info.hash
  }
  else {
    newVNode.props.fills = [
      {
        type: 'SOLID',
        color: { r: 1, g: 1, b: 1 },
      },
    ]
  }

  if (oldVNode && prevFillSrc === nextFillSrc) {
    if (info && figmaNode.getImageFillHashOrNull() === info.hash) {
      oldVNode.props.fills[0].imageHash = info.hash
    }
    else {
      oldVNode.props.fills = [
        {
          type: 'SOLID',
          color: { r: 1, g: 1, b: 1 },
        },
      ]
    }
  }
}

/** Write text style changes (original inline block inside S) */
function reconcileTextStyles({
  sceneNode,
  oldVNode,
  newVNode,
  errorGuard,
  shouldForceReconcile,
}: {
  sceneNode: SceneNodeAdapter
  oldVNode: VNode | null
  newVNode: VNode
  errorGuard: ReturnType<typeof createErrorAccumulator>
  shouldForceReconcile: boolean
}) {
  const prevStyle = oldVNode?.renderMetaData.textStyle
  const nextStyle = newVNode.renderMetaData.textStyle

  if (!nextStyle)
    return
  if (deepEqual(prevStyle, nextStyle) && !shouldForceReconcile)
    return

  forEachTextStyleProp(nextStyle.style, (key, value) => {
    errorGuard.guard(() => {
      sceneNode.writeProperty(key, value)
    })
  })

  if (nextStyle.characters != null) {
    errorGuard.guard(() => {
      sceneNode.writeProperty('characters', nextStyle.characters)
    })
  }

  for (const range of nextStyle.ranges) {
    const { start, end, style } = range
    forEachTextStyleProp(style, (key, value) => {
      errorGuard.guard(() => {
        sceneNode.writeTextRange(key, value, start, end)
      })
    })
  }
}

/** Validate and track render errors (original inline function inside S) */
function validateAndTrackErrors(errors: Error[], widgetNodeID: string) {
  if (errors.length === 0)
    return
  const scene = getSceneGraphInstance().get(widgetNodeID)
  if (!scene)
    return
  const isLocalWidget = !scene.widgetVersionId
  if (isLocalWidget && errors.length !== 0) {
    const bullet = '\n\n * '
    throw new InternalError(`Got the following errors when rendering the widget: ${bullet}${errors.join(bullet)}`)
  }
  widgetErrorTracker.trackValidationErrors(errors, {
    isLocalWidget,
    widgetNodeID,
    pluginID: scene.widgetId,
    widgetVersionID: scene.widgetVersionId,
    widgetName: scene.name,
  })
}

/** Create figma node for the new vnode */
function createFigmaNode(runtime: RuntimeAdapter, parent: SceneNodeAdapter, index: number, newVNode: VNode, widgetNodeID: string, tracking: TrackType, isRootNode: boolean | undefined): SceneNodeAdapter {
  const created = runtime.createPluginNode(newVNode, widgetNodeID, tracking ?? TrackType.TRACK, !!isRootNode)
  parent.insertChild(index, created.id)
  return runtime.getSceneNodeAdapter(created.id)
}

/** Compare vnode root compatibility to current scene (formerly inline validation producing f) */
function computeSceneDivergence(
  oldVRoot: VNode | null,
  sceneNode: SceneNodeAdapter,
  runtime: RuntimeAdapter,
): null | any {
  if (!oldVRoot)
    return null
  const rootScene = runtime.getSceneNodeAdapter(sceneNode.guid)
  const firstChild = rootScene.children[0]
  if (rootScene.children.length > 1) {
    return { type: 'more_than_one_root' as const }
  }
  if (!firstChild && oldVRoot.rootNode) {
    return { type: 'no_root' as const }
  }

  function typesCompatible(widgetType: string, sceneType?: string | null): boolean {
    if (!sceneType)
      return false
    switch (widgetType) {
      case 'span':
      case 'fragment':
        return false
      case 'frame':
      case 'autolayout':
      case 'svg':
      case 'inputframe':
        return sceneType === 'FRAME'
      case 'line':
        return sceneType === 'LINE'
      case 'input':
      case 'text':
        return sceneType === 'TEXT'
      case 'rectangle':
        return sceneType === 'RECTANGLE' || sceneType === 'ROUNDED_RECTANGLE'
      case 'ellipse':
        return sceneType === 'ELLIPSE'
      case 'instance':
        return sceneType === 'INSTANCE'
      default:
        throwTypeError(widgetType)
    }
  }

  function walk(scene: SceneNodeAdapter, vnode: VNode): null | any {
    assert(!!vnode)
    const sceneType = scene.getType()
    if (!typesCompatible(vnode.type, sceneType)) {
      return {
        type: 'node_type_mismatch' as const,
        nodeID: scene.getID(),
        expectedType: vnode.type,
        actualType: sceneType ?? '',
      }
    }

    if (vnode.type === 'text') {
      const actualFont = scene.getFontName()
      const expectedFont = (() => {
        const ts = vnode.renderMetaData.textStyle
        if (!ts)
          return null
        const fallback = ts.style.fontName ?? null
        if (ts.ranges.length === 1) {
          const r = ts.ranges[0]
          if (r.start === 0 && r.end === ts.characters.length) {
            return r.style.fontName ?? fallback
          }
        }
        return fallback
      })()
      if (expectedFont && (expectedFont.family !== actualFont.family || expectedFont.style !== actualFont.style)) {
        return {
          type: 'node_font_mismatch' as const,
          nodeID: scene.getID(),
          expectedFont,
          actualFont,
        }
      }
    }

    if (vnode.type === 'frame' || vnode.type === 'autolayout') {
      const expectedChildren = processChildren(vnode.renderMetaData.children ?? [], runtime).filter(Boolean)
      const actualChildren = scene.children
      if (expectedChildren.length !== actualChildren.length) {
        return {
          type: 'child_count_mismatch' as const,
          nodeID: scene.getID(),
        }
      }
      for (let i = 0; i < expectedChildren.length; i++) {
        const res = walk(actualChildren[i], expectedChildren[i])
        if (res)
          return res
      }
    }
    return null
  }

  return walk(rootScene, oldVRoot.rootNode)
}

/** Main recursive reconciler (original function: S) */
function reconcileNode(params: ReconcileNodeParams): SceneNodeAdapter | null {
  let {
    widgetNodeID,
    oldVNode,
    newVNode,
    figmaNode: maybeNode,
    figmaParent,
    indexInParent,
    dataURIToImgInfo,
    newParentDirection,
    oldParentDirection,
    runtime,
    forceReconcileProps,
    tracking,
    isRootNode,
    inputNodes,
    textNodes,
  } = params

  let figmaNode = maybeNode

  const ensureNode = (): SceneNodeAdapter => {
    const node = createFigmaNode(runtime, figmaParent, indexInParent, newVNode!, widgetNodeID, tracking, isRootNode)
    return node
  }

  // Guard cases
  if (!oldVNode && !newVNode)
    return null
  if (!oldVNode && figmaNode) {
    figmaNode.remove()
    figmaNode = null
  }
  if (oldVNode && !newVNode) {
    figmaNode?.remove()
    return null
  }

  if (!oldVNode && newVNode) {
    figmaNode = ensureNode()
  }

  // When type/key/direction mismatch -> recreate node
  if (
    newVNode
    && oldVNode
    && (oldVNode.type !== newVNode.type
      || oldVNode?.renderMetaData.key !== newVNode.renderMetaData.key
      || (isFrameType(newVNode) && newVNode.renderMetaData.direction !== oldVNode.renderMetaData.direction))
  ) {
    oldVNode = null
    figmaNode?.remove()
    figmaNode = ensureNode()
  }

  if (!figmaNode)
    figmaNode = ensureNode()

  // Skip reconciliation for inputframe being edited
  if (newVNode && isInputFrameBeingEdited(newVNode, figmaNode, runtime)) {
    return null
  }

  // Track component usage
  componentUsageTracker.incrementComponent(newVNode!.type)

  // Special case: SVG src changed -> recreate node
  if (newVNode!.renderMetaData.src !== oldVNode?.renderMetaData.src && newVNode!.type === 'svg' && oldVNode?.type === 'svg') {
    oldVNode = null
    figmaNode.remove()
    figmaNode = ensureNode()
  }

  // Events
  reconcileWidgetEvents(figmaNode, oldVNode ?? null, newVNode!)

  // Images and fills
  reconcileImageFill({
    figmaNode,
    newVNode: newVNode!,
    oldVNode: oldVNode ?? null,
    imageInfoMap: dataURIToImgInfo,
  })

  // Property writes guarded by error accumulator
  const errorAccumulator = createErrorAccumulator()
  const guardedWrite = (key: string, value: any) => {
    errorAccumulator.guard(() => {
      figmaNode!.writeProperty(key, value)
    })
  }

  const writePropIfChanged = (key: string) => {
    const next = newVNode!.props[key]
    const prev = oldVNode ? oldVNode.props?.[key] : undefined
    if (forceReconcileProps.includes(key) || !deepEqual(prev, next)) {
      guardedWrite(key, next)
    }
  }

  // Text styles
  reconcileTextStyles({
    sceneNode: figmaNode,
    oldVNode: oldVNode ?? null,
    newVNode: newVNode!,
    errorGuard: errorAccumulator,
    shouldForceReconcile: forceReconcileProps.includes('characters'),
  })

  // Primary prop phase
  for (let i = 0; i < PRIMARY_PROP_ORDER.length; i++) {
    const prop = PRIMARY_PROP_ORDER[i]
    if (prop in newVNode!.props) {
      writePropIfChanged(prop)
    }
  }

  // Remaining props (skip primary and sizing-limit props)
  for (const key in newVNode!.props) {
    if (PRIMARY_PROP_SET.has(key as any) || LIMIT_SIZING_PROP_SET.has(key as any))
      continue
    writePropIfChanged(key)
  }

  // Validate and track any rendering errors
  validateAndTrackErrors(errorAccumulator.errors, widgetNodeID)

  // Size and constraints
  if (
    newVNode!.renderMetaData.width !== oldVNode?.renderMetaData.width
    || newVNode!.renderMetaData.height !== oldVNode?.renderMetaData.height
    || newParentDirection !== oldParentDirection
    || newVNode!.renderMetaData.direction !== oldVNode?.renderMetaData.direction
  ) {
    handleElementSizing(newVNode!, figmaNode, newParentDirection)
  }

  ; (['x', 'y'] as const).forEach((axis) => {
    const next = newVNode!.renderMetaData?.[axis]
    const prev = oldVNode ? oldVNode.renderMetaData?.[axis] : undefined
    if (!deepEqual(prev, next)) {
      guardedWrite(axis, next)
    }
  })

  if (!deepEqual(newVNode!.renderMetaData.constraints, oldVNode?.renderMetaData.constraints)) {
    handleConstraints(newVNode!, figmaNode, figmaParent, true)
  }

  LIMIT_SIZING_PROPS.forEach((prop) => {
    if (!deepEqual(newVNode!.props[prop], oldVNode ? oldVNode.props[prop] : undefined)) {
      guardedWrite(prop, newVNode!.props[prop])
    }
  })

  if (newVNode!.type === 'text') {
    textNodes.add(figmaNode.getID())
  }

  // No children -> return
  if (!newVNode!.renderMetaData.children) {
    return figmaNode
  }

  // Children reconciliation
  const prevChildren = oldVNode?.renderMetaData?.children ? processChildren(oldVNode?.renderMetaData?.children) : []
  const nextChildren = processChildren(newVNode?.renderMetaData?.children, runtime)
  const actualChildren = figmaNode.children

  for (let i = 0; i < nextChildren.length; i++) {
    const child = nextChildren[i]
    reconcileNode({
      widgetNodeID,
      newVNode: child,
      oldVNode: prevChildren[i],
      figmaNode: actualChildren[i],
      indexInParent: i,
      dataURIToImgInfo,
      newParentDirection: newVNode!.props.layoutMode ?? newParentDirection,
      oldParentDirection: oldVNode?.props?.layoutMode ?? oldParentDirection,
      figmaParent: figmaNode,
      runtime,
      forceReconcileProps: child ? computeForceReconcileProps(child, newVNode!) : [],
      vNodeParentType: newVNode!.type,
      tracking,
      inputNodes,
      textNodes,
    })
  }

  if (newVNode!.type === 'inputframe') {
    inputNodes.add(figmaNode.getID())
  }

  // Remove extra figma children
  if (actualChildren.length > nextChildren.length) {
    let removeCount = actualChildren.length - nextChildren.length
    while (removeCount > 0) {
      figmaNode.children[figmaNode.children.length - 1].remove()
      removeCount--
    }
  }

  return figmaNode
}

/** Public API: reconcile whole widget tree (original export: $$v0) */
export function reconcileWidgetTree({
  widgetNodeID,
  newVRoot,
  oldVRoot,
  propertyMenuDefinition,
  runtime,
  imgInfoMap,
  stickableState,
  shouldHideCursors,
}: ReconcileWidgetParams) {
  const scene = getSceneGraphInstance().get(widgetNodeID)
  if (!scene)
    return

  // Detect divergence between scene and old virtual root
  const divergence = computeSceneDivergence(oldVRoot, runtime.getSceneNodeAdapter(scene.guid), runtime)
  if (divergence) {
    oldVRoot = null
    const baseMsg
      = getFullscreenViewEditorType() === 'figma'
        ? 'This is either because you have manually edited widget sublayers in Figma, or because of a bug in the widget. If the latter, your render function is likely non-deterministic. '
        : 'This is likely a bug in the widget. Your render function is likely non-deterministic.'
    const details = buildSceneDivergenceError(divergence)!
    const error = new InternalError(`Scene has diverged from the expected state. ${baseMsg}Here is more info: \n\n${details}`)
    const isLocalWidget = !scene.widgetVersionId
    console.warn(error)
    widgetErrorTracker.trackSceneDivergenceError(error, {
      isLocalWidget,
      widgetNodeID,
      pluginID: scene.widgetId,
      widgetVersionID: scene.widgetVersionId,
      widgetName: scene.name,
    })
  }

  // Cleanup children if we reset to null
  if (!oldVRoot) {
    while (scene.reversedChildrenGuids.length) {
      const child = getSceneGraphInstance().get(scene.reversedChildrenGuids[0])
      child?.removeSelfAndChildren()
    }
  }

  const firstChildAdapter = scene.reversedChildrenGuids[0] ? runtime.getSceneNodeAdapter(scene.reversedChildrenGuids[0]) : null

  componentUsageTracker.startReconciliation(scene.widgetId)

  const inputNodes = new Set<string>()
  const textNodes = new Set<string>()

  reconcileNode({
    widgetNodeID,
    oldVNode: oldVRoot?.rootNode,
    newVNode: newVRoot.rootNode,
    indexInParent: 0,
    dataURIToImgInfo: imgInfoMap,
    newParentDirection: 'NONE',
    oldParentDirection: 'NONE',
    figmaParent: runtime.getSceneNodeAdapter(scene.guid),
    figmaNode: firstChildAdapter,
    runtime,
    forceReconcileProps: computeForceReconcileProps(newVRoot.rootNode, null),
    tracking: scene.tracking,
    isRootNode: true,
    inputNodes,
    textNodes,
  })

  if (scene.stackMode === 'NONE') {
    scene.stackMode = 'VERTICAL'
    scene.stackPrimarySizing = 'RESIZE_TO_FIT_WITH_IMPLICIT_SIZE'
    scene.stackCounterSizing = 'RESIZE_TO_FIT_WITH_IMPLICIT_SIZE'
  }

  adjustCreatedNodes({ inputNodes, textNodes })

  scene.setWidgetPropertyMenuItems(
    propertyMenuDefinition.map(item => ({
      ...item,
      itemType: item.itemType.toUpperCase().replace('-', '_'),
    })),
  )

  componentUsageTracker.logAndClear()

  scene.isForcedStickable = stickableState?.isStickable ?? false
  scene.shouldHideCursorsOnWidgetHover = shouldHideCursors ?? false

  const widgetEvents: string[] = []
  if (stickableState?.attachedStickablesChangedHandle)
    widgetEvents.push('ATTACHED_STICKABLES_CHANGED')
  if (stickableState?.stuckStatusChangedHandle)
    widgetEvents.push('STUCK_STATUS_CHANGED')
  scene.widgetEvents = widgetEvents
}

/** Public API: render a vnode under arbitrary parent (original export: $$I1) */
export function renderVNodeUnderParent({
  imgInfoMap,
  runtime,
  parentId,
  vNode,
  oldVNode,
  currentNodeId,
  editScopeLabel,
}: RenderUnderParentParams) {
  const inputNodes = new Set<string>()
  const textNodes = new Set<string>()
  const parent = runtime.getSceneNodeAdapter(parentId)
  const currentNode = currentNodeId ? runtime.getSceneNodeAdapter(currentNodeId) : null

  const result = permissionScopeHandler.plugin(editScopeLabel ?? 'widget-render', () =>
    reconcileNode({
      widgetNodeID: '',
      oldVNode: oldVNode ?? null,
      newVNode: vNode,
      indexInParent: parent.children.length,
      dataURIToImgInfo: imgInfoMap,
      newParentDirection: 'NONE',
      oldParentDirection: 'NONE',
      figmaParent: parent,
      figmaNode: currentNode,
      runtime,
      forceReconcileProps: [],
      tracking: TrackType.TRACK,
      inputNodes,
      textNodes,
    }))

  adjustCreatedNodes({ inputNodes, textNodes })
  return result
}

// Maintain original exports while providing clearer aliases
// Original: export function $$v0
export function $$v0(params: ReconcileWidgetParams) {
  return reconcileWidgetTree(params)
}
// Original: export function $$I1
export function $$I1(params: RenderUnderParentParams) {
  return renderVNodeUnderParent(params)
}

// Keep original re-exports (original bottom exports)
export const Lb = reconcileWidgetTree
export const _b = renderVNodeUnderParent
