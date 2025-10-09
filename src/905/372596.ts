import { consentAllowedAtom } from "../905/18800"
import { shouldEnableSprigAnalytics } from "../905/62762"
import { debugState } from "../905/407919"
import { getBoundVariables } from "../905/882689"
import { SprigSDKManager } from "../905/931912"
import { atomStoreManager } from "../figma_app/27355"
import { trackDefinedFileEvent } from "../figma_app/314264"
import { getMcpSettings } from "../figma_app/342355"
import { traverseChildren } from "../figma_app/387100"
import { SdkMessageType } from "../figma_app/714966"
// Renamed variables, added types, simplified logic, improved readability
interface ToolCallMetrics {
  numComponents: number
  numInstances: number
  numVariables: number
  numChildren: number
  nodeType: string
  colorVariablesUsed: number
  effectStylesUsed: number
  framesWithAutoLayout: number
  framesWithGridLayout: number
  responseSize: number
  nodesWithCodeConnect: number
  numHiddenNodes: number
  isComponentSet: boolean
  nodesWithCodeConnectV1: number
  nodesWithCodeConnectLibrary: number
  nodesWithCodeConnectSnippet: number
  nodesWithAnnotations: number
}

interface NodeData {
  visible?: boolean
  annotations?: any[]
  type: string
  isStateGroup?: boolean
  stackMode?: string
  boundVariables?: any
  childrenNodes?: any[]
  id: string
  effects?: Array<{ visible: boolean }>
}

interface CodeConnectEntry {
  snippet?: boolean
  version?: string
}

interface StoreState {
  openFile?: { key: string }
  mirror: { sceneGraphSelection: Record<string, any> }
}

interface StoreContext {
  getState: () => StoreState
}

export function trackToolCallDuration(operation: string, durationMs: number, toolName: string) {
  trackDefinedFileEvent(
    "mcp.client_tool_call_duration_split",
    debugState.getState().openFile?.key || "",
    debugState.getState(),
    {
      operation,
      durationMs: Math.round(durationMs),
      toolName,
    },
  )
}

export function analyzeToolCallResult({
  store,
  startingNode,
  codeSyntax,
  responseSize,
  toolArgs,
  toolName,
  codeConnectMapping,
}: {
  store: StoreContext
  startingNode: NodeData
  codeSyntax: string
  responseSize: number
  toolArgs: any
  toolName: string
  codeConnectMapping: Record<string, CodeConnectEntry>
}) {
  const metrics: ToolCallMetrics = {
    numComponents: 0,
    numInstances: 0,
    numVariables: 0,
    numChildren: 0,
    nodeType: startingNode.type,
    colorVariablesUsed: 0,
    effectStylesUsed: 0,
    framesWithAutoLayout: 0,
    framesWithGridLayout: 0,
    responseSize,
    nodesWithCodeConnect: 0,
    numHiddenNodes: 0,
    isComponentSet: false,
    nodesWithCodeConnectV1: 0,
    nodesWithCodeConnectLibrary: 0,
    nodesWithCodeConnectSnippet: 0,
    nodesWithAnnotations: 0,
  }

  const variableMap = new Map<string, string>()

  traverseChildren(startingNode, (node: NodeData) => {
    // Count hidden nodes
    if (!node.visible) {
      metrics.numHiddenNodes += 1
      return
    }

    // Count annotated nodes
    if (node.annotations && node.annotations.length > 0) {
      metrics.nodesWithAnnotations += 1
    }

    // Count components and instances
    if (node.type === "SYMBOL") {
      metrics.numComponents += 1
    }
    else if (node.type === "INSTANCE") {
      metrics.numInstances += 1
    }

    // Check if component set
    if (node.isStateGroup) {
      metrics.isComponentSet = true
    }

    // Count frames with layout types
    if (node.type === "FRAME") {
      if (["HORIZONTAL", "VERTICAL"].includes(node.stackMode || "")) {
        metrics.framesWithAutoLayout += 1
      }
      if (node.stackMode === "GRID") {
        metrics.framesWithGridLayout += 1
      }
    }

    // Collect bound variables
    if (node.boundVariables) {
      getBoundVariables(node, codeSyntax).forEach((variable) => {
        if (variable && variable.value !== null) {
          variableMap.set(variable.codeSyntaxName || variable.name, variable.type)
        }
      })
    }

    // Count children nodes
    if (node.childrenNodes) {
      metrics.numChildren += node.childrenNodes.length
    }

    // Analyze code connect mappings
    if (node.id in codeConnectMapping) {
      const mapping = codeConnectMapping[node.id]
      if (mapping) {
        metrics.nodesWithCodeConnect += 1
        if (mapping.snippet) {
          metrics.nodesWithCodeConnectSnippet += 1
        }
        if (mapping.version === "figmadoc") {
          metrics.nodesWithCodeConnectV1 += 1
        }
        if (mapping.version === "component_browser") {
          metrics.nodesWithCodeConnectLibrary += 1
        }
      }
    }

    // Count visible effects
    let visibleEffectsCount = 0
    if (node.effects && node.effects.length > 0) {
      visibleEffectsCount = node.effects.filter(effect => effect.visible).length
    }
    metrics.effectStylesUsed += visibleEffectsCount
  })

  // Process collected variables
  metrics.numVariables = variableMap.size
  variableMap.forEach((type) => {
    if (type === "color") {
      metrics.colorVariablesUsed += 1
    }
  })

  // Track completion event
  trackDefinedFileEvent(
    "mcp.client_tool_call_completed",
    store.getState().openFile?.key || "",
    store.getState(),
    {
      toolArgs: JSON.stringify(toolArgs),
      currentSelection: JSON.stringify(Object.keys(store.getState().mirror.sceneGraphSelection)),
      rawToolName: toolName,
      toolName,
      clientLanguages: toolArgs?.clientLanguages,
      clientFrameworks: toolArgs?.clientFrameworks,
      ...metrics,
      ...getMcpSettings(),
    },
  )
}

export function trackToolUsage(toolName: string) {
  const consentAllowed = atomStoreManager.get(consentAllowedAtom)

  if (shouldEnableSprigAnalytics({
    canUseCookieForAnalytics: consentAllowed,
    geofence: {},
  })) {
    SprigSDKManager.sendMessage({
      type: SdkMessageType.Call,
      content: {
        args: ["track", "mcp_tool_used", { toolName }],
      },
    })
  }
}

export const CX = trackToolUsage
export const Kl = analyzeToolCallResult
export const w6 = trackToolCallDuration
