import { v as isValidVariableCollection } from '../905/219968'
// Imports grouped and renamed for clarity and maintainability
import { kiwiParserCodec } from '../905/294864'
import { hasStyleType } from '../905/311324'
import { isVariableNode } from '../905/383429'
import { SceneNode } from '../905/499575'
import { sceneDocumentType } from '../905/582379'
import { o as runWithResolve } from '../905/757420'
import { parseInteger } from '../905/833686'
import { defaultSessionLocalIDString } from '../905/871411'
import { documentStateTsApi } from '../905/880730'
import { resolveVariableValue } from '../905/929949'
import { Q as ChangeListenerQueue, P as ChangeListeners } from '../905/931498'
import { glU as DetachedComponentsManager, XJn as FirstDraftManager, fHP as GroupTypeEnum, mHF as LinterManager, NfO as NodeGroupManager, CUU as SceneActions, Pt4 as StyleKeyManager, Egt as SymbolUpdater, CWU as VariableManager } from '../figma_app/13528'
import { PWo as AssetTypeEnum, iZB as ConstraintsFacetTsApiGenerated, Sie as NodeContextEnum, UNF as NodeTsApi, Fk7 as NodeTsApiGenerated, $DY as PrototypingFacetTsApiGenerated, ppO as RenderableBaseFacetTsApiGenerated, mSn as SceneGraphTsApi, juq as SceneTypeEnum, vNG as SceneUpdater, KtY as StackFacetTsApiGenerated, HzA as TrackingEnum } from '../figma_app/175377'
import { VariableIdHandler, VariableSetIdCompatHandler } from '../figma_app/243058'
import { debug, throwTypeError } from '../figma_app/465776'

/** @type {number} Index for history document. */
export let HISTORY_DOCUMENT_INDEX = 1

/** Error thrown when SceneGraph APIs are unavailable. */
// SceneGraphUnavailableError
export class SceneGraphUnavailableError extends Error { }

/** Error thrown when NodeTsApi is unavailable. */
// NodeTsApiUnavailableError
export class NodeTsApiUnavailableError extends Error { }

/**
 * Returns all required API objects, or throws if unavailable.
 * @throws {SceneGraphUnavailableError|NodeTsApiUnavailableError}
 */
// getApis
function getApis() {
  if (!NodeTsApi || !NodeTsApiGenerated || !StackFacetTsApiGenerated || !PrototypingFacetTsApiGenerated || !RenderableBaseFacetTsApiGenerated || !ConstraintsFacetTsApiGenerated) {
    throw new SceneGraphUnavailableError()
  }
  if (!SceneGraphTsApi)
    throw new NodeTsApiUnavailableError()
  return {
    NodeTsApi,
    NodeTsApiGenerated,
    SceneGraphTsApi,
    StackFacetTsApiGenerated,
    PrototypingFacetTsApiGenerated,
    RenderableBaseFacetTsApiGenerated,
    ConstraintsFacetTsApiGenerated,
  }
}

/**
 * Main class for interacting with the TypeScript Scene Graph.
 */
// TSSceneGraph
export class TSSceneGraph {
  sceneType: any
  private _nodeContext: any
  changeListeners: any
  deleteListeners: any
  /** @private */

  /** Returns the current node context. */
  get nodeContext() {
    return this._nodeContext
  }

  /** Returns the current scene object. */
  get scene() {
    if (this.sceneType === sceneDocumentType)
      return documentStateTsApi.getActiveDocument()
    debug(typeof this.sceneType !== 'symbol', 'this.sceneType cannot be Symbol')
    switch (this.sceneType) {
      case SceneTypeEnum.DETACHED_COMPONENTS:
        return DetachedComponentsManager.getDetachedComponentsScene()
      case SceneTypeEnum.LIVE_FILE:
        return documentStateTsApi.getDocumentByIndex(0)
      case SceneTypeEnum.HISTORY:
        return documentStateTsApi.getDocumentByIndex(HISTORY_DOCUMENT_INDEX)
      case SceneTypeEnum.PLAYGROUND:
        return DetachedComponentsManager.getPlaygroundScene()
      case SceneTypeEnum.FIRST_DRAFT:
        return FirstDraftManager.getOrCreateFDScene()
      case SceneTypeEnum.LINTER:
        return LinterManager.getOrCreateLinterScene()
      case SceneTypeEnum.AUTO_SUGGEST:
        throw new Error('Auto suggest scene should be retrieved via TSAutoSuggestSceneGraph')
      default:
        throwTypeError(this.sceneType)
    }
  }

  /** Returns true if the scene is valid. */
  get isValidScene() {
    return this.scene !== -1
  }

  /** Alias for isValidScene. */
  hasValidScene() {
    return this.isValidScene
  }

  /**
   * Returns nodes for the given array of IDs.
   * @param ids - Array of node IDs.
   */
  getNodes(ids) {
    return ids.map(id => this.get(id)).filter(node => node != null)
  }

  /**
   * Gets a node from a stable path.
   * @param path - The stable path.
   */
  getFromStablePath(path) {
    const unstable = NodeTsApi?.setGlobalUnstableNodeByStablePath(this.scene, path, this.nodeContext)
    return NodeTsApi?.exists(this.nodeContext) && unstable ? this.getInternal(unstable, false) : null
  }

  /**
   * Gets a node from a developer-friendly ID.
   * @param id - The developer-friendly ID.
   */
  getFromDeveloperFriendlyId(id) {
    const unstable = NodeTsApi?.setGlobalUnstableNodeByDeveloperFriendlyId(this.scene, id)
    return NodeTsApi?.exists(this.nodeContext) && unstable ? this.getInternal(unstable, false) : null
  }

  /** Gets the current page node. */
  getCurrentPage() {
    const guid = SceneGraphTsApi?.getCurrentPage(this.nodeContext, this.scene)
    return guid ? this.getInternal(guid, false) : null
  }

  /**
   * Sets the current page asynchronously.
   * @param pageGuid - The page GUID.
   */
  async setCurrentPageAsync(pageGuid) {
    if (this.sceneType !== sceneDocumentType)
      throw new Error('TSSceneGraph.setCurrentPage - Not implemented except for current document')
    const promise = new Promise<string>((resolve) => {
      runWithResolve(resolve)
    })
    SceneActions.setCurrentPageAsync(pageGuid, this.nodeContext)
    const err = await promise
    if (err)
      throw new Error(err)
  }

  /**
   * Sets the current page from a node asynchronously.
   * @param nodeGuid - The node GUID.
   */
  async setCurrentPageFromNodeAsync(nodeGuid) {
    if (this.sceneType !== sceneDocumentType)
      throw new Error('TSSceneGraph.setCurrentPage - Not implemented except for current document')
    const promise = new Promise((resolve) => {
      runWithResolve(resolve)
    })
    SceneActions.setCurrentPageFromNodeAsync(nodeGuid, this.nodeContext)
    await promise
  }

  /**
   * Creates a new node of the given type.
   * @param type - The node type.
   * @param options - Creation options.
   */
  createNode(type, options = {
    tracking: TrackingEnum.TRACK,
  }) {
    const nodeType = kiwiParserCodec.NodeType[type]
    let guid = null
    if (SceneActions) {
      guid = SceneActions.createNode(nodeType, options, this.nodeContext, this.scene)
    }
    else if (SceneGraphTsApi) {
      guid = SceneGraphTsApi.createNode(nodeType, options, this.scene)
    }
    if (!guid)
      throw new Error(`Cannot create node with type ${type}`)
    return this.getInternal(guid, false)
  }

  /**
   * Creates a node from SVG.
   * @param svg - SVG string.
   * @param options - Creation options.
   */
  createNodeFromSVG(svg, options = {
    tracking: TrackingEnum.TRACK,
  }) {
    const guid = SceneActions?.createNodeFromSVG(svg, options, this.nodeContext, this.scene)
    if (!guid)
      throw new Error('Cannot create node from SVG')
    return this.getInternal(guid, false)
  }

  /**
   * Creates a component from a node.
   * @param nodeGuid - The node GUID.
   */
  createComponentFromNode(nodeGuid) {
    const guid = SceneActions?.createSymbolFromNode(nodeGuid, this.nodeContext)
    if (!guid)
      throw new Error(`Cannot create component from node ${nodeGuid}`)
    return this.getInternal(guid, false)
  }

  /**
   * Checks if a developer-friendly ID is a GUID path.
   * @param id - The ID to check.
   */
  isDeveloperFriendlyIdAGuidPath(id) {
    return SceneActions?.isDeveloperFriendlyIdAGuidPath(id) ?? false
  }

  /**
   * Gets GUID from developer-friendly ID.
   * @param id - The developer-friendly ID.
   */
  guidFromDeveloperFriendlyId(id) {
    return SceneActions?.guidFromDeveloperFriendlyId(id, this.scene) ?? ''
  }

  /**
   * Gets developer-friendly ID from GUID.
   * @param guid - The GUID.
   */
  developerFriendlyIdFromGuid(guid) {
    return SceneActions?.developerFriendlyIdFromGuid(guid, this.scene) ?? ''
  }

  /**
   * Sets the change listeners config.
   * @param config - The config object.
   */
  setChangeListenersConfig(config) {
    this.changeListeners.config = config
  }

  /**
   * Adds a change event handler.
   * @param event - The event name.
   * @param handler - The handler function.
   */
  onChange(event, handler) {
    return this.changeListeners.add(event, handler)
  }

  /**
   * Adds a delete event handler.
   * @param handler - The handler function.
   */
  onDelete(handler) {
    this.deleteListeners.add(handler)
    return () => this.deleteListeners?.delete(handler)
  }

  /** Triggers all change listeners. */
  triggerChange() {
    this.changeListeners.trigger()
  }

  /**
   * Triggers all delete callbacks.
   * @param arg - Argument to pass to callbacks.
   */
  triggerDeleteCallbacks(arg) {
    for (const cb of this.deleteListeners) cb(arg)
  }

  /**
   * Gets a variable node by ID.
   * @param id - The variable ID.
   */
  getVariableNode(id) {
    return this.getVariableFacetInternal(id, true) ?? undefined
  }

  /**
   * Gets a code file node by asset ID.
   * @param assetId - The asset ID.
   */
  getCodeFileNode(assetId) {
    if (!assetId)
      return
    if (!SceneGraphTsApi)
      throw new NodeTsApiUnavailableError()
    const guid = SceneGraphTsApi.getGUIDForAssetId(this.scene, assetId, AssetTypeEnum.CODE_FILE)
    if (guid)
      return this.get(guid) ?? undefined
  }

  /**
   * Gets a code component node by asset ID.
   * @param assetId - The asset ID.
   */
  getCodeComponentNode(assetId) {
    if (!assetId)
      return
    if (!SceneGraphTsApi)
      throw new NodeTsApiUnavailableError()
    const guid = SceneGraphTsApi.getGUIDForAssetId(this.scene, assetId, AssetTypeEnum.CODE_COMPONENT)
    if (guid)
      return this.get(guid) ?? undefined
  }

  /**
   * Gets all local variable nodes.
   * @param options - Options for filtering.
   */
  getLocalVariableNodes(options) {
    return (VariableManager?.getLocalVariablesInfoForScene(this.scene) ?? []).map(e => this.getVariableFacetInternal(e.id, false)).filter(t => !!options?.includeSoftDeleted || !t.isSoftDeleted).filter(t => options?.resolvedDataType === void 0 || t.variableResolvedType === options.resolvedDataType)
  }

  /**
   * Creates a variable.
   * @param name - Variable name.
   * @param type - Variable type.
   * @param options - Creation options.
   */
  createVariable(name, type, options) {
    const opts = resolveVariableValue(options)
    const guid = SceneActions?.createVariable(this.scene, name, type, opts)
    const id = guid ? VariableIdHandler.fromString(guid) : null
    if (!id)
      throw new Error('Failed to create variable')
    return this.getVariableFacetInternal(id, false)
  }

  /**
   * Gets a variable collection node by ID.
   * @param id - The collection ID.
   */
  getVariableCollectionNode(id) {
    return this.getVariableCollectionFacetInternal(id, true) ?? undefined
  }

  /**
   * Gets all local variable collection nodes.
   * @param options - Options for filtering.
   */
  getLocalVariableCollectionNodes(options) {
    return (VariableManager?.getLocalVariableSetsInfoForScene(this.scene) ?? []).map(e => this.getVariableCollectionFacetInternal(e.id, false)).filter(t => !!options?.includeSoftDeleted || !t.isSoftDeleted)
  }

  /**
   * Creates a variable collection.
   * @param options - Creation options.
   */
  createVariableCollection(options) {
    let guid = SceneActions?.createVariableCollection(this.scene, options)
    let id = guid ? VariableSetIdCompatHandler.fromString(guid) : null
    if (!id)
      throw new Error('Failed to create variable collection')
    return this.getVariableCollectionFacetInternal(id, false)
  }

  /**
   * Gets a style node by ID.
   * @param id - The style ID.
   */
  getStyleNode(id) {
    return this.getStyleFacetInternal(id, true) ?? undefined
  }

  /**
   * Gets a style node by reference.
   * @param ref - The style reference.
   */
  getStyleNodeByRef(ref) {
    if (StyleKeyManager) {
      return this.getStyleFacetInternal(StyleKeyManager.styleIdFromKeyAndVersion(this.scene, ref.key, ref.version), true) ?? undefined
    }
  }

  /**
   * Gets all local style nodes of a given type.
   * @param type - The style type.
   */
  getLocalStyleNodes(type) {
    let styleType = kiwiParserCodec.StyleType[type]
    if (typeof styleType !== 'number')
      throw new Error('Invalid style type')
    return (DetachedComponentsManager ? DetachedComponentsManager.getAllLocalStyles(this.scene, styleType) : []).map(e => this.getStyleNodeByRef({
      key: e.styleKey,
      version: e.versionHash,
    })).filter(e => !!e)
  }

  /**
   * Creates a style.
   * @param type - The style type.
   */
  createStyle(type) {
    let styleType = kiwiParserCodec.StyleType[type]
    if (typeof styleType !== 'number')
      throw new Error('Invalid style type')
    if (!SceneActions || !StyleKeyManager)
      throw new Error('Failed to create style')
    let ref = SceneActions.createStyle(styleType, this.nodeContext, this.scene)
    if (!ref)
      throw new Error('Failed to create style')
    return this.getStyleFacetInternal(StyleKeyManager.styleIdFromKeyAndVersion(this.scene, ref.key, ref.version), false)
  }

  /** Gets directly selected nodes on the current page. */
  getDirectlySelectedNodes() {
    return this.getCurrentPage()?.directlySelectedNodes || []
  }

  /**
   * Internal: Gets a node by GUID.
   * @param guid - The node GUID.
   * @param setUnstable - Whether to set unstable node context.
   */
  getInternal(guid, setUnstable) {
    if (!guid)
      return null
    let apis = getApis()
    let n = parseInteger(guid, 0)
    let i = parseInteger(guid, guid.indexOf(':') + 1)
    if (setUnstable && (apis.NodeTsApi.setGlobalUnstableNodeByID(this.scene, n, i, this.nodeContext), !apis.NodeTsApi.exists(this.nodeContext))) {
      return null
    }
    return new SceneNode(guid, this, apis)
  }

  /**
   * Internal: Gets a variable facet node.
   * @param id - The variable ID.
   * @param setUnstable - Whether to set unstable node context.
   */
  getVariableFacetInternal(id, setUnstable) {
    if (!id)
      return null
    let apis = getApis()
    let guid = apis.SceneGraphTsApi.getGUIDForAssetId(this.scene, id, AssetTypeEnum.VARIABLE) ?? defaultSessionLocalIDString
    let n = parseInteger(guid, 0)
    let s = parseInteger(guid, guid.indexOf(':') + 1)
    if (setUnstable && (apis.NodeTsApi.setGlobalUnstableNodeByID(this.scene, n, s, this.nodeContext), !apis.NodeTsApi.exists(this.nodeContext))) {
      return null
    }
    let node = new SceneNode(guid, this, apis)
    return isVariableNode(node) ? node : null
  }

  /**
   * Internal: Gets a variable collection facet node.
   * @param id - The collection ID.
   * @param setUnstable - Whether to set unstable node context.
   */
  getVariableCollectionFacetInternal(id, setUnstable) {
    if (!id)
      return null
    let apis = getApis()
    let guid = apis.SceneGraphTsApi.getGUIDForAssetId(this.scene, id, AssetTypeEnum.VARIABLE_SET) ?? defaultSessionLocalIDString
    let n = parseInteger(guid, 0)
    let s = parseInteger(guid, guid.indexOf(':') + 1)
    if (setUnstable && (apis.NodeTsApi.setGlobalUnstableNodeByID(this.scene, n, s, this.nodeContext), !apis.NodeTsApi.exists(this.nodeContext))) {
      return null
    }
    let node = new SceneNode(guid, this, apis)
    return isValidVariableCollection(node) ? node : null
  }

  /**
   * Internal: Gets a style facet node.
   * @param id - The style ID.
   * @param setUnstable - Whether to set unstable node context.
   */
  getStyleFacetInternal(id, setUnstable) {
    if (!id)
      return null
    let apis = getApis()
    let guid = apis.SceneGraphTsApi.getGUIDForAssetId(this.scene, id, AssetTypeEnum.STYLE) ?? defaultSessionLocalIDString
    let n = parseInteger(guid, 0)
    let s = parseInteger(guid, guid.indexOf(':') + 1)
    if (setUnstable && (apis.NodeTsApi.setGlobalUnstableNodeByID(this.scene, n, s, this.nodeContext), !apis.NodeTsApi.exists(this.nodeContext))) {
      return null
    }
    let node = new SceneNode(guid, this, apis)
    return hasStyleType(node) ? node : null
  }

  /**
   * Applies a text styling action to nodes.
   * @param nodes - Array of node IDs.
   * @param action - The styling action.
   */
  applyTextStylingActionToNodes(nodes, action) {
    return SceneActions?.applyTextStylingActionToNodes(nodes, this.nodeContext, action)
  }

  /** Gets the slide grid as an array of node arrays. */
  getSlideGrid() {
    let grid = SceneActions?.getSlideGrid(this.scene)
    return grid ? grid.map(row => row.map(guid => this.getInternal(guid, false))) : []
  }

  /**
   * Sets the slide grid.
   * @param grid - 2D array of nodes.
   */
  setSlideGrid(grid) {
    let mapped = grid.map(row => row.map(node => node.guid))
    SceneActions?.setSlideGrid(mapped, this.nodeContext, this.scene)
  }

  /**
   * Updates derived symbol data on primary instances.
   * @param nodes - Array of nodes.
   */
  updateDerivedSymbolDataOnPrimaryInstances(nodes) {
    SymbolUpdater?.updateDerivedSymbolDataOnPrimaryInstances(nodes, this.scene)
  }

  /** Updates all nodes in the scene. */
  updateAll() {
    new SceneUpdater(this.scene).updateAll()
  }

  /**
   * Runs a function with plugin context.
   * @param fn - The function to run.
   * @param args - Arguments to pass.
   */
  runWithPluginContext(fn, ...args) {
    let prevContext = this._nodeContext
    this._nodeContext = NodeContextEnum.PLUGIN
    try {
      return fn(...args)
    }
    finally {
      this._nodeContext = prevContext
    }
  }

  /**
   * Combines nodes as variants.
   * @param nodes - Array of nodes.
   * @param session - Session info.
   * @param parentId - Parent ID.
   */
  combineAsVariants(nodes, session, parentId) {
    let guid = NodeGroupManager.groupNodes(GroupTypeEnum.STATE_GROUP, nodes.map(n => n.guid), session.sessionID, session.localID, parentId ?? -1, this.scene)
    return this.getInternal(guid, false)
  }

  /**
   * Groups nodes.
   * @param nodes - Array of nodes.
   * @param session - Session info.
   * @param parentId - Parent ID.
   */
  group(nodes, session, parentId) {
    let guid = NodeGroupManager.groupNodes(GroupTypeEnum.GROUP, nodes.map(n => n.guid), session.sessionID, session.localID, parentId ?? -1, this.scene)
    return this.getInternal(guid, false)
  }

  /**
   * Unions nodes.
   * @param nodes - Array of nodes.
   * @param session - Session info.
   * @param parentId - Parent ID.
   */
  union(nodes, session, parentId) {
    let guid = NodeGroupManager.groupNodes(GroupTypeEnum.UNION, nodes.map(n => n.guid), session.sessionID, session.localID, parentId ?? -1, this.scene)
    return this.getInternal(guid, false)
  }

  /**
   * Subtracts nodes.
   * @param nodes - Array of nodes.
   * @param session - Session info.
   * @param parentId - Parent ID.
   */
  subtract(nodes, session, parentId) {
    let guid = NodeGroupManager.groupNodes(GroupTypeEnum.SUBTRACT, nodes.map(n => n.guid), session.sessionID, session.localID, parentId ?? -1, this.scene)
    return this.getInternal(guid, false)
  }

  /**
   * Intersects nodes.
   * @param nodes - Array of nodes.
   * @param session - Session info.
   * @param parentId - Parent ID.
   */
  intersect(nodes, session, parentId) {
    let guid = NodeGroupManager.groupNodes(GroupTypeEnum.INTERSECT, nodes.map(n => n.guid), session.sessionID, session.localID, parentId ?? -1, this.scene)
    return this.getInternal(guid, false)
  }

  /**
   * Excludes nodes (XOR).
   * @param nodes - Array of nodes.
   * @param session - Session info.
   * @param parentId - Parent ID.
   */
  exclude(nodes, session, parentId) {
    let guid = NodeGroupManager.groupNodes(GroupTypeEnum.XOR, nodes.map(n => n.guid), session.sessionID, session.localID, parentId ?? -1, this.scene)
    return this.getInternal(guid, false)
  }

  /**
   * Flattens nodes.
   * @param nodes - Array of nodes.
   * @param session - Session info.
   * @param parentId - Parent ID.
   */
  flatten(nodes, session, parentId) {
    let guid = NodeGroupManager.flattenNodes(nodes.map(n => n.guid), session?.sessionID ?? -1, session?.localID ?? -1, parentId ?? -1, this.scene)
    return this.getInternal(guid, false)
  }

  /**
   * Ungroups a node.
   * @param node - The group node.
   */
  ungroup(node) {
    return NodeGroupManager.ungroupNode(node.guid, this.scene).map(guid => this.getInternal(guid, false))
  }

  /**
   * Constructs a TSSceneGraph.
   * @param nodeContext - The node context.
   * @param sceneType - The scene type.
   */
  constructor(nodeContext, sceneType = sceneDocumentType) {
    this.sceneType = sceneType
    this.changeListeners = new ChangeListeners(ChangeListenerQueue)
    this.deleteListeners = new Set()
    this._nodeContext = nodeContext
  }

  getSceneType = () => this.sceneType
  getSceneTypeDebugString = () => {
    if (this.sceneType === sceneDocumentType)
      return 'CURRENT_DOCUMENT'
    debug(typeof this.sceneType !== 'symbol', 'this.sceneType cannot be Symbol')
    switch (this.sceneType) {
      case SceneTypeEnum.DETACHED_COMPONENTS:
        return 'DETACHED_COMPONENTS'
      case SceneTypeEnum.LIVE_FILE:
        return 'LIVE_FILE'
      case SceneTypeEnum.HISTORY:
        return 'HISTORY'
      case SceneTypeEnum.PLAYGROUND:
        return 'PLAYGROUND'
      case SceneTypeEnum.FIRST_DRAFT:
        return 'FIRST_DRAFT'
      case SceneTypeEnum.LINTER:
        return 'LINTER'
      case SceneTypeEnum.AUTO_SUGGEST:
        return 'AUTO_SUGGEST'
      default:
        throwTypeError(this.sceneType)
    }
  }

  get = id => this.getInternal(id, true)
  getOrThrow = id => this.getInternal(id, false)
  getRoot = () => this.getInternal('0:0', false)
  getInternalCanvas = () => {
    let guid = SceneGraphTsApi?.getInternalCanvas(this.scene)
    return guid ? this.getInternal(guid, false) : null
  }

  setCurrentPage_DEPRECATED = (pageGuid) => {
    let err = SceneActions.setCurrentPageAsync(pageGuid, this.nodeContext)
    if (err)
      throw new Error(err)
  }
}

// Export aliases for compatibility
export const K0 = TSSceneGraph
export const cd = NodeTsApiUnavailableError
export const wL = SceneGraphUnavailableError
export const x1 = HISTORY_DOCUMENT_INDEX
