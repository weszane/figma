import { z } from "zod"
import { reportError } from "../905/11"
import { MCP_INTERNAL_GET_PROMPT, MCP_INTERNAL_GET_PROMPTS_LIST, MCP_INTERNAL_GET_RESOURCE, MCP_INTERNAL_GET_RESOURCES_LIST, MCP_INTERNAL_GET_TOOLS } from "../905/106287"
import { ServiceCategories } from "../905/165054"
import { mapPlatformToFramework } from "../905/359509"
import { CX, Kl } from "../905/372596"
import { debugState } from "../905/407919"
import { globalPerfTimer } from "../905/542194"
import { Q } from "../905/577205"
import { getFeatureFlags } from "../905/601108"
import { l as _$$l } from "../905/882689"
import { postUserFlag } from "../905/985254"
import { atomStoreManager } from "../figma_app/27355"
import { getBackingNodeInfo } from "../figma_app/97042"
import { FFileType } from "../figma_app/191312"
import { trackDefinedFileEvent } from "../figma_app/314264"
import { additionalStateAtom1, additionalStateAtom2, codebaseSuggestionsEnabledAtom, codeConnectToolsEnabledAtom, codeOptionsAtom, getMcpSettings, getMcpSettingsExternal, imageOptionsWithMount, mockDirForImageWritesAtom, useTailwindAtom } from "../figma_app/342355"
import { canAccessFullDevMode } from "../figma_app/473493"
import { Kk, nP } from "../figma_app/484865"
import { selectOpenFile, selectOpenFileKey, selectOpenFileLibraryKey } from "../figma_app/516028"
import { fetchDynamicConfig } from "../figma_app/594947"
import { getImageManager } from "../figma_app/624361"
import { XP } from "../figma_app/655139"
import { jb, Lv, oG } from "../figma_app/681951"
import { ADD_CODE_CONNECT_LINK, addCodeConnectLinkTool, clientContextSchema, componentLinkSchema, CREATE_DESIGN_SYSTEM_RULES, createCodeConnectRule, DESIGN_SYSTEM_PROMPT, DESIGN_SYSTEM_RULES_PROMPT, designSystemRulesPromptTool, GENERATE_CODE_PROMPT, GENERATE_CODE_RULE, generateNodeMarkup, GET_CODE, GET_CODE_CONNECT_MAP, GET_CODE_FOR_SELECTION, GET_IMAGE, GET_METADATA, GET_VARIABLE_DEFS, getCodeConnectMapTool, getCodeTool, getCodeWithAssetDirTool, getImageTool, getMetadataTool, getVariableDefsTool, isMetadata, isMetadataOrCode, LINK_CODE_CONNECT_PROMPT, LINK_SELECTION_TO_CODE_CONNECT, mainConfigSchema, nodeContextSchema, nodeContextWithOptionalAssetDirSchema, resolveNodes, SET_CODEGEN_CONFIG, setCodegenConfigTool } from "../figma_app/728005"
import { EditorPreferencesApi } from "../figma_app/740163"
import { uT } from "../figma_app/802241"
import { t2 } from "../figma_app/911720"
import { A as _$$A } from "../figma_app/932979"
import { $w, E4, Z } from "../figma_app/935144"

let E = "Node is not a component or state group, cannot link via Code Connect."
async function x({
  node: e,
  sceneGraph: t,
  name: i,
  srcPath: n,
}) {
  if (e.type !== "SYMBOL" && !e.isStateGroup)
    throw new Error(E)
  let r = debugState.getState()
  let s = selectOpenFileLibraryKey(r)
  let o = selectOpenFileKey(r)
  let {
    backingNodeId,
    backingLibraryKey,
  } = getBackingNodeInfo(e.guid, t, s)
  if (!backingLibraryKey || !o || !backingNodeId || !s)
    throw new Error(`Failed to link node ${e.guid} to Code Connect. Missing backing library key, open file key, or backing node ID. Backing Library Key: ${backingLibraryKey}, Open File Key: ${o}, Backing Node ID: ${backingNodeId}`)
  try {
    await Q.createCodeConnectMap({
      library_key: backingLibraryKey,
      node_id: backingNodeId,
      template: "",
      component_name: i,
      source_path: n,
      status: "connected",
    })
    return `Successfully linked node ${e.guid} to Code Connect with source path ${n} and name ${i}.`
  }
  catch (e) {
    console.error(e)
    reportError(ServiceCategories.DEVELOPER_TOOLS, e, {
      extra: {
        backingLibraryKey,
        openFileKey: o,
        name: i,
        srcPath: n,
      },
    })
    return e
  }
}
function R({
  imageWidth: e,
  imageHeight: t,
  constraint: i,
}) {
  trackDefinedFileEvent("mcp.get_image.constraint_hit", debugState.getState().openFile?.key || "", debugState.getState(), {
    imageWidth: e,
    imageHeight: t,
    constraint: i,
  })
}
async function N(e) {
  let t = (function (e, t) {
    if (!t)
      return null
    let {
      w,
      h,
    } = e.absoluteBoundingBox
    return w <= t && h <= t
      ? null
      : w > t && w >= h
        ? (R({
            imageWidth: w,
            imageHeight: h,
            constraint: t || 0,
          }), {
            type: "CONTENT_WIDTH",
            value: t,
          })
        : h > t && h >= w
          ? (R({
              imageWidth: w,
              imageHeight: h,
              constraint: t,
            }), {
              type: "CONTENT_HEIGHT",
              value: t,
            })
          : null
  }(e, (await fetchDynamicConfig("dt_mcp_image_dimension_resizing_value")).get("constraint", null)))
  let i = await e.loadImagesAndExport([{
    imageType: "PNG",
    suffix: "png",
    ...(t
      ? {
          constraint: t,
        }
      : {}),
  }])
  if (!i)
    throw new Error("Failed to export image")
  let n = new Blob([i], {
    type: "image/png",
  })
  let r = await new Promise((e) => {
    let t = new FileReader()
    t.onloadend = () => e(t.result)
    t.onerror = () => e(null)
    t.readAsDataURL(n)
  })
  if (!r)
    throw new Error("Failed to export image to base64 string")
  let [a, s] = r.split(",")
  return {
    content: [{
      type: "image",
      data: s,
      mimeType: "image/png",
    }],
  }
}
function P(e, t, i, n) {
  return {
    content: [{
      type: "text",
      text: e.map(e => (function e(t, i, n) {
        let r = "  ".repeat(n)
        let a = (function (e) {
          let t = {
            id: e.guid,
            name: e.name.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;"),
            x: e.x,
            y: e.y,
            width: e.absoluteBoundingBox.w,
            height: e.absoluteBoundingBox.h,
          }
          e.visible || (t.hidden = !0)
          return t
        }(t))
        let s = t.type.toLocaleLowerCase().split("_").join("-")
        let o = (function (e) {
          let t = []
          for (let [i, n] of Object.entries(e)) void 0 !== n && t.push(`${i}="${n}"`)
          return t.join(" ")
        }(a))
        if (t.type === "INSTANCE" || t.type === "SYMBOL" || t.isIconLikeContainer || t.isDevModeAsset)
          return `${r}<${s} ${o} />`
        let l = t.childrenGuids.map((t) => {
          let r = i.get(t)
          return r ? e(r, i, n + 1) : null
        }).filter(e => e !== null).join("\n")
        return l.length === 0
          ? `${r}<${s} ${o} />`
          : `${r}<${s} ${o}>
${l}
${r}</${s}>`
      }(e, t, 0))).join("\n"),
    }, {
      type: "text",
      text: i ? n ? "IMPORTANT: The user has selected multiple nodes, so you have received a sparse metadata response. You MUST call get_code on the nodes or their sublayers individually based on their IDs to implement the design." : "IMPORTANT: The design was too large to fit into context with get_code. Instead you have received a sparse metadata response, you MUST call get_code on the IDs of the sublayers to get the full code. Split up the calls to ensure the sublayers do not also exceed the context limit." : "IMPORTANT: After you call this tool, you MUST call get_code if trying to implement the design, since this tool only returns metadata. If you do not call get_code, the agent will not be able to implement the design.",
    }],
  }
}
let M = [GET_CODE, GET_IMAGE, GET_METADATA, GET_CODE_CONNECT_MAP, GET_VARIABLE_DEFS, CREATE_DESIGN_SYSTEM_RULES, ADD_CODE_CONNECT_LINK];
[...M, SET_CODEGEN_CONFIG]
let j = z.discriminatedUnion("toolName", [z.object({
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
let B = "[MCP server] Unknown tool name"
let V = "Code Connect is only available on the Organization and Enterprise plans"
let G = {}
export async function $$z1(e, t, i, d) {
  let _ = performance.now()
  if ((function (e) {
    if (e.getState().selectedView.view !== "fullscreen")
      throw new Error("The MCP server is only available if your active tab is a Figma design file")
    if (!getFeatureFlags().dt_my_cool_plugin || !EditorPreferencesApi().enableCodegenMcpServer)
      throw new Error("The MCP server is not enabled for this user")
  }(i)), i.dispatch(postUserFlag({
    dev_mode_mcp_has_used_a_tool: !0,
  })), e === MCP_INTERNAL_GET_TOOLS) {
    let e = {
      tools: [atomStoreManager.get(imageOptionsWithMount) === "write-to-disk" ? getCodeWithAssetDirTool : getCodeTool, getVariableDefsTool, getCodeConnectMapTool, getImageTool, ...(getFeatureFlags().dt_mcp_get_metadata ? [getMetadataTool] : []), ...(getFeatureFlags().dt_my_cool_plugin_internal ? [setCodegenConfigTool] : []), ...(getFeatureFlags().dt_mcp_link_node_via_code_connect ? [addCodeConnectLinkTool] : []), ...(getFeatureFlags().dt_mcp_design_system_rules_tool ? [designSystemRulesPromptTool] : [])],
    }
    trackDefinedFileEvent("mcp.get_tools_call", i.getState().openFile?.key || "", i.getState(), {
      availableTools: JSON.stringify(e.tools.map(e => e.name)),
      clientName: d?.name,
    })
    return e
  }
  let b = j.safeParse({
    toolName: e,
    ...t,
  })
  if (!b.success) {
    let e = new Error(`[MCP server] Invalid tool arguments: ${b.error.message}`)
    reportError(ServiceCategories.DEVELOPER_TOOLS, e)
    return e
  }
  let v = b.data
  if (v.toolName === MCP_INTERNAL_GET_RESOURCES_LIST) {
    return v.isTemplates
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
  if (v.toolName === MCP_INTERNAL_GET_PROMPTS_LIST) {
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
              required: !1,
              description: 'Optional, the ID of the node to generate an image for. When provided, this should be a valid node ID in the Figma document in, eg. "123:456".',
            }, {
              name: "source",
              type: "string",
              required: !0,
              description: "The source of the code component to link to. This should be a valid path or URL to the code component in your codebase.",
            }, {
              name: "componentName",
              type: "string",
              required: !0,
              description: "The name of the code component to link to. This should match the name of the component in your codebase.",
            }],
          }]
        : [])],
    }
  }
  if (v.toolName === SET_CODEGEN_CONFIG && getFeatureFlags().dt_my_cool_plugin_internal) {
    let {
      config,
    } = v
    if (!config) {
      let e = new Error("[MCP server] No config provided")
      reportError(ServiceCategories.DEVELOPER_TOOLS, e)
      return e
    }
    atomStoreManager.set(codeOptionsAtom, config.codeOption)
    atomStoreManager.set(codeConnectToolsEnabledAtom, config.codeConnectToolsEnabled)
    atomStoreManager.set(codebaseSuggestionsEnabledAtom, config.codebaseSuggestionsEnabled)
    atomStoreManager.set(imageOptionsWithMount, config.markupImageOptions)
    atomStoreManager.set(additionalStateAtom1, config.mockCodeConnect)
    atomStoreManager.set(additionalStateAtom2, config.mockCodebaseSuggestions)
    atomStoreManager.set(useTailwindAtom, config.useTailwind)
    atomStoreManager.set(mockDirForImageWritesAtom, config.mockDirForImageWritesToDisk)
    return {
      content: [{
        type: "text",
        text: `Codegen config set to: ${JSON.stringify(config)}`,
      }],
    }
  }
  if (uT(i.getState()))
    throw new Error("The MCP server has been disabled by admin")
  if (!(function (e) {
    let t = e.getState()
    let i = selectOpenFile({
      openFile: t.openFile ?? null,
    })
    return i?.editorType === FFileType.DESIGN
  }(i))) {
    throw new Error("The MCP server tools are only available for design files.")
  }
  if (!(function (e) {
    let t = e.getState()
    return canAccessFullDevMode(t)
  }(i))) {
    throw new Error("The user doesn't have access to Figma Dev Mode which is required to use this, to get access they need to be subscribed to a paid Dev seat in Figma")
  }
  if (v.toolName === MCP_INTERNAL_GET_RESOURCE) {
    let {
      uri,
    } = v
    return (function (e) {
      if (!getFeatureFlags().dt_mcp_auto_resources)
        throw new Error("Resources not supported")
      if (e === "autocomplete://selection") {
        return {
          contents: [{
            uri: e,
            text: atomStoreManager.get(jb) ?? "",
          }],
        }
      }
      if (e === "autocomplete://tlf") {
        return {
          contents: [{
            uri: e,
            text: atomStoreManager.get(Lv) ?? "",
          }],
        }
      }
      if (e === "autocomplete://page") {
        return {
          contents: [{
            uri: e,
            text: atomStoreManager.get(oG) ?? "",
          }],
        }
      }
      throw new Error("Unknown resource URI")
    }(uri))
  }
  if (v.toolName === MCP_INTERNAL_GET_PROMPT) {
    let {
      promptName,
      args,
    } = v
    return (function (e, t) {
      if (e === GET_CODE_FOR_SELECTION) {
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
      if (e === CREATE_DESIGN_SYSTEM_RULES) {
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
      if (e === LINK_SELECTION_TO_CODE_CONNECT) {
        return {
          description: LINK_CODE_CONNECT_PROMPT,
          messages: [{
            role: "user",
            content: {
              type: "text",
              text: createCodeConnectRule({
                nodeId: t?.nodeId,
                source: t?.source,
                componentName: t?.componentName,
              }),
            },
          }],
        }
      }
      throw new Error(`Unknown prompt: ${e} with args: ${JSON.stringify(t)}`)
    }(promptName, args))
  }
  let I = M.includes(e) ? e : "unknown"
  if (trackDefinedFileEvent("mcp.client_tool_call", i.getState().openFile?.key || "", i.getState(), {
    toolArgs: JSON.stringify(t),
    currentSelection: JSON.stringify(Object.keys(i.getState().mirror.sceneGraphSelection)),
    rawToolName: e,
    toolName: I,
    clientName: d?.name,
    clientLanguages: t?.clientLanguages,
    clientFrameworks: t?.clientFrameworks,
    ...getMcpSettings(),
  }), v.toolName === CREATE_DESIGN_SYSTEM_RULES) {
    let r = {
      content: [{
        type: "text",
        text: DESIGN_SYSTEM_PROMPT,
      }],
    }
    trackDefinedFileEvent("mcp.client_tool_call_completed", i.getState().openFile?.key || "", i.getState(), {
      toolArgs: JSON.stringify(t),
      currentSelection: JSON.stringify(Object.keys(i.getState().mirror.sceneGraphSelection)),
      rawToolName: e,
      toolName: I,
      clientName: d?.name,
      clientLanguages: t?.clientLanguages,
      clientFrameworks: t?.clientFrameworks,
      ...getMcpSettings(),
    })
    return r
  }
  let E = resolveNodes({
    sceneGraph: i.getState().mirror.sceneGraph,
    selectionNodeIds: Object.keys(i.getState().mirror.sceneGraphSelection),
    toolArgs: v,
    allowMultiNode: isMetadataOrCode(v.toolName, getFeatureFlags().dt_mcp_get_code_returns_metadata ?? !1),
    allowPageNode: isMetadata(v.toolName),
  })
  let x = E[0]
  let w = i.getState().mirror.appModel.devHandoffCodeLanguage.id
  let C = i.getState().mirror.appModel.devHandoffCodeLanguage
  let T = XP(C)
  let k = mapPlatformToFramework(T.id) || "unknown"
  CX(v.toolName)
  globalPerfTimer.start("mcp.tool_call")
  let [R, N] = await W({
    validatedArgs: v,
    nodes: E,
    codeSyntax: w,
    sceneGraph: i.getState().mirror.sceneGraph,
    store: i,
    codeConnectSnippetLanguage: k,
  })
  globalPerfTimer.stop("mcp.tool_call")
  Kl({
    store: i,
    startingNode: x,
    codeSyntax: w,
    responseSize: JSON.stringify(R).length,
    toolArgs: t,
    toolName: I,
    codeConnectMapping: N.codeConnectMapping ?? {},
  });
  (function ({
    validatedToolName: e,
    store: t,
    durationMs: i,
  }) {
    G[e] = (G[e] || 0) + 1
    trackDefinedFileEvent("mcp.client_tool_call_duration", t.getState().openFile?.key || "", t.getState(), {
      toolName: e,
      durationMs: i,
      toolCallCount: G[e],
      ...getMcpSettings(),
    })
  })({
    validatedToolName: I,
    store: i,
    durationMs: Math.round(performance.now() - _),
  })
  return R
}
export function $$H0() {
  console.warn("SSE is deprecated, please use localhost/mcp instead")
  atomStoreManager.set(_$$A, !0)
  trackDefinedFileEvent("mcp.deprecated_sse_query", debugState.getState().openFile?.key || "", debugState.getState(), {})
}
async function W({
  validatedArgs: e,
  nodes: t,
  codeSyntax: i,
  sceneGraph: r,
  codeConnectSnippetLanguage: l,
  store: d,
}) {
  try {
    let {
      toolName,
    } = e
    let l = t[0]
    switch (toolName) {
      case GET_CODE:
      {
        if (atomStoreManager.get(codeOptionsAtom) === "xml") {
          let [[e], [t]] = await nP(l, toolName)
          return [generateNodeMarkup({
            node: l,
            includeComponents: !0,
            codeConnectMapping: e,
            codebaseSuggestions: t,
            loadImageByHash: e => getImageManager().loadImageByHash(e),
            configSettings: getMcpSettingsExternal(),
          }), {
            codeConnectMapping: e,
          }]
        }
        atomStoreManager.get(codeOptionsAtom)
        let c = $w(l)
        let u = Z(c) > E4
        if (getFeatureFlags().dt_mcp_get_code_returns_metadata && (u || t.length > 1)) {
          trackDefinedFileEvent("mcp.get_code_returns_metadata", d.getState().openFile?.key || "", d.getState(), {
            numNodes: c,
            isOutputSizeTooLarge: u,
            isMultiSelect: t.length > 1,
            nodesLength: t.length,
          })
          return [P(t, r, !0, !u), {}]
        }
        return await t2(l, c, i, async () => {
          let [[e], [t]] = await nP(l, toolName)
          return [e, t]
        }, e.dirForAssetWrites)
      }
      case GET_IMAGE:
        return [await N(l), {}]
      case GET_METADATA:
        return [P(t, r, !1, !1), {}]
      case GET_CODE_CONNECT_MAP:
      {
        if (!(await Kk(d.getState().openFile?.key ?? "")))
          throw new Error(V)
        let [[e]] = await nP(l, toolName)
        return [{
          content: [{
            type: "text",
            text: JSON.stringify(e),
          }],
        }, {
          codeConnectMapping: e,
        }]
      }
      case GET_VARIABLE_DEFS:
        return [{
          content: [{
            type: "text",
            text: JSON.stringify(_$$l(l, i, !1)),
          }],
        }, {}]
      case ADD_CODE_CONNECT_LINK:
        return [{
          content: [{
            type: "text",
            text: await x({
              node: l,
              sceneGraph: d.getState().mirror.sceneGraph,
              name: e.componentName,
              srcPath: e.source,
            }),
          }],
        }, {}]
      default:
        throw new Error(`${B}: ${toolName}`)
    }
  }
  catch (i) {
    let t = i instanceof Error ? i : new Error(String(i))
    if (t.message.includes(V) || reportError(ServiceCategories.DEVELOPER_TOOLS, t, {
      extra: {
        toolName: e.toolName,
      },
    }), t.message.includes(B) || t.message.includes(V) || t.message.includes(E)) {
      throw t
    }
    if (t.message.includes("Code Connect mapping already exists for this node"))
      throw new Error("Code Connect mapping already exists for this node. If you want to change the mapping, please delete the existing mapping first.")
    throw new Error(`An error occurred while using the tool ${e.toolName}`)
  }
}
export const f = $$H0
export const r = $$z1
