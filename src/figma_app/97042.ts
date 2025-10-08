import { reportError } from "../905/11"
import { computeBackingGUIDs } from "../905/92359"
import { ServiceCategories } from "../905/165054"
import { isInvalidValue } from "../905/216495"
import { getFeatureFlags } from "../905/601108"
import { defaultSessionLocalIDString } from "../905/871411"
import { atomStoreManager, useAtomWithSubscription } from "../figma_app/27355"
import { CodeConnectForNodeLk, FileCanAccessFullCodeConnect } from "../figma_app/43951"
import { hasResourcePresetKey } from "../figma_app/255679"
import { zV } from "../figma_app/410317"
import { openFileLibraryKeyAtom, useCurrentFileKey } from "../figma_app/516028"
import { setupResourceAtomHandler } from "../figma_app/566371"

const NODE_ID_PATTERN = /(#\d+:\d+)/g

function parseBooleanValue(value: any): any {
  if (typeof value === "string") {
    const lowercased = value.toLowerCase()
    if (lowercased === "true" || lowercased === "yes" || lowercased === "on")
      return true
    if (lowercased === "false" || lowercased === "no" || lowercased === "off")
      return false
  }
  return value
}

function normalizeWhitespace(str: string): string {
  return str.replace(/\s+/g, " ")
}

function sanitizePropertyName(str: string): string {
  return str.replace(NODE_ID_PATTERN, "").replace(/\s+/g, " ").trim()
}
export function getComponentProperties(node: any): Record<string, any> {
  try {
    if (node.type === "INSTANCE") {
      return Object.entries(node.componentProperties()).reduce((acc, [propName, propValue]) => ({
        ...acc,
        [sanitizePropertyName(propName)]: propValue,
      }), {})
    }
    if (node.type === "SYMBOL") {
      if (node.isState) {
        return (function getStateComponentProperties(stateNode: any) {
          if (!stateNode.parentNode)
            return {}
          const variantProps = Object.entries(stateNode.variantProperties() ?? {}).reduce((acc, [propName, propValue]) => ({
            ...acc,
            [propName]: {
              value: propValue,
              type: "VARIANT",
            },
          }), {})
          return Object.entries<{defaultValue: any; type: string}>(stateNode.parentNode.componentPropertyDefinitions()).reduce((acc, [propName, propDef]) => propDef.type === "VARIANT"
            ? acc
            : {
                ...acc,
                [sanitizePropertyName(propName)]: {
                  value: propDef.defaultValue,
                  type: propDef.type,
                },
              }, {
            ...variantProps,
          })
        }(node))
      }
      return Object.entries<{defaultValue: any; type: string}>(node.componentPropertyDefinitions()).reduce((acc, [propName, propDef]) => ({
        ...acc,
        [sanitizePropertyName(propName)]: {
          value: propDef.defaultValue,
          type: propDef.type,
        },
      }), {})
    }
  }
  catch (error) {
    error.message !== "Component set for node has existing errors" && reportError(ServiceCategories.DEVELOPER_TOOLS, error)
  }
  return {}
}
export function findBestMatchingVariant(variants: any[], node: any): any | null {
  let maxMatches = 0
  let bestMatch = null
  const nodeProps = getComponentProperties(node)

  for (const variant of variants) {
    let matchCount = 0
    const allPropsMatch = Object.entries(variant.variant ?? {}).every(([variantKey, variantValue]) => {
      const normalizedKey = normalizeWhitespace(variantKey)
      const normalizedNodeProps = Object.entries(nodeProps).reduce((acc, [key, prop]) => ({
        ...acc,
        [normalizeWhitespace(key)]: {
          type: prop.type,
          value: parseBooleanValue(prop.value),
        },
      }), {})
      const nodeProp = normalizedNodeProps[normalizedKey]
      return nodeProp?.value === parseBooleanValue(variantValue) ? (matchCount++, true) : nodeProp === undefined
    })

    if (allPropsMatch && (!bestMatch || matchCount > maxMatches)) {
      bestMatch = variant
      maxMatches = matchCount
    }
  }
  return bestMatch
}
export function getPublishedNodeId(node: any): string | null {
  return (node?.publishID && node?.publishID !== defaultSessionLocalIDString ? node?.publishID : node?.guid) ?? null
}
export function getBackingNodeInfo(nodeId: string, nodeMap: any, fallbackLibraryKey: string): any {
  const node = nodeMap.get(nodeId)
  if (!node) {
    return {
      backingLibraryKey: null,
      backingNodeId: null,
    }
  }

  const {
    backingSymbolGUID,
    backingStateGroupGUID,
  } = computeBackingGUIDs(new Set([(node?.type === "INSTANCE" ? node?.symbolId : node?.guid) ?? ""]), nodeMap)

  let backingSymbol = null
  let backingStateGroup = null

  if (!isInvalidValue(backingSymbolGUID) && backingSymbolGUID !== null) {
    backingSymbol = nodeMap.get(backingSymbolGUID)
  }
  if (!isInvalidValue(backingStateGroupGUID) && backingStateGroupGUID !== null) {
    backingStateGroup = nodeMap.get(backingStateGroupGUID)
  }

  if (node.type === "INSTANCE" && node.symbolId) {
    const symbol = nodeMap.get(node.symbolId)
    if (symbol?.isState) {
      const libraryKey = backingStateGroup?.sourceLibraryKey
      return {
        backingNodeId: getPublishedNodeId(backingStateGroup),
        backingComponentKey: backingSymbol?.componentKey ?? void 0,
        backingStateGroupKey: backingStateGroup?.stateGroupKey ?? void 0,
        backingLibraryKey: libraryKey !== "" ? libraryKey : fallbackLibraryKey,
      }
    }
    {
      const libraryKey = backingSymbol?.sourceLibraryKey
      return {
        backingNodeId: getPublishedNodeId(backingSymbol),
        backingComponentKey: backingSymbol?.componentKey ?? void 0,
        backingLibraryKey: libraryKey !== "" ? libraryKey : fallbackLibraryKey,
      }
    }
  }

  return node.type === "SYMBOL"
    ? node.isState
      ? {
          backingNodeId: getPublishedNodeId(node.parentNode),
          backingLibraryKey: node.parentNode?.sourceLibraryKey && node.parentNode?.sourceLibraryKey !== "" ? node.parentNode?.sourceLibraryKey : fallbackLibraryKey,
          backingStateGroupKey: node.parentNode?.stateGroupKey ?? void 0,
        }
      : {
          backingNodeId: getPublishedNodeId(node),
          backingLibraryKey: node.sourceLibraryKey !== "" ? node.sourceLibraryKey : fallbackLibraryKey,
          backingComponentKey: node.componentKey ?? void 0,
        }
    : {
        backingLibraryKey: null,
        backingNodeId: null,
      }
}
export function hasCodeConnect(nodeId: string, nodeMap: any): boolean {
  const node = nodeMap.get(nodeId)
  const currentFileKey = useCurrentFileKey()
  const openLibraryKey = useAtomWithSubscription(openFileLibraryKeyAtom)

  const [filePermission] = setupResourceAtomHandler(FileCanAccessFullCodeConnect({
    key: currentFileKey ?? "",
  })) as any[]

  const {
    backingNodeId,
    backingLibraryKey,
  } = getBackingNodeInfo(nodeId, nodeMap, openLibraryKey)

  const isCommunityLibrary = hasResourcePresetKey(backingLibraryKey ?? "")
  const codeConnectStore = atomStoreManager.get(zV)
  const hasNoPermission = filePermission.data?.file?.status === "loaded" && !filePermission.data.file?.data?.hasPermission && !isCommunityLibrary

  const [codeConnectData] = setupResourceAtomHandler(CodeConnectForNodeLk({
    libraryKey: backingLibraryKey ?? "",
    nodeId: backingNodeId ?? "",
    instances: [],
    openFileKey: currentFileKey ?? "",
    isCommunityLibrary,
  }), {
    enabled: !!backingLibraryKey && !!backingNodeId && !!getFeatureFlags().dt_figmadoc && !hasNoPermission,
  }) as any[]

  if (hasNoPermission || !node || !getFeatureFlags().dt_figmadoc)
    return false

  const fileData = codeConnectData.data?.file
  return codeConnectStore?.nodesWithCodeConnect && fileData?.status !== "loaded"
    ? codeConnectStore?.nodesWithCodeConnect.has(createNodeKey(backingLibraryKey, backingNodeId))
    : !!(fileData && fileData.status === "loaded" && fileData.data && fileData.data?.code_connect_for_node_lk && fileData.data?.code_connect_for_node_lk.length > 0)
}
export function createNodeKey(libraryKey: string, nodeId: string): string {
  return `${libraryKey},${nodeId}`
}
export function parseCodeConnectForDisplay({
  codeConnect,
  node,
  label,
  filePermissionData,
}: {
  codeConnect: any[]
  node: any
  label?: string
  filePermissionData: any
}): any {
  const hasNoPermission = filePermissionData?.file?.status === "loaded" && !filePermissionData.file.data?.hasPermission
  const availableLabels = codeConnect.map(doc => doc.label).filter(Boolean).sort((a, b) => a.localeCompare(b)) ?? []
  const selectedDoc = selectCodeConnectDoc(codeConnect, label)

  if (!selectedDoc || hasNoPermission) {
    return {
      id: null,
      updatedAt: null,
      doc: null,
      loaded: true,
      availableLabels,
      instanceFigmadocs: {},
      disabled: false,
    }
  }

  let parsedDocs = []
  let instanceDocs = {}

  try {
    if (selectedDoc.instanceFigmadocs) {
      instanceDocs = Object.fromEntries(
        Object.entries(selectedDoc.instanceFigmadocs).map(([key, value]) => [key, JSON.parse(value as string)]),
      )
    }
  }
  catch {}

  try {
    parsedDocs = JSON.parse(selectedDoc.figmadoc)
  }
  catch (error) {
    reportError(ServiceCategories.DEVELOPER_TOOLS, error, {
      extra: {
        figmadoc: selectedDoc.figmadoc,
      },
    })
    return {
      id: null,
      updatedAt: null,
      doc: null,
      loaded: true,
      availableLabels,
      instanceFigmadocs: {},
      disabled: true,
    }
  }

  const {
    id,
    updatedAt,
  } = selectedDoc

  if (!Array.isArray(parsedDocs)) {
    parsedDocs = [parsedDocs]
  }

  if ("type" in parsedDocs[0] && parsedDocs[0].type === "snippet") {
    return {
      id,
      updatedAt,
      doc: parsedDocs[0],
      loaded: true,
      availableLabels,
      instanceFigmadocs: instanceDocs,
      disabled: false,
    }
  }

  if ("template" in parsedDocs[0]) {
    return {
      id,
      updatedAt,
      doc: findBestMatchingVariant(parsedDocs, node),
      instanceFigmadocs: instanceDocs,
      loaded: true,
      availableLabels,
      disabled: false,
    }
  }

  return {
    id,
    updatedAt,
    doc: null,
    loaded: true,
    availableLabels,
    instanceFigmadocs: instanceDocs,
    disabled: true,
  }
}
export function getCodeConnectForNode(nodeId: string, nodeMap: any, preferredLabel?: string, overrideNode?: any): any {
  let codeConnectDocs: any
  const node = nodeMap.get(nodeId)
  const currentFileKey = useCurrentFileKey()
  const openLibraryKey = useAtomWithSubscription(openFileLibraryKeyAtom)

  const [filePermission] = setupResourceAtomHandler(FileCanAccessFullCodeConnect({
    key: currentFileKey ?? "",
  })) as any[]

  const codeConnectStore = atomStoreManager.get(zV)
  const {
    backingNodeId,
    backingLibraryKey,
  } = getBackingNodeInfo(nodeId, nodeMap, openLibraryKey)

  const isCommunityLibrary = hasResourcePresetKey(backingLibraryKey ?? "")
  const instanceKeys = collectInstanceKeys(nodeId, nodeMap, currentFileKey, !!overrideNode, openLibraryKey)

  const hasPreloadedDocs = !!backingLibraryKey && (function checkPreloadedDocs(libraryKey: string, nodeId: string, instances: string[]): boolean {
    if (!libraryKey || !nodeId)
      return false

    const store = atomStoreManager.get(zV)
    if (!store || !store.docsById || !store.docsById[`key-${libraryKey},${nodeId}`])
      return false

    for (const instanceKey of instances) {
      if (!store.docsById[`key-${instanceKey}`])
        return false
    }
    return true
  }(backingLibraryKey, backingNodeId, instanceKeys))

  let preloadedDocs = null
  const hasNoPermission = filePermission.data?.file?.status === "loaded" && !filePermission.data.file?.data?.hasPermission && !isCommunityLibrary

  const [codeConnectData] = setupResourceAtomHandler(CodeConnectForNodeLk({
    libraryKey: backingLibraryKey ?? "",
    nodeId: backingNodeId ?? "",
    instances: instanceKeys,
    openFileKey: currentFileKey ?? "",
    isCommunityLibrary,
  }), {
    enabled: !!backingLibraryKey && !!backingNodeId && !!getFeatureFlags().dt_figmadoc && !hasNoPermission,
  }) as any[]

  if ((hasNoPermission && !hasPreloadedDocs) || !backingLibraryKey || !backingNodeId) {
    return {
      id: null,
      updatedAt: null,
      doc: null,
      loaded: true,
      availableLabels: [],
      instanceFigmadocs: {},
      disabled: true,
      isCommunityKey: isCommunityLibrary,
      isComponentBrowserMapping: false,
    }
  }

  if (hasPreloadedDocs && codeConnectStore?.docsById) {
    try {
      preloadedDocs = JSON.parse(codeConnectStore?.docsById[`key-${backingLibraryKey},${backingNodeId}`])
    }
    catch {
      preloadedDocs = null
    }
  }

  if (!node || !getFeatureFlags().dt_figmadoc) {
    return {
      id: null,
      updatedAt: null,
      doc: null,
      loaded: true,
      availableLabels: [],
      instanceFigmadocs: {},
      disabled: true,
      isCommunityKey: isCommunityLibrary,
      isComponentBrowserMapping: false,
    }
  }

  let isPreLoaded = false
  const fileData = codeConnectData.data?.file

  if (fileData && fileData.status === "loaded" && fileData.data && fileData.data?.code_connect_for_node_lk && fileData.data?.code_connect_for_node_lk.length > 0) {
    codeConnectDocs = fileData.data?.code_connect_for_node_lk
  }
  else {
    if (!preloadedDocs || fileData?.status === "loaded") {
      return {
        id: null,
        updatedAt: null,
        doc: null,
        loaded: codeConnectData.status !== "loading",
        availableLabels: [],
        instanceFigmadocs: {},
        willHaveCodeConnect: (codeConnectData.status === "loading" && codeConnectStore?.nodesWithCodeConnect.has(createNodeKey(backingLibraryKey, backingNodeId))) ?? false,
        disabled: fileData?.status !== "loaded",
        isCommunityKey: isCommunityLibrary,
        isComponentBrowserMapping: false,
      }
    }
    isPreLoaded = true
    codeConnectDocs = preloadedDocs
  }
  const availableLabels = codeConnectDocs.map((doc: any) => doc.label).filter(Boolean).sort((a: string, b: string) => a.localeCompare(b)) ?? []
  const selectedDoc = selectCodeConnectDoc(codeConnectDocs, preferredLabel)

  if (!selectedDoc) {
    return {
      id: null,
      updatedAt: null,
      doc: null,
      loaded: true,
      availableLabels,
      instanceFigmadocs: {},
      disabled: false,
      isCommunityKey: isCommunityLibrary,
      isComponentBrowserMapping: false,
    }
  }

  let parsedDocs = []
  let instanceDocs = {}

  try {
    if (preloadedDocs && codeConnectStore?.docsById) {
      for (const instanceKey of instanceKeys) {
        const instanceDocData = selectCodeConnectDoc(JSON.parse(codeConnectStore?.docsById[`key-${instanceKey}`]), preferredLabel)
        instanceDocs[`key-${instanceKey}`] = JSON.parse(instanceDocData.figmadoc)
      }
    }
    else {
      if (selectedDoc.instanceFigmadocs) {
        instanceDocs = Object.fromEntries(
          Object.entries(selectedDoc.instanceFigmadocs).map(([key, value]) => [key, JSON.parse(value as string)]),
        )
      }
    }
  }
  catch {}

  try {
    parsedDocs = JSON.parse(selectedDoc.figmadoc)
  }
  catch (error) {
    reportError(ServiceCategories.DEVELOPER_TOOLS, error, {
      extra: {
        figmadoc: selectedDoc.figmadoc,
      },
    })
    return {
      id: null,
      updatedAt: null,
      doc: null,
      loaded: true,
      availableLabels,
      instanceFigmadocs: {},
      disabled: true,
      isCommunityKey: isCommunityLibrary,
      isComponentBrowserMapping: false,
    }
  }

  const {
    id,
    updatedAt,
  } = selectedDoc

  if (!Array.isArray(parsedDocs)) {
    parsedDocs = [parsedDocs]
  }

  const isComponentBrowserMapping = selectedDoc.type === "component_browser"

  if ("type" in parsedDocs[0] && parsedDocs[0].type === "snippet") {
    return {
      id,
      updatedAt,
      doc: parsedDocs[0],
      loaded: true,
      availableLabels,
      instanceFigmadocs: instanceDocs,
      disabled: false,
      isCommunityKey: isCommunityLibrary,
      isComponentBrowserMapping,
    }
  }

  if ("template" in parsedDocs[0]) {
    return {
      id,
      updatedAt,
      doc: findBestMatchingVariant(parsedDocs, overrideNode ?? node),
      instanceFigmadocs: instanceDocs,
      loaded: true,
      availableLabels,
      disabled: false,
      isCommunityKey: isCommunityLibrary,
      isPreLoaded,
      isComponentBrowserMapping,
    }
  }

  return {
    id,
    updatedAt,
    doc: null,
    loaded: true,
    availableLabels,
    instanceFigmadocs: instanceDocs,
    disabled: true,
    isCommunityKey: isCommunityLibrary,
    isComponentBrowserMapping: false,
  }
}
export function selectCodeConnectDoc(docs: any[], preferredLabel?: string): any {
  const defaultPriority = [
    (doc: any) => doc.type === "figmadoc" && doc.label === "React",
    (doc: any) => doc.type === "figmadoc" && doc.label === "Storybook",
    (doc: any) => doc.type === "figmadoc" && doc.label === "SwiftUI",
    (doc: any) => doc.type === "snippet",
  ]

  if (preferredLabel) {
    defaultPriority.unshift((doc: any) => doc.label === preferredLabel)
  }

  for (const predicate of defaultPriority) {
    const match = docs.find(predicate)
    if (match)
      return match
  }
  return docs[0]
}
export function getInstanceBackingKey(node: any, nodeMap: any, fallbackLibraryKey: string): string | null {
  if (node.type !== "INSTANCE")
    return null

  const symbolId = node.symbolId
  if (!symbolId)
    return null

  const backingInfo = (function computeBackingInfo(symbolId: string, nodeMap: any, fallbackKey: string) {
    const {
      backingSymbolGUID,
      backingStateGroupGUID,
    } = computeBackingGUIDs(new Set([symbolId]), nodeMap)

    if (isInvalidValue(backingSymbolGUID) || backingSymbolGUID === null)
      return null

    const backingSymbol = nodeMap.get(backingSymbolGUID)
    const backingStateGroup = isInvalidValue(backingStateGroupGUID) || backingStateGroupGUID === null
      ? null
      : nodeMap.get(backingStateGroupGUID)

    if (backingStateGroup) {
      return {
        backingNodeId: getPublishedNodeId(backingStateGroup),
        backingLibraryKey: backingStateGroup.sourceLibraryKey !== "" ? backingStateGroup.sourceLibraryKey : fallbackKey,
      }
    }

    if (backingSymbol) {
      return {
        backingNodeId: getPublishedNodeId(backingSymbol),
        backingLibraryKey: backingSymbol.sourceLibraryKey !== "" ? backingSymbol.sourceLibraryKey : fallbackKey,
      }
    }

    return null
  }(symbolId, nodeMap, fallbackLibraryKey))

  if (!backingInfo)
    return null

  const {
    backingNodeId,
    backingLibraryKey,
  } = backingInfo

  return createNodeKey(backingLibraryKey, backingNodeId)
}
export enum TraversalAction {
  Continue = 0,
  SkipChildren = 1,
  Stop = 2,
}
export function traverseNodeTree(rootNode: any, nodeMap: any, visitor: (node: any) => TraversalAction, visibleOnly: boolean = false): void {
  const stack = [rootNode]

  while (stack.length > 0) {
    const currentNode = stack.pop()
    if (!currentNode)
      continue

    const action = visitor(currentNode)

    if (action === TraversalAction.Stop)
      return

    if (action === TraversalAction.SkipChildren)
      continue

    const children = visibleOnly ? currentNode.visibleChildren : currentNode.childrenGuids
    for (const childId of children) {
      const childNode = nodeMap.get(childId)
      if (childNode) {
        stack.push(childNode)
      }
    }
  }
}
export function collectInstanceKeys(nodeId: string, nodeMap: any, currentFileKey: string | null, includeHidden: boolean, fallbackLibraryKey: string): string[] {
  if (!currentFileKey)
    return []

  const instanceKeys = new Set<string>()
  const rootNode = nodeMap.get(nodeId)

  if (!rootNode)
    return []

  traverseNodeTree(rootNode, nodeMap, (node) => {
    if (node.type === "INSTANCE") {
      const instanceKey = getInstanceBackingKey(node, nodeMap, fallbackLibraryKey)
      if (instanceKey) {
        instanceKeys.add(instanceKey)
      }
    }
    return TraversalAction.Continue
  }, !includeHidden)

  return Array.from(instanceKeys.values())
}
export const Bn = TraversalAction
export const Gl = getInstanceBackingKey
export const HX = getBackingNodeInfo
export const Ji = getComponentProperties
export const Xe = selectCodeConnectDoc
export const _3 = getCodeConnectForNode
export const ad = collectInstanceKeys
export const kN = findBestMatchingVariant
export const mr = hasCodeConnect
export const ph = traverseNodeTree
export const te = getPublishedNodeId
export const xQ = parseCodeConnectForDisplay
export const zi = createNodeKey
