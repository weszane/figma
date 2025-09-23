import { sj, uf, C as _$$C, A$, o6, IO, JO, NE, Ff, ai, Gg, gG, LY, eZ, CM, q, If, Qn, Y9, Zj, rV, sl, xy, Ob, oA, fL, DA, g5, Dz, CN, xe, QV, Gy, k7, df } from "../figma_app/728005";
import { MCP_INTERNAL_GET_RESOURCES_LIST, MCP_INTERNAL_GET_PROMPTS_LIST, MCP_INTERNAL_GET_RESOURCE, MCP_INTERNAL_GET_PROMPT, MCP_INTERNAL_GET_TOOLS } from "../905/106287";
import { ServiceCategories } from "../905/165054";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { globalPerfTimer } from "../905/542194";
import { debugState } from "../905/407919";
import { reportError } from "../905/11";
import { XP } from "../figma_app/655139";
import { canAccessFullDevMode } from "../figma_app/473493";
import { mapPlatformToFramework } from "../905/359509";
import { postUserFlag } from "../905/985254";
import { trackDefinedFileEvent } from "../figma_app/314264";
import { EditorPreferencesApi } from "../figma_app/740163";
import { getImageManager } from "../figma_app/624361";
import { selectOpenFileLibraryKey, selectOpenFileKey, selectOpenFile } from "../figma_app/516028";
import { FFileType } from "../figma_app/191312";
import { A as _$$A } from "../figma_app/932979";
import { Q } from "../905/577205";
import { HX } from "../figma_app/97042";
import { pe, Kx, tz, SV, rx, DR, lk, f as _$$f, Nt, iy } from "../figma_app/342355";
import { $w, Z, E4 } from "../figma_app/935144";
import { nP, Kk } from "../figma_app/484865";
import { t2 } from "../figma_app/911720";
import { fetchDynamicConfig } from "../figma_app/594947";
import { CX, Kl } from "../905/372596";
import { jb, Lv, oG } from "../figma_app/681951";
import { uT } from "../figma_app/802241";
import { z } from "../905/239603";
import { l as _$$l } from "../905/882689";
let E = "Node is not a component or state group, cannot link via Code Connect.";
async function x({
  node: e,
  sceneGraph: t,
  name: i,
  srcPath: n
}) {
  if ("SYMBOL" !== e.type && !e.isStateGroup) throw Error(E);
  let r = debugState.getState();
  let s = selectOpenFileLibraryKey(r);
  let o = selectOpenFileKey(r);
  let {
    backingNodeId,
    backingLibraryKey
  } = HX(e.guid, t, s);
  if (!backingLibraryKey || !o || !backingNodeId || !s) throw Error(`Failed to link node ${e.guid} to Code Connect. Missing backing library key, open file key, or backing node ID. Backing Library Key: ${backingLibraryKey}, Open File Key: ${o}, Backing Node ID: ${backingNodeId}`);
  try {
    await Q.createCodeConnectMap({
      library_key: backingLibraryKey,
      node_id: backingNodeId,
      template: "",
      component_name: i,
      source_path: n,
      status: "connected"
    });
    return `Successfully linked node ${e.guid} to Code Connect with source path ${n} and name ${i}.`;
  } catch (e) {
    console.error(e);
    reportError(ServiceCategories.DEVELOPER_TOOLS, e, {
      extra: {
        backingLibraryKey,
        openFileKey: o,
        name: i,
        srcPath: n
      }
    });
    return e;
  }
}
function R({
  imageWidth: e,
  imageHeight: t,
  constraint: i
}) {
  trackDefinedFileEvent("mcp.get_image.constraint_hit", debugState.getState().openFile?.key || "", debugState.getState(), {
    imageWidth: e,
    imageHeight: t,
    constraint: i
  });
}
async function N(e) {
  let t = function (e, t) {
    if (!t) return null;
    let {
      w,
      h
    } = e.absoluteBoundingBox;
    return w <= t && h <= t ? null : w > t && w >= h ? (R({
      imageWidth: w,
      imageHeight: h,
      constraint: t || 0
    }), {
      type: "CONTENT_WIDTH",
      value: t
    }) : h > t && h >= w ? (R({
      imageWidth: w,
      imageHeight: h,
      constraint: t
    }), {
      type: "CONTENT_HEIGHT",
      value: t
    }) : null;
  }(e, (await fetchDynamicConfig("dt_mcp_image_dimension_resizing_value")).get("constraint", null));
  let i = await e.loadImagesAndExport([{
    imageType: "PNG",
    suffix: "png",
    ...(t ? {
      constraint: t
    } : {})
  }]);
  if (!i) throw Error("Failed to export image");
  let n = new Blob([i], {
    type: "image/png"
  });
  let r = await new Promise(e => {
    let t = new FileReader();
    t.onloadend = () => e(t.result);
    t.onerror = () => e(null);
    t.readAsDataURL(n);
  });
  if (!r) throw Error("Failed to export image to base64 string");
  let [a, s] = r.split(",");
  return {
    content: [{
      type: "image",
      data: s,
      mimeType: "image/png"
    }]
  };
}
function P(e, t, i, n) {
  return {
    content: [{
      type: "text",
      text: e.map(e => function e(t, i, n) {
        let r = "  ".repeat(n);
        let a = function (e) {
          let t = {
            id: e.guid,
            name: e.name.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;"),
            x: e.x,
            y: e.y,
            width: e.absoluteBoundingBox.w,
            height: e.absoluteBoundingBox.h
          };
          e.visible || (t.hidden = !0);
          return t;
        }(t);
        let s = t.type.toLocaleLowerCase().split("_").join("-");
        let o = function (e) {
          let t = [];
          for (let [i, n] of Object.entries(e)) void 0 !== n && t.push(`${i}="${n}"`);
          return t.join(" ");
        }(a);
        if ("INSTANCE" === t.type || "SYMBOL" === t.type || t.isIconLikeContainer || t.isDevModeAsset) return `${r}<${s} ${o} />`;
        let l = t.childrenGuids.map(t => {
          let r = i.get(t);
          return r ? e(r, i, n + 1) : null;
        }).filter(e => null !== e).join("\n");
        return 0 === l.length ? `${r}<${s} ${o} />` : `${r}<${s} ${o}>
${l}
${r}</${s}>`;
      }(e, t, 0)).join("\n")
    }, {
      type: "text",
      text: i ? n ? "IMPORTANT: The user has selected multiple nodes, so you have received a sparse metadata response. You MUST call get_code on the nodes or their sublayers individually based on their IDs to implement the design." : "IMPORTANT: The design was too large to fit into context with get_code. Instead you have received a sparse metadata response, you MUST call get_code on the IDs of the sublayers to get the full code. Split up the calls to ensure the sublayers do not also exceed the context limit." : "IMPORTANT: After you call this tool, you MUST call get_code if trying to implement the design, since this tool only returns metadata. If you do not call get_code, the agent will not be able to implement the design."
    }]
  };
}
let M = [sj, uf, _$$C, A$, o6, IO, JO];
[...M, NE];
let j = z.discriminatedUnion("toolName", [z.object({
  toolName: z.literal(sj),
  ...Ff.shape
}), z.object({
  toolName: z.literal(uf),
  ...ai.shape
}), z.object({
  toolName: z.literal(_$$C),
  ...ai.shape
}), z.object({
  toolName: z.literal(A$),
  ...ai.shape
}), z.object({
  toolName: z.literal(o6),
  ...ai.shape
}), z.object({
  toolName: z.literal(JO),
  ...Gg.shape
}), z.object({
  toolName: z.literal(NE),
  ...gG.shape
}), z.object({
  toolName: z.literal(IO),
  ...LY.shape
}), z.object({
  toolName: z.literal(MCP_INTERNAL_GET_RESOURCES_LIST),
  isTemplates: z.boolean().describe("Whether to get resources with templates or not")
}), z.object({
  toolName: z.literal(MCP_INTERNAL_GET_PROMPTS_LIST)
}), z.object({
  toolName: z.literal(MCP_INTERNAL_GET_RESOURCE),
  uri: z.string().describe("The URI of the resource to get")
}), z.object({
  toolName: z.literal(MCP_INTERNAL_GET_PROMPT),
  promptName: z.string().describe("The name of the prompt to get"),
  args: z.record(z.string(), z.unknown()).optional().describe("The arguments to pass to the prompt")
})]);
let B = "[MCP server] Unknown tool name";
let V = "Code Connect is only available on the Organization and Enterprise plans";
let G = {};
export async function $$z1(e, t, i, d) {
  let _ = performance.now();
  if (function (e) {
    if ("fullscreen" !== e.getState().selectedView.view) throw Error("The MCP server is only available if your active tab is a Figma design file");
    if (!getFeatureFlags().dt_my_cool_plugin || !EditorPreferencesApi().enableCodegenMcpServer) throw Error("The MCP server is not enabled for this user");
  }(i), i.dispatch(postUserFlag({
    dev_mode_mcp_has_used_a_tool: !0
  })), e === MCP_INTERNAL_GET_TOOLS) {
    let e = {
      tools: ["write-to-disk" === atomStoreManager.get(pe) ? eZ : CM, q, If, Qn, ...(getFeatureFlags().dt_mcp_get_metadata ? [Y9] : []), ...(getFeatureFlags().dt_my_cool_plugin_internal ? [Zj] : []), ...(getFeatureFlags().dt_mcp_link_node_via_code_connect ? [rV] : []), ...(getFeatureFlags().dt_mcp_design_system_rules_tool ? [sl] : [])]
    };
    trackDefinedFileEvent("mcp.get_tools_call", i.getState().openFile?.key || "", i.getState(), {
      availableTools: JSON.stringify(e.tools.map(e => e.name)),
      clientName: d?.name
    });
    return e;
  }
  let b = j.safeParse({
    toolName: e,
    ...t
  });
  if (!b.success) {
    let e = Error(`[MCP server] Invalid tool arguments: ${b.error.message}`);
    reportError(ServiceCategories.DEVELOPER_TOOLS, e);
    return e;
  }
  let v = b.data;
  if (v.toolName === MCP_INTERNAL_GET_RESOURCES_LIST) return v.isTemplates ? {
    resourceTemplates: []
  } : getFeatureFlags().dt_mcp_auto_resources ? {
    resources: [{
      uri: "autocomplete://selection",
      name: "Selection Autocomplete code"
    }, {
      uri: "autocomplete://tlf",
      name: "Top Level Frame Autocomplete code"
    }, {
      uri: "autocomplete://page",
      name: "Current Page Autocomplete code"
    }]
  } : {
    resources: []
  };
  if (v.toolName === MCP_INTERNAL_GET_PROMPTS_LIST) return {
    prompts: [{
      name: xy,
      description: Ob
    }, {
      name: oA,
      description: fL
    }, ...(getFeatureFlags().dt_mcp_link_node_via_code_connect ? [{
      name: DA,
      description: g5,
      arguments: [{
        name: "nodeId",
        type: "string",
        required: !1,
        description: 'Optional, the ID of the node to generate an image for. When provided, this should be a valid node ID in the Figma document in, eg. "123:456".'
      }, {
        name: "source",
        type: "string",
        required: !0,
        description: "The source of the code component to link to. This should be a valid path or URL to the code component in your codebase."
      }, {
        name: "componentName",
        type: "string",
        required: !0,
        description: "The name of the code component to link to. This should match the name of the component in your codebase."
      }]
    }] : [])]
  };
  if (v.toolName === NE && getFeatureFlags().dt_my_cool_plugin_internal) {
    let {
      config
    } = v;
    if (!config) {
      let e = Error("[MCP server] No config provided");
      reportError(ServiceCategories.DEVELOPER_TOOLS, e);
      return e;
    }
    atomStoreManager.set(Kx, config.codeOption);
    atomStoreManager.set(tz, config.codeConnectToolsEnabled);
    atomStoreManager.set(SV, config.codebaseSuggestionsEnabled);
    atomStoreManager.set(pe, config.markupImageOptions);
    atomStoreManager.set(rx, config.mockCodeConnect);
    atomStoreManager.set(DR, config.mockCodebaseSuggestions);
    atomStoreManager.set(lk, config.useTailwind);
    atomStoreManager.set(_$$f, config.mockDirForImageWritesToDisk);
    return {
      content: [{
        type: "text",
        text: `Codegen config set to: ${JSON.stringify(config)}`
      }]
    };
  }
  if (uT(i.getState())) throw Error("The MCP server has been disabled by admin");
  if (!function (e) {
    let t = e.getState();
    let i = selectOpenFile({
      openFile: t.openFile ?? null
    });
    return i?.editorType === FFileType.DESIGN;
  }(i)) throw Error("The MCP server tools are only available for design files.");
  if (!function (e) {
    let t = e.getState();
    return canAccessFullDevMode(t);
  }(i)) throw Error("The user doesn't have access to Figma Dev Mode which is required to use this, to get access they need to be subscribed to a paid Dev seat in Figma");
  if (v.toolName === MCP_INTERNAL_GET_RESOURCE) {
    let {
      uri
    } = v;
    return function (e) {
      if (!getFeatureFlags().dt_mcp_auto_resources) throw Error("Resources not supported");
      if ("autocomplete://selection" === e) return {
        contents: [{
          uri: e,
          text: atomStoreManager.get(jb) ?? ""
        }]
      };
      if ("autocomplete://tlf" === e) return {
        contents: [{
          uri: e,
          text: atomStoreManager.get(Lv) ?? ""
        }]
      };
      if ("autocomplete://page" === e) return {
        contents: [{
          uri: e,
          text: atomStoreManager.get(oG) ?? ""
        }]
      };
      throw Error("Unknown resource URI");
    }(uri);
  }
  if (v.toolName === MCP_INTERNAL_GET_PROMPT) {
    let {
      promptName,
      args
    } = v;
    return function (e, t) {
      if (e === xy) return {
        description: Ob,
        messages: [{
          role: "user",
          content: {
            type: "text",
            text: Dz
          }
        }]
      };
      if (e === oA) return {
        description: fL,
        messages: [{
          role: "user",
          content: {
            type: "text",
            text: CN
          }
        }]
      };
      if (e === DA) return {
        description: g5,
        messages: [{
          role: "user",
          content: {
            type: "text",
            text: xe({
              nodeId: t?.nodeId,
              source: t?.source,
              componentName: t?.componentName
            })
          }
        }]
      };
      throw Error(`Unknown prompt: ${e} with args: ${JSON.stringify(t)}`);
    }(promptName, args);
  }
  let I = M.includes(e) ? e : "unknown";
  if (trackDefinedFileEvent("mcp.client_tool_call", i.getState().openFile?.key || "", i.getState(), {
    toolArgs: JSON.stringify(t),
    currentSelection: JSON.stringify(Object.keys(i.getState().mirror.sceneGraphSelection)),
    rawToolName: e,
    toolName: I,
    clientName: d?.name,
    clientLanguages: t?.clientLanguages,
    clientFrameworks: t?.clientFrameworks,
    ...Nt()
  }), v.toolName === IO) {
    let r = {
      content: [{
        type: "text",
        text: CN
      }]
    };
    trackDefinedFileEvent("mcp.client_tool_call_completed", i.getState().openFile?.key || "", i.getState(), {
      toolArgs: JSON.stringify(t),
      currentSelection: JSON.stringify(Object.keys(i.getState().mirror.sceneGraphSelection)),
      rawToolName: e,
      toolName: I,
      clientName: d?.name,
      clientLanguages: t?.clientLanguages,
      clientFrameworks: t?.clientFrameworks,
      ...Nt()
    });
    return r;
  }
  let E = QV({
    sceneGraph: i.getState().mirror.sceneGraph,
    selectionNodeIds: Object.keys(i.getState().mirror.sceneGraphSelection),
    toolArgs: v,
    allowMultiNode: Gy(v.toolName, getFeatureFlags().dt_mcp_get_code_returns_metadata ?? !1),
    allowPageNode: k7(v.toolName)
  });
  let x = E[0];
  let w = i.getState().mirror.appModel.devHandoffCodeLanguage.id;
  let C = i.getState().mirror.appModel.devHandoffCodeLanguage;
  let T = XP(C);
  let k = mapPlatformToFramework(T.id) || "unknown";
  CX(v.toolName);
  globalPerfTimer.start("mcp.tool_call");
  let [R, N] = await W({
    validatedArgs: v,
    nodes: E,
    codeSyntax: w,
    sceneGraph: i.getState().mirror.sceneGraph,
    store: i,
    codeConnectSnippetLanguage: k
  });
  globalPerfTimer.stop("mcp.tool_call");
  Kl({
    store: i,
    startingNode: x,
    codeSyntax: w,
    responseSize: JSON.stringify(R).length,
    toolArgs: t,
    toolName: I,
    codeConnectMapping: N.codeConnectMapping ?? {}
  });
  (function ({
    validatedToolName: e,
    store: t,
    durationMs: i
  }) {
    G[e] = (G[e] || 0) + 1;
    trackDefinedFileEvent("mcp.client_tool_call_duration", t.getState().openFile?.key || "", t.getState(), {
      toolName: e,
      durationMs: i,
      toolCallCount: G[e],
      ...Nt()
    });
  })({
    validatedToolName: I,
    store: i,
    durationMs: Math.round(performance.now() - _)
  });
  return R;
}
export function $$H0() {
  console.warn("SSE is deprecated, please use localhost/mcp instead");
  atomStoreManager.set(_$$A, !0);
  trackDefinedFileEvent("mcp.deprecated_sse_query", debugState.getState().openFile?.key || "", debugState.getState(), {});
}
async function W({
  validatedArgs: e,
  nodes: t,
  codeSyntax: i,
  sceneGraph: r,
  codeConnectSnippetLanguage: l,
  store: d
}) {
  try {
    let {
      toolName
    } = e;
    let l = t[0];
    switch (toolName) {
      case sj:
        {
          if ("xml" === atomStoreManager.get(Kx)) {
            let [[e], [t]] = await nP(l, toolName);
            return [df({
              node: l,
              includeComponents: !0,
              codeConnectMapping: e,
              codebaseSuggestions: t,
              loadImageByHash: e => getImageManager().loadImageByHash(e),
              configSettings: iy()
            }), {
              codeConnectMapping: e
            }];
          }
          atomStoreManager.get(Kx);
          let c = $w(l);
          let u = Z(c) > E4;
          if (getFeatureFlags().dt_mcp_get_code_returns_metadata && (u || t.length > 1)) {
            trackDefinedFileEvent("mcp.get_code_returns_metadata", d.getState().openFile?.key || "", d.getState(), {
              numNodes: c,
              isOutputSizeTooLarge: u,
              isMultiSelect: t.length > 1,
              nodesLength: t.length
            });
            return [P(t, r, !0, !u), {}];
          }
          return await t2(l, c, i, async () => {
            let [[e], [t]] = await nP(l, toolName);
            return [e, t];
          }, e.dirForAssetWrites);
        }
      case uf:
        return [await N(l), {}];
      case _$$C:
        return [P(t, r, !1, !1), {}];
      case A$:
        {
          if (!(await Kk(d.getState().openFile?.key ?? ""))) throw Error(V);
          let [[e]] = await nP(l, toolName);
          return [{
            content: [{
              type: "text",
              text: JSON.stringify(e)
            }]
          }, {
            codeConnectMapping: e
          }];
        }
      case o6:
        return [{
          content: [{
            type: "text",
            text: JSON.stringify(_$$l(l, i, !1))
          }]
        }, {}];
      case JO:
        return [{
          content: [{
            type: "text",
            text: await x({
              node: l,
              sceneGraph: d.getState().mirror.sceneGraph,
              name: e.componentName,
              srcPath: e.source
            })
          }]
        }, {}];
      default:
        throw Error(`${B}: ${toolName}`);
    }
  } catch (i) {
    let t = i instanceof Error ? i : Error(String(i));
    if (t.message.includes(V) || reportError(ServiceCategories.DEVELOPER_TOOLS, t, {
      extra: {
        toolName: e.toolName
      }
    }), t.message.includes(B) || t.message.includes(V) || t.message.includes(E)) throw t;
    if (t.message.includes("Code Connect mapping already exists for this node")) throw Error("Code Connect mapping already exists for this node. If you want to change the mapping, please delete the existing mapping first.");
    throw Error(`An error occurred while using the tool ${e.toolName}`);
  }
}
export const f = $$H0;
export const r = $$z1;
