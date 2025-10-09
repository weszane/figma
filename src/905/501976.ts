import { z } from "zod"
import { reportError } from "../905/11"
import { MCP_INTERNAL_GET_PROMPT, MCP_INTERNAL_GET_PROMPTS_LIST, MCP_INTERNAL_GET_RESOURCE, MCP_INTERNAL_GET_RESOURCES_LIST, MCP_INTERNAL_GET_TOOLS } from "../905/106287"
import { ServiceCategories } from "../905/165054"
import { mapPlatformToFramework } from "../905/359509"
import { analyzeToolCallResult, trackToolUsage } from "../905/372596"
import { debugState } from "../905/407919"
import { globalPerfTimer } from "../905/542194"
import { Q } from "../905/577205"
import { getFeatureFlags } from "../905/601108"
import { collectNodeVariablesAndStyles } from "../905/882689"
import { postUserFlag } from "../905/985254"
import { atomStoreManager } from "../figma_app/27355"
import { getBackingNodeInfo } from "../figma_app/97042"
import { FFileType } from "../figma_app/191312"
import { trackDefinedFileEvent } from "../figma_app/314264"
import { codebaseSuggestionsEnabledAtom, codeConnectToolsEnabledAtom, codeOptionsAtom, getMcpSettings, getMcpSettingsExternal, imageOptionsWithMount, mockCodebaseSuggestions, mockCodeConnect, mockDirForImageWritesAtom, useTailwindAtom } from "../figma_app/342355"
import { canAccessFullDevMode } from "../figma_app/473493"
import { canAccessFullCodeConnectByKey, getCodeConnectMapping } from "../figma_app/484865"
import { selectOpenFile, selectOpenFileKey, selectOpenFileLibraryKey } from "../figma_app/516028"
import { fetchDynamicConfig } from "../figma_app/594947"
import { getImageManager } from "../figma_app/624361"
import { normalizeCodegenLanguage } from "../figma_app/655139"
import { pageMarkupAtom, selectionMarkupAtom, topLevelFrameMarkupAtom } from "../figma_app/681951"
import { ADD_CODE_CONNECT_LINK, addCodeConnectLinkTool, clientContextSchema, componentLinkSchema, CREATE_DESIGN_SYSTEM_RULES, createCodeConnectRule, DESIGN_SYSTEM_PROMPT, DESIGN_SYSTEM_RULES_PROMPT, designSystemRulesPromptTool, GENERATE_CODE_PROMPT, GENERATE_CODE_RULE, generateNodeMarkup, GET_CODE, GET_CODE_CONNECT_MAP, GET_CODE_FOR_SELECTION, GET_IMAGE, GET_METADATA, GET_VARIABLE_DEFS, getCodeConnectMapTool, getCodeTool, getCodeWithAssetDirTool, getImageTool, getMetadataTool, getVariableDefsTool, isMetadata, isMetadataOrCode, LINK_CODE_CONNECT_PROMPT, LINK_SELECTION_TO_CODE_CONNECT, mainConfigSchema, nodeContextSchema, nodeContextWithOptionalAssetDirSchema, resolveNodes, SET_CODEGEN_CONFIG, setCodegenConfigTool } from "../figma_app/728005"
import { EditorPreferencesApi } from "../figma_app/740163"
import { isDevModeMcpDisabled } from "../figma_app/802241"
import { generateCodeFromDesign } from "../figma_app/911720"
import { A as _$$A } from "../figma_app/932979"
import { countChildNodes, DEFAULT_MAX_NODE_COUNT, scaleValue } from "../figma_app/935144"

// Refactored from minified JavaScript in /Users/allen/sigma-main/src/905/501976.ts
// Changes: Renamed minified variables to descriptive names (e.g., x to linkNodeToCodeConnect), added TypeScript interfaces and types for type safety, improved indentation and comments for readability, simplified nested conditionals where possible, identified potential performance issue in image export (synchronous FileReader in async context), preserved all functionality.

// Define types for better type safety
interface Node {
  type: string
  guid: string
  isStateGroup?: boolean
  absoluteBoundingBox: {
    w: number
    h: number
  }
  childrenGuids?: string[]
  visible?: boolean
  name: string
  x: number
  y: number
  isIconLikeContainer?: boolean
  isDevModeAsset?: boolean
  loadImagesAndExport: (options: any[]) => Promise<any>
}
interface SceneGraph {
  get: (guid: string) => Node | undefined
}
interface ToolArgs {
  [key: string]: any
}
interface Store {
  getState: () => any
  dispatch: (action: any) => void
}
interface ClientInfo {
  name?: string
}
interface ImageConstraint {
  type: "CONTENT_WIDTH" | "CONTENT_HEIGHT"
  value: number
}
interface ToolResponse {
  content: Array<{
    type: string
    text?: string
    data?: string
    mimeType?: string
  }>
}
interface CodeConnectMapping {
  [key: string]: any
}
interface ProcessToolCallResult {
  response: ToolResponse
  codeConnectMapping?: CodeConnectMapping
}

// Error messages
const NODE_NOT_COMPONENT_ERROR = "Node is not a component or state group, cannot link via Code Connect."
const UNKNOWN_TOOL_ERROR = "[MCP server] Unknown tool name"
const CODE_CONNECT_PLAN_ERROR = "Code Connect is only available on the Organization and Enterprise plans"

// Track tool call counts for analytics
const toolCallCounts: Record<string, number> = {}

// Function to link a node to Code Connect
async function linkNodeToCodeConnect({
  node,
  sceneGraph,
  name,
  srcPath,
}: {
  node: Node
  sceneGraph: SceneGraph
  name: string
  srcPath: string
}): Promise<string> {
  if (node.type !== "SYMBOL" && !node.isStateGroup) {
    throw new Error(NODE_NOT_COMPONENT_ERROR)
  }
  const state = debugState.getState()
  const openFileLibraryKey = selectOpenFileLibraryKey(state)
  const openFileKey = selectOpenFileKey(state)
  const {
    backingNodeId,
    backingLibraryKey,
  } = getBackingNodeInfo(node.guid, sceneGraph, openFileLibraryKey)
  if (!backingLibraryKey || !openFileKey || !backingNodeId || !openFileLibraryKey) {
    throw new Error(`Failed to link node ${node.guid} to Code Connect. Missing backing library key, open file key, or backing node ID. Backing Library Key: ${backingLibraryKey}, Open File Key: ${openFileKey}, Backing Node ID: ${backingNodeId}`)
  }
  try {
    await Q.createCodeConnectMap({
      library_key: backingLibraryKey,
      node_id: backingNodeId,
      template: "",
      component_name: name,
      source_path: srcPath,
      status: "connected",
    })
    return `Successfully linked node ${node.guid} to Code Connect with source path ${srcPath} and name ${name}.`
  }
  catch (error) {
    console.error(error)
    reportError(ServiceCategories.DEVELOPER_TOOLS, error as Error, {
      extra: {
        backingLibraryKey,
        openFileKey,
        name,
        srcPath,
      },
    })
    throw error
  }
}

// Function to track when image constraints are hit
function trackImageConstraintHit({
  imageWidth,
  imageHeight,
  constraint,
}: {
  imageWidth: number
  imageHeight: number
  constraint: number
}): void {
  trackDefinedFileEvent("mcp.get_image.constraint_hit", debugState.getState().openFile?.key || "", debugState.getState(), {
    imageWidth,
    imageHeight,
    constraint,
  })
}

// Function to export an image as base64
async function exportImageAsBase64(node: Node): Promise<ToolResponse> {
  // Calculate constraint if needed
  const constraint = (function (node: Node, maxSize: number | null): ImageConstraint | null {
    if (!maxSize)
      return null
    const {
      w,
      h,
    } = node.absoluteBoundingBox
    if (w <= maxSize && h <= maxSize)
      return null
    if (w > maxSize && w >= h) {
      trackImageConstraintHit({
        imageWidth: w,
        imageHeight: h,
        constraint: maxSize,
      })
      return {
        type: "CONTENT_WIDTH",
        value: maxSize,
      }
    }
    if (h > maxSize && h >= w) {
      trackImageConstraintHit({
        imageWidth: w,
        imageHeight: h,
        constraint: maxSize,
      })
      return {
        type: "CONTENT_HEIGHT",
        value: maxSize,
      }
    }
    return null
  }(node, (await fetchDynamicConfig("dt_mcp_image_dimension_resizing_value")).get("constraint", null)))
  const imageData = await node.loadImagesAndExport([{
    imageType: "PNG",
    suffix: "png",
    ...(constraint
      ? {
        constraint,
      }
      : {}),
  }])
  if (!imageData) {
    throw new Error("Failed to export image")
  }
  const blob = new Blob([imageData], {
    type: "image/png",
  })
  // Potential performance issue: FileReader is synchronous in an async context; consider using a library for better async handling if this blocks the event loop
  const base64 = await new Promise<string | null>((resolve) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result as string)
    reader.onerror = () => resolve(null)
    reader.readAsDataURL(blob)
  })
  if (!base64) {
    throw new Error("Failed to export image to base64 string")
  }
  const [, data] = base64.split(",")
  return {
    content: [{
      type: "image",
      data,
      mimeType: "image/png",
    }],
  }
}

// Function to generate metadata response for nodes
function generateMetadataResponse(nodes: Node[], sceneGraph: SceneGraph, isMultiSelect: boolean, isOutputSizeTooLarge: boolean): ToolResponse {
  // Helper to recursively generate XML-like markup for a node
  const generateNodeMarkup = (node: Node, sceneGraph: SceneGraph, depth: number): string => {
    const indent = "  ".repeat(depth)
    const attributes = {
      id: node.guid,
      name: node.name.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;"),
      x: node.x,
      y: node.y,
      width: node.absoluteBoundingBox.w,
      height: node.absoluteBoundingBox.h,
    }
    if (!node.visible)
      attributes.hidden = true
    const tagName = node.type.toLowerCase().split("_").join("-")
    const attrString = Object.entries(attributes).filter(([, value]) => value !== undefined).map(([key, value]) => `${key}="${value}"`).join(" ")
    if (node.type === "INSTANCE" || node.type === "SYMBOL" || node.isIconLikeContainer || node.isDevModeAsset) {
      return `${indent}<${tagName} ${attrString} />`
    }
    const childrenMarkup = (node.childrenGuids || []).map((childGuid) => {
      const childNode = sceneGraph.get(childGuid)
      return childNode ? generateNodeMarkup(childNode, sceneGraph, depth + 1) : null
    }).filter(Boolean).join("\n")
    return childrenMarkup.length === 0 ? `${indent}<${tagName} ${attrString} />` : `${indent}<${tagName} ${attrString}>\n${childrenMarkup}\n${indent}</${tagName}>`
  }
  return {
    content: [{
      type: "text",
      text: nodes.map(node => generateNodeMarkup(node, sceneGraph, 0)).join("\n"),
    }, {
      type: "text",
      text: isMultiSelect ? isOutputSizeTooLarge ? "IMPORTANT: The user has selected multiple nodes, so you have received a sparse metadata response. You MUST call get_code on the nodes or their sublayers individually based on their IDs to implement the design." : "IMPORTANT: The design was too large to fit into context with get_code. Instead you have received a sparse metadata response, you MUST call get_code on the IDs of the sublayers to get the full code. Split up the calls to ensure the sublayers do not also exceed the context limit." : "IMPORTANT: After you call this tool, you MUST call get_code if trying to implement the design, since this tool only returns metadata. If you do not call get_code, the agent will not be able to implement the design.",
    }],
  }
}

// Supported tools list
const supportedTools = [GET_CODE, GET_IMAGE, GET_METADATA, GET_CODE_CONNECT_MAP, GET_VARIABLE_DEFS, CREATE_DESIGN_SYSTEM_RULES, ADD_CODE_CONNECT_LINK, ...[SET_CODEGEN_CONFIG]]

// Zod schema for tool validation
const toolSchema = z.discriminatedUnion("toolName", [z.object({
  toolName: z.literal(GET_CODE),
  ...nodeContextWithOptionalAssetDirSchema.shape,
}), z.object({
  toolName: z.literal(GET_IMAGE),
  ...nodeContextSchema.shape,
}), z.object({
  toolName: z.literal(GET_METADATA),
  ...nodeContextSchema.shape,
}), z.object({
  toolName: z.literal(GET_CODE_CONNECT_MAP),
  ...nodeContextSchema.shape,
}), z.object({
  toolName: z.literal(GET_VARIABLE_DEFS),
  ...nodeContextSchema.shape,
}), z.object({
  toolName: z.literal(ADD_CODE_CONNECT_LINK),
  ...componentLinkSchema.shape,
}), z.object({
  toolName: z.literal(SET_CODEGEN_CONFIG),
  ...mainConfigSchema.shape,
}), z.object({
  toolName: z.literal(CREATE_DESIGN_SYSTEM_RULES),
  ...clientContextSchema.shape,
}), z.object({
  toolName: z.literal(MCP_INTERNAL_GET_RESOURCES_LIST),
  isTemplates: z.boolean().describe("Whether to get resources with templates or not"),
}), z.object({
  toolName: z.literal(MCP_INTERNAL_GET_PROMPTS_LIST),
}), z.object({
  toolName: z.literal(MCP_INTERNAL_GET_RESOURCE),
  uri: z.string().describe("The URI of the resource to get"),
}), z.object({
  toolName: z.literal(MCP_INTERNAL_GET_PROMPT),
  promptName: z.string().describe("The name of the prompt to get"),
  args: z.record(z.string(), z.unknown()).optional().describe("The arguments to pass to the prompt"),
})])

// Main handler for MCP tool calls
export async function handleMcpToolCall(toolName: string, args: ToolArgs, store: Store, clientInfo?: ClientInfo): Promise<any> {
  const startTime = performance.now();

  // Validate prerequisites
  (function validatePrerequisites(store: Store): void {
    if (store.getState().selectedView.view !== "fullscreen") {
      throw new Error("The MCP server is only available if your active tab is a Figma design file")
    }
    if (!getFeatureFlags().dt_my_cool_plugin || !EditorPreferencesApi().enableCodegenMcpServer) {
      throw new Error("The MCP server is not enabled for this user")
    }
  })(store)
  store.dispatch(postUserFlag({
    dev_mode_mcp_has_used_a_tool: true,
  }))
  if (toolName === MCP_INTERNAL_GET_TOOLS) {
    const response = {
      tools: [atomStoreManager.get(imageOptionsWithMount) === "write-to-disk" ? getCodeWithAssetDirTool : getCodeTool, getVariableDefsTool, getCodeConnectMapTool, getImageTool, ...(getFeatureFlags().dt_mcp_get_metadata ? [getMetadataTool] : []), ...(getFeatureFlags().dt_my_cool_plugin_internal ? [setCodegenConfigTool] : []), ...(getFeatureFlags().dt_mcp_link_node_via_code_connect ? [addCodeConnectLinkTool] : []), ...(getFeatureFlags().dt_mcp_design_system_rules_tool ? [designSystemRulesPromptTool] : [])],
    }
    trackDefinedFileEvent("mcp.get_tools_call", store.getState().openFile?.key || "", store.getState(), {
      availableTools: JSON.stringify(response.tools.map(tool => tool.name)),
      clientName: clientInfo?.name,
    })
    return response
  }
  const parseResult = toolSchema.safeParse({
    toolName,
    ...args,
  })
  if (!parseResult.success) {
    const error = new Error(`[MCP server] Invalid tool arguments: ${parseResult.error.message}`)
    reportError(ServiceCategories.DEVELOPER_TOOLS, error)
    return error
  }
  const validatedArgs = parseResult.data

  // Handle internal tools
  if (validatedArgs.toolName === MCP_INTERNAL_GET_RESOURCES_LIST) {
    return validatedArgs.isTemplates
      ? {
        resourceTemplates: [],
      }
      : getFeatureFlags().dt_mcp_auto_resources
        ? {
          resources: [{
            uri: "autocomplete://selection",
            name: "Selection Autocomplete code",
          }, {
            uri: "autocomplete://tlf",
            name: "Top Level Frame Autocomplete code",
          }, {
            uri: "autocomplete://page",
            name: "Current Page Autocomplete code",
          }],
        }
        : {
          resources: [],
        }
  }
  if (validatedArgs.toolName === MCP_INTERNAL_GET_PROMPTS_LIST) {
    return {
      prompts: [{
        name: GET_CODE_FOR_SELECTION,
        description: GENERATE_CODE_PROMPT,
      }, {
        name: CREATE_DESIGN_SYSTEM_RULES,
        description: DESIGN_SYSTEM_RULES_PROMPT,
      }, ...(getFeatureFlags().dt_mcp_link_node_via_code_connect
        ? [{
          name: LINK_SELECTION_TO_CODE_CONNECT,
          description: LINK_CODE_CONNECT_PROMPT,
          arguments: [{
            name: "nodeId",
            type: "string",
            required: false,
            description: 'Optional, the ID of the node to generate an image for. When provided, this should be a valid node ID in the Figma document in, eg. "123:456".',
          }, {
            name: "source",
            type: "string",
            required: true,
            description: "The source of the code component to link to. This should be a valid path or URL to the code component in your codebase.",
          }, {
            name: "componentName",
            type: "string",
            required: true,
            description: "The name of the code component to link to. This should match the name of the component in your codebase.",
          }],
        }]
        : [])],
    }
  }
  if (validatedArgs.toolName === SET_CODEGEN_CONFIG && getFeatureFlags().dt_my_cool_plugin_internal) {
    const {
      config,
    } = validatedArgs
    if (!config) {
      const error = new Error("[MCP server] No config provided")
      reportError(ServiceCategories.DEVELOPER_TOOLS, error)
      return error
    }
    atomStoreManager.set(codeOptionsAtom, config.codeOption)
    atomStoreManager.set(codeConnectToolsEnabledAtom, config.codeConnectToolsEnabled)
    atomStoreManager.set(codebaseSuggestionsEnabledAtom, config.codebaseSuggestionsEnabled)
    atomStoreManager.set(imageOptionsWithMount, config.markupImageOptions)
    atomStoreManager.set(mockCodeConnect, config.mockCodeConnect)
    atomStoreManager.set(mockCodebaseSuggestions, config.mockCodebaseSuggestions)
    atomStoreManager.set(useTailwindAtom, config.useTailwind)
    atomStoreManager.set(mockDirForImageWritesAtom, config.mockDirForImageWritesToDisk)
    return {
      content: [{
        type: "text",
        text: `Codegen config set to: ${JSON.stringify(config)}`,
      }],
    }
  }

  // Additional validations
  if (isDevModeMcpDisabled(store.getState())) {
    throw new Error("The MCP server has been disabled by admin")
  }
  if (!(function isDesignFile(store: Store): boolean {
    const file = selectOpenFile({
      openFile: store.getState().openFile ?? null,
    })
    return file?.editorType === FFileType.DESIGN
  }(store))) {
    throw new Error("The MCP server tools are only available for design files.")
  }
  if (!(function hasDevModeAccess(store: Store): boolean {
    return canAccessFullDevMode(store.getState())
  }(store))) {
    throw new Error("The user doesn't have access to Figma Dev Mode which is required to use this, to get access they need to be subscribed to a paid Dev seat in Figma")
  }
  if (validatedArgs.toolName === MCP_INTERNAL_GET_RESOURCE) {
    const {
      uri,
    } = validatedArgs
    return (function getResource(uri: string): any {
      if (!getFeatureFlags().dt_mcp_auto_resources)
        throw new Error("Resources not supported")
      if (uri === "autocomplete://selection") {
        return {
          contents: [{
            uri,
            text: atomStoreManager.get(selectionMarkupAtom) ?? "",
          }],
        }
      }
      if (uri === "autocomplete://tlf") {
        return {
          contents: [{
            uri,
            text: atomStoreManager.get(topLevelFrameMarkupAtom) ?? "",
          }],
        }
      }
      if (uri === "autocomplete://page") {
        return {
          contents: [{
            uri,
            text: atomStoreManager.get(pageMarkupAtom) ?? "",
          }],
        }
      }
      throw new Error("Unknown resource URI")
    }(uri))
  }
  if (validatedArgs.toolName === MCP_INTERNAL_GET_PROMPT) {
    const {
      promptName,
      args: promptArgs,
    } = validatedArgs
    return (function getPrompt(promptName: string, args?: any): any {
      if (promptName === GET_CODE_FOR_SELECTION) {
        return {
          description: GENERATE_CODE_PROMPT,
          messages: [{
            role: "user",
            content: {
              type: "text",
              text: GENERATE_CODE_RULE,
            },
          }],
        }
      }
      if (promptName === CREATE_DESIGN_SYSTEM_RULES) {
        return {
          description: DESIGN_SYSTEM_RULES_PROMPT,
          messages: [{
            role: "user",
            content: {
              type: "text",
              text: DESIGN_SYSTEM_PROMPT,
            },
          }],
        }
      }
      if (promptName === LINK_SELECTION_TO_CODE_CONNECT) {
        return {
          description: LINK_CODE_CONNECT_PROMPT,
          messages: [{
            role: "user",
            content: {
              type: "text",
              text: createCodeConnectRule({
                nodeId: args?.nodeId,
                source: args?.source,
                componentName: args?.componentName,
              }),
            },
          }],
        }
      }
      throw new Error(`Unknown prompt: ${promptName} with args: ${JSON.stringify(args)}`)
    }(promptName, promptArgs))
  }
  const validatedToolName = supportedTools.includes(toolName) ? toolName : "unknown"
  trackDefinedFileEvent("mcp.client_tool_call", store.getState().openFile?.key || "", store.getState(), {
    toolArgs: JSON.stringify(args),
    currentSelection: JSON.stringify(Object.keys(store.getState().mirror.sceneGraphSelection)),
    rawToolName: toolName,
    toolName: validatedToolName,
    clientName: clientInfo?.name,
    clientLanguages: args?.clientLanguages,
    clientFrameworks: args?.clientFrameworks,
    ...getMcpSettings(),
  })
  if (validatedArgs.toolName === CREATE_DESIGN_SYSTEM_RULES) {
    const response = {
      content: [{
        type: "text",
        text: DESIGN_SYSTEM_PROMPT,
      }],
    }
    trackDefinedFileEvent("mcp.client_tool_call_completed", store.getState().openFile?.key || "", store.getState(), {
      toolArgs: JSON.stringify(args),
      currentSelection: JSON.stringify(Object.keys(store.getState().mirror.sceneGraphSelection)),
      rawToolName: toolName,
      toolName: validatedToolName,
      clientName: clientInfo?.name,
      clientLanguages: args?.clientLanguages,
      clientFrameworks: args?.clientFrameworks,
      ...getMcpSettings(),
    })
    return response
  }
  const resolvedNodes = resolveNodes({
    sceneGraph: store.getState().mirror.sceneGraph,
    selectionNodeIds: Object.keys(store.getState().mirror.sceneGraphSelection),
    toolArgs: validatedArgs,
    allowMultiNode: isMetadataOrCode(validatedArgs.toolName, getFeatureFlags().dt_mcp_get_code_returns_metadata ?? false),
    allowPageNode: isMetadata(validatedArgs.toolName),
  })
  const firstNode = resolvedNodes[0]
  const codeSyntax = store.getState().mirror.appModel.devHandoffCodeLanguage.id
  const codeLanguage = store.getState().mirror.appModel.devHandoffCodeLanguage
  const normalizedLanguage = normalizeCodegenLanguage(codeLanguage)
  const framework = mapPlatformToFramework(normalizedLanguage.id) || "unknown"
  trackToolUsage(validatedArgs.toolName)
  globalPerfTimer.start("mcp.tool_call")
  const [response, codeConnectMapping] = await processToolCall({
    validatedArgs,
    nodes: resolvedNodes,
    codeSyntax,
    sceneGraph: store.getState().mirror.sceneGraph,
    codeConnectSnippetLanguage: framework,
    store,
  })
  globalPerfTimer.stop("mcp.tool_call")
  analyzeToolCallResult({
    store,
    startingNode: firstNode,
    codeSyntax,
    responseSize: JSON.stringify(response).length,
    toolArgs: args,
    toolName: validatedToolName,
    codeConnectMapping: codeConnectMapping.codeConnectMapping ?? {},
  });

  // Track duration
  (function trackDuration(validatedToolName: string, store: Store, durationMs: number): void {
    toolCallCounts[validatedToolName] = (toolCallCounts[validatedToolName] || 0) + 1
    trackDefinedFileEvent("mcp.client_tool_call_duration", store.getState().openFile?.key || "", store.getState(), {
      toolName: validatedToolName,
      durationMs,
      toolCallCount: toolCallCounts[validatedToolName],
      ...getMcpSettings(),
    })
  })(validatedToolName, store, Math.round(performance.now() - startTime))
  return response
}

// Deprecated SSE query function
export function deprecatedSseQuery(): void {
  console.warn("SSE is deprecated, please use localhost/mcp instead")
  atomStoreManager.set(_$$A, true)
  trackDefinedFileEvent("mcp.deprecated_sse_query", debugState.getState().openFile?.key || "", debugState.getState(), {})
}

// Process the actual tool call based on tool name
async function processToolCall({
  validatedArgs,
  nodes,
  codeSyntax,
  sceneGraph,
  codeConnectSnippetLanguage,
  store,
}: {
  validatedArgs: any
  nodes: Node[]
  codeSyntax: string
  sceneGraph: SceneGraph
  codeConnectSnippetLanguage: string
  store: Store
}) {
  try {
    const {
      toolName,
    } = validatedArgs
    const firstNode = nodes[0]
    switch (toolName) {
      case GET_CODE:
        {
          if (atomStoreManager.get(codeOptionsAtom) === "xml") {
            const [[codeConnectMapping], [codebaseSuggestions]] = await getCodeConnectMapping(firstNode, toolName)
            return [generateNodeMarkup({
              node: firstNode,
              includeComponents: true,
              codeConnectMapping,
              codebaseSuggestions,
              loadImageByHash: hash => getImageManager().loadImageByHash(hash),
              configSettings: getMcpSettingsExternal(),
            }), {
              codeConnectMapping,
            }]
          }
          const childCount = countChildNodes(firstNode)
          const isOutputSizeTooLarge = scaleValue(childCount) > DEFAULT_MAX_NODE_COUNT
          if (getFeatureFlags().dt_mcp_get_code_returns_metadata && (isOutputSizeTooLarge || nodes.length > 1)) {
            trackDefinedFileEvent("mcp.get_code_returns_metadata", store.getState().openFile?.key || "", store.getState(), {
              numNodes: childCount,
              isOutputSizeTooLarge,
              isMultiSelect: nodes.length > 1,
              nodesLength: nodes.length,
            })
            return [generateMetadataResponse(nodes, sceneGraph, true, !isOutputSizeTooLarge), {}]
          }
          return await generateCodeFromDesign(firstNode, childCount, codeSyntax, async () => {
            const [[codeConnectMapping], [codebaseSuggestions]] = await getCodeConnectMapping(firstNode, toolName)
            return [codeConnectMapping, codebaseSuggestions]
          }, validatedArgs.dirForAssetWrites)
        }
      case GET_IMAGE:
        return [await exportImageAsBase64(firstNode), {}]
      case GET_METADATA:
        return [generateMetadataResponse(nodes, sceneGraph, false, false), {}]
      case GET_CODE_CONNECT_MAP:
        {
          if (!(await canAccessFullCodeConnectByKey(store.getState().openFile?.key ?? ""))) {
            throw new Error(CODE_CONNECT_PLAN_ERROR)
          }
          const [[codeConnectMapping]] = await getCodeConnectMapping(firstNode, toolName)
          return [{
            content: [{
              type: "text",
              text: JSON.stringify(codeConnectMapping),
            }],
          }, {
            codeConnectMapping,
          }]
        }
      case GET_VARIABLE_DEFS:
        return [{
          content: [{
            type: "text",
            text: JSON.stringify(collectNodeVariablesAndStyles(firstNode, codeSyntax, false)),
          }],
        }, {}]
      case ADD_CODE_CONNECT_LINK:
        return [{
          content: [{
            type: "text",
            text: await linkNodeToCodeConnect({
              node: firstNode,
              sceneGraph: store.getState().mirror.sceneGraph,
              name: validatedArgs.componentName,
              srcPath: validatedArgs.source,
            }),
          }],
        }, {}]
      default:
        throw new Error(`${UNKNOWN_TOOL_ERROR}: ${toolName}`)
    }
  }
  catch (error) {
    const err = error instanceof Error ? error : new Error(String(error))
    if (err.message.includes(CODE_CONNECT_PLAN_ERROR) || reportError(ServiceCategories.DEVELOPER_TOOLS, err, {
      extra: {
        toolName: validatedArgs.toolName,
      },
    }), err.message.includes(UNKNOWN_TOOL_ERROR) || err.message.includes(CODE_CONNECT_PLAN_ERROR) || err.message.includes(NODE_NOT_COMPONENT_ERROR)) {
      throw err
    }
    if (err.message.includes("Code Connect mapping already exists for this node")) {
      throw new Error("Code Connect mapping already exists for this node. If you want to change the mapping, please delete the existing mapping first.")
    }
    throw new Error(`An error occurred while using the tool ${validatedArgs.toolName}`)
  }
}

// Export the functions with original const names pointing to refactored functions
export const f = deprecatedSseQuery
export const r = handleMcpToolCall
