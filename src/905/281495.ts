import { reportError } from "../905/11"
import { ServiceCategories } from "../905/165054"
import { permissionScopeHandler } from "../905/189185"
import { debugState } from "../905/407919"
import { Timer } from "../905/609396"
import { getSingletonSceneGraph } from "../905/700578"
import { BaseCustomError } from "../905/843553"
import { atomStoreManager } from "../figma_app/27355"
import { a as _$$a, v as _$$v } from "../figma_app/163822"
import { clearAllNodeStates, deleteAndWriteNode, deletionSettings, nodeStateFamily } from "../figma_app/178273"
import { trackFileEvent } from "../figma_app/314264"
import { cortexAPI } from "../figma_app/432652"
import { fullscreenValue } from "../figma_app/455680"
import { asyncMap } from "../figma_app/656233"
import { ActionType } from "../figma_app/763686"
import { z8 } from "../figma_app/862289"
import { Ay as _$$Ay2 } from "../figma_app/948389"

// Constants
const ordinalStrings = ["FIRST", "SECOND", "THIRD", "FOURTH", "FIFTH", "SIXTH", "SEVENTH", "EIGHTH", "NINTH", "TENTH", "ELEVENTH", "TWELFTH", "THIRTEENTH", "FOURTEENTH", "FIFTEENTH", "SIXTEENTH", "SEVENTEENTH", "EIGHTEENTH", "NINETEENTH", "TWENTIETH", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const defaultNamesByType = {
  RECTANGLE: ["Rectangle", "Image", "image"],
  ROUNDED_RECTANGLE: ["Rectangle", "Image", "image"],
  TEXT: ["Text"],
  FRAME: ["Frame", "Group"],
  GROUP: ["Group"],
  REGULAR_POLYGON: ["Polygon", "Vector"],
  STAR: ["Star"],
  LINE: ["Line"],
  ELLIPSE: ["Ellipse"],
  VECTOR: ["Vector"],
  INSTANCE: ["Instance"],
}

const nameableTypes = new Set(["RECTANGLE", "ROUNDED_RECTANGLE", "TEXT", "FRAME", "GROUP", "INSTANCE"])

const actionsThatCreateNewNodes = new Set([ActionType.CREATE_COMPONENT, ActionType.CREATE_FRAME, ActionType.DRAW_FRAME_AROUND_NODES, ActionType.STACK_SELECTION, ActionType.EXPORT_FRAME, ActionType.EXPORT_PICKER])

const MAX_LAYER_COUNT = 500

// Enums
enum RenameScope {
  ALL = 0,
  TOP_LEVEL = 1,
}

// Utility Functions
/**
 * Checks if a node is a top-level frame (FRAME type with CANVAS or SECTION parent).
 * @param node - The node to check.
 * @returns True if the node is a top-level frame.
 */
function isTopLevelFrame(node: any): boolean {
  const isFrame = node.type === "FRAME"
  const parent = node.parentNode
  const hasValidParent = parent && (parent.type === "CANVAS" || parent.type === "SECTION")
  return isFrame && hasValidParent
}

/**
 * Generates a path string for a node based on its hierarchy and siblings.
 * @param node - The node to generate the path for.
 * @returns The path string.
 */
function getNodePath(node: any): string {
  const pathParts: string[] = []
  let current = node
  while (!isTopLevelFrame(current)) {
    const name = current.name
    let index = 0
    const parent = current.parentNode
    if (!parent)
      break
    for (const sibling of parent.childrenNodes) {
      if (sibling.name === name) {
        if (sibling.guid === current.guid)
          break
        index++
      }
    }
    pathParts.push(name)
    pathParts.push(index.toString())
    current = parent
  }
  return pathParts.join("/")
}

/**
 * Maps an ActionType to a string representation.
 * @param action - The ActionType to map.
 * @returns The string representation.
 */
export function getActionSourceString(action: ActionType): string {
  switch (action) {
    case ActionType.CONTEXT_MENU:
      return "context_menu"
    case ActionType.QUICK_ACTIONS:
      return "quick_actions"
    case ActionType.CREATE_COMPONENT:
      return "create_component"
    case ActionType.CREATE_FRAME:
      return "create_frame"
    case ActionType.DRAW_FRAME_AROUND_NODES:
      return "draw_frame_around_nodes"
    case ActionType.STACK_SELECTION:
      return "stack_selection"
    case ActionType.FIRST_DRAFT_LINT:
      return "First Draft Lint"
    case ActionType.EXPORT_FRAME:
      return "export_frame"
    case ActionType.EXPORT_PICKER:
      return "export_picker"
    case ActionType.MAGIC_LINK:
      return "magic-link"
    case ActionType.READY_FOR_DEV:
      return "ready_for_dev"
    case ActionType.LAYERS_PANEL_ACTION_ROW:
      return "layers_panel_action_row"
    case ActionType.LAYERS_PANEL_OVERFLOW_MENU:
      return "layers_panel_overflow_menu"
  }
}

/**
 * Checks if a node's name is a default generated name.
 * @param node - The node to check.
 * @param includeComponents - Whether to include component names.
 * @returns True if the name is default.
 */
function isDefaultName(node: any, includeComponents: boolean = false): boolean {
  let candidates: string[] | undefined
  if (node.type in defaultNamesByType) {
    candidates = defaultNamesByType[node.type]
  }
  else if (node.type === "SYMBOL" && includeComponents) {
    const allCandidates: string[] = []
    nameableTypes.forEach((type) => {
      if (type in defaultNamesByType && defaultNamesByType[type]) {
        allCandidates.push(...defaultNamesByType[type])
      }
    })
    allCandidates.push("Component")
    candidates = allCandidates
  }
  if (candidates) {
    for (const candidate of candidates) {
      const regex = new RegExp(`^${candidate} [()\\d]+[ ()\\d]*$`, "i")
      if (node.name.match(regex))
        return true
    }
  }
  if (node.type === "INSTANCE" && node.symbolId) {
    const symbol = getSingletonSceneGraph().get(node.symbolId)
    if (symbol && node.name === symbol.name)
      return true
  }
  return node.type === "TEXT" && !!node.autoRename
}

/**
 * Checks if a layer is nameable based on its properties.
 * @param node - The node to check.
 * @param overwriteNames - Whether to overwrite existing names.
 * @param includeComponents - Whether to include components.
 * @returns True if the layer is nameable.
 */
function isLayerNameable(node: any, overwriteNames: boolean = false, includeComponents: boolean = false): boolean {
  if (node.locked || node.isInstanceSublayer)
    return false
  const isSymbolAndIncluded = includeComponents && node.type === "SYMBOL"
  return !!((nameableTypes.has(node.type) || isSymbolAndIncluded) && (overwriteNames || isDefaultName(node, includeComponents)))
}

/**
 * Applies renames to nodes via permission scope handler.
 * @param renames - Map of node GUIDs to rename data.
 */
function applyRenames(renames: Map<string, { name: string, autoRename: boolean }>): void {
  permissionScopeHandler.ai("rename-layers", () => {
    for (const [guid, { name, autoRename }] of renames) {
      const node = getSingletonSceneGraph().get(guid)
      if (node) {
        node.name = name
        node.autoRename = autoRename
      }
    }
  })
}

// Error Classes
/**
 * Error thrown when no nameable layers are found.
 */
export class NoNameableLayersError extends BaseCustomError {
  constructor() {
    super(false)
    this.name = "NoNameableLayersError"
  }
}

/**
 * Error thrown when no layers are selected.
 */
export class NoSelectedLayersError extends BaseCustomError {
  constructor() {
    super(false)
    this.name = "NoSelectedLayersError"
  }
}

/**
 * Error thrown when the layer count exceeds the limit.
 */
export class LayerLimitExceededError extends BaseCustomError {
  constructor(public layerCount: number) {
    super(false)
    this.name = "LayerLimitExceededError"
  }
}

/**
 * Error thrown when a layer is not renamed.
 */
class LayerNotRenamedError extends Error {
  constructor() {
    super()
    this.name = "LayerNotRenamedError"
  }
}

// Main Function and Helpers
/**
 * Builds a map of nodes to their sibling groups for renaming.
 * @param page - The current page node.
 * @param selectedNodes - The selected nodes.
 * @returns Map of GUIDs to sibling arrays.
 */
function buildSiblingMap(page: any, selectedNodes: any[]): Map<string, any[]> {
  const pathToNodes = new Map<string, any[]>()
  const guidToSiblings = new Map<string, any[]>()

  const collectVisible = (node: any) => {
    if (!node.locked && node.visible) {
      if (!isTopLevelFrame(node)) {
        const path = node.guid === page.guid ? "" : getNodePath(node)
        if (!pathToNodes.has(path))
          pathToNodes.set(path, [])
        pathToNodes.get(path)!.push(node)
        guidToSiblings.set(node.guid, pathToNodes.get(path)!)
      }
      if (node.childrenNodes) {
        for (const child of node.childrenNodes) collectVisible(child)
      }
    }
  }

  for (const node of selectedNodes) collectVisible(node)

  const collectAdditional = (node: any) => {
    if (!(node.locked || !node.visible || guidToSiblings.has(node.guid))) {
      if (!isTopLevelFrame(node)) {
        const path = node.guid === page.guid ? "" : getNodePath(node)
        if (pathToNodes.has(path))
          pathToNodes.get(path)!.push(node)
      }
      if (node.childrenNodes) {
        for (const child of node.childrenNodes) collectAdditional(child)
      }
    }
  }

  collectAdditional(page)
  return guidToSiblings
}

/**
 * Builds the representation for a node for AI processing.
 * @param params - Parameters for building the representation.
 * @returns The node representation object.
 */
function buildNodeRepresentation({
  node,
  overwriteNames,
  renameComponents,
  includeNodeIds,
  relativeFrame,
}: {
  node: any
  overwriteNames: boolean
  renameComponents: boolean
  includeNodeIds: number
  relativeFrame?: { x: number, y: number, w: number, h: number }
}): any {
  const isNameable = isLayerNameable(node, overwriteNames, renameComponents)
  const isDefault = isDefaultName(node, renameComponents)
  if (!relativeFrame) {
    relativeFrame = {
      x: Math.floor(node.absoluteBoundingBox.x),
      y: Math.floor(node.absoluteBoundingBox.y),
      w: Math.floor(node.absoluteBoundingBox.w),
      h: Math.floor(node.absoluteBoundingBox.h),
    }
  }
  const hasImageFill = node.fills.length > 0 && node.fills.some((fill: any) => fill.type === "IMAGE")
  let type = node.type
  let isCustomName = false
  if (hasImageFill) {
    type = "IMAGE"
  }
  else if (node.type === "INSTANCE" && node.symbolId) {
    const symbol = getSingletonSceneGraph().get(node.symbolId)
    if (symbol && !isDefaultName(symbol, renameComponents)) {
      type = symbol.name
      isCustomName = true
    }
  }
  else if (node.type === "SYMBOL" && renameComponents) {
    type = "COMPONENT"
  }
  const shouldUseName = !isDefault && !isCustomName
  const maxWidth = _$$a(node)
  const scale = relativeFrame.w > maxWidth ? maxWidth / relativeFrame.w : 1
  const rep = {
    name: shouldUseName ? node.name : undefined,
    type,
    id: isNameable ? node.guid : undefined,
    text: node.characters ? node.characters.trim().substring(0, 200) : undefined,
    autolayout: node.isStack && node.stackMode !== "GRID" ? node.stackMode : undefined,
    x: Math.floor((node.absoluteBoundingBox.x - relativeFrame.x) * scale),
    y: Math.floor((node.absoluteBoundingBox.y - relativeFrame.y) * scale),
    w: Math.floor(node.absoluteBoundingBox.w * scale),
    h: Math.floor(node.absoluteBoundingBox.h * scale),
  }
  if (node.type !== "INSTANCE" && includeNodeIds === 0) {
    const children = node.childrenNodes
      ? node.uiOrderedChildren.map((id: string) => children.find((child: any) => child.guid === id)).filter(Boolean)
      : []
    rep.children = children
      .filter((child: any) => child.visible && child.opacity > 0)
      .map((child: any) =>
        buildNodeRepresentation({
          node: child,
          overwriteNames,
          renameComponents: false,
          includeNodeIds: 0,
          relativeFrame,
        }),
      )
  }
  return rep
}

/**
 * Processes the AI response stream and applies renames.
 * @param reader - The stream reader.
 * @param abortController - The abort controller.
 * @param siblingMap - Map of GUIDs to siblings.
 * @param selectedGuids - GUIDs of selected nodes.
 * @param overwriteNames - Whether to overwrite names.
 * @param isComponentCreation - Whether creating components.
 * @param ignoreDescendants - Whether to ignore descendants.
 * @param onTaskUpdate - Callback for task updates.
 * @param pendingRenames - Map to store pending renames.
 * @param expandedNodes - Set of expanded node GUIDs.
 * @param animations - Array of animation promises.
 * @param stats - Stats object to update.
 * @returns Promise that resolves when processing is done.
 */
async function processRenameStream(
  reader: any,
  abortController: AbortController,
  siblingMap: Map<string, any[]>,
  selectedGuids: string[] | undefined,
  overwriteNames: boolean,
  isComponentCreation: boolean,
  ignoreDescendants: boolean,
  onTaskUpdate: (guid: string) => void,
  pendingRenames: Map<string, { name: string, autoRename: boolean }>,
  expandedNodes: Set<string>,
  animations: Promise<any>[],
  stats: { hallucinated: number, ordinals: number },
): Promise<void> {
  const abortPromise = new Promise<void>((resolve) => {
    abortController.signal.addEventListener("abort", resolve)
  })

  for (;;) {
    const result = await Promise.race([reader.read(), abortPromise])
    if (abortController.signal.aborted) {
      reader.cancel()
      break
    }
    const { done, value } = result
    if (value) {
      const [guid, newName] = value.split(",").map((s: string) => s.trim())
      // Check for ordinals
      for (const ordinal of ordinalStrings) {
        if (newName.toUpperCase().includes(ordinal)) {
          stats.ordinals++
          break
        }
      }
      const node = getSingletonSceneGraph().get(guid)
      if (node && isLayerNameable(node, overwriteNames, isComponentCreation) && (!ignoreDescendants || selectedGuids?.includes(node.guid))) {
        // Expand parents
        let current = node.parentNode
        while (current) {
          if ("isExpanded" in current && !current.isExpanded) {
            current.isExpanded = true
            expandedNodes.add(current.guid)
          }
          current = current.parentNode
        }
        const nodesToRename = [{ node, animate: true }]
        for (const sibling of siblingMap.get(guid) ?? []) {
          if (sibling.guid !== guid && isLayerNameable(sibling, overwriteNames, isComponentCreation) && !pendingRenames.has(sibling.guid)) {
            nodesToRename.push({ node: sibling, animate: false })
          }
        }
        for (const { node: nodeToRename, animate } of nodesToRename) {
          if (animate) {
            const animation = deleteAndWriteNode(nodeToRename, newName, abortController, actionsThatCreateNewNodes.has(isComponentCreation ? ActionType.CREATE_COMPONENT : undefined))
            animations.push(animation)
          }
          const original = { name: nodeToRename.name, autoRename: nodeToRename.autoRename }
          permissionScopeHandler.ai("rename-layers", () => {
            nodeToRename.name = newName
          })
          pendingRenames.set(nodeToRename.guid, original)
          onTaskUpdate(nodeToRename.guid)
        }
      }
      else if (!node) {
        stats.hallucinated++
      }
    }
    if (done)
      break
  }
}

/**
 * Main function to rename layers using AI.
 * @param params - Parameters for the rename operation.
 * @returns Promise that resolves with any error or undefined.
 */
export async function renameLayers({
  abortController,
  onTasksUpdate,
  params,
  clientLifecycleId,
}: {
  abortController: AbortController
  onTasksUpdate?: (tasks: any[]) => void
  params: {
    source: ActionType
    overwriteNames: boolean
    customNodeSelection?: string[]
    ignoreDescendants: boolean
  }
  clientLifecycleId: string
}): Promise<any> {
  const { source, overwriteNames, customNodeSelection, ignoreDescendants } = params
  const timer = new Timer()
  timer.start()
  let timeToFirstToken: number | null = null
  const debug = debugState.getState()
  const fileKey = debug.openFile?.key
  const isComponentCreation = source === ActionType.CREATE_COMPONENT
  const sourceString = getActionSourceString(source)
  let selectedNodes = getSingletonSceneGraph().getCurrentPage()?.directlySelectedNodes
  if (customNodeSelection) {
    selectedNodes = customNodeSelection
      .map(guid => getSingletonSceneGraph().get(guid))
      .filter(Boolean)
  }
  const selectedGuids = selectedNodes?.map(node => node.guid)
  if (!selectedNodes || selectedNodes.length === 0)
    throw new NoSelectedLayersError()
  let totalItems = 0
  let hallucinatedCount = 0
  let ordinalsCount = 0
  const tasks: any[] = []
  const siblingMap = buildSiblingMap(getSingletonSceneGraph().getCurrentPage(), selectedNodes)
  const pendingRenames = new Map<string, { name: string, autoRename: boolean }>()
  const representations = (await asyncMap(selectedNodes, async (node) => {
    const rep = buildNodeRepresentation({
      node,
      overwriteNames,
      renameComponents: !!isComponentCreation,
      includeNodeIds: ignoreDescendants ? 1 : 0,
    })
    const flattened: any[] = []
    const flatten = (item: any, arr: any[]) => {
      arr.push(item)
      if (item.children) {
        for (const child of item.children) flatten(child, arr)
      }
    }
    flatten(rep, flattened)
    const nameable = flattened.filter(item => item.id !== undefined)
    if (nameable.length === 0)
      return null
    totalItems += flattened.length
    for (const { id } of nameable) {
      if (id) {
        tasks.push({ taskId: id, state: z8.INCOMPLETE })
        atomStoreManager.set(nodeStateFamily(id), {
          guid: id,
          boundingBox: node.absoluteBoundingBox,
          state: "pending",
          name: node.name,
        })
      }
    }
    return { rep, image: await _$$v(node) }
  })).filter(Boolean)
  const nameableCount = tasks.length
  if (nameableCount === 0)
    throw new NoNameableLayersError()
  if (totalItems > MAX_LAYER_COUNT)
    throw new LayerLimitExceededError(totalItems)
  onTasksUpdate?.(tasks)
  atomStoreManager.set(deletionSettings, { autoScroll: true })
  trackFileEvent("ai_rename_layers_started", fileKey, debug, {
    numItemsTotal: totalItems,
    numItemsNameable: nameableCount,
    source: sourceString,
    clientLifecycleId,
  })
  const updateTask = (guid: string) => {
    tasks.forEach((task) => {
      if (task.taskId === guid)
        task.state = z8.SUCCEEDED
    })
    onTasksUpdate?.(tasks)
  }
  try {
    const requestOptions = { ..._$$Ay2(), clientLifecycleId }
    const response = await cortexAPI.design.generateRenameLayers(
      { nodes: representations, isMeteringRequest: true, renameTopLayerOnly: !!ignoreDescendants },
      requestOptions,
    )
    const expandedNodes = new Set<string>()
    const animations: Promise<any>[] = []
    const stats = { hallucinated: hallucinatedCount, ordinals: ordinalsCount }
    await processRenameStream(
      response.getReader(),
      abortController,
      siblingMap,
      selectedGuids,
      overwriteNames,
      isComponentCreation,
      ignoreDescendants,
      updateTask,
      pendingRenames,
      expandedNodes,
      animations,
      stats,
    )
    hallucinatedCount = stats.hallucinated
    ordinalsCount = stats.ordinals
    if (!abortController.signal.aborted)
      await Promise.all(animations)
    const elapsed = timer.getElapsedTime()
    timer.stop()
    const succeededCount = tasks.filter(task => task.state === z8.SUCCEEDED).length
    if (abortController.signal.aborted) {
      trackFileEvent("ai_rename_layers_cancelled", fileKey, debug, {
        timeToFirstToken,
        timeToCompletion: elapsed,
        numItemsTotal: totalItems,
        numItemsNameable: nameableCount,
        numItemsNamed: succeededCount,
        numItemsHallucinated: hallucinatedCount,
        numItemsWithOrdinals: ordinalsCount,
        source: sourceString,
        clientLifecycleId,
      })
      applyRenames(pendingRenames)
    }
    else {
      trackFileEvent("ai_rename_layers_completed", fileKey, debug, {
        timeToFirstToken,
        timeToCompletion: elapsed,
        numItemsTotal: totalItems,
        numItemsNameable: nameableCount,
        numItemsNamed: succeededCount,
        numItemsHallucinated: hallucinatedCount,
        numItemsWithOrdinals: ordinalsCount,
        source: sourceString,
        clientLifecycleId,
      })
    }
    fullscreenValue.triggerAction("commit")
  }
  catch (error) {
    clearAllNodeStates()
    applyRenames(pendingRenames)
    fullscreenValue.triggerAction("commit")
    reportError(ServiceCategories.AI_PRODUCTIVITY, error, {
      extra: { numItemsTotal: totalItems, numItemsNameable: nameableCount, source: sourceString },
    })
    trackFileEvent("ai_rename_layers_failed", fileKey, debug, {
      error,
      numItemsTotal: totalItems,
      numItemsNameable: nameableCount,
      source: sourceString,
      clientLifecycleId,
    })
    return error
  }
  finally {
    tasks.forEach((task) => {
      if (task.state === z8.INCOMPLETE) {
        task.state = z8.FAILED
        task.error = new LayerNotRenamedError()
      }
    })
    onTasksUpdate?.(tasks)
  }
}

// Exports (refactored to match meaningful internal names)
export const NB = MAX_LAYER_COUNT
export const eJ = LayerLimitExceededError
export const BT = NoNameableLayersError
export const tS = NoSelectedLayersError
export const Ay = renameLayers
export const jX = isLayerNameable
export const Tr = getActionSourceString
