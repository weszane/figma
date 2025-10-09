import { useCallback, useMemo } from "react"
import { reportError } from "../905/11"
import { processInstancesAndGenerateCode } from "../905/100887"
import { ServiceCategories } from "../905/165054"
import { getFeatureFlags } from "../905/601108"
import m from "../905/661768"
import { atom, useAtomWithSubscription } from "../figma_app/27355"
import { findBestMatchingVariant, getComponentProperties, getInstanceBackingKey, TraversalAction, traverseNodeTree } from "../figma_app/97042"
import { Vr } from "../figma_app/151869"
import { Nv, yT } from "../figma_app/478201"
import { useCurrentFileKey, useOpenFileLibraryKey } from "../figma_app/516028"
import { usePlaygroundSceneGraph, useSceneGraphSelector } from "../figma_app/722362"
import { Fullscreen } from "../figma_app/763686"

// Origin: /Users/allen/sigma-main/src/figma_app/451396.ts
// Refactored: Renamed variables, added TypeScript types/interfaces, simplified nested logic, added comments for clarity and potential issues.

// Assumed dependencies:
// - atom, useAtomWithSubscription, traverseNodeTree, TraversalAction, getInstanceBackingKey, getComponentProperties, findBestMatchingVariant, processInstancesAndGenerateCode, reportError, ServiceCategories, getFeatureFlags, Vr, Nv, yT, useCurrentFileKey, useOpenFileLibraryKey, usePlaygroundSceneGraph, useSceneGraphSelector, Fullscreen

// --- Type Definitions ---

interface SceneNode {
  type: "SYMBOL" | "INSTANCE" | "TEXT" | string
  guid: string
  name: string
  symbolId?: string
  visibleChildren: string[]
  characters?: string // For TEXT nodes
}

interface InstanceNode {
  key?: string
  type: "INSTANCE"
  name: string
  guid: string
  symbolId?: string
  properties: Record<string, any>
  children: Array<InstanceNode | TextNode>
  path?: string[]
}

interface TextNode {
  type: "TEXT"
  guid: string
  name: string
  textContent: string
  path?: string[]
}

interface GenerateCodeParams {
  node: SceneNode | null
  scene: SceneGraph
  fileKey: string | null
  openLibraryKey: string | null
}

interface PlaygroundNodeData {
  playgroundGUID?: string
}

// --- Atom for breakInTemplateExecution ---
const breakInTemplateExecutionAtom = atom(false)

// --- Helper: Find backing component name for a node ---
function findBackingComponentName(
  parentNode: SceneNode,
  instanceNode: InstanceNode,
  scene: SceneGraph,
): string | undefined {
  let foundName: string | undefined
  const backingComponent = scene.get(instanceNode.symbolId ?? "")
  if (!backingComponent) {
    reportError(
      ServiceCategories.DEVELOPER_TOOLS,
      new Error(`Cant find backing component of parent node ${instanceNode.symbolId}`),
    )
    return
  }
  const parentFriendlyId = scene.developerFriendlyIdFromGuid(parentNode.guid)
  traverseNodeTree(
    backingComponent,
    scene,
    (node: SceneNode) => {
      if (node.type === parentNode.type && parentFriendlyId.endsWith(`;${node.guid}`)) {
        foundName = node.name
        return TraversalAction.Stop
      }
    },
    true,
  )
  return foundName
}

// --- Main Hook: Generates code for playground instances ---
export function generatePlaygroundInstanceCode(
  template: any,
  instanceFigmadocs: any,
  breakInTemplateExecution: boolean,
): any {
  let playgroundNode = Vr() ?? null
  let sceneGraph = useSceneGraphSelector()
  let playgroundSceneGraph = usePlaygroundSceneGraph()
  let playgroundNodeData: PlaygroundNodeData = Fullscreen.getPlaygroundNodeData()
  if (breakInTemplateExecution) {
    // If breaking in template execution, use the playground scene graph and node
    sceneGraph = playgroundSceneGraph
    playgroundNode = playgroundSceneGraph.get(playgroundNodeData?.playgroundGUID ?? "")
  }
  const inlineInstancesEnabled = !!getFeatureFlags().dt_code_connect_inline_instances
  const breakExecution = useAtomWithSubscription(breakInTemplateExecutionAtom)
  const fileKey = useCurrentFileKey()
  const openLibraryKey = useOpenFileLibraryKey()

  // Memoize the processed node tree for injection
  const nodeTreeToInject = useMemo(
    () =>
      buildInstanceTree({
        node: playgroundNode,
        scene: sceneGraph,
        fileKey,
        openLibraryKey,
      }),
    [fileKey, openLibraryKey, sceneGraph, playgroundNode],
  )

  // Callback to get instance figmadoc from JSON
  const getInstanceFigmadocFromJSON = useCallback(
    (template: any, guid: string) => getBestMatchingVariant(sceneGraph)(template, guid),
    [sceneGraph],
  )

  // Memoize code generation
  const generatedCode = useMemo(() => {
    if (template && playgroundNode && nodeTreeToInject) {
      return processInstancesAndGenerateCode({
        apiSource: m,
        template,
        nodeTreeToInject,
        instanceFigmadocs,
        inlineInstancesEnabled,
        breakInTemplateExecution: breakExecution,
        getInstanceFigmadocFromJSON,
      })
    }
  }, [
    template,
    playgroundNode,
    nodeTreeToInject,
    instanceFigmadocs,
    inlineInstancesEnabled,
    breakExecution,
    getInstanceFigmadocFromJSON,
  ])

  return yT(generatedCode)
}

// --- Async function: Generates code for a given node and template ---
export async function generateInstanceCode({
  node,
  instanceFigmadocs,
  template,
  openLibraryKey,
  scene,
  fileKey,
}: {
  node: SceneNode | null
  instanceFigmadocs: any
  template: any
  openLibraryKey: string | null
  scene: SceneGraph
  fileKey: string | null
}): Promise<any> {
  const nodeTreeToInject = buildInstanceTree({
    node,
    scene,
    fileKey,
    openLibraryKey,
  })
  if (!template || !node || !nodeTreeToInject) {
    return Promise.resolve(undefined)
  }
  const generatedCode = processInstancesAndGenerateCode({
    apiSource: m,
    template,
    nodeTreeToInject,
    instanceFigmadocs,
    inlineInstancesEnabled: true,
    breakInTemplateExecution: false,
    getInstanceFigmadocFromJSON: getBestMatchingVariant(scene),
  })
  return Nv(generatedCode)
}

// --- Helper: Builds the instance tree for code generation ---
function buildInstanceTree({
  node,
  scene,
  fileKey,
  openLibraryKey,
}: GenerateCodeParams): InstanceNode | null {
  if (!node || !fileKey)
    return null

  // Determine symbolId for root node
  const symbolId = node.type === "SYMBOL" ? node.guid : node.symbolId

  // Root instance node
  const rootInstance: InstanceNode = {
    key: getInstanceBackingKey(node, scene, openLibraryKey) ?? undefined,
    type: "INSTANCE",
    name: node.name,
    guid: node.guid,
    symbolId,
    properties: getComponentProperties(node),
    children: [],
  }

  // Recursively process visible children
  for (const childGuid of node.visibleChildren) {
    const childNode = scene.get(childGuid)
    if (childNode) {
      addChildToInstanceTree(childNode, rootInstance, scene, fileKey, openLibraryKey, [])
    }
  }
  return rootInstance
}

// --- Recursive helper: Adds children to instance tree ---
function addChildToInstanceTree(
  node: SceneNode,
  parentInstance: InstanceNode,
  scene: SceneGraph,
  fileKey: string | null,
  openLibraryKey: string | null,
  path: string[],
): void {
  let currentParent = parentInstance
  if (node.type === "INSTANCE") {
    // Find backing component name for this instance
    const backingName = findBackingComponentName(node, parentInstance, scene)
    const instanceKey = getInstanceBackingKey(node, scene, openLibraryKey)
    const properties = getComponentProperties(node)
    const newInstance: InstanceNode = {
      key: instanceKey ?? undefined,
      type: "INSTANCE",
      name: backingName ?? node.name,
      guid: node.guid,
      symbolId: node.symbolId,
      properties,
      children: [],
      path,
    }
    parentInstance.children.push(newInstance)
    currentParent = newInstance
  }
  else if (node.type === "TEXT") {
    // Add text node
    const backingName = findBackingComponentName(node, parentInstance, scene)
    const textNode: TextNode = {
      type: "TEXT",
      guid: node.guid,
      name: backingName ?? node.name,
      textContent: node.characters ?? "",
      path,
    }
    parentInstance.children.push(textNode)
  }
  // Recursively process children
  const nextPath = path.concat([node.name])
  for (const childGuid of node.visibleChildren) {
    const childNode = scene.get(childGuid)
    if (childNode) {
      addChildToInstanceTree(childNode, currentParent, scene, fileKey, openLibraryKey, nextPath)
    }
  }
}

// --- Helper: Returns a function to get best matching variant ---
function getBestMatchingVariant(scene: SceneGraph) {
  return (template: any, guid: string) => {
    const node = scene.get(guid)
    return node && template ? findBestMatchingVariant(template, node) : null
  }
}

// --- Exported names (keep original names for compatibility) ---
export const Ur = generatePlaygroundInstanceCode
export const cH = breakInTemplateExecutionAtom
export const qZ = generateInstanceCode
